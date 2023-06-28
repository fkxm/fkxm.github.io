import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,a as n,b as u,e as d,f as e}from"./app-62caafbf.js";const o={},c=e('<h2 id="路由2种模式" tabindex="-1"><a class="header-anchor" href="#路由2种模式" aria-hidden="true">#</a> 路由2种模式</h2><ul><li>URL的hash路径：带#号，本质上是改变window.location的href属性。</li><li>HTML5的history模式：不带#号，<code>history.pushState()</code>(可返回)、<code>history.replaceState()</code>(不可返回)、<code>history.go(-1)</code>、<code>history.back()</code>、<code>history.forward()</code></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',3),r={href:"https://router.vuejs.org/zh/",title:"官方文档",target:"_blank",rel:"noopener noreferrer"},p=e(`<p><code>npm install vue-router --save</code></p><h2 id="vue-router框架" tabindex="-1"><a class="header-anchor" href="#vue-router框架" aria-hidden="true">#</a> vue-router框架</h2><ul><li><code>Vue.user(VueRouter)</code>：底层执行插件的install方法</li><li>创建VueRouter对象</li><li>挂载到Vue实例上</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import VueRouter from &#39;vue-router&#39;
import Vue from &#39;vue&#39;

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: xxx
    component: xxx
  },
  {
    path: xxx
    component: xxx
  }
]

const router = new VueRouter({
  //routes: [
  //  ...
  //]
  // 配置路由和组件之间的应用关系
  routes
  // 配置history模式，默认是hash模式
  mode: &#39;history&#39;
})

// 3.将router对象传入到Vue实例
export default router

// 4.Vue实例中挂载router
// 实质：Vue.prototype.$router = router
new Vue({
  el: #app
  router
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置vue-router映射关系步骤" tabindex="-1"><a class="header-anchor" href="#配置vue-router映射关系步骤" aria-hidden="true">#</a> 配置vue-router映射关系步骤</h2><ul><li><p>第一步：创建路由组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import Home from &#39;../components/Home&#39;
import About from &#39;../components/About&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第二步：在VueRouter对象中配置路由映射：组件和路径映射关系</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const routes = [
  {
    // 重定向默认路径
    path: &#39;&#39;,
    redirect: /home
  },
  {
    path: /home,
    component: Home
  },
  {
    path: /about,
    component: About
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第三步：在App.vue主页使用路由<code>&lt;router-link&gt;</code>和<code>&lt;router-view&gt;</code></p><p><code>&lt;router-link&gt;</code>：vue-router中内置的组件，会被渲染成<code>&lt;a&gt;</code>标签</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>主页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    // 页面渲染占位
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="细节处理" tabindex="-1"><a class="header-anchor" href="#细节处理" aria-hidden="true">#</a> 细节处理</h2><ul><li><p>默认路由</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const routes = [
  {
    // 重定向默认路径
    path: &#39;&#39;,
    redirect: /home
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路由模式</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const router = new VueRouter({
  routes
  // 配置history模式，默认是hash模式
  mode: &#39;history&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>router-link属性</p><ul><li><p><code>to</code>：用于指定跳转的路径。</p></li><li><p><code>tag</code>：指定<code>&lt;router-link&gt;</code>之后渲染成什么组件，如button。</p></li><li><p><code>replace</code>：后退键返回不能返回到上一个页面中。</p></li><li><p><code>active-class</code>：当<code>&lt;router-link&gt;</code>对应的路由匹配成功时, 会自动给当前元素设置一个<code>router-link-active</code>的class。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const router = new VueRouter({
  ...
  linkActiveClass: &#39;active&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2><ul><li><code>/user/:id</code>：传递参数</li><li><code>this.$route.params.id</code>：js代码获得参数</li><li><code>{{ $route.params.id }}</code>：Mustache 获得参数</li></ul><h2 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h2><ul><li><p>params类型：如 <code>/router/123</code></p></li><li><p>query 类型，如 <code>/router?id=123</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span><span class="token punctuation">&gt;</span></span>传递参数
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ 
    path: &#39;/router/&#39; + 123, 
    query: { name: &#39;Nevermore&#39;, age: 22 }}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
// JS代码传递参数
method() {
  this.$router.push({
    path: &#39;/router/&#39; + 123, 
    query: { name: &#39;Nevermore&#39;, age: 22 }}&quot;
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="route和router区别" tabindex="-1"><a class="header-anchor" href="#route和router区别" aria-hidden="true">#</a> Route和Router区别</h2><p><code>$route</code>是处于活跃状态的路由对象，可以获取name、path、query、params等（获取url传过来的参数<code>this.$route.params.userId</code>）</p><p><code>$router</code>是 VueRouter的实例对象，想要导航到不同URL，则使用$router.push方法（可以通过代码跳转路由）</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>ButtonClick() {
  this.$router.push(&#39;/home&#39;)
  this.$router.replace(&#39;/home&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h2><p>组件被使用的时候，才加载</p><p>原来：<code>import Home from &#39;../components/Home&#39;</code></p><p>懒加载：<code>const Home = () ⇒ import(../components/Home)</code></p><h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h2><ul><li><code>children：[ ... ]</code></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// index.js
{
  path: &#39;/home&#39;,
  component: Home,
  children: [
    {
      path: &#39;&#39;,
      redirect: &#39;news&#39;
    },
    {
      path: &#39;news&#39;,
      component: HomeNews
    },
    {
      path: &#39;message&#39;,
      component: HomeMessage
    }
  ]
}
// Home.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局导航守卫" tabindex="-1"><a class="header-anchor" href="#全局导航守卫" aria-hidden="true">#</a> 全局导航守卫</h2><p><code>router.beforeEach</code></p><ul><li><code>to：Route</code>：即将要进入的目标的路由对象。</li><li><code>from：Route</code>：当前导航即将要离开的路由对象。</li><li><code>next：Function</code>：调用该方法后, 才能进入下一个钩子。 <ul><li><code>next()</code>：进行下一个钩子函数。</li><li><code>next(false)</code>：中断当前导航。</li><li><code>next(&#39;/&#39;)</code>：若未登录，跳转到登录页面。</li><li><code>next(error)</code>：传入error，导航被终止并将该错误传递给<code>router.onError()</code></li></ul></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// index.js
{
  path: &#39;/home&#39;,
  component: Home,
  // 描述数据的数据
  meta: {
    title: &#39;首页&#39;
  }
}

// 前置守卫
router.beforeEach((to, from, next) =&gt; {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // next必须调用
  next()
})

// 后置钩子（钩子=回调）
router.afterEach((to, from) =&gt; {
  console.log(&#39;-----&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由独享守卫" tabindex="-1"><a class="header-anchor" href="#路由独享守卫" aria-hidden="true">#</a> 路由独享守卫</h2><ul><li>路由配置上定义<code>beforeEnter</code> 守卫。</li></ul><h2 id="组件内守卫" tabindex="-1"><a class="header-anchor" href="#组件内守卫" aria-hidden="true">#</a> 组件内守卫</h2><ul><li>在路由组件内定义<code>beforeRouteEnter</code>、<code>beforeRouteUpdate</code>、<code>beforeRouteLeave</code>守卫。</li></ul><h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> Keep-alive</h2><p>概念：是Vue内置的一个组件，可以使被包含的组件保留状态（缓存起来），或避免重新污染。</p><ul><li>include：只有匹配的组件会被缓存。</li><li>exclude：任何匹配的组件都不会被缓存。</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 排除的属性为组件中定义的name, 所有的路径匹配到的视图组件都会被缓存
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">exclude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Profile,User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期钩子" tabindex="-1"><a class="header-anchor" href="#生命周期钩子" aria-hidden="true">#</a> 生命周期钩子</h2><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/image_NgmagdGKqy.png" alt="生命周期" tabindex="0" loading="lazy"><figcaption>生命周期</figcaption></figure>`,37);function v(m,b){const a=i("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[n("a",r,[u("官方文档"),d(a)])]),p])}const g=s(o,[["render",v],["__file","vue-router.html.vue"]]);export{g as default};
