import React from 'react';
import './EditorButton.css';
const EditorButton = ({ button_text, onClick }) => {
  return (
    <div className="editor-button-parent">
      <button class="editor-button" onClick={onClick}>
        {button_text}
      </button>
    </div>
  );
};

export default EditorButton;
