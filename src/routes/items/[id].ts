import { uppercase } from '$lib/index';
import type { RequestHandler } from '../../../.svelte-kit/types/src/routes/items/[id]';

export const get: RequestHandler = ({ params }) => {
	return {
		body: {
			id: uppercase(params.id)
		}
	};
};
