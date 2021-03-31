
Button1.onclick=function(){
      query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`the results are : \n ${results}`)
        if (results.length == 0)
            Label2.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                Select2.addItem(results[i][1])
        }

    } else
        Label2.value = "Error code: " + req.status
}

Button2.onclick=function(){
  deletedUser =  Select2.text
   let found = false
    for (i = 0; i < results.length; i++) {
        if (deletedUser == results[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       Label2.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + deletedUser + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                Label2.textContent = `You have successfully deleted the customer named ${deletedUser}`
            else
                Label2.textContent = `There was a problem deleting ${deletedUser} from the database.`
      else
        Label2.textContent = `Error: ${req.status}`
    } 

  Select2.clear();
}
