import Konva from 'konva';
import {Tile} from './tile.ts';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

const layer = new Konva.Layer();
stage.add(layer);

const tile = new Tile({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  text: 'A'
});
layer.add(tile);
layer.draw();

