export default async function handler(req, res) {
	const { host } = req.headers

	const redirect_uri = `${host.includes('localhost') ? 'http' : 'https'}://${host}/api/get_access_token`

    res.redirect(
		`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
	);
}
