const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "dracula",
    autoCloseTags: true
})

// const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
//     lineNumbers: true,
//     tabSize: 4,
//     mode: "xml",
//     theme: "dracula",
//     autoCloseTags: true
// })
// const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
//     lineNumbers: true,
//     tabSize: 4,
//     mode: "xml",
//     theme: "dracula",
//     autoCloseTags: true
// })
// const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
//     lineNumbers: true,
//     tabSize: 4,
//     mode: "xml",
//     theme: "dracula",
//     autoCloseTags: true
// })

document.querySelector("#run-btn").addEventListener("click", function(){
    let codeHtml = htmlEditor.getValue();
    // let codeCss = "<style>" + cssEditor.getValue() + "</style>";
    // let codeJs = "<scr" + "ipt>" + jsEditor.getValue() + "</scr" + "ipt>";

    let preview = document.querySelector("#preview-window").contentWindow.document;
    preview.open();
    preview.write(codeHtml);
    preview.close();
})

