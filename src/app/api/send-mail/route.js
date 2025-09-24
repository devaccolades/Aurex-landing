// src/app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  // ✅ destructure all possible fields sent from frontend
  const {
    name,
    phone,
    whatsapp,
    project,
    service,
    message,
    mail,
  } = await req.json();

  // ✅ Setup transporter (use your email and app password or SMTP details)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // use App Password if using Gmail
    },
  });

  try {
    // ✅ Email template function
    const mailTemplate = ({
      name,
      phone,
      whatsapp,
      project,
      service,
      message,
      mail,
    }) => `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          
          <h2 style="color: #0C7379;">📩 New Form Submission</h2>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ""}
          ${mail ? `<p><strong>Email:</strong> ${mail}</p>` : ""}
          ${project ? `<p><strong>Project:</strong> ${project}</p>` : ""}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          
          <p style="font-size: 14px; color: #888;">This email was generated from a form submission on your website.</p>
        </div>
      </div>
    `;

    // ✅ Call the template to actually produce the HTML
    const emailHtml = mailTemplate({
      name,
      phone,
      whatsapp,
      project,
      service,
      message,
      mail,
    });

    // ✅ Now send mail
    await transporter.sendMail({
      from: `"Website enquiry" <${process.env.EMAIL_USER}>`,
      to: ["webdesign.accolades@gmail.com"],
      subject: `Aurex Builders landing page - ${
        name || "New Lead"
      } - ${new Date().toLocaleString()}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
