import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";
// we import the creaetSlice code from our redux toolkit

// we set the id for the next instance. This will be automatically incremented each time we add a todo
let id = 2;

// we setup our initial state as an array of objects, starting with one example object
const initialState = [{ id: 1, content: "Drink Tea", completed: false }];

// here is our slice for our money, all the content will be contained in here
export const todosSlice = createSlice({
  // we create a name and an initial state for our todos object
  name: "todos",
  initialState,

  // our reducers are then listed here
  reducers: {
    addTask: (state, action) => {
      // we create a const which is our new todo object, giving it the id as listed above, and increasing this value for the next instance
      // we take the content as the action.payload, which is the text that was input by the user
      const newTodo = {
        id: id++,
        content: action.payload,
        completed: false
      };
      // we then push this object to the state
      state.push(newTodo);
    },

    // we identify which todo has been marked for completion based on the todo's id
    // we find this instance through indexing and then update the specific instance's .completed property with a toggle
    toggleDone: (state, action) => {
      const id = action.payload;
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        console.log(`We on step: ${i}. Does ${state[i].id} === ${id}?`);
        // NOTE! We have the ensure the values are all numbers for the === operator, otherwise we will not find the index!!!
        if (Number(state[i].id) === Number(id)) {
          state[i].completed = !state[i].completed;
          break;
        }
      }
      if (index !== -1) {
        const todo = state[index];
        todo.completed = !todo.completed;
      }
    },

    // we use indexing through the id throughout
    deleteTask: (state, action) => {
      console.log(`This is the id of the Todo: ${action.payload}`);
      const id = action.payload;
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        console.log(`We on step: ${i}. Does ${state[i].id} === ${id}?`);
        if (Number(state[i].id) === Number(id)) {
          index = i;
          break;
        }
      }
      // we use the splice method to remove the indexed todo object from the array
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    editTask: (state, action) => {
      const id = action.payload;
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        console.log(`We on step: ${i}. Does ${state[i].id} === ${id}?`);
        if (Number(state[i].id) === Number(id)) {
          index = i;
          break;
        }
      }
      // we prompt the user to enter an input, which will then be used to update the chosen todo's content
      // we do some minor validation to make sure something is indeed entered
      if (index !== -1) {
        const editedText = prompt("What did you want to change this to?");
        if (editedText === null) {
          alert("Nothing entered.");
        } else {
          const todo = state[index];
          todo.content = editedText;
        }
      }
    }
  }
});

// we export our todosSlice reducers under our todosSlice const, specifically referring to the actions
export const { addTask, toggleDone, deleteTask, editTask } = todosSlice.actions;

// we set out exporto default to be our todosSlice const, specifically referring to the reducer
export default todosSlice.reducer;
