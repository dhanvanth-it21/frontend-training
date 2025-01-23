import { Subscriber } from "./subscriber.js";



export const stats = {
  data: {
    totalMark: 0,
    avgMark: 0,
    minMark: 0,
    maxMark: 0,
    percentage: 0,
  },

  subscriber: new Subscriber(),

  calculateStats(markData) {
    const marksArr = Object.values(markData);
    this.data.totalMark = marksArr.reduce((a, b) => a + b, 0);
    this.data.avgMark = this.data.totalMark / marksArr.length;
    this.data.minMark = Math.min(...marksArr);
    this.data.maxMark = Math.max(...marksArr);
    this.data.percentage = (this.data.totalMark / (marksArr.length * 100)) * 100;

    this.notifySubscribers();
    
  },

  notifySubscribers() {
    this.subscriber.callSubscribers({ ...this.data });
  }

};
