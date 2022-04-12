$(document).ready(function() {
        //delete all tasks and change active list title effect control...
    $(".left-delete-button").click(function() {
        $(".active-list-title").text("Deleting active list...")
        $(".left-list-area").hide(300, function() {
            $(".left-list-area").show(300)
            $(".active-list-title").text("active list show for you...")
        })
    })

    $(".right-delete-button").click(function() {
        $(".delete-list-title").text("Deleting done list...")
        $(".right-list-area").hide(300, function() {
            $(".right-list-area").show(300)
            $(".delete-list-title").text("done list show for you...")
        })
    })

})

$("#delete-button").click(function() {
    $("#build-li").hide(250)
    console.log("done");
})