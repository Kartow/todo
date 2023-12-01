function modeChange(which) {
    let img = document.getElementById('btn_img');
    let logo = document.getElementById('logo');
    let inputContainer = document.getElementById('input_container');
    let input = document.getElementById('text_input');
    let setImg = document.getElementById('input_img');
    let li = document.querySelectorAll('li');
    let delImg = document.getElementsByClassName('del_img');
    let doneImg = document.getElementsByClassName('done_img');
    let body = document.body;

    if (which === 'dark'){
        img.src = 'IMG/mode_white.png';
        logo.src = 'IMG/logo_white.png';
        inputContainer.style.borderBottom = 'solid white 1px';
        input.style.color = 'white';
        setImg.src = 'IMG/send_white.png';
        for (let i = 0; i < li.length; i++){
            li[i].style.borderBottom = 'solid 1px rgba(255, 255, 255, 0.3)';
            delImg[i].src = 'IMG/trash_white.png';
            doneImg[i].src = 'IMG/done_white.png';
        }
        body.style.background = '#080808';
        body.style.color = 'white';
    }
    if (which === 'light'){
        img.src = 'IMG/mode_dark.png';
        logo.src = 'IMG/logo_black.png';
        inputContainer.style.borderBottom = 'solid black 1px';
        input.style.color = 'black';
        setImg.src = 'IMG/send_black.png';
        for (let i = 0; i < li.length; i++){
            li[i].style.borderBottom = 'solid 1px rgba(0, 0, 0, 0.3)';
            delImg[i].src = 'IMG/trash_black.png';
            doneImg[i].src = 'IMG/done_black.png';
        }
        body.style.background = 'white';
        body.style.color = 'black';
    }
}

function modeSet() {
    if (localStorage.theme === 'light'){
        modeChange('light');
    } else if (localStorage.theme === 'dark') {
        modeChange('dark');
    } else {localStorage.theme = 'dark'}
}

function modeButtonClicked() {
    console.log(localStorage.theme);
    if (localStorage.theme === 'light'){
        localStorage.theme = 'dark';
        modeChange('dark');
    } else {
        localStorage.theme = 'light'
        modeChange('light');
    }
    console.log(localStorage.theme);
}