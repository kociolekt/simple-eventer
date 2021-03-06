let staticEventer = null;

export default class SimpleEventer {
  constructor() {
    this.simpleEventerListeners = {};
  }

  on(type, listener) {
    if (typeof this.simpleEventerListeners[type] === 'undefined') {
      this.simpleEventerListeners[type] = [];
    }

    this.simpleEventerListeners[type].push(listener);
  }

  fire(type, target = this) {
    let
      event = {},
      listeners;

    if (typeof type === 'string') {
      event = {type: type};
    } else {
      throw new Error('Wrong event name type.');
    }
    if (!event.target) {
      event.target = target;
    }

    listeners = this.simpleEventerListeners[event.type];

    if (listeners instanceof Array) {
      for (let i = 0, len = listeners.length; i < len; i++) {
        listeners[i].call(this, event);
      }
    }
  }

  off(type, listener) {
    let simpleEventerListeners = this.simpleEventerListeners[type];
    if (simpleEventerListeners instanceof Array) {
      for (let i = 0, len = simpleEventerListeners.length; i < len; i++) {
        if (simpleEventerListeners[i] === listener) {
          simpleEventerListeners.splice(i, 1);
          break;
        }
      }
    }
  }

  static on(type, listener) {
    return staticEventer.on(type, listener);
  }

  static fire(type, target = this) {
    return staticEventer.fire(type, target);
  }

  static off(type, listener) {
    return staticEventer.off(type, listener);
  }
}

staticEventer = new SimpleEventer();
