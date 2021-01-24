export default class Select {
    constructor(element) {
        this.element = element
        this.options = getFormattedOptions(element.querySelectorAll('option'))
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement('ul')
        setupCustomElement(this)
        element.after(this.customElement)
    }
}

function setupCustomElement(select){
    select.customElement.classList.add('custom-select-container')
    select.labelElement.classList.add('custom-select-value')
    select.customElement.append(select.labelElement)
    select.optionsCustomElement.classList.add('custom-select-options')
    select.customElement.append(select.optionsCustomElement)
}

function getFormattedOptions(optionElements){
    [...optionElements].map(optionElement =>{
        return{
            value: optionElement.value,
            label: optionElement.label
        }
    })
}