import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as n,b as a,e as t,f as l}from"./app-62caafbf.js";const u={},i=l(`<h2 id="_1-没有原型" tabindex="-1"><a class="header-anchor" href="#_1-没有原型" aria-hidden="true">#</a> 1.没有原型</h2><p>1.没有<code>prototype</code>(原型)，所以箭头函数本身没有 <code>this</code>、<code>super</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">arrow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrow<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre></div><h2 id="_2-this-指向定义时的上层作用域" tabindex="-1"><a class="header-anchor" href="#_2-this-指向定义时的上层作用域" aria-hidden="true">#</a> 2.this 指向定义时的上层作用域</h2><p><code>this</code> 指向 <strong>定义时所在</strong> 的上层作用域：</p><ul><li>如果箭头函数被非箭头函数包含：<code>this</code> 指向 <strong>定义时所在的</strong> 最近一层<strong>非箭头函数</strong>的 <code>this</code> 值</li><li>如果箭头函数外层没有普通函数：<code>this</code> 指向全局作用域</li></ul><p>箭头函数的函数体是一层作用域，它的上层作用域即箭头函数定义所在的作用域</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token comment">// 声明全局变量 a 用于存放箭头函数的地址</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// obj1 调用 foo1，foo1 中将箭头函数赋值给 a</span>
<span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// obj2 调用 foo2，foo2 中调用全局变量 a 所指向的箭头函数</span>
<span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 箭头函数 this 指向函数定义时所在的最近一层非箭头函数的 this 值</span>
  <span class="token comment">// 又通过 call 显式指定 foo1 调用者，所以 foo1 this 值指向 obj1</span>
  <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 箭头函数 this 指向与调用位置无关</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印 obj1</span>
</code></pre></div><p><strong>普通函数的 this 值只有在函数执行时才能确定调用者，而不是在函数定义时确定</strong>，箭头函数就是要打破这一规则，方便开发，比如在 setTimeout 中使用箭头函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token comment">// 默认绑定</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// setTimeout 传入普通函数，则是独立函数调用，指向 window</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj1<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;window&#39;</span>

<span class="token comment">// 箭头函数外层有普通函数</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;obj2&#39;</span>

<span class="token comment">// 箭头函数外层没有普通函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;window&#39;</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>块语句，如 <code>if(){}</code>、字面量对象 <code>let obj = {}</code> 等不会产生作用域</p><p>作用域有：全局、函数、块、eval 作用域</p></div><h2 id="_3-没有参数列表" tabindex="-1"><a class="header-anchor" href="#_3-没有参数列表" aria-hidden="true">#</a> 3.没有参数列表</h2><p>没有 <code>arguments</code>，可以使用 <code>rest参数…</code> 获取参数列表</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">// [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span>

<span class="token comment">// rest参数...</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// [3,4,5]</span>
</code></pre></div><h2 id="_4-不能指定-this-指向" tabindex="-1"><a class="header-anchor" href="#_4-不能指定-this-指向" aria-hidden="true">#</a> 4.不能指定 this 指向</h2><p>不能通过 <code>call、apply、bind</code> 改变 <code>this</code> 指向</p><h2 id="_5-不能-new-调用" tabindex="-1"><a class="header-anchor" href="#_5-不能-new-调用" aria-hidden="true">#</a> 5.不能 new 调用</h2><p>不能通过 <code>new</code> 调用，箭头函数不能作为构造函数使用，所以也没有 <code>new.target</code></p><p><code>new.target</code>是ES6新引入的属性，普通函数如果通过<code>new</code>调用，<code>new.target</code>会返回该函数的引用。此属性主要：用于确定构造函数是否为new调用的。</p><h2 id="_6-不能重命名函数参数" tabindex="-1"><a class="header-anchor" href="#_6-不能重命名函数参数" aria-hidden="true">#</a> 6.不能重命名函数参数</h2><p>普通函数的函数参数支持重命名，后面出现的会覆盖前面的，箭头函数会抛出错误：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 2 [1,2]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 报错：在此上下文中不允许重复参数名称</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,23),k={href:"https://juejin.cn/post/6844903801799835655",target:"_blank",rel:"noopener noreferrer"},r={href:"https://juejin.cn/post/6844903616231260174",target:"_blank",rel:"noopener noreferrer"};function d(m,f){const s=o("ExternalLinkIcon");return e(),c("div",null,[i,n("ul",null,[n("li",null,[n("a",k,[a("详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景"),t(s)])]),n("li",null,[n("a",r,[a("ES6 系列之箭头函数"),t(s)])])])])}const b=p(u,[["render",d],["__file","arrow-function.html.vue"]]);export{b as default};
