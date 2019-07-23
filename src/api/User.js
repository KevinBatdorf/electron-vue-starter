import { Axios as api } from './'

const User = {
	current() {
		return api.get('user/current')
	}
}

export default User
