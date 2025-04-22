document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
  
    const formData = {
      name,
      email,
      message
    };
  
    localStorage.setItem("contactSubmission", JSON.stringify(formData));
    document.getElementById("formResponse").innerText = "Thanks for reaching out, " + name + "!";
    this.reset();
  });
  