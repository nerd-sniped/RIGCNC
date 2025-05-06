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
					label: 'Start Here',
					items: [
						{ label: 'Welcome', slug: 'guides/welcome' },
						{ label: 'Capabilities', slug: 'guides/capabilities' },
						{ label: 'Design Decisions', slug: 'guides/designdecisions' },
					],

				},
				{
					label: 'How-To',
					items: [
						{label: 'Build & Assembly', slug: 'howto/buildandassembly'},
						{label: 'Usage & Workflow', slug: 'howto/usageandworkflow'},
						{label: 'Troubleshooting', slug: 'howto/troubleshooting'},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Theory',
					autogenerate: { directory: 'theory' },
				},

			],
		}),
	],
});
