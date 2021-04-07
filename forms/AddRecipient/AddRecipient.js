
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
}

btnDone.onclick=function(){
  ChangeForm(UserPage)
}
