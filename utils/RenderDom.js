import {backlogListEl, completeListEl, onHoldListEl, progressListEl} from "./targetedElements.js";
import {createItemEl} from "./createListItem.js";
import {data} from "./dataArrays.js";



const renderDom = () => {
    const {backlogListArray, progressListArray, completeListArray, onHoldListArray} = data
    backlogListEl.textContent = ''
    for (const [index, item] of backlogListArray.entries()) {
        createItemEl(backlogListEl, 0, item, index)
    }
    progressListEl.textContent = ''
    for (const [index, item] of progressListArray.entries()) {
        createItemEl(progressListEl, 1, item, index)
    }
    completeListEl.textContent = ''
    for (const [index, item] of completeListArray.entries()) {
        createItemEl(completeListEl, 2, item, index)
    }
    onHoldListEl.textContent = ''
    for (const [index, item] of onHoldListArray.entries()) {
        createItemEl(onHoldListEl, 3, item, index)
    }
}


export {renderDom}