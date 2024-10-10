import { expect, describe, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../../Counter";

describe('Counter component decrement tests', () => {

	test("it displays 0", () => {
		const { getByText } = render(<Counter />);
		expect(getByText("0")).toBeInTheDocument();
	});


  test("it decrements from 1 to 0 when -1 button is pressed", () => {
    const { getByTestId } = render(<Counter initialValue={1} />);
    clickButtonWithText("-1");
		expect(getByTestId("count").textContent).toBe("0");
	});

  test("it decrements from 2 to 1 when -1 button is pressed", () => {
    const { getByTestId } = render(<Counter initialValue={2} />);
    clickButtonWithText("-1");
		expect(getByTestId("count").textContent).toBe("1");
	});

  test("it doesn't decrement beyond 0", () => {
    const { getByTestId } = render(<Counter />);
    clickButtonWithText("-1");
		expect(getByTestId("count").textContent).toBe("0");
	});

  const clickButtonWithText = (text: string, times: number = 1) => {
		for (let i=0; i < times; i++) {
			fireEvent.click(screen.getByRole("button", { name: text }));
		}
	};

	test("when +3 button is pressed, it decrements to 0 when -3 button is pressed", () => {
		const { getByTestId } = render(<Counter initialValue={3} />);
    	clickButtonWithText("-3");
		expect(getByTestId("count").textContent).toBe("0");
	});

	test("it decrements from 4 to 1 when -3 button is pressed, starting at 1", () => {
		const { getByTestId } = render(<Counter initialValue={4} />);
    	clickButtonWithText("-3");
		expect(getByTestId("count").textContent).toBe("1");
	});

	test("Given counter is 2, when -3 button is pressed, it does not decrement", () => {
		const { getByTestId } = render(<Counter initialValue={2} />);
    	clickButtonWithText("-3");
		expect(getByTestId("count").textContent).toBe("2");
	});
});
