document.getElementById("sender").addEventListener("submit", function (event) {
    event.preventDefault();

    const toEmail = "vladislavatamanuk@gmail.com";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        toEmail: toEmail,
        subject: 'Test',
        message: name + " " + message + " " + email
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
            alert("Помилка при відправці листа.");
        }
    })
    .catch(error => {
        console.error("Помилка:", error);
    });
});
