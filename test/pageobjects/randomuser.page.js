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

    open(page) {
        return super.open(page);
        expect(this.newUserButton).toBeDisplayed()
    }

    getName(){
      return this.loadingDiv.getText()

    }

    createNewUser(){
        this.newUserButton.click()
        browser.waitUntil(()=>{
           return this.loadingDiv.getText()!==' loading...'

        })
    }

}

export default new RandomUserPage();