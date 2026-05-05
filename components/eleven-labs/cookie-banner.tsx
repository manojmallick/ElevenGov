'use client'

import { useState } from 'react';
import { playSfx } from '@/lib/sfx';

export function CookieBanner() {
  const [step, setStep] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const handleConfirmPreferences = () => {
    if (!termsAccepted || !privacyAccepted || !ageConfirmed) {
      alert('ERROR: You must accept all mandatory agreements before proceeding. [Ref: DG-COOK-ERR-001]')
      return
    }
    playSfx('cookie')
    setTimeout(() => setStep(3), 500)
  }

  // Step 0: Initial notice
  if (step === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-gray-400 max-w-xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="bg-primary text-white p-2 text-xs font-bold border-b border-gray-400">
            IMPORTANT: Cookie and Privacy Notification [Ref: DG-COOK-2024/0001/A]
          </div>
          <div className="p-3">
            <div className="bg-yellow-100 border border-yellow-600 p-2 mb-3">
              <p className="text-xs font-bold text-yellow-800">You must complete cookie configuration to access this portal.</p>
            </div>
            <p className="text-xs mb-2 leading-relaxed">
              Pursuant to Regulation (EU) 2016/679 (General Data Protection Regulation), Directive 2002/58/EC (ePrivacy Directive), 
              and Commission Implementing Decision (EU) 2024/1847, this portal requires your explicit consent for the use of cookies 
              and similar tracking technologies.<sup>1</sup>
            </p>
            <p className="text-xs mb-3 leading-relaxed">
              Please review our <a href="#" className="text-primary underline">cookie policy (PDF, 34 pages)</a>, 
              <a href="#" className="text-primary underline ml-1">privacy statement (PDF, 89 pages)</a>, and 
              <a href="#" className="text-primary underline ml-1">data processing agreement (PDF, 127 pages)</a> before proceeding.
            </p>
            <div className="border-t border-gray-300 pt-2 mt-2">
              <p className="text-xs text-gray-600"><sup>1</sup> Failure to provide consent will result in limited portal functionality per Article 7(4) GDPR</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setStep(1)}
                className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800"
                data-action="configure-cookies"
              >
                Configure Cookie Preferences (Required)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Cookie categories
  if (step === 1) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-gray-400 max-w-xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="bg-primary text-white p-2 text-xs font-bold border-b border-gray-400">
            Cookie Preferences — Step 1 of 2 [Form EUD-COOK-2024]
          </div>
          <div className="p-3">
            <p className="text-xs mb-3 text-gray-700">Select cookie categories. All selections are logged for compliance auditing.</p>
            
            <div className="space-y-1 text-xs border border-gray-400 p-2 bg-gray-50">
              <label className="flex items-start gap-2 pb-1 border-b border-gray-300">
                <input type="checkbox" defaultChecked disabled readOnly className="mt-0.5" />
                <div>
                  <span className="font-bold">Essential Cookies (Mandatory)</span>
                  <p className="text-gray-600">Required for portal operation. Cannot be disabled per Regulation 2024/1873 Art. 4(2).</p>
                </div>
              </label>
              <label className="flex items-start gap-2 pb-1 border-b border-gray-300">
                <input type="checkbox" defaultChecked readOnly className="mt-0.5" />
                <div>
                  <span className="font-bold">Functional Cookies</span>
                  <p className="text-gray-600">Enable enhanced functionality such as language preferences and session management.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 pb-1 border-b border-gray-300">
                <input type="checkbox" defaultChecked readOnly className="mt-0.5" />
                <div>
                  <span className="font-bold">Analytics Cookies</span>
                  <p className="text-gray-600">Collect usage statistics for service improvement. Data anonymized per GDPR Art. 89.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 pb-1 border-b border-gray-300">
                <input type="checkbox" readOnly className="mt-0.5" />
                <div>
                  <span className="font-bold">Marketing Cookies</span>
                  <p className="text-gray-600">Enable personalized content. Third-party processing. Optional.</p>
                </div>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" readOnly className="mt-0.5" />
                <div>
                  <span className="font-bold">Third-Party Integration Cookies</span>
                  <p className="text-gray-600">Enable external service integration. Data may be transferred outside EEA.</p>
                </div>
              </label>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setStep(0)}
                className="px-3 py-1 bg-gray-300 text-black text-xs font-bold border border-gray-400 hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800"
              >
                Continue to Acknowledgments
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Mandatory acknowledgments
  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-gray-400 max-w-xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="bg-primary text-white p-2 text-xs font-bold border-b border-gray-400">
            Mandatory Acknowledgments — Step 2 of 2 [Form EUD-COOK-2024]
          </div>
          <div className="p-3">
            <div className="bg-red-50 border border-red-400 p-2 mb-3">
              <p className="text-xs font-bold text-red-800">All acknowledgments below are REQUIRED to proceed.</p>
            </div>
            
            <div className="space-y-2 text-xs border border-gray-400 p-2 bg-gray-50">
              <label className="flex items-start gap-2 pb-2 border-b border-gray-300">
                <input 
                  type="checkbox" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5" 
                />
                <div>
                  <span className="font-bold">Terms of Service Acknowledgment *</span>
                  <p className="text-gray-600">I confirm I have read and understood the Terms of Service (203 pages) and agree to be bound by its provisions.</p>
                </div>
              </label>
              <label className="flex items-start gap-2 pb-2 border-b border-gray-300">
                <input 
                  type="checkbox" 
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-0.5" 
                />
                <div>
                  <span className="font-bold">Privacy Policy Acknowledgment *</span>
                  <p className="text-gray-600">I acknowledge that my data will be processed in accordance with the Privacy Policy and GDPR Articles 13-14.</p>
                </div>
              </label>
              <label className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  checked={ageConfirmed}
                  onChange={(e) => setAgeConfirmed(e.target.checked)}
                  className="mt-0.5" 
                />
                <div>
                  <span className="font-bold">Age Verification *</span>
                  <p className="text-gray-600">I confirm I am 16 years of age or older, or have parental consent per GDPR Article 8.</p>
                </div>
              </label>
            </div>
            
            <p className="text-xs text-gray-600 mt-2">* Required fields. Your selections will be recorded with timestamp and IP address for audit purposes.</p>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setStep(1)}
                className="px-3 py-1 bg-gray-300 text-black text-xs font-bold border border-gray-400 hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={handleConfirmPreferences}
                className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800"
                data-action="save-cookie-preferences"
              >
                Submit Acknowledgments
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
