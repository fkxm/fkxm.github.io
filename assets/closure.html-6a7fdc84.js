import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as e,c as u,a as n,b as a,e as t,f as p}from"./app-62caafbf.js";const l={},k=p(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><h3 id="各权威资料对闭包的定义" tabindex="-1"><a class="header-anchor" href="#各权威资料对闭包的定义" aria-hidden="true">#</a> 各权威资料对闭包的定义</h3><ul><li>现在的 MDN：一个函数和对其周围状态（词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包。 <ul><li>闭包让你可以在一个内层函数中访问到其外层函数的作用域。</li><li>在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。</li></ul></li><li>以前的 MDN：闭包是指那些能够访问自由变量的函数。</li><li>JavaScript 高级程序设计（第 4 版）：闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。</li><li>JavaScript权威指南（第 7 版）：JavaScript 函数对象的内部状态不仅要包括函数代<br> 码，还要包括对函数定义所在作用域的引用。这种函数对象与作用域（即一组变量绑定）组合起来解析函数变量的机制，在计算机科学文献中被称作闭包。<strong>严格来讲，所有 JavaScript 函数都是闭包。但由于多数函数调用与函数定义都在同一作用域内，所以闭包的存在无关紧要。闭包真正值得关注的时候，是定义函数与调用函数的作用域不同的时候。最常见的情形就是一个函数返回了在它内部定义的嵌套函数。</strong></li></ul><h3 id="变量的分类" tabindex="-1"><a class="header-anchor" href="#变量的分类" aria-hidden="true">#</a> 变量的分类</h3><ol><li>全局变量：在全局作用域定义的变量，所有作用域都可以访问</li><li>局部（本地）变量：在块级或函数作用域定义的变量，只能在当前作用域及其子作用域访问</li><li>自由变量：在某个<strong>作用域外定义</strong>但在该<strong>作用域内使用</strong>的变量（全局变量、局部变量被别的作用域引用，就同时成为了自由变量）</li></ol><h3 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域" aria-hidden="true">#</a> 词法作用域</h3><p>因为 JS 采用的是词法作用域（又称静态作用域），函数的作用域在函数定义的时候就决定了。</p><p>而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。</p><p>在JS里，自由变量的查找会从本级作用域依次向外部作用域，直到查到最近的一个。又因为词法作用域，自由变量的绑定在函数定义时就已经确定。如下所示：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 作用域链：foo、bar -&gt; Script({n: &#39;global n&#39;}) -&gt; Global(window)</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;global n&#39;</span>
<span class="token comment">// 在预编译阶段，即在函数执行之前，foo 函数的作用链就指定好了</span>
<span class="token comment">// 所以自由变量 n 的查找在 Script 作用域中找到</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;bar n&#39;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token comment">// global n</span>
</code></pre></div><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723035134.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意：在全局下使用 <code>let</code> 会在<code>Global</code> 作用域下生成一级 <code>Script</code> 作用域，使用 <code>var n = &#39;global n&#39;</code> ，就只有一级 <code>Global</code> 作用域。</p><h3 id="高阶函数与嵌套调用" tabindex="-1"><a class="header-anchor" href="#高阶函数与嵌套调用" aria-hidden="true">#</a> 高阶函数与嵌套调用</h3><p>定义外层函数为父函数，内层函数为子函数。</p><p>高阶函数：</p><p>1.函数作为参数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> calcFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calcFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">20</span>

<span class="token function">calc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> add<span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token function">calc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> sub<span class="token punctuation">)</span> <span class="token comment">// -10</span>
</code></pre></div><ol start="2"><li>函数作为返回值</li></ol><p>父函数嵌套（包裹）子函数：在父函数定义并返回子函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count <span class="token operator">+</span> num
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> add
<span class="token punctuation">}</span>

<span class="token keyword">let</span> add5 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> add10 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6 等价于 makeAdder(5)(1)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add10</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 11 等价于 makeAdder(10)(1)</span>
</code></pre></div><p>嵌套调用：</p><p>父函数嵌套（包裹）子函数：在父函数中定义并调用子函数。</p><p>每当外部函数被调用时，内部函数都会在内存中开辟新的空间。</p><p>引用到的变量沿着作用域链逐级向上查找，同名变量使用最近的值。如果找到全局作用域还没找到，则报变量未定义的错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 作用域链：foo3 -&gt; foo2 -&gt; foo1 -&gt; 全局</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;global n&#39;</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;foo1 n&#39;</span>

  <span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// let n = &#39;foo2 n&#39;</span>
    
    <span class="token keyword">function</span> <span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
      <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (foo1)</span>
    <span class="token punctuation">}</span>
    <span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo1 n</span>
