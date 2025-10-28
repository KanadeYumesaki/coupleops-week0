// import React,{useEffect,useRef,useState} from 'react';
import { useEffect, useRef, useState } from 'react';

const PUB = import.meta.env.VITE_ADS_PUB_ID as string | undefined; // 例: 'ca-pub-xxxxxxxxxxxxxxxx'
const SLOT = import.meta.env.VITE_ADS_SLOT as string | undefined; // 例: '1234567890'


export default function AdBar(){
const [filled,setFilled] = useState(false);
const ref = useRef<HTMLDivElement>(null);


useEffect(()=>{
if(!PUB || !SLOT) return; // 未設定なら何もしない（枠は下のハウス表示）


// AdSenseスクリプトを動的読込（CMPがEEAで制御）
const id='adsbygooglejs';
if(!document.getElementById(id)){
const s=document.createElement('script');
s.id=id; s.async=true; s.crossOrigin='anonymous';
s.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB}`;
document.head.appendChild(s);
}


// レンダ後にpush（描画を促す）
const t = setTimeout(()=>{
try{
(window as any).adsbygoogle = (window as any).adsbygoogle || [];
(window as any).adsbygoogle.push({});
}catch{}
}, 200);


// 2秒後、iframeの有無で「埋まったか」を判定（未同意/地域制限等で空→ハウス表示）
const f = setTimeout(()=>{
const frame = document.querySelector('#adbar .ad-slot iframe');
setFilled(!!frame);
}, 2000);


return ()=>{ clearTimeout(t); clearTimeout(f); };
},[]);


return (
<footer id="adbar">
<div className="ad-slot" style={{position:'relative'}}>
{(PUB && SLOT) ? (
<ins className="adsbygoogle" style={{display:'block'}}
data-ad-client={PUB} data-ad-slot={SLOT}
data-ad-format="auto" data-full-width-responsive="true" ref={ref as any}/>
) : null}


{/* ハウス表示（枠は必ず見せる）*/}
{(!PUB || !SLOT || !filled) && (
<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
pointerEvents:'none',opacity:.9}}>
<span style={{fontSize:14}}>
サポート表示：CoupleOpsの開発をご支援ください
</span>
</div>
)}
</div>
</footer>
);
}