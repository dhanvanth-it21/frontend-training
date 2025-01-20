export class Subcriber {
  constructor() {
    this.subList = [];
  }

  addSubscriber(subcriber) {
    this.subList.push(subcriber);
  }

  callSubcriber(i = 0) {
    this.subList.forEach((callback,index) => callback(index))
  }

  clearSubcriber() {
    this.subList = [];
  }
}
