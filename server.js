const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.post("/sendEmail", (req, res) => {
    const { toEmail, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "narssender@gmail.com",
            pass: "narssender123"
        }
    });

    const mailOptions = {
        from: "narssender@gmail.com",
        to: toEmail,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Помилка при відправленні:", error);
            res.json({ success: false });
        } else {
            console.log("Успішно відправило:", info.response);
            res.json({ success: true });
        }
    });
});

app.listen(5500, () => {
    console.log("Сервер запущено на порті 5500");
});
