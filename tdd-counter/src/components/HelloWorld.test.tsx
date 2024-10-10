import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/react'
import HelloWorld from './HelloWorld';

describe('Hello World', () => {

	test("it displays title", () => {
			const { getByText } = render(<HelloWorld />);
			expect(getByText("Hello World!")).toBeInTheDocument();
	});
});