

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    get siteName () { return $('#site-name') }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    open (path) {
        return browser.url('https://www.seleniumeasy.com/test/' + path)
        expect (this.siteName).toHaveTextContaining('Selenium Easy')
    }
}
