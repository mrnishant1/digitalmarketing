import axios from "axios";
import { NextResponse } from "next/server";

export async function generateAccessToken() {
  const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // change to live when ready
  const CLIENT_ID = "AZG0vhCeY3oA1kDKyTtg7ZpWNGkL9Za1OLvJcrIFbgtTWmWzWM1razabzR_wd0VFOfXiHc21zp8s9KgS";
  const SECRET = process.env.PAYPAL_CLIENT_SECRET;
  if (!CLIENT_ID || !SECRET) {
    console.log("Client Id or secret missing ");
    return;
  }
  const res = await axios.post(
    `${PAYPAL_API}/v1/oauth2/token`,
    "grant_type=client_credentials",
    { auth: { username: CLIENT_ID!, password: SECRET! } }
  );
  return res.data.access_token;
}


export async function POST(req: Request) {
  const plan = {
    "Micro Pack": 4,
    "Value Pack": 15,
    "Bulk Pack": 25,
  };
  try {
  // const 
  // console.log(req.json());
  const { title } = await req.json();
  console.log(title+ " title is here in create order -----------------");
  if (typeof title !== "string" || !(title in plan)) {
    return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
  }

  const token = await generateAccessToken();
  console.log("token generated "+ token);

  const order = await axios.post(
    `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
    {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            // PayPal requires the money value as a string, normally with 2 decimals
            value:"10"
            //  (plan[title as keyof typeof plan] as number).toFixed(2).toString(),
          },
        },
      ],
    },
    { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } }
  );

  return NextResponse.json({
    orderID: order.data.id,
    status: 200,
  });
  } catch (error) {
    return NextResponse.json({
      error:"Failed to create order"+ error
    })
  }
}

