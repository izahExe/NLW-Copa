const buttomEl = document.querySelector("#button");
let theme = 1;

buttomEl.addEventListener("click", () => {

    if (theme === 1) {
        document.body.classList.remove("blue");
        document.body.classList.remove("green");
        theme = 2;
    } else if (theme === 2) {
        document.body.classList.remove("green");
        document.body.classList.add("blue");
        theme = 3;
    } else if (theme === 3) {
        document.body.classList.remove("blue");
        document.body.classList.add("green");
        theme = 1;
    }
})

function createGame(players1, hours, players2) {

    return `
        <li>
            <img src="./assets/icon-${players1[0]}.svg" alt="Banderia do ${players1[0]}"></img>
            <strong>${hours[0]}</strong>
            <img src="./assets/icon-${players2[0]}.svg" alt="Bandeira da ${players2[0]}"></img>
        </li>
        <li>
            <img src="./assets/icon-${players1[1]}.svg" alt="Banderia do ${players1[1]}"></img>
            <strong>${hours[1]}</strong>
            <img src="./assets/icon-${players2[1]}.svg" alt="Bandeira da ${players2[1]}"></img>
        </li>
        <li>
            <img src="./assets/icon-${players1[2]}.svg" alt="Banderia do ${players1[2]}"></img>
            <strong>${hours[2]}</strong>
            <img src="./assets/icon-${players2[2]}.svg" alt="Bandeira da ${players2[2]}"></img>
        </li>
    `
}

let delay = -0.3;

function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo NLW Copa Calendario">
    </header>
    <main id="cards"> 
        ${createCard("24/11", "quinta", createGame(
            ["suiça", "portugal", "brasil"],
            ["07:00", "13:00", "16:00"],
            ["camarões", "gana", "servia"]
            ))}
        ${createCard("28/11", "segunda", createGame(
            ["coreia-do-sul", "brasil", "portugal"],
            ["10:00", "13:00", "16:00"],
            ["gana", "suiça", "uruguai"]
            ))}
    </main>
`