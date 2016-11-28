/**
 * Created by cody on 05/10/16.
 */
function myStart() {
    document.getElementById("plus").addEventListener("click", function(){
            var el = document.getElementById('body');
            var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            // now you have a proper float for the font size (yes, it can be a float, not just an integer)
            el.style.fontSize = (fontSize + 1) + 'px';}
        ,false);

    document.getElementById("min").addEventListener("click", function(){
            var el = document.getElementById('body');
            var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            // now you have a proper float for the font size (yes, it can be a float, not just an integer)
            el.style.fontSize = (fontSize - 1) + 'px';}
        ,false);
}

myStart()

document.getElementById("inputvalue").addEventListener('input', function() {
    var out = document.getElementById("output");
    var input = document.getElementById("inputvalue");

    out.innerHTML = "<img id='loading-image' src='ajax-loader.gif' alt='Loading...' />";

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", function() {
        if (this.readyState == 4 && this.status == 200) {
            out.innerHTML = this.responseText;
        } else if(this.readyState == 4 && this.status != 200){
            out.innerHTML = "Lost connection.";
        }
    });
    xhttp.open("GET", "concertenh.php?data=" + input.value , true);
    xhttp.send();

},true);
