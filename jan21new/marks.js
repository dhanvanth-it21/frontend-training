import { Subscriber } from "./subscriber.js";

export const marks = {
  data: {
    english: 0,
    tamil: 0,
    maths: 0,
    science: 0,
    history: 0,
  },
  subscriber: new Subscriber(),

  
  setMark(subject, mark) {
    this.data[subject] = mark;
    this.notifySubscribers();
  },

  notifySubscribers() {
    this.subscriber.callSubscribers({ ...this.data });
  }

};
