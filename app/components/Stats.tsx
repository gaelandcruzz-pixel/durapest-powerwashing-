const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating", suffix: "★" },
  { value: "10+", label: "Years in Toronto" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function Stats() {
  return (
    <section className="bg-brand-red py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, suffix }) => (
            <div key={label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">
                {value}
                {suffix && <span className="text-yellow-300 ml-1">{suffix}</span>}
              </p>
              <p className="text-red-100 text-sm mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
