// counter code
var counter = 0;
var button = document.getElementById('counter');
button.onClick = function(){
    //Make request to counter end point
    
    // Capture the response and store it in the variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}