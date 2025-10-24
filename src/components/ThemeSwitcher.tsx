import React from 'react';
const THEMES = [
{key:'light', label:'ライトピンク(既定)'},
{key:'dark', label:'ダーク'},
{key:'turq', label:'ターコイズ'}
];
export default function ThemeSwitcher(){
const cur = (document.documentElement.getAttribute('data-theme')||'light');
function setTheme(k:string){
document.documentElement.setAttribute('data-theme', k);
localStorage.setItem('co_theme', k);
}
return (
<section>
<h2>テーマ</h2>
{THEMES.map(t=> (
<label key={t.key} style={{display:'block',margin:'6px 0'}}>
<input type="radio" name="theme" defaultChecked={cur===t.key}
onChange={()=>setTheme(t.key)} /> {t.label}
</label>
))}
<button className="btn-theme" style={{marginTop:8}}>色見本</button>
</section>
);
}