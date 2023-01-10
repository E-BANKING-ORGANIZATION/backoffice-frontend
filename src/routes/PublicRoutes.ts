import { HomePage } from "../pages/home/homePage";
import { hasAnyRole } from "../utils/authorization";

export const PublicRoutes = [
  {
    path: "/",
    name: "home",
    key: `/process_id`,
    component: HomePage,
    role: (authorities: string[]) => hasAnyRole(["USER"], authorities),
    isPublic: true,
    Children: [],
  },
];
