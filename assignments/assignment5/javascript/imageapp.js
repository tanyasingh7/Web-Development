$(document).ready(function(){
	// when document is loaded (ready)
	// select element with id=hide
	// when you click on that element
    $("#hide").on('click',function(){
    	// select all <p> elements and hide them all
        $("img").hide();
    });
    $("#show").on('click',function(){
    	// when you click on element with id=show
    	// then show all <p> element
        $("img").show();
    });
    $("#fade").on('click',function(){
        $("img").fadeOut(800);
    });
});
