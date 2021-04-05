UserPage.onshow = function(){
  query = "SELECT * FROM recipient"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
          lblMessage.value = "You have no recipients!"
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaRecipientList.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}

btnUserPageBack.onclick=function(){
  ChangeForm(HomePage)
}

btnSubmit.onclick=function(){
  
}
