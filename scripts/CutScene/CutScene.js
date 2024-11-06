$(document).ready(function() {
    let classes = []
    let html = ''
    let DialogueIsTyping = false
    let HintIsTyping = false;

    function SceneTyping(id) {
        fetch(`/json/dialogues.json`).then((res) => res.json()).then((data) => {
            function AddClasses() {
                $("#Script").addClass(data[id]["class"])
            }

            function ClearClasses() {
                $("#Script").removeClass()
            }


            function NextDialogue() {

                if (DialogueIsTyping) return; // Prevent re-typing if already typing

                DialogueIsTyping = true; // Set typing state to true

                var ScriptTyped = new Typed('#Script', {
                    strings: [data[id]["dialogue"], "Second sentence."],
                    typeSpeed: 30,
                    showCursor: false,
                    onBegin: AddClasses,
                    onComplete: () => {
                        // Enable button when typing completes
                        $("#Hint-Btn").prop('disabled', false);
                        DialogueIsTyping = false; // Reset typing state
                        ClearClasses()
                    },
                    onStart: () => {
                        // Disable button when typing starts
                        $("#Hint-Btn").prop('disabled', true);
                        AddClasses()
                    }
                });
            }




            function Hints() {
                if (HintIsTyping) return; // Prevent re-typing if already typing

                HintIsTyping = true; // Set typing state to true

                var HintTyped = new Typed('#Hint-box', {
                    strings: [`Hint : ${data[id]["Hint"]}`],
                    typeSpeed: 30,
                    showCursor: false,
                    onComplete: () => {
                        // Enable button when typing completes
                        $("#Hint-Btn").prop('disabled', false);
                        HintIsTyping = false; // Reset typing state
                    },
                    onStart: () => {
                        // Disable button when typing starts
                        $("#Hint-Btn").prop('disabled', true);
                    }
                });
            }



            $(document).on('keypress', function(e) {
                if (e.which == 13 || e.which == 32 && Permission == true) {
                    NextDialogue()
                }
            });

            $("#Hint-Btn").on("click", Hints)

        })
    }




    SceneTyping(0)
})