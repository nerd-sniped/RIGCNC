// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RIGCNC',
			description: 'RIGCNC is a free and open-source "Reasonable Innexpensive CNC Machine"',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nerd-sniped/RIGCNC' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
