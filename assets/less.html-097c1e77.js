import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-62caafbf.js";const t={},e=p(`<h2 id="less代码的编译" tabindex="-1"><a class="header-anchor" href="#less代码的编译" aria-hidden="true">#</a> Less代码的编译</h2><ol><li><p>安装<code>npm install -g less</code>，通过webpack编译</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>引入CDN</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet/less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.less<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/less@4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>通过vscode插件easy-less编译或CSS在线编译<code>https://lesscss.org/less-preview/</code></p></li></ol><h2 id="less语法" tabindex="-1"><a class="header-anchor" href="#less语法" aria-hidden="true">#</a> Less语法</h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@themecolor<span class="token punctuation">:</span></span> #4D926F<span class="token punctuation">;</span>
<span class="token variable">@mainFontSize<span class="token punctuation">:</span></span> 12px<span class="token punctuation">;</span>
<span class="token variable">@smallFontSize<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themecolor</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@mainFontSize</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@mainFontSize</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token selector">.link</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themecolor</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@smallFontSize</span><span class="token punctuation">;</span>

      <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h3><p>通俗的讲，就是把一些重复的代码抽离出来，以后直接复用就可以了。</p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.nowrap_ellipsis</span> <span class="token punctuation">{</span> <span class="token comment">// 无参混入</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.border(<span class="token variable">@borderWith</span>: 5px, <span class="token variable">@borderColor</span>: blue)</span> <span class="token punctuation">{</span> <span class="token comment">// 有参混入</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@borderWith</span> solid <span class="token variable">@borderColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box_size</span> <span class="token punctuation">{</span> <span class="token comment">// 混入和映射结合使用</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> .box_<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>[width]<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.nowrap_ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>继承</strong>：<code>&amp;:extend(.box_size);</code></p><p><strong>内置函数</strong>：<code>color: color(skyblue);</code>、<code>width: convert(100px, &quot;in&quot;);</code>等</p><p><strong>作用域</strong>：首先在本地查找变量或混入，若找不到，则从父级作用域继承。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,14),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","less.html.vue"]]);export{k as default};
