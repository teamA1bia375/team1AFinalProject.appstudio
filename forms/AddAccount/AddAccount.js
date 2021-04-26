btnUserAdd.onclick = function() {
  let firstName = inptFirstName.value
  let lastName = inptLastName.value
  let currentLocation = inptCurrLocation.value
  let userEmail = inptEmail.value
  let userName = inptUserName.value
  let pass = inptPass.value
  
//MAKES NEW ACCOUNT
  let query = "INSERT INTO user (`first_name`, `last_name`, `current_location`, `email`, `userName`, `password`) VALUES ('" + firstName + "', '" + lastName + "', '" + currentLocation + "', '" + userEmail + "', '" + userName + "', '" + pass + "')"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
      lblConfirm.textContent = "You are now a new user!!"
    else
      lblConfirm.textContent = "There was a problem with adding you to the database."
  } else
    lblConfirm.textContent = "Error: " + req.status
}

//GO BACK TO SIGN IN PAGE
btnUserBack.onclick=function(){
  ChangeForm(LogOn)
}
