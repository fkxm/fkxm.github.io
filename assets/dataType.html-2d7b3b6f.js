import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-c618f770.js";const t={},p=e(`<h2 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型" aria-hidden="true">#</a> any类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 当进行一些类型断言 as any</span>
<span class="token comment">// 在不想给某些JavaScript添加具体的数据类型时(原生的JavaScript代码是一样)</span>
<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

message <span class="token operator">=</span> <span class="token number">123</span>
message <span class="token operator">=</span> <span class="token boolean">true</span>
message <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// message()</span>
<span class="token comment">// message.split(&quot; &quot;)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unknown类型" tabindex="-1"><a class="header-anchor" href="#unknown类型" aria-hidden="true">#</a> unknown类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;abc&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>

<span class="token comment">// unknown类型只能赋值给any和unknown类型</span>
<span class="token comment">// any类型可以赋值给任意类型</span>

<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token comment">// 最好不要使用any,防止乱用</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> result
<span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> result
<span class="token keyword">let</span> num2<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> result
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="void类型" tabindex="-1"><a class="header-anchor" href="#void类型" aria-hidden="true">#</a> void类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sum2</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token function">sum1</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token comment">// sum1(&quot;abc&quot;, &quot;cba&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never类型" tabindex="-1"><a class="header-anchor" href="#never类型" aria-hidden="true">#</a> never类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// function foo(): never {</span>
<span class="token comment">//   // 死循环</span>
<span class="token comment">//   while(true) {</span>

<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token comment">// function bar(): never {</span>
<span class="token comment">//   throw new Error()</span>
<span class="token comment">// }</span>

<span class="token comment">// 提前</span>
<span class="token comment">// 封装一个核心函数</span>
<span class="token keyword">function</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;string处理方式处理message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;number处理方式处理message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;boolean处理方式处理message&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> check<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> message
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token comment">// 张三</span>
<span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple类型" tabindex="-1"><a class="header-anchor" href="#tuple类型" aria-hidden="true">#</a> tuple类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// tuple元组: 多种元素的组合(有点像集合)</span>
<span class="token comment">// &quot;why&quot; 18 1.88</span>

<span class="token comment">// 1.数组的弊端</span>
<span class="token comment">// const info: any[] = [&quot;why&quot;, 18, 1.88]</span>
<span class="token comment">// const infoObj = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18,</span>
<span class="token comment">//   height: 1.88</span>
<span class="token comment">// }</span>

<span class="token comment">// const name = info[0]</span>
<span class="token comment">// console.log(name.length)</span>


<span class="token comment">// 2.元组的特点</span>
<span class="token keyword">const</span> info<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// const age = info[1]</span>
<span class="token comment">// console.log(age.length)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple类型的应用场景" tabindex="-1"><a class="header-anchor" href="#tuple类型的应用场景" aria-hidden="true">#</a> tuple类型的应用场景</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// hook: useState</span>
<span class="token comment">// const [counter, setCounter] = {counter: , setCounter:}</span>

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> state
  <span class="token keyword">const</span> <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> newState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>currentState<span class="token punctuation">,</span> changeState<span class="token punctuation">]</span>
  <span class="token keyword">return</span> tuple
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// tuple应用场景优化</span>
<span class="token comment">// hook: useState</span>
<span class="token comment">// const [counter, setCounter] = {counter: , setCounter:}</span>

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> state
  <span class="token keyword">const</span> <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> newState
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>currentState<span class="token punctuation">,</span> changeState<span class="token punctuation">]</span>
  <span class="token keyword">return</span> tuple
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的参数和返回值类型" tabindex="-1"><a class="header-anchor" href="#函数的参数和返回值类型" aria-hidden="true">#</a> 函数的参数和返回值类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// 给参数加上类型注解: num1: number, num2: number</span>
<span class="token comment">// 给返回值加上类型注释: (): number</span>
<span class="token comment">// 在开发中,通常情况下可以不写返回值的类型(自动推导)</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token comment">// sum(123, 321)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名函数的参数类型" tabindex="-1"><a class="header-anchor" href="#匿名函数的参数类型" aria-hidden="true">#</a> 匿名函数的参数类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通常情况下, 在定义一个函数时, 都会给参数加上类型注解的</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cba&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nba&quot;</span><span class="token punctuation">]</span>
<span class="token comment">// item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解</span>
<span class="token comment">// 上下文中的函数: 可以不添加类型注解</span>
names<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// Point: x/y -&gt; 对象类型</span>
<span class="token comment">// {x: number, y: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选类型" tabindex="-1"><a class="header-anchor" href="#可选类型" aria-hidden="true">#</a> 可选类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// Point: x/y/z -&gt; 对象类型</span>
<span class="token comment">// {x: number, y: number, z?: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// number|string 联合类型</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用联合类型的值时, 需要特别的小心</span>
  <span class="token comment">// narrow: 缩小</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TypeScript帮助确定id一定是string类型</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">printID</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选类型和联合类型的关系" tabindex="-1"><a class="header-anchor" href="#可选类型和联合类型的关系" aria-hidden="true">#</a> 可选类型和联合类型的关系</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 让一个参数本身是可选的</span>
