import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-c618f770.js";const p={},o=t(`<h2 id="with-语句-了解-不要用" tabindex="-1"><a class="header-anchor" href="#with-语句-了解-不要用" aria-hidden="true">#</a> with 语句（了解，不要用）</h2><p>作用：扩展作用域链，改变上下文</p><p>严格模式下无法使用 with</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;window name&#39;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj name&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 作用域链：AO(foo) -&gt; GO</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;window name&#39;</span>
  <span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 作用域链：obj -&gt; AO(foo) -&gt; GO</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;obj name&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="eval-函数-了解-不要用" tabindex="-1"><a class="header-anchor" href="#eval-函数-了解-不要用" aria-hidden="true">#</a> eval 函数（了解，不要用）</h2><p>作用：将传入的字符串当做 JS 代码执行</p><p>严格模式下无法使用 eval</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;const msg = &quot;Hello World&quot;; console.log(msg);&#39;</span>
<span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre></div><p>不使用的原因：</p><ol><li>可读性差</li><li>传入的字符串可能在执行过程中被恶意篡改，存在安全风险</li><li>无法被 JS 引擎优化</li></ol><h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2><h3 id="严格模式常见语法限制" tabindex="-1"><a class="header-anchor" href="#严格模式常见语法限制" aria-hidden="true">#</a> 严格模式常见语法限制</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token comment">// 1.禁止意外创建全局变量（不使用变量声明关键字，默认创建全局变量）</span>
message <span class="token operator">=</span> <span class="token string">&#39;Hello window&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// &#39;Hello window&#39;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  message <span class="token operator">=</span> <span class="token string">&#39;Hello foo&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// &#39;Hello foo&#39;</span>

<span class="token comment">// 2.不允许函数有相同的参数名称</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 3.消除静默错误</span>
<span class="token boolean">true</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token number">NaN</span> <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不可配置</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不可写</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;nevermore&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;never&#39;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name

<span class="token comment">// 4.不允许使用原先的八进制格式 0123，应使用 0o123</span>
<span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">0o123</span> <span class="token comment">// 八进制</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">0x123</span> <span class="token comment">// 十六进制</span>
<span class="token keyword">let</span> num3 <span class="token operator">=</span> <span class="token number">0b100</span> <span class="token comment">// 二进制</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">)</span>

<span class="token comment">// 5.不允许使用with语句</span>

<span class="token comment">// 6.eval 不再为上层范围引入新变量（即使是 var 也不会）</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;&#39;use strict&#39;; var info = &#39;Hello Eval&#39;; console.log(info);&quot;</span> <span class="token comment">// &#39;Hello Eval&#39;</span>

<span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token comment">// info is not defined</span>
</code></pre></div><h3 id="严格模式-this" tabindex="-1"><a class="header-anchor" href="#严格模式-this" aria-hidden="true">#</a> 严格模式 this</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token comment">// 1.严格模式下，自执行函数（默认绑定）会指向 undefined</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// 2.无论是否开启严格模式：</span>
<span class="token comment">// 传入 setTimeout 的普通函数的 this 永远指向 window</span>
<span class="token comment">// 传入 setTimeout 的箭头函数外层没有普通函数（即上层作用域为全局），this 永远指向 window</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// window</span>

<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj1<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>


<span class="token comment">// 3.传入 setTimeout 的箭头函数外层有普通函数</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello obj2&#39;</span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","with-eval-strict.html.vue"]]);export{r as default};
