import React from 'react';
import '../Remove/Remove.css'
import { useParams } from "react-router-dom";

const Remove = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h1>Remove {id} </h1>
            
        </div>
    );
};

export default Remove;