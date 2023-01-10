import { Outlet, useNavigate } from "react-router-dom";
import { BackOfficeHomeContainer } from "../../components/BackOfficeHomeComponent";

const backOffice = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  role: "Back Office",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const statusStyles = {
  Payé: "bg-green-100 text-green-800",
  A_servir: "bg-yellow-100 text-yellow-800",
  Extourné: "bg-gray-100 text-gray-800",
  Restitué: "bg-gray-100 text-red-800",
  Bloqué: "bg-gray-100 text-red-800",
  Débloqué_à_servir: "bg-gray-100 text-yellow-800",
  En_déshérence: "bg-gray-100 text-red-800",
};
const transactions: {
  id: number;
  name: string;
  href: string;
  amount: string;
  currency: string;
  status: keyof typeof statusStyles;
  date: string;
  datetime: string;
}[] = [
  {
    id: 1,
    name: "Payment to Ezzahar Aimad",
    href: "#",
    amount: "$20,000",
    currency: "MAD",
    status: "Payé",
    date: "January 5, 2022",
    datetime: "2022-01-04",
  },
  {
    id: 2,
    name: "Payment to Hajji Mehdi",
    href: "#",
    amount: "$5,000",
    currency: "MAD",
    status: "Bloqué",
    date: "January 5, 2022",
    datetime: "2022-01-05",
  },
];
const stats = [
  { label: "Agents", value: 12 },
  { label: "Clients", value: 50 },
  { label: "Transactions", value: 159 },
];

const clients = [
  {
    name: "Ezzahar Aimad",
    number: "+212 608037807",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Jaoua Yessine",
    number: "+212 608037807",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Hajji Mehdi",
    number: "+212 608037807",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
  {
    name: "Aymen Boussalah",
    number: "+212 608037807",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
  },
];

export const BackOfficeContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full">
      <main className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Profile</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              {/* Welcome panel */}
              <section aria-labelledby="profile-overview-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                  </h2>
                  <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                          <img
                            className="mx-auto h-20 w-20 rounded-full"
                            src={backOffice.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                          <p className="text-sm font-medium text-gray-600">
                            Welcome back,
                          </p>
                          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {backOffice.name}
                          </p>
                          <p className="text-sm font-medium text-gray-600">
                            {backOffice.role}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center sm:mt-0">
                        <a
                          href="#"
                          className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="px-6 py-5 text-sm font-medium text-center"
                      >
                        <span className="text-gray-900">{stat.value}</span>{" "}
                        <span className="text-gray-600">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Actions panel */}
              <Outlet />
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              {/* Rechercher Transaction */}
              <section aria-labelledby="rechercher-transaction">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <h2
                      className="text-base font-medium text-gray-900"
                      id="recherche-transaction-title"
                    >
                      Rechercher Transaction
                    </h2>

                    <div className="mt-6">
                      <a
                        onClick={() => navigate("/backoffice/search")}
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Recherche
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Edit Clients */}
              <section aria-labelledby="edit-clients-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <h2
                      className="text-base font-medium text-gray-900"
                      id="edit-clients-title"
                    >
                      Edit Clients
                    </h2>
                    <div className="flow-root mt-4">
                      <ul
                        role="list"
                        className="-my-5 divide-y divide-gray-200"
                      >
                        {clients.map((person) => (
                          <li key={person.number} className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={person.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {person.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {person.number}
                                </p>
                              </div>
                              <div>
                                <a
                                  onClick={() =>
                                    navigate("/backoffice/editClient")
                                  }
                                  href={person.href}
                                  className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                >
                                  Edit
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"></div>
        </div>
      </footer>
    </div>
  );
};
