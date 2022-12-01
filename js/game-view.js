const configPath = "/games.json";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const gameNameView = document.querySelector("#game-name");
const sourceCodeButton = document.querySelector("#source-code-button");
const gameView = document.querySelector("#game-view");

const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    var rawJson = xhttp.responseText;
    var json = JSON.parse(rawJson);
    for (let i = 0; i < json.length; i++) {
        var info = json[i];
        if (info.id == id) {
            console.log(info);
            showGame(info);
            return;
        }
    }
    gameNameView.innerHTML = "Unknown";
};
xhttp.open("GET", configPath, true);
xhttp.send();

function showGame(info) {
    gameNameView.innerHTML = info.name;
    sourceCodeButton.href = info.github;
    gameView.src = info.game;
}
