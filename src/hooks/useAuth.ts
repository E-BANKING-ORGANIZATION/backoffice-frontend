import { useCallback, useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();
  const [user, setUser] = useState<Keycloak.KeycloakProfile>();
  const [error, setError] = useState("");

  // fetch user profile
  useEffect(() => {
    if (!initialized) {
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const userProfile = await keycloak.loadUserProfile();
        // setUser({
        //   ...userProfile,
        //   fullName: `${userProfile.firstName} ${userProfile.lastName}`,
        //   firstName: `${userProfile.firstName}`
        // });
        setUser({
          ...userProfile,
        });
      } catch (err: any) {
        setError(err);
      }
    };

    if (keycloak.authenticated) {
      fetchUserInfo();
    }

    return () => {
      setUser({});
      setError("");
    };
  }, [keycloak, initialized]);
  //console.log(keycloak.token);
  // if (keycloak.token != null) localStorage.setItem("token", keycloak.token);

  return {
    isAuthenticated: keycloak.authenticated,
    initialized: initialized,
    error,
    meta: {
      keycloak,
    },
    token: keycloak.token,
    user,
    roles: keycloak.realmAccess ? keycloak.realmAccess.roles : [],
    login: useCallback(() => {
      keycloak.login();
    }, [keycloak]),
    logout: useCallback(() => {
      keycloak.logout();
    }, [keycloak]),
    register: useCallback(() => {
      keycloak.register();
    }, [keycloak]),
  };
};

export default useAuth;
