const Excel = require('exceljs');
const check = require('./checkFileExist')

const fileName = 'users2.xlsx';
const sheetName = 'Sheet1';

check(fileName, (result) => {
    if (result) {
        const workbook = new Excel.Workbook();
        workbook.xlsx.readFile(fileName).then(() => {
            const worksheet = workbook.getWorksheet(sheetName);
            worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                // console.log(` ${row} : ${rowNumber} `);
                console.log(rowNumber, row.values[1], row.values[2]);
            })
        })
    } else {
        console.log('File Doesnt exist');
    }
})