</code></pre></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>不严谨：闭包是能够访问<strong>外层函数作用域</strong>中的自由变量的<strong>函数</strong>。</p><p>广义（理论）：闭包是能够访问<strong>外层作用域</strong>中的自由变量的函数与这个<strong>自由变量</strong>组成的<strong>词法环境</strong>。</p><p>狭义（实践）：闭包是有访问<strong>外层函数作用域</strong>中的自由变量的函数与这个<strong>自由变量</strong>组成的<strong>词法环境</strong>。</p><p><strong>闭包最大的作用是可以在内层函数中访问到其外层函数的作用域。</strong></p><p>每个函数在预编译阶段都会生成一个空的闭包对象，无论这个闭包是否被使用。当函数执行完毕，函数实例被销毁，如果函数内部引用了外部自由变量，将自由变量加入到闭包对象中，闭包会被内层函数的作用域链引用，不会被回收；否则空的闭包没有被引用，会被释放回收。</p><h3 id="广义" tabindex="-1"><a class="header-anchor" href="#广义" aria-hidden="true">#</a> 广义</h3><p>从理论（广义）角度，所有函数在创建时都会创建闭包，无论这个闭包是否被使用。函数执行完毕，没有被使用到的闭包会被回收。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><code>foo</code> 引用了外层全局作用域的变量 <code>a</code>，创建了闭包，但因为全局作用域是长久存在的，所以该闭包多此一举，函数执行完毕也就被回收了。</p><h3 id="狭义" tabindex="-1"><a class="header-anchor" href="#狭义" aria-hidden="true">#</a> 狭义</h3><p>从实践（狭义）角度，我们只关注：因为内层函数引用外层函数作用域的自由变量，依然存在、不被回收的闭包，即使创建这个闭包的外层函数（作用域）都已销毁。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;foo n&#39;</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (foo){ n: &quot;foo n&quot; }</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">tmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo n</span>
</code></pre></div><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220725220741.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>内层函数 <code>bar</code> 引用了外层函数作用域的变量 <code>a</code>，外层函数 <code>foo</code> 创建了闭包，但因为函数作用域是随着函数执行完毕就被销毁的，为了内层函数能够引用外层函数的变量，该闭包是必须存在、不能被回收的。</p><h2 id="为什么需要闭包" tabindex="-1"><a class="header-anchor" href="#为什么需要闭包" aria-hidden="true">#</a> 为什么需要闭包</h2><p>函数在函数调用栈上的执行流程：</p><ul><li>函数在栈上运行，且会使用<strong>栈内存</strong>。</li><li>函数在栈内存上，保存<strong>局部变量</strong>等数据。</li><li>函数执行完后，出栈，函数作用域销毁。</li></ul><p>函数出栈后，栈上保存的数据也就不存在了，为了保存该函数中被引用的自由变量，将变量名、变量值组成一个闭包对象保存在堆内存中，再将其他函数的作用域链引用这个闭包，也就能访问到该函数的自由变量了。</p><p>从语言的角度：闭包是一种可以让函数内部访问到外部自由变量的技术或语法特性，在支持头等函数的编程语言中都存在。</p><p>头等函数即函数是第一公民：函数可以赋值给变量、可以作为其他函数的参数或返回值，便于写出高阶函数和闭包</p><h2 id="闭包创建过程" tabindex="-1"><a class="header-anchor" href="#闭包创建过程" aria-hidden="true">#</a> 闭包创建过程</h2><p>推荐阅读：<a href="%5Bhttps://juejin.cn/post/7079995358624874509%5D(https://juejin.cn/post/7079995358624874509)">一文颠覆大众对闭包的认知</a></p><p>创建过程：</p><ol><li><code>V8</code> 引擎在每个函数执行前都会进行预编译，都会创建一个闭包对象 <code>Closure</code>，无论这个闭包是否被使用。</li><li>发现子函数引用到父函数的变量，则给闭包对象 <code>Closure</code> 添加键值对（变量名：变量值），同时子函数的作用域链 <code>[[Scopres]]</code> 引用这个闭包对象（ <code>Scopes</code> 数组）</li><li>执行子函数时，自由变量会在其作用域链上查找，可以查找到 <code>Closure</code> 对象里的值。</li><li>函数执行完毕，函数实例被销毁，空的闭包被释放回收，被引用到的闭包不会被回收。</li></ol><p>如下代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1: Script.LE = {n, father}</span>
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;n&#39;</span>
<span class="token comment">// 2: father.[[Scopes]] = [Script.LE, Global.LE]</span>
<span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 3: father.LE = {x, y, z, son1, son2}，并创建空的闭包对象 father.Closure = {}</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token string">&#39;y&#39;</span>
  <span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span> <span class="token comment">// 没有子函数引用 z，所以 father.Closure 中无 z</span>
  <span class="token comment">// 4: 发现 son1 引用了父函数的变量 x，令闭包对象 father.Closure = {x: &quot;x&quot;}</span>
  <span class="token comment">// 5: son1.[[Scopes]] = [father.Closure, Script.LE, global.LE]</span>
  <span class="token keyword">function</span> <span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father){x: &quot;x&quot;, y: &quot;y&quot;}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 6: 发现 son2 引用了父函数的变量 y，令闭包对象 father.Closure = {x: &quot;x&quot;, y: &quot;y&quot;}</span>
  <span class="token comment">// 7: son2.[[Scopes]] = [father.Closure, Script.LE, global.LE]</span>
  <span class="token keyword">function</span> <span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> son1
