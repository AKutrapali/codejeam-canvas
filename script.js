// функция , рисующая канвас 4*4

let paintingCanvas44 = function () {
    let canvas = document.getElementById('can_44');
    let ctx = canvas.getContext('2d');
    let array44 = [
        ["blue", "yellow","yellow","blue"],
        ["yellow", "orange","orange","yellow"],
        ["yellow", "orange","orange","yellow"],
        ["blue", "yellow","yellow","blue"]
    ];
    let unit = 64
    for (let i = 0; i < array44.length; i++) {
        for (let j = 0; j < array44.length; j++) {
            ctx.fillStyle = array44[i][j];
            ctx.fillRect(j * unit, i * unit, unit, unit);
        }
    }
}

// функция , рисующая канвас 32*32

let paintingCanvas3232 = function () {
    let canvas = document.getElementById('can_3232');
    let ctx = canvas.getContext('2d');
    let unit = 8
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            if ((i+j) % 2 == 0)
            {ctx.fillStyle = 'orange';}
            else {ctx.fillStyle = 'green';}
            ctx.fillRect(j * unit, i * unit, unit, unit);
        }
    }
}

// Кнопки переключения канвасов

let carousel_item = document.getElementsByClassName('carousel_item');
button44.onclick = function () {
    for (let n=0; n<carousel_item.length; n++) {
        carousel_item[n].style.display = "none";
        }
    li_44.style.display = "flex";
    paintingCanvas44 ();
}

button3232.onclick = function () {
    for (let n=0; n<carousel_item.length; n++) {
        carousel_item[n].style.display = "none";
        }
    li_3232.style.display = "flex";
    paintingCanvas3232 ();
}

button256256.onclick = function () {
    for (let n=0; n<carousel_item.length; n++) {
        carousel_item[n].style.display = "none";
        }
    li_256256.style.display = "flex";
}

// кнопка полноэкранного режима

full.onclick = function () {
    //main_container.classList.toggle("main_container_full");
    main_container.requestFullscreen();
    /*if (full.innerText == "Full Screen")  {
    full.textContent = "Back"
    }
    else { full.textContent = "Full Screen";}*/
}