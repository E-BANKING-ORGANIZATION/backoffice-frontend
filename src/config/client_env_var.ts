const envSettings = window as any;
type TClientEnvVars = {
  API_URL: string;
  KEYCLOAK_URL: string;
  KEYCLOAK_REAML: string;
  KEYCLOAK_CLIENT_ID: string;
};

export function clientEnvVars(): TClientEnvVars {
  return {
    API_URL: envSettings.API_URL ?? "http://localhost:9090",
    KEYCLOAK_URL: envSettings.KEYCLOAK_URL ?? "http://localhost:8080/auth/",
    KEYCLOAK_REAML: envSettings.KEYCLOAK_REAML ?? "Ebanking",
    KEYCLOAK_CLIENT_ID: envSettings.KEYCLOAK_CLIENT_ID ?? "frontEnd",
  };
}
