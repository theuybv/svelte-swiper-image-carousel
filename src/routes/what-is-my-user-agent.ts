import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = (event) => {
	// log all headers
	console.log(event.request.headers);

	return {
		status: 404
		// body: {
		// 	// retrieve a specific header
		// 	userAgent: event.request.headers.get('user-agent'),
		// 	params: event.url.searchParams.get('test')
		// }
	};
};
