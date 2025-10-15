// src/test/sceneTest.ts
import Konva from "konva";
import { Tile } from "./tile.ts";

//num of tiles for testing
let num: number = 10;
let inputs: string[] = [];

const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

//create pocket for tiles
const tileBox = new Konva.Rect({
    x: stage.width() / 2,
    y: stage.height() / 2,
    width: stage.width() / 2,
    height: stage.height() / 2,
    fill: "#9e9e9eff",
    cornerRadius: stage.width() / 2 / 20
})
const inputBox = new Konva.Rect({
    x: 0,
    y: stage.height() * 2 / 3,
    width: stage.width() / 2,
    height: stage.height() / 4,
    fill: "#4bd8ffff",
    cornerRadius: stage.width() / 2 / 20
})

layer.add(tileBox);
layer.add(inputBox);

function isInsideBox(tile: Konva.Group, box: Konva.Rect): boolean {
    const t = tile.getClientRect();
    const b = box.getClientRect();
    return (
        t.x < b.x + b.width &&
        t.x + t.width > b.x &&
        t.y < b.y + b.height &&
        t.y + t.height > b.y
    );
}


// Add a few tiles for testing
const padding = 10; // space between tiles
const availableWidth = tileBox.width() - padding * (num + 1);
const tileWidth = availableWidth / num;
const tileHeight = 100;

for (let i = 0; i < num; i++) {
    const tile = new Tile({
        x: tileBox.x() + padding + i * (tileWidth + padding),
        y: tileBox.y() + tileBox.height() / 2 - tileHeight / 2, // center vertically
        width: tileWidth,
        height: tileHeight,
        text: String.fromCharCode(65 + i),
    });

    tile.on("dragend", () => {
        if (isInsideBox(tile, inputBox)) {
            const index = inputs.findIndex(num => num === tile.text.text());
            if (index == -1){
                inputs.push(tile.text.text());
            }
            tile.rect.fill("#00ff00");
        } else {
            const index = inputs.findIndex(num => num === tile.text.text());
            if (index != -1){
                inputs.splice(index, 1);
            }
            tile.rect.fill("#ffbd86ff");
        }
        console.log("inputs: " + inputs);
    });
    layer.add(tile);
}



layer.draw();


