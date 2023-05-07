import { CommonElement } from "../../external/commonwealth/index";

type PageType = {
    label: string,
    element: HTMLElement
}

class PageComponent extends CommonElement {

    declare pages: PageType[]

    constructor(info: any) {
        super(info)
    }

    nav () {
        const nav = document.createElement('nav')
        const header = document.createElement('h2')
        header.innerText = this.header

        const links = document.createElement('div')
        links.append(...this.pages.map(({ label, element }, i) => {
            const a = document.createElement('a')
            a.style.paddingLeft = '15px'
            a.href = '#'
            a.innerText = label
            a.onclick = () => {
                const body = this.body()
                const child = body.children[0]
                if (!child) body.append(element)
                else child.replaceWith(element)
            }
            if (i === 0) a.click() // Click the first link
            return a
        }))

        nav.append(header, links)

        return nav
    }

    #body = document.createElement("section")
    body = () => this.#body

    render() {
        
        return [
            this.nav,
            this.body
        ]
    }
}

let name = "page-component"
customElements.define(name, PageComponent);

export default PageComponent