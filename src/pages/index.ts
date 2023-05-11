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

        const headerContainer = document.createElement('div')

        const header = document.createElement('h2')
        header.innerText = this.header

        const score = document.createElement('span')
        score.id = 'score'

        const sep = document.createElement('span')
        sep.innerText = ' — '

        header.append(sep, score)

        const subscore = document.createElement('small')
        subscore.id = 'subscore'

        headerContainer.append(header, subscore)

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

        nav.append(headerContainer, links)

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