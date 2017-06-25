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

const createButtons = (btnClass, command, iconClass) => `<span><code class="btn btn-xs ${btnClass}" onmousedown="event.preventDefault();" onclick="applyEffect('${command}')" id="${command}"><i class="${iconClass}"></i></code></span>&nbsp;&nbsp;`

const icon = (cmd) => cmd.icon ? `fa fa-${cmd.icon} fa-2x` : "";

const applyEffect = (cmd) => {
	const val = (cmd === "insertImage")? prompt("Paste Your Link here:") : "";
	document.execCommand(cmd, false, (val || ""));
	checkStyleApplied(commands)
}

init(generateButtons(commands));

//cursor location when cursor movement
function getCursorLetter(event){
	const content = document.getElementById('editable-content');
	var key = event.keyCode || event.charCode;
	checkStyleApplied(commands);
	if ( key == 8 || key == 46) {
	    const caretPosition = window.getSelection().anchorOffset;
	    const caretString = !!content.innerHTML[caretPosition - 2].trim() ? content.innerHTML[caretPosition - 2]: 'space';
	    console.log('%ccaretString', "color:blue;", caretString);
	}
}

//apply styles
function activateStyleButtons(command, value){
    const hex = value ? "#333": "#31708f";
    document.getElementById(command).style.color = hex;
}

//check for styles that are applied.
function checkStyleApplied(commands){
	commands.map(function(command){
		const applied = document.queryCommandState(command.cmd);
		activateStyleButtons(command.cmd, applied);
	})
}
