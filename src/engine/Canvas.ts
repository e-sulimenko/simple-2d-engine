export class Canvas {
  private readonly _ctx: CanvasRenderingContext2D;
  private readonly _id: string;
  private readonly _zIndex: number;

  constructor(id: string, zIndex: number = 1) {
    this._id = id;
    this._zIndex = zIndex;
    this._ctx = this._init();
  }

  _init = (): CanvasRenderingContext2D => {
    const existingCanvas = document.getElementById(this._id) as HTMLCanvasElement;
    if (existingCanvas != null) {
      const context = existingCanvas.getContext('2d');
      if (context == null)  throw new Error('Empty context');
      return context;
    }
    const app = document.querySelector('#app');
    if (app != null) {
      const canvas = document.createElement('canvas');
      canvas.id = this._id;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      canvas.style.position = 'fixed';
      canvas.style.top = '0px';
      canvas.style.left = '0px';
      canvas.style.zIndex = String(this._zIndex);

      // fixes blurry on retina devices
      const dpi = window.devicePixelRatio;
      canvas.width = innerWidth * dpi;
      canvas.height = innerHeight * dpi;

      app.append(canvas);

      const context = canvas.getContext('2d');
      if (context == null)  throw new Error('Empty context');
      context.translate(0, canvas.height);
      context.scale(dpi, -dpi);

      return context;
    } else {
      throw new Error('App element is missing');
    }
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  get ctx(): CanvasRenderingContext2D {
    return this._ctx;
  }
}
