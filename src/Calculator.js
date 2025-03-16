import { useState } from "react";

export default function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const handleCalculation = (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            alert("Please enter valid numbers");
            return;
        }

        switch (operation) {
            case "add":
                setResult(n1 + n2);
                break;
            case "subtract":
                setResult(n1 - n2);
                break;
            case "multiply":
                setResult(n1 * n2);
                break;
            case "divide":
                setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
                break;
            default:
                setResult("Invalid operation");
        }
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={() => handleCalculation("add")}>+</button>
            <button onClick={() => handleCalculation("subtract")}>-</button>
            <button onClick={() => handleCalculation("multiply")}>×</button>
            <button onClick={() => handleCalculation("divide")}>÷</button>
            <p>Result: {result}</p>
        </div>
    );
}
