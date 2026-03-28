const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "71164a0d1dded7",
        pass: "4609d2be497963",
    },
});

module.exports = {
    sendMail: async (to,url) => {
        const info = await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "RESET PASSWORD REQUEST",
            text: "lick vo day de doi pass", // Plain-text version of the message
            html: "lick vo <a href="+url+">day</a> de doi pass", // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
    },
    sendAccountPasswordMail: async (to, username, password) => {
        const info = await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "THONG TIN TAI KHOAN",
            text: `Xin chao ${username}, mat khau dang nhap cua ban la: ${password}`,
            html: `<p>Xin chao <b>${username}</b>,</p><p>Mat khau dang nhap cua ban la: <b>${password}</b></p>`
        });

        console.log("Account password mail sent:", info.messageId);
    }
}