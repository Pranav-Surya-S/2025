document.getElementById("codeButton").addEventListener("click", function () {
  fetch("quotes.json")
    .then((response) => response.json())
    .then((data) => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];

      const repoTextbox = document.getElementById("quote-textbox");

      repoTextbox.value = randomQuote;

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: 0.5, y: 0.2 },
      });
    })
    .catch((error) => {
      console.error("Error fetching the quotes:", error);
    });
});
