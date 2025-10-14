import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

const text = new Konva.Text({
  x: stage.width() / 2 -50,
  y: stage.height() / 2,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black',
  });

const layer = new Konva.Layer();
stage.add(layer);

const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

text.text('Battle Test')
layer.add(circle);
layer.add(text);
stage.add(layer);
