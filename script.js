    const jokeBox = document.getElementById("joke");
    const btn = document.getElementById("getJoke");
    const toggleBtn = document.getElementById("toggleMode");

    function getJoke() {
      jokeBox.innerText = "Fetching joke... ⏳"; // loading state
      fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network error ❌");
        }
        return response.json();
      })
      .then(data => {
        jokeBox.innerText = data.joke; // resolved joke
      })
      .catch(error => {
        jokeBox.innerText = "Oops! Couldn't fetch a joke 😢 " + error.message;
      });
    }

    btn.addEventListener("click", getJoke);

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode";
      } else {
        toggleBtn.innerText = "🌙 Dark Mode";
      }
    });