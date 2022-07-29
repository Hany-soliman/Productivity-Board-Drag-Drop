import {addItemContainers, addItems, saveItemBtns} from "./targetedElements.js";
import {data} from "./dataArrays.js";
import {renderDom} from "./RenderDom.js";
import {updateLocalStorage} from "./localStorage.js";


const saveItem = (el, text, index, button) => {
    el.addEventListener('click', () => {
        let validInput = text.textContent.trim()
        if (index == 0 && validInput) {
            data.backlogListArray.push(validInput)
        }
        if (index == 1 && validInput) {
            data.progressListArray.push(validInput)
        }
        if (index == 2 && validInput) {
            data.completeListArray.push(validInput)
        }
        if (index == 3 && validInput) {
            data.onHoldListArray.push(validInput)
        }
        text.textContent = ''
        hideInputBox(button, index)
        renderDom()
        updateLocalStorage()
    })
}

const showAndHandleInputBox = (el, index) => {
    el.style.visibility = 'hidden'
    saveItemBtns[index].style.display = 'flex'
    addItemContainers[index].style.display = 'flex';
    saveItem(saveItemBtns[index], addItems[index], index, el)
}

const hideInputBox = (el, index) => {
    el.style.visibility = 'visible'
    saveItemBtns[index].style.display = 'none'
    addItemContainers[index].style.display = 'none';
}

export {saveItem, showAndHandleInputBox, hideInputBox}