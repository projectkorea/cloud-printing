import dotenv from 'dotenv'
dotenv.config()

export const kakaoLoginPage = (req, res) => {
  const baseUrl = "https://kauth.kakao.com/oauth/authorize";
  const config = {
      client_id: process.env.CLIENT_ID_GITHUB,
      redirect_uri: 'https://wiseprint.cloud/oauth/kakao',
      response_type: 'code',
  };
  const params = new URLSearchParams(config).toString()
  const finalUrl = `${baseUrl}?${params}`

return res.redirect(finalUrl)
};

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