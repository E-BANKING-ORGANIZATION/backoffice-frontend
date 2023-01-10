import DropdownRender from "./DropDownAgent";

export const BackOfficePlafondComponent = () => {
  return (
    <section aria-labelledby="limite-plafond">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-base font-medium text-gray-900 my-10"
            id="limite-plafond-title"
          >
            Fixer un Plafond Journalier des Transferts:
          </h2>
          <form method="POST" action="#">
            <div className="border-t border-gray-200 bg-gray-50 grid pb-40 grid-cols-1 divide-y divide-gray-200 sm:grid-cols-1 sm:divide-y-0 sm:divide-x">
              <input
                id="limite-field"
                name="limite-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-solid border-2 rounded-full border-indigo-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="La limite quotidienne"
                type="textarea"
              />
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Fixer La limite Quotidienne
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
