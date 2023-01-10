import { CashIcon, ChevronRightIcon, CheckIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { UsegetBlockedTransfers } from "../hooks/queries/get/Get";
import { UseDebloqueTransfer } from "../hooks/queries/post/Post";
const transactions: {
  id: string;
  name: string;
  href: string;
  amount: string;
  currency: string;
  status: keyof typeof statusStyles;
  date: string;
  datetime: string;
}[] = [
  {
    id: "1",
    name: "Payment to Ezzahar Aimad",
    href: "#",
    amount: "$20,000",
    currency: "MAD",
    status: "A_servir",
    date: "January 5, 2022",
    datetime: "2022-01-04",
  },
  {
    id: "2",
    name: "Payment to Hajji Mehdi",
    href: "#",
    amount: "$5,000",
    currency: "MAD",
    status: "Bloqué",
    date: "January 5, 2022",
    datetime: "2022-01-05",
  },
  {
    id: "3",
    name: "Payment to Jaoua Yessine",
    href: "#",
    amount: "$50,000",
    currency: "MAD",
    status: "A_servir",
    date: "January 10, 2022",
    datetime: "2022-01-10",
  },
  {
    id: "4",
    name: "Payment to Boussalah Aymen",
    href: "#",
    amount: "$45,000",
    currency: "MAD",
    status: "En_déshérence",
    date: "January 15, 2022",
    datetime: "2022-01-15",
  },
  {
    id: "5",
    name: "Payment to Rbaai Ismail",
    href: "#",
    amount: "$2,000",
    currency: "MAD",
    status: "Payé",
    date: "January 25, 2022",
    datetime: "2022-01-25",
  },
];
const statusStyles: any = {
  Payé: "bg-green-100 text-green-800",
  A_servir: "bg-yellow-100 text-yellow-800",
  Extourné: "bg-gray-100 text-gray-800",
  Restitué: "bg-gray-100 text-red-800",
  Bloqué: "bg-gray-100 text-red-800",
  Débloqué_à_servir: "bg-gray-100 text-yellow-800",
  En_déshérence: "bg-gray-100 text-red-800",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const BackOfficeDeblocageComponent = () => {
  const queryClient = useQueryClient();
  const getUnlockTranfers = UsegetBlockedTransfers();
  const [transfers, setTransfers] = useState<any[]>();
  useEffect(() => {
    setTransfers(getUnlockTranfers.data);
  }, [getUnlockTranfers.data]);
  const onDebloque = (id: string) => {
    const useDebloque = UseDebloqueTransfer(id);
    if (useDebloque.isSuccess) {
      queryClient.invalidateQueries(
        "get:/ws-backoffice/unlock/getAllBlockedTransfers"
      );
    }
  };
  return (
    <div className="hidden sm:block">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bloquer
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transfers &&
                  transfers
                    // .filter((transfer) => {
                    //   if (transfer.status == "Bloqué") {
                    //     return transfer;
                    //   }
                    // })
                    .map((transaction) => (
                      <tr key={transaction.id} className="bg-white">
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={transaction.href}
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              <CashIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="text-gray-500 truncate group-hover:text-gray-900">
                                {transaction.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <span className="text-gray-900 font-medium">
                            {transaction.amount}{" "}
                          </span>
                          {transaction.currency}
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span
                            className={classNames(
                              statusStyles[transaction.status],
                              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                            )}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          <a
                            onClick={() => onDebloque(transaction.id)}
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            Debloquer
                          </a>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
            {/* Pagination */}
            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">20</span> results
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
