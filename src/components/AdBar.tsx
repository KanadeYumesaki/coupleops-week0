import React,{useEffect,useRef,useState} from 'react';
// 本番時は Vite の環境変数や設定画面から publisher/slot を渡してください
const PUB = import.meta.env.VITE_ADS_PUB_ID as string | undefined; // 例: 'ca-pubxxxxxxxxxxxxxxxx'
const SLOT = import.meta.env.VITE_ADS_SLOT as string | undefined; // 例: '1234567890'
export default function AdBar(){
const consented = (localStorage.getItem('co_consent')==='1');
const [ready,setReady] = useState(false);
const ref=useRef<HTMLDivElement>(null);
useEffect(()=>{
if(!consented || !PUB || !SLOT) return; // 未同意 or 未設定なら何もしない
// AdSenseスクリプトを動的読み込み
const id = 'adsbygooglejs';
if(!document.getElementById(id)){
const s=document.createElement('script');
s.id=id; s.async=true; s.crossOrigin='anonymous';
s.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB}`;
document.head.appendChild(s);
}
const t = setTimeout(()=>setReady(true), 500); // 少し待ってから描画
return ()=>clearTimeout(t);
},[consented]);
return (
<footer id="adbar">
<div className="ad-slot">
{consented && PUB && SLOT && ready ? (
// 本番: AdSenseタグ（審査通過後に有効）
<ins className="adsbygoogle" style={{display:'block'}}
data-ad-client={PUB} data-ad-slot={SLOT} data-ad-format="auto" data-full-widthresponsive="
true"
ref={(el)=>{
if(el){
try{ (window as any).adsbygoogle = (window as any).adsbygoogle || []; (window as
any).adsbygoogle.push({}); }catch{}
}
}}>
</ins>
) : (
// ダミー: 未同意 or 未設定のときの表示
<div style={{fontSize:14,opacity:.8}}>広告スペース（準備中／同意後に表示）</div>
)}
</div>
</footer>
);
}