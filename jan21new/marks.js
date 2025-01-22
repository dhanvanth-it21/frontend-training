import { Subscriber } from "./subscriber";

export const marks = {
  data: {
    english: 0,
    tamil: 0,
    maths: 0,
    science: 0,
    history: 0,
  },
  subscriber: new Subscriber(),

  updateMarks(subject, value) {
    if (this.data.hasOwnProperty(subject)) {
      this.data[subject] = value;
      this.subscriber.callSubscribers(this.data);
    }
  },

  resetMarks() {
    Object.keys(this.data).forEach((subject) => (this.data[subject] = 0));
    this.subscriber.callSubscribers(this.data);
  },
};
