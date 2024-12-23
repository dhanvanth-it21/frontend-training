document.addEventListener("DOMContentLoaded", () => {
    // height-100-width-10
    // { "tag" : "table", "class" : ""},
    const tableDetails = [

        // 1st row
        { "htmlTag" : "tr", "class" : "", "name":"1tr" ,"target":"rootTable"},
        { "htmlTag" : "td", "class" : "height-100-width-10", "name":"1tr1td","target":"1tr"},
        { "htmlTag" : "td", "class" : "height-50-width-60", "name":"1tr2td","target":"1tr"},
        { "htmlTag" : "table", "class" : "", "name":"1tr2td1table","target":"1tr2td"},
        { "htmlTag" : "tr", "class" : "", "name":"1tr2td1table1tr","target":"1tr2td1table"},
        { "htmlTag" : "td", "class" : "height-50-width-60", "name":"1tr2td1table1tr1td","target":"1tr2td1table1tr"},

        { "htmlTag" : "tr", "class" : "", "name":"1tr2td1table2tr","target":"1tr2td1table"},
        { "htmlTag" : "table", "class" : "", "name":"1tr2td1table2tr1table","target":"1tr2td1table2tr"},
        { "htmlTag" : "tr", "class" : "", "name":"1tr2td1table2tr1table1tr","target":"1tr2td1table2tr1table"},
        { "htmlTag" : "td", "class" : "height-50-width-60", "name":"1tr2td1table2tr1table1tr1td","target":"1tr2td1table2tr1table1tr"},
        { "htmlTag" : "td", "class" : "height-50-width-10", "name":"1tr2td1table2tr1table1tr2td","target":"1tr2td1table2tr1table1tr"},
        { "htmlTag" : "td", "class" : "height-50-width-10", "name":"1tr2td1table2tr1table1tr3td","target":"1tr2td1table2tr1table1tr"},
        { "htmlTag" : "td", "class" : "height-50-width-10", "name":"1tr2td1table2tr1table1tr4td","target":"1tr2td1table2tr1table1tr"},


        //2nd row
        { "htmlTag" : "tr", "class" : "", "name":"2tr" ,"target":"rootTable"},
        { "htmlTag" : "td", "class" : "", "name":"2tr1td" ,"target":"2tr"},
        { "htmlTag" : "table", "class" : "", "name":"2tr1td1table" ,"target":"2tr1td"},
        { "htmlTag" : "tr", "class" : "", "name":"2tr1td1table1tr" ,"target":"2tr1td1table"},
        { "htmlTag" : "td", "class" : "height-200-width-70", "name":"2tr1td1table1tr1td" ,"target":"2tr1td1table1tr"},
        //3rd row ---------------------------------------------------------------
        { "htmlTag" : "tr", "class" : "", "name":"3tr" ,"target":"rootTable"},
        { "htmlTag" : "table", "class" : "", "name":"3tr1table" ,"target":"3tr"},
        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr" ,"target":"3tr1table"},
        { "htmlTag" : "td", "class" : "height-100-width-20", "name":"3tr1table1tr1td" ,"target":"3tr1table1tr"},
        { "htmlTag" : "td", "class" : "", "name":"3tr1table1tr2td" ,"target":"3tr1table1tr"},
        { "htmlTag" : "table", "class" : "", "name":"3tr1table1tr2td1table" ,"target":"3tr1table1tr2td"},
        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table1tr" ,"target":"3tr1table1tr2td1table"},
        { "htmlTag" : "td", "class" : "height-50-width-60", "name":"3tr1table1tr2td1table1tr1td" ,"target":"3tr1table1tr2td1table1tr"},
        { "htmlTag" : "td", "class" : "height-50-width-20", "name":"3tr1table1tr2td1table1tr2td" ,"target":"3tr1table1tr2td1table1tr"},

        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table2tr" ,"target":"3tr1table1tr2td1table"},
        { "htmlTag" : "table", "class" : "", "name":"3tr1table1tr2td1table2tr1table" ,"target":"3tr1table1tr2td1table2tr"},
        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr" ,"target":"3tr1table1tr2td1table2tr1table"},
        { "htmlTag" : "td", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr1td" ,"target":"3tr1table1tr2td1table2tr1table1tr"},
        { "htmlTag" : "table", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr1td1table" ,"target":"3tr1table1tr2td1table2tr1table1tr1td"},

        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr1td1table1tr" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table"},
        { "htmlTag" : "td", "class" : "height-25-width-25", "name":"3tr1table1tr2td1table2tr1table1tr1td1table1tr1td" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table1tr"},
        { "htmlTag" : "td", "class" : "height-25-width-25", "name":"3tr1table1tr2td1table2tr1table1tr1td1table1tr2td" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table1tr"},
        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr1td1table2tr" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table"},
        { "htmlTag" : "td", "class" : "height-25-width-25", "name":"3tr1table1tr2td1table2tr1table1tr1td1table2tr1td" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table2tr"},
        { "htmlTag" : "td", "class" : "height-25-width-25", "name":"3tr1table1tr2td1table2tr1table1tr1td1table2tr2td" ,"target":"3tr1table1tr2td1table2tr1table1tr1td1table2tr"},

        { "htmlTag" : "td", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr2td" ,"target":"3tr1table1tr2td1table2tr1table1tr"},
        { "htmlTag" : "table", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr2td1table" ,"target":"3tr1table1tr2td1table2tr1table1tr2td"},
        { "htmlTag" : "tr", "class" : "", "name":"3tr1table1tr2td1table2tr1table1tr2td1table1tr" ,"target":"3tr1table1tr2td1table2tr1table1tr2td1table"},
        { "htmlTag" : "td", "class" : "height-50-width-30", "name":"3tr1table1tr2td1table2tr1table1tr2td1table1tr1td" ,"target":"3tr1table1tr2td1table2tr1table1tr2td1table1tr"},
        // 4th row--------------------------------------------------------------------------------------------------
        { "htmlTag" : "tr", "class" : "", "name":"4tr" ,"target":"rootTable"},
        { "htmlTag" : "td", "class" : "", "name":"4tr1td" ,"target":"4tr"},
        { "htmlTag" : "table", "class" : "", "name":"4tr1td1table" ,"target":"4tr1td"},
        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr" ,"target":"4tr1td1table"},

        { "htmlTag" : "td", "class" : "", "name":"4tr1td1table1tr1td" ,"target":"4tr1td1table1tr"},
        { "htmlTag" : "table", "class" : "", "name":"4tr1td1table1tr1td1table" ,"target":"4tr1td1table1tr1td"},
        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr1td1table1tr" ,"target":"4tr1td1table1tr1td1table"},
        { "htmlTag" : "td", "class" : "height-100-width-40", "name":"4tr1td1table1tr1td1table1tr1td" ,"target":"4tr1td1table1tr1td1table1tr"},
        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr1td1table2tr" ,"target":"4tr1td1table1tr1td1table"},
        { "htmlTag" : "td", "class" : "height-100-width-40", "name":"4tr1td1table1tr1td1table2tr1td" ,"target":"4tr1td1table1tr1td1table2tr"},


        { "htmlTag" : "td", "class" : "", "name":"4tr1td1table1tr2td" ,"target":"4tr1td1table1tr"},
        { "htmlTag" : "table", "class" : "", "name":"4tr1td1table1tr2td1table" ,"target":"4tr1td1table1tr2td"},

        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr2td1table1tr" ,"target":"4tr1td1table1tr2td1table"},
        { "htmlTag" : "td", "class" : "height-150-width-15", "name":"4tr1td1table1tr2td1table1tr1td" ,"target":"4tr1td1table1tr2td1table1tr"},
        { "htmlTag" : "td", "class" : "height-150-width-15", "name":"4tr1td1table1tr2td1table1tr2td" ,"target":"4tr1td1table1tr2td1table1tr"},

        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr2td1table2tr" ,"target":"4tr1td1table1tr2td1table"},
        { "htmlTag" : "table", "class" : "", "name":"4tr1td1table1tr2td1table2tr1table" ,"target":"4tr1td1table1tr2td1table2tr"},
        { "htmlTag" : "tr", "class" : "", "name":"4tr1td1table1tr2td1table2tr1table1tr" ,"target":"4tr1td1table1tr2td1table2tr1table"},
        { "htmlTag" : "td", "class" : "height-50-width-30", "name":"4tr1td1table1tr2td1table2tr1table1tr1td" ,"target":"4tr1td1table1tr2td1table2tr1table1tr"},
        //5th row ------------------------------------------------------------------------------------------------
        {"htmlTag" : "tr", "class" : "", "name":"5tr" ,"target":"rootTable"},
        { "htmlTag" : "table", "class" : "", "name":"5tr1table" ,"target":"5tr"},
        { "htmlTag" : "tr", "class" : "", "name":"5tr1table1tr" ,"target":"5tr1table"},
        { "htmlTag" : "td", "class" : "height-200-width-70", "name":"5tr1table1tr1td" ,"target":"5tr1table1tr"},
        //6th row --------------------------------------------------------------------------------
        { "htmlTag" : "tr", "class" : "", "name":"6tr" ,"target":"rootTable"},
        { "htmlTag" : "table", "class" : "", "name":"6tr1table" ,"target":"6tr"},
        { "htmlTag" : "tr", "class" : "", "name":"6tr1table1tr" ,"target":"6tr1table"},
        { "htmlTag" : "td", "class" : "height-100-width-70", "name":"6tr1table1tr1td" ,"target":"6tr1table1tr"},





    ];

    const rootTable = document.createElement("table");
    rootTable.name = "rootTable";

    const elements = { "rootTable": rootTable };

    tableDetails.forEach(detail => {
        elements[detail.name] = document.createElement(detail.htmlTag);
        if (detail.class) {
            elements[detail.name].className = detail.class;
        }
    });

    Object.keys(elements).forEach(key => {
        const detail = tableDetails.find(detail => detail.name === key);
        if (detail && detail.target) {
            elements[detail.target].appendChild(elements[key]);
        }
    });

    document.body.appendChild(rootTable);

})