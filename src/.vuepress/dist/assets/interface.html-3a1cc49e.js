import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-60f9b323.js";const t={},p=e(`<h2 id="声明对象类型" tabindex="-1"><a class="header-anchor" href="#声明对象类型" aria-hidden="true">#</a> 声明对象类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通过类型(type)别名来声明对象类型</span>
<span class="token comment">// type InfoType = {name: string, age: number}</span>

<span class="token comment">// 另外一种方式声明对象类型: 接口interface</span>
<span class="token comment">// 在其中可以定义可选类型</span>
<span class="token comment">// 也可以定义只读属性</span>
<span class="token keyword">interface</span> <span class="token class-name">IInfoType</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info<span class="token operator">:</span> IInfoType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  friend<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;kobe&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// info.name = &quot;123&quot;</span>
info<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通过interface来定义索引类型</span>
<span class="token keyword">interface</span> <span class="token class-name">IndexLanguage</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> frontLanguage<span class="token operator">:</span> IndexLanguage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ILanguageYear</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> languageYear<span class="token operator">:</span> ILanguageYear <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;C&quot;</span><span class="token operator">:</span> <span class="token number">1972</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;Java&quot;</span><span class="token operator">:</span> <span class="token number">1995</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;JavaScript&quot;</span><span class="token operator">:</span> <span class="token number">1996</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;TypeScript&quot;</span><span class="token operator">:</span> <span class="token number">2014</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type CalcFn = (n1: number, n2: number) =&gt; number</span>
<span class="token comment">// 可调用的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">CalcFn</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> calcFn<span class="token operator">:</span> CalcFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">calcFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">CalcFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口的继承" tabindex="-1"><a class="header-anchor" href="#接口的继承" aria-hidden="true">#</a> 接口的继承</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">IAction</span> <span class="token keyword">extends</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IFly <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> action<span class="token operator">:</span> IAction <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 一种组合类型的方式: 联合类型</span>
<span class="token keyword">type</span> <span class="token class-name">WhyType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span>


<span class="token comment">// 另一种组件类型的方式: 交叉类型</span>
<span class="token keyword">type</span> <span class="token class-name">WType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span>

<span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">MyType1</span> <span class="token operator">=</span> ISwim <span class="token operator">|</span> IFly
<span class="token keyword">type</span> <span class="token class-name">MyType2</span> <span class="token operator">=</span> ISwim <span class="token operator">&amp;</span> IFly

<span class="token keyword">const</span> obj1<span class="token operator">:</span> MyType1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2<span class="token operator">:</span> MyType2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口的实现" tabindex="-1"><a class="header-anchor" href="#接口的实现" aria-hidden="true">#</a> 接口的实现</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IEat</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类实现接口</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token comment">// 继承: 只能实现单继承</span>
<span class="token comment">// 实现: 实现接口, 类可以实现多个接口</span>
<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IEat <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fish Swmming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fish Eating&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Person Swimming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 编写一些公共的API: 面向接口编程</span>
<span class="token keyword">function</span> <span class="token function">swimAction</span><span class="token punctuation">(</span>swimable<span class="token operator">:</span> ISwim<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  swimable<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.所有实现了接口的类对应的对象, 都是可以传入</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface和type的区别" tabindex="-1"><a class="header-anchor" href="#interface和type的区别" aria-hidden="true">#</a> interface和type的区别</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 用于扩展</span>
<span class="token comment">// interface IFoo {</span>
<span class="token comment">//   name: string</span>
<span class="token comment">// }</span>

<span class="token comment">// interface IFoo {</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>

<span class="token comment">// const foo: IFoo = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18</span>
<span class="token comment">// }</span>

<span class="token comment">// document.getElementById(&quot;app&quot;) as HTMLDivElement</span>
<span class="token comment">// window.addEventListener</span>

<span class="token comment">// interface Window {</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>
<span class="token comment">// window.age = 19</span>
<span class="token comment">// console.log(window.age)</span>


<span class="token comment">// type IBar = {</span>
<span class="token comment">//   name: string</span>
<span class="token comment">//   age: number</span>
<span class="token comment">// }</span>

<span class="token comment">// type IBar = {</span>
<span class="token comment">// }</span>

<span class="token comment">// 建议使用interface</span>
<span class="token class-name"><span class="token keyword">interface</span></span> IPerson <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面量赋值" tabindex="-1"><a class="header-anchor" href="#字面量赋值" aria-hidden="true">#</a> 字面量赋值</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// const p: IPerson ={</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   // 这样会报错</span>
<span class="token comment">//   address: &quot;广州市&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// const info = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   address: &quot;广州市&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// // freshness擦除</span>
<span class="token comment">// const p: IPerson = info</span>

<span class="token comment">// console.log(info)</span>
<span class="token comment">// console.log(p)</span>


<span class="token keyword">function</span> <span class="token function">printInfo</span><span class="token punctuation">(</span>person<span class="token operator">:</span> IPerson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 代码会报错</span>
<span class="token comment">// printInfo({</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88,</span>
<span class="token comment">//   address: &quot;广州市&quot;</span>
<span class="token comment">// })</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
  address<span class="token operator">:</span> <span class="token string">&quot;广州市&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">printInfo</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举类型的使用" tabindex="-1"><a class="header-anchor" href="#枚举类型的使用" aria-hidden="true">#</a> 枚举类型的使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type Direction = &quot;left&quot; | &quot;Right&quot; | &quot;Top&quot; | &quot;Bottom&quot;</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">LEFT</span><span class="token punctuation">,</span>
  <span class="token constant">RIGHT</span><span class="token punctuation">,</span>
  <span class="token constant">TOP</span><span class="token punctuation">,</span>
  <span class="token constant">BOTTOM</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">turnDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向左&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向右&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向上&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向下&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">// 穷举所有类型完后才会</span>
      <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举类型的值" tabindex="-1"><a class="header-anchor" href="#枚举类型的值" aria-hidden="true">#</a> 枚举类型的值</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type Direction = &quot;left&quot; | &quot;Right&quot; | &quot;Top&quot; | &quot;Bottom&quot;</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">LEFT</span> <span class="token operator">=</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">RIGHT</span> <span class="token operator">=</span> <span class="token string">&quot;RIGHT&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">TOP</span> <span class="token operator">=</span> <span class="token string">&quot;TOP&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">BOTTOM</span> <span class="token operator">=</span> <span class="token string">&quot;BOTTOM&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span>

<span class="token keyword">function</span> <span class="token function">turnDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向左&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向右&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向上&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;改变角色的方向向下&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","interface.html.vue"]]);export{d as default};
