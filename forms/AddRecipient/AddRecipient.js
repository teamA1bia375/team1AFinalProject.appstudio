
btnAdd.onclick=function(){
  let name = inptName.value
  let email = inptEmailRecipient.value

  let query = "INSERT INTO recipient (`name`, `email`) VALUES ('" + name + "', '" + email + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
      lblMessage1.value = "You added a new recipient!!"
    else
      lblMessage1.value = "There was a problem with adding the recipient to the database."
  } else
    lblMessage1.value = "Error: " + req.status
    
  query = "SELECT recipientID FROM `recipient` WHERE name = '" + name + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
   recipientID = JSON.parse(req.responseText)
   
  query = "INSERT INTO user_recipient (`userName`, `recipientID`) VALUES ('" + userName + "', '" + recipientID + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

}

Button1.onclick=function(){
  ChangeForm(UserPage)
}
