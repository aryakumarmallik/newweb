import {Head} from './ui';
const tiers=[['Title sponsor',['Your Logo Here'],'text-3xl'],['Partners',['Sponsor A','Sponsor B','Sponsor C'],'text-xl'],['Community',['Brand 1','Brand 2','Brand 3','Brand 4'],'text-base']];
export default function Sponsors(){return(<section id="sponsors" className="py-28 bg-ink2"><div className="max-w-6xl mx-auto px-5"><Head title="Sponsors" sub="Placeholder branding. Swap in real logos."/>
{tiers.map(([n,l,f])=><div key={n} className="mb-8"><p className="text-sm text-muted mb-3">{n}</p><div className="grid grid-cols-2 md:flex gap-px bg-white/10 border border-white/10">{l.map(x=><div key={x} className={`flex-1 bg-ink2 py-8 px-4 text-center font-display font-bold text-white/60 hover:text-white transition ${f}`}>{x}</div>)}</div></div>)}</div></section>)}
