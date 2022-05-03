let hole = document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
dead.textContent = 0;
let blunder = document.getElementById('lost');
blunder.textContent = 0;

hole.onclick = function () {
    let classDiv = hole.className;
    if (classDiv = 'hole hole_has-mole') {
        ++dead.textContent;
    } else {++blunder.textContent};
}