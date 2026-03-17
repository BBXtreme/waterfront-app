import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return NextResponse.json({ success: false, message: 'Missing Stripe secret key' }, { status: 400 });
    }

    // Test Stripe API by listing payment methods (requires Stripe SDK)
    // Note: In production, install stripe and use it properly
    const response = await fetch('https://api.stripe.com/v1/payment_methods', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Stripe API accessible' });
    } else {
      const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
      return NextResponse.json({ success: false, message: errorData.error.message }, { status: response.status });
    }
  } catch (error: any) {
    console.error('Stripe test error:', error);
    return NextResponse.json({ success: false, message: error.message || 'Connection failed' }, { status: 500 });
  }
}
