import sgMail from "@sendgrid/mail";

export default async function (req: any, res: any) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const { email, message, interest } = req.body;

  const content = {
    to: "hello@creatify.io",
    from: "hello@creatify.io",
    subject: `New Message From - ${email} about - ${interest}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error.response.body);
    res.status(400).send("Message not sent.");
  }
}
