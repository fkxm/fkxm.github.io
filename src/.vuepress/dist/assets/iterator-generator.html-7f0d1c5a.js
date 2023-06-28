import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as s,b as n,e as t,f as p}from"./app-60f9b323.js";const l={},k=p(`<h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2><p>迭代器是一个符合迭代器协议的对象。<strong>迭代器协议</strong>规定了产生一系列值的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。</p><p>迭代器协议要求实现 <code>next</code> 方法，<code>next</code> 是一个无参数或接受一个参数的函数，返回一个有 <code>done</code> 和 <code>value</code> 属性的对象：</p><ul><li>done：如果迭代器可以产生序列中的下一个值，则为 <code>false</code>。如果迭代器已将序列迭代完毕，则为 <code>true</code>。</li><li>value：迭代器返回的属性值，<code>done</code> 为 <code>true</code> 时可省略。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// 创建数组迭代器的函数</span>
<span class="token keyword">function</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arrayIterator <span class="token operator">=</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre></div><h3 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象" aria-hidden="true">#</a> 可迭代对象</h3><p>可迭代对象时一个符合<strong>可迭代协议</strong>的对象，可迭代协议允许对象自定义它们的迭代行为。</p>`,7),i=s("code",null,"@@iterator",-1),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"@@iterator",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"Symbol.iterator",-1),y=p(`<p>可迭代协议要求 <code>[Symbol.iterator]</code> 是一个无参数函数，返回一个符合迭代器协议的对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自定义数组迭代器</span>
<span class="token keyword">const</span> iterableObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 可计算属性</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用箭头函数，this 指向 iterableObj，否则 this 指向 return 的这个对象</span>
      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>array<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arrayIterator <span class="token operator">=</span> iterableObj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>

<span class="token comment">// 数组原生迭代器</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> NativeArrayIterator <span class="token operator">=</span> array<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NativeArrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NativeArrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NativeArrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NativeArrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> iterableObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 1, 2, 3</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Array、String、Set、Map、argumetns、NodeList 均是可迭代对象</p><p>应用：</p><ul><li>for ...of、展开运算符、yield*、解构赋值</li><li>new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])</li><li>Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)</li></ul><h3 id="for-in-与-for-of" tabindex="-1"><a class="header-anchor" href="#for-in-与-for-of" aria-hidden="true">#</a> for in 与 for of</h3><p>for in 遍历的是普通对象的可枚举属性（键名），for of 遍历的是可迭代对象的可迭代元素（值）：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">objCustom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">arrCustom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

<span class="token comment">// for in 遍历键名</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 打印：0 1 foo arrCustom objCustom</span>
<span class="token punctuation">}</span>

<span class="token comment">// for of 遍历键值，不遍历 objCustom、arrCustom 和实例属性 foo</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 打印：a b</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="自定义类的迭代" tabindex="-1"><a class="header-anchor" href="#自定义类的迭代" aria-hidden="true">#</a> 自定义类的迭代</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个班级类, 创建出来的对象是可迭代对象</span>
<span class="token keyword">class</span> <span class="token class-name">Class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">classNum<span class="token punctuation">,</span> students</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>classNum <span class="token operator">=</span> classNum
    <span class="token keyword">this</span><span class="token punctuation">.</span>students <span class="token operator">=</span> students
  <span class="token punctuation">}</span>

  <span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token parameter">newStudent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newStudent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 迭代器的中断</span>
      <span class="token function-variable function">return</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;迭代器提前终止&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> class1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">(</span><span class="token string">&#39;1班&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
class1<span class="token punctuation">.</span><span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token string">&#39;小刚&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> stu <span class="token keyword">of</span> class1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>stu <span class="token operator">===</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><p>生成器是特殊的迭代器，可以控制函数的执行与暂停。</p><p>一般地，函数终止条件是返回值或发生异常。使用生成器控制函数的执行与暂停。</p><p>通过 <code>function*</code> 定义生成器函数，执行生成器函数会返回一个生成器对象，执行生成器对象的 <code>next</code> 方法，会依次执行生成器函数里被 <code>yield</code> 分割的段代码，并返回 <code>{value: undefined, done: false}</code>，结束则 <code>done: true</code> ：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 第一段代码</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数开始执行&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;第一段代码：&#39;</span><span class="token punctuation">,</span> value1<span class="token punctuation">)</span>
  <span class="token keyword">yield</span>
  <span class="token comment">// 第二段代码</span>
  <span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token number">2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;第二段代码：&#39;</span><span class="token punctuation">,</span> value2<span class="token punctuation">)</span>
  <span class="token keyword">yield</span>
  <span class="token comment">// 第三段代码</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数执行结束&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 执行生成器函数会返回一个生成器对象</span>
<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 执行第一段代码</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 函数开始执行 第一段代码： 1</span>
<span class="token comment">// 执行第二段代码</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 第二段代码： 2</span>
<span class="token comment">// 执行第三段代码</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 函数执行结束</span>
</code></pre></div><h3 id="next-方法传递参数" tabindex="-1"><a class="header-anchor" href="#next-方法传递参数" aria-hidden="true">#</a> next 方法传递参数</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数开始执行&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token keyword">yield</span> initial <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token keyword">yield</span> value1 <span class="token operator">+</span> <span class="token number">2</span>
  <span class="token keyword">const</span> value3 <span class="token operator">=</span> <span class="token keyword">yield</span> value2 <span class="token operator">+</span> <span class="token number">3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数执行结束&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 生成器上的next方法可以传递参数</span>
<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> result1 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result1: &#39;</span><span class="token punctuation">,</span> result1<span class="token punctuation">)</span> <span class="token comment">// result1:  {value: 1, done: false}</span>

<span class="token comment">// 上一段代码的返回值的 value 作为这一段代码的 next 函数的参数</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>result1<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result2: &#39;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span> <span class="token comment">// result2:  {value: 3, done: false}</span>

<span class="token keyword">const</span> result3 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>result2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result3: &#39;</span><span class="token punctuation">,</span> result3<span class="token punctuation">)</span> <span class="token comment">// result3:  {value: 6, done: true}</span>

generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="return-方法提前终止函数" tabindex="-1"><a class="header-anchor" href="#return-方法提前终止函数" aria-hidden="true">#</a> return 方法提前终止函数</h3><p>yield：暂停函数的执行</p><p>return：终止函数的执行</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数开始执行&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token keyword">yield</span> initial <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token keyword">yield</span> value1 <span class="token operator">+</span> <span class="token number">2</span>
  <span class="token keyword">const</span> value3 <span class="token operator">=</span> <span class="token keyword">yield</span> value2 <span class="token operator">+</span> <span class="token number">3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数执行结束&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 1, done: false}</span>
<span class="token comment">// 使用 return 方法，则终止生成器函数的执行</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token string">&#39;终止&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: &#39;终止&#39;, done: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: undefined, done: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre></div><h3 id="throw-方法抛出异常" tabindex="-1"><a class="header-anchor" href="#throw-方法抛出异常" aria-hidden="true">#</a> throw 方法抛出异常</h3><p><code>throw</code>方法被捕获以后，会附带执行一次<code>next</code>方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;第一段&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;捕获错误：&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">yield</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;第二段&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">yield</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;第三段&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 第一段</span>
generator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&#39;错误&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 捕获错误：错误  第二段</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 第三段</span>
</code></pre></div><h2 id="生成器替代迭代器" tabindex="-1"><a class="header-anchor" href="#生成器替代迭代器" aria-hidden="true">#</a> 生成器替代迭代器</h2><p>在迭代器那节，通过 return 一个带有 next 方法的对象创建迭代器</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// 创建数组迭代器的函数</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.第一种写法，function 不加 *</span>
  <span class="token comment">// let index = 0</span>
  <span class="token comment">// return {</span>
  <span class="token comment">//   next: function () {</span>
  <span class="token comment">//     if (index &lt; arr.length) {</span>
  <span class="token comment">//       return { value: arr[index++], done: false }</span>
  <span class="token comment">//     } else {</span>
  <span class="token comment">//       return { value: undefined, done: true }</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   },</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 2.第二种写法</span>
  <span class="token comment">// for (const item of arr) {</span>
  <span class="token comment">//   yield item</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 3.最简洁写法，function 需要加 *</span>
  <span class="token keyword">yield</span><span class="token operator">*</span> array
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arrayIterator <span class="token operator">=</span> <span class="token function">createArrayIterator</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrayIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre></div><p>迭代指定范围的函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建一个迭代指定范围的函数</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createRangeIterator</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> start
  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> index<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rangeIterator <span class="token operator">=</span> <span class="token function">createRangeIterator</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rangeIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rangeIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rangeIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rangeIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 4, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rangeIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { value: 5, done: false }</span>
</code></pre></div><p>自定义类的迭代——生成器实现：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个班级类, 创建出来的对象是可迭代对象</span>
<span class="token keyword">class</span> <span class="token class-name">Class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">classNum<span class="token punctuation">,</span> students</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>classNum <span class="token operator">=</span> classNum
    <span class="token keyword">this</span><span class="token punctuation">.</span>students <span class="token operator">=</span> students
  <span class="token punctuation">}</span>

  <span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token parameter">newStudent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newStudent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// [Symbol.iterator]() {</span>
  <span class="token comment">//   let index = 0</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     next: () =&gt; {</span>
  <span class="token comment">//       if (index &lt; this.students.length) {</span>
  <span class="token comment">//         return { value: this.students[index++], done: false }</span>
  <span class="token comment">//       } else {</span>
  <span class="token comment">//         return { value: undefined, done: true }</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//     return: () =&gt; {</span>
  <span class="token comment">//       console.log(&#39;迭代器提前终止&#39;)</span>
  <span class="token comment">//       return { value: undefined, done: true }</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  
  <span class="token operator">*</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>students
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> class1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">(</span><span class="token string">&#39;1班&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小王&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
class1<span class="token punctuation">.</span><span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token string">&#39;小刚&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> stu <span class="token keyword">of</span> class1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="async、await-的由来" tabindex="-1"><a class="header-anchor" href="#async、await-的由来" aria-hidden="true">#</a> async、await 的由来</h2><p>async、await 是 Promise 和生成器的语法糖</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">requestData</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 上一个请求接口返回的数据作为下一个请求的参数</span>
<span class="token comment">// 1. 多次回调，依然会出现回调地狱的问题</span>
<span class="token function">requestData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res1:&#39;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span> <span class="token comment">// 1秒后输出 res1: 2</span>

  <span class="token function">requestData</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res2:&#39;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span> <span class="token comment">// 2秒后输出 res2: 4</span>

    <span class="token function">requestData</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res3</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res3:&#39;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span> <span class="token comment">// 3秒后输出 res3: 8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2. Promise 中 then 返回以上一次请求结果为参数的新请求</span>
<span class="token function">requestData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res1:&#39;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span> <span class="token comment">// 1秒后输出 res1: 2</span>
    <span class="token keyword">return</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res2:&#39;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span> <span class="token comment">// 2秒后输出 res2: 4</span>
    <span class="token keyword">return</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res3</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res3:&#39;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span> <span class="token comment">// 3秒后输出 res3: 8</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. Promise + 生成器</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getDataByGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">requestData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res1:&#39;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span> <span class="token comment">// 1秒后输出 res1: 2</span>
  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res2:&#39;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span> <span class="token comment">// 2秒后输出 res2: 4</span>
  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res3:&#39;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span> <span class="token comment">// 3秒后输出 res3: 8</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3.1 手动执行生成器</span>
<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">getDataByGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res3</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 3.2 封装一个自动执行的生成器</span>
<span class="token keyword">function</span> <span class="token function">execGenerator</span><span class="token punctuation">(</span><span class="token parameter">genFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">genFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> result<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">exec</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">execGenerator</span><span class="token punctuation">(</span>getDataByGenerator<span class="token punctuation">)</span>
<span class="token comment">// 3.3 引入第三方包：co（TJ 写的）</span>
<span class="token keyword">const</span> co <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;co&#39;</span><span class="token punctuation">)</span>
<span class="token function">co</span><span class="token punctuation">(</span>getDataByGenerator<span class="token punctuation">)</span>

<span class="token comment">// 4. 最优方式：async、await</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getDataByAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">requestData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res1:&#39;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span> <span class="token comment">// 1秒后输出 res1: 2</span>
  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res2:&#39;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span> <span class="token comment">// 2秒后输出 res2: 4</span>
  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">requestData</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res3:&#39;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span> <span class="token comment">// 3秒后输出 res3: 8</span>
<span class="token punctuation">}</span>

<span class="token function">getDataByAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,34);function g(w,v){const a=e("ExternalLinkIcon");return c(),u("div",null,[k,s("p",null,[n("要成为可迭代对象， 一个对象必须实现 "),i,n(" 方法。这意味着对象（或者它"),s("a",r,[n("原型链"),t(a)]),n("上的某个对象）必须有一个键为 "),d,n(" 的属性，可通过常量 "),s("a",m,[f,t(a)]),n(" 访问该属性。")]),y])}const b=o(l,[["render",g],["__file","iterator-generator.html.vue"]]);export{b as default};
