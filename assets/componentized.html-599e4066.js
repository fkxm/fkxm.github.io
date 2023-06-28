import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as i,a as n,b as s,e as p,f as c}from"./app-62caafbf.js";const u={},o=c(`<h2 id="注册组件基本步骤" tabindex="-1"><a class="header-anchor" href="#注册组件基本步骤" aria-hidden="true">#</a> 注册组件基本步骤</h2><ul><li>调用<code>Vue.extend()</code>方法创建组件构造器</li><li>调用<code>Vue.component()</code>方法注册组件</li><li>在Vue实例的作用范围内使用组件<code>&lt;my-cpn&gt;&lt;/my-cpn&gt;</code></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // Vue1.0
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--3.使用组件--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>  // 放入实例挂载
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  // 1.创建组件构造器对象
  const cpnC = Vue.extend({
    template: \`
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容, 哈哈哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容, 呵呵呵呵<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`
  })

  // 2.注册组件（全局组件，意味着可以在多个Vue的实例下面使用）
  Vue.component(&#39;my-cpn&#39;, cpnC)
  
  const app = new Vue({
    el: &#39;#app&#39;,
    components: {
      my-cpn: cpnC  // id为app实例下的局部组件
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0注册全局组件语法糖</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 直接注册组件（包含了Vue.extend的步骤）
  Vue.component(&#39;cpn1&#39;, {
    template: \`
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是标题1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容, 哈哈哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    \`
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue2.0注册局部组件语法糖</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  //const cpn = {
  //  template: \`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`,
  //  data() { return {} },
  //  methods: {}
  //}
  
  const app = new Vue({
      el: &#39;#app&#39;,
      components: {
        &#39;cpn2&#39;: {  // &#39;cpn&#39;: cpn
          template: \` 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是标题2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容, 呵呵呵<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      \`
        }
      }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件模板分离写法" tabindex="-1"><a class="header-anchor" href="#组件模板分离写法" aria-hidden="true">#</a> 组件模板分离写法</h2><ul><li>script</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 1.script标签, 注意:类型必须是text/x-template
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/x-template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token comment">// ...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>template</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 2.template标签
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
       // ... 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  
  // 1.全局组件写法
  Vue.component(&#39;cpn&#39;, {
    template: &#39;#cpn&#39;
  })
  
  // 2.局部组件写法
  new Vue({
    // ...
    components: {
      &#39;cpn&#39;:{
         template: &#39;#cpn&#39; 
       }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件数据存放" tabindex="-1"><a class="header-anchor" href="#组件数据存放" aria-hidden="true">#</a> 组件数据存放</h2><p>注意：</p><ul><li>子组件不能直接访问父组件（组件变量访问不到Vue实例的数据）</li><li>组件中的data必须是一个函数（<strong>面试题：</strong> 正因为data是函数,函数在每次执行时都会在栈空间创建新的变量，所以每个组件实例对象都有自己的data数据, 互不影响，每次函数return的都是一个新的对象；若是对象的话就会返回同一个内存地址，产生相互影响）</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 注册一个全局组件
  Vue.component(&#39;cpn&#39;, {
    template: &#39;#cpn&#39;,
    // 组件data不能是一个对象，必须是一个函数且返回一个对象
    // data: { // 不能这么写
    //   title: &#39;abc&#39;
    // },
    data() {
      return {
        title: &#39;abc&#39;
      }
    }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a> 父子组件通信</h2><ul><li><p>父传子：<code>props</code></p><p>注意：在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span> <span class="token attr-name">:cmessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:cmovies</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movies<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    // 每个组件必须只有一个根元素
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in cmovies<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{cmessage}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  const cpn = {
    template: &#39;#cpn&#39;,
    // props: [&#39;cmovies&#39;, &#39;cmessage&#39;],
    props: {
      // 1.类型限制
      // cmovies: Array,
      // cmessage: String,

      // 2.提供一些默认值default, 以及必传值required
      cmessage: {
        type: String,
        default: &#39;aaaaaaaa&#39;,
        required: true
      },
      // 类型是对象或者数组时, 默认值必须是一个函数
      cmovies: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
  
  const app = new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;你好啊&#39;,
      movies: [&#39;海王&#39;, &#39;海贼王&#39;, &#39;海尔兄弟&#39;]
    },
    components: {
      cpn
    }
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子传父：<code>$emit</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 父组件模板
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    // 不能写驼峰@itemClick，父组件cpnClick方法接收子组件发射过来的item-click自定义事件
    // 这里cpnClick没有参数会默认把item传过去，而不是event事件
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpn</span> <span class="token attr-name">@item-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpnClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  
  // 子组件模板
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in categories<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnClick(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{item.name}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  // 1.子组件
  const cpn = {
    template: &#39;#cpn&#39;,
    data() {
      return {
        categories: [
          {id: &#39;aaa&#39;, name: &#39;热门推荐&#39;},
          {id: &#39;bbb&#39;, name: &#39;手机数码&#39;},
          {id: &#39;ccc&#39;, name: &#39;家用家电&#39;},
          {id: &#39;ddd&#39;, name: &#39;电脑办公&#39;},
        ]
      }
    },
    methods: {
      btnClick(item) {
        // 发射事件: 自定义事件(将点击的按钮事件发送给父组件)
        this.$emit(&#39;item-click&#39;, item)
      }
    }
  }

  // 2.父组件
  const app = new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;你好啊&#39;
    },
    components: {
      cpn
    },
    methods: {
      cpnClick(item) {
        console.log(&#39;cpnClick&#39;, item);
      }
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="父子组件访问" tabindex="-1"><a class="header-anchor" href="#父子组件访问" aria-hidden="true">#</a> 父子组件访问</h2><ul><li><p>父访问子：<code>$children</code> <code>$refs(常用)</code></p><p><code>$children</code>的缺陷：</p><ul><li><p>通过<code>$children</code>访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。</p></li><li><p>但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。解决方法：依赖注入<code>provide</code> 和 <code>inject</code>。</p><p>示例：<code>provide() { return { getMap: this.getMap } } </code> <code>inject: [ &#39;getMap&#39; ]\`\`$refs</code>的使用：</p></li><li><p>用于明确获取其中的一个特定的组件。</p></li><li><p><code>$refs</code>和<code>ref</code>指令通常是一起使用的。</p></li><li><p>首先，我们通过<code>ref</code>给某一个子组件绑定一个特定的ID。</p></li><li><p>其次，通过<code>this.$refs.ID</code>就可以访问到该组件了。</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-cpn</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-cpn</span><span class="token punctuation">&gt;</span></span>
  
  // 父methods
  methods: {
    showRefsCpn() {
      // 打印第二个children-cpn组件的name
      console.log(this.$children[1].name)
      // 打印ref指定的children-cpn组件的name
      console.log(this.$refs.cpn.name)
    }
  },
  components: {
    child-cpn: {
      template: &#39;#child-cpn&#39;,
      data() {
        return {
          name: &#39;我是子组件的name&#39;
        }
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子访问父：<code>$parent</code> <code>$root</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>new Vue({
    el: &#39;#app&#39;,
    data: {
      message: &#39;你好啊&#39;
    },
    components: {
      cpn: {
        template: &#39;#cpn&#39;,
        data() {
          return {
            name: &#39;我是cpn组件的name&#39;
          }
        },
        components: {
          ccpn: {
            template: &#39;#ccpn&#39;,
            methods: {
              btnClick() {
                // 1.访问父组件$parent
                console.log(this.$parent);
                console.log(this.$parent.name);

                // 2.访问根组件$root
                console.log(this.$root);
                console.log(this.$root.message);
              }
            }}} } }})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h2>`,21),d=n("li",null,[n("p",null,[s("通过使用保留的 "),n("code",null,"<component>"),s(" 元素，动态地绑定到它的 "),n("code",null,"is"),s(" 特性，可以实现动态组件")])],-1),v=n("p",null,[n("code",null,"<keep-alive>"),s(" 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。"),n("code",null,"<keep-alive>"),s(" 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。")],-1),r={href:"https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"注意：",-1),k=n("ul",null,[n("li",null,[s("所有的组件都继承Vue的源型（如"),n("code",null,"Vue.prototype.shareObj=shareObj"),s("即所有的组件都可访问该变量）")])],-1);function b(g,h){const a=t("ExternalLinkIcon");return l(),i("div",null,[o,n("ul",null,[d,n("li",null,[v,n("p",null,[n("a",r,[s("https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html"),p(a)])])])]),m,k])}const x=e(u,[["render",b],["__file","componentized.html.vue"]]);export{x as default};
