$(document).ready(function() {
    paragraph = ``
    let classes = []

    function SceneTyping(id) {
        fetch(`/json/dialogues.json`).then((res) => res.json()).then((data) => {
            classes = [data[id]["class"]]
            paragraph = `<p>${data[id]["dialogue"]}</p>`





            var typed = new Typed('#CutScene', {
                strings: [paragraph],
                typeSpeed: data[id]["TypingSpeed"],

            });


        })
    }




    SceneTyping(0)
})