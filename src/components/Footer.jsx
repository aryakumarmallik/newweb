import {Linkedin,Twitter,Instagram,Github,Mail,Phone} from 'lucide-react';import {motion} from 'framer-motion';import {NAV,REGISTER_URL,COMMUNITY_URL} from '../config';
export function FinalCTA(){return(<section className="relative py-32 overflow-hidden text-center bg-gradient-to-br from-gblue via-violet to-[#5b21b6]">
{['gred','gyellow','ggreen'].map((c,i)=><motion.i key={c} className={`absolute w-24 h-24 rounded-full bg-${c}/60 blur-xl`} style={{left:`${15+i*30}%`,top:i%2?'10%':'65%'}} animate={{y:[0,-20,0]}} transition={{duration:5+i,repeat:Infinity}}/>)}
<div className="relative max-w-3xl mx-auto px-5"><h2 className="text-4xl md:text-6xl font-bold leading-tight">YOUR NEXT BIG IDEA STARTS HERE.</h2>
<div className="flex flex-wrap gap-4 justify-center mt-10"><a href={REGISTER_URL} className="btn bg-white text-ink">Register Now</a><a href={COMMUNITY_URL} className="btn border border-white/60">Join the GDG Community</a></div></div></section>)}
export default function Footer(){return(<footer id="contact" className="bg-ink pt-16 pb-8"><div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">
<div><h3 className="font-bold text-xl">GDG Tech Fest</h3><p className="text-muted text-sm mt-2 max-w-xs">A Google Developer Groups community event.</p><div className="flex gap-4 mt-5 text-muted">{[Linkedin,Twitter,Instagram,Github].map((I,i)=><a key={i} href="#home" aria-label="social" className="hover:text-white"><I size={20}/></a>)}</div></div>
<ul className="grid grid-cols-2 gap-2 text-sm text-muted content-start">{NAV.map(n=><li key={n}><a className="hover:text-white" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
<div className="text-sm text-muted space-y-2"><p className="flex gap-2"><Mail size={16}/>hello@gdg-fest.example</p><p className="flex gap-2"><Phone size={16}/>+00 000 000 0000</p></div></div>
<p className="text-center text-xs text-muted mt-12">© 2027 GDG Tech Fest. Independent community event, not an official Google event.</p></footer>)}
