// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('Unable to complete the promise, sorry :(')	
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log('Success:', message);
// }, (error) => {
// 	console.log('Error:', error);
// });

var asyncAdd = (one, two) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof one === 'number' && typeof two === 'number') {
				resolve(one + two);
			} else {
				reject(':(');
			}
		}, 2500);
	});
};

asyncAdd(5, 10).then((result) => {
	console.log('Result:', result);
	return asyncAdd(result, 33);
}).then((result) => {
	console.log('Result:', result);
}).catch((error) => {
	console.log('Error:', error);
});