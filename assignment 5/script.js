function Calculator() {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [result, setResult] = React.useState(null);

  const handleCalc = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case 'add':
        setResult(a + b);
        break;
      case 'sub':
        setResult(a - b);
        break;
      case 'mul':
        setResult(a * b);
        break;
      case 'div':
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input type="number" placeholder="First number" value={num1} onChange={e => setNum1(e.target.value)} />
      <br />
      <input type="number" placeholder="Second number" value={num2} onChange={e => setNum2(e.target.value)} />
      <br />
      <button onClick={() => handleCalc('add')}>Add</button>
      <button onClick={() => handleCalc('sub')}>Subtract</button>
      <button onClick={() => handleCalc('mul')}>Multiply</button>
      <button onClick={() => handleCalc('div')}>Divide</button>
      <div className="result">Result: {result !== null ? result : 'No calculation yet'}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);