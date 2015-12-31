$( "#next" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( "#fname" ).css( "opacity" ) == "1"){
        $("#fname").animate({ opacity: 0 }, 400).hide();
    } else {
        $("#fname").animate({ opacity: 1 }, 400).show();
    }

});