import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Smartphone, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  BarChart3, 
  ShieldAlert, 
  Target, 
  Zap,
  Image as ImageIcon,
  Lightbulb,
  ChevronUp,
  ChevronDown,
  MousePointerClick
} from 'lucide-react';

const ImagePlaceholder = ({ label, height = "h-64" }) => (
  <div className={`w-full ${height} bg-[#181a14] border-2 border-dashed border-[#3e4431] rounded-xl flex flex-col items-center justify-center text-[#c8c3a9] p-6 text-center hover:bg-[#2d3224] transition-colors group`}>
    <ImageIcon className="w-8 h-8 mb-2 opacity-50 group-hover:opacity-100 transition-opacity text-[#d4af37]" />
    <span className="text-sm font-medium tracking-wide">{label}</span>
    <span className="text-xs mt-1 opacity-50 italic">(Insert Screenshot Here)</span>
  </div>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#f0ebd8] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#c8c3a9] max-w-3xl leading-relaxed italic">{subtitle}</p>}
  </div>
);

const InteractiveFrictionCard = ({ title, type, pain, impact, solutionTitle, solution, imageLabels, icon: Icon, color = "terracotta" }) => {
  const [showSolution, setShowSolution] = useState(false);

  const colors = {
    terracotta: { bg: "bg-[#d97c66]/10", border: "border-[#d97c66]/20", text: "text-[#d97c66]", dot: "bg-[#d97c66]" },
    gold: { bg: "bg-[#d4af37]/10", border: "border-[#d4af37]/20", text: "text-[#d4af37]", dot: "bg-[#d4af37]" },
    forest: { bg: "bg-[#8cb04e]/10", border: "border-[#8cb04e]/20", text: "text-[#8cb04e]", dot: "bg-[#8cb04e]" },
  };

  const theme = colors[color];

  return (
    <div className="bg-[#22251c] border border-[#3e4431] p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:border-[#556b2f]">
      <div className="flex justify-between items-start mb-6">
        <div className={`flex items-center gap-2 ${theme.text} font-semibold tracking-wide uppercase text-sm`}>
          <Icon className="w-5 h-5" /> {type}
        </div>
        
        {/* Toggle Switch */}
        <div className="flex bg-[#181a14] rounded-full p-1 border border-[#3e4431]">
          <button 
            onClick={() => setShowSolution(false)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!showSolution ? 'bg-[#2d3224] text-[#f0ebd8] shadow-sm' : 'text-[#c8c3a9] hover:text-[#f0ebd8]'}`}
          >
            Friction
          </button>
          <button 
            onClick={() => setShowSolution(true)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${showSolution ? 'bg-[#d4af37] text-[#181a14] shadow-sm' : 'text-[#c8c3a9] hover:text-[#f0ebd8]'}`}
          >
            <Lightbulb className="w-4 h-4" /> Solution
          </button>
        </div>
      </div>

      <div className="min-h-[160px]">
        {!showSolution ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-[#f0ebd8] mb-4">{title}</h3>
            <ul className="space-y-3 mb-6 text-[#c8c3a9]">
              {pain.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`mt-2 w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0`}/> 
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <div className={`${theme.bg} p-4 rounded-lg border ${theme.border}`}>
              <p className={`text-sm ${theme.text} font-medium leading-relaxed`}><span className="font-bold uppercase text-xs tracking-wider">Impact:</span> {impact}</p>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-[#f0ebd8] mb-4">{solutionTitle}</h3>
            <ul className="space-y-3 mb-6 text-[#c8c3a9]">
              {solution.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-[#d4af37]"><CheckCircle2 className="w-5 h-5"/></div> 
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#d4af37]/10 p-4 rounded-lg border border-[#d4af37]/20">
              <p className="text-sm text-[#ebd078] font-medium flex items-center gap-2">
                <Target className="w-4 h-4" /> Core objective resolved
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={`grid grid-cols-${imageLabels.length} gap-4 mt-8 pt-8 border-t border-[#3e4431]`}>
        {imageLabels.map((lbl, i) => (
          <ImagePlaceholder key={i} label={lbl} height={imageLabels.length > 2 ? "h-64" : "h-80"} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const riceData = [
    { id: 1, name: "Progressive Permissions", r: 100, i: 3, p: "High", order: 1 },
    { id: 2, name: "Personalized AI Insights", r: 90, i: 3, p: "High", order: 2 },
    { id: 3, name: "Delayed Paywall (Preview Value)", r: 85, i: 3, p: "High", order: 3 },
    { id: 4, name: "Focused Onboarding", r: 100, i: 2.5, p: "Med-High", order: 4 },
    { id: 5, name: "Guided Dashboard", r: 80, i: 2.5, p: "Medium", order: 5 },
    { id: 6, name: "ROI-Based Pricing Framing", r: 70, i: 2, p: "Medium", order: 6 },
  ];

  const handleSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') direction = 'asc';
    setSortConfig({ key, direction });
  };

  const sortedRiceData = [...riceData].sort((a, b) => {
    if (!sortConfig.key) return a.order - b.order; // Default sort
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];
    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return <ChevronDown className="w-4 h-4 opacity-20" />;
    return sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-[#d4af37]" />;
  };

  return (
    <div className="min-h-screen bg-[#181a14] text-[#c8c3a9] selection:bg-[#d4af37]/30 selection:text-[#f0ebd8]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}} />
      
      <div className="font-playfair">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-[#181a14]/90 backdrop-blur-md border-b border-[#3e4431]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-2xl tracking-tight text-[#f0ebd8]">Portfolio<span className="text-[#d4af37]">.</span></div>
            <div className="text-sm font-medium text-[#c8c3a9] hover:text-[#d4af37] cursor-pointer transition-colors flex items-center gap-2 italic">
              Oolka Case Study
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="pt-28 pb-28 border-b border-[#3e4431] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#556b2f]/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-sm font-semibold mb-8 border border-[#d4af37]/20 uppercase tracking-widest">
              <Target className="w-4 h-4" /> Product Teardown
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#f0ebd8] mb-8 leading-[1.1] tracking-tight">
              Oolka App: <br className="hidden md:block"/> Conversion<br className="hidden md:block"/> Optimization
            </h1>
            <p className="text-2xl text-[#c8c3a9] max-w-2xl mb-16 leading-relaxed italic">
              Identifying friction points and improving the subscription funnel for an AI-powered credit assistant.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#3e4431]">
              <div>
                <div className="text-xs font-bold text-[#8b5a2b] uppercase tracking-widest mb-3">Objective</div>
                <div className="font-medium text-[#f0ebd8] text-lg leading-relaxed">Improve conversion by delivering value clearly.</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#8b5a2b] uppercase tracking-widest mb-3">Methodology</div>
                <div className="font-medium text-[#f0ebd8] text-lg leading-relaxed">User journey analysis & RICE prioritization.</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#8b5a2b] uppercase tracking-widest mb-3">Focus Area</div>
                <div className="font-medium text-[#f0ebd8] text-lg leading-relaxed">Discovery to Paid Subscription Funnel.</div>
              </div>
            </div>
          </div>
        </header>

        {/* The User Journey */}
        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading 
              title="The User Journey" 
              subtitle="Mapping the path a user takes before deciding to buy the AI guide subscription." 
            />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#22251c] p-12 rounded-2xl border border-[#3e4431] shadow-2xl">
              {['Discovery', 'Onboarding', 'Registration', 'Dashboard', 'AI Feature Screen'].map((step, index, arr) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-20 h-20 rounded-full bg-[#2d3224] border border-[#3e4431] text-[#c8c3a9] flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:text-[#181a14] group-hover:border-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      {index === 0 && <Search className="w-8 h-8" />}
                      {index === 1 && <Smartphone className="w-8 h-8" />}
                      {index === 2 && <ShieldAlert className="w-8 h-8" />}
                      {index === 3 && <BarChart3 className="w-8 h-8" />}
                      {index === 4 && <Zap className="w-8 h-8" />}
                    </div>
                    <span className="font-bold text-lg text-[#c8c3a9] group-hover:text-[#f0ebd8] transition-colors">{step}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-[#556b2f] hidden md:block" />
                  )}
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-[#556b2f] block md:hidden rotate-90 my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery & Intent Matrix */}
        <section className="py-28 border-y border-[#3e4431] bg-[#1a1c15]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading 
              title="Discovery Phase & User Intent" 
              subtitle="Based on app exploration and referral program context, I mapped three primary acquisition channels to understand user mindset." 
            />
            
            <div className="overflow-x-auto rounded-xl border border-[#3e4431] bg-[#22251c] shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 border-b border-[#3e4431] bg-[#181a14] text-[#c8c3a9] font-bold w-1/4 uppercase tracking-widest text-sm">Stage</th>
                    <th className="p-6 border-b border-[#3e4431] bg-[#d97c66]/10 text-[#d97c66] font-bold w-1/4">
                      <div className="flex items-center gap-3"><Smartphone className="w-5 h-5"/> Social Feed (Meta)</div>
                    </th>
                    <th className="p-6 border-b border-[#3e4431] bg-[#d4af37]/10 text-[#ebd078] font-bold w-1/4">
                      <div className="flex items-center gap-3"><Search className="w-5 h-5"/> Google Search</div>
                    </th>
                    <th className="p-6 border-b border-[#3e4431] bg-[#8cb04e]/10 text-[#8cb04e] font-bold w-1/4">
                      <div className="flex items-center gap-3"><Users className="w-5 h-5"/> Friend Referral</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3e4431]">
                  <tr className="hover:bg-[#2d3224] transition-colors">
                    <td className="p-6 font-bold text-[#f0ebd8] text-lg">Thinking</td>
                    <td className="p-6 text-[#c8c3a9] italic">"Can this fix my credit issues?" "Will my score improve or is this fake?"</td>
                    <td className="p-6 text-[#c8c3a9] italic">"How do I improve CIBIL score?" "Can this solve my low score problem?"</td>
                    <td className="p-6 text-[#c8c3a9] italic">"Did it actually help improve your score?" "Is it safe to use?"</td>
                  </tr>
                  <tr className="hover:bg-[#2d3224] transition-colors">
                    <td className="p-6 font-bold text-[#f0ebd8] text-lg">Feeling</td>
                    <td className="p-6 text-[#c8c3a9] leading-relaxed">Mixed: Curiosity + Hope, but <span className="font-bold text-[#d97c66]">high skepticism</span>.</td>
                    <td className="p-6 text-[#c8c3a9] leading-relaxed">Urgent + problem-aware. Actively seeking solutions.</td>
                    <td className="p-6 text-[#c8c3a9] leading-relaxed">High trust, reduced fear due to social proof.</td>
                  </tr>
                  <tr className="hover:bg-[#2d3224] transition-colors">
                    <td className="p-6 font-bold text-[#f0ebd8] text-lg">Intent Level</td>
                    <td className="p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#d97c66]/10 text-[#d97c66] border border-[#d97c66]/20 uppercase tracking-wider">Low</span> 
                      <span className="text-sm ml-3 opacity-75 italic">Trust issues</span>
                    </td>
                    <td className="p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#d4af37]/10 text-[#ebd078] border border-[#d4af37]/20 uppercase tracking-wider">Medium</span> 
                      <span className="text-sm ml-3 opacity-75 italic">Funnel gaps</span>
                    </td>
                    <td className="p-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#8cb04e]/10 text-[#8cb04e] border border-[#8cb04e]/20 uppercase tracking-wider">Medium-High</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Friction Points */}
        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading 
                title="Interactive Funnel Analysis" 
                subtitle="Explore the friction points breaking the journey, and toggle to reveal the strategic solutions." 
              />
              <div className="flex items-center gap-3 text-sm text-[#181a14] font-bold bg-[#d4af37] px-6 py-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-4 h-fit uppercase tracking-wider">
                <MousePointerClick className="w-5 h-5 animate-bounce" /> Click cards to reveal solutions
              </div>
            </div>
            
            <div className="space-y-16">
              <InteractiveFrictionCard 
                type="Pain Point 1: Onboarding"
                title="The Clarity Gap"
                icon={AlertCircle}
                color="terracotta"
                pain={[
                  "Multiple value propositions are shown early, confusing the user.",
                  "The overall narrative of the app is unclear."
                ]}
                impact="Users fail to understand the core value proposition, negatively impacting activation metrics."
                solutionTitle="Focused Onboarding"
                solution={[
                  "Anchor to one core promise ('Improve your credit score fast').",
                  "Move secondary value props (cashback, languages) post-activation."
                ]}
                imageLabels={["Screen 1: Improve Score", "Screen 2: Languages", "Screen 3: Cashbacks"]}
              />

              <InteractiveFrictionCard 
                type="Pain Point 2: Registration"
                title="Early Trust Barrier"
                icon={ShieldAlert}
                color="gold"
                pain={[
                  "Asks for email, SMS, location, and call logs prematurely.",
                  "Occurs before experiencing value or seeing their CIBIL score."
                ]}
                impact="Perceived as intrusive in a sensitive financial context, causing heavy drop-offs. (Competitors bypass asking PAN/Phone upfront)."
                solutionTitle="Progressive Permissions"
                solution={[
                  "Delay sensitive requests until after initial value is demonstrated.",
                  "Use contextual prompts (e.g., 'Allow SMS access to detect missed payments and improve score')."
                ]}
                imageLabels={["Oolka Login & Permissions", "Competitor Login (Paisabazaar)"]}
              />

              <div className="grid md:grid-cols-2 gap-16">
                <InteractiveFrictionCard 
                  type="Pain Point 3: Dashboard"
                  title="Weak 'Aha Moment'"
                  icon={BarChart3}
                  color="terracotta"
                  pain={[
                    "The score is shown, but no clear next step is provided.",
                    "Multiple CTAs create decision paralysis."
                  ]}
                  impact="Fails to create urgency; leads to low exploration of AI features."
                  solutionTitle="Guided Dashboard"
                  solution={[
                    "Introduce a guided improvement journey.",
                    "Add primary CTA ('Improve your score by +42 points') with checklist progress."
                  ]}
                  imageLabels={["Dashboard Screenshot"]}
                />

                <InteractiveFrictionCard 
                  type="Pain Point 4: AI Screen"
                  title="The Value Gap"
                  icon={Zap}
                  color="terracotta"
                  pain={[
                    "Insights are generic ('You don't have a credit card').",
                    "No quantified or actionable value."
                  ]}
                  impact="Low perceived AI value; weak differentiation vs free alternatives."
                  solutionTitle="Personalized Insights"
                  solution={[
                    "Deliver quantified insights structured by Impact, Timeframe, and Actions.",
                    "Example: 'Add a credit card for +35 points in 45 days'."
                  ]}
                  imageLabels={["AI Expert Screenshot"]}
                />
              </div>

              <InteractiveFrictionCard 
                type="Pain Points 5 & 6: Monetization"
                title="Premature Paywall & Cost Framing"
                icon={Target}
                color="terracotta"
                pain={[
                  "Paywall is too early: Users are asked to pay before experiencing real product value.",
                  "Cost-Based: Pricing is displayed as a mere cost (₹299), not a return on investment."
                ]}
                impact="Extremely low willingness to pay and high drop-off exactly at the point of conversion."
                solutionTitle="Preview Value & ROI Pricing"
                solution={[
                  "Show 1 free insight, keep 2 locked to tease value.",
                  "Add curiosity hooks ('2 more ways to improve by +52 points').",
                  "Reframe pricing around financial upside ('Unlock loans worth ₹5L+') with social proof."
                ]}
                imageLabels={["Paywall Screenshot (₹299/mo)"]}
              />
            </div>
          </div>
        </section>

        {/* Prioritization */}
        <section className="py-28 border-t border-[#3e4431] bg-[#1a1c15]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading 
              title="Strategic Prioritization" 
              subtitle="Evaluating features using the RICE framework. Click headers to sort the implementation roadmap." 
            />
            
            <div className="overflow-hidden rounded-xl border border-[#3e4431] bg-[#22251c] shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-[#181a14] border-b border-[#3e4431]">
                  <tr>
                    <th className="p-6 font-bold text-[#c8c3a9] uppercase tracking-widest text-sm">Feature / Fix</th>
                    <th 
                      className="p-6 font-bold text-[#c8c3a9] text-center uppercase tracking-widest text-sm cursor-pointer hover:text-[#f0ebd8] transition-colors group select-none"
                      onClick={() => handleSort('r')}
                    >
                      <div className="flex items-center justify-center gap-2">Reach (1-100) <SortIcon columnKey="r" /></div>
                    </th>
                    <th 
                      className="p-6 font-bold text-[#c8c3a9] text-center uppercase tracking-widest text-sm cursor-pointer hover:text-[#f0ebd8] transition-colors group select-none"
                      onClick={() => handleSort('i')}
                    >
                      <div className="flex items-center justify-center gap-2">Impact (1-3) <SortIcon columnKey="i" /></div>
                    </th>
                    <th className="p-6 font-bold text-[#c8c3a9] text-right uppercase tracking-widest text-sm">Priority Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3e4431]">
                  {sortedRiceData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#2d3224] transition-colors">
                      <td className="p-6 font-bold text-[#f0ebd8] text-lg">{item.name}</td>
                      <td className="p-6 text-center text-[#c8c3a9] font-sans font-medium text-lg">{item.r}</td>
                      <td className="p-6 text-center text-[#c8c3a9] font-sans font-medium text-lg">{item.i}</td>
                      <td className="p-6 text-right">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider ${
                          item.p === 'High' ? 'bg-[#8cb04e]/10 text-[#8cb04e] border-[#8cb04e]/30' : 
                          item.p === 'Med-High' ? 'bg-[#d4af37]/10 text-[#ebd078] border-[#d4af37]/30' : 
                          'bg-[#d97c66]/10 text-[#d97c66] border-[#d97c66]/30'
                        }`}>
                          {item.p}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-32 border-t border-[#3e4431] bg-[#13150f] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8cb04e]/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#f0ebd8] mb-8">The Core Breakdown</h2>
                <p className="mb-10 text-[#c8c3a9] leading-relaxed text-xl italic">
                  The drop-off is not driven by low user intent. Users actively want to improve their scores, but they encounter a compounding mismatch between expectations and delivered value.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-5 p-6 rounded-xl bg-[#22251c] border border-[#3e4431] shadow-xl">
                    <div className="mt-1 text-[#d97c66] bg-[#d97c66]/10 p-3 rounded-lg h-fit"><AlertCircle className="w-6 h-6"/></div>
                    <div><strong className="text-[#f0ebd8] block mb-2 text-xl">Clarity Gap</strong> <span className="text-[#c8c3a9] leading-relaxed">Mixed messaging prevents users from understanding core value quickly.</span></div>
                  </li>
                  <li className="flex gap-5 p-6 rounded-xl bg-[#22251c] border border-[#3e4431] shadow-xl">
                    <div className="mt-1 text-[#ebd078] bg-[#d4af37]/10 p-3 rounded-lg h-fit"><ShieldAlert className="w-6 h-6"/></div>
                    <div><strong className="text-[#f0ebd8] block mb-2 text-xl">Trust Gap</strong> <span className="text-[#c8c3a9] leading-relaxed">Sensitive permissions demanded before value is established.</span></div>
                  </li>
                  <li className="flex gap-5 p-6 rounded-xl bg-[#22251c] border border-[#3e4431] shadow-xl">
                    <div className="mt-1 text-[#d97c66] bg-[#d97c66]/10 p-3 rounded-lg h-fit"><BarChart3 className="w-6 h-6"/></div>
                    <div><strong className="text-[#f0ebd8] block mb-2 text-xl">Value Gap</strong> <span className="text-[#c8c3a9] leading-relaxed">Insights lack specificity, actionability, and tangible financial outcomes.</span></div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#2d3224] to-[#181a14] p-12 rounded-3xl border border-[#d4af37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><CheckCircle2 className="w-40 h-40 text-[#d4af37]"/></div>
                <h2 className="text-3xl font-bold text-[#f0ebd8] mb-8 flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#d4af37]" /> The Turnaround
                </h2>
                <p className="mb-10 text-[#c8c3a9] leading-relaxed text-xl relative z-10 italic">
                  By addressing these root issues, we can successfully reposition Oolka from a passive credit-checking app into an active, outcome-driven credit improvement assistant.
                </p>
                <div className="pt-8 border-t border-[#3e4431] relative z-10">
                  <p className="font-bold text-[#8b5a2b] mb-6 tracking-widest uppercase text-sm">Expected Outcomes</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-5 py-2.5 rounded-xl bg-[#22251c] border border-[#3e4431] text-sm font-bold text-[#f0ebd8] shadow-lg uppercase tracking-wider">Higher Activation</span>
                    <span className="px-5 py-2.5 rounded-xl bg-[#22251c] border border-[#3e4431] text-sm font-bold text-[#f0ebd8] shadow-lg uppercase tracking-wider">Increased Trust</span>
                    <span className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-sm font-bold text-[#181a14] shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase tracking-wider">Stronger Conversion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#13150f] text-center text-[#8b5a2b] font-medium text-sm border-t border-[#3e4431] tracking-widest uppercase">
          <p>© 2024 Product Case Study. Designed for Portfolio.</p>
        </footer>
      </div>
    </div>
  );
}
