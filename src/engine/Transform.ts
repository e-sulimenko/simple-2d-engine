export interface IPosition {
  x: number;
  y: number;
}

export interface ISize {
  width: number;
  height: number;
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
}
