import TableSearchPage from '../pageobjects/tablesearch.page';
import RandomUserPage from '../pageobjects/randomuser.page'
import SecurePage from '../pageobjects/secure.page';

describe('Working with Tables', () => {
    it('should navigate to table filter', function () {
         TableSearchPage.open('table-search-filter-demo.html');
    });

    it('should return the number of rows count', function () {
        const expectedNoOfRows=7
        const actualNoOfRows= TableSearchPage.getNoOfRows()
        expect(actualNoOfRows).toEqual(expectedNoOfRows)
        console.log("no of rows is: "+actualNoOfRows)

     });

    it('should return data for the mentioned row', function (){
        TableSearchPage.getRowText(2)
    });

    it('should print table data', function (){
        TableSearchPage.getTableData()
    });

    it('should navigate Dynamic data page', function () {
        RandomUserPage.open('dynamic-data-loading-demo.html');
        RandomUserPage.createNewUser()
        let name=RandomUserPage.getName()
        console.log('Name is: '+name)
    });
});




