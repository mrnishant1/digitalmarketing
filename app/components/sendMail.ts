import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "botnishant79@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendMail(Name: string, mail: string, message: string) {
  const info = await transporter.sendMail({
    from: '"Reddit scipt" <luella32@ethereal.email>',
    to: "nishantkumaragra@gmail.com",
    subject: "Client Mail",
    text: `Name:${Name}, mail:${mail}, Message:${message}`, // plain‑text body
  });

  // fixed: info.accepted is string[] | undefined — check its length/truthiness
  if (info.accepted && info.accepted.length > 0) {
    console.log("Message sent to:", info.accepted);
    console.log("Message id:", info.messageId);
  } else {
    console.warn("No recipients accepted:", info);
  }

  console.log("Message sent:", info.messageId);
}

export default sendMail;
