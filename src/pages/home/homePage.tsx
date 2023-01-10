import { GeneralHome } from "../../containers/home/GeneralHome";
import useAuth from "../../hooks/useAuth";
import { LoadingBoundry } from "../../shared/loadingBoundry";
import { hasAnyRole } from "../../utils/authorization";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, initialized, roles: userAuthorities } = useAuth();
  return (
    <LoadingBoundry loading={!initialized}>
      {isAuthenticated &&
        hasAnyRole(userAuthorities, ["BACKOFFICE"]) &&
        navigate("/backoffice/home")}
      {!isAuthenticated && <GeneralHome></GeneralHome>}
    </LoadingBoundry>
  );
};
