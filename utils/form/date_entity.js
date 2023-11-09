class DateEntity {
    constructor() {
      this.currentDate = new Date();
    }
  
    getCurrentFormattedDate() {
      const year = this.currentDate.getFullYear();
      const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(this.currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
  
  export default DateEntity;