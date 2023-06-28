import{_ as e}from"./HashMap-aff1b9db.js";import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as c,c as o,f as d}from"./app-60f9b323.js";const i={},r=d('<figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220909143854.png" alt="集合" tabindex="0" loading="lazy"><figcaption>集合</figcaption></figure><h4 id="list-有序" tabindex="-1"><a class="header-anchor" href="#list-有序" aria-hidden="true">#</a> List（有序）</h4><ul><li><code>Arraylist</code>： <code>Object[]</code> 数组，线程不安全，效率高；数组不够用时在原来的基础上扩展0.5倍；</li><li><code>Vector(旧)</code>： <code>Object[]</code> 数组，线程安全，效率低。数组不够用时在原来的基础上扩展1倍；</li><li><code>LinkedList</code>： 双向链表，线程不安全，支持存储 <code>NULL</code> 数据</li></ul><h4 id="set-都是唯一、线程不安全" tabindex="-1"><a class="header-anchor" href="#set-都是唯一、线程不安全" aria-hidden="true">#</a> Set（都是唯一、线程不安全）</h4><ul><li><code>HashSet</code>(无序）: 基于 <code>HashMap</code>实现的哈希表，底层采用 <code>HashMap</code>来保存元素</li><li><code>LinkedHashSet</code>(先进先出): <code>LinkedHashSet</code>是 <code>HashSet</code>的子类，并且其内部是通过 <code>LinkedHashMap</code>来实现的链表+ 哈希表。类似于 <code>LinkedHashMap</code>其内部是基于 <code>HashMap</code>实现一样</li><li><code>TreeSet</code>(有序): 红黑树(自平衡的排序二叉树)</li></ul><h4 id="queue-单端队列" tabindex="-1"><a class="header-anchor" href="#queue-单端队列" aria-hidden="true">#</a> Queue（单端队列）</h4><ul><li><code>PriorityQueue</code>: <code>Object[]</code> 数组来实现二叉堆</li><li><code>ArrayQueue</code>： <code>Object[]</code>可变长数组 + 双指针，不支持<code>Null</code>存储，可扩容</li><li><code>DeQueue(接口)</code>：双端队列</li></ul><h4 id="map-键值对获取" tabindex="-1"><a class="header-anchor" href="#map-键值对获取" aria-hidden="true">#</a> Map（键值对获取）</h4><ul><li><code>HashMap</code>： JDK1.8 之前由数组+链表组成的，数组是 <code>HashMap</code>的主体，链表则是主要为了解决哈希冲突而存在的（拉链法解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值时，将链表转化为红黑树，以减少搜索时间（不安全、无序、允许空Key和空Value！）</li><li><code>LinkedHashMap</code>：继承自 <code>HashMap</code>，由数组和链表或红黑树组成。另外，在此结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。</li><li><code>Hashtable(旧)</code>： 数组+链表组成的，线程安全(synchronized同一把锁），效率低（不允许Key为空！）</li><li><code>TreeMap</code>(有序)： 红黑树（自平衡的排序二叉树），实现了<code>NavigableMap(搜索功能)和SortedMap(键排序功能)</code></li><li><code>ConcurrentHashMap</code>：线程安全（1.7分段锁、1.8 synchronized + CAS乐观锁）</li></ul><h2 id="list-set-queue-map-四者的区别" tabindex="-1"><a class="header-anchor" href="#list-set-queue-map-四者的区别" aria-hidden="true">#</a> List, Set, Queue, Map 四者的区别？</h2><ul><li><code>List</code>(顺序): 存储的元素是有序的、可重复的。</li><li><code>Set</code>(去重): 存储的元素是无序的、不可重复的。</li><li><code>Queue</code>(队列先进先出): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。</li><li><code>Map</code>(键值对): 使用键值对（key-value）存储，key是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。</li></ul><h2 id="hashmap的原理" tabindex="-1"><a class="header-anchor" href="#hashmap的原理" aria-hidden="true">#</a> HashMap的原理？</h2><h4 id="jdk1-8之前-性能会稍差" tabindex="-1"><a class="header-anchor" href="#jdk1-8之前-性能会稍差" aria-hidden="true">#</a> JDK1.8之前:(性能会稍差)</h4><p>数组 + 链表 (链表散列），通过 key 的<code>hashCode</code>经过扰动函数(减少碰撞)处理过后得到 hash值再经过哈希算法获得数组索引位置；若存在元素，通过<code>equal</code>判定hash值和key值是否相同，相同则覆盖，不同则拉链法解决冲突（碰撞）。</p><h4 id="jdk1-8之后" tabindex="-1"><a class="header-anchor" href="#jdk1-8之后" aria-hidden="true">#</a> JDK1.8之后：</h4><p><code>Entry</code>数组 + 链表 +红黑树(更好解决冲突)，hash值和key值（通过<code>equal</code>比较后不同时）不同则：当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的总长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树，即链表长度&gt;8，总容量&gt;64）时，将链表转化为红黑树（动态平衡二叉树），以减少搜索时间。</p><figure><img src="'+e+'" alt="HashMap" tabindex="0" loading="lazy"><figcaption>HashMap</figcaption></figure><h2 id="currenthashmap的底层原理" tabindex="-1"><a class="header-anchor" href="#currenthashmap的底层原理" aria-hidden="true">#</a> CurrentHashMap的底层原理？</h2><h4 id="jdk1-7" tabindex="-1"><a class="header-anchor" href="#jdk1-7" aria-hidden="true">#</a> JDK1.7</h4><p>首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。（ConcurrentLevel=16）</p><p><code>ConcurrentHashMap</code>是由 <code>Segment</code> 数组结构和 <code>HashEntry</code>数组结构组成。</p><p>Segment 实现了 <code>ReentrantLock</code>,所以 <code>Segment</code> 是一种可重入锁，扮演锁的角色。<code>HashEntry</code> 用于存储键值对数据。</p><p>一个 <code>ConcurrentHashMap</code>里包含一个 <code>Segment</code> 数组。<code>Segment</code> 的结构和 <code>HashMap</code>类似，是一种数组和链表结构，一个 <code>Segment</code> 包含一个 <code>HashEntry</code>数组，每个 <code>HashEntry</code>是一个链表结构的元素，每个 <code>Segment</code> 守护着一个 <code>HashEntry</code>数组里的元素，当对 <code>HashEntry</code>数组的数据进行修改时，必须首先获得对应的 <code>Segment</code> 的锁。</p><h4 id="jdk1-8-cas无锁算法" tabindex="-1"><a class="header-anchor" href="#jdk1-8-cas无锁算法" aria-hidden="true">#</a> JDK1.8 (CAS无锁算法)</h4><p><code>ConcurrentHashMap</code>取消了 <code>Segment</code> 分段锁，采用 CAS 和 <code>synchronized</code> 来保证并发安全。数据结构跟 HashMap1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表转换为红黑树。</p><p><code>synchronized</code> 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，效率又提升 N 倍。</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/currentMap_f-25cDon5g.PNG" alt="ConcurrentHashMap1" tabindex="0" loading="lazy"><figcaption>ConcurrentHashMap1</figcaption></figure><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/2_sGwmqsZLei.PNG" alt="ConcurrentHashMap2" tabindex="0" loading="lazy"><figcaption>ConcurrentHashMap2</figcaption></figure><h2 id="collection实现比较的接口comparable-和-comparator的区别" tabindex="-1"><a class="header-anchor" href="#collection实现比较的接口comparable-和-comparator的区别" aria-hidden="true">#</a> Collection实现比较的接口Comparable 和 Comparator的区别？</h2><ul><li><code>comparable</code> 接口实际上是出自<code>java.lang</code>包它有一个<code>compareTo(Object obj)</code>方法用来排序</li><li><code>comparator</code>接口实际上是出自<code>java.util</code>包它有一个<code>compare(Object obj1, Object obj2)</code>方法用来排序</li></ul><h2 id="concurrenthashmap和hashtable的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap和hashtable的区别" aria-hidden="true">#</a> ConcurrentHashMap和Hashtable的区别</h2><h4 id="hashtable线程安全-使用-synchronized-来保证线程安全" tabindex="-1"><a class="header-anchor" href="#hashtable线程安全-使用-synchronized-来保证线程安全" aria-hidden="true">#</a> Hashtable线程安全:使用 <code>synchronized</code> 来保证线程安全</h4><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/1_caHVHB15Yk.PNG" alt="Hashtable" tabindex="0" loading="lazy"><figcaption>Hashtable</figcaption></figure><h4 id="concurrenthashmap线程安全" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap线程安全" aria-hidden="true">#</a> ConcurrentHashMap线程安全？</h4><p>JDK1.7： （分段锁）<code>Segment</code>数组(实现可重入锁ReentrantLocks) + <code>HashEntry</code>数组 + 链表</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/2_acz9dqi_R2.PNG" alt="ConcurrentHashMap1.7" tabindex="0" loading="lazy"><figcaption>ConcurrentHashMap1.7</figcaption></figure><p>JDK1.8：（<code>synchronized</code> 和 <code>CAS</code>）<code>Node</code> 数组+链表+红黑树</p><figure><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/3_OrqtMkCp2K.PNG" alt="ConcurrentHashMap1.8" tabindex="0" loading="lazy"><figcaption>ConcurrentHashMap1.8</figcaption></figure><h2 id="collection-和-collections-的区别" tabindex="-1"><a class="header-anchor" href="#collection-和-collections-的区别" aria-hidden="true">#</a> Collection 和 Collections 的区别?</h2><p>Collection：集合类上级接口，继承它的接口主要有List、Set、Queue</p><p>Collections：工具类，提供对集合的查找，替换，排序以及线程安全化</p><h2 id="arraylist扩容机制-简" tabindex="-1"><a class="header-anchor" href="#arraylist扩容机制-简" aria-hidden="true">#</a> ArrayList扩容机制（简）</h2><ul><li><code>add()</code></li><li><code>ensureCapacityInternal()</code></li><li><code>ensureExplicitCapacity()</code></li><li><code>grow()</code></li><li><code>hugeCapacity()</code></li></ul>',43),t=[r];function n(h,l){return c(),o("div",null,t)}const g=a(i,[["render",n],["__file","Java-collection.html.vue"]]);export{g as default};
