/**
 * InsightsScreen — AI insights / chat screen for the LEFT phone.
 * Shows 
 *  AI providing financial insights via chat bubbles.
 */
export default function InsightsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#080808] text-white px-5 pt-14 pb-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-full bg-[#4F46E5]/15 flex items-center justify-center">
          <span className="text-[#4F46E5] text-[11px] font-bold">AI</span>
        </div>
        <div>
          <p className="text-[14px] font-semibold">Filana AI</p>
          <p className="text-[10px] text-white/25">Financial assistant</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="self-end bg-[#4F46E5] text-black rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[80%]">
          <p className="text-[12px] leading-relaxed">How much did I spend on food this month?</p>
        </div>

        <div className="self-start bg-[#151515] rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[85%] border border-white/[0.04]" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
          <p className="text-[12px] text-white/70 leading-relaxed">
            You spent <span className="text-[#4F46E5] font-semibold">$482.30</span> on Food & Drink this month — that's 18% higher than your average.
          </p>
        </div>

        <div className="self-end bg-[#4F46E5] text-black rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[80%]">
          <p className="text-[12px] leading-relaxed">Tips to reduce it?</p>
        </div>

        <div className="self-start bg-[#151515] rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[85%] border border-white/[0.04]" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
          <p className="text-[12px] text-white/70 leading-relaxed">
            Set a weekly grocery budget of <span className="text-[#4F46E5] font-semibold">$80</span>. I can alert you when you're close to the limit.
          </p>
        </div>

        <div className="self-start bg-[#151515] rounded-2xl rounded-bl-md px-3.5 py-3 max-w-[85%] border border-[#4F46E5]/10" style={{ boxShadow: '0 2px 8px rgba(177,247,11,0.05)' }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            <span className="text-[10px] text-[#4F46E5] font-medium">AI Insight</span>
          </div>
          <p className="text-[12px] text-white/60 leading-relaxed">
            You could save ~$120/month by cooking at home 2 more days per week.
          </p>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-3 bg-[#111] rounded-full px-4 py-2.5 flex items-center gap-2 border border-white/[0.04]">
        <span className="text-[11px] text-white/20 flex-1">Ask Filana anything...</span>
        <div className="w-7 h-7 rounded-full bg-[#4F46E5] flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
