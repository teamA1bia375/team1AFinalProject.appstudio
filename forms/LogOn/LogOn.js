// Global variables for database 
let req = {} 
let query = ""
let results = []
let pw = "ac@T!.........." 
let netID = "chc72331"
let database = "375groupa1"
let allUserData = []
let userName = ""
let recipient = ""

//SIGNING IN
btnLogin.onclick=function(){
//CHECKS IF USERNAME EXISTS
  userName = inptLogin.value
  query = "SELECT * FROM user WHERE userName = '" + userName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessage2.value = "USER NAME NOT FOUND"
        else {        
      
//CHECKS IF PASSWORD IS CORRECT 
  let password = ""
  userPassword = inptPassword.value
  query = "SELECT * FROM user WHERE password = '" + userPassword + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessage2.value = "INCORRECT PASSWORD"
        else {        
      ChangeForm(SelectRecipient)
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status



        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}

//GO TO MAKE AN ACCOUNT PAGE
btnUserInfo.onclick=function(){
  ChangeForm(AddAccount)
}
