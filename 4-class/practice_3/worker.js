import Person from './person';

// TODO 14: 在这里写实现代码
export default class worker extends Person {
  constructor(name, age) {
    super(name, age);
    this.string = 'I am a Worker. I have a job.';
  }

  introduce() {
    return this.string;
  }
}
