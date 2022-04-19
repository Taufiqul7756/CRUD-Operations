import React, { useState } from 'react';
import {createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users,setUsers] = useState([
        {id:1 , name: 'Salman', position: 'Front End Developer', salary: 30000},
        {id:2 , name: 'Taufiq', position: 'Front End Developer', salary: 20000},
        {id:3 , name: 'Tazwar', position: 'Full Stack Developer', salary: 40000},
    ]);
    return (
       <UserContext.Provider value = {[users,setUsers]}>
           {props.children}
       </UserContext.Provider>
    );
};

// export default UserProvider;