<span class="token punctuation">}</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 执行完毕，函数实例销毁，但因为函数内部引用外部变量，闭包不会销毁</span>
</code></pre></div><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220724034456.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>foo 作用域链：<code>foo.LE(local)</code> → <code>foo.Closure{x: &#39;x&#39;, y: &#39;y&#39;}</code> → <code>Script{n: &#39;n&#39;, foo: ƒ}</code> → <code>Global</code></p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220724035832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>每当 V8 引擎预编译函数时，遇到其内部子函数声明，会快速地扫描内部函数使用了当前父函数中的哪些自由变量，将这些变量加入到父函数的闭包对象中，最终这个闭包对象将作为这些内部子函数作用域链中的一员。</p><p>多个子函数使用同一个闭包对象，只有当所有子函数的作用域链都被释放才会释放父函数的闭包对象</p><h2 id="闭包创建场景" tabindex="-1"><a class="header-anchor" href="#闭包创建场景" aria-hidden="true">#</a> 闭包创建场景</h2><p>1.父函数返回子函数，且子函数引用父函数的变量。</p><p>执行父函数得到的返回值（即子函数）赋值给中间变量 <code>tmp</code>，在执行 <code>tmp</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>
  
  <span class="token keyword">function</span> <span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> son
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">tmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// father n</span>
</code></pre></div><p>son 作用域链：<code>son.LE(local)</code> → <code>son.Closure{n: &quot;father n&quot;}</code> → <code>Script</code> → <code>Global</code></p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723044039.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>或删去中间变量 foo</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>

  <span class="token keyword">function</span> <span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> son
<span class="token punctuation">}</span>
<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>2.父函数返回子函数，且子函数引用父函数的变量，执行父函数得到的返回值作为同级函数的参数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>
  
  <span class="token keyword">function</span> <span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> son
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;foo n&#39;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// father n</span>
</code></pre></div><p>3.父函数嵌套包裹子函数，父函数调用子函数，且子函数引用父函数的变量</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>
  
  <span class="token keyword">function</span> <span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// father n</span>
</code></pre></div><p>4.父函数嵌套包裹多个子函数</p><p><code>Closure</code> 会被所有子函数的作用域链 <code>[[Scopes]]</code> 引用，所以想要 <code>Closure</code> 不被引用就需要使所有子函数都被销毁，避免内存泄漏。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>
  <span class="token keyword">function</span> <span class="token function">son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// son1 引用父函数的变量 n</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// son2 不引用父函数的变量</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token function">son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 只调用 son2</span>
<span class="token punctuation">}</span>
<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>5.函数赋值</p><p><code>foo</code> 创建的闭包对象被 <code>Script</code> 作用域的 <code>bar</code> 引用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;foo n&#39;</span>

  <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (foo) n: &quot;foo n&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo n</span>
</code></pre></div><p>6.循环赋值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不使用闭包</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token comment">// 6 6 6 6 6 6</span>

<span class="token comment">// 使用闭包</span>
<span class="token comment">// 作用域链：setTimeout 的回调函数 -&gt; 匿名立即执行函数 -&gt; 全局</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
      <span class="token keyword">debugger</span> <span class="token comment">// 闭包 j: 0、1、2、3、4、5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token comment">// 0 1 2 3 4 5</span>

