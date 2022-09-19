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

  run = (time: number): void => {
    Time.update(time);
    this.layers.forEach((layer) => layer.update());
    requestAnimationFrame(this.run);
  }
}
