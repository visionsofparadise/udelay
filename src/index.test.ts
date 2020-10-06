import { uDelay } from '.';

jest.useFakeTimers();

it(
	'waits for a second',
	async () => {
		expect.assertions(2);

		const testFn = jest.fn();
		uDelay(1000, testFn);

		jest.advanceTimersByTime(999);
		expect(testFn).not.toBeCalled();

		jest.advanceTimersByTime(1);
		expect(testFn).toBeCalled();

		return;
	},
	5 * 1000
);
