import Stripe from 'stripe';

const stripe = new Stripe(process.env.SRIPTE_KEY); 

const Payment = async (req, res) => {
    try {
        const payment = await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'inr',
        });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { Payment };
