import Konva from 'konva';

const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

const buttonGroup = new Konva.Group({
    x: innerWidth / 8,
    y: innerHeight / 2
});

const helpButtonGroup = new Konva.Group({
    x: innerWidth / 1.05,
    y: innerHeight / 15
})

const equationText = new Konva.Text({
    x: 20,
    y: 60,
    text: '',
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'black',
    width: 300,
    padding: 20,
    align: 'center'
})

const helpText = new Konva.Text({
    x:0,
    y:0,
    text: '',
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'black',
    width: 300,
    padding: 20,
    align: 'center'
})


const button = new Konva.Rect({
    x: 20,
    y: 60,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 300,
    height: equationText.height(),
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10
});

const help = new Konva.Circle({
    x: 20,
    y: 60,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    radius: 30,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10
})

const information = new Konva.Text({
    x: 20,
    y: 60,
    text: '(1) Each monster has a number appear near them (2) Select the answer with your mouse that has the correct equation to match (3) Be Careful! If you select the wrong answer, you’ll lose a life. Three strikes and you’re out... (4) Keep defeating monsters to climb the tower.',
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: 'black',
    width: 300,
    padding: 20,
    align: 'center'
})


function displayMessage(object, message) {
    object.text(message);
}

buttonGroup.on('mouseover', () => {
    button.fill('#878686');
});

buttonGroup.on('mouseout', () => {
    button.fill("#ddd");
});

helpButtonGroup.on('mouseover', () => {
    help.fill('#878686');
});

helpButtonGroup.on('mouseout', () => {
    help.fill("#ddd");
});

let infoShown = false;
helpButtonGroup.on('click', () => {
    if (!infoShown) {
        layer.add(information)
    } else {
        information.remove()
    }
    infoShown = !infoShown;
    layer.draw();
});

displayMessage(equationText, '9+10');
displayMessage(helpText, '?');

buttonGroup.add(button);
buttonGroup.add(equationText);
helpButtonGroup.add(help);
helpButtonGroup.add(helpText);
helpText.offsetX(helpText.width() / 2);
helpText.offsetY(helpText.height() / 2);
helpText.x(help.x());
helpText.y(help.y());

layer.add(buttonGroup);
layer.add(helpButtonGroup);
layer.draw();
