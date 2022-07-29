import {backlogListEl, progressListEl, completeListEl, onHoldListEl} from "./targetedElements.js"
import {renderDom} from "./RenderDom.js";
import {updateLocalStorage} from "./localStorage.js";

const data = {
    backlogListArray: ['Backlog task 1', 'Backlog task 2'],
    progressListArray: ['In progress task 1', 'In progress task 2'],
    completeListArray: ['Completed task 1', 'Completed task 2'],
    onHoldListArray:['On hold tasks'],
}

const updateArrays = ()=>{
    data.backlogListArray = []
    data.progressListArray = []
    data.completeListArray = []
    data.onHoldListArray = []
    for (let i = 0; i < backlogListEl.children.length; i++) {
        data.backlogListArray.push(backlogListEl.children[i].textContent)
    }
    for (let i = 0; i < progressListEl.children.length; i++) {
        data.progressListArray.push(progressListEl.children[i].textContent)
    }
    for (let i = 0; i < completeListEl.children.length; i++) {
        data.completeListArray.push(completeListEl.children[i].textContent)
    }
    for (let i = 0; i < onHoldListEl.children.length; i++) {
        data.onHoldListArray.push(onHoldListEl.children[i].textContent)
    }
    renderDom()
    updateLocalStorage()
}

export {data, updateArrays}