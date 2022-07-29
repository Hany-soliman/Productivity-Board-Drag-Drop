import {drag} from "./dragAndDrop.js";
import {updateOrDeleteItem} from "./deleteItem.js";

const createItemEl= (columnEl, column, item, index) => {
    const listEl = document.createElement('li');
    listEl.textContent = item;
    listEl.id = index;
    listEl.classList.add('drag-item');
    listEl.draggable = true;
    listEl.addEventListener('blur', (e)=>{
        updateOrDeleteItem(column, e, index)
    });
    listEl.addEventListener('dragstart', drag)
    listEl.contentEditable = true;
    columnEl.appendChild(listEl);
}

export {createItemEl}



