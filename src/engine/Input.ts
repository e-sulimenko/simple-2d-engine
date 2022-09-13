export class Input {
  static key: string | null = null;

  static isKey(str: string): boolean {
    return Input.key === str;
  }

  static _init(): void {
    document.addEventListener('keydown', Input._onKeyDown);
    document.addEventListener('keyup', Input._onKeyUp);
  }

  private static _onKeyDown(event: KeyboardEvent): void {
    Input.key = event.key;
  }

  private static _onKeyUp(): void {
    Input.key = null;
  }
}

Input._init();
