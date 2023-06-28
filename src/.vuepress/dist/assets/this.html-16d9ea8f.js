import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-60f9b323.js";const t={},o=p(`<p>this 指向函数的调用者，其中有 5 种绑定规则：</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220712190005.png" alt="this 指向" tabindex="0" loading="lazy"><figcaption>this 指向</figcaption></figure><h2 id="默认绑定" tabindex="-1"><a class="header-anchor" href="#默认绑定" aria-hidden="true">#</a> 默认绑定</h2><p>作为独立函数，被全局对象（window 或 global）调用</p><p>非严格模式下：</p><ol><li>浏览器环境：this 指向 window 对象</li><li>Node 环境：this 指向 global 对象</li></ol><p>严格模式下：this 为 undefined</p><p>全局函数、函数赋值给变量再调用，调用者都是全局对象</p><p>案例一：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre></div><p>案例二：</p><p>多个函数连环调用，依然是由全局对象调用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// foo2 -&gt; foo1</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
  <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>案例三：</p><p>将字面量对象的方法的地址赋值给变量，再通过变量调用，依然是由全局对象调用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>

</code></pre></div><p>案例四：</p><p>全局函数赋值给对象的方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">objFoo</span><span class="token operator">:</span> foo<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">objFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>objFoo <span class="token comment">// {name: &#39;obj&#39;, objFoo: ƒ}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre></div><p>案例五：</p><p>高阶函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre></div><p>案例六：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>bar<span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre></div><h2 id="隐式绑定" tabindex="-1"><a class="header-anchor" href="#隐式绑定" aria-hidden="true">#</a> 隐式绑定</h2><p>作为<strong>字面量对象</strong>的方法，隐式地被对象调用</p><p>案例一：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;obj&#39;, foo: ƒ}</span>
</code></pre></div><p>案例二：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> obj1<span class="token punctuation">.</span>foo<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;obj1&#39;, foo: ƒ}</span>
obj2<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;obj2&#39;, bar: ƒ}</span>

