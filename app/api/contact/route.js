import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, phone, service, message } = await req.json();

        // 1. Clean the Private Key
        const rawKey = process.env.GOOGLE_PRIVATE_KEY || "";
        const formattedKey = rawKey.replace(/\\n/g, '\n').replace(/"/g, '');

        // 2. Setup Google Auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: formattedKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // 3. Get the authenticated client
        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        // 4. Append data to Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:E', 
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toLocaleString(), name, email, phone, service, message]],
            },
        });

        // 5. Send Email via Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, 
            subject: `New Inquiry: ${service} from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Msg:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("--- BACKEND ERROR START ---");
        console.error("Code:", error.code); // Look for 401 or 403
        console.error("Message:", error.message);
        if (error.response) console.error("Response Data:", error.response.data);
        console.error("--- BACKEND ERROR END ---");
        
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
}