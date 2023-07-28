
function sendEmail() {


    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    var details = `Name : ${name}  
    Email : ${email}
    Message : ${message}`


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: 'dev.testmindtest@gmail.com',
        Password: '61286E4805254D5CB292672F5A0623572E6A',
        To: 'rd.anandv@gmail.com',
        From: "dev.testmindtest@gmail.com",
        Subject: document.getElementById('name').value,
        Body: details
    }).then(function (message, error) {
        console.log('message', message, error)
        alert("Email successfully sent")
    });
}
