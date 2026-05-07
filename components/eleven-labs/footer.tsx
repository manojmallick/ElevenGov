export function Footer() {
  return (
    <footer className="border-t-2 border-gray-400 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h3 className="font-bold text-primary mb-3">About This Service</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-primary underline">About This Portal</a></li>
              <li><a href="#" className="text-primary underline">Service Roadmap</a></li>
              <li><a href="#" className="text-primary underline">Submit Feedback</a></li>
              <li><a href="#" className="text-primary underline">Report an Issue</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-3">Compliance</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-primary underline">GDPR Information</a></li>
              <li><a href="#" className="text-primary underline">Data Protection</a></li>
              <li><a href="#" className="text-primary underline">Freedom of Information</a></li>
              <li><a href="#" className="text-primary underline">Audit Reports</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-3">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-primary underline">FAQ</a></li>
              <li><a href="#" className="text-primary underline">Technical Support</a></li>
              <li><a href="#" className="text-primary underline">Documentation</a></li>
              <li><a href="#" className="text-primary underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-primary underline">Accessibility Statement</a></li>
              <li><a href="#" className="text-primary underline">Privacy Policy</a></li>
              <li><a href="#" className="text-primary underline">Terms of Service</a></li>
              <li><a href="#" className="text-primary underline">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-400 text-xs text-gray-700">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p>Last updated: 14 March 2016 | © European Union 2026</p>
              <p className="mt-1">This document has been viewed 847,293 times</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-primary underline">Accessibility Statement</a>
              <a href="#" className="text-primary underline">Privacy Policy</a>
              <a href="#" className="text-primary underline">Contact Webmaster</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
