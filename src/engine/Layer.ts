import { Canvas } from './Canvas';
import { GameObject } from './GameObject';

interface ILayer {
  name: string;
  objects: GameObject[];
  zIndex?: number;
}

export class Layer {
  private _objects: GameObject[] = [];
  readonly _name: string;
  private readonly _canvas: Canvas;

  constructor(options: ILayer) {
    this._name = options.name;
    this._objects = [...options.objects];
    this._canvas = new Canvas(options.name, 10);
  }

  update(): void {
    this._canvas.clear();
    this._objects.forEach((gameObject) => {
      gameObject.update();
      gameObject.draw(this._canvas.ctx);
    });
  }
}
