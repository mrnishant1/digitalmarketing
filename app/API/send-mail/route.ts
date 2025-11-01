import sendMail from "@/app/components/sendMail";
import { NextRequest, NextResponse } from "next/server";

const rateMap = new Map();
const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

async function verifyCaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  return res.json();
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const now = Date.now();
    const windowMs = 30 * 60 * 1000; // 30 min
    const limit = 3;

    const timestamps = (rateMap.get(ip) || []).filter(
      (t: number) => now - t < windowMs
    );
    timestamps.push(now);
    rateMap.set(ip, timestamps);

    if (timestamps.length > limit) {
      return NextResponse.json(
        { message: "Too many attempts. Try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { fullname, email, message, token } = body;

    if (!token) {
      console.log("token is missing");
      return NextResponse.json(
        { message: "Captcha token missing" },
        { status: 400 }
      );
    }

    const verification = await verifyCaptcha(token);
    if (!verification.success) {
      console.error("Captcha failed:", verification["error-codes"]);
      return NextResponse.json({ message: "Bot detected" }, { status: 409 });
    }

    await sendMail(fullname, email, message);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email: Unknown error" },
      { status: 500 }
    );
  }
}