<span class="token comment">// bar 只是保存了 obj1.foo 函数的地址</span>
<span class="token comment">// obj2 调用了这个地址上的函数</span>
<span class="token comment">// 另见 特殊规则：间接函数引用</span>
</code></pre></div><p>案例三：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo <span class="token comment">// bar 保存 obj.foo 函数的地址</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj 隐式调用</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window 独立函数调用</span>
</code></pre></div><p>案例四：（刁钻）</p><p>JS 中数组也是对象，this 指向字面量数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [0, ƒ, 2] 即 arr</span>
</code></pre></div><h2 id="显式绑定" tabindex="-1"><a class="header-anchor" href="#显式绑定" aria-hidden="true">#</a> 显式绑定</h2><p>使用 bind、call、apply 显式地指定被哪个调用者调用：</p><ul><li>bind 绑定 this，返回一个函数，但不执行函数</li><li>call 绑定 this 并立即执行函数，参数为一个个值</li><li>apply 绑定 this 并立即执行函数，参数为参数列表伪数组</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//{name: &#39;obj&#39;}</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Number {123}</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// String {&#39;123&#39;}</span>
<span class="token comment">// 等价于</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 解决了上面案例三的问题</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myAdd <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 中间变量指向这个函数，再显式绑定 obj</span>
<span class="token function">myAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 2 {name: &#39;obj&#39;, add: ƒ}</span>
<span class="token comment">// 上面两句等价于下面一句</span>
obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 立即执行函数</span>

obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 4 {name: &#39;obj&#39;, add: ƒ}</span>

obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 6 {name: &#39;obj&#39;, add: ƒ}</span>
</code></pre></div><h2 id="new-绑定" tabindex="-1"><a class="header-anchor" href="#new-绑定" aria-hidden="true">#</a> new 绑定</h2><p>作为类创建的实例对象方法被调用</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>类创建的实例对象方法与类方法不同</p><ul><li>实例对象方法通过 <code>this.foo</code> 定义</li><li>类方法通过 <code>static</code> 关键字定义</li></ul><p>实例对象与字面量对象不同：</p><ul><li>字面量对象是可以直接定义，对象的内容就是字面上的代码</li><li>实例对象是通过类创建而来的，对象的内容由构造函数构造</li></ul></div><p>注意：类创建的实例对象方法与类方法不同，类方法使用 static 关键字创建</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5</span>
<span class="token keyword">function</span> <span class="token function">Person1</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例特有属性、方法通过 this. 放在实例上</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 公有属性、方法放在原型上</span>
<span class="token class-name">Person1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token string">&#39;p1&#39;</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Person1 {name: &#39;p1&#39;, foo: ƒ}</span>
p1<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Person1 {name: &#39;p1&#39;, foo: ƒ}</span>
<span class="token class-name">Person1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {bar: ƒ, constructor: ƒ}</span>

<span class="token comment">// ES6</span>
<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例特有属性、方法放在 constructor 中</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token comment">// 公有属性、方法放在 constructor 外</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 类方法可以不用实例化就可以调用</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">&#39;p2&#39;</span><span class="token punctuation">)</span>
p2<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Person2 {name: &#39;p2&#39;} 注意：没有 foo</span>
<span class="token comment">// p2.bar() 实例不能调用类方法</span>
Person2<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>使用new关键字来调用函数是，会执行如下的操作：</p><ol><li>在内存中创建一个空的临时对象</li><li>将这个临时对象的隐式原型 <code>[[Prototype]]</code> 指向构造函数显式原型 <code>prototype</code></li><li>绑定 <code>this</code> 到这个临时对象上</li><li>执行构造函数内部的代码（给新对象添加属性）</li><li>返回这个临时对象</li></ol><p>new 操作符执行的操作：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// new 相当于执行以下操作：</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.在内存中创建一个空的临时对象</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 2.将这个临时对象的隐式原型指向构造函数的显式原型</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype
  <span class="token comment">// 3.绑定 this 到这个临时对象上</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">// 4.执行构造函数内部的代码（给新对象添加属性）</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;never&#39;</span>
  <span class="token comment">// 5.返回这个临时对象</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><p>箭头函数 <code>this</code> 指向 <strong>定义时所在</strong> 的上层作用域：</p><ul><li>如果箭头函数被非箭头函数包含：<code>this</code> 指向 <strong>定义时所在的</strong> 最近一层<strong>非箭头函数</strong>的 <code>this</code> 值</li><li>如果箭头函数外层没有普通函数：<code>this</code> 指向全局作用域</li><li>箭头函数不绑定this</li></ul><p>箭头函数的函数体是一层作用域，它的上层作用域即箭头函数定义所在的作用域</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token comment">// 声明全局变量 a 用于存放箭头函数的地址</span>

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
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 箭头函数场景应用</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> result
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 以前的写法</span>
    <span class="token comment">// var _this = this</span>
    <span class="token comment">// setTimeout(function() {</span>
    <span class="token comment">//   var result = [&quot;abc&quot;]</span>
    <span class="token comment">//   _this.data = result</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="规则优先级" tabindex="-1"><a class="header-anchor" href="#规则优先级" aria-hidden="true">#</a> 规则优先级</h2><h3 id="_1-显式绑定高于隐式绑定" tabindex="-1"><a class="header-anchor" href="#_1-显式绑定高于隐式绑定" aria-hidden="true">#</a> 1.显式绑定高于隐式绑定</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// String {&#39;aa&#39;}</span>
</code></pre></div><h3 id="_2-new-绑定高于隐式绑定" tabindex="-1"><a class="header-anchor" href="#_2-new-绑定高于隐式绑定" aria-hidden="true">#</a> 2.new 绑定高于隐式绑定</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo {}</span>
</code></pre></div><h3 id="_3-new-绑定高于-bind-绑定" tabindex="-1"><a class="header-anchor" href="#_3-new-绑定高于-bind-绑定" aria-hidden="true">#</a> 3.new 绑定高于 bind 绑定</h3><p>new 不能与 apply/call 一起使用，只能与 bind 同时使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// new 的优先级高于 bind</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo {}</span>
</code></pre></div><h3 id="_4-bind-高于-call" tabindex="-1"><a class="header-anchor" href="#_4-bind-高于-call" aria-hidden="true">#</a> 4.bind 高于 call</h3><p>有点反常理，理应后面覆盖前面。</p><p>bind 后就不能再更改绑定了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">)</span> <span class="token comment">// String {&#39;aa&#39;}</span>

<span class="token comment">// foo.call(&#39;aa&#39;).bind(&#39;bb&#39;) 报错：call 绑定后执行返回 undefined，无法 bind</span>
</code></pre></div><h2 id="特殊规则" tabindex="-1"><a class="header-anchor" href="#特殊规则" aria-hidden="true">#</a> 特殊规则</h2><h3 id="_1-内置函数的this" tabindex="-1"><a class="header-anchor" href="#_1-内置函数的this" aria-hidden="true">#</a> 1.内置函数的this</h3><p>setTimeout，相当于独立函数调用，this 指向全局对象：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre></div><p>监听点击，this 指向目标 DOM 元素</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> boxDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.box&#39;</span><span class="token punctuation">)</span>
boxDiv<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span>
<span class="token punctuation">}</span>

boxDiv<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>数组的方法forEach、map、filter，可以自己指定 this 指向：</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220402021324.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span> <span class="token punctuation">}</span>

nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
<span class="token comment">// 1 {name: &#39;obj&#39;}</span>
<span class="token comment">// 2 {name: &#39;obj&#39;}</span>
<span class="token comment">// 3 {name: &#39;obj&#39;}</span>

nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
<span class="token comment">// 1 {name: &#39;obj&#39;}</span>
<span class="token comment">// 2 {name: &#39;obj&#39;}</span>
<span class="token comment">// 3 {name: &#39;obj&#39;}</span>
</code></pre></div><h3 id="_2-显式绑定-null-undefined" tabindex="-1"><a class="header-anchor" href="#_2-显式绑定-null-undefined" aria-hidden="true">#</a> 2.显式绑定 null/undefined</h3><p>给 bind、call、apply 传入 <code>null/undefined</code> 时，自动将 <code>this</code> 绑定成全局对象 <code>window</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// String {&#39;a&#39;}</span>

<span class="token comment">// 以下均输出 window</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_3-间接函数引用" tabindex="-1"><a class="header-anchor" href="#_3-间接函数引用" aria-hidden="true">#</a> 3.间接函数引用</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj1</span>

obj2<span class="token punctuation">.</span>bar <span class="token operator">=</span> obj1<span class="token punctuation">.</span>foo <span class="token comment">// 将函数地址赋值给 obj2.bar，再调用这个地址上的函数，字面量对象的方法指向该对象</span>
obj2<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj2</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>bar <span class="token operator">=</span> obj1<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token comment">// 赋值表达式 (obj2.foo = obj1.foo) 的结果是 obj1 的 foo 函数</span>
<span class="token comment">// foo 函数被 window 直接调用，默认绑定</span>
</code></pre></div><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h3 id="面试题一" tabindex="-1"><a class="header-anchor" href="#面试题一" aria-hidden="true">#</a> 面试题一</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;person&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> foo <span class="token operator">=</span> person<span class="token punctuation">.</span>sayName
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window: 独立函数调用</span>
  person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person: 隐式调用</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等价于上行：person: 隐式调用</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span>b <span class="token operator">=</span> person<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window: 赋值表达式(独立函数调用)</span>
<span class="token punctuation">}</span>

<span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="面试题二" tabindex="-1"><a class="header-anchor" href="#面试题二" aria-hidden="true">#</a> 面试题二</h3><p>此题通过字面量定义字面量对象，有四个函数：</p><ul><li>foo1：普通函数</li><li>foo2：箭头函数</li><li>foo3：返回普通函数的普通函数</li><li>foo4：返回箭头函数的普通函数</li></ul><p>此题作用域链：全局 → foo1~4 函数 → foo3、foo4 返回的函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// this {name: &#39;person1&#39;, foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;person1&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo3</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo4</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;person1&#39;, foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;person2&#39;</span> <span class="token punctuation">}</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person1：隐式绑定</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person2：显示绑定优先级大于隐式绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：上层作用域是全局，对象无作用域</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// window：箭头函数无法通过 call 更改 this</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo3()得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person2：foo3()得到普通函数，再显式绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person1：普通函数返回的箭头函数被字面量对象 person1 隐式绑定调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person2：foo4 绑定 person2 并执行得到箭头函数</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person1：foo4()得到箭头函数无法通过 call 更改 this</span>
</code></pre></div><h3 id="面试题三" tabindex="-1"><a class="header-anchor" href="#面试题三" aria-hidden="true">#</a> 面试题三</h3><p>此题通过构造函数创建实例对象，有四个子函数，同面试题二</p><p>此题作用域链：全局 → Person 构造函数 → foo1~4 函数 → foo3、foo4 返回的函数</p><p>构造函数的 this 指向创建的实例对象<br> foo1~4 类的方法</p><p>相比于面试题二，只有 <code>person1.foo2()</code> 、<code>person1.foo2.call(person2)</code> 输出不同</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Person {}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo4</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Person {}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;person1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;person2&#39;</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person1：隐式绑定</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person2：显示绑定优先级大于隐式绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person1：上层作用域中是 person1，函数有作用域，对象无作用域</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person1：箭头函数无法通过 call 更改 this</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo3()得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person2：foo3()得到普通函数，再显式绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person1：普通函数返回的箭头函数被 person1 调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person2：foo4 绑定 person2 并执行得到箭头函数</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person1：foo4()得到箭头函数无法通过 call 更改 this</span>
</code></pre></div><h3 id="面试题四" tabindex="-1"><a class="header-anchor" href="#面试题四" aria-hidden="true">#</a> 面试题四</h3><p>此题作用域链：全局 → Person → obj（foo1、foo2所在）→ foo1、foo2返回函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 挂载到 window 上</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Person{}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;obj&#39;, foo1: ƒ, foo2: ƒ}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;person1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;person2&#39;</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo1()得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window：foo1 绑定 person2 并执行得到普通函数，再独立函数调用</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// person2：foo1()得到普通函数，再显式绑定</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// obj：箭头函数 this 指向上层作用域 obj</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// person2：该箭头函数的上层作用域被显式绑定了 person2</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// obj：foo2()得到箭头函数无法通过 call 更改 this</span>
</code></pre></div><h2 id="手写-bind" tabindex="-1"><a class="header-anchor" href="#手写-bind" aria-hidden="true">#</a> 手写 bind</h2><p>手写 bind</p><p>3 个要求：绑定 this、绑定参数、return 无误</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">caller<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ES6 扩展运算符把伪数组变为一个个数值</span>
  <span class="token comment">// 将显式调用者赋值给 fn</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token comment">// 无参数则置空数组</span>
  args <span class="token operator">=</span> args <span class="token operator">?</span> args <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// newFnArgs 为 new 绑定的参数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">newFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>newFnArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 因为 new 绑定优先级高于显式绑定，所以需要判断调用者是不是 new 出来的</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">newFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>newFnArgs<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>caller<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>newFnArgs<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&#39;fn1 返回值&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bind 绑定后立即执行</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> fn1<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment">// { x: 100 }</span>
<span class="token comment">// 10 20 30</span>
<span class="token comment">// &#39;fn1 返回值&#39;</span>


<span class="token comment">// new 绑定</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">&#39;nevermore&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// {name: &#39;nevermore&#39;, age: 23}</span>
</code></pre></div>`,102),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","this.html.vue"]]);export{r as default};
