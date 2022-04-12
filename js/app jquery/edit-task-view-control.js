$("#title-edit-place").on({
    mouseenter:function() {
        $(".main-title").text("please click for edit text task")
    },
    mouseleave:function() {
        $(".main-title").text("...Edit Task...")
    },
    focus:function() {
        $(".main-title").text("selected, let's edit text task")
    },
    blur:function() {
        $(".main-title").text("...Edit Task...")
    }
})

$("#description-edit-place").on({
    mouseenter:function() {
        $(".main-title").text("please click for edit description task")
    },
    mouseleave:function() {
        $(".main-title").text("...Edit Task...")
    },
    focus:function() {
        $(".main-title").text("selected, let's edit description task")
    },
    blur:function() {
        $(".main-title").text("...Edit Task...")
    }
})

$("#delete-btn").on({
    mouseenter:function() {
        $(".main-title").text("click for delete task")
    },
    mouseleave:function() {
        $(".main-title").text("...Edit Task...")
    }
})

$("#done-btn").on({
    mouseenter:function() {
        $(".main-title").text("click for back home")
    },
    mouseleave:function() {
        $(".main-title").text("...Edit Task...")
    }
})