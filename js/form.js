/* Добавление сегодняшней даты, как максимально возможной */
datePickerId.max = new Date().toISOString().split("T")[0];

/* Добавление загрузочного экрана */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", formSend);

    function formSend()
    {
        form.classList.add("_sending");
    }
})

/*
Эта функции фокусят курсос на начале формы номера, и помогают в заполнении полей номера.
*/

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
}

function mask(e) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}

window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});
