import { expect, describe, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../../Counter";

describe('Counter component increment tests', () => {

	const clickButtonWithText = (text: string, times: number = 1) => {
		for (let i=0; i < times; i++) {
			fireEvent.click(screen.getByRole("button", { name: text }));
		}
	};

	test("it displays 0", () => {
		const { getByText } = render(<Counter />);
		expect(getByText("0")).toBeInTheDocument();
	});

	test("it increments by 1 when +1 button is pressed", () => {
		const { getByTestId } = render(<Counter />);
		clickButtonWithText("+1");
		expect(getByTestId("count").textContent).toBe("1");
	});

	test("it increments by 2 when +1 button is pressed twice", () => {
		const { getByTestId } = render(<Counter />);
		clickButtonWithText("+1", 2);
		expect(getByTestId("count").textContent).toBe("2");
	});

	test("it doesn't increment above 10", () => {
		const { getByTestId } = render(<Counter />);
		clickButtonWithText("+1", 11);
		expect(getByTestId("count").textContent).toBe("10");
	});

  test("it increments from 0 to 3 when +3 button is pressed", () => {
		const { getByTestId } = render(<Counter />);
		clickButtonWithText("+3");
		expect(getByTestId("count").textContent).toBe("3");
	});

  test("it increments from 1 to 4 when +3 button is pressed, starting at 1", () => {
		const { getByTestId } = render(<Counter initialValue={1} />);
    	clickButtonWithText("+3");
		expect(getByTestId("count").textContent).toBe("4");
	});

	test("Given counter is 8, when +3 button is pressed, it does not increment", () => {
		const { getByTestId } = render(<Counter initialValue={8} />);
    	clickButtonWithText("+3");
		expect(getByTestId("count").textContent).toBe("8");
	});
});
