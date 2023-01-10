import { BackOfficeRoutes } from "./BackOfficeRoute";
import { PublicRoutes } from "./PublicRoutes";

export const routes = [...BackOfficeRoutes, ...PublicRoutes];
