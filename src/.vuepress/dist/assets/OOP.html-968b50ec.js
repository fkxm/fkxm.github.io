import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-60f9b323.js";const t={},o=p(`<p>JavaScript 支持多种编程范式，包括函数式编程和面向对象编程</p><p>除了 string、number、boolean、null、undefined、symbol 之外的其他数据是对象：<strong>数组</strong>、日期，甚至<strong>函数</strong>等等。故可以对它们使用 <code>.</code> 访问其属性，获取属性值。</p><p>在 JavaScript 中，对象是拥有属性和方法的数据，是无序的数据集合，是键值对的集合。</p><h2 id="创建单个对象的两种方式" tabindex="-1"><a class="header-anchor" href="#创建单个对象的两种方式" aria-hidden="true">#</a> 创建单个对象的两种方式</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. new Object()</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;obj1&#39;</span>
obj1<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 字面量形式</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="对象的属性-键-与属性值-值" tabindex="-1"><a class="header-anchor" href="#对象的属性-键-与属性值-值" aria-hidden="true">#</a> 对象的属性（键）与属性值（值）</h2><p>属性名（键名）是字符串，不是标识符（变量）</p><p>获取对象的属性（键）的 2 种方式：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 通过字面量定义对象</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.for in</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// &#39;name&#39;  &#39;age&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.Object.keys() 得到属性组成的数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;, &#39;age&#39;]</span>
</code></pre></div><p>获取对象的属性值（值）的2种方式：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 通过字面量定义对象</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1.obj.key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>

<span class="token comment">// 2.obj[&#39;key&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>
</code></pre></div><p>变量作为属性名：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> keyName <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>keyName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;never&#39;</span>
</code></pre></div><h2 id="定义单个属性" tabindex="-1"><a class="header-anchor" href="#定义单个属性" aria-hidden="true">#</a> 定义单个属性</h2><p>在某个对象上定义一个新属性，或修改该对象的现有属性，并返回该对象。</p><p><code>Object.defineProperty(obj, prop, descriptor)</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// descriptor（属性描述符）是一个对象</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 自动返回 { name: &#39;never&#39;, age: 23 }</span>
</code></pre></div><p>属性描述符分为两种，下表展示了它们可拥有的键值：</p><table><thead><tr><th></th><th><code>configurable</code></th><th><code>enumerable</code></th><th><code>value</code></th><th><code>writable</code></th><th><code>get</code></th><th><code>set</code></th></tr></thead><tbody><tr><td>数据描述符</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>存取描述符</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td><td>✅</td></tr></tbody></table><ul><li><code>configurable</code> ：可配置（删除、重新定义属性描述符），默认值 false</li><li><code>enumerable</code> ：可枚举（可以获取到对象的属性），默认值 false</li><li><code>value</code> ：属性值，默认值 undefined</li><li><code>writable</code> ：可写（修改属性），默认值 false</li><li><code>get</code> ：getter 方法</li><li><code>set</code> ：setter 方法</li></ul><p>注意：</p><ul><li><code>enumerable</code> 为 false 表示该属性不可遍历输出，但仍可以使用 <code>.</code> 访问到属性。在控制台，可以看到不可枚举到的属性会变浅色。</li><li>如果一个描述符同时拥有 <code>value</code> 或 <code>writable</code> 和 <code>get</code> 或 <code>set</code> 键，则会产生一个异常。即 <code>value</code> 与 <code>get</code> 互斥，<code>writable</code> 与 <code>set</code> 互斥。</li></ul><h3 id="数据描述符" tabindex="-1"><a class="header-anchor" href="#数据描述符" aria-hidden="true">#</a> 数据描述符</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 通过字面量定义的对象，configurable、enumerable、writable 均为 true</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 测试</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>age <span class="token comment">// age 可删除</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2333</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// age 可重新定义属性描述符，改为不可写</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, age: 2333}</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 修改 age 失败</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, age: 2333}</span>
</code></pre></div><h3 id="存取描述符" tabindex="-1"><a class="header-anchor" href="#存取描述符" aria-hidden="true">#</a> 存取描述符</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 作用：</span>
<span class="token comment">// 1.隐藏私有属性</span>
<span class="token comment">// 2.截获属性的访问和赋值过程</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 开发约定使用 _ 开头表示私有属性</span>
  <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 外部通过 age 修改私有属性 _age</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">interceptGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">interceptSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 拦截 get</span>
<span class="token keyword">function</span> <span class="token function">interceptGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;检测到 age 的值被获取&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 拦截 set</span>
<span class="token keyword">function</span> <span class="token function">interceptSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;检测到 age 的值被设置&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 检测到 age 的值被获取  23</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2333</span> <span class="token comment">// 检测到 age 的值被设置</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 浏览器环境下：{name: &#39;never&#39;, _age: 2333}</span>
<span class="token comment">// node 环境下：</span>
<span class="token comment">// { name: &#39;never&#39;, _age: 2333, age: [Getter/Setter] }</span>
</code></pre></div><p>getter、setter 简洁写法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 简洁写法</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 测试</span>
obj1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// { _age: 23 }</span>
obj2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// { _age: 23 }</span>
</code></pre></div><h2 id="定义多个属性" tabindex="-1"><a class="header-anchor" href="#定义多个属性" aria-hidden="true">#</a> 定义多个属性</h2><p><code>Object.defineProperties(obj, {prop1: {descriptor}, prop2: {descriptor}})</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;, _age: 23}</span>
</code></pre></div><h2 id="获取属性描述符" tabindex="-1"><a class="header-anchor" href="#获取属性描述符" aria-hidden="true">#</a> 获取属性描述符</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2333</span>

