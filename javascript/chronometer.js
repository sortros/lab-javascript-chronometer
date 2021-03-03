class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    
    /*function increaseTime(() => {
      this.currentTime ++;
    })
    const timeoutID = setInterval(increaseTime, 1000); */
    this.intervalId = setInterval(()=>{
      this.currentTime ++;

    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    
    return (this.currentTime % 60) ;

  }
  twoDigitsNumber(num) {
   /* let minString = parseFloat(this.getMinutes);
    let secString = parseFloat(this.getSeconds);
    
    if (minString.length < 2) {
      return `0 + ${minString}`;
    }else{
      return `0 + ${minString}`;
    }; */

    // if (secString.length < 2) {
    //  return `0 + ${secString}`;
    //}else{
    //  return `${secString}` ;
    //}  

    if(num.toString().length < 2){
      return "0" + num.toString();
    } else {
      return num.toString();
    }

   // if(minString.length === 2 && secString.length === 2){
   //   return minString + secString;
   // }
  }
  stopClick() {
    clearInterval(this.intervalId);
    
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let finalMinutes = this.twoDigitsNumber(this.getMinutes());
    let finalSeconds =this.twoDigitsNumber(this.getSeconds());

    return `${finalMinutes}:${finalSeconds}`;

  }
}
