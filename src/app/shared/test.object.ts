export class TestObject {
  private testName: string;
  private testAge: number;


  constructor(name: string, age: number) {
    this.testName = name;
    this.testAge = age;
  }

  public getTestName() {
    return this.testName;
  }

  public getTestAge() {
    return this.testAge;
  }

}
