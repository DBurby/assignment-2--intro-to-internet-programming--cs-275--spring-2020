const tab = document.querySelectorAll(`.tab`);
const recipe = document.querySelectorAll(`.recipe`);

function onTabClick(event) {
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove(`active`);
    }
    for (let i = 0; i < recipe.length; i++) {
        recipe[i].classList.remove(`active`);
    }

    event.target.classList.add(`active`);
    let classString = event.target.getAttribute(`data-target`);
    console.log(classString);
    document.getElementById(`recipes`).getElementsByClassName(classString)[0].classList.add(`active`);
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener(`click`, onTabClick, false);
}

