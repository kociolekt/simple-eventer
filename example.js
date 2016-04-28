
import SimpleEventer from './index';

class Example extends SimpleEventer {
  constructor() {
    super(); // Call SimpleEventer constructor
    
    this.seconds = 0;
    
    setInterval(() => {
      this.seconds += 1;
      this.fire('onesecond', this.seconds);
    }, 1000);
  }
}

(new Example()).on('onesecond', (event) => {
  console.log(`Type: ${event.type}, Target/Data: ${event.target}`);
});
