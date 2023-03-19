import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Alert from '$lib/components/Feedback/Alert/Alert.svelte';

describe('Alert.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('bcu-alert')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert, {
			props: {
				background: 'bg-primary-500',
				border: 'border border-secondary-500',
				padding: 'p-4',
				shadow: 'shadow',
				space: 'space-x-2',
				// Slots
				slotIcon: 'bg-red-500',
				slotMessage: 'bg-green-500',
				slotActions: 'bg-blue-500',
				// a11y
				label: 'TestAlert',
				labelledby: 'TestLabelAlert'
			}
		});
		expect(getByTestId('bcu-alert')).toBeTruthy();
	});
});
