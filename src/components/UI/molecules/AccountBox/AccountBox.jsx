import React from 'react';
import './AccountBox.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserLock } from 'react-icons/fa';
const AccountBox = () => {
  return (
    <div className="account-box-container">
      <ul>
        <li>
          <FaUserAlt className="account-icons" />
          <h3 className="outfit">Account Info</h3>
        </li>
        <li>
          <FaUserLock className="account-icons" />
          <h3 className="outfit">Change Password</h3>
        </li>
        <li>
          <FaUserAlt className="account-icons" />
          <h3 className="outfit">Account Info</h3>
        </li>
        <li>
          <FaUserAlt className="account-icons" />
          <h3 className="outfit">Account Info</h3>
        </li>
        <li>
          <FaUserAlt className="account-icons" />
          <h3>Account Info</h3>
        </li>
      </ul>
    </div>
  );
};

export default AccountBox;
