//alert("welcome to team GitHub class project app, ya filthy animal.")

Switch1.onchange = function() {
  if (Switch1.value == true)
    Label1.value = "Now tracking your location!" // Trying to get it to print on multiple lines
  else
    Label1.value = "Not tracking your location"
}