import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react';
import './SortButton.css'
import { TemplatesContext } from '../../../../Contexts/TemplatesPageContext';
import { MdArrowDropDown } from 'react-icons/md';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
 
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive, el]);
}




const SortButton = ({button_text = "Sort By : ", button_sort_type_text = "Price: Low To High"}) => {


  const { sortButtonClicked, setSortButtonClicked } = useContext(TemplatesContext);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {setIsActive(!isActive); setSortButtonClicked(!sortButtonClicked) }



  return (





    <div className="menu-container">
      <button onClick={onClick} className="sort_button">
        <span>{button_text}  {" " +button_sort_type_text}</span>
        {}
        {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
        {<MdArrowDropDown/>}
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="/messages">Price : Low To High</a></li>
          <li><a href="/messages">Price : High To Low</a></li>
          <li><a href="/trips">Date : Most Recent</a></li>
          <li><a href="/saved">Popularity</a></li>
        </ul>
      </nav>
    </div>
    
    // <button className='sort_button'>
    //    {button_text}
    // </button>
  )
}

export default SortButton