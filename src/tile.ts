import Konva from 'konva';

export class Tile extends Konva.Group {
    rect: Konva.Rect;
    text: Konva.Text;

    constructor(config) {
        super({
            ...config,
            draggable: true
        });

        // Create the rectangle
        this.rect = new Konva.Rect({
            width: config.width,
            height: config.height,
            fill: '#ffbd86ff',
            stroke: 'black',
            strokeWidth: 2,
            cornerRadius: config.width/10
        });

        // Create the text
        this.text = new Konva.Text({
            text: config.text || '',
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: 'black',
            align: 'center',
            verticalAlign: 'middle',
            width: config.width,
            height: config.height
        });

        // Add both to this group
        this.add(this.rect);
        this.add(this.text);

        // Example event
        this.on('mouseover', () => {
            this.rect.fill('#ff9b3d');
        });

        this.on('mouseout', () => {
            this.rect.fill('#ffbd86ff');
        });
    }
}
