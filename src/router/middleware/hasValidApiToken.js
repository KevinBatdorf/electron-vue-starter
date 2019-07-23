export default function hasValidApiToken({ next, store }) {
	if (!store.getters['auth/auth'].hasValidApiToken) {
		return next({
			name: 'settings'
		})
	}

	return next()
}