<span class="token comment">// ES6：let</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token comment">// 0 1 2 3 4 5</span>
</code></pre></div><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220723010835.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>不使用闭包：异步任务 <code>setTimeout</code> 放到任务队列，等到同步任务执行完毕再执行任务队列。同步任务 <code>for</code> 每次循环过程中<code>i</code> 自增并将 <code>console.log(i)</code> 放到任务队列，同步任务结束时 <code>i</code> 为 6，任务队列中有 6 个 <code>console.log(i)</code>，依次执行任务队列，最后输出 6 个 6</li><li>使用闭包：作用域链：<code>setTimeout</code> 的回调函数 -&gt; 匿名立即执行函数 -&gt; 全局。回调函数引用了自由变量 <code>j</code>，向上查找，找到立即执行函数的形参 <code>j</code>，形参 <code>j</code> 接收实参 <code>i</code> 传入的值。回调函数内部使用了外部立即执行函数作用域的形参 <code>j</code>，形成了 6 个互不干扰的闭包。</li><li>使用 <code>let</code>：形成 6 个互不干扰的块级作用域</li></ul><p>立即执行函数 <code>IIFE</code>(Immediately Invoked Function Expression)</p><p>定义：声明一个匿名函数，并立即调用这个函数。</p><p>作用：创建一个独立作用域，使得外部访问不了内部变量，同时避免全局污染。</p><p><strong>块级作用域的引入使得 ES5 常用的立即执行函数不再需要了。</strong></p><p>7.回调函数</p><p>使用回调函数就是在使用闭包</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token string">&#39;father n&#39;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span> <span class="token comment">// 闭包 (father) n: &quot;father n&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// father n</span>
</code></pre></div><p><code>setTimeout</code> 的回调函数引用了上级 <code>father</code> 作用域的变量 <code>n</code></p><p>8.getter、setter</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 闭包中被隐藏的数据，外界无法访问</span>
  <span class="token comment">// 返回一个有 getter 和 setter 的对象</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 22</span>
</code></pre></div><h2 id="闭包的特性" tabindex="-1"><a class="header-anchor" href="#闭包的特性" aria-hidden="true">#</a> 闭包的特性</h2><p>被内层函数使用到的闭包对象不是空的，其中的变量是私有的，不会污染全局。</p><p>被内层函数使用到的闭包对象不会被垃圾回收机制回收，其中的变量不会被销毁。</p><h2 id="闭包的应用" tabindex="-1"><a class="header-anchor" href="#闭包的应用" aria-hidden="true">#</a> 闭包的应用</h2><p>闭包最大的作用是可以在其他的执行上下文中，访问到函数内部的变量。</p><h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3><p>闭包与立即执行函数实现模块，解决了<strong>命名空间污染</strong>的问题。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dataA <span class="token operator">=</span> <span class="token string">&#39;dataA&#39;</span>
  <span class="token keyword">function</span> <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> dataA
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">getA</span><span class="token operator">:</span> getA<span class="token punctuation">,</span>
    <span class="token literal-property property">dataA</span><span class="token operator">:</span> dataA
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

moduleA<span class="token punctuation">.</span><span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// dataA</span>
</code></pre></div><p>JS 模块化发展历程：闭包 → AMD、CMD → CommonJS → ES Module</p><h3 id="模拟私有属性" tabindex="-1"><a class="header-anchor" href="#模拟私有属性" aria-hidden="true">#</a> 模拟私有属性</h3><p>隐藏数据，实现私有属性成员（变量或方法），只提供对外的接口。ES6 可以通过 <code>#</code> 定义类的私有成员。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 闭包中被隐藏的数据，外界无法访问</span>
  <span class="token comment">// 返回一个有 getter 和 setter 的对象</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> _data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nevermore&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// nevermore</span>
<span class="token comment">// 无法访问私有属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span>_data<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre></div><h3 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h3><p>实现高阶函数，如柯里化、节流防抖：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通函数形式的柯里化</span>
<span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>

<span class="token comment">// 箭头函数形式的柯里化</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>

