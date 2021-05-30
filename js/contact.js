$ (document).ready(function() {
    $('.subbtn button').mouseenter(function() {
        $(this).css("background-color" , "rgb(156, 39, 176)");
        $(this).css("color" , "white");
        $(this).css('box-shadow' , '1px 1px 10px 0px rgb(3, 169, 244) inset') ;
    });
    $('.subbtn button').mouseleave(function() {
        $(this).css("background-color" , "rgb(41, 93, 134)");
        $(this).css("color" , "white");
        $(this).css('box-shadow' , 'none') ;
    });
    $('.flexform input').mouseenter(function() {
        $(this).css('box-shadow' , '1px 1px 15px 0px #4d4b50');
    });
    $('.flexform input').mouseleave(function() {
        $(this).css('box-shadow' , 'none');
    });
    $ ('#message').mouseenter(function(){
        $(this).css('box-shadow' , '1px 1px 15px 0px #4d4b50') ;
    });
    $ ('#message').mouseleave(function(){
        $(this).css('box-shadow' , 'none') ;
    });
    // $('.flexform input').focus(function() {
    //     $(this).css('box-shadow' , '2px 2px 15px 0px #000')
    // })
    // $('.flexform input').blur(function() {
    //     $(this).css('box-shadow' , 'none')
    // })
});