import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from './ui'
const stats=[['2','+','Years Experience'],['500','+','Test Cases Automated'],['30','+','Projects Supported'],['99','%','Test Stability']]
function Count({end,suffix}){const ref=useRef(null);const visible=useInView(ref,{once:true});const [value,setValue]=useState(0);useEffect(()=>{if(!visible)return;let start;const id=requestAnimationFrame(function tick(t){start??=t;const next=Math.min(end,Math.round((t-start)/900*end));setValue(next);if(next<end)requestAnimationFrame(tick)});return()=>cancelAnimationFrame(id)},[end,visible]);return <b ref={ref}>{value}<i>{suffix}</i></b>}
export function Stats(){return <section className="stats-section"><div className="container stats-grid">{stats.map(([number,suffix,label],i)=><Reveal delay={i*.08} className="stat" key={label}><Count end={Number(number)} suffix={suffix}/><span>{label}</span></Reveal>)}</div></section>}
