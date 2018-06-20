$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    
        //alert("HELLO")
        $("H1").text($("li").eq(randomChildNumber).text());
    });
});

