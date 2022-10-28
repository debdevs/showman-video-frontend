import React from 'react';
import './TextEditorBox.css';
const TextEditorBox = ({ default_text }) => {
  return (
    <div className="text-editor-box">
      <h1 className="text-box-header istok-font">{default_text}</h1>
      <input className="text-input istok-font"></input>
    </div>
  );
};

export default TextEditorBox;
