    const messages = [
      "Initializing Hacking",
      "Reading your Files",
      "Password files Detected",
      "Sending all passwords and personal files to server",
      "Cleaning up"
    ];

    const terminal = document.getElementById("terminal");

    function randomDelay() {
      return Math.floor(Math.random() * 7000) + 1000; // 1–7 sec
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function startHacking() {
      for (let msg of messages) {
        let line = document.createElement("div");
        line.classList.add("line");

        let text = document.createElement("span");
        text.textContent = msg;

        let dots = document.createElement("span");
        dots.classList.add("dots");

        line.appendChild(text);
        line.appendChild(dots);
        terminal.appendChild(line);

        await wait(randomDelay());

        dots.remove(); // stop blinking after done
        line.textContent = msg + "... Done";
      }
    }

    startHacking();
