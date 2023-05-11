import { CommonElement } from "../../external/commonwealth/index";
import { getAverageGrade, getScore } from "../metrics";

type PageType = {
    label: string,
    element: HTMLElement
}

class PageComponent extends CommonElement {

    declare pages: PageType[]

    constructor(info: any) {
        super(info)

        this.style.display = 'grid'
        this.style.gridTemplateColumns = '1fr'
        this.style.gridTemplateRows = 'auto 1fr'
        this.style.height = '100%'
    }

    nav () {
        const nav = document.createElement('nav')

        const header = document.createElement('h2')
        header.innerText = this.header

        const params = new URLSearchParams(window.location.search)
        const active = params.get('page')

        const links = document.createElement('div')
        const linkEls = this.pages.map(({ label, element }, i) => {
            const a = document.createElement('a')
            a.style.marginLeft = '15px'
            a.href = 'javascript:undefined'
            a.innerText = label

            const path = label.toLowerCase()
            a.onclick = () => {
                const body = this.body()
                const child = body.children[0]
                if (!child) body.append(element)
                else child.replaceWith(element)
                window.history.pushState({}, '', `?page=${path}`)
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

    #body = document.createElement("div")
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