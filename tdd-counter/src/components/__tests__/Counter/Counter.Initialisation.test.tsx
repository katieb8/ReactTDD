import { expect, describe, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../../Counter";

describe('Counter component increment tests', () => {

	test("it displays 0", () => {
		const { getByText } = render(<Counter />);
		expect(getByText("0")).toBeInTheDocument();
	});
});