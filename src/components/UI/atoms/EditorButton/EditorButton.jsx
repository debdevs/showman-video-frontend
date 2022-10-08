import React from 'react';
import './EditorButton.css';
const EditorButton = ({ button_text }) => {
  return (
    <div className="editor-button-parent">
      <button class="editor-button">{button_text}</button>
    </div>
  );
};

export default EditorButton;
