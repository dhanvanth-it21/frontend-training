export class Subcriber {
  constructor() {
    this.subList = [];
  }

  addSubscriber(subcriber) {
    this.subList.push(subcriber);
  }

  callSubcriber(i = 0) {
    // this.subList.forEach(callback => callback())
    console.log(1);
    if (i < this.subList.length) {
      // this.subList[i](i + 1);
      this.subList[i](() => this.callSubcriber(i + 1));
    }
  }
}
