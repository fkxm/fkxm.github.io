import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as o,a as n,b as s,e as t,f as p}from"./app-60f9b323.js";const i={},u=p(`<p>块级格式化上下文（简称 BFC），形成一个独立的渲染区域，内部元素的渲染不会影响到外部元素。</p><ul><li>在BFC中，盒子会在垂直方向上一个挨着一个的排布。</li><li>垂直方向的间距由margin决定。</li><li>属于同一个BFC的两个相邻盒子的margin会发生重叠。</li><li>在BFC中，每个元素的左外边距（margin-left）会触碰到包含块的左边界（对于从左往右的格式化，否则就触碰右边界），即使浮动元素也是如此。</li></ul><h2 id="创建-bfc" tabindex="-1"><a class="header-anchor" href="#创建-bfc" aria-hidden="true">#</a> 创建 BFC</h2><p>下列（常见）方式会创建 BFC：</p><ol><li>根元素（html 标签）</li><li>浮动元素（float 不是 none）</li><li>绝对定位元素（position 是 absolute 或 fixed）</li><li>overflow 不是 visible 的块级元素</li><li>行内块元素（display 是 inline-block）</li><li>弹性元素（display 是 flex 或 inline-flex）</li><li>网格元素（display 是 grid 或 inline-grid）</li><li>表格单元格（display 是 table-cell）</li></ol><p>以上是 CSS2.1 规范定义的 BFC 触发方式，在最新的 CSS3 规范中，弹性元素和网格元素会创建 F(Flex)FC 和 G(Grid)FC。</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>常用上述第 2、3、4 方式创建 BFC：</p><h3 id="_1-解决外边距重叠" tabindex="-1"><a class="header-anchor" href="#_1-解决外边距重叠" aria-hidden="true">#</a> 1.解决外边距重叠</h3><p>相邻盒子垂直外边距相遇时，它们将形成一个外边距。在相邻元素外分别<strong>包裹 BFC 容器</strong>，把元素放到不同BFC中。</p><p>::: normal-demo 演示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="_2-解决父容器高度塌陷" tabindex="-1"><a class="header-anchor" href="#_2-解决父容器高度塌陷" aria-hidden="true">#</a> 2.解决父容器高度塌陷</h3><p>子元素设置浮动，脱离文档流致使父元素高度塌陷，可以使用清除浮动技巧依据计算 BFC 的高度时，浮动元素也参与计算，<strong>使父元素成为 BFC 容器</strong></p><p>BFC解决高度塌陷需满足的两个条件</p><ol><li>浮动元素的父元素触发BFC，形成独立的块级格式化上下文。</li><li>浮动元素的父元素的高度是auto。</li></ol><p>::: normal-demo 演示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="_3-实现自适应两列布局" tabindex="-1"><a class="header-anchor" href="#_3-实现自适应两列布局" aria-hidden="true">#</a> 3.实现自适应两列布局</h3>`,23),r={href:"http://js.jirengu.com/taguvarupa/2/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>::: normal-demo 演示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2 bfc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span> <span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bfc</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2><p>清除浮动常用代码：使用伪元素 <code>::after</code><strong>（给末尾添加一个看不见的块元素来清除浮动）</strong></p><p>设置父元素 <code>class = &quot;clearfix&quot;</code> 并添加样式 <code>.clearfix::after</code> 如下：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>::: normal-demo 演示</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo-img/cat-wink.webp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>right text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box img</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box p</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p><code>:before</code> 与 <code>::before</code> 的区别：</p><ul><li><code>:before</code> 和 <code>:after</code> 是 CSS2 的写法，所以兼容性较好。</li><li><code>::before</code> 和 <code>::after</code> 是 CSS3 的写法，为了将伪类 <code>:</code> 和伪元素 <code>::</code> 区分开。但是平时为了兼容性，还是会用一个冒号的写法。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,15),k={href:"https://www.bilibili.com/video/BV1aZ4y1M7gW?from=search&seid=15595530134411248037",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[s("左侧元素浮动覆盖右侧元素，使右侧元素成为 BFC 容器）"),n("a",r,[s("在线示例"),t(a)])]),d,n("ul",null,[n("li",null,[n("a",k,[s("带你用最简单的方式理解最全面的BFC（视频）"),t(a)])])])])}const f=e(i,[["render",v],["__file","BFC.html.vue"]]);export{f as default};
