import Page from './page';
import {numberOfElementsToBe} from "wdio-wait-for";
import {getElement} from "wdio-wait-for/lib/src/utils";
import * as Console from "console";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TableSearch extends Page {
    /**
     * define selectors using getter methods
     */
    get tasksTable() {
        return $('#task-table')
    }

    get tableBody() {
        return this.tasksTable.$('tbody')
    }

    get tableHead() {
        return this.tasksTable.$('thead')
    }

    get allRowsTaskTable() {
        return this.tableBody.$$('tr')
    }

    get tableHeaders() {
        return this.tableHead.$$('tr > th')
    }

    get tableCells() {
        return $$('#task-table > tbody > tr > td')
    }

    //document.querySelector("#task-table > tbody > tr:nth-child(1)")
    // get inputPassword () { return $('#password') }
    // get btnSubmit () { return $('button[type="submit"]') }

    // /**
    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open(page) {
        return super.open(page);
        expect(this.tasksTable).toBeDisplayed()
    }

    /**
     * To get number of rows for a table
     * @returns {Promise<number>}
     */
    getNoOfRows() {
        let rowCount = 0
        rowCount = this.allRowsTaskTable.length
        return rowCount
    }

    /**
     * To Return row text for a give row. Row index start with 0.
     * @param rowNumber
     */
    getRowText(rowNumber) {
        this.allRowsTaskTable.forEach((element, index, list) => {
            if (rowNumber - 1 === index) {
                console.log("Row Text for " + rowNumber)
                console.log(element.getText())
            }
        })
    }

    /**
     * Print Table data in JSON format
     */
    getTableData() {
        let rows = [];
        let headerText = []


        let $headers = this.tableHeaders
        this.allRowsTaskTable.forEach((row, rowIndex, rowList) => {
            let cells = row.$$('td')
            rows[rowIndex] = {};
            cells.forEach((cell, cellIndex, cellList) => {
                if (headerText[cellIndex] === undefined) {
                    if ($($headers[cellIndex]).getText() === '#') {
                        headerText[cellIndex] = 'No'
                    } else {
                        headerText[cellIndex] = $($headers[cellIndex]).getText()
                    }

                }
                rows[rowIndex][headerText[cellIndex]] = cell.getText()
            })
        })

        let testData = {
            "TestData": rows
        }
        console.log(testData)
    }

}

export default new TableSearch();
