import React from 'react';

const Badge = (props) => {
    let {firstName, lastName, email, phone, birthPlace, favFood, aboutYou} = props
    return (
      <div className="badge-form">
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
        <h1>{birthPlace}</h1>
        <h1>{favFood}</h1>
        <h1>{aboutYou}</h1>
      </div>
    );
};

export default Badge;