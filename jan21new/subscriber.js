export class Subscriber {
  constructor() {
    this.subList = [];
  }

  addSubscriber(subscriber) {
    if (!this.subList.includes(subscriber)) {
      this.subList.push(subscriber);
    }
  }
  
  removeSubscriber(subscriber) {
    this.subList = this.subList.filter(sub => sub !== subscriber);
  }

  callSubscribers(args) {
    this.subList.forEach((callback) => {
      if (Array.isArray(callback)) {
        callback.forEach((cb) => cb(args));
      } else {
        callback(args);
      }
    });
  }

  clearSubscriber() {
    this.subList = [];
  }

}
