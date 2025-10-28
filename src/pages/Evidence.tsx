import {useState}from'react';
import{readWeek}from'../lib/events';
function Card({title,value,desc,refs,badge}:{title:string;value:string;desc:string;refs:{t:string;d:string}[];badge:{design:string;effect:string}}){
const[open,setOpen]=useState(false);
return(
<section style={{border:'1px solid #E2E8F0',borderRadius:16,padding:12,margin:'12px 0'}}>
<div style={{display:'flex',justifyContent:'space-between'}}><h2>{title}</h2><div><b>{value}</b></div></div>
<div style={{display:'flex',gap:8}}><span>📚 {badge.design}</span><span>効果: {badge.effect}</span></div>
<p>{desc}</p>
<button onClick={()=>setOpen(v=>!v)}>{open?'たたむ':'根拠を見る'}</button>
{open&&<ul>{refs.map((r,i)=>(<li key={i}><b>{r.t}</b> — {r.d}</li>))}</ul>}
</section>
);
}
export default function Evidence(){
const ev=readWeek();
const ifthen=ev.filter(e=>e.type==='acr_text_added').length; const thanks=ev.filter(e=>e.type==='acr_stamp_sent').length;
const tplRate=(()=>{const texts=ev.filter(e=>e.type==='acr_text_added');const tpl=texts.filter(e=>e.attrs?.source==='tpl');return texts.length?tpl.length/texts.length:0;})();
const quietLabel=(thanks*2+ifthen*3+tplRate*10)>=30?'穏やか':'ざわざわ';
return(
<main style={{padding:16}}>
<h1>研究の裏付け（学術／今週のわたし）</h1>
<aside><b>効果量の目安</b>：小(d≈0.2)／中(≈0.5)／大(≈0.8)</aside>
<p style={{fontSize:12,opacity:.8}}>このページの数字はこの端末内だけで作られます（外部送信なし）。</p>
<Card title="If–Then（一言のタイミング）" value={`${ifthen}+ 回`} desc="迷い→決定。実行意図は行動達成を中〜大の効果で後押し（メタ分析）。" refs={[{t:'Gollwitzer & Sheeran (2006). Psychological Bulletin.',d:'Implementation intentions and goal achievement: A meta-analysis.'}]} badge={{design:'メタ分析',effect:'中〜大'}}/>
<Card title="小さな感謝（スタンプ/ひとこと）" value={`${thanks}+ 件`} desc="気分の浮上・関係満足の改善（小〜中）。" refs={[{t:'Davis et al. (2016). J. Counseling Psychology.',d:'感謝介入のメタ分析'},{t:'Diniz et al. (2023).',d:'RCTレビュー'}]} badge={{design:'メタ分析',effect:'小〜中'}}/>
<Card title="選択は3つだけ（始めやすさ）" value={`活用 ${Math.round(tplRate*100)}%`} desc="選択肢を絞ると動きやすい（状況依存）。" refs={[{t:'Iyengar & Lepper (2000). JPSP.',d:'選択過多の実験'}]} badge={{design:'実験',effect:'状況依存'}}/>
<section style={{border:'1px dashed #CBD5E1',borderRadius:16,padding:12}}>Quietメーター：<b>{quietLabel}</b></section>
<p style={{fontSize:12,opacity:.8}}>本ページは査読論文・研究レビューを一般向けに要約したものです。医療・臨床の診断/治療ではありません。</p>
</main>
);
}