<span class="token comment">// 再省略 return</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum3</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 60</span>
</code></pre></div><p>节流：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 注意在定时器外</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 业务代码</span>
</code></pre></div><h2 id="闭包的缺点" tabindex="-1"><a class="header-anchor" href="#闭包的缺点" aria-hidden="true">#</a> 闭包的缺点</h2><p>使用不当、滥用闭包才会造成内存泄漏，因为闭包包含外层函数的作用域，内存占用大，引用的内容多了，就会造成内存泄漏。应当在函数执行结束后主动清除被引用的自由变量。</p><p>正确使用闭包不会造成内存泄漏，由于老浏览器（主要是 IE6）的垃圾回收机制的 bug，导致容易出现内存泄漏。</p><p>内存泄漏：系统进程不再用到的内存，没有及时释放或被回收。</p><p>以下代码会发生内存泄漏：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// arr 加入 Closure</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>f <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 长久持有 fun2 的引用</span>
</code></pre></div><p>原因：父函数的闭包对象 <code>Closure</code> 被所有子函数的作用域链引用，只要有一个子函数没有被销毁，<code>Closure</code> 就无法销毁，闭包中的变量也无法销毁，就发生了内存泄漏。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>定义：</p><ul><li>不严谨：闭包是能够访问<strong>外层函数作用域</strong>中的自由变量的<strong>函数</strong>。</li><li>广义（理论）：闭包是能够访问<strong>外层作用域</strong>中的自由变量的函数与这个<strong>自由变量</strong>组成的<strong>词法环境</strong>。</li><li>狭义（实践）：闭包是能够访问<strong>外层函数作用域</strong>中的自由变量的函数与这个<strong>自由变量</strong>组成的<strong>词法环境</strong>。</li></ul><p>创建过程：</p><p>每个函数在预编译阶段都会生成一个空的闭包对象，无论这个闭包是否被使用。当函数执行完毕，函数实例被销毁，如果函数内部引用了外部自由变量，将自由变量加入到闭包对象中，闭包会被内层函数的作用域链引用，不会被回收；否则空的闭包没有被引用，会被释放回收。</p><p>作用：</p><p><strong>闭包最大的作用是可以在内层函数中访问到其外层函数的作用域。</strong></p><p>特性：</p><ul><li>变量私有：不会污染全局</li><li>变量生命周期长：不会随着函数执行结束而被回收</li></ul><p>应用：</p><ul><li>模块</li><li>私有属性</li><li>函数式编程：实现高阶函数，如柯里化、防抖节流</li></ul><p>缺点：</p><p>使用不当、滥用闭包才会造成内存泄漏。因为闭包包含外层函数的作用域，内存占用大，引用的内容多了，就会造成内存泄漏。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,127),i={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/mqyqingfeng/blog/issues/3",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/mqyqingfeng/Blog/issues/9",target:"_blank",rel:"noopener noreferrer"},f=p('<li><a href="%5Bhttps://zh.wikipedia.org/wiki/%E5%A4%B4%E7%AD%89%E5%87%BD%E6%95%B0%5D(https://zh.wikipedia.org/wiki/%E5%A4%B4%E7%AD%89%E5%87%BD%E6%95%B0)">头等函数——维基百科</a></li><li><a href="%5Bhttps://juejin.cn/post/7084549768067678245%5D(https://juejin.cn/post/7084549768067678245)">闭包是什么？从为什么会有闭包讲起！</a></li><li><a href="%5Bhttps://juejin.cn/post/7079995358624874509%5D(https://juejin.cn/post/7079995358624874509)">一文颠覆大众对闭包的认知</a></li><li><a href="%5Bhttps://segmentfault.com/a/1190000012646221%5D(https://segmentfault.com/a/1190000012646221)">前端基础进阶（四）：详细图解作用域链与闭包</a></li><li><a href="%5Bhttps://www.cnblogs.com/echolun/p/11897004.html%5D(https://www.cnblogs.com/echolun/p/11897004.html)">一篇文章看懂JS闭包，都要2020年了，你怎么能还不懂闭包？</a></li>',5),g={href:"https://juejin.cn/post/6937469222251560990",target:"_blank",rel:"noopener noreferrer"};function m(h,y){const s=c("ExternalLinkIcon");return e(),u("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[a("闭包——MDN"),t(s)])]),n("li",null,[n("a",r,[a("JavaScript深入之词法作用域和动态作用域"),t(s)])]),n("li",null,[n("a",d,[a("JavaScript深入之闭包"),t(s)])]),f,n("li",null,[n("a",g,[a("JS 闭包经典使用场景和含闭包必刷题"),t(s)])])])])}const b=o(l,[["render",m],["__file","closure.html.vue"]]);export{b as default};
