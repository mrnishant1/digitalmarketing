import sendMail from "@/app/components/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        console.log("backend got hit")
        const body = await request.json();
        console.log(body);
        const {fullname, email, message}= {...body};
        // console.log(fullname,"hi",email,message);
        await sendMail(fullname,email,message);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: `Failed to send email ${error}` }, { status: 500 });
    }

}