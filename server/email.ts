import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY environment variable not set');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email using SendGrid
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    await sgMail.send({
      to: options.to,
      from: options.from, // This should be a verified sender in your SendGrid account
      subject: options.subject,
      text: options.text || '',
      html: options.html || '',
    });
    return true;
  } catch (error) {
    console.error('Error sending email via SendGrid:', error);
    return false;
  }
}

/**
 * Send a notification email when a contact form is submitted
 */
export async function sendContactFormNotification(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  const fromEmail = 'info@signaturecleaners.com'; // Change to your verified sender
  
  // Email to the business
  const businessEmailOptions: EmailOptions = {
    to: 'contact@signaturecleaners.com', // Change to your business email
    from: fromEmail,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };
  
  // Confirmation email to the customer
  const customerEmailOptions: EmailOptions = {
    to: email,
    from: fromEmail,
    subject: 'Thank you for contacting Signature Cleaners',
    html: `
      <h2>Thank You for Contacting Signature Cleaners</h2>
      <p>Dear ${name},</p>
      <p>We have received your message regarding "${subject}" and will get back to you shortly.</p>
      <p>Here's a copy of your message:</p>
      <p>${message}</p>
      <p>Best regards,</p>
      <p>The Signature Cleaners Team</p>
    `,
  };
  
  try {
    // Send email to business
    const businessEmailSent = await sendEmail(businessEmailOptions);
    
    // Send confirmation email to customer
    const customerEmailSent = await sendEmail(customerEmailOptions);
    
    return businessEmailSent && customerEmailSent;
  } catch (error) {
    console.error('Error sending contact form notification emails:', error);
    return false;
  }
}