import { CommonElement } from "../../external/commonwealth/index";

class ButtonComponent extends CommonElement {
    constructor(info: any) {
        super(info)
    }

    // grade: string = 'Unknown' // NOTE: This cannot be overwritten?

    // NOTE: Need a trigger so the chain is run
    onClick(trigger: any) {
        return this.grade
    }

    button () {
        const button = document.createElement("button")
        button.style.width = button.style.height = '100px'
        button.style.border = '1px solid black'
        button.style.borderRadius = '10px'
        button.style.fontWeight = 'bold'
        button.style.margin = '10px'
        button.style.background = 'whitesmoke'
        button.style.cursor = 'pointer'

        button.textContent = this.grade
        button.addEventListener("click", () => this.onClick(true))
        return button
    }

    render() {
        return [
            this.button
        ]
    }
}

let name = "button-component"
customElements.define(name, ButtonComponent);

export default ButtonComponent