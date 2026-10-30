/* ====== FORM HANDLING ====== */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const result = document.getElementById("result");
  const button = document.getElementById("send");

  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    result.style.display = "block";
    result.innerText = "Sending message...";
    button.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
      });

      const data = await response.json();

      if (data.success) {
        result.innerText = "Message sent successfully!";
        result.style.color = "green";
        form.reset();
      } else {
        result.innerText = data.message || "Submission failed!";
        result.style.color = "red";
      }
    } catch (error) {
      console.error("Error:", error);
      result.innerText = "Something went wrong!";
      result.style.color = "red";
    } finally {
      button.disabled = false;
    }
  });
});