/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: 'https://matavavk.swedencentral.cloudapp.azure.com/shop-api',
	plugins: {
		'houdini-svelte': {
			client: './src/client',
		},
	},
	scalars: {
		DateTime: {
			type: 'string',
		},
	},
	defaultFragmentMasking: true,
}

export default config
