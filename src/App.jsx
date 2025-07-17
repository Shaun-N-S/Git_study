import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todo/todoSlice';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6">Redux Todo App 🚀</h1>
      <div className="flex space-x-2 mb-6">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="p-3 rounded-xl shadow-xl outline-none" placeholder="Add your todo..." />
        <button onClick={handleAdd} className="bg-white text-purple-700 font-bold px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform">Add</button>
      </div>
      <ul className="space-y-4 w-80">
        {todos.map(todo => (
          <li key={todo.id} className={`flex justify-between items-center p-3 rounded-xl shadow-md bg-white ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            <span onClick={() => dispatch(toggleTodo(todo.id))} className="cursor-pointer">{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500 hover:text-red-700 font-bold">x</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
