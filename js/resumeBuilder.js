/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%","Florian Zeidler")
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer")
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
