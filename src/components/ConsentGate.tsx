import React,{useState} from 'react';
export default function ConsentGate(){
const [ok,setOk]=useState(localStorage.getItem('co_consent')==='1');
if(ok) return null;
return (
<div style={{position:'fixed',inset:
0,background:'rgba(0,0,0,.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:50}}>
<div style={{background:'#fff',padding:16,borderRadius:12,maxWidth:560}}>
<h2>同意のお願い</h2>
<p>解析や広告ID・外部連携は、あなたの同意後にだけ有効になります。未同意のままでもアプリ
は使えます（端末内のみ）。</p>
<div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
<button onClick={()=>{localStorage.setItem('co_consent','0'); setOk(true);}}>同意せずに続ける</
button>
<button className="btn-theme" onClick={()=>{localStorage.setItem('co_consent','1');
setOk(true); (window as any).__consentOK?.();}}>同意して続ける</button>
</div>
</div>
</div>
);
}