(function () {
  emailjs.init("USERID");
})();
function send() {
  emailjs
    .send("SERVERID", "template_rexnw9g", {
      from_name: document.querySelector("#from_name").value,
      message: document.querySelector("#message").value,
      email_from: document.querySelector("#email_from").value,
    })
    .then(
      (response) => {
        console.log("success", response.status);
        alert("successfully sent message!");
      },
      (error) => {
        console.log(error);
      }
    );
}
document.querySelector(".contact-button").addEventListener("click", send);
