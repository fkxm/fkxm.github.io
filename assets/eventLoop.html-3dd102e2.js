import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-c618f770.js";const p={},o=t(`<h2 id="浏览器事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器事件循环" aria-hidden="true">#</a> 浏览器事件循环</h2><p>JS 是单线程的、非阻塞的。通过事件循环解决了单线程会阻塞的问题。<strong>JS 实现异步的核心就是事件循环</strong>。（进程是线程的容器。比喻：操作系统是工厂，进程是车间，线程是工人）</p><p>早期的 JS 作为浏览器脚本语言，为了防止 DOM 渲染冲突的问题、简化编程，被设计为单线程语言。</p><p>如今，为了充分发挥 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JS 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM，所以 Web Worker 本质上仍是通过单线程模拟多线程。</p><p>总结：优点是简化编程，缺点是无法发挥 CPU 的全部性能（可以使用 HTML5 新标准 Web Worker实现多线程）</p><h3 id="微任务与宏任务分类" tabindex="-1"><a class="header-anchor" href="#微任务与宏任务分类" aria-hidden="true">#</a> 微任务与宏任务分类</h3><p>浏览器、Node 环境下的微任务与宏任务分类：</p><p>微任务（microTask）：promise then、async/await、MutationObserver（H5 新特性）、queueMicrotask、process.nextTick</p><p>宏任务（macroTask）：main script(主线程代码)、setTimeout、setInterval、setImmediate、requestAnimationFrame、I/O 事件、DOM 监听事件、AJAX 请求、UI 页面渲染</p><h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h3><ol><li>main script主线程代码首先执行</li><li>执行微任务</li><li>DOM 渲染（若有则渲染，无则跳过）（微任务会阻塞页面的渲染，宏任务不会）</li><li>执行宏任务：在此之前，先查看微任务队列是否为空，不为空则继续执行微任务（<strong>先微后宏</strong>）即：若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮微任务队列。</li></ol><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220705015157.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="例题一" tabindex="-1"><a class="header-anchor" href="#例题一" aria-hidden="true">#</a> 例题一</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 宏1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 产生了新的微任务，放入第二轮微任务</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 第一轮 微任务</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 先微后宏</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 宏2，在执行宏任务前，先查看微任务队列是否为空，不为空则继续执行微任务</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="例题二" tabindex="-1"><a class="header-anchor" href="#例题二" aria-hidden="true">#</a> 例题二</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 同步执行 async2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// await 的下边代码进入微任务队列 （微1） 6</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//（宏1） 8</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化 Promise，传入的函数同步执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// （微2） 7 （微任务执行完毕，接着执行宏任务）</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 5 （同步代码执行完毕，接着执行微任务）</span>
</code></pre></div><p>await 与 Promise 的等价替换：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 执行 async2 的返回值放入 resolve 里</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 紧跟着 await 后面的语句相当于放在了 new Promise 中</span>
<span class="token comment">// 下一行及之后的语句相当于放在于 Promise.then 中</span>
</code></pre></div><h3 id="例题三" tabindex="-1"><a class="header-anchor" href="#例题三" aria-hidden="true">#</a> 例题三</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 整个 setTimeout 的回调函数放入宏任务队列（宏1），微任务结束再执行</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 7</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 宏1 引入了新的微任务，放入第二轮的微任务队列中，先把微任务队列执行完后，再执行宏2</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 放入第三轮微任务队列中</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then4&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 9</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 8 同步执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// （微1）4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// （宏2）</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;queueMicrotask&#39;</span><span class="token punctuation">)</span> <span class="token comment">// （微2）5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// （微3）6 （第一轮微任务执行完毕，执行宏1）</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// promise1</span>
<span class="token comment">// 2</span>
<span class="token comment">// promise2</span>
<span class="token comment">// then1</span>
<span class="token comment">// queueMicrotask</span>
<span class="token comment">// then2</span>
<span class="token comment">// setTimeout1</span>
<span class="token comment">// then3</span>
<span class="token comment">// then4</span>
<span class="token comment">// setTimeout2</span>
</code></pre></div><p>图解：</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/事件循环例题.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="node-事件循环" tabindex="-1"><a class="header-anchor" href="#node-事件循环" aria-hidden="true">#</a> Node 事件循环</h2><p>Nodejs 事件循环机制分为 6 个阶段：</p><ol><li>timers（定时器阶段）：执行 <code>setTimeout</code>、<code>setInterval</code> 的回调</li><li>pending callbacks（待定回调阶段）：执行延迟到下一个循环迭代的 I/O 回调（执行系统操作的回调）</li><li>idle, prepare（闲置阶段）：仅 Node 内部使用</li><li>poll（轮询阶段）：检索新的 I/O 事件</li><li>check（检查阶段）：执行 <code>setImmediate</code> 的回调</li><li>close callbacks（关闭事件回调阶段）：执行关闭事件的回调，如 <code>socket.on(&#39;close&#39;, ...)</code></li></ol><p>重点阶段为：</p><ol><li>timers：执行 <code>setTimeout</code>、<code>setInterval</code> 的回调</li><li>poll：处理轮询队列的事件，当有已超时的 timer，执行它的回调函数（若没有异步任务，则停留在此阶段）</li><li>check：立即执行 <code>setImmediate</code> 的回调</li></ol><h3 id="执行顺序-1" tabindex="-1"><a class="header-anchor" href="#执行顺序-1" aria-hidden="true">#</a> 执行顺序</h3><p>微任务队列：</p><ul><li>next tick microtask queue：<code>process.nextTick</code></li><li>other microtask queue：<code>Promise then 回调</code>、<code>queueMicrotask</code></li></ul><p>宏任务队列：</p><ul><li>timer queue：<code>setTimeout</code>、<code>setInterval</code></li><li>poll queue：I/O 事件</li><li>check queue：<code>setImmediate</code></li><li>close queue：close 事件</li></ul><p>在每一次事件循环的tick中，代码执行顺序：</p><ol><li>next tick microtask queue</li><li>other microtask queue</li><li>timer queue</li><li>poll queue</li><li>check queue</li><li>close queue</li></ol><h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;13&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>

<span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>图解：</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/node事件循环例题.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,38),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(p,[["render",e],["__file","eventLoop.html.vue"]]);export{r as default};
