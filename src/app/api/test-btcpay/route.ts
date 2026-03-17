import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_BTCPAY_URL?.replace(/\/$/, '');
    const apiKey = process.env.NEXT_PUBLIC_BTCPAY_API_KEY;

    if (!url || !apiKey) {
      return NextResponse.json({ success: false, message: 'Missing BTCPay URL or API key' }, { status: 400 });
    }

    const response = await fetch(`${url}/api/v1/stores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ success: true, stores: data });
    } else {
      const errorText = await response.text().catch(() => 'Unknown error');
      return NextResponse.json({ success: false, message: `HTTP ${response.status}: ${errorText}` }, { status: response.status });
    }
  } catch (error: any) {
    console.error('BTCPay test error:', error);
    return NextResponse.json({ success: false, message: error.message || 'Connection failed' }, { status: 500 });
  }
}
