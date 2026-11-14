import {useEffect,useState} from 'react';import {Menu,X} from 'lucide-react';import {NAV,REGISTER_URL} from '../config';
export default function Navbar(){const[s,setS]=useState(false),[o,setO]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
return(<header className={`fixed top-0 inset-x-0 z-50 transition ${s||o?'bg-ink/90 backdrop-blur border-b border-white/10':''}`}>
<nav className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">
<a href="#home" className="flex items-center gap-2 font-display font-bold text-lg"><span className="flex -space-x-1.5"><i className="w-4 h-4 rounded-full bg-gblue"/><i className="w-4 h-4 rounded-full bg-gred"/><i className="w-4 h-4 rounded-full bg-gyellow"/><i className="w-4 h-4 rounded-full bg-ggreen"/></span>GDG Tech Fest</a>
<ul className="hidden lg:flex gap-7 text-sm text-muted">{NAV.map(n=><li key={n}><a className="hover:text-white transition" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
<a href={REGISTER_URL} className="btn hidden lg:inline-flex bg-gradient-to-r from-gblue to-violet text-sm py-2.5">Register Now</a>
<button aria-label="Menu" className="lg:hidden" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>
{o&&<div className="lg:hidden px-5 pb-5 flex flex-col gap-4">{NAV.map(n=><a key={n} onClick={()=>setO(false)} href={`#${n.toLowerCase()}`}>{n}</a>)}<a href={REGISTER_URL} className="btn bg-gradient-to-r from-gblue to-violet justify-center">Register Now</a></div>}</header>)}
