/**
 * DashboardScreen — Main Finova dashboard for the CENTER phone.
 * Shows greeting, balance card with lime gradient + glow, quick stats, recent transactions.
 */
export default function DashboardScreen() {
  return (
    <div className="flex flex-col h-full bg-[#080808] text-white px-5 pt-14 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-white/30">Good morning</p>
          <h2 className="text-[18px] font-bold tracking-tight">Hello, Sarah</h2>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4F46E5]/20 to-[#4F46E5]/5 border border-[#4F46E5]/20 flex items-center justify-center text-[12px] font-semibold text-[#4F46E5]">
          S
        </div>
      </div>

      {/* Main balance card — lime gradient with glow effect */}
      <div className="relative rounded-[20px] p-4 pb-4 mb-3 overflow-hidden">
        {/* Card background gradient */}
        <div className="absolute inset-0 rounded-[20px]" style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 50%, #312E81 100%)',
        }} />
        {/* Inner glow */}
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-16 rounded-full bg-black/10 blur-xl" />
        {/* Subtle shimmer */}
        <div className="absolute inset-0 rounded-[20px]" style={{
          background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
        }} />

        <div className="relative">
          <div className="flex items-center gap-1.5 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="text-[9px] text-white/60 font-medium uppercase tracking-wider">Total balance</span>
          </div>
          <p className="text-[28px] font-bold text-white tracking-tight leading-normal">$12,480</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[9px] bg-white/15 text-white/70 px-2 py-0.5 rounded-full font-medium">↑ 12.4%</span>
            <span className="text-[9px] text-white/40">vs last month</span>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-[#111] rounded-[14px] p-3 border border-white/[0.04]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <p className="text-[9px] text-white/25 mb-0.5 uppercase tracking-wide">Income</p>
          <p className="text-[16px] font-bold text-[#4F46E5]">$8,240</p>
        </div>
        <div className="bg-[#111] rounded-[14px] p-3 border border-white/[0.04]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <p className="text-[9px] text-white/25 mb-0.5 uppercase tracking-wide">Expenses</p>
          <p className="text-[16px] font-bold">$3,180</p>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-[#111] rounded-[16px] p-4 border border-white/[0.04] flex-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <p className="text-[10px] text-white/25 mb-3 uppercase tracking-wider">Recent</p>
        {[
          { name: 'Starbucks', cat: 'Food & Drink', amount: '-$5.40', icon: '☕' },
          { name: 'Spotify', cat: 'Subscriptions', amount: '-$9.99', icon: '🎵' },
          { name: 'Client Payment', cat: 'Income', amount: '+$2,400', icon: '💰', positive: true },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/[0.03] last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[10px] bg-white/[0.04] flex items-center justify-center text-[12px]">
                {tx.icon}
              </div>
              <div>
                <p className="text-[12px] font-medium">{tx.name}</p>
                <p className="text-[10px] text-white/20">{tx.cat}</p>
              </div>
            </div>
            <span className={`text-[12px] font-semibold ${tx.positive ? 'text-[#4F46E5]' : 'text-white/60'}`}>{tx.amount}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around mt-3 pt-3 border-t border-white/[0.04]">
        {['⬡', '◎', '▤', '⚙'].map((icon, i) => (
          <div key={i} className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] ${i === 0 ? 'bg-[#4F46E5] text-black' : 'text-white/15'}`}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}
