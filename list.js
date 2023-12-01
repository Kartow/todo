let liIndex = 0;

document.getElementById('send_btn').addEventListener("click", listAppend);
window.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        listAppend();
    }
});


function listAppend(){
    const value = document.getElementById('text_input').value;
    const list = document.getElementById('list');
    if (value){
        const listItem = document.createElement('li');
        listItem.id = 'list_element_' + liIndex;

        const textDiv = document.createElement('div');
        textDiv.className = 'text_div';
        textDiv.appendChild(document.createTextNode(value));
    
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
        doneImg.className = 'done_img';
    
        list.appendChild(listItem);
        listItem.appendChild(textDiv);
        listItem.appendChild(btnContainer);
        btnContainer.appendChild(delButton);
        delButton.appendChild(delImg);
        btnContainer.appendChild(doneButton);
        doneButton.appendChild(doneImg);
        document.getElementById('text_input').value = '';
    
        liIndex++;
    }
}

function deleteItem(itemId) {
    let index = itemId.slice(8);
    document.getElementById('list_element_' + index).remove();
}