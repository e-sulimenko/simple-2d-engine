import { App, Layer } from '../engine';
import { Square } from './Square';

new App({
  layers: [
    new Layer({
      name: 'main',
      objects: [new Square()],
    })
  ]
})
