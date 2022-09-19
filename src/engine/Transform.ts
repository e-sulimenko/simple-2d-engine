export interface IPosition {
  x: number;
  y: number;
}

export interface ISize {
  width: number;
  height: number;
}

interface ICoordinates {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export class Transform {
  private _size: ISize = {
    width: 0,
    height: 0,
  }

  private _position: IPosition = {
    y: 0,
    x: 0,
  }

  private _prevPosition: IPosition = this._position;

  public get size(): Readonly<ISize> {
    return this._size;
  }

  public get position(): Readonly<IPosition> {
    return this._position;
  }

  setPosition(x: number, y: number): void {
    this._position.x = x;
    this._position.y = y;
  }

  setSize(width: number, height: number): void {
    this._size.width = width;
    this._size.height = height;
  }

  coordinates(): ICoordinates {
    const halfHeight = this._size.height / 2;
    const halfWidth = this._size.width / 2;
    return {
      left: this._position.x - halfWidth,
      top: this._position.y + halfHeight,
      right: this._position.x + halfWidth,
      bottom: this._position.y - halfHeight,
    }
  }

  resetPosition(): void {
    this._position = { ...this._prevPosition };
  }

  commitPosition() {
    this._prevPosition = { ... this._position };
  }
}
