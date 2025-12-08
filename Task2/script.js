var arr = [
    {
        team: "India",
        captain: "Dhoni",
        viceCaptain: "Rohit Sharma",
        topBatsman: "Virat Kohli",
        topBowler: "Jasprit Bumrah",
    },
    {
        team: "Australia",
        captain: "Aaron Finch",
        viceCaptain: "Steve Smith",
        topBatsman: "David Warner",
        topBowler: "Mitchell Starc",
    },
    {
        team: "England",
        captain: "Eoin Morgan",
        viceCaptain: "Jos Buttler",
        topBatsman: "Joe Root",
        topBowler: "Jofra Archer",
    }
];

// Select button and box
var btn = document.querySelector("button");
var box = document.getElementById("box");

// When button is clicked
btn.addEventListener("click", function () {

    // 1. Pick a random team
    var randomIndex = Math.floor(Math.random() * arr.length);
    var teamInfo = arr[randomIndex];

    // 2. Set color based on team name
    var color = "";

    if (teamInfo.team === "India") {
        color = "orange";
    } else if (teamInfo.team === "Australia") {
        color = "gold";
    } else if (teamInfo.team === "England") {
        color = "red";
    }

    // Apply the background color
    box.style.background = color;
    box.style.color = "white";

    // 3. Show team information in the box
    box.innerHTML = `
        <h2>Team: ${teamInfo.team}</h2>
        <p>Captain: ${teamInfo.captain}</p>
        <p>Vice Captain: ${teamInfo.viceCaptain}</p>
        <p>Top Batsman: ${teamInfo.topBatsman}</p>
        <p>Top Bowler: ${teamInfo.topBowler}</p>
    `;
});
