document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dark");

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
  });