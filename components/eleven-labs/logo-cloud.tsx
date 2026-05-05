export function LogoCloud() {
  const orgs = [
    'European Commission',
    'European Parliament',
    'Council of the European Union',
    'Court of Justice',
    'European Central Bank',
  ];

  return (
    <div className="bg-secondary border border-gray-400 p-6 m-4">
      <h3 className="text-center font-bold text-sm text-primary mb-4">
        Institutional Partners [Ref: DG-PART-2024/0091/D]
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {orgs.map((org) => (
          <div key={org} className="border border-gray-400 p-3 text-center bg-white">
            <p className="text-xs font-bold text-gray-700">{org}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-4 text-gray-700">
        <a href="#" className="text-primary underline">Full list of authorized institutions</a>
      </p>
    </div>
  );
}
