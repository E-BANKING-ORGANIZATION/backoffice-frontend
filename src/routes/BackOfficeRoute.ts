import { BackOfficeBlocageDeblocage } from "../pages/backOffice/BackOfficeBlocageDeblocage";
import { BackOfficeBlocage } from "../pages/backOffice/BackOfficeBlocage";
import { BackOfficeEditClient } from "../pages/backOffice/BackOfficeEditClient";
import { BackOfficeHome } from "../pages/backOffice/BackOfficeHome";
import { BackOfficePage } from "../pages/backOffice/BackOfficePage";
import { BackOfficePlafond } from "../pages/backOffice/BackOfficePlafond";
import { BackOfficeSearch } from "../pages/backOffice/BackOfficeSearch";
import { BackOfficeSendNotification } from "../pages/backOffice/BackOfficeSendNotification";
import { BackOfficeTransfert } from "../pages/backOffice/BackOfficeTransfert";
import { hasAnyRole } from "../utils/authorization";
import { BackOfficeDeblocage } from "../pages/backOffice/BackOfficeDeblocage";

export const BackOfficeRoutes = [
  {
    path: "/backoffice",
    name: "homeBackOffice",
    key: `/process_id`,
    component: BackOfficePage,
    role: (authorities: string[]) => hasAnyRole(["BACKOFFICE"], authorities),
    isPublic: false,
    Children: [
      {
        path: "/backoffice/home",
        name: "home",
        component: BackOfficeHome,
      },
      {
        path: "/backoffice/search",
        name: "search",
        component: BackOfficeSearch,
      },
      {
        path: "/backoffice/editClient",
        name: "editClient",
        component: BackOfficeEditClient,
      },
      {
        path: "/backoffice/sendNotification",
        name: "sendNotification",
        component: BackOfficeSendNotification,
      },
      {
        path: "/backoffice/transferts",
        name: "consulterTransferts",
        component: BackOfficeTransfert,
      },
      {
        path: "/backoffice/bloquer",
        name: "bloquerTransferts",
        component: BackOfficeBlocage,
      },
      {
        path: "/backoffice/debloquer",
        name: "debloquerTransferts",
        component: BackOfficeDeblocage,
      },
      {
        path: "/backoffice/plafond",
        name: "planfondJournalier",
        component: BackOfficePlafond,
      },
      {
        path: "/backoffice/bloquer-ou-debloquer",
        name: "bloquerOuDebloquer",
        component: BackOfficeBlocageDeblocage,
      },
    ],
  },
];
