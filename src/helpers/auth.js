export const LINKEDIN_STATE = "codejam12" ; //process.env.LINKEDIN_STATE;
const LINKEDIN_SCOPE = "r_liteprofile r_emailaddress"; //process.env.LINKEDIN_SCOPE;
const LINKEDIN_REDIRECT = "http://localhost:3000/api/oauth" ;// process.env.LINKEDIN_REDIRECT;
const LINKEDIN_CLIENT_ID = "773mrxqdipk4hf" ;//process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_REDIRECT_CONNECT = "https://uplifted.co.in/api/oauth" ;//process.env.LINKEDIN_REDIRECT_CONNECT;

export const getURLWithQueryParams = (base, params) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `${base}?${query}`;
};

export const LINKEDIN_URL = getURLWithQueryParams(
  "https://www.linkedin.com/oauth/v2/authorization",
  {
    response_type: "code",
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE
  }
);


export const queryToObject = queryString => {
  const pairsString =
    queryString[0] === "?" ? queryString.slice(1) : queryString;
  const pairs = pairsString
    .split("&")
    .map(str => str.split("=").map(decodeURIComponent));
  return pairs.reduce(
    (acc, [key, value]) => (key ? { ...acc, [key]: value } : acc),
    {}
  );
};