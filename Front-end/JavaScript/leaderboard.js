var buttons = document.querySelectorAll(".tabs button");
var boards = document.querySelectorAll(".board");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        for (var k = 0; k < boards.length; k++) {
            boards[k].classList.remove("active");
        }

        this.classList.add("active");
        document.getElementById(this.dataset.board).classList.add("active");
    });
}