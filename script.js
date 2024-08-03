function makeCow() {
    let skin = getValueOfRadioButton(document.getElementsByName("cow-skin"));
    let mode = getValueOfRadioButton(document.getElementsByName("thinkorsay-button"));
    let options = getValueOfRadioButton(document.getElementsByName("option"));
    let message = document.getElementById("message").value;
    let topLine = "";
    let bottomLine = "";
    let cow = "";
    let tongue = "&nbsp;";
    let eyes = "oo";
    let connectingStrokeLeft
    let connectingStrokeRight
    let cornerStyle1
    let cornerStyle2
    let line
    let supportAdditionalOptions = true

    if (options === "paranoid")
        eyes = "@@"
    else if (options === "dead")
    {
        eyes = "XX"
        tongue = "U"
    } else if (options === "stoned")
    {
        eyes = "**"
        tongue = "U"
    } else if (options === "greedy")
        eyes = "$$"
    else if (options === "tired")
        eyes ="--"

    if (mode === "say") {
        connectingStrokeLeft = "|"
        connectingStrokeRight = "|"
        cornerStyle1 = "/"
        cornerStyle2 = "\\"
        line = "\\"
    } else {
        connectingStrokeLeft = "("
        connectingStrokeRight = ")"
        cornerStyle1 = "("
        cornerStyle2 = ")"
        line = "o"
    }

    if (message === "")
        message = "Typical cowsay output!"

    if (supportAdditionalOptions === true)
        document.getElementById("additional-options").style.visibility = "visible";
    else
        document.getElementById("additional-options").style.visibility = "hidden";

    let input_string
    let i
    if (message.length <= 30) {
        for (i = 0; i < message.length + 2; i++) {
            topLine = topLine + "_"
            bottomLine = bottomLine + "-"
        }

        if (mode === "say")
            message = "&nbsp;" + topLine + "<br><&nbsp;" + message + "&nbsp;><br>" + "&nbsp;" + bottomLine + "<br>" + cow
        else
            message = "&nbsp;" + topLine + "<br>(&nbsp;" + message + "&nbsp;)<br>" + "&nbsp;" + bottomLine + "<br>" + cow

    } else {
        for (i = 0; i <= 31; i++) {
            topLine = topLine + "_"
            bottomLine = bottomLine + "-"
        }

        input_string = message
        message = "&nbsp;" + topLine + "<br>"

        for (i = 0; i < ((input_string.length / 30) - 1); i++) {
            if (i === 0) {
                message = message + cornerStyle1 + "&nbsp;" + input_string.substring(i * 30, i * 30 + 30) + "&nbsp;" + cornerStyle2 + "<br>"
            } else {
                message = message + connectingStrokeLeft + "&nbsp;" + input_string.substring(i * 30, i * 30 + 30) + "&nbsp;" + connectingStrokeRight + "<br>"
            }
        }

        let spaces = ""
        if (input_string.substring(i * 30, i * 30 + 30).length < 30) {
            let k = 30 - input_string.substring(i * 30, i * 30 + 30).length
            let j
            for (j = 0; j < k; j++) {
                spaces = spaces + "&nbsp;"
            }
        }

        if (mode === "think") {
            let tmp;
            tmp = cornerStyle1
            cornerStyle1 = cornerStyle2
            cornerStyle2 = tmp
        }
        message = message + cornerStyle2 + "&nbsp;" + input_string.substring(i * 30, i * 30 + 30) + spaces + "&nbsp;" + cornerStyle1 + "<br>"
        message = message + "&nbsp;" + bottomLine + "<br>" + cow
    }
    document.getElementById("output").innerHTML = message;
}

function getValueOfRadioButton(button) {
    let i
    for (i = 0; i < button.length; i++) {
        if (button[i].checked) {
            return button[i].value;
        }
    }
}
