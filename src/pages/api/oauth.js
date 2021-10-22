import { getURLWithQueryParams } from "../../helpers/auth";
const LINKEDIN_STATE = "codejam12" ; //process.env.LINKEDIN_STATE;
const LINKEDIN_SCOPE = "r_liteprofile r_emailaddress"; //process.env.LINKEDIN_SCOPE;
const LINKEDIN_REDIRECT = "http://localhost:3000/api/oauth" ;// process.env.LINKEDIN_REDIRECT;
const LINKEDIN_CLIENT_ID = "773mrxqdipk4hf" ;//process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_REDIRECT_CONNECT = "https://uplifted.co.in/api/oauth"
const LINKEDIN_CLIENT_SECRET="bov98SOggiwb5rlB"
const Oauth = async (req, res) => {
  // Query to exchange our authorization code for an access token 
    const LINKEDIN_URL = getURLWithQueryParams(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          grant_type: "authorization_code",
          code: req.query.code,
          redirect_uri: LINKEDIN_REDIRECT,
          client_id:LINKEDIN_CLIENT_ID,
          client_secret: LINKEDIN_CLIENT_SECRET
        }
      );
      let tok;
      let resp = await fetch(LINKEDIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (resp.ok) tok = await resp.json();

        let { access_token, expires_in } = tok;

// Query to exchange our token for user infos
  let auth = "Bearer " + access_token;
  let u = {};
  let usr = await fetch("https://api.linkedin.com/v2/me", {
    method: "GET",
    headers: { Connection: "Keep-Alive", Authorization: auth }
  });
  if (usr.ok) u = await usr.json();
if (u.localizedFirstName) {
  res.redirect(`/mentor`)
}
};

export default Oauth