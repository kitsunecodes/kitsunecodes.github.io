// Wait until the DOM is fully loaded
window.onload = function () {
  const button = document.getElementById("submitBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const userText = input.value;
    console.log(userText)
  });
};
