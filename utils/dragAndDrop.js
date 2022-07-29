import {backlogListEl, completeListEl, listColumns, onHoldListEl, progressListEl} from "./targetedElements.js";
import {updateArrays} from "./dataArrays.js";

let draggedItem
let dragging = false

const loopThroughColumns = (type, func) => {
    listColumns.forEach(column => {
        column.addEventListener(type, func)
    })
}

const drag = (e) => {
    draggedItem = e.target
    dragging = true
}

const allowDrop = (e) => {
    if (e.target.tagName !== 'LI') {
        e.preventDefault()
    }
}


const dragEnterEl = (e) => {
    if (e.target.tagName !== 'LI') {
        e.target.classList.add('over')
    }
}

const dragExitEl = (e) => {
    e.target.classList.remove('over')
}

const dropEL = (e) => {
    e.preventDefault()
    e.target.classList.remove('over')
    e.target.appendChild(draggedItem)
    dragging = false
    updateArrays()
}


export {draggedItem, drag, allowDrop, loopThroughColumns, dragEnterEl, dragExitEl, dropEL, dragging}