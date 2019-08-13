import React from 'react';

const Badge = (props) => {
    let {firstName, lastName, email, phone, birthPlace, favFood, aboutYou} = props
    return (
        <>
            <h1>Badge</h1>
            <h2>First Name :{firstName}</h2>
            <h2>Last Name:{lastName}</h2>
            <h2>Email:{email}</h2>
            <h2>Phone Number:{phone}</h2>
            <h2>Place of Birth{birthPlace}</h2>
            <h2>Favorite Food{favFood}</h2>
            <h2>{aboutYou}</h2>
      </>
    );
};

export default Badge;