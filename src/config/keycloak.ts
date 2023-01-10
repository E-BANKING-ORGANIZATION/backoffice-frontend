import Keycloak from "keycloak-js";
import { clientEnvVars } from "./client_env_var";

const keycloak = new (Keycloak as any)({
  url: clientEnvVars().KEYCLOAK_URL,
  realm: clientEnvVars().KEYCLOAK_REAML,
  clientId: clientEnvVars().KEYCLOAK_CLIENT_ID,

  // initOptions: {
  //   onLoad: "login-required",
  //   checkLoginIframe: false,
  // },
  // onLoad: "check-sso",
});
// keycloak.initOptions = {
//   onLoad: "login-required",
// };
export default keycloak;
