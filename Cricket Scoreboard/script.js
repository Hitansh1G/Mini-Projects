const team1 = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    batsman1: {
      runs: 0,
      balls: 0,
    },
    batsman2: {
      runs: 0,
      balls: 0,
    },
  };
  
  const team2 = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    batsman1: {
      runs: 0,
      balls: 0,
    },
    batsman2: {
      runs: 0,
      balls: 0,
    },
  };
  
  let currentTeam = team1;
  
  function updateScore(input) {
    const [action, detail] = input.split(" ");
    const [team, batsman, score, extra] = detail.split(",");
    let runs = parseInt(score);
  
    if (extra) {
      runs += parseInt(extra);
    }
  
    if (action === "team") {
      if (team === "1") {
        currentTeam = team1;
        const team1Elem = document.querySelector(".team1");
        const team2Elem = document.querySelector(".team2");
        team1Elem.classList.add("active");
        team2Elem.classList.remove("active");
      } else if (team === "2") {
        currentTeam = team2;
        const team1Elem = document.querySelector(".team1");
        const team2Elem = document.querySelector(".team2");
        team2Elem.classList.add("active");
        team1Elem.classList.remove("active");
      }
      currentTeam.runs += runs;
      currentTeam.overs = currentTeam.balls / 6;
      const runsElem = document.querySelector(`.team${team} .runs`);
      runsElem.textContent = `${currentTeam.runs}/${currentTeam.wickets}`;
      const oversElem = document.querySelector(`.team${team} .overs`);
      oversElem.textContent = currentTeam.overs.toFixed(1);
    } else if (action === "batsman") {
      const batsmanObj = currentTeam[batsman];
      batsmanObj.runs += runs;
      batsmanObj.balls++;
      const batsmanElem = document.querySelector(
        `.team${team} .batsmen .${batsman}`
      );
      batsmanElem.textContent = `${batsmanObj.runs} (${batsmanObj.balls})`;
      currentTeam.balls++;
      if (currentTeam.balls % 6 === 0) {
        currentTeam.overs++;
        currentTeam.balls = 0;
      }
    }
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input").value;
    updateScore(input);
  });
  // Get references to HTML elements
const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
const scoreElements = document.querySelectorAll(".score");

// Define a function to update the scoreboard
function updateScore(team, runs, wickets) {
  // Find the correct team element
  const teamElement = document.querySelector(`.${team}`);
  
  // Update the score element for the team
  const scoreElement = teamElement.querySelector(".score");
  scoreElement.textContent = `${runs}/${wickets}`;
}

// Define a function to handle chatbot messages
function handleChatbotMessage(message) {
  // Split the message into an array of words
  const words = message.split(" ");

  // Parse the words and update the score accordingly
  if (words[0] === "team" && words[1] && words[2]) {
    const team = `team${words[1]}`;
    const runs = parseInt(words[2]);
    const wickets = parseInt(words[3]) || 0;
    updateScore(team, runs, wickets);
  } else if (words[0] === "batsman" && words[1] && words[2] && words[3]) {
    const team = `team${words[1]}`;
    const batsman = `batsman${words[2]}`;
    const runs = parseInt(words[3]);
    const balls = parseInt(words[4]);
    const fours = parseInt(words[5]) || 0;
    const sixes = parseInt(words[6]) || 0;
    const strikerElement = teamElement.querySelector(`.${batsman}`);
    strikerElement.innerHTML = `${batsman} (${runs} (${balls}), ${fours}x4, ${sixes}x6)`;
  }
}

// Add event listener to submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const message = inputField.value;
  handleChatbotMessage(message);
  inputField.value = "";
});
