let req = {}
let query = ""
let results = []
let pw = "ShawNAnDGuSFroMTVShoWPsycH"
let netID = "cow56739"
let customerData = []
let states = []


Form1CW.onshow = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`the results are : \n ${results}`)
        if (results.length == 0)
            Label1.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                Select1.addItem(results[i][1])
        }

    } else
        Label1.value = "Error code: " + req.status


    for (i = 0; i < results.length; i++)
        states.push(results[i][4])


    Dropdown1.clear()
    for (i = 0; i < states.length; i++)
        Dropdown1.addItem(states[i])




}


Dropdown1.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        Dropdown1.value = s
        console.log(s)
        query = "SELECT * FROM customer WHERE state = '" + s + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
        Select1.clear()
        if (req.status == 200) {
            results = JSON.parse(req.responseText)
            console.log(`the results are : \n ${results}`)
            if (results.length == 0)
                Label1.value = "There are no customers in the database."
            else {
                let message = ""
                for (i = 0; i < results.length; i++)
                    Select1.addItem(results[i][1])
            }
        }

    }
}