<span class="token comment">// 一个参数一个可选类型的时候, 它其实类似于是这个参数是 类型|undefined 的联合类型</span>
<span class="token comment">// function foo(message?: string) {</span>
<span class="token comment">//   console.log(message)</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type用于定义类型别名(type alias)</span>
<span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
<span class="token keyword">type</span> <span class="token class-name">PointType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
  z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> PointType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// &lt;img id=&quot;why&quot;/&gt;</span>

<span class="token comment">// 1.类型断言 as</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLImageElement
el<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;url地址&quot;</span>


<span class="token comment">// 2.另外案例: Person是Student的父类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>p <span class="token keyword">as</span> Student<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>


<span class="token comment">// 3.了解: as any/unknown</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token comment">// const num: number = (message as unknown) as number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非空类型断言" tabindex="-1"><a class="header-anchor" href="#非空类型断言" aria-hidden="true">#</a> 非空类型断言</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// message? -&gt; undefined | string</span>
<span class="token keyword">function</span> <span class="token function">printMessageLength</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if (message) {</span>
  <span class="token comment">//   console.log(message.length)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// vue3源码</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">)</span>
<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链的使用" tabindex="-1"><a class="header-anchor" href="#可选链的使用" aria-hidden="true">#</a> 可选链的使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    girlFriend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span>
  friend<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;kobe&quot;</span><span class="token punctuation">,</span>
    girlFriend<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;lily&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 另外一个文件中</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// console.log(info.friend!.name)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>age<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>girlFriend<span class="token operator">?.</span>name<span class="token punctuation">)</span>
<span class="token comment">// if (info.friend) {</span>
<span class="token comment">//   console.log(info.friend.name)</span>

<span class="token comment">//   if (info.friend.age) {</span>
<span class="token comment">//     console.log(info.friend.age)</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="运算符-1" tabindex="-1"><a class="header-anchor" href="#运算符-1" aria-hidden="true">#</a> ！！运算符</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment">// const flag = Boolean(message)</span>
<span class="token comment">// console.log(flag)</span>

<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>message
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符-2" tabindex="-1"><a class="header-anchor" href="#运算符-2" aria-hidden="true">#</a> ？？运算符</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
<span class="token comment">// 类似三目运算符</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> message <span class="token operator">??</span> <span class="token string">&quot;你好啊, 李银河&quot;</span>
<span class="token comment">// const content = message ? message: &quot;你好啊, 李银河&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量" aria-hidden="true">#</a> 字面量</h2><h3 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// &quot;Hello World&quot;也是可以作为类型的, 叫做字面量类型</span>
<span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment">// let num: 123 = 123</span>
<span class="token comment">// num = 321</span>


<span class="token comment">// 字面量类型的意义, 就是必须结合联合类型</span>
<span class="token keyword">type</span> <span class="token class-name">Alignment</span> <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>

<span class="token keyword">let</span> align<span class="token operator">:</span> Alignment <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
align <span class="token operator">=</span> <span class="token string">&#39;right&#39;</span>
align <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span>

<span class="token comment">// align = &#39;hehehehe&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字面量推理" tabindex="-1"><a class="header-anchor" href="#字面量推理" aria-hidden="true">#</a> 字面量推理</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// const info = {</span>
<span class="token comment">//   name: &quot;why&quot;,</span>
<span class="token comment">//   age: 18</span>
<span class="token comment">// }</span>

<span class="token comment">// info.name = &quot;kobe&quot;</span>

<span class="token comment">// </span>

<span class="token keyword">type</span> <span class="token class-name">Method</span> <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;POST&#39;</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> method<span class="token operator">:</span> Method<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Request</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> Method
<span class="token punctuation">}</span>

<span class="token comment">// const options1 :Request = {</span>
<span class="token comment">//   url: &quot;https://www.coderwhy.org/abc&quot;,</span>
<span class="token comment">//   method: &quot;POST&quot;</span>
<span class="token comment">// }</span>

<span class="token comment">// as const字面量推理</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&quot;https://www.coderwhy.org/abc&quot;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token comment">// String类型断言为字面量类型</span>
<span class="token comment">// request(options.url, options.method as Method)</span>
<span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> options<span class="token punctuation">.</span>method<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型缩小" tabindex="-1"><a class="header-anchor" href="#类型缩小" aria-hidden="true">#</a> 类型缩小</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1.typeof的类型缩小</span>
<span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.\b平等的类型缩小(=== == !== !=/switch)</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bottom&quot;</span>
<span class="token keyword">function</span> <span class="token function">printDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.if判断</span>
  <span class="token comment">// if (direction === &#39;left&#39;) {</span>
  <span class="token comment">//   console.log(direction)</span>
  <span class="token comment">// } else if ()</span>

  <span class="token comment">// 2.switch判断</span>
  <span class="token comment">// switch (direction) {</span>
  <span class="token comment">//   case &#39;left&#39;:</span>
  <span class="token comment">//     console.log(direction)</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   case ...</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3.instanceof(实例对象)</span>
<span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
  <span class="token function">teaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">work</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Student <span class="token operator">|</span> Teacher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">teaching</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">work</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>

<span class="token comment">// 4. in(字面量)</span>
<span class="token keyword">type</span> <span class="token class-name">Fish</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">walk</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Fish <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;swimming&#39;</span> <span class="token keyword">in</span> animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fish<span class="token operator">:</span> Fish <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;swimming&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">walk</span><span class="token punctuation">(</span>fish<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","dataType.html.vue"]]);export{d as default};
