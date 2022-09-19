import { GameObject } from './GameObject';

export class Collider {
  static gameObjects: GameObject[] = [];

  private readonly gameObject: GameObject;

  constructor(gameObject: GameObject) {
    Collider.gameObjects.push(gameObject);
    this.gameObject = gameObject;
  }

  getCollisions(): GameObject[] {
    return Collider.gameObjects.filter((item) => this.isCollided(item));
  }

  private isCollided(gameObject: GameObject): boolean {
    // remove itself
    if (gameObject === this.gameObject) return false;

    const self = this.gameObject.transform.coordinates();
    const object = gameObject.transform.coordinates();
    const isLefter = object.left > self.right;
    const isHigher = object.top < self.bottom;
    const isRighter = object.right < self.left;
    const isLower = object.bottom > self.top;
    return !isLefter && !isHigher && !isRighter && !isLower;
  }
}
