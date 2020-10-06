export const uDelay = async (ms: number, callback?: Function) =>
	await new Promise((res, _) =>
		setTimeout(() => {
			callback && callback();
			return res();
		}, ms)
	);

export default uDelay;
