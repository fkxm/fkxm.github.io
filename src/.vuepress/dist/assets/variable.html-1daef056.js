import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-60f9b323.js";const t={},p=e(`<h2 id="变量的定义格式" tabindex="-1"><a class="header-anchor" href="#变量的定义格式" aria-hidden="true">#</a> 变量的定义格式</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1.类型注解</span>
<span class="token comment">// 2.var/let/const</span>
<span class="token comment">// 3.string和String的区别</span>
<span class="token comment">// 4.类型推导</span>
<span class="token keyword">var</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;why&quot;</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">const</span> height<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1.88</span>

<span class="token comment">// string: TypeScript中的字符串类型</span>
<span class="token comment">// String: JavaScript的字符串包装类的类型</span>
<span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment">// 默认情况下进行赋值时, 会将赋值的值的类型, 作为前面标识符的类型</span>
<span class="token comment">// 这个过程称之为类型推导/推断</span>
<span class="token comment">// foo没有添加类型注解</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span>
<span class="token comment">// foo = 123</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number类型" tabindex="-1"><a class="header-anchor" href="#number类型" aria-hidden="true">#</a> number类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span>
num <span class="token operator">=</span> <span class="token number">222</span>

<span class="token comment">// num = &quot;123&quot;</span>

<span class="token comment">// 十进制</span>
<span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">100</span> 
<span class="token comment">// 二进制</span>
<span class="token keyword">let</span> num2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b100</span>
<span class="token comment">// 八进制</span>
<span class="token keyword">let</span> num3<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o100</span>
<span class="token comment">// 十六进制</span>
<span class="token keyword">let</span> num4<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0x100</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">,</span> num4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="boolean类型" tabindex="-1"><a class="header-anchor" href="#boolean类型" aria-hidden="true">#</a> boolean类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
flag <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">&gt;</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string类型" tabindex="-1"><a class="header-anchor" href="#string类型" aria-hidden="true">#</a> string类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> message1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">let</span> message2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>


<span class="token comment">// 个人习惯: 默认情况下, 如果可以推导出对应的标识符的类型时, 一般情况下是不加</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;why&quot;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">1.88</span>

<span class="token keyword">let</span> message3 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> age:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> height:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message3<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array类型" tabindex="-1"><a class="header-anchor" href="#array类型" aria-hidden="true">#</a> array类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 确定一个事实: names是一个数组类型, 但是数组中存放的是什么类型的元素呢?</span>
<span class="token comment">// 不好的习惯: 一个数组中在TypeScript开发中, 最好存放的数据类型是固定的(string)</span>
<span class="token comment">// 类型注解: type annotation</span>
<span class="token keyword">const</span> names1<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 不推荐(react jsx中是有冲突   &lt;div&gt;&lt;/div&gt;)</span>
<span class="token keyword">const</span> names2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 推荐</span>

<span class="token comment">// 在数组中存放不同的类型是不好的习惯</span>
<span class="token comment">// names.push(&quot;abc&quot;)</span>
<span class="token comment">// // names.push(123)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object类型" tabindex="-1"><a class="header-anchor" href="#object类型" aria-hidden="true">#</a> object类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null和undefined类型" tabindex="-1"><a class="header-anchor" href="#null和undefined类型" aria-hidden="true">#</a> null和undefined类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> n1<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> n2<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型" aria-hidden="true">#</a> symbol类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> title1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> title2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>title1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;程序员&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>title2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;老师&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","variable.html.vue"]]);export{d as default};
