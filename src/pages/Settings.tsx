import ThemeSwitcher from '../components/ThemeSwitcher';
export default function Settings(){
return(
<main>
<h1>設定</h1>
<ThemeSwitcher/>
<section aria-label="ヘルプとポリシー" style={{marginTop:16}}>
<ul>
<li><a href="/evidence">研究の裏付け（学術ハイライト）</a></li>
<li><a href="/weekly">週次プレビュー</a></li>
<li><a href="/lp">LP（紹介ページ）</a></li>
</ul>
</section>
</main>
);
}