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

    let coward = `&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;,__,&nbsp;|&nbsp;&nbsp;&nbsp;|<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;(${eyes})\\|&nbsp;&nbsp;&nbsp;|___<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;)\\_<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|_w&nbsp;|&nbsp;&nbsp;\\<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;*<br><br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cower....`
    let defaultcow = `&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;^__^<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;(${eyes})\\_________<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\\/\\<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;&nbsp;||----w&nbsp;|<br>` +
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;<br><br>`
    let small = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;,__,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;(${eyes})____<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;)\\<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;||--||&nbsp;*<br>`
    let supermilker = `
&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;^__^<br>
&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;(${eyes})\\_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\\/\\&nbsp;&nbsp;&nbsp;&nbsp;|Super&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;||----W&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Milker|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;UDDDDDDDDD|______|`
    let flamingsheep = `&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;&nbsp;.;&nbsp;.&nbsp;&nbsp;:&nbsp;.'&nbsp;:&nbsp;&nbsp;:&nbsp;&nbsp;:&nbsp;.&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;i..\`:&nbsp;i\`&nbsp;i.i.,i&nbsp;&nbsp;i&nbsp;.&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;\`,--.|i&nbsp;|i|ii|ii|i:&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U${eyes}U\\.'@@@@@@\`.||'&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\__/(@@@@@@@@@@)'&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(@@@@@@@@)&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`YY~~~~YY'&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;||<br>`
    let headin = `<a href="https://www.southpark.de/en/video-clips/mqk1s7/south-park-you-didn-t-read-it" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;${line}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}<br>
&nbsp;&nbsp;&nbsp;&nbsp;^__^&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>
&nbsp;&nbsp;&nbsp;&nbsp;(${eyes})\\_______/&nbsp;&nbsp;_________<br>
&nbsp;&nbsp;&nbsp;&nbsp;(__)\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)=(&nbsp;&nbsp;____|_&nbsp;\\_____<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tongue}&nbsp;&nbsp;||----w&nbsp;|&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_____&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||</a>`
    let hellokitty = `<a href="https://m.media-amazon.com/images/I/71nXKEktZXL._AC_UF894,1000_QL80_.jpg" target="_blank">&nbsp;&nbsp;${line}<br>
&nbsp;&nbsp;&nbsp;${line}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\_)o<<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;O&nbsp;.&nbsp;O|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_____/</a>`
    let milk = `&nbsp;${line}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________&nbsp;<br>
&nbsp;&nbsp;${line}&nbsp;&nbsp;&nbsp;&nbsp;|__________|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\<br>
&nbsp;&nbsp;&nbsp;&nbsp;/___________/___/|<br>
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;==\\&nbsp;/==&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;|&nbsp;\\&nbsp;\\&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;\\&nbsp;\\|<br>
&nbsp;&nbsp;&nbsp;/|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\\&nbsp;\\<br>
&nbsp;&nbsp;/&nbsp;|&nbsp;&nbsp;\\_____/&nbsp;|&nbsp;&nbsp;&nbsp;/&nbsp;/<br>
&nbsp;/&nbsp;/|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;/|<br>
/||\\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;/||\\/<br>
&nbsp;&nbsp;&nbsp;&nbsp;-------------|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<__/&nbsp;&nbsp;&nbsp;&nbsp;\\__>`

    if (skin === "coward")
        cow = coward
    else if (skin === "cow")
        cow = defaultcow;
    else if (skin === "small")
        cow = small
    else if (skin === "supermilker")
        cow = supermilker
    else if (skin === "flamingsheep")
        cow = flamingsheep
    else if (skin === "headin")
        cow = headin
    else if (skin === "hellokitty") {
        supportAdditionalOptions = false
        cow = hellokitty
    } else if (skin === "milk") {
        supportAdditionalOptions = false
        cow = milk
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
