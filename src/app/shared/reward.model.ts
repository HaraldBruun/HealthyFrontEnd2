export class RewardModel {
  private _name: string;
  private _tier: number;
  private _resource: number;
  private _redeemed: boolean;

  constructor(name: string, tier: number, resource: number, redeemed: boolean) {
    this._name = name;
    this._tier = tier;
    this._resource = resource;
    this._redeemed = redeemed;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get tier(): number {
    return this._tier;
  }

  set tier(value: number) {
    this._tier = value;
  }

  get resource(): number {
    return this._resource;
  }

  set resource(value: number) {
    this._resource = value;
  }

  get redeemed(): boolean {
    return this._redeemed;
  }

  set redeemed(value: boolean) {
    this._redeemed = value;
  }
}

