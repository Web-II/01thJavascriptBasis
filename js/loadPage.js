
$(document).ready(function () {
    $('.accordion .card .card-body li').click(function () {
        let path = "html/" + $(this).closest(".collapse").prev().find("button").text().trim() + "/" + $(this).text().split(" ").join('') + ".html"
        path = path.toLowerCase();

        $('#content').load(path, function () {
            const allEditors = [...document.querySelectorAll(".editor")];
            allEditors.forEach((e) => {
                // create first editor
                var editor = ace.edit(e.id);
                editor.setTheme("ace/theme/sqlserver");
                editor.session.setMode("ace/mode/javascript");
                editor.renderer.setScrollMargin(10, 10);
                editor.setOptions({
                    // "scrollPastEnd": 0.8,
                    autoScrollEditorIntoView: true,
                    minLines: 5,
                    maxLines: 30
                });


                e.onkeydown = (event) => {
                    if (event.keyCode == 13 && event.ctrlKey) {
                        eval(ace.edit(e.id).getValue());
                    }
                }
            });
        });

    })
});