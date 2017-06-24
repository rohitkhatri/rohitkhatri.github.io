// import commands from '.commands.json'

const commands = [{
	"cmd": "bold",
	"icon": "bold"
}, {
	"cmd": "insertImage",
	"icon": "picture-o",
}, {
	"cmd": "italic",
	"icon": "italic",
}, {
	"cmd": "justifyCenter",
	"icon": "align-center",
}, {
	"cmd": "justifyFull",
	"icon": "align-justify",
}, {
	"cmd": "justifyLeft",
	"icon": "align-left",
}, {
	"cmd": "justifyRight",
	"icon": "align-right",
}, {
	"cmd": "redo",
	"icon": "repeat",
}, {
	"cmd": "strikeThrough",
	"icon": "strikethrough",
}, {
	"cmd": "underline",
	"icon": "underline",
}, {
	"cmd": "undo",
	"icon": "undo",
}];


const init = (buttons) => {
	document.querySelector(".buttons").innerHTML = buttons.join('');
}

const generateButtons = (commands) => commands.map((command) => createButtons('btn-succes', command.cmd, icon(command)));

const createButtons = (btnClass, command, iconClass) => `<span><code class="btn btn-xs ${btnClass}" zonmousedown="event.preventDefault();" onclick="applyEffect('${command}')"><i class="${iconClass}"></i></code></span>&nbsp;&nbsp;`

const icon = (cmd) => cmd.icon ? `fa fa-${cmd.icon} fa-2x` : "";

const applyEffect = (cmd) => {
	const val = (cmd === "insertImage")? prompt("Paste Your Link here:") : "";
	document.execCommand(cmd, false, (val || ""));
}

init(generateButtons(commands));


function getCursorLetter(event){
	const backSpace = document.getElementById('editable-content');
	var key = event.keyCode || event.charCode;
	if ( key == 8 || key == 46) {
	    const caretPosition = window.getSelection().anchorOffset;
	    const caretString = !!backSpace.innerHTML[caretPosition - 2].trim() ? backSpace.innerHTML[caretPosition - 2]: 'space';
	    console.log('%ccaretString', "color:blue;", caretString);
	}
}