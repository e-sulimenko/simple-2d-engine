import { GameObject } from '../engine';
import { Collider } from '../engine/Collider';

export class Wall extends GameObject{
  constructor() {
    super({ x: 500, y: 500, width: 400, height: 20 });
    this.tags.add('wall');
    new Collider(this);
  }
}
