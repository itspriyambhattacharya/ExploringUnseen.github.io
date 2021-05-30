$ (document).ready(function() {
    $('.readmore').mouseenter(function() {
        $(this).css("background-color" , "black")
        $(this).css("color" , "white")
    })
    $('.readmore').mouseleave(function() {
        $(this).css("background-color" , "white")
        $(this).css("color" , "black")
    })
    $('.readmore').click(function() {
        window.location.replace('blog.html')
    })
})