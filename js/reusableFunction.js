
function dinamicFunction(type = "somestyle", message ="some text") {
    const html = `<div class="someStyle ${type}">${message}</div>`;
    return html;
};