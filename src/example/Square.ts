import { GameObject, Time } from '../engine';
import { Input } from '../engine/Input';

export class Square extends GameObject {
  constructor() {
    super({ x: 100, y: 0 });
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
  }
}
