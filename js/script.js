document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-items");
  const emailInput = document.getElementById("email");
  const errorElement = document.querySelector(".show-error");
  const errorIcon = document.querySelector(".error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleShowError = (message) => {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.marginTop = "10px";
    errorElement.style.display = "block";
    emailInput.style.borderColor = "red";
    if (errorIcon) errorIcon.style.display = "inline";
  };

  const handleClearErrors = () => {
    errorElement.textContent = "";
    errorElement.style.display = "none";
    emailInput.style.borderColor = "";
    if (errorIcon) errorIcon.style.display = "none";
  };

  const handleShowSuccess = (message) => {
    const existingSuccessMessage = document.querySelector(".show-success");
    if (existingSuccessMessage) {
      existingSuccessMessage.remove();
    }

    const successMessage = document.createElement("p");
    successMessage.className = "show-success";
    successMessage.textContent = message;
    successMessage.style.color = "green";
    successMessage.style.marginTop = "10px";
    form.appendChild(successMessage);
  };

  const handleValidateEmail = (email) => emailPattern.test(email);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!handleValidateEmail(emailValue)) {
      handleShowError("Please enter a valid email address.");
    } else {
      handleClearErrors();
      handleShowSuccess("Form submitted successfully!");
    }
  });
});
