export class Time {
  static _lastUpdate: number = 0;
  static _deltaTime: number = 0;

  static update(time: number = 0) {
    Time._deltaTime = time - Time._lastUpdate;
    Time._lastUpdate = time;
  }

  static get deltaTime() {
    return Time._deltaTime;
  }
}
