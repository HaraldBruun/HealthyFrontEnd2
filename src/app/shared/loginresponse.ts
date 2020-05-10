export class LoginResponse {
  private _allowed: boolean;
  private _token: string;

  constructor(allowed: boolean, token: string) {
    this.allowed = allowed;
    this.token = token;
  }

  get allowed(): boolean {
    return this._allowed;
  }

  set allowed(value: boolean) {
    this._allowed = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
