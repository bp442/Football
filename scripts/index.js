"use strict";
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    {
        code: "KAN", name: "Kansas City Chiefs",
        plays: "Kansas City, MO"
    },
];

window.onload = init;

function init() {
    let teamForm = document.getElementById("teamForm");
    teamForm.addEventListener('submit', event => {
        event.preventDefault();
    });

    const teamsList = document.getElementById("teamsList");
    teamsList.onchange = onTeamsListChange;

    initTeamSelect();
    teamForm.onsubmit = clickTeamSelection;
}

function clickTeamSelection() {
    const textField = document.getElementById("teamTextP");
    let curTeamIndex = getTeamIndex();
    assignImage(curTeamIndex);

    textField.innerText = "You selected the " + teams[curTeamIndex].name + " (" + teams[curTeamIndex].code + ") " +
        "who play in " + teams[curTeamIndex].plays;
}


function initTeamSelect() {
    let teamsList = document.getElementById("teamsList");
    const length = teams.length;
    for (let i = 0; i < length; i++) {
        let newOption = new Option(teams[i].name, teams[i].code);
        teamsList.appendChild(newOption);
    }
}

function getTeamIndex() {
    const teamsList = document.getElementById("teamsList");
    let length = teams.length;
    for (let i = 0; i < length; i++) {
        if (teamsList.value == teams[i].code) {
            return i;
        }
    }
}

function onTeamsListChange() {
    const teamsList = document.getElementById("teamsList");
    let selectedValue = teamsList.value;
    let textField = document.getElementById("teamTextP");
    let image = document.getElementById("teamImage");
    if (selectedValue == "teamSelect") {
        textField.innerText = "";
        image.src = "#";
        image.style = "visibility: hidden";
    }
}

function assignImage(index){
    let image = document.getElementById("teamImage");

    if(index == 0){
        image.src = "images/dallasCowboys.png";
        image.style = "max-width: 75%; visibility: visible;"
    }
    else if(index == 1){
        image.src = "images/denverBroncos.png";
        image.style = "max-width: 75%; visibility: visible;"
    }
    else if(index == 2){
        image.src = "images/houstonTexans.png";
        image.style = "max-width: 75%; visibility: visible;"
    }
    else if(index == 3){
        image.src = "images/kansasCityChiefs.png";
        image.style = "max-width: 75%; visibility: visible;"
    }
}