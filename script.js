function makeCow() {
    var skin = getValueOfRadioButton(document.getElementsByName("cow-skin"));
    var mode = getValueOfRadioButton(document.getElementsByName("thinkorsay-button"));
    var options = getValueOfRadioButton(document.getElementsByName("option"));
    var message = document.getElementById("message").value;
    var top_line = "";
    var bottom_line = "";
    var line = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\ <br>"
    var cow = "";
    var tongue = "&nbsp;";
    var eyes = "oo";

    if(options = "paranoid")
        eyes = "@@"
    else if(options = "dead")
    {
        eyes = "XX"
        tongue = "U"
    }
    else if(options = "stoned")
    {
        eyes = "**"
        tongue = "U"
    }
    else if(options = "greedy")
        eyes = "$$"
    else if(options = "tired")
        eyes ="--"

    var coward = `&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;,__,&nbsp;|&nbsp;&nbsp;&nbsp;|<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;(oo)\\|&nbsp;&nbsp;&nbsp;|___<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;)\\_<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|_w&nbsp;|&nbsp;&nbsp;\\<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;*<br><br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cower....`
    var defaultcow = `&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;^__^<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;(oo)\\_________<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\\/\\<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;&nbsp;||----w&nbsp;|<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;<br><br>`
    var small = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;,__,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;(oo)____<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;)\\<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||--||&nbsp;*<br>`

    if (skin == "coward")
        cow = coward;
    else if (skin == "cow")
        cow = defaultcow;
    else if (skin == "small")
        cow = small

    if (message === "")
        message = "Typical cowsay output!";

    for (i = 0; i < message.length + 2; i++) {
        top_line = top_line + "_";
        bottom_line = bottom_line + "-";
    }

    message = "&nbsp;" + top_line + "<br><&nbsp;" + message + "&nbsp;><br>" + "&nbsp;" + bottom_line + "<br>" + cow;
    document.getElementById("output").innerHTML = message;
}

function getValueOfRadioButton(button) {
    for (i = 0; i < button.length; i++) {
        if (button[i].checked) {
            return button[i].value;
        }
    }
}
