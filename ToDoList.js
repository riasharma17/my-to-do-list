// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './ToDoList.css';

// const ToDoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [sort, setSort] = useState('date');
//   const [error, setError] = useState('');
//   const [editTaskId, setEditTaskId] = useState(null);
//   const [editTaskText, setEditTaskText] = useState('');

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (task.trim()) {
//       setTasks([...tasks, { id: uuidv4(), text: task, completed: false, date: new Date() }]);
//       setTask('');
//       setError('');
//     } else {
//       setError('Task cannot be empty.');
//     }
//   };

//   const removeTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const toggleTaskCompletion = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleSortChange = (e) => {
//     setSort(e.target.value);
//   };

//   const sortedTasks = [...tasks].sort((a, b) => {
//     if (sort === 'date') {
//       return new Date(a.date) - new Date(b.date);
//     }
//     if (sort === 'alphabetically') {
//       return a.text.localeCompare(b.text);
//     }
//     return 0;
//   });

//   const filteredTasks = sortedTasks.filter(task => {
//     if (filter === 'completed') return task.completed;
//     if (filter === 'incomplete') return !task.completed;
//     return true;
//   });

//   const incompleteTaskCount = tasks.filter(task => !task.completed).length;
//   const totalTaskCount = tasks.length;

//   const startEditing = (id, text) => {
//     setEditTaskId(id);
//     setEditTaskText(text);
//   };

//   const handleEditChange = (e) => {
//     setEditTaskText(e.target.value);
//   };

//   const saveTask = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, text: editTaskText } : task
//     ));
//     setEditTaskId(null);
//     setEditTaskText('');
//   };

//   const cancelEditing = () => {
//     setEditTaskId(null);
//     setEditTaskText('');
//   };

//   return (
//     <div className="todo-list">
//       <h1>My To-Do App</h1>
//       <div className="input-container">
//         <input 
//           type="text" 
//           value={task} 
//           onChange={(e) => setTask(e.target.value)} 
//           placeholder="Enter a task"
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       {error && <p className="error">{error}</p>}
//       <div className="controls-container">
//         <div className="filter-container">
//           <button onClick={() => setFilter('all')}>All</button>
//           <button onClick={() => setFilter('completed')}>Completed</button>
//           <button onClick={() => setFilter('incomplete')}>Incomplete</button>
//         </div>
      
//       </div>
//       <div className="task-count-container">
//         <div className="task-count">
//           Total tasks: {totalTaskCount}
//         </div>
//         <div className="task-count">
//           Incomplete tasks: {incompleteTaskCount}
//         </div>
//       </div>
//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id} className={task.completed ? 'completed' : ''}>
//             {editTaskId === task.id ? (
//               <>
//                 <input 
//                   type="text" 
//                   value={editTaskText} 
//                   onChange={handleEditChange}
//                 />
//                 <button onClick={() => saveTask(task.id)}>Save</button>
//                 <button onClick={cancelEditing}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
//                 <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
//                 <button onClick={() => removeTask(task.id)}>Remove</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoList;
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');
  const [error, setError] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      // Add new task with unique ID and current date
      setTasks([...tasks, { id: uuidv4(), text: task, completed: false, date: new Date() }]);
      setTask('');
      setError('');
    } else {
      setError('Task cannot be empty.');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Sort tasks based on selected option
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    if (sort === 'alphabetically') {
      return a.text.localeCompare(b.text);
    }
    return 0;
  });

  // Filter tasks based on completion status
  const filteredTasks = sortedTasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const incompleteTaskCount = tasks.filter(task => !task.completed).length;
  const totalTaskCount = tasks.length;

  const startEditing = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const handleEditChange = (e) => {
    setEditTaskText(e.target.value);
  };

  const saveTask = (id) => {
    // Save edited task text
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editTaskText } : task
    ));
    setEditTaskId(null);
    setEditTaskText('');
  };

  const cancelEditing = () => {
    setEditTaskId(null);
    setEditTaskText('');
  };

  return (
    <div className="todo-list">
      <h1>My To-Do App</h1>

      <div className="input-container">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="controls-container">
        <div className="filter-container">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>

      
      </div>

      <div className="task-count-container">
        <div className="task-count">
          Total tasks: {totalTaskCount}
        </div>
        <div className="task-count">
          Incomplete tasks: {incompleteTaskCount}
        </div>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editTaskId === task.id ? (
              <>
                <input 
                  type="text" 
                  value={editTaskText} 
                  onChange={handleEditChange}
                />
                <button onClick={() => saveTask(task.id)}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
                <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
