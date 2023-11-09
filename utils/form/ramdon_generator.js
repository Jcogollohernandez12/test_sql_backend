class RandomIdGenerator {
    constructor(min, max) {
      this.min = min;
      this.max = max;
    }
  
    generateRandomId() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
  }
  
  export default RandomIdGenerator;
  