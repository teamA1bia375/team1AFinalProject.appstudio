UserPage.onshow = function(){
  lblLoggedIn2.value = userName

  lblAccount.value = userName
  query = "SELECT name FROM recipient NATURAL JOIN user_recipient WHERE userName = '" + userName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
          lblMessage.value = "You have no recipients!"
        else {        
          results = JSON.parse(req.responseText)

    selRecipientList.clear()
    for (i = 0; i < results.length; i++)
        selRecipientList.addItem(results[i])
        } // end else
    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}

btnUserPageBack.onclick=function(){
  ChangeForm(HomePage)
}

btnSubmit.onclick=function(){
  let message = ""
  for (i = 0; i < selRecipientList.text.length; i++)
     message = message + selRecipientList.text[i]
     
  lblMessage.value = `You chose to send your notification to ${message}`
}

btnNewRecipient.onclick=function(){
  ChangeForm(AddRecipient)
}
