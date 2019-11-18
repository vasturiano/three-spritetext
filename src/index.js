import {
  LinearFilter,
  Sprite,
  SpriteMaterial,
  Texture
} from 'three';

const three = window.THREE
  ? window.THREE // Prefer consumption from global THREE, if exists
  : {
  LinearFilter,
  Sprite,
  SpriteMaterial,
  Texture
};

export default class extends three.Sprite {
  constructor(text = '', textHeight = 10, color = 'rgba(255, 255, 255, 1)') {
    super(new three.SpriteMaterial({ map: new three.Texture() }));

    this._text = text;
    this._textHeight = textHeight;
    this._color = color;

    this._fontFace = 'Arial';
    this._fontSize = 90; // defines text resolution
    this._fontWeight = 'normal';

    this._canvas = document.createElement('canvas');
    this._texture = this.material.map;
    this._texture.minFilter = three.LinearFilter;

    this._genCanvas();
  }

  get text() { return this._text; }
  set text(text) { this._text = text; this._genCanvas(); }
  get textHeight() { return this._textHeight; }
  set textHeight(textHeight) { this._textHeight = textHeight; this._genCanvas(); }
  get color() { return this._color; }
  set color(color) { this._color = color; this._genCanvas(); }
  get fontFace() { return this._fontFace; }
  set fontFace(fontFace) { this._fontFace = fontFace; this._genCanvas(); }
  get fontSize() { return this._fontSize; }
  set fontSize(fontSize) { this._fontSize = fontSize; this._genCanvas(); }
  get fontWeight() { return this._fontWeight; }
  set fontWeight(fontWeight) { this._fontWeight = fontWeight; this._genCanvas(); }

  _genCanvas() {
    const canvas = this._canvas;
    const ctx = canvas.getContext('2d');
  
    const lines = this._text.split('\n');

    canvas.width = Math.max(...lines.map(line => ctx.measureText(line).width));
    canvas.height = this.fontSize * lines.length;

    ctx.font = `${this.fontWeight} ${this.fontSize}px ${this.fontFace}`;
    ctx.fillStyle = this.color;
    ctx.textBaseline = 'bottom';
  
    lines.forEach((line, index) => ctx.fillText(
      line,
      (canvas.width - ctx.measureText(line).width) / 2,
      (index + 1) * this.fontSize
    ));

    // Inject canvas into sprite
    this._texture.image = canvas;
    this._texture.needsUpdate = true;

    const yScale = this.textHeight * lines.length;
    this.scale.set(yScale * canvas.width / canvas.height, yScale);
  }

  clone() {
    return new this.constructor(this.text, this.textHeight, this.color).copy(this);
  }

  copy(source) {
    three.Sprite.prototype.copy.call(this, source);

    this.color = source.color;
    this.fontFace = source.fontFace;
    this.fontSize = source.fontSize;
    this.fontWeight = source.fontWeight;

    return this;
  }
}
