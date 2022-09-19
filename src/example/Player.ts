import { GameObject, Time } from '../engine';
import { Input } from '../engine/Input';
import { Collider } from '../engine/Collider';

export class Player extends GameObject {
  private readonly collider: Collider;

  constructor() {
    super({ x: 26, y: 26 });
    this.collider = new Collider(this);
  }

  update() {
    const { x, y } = this.transform.position;
    if (Input.isKey('w')) {
      this.transform.setPosition(x, y + Time.deltaTime);
    } else if (Input.isKey('a')) {
      this.transform.setPosition(x - Time.deltaTime, y);
    } else if (Input.isKey('s')) {
      this.transform.setPosition(x, y - Time.deltaTime);
    } else if (Input.isKey('d')) {
      this.transform.setPosition(x + Time.deltaTime, y);
    }

    const collisions = this.collider.getCollisions();
    const cannotMove = collisions.some((item) => item.tags.hasTag('wall'));
    if (cannotMove) this.transform.resetPosition();
    else this.transform.commitPosition();
  }
}
