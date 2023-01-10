import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { LoadingBoundry } from "../shared/loadingBoundry";

type Props = {
  component: JSX.Element;
  roleHandler: (authorities: string[]) => boolean;
};

export const PrivateRoute = ({ component, roleHandler }: Props) => {
  const { isAuthenticated, initialized, roles: userAuthorities } = useAuth();

  return (
    <>
      {/* <LoadingBoundry loading={initialized}> */}
      {!isAuthenticated && <Navigate to="/" replace={true} />}
      {isAuthenticated && roleHandler(userAuthorities) && component}
      {/* </LoadingBoundry> */}
    </>
  );
};
