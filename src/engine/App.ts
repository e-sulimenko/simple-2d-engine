import { Layer, Time } from './index';

interface IAppData {
  layers: Layer[],
}

export class App {
  private layers: Layer[];

  constructor(data: IAppData) {
    Time.update();
    this.layers = data.layers;
    requestAnimationFrame(this.run);
  }

  run = (): void => {
    Time.update();
    this.layers.forEach((layer) => layer.update());
    requestAnimationFrame(this.run);
  }
}
