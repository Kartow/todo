let liIndex = 0;

function listAppend(){
    const value = document.getElementById('text_input').value;
    const list = document.getElementById('list');

    const listItem = document.createElement('li');
    listItem.id = 'list_element_' + liIndex;
    listItem.appendChild(document.createTextNode(value));

    const btnContainer = document.createElement('div');
    btnContainer.className = 'li_btn_div';

    const delButton = document.createElement('button');
    delButton.className = 'li_btn del';
    delButton.id = 'del_btn_' + liIndex;
    delButton.setAttribute('onclick', 'deleteItem(this.id);');

    const delImg = document.createElement('img');
    if (localStorage.theme === 'light'){
        delImg.src = 'IMG/trash_black.png';
    } else {
        delImg.src = 'IMG/trash_white.png';
    }
    delImg.className = 'del_img';

    const doneButton = document.createElement('button');
    doneButton.className = 'li_btn done';
    doneButton.id = 'done_btn_' + liIndex;

    const doneImg = document.createElement('img');
    if (localStorage.theme === 'light'){
        doneImg.src = 'IMG/done_black.png';
    } else {
        doneImg.src = 'IMG/done_white.png';
    }

    list.appendChild(listItem);
    listItem.appendChild(btnContainer);
    btnContainer.appendChild(delButton);
    delButton.appendChild(delImg);
    btnContainer.appendChild(doneButton);
    doneButton.appendChild(doneImg);
    document.getElementById('text_input').value = '';

    liIndex++;
}

function deleteItem(itemId) {
    let index = itemId.slice(-1);
    document.getElementById('list_element_' + index).remove();
}