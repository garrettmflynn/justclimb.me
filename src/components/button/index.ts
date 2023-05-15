import { CommonElement } from "../../../external/commonwealth/index";

class ButtonComponent extends CommonElement {
    constructor(info: any) {
        super(info)
        this.initialize()

        this.style.touchAction = 'manipulation'
        this.addEventListener("click", () => this.onClick(true))
    }

    // grade: string = 'Unknown' // NOTE: This cannot be overwritten?

    // NOTE: Need a trigger so the chain is run
    onClick(trigger?: any) {
        return this.grade
    }

    text () {
        const text = document.createElement("div")
        text.textContent = this.grade
        return text
    }

    render() {
        return [
            this.text
        ]
    }
}

let name = "button-component"
customElements.define(name, ButtonComponent);

export default ButtonComponent