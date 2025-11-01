import axios from "axios";
import { NextResponse } from "next/server";
import { generateAccessToken } from "../create-order/route";

export async function POST(req: Request) {
  console.log("capture got hit");
  try {
    // const body = await req.json();
    const { orderID } = await req.json()

    if (!orderID || typeof orderID !== "string") {
      return NextResponse.json({ error: "orderID is required" }, { status: 400 });
    }

    const PAYPAL_API = "https://api-m.sandbox.paypal.com";
    const token = await generateAccessToken();
    console.log(token)

    if (!token) {
      return NextResponse.json({ error: "PayPal token not available" }, { status: 500 });
    }

    const capture = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {},
      { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } }
    );

    return NextResponse.json({ data: capture.data }, { status: 200 });
  } catch (err: any) {
    console.error("capture-order error:", err?.response?.data ?? err.message ?? err);
    const message = err?.response?.data ?? { message: err?.message ?? "Unknown error" };
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
