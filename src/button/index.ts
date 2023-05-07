import { CommonElement } from "../../external/commonwealth/index";

class ButtonComponent extends CommonElement {
    constructor(info: any) {
        super(info)
        this.initialize()
    }

    // grade: string = 'Unknown' // NOTE: This cannot be overwritten?

    // NOTE: Need a trigger so the chain is run
    onClick(trigger?: any) {
        return this.grade
    }

    button () {
        const button = document.createElement("button")
        button.classList.add('grade')
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