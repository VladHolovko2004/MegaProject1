document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const toEmail = document.getElementById("toEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const data = {
        toEmail: toEmail,
        subject: subject,
        message: message
    };

    fetch("/sendEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Лист відправлено!");
        } else {
            alert("Ошибка при отправке письма.");
        }
    })
    .catch(error => {
        console.error("Помилка:", error);
    });
});
