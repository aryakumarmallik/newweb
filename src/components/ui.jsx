import {motion} from 'framer-motion';
export const Reveal=({children,delay=0,className='',x=0})=>(
<motion.div className={className} initial={{opacity:0,y:x?0:28,x}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.6,delay}}>{children}</motion.div>);
export const GDot=()=>(<span className="inline-flex gap-1">{['gblue','gred','gyellow','ggreen'].map(c=>(<i key={c} className={`w-2 h-2 rounded-full bg-${c}`}/>))}</span>);
export const Head=({id,title,sub,className=''})=>(<div id={id} className={`mb-12 max-w-2xl ${className}`}><GDot/><h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">{title}</h2>{sub&&<p className="text-muted mt-3">{sub}</p>}</div>);
