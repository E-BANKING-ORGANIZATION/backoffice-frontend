import { useNavigate } from "react-router-dom";

export const BackOfficeBlocageDeblocageComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Rechercher Transaction */}
      <section aria-labelledby="rechercher-transaction">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-bold text-gray-900"
              id="recherche-transaction-title"
            >
              Voulez Vous Bloquez ou Debloquez la Transaction?
            </h2>
            <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
              <div className="mt-6">
                <a
                  onClick={() => navigate("/backoffice/bloquer")}
                  href="#"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Bloquer
                </a>
              </div>
              <div className="mt-6">
                <a
                  onClick={() => navigate("/backoffice/debloquer")}
                  href="#"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Debloquer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
