$(document).ready(function() {
    let classes = []
    html = ''

    function SceneTyping(id) {
        fetch(`/json/dialogues.json`).then((res) => res.json()).then((data) => {
            function AddClasses() {
                $("#Script").addClass(data[id]["class"])
            }

            function ClearClasses() {
                $("#Script").removeClass()
            }


            var typed = new Typed('#Script', {
                strings: [data[id]["dialogue"], "Second sentence."],
                typeSpeed: 30,
                showCursor: false,
                onBegin: AddClasses,
                onComplete: ClearClasses,
            });


        })
    }




    SceneTyping(0)
})