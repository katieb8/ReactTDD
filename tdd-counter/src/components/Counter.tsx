import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue } ) => {

  const upperBound = 10;
  const lowerBound = 0;

	const [count, setCount] = useState<number>(initialValue ?? 0);

  const handleMinusOneClick = () => {
    if (count > lowerBound) {
      setCount(count - 1);
    }
  };

	const handlePlusOneClick = () => {
    if (count < upperBound) {
		  setCount(count + 1);
    }
	};

  const handlePlusThreeClick = () => {
    if (count < upperBound - 2 ) {
      setCount(count + 3);
    }
  };

  const handleMinusThreeClick = () => {
    if (count > lowerBound + 2 ) {
      setCount(count - 3);
    }
  };

	return (
		<div className="flex flex-row gap-4">
      <Button text="-3" onClick={handleMinusThreeClick} />
      <Button text="-1" onClick={handleMinusOneClick} />
			<span data-testid="count" className="border border-white py-2 px-4 rounded-md">{count}</span>
			<Button text="+1" onClick={handlePlusOneClick} />
			<Button text="+3" onClick={handlePlusThreeClick} />
		</div>
	);
};

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
return (
    <button 
      type="button" 
      className="py-2 px-4 rounded-md bg-neutral-800" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Counter;
