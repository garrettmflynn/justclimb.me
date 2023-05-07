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

        // NOTE: Assumes depth of one
        const got = window.location.pathname.split('/').filter(v => v).slice(-1)[0]
        const active = got ? got.replaceAll('#', '') : ''

        const links = document.createElement('div')
        const linkEls = this.pages.map(({ label, element }, i) => {
            const a = document.createElement('a')
            a.style.marginLeft = '15px'
            a.href = '#'
            a.innerText = label

            const path = label.toLowerCase()
            a.onclick = () => {
                const body = this.body()
                const child = body.children[0]
                if (!child) body.append(element)
                else child.replaceWith(element)
                window.history.pushState({}, null, path)
            }
            
            if (i === 0)  header.onclick = a.onclick
            if (path === active) a.click()
            return a
        })

        if (!active) linkEls[0].click()

        links.append(...linkEls)

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