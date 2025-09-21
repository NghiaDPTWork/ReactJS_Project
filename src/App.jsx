import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Learn React', 'Build an application']);
  const [inputValue, setInputValue] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (items.length > 5) {
      setNotification('You have a lot to do! 😮');
    } else {
      setNotification('');
    }
  }, [items]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };
  
  const handleRemoveItem = (indexToRemove) => {
    const newItems = items.filter((_, index) => index !== indexToRemove);
    setItems(newItems);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="todo-container">
        <h2>My To-Do List 📝</h2>
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
        {notification && <p className="notification">{notification}</p>}
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
        {items.length === 0 && <p>The list is empty, add a task to get started!</p>}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
