# simple-eventer
> Simple events interface for es6/babel classes.

## installation
Install from npm:
```
$ npm install simple-eventer
```

## usage
Use it as base class for your module.

```js
import SimpleEventer from 'simple-eventer';

class Example extends SimpleEventer {
  constructor() {
    super();

    this.seconds = 0;

    setInterval(() => {
      this.seconds += 1;
      // Fire your event
      this.fire('onesecond', this.seconds);
    }, 1000);
  }
}
```

Bind events to your module.
```js
// Bind your event
(new Example()).on('onesecond', (event) => {
  console.log(`Type: ${event.type}, Target/Data: ${event.target}`);
});
// Type: onesecond, Target/Data: 1
// Type: onesecond, Target/Data: 2
// Type: onesecond, Target/Data: 3
```

## methods
Three methods are available.

### fire(type, [target])
Emmiting event of inheriting module with provided type. Target becomes this if not specified.
```js
// Called inside your module where this is the module instance
this.fire('eventtype', this.target);

// Called on your module instance - like trigger in jQuery
module.fire('eventtype', module.target);
```

### on(type, listener)
Registers listener for event of provided type.
```js
function listener(event) {
  console.log(event.type);
  // eventtype
  console.log(event.target);
  // module.target
}

module.on('eventtype', listener);
```

### off(type, listener)
Removes listener for event of provided type.
```js
module.off('eventtype', listener);
```
