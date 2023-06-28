import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as e,a as n,b as a,e as p,f as l}from"./app-60f9b323.js";const u={},k=l(`<h2 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承" aria-hidden="true">#</a> 原型链继承</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parentValue <span class="token operator">=</span> <span class="token string">&#39;parentValue&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">parentMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>protoValue <span class="token operator">=</span> <span class="token string">&#39;protoValue&#39;</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">protoMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>protoValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childValue <span class="token operator">=</span> <span class="token string">&#39;childValue&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Child.prototype.__proto__ === Parent.prototype</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 缺点1：不能给父类构造函数传参</span>
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 缺点2：子类实例继承到父类构造函数、原型链的属性和方法，但不可枚举</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Child {childValue: &#39;childValue&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">)</span> <span class="token comment">// Child {childValue: &#39;childValue&#39;}</span>

<span class="token comment">// 缺点3：父类的引用属性会被所有子类实例共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
<span class="token comment">// 可以访问父类构造函数、原型链的属性和方法</span>
child1<span class="token punctuation">.</span><span class="token function">protoMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// protoValue</span>
child1<span class="token punctuation">.</span><span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parentValue</span>
child1<span class="token punctuation">.</span>protoValue <span class="token comment">// &#39;protoValue&#39;</span>
</code></pre></div><p>优点：父类方法可以复用</p><p>缺点：</p><ol><li>不能给父类构造函数传参</li><li>子类实例可以继承父类构造函数、原型链上的属性和方法，但不可枚举</li><li>父类的引用属性会被所有子类实例共享，修改某个子类实例继承的的引用类型属性，会影响到所有的子类实例</li></ol><h2 id="借用构造函数继承" tabindex="-1"><a class="header-anchor" href="#借用构造函数继承" aria-hidden="true">#</a> 借用构造函数继承</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parentValue <span class="token operator">=</span> <span class="token string">&#39;parentValue&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">parentMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>protoValue <span class="token operator">=</span> <span class="token string">&#39;protoValue&#39;</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">protoMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>protoValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childValue <span class="token operator">=</span> <span class="token string">&#39;childValue&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child1&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child2&#39;</span><span class="token punctuation">,</span> <span class="token number">233</span><span class="token punctuation">)</span>

<span class="token comment">// 可以继承父类构造函数的属性和方法，且可枚举</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, childValue: &#39;childValue&#39;, parentMethod: ƒ}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, childValue: &#39;childValue&#39;, parentMethod: ƒ}</span>

<span class="token comment">// 修改某个子类实例继承的的引用类型属性，不会影响到所有的子类实例</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child2&#39;, age: 233}</span>

<span class="token comment">// 缺点：无法继承到父类原型上的属性和方法</span>
<span class="token comment">// child1.protoMethod() // 报错</span>
<span class="token comment">// console.log(child1.protoValue) // undefined</span>
</code></pre></div><p>优点：</p><ol><li>避免父类引用类型属性被所有实例共享</li><li>子类可以向父类构造函数传参</li></ol><p>缺点：</p><ol><li>只能继承父类构造函数的属性和方法，不能继承原型链上的属性和方法</li><li>方法定义在构造函数中，每个子类实例都含有父类函数副本，无法实现父类函数复用</li></ol><h2 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h2><p>将原型链继承与构造函数继承组合使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parentValue <span class="token operator">=</span> <span class="token string">&#39;parentValue&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">parentMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>protoValue <span class="token operator">=</span> <span class="token string">&#39;protoValue&#39;</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">protoMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>protoValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承父类构造函数的属性和方法</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childValue <span class="token operator">=</span> <span class="token string">&#39;childValue&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 继承原型链上的属性和方法</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child1&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child2&#39;</span><span class="token punctuation">,</span> <span class="token number">233</span><span class="token punctuation">)</span>
<span class="token comment">// 可以继承父类构造函数的属性和方法，且可枚举</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, childValue: &#39;childValue&#39;, parentMethod: ƒ}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, childValue: &#39;childValue&#39;, parentMethod: ƒ}</span>

<span class="token comment">// 避免父类的引用类型属性被所有子类实例共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child2&#39;, age: 233}</span>

<span class="token comment">// 可以继承到父类原型链上的属性和方法，但不可枚举</span>
child1<span class="token punctuation">.</span><span class="token function">protoMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// protoValue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>protoValue<span class="token punctuation">)</span> <span class="token comment">// &#39;protoValue&#39;</span>
</code></pre></div><p>优点：可以继承父类构造函数和原型链上的属性、方法</p><p>缺点：组合继承会调用两次父类构造函数，实例中会存在两份属性、方法</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220529003154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="原型式继承" tabindex="-1"><a class="header-anchor" href="#原型式继承" aria-hidden="true">#</a> 原型式继承</h2><p>对对象的浅拷贝，有三种等价方法，原型式继承的缺点与原型链继承是相同的</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">parentValue</span><span class="token operator">:</span> <span class="token string">&#39;parentValue&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">parentMethod</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.临时构造函数</span>
<span class="token keyword">function</span> <span class="token function">copyObject1</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 缺点1：不能向父类传参</span>
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token function">copyObject1</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>

<span class="token comment">// 2.Object.setPrototypeOf</span>
<span class="token keyword">function</span> <span class="token function">copyObject2</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>newObj<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
  <span class="token keyword">return</span> newObj
<span class="token punctuation">}</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token function">copyObject2</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>

<span class="token comment">// 3.Object.create()</span>
<span class="token keyword">let</span> child3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>

<span class="token comment">// 可以继承到父类的属性和方法，但不可枚举</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Fn {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">)</span> <span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child3<span class="token punctuation">)</span> <span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;parent&#39;, age: 23 }</span>
child1<span class="token punctuation">.</span><span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parentValue</span>

<span class="token comment">// 缺点2：父类引用类型属性被所有子类共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;parent&#39;, age: 23, address: &#39;Earth&#39;}</span>
</code></pre></div><p>优点：父类方法可复用</p><p>缺点：</p><ol><li>不能给父类构造函数传参</li><li>父类的引用属性会被所有子类实例共享</li></ol><h2 id="寄生式继承" tabindex="-1"><a class="header-anchor" href="#寄生式继承" aria-hidden="true">#</a> 寄生式继承</h2><p>结合原型类继承和工厂模式：创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">copyObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createChild</span><span class="token punctuation">(</span><span class="token parameter">original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 工厂函数</span>
  <span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span>
  clone<span class="token punctuation">.</span><span class="token function-variable function">parentMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> clone
<span class="token punctuation">}</span>

<span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">parentValue</span><span class="token operator">:</span> <span class="token string">&#39;parentValue&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token function">createChild</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token function">createChild</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Fn {parentMethod: ƒ}</span>
child1<span class="token punctuation">.</span><span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parentValue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;parent&#39;, age: 23}</span>

<span class="token comment">// 父类的引用属性会被所有子类实例共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
</code></pre></div><p>缺点：</p><ol><li>无法实现父类函数复用</li><li>父类的引用属性会被所有子类实例共享</li></ol><h2 id="寄生组合式继承" tabindex="-1"><a class="header-anchor" href="#寄生组合式继承" aria-hidden="true">#</a> 寄生组合式继承</h2><p>组合继承最大的缺点在于执行两次父类构造函数，寄生组合式继承解决了这个缺点</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// 创建对象</span>
  prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> child <span class="token comment">// 增强对象</span>
  child<span class="token punctuation">.</span>prototype <span class="token operator">=</span> prototype <span class="token comment">// 赋值对象</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parentValue <span class="token operator">=</span> <span class="token string">&#39;parentValue&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">parentMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>protoValue <span class="token operator">=</span> <span class="token string">&#39;protoValue&#39;</span>
<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">protoMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>protoValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承父类构造函数的属性和方法</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childValue <span class="token operator">=</span> <span class="token string">&#39;childValue&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">inheritPrototype</span><span class="token punctuation">(</span>Child<span class="token punctuation">,</span> Parent<span class="token punctuation">)</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">childProtoMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child1&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span> 
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child2&#39;</span><span class="token punctuation">,</span> <span class="token number">233</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, childValue: &#39;childValue&#39;, parentMethod: ƒ}</span>
child1<span class="token punctuation">.</span><span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parentValue</span>
child1<span class="token punctuation">.</span><span class="token function">protoMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// protoValue</span>
child1<span class="token punctuation">.</span><span class="token function">childProtoMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23}</span>

<span class="token comment">// 避免父类的引用类型属性被所有子类实例共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child2&#39;, age: 233}</span>

<span class="token comment">// 子类实例的构造函数是它本身</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Child</span>
</code></pre></div><p>优点：</p><ol><li>只调用一次父类构造函数</li><li>可以向父类型的构造函数中传递参数</li><li>父类方法可以复用</li><li>避免父类引用类型属性被所有子类实例共享</li></ol><h2 id="es6-继承" tabindex="-1"><a class="header-anchor" href="#es6-继承" aria-hidden="true">#</a> ES6 继承</h2><p><code>class + extends</code> 是实现继承的语法糖，基于寄生组合式继承实现</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parentValue <span class="token operator">=</span> <span class="token string">&#39;parentValue&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token comment">// 通过 super() 调用父类构造函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child1&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&#39;001&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&#39;child2&#39;</span><span class="token punctuation">,</span> <span class="token number">233</span><span class="token punctuation">,</span> <span class="token string">&#39;002&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 只有父类方法不可枚举</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span> <span class="token comment">// Child {parentValue: &#39;parentValue&#39;, info: {…}, id: &#39;001&#39;}</span>
child1<span class="token punctuation">.</span><span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// parentValue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23}</span>

<span class="token comment">// 避免父类的引用属性被所有子类实例共享</span>
child1<span class="token punctuation">.</span>info<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&#39;Earth&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child1&#39;, age: 23, address: &#39;Earth&#39;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>info<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;child2&#39;, age: 233}</span>

<span class="token comment">// 子类实例的构造函数是它本身</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Child</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,37),i={href:"https://juejin.cn/post/7054336238760755236",target:"_blank",rel:"noopener noreferrer"},r={href:"https://juejin.cn/post/6914216540468576263",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"JavaScript高级程序设计（第4版）",-1);function h(m,f){const s=o("ExternalLinkIcon");return c(),e("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[a("JavaScript进阶之继承"),p(s)])]),n("li",null,[n("a",r,[a("JS继承"),p(s)])]),d])])}const w=t(u,[["render",h],["__file","extend.html.vue"]]);export{w as default};
