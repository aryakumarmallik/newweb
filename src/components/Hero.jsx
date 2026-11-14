import {motion,useScroll,useTransform} from 'framer-motion';import {CalendarDays,MapPin,Code2,Cpu,Cloud} from 'lucide-react';import {REGISTER_URL,VENUE,EVENT_DATE} from '../config';
const chips=[[Code2,'gblue','top-4 left-0'],[Cpu,'gred','top-1/3 right-0'],[Cloud,'ggreen','bottom-8 left-6']];
export default function Hero(){const{scrollY}=useScroll();const y=useTransform(scrollY,[0,600],[0,-80]);
return(<section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
<div className="absolute inset-0 gridbg"/><div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet/30 blur-[140px]"/><div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-gblue/25 blur-[140px]"/>
{[...Array(14)].map((_,i)=><motion.i key={i} className="absolute w-1 h-1 rounded-full bg-cyan/70" style={{left:`${(i*37)%100}%`,top:`${(i*53)%100}%`}} animate={{opacity:[.2,1,.2]}} transition={{duration:3+i%4,repeat:Infinity}}/>)}
<div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
<div><p className="glass inline-block px-4 py-1.5 text-sm text-cyan mb-6">Google Developer Groups · Technology Festival 2027</p>
<h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.02]">WHERE INNOVATION MEETS <span className="txt-grad">INFINITE POSSIBILITIES</span></h1>
<p className="text-muted mt-6 max-w-lg text-lg">Two days of hackathons, workshops and talks from the developer community. Build something real, meet people who ship, leave with a new skill.</p>
<div className="flex flex-wrap gap-5 mt-6 text-sm"><span className="flex gap-2"><CalendarDays size={18} className="text-gyellow"/>{new Date(EVENT_DATE).toDateString()} (placeholder)</span><span className="flex gap-2"><MapPin size={18} className="text-gred"/>{VENUE}</span></div>
<div className="flex flex-wrap gap-4 mt-9"><a href={REGISTER_URL} className="btn bg-gradient-to-r from-gblue to-violet shadow-[0_0_30px_#8B5CF666]">Register Now</a><a href="#events" className="btn glass">Explore Events</a></div></div>
<motion.div style={{y}} className="relative aspect-square max-w-[520px] w-full mx-auto">
{[0,1,2].map(i=><motion.div key={i} className="absolute rounded-full border" style={{inset:i*50,borderColor:['#4285F4','#8B5CF6','#22D3EE'][i],borderStyle:i==1?'dashed':'solid',opacity:.6}} animate={{rotate:i%2?-360:360}} transition={{duration:30+i*15,repeat:Infinity,ease:'linear'}}/>)}
<motion.div className="absolute inset-[30%] rounded-[38%] bg-gradient-to-br from-gblue via-violet to-cyan shadow-[0_0_90px_#8B5CF6aa]" animate={{rotate:[0,90,0],borderRadius:['38%','50%','38%']}} transition={{duration:14,repeat:Infinity}}/>
<div className="absolute inset-[42%] glass rounded-full grid place-items-center font-display font-bold text-xl">GDG</div>
{chips.map(([I,c,p],i)=><motion.div key={i} className={`absolute ${p} glass p-3 text-${c}`} animate={{y:[0,-14,0]}} transition={{duration:4+i,repeat:Infinity}}><I/></motion.div>)}
</motion.div></div></section>)}
