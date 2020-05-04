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


    document.getElementById(`whiteRatio1`).value = inputVal;
    document.getElementById(`whiteRatio2`).value = inputVal * 2;
    document.getElementById(`caliRatio1`).value = inputVal * 5;
    document.getElementById(`caliRatio2`).value = inputVal * 8;
    document.getElementById(`caliSoftRatio1`).value = inputVal;
    document.getElementById(`caliSoftRatio2`).value = inputVal * 2;
}
