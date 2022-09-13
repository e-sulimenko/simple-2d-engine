export class Time {
  static _lastUpdate: number = Date.now();
  static _deltaTime: number = Time._lastUpdate;

  static update() {
    const now = Date.now();
    Time._deltaTime = now - Time._lastUpdate;
    Time._lastUpdate = now;
  }

  static get deltaTime() {
    return Time._deltaTime;
  }
}
