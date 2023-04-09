// Get the NBA Players API and my inputs

let searchBtn = document.getElementById("search-btn");
let inputField = document.getElementById("nameSearch");
let totalPlayerDiv = document.getElementById("totalPlayer-div");

async function fetchData() {
    let inputValue = inputField.value;

    let response = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${inputValue}`
    );

    let data = await response.json();

    let totalPlayers = data.meta.total_count;

    if (inputValue == '') {
        totalPlayerDiv.innerHTML = `<h6>Total player names are ${totalPlayers}</h6>`
    }

    else if (totalPlayers == 1) {
        let info = data.data[0].last_name;
        let playersFullName = data.data[0].first_name + " " + info;
        let team = data.data[0].team.full_name;

        // Get the first 10 players with the same name

        totalPlayerDiv.innerHTML = `<h5>Total players with the name ${inputValue} is ${totalPlayers}</h5><p>${playersFullName} plays for the ${team}</p>`;
    } else {

        let player1 = data.data[0].first_name + " " + data.data[0].last_name;
        let player2 = data.data[1].first_name + " " + data.data[1].last_name;
        let player3 = data.data[2].first_name + " " + data.data[2].last_name;
        let player4 = data.data[3].first_name + " " + data.data[3].last_name;
        let player5 = data.data[4].first_name + " " + data.data[4].last_name;
        let player6 = data.data[5].first_name + " " + data.data[5].last_name;
        let player7 = data.data[6].first_name + " " + data.data[6].last_name;
        let player8 = data.data[7].first_name + " " + data.data[7].last_name;
        let player9 = data.data[8].first_name + " " + data.data[8].last_name;
        let player10 = data.data[9].first_name + " " + data.data[9].last_name;

        totalPlayerDiv.innerHTML = `<h5>Total players with the name ${inputValue} are ${totalPlayers}</h5> <h6>The first 10 players out of ${totalPlayers}: <br/> ${player1} <br/> ${player2} <br/> ${player3} <br/> ${player4} <br/> ${player5} <br/> ${player6} <br/> ${player7} <br/> ${player8} <br/> ${player9} <br/> ${player10}</h6>`;

    }


}

// A search button

searchBtn.addEventListener("click", function () {
    fetchData();
});
