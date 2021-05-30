$ (document).ready(function() {
    $('.subbtn button').mouseenter(function() {
        $(this).css("background-color" , "rgb(156, 39, 176)")
        $(this).css("color" , "white")
    })
    $('.subbtn button').mouseleave(function() {
        $(this).css("background-color" , "rgb(41, 93, 134)")
        $(this).css("color" , "white")
    })
})