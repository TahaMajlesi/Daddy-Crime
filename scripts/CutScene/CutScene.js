$(document).ready(function() {
    let html = ``

    function SceneTyping(id) {
        fetch(`/json/dialogues.json`).then((res) => res.json()).then((data) => {
            html = `<p class="font-${data[id]["font"]} text-${data[id]["TextSize"]} text-${data[id]["TextColor"]}">${data[id]["dialogue"]}</p>`
            var typed = new Typed('#CutScene', {
                strings: [html],
                typeSpeed: data[id]["TypingSpeed"],

            });
            console.log(data[id], true);

        })
    }




    SceneTyping(0)
})