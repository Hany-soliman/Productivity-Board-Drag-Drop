import {data} from "./dataArrays.js";
import {renderDom} from "./RenderDom.js";
import {updateLocalStorage} from "./localStorage.js";

import {dragging} from "./dragAndDrop.js";


const updateOrDeleteItem = (column, e, index) => {
    const {backlogListArray, progressListArray, completeListArray, onHoldListArray} = data
    let validText = e.target.textContent.trim()
    if(!dragging){
        if (!validText) {
            if (column == 0) {
                backlogListArray.splice(index, 1)
            }
            if (column == 1) {
                progressListArray.splice(index, 1)
            }
            if (column == 2) {
                completeListArray.splice(index, 1)
            }
            if (column == 3) {
                onHoldListArray.splice(index, 1)
            }
        } else if (validText) {
            if (column == 0) {
                backlogListArray[index] = validText
            }
            if (column == 1) {
                progressListArray[index] = validText
            }
            if (column == 2) {
                completeListArray[index] = validText
            }
            if (column == 3) {
                onHoldListArray[index] = validText
            }
        }
        renderDom()
        updateLocalStorage()
    }
}

export {updateOrDeleteItem}