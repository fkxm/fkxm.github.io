import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as e,e as u,f as s}from"./app-62caafbf.js";const l={},k=s(`<p>Promise 通过链式调用解决回调地狱的问题，但本质还是基于回调函数</p><p>async、await 通过同步语法的方式解决回调函数不直观的问题</p><h2 id="与-promise-的关系" tabindex="-1"><a class="header-anchor" href="#与-promise-的关系" aria-hidden="true">#</a> 与 Promise 的关系</h2><ol><li>执行 async 函数返回的是 Promise 对象</li></ol><p>如果直接返回一个值，则封装成 Promise 对象；如果返回一个 Promise，则直接返回</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 直接返回一个值</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回一个 Promise</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 两者等价，均为成功状态</span>
</code></pre></div><ol start="2"><li>await 相当于 Promise 的 <code>.then</code>，捕获成功状态 Promise 对象的结果</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// await 后接 普通值，得到该值</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// await 后接 Promise，捕获成功状态对象的结果</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 成功</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// await 后接 async 函数的执行结果，捕获成功状态对象的结果</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;成功&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 成功</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li><code>try...catch</code> 相当于 Promise 的 <code>.catch</code></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;报错&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> p
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 报错</span>
</code></pre></div><p>总结：</p><ul><li><code>async</code> 等价于 <code>return new Promise</code> 封装 Promise</li><li><code>await</code> 等价于 <code>.then</code> 处理 Promise 成功</li><li><code>try...catch</code> 等价于 <code>.catch</code> 处理 Promise 失败</li></ul><p>练习：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// Promise {&lt;fulfilled&gt;: 1}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="异步函数的返回值" tabindex="-1"><a class="header-anchor" href="#异步函数的返回值" aria-hidden="true">#</a> 异步函数的返回值</h2><p>异步函数返回值是一个 Promise 对象：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.返回普通值</span>
  <span class="token keyword">return</span> <span class="token string">&#39;foo 完成&#39;</span>

  <span class="token comment">// 2.返回 thenable 对象</span>
  <span class="token comment">// return {</span>
  <span class="token comment">//   then: function(resolve, reject) {</span>
  <span class="token comment">//     resolve(&quot;thenable 完成&quot;)</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 3.返回 Promise</span>
  <span class="token comment">// return new Promise((resolve, reject) =&gt; {</span>
  <span class="token comment">//   setTimeout(() =&gt; {</span>
  <span class="token comment">//     resolve(&#39;Promise 完成&#39;)</span>
  <span class="token comment">//   }, 1000)</span>
  <span class="token comment">// })</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="异步函数中的异常" tabindex="-1"><a class="header-anchor" href="#异步函数中的异常" aria-hidden="true">#</a> 异步函数中的异常</h2><p>异步函数中的异常，会作为 Promise 的 reject 值被捕获到：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;异步函数中报错，后续代码仍会执行&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;同步函数中报错，后续代码不执行&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h2><p>只要遇到了 <code>await</code> ：</p><ul><li>紧跟着 <code>await</code> 同一行的代码相当于放在了 <code>new Promise</code> 的 <code>executor</code> 中，同步执行</li><li>下一行及之后的代码相当于放在于 <code>.then()</code> 中，异步执行。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

<span class="token comment">// 等价于</span>
<span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 执行完 async2 的返回值放入 resolve() 转化为成功状态 Promise，再 then</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>例一：await 同一行同步执行，下面所有行放到微任务里</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注释序号为执行顺序</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 同步执行函数 async2</span>
  <span class="token comment">// 只要遇到了 await ，后面的代码都相当于放在 then（微任务）里</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 5 微任务执行完毕</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 4 同步代码结束，开始执行微任务</span>
</code></pre></div><p>例二：await 后接 reject，会报错</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token comment">// await 后接 reject()，会报错，后边不再执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c:&#39;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// start</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// Uncaught(in promise) 3</span>

<span class="token comment">// 用 try catch 改写</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token comment">// 后边不再执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c:&#39;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 报错被 catch 捕获</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// start</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// b: 2</span>
<span class="token comment">// err: 3</span>
</code></pre></div><h2 id="async、await-加载图片" tabindex="-1"><a class="header-anchor" href="#async、await-加载图片" aria-hidden="true">#</a> async、await 加载图片</h2>`,29),i={href:"http://js.jirengu.com/jaxurotole/1/edit?js,output",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">加载地址为 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 的图片失败</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> url1 <span class="token operator">=</span>
  <span class="token string">&#39;https://p6-passport.byteacctimg.com/img/user-avatar/c2ff47a1390407c1a16b5e5fc3aa5e1f~300x300.image&#39;</span>
<span class="token keyword">const</span> url2 <span class="token operator">=</span>
  <span class="token string">&#39;https://avatars.githubusercontent.com/u/39004291?s=400&amp;u=eb0d02f850acaf334bdb14611a7d6d2e50591c57&amp;v=4&#39;</span>

<span class="token comment">// 立即执行匿名函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 注意：await 必须放在 async 函数中，否则会报错</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url1<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img1<span class="token punctuation">)</span>

    <span class="token keyword">const</span> img2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>url2<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,1);function d(m,f){const a=p("ExternalLinkIcon");return o(),c("div",null,[k,n("p",null,[n("a",i,[e("在线预览"),u(a)])]),r])}const w=t(l,[["render",d],["__file","async-await.html.vue"]]);export{w as default};
