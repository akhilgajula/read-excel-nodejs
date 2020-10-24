const Excel = require('exceljs');
const check = require('./checkFileExist');

const fileName = 'users3.xlsx'
const sheetName = 'Sheet1';
const rows = [
    ['teja', 25],
    ['akhil', 22]
]

const workbook = new Excel.Workbook();


check(fileName, (result) => {
    if (result) {
        console.log('File Exists');

        workbook.xlsx.readFile(fileName).then( () => {
                const worksheet = workbook.getWorksheet(sheetName);
                worksheet.addRows(rows);

                workbook.xlsx.writeFile(fileName).then((error) => {
                    if (!error) {
                        console.log('Created successfully')
                    }
                }).catch(() => console.log('error occured while writing to file'))
        }).catch(error => console.log('error while reading file'));
    } else {
        console.log('File Doesnt Exixts');

        const worksheet = workbook.addWorksheet(sheetName);

        worksheet.columns = [
            { header: 'User', key: 'user' },
            { header: 'Age', key: 'age' }
        ]

        rows.forEach((row) => {
            worksheet.addRow({
                'user': row[0],
                'age': row[1]
            });
        });

        workbook.xlsx.writeFile(fileName).then(() => {
                console.log('Created successfully')
        }).catch(() => console.log('error occured while writing to file'))
    }
})

