import Page from './page';

class RandomUserPage extends Page{

    get newUserButton() {
        return $('#save')
    }

    get loadingDiv(){
        return $('#loading')
    }
    get firstName(){
        return this.loadingDiv.$('//br[3]')
    }

    /**
     * Open Random User page
     * @param page
     * @returns {*}
     */

    open(page) {
        return super.open(page);
        expect(this.newUserButton).toBeDisplayed()
    }

    /**
     * Get Names
     * @returns {*}
     */
    getName(){
      return this.loadingDiv.getText()

    }

    /**
     * Creating a new user and waiting for the spinner to finish
     */

    createNewUser(){
        this.newUserButton.click()
        browser.waitUntil(()=>{
           return this.loadingDiv.getText()!==' loading...'

        })
    }

}

export default new RandomUserPage();