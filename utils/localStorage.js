import {data} from "./dataArrays.js";
import {renderDom} from "./RenderDom.js";

const checkLocalStorage = () => {
    if (localStorage.getItem('backlogItems')) {
        data.backlogListArray = JSON.parse(localStorage.backlogItems)
        data.progressListArray = JSON.parse(localStorage.progressItems)
        data.completeListArray = JSON.parse(localStorage.completeItems)
        data.onHoldListArray = JSON.parse(localStorage.onHoldItems)
    } else {
        updateLocalStorage()
    }
    renderDom()
}

const updateLocalStorage = () => {
    let array = [data.backlogListArray, data.progressListArray, data.completeListArray, data.onHoldListArray]
    const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
    arrayNames.forEach((arrayName, index) => {
        localStorage.setItem(`${arrayName}Items`, JSON.stringify(array[index]));
    });
}

export {checkLocalStorage, updateLocalStorage}