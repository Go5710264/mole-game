const dead = document.getElementById('dead');
dead.textContent = 0;
const blunder = document.getElementById('lost');
blunder.textContent = 0;

function getHole(index) {
    const desiredClass = document.getElementById(`hole${index}`);
    return desiredClass;
}

for (index = 1; index <= 9; index++) {
    let hole = getHole(index);

    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {blunder.textContent++;}

        if (dead.textContent === '10') {
            alert('Победа');
            dead.textContent = 0;
            blunder.textContent = 0;
        } else if (blunder.textContent === '10') {
            alert('Поражение');
            dead.textContent = 0;
            blunder.textContent = 0;
        }
    }
}