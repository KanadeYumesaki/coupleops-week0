import React,{useMemo}from'react';
import{readWeek}from'../lib/events';
function fmt(n:number){return n<1000?`${n}+`:`${(n/1000).toFixed(1)}K+`;}
export default function Weekly(){
const ev=readWeek();
const stats=useMemo(()=>{const ift=ev.filter(e=>e.type==='acr_text_added').length;const thx=ev.filter(e=>e.type==='acr_stamp_sent').length;const texts=ev.filter(e=>e.type==='acr_text_added').length;const tpl=ev.filter(e=>e.type==='acr_text_added'&&e.attrs?.source==='tpl').length;const tplRate=texts?tpl/texts:0;const quiet=(thx*2+ift*3+tplRate*10);const quietLabel=quiet>=30?'穏やか':'ざわざわ';return{ift,thx,tplRate,quietLabel};},[ev]);
return(
<main style={{padding:16}}>
<h1>今週のハイライト</h1>
<ul>
<li>『ありがとう』 × {fmt(stats.thx)}</li>
<li>ひとこと × {fmt(stats.ift)} ／ テンプレ活用 {Math.round(stats.tplRate*100)}%</li>
<li>Quietメーター：{stats.quietLabel}</li>
</ul>
<footer style={{marginTop:16}}>
<a href="/evidence">研究の裏付けを読む（出典と効果の範囲）</a>
</footer>
</main>
);
}