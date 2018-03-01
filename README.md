# three-spritetext

[![NPM](https://nodei.co/npm/three-spritetext.png?compact=true)](https://nodei.co/npm/three-spritetext/)

A sprite based text component for [ThreeJS](https://threejs.org/). The text is drawn to canvas, converted into a [Texture](https://threejs.org/docs/#api/textures/Texture) and then used as a material on a [Sprite](https://threejs.org/docs/#api/objects/Sprite).
Because a sprite is being used, the text will always face the camera, and have its orientation fixed relative to the camera.

## Quick start

```
import SpriteText from 'three-spritetext';
```
or
```
var SpriteText = require('three-spritetext');
```
or even
```
<script src="//unpkg.com/three-spritetext"></script>
```
then
```
var myText = new SpriteText('My text');

var myScene = new THREE.Scene();
myScene.add(myText);
```

## API reference

### Constructor

<b>SpriteText</b> ([<i>text</i>, <i>textHeight</i>, <i>color</i>])

### Properties

| Property | Description | Default |
| --- | --- | :--: |
| <b>text</b> | The text to be displayed on the sprite. ||
| <b>textHeight</b> | The height of the text. | 10 |
| <b>color</b> | The color of the text. | `white` |
| <b>fontFace</b> | The font type of the text. | `Arial` |
| <b>fontSize</b> | The resolution of the text, in terms of vertical number of pixels. Lower values may cause text to look blurry. Higher values will yield sharper text, at the cost of performance. | `90` |
