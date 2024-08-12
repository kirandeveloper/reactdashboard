// src/actions.js
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item
});