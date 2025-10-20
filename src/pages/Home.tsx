import React,{useEffect,useState}from'react';
import{log}from'../lib/events';
import TodayBenefitChip from'../components/TodayBenefitChip';
const TPLS=['助かった！今日はゆっくりしてね','いつもありがとう。次は私が畳むね','いい感じ、続けたいね'];
export default function Home(){
const[stage,setStage]=useState<'idle'|'done'|'acr'>('idle');
const[showTpl,setShowTpl]=useState(false);
useEffect(()=>{log('app_open');},[]);
function complete(){log('card_created',{first:true});setStage('done');setTimeout(()=>setShowTpl(true),3000);}
function sendStamp(){log('acr_stamp_sent');}
function sendText(t:string){log('acr_text_added',{source:'tpl',text:t});setStage('acr');}
return(
<main style={{padding:16}}>
<TodayBenefitChip/>
<section>
<h2>今日の一歩</h2>
<button onClick={complete}>完了にする</button>
{stage!=='idle'&&(
<div style={{marginTop:12}}>
<button onClick={sendStamp}>💖 ありがとう</button>
{showTpl&&(
<div style={{marginTop:8}}>
<div>このままでもOK ／ ひとこと足す？</div>
{TPLS.map((t,i)=>(<button key={i} onClick={()=>sendText(t)}>{t}</button>))}
</div>
)}
</div>
)}
</section>
<section style={{marginTop:16}}>
<a href="/weekly">週次プレビューを見る（共有はまだしません）</a>
</section>
</main>
);
}