import React from 'react';
import { BsInfoCircle } from 'react-icons/all';
import { CgPassword } from 'react-icons/all';
import { RiHistoryFill } from 'react-icons/all';
const profile_buttons_data = [
  {
    id: 1,
    title: 'Account Info',
    icon: <BsInfoCircle className="button-icon" />,
  },
  {
    id: 2,
    title: 'Change Password',
    icon: <CgPassword className="button-icon" />,
  },

  {
    id: 3,
    title: 'Order History',
    icon: <RiHistoryFill className="button-icon" />,
  },
];

export default profile_buttons_data;
