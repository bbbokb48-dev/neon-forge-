const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items } = req.body;

    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }));

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    if (total < 79) {
      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'Frais de port' },
          unit_amount: 590,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'https://neon-forge-kdty.vercel.app/success.html',
      cancel_url: 'https://neon-forge-kdty.vercel.app/cart.html',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
