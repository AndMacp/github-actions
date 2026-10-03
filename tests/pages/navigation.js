export class NavigationObjectClass {
    constructor (page) {
        this.title = page.getByText('ull-stack developer', { exact: true })
    }

    getTitle()
    {
        return this.title
    }
}