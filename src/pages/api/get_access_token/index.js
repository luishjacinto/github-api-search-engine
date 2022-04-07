import axios from "axios";
import url from "url";

export default async function handler(req, res) {
    const { host } = req.headers
    const { code } = req.query;

    const redirect_uri = `${host.includes('localhost') ? 'http' : 'https'}://${host}`

    const response = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
            client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
            code,
            redirect_uri,
        }, {
            headers: {
                Accept: 'application/json'
            }
        }
    );

    res.redirect(
        url.format({
            pathname: "/",
            query: response.data,
        })
    );
}
