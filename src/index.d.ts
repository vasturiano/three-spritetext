import { Sprite } from 'three';

declare class SpriteText extends Sprite {
  constructor(
    text?: string,
    textHeight?:number,
    color?: string
  );

  get text(): string;
  set text(text: string);
  get textHeight(): number;
  set textHeight(height: number);
  get color(): string;
  set color(color:string);
  get fontFace(): string;
  set fontFace(fontFace: string);
  get fontSize(): number;
  set fontSize(fontSize: number);
  get fontWeight(): string;
  set fontWeight(fontWeight: string);
}

export default SpriteText;