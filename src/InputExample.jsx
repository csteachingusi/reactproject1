import React, { useState } from 'react';

function InputExample() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log("Input value:", event.target.value);
    };

    return (
        <input type="text" value={value} onChange={handleChange} placeholder="Type something..." />
    );
}

export default InputExample;