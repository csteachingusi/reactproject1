import { useState } from "react";

function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    function calculateBMI(e) {
        e.preventDefault();

        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);

        if (!h || !w) return;

        const bmiValue = (w / (h * h)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) setCategory("Underweight");
        else if (bmiValue < 25) setCategory("Normal");
        else if (bmiValue < 30) setCategory("Overweight");
        else setCategory("Obese");
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>BMI Calculator</h1>

            <form onSubmit={calculateBMI}>
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

            {bmi && (
                <div>
                    <h2>BMI: {bmi}</h2>
                    <h3>Category: {category}</h3>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;

