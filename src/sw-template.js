if ('function' === typeof importScripts) {
	// eslint-disable-next-line no-undef
	importScripts(
		'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
	)
	/* global workbox */
	if (workbox) {
		console.log('Workbox is loaded')

		/* injection point for manifest files.  */
		workbox.precaching.precacheAndRoute([])

		/* custom cache rules*/
		workbox.routing.registerNavigationRoute('/index.html', {
			// eslint-disable-next-line no-useless-escape
			blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
		})

		workbox.routing.registerRoute(
			/\.(?:png|gif|jpg|jpeg)$/,
			workbox.strategies.cacheFirst({
				cacheName: 'images',
				plugins: [
					new workbox.expiration.Plugin({
						maxEntries: 60,
						maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
					}),
				],
			})
		)
	} else {
		console.log('Workbox could not be loaded. No Offline support')
	}
}
