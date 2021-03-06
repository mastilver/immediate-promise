import test from 'ava';
import fn from './';

test(async t => {
	const x = [];

	await * [
		(async () => {
			await fn();
			x.push(0);
		})(),
		(async () => {
			x.push(1);
		})()
	];

	t.same(x, [1, 0]);
});
