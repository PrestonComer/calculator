// On click of the buttons of the calculator we check what button was
// clicked and handle it accordingly
$("input[type='button']").on("click", function() {
    keyPressed = $("#textval").val();
    // upon = button pressed evaluate the text containing the total button pressed
    if (this.value == "=") {
        $("#textval").val(math.evaluate(keyPressed));
    }
    // upon clear button pressed make text containing math empty
    else if (this.value == "c") {
        $("#textval").val("");
    }
    // otherwise the user pressed a symbol that needs to be added to the text area
    else if (/[0-9\.\+\-\*\/]/.test(this.value)) {
        // seperated to solve base case of undefined + symbol pressed
        // takes the symbol pressed and appends it to the text area to be delt with later
        $("#textval").val((keyPressed ? keyPressed : "") + this.value);
    }
})