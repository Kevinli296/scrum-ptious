import React from 'react';

export default function MyTeamItem(props) {
  const {
    member,
    getUserTasks,
  } = props;

  const { id, role, name, email, phone_number } = member;

  const roles = {
    1 : 'Project Manager',
    2 : 'Employee'
  }

  return (
    <li className="task-progress">
      <button onClick={() => getUserTasks(id)}>
        Test
      </button>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <h5>{phone_number}</h5>
      <h6>{roles[role]}</h6>
    </li>
  )
}