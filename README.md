# Todo List App
Demo: https://ixaxtav.github.io/todo-list/

## Running the App

To run this app, follow these steps:

1. Ensure that you have Node.js installed on your computer.
2. Clone or download the project files from the repository.
3. Open the terminal and navigate to the project directory.
4. Run the command `npm install` to install the required dependencies.
5. After the installation is complete, run the command `npm start` to start the development server.
6. The app should now be running on `http://localhost:3000` in your browser.

## About the App

This app is a simple todo list application built with React. It allows users to add tasks, update existing tasks, and delete tasks from the list.

When you open the app, you will see a form where you can enter a task and click "Add Task" to add it to the list. The tasks are displayed as a list below the form. Each task has an "Update" button, which allows you to edit the task, and a "Delete" button to remove it from the list.

The app uses React's `useReducer` hook to manage the state of the tasks. The tasks are stored in an array called `state`, and the `reducer` function handles actions like adding, updating, and removing tasks from the state.

The app also uses React's `useState` hook to manage the input field for adding new tasks. The `handleOnChange` function updates the `newTask` state with the value entered in the input field, and the `handleOnSubmit` function adds the new task to the list when the form is submitted.

The UI of the app is styled using inline CSS, which is defined in the `styles` object at the bottom of the file.
