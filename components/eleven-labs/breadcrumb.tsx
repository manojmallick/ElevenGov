export function Breadcrumb() {
  return (
    <nav className="bg-white border-b border-gray-300 p-3 text-xs">
      <div className="max-w-6xl mx-auto">
        <ol className="flex gap-2 text-gray-700">
          <li><a href="#" className="text-primary underline">Home</a></li>
          <li>&gt;</li>
          <li><a href="#" className="text-primary underline">Services</a></li>
          <li>&gt;</li>
          <li><a href="#" className="text-primary underline">Voice Technology</a></li>
          <li>&gt;</li>
          <li className="text-gray-900 font-bold">Overview</li>
        </ol>
      </div>
    </nav>
  );
}
