// src/ESPLayout.js
import React, { useState, useEffect } from 'react';
import './ESPLayout.css';

function ESPLayout() {
  const sampleElements = [
    { name: 'Chair', imageUrl: 'https://via.placeholder.com/50?text=Chair' },
    { name: 'Table', imageUrl: 'https://via.placeholder.com/50?text=Table' },
    { name: 'Stage', imageUrl: 'https://via.placeholder.com/50?text=Stage' },
    { name: 'Podium', imageUrl: 'https://via.placeholder.com/50?text=Podium' },
    { name: 'Lighting', imageUrl: 'https://via.placeholder.com/50?text=Lighting' }
  ];

  const sampleThemes = [
    { id: '1', name: 'Wedding' },
    { id: '2', name: 'Party' },
    { id: '3', name: 'Meeting' }
  ];

  const [elements, setElements] = useState(sampleElements);
  const [themes, setThemes] = useState(sampleThemes);
  const [selectedTheme, setSelectedTheme] = useState('');

  useEffect(() => {
    // Fetch elements and themes from the backend (if you have actual endpoints)
    // Commented out for testing purposes
    /*
    fetch('/api/elements') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setElements(data))
      .catch(error => console.error('Error fetching elements:', error));
    
    fetch('/api/themes') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setThemes(data))
      .catch(error => console.error('Error fetching themes:', error));
    */
  }, []);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    // Apply theme change logic here
  };

  return (
    <div className="esp-container">
      <header className="esp-header">
        <h1>Event Space Preview</h1>
        <div className="logo">
          <a href="/esp-widget">
            <img src="https://via.placeholder.com/100x30?text=CoQuest" alt="CoQuest Logo" />
          </a>
        </div>
      </header>
      <div className="esp-content">
        <div className="esp-sidebar">
          <div className="theme-dropdown">
            <label htmlFor="themeSelect">Select Theme:</label>
            <select id="themeSelect" onChange={handleThemeChange}>
              <option value="">Select a theme</option>
              {themes.map((theme, index) => (
                <option key={index} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
          <ul>
            {elements.map((element, index) => (
              <li key={index}>
                <img src={element.imageUrl} alt={element.name} />
                <span>{element.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="esp-main">
          <div className="grid-container">
            {/* Grid content goes here */}
          </div>
          <div className="undo-redo-buttons">
            <button className="undo-button"><i className="fas fa-undo-alt"></i></button>
            <button className="redo-button"><i className="fas fa-redo-alt"></i></button>
          </div>
        </div>
      </div>
      <footer className="esp-footer">
        <button>Delete</button>
        <button>Reset</button>
        <button>Submit</button>
      </footer>
    </div>
  );
}

export default ESPLayout;