<span class="token comment">// 1.获取单个属性的属性描述符：Object.getOwnPropertyDescriptor</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {value: &#39;never&#39;, writable: true, enumerable: true, configurable: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {enumerable: true, configurable: true, get: ƒ, set: ƒ}</span>

<span class="token comment">// 2.获取对象的所有属性描述符：Object.getOwnPropertyDescriptors</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// age: {enumerable: true, configurable: true, get: ƒ, set: ƒ}</span>
<span class="token comment">// name: {value: &#39;never&#39;, writable: true, enumerable: true, configurable: true}</span>
<span class="token comment">// _age: {value: 2333, writable: true, enumerable: true, configurable: true}</span>
</code></pre></div><h2 id="限制对象" tabindex="-1"><a class="header-anchor" href="#限制对象" aria-hidden="true">#</a> 限制对象</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.阻止扩展：禁止对象添加属性</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// 无法添加属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>

<span class="token comment">// 2.密封：禁止添加属性，并将现有属性改为不可配置，相当于 preventExtensions + configurable:false</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token keyword">delete</span> obj2<span class="token punctuation">.</span>name <span class="token comment">// 无法删除属性</span>
obj2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// 无法添加属性</span>
obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nevermore&#39;</span> <span class="token comment">// \`可以\`修改现有属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;nevermore&#39;}</span>

<span class="token comment">// 3.冻结：禁止添加属性，并将现有属性改为不可配置、不可修改，相当于 preventExtensions + configurable:false + writable:false</span>
<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span>
<span class="token keyword">delete</span> obj2<span class="token punctuation">.</span>name <span class="token comment">// 无法删除属性</span>
obj3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">23</span> <span class="token comment">// 无法添加属性</span>
obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nevermore&#39;</span> <span class="token comment">// 无法修改属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;never&#39;}</span>
</code></pre></div><h2 id="创建多个对象的方式" tabindex="-1"><a class="header-anchor" href="#创建多个对象的方式" aria-hidden="true">#</a> 创建多个对象的方式</h2><p>详见《JavaScript高级程序设计第四版》8.2 创建对象章节</p><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 工厂函数</span>
<span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  p<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment">// 优点：快速创建大量相似对象</span>
<span class="token comment">// 缺点：创建的实例对象属于 Object，无法区分实例对象类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
<span class="token comment">// {name: &#39;Tom&#39;, age: 10, sayName: ƒ}</span>
<span class="token comment">// {name: &#39;Mary&#39;, age: 20, sayName: ƒ}</span>
</code></pre></div><h3 id="构造函数模式" tabindex="-1"><a class="header-anchor" href="#构造函数模式" aria-hidden="true">#</a> 构造函数模式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 等价于 </span>
  <span class="token comment">// this.sayName = new Function(&#39;console.log(this.name)&#39;)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment">// Person {name: &#39;Tom&#39;, age: 18, sayName: ƒ}</span>
<span class="token comment">// Person {name: &#39;Mary&#39;, age: 20, sayName: ƒ}</span>
</code></pre></div><blockquote><p><code>[[Prototype]]</code> 是 ECMA 标准，<code>__proto__</code> 是浏览器对标准的实现</p></blockquote><p>构造函数模式的缺点：如果构造函数里有方法，每次创建一个实例对象，都会创建一个函数，浪费内存。可以通过把方法定义在构造函数外部解决这个缺点，但又引入了另一个缺点：共有的方法都在全局作用可以域，难以管理。这个缺点可以通过原型模式解决。</p><h3 id="原型模式-原型-构造函数" tabindex="-1"><a class="header-anchor" href="#原型模式-原型-构造函数" aria-hidden="true">#</a> 原型模式（原型 + 构造函数）</h3><p>将共有的属性、方法添加到原型上。因为是添加，所以原型的构造函数仍保留：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

p1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Tom</span>
p2<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Mary</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {sayName: ƒ, constructor: ƒ}</span>
</code></pre></div><p>直接赋值整个 prototype 对象。因为是赋值，所以原型的构造函数需要自己手动加上：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
  <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">&#39;human&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {kind: &#39;human&#39;, constructor: ƒ, sayName: ƒ}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token comment">// Person {name: &#39;Tom&#39;, age: 18}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token comment">// Person {name: &#39;Mary&#39;, age: 20}</span>
</code></pre></div><h2 id="new-操作符执行的操作" tabindex="-1"><a class="header-anchor" href="#new-操作符执行的操作" aria-hidden="true">#</a> new 操作符执行的操作</h2><ol><li>在内存中创建一个空的临时对象</li><li>将这个临时对象的隐式原型 <code>[[Prototype]]</code> 指向构造函数显式原型 <code>prototype</code></li><li>绑定 <code>this</code> 到这个临时对象上</li><li>执行构造函数内部的代码（给新对象添加属性）</li><li>返回这个临时对象</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

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
</code></pre></div>`,51),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","OOP.html.vue"]]);export{i as default};
