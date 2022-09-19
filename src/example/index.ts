import { App, Layer } from '../engine';

import { Player } from './Player';
import { Wall } from './Wall';

new App({
  layers: [
    new Layer({
      name: 'main',
      objects: [
        new Player(),
        new Wall(),
      ],
    })
  ]
})
