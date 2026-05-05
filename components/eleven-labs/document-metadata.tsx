export function DocumentMetadata() {
  return (
    <div className="bg-white border border-gray-400 p-3 m-4">
      <h3 className="font-bold text-xs text-primary border-b border-gray-400 pb-1 mb-2">Document Metadata</h3>
      <table className="w-full text-xs">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-1 text-gray-600 font-bold w-32">Reference number:</td>
            <td className="py-1 font-mono">DG-VOICE-2024/0047/B-EN</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-1 text-gray-600 font-bold">Responsible unit:</td>
            <td className="py-1">DG CONNECT — Unit E.3</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-1 text-gray-600 font-bold">Publication date:</td>
            <td className="py-1">14 March 2016</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-1 text-gray-600 font-bold">Last review date:</td>
            <td className="py-1">22 February 2024</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-1 text-gray-600 font-bold">Next review:</td>
            <td className="py-1">Q2 2025</td>
          </tr>
          <tr>
            <td className="py-1 text-gray-600 font-bold">Status:</td>
            <td className="py-1">
              <span className="inline-block bg-green-100 border border-green-600 text-green-800 px-1 text-xs font-bold">CURRENT</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-2 pt-2 border-t border-gray-300">
        <a href="#" className="text-xs text-primary underline block">View revision history</a>
        <a href="#" className="text-xs text-primary underline block mt-1">Report an error</a>
        <a href="#" className="text-xs text-primary underline block mt-1">Request translation</a>
      </div>
    </div>
  )
}
