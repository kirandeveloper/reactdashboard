// itemStore.js
import { EventEmitter } from 'events';
import dispatcher from './dispatcher';
import { ADD_ITEM, REMOVE_ITEM } from './actions';

const CHANGE_EVENT = 'change';

let items = [];

class ItemStore extends EventEmitter {
  getItems() {
    return items;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const itemStore = new ItemStore();

dispatcher.register((action) => {
  switch (action.type) {
    case ADD_ITEM:
      items.push(action.item);
      itemStore.emitChange();
      break;
    case REMOVE_ITEM:
      items = items.filter(item => item !== action.item);
      itemStore.emitChange();
      break;
    default:
      // no op
  }
});

export default itemStore;
