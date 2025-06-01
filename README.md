React To-Do List App
This is a simple To-Do List application built with React. It allows users to add, remove, and mark tasks as completed. The app supports task filtering (all, completed, incomplete) and stores tasks in the browser’s localStorage so your tasks stay saved on page reload.

Features
Add new tasks with validation (task cannot be empty)

Remove tasks

Mark tasks as completed/uncompleted by clicking on the task

Filter tasks by All, Completed, or Incomplete

Edit existing tasks

Task counts for total and incomplete tasks displayed

Data persistence with localStorage

How to Use
Add a Task: Type a task in the input box and click "Add Task".

Remove a Task: Click the "Remove" button next to the task you want to delete.

Toggle Completion: Click on the task text to mark it completed or incomplete.

Filter Tasks: Use the "All", "Completed", and "Incomplete" buttons to filter the task list.

Edit Tasks: Click the "Edit" button, change the task text, and click "Save" or "Cancel".

Installation and Setup
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
Navigate to the project folder:

bash
Copy
Edit
cd todo-list-react
Install dependencies:

nginx
Copy
Edit
npm install
Start the development server:

sql
Copy
Edit
npm start
Open your browser at http://localhost:3000 to use the app.

Notes
Sorting tasks by date or alphabetically is not included in this version.

Tasks are saved in localStorage to keep your list persistent between page reloads.

Basic validation prevents adding empty tasks.