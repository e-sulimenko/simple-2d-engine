import { Transform } from './Transform';
import { Tags } from './Tags';

interface IGameObjectOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export class GameObject {
  public transform: Transform = new Transform();

  public tags: Tags = new Tags()

  constructor(options: IGameObjectOptions) {
    const {
      x = 0,
      y = 0,
      width = 50,
      height = 50,
    } = options;
    this.transform.setPosition(x, y);
    this.transform.setSize(width, height);
    const path = new Path2D();
    path.rect(this.drawX, this.drawY, this.transform.size.width, this.transform.size.height);
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    const path = new Path2D();
    path.rect(this.drawX, this.drawY, this.transform.size.width, this.transform.size.height);
    ctx.stroke(path);
  }

  update(): void {
    // pass
  }

  private get drawX(): number {
    return this.transform.position.x - this.transform.size.width / 2
  }

  private get drawY(): number {
    return this.transform.position.y - this.transform.size.height / 2
  }
}
