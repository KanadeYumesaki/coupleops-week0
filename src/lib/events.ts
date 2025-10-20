export type Ev={ts:number;type:string;attrs?:Record<string,any>};
const buf:Ev[]=JSON.parse(localStorage.getItem('co_ev')||'[]');
export function log(type:string,attrs:Record<string,any>={}){buf.push({ts:Date.now(),type,attrs});localStorage.setItem('co_ev',JSON.stringify(buf));}
export function readWeek(){const now=new Date();const day=now.getDay();const diff=now.getDate()-day+(day===0?-6:1);const monday=new Date(now.setDate(diff));monday.setHours(0,0,0,0);return buf.filter(e=>e.ts>=monday.getTime());}