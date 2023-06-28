import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as i}from"./app-60f9b323.js";const a={},t=i(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p><strong>状态管理模式</strong>，简单的讲，将多个组件共享的变量全部存储在一个对象里面。</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_O9G6Fh75bE.png" alt="vuex原理图解" tabindex="0" loading="lazy"><figcaption>vuex原理图解</figcaption></figure><h3 id="简易实现" tabindex="-1"><a class="header-anchor" href="#简易实现" aria-hidden="true">#</a> 简易实现</h3><p>所有的组件都继承Vue的源型。（如<code>Vue.prototype.shareObj = shareObj</code>即所有的组件都可访问该变量）这样也可以实现状态管理功能，但是缺乏响应式。</p><h3 id="需要管理的状态" tabindex="-1"><a class="header-anchor" href="#需要管理的状态" aria-hidden="true">#</a> 需要管理的状态</h3><p>多个界面共享的状态，如</p><ul><li>用户登录状态、名称、头像、地理位置等。</li><li>商品收藏、购物车</li></ul><h2 id="基本步骤" tabindex="-1"><a class="header-anchor" href="#基本步骤" aria-hidden="true">#</a> 基本步骤</h2><ul><li>安装插件</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>Vue.use(Vuex)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建对象</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

// 导出store独享
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>挂载Vue实例</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// main.js
import store from &#39;./store&#39;

new Vue({
  el: &#39;#app&#39;,
  store,
  render: h =&gt; h(App)
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><p>计数器案例</p><ol><li><p>创建store文件下的index.js</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import Vuex from &#39;vuex&#39;
import Vue from &#39;vue&#39;

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用Vuex的count</p><ul><li>获取：<code>$store.state.count</code></li><li>修改：<code>this.$store.commit(&#39;mutation中的方法&#39;)</code>通过提交mutation的方式，而非直接改变，因为Vuex可以更明确的追踪状态的变化</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ $store.state.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtraction<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">addition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">subtraction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;decrement&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><h3 id="state单一状态树" tabindex="-1"><a class="header-anchor" href="#state单一状态树" aria-hidden="true">#</a> State单一状态树</h3><ul><li>如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难。</li><li>所以Vuex也使用了单一状态树来管理应用层级的全部状态。</li><li>单一状态树能够让我们最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护。</li></ul><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h3><p>类似于Computed计算属性用法，多个组件需要调用经过变化的数据时使用。</p><ul><li>第一个参数：state</li><li>第二个参数：调用getter本身</li><li>通过返回函数来实现getter传参</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const store = new Vuex.Store({
  state: {
    students: [
      {id: 110, name: &#39;why&#39;, age: 18},
      {id: 111, name: &#39;kobe&#39;, age: 24},
      {id: 112, name: &#39;james&#39;, age: 30},
      {id: 113, name: &#39;curry&#39;, age: 10}
    ]
  },
  Getters: {
    // 接收state作为第一个参数
    more20age(state) {
      return state.students.filter(s =&gt; s.age &gt; 20)
    }
    // Getter 也可以接受其他 getter 作为第二个参数
    more20agecount(state, getters) {
      return getters.more20age.length
      // return state.students.filter(s =&gt; s.age &gt; 20).length
    }
    // 通过让 getter 返回一个函数，来实现给 getter 传参（使用：moreage(20)）
    moreage(state) {
      return function(age) {
        return state.students.filter(s =&gt; s.age &gt; age)
      }
      // return age =&gt; {
      //   return state.students.filter(s =&gt; s.age &gt; age)
      // }
    }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation </h2><h3 id="mutation状态更新" tabindex="-1"><a class="header-anchor" href="#mutation状态更新" aria-hidden="true">#</a> Mutation状态更新</h3><p>mutation的定义方式</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// store/index.js
mutations: {
  increment(state) {
    ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过mutation更新</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// App.vue
addition() {
  this.$store.commit(&quot;increment&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutation传递参数" tabindex="-1"><a class="header-anchor" href="#mutation传递参数" aria-hidden="true">#</a> Mutation传递参数</h3><p>传递的额外参数也称为mutation的载荷（<code>payload</code>）</p><ul><li>传递普通参数</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// store/index.js
mutation: {
  increment(state, count) {
    state.count += count
  }
}

// App.vue
addition() {
  this.$store.commit(&#39;increment&#39;, 5)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>传递对象参数</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// store/index.js
mutation: {
  addStudent(state, stu) {
    state.students.push(stu)
  }
}

// App.vue
addStudent() {
  const stu = { id: 1, name: Never, age: 24 }
  this.$store.commit(&#39;addStudent&#39;, stu)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutation提交风格" tabindex="-1"><a class="header-anchor" href="#mutation提交风格" aria-hidden="true">#</a> Mutation提交风格</h3><ul><li><p>普通方式：<code>this.$store.commit(&#39;incrementCount&#39;, count)</code></p></li><li><p>对象风格方式：将整个提交的对象作为payload使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// App.vue
this.$store.commit({
  type: &#39;incrementCount&#39;,
  count
})

// store/index.js
// 此时payload：{ type: &#39;incrementCount&#39;, count: count}
mutation: {
  incrementCount(state, payload) {
    state.count += payload.count
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2><ul><li>用来代替Mutation进行异步操作的，同样也支持payload。</li></ul><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><ul><li>通过dispatch分发到Action，再通过context进行commit提交到mutation。</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// App.vue
methods: {
  increment() {
    // 传递一个对象参数的payload 
    this.$store.dispatch(&#39;increment&#39;, {count: 5})
  }
}

// store/index.js
mutation: {
  increment(state, payload) {
    state.count += payload.count
  }
},
actions: {
  // 这里的参数是context上下文
  increment(context, payload) {
    setTimeout(() =&gt; {
      context.commit(&#39;increment&#39;, payload)
    }, 5000)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般将异步操作放在Promise中</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// store/index.js
actions: {
  increment(context) {
    return new Promise((resolve) =&gt; {
      setTimeout(() =&gt; {
        context.commit(&#39;increment&#39;)
        resolve()
      })
    })
  }
}

// App.vue
methods: {
  increment() {
    this.$store.dispatch(&#39;increment&#39;).then(res =&gt; {
      console.log(&quot;返回一个Actions成功的回调！&quot;)
    })
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module </h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const moduleA = {
  state: () =&gt; ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () =&gt; ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

$store.state.a.xxx // -&gt; moduleA 的状态
$store.state.b.xxx // -&gt; moduleB 的状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于模块内部的 getter，就会有第三个参数为根节点状态<code>rootState</code>：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const moduleA = {
  // ...
  getters: {
    fullname(state) {
      return state.name + &#39;aaa&#39;
    },
    fullname2(state, getters) {
      return getters.fullname + &#39;bbb&#39;
    },
    fullname3(state, getters, rootState) {
      // rootState.name为根节点中state中的name
      return getters.fullname2 + rootState.name
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目组织结构" tabindex="-1"><a class="header-anchor" href="#项目组织结构" aria-hidden="true">#</a> 项目组织结构</h2><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_1JtpvQ4cQ0.png" alt="项目组织结构" tabindex="0" loading="lazy"><figcaption>项目组织结构</figcaption></figure>`,52),l=[t];function d(u,c){return e(),s("div",null,l)}const o=n(a,[["render",d],["__file","vuex.html.vue"]]);export{o as default};
