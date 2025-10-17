import sendMail from "@/app/components/sendMail";
import { NextApiRequest } from "next";

export default async function POST(request: NextApiRequest){
    try {
        const {fullname, email, message} = request.json();
    } catch (error) {
        
    }
    await sendMail(fullname,email,message);

}