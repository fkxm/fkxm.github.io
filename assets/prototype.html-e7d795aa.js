import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-62caafbf.js";const p={},o=t(`<p>原型（prototype）是存放<strong>共有属性、方法</strong>的<strong>对象</strong> （prototype 是对象）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>

<span class="token comment">// class 类声明</span>
<span class="token keyword">class</span> <span class="token class-name">People</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">Student</span> <span class="token comment">// true</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">People</span>  <span class="token comment">// true</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>  <span class="token comment">// true</span>

<span class="token comment">// class 类 实际上是函数，可见是语法糖</span>
<span class="token keyword">typeof</span> People  <span class="token comment">// &#39;function&#39;</span>
<span class="token keyword">typeof</span> Student <span class="token comment">// &#39;function&#39;</span>
</code></pre></div><h2 id="原型的六个规则" tabindex="-1"><a class="header-anchor" href="#原型的六个规则" aria-hidden="true">#</a> 原型的六个规则</h2><p>隐式原型 <code>[[Prototype]]</code> 是 ECMA 标准，<code>__proto__</code> 是浏览器对标准的实现。</p><p>可以简单地认为显式原型是用来存放共有属性、方法，constructor、<strong>proto</strong> 的地方。</p><p>定义 <code>__proto__</code> 为隐式原型，<code>prototype</code> 为显式原型，有以下规则：</p><ol><li>对象（包括数组、函数）的隐式原型 === 其构造函数的显式原型</li><li>函数（普通、箭头、构造函数）的隐式原型 === <code>Function</code> 的显式原型</li><li>普通函数、构造函数都有显式原型，箭头函数没有显式原型</li><li>构造函数 === 构造函数的显式原型的 <code>constructor</code>，两者循环引用</li><li>对象的显式原型是原型链的根，在所有对象（包括数组、函数）的原型链上。除了使用 Object.create(null) 以 null 为原型创建的新对象</li><li>对象的显式原型是原型链的最顶层，不指向更上一层，所以为 null</li></ol><p>代码示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 等价于 new Array([])</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 等价于 new Object({})</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 等价于 new Function(&#39;&#39;)</span>
<span class="token keyword">const</span> <span class="token function-variable function">arrow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Person 构造函数</span>

<span class="token comment">// 1.对象（包括数组、函数）的隐式原型 === 其构造函数的显式原型</span>
arr<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
obj<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype
fn<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
arrow<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
Person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype

<span class="token comment">// 2.函数（普通、箭头、构造函数）的隐式原型 === Function 的显式原型</span>
fn<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
arrow<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
Person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
Array<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
Object<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
Function<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype

<span class="token comment">// 3.普通函数、构造函数都有显式原型，箭头函数没有显式原型</span>
fn<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype
arrow<span class="token punctuation">.</span>prototype <span class="token operator">===</span> <span class="token keyword">undefined</span>

<span class="token comment">// 4.构造函数 === 构造函数的显式原型的 constructor，两者循环引用</span>
Person <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor
Array <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor
Function <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor
Object <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor

<span class="token comment">// 5.对象的显式原型是原型链的根，在所有对象（包括数组、函数）的原型链上</span>
<span class="token comment">// 除了使用 Object.create(null) 以 null 为原型创建的新对象！</span>
arr <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
fn <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>  <span class="token comment">// true</span>
<span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> child <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
child <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// false</span>

<span class="token comment">// 6.对象的显式原型是原型链的最顶层，不指向更上一层，所以为空。</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span>
</code></pre></div><h2 id="class-继承图解" tabindex="-1"><a class="header-anchor" href="#class-继承图解" aria-hidden="true">#</a> class 继承图解</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is eating</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 子类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
  <span class="token punctuation">}</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I&#39;m </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, ID is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;001&#39;</span><span class="token punctuation">)</span>
stu1<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span> <span class="token comment">// Student {name: &quot;Tom&quot;, id: &quot;001&quot;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// Person {constructor: ƒ, sayHi: ƒ}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {constructor: ƒ, eat: ƒ}</span>
</code></pre></div><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/原型链（第2版）.png" alt="原型链图解" tabindex="0" loading="lazy"><figcaption>原型链图解</figcaption></figure><h2 id="属性和方法的执行规则" tabindex="-1"><a class="header-anchor" href="#属性和方法的执行规则" aria-hidden="true">#</a> 属性和方法的执行规则</h2><p>获取实例的属性或方法时，先在实例自身找，找不到再去隐式原型所指向的地址找，找不到再往上找，直到找到 或 直至 <code>Object.prototype</code> 也找不到就报错。</p><ul><li>ES5 通过原型链实现继承，不支持私有属性</li><li>ES6 通过 class 实现继承，使用 <code>#</code> 指定私有属性</li></ul><h2 id="设置原型" tabindex="-1"><a class="header-anchor" href="#设置原型" aria-hidden="true">#</a> 设置原型</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5：new 构造函数()</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// ES6：Object.create(原型对象)</span>
<span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// Object.create() 以传入的对象为原型，创建新对象</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> parent<span class="token punctuation">)</span> <span class="token comment">// true，注意不是 parent.prototype</span>
</code></pre></div><h2 id="原型常用-api" tabindex="-1"><a class="header-anchor" href="#原型常用-api" aria-hidden="true">#</a> 原型常用 API</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// Object.create() 以传入的对象为原型，创建新对象</span>
<span class="token keyword">let</span> child <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Earth&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// child 原型链上的 address 属性不可枚举</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> parent<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;parent&#39;}</span>

<span class="token comment">// 1.Object.getPrototypeOf：获取对象的原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { name: &#39;parent&#39; }</span>

<span class="token comment">// 2.hasOwnProperty：判断属性是否是对象自身的属性，而不是原型链上的属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// 3.in: 判断属性是否在对象及其原型链上</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span> <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span> <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// 4.for in：循环遍历对象自身的和原型链上的可枚举属性</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// name</span>
<span class="token punctuation">}</span>

<span class="token comment">// 5.isPrototypeOf：判断对象是否是另一个对象的原型</span>
<span class="token comment">// console.log(child instanceof parent) 报错：parent 没有 prototype 属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="typeof-与-instanceof" tabindex="-1"><a class="header-anchor" href="#typeof-与-instanceof" aria-hidden="true">#</a> typeof 与 instanceof</h2><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><p>判断数据类型，返回值为数据类型的字符串（如 <code>&#39;number&#39;</code>）</p><p>几种特殊情况：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token constant">NAN</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span>

<span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>

<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
</code></pre></div><p>typeof null === &#39;object&#39; 原因：</p><p>这个 bug 是第一版 Javascript 留下来的。在这个版本，数值是以 32 位存储的，由标志位（1~3 位）和数值组成。null 的二进制表示全都是 0，自然前三位也是 0，所以执行 typeof 时会返回 &#39;object&#39;。</p><p>有五种标志位：</p><ul><li>000：对象</li><li>1：整型，数据是 31 位带符号整数</li><li>010：双精度浮点型</li><li>100：字符串</li><li>110：布尔型</li></ul><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3><p>判断构造函数的显式原型 <code>prototype</code> 是否出现在某个实例对象的原型链上，返回值为 true 或 false。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>obj1 <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span>
实例对象 <span class="token keyword">instanceof</span> 构造函数
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">Student</span> <span class="token comment">// true</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">People</span>  <span class="token comment">// true</span>
stu1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>  <span class="token comment">// true</span>
</code></pre></div>`,32),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","prototype.html.vue"]]);export{r as default};
