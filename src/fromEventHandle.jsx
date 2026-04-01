import React, { useState } from 'react';

function FormExample() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log('Form submitted!');
        // Handle form data here

        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);

        //alert(`Height: ${h} m, Weight: ${w} kg`);
        console.log("heigh:", h);
        console.log("weigh:", w);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Height (cm): </label>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label>Weight (kg): </label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button type="submit">Calculate</button>
      </form>

    );
}

export default FormExample;