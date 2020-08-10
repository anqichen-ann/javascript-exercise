import Person from './person';

// TODO 20: 在这里写实现代码
export default class teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. ${
      this.klass ? `I teach Class ${this.klass}.` : 'I teach No Class.'
    }`;
  }
}
