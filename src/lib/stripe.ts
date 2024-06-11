import Stripe from "stripe"
export const stripe =new Stripe(process.env.STRIPE_SECRETE_KEY ?? '',{apiVersion:"2024-06-11",typescript:true,})
