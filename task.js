// let hole = document.getElementsByClassName('hole');
// let holeHasMole = document.getElementsByClassName('hole_has-mole');
// //let holeId = document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
dead.textContent = 0;
let blunder = document.getElementById('lost');
blunder.textContent = 0;


for (index = 1; index <= 9; index++) {
    
    function getHole(index) {
        const desiredClass = document.getElementById(`hole${index}`);
        return desiredClass;
    }

    let hole = getHole(index);

    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole') === true) {
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



// if (activateHole = index =>
//     getHole( index ).className = 'hole hole_has-mole') {
//         ++dead
// } else if (deactivateHole = index =>
//         getHole( index ).className = 'hole') {++blunder}

// for (i = 0; i < hole.length; i++) {
//     hole[i].onclick = function () {
//         if (hole.className === 'hole hole_has-mole') {
//             ++dead
//         } else {++blunder}
//     }
// } 


