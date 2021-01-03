function JSONsTable(input) {
    let htmlTable = '<table>'

    for (const line of input) {
        let curObj = JSON.parse(line);
        htmlTable += '\n\t<tr>\n\t\t<td>' + Object.values(curObj).join('</td>\n\t\t<td>') + '</td>\n\t</tr>'
    }

    htmlTable += '\n</table>';

    console.log(htmlTable);
}

JSONsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)