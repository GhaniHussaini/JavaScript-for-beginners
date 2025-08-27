    var width = window.innerWidth;
    var height = window.innerHeight;
    alert("Width: " + width + "\nHeight: " + height);
    alert(window.location.href);
    alert(window.location.hostname);
    alert(window.location.protocol);
    alert(window.location.port);
    alert(window.location.pathname);
    alert(window.location.search);
                




function showBOMInfo()
{
    if (window.confirm("Would you like to print name and age?")) {
          var nam =document.getElementsByName("name")[0].value;
          var age =document.getElementsByName("age")[0].value;
            alert("You printed such as  Name: " + nam + "\nAge: " + age);
            document.writeln("Name: " + nam + "<br>Age: " + age);
         } else
            {
                alert("You  Cancel!");
            }
}