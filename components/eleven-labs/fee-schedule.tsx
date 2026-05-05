'use client'

import { SectionDownload } from './section-download'

export function FeeSchedule() {
  const accessTiers = [
    {
      name: 'Provisional Access Tier',
      ref: 'DG-FEE-2024/0001/A',
      monthlyFee: '€0.00*',
      description: 'Limited evaluation access (subject to monthly review)',
      features: [
        '10,000 character conversions/month*',
        'Access to 5 voice assets',
        '1-minute audio generation limit per session',
        'Community support (response: 15-20 business days)',
        'Subject to discontinuation without notice'
      ]
    },
    {
      name: 'Registered Operator Tier',
      ref: 'DG-FEE-2024/0002/B',
      monthlyFee: '€420.00*',
      description: 'Standard commercial access (12-month commitment required)',
      features: [
        'Unlimited character conversions',
        'Access to 100+ voice assets',
        '30-minute audio generation limit per session',
        'Email support (response: 5-10 business days)',
        'Monthly usage reports and compliance audits',
        'Data processing agreement (DPA) mandatory'
      ]
    },
    {
      name: 'Institutional Procurement Tier',
      ref: 'DG-FEE-2024/0003/C',
      monthlyFee: 'Custom quote',
      description: 'Enterprise government access (formal negotiation required)',
      features: [
        'Unlimited usage, no session limits',
        'Access to all voice assets and experimental models',
        'Priority technical support (24-hour response)',
        'Dedicated account manager',
        'Quarterly compliance reviews',
        'Custom SLA negotiation per Directive 2023/1370',
        'Integration with European Procurement Portal (ESPD)'
      ]
    }
  ];

  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">Fee Schedule and Access Tiers</h2>
      <div className="ref-number">[Ref: DG-FEES-2024/0124/M]</div>
      
      <p className="text-xs mt-3 text-gray-700 mb-4">
        All fees subject to value-added tax (VAT) per Council Directive 2006/112/EC. Payment terms: net 30 days from invoice date. Invoices must reference the institutional purchase order number.
      </p>

      <div className="space-y-6 overflow-x-auto">
        {accessTiers.map((tier, i) => (
          <div key={i} className="border border-gray-400 p-3 sm:p-4 bg-secondary min-w-0">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-primary">{tier.name}</h3>
                <p className="text-xs text-gray-600 font-mono">{tier.ref}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-lg text-primary">{tier.monthlyFee}</p>
                <p className="text-xs text-gray-600">/month</p>
              </div>
            </div>

            <p className="text-xs text-gray-700 mb-3">{tier.description}</p>

            <div className="text-xs space-y-1 mb-3">
              <p className="font-bold text-primary">Included Features:</p>
              {tier.features.map((feature, j) => (
                <p key={j} className="text-gray-700 ml-2">• {feature}</p>
              ))}
            </div>

            <button className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800">
              {tier.name === 'Provisional Access Tier' ? 'Request Access' : 'Start Procurement Process'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600 mb-2">
          <span className="font-bold">* Important Note:</span> All pricing is subject to institutional volume discounts and multi-year commitment reductions. 
          Provisional Tier access is subject to automatic termination if usage exceeds fair-use guidelines.
        </p>
        
        <div className="eu-yellow-box mt-3">
          <p className="font-bold text-xs">⚠ Payment Information</p>
          <p className="text-xs mt-1">
            Bank transfers only. IBAN: EU00 0000 0000 0000 000 | BIC: EUDIDDEF | Reference: Your Organization ID
          </p>
        </div>

        <p className="text-xs mt-4 text-gray-600">
          For volume licensing inquiries or custom arrangements, contact the Procurement Department: 
          <a href="mailto:procurement@eudid.eu" className="text-primary underline ml-1">procurement@eudid.eu</a> 
          (response time: 20-30 business days)
        </p>
      </div>
      <SectionDownload sectionRef="DG-FEES-2024/0124/M" />
    </div>
  );
}
