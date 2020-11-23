$(document).ready(function(){
    $('button').on('click', function() {
			$("#name").animate({
            left: '+=300px',
            opacity: '0.5',
            height: '+=200px',
            width: '+=100px'
             });
    });
});
