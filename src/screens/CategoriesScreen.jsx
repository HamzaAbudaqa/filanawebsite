/**
 * CategoriesScreen — Smart categorization view for the RIGHT phone.
 * Shows auto-categorized spending with progress bars and receipt scan.
 */
const categories = [
  { name: 'Food & Drink', amount: '$482', pct: 38, color: '#4F46E5' },
  { name: 'Transport', amount: '$156', pct: 20, color: '#4ADE80' },
  { name: 'Shopping', amount: '$312', pct: 32, color: '#22D3EE' },
  { name: 'Subscriptions', amount: '$90', pct: 10, color: '#A78BFA' },
]

export default function CategoriesScreen() {
  return (
    <div className="flex flex-col h-full bg-[#080808] text-white px-5 pt-14 pb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
        <span className="text-[10px] text-[#4F46E5] font-medium uppercase tracking-wider">AI Categorized</span>
      </div>
      <h2 className="text-[18px] font-bold tracking-tight mb-5">Smart Categories</h2>

      {/* Category bars */}
      <div className="flex flex-col gap-3 mb-5">
        {categories.map((cat, i) => (
          <div key={i} className="bg-[#111] rounded-[14px] p-3.5 border border-white/[0.04]" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-medium">{cat.name}</span>
              <span className="text-[12px] text-white/30">{cat.amount}</span>
            </div>
            <div className="w-full h-[5px] bg-white/[0.04] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Receipt scan card */}
      <div className="bg-[#111] rounded-[16px] p-4 border border-white/[0.04] flex-1" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[12px]">📸</span>
          <span className="text-[11px] text-white/30 font-medium">Last scan</span>
        </div>
        <div className="bg-[#0A0A0A] rounded-[12px] p-3 border border-white/[0.03]">
          {[
            { l: 'Vendor', v: 'Whole Foods' },
            { l: 'Total', v: '$67.42' },
            { l: 'Category', v: 'Groceries' },
          ].map((row, i) => (
            <div key={i} className="flex justify-between py-1.5 border-b border-white/[0.03] last:border-0">
              <span className="text-[10px] text-white/20">{row.l}</span>
              <span className="text-[11px] font-medium">{row.v}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span className="text-[10px] text-purple-400">Auto-categorized</span>
        </div>
      </div>

      {/* Bottom insight */}
      <div className="mt-3 bg-[#4F46E5]/[0.06] border border-[#4F46E5]/10 rounded-[12px] px-3.5 py-2.5">
        <p className="text-[10px] text-white/40">12 transactions auto-categorized this week</p>
      </div>
    </div>
  )
}
