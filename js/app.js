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

function getInput(){
    const inputVal = document.getElementById(`theInput`).value;

    let whiteRiceAmou = document.getElementById(`whiteRiceAmount`).value;
    document.getElementById(`whiteRiceAmount`).value = inputVal*whiteRiceAmou;
    let whiteRiceWate = document.getElementById(`whiteRiceWater`).value;
    document.getElementById(`whiteRiceWater`).value = inputVal*whiteRiceWate;
    let caliRiceAmou = document.getElementById(`caliRiceAmount`).value;
    document.getElementById(`caliRiceAmount`).value = inputVal*caliRiceAmou;
    let caliRiceWate = document.getElementById(`caliRiceWater`).value;
    document.getElementById(`caliRiceWater`).value = inputVal*caliRiceWate;
    let caliSoftWate = document.getElementById(`caliSoftWater`).value;
    document.getElementById(`caliSoftWater`).value = inputVal*caliSoftWate;

    if (inputVal == 1){
        document.getElementById(`whiteRiceAmount`).value = 8;
        document.getElementById(`whiteRiceWater`).value = 16;
        document.getElementById(`caliRiceAmount`).value = 10;
        document.getElementById(`caliRiceWater`).value = 16;
        document.getElementById(`caliSoftWater`).value = 4;
    }

    document.getElementById(`whiteRatio1`).value = inputVal;
    document.getElementById(`whiteRatio2`).value = inputVal * 2;
    document.getElementById(`caliRatio1`).value = inputVal * 5;
    document.getElementById(`caliRatio2`).value = inputVal * 8;
    document.getElementById(`caliSoftRatio1`).value = inputVal;
    document.getElementById(`caliSoftRatio2`).value = inputVal * 2;
}
