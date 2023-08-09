const plans = [
  {
    id: 1,
    name: "Skittles",

    price: "$2",
    isCurrent: false,
  },
  {
    id: 2,
    name: "Flying Saucers (Sprees)",

    price: "$2",
  },
  {
    id: 2,
    name: "Asteroids (Nerds)",

    price: "$2",
  },
  {
    id: 2,
    name: "Snickers & Twix",

    price: "$2",
  },
  {
    id: 2,
    name: "Airheads",

    price: "$2",
  },
  {
    id: 2,
    name: "Lemon Heads",

    price: "$2",
  },
  {
    id: 2,
    name: "Mini Sweet Tarts",

    price: "$2",
  },
  {
    id: 2,
    name: "Bit O'Honey",

    price: "$2",
  },
  {
    id: 2,
    name: "Frooties & Tootsie Rolls",

    price: "$2",
  },
  {
    id: 2,
    name: "Jolly Ranchers",

    price: "$2",
  },
  {
    id: 2,
    name: "Caramel M&Ms",

    price: "$2",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CandiesTreats() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
     
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Candy
              </th>

              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pl-4 pr-3 text-sm sm:pl-6"
                  )}
                >
                  <div className="font-medium text-gray-900">
                    {plan.name}
                    {plan.isCurrent ? (
                      <span className="ml-1 text-indigo-600">
                        (Current Plan)
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? (
                    <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
                  ) : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-gray-200",
                    "px-3 py-3.5 text-sm text-gray-500"
                  )}
                >
                  <div className="sm:hidden">{plan.price}/mo</div>
                  <div className="hidden sm:block">{plan.price}/ounce</div>
                </td>
                {/* ... other cell content for memory, cpu, storage ... */}
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  )}
                >
                  {planIdx !== 0 ? (
                    <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
