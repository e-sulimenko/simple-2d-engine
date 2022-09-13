import { Transform } from './Transform';

interface IMonoBehaviorOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
// TODO rename?
export class MonoBehavior {
  public transform: Transform = new Transform();
  public figure: any;

  constructor(options: IMonoBehaviorOptions) {
    const {
      x = 0,
      y = 0,
      width = 50,
      height = 50,
    } = options;
    this.transform.setPosition(x, y);
    this.transform.setSize(width, height);
    const path = new Path2D();
    path.rect(x, y, this.transform.size.width, this.transform.size.height);
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    const { x, y } = this.transform.position;
    const path = new Path2D();
    path.rect(x, y, this.transform.size.width, this.transform.size.height);
    ctx.stroke(path);
  }
}
