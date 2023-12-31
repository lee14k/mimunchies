const plans = [
  {
    id: 1,
    name: "Skittles",

    price: "$2",
  },
  {
    id: 2,
    name: "Flying Saucers (Sprees)",

    price: "$2",
  },
  {
    id: 3,
    name: "Asteroids (Nerds)",

    price: "$2",
  },
  {
    id: 4,
   name: "Snickers & Twix",
    price: "$3 for 6 pieces",
  },
  {
    id: 5,
    name: "Airheads",

    price: "$2",
  },
  {
    id: 6,
    name: "Lemon Heads",

    price: "$2",
  },
  {
    id: 7,
    name: "Mini Sweet Tarts",

    price: "$2",
  },
  {
    id: 8,
    name: "Bit O'Honey",

    price: "$2",
  },
  {
    id: 9,
    name: "Frooties & Tootsie Rolls",

    price: "$2",
  },
  {
    id: 10,
    name: "Jolly Ranchers",

    price: "$2",
  },
  {
    id: 11,
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
                  <div className="font-medium text-gray-900">{plan.name}</div>
                  {plan.isCurrent && (
                    <span className="ml-1 text-indigo-600">
                      (Current Plan)
                    </span>
                  )}
               <div className="lg:hidden mt-2">
    {plan.id === 4 ? plan.price : `${plan.price}/ounce`}
</div>


                  {planIdx !== 0 && (
                    <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
                  )}
                </td>
               <td
  className={classNames(
    planIdx === 0 ? "" : "border-t border-gray-200",
    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
  )}
>
  {plan.id === 4 ? plan.price : `${plan.price}/ounce`}
</td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  )}
                >
                  {planIdx !== 0 && (
                    <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

