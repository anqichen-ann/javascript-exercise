import Person from '../practice_3/person';
// TODO 16: 在这里写实现代码
export default class student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
