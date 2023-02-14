function moveButton(elem){
    if( $(elem).parent().attr("id") == "container1" ){
        $(elem).detach().appendTo('#container2');
    }
    else{
        $(elem).detach().appendTo('#container1'); 
    }
}