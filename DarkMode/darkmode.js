document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dark");
    //variable that stores the button

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
    //once the button is clicked, the css will toggle to dark
  });