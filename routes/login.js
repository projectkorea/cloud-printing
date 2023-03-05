import dotenv from 'dotenv'
dotenv.config()

export const githubLoginPage = (req, res) => {
    const baseUrl = "https://github.com/login/oauth/authorize";
    const config = {
        client_id: process.env.CLIENT_ID_GITHUB,
        scope: "read:user user:email",
        allow_signup: true,
    };
    const params = new URLSearchParams(config).toString()
    const finalUrl = `${baseUrl}?${params}`

  return res.redirect(finalUrl)
};