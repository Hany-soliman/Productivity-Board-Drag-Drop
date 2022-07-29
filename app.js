import {addBtns, addItems, saveItemBtns, addItemContainers} from './utils/targetedElements.js'
import {checkLocalStorage} from "./utils/localStorage.js";
import {allowDrop, dragEnterEl, loopThroughColumns, dragExitEl, dropEL} from "./utils/dragAndDrop.js";
import {hideInputBox, showAndHandleInputBox} from "./utils/addItems.js";


addBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        showAndHandleInputBox(btn, index)
        addItems.forEach(item => {
            item.addEventListener('blur', () => {
                setTimeout(() => hideInputBox(btn, index), 1000)
            })
        })
    })
})


window.addEventListener('DOMContentLoaded', checkLocalStorage)
loopThroughColumns('dragover', allowDrop)
loopThroughColumns('dragenter', dragEnterEl)
loopThroughColumns('dragleave', dragExitEl)
loopThroughColumns('drop', dropEL)