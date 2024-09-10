

# 课程介绍



> [OpenResty 从入门到实战](https://time.geekbang.org/column/intro/100028301)

![image-20240903195031991](OpenResty从入门到实战.assets/image-20240903195031991.png)

<img src="OpenResty从入门到实战.assets/4dce464099b7d47a8249602ce7a9bb20.jpg" alt="img" style="zoom:50%;" />



## 一些资料

官网： https://openresty.org/cn/installation.html

OpenResty 在 GitHub 的  [项目主页](https://github.com/openresty/)

## 一些基础介绍

### perl 语言

Perl（Practical Extraction and Reporting Language）是一种通用的脚本编程语言，由Larry Wall于1987年创建。Perl的设计目标是通过简洁的语法和强大的文本处理能力来提供一种实用的工具，用于文本处理、系统管理、网络编程、图形界面开发等各种任务。

Perl具有许多特性，使其成为一种灵活且功能强大的编程语言：

1. 文本处理能力：Perl在处理文本和字符串方面非常强大，提供了丰富的正则表达式支持和内置的文本处理函数，使得处理和转换文本数据变得非常方便。
2. 多用途：Perl可以用于各种任务，包括系统管理、日志分析、网络编程、Web开发、数据库操作等。它具有广泛的模块库，可以轻松地扩展其功能。
3. 跨平台：Perl可以在多个操作系统上运行，包括Unix/Linux、Windows、Mac等。
4. 高级特性：Perl支持面向对象编程（OOP），具有异常处理、模块化、动态类型等高级特性。
5. CPAN：CPAN（Comprehensive Perl Archive Network）是Perl社区的官方模块库，提供了大量的可重用模块，可以帮助开发人员快速构建复杂的应用程序。









# 开篇词 | OpenResty，为你打开高性能开发的大门

​		你好，我是温铭，OpenResty 软件基金会主席，曾任某开源商业公司合伙人，前 360 开源技术委员会委员，在互联网安全公司工作了 10 年，负责开发过云查杀、反钓鱼和企业安全产品。接下来的几个月，我会带着你系统地学习一下 OpenResty。



## 为什么学习 OpenResty

为什么学习 OpenResty，这是开篇的第一个问题。我们正身处技术日新月异的时代，经常听到周围的工程师开玩笑说，学不动了。人的精力有限，选择学习某个技术都会有机会成本。最好的选择，是从你工作中涉及到的部分出发，学以致用。



对于服务端工程师来说，如果你的工作中涉及到 NGINX、高性能、高并发、动态控制、性能测试和分析等，那么不管开发语言和平台是什么，这门 OpenResty 课程都会让你有所裨益。如果你之前没有接触过 OpenResty，我确信它会给你打开另外一个服务端世界的大门。



OpenResty 是一个兼具开发效率和性能的服务端开发平台，**虽然它基于 NGINX 实现，但其适用范围，早已远远超出反向代理和负载均衡**。



**它的核心是基于 NGINX 的一个 C 模块（lua-nginx-module）**，该模块将 LuaJIT 嵌入到 NGINX 服务器中，并对外提供一套完整的 Lua API，透明地支持非阻塞 I/O，提供了轻量级线程、定时器等高级抽象。同时，围绕这个模块，OpenResty 构建了一套完备的测试框架、调试技术以及由 Lua 实现的周边功能库。



你可以用 Lua 语言来进行字符串和数值运算、查询数据库、发送 HTTP 请求、执行定时任务、调用外部命令等，还可以用 FFI 的方式调用外部 C 函数。这基本上可以满足服务端开发需要的所有功能。

掌握好了 OpenResty，你就可以同时拥有脚本语言的开发效率和迭代速度，以及 NGINX C 模块的高并发和高性能优势。





## 我与 OpenResty 的渊源

说了这么多 OpenResty 的特点，我又是怎样与它结缘的呢？其实，我是在 2012 年开始接触 OpenResty 的，那会儿我正在为一个新的系统做技术选型，作为一个 Python 的忠实粉丝，我不喜欢 NGINX C 模块的艰涩，却希望得到它的高性能，鱼与熊掌想兼得。该怎么办呢？



经过一番搜寻后，我发现了 Python 社区“大妈” ZQ 的一篇介绍 OpenResty 的文章，可以说是如获至宝。不过，兴奋只持续了很短的时间，因为之后的我，就像是无头苍蝇一样，开始在黑暗中摸索着缓慢前行。踩了数不清的坑后，我才真正拿下了 OpenResty。



和很多工程师不同的是，我喜欢写文章，在大学期间就一直维护着自己的技术博客。有一天晚上加班时，我发现身边一位工程师在用 GitHub 记录 ELK 的使用心得，并发布到了 **GitBook** 上。原来 GitHub 还可以开源书籍，而不只是代码！



我一下子就被点燃了，当晚就列出了**《OpenResty 最佳实践》**的目录，并开始“鼓动”周围的工程师加入。我们从未宣传过这个开源项目，但它慢慢变成了 OpenResty 入门者的最佳伙伴。



不过，在加入 OpenResty Inc. 后，我才逐渐发现，能写出正确的 OpenResty 代码并避免常见的坑，和写出高性能、优质的 OpenResty 代码之间，还相差了十万八千里。**而跨越这个巨大鸿沟的法宝零件，散落在 OpenResty 开源项目的源码、文档、issue、PR、幻灯片、邮件列表中，需要你把它们串联成真正的法宝——一个完整的学习体系和知识图谱**。



那如何才能体系化学习 OpenResty 呢？在 OpenResty 的技术交流群里面，很多工程师都曾经有过这样的困惑。



事实上，OpenResty 的学习资料还比较少，官方只有 API 文档，并没有提供入门和进阶的文档，而网上能找到的资料也不够系统。可以说，绝大部分的 OpenResty 使用者都是在摸着石头过河，过程很痛苦。



因此，我与极客时间合作了这个专栏，目的很明确，就是让你轻松快速地入门，并给你描绘出 OpenResty 的全貌，帮你建立知识体系，带你真正掌握 OpenResty 这款开发利器。





## 学习这个专栏需要什么基础？

OpenResty 是在 **NGINX 和 LuaJIT 的基础**上搭建的，所以我们肯定需要 NGINX 和 LuaJIT 的基础知识。



但你只需要很少的 NGINX 知识，就足够开始 OpenResty 之旅了。少到什么程度呢？涉及到的 NGINX 知识，我只用一节课就介绍完了。即使你完全没有接触过 NGINX，也可以跟着课程的节奏，逐步学习 OpenResty。



要知道，OpenResty 并不等同于 NGINX，OpenResty 这个项目的目的之一，就是让你感知不到 NGINX 的存在。



而从编程语言来看，Lua 是一种很容易理解的语言，你只要能够看懂它的代码，就可以完成本专栏的学习，并不需要能够独立写出复杂的 Lua 代码。同样的，我也会花少数几节课的时间，带你入门 Lua，达到 OpenResty 的使用水准。



## 实战中来，到实战中去

实践出真知，这句话用在互联网技术的学习上很恰当。



和理论偏多的书籍不同，专栏的形式本身更偏重于实战。专栏中出现的不少代码，都源自开源 OpenResty 的测试案例，以及实际的开源项目。引用这些实际案例，就是希望你在入门之初，就能接触到最优秀的代码，了解到最真实的使用场景。



同时，我还会在专栏文章中，穿插多个视频课程。视频课的内容，都取自真实开源项目的功能点和 PR。通过视频，你会亲眼看到，刚刚学到的知识是如何在实际中使用的。



专栏最后的实战部分，则是我们的真实“战场”。我会带你一起，用 OpenResty 从零搭建一个微服务 API 网关。根据我们在社区中的统计，接近一半的 OpenResty 使用者，都把 OpenResty 用在 API 网关的开发上，Kong 和 orange 则是 OpenResty 领域中最流行的两个开源网关项目。你想自己从头搭建一个更简单、更高性能的 API 网关吗？一起来吧。



从实际的开源项目中学习，再到实际的开源项目中去实战，将实战融入完整的知识体系，这便是我的教学理念，希望你喜欢这种方式。



万尺高楼平地起，接下来，我会和你一起来逐步掌握 OpenResty，Enjoy！



# 入门篇

## 01 | 初探OpenResty的三大特性

### OpenResty 的发展

OpenResty 并不像其他的开发语言一样从零开始搭建，而是**基于成熟的开源组件——NGINX 和 LuaJIT**。

OpenResty 诞生于 2007 年，不过，它的**第一个版本并没有选择 Lua，而是用了 Perl**，这跟作者**章亦春**的技术偏好有很大关系。



但 Perl 的性能远远不能达到要求，于是，在第二个版本中，Perl 就被 Lua 给替换了。 不过，**在 OpenResty 官方的项目中，Perl 依然占据着重要的角色，OpenResty 工程化方面都是用 Perl 来构建，比如测试框架、Linter、CLI 等**，后面我们也会逐步介绍。



后来，章亦春离开了淘宝，加入了美国的 CDN 公司 Cloudflare。因为 OpenResty 高性能和动态的优势很适合 CDN 的业务需求，很快， OpenResty 就成为 CDN 的技术标准。 通过丰富的 lua-resty 库，OpenResty 开始逐渐摆脱 NGINX 的影子，形成自己的生态体系，在 API 网关、**软 WAF（软件 Web 应用程序防火墙（Web Application Firewall）** 等领域被广泛使用。



其实，我经常说，OpenResty 是一个被广泛使用的技术，但它并不能算得上是热门技术，这听上去有点矛盾，到底什么意思呢？

说它应用广，是因为 OpenResty 现在是全球排名第五的 Web 服务器。我们经常用到的 **12306 的余票查询功能，或者是京东的商品详情页**，这些高流量的背后，其实都是 OpenResty 在默默地提供服务。



说它并不热门，那是因为使用 OpenResty 来构建业务系统的比例并不高。使用者大都用 OpenResty 来处理入口流量，并没有深入到业务里面去，自然，对于 OpenResty 的使用也是浅尝辄止，满足当前的需求就可以了。这当然也与 OpenResty 没有像 Java、Python 那样有成熟的 Web 框架和生态有关。



说了这么多，接下来，我重点来介绍下，OpenResty 这个开源项目值得称道和学习的几个地方。





### OpenResty 的三大特性

#### 详尽的文档和测试用例

没错，文档和测试是判断开源项目是否靠谱的关键指标，甚至是排在代码质量和性能之前的。

OpenResty 的文档非常详细，作者把每一个需要注意的点都写在了文档中。绝大部分时候，我们只需要仔细查看文档，就能解决遇到的问题，而不用谷歌搜索或者是跟踪到源码中。为了方便起见，OpenResty 还自带了一个命令行工具`restydoc`，专门用来帮助你通过 shell 查看文档，避免编码过程被打断。



不过，文档中只会有一两个通用的代码片段，并没有完整和复杂的示例，到哪里可以找到这样的例子呢？

对于 OpenResty 来说，自然是`/t`目录，它里面就是所有的测试案例。每一个测试案例都包含完整的 NGINX 配置和 Lua 代码，以及测试的输入数据和预期的输出数据。不过，OpenResty 使用的测试框架，与其他断言风格的测试框架完全不同，后面我会用专门章节来做介绍。



#### 同步非阻塞

协程，是很多脚本语言为了提升性能，在近几年新增的特性。但它们实现得并不完美，有些是**语法糖**，有些还需要显式的关键字声明。



OpenResty 则没有历史包袱，在诞生之初就支持了协程，并基于此实现了**同步非阻塞**的编程模式。这一点是很重要的，毕竟，程序员也是人，代码应该更符合人的思维习惯。显式的回调和异步关键字会打断思路，也给调试带来了困难。



这里我解释一下，什么是同步非阻塞。先说同步，这个很简单，就是按照代码来顺序执行。比如下面这段伪码：

```lua
local res, err  = query-mysql(sql)
local value, err = query-redis(key)
```

在同一请求连接中，如果要等 MySQL 的查询结果返回后，才能继续去查询 Redis，那就是同步；如果不用等 MySQL 的返回，就能继续往下走，去查询 Redis，那就是异步。对于 OpenResty 来说，绝大部分都是同步操作，只有 `ngx.timer` 这种后台定时器相关的 API，才是异步操作。



再来说说非阻塞，这是一个很容易和“异步”混淆的概念。**这里我们说的“阻塞”，特指阻塞操作系统线程**。我们继续看上面的例子，假设查询 MySQL 需要 1s 的时间，如果在这 1s 内，操作系统的资源（CPU）是空闲着并傻傻地等待返回，那就是阻塞；如果 CPU 趁机去处理其他连接的请求，那就是非阻塞。非阻塞也是 C10K（"Concurrent 10,000 Connections）、C100K 这些高并发能够实现的关键。



同步非阻塞这个概念很重要，建议你仔细琢磨一下。我认为，这一概念最好不要通过类比来理解，因为不恰当的类比，很可能把你搞得更糊涂。

在 OpenResty 中，上面的伪码就可以直接实现同步非阻塞，而不用任何显式的关键字。这里也再次体现了，让开发者用起来更简单，是 OpenResty 的理念之一。



#### 动态

OpenResty 有一个非常大的优势，并且还没有被充分挖掘，就是它的**动态**。



传统的 Web 服务器，比如 NGINX，如果发生任何的变动，都需要你去修改磁盘上的配置文件，然后重新加载才能生效，这也是因为它们并没有提供 API，来控制运行时的行为。

所以，在需要频繁变动的微服务领域，NGINX 虽然有多次尝试，但毫无建树。而**异军突起的 Envoy， 正是凭着 xDS 这种动态控制的 API**，大有对 NGINX 造成降维攻击的威胁。



和 NGINX 、 Envoy 不同的是，OpenResty 是由脚本语言 Lua 来控制逻辑的，而动态，便是 Lua 天生的优势。通过 OpenResty 中 lua-nginx-module 模块中提供的 Lua API，我们可以动态地控制路由、上游、SSL 证书、请求、响应等。甚至更进一步，你可以在不重启 OpenResty 的前提下，修改业务的处理逻辑，并不局限于 OpenResty 提供的 Lua API。



这里有一个很合适的类比，可以帮你理解上面关于动态的说明。你可以把 Web 服务器当做是一个正在高速公路上飞驰的汽车，NGINX 需要停车才能更换轮胎，更换车漆颜色；Envoy 可以一边跑一边换轮胎和颜色；而 OpenResty 除了具备前者能力外，还可以在不停车的情况下，直接把汽车从 SUV 变成跑车。



显然，掌握这种“逆天”的能力后，OpenResty 的能力圈和想象力就扩展到了其他领域，比如  Serverless 和边缘计算等。





### 你学习的重点在哪里？

讲了这么多 OpenResty 的重点特性，你又该怎么学呢？我认为，学习需要抓重点，围绕主线来展开，而不是眉毛胡子一把抓，这样，你才能构建出脉络清晰的知识体系。

要知道，不管多么全面的课程，都不可能覆盖所有问题，更不能直接帮你解决线上的每个 bug 和异常。

回到 OpenResty 的学习，在我看来，想要学好 OpenResty，你必须理解下面 8 个重点：

- 同步非阻塞的编程模式；
- 不同阶段的作用；
- LuaJIT 和 Lua 的不同之处；
- OpenResty API 和周边库；
- 协程和 cosocket；
- 单元测试框架和性能测试工具；
- 火焰图和周边工具链；
- 性能优化。

这些内容正是我们学习的重点，在专栏的各个模块中我都会分别讲到。在学习的过程中，我希望你能举一反三，并且根据自己的兴趣点和背景，有针对性地深入阅读某些章节。



如果你是 OpenResty 的初学者，那么你可以完全跟着专栏的进度，在自己的环境中安装 OpenResty，运行并修改示例代码。要记住，你的重点在于构建 OpenResty 的全貌，而非死磕某个知识点。当然，如果你有疑问的地方，随时可以在留言区提出，我会解答你的困惑。

如果你正在项目中使用 OpenResty，那就太棒了，相信你在阅读 LuaJIT 和性能优化章节时，一定会有更多的共鸣，更能应用到实际，在你的项目中看到优化前后的性能指标变化。

另外，如果你想要给 OpenResty 以及周边库贡献代码，那么最大的门槛，并不是对 OpenResty 原理的理解，或者是如何编写 NGINX C 模块的问题，而是测试案例和代码规范。我见过太多 OpenResty 的代码贡献者（也包括我自己），在一个 PR 上反复修改测试案例和代码风格，这其中有太多鲜为人知的潜规则。所以，专栏的代码规范和单元测试部分，就是为你准备的。

而如果你是测试工程师，即使你不使用 OpenResty，OpenResty 的测试框架和性能分析工具集，也必能给你非常多的启发。毕竟，OpenResty 在测试上面的投入和积累是相当深厚的。



## 02 | 如何写出你的“hello world”？

每当我们开始学习一个新的开发语言或者平台，都会从最简单的`hello world`开始，OpenResty 也不例外。让我们先跳过安装的步骤，直接看下，最简单的 OpenResty 程序是怎么编写和运行的：

```
$ resty -e "ngx.say('hello world')"
hello world
```

这应该是你见过的最简单的那种 hello world 代码写法，和 Python 类似：

```
$ python -c 'print("hello world")'
hello world
```



这背后其实是 OpenResty 哲学的一种体现，代码要足够简洁，也好让你打消“从入门到放弃“的念头。我们今天的内容，就专门围绕着这行代码来展开聊一聊。



上一节我们讲过，OpenResty 是基于 NGINX 的。那你现在是不是有一个疑问：为什么这里看不到 NGINX 的影子？别着急，我们加一行代码，看看 `resty`背后真正运行的是什么：

```
resty -e "ngx.say('hello world'); ngx.sleep(10)" &
```

我们加了一行 sleep 休眠的代码，让 resty 运行的程序打印出字符串后，并不退出。这样，我们就有机会一探究竟：

```
$ ps -ef | grep nginx
501 25468 25462   0  7:24下午 ttys000    0:00.01 /usr/local/Cellar/openresty/''1.13.6.2/nginx/sbin/nginx -p /tmp/resty_AfNwigQVOB/ -c conf/nginx.conf
```

终于看了熟悉的 NGINX 进程。看来，`resty` 本质上是启动了一个 NGINX 服务，那么`resty` 又是一个什么程序呢？我先卖个关子，咱后面再讲。

你的机器上可能还没有安装 OpenResty，所以，接下来，我们先回到开头跳过的安装步骤，把 OpenResty 安装完成后再继续。



### OpenResty 的安装

> 具体见 https://openresty.org/cn/installation.html 和 https://openresty.org/cn/linux-packages.html#tencentos-linux

```bash
# 新增仓库
wget https://openresty.org/package/tlinux/openresty.repo
sudo mv openresty.repo /etc/yum.repos.d/

# 更新索引
sudo yum check-update

# 然后你就可以像下面这样安装包了，比如说安装 openresty：
yum install -y openresty

# 如果想安装 resty 命令行工具，则像下面这样安装 openresty-resty 软件包：
yum install -y openresty-resty

# resty -v
resty 0.29
nginx version: openresty/1.25.3.2
built by gcc 8.5.0 20210514 (Red Hat 8.5.0-22) (GCC) 
built with OpenSSL 1.1.1w  11 Sep 2023
```



和其他的开源软件一样，OpenResty 的安装有多种方法，比如使用操作系统的包管理器、源码编译或者 docker 镜像。我推荐你优先使用 yum、apt-get、brew 这类**包管理系统**，来安装 OpenResty。这里我们使用 Mac 系统来做示例：

```
brew tap openresty/brew
brew install openresty
```



使用其他操作系统也是类似的，先要在包管理器中添加 OpenResty 的仓库地址，然后用包管理工具来安装。具体步骤，你可以参考[官方文档](https://openresty.org/en/linux-packages.html)。



不过，这看似简单的安装背后，其实有两个问题：



- 为什么我不推荐使用源码来安装呢？
- 为什么不能直接从操作系统的官方仓库安装，而是需要先设置另外一个仓库地址？



对于这两个问题，你不妨先自己想一想。



这里我想补充一句。在这门课程里面，我会在表象背后提出很多的“为什么”，希望你可以一边学新东西一边思考，结果是否正确并不重要。独立思考在技术领域也是稀缺的，由于每个人技术领域和深度的不同，在任何课程中老师都会不可避免地带有个人观点以及知识的错漏。只有在学习过程中多问几个为什么，融会贯通，才能逐渐形成自己的技术体系。



很多工程师都有源码的情节，多年前的我也是一样。在使用一个开源项目的时候，我总是希望能够自己手工从源码开始 configure 和 make，并修改一些编译参数，感觉这样做才能最适合这台机器的环境，才能把性能发挥到极致。



但现实并非如此，每次源码编译，我都会遇到各种诡异的环境问题，磕磕绊绊才能安装好。现在我想明白了，我们的最初目的其实是用开源项目来解决业务需求，不应该浪费时间和环境鏖战，更何况包管理器和容器技术，正是为了帮我们解决这些问题。

言归正传，给你说说我的看法。使用 OpenResty 源码安装，不仅仅步骤繁琐，需要自行解决 PCRE、OpenSSL 等外部依赖，而且还需要手工对 OpenSSL 打上对应版本的补丁。不然就会在处理 SSL session 时，带来功能上的缺失，比如像`ngx.sleep`这类会导致 yield 的 Lua API 就没法使用。这部分内容如果你还想深入了解，可以参考[[官方文档](https://github.com/openresty/lua-nginx-module#ssl_session_fetch_by_lua_block)]来获取更详细的信息。

从 OpenResty 自己维护的 OpenSSL [[打包脚本](https://github.com/openresty/openresty-packaging/blob/master/rpm/SPECS/openresty-openssl.spec)]中，就可以看到这些补丁。而在 OpenResty 升级 OpenSSL 版本时，都需要重新生成对应的补丁，并进行完整的回归测试。

```
Source0: https://www.openssl.org/source/openssl-%{version}.tar.gz

Patch0: https://raw.githubusercontent.com/openresty/openresty/master/patches/openssl-1.1.0d-sess_set_get_cb_yield.patch
Patch1: https://raw.githubusercontent.com/openresty/openresty/master/patches/openssl-1.1.0j-parallel_build_fix.patch

```

同时，我们可以看下 OpenResty 在 CentOS 中的[[打包脚本\]](https://github.com/openresty/openresty-packaging/blob/master/rpm/SPECS/openresty.spec)，看看是否还有其他隐藏的点：

```
BuildRequires: perl-File-Temp
BuildRequires: gcc, make, perl, systemtap-sdt-devel
BuildRequires: openresty-zlib-devel >= 1.2.11-3
BuildRequires: openresty-openssl-devel >= 1.1.0h-1
BuildRequires: openresty-pcre-devel >= 8.42-1
Requires: openresty-zlib >= 1.2.11-3
Requires: openresty-openssl >= 1.1.0h-1
Requires: openresty-pcre >= 8.42-1

```



从这里可以看出，OpenResty 不仅维护了自己的 OpenSSL 版本，还维护了自己的 zlib 和 PCRE 版本。不过后面两个只是调整了编译参数，并没有维护自己的补丁。



所以，综合这些因素，我不推荐你自行源码编译 OpenResty，除非你已经很清楚这些细节。

为什么不推荐源码安装，你现在应该已经很清楚了。

其实我们在回答第一个问题时，也顺带回答了第二个问题：为什么不能直接从操作系统的官方仓库安装，而是需要先设置另外一个仓库地址？

这因为，**官方仓库不愿意接受第三方维护的 OpenSSL、PCRE 和 zlib 包，这会导致其他使用者的困惑，不知道选用哪一个合适。另一方面，OpenResty 又需要指定版本的 OpenSSL、PCRE 库才能正常运行**，而系统默认自带的版本都比较旧。



### OpenResty CLI

安装完 OpenResty 后，默认就已经把 OpenResty 的 CLI：`resty` 安装好了。`resty`是个 1000 多行的 Perl 脚本，之前我们提到过，OpenResty 的周边工具都是 Perl 编写的，这个是由 OpenResty 作者的技术偏好决定的。

```
$ which resty
/usr/local/bin/resty
$ head -n 1 /usr/local/bin/resty
 #!/usr/bin/env perl
```



`resty` 的功能很强大，想了解完整的列表，你可以查看`resty -h`或者[[官方文档](https://github.com/openresty/resty-cli)]。下面，我挑两个有意思的功能介绍一下。

```bash
# resty --shdict='dogs 1m' -e 'local dict = ngx.shared.dogs
> dict:set("Tom", 56)
> print(dict:get("Tom"))'
56
```

先来看第一个例子。这个示例结合了 NGINX 配置和 Lua 代码，一起完成了一个共享内存字典的设置和查询。`dogs 1m` 是 NGINX 的一段配置，声明了一个共享内存空间，名字是 dogs，大小是 1m；在 Lua 代码中用字典的方式使用共享内存。另外还有`--http-include` 和 `--main-include`来设置 NGINX 配置文件。所以，上面的例子也可以写为：

```bash
# resty --http-conf 'lua_shared_dict dogs 1m;' -e 'local dict = ngx.shared.dogs
                               dict:set("Tom", 56)
                               print(dict:get("Tom"))'
56
```



OpenResty 世界中常用的调试工具，比如`gdb`、`valgrind`、`sysetmtap`和`Mozilla rr` ，也可以和 `resty` 一起配合使用，方便你平时的开发和测试。它们分别对应着 `resty` 不同的指令，内部的实现其实很简单，就是多套了一层命令行调用。我们以 valgrind 为例：

```bash
# resty --valgrind  -e "ngx.say('hello world'); "
==4007202== Memcheck, a memory error detector
==4007202== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.
==4007202== Using Valgrind-3.19.0 and LibVEX; rerun with -h for copyright info
==4007202== Command: /usr/local/openresty/nginx/sbin/nginx -g #\ -e\ 'ngx.say('hello\ world');\ ' -p /tmp/resty_DIsBMVnSPi/ -c conf/nginx.conf
==4007202== 
hello world
==4007202== 
==4007202== HEAP SUMMARY:
==4007202==     in use at exit: 45,670 bytes in 152 blocks
==4007202==   total heap usage: 4,824 allocs, 4,672 frees, 885,697 bytes allocated
==4007202== 
==4007202== LEAK SUMMARY:
==4007202==    definitely lost: 392 bytes in 1 blocks
==4007202==    indirectly lost: 16 bytes in 1 blocks
==4007202==      possibly lost: 128 bytes in 1 blocks
==4007202==    still reachable: 45,134 bytes in 149 blocks
==4007202==         suppressed: 0 bytes in 0 blocks
==4007202== Rerun with --leak-check=full to see details of leaked memory
==4007202== 
==4007202== For lists of detected and suppressed errors, rerun with: -s
==4007202== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)



# 原文的输出
ERROR: failed to run command "valgrind /usr/local/Cellar/openresty/1.13.6.2/nginx/sbin/nginx -p /tmp/resty_hTFRsFBhVl/ -c conf/nginx.conf": No such file or directory

```

在后面调试、测试和性能分析的章节，会涉及到这些工具的使用。它们不仅适用于 OpenResty 世界，也是服务端的通用工具，让我们循序渐进地来学习吧。



### 更正式的 hello world

最开始我们使用`resty`写的第一个 OpenResty 程序，没有 master 进程，也不会监听端口。下面，让我们写一个更正式的 hello world。

写出这样的 OpenResty 程序并不简单，你至少需要三步才能完成：

- 创建工作目录；
- 修改 NGINX 的配置文件，把 Lua 代码嵌入其中；
- 启动 OpenResty 服务。

我们先来创建工作目录。

```
mkdir geektime
cd geektime
mkdir logs/ conf/
```

下面是一个最简化的 `nginx.conf`，在根目录下新增 OpenResty 的`content_by_lua`指令，里面嵌入了`ngx.say`的代码：

```
events {
    worker_connections 1024;
}

http {
    server {
        listen 8080;
        location / {
            content_by_lua '
                ngx.say("hello, world")
            ';
        }
    }
}

```



请先确认下，是否已经把`openresty`加入到`PATH`环境中；然后，启动 OpenResty 服务就可以了：

```
openresty -p `pwd` -c conf/nginx.conf

==》对应进程
root     4011431       1  0 20:49 ?        00:00:00 nginx: master process openresty -p /data/geektime -c conf/nginx.conf
```

没有报错的话，OpenResty 的服务就已经成功启动了。你可以打开浏览器，或者使用 curl 命令，来查看结果的返回：

```
$ curl -i 127.0.0.1:8080
HTTP/1.1 200 OK
Server: openresty/1.13.6.2
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

hello, world

```

到这里，恭喜你，一个真正的 OpenResty 程序就完成了。

### 总结

让我们回顾下今天讲的内容。我们通过一行简单的 `hello, world` 代码，延展到 OpenResty 的安装和 CLI，并在最后启动了 OpenResty 进程，运行了一个真正的后端程序。



其中， `resty` 是我们后面会频繁使用到的命令行工具，课程中的演示代码都是用它来运行的，而不是启动后台的 OpenResty 服务。



更为重要的是，OpenResty 的背后隐藏了非常多的文化和技术细节，它就像漂浮在海面上的一座冰山。我希望能够通过这门课程，给你展示更全面、更立体的 OpenResty，而不仅仅是它对外暴露出来的 API。



### 思考

最后，我给你留一个作业题。我们现在的做法，是把 Lua 代码写在 NGINX 配置文件中。不过，如果代码越来越多，那代码的可读性和可维护性就无法保证了。

你有什么方法来解决这个问题吗？

> chatGPT

当 Lua 代码在 NGINX 配置文件中变得越来越多时，确实会影响代码的可读性和可维护性。为了解决这个问题，可以考虑以下方法：

1. 将 Lua 代码分离到独立的 Lua 脚本文件中：将 Lua 代码从 NGINX 配置文件中提取出来，放入独立的 Lua 脚本文件中。然后，通过 `content_by_lua_file` 或 `access_by_lua_file` 指令在 NGINX 配置文件中引用这些脚本文件。这样可以使代码更加清晰和易于维护。
2. 使用 Lua 模块：将常用的功能封装为可重用的 Lua 模块。这样，可以将代码逻辑分解为多个模块，每个模块负责不同的功能。然后，在 NGINX 配置文件中使用 `require` 指令引入这些模块，以便在 Lua 代码中使用。这种方式可以提高代码的可读性和可维护性，并促进代码的重用。
3. 使用 Lua 开发框架：考虑使用一些成熟的 Lua 开发框架，如 OpenResty。这些框架提供了更高级的抽象和功能，可以帮助组织和管理 Lua 代码。它们通常提供了路由、中间件、数据库访问等功能，使代码更加结构化和易于管理。
4. 使用注释和文档：无论代码是写在 NGINX 配置文件中还是独立的 Lua 脚本文件中，都应该使用注释来解释代码的逻辑和功能。此外，编写文档来描述代码的用途、输入输出等信息也是很有帮助的。这样可以提高代码的可读性，并帮助其他开发人员理解和维护代码。

综上所述，将 Lua 代码分离到独立的文件、使用模块化的设计、使用 Lua 开发框架以及添加注释和文档，都是提高代码可读性和可维护性的有效方法。选择适合你项目需求的方法，并根据实际情况进行调整和优化。





## 03 | 揪出隐藏在背后的那些子项目

先来揭晓上一节最后留下的思考题，如何把 Lua 代码从 nginx.conf 里面抽取出来，保持代码的可读性和可维护性呢？

操作其实很简单。

我们先在 geektime 的工作目录下，创建一个名为 lua 的目录，专门用来存放代码：

```bash
$ mkdir lua
$ cat lua/hello.lua
ngx.say("hello,new world")
```

然后修改 nginx.conf 的配置，把 content_by_lua_block 改为 content_by_lua_file：

```
pid logs/nginx.pid;
events {
  worker_connections 1024;
}

http {
  server {
    listen 8080;
    location / {
      content_by_lua_file lua/hello.lua;
      }
    }
  }

```

最后，重启 OpenResty 的服务就可以了：

```
$ sudo kill -HUP `cat logs/nginx.pid`
```

> - `kill`: 这是一个用于发送信号给进程的命令。在这个命令中，我们使用 `kill` 命令来发送信号给 Nginx 进程。
> - `-HUP`: 这是一个指定要发送的信号的选项。在这个命令中，我们使用 `-HUP` 选项来发送 HUP（Hang Up）信号给 Nginx 进程（是一种用于通知进程重新加载配置或重新启动的信号）。
> - `cat logs/nginx.pid`: 这是一个用于获取 Nginx 进程 ID（PID）的命令。在这个命令中，我们使用 `cat` 命令来读取 `logs/nginx.pid` 文件中的内容，该文件通常包含了 Nginx 进程的 PID。

你可以使用 curl ，验证是否返回了预期的结果。至于后面 Lua 代码的变更，你就可以直接修改 hello.lua 这个文件，而不是 nginx.conf 了。

```bash
# curl -i 127.0.0.1:18080
HTTP/1.1 200 OK
Server: openresty/1.25.3.2
Date: Mon, 09 Sep 2024 12:11:51 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

hello,new world
```



其实，在上面这个小例子里面，也有几个有趣的地方：

1. content_by_lua_file lua/hello.lua; 里面写的是相对路径，那么 OpenResty 是如何找到这个 Lua 文件的？（如何查找路径）
2. Lua 代码内容的变更，需要重启 OpenResty 服务才会生效，这样显然不方便调试，那么有没有什么即时生效的方法呢？（如何热更）
3. 如何把 lua 代码所在的文件夹，加入到 OpenResty 的查找路径中呢？

这几个问题，我鼓励你先自己思考一下，它们都可以在官方文档里面找到[答案](https://github.com/openresty/lua-nginx-module#content_by_lua_file)。这也是为什么，我一直强调文档的重要性。



接下来我们一起来解答。先看第一个问题。如果原本给出的是相对路径，那么 OpenResty 在启动时，会把 OpenResty 启动的命令行参数中的 -p PATH 作为前缀，将相对路径拼接为绝对路径。这样，自然就可以顺利找到 Lua 文件。



再来看第二个问题。Lua 代码在第一个请求时会被加载，并默认缓存起来。所以在你每次修改 Lua 源文件后，都必须重新加载 OpenResty 才会生效。其实，在 nginx.conf 中关闭 lua_code_cache 就能避免重新加载，这一点你可以自己试试看。不过，特别需要注意的是，这种方法**只能临时**用于开发和调试，如果是线上部署，一定要记得打开缓存，否则会非常影响性能。



最后一个问题，OpenResty 提供了 lua_package_path 指令，可以设置 Lua 模块的查找路径。针对上面的例子，我们可以把 lua_package_path 设置为 `$prefix/lua/?.lua;;`，其中，

- `$prefix`就是启动参数中的 -p PATH；
- `/lua/?.lua`表示 lua 目录下所有以 .lua 作为后缀的文件；
- 最后的两个分号，则代表内置的代码搜索路径。（？？）

### OpenResty 安装后的目录结构

了解完第一个 hello world 程序后，我们继续追根究底，来看下 OpenResty 自身安装完成后，它的目录结构是怎样的，以及里面包含哪些文件。



我们先通过 -V 选项，查看 OpenResty 安装到了哪一个目录。下面的这个结果，我省略了很多模块的编译参数，这些我们稍后再来补上：

```
$ openresty -V
nginx version: openresty/1.13.6.2
built by clang 10.0.0 (clang-1000.10.44.4)
built with OpenSSL 1.1.0h  27 Mar 2018
TLS SNI support enabled
configure arguments: --prefix=/usr/local/Cellar/openresty/1.13.6.2/nginx ...

```

我本地是通过 brew 安装的，所以目录是`/usr/local/Cellar/openresty/1.13.6.2/nginx` ，和你的本地环境很可能不同。这其中主要包含了 bin、luajit、lualib、nginx、pod 这几个子目录。理解这几个文件夹的含义很重要，可以帮我们更好地学习 OpenResty。接下来，我们逐个来看一下。

> 自己的安装目录是 /usr/local/openresty/nginx

```bash
# ll /usr/local/openresty
total 296
drwxr-xr-x.  2 root root   4096 Sep  5 20:32 bin
-rw-r--r--.  1 root root  22924 Jul 19 14:58 COPYRIGHT
drwxr-xr-x.  2 root root   4096 Mar 22  2023 lua
drwxr-xr-x.  6 root root   4096 Jul 19 14:58 luajit
drwxr-xr-x.  6 root root   4096 Sep  5 20:31 lualib
drwxr-xr-x. 11 root root   4096 Jul 19 14:58 nginx
drwxr-xr-x.  4 root root   4096 Sep  5 20:31 openssl111
drwxr-xr-x.  3 root root   4096 Sep  5 20:31 pcre
drwxr-xr-x. 47 root root   4096 Mar 22  2023 pod
-rw-r--r--.  1 root root 235463 Mar 22  2023 resty.index
drwxr-xr-x.  5 root root   4096 Mar 22  2023 site
drwxr-xr-x.  3 root root   4096 Sep  5 20:31 zlib
```



首先是最重要的 **bin 目录**（自己无bin目录）：

```
$ ll /usr/local/Cellar/openresty/1.13.6.2/bin
total 320
-r-xr-xr-x  1 ming  admin    19K  3 27 12:54 md2pod.pl
-r-xr-xr-x  1 ming  admin    15K  3 27 12:54 nginx-xml2pod
lrwxr-xr-x  1 ming  admin    19B  3 27 12:54 openresty -> ../nginx/sbin/nginx
-r-xr-xr-x  1 ming  admin    62K  3 27 12:54 opm
-r-xr-xr-x  1 ming  admin    29K  3 27 12:54 resty
-r-xr-xr-x  1 ming  admin    15K  3 27 12:54 restydoc
-r-xr-xr-x  1 ming  admin   8.3K  3 27 12:54 restydoc-index

```

这里面既有我们上一节中提到的 OpenResty CLI--- resty，也有最核心的可执行文件 openresty，它其实是 nginx 的一个软链接。

至于目录里面其他的一些工具，没有任何悬念，它们和 resty 一样，都是 Perl 脚本。



这段代码中的两个例子，分别查询了 OpenResty 的 API 和 NGINX 的指令。restydoc 这个工具，对服务端工程师的专注开发有很大帮助。



浏览完了 bin 目录，我们接着看下 **pod 目录**。先强调一点，这里的“pod”，和 k8s 里“pod”的概念完全没有关系。pod 是 Perl 里面的一种标记语言，用于给 Perl 的模块编写文档。pod 目录中存放的就是 OpenResty、 NGINX、lua-resty-*、LuaJIT 的文档， 这些就和刚才提到的 restydoc 联系在一起了。

```
# ll /usr/local/openresty/pod
total 180
drwxr-xr-x. 2 root root 4096 Mar 22  2023 array-var-nginx-module-0.05
drwxr-xr-x. 2 root root 4096 Mar 22  2023 drizzle-nginx-module-0.1.11
drwxr-xr-x. 2 root root 4096 Mar 22  2023 echo-nginx-module-0.62
......
```



接下来是熟悉的 nginx 和 luajit 这两个目录。这两个很好理解，主要存放  NGINX 和 LuaJIT 的可执行文件和依赖，是 OpenResty 的基石。很多人说 OpenResty 基于 Lua，这个说法其实并不准确，从上面我们可以看出， OpenResty 其实是基于 LuaJIT 的。

事实上，早期的 OpenResty 同时带有 Lua 和 LuaJIT，你可以通过编译选项，来决定使用 Lua 还是 LuaJIT。不过到了现在，Lua 逐渐被淘汰，就只支持更高性能的 LuaJIT 了。

```bash
# ll /usr/local/openresty/nginx/
total 36
drwx------. 2 nobody root 4096 Mar 22  2023 client_body_temp
drwxr-xr-x. 2 root   root 4096 Sep  5 20:31 conf
drwx------. 2 nobody root 4096 Mar 22  2023 fastcgi_temp
drwxr-xr-x. 2 root   root 4096 Sep  5 20:31 html
drwxr-xr-x. 2 root   root 4096 Jul 19 14:58 logs
drwx------. 2 nobody root 4096 Mar 22  2023 proxy_temp
drwxr-xr-x. 2 root   root 4096 Sep  5 20:31 sbin
drwx------. 2 nobody root 4096 Mar 22  2023 scgi_temp
drwx------. 2 nobody root 4096 Mar 22  2023 uwsgi_temp

# ll /usr/local/openresty/luajit/
total 16
drwxr-xr-x. 2 root root 4096 Sep  5 20:31 bin
drwxr-xr-x. 3 root root 4096 Jul 19 14:58 include
drwxr-xr-x. 4 root root 4096 Sep  5 20:31 lib
drwxr-xr-x. 6 root root 4096 Sep  5 20:31 share

# ll /usr/local/openresty/lualib/
total 64
-rwxr-xr-x. 1 root root 33352 Jul 19 14:58 cjson.so
-rwxr-xr-x. 1 root root  6112 Jul 19 14:58 librestysignal.so
drwxr-xr-x. 3 root root  4096 Sep  5 20:31 ngx
drwxr-xr-x. 2 root root  4096 Mar 22  2023 rds
drwxr-xr-x. 2 root root  4096 Sep  5 20:31 redis
drwxr-xr-x. 8 root root  4096 Sep  5 20:31 resty
-rw-r--r--. 1 root root  1409 Jul 19 14:58 tablepool.lua
```

事实上，早期的 OpenResty 同时带有 Lua 和 LuaJIT，你可以通过编译选项，来决定使用 Lua 还是 LuaJIT。不过到了现在，Lua 逐渐被淘汰，就只支持更高性能的 LuaJIT 了。

最后，我们看下 lualib 目录。它里面存放的是 OpenResty 中使用到的 Lua 库，主要分为 ngx 和 resty 两个子目录。

- 前者存放的是 [lua-resty-core](https://github.com/openresty/lua-resty-core/tree/master/lib/ngx) 这个官方项目中的 Lua 代码，里面都是基于 FFI 重新实现的 OpenResty API，后面我会用专门的文章来解释为什么要重新实现，这里你有个大概印象即可，不必深究。
- 而 resty 目录中存放的则是各种 lua-resty-* 项目包含的 Lua 代码，接下来我们会接触到。

按照我讲课的惯例，到这一步我会给出这些目录源头的出处。这也是开源项目的乐趣之一，如果你喜欢打破砂锅问到底，那你总发现更多好玩的东西。

下面是 OpenResty 在 CentOS 中的[打包脚本](https://github.com/openresty/openresty-packaging/blob/master/rpm/SPECS/openresty.spec#L218)，里面包含了上面提到的所有目录，你可以自己了解一下。

```bash
%files
%defattr(-,root,root,-)

/etc/init.d/%{name}
/usr/bin/%{name}
%{orprefix}/bin/openresty
%{orprefix}/site/lualib/
%{orprefix}/luajit/*
%{orprefix}/lualib/*
%{orprefix}/nginx/html/*
%{orprefix}/nginx/logs/
%{orprefix}/nginx/sbin/*
%{orprefix}/nginx/tapset/*
%config(noreplace) %{orprefix}/nginx/conf/*
%{orprefix}/COPYRIGHT
```



### OpenResty 项目概览

提到 OpenResty，你应该会想到 **lua-nginx-module**。没错，**这个 NGINX 的 C 模块确实是 OpenResty 的核心，但它并不等价于 OpenResty**。很多工程师都会把 OpenResty 叫做 ngx lua，有不少技术大会的分享和出版的书籍中也是用的这个叫法，这其实是不严谨的，也是 OpenResty 社区不提倡的。



下面我来讲讲为什么，以及 OpenResty 中除了 lua-nginx-module ，还有哪些其他的关联项目。

打开 OpenResty 在 GitHub 的  [项目主页](https://github.com/openresty/)，你可以看到 OpenResty 包含了 68 个公开的项目，大概分为以下 7 类, 下面我来分别简单介绍下，让你有个初步的印象，这样你后面学习起来也轻松一些。

#### **NGINX C 模块**

OpenResty 的项目命名都是有规范的，以 `*-nginx-module`命名的就是 NGINX 的 C 模块(core?)。

OpenResty 中一共包含了 20 多个 C 模块，我们在本节最开始使用的 openresty -V 中，也可以看到这些 C 模块：

```bash
$ openresty -V
nginx version: openresty/1.13.6.2
built by clang 10.0.0 (clang-1000.10.44.4)
built with OpenSSL 1.1.0h  27 Mar 2018
TLS SNI support enabled
configure arguments: --prefix=/usr/local/Cellar/openresty/1.13.6.2/nginx --with-cc-opt='-O2 -I/usr/local/include -I/usr/local/opt/pcre/include -I/usr/local/opt/openresty-openssl/include' --add-module=../ngx_devel_kit-0.3.0 --add-module=../echo-nginx-module-0.61 --add-module=../xss-nginx-module-0.06 --add-module=../ngx_coolkit-0.2rc3 --add-module=../set-misc-nginx-module-0.32 --add-module=../form-input-nginx-module-0.12 --add-module=../encrypted-session-nginx-module-0.08 --add-module=../srcache-nginx-module-0.31 --add-module=../ngx_lua-0.10.13 --add-module=../ngx_lua_upstream-0.07 --add-module=../headers-more-nginx-module-0.33 --add-module=../array-var-nginx-module-0.05 --add-module=../memc-nginx-module-0.19 --add-module=../redis2-nginx-module-0.15 --add-module=../redis-nginx-module-0.3.7 --add-module=../ngx_stream_lua-0.0.5 --with-ld-opt='-Wl,-rpath,/usr/local/Cellar/openresty/1.13.6.2/luajit/lib -L/usr/local/lib -L/usr/local/opt/pcre/lib -L/usr/local/opt/openresty-openssl/lib' --pid-path=/usr/local/var/run/openresty.pid --lock-path=/usr/local/var/run/openresty.lock --conf-path=/usr/local/etc/openresty/nginx.conf --http-log-path=/usr/local/var/log/nginx/access.log --error-log-path=/usr/local/var/log/nginx/error.log --with-pcre-jit --with-ipv6 --with-stream --with-stream_ssl_module --with-stream_ssl_preread_module --with-http_v2_module --without-mail_pop3_module --without-mail_imap_module --without-mail_smtp_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_auth_request_module --with-http_secure_link_module --with-http_random_index_module --with-http_geoip_module --with-http_gzip_static_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-threads --with-dtrace-probes --with-stream --with-stream_ssl_module --with-http_ssl_module

```



这里`--add-module=`后面跟着的，就是 OpenResty 的 C 模块。其中，最核心的就是 lua-nginx-module 和 stream-lua-nginx-module，前者用来处理七层流量，后者用来处理四层流量。



**这些 C 模块中，有些是需要特别注意的，虽然默认编译进入了 OpenResty，但并不推荐使用**。 比如 redis2-nginx-module、redis-nginx-module 和 memc-nginx-module，它们是用来和 redis 以及 memcached 交互使用的。这些 C 库是 OpenResty 早期推荐使用的，但在 cosocket 功能加入之后，它们都已经被 lua-resty-redis 和 lua-resty-memcached 替代，处于疏于维护的状态。



OpenResty 后面也不会开发更多的 NGINX C 库，而是专注在基于 cosocket 的 Lua 库上，后者才是未来。



#### lua-resty- 周边库

OpenResty 官方仓库中包含 18 个 lua-resty-* 库，涵盖 Redis、MySQL、memcached、websocket、dns、流量控制、字符串处理、进程内缓存等常用库。除了官方自带的之外，还有更多的第三方库。它们非常重要，所以下一章节，我们会花更多的篇幅来专门介绍这些周边库。



#### 自己维护的 LuaJIT 分支

OpenResty 除了维护自己的 OpenSSL patch 外，还维护了自己的 [LuaJIT 分支](https://github.com/openresty/luajit2)。在 2015 年，LuaJIT 的作者 Mike Pall 宣布退休，寻找新的 LuaJIT 维护者，但 Mike 并没有找到合适的维护者，他现在主要是做 bugfix 的维护工作，新功能的开发也已经暂停，所以 OpenResty 维护着自己的 LuaJIT 分支。



**相对于 Lua，LuaJIT 增加了不少独有的函数，这些函数非常重要**，但知道的工程师并不多，算是 _ 半隐藏技能 _，后面我也会专门介绍。

> LuaJIT（Lua Just-In-Time Compiler）是一个针对 Lua 编程语言的即时编译器。它是对标准 Lua 解释器的增强版本，通过即时编译技术提供了更高的执行性能。
>
> LuaJIT 的主要目标是提供快速的执行速度和低延迟。它通过将 Lua 代码转换为机器码来实现即时编译，从而避免了传统解释器的解释执行过程。这种即时编译的方式使得 LuaJIT 在执行 Lua 代码时能够获得更高的性能。
>
> 除了即时编译，LuaJIT 还提供了其他优化技术，如运行时类型推断和优化、垃圾回收优化等。这些优化技术进一步提升了 LuaJIT 的性能和效率。



#### 测试框架

OpenResty 的测试框架是[test-nginx](https://github.com/openresty/test-nginx)，同样也是用 **Perl 语言**来开发的，从名字上就能看出来，它是专门用来测试 NGINX 相关的项目。

OpenResty 官方的所有 C 模块和 lua-resty 库的测试案例，都是由 test-nginx 驱动的。



这个框架和常见的基于断言的框架不同，是一套更强大和独立的系统，我们后面会花几节课来专门学习。

事实上，有些 OpenResty 的代码贡献者也没有搞清楚这个测试框架，有时候提交的 PR 中包含了不少复杂的 C 和 Lua 代码，但对编写对应的测试案例一事，还是经常发怵。所以，如果你已经查看过一些 OpenResty 项目中`/t`目录里面的测试案例，却仍然一头雾水，先别急着怀疑自己，大部分人都是一样的。



除了 test-nginx 之外，[mockeagain](https://github.com/openresty/mockeagain) 这个项目可以模拟慢速的网络，让程序每次只读写一个字节。对于 web 服务器来说，这是一个很有用的工具。



#### 调试工具链

OpenResty 项目在如何科学和动态地调试代码上，花费了大量的精力，可以说是达到了极致。OpenResty 的作者章亦春专门写了[一篇文章](https://openresty.org/posts/dynamic-tracing/)，来介绍动态追踪技术。我强烈推荐给你，看完也有助于理解对应的工具链。



[openresty-systemtap-toolkit](https://github.com/openresty/openresty-systemtap-toolkit) 和 [stapxx](https://github.com/openresty/stapxx) 这两个 OpenResty 的项目，都基于 systemtap 这个动态调试和追踪工具。使用 systemtap 最大的优势，便是实现活体分析，同时对目标程序完全无侵入。



打个比方，systemtap，就像是我们去医院照了个 CT，无痛无感知。更棒的是，systemtap 可以生成直观的火焰图来做性能分析，后面我也会专门介绍，这里先放一个火焰图，让你直观上有个感性的认识：

![img](OpenResty从入门到实战.assets/dcc1340a7622ba1643e8d8b9347a417f.png)



#### 打包相关

OpenResty 在不同发行操作系统（比如 CentOS、Ubuntu、MacOS 等）版本中的打包脚本，出于更细可控力度的目的，都是手工编写的。我们在介绍安装后目录结构的时候，就已经涉及到了这些打包相关的项目：[openresty-packaging](https://github.com/openresty/openresty-packaging)  和 [home-brew](https://github.com/openresty/homebrew-brew)。如果你对此有兴趣，可以自行学习，这里我就不再赘述了。



#### 工程化工具

除了上面这些比较大块儿的项目之外，OpenResty 还有一些负责工程化的工具，大都也是“深藏闺中”。



比如 [openresty-devel-utils](https://github.com/openresty/openresty-devel-utils) 就是开发 OpenResty 和 NGINX 的工具集。

它们也都使用 Perl 开发，其中大部分的工具都是没有文档的。但对于 OpenResty 的开发者来说，这些工具又是非常有用的。



这里我先挑几个简单介绍一下。

[lj-releng](https://github.com/openresty/openresty-devel-utils/blob/master/lj-releng) 是一个简单有效的 LuaJIT 代码检测工具，类似 luacheck，可以找出全局变量等潜在的问题。

[reindex](https://github.com/openresty/openresty-devel-utils/blob/master/reindex) 从名字来看是重建索引的意思，它其实是格式化 test-nginx 测试案例的工具，可以重新排列测试案例的编号，以及去除多余的空白符。reindex 可以说是 OpenResty 开发者每天都会用到的工具之一。

[opsboy](https://github.com/openresty/opsboy) 也是一个深藏不露的项目，主要用于自动化部署。OpenResty 每次发布版本前，都会在 AWS EC2 集群上做完整的回归测试，详细的文档你可以参考[官方文档](https://openresty.org/en/ec2-test-cluster.html)，而这个回归测试正是由 opsboy 来部署和驱动的。

opsboy 是一个用 Perl 实现的 DSL（领域特定语言）。实际上， OpenResty 的作者非常喜欢创造各种不同的 DSL 来解决问题。



### 写在最后

今天，我们主要学习了 OpenResty 安装后的目录结构，以及背后的一些子项目。希望你学完今天的内容后，能够了解更多 OpenResty 的项目。OpenResty 已经远远超出了 NGINX 负载均衡和反向代理的范畴，实现了自己的生态，下一次我们会详细聊聊这方面。



## 04 | 如何管理第三方包？从包管理工具luarocks和opm说起

在上一节中，我们大概了解了下 OpenResty 官方的一些项目。不过，如果我们把 OpenResty 用于生产环境，显然，OpenResty 安装包自带的这些库是远远不够的，比如没有 lua-resty 库来发起 HTTP 请求，也没有办法和 Kafka 交互。



那么应该怎么办呢？本节我们就来一起了解下，应该从什么渠道来找到这些第三方库。

这里，我再次强调下，OpenResty 并不是 NGINX 的 fork，也不是在 NGINX 的基础上加了一些常用库重新打包，而**只是把 NGINX 当作底层的网络库来使用**。

当你使用 NGINX 的时候，是不会想着如何发起自定义的 HTTP 请求，以及如何与 Kafka 交互的。而在 OpenResty 的世界中，由于 cosocket 的存在，开发者可以轻松地写出 lua-resty-http 和 lua-resty-kafka ，来处理这类需求，就像你用 Python、PHP 这类的开发语言一样。



另外，还有一个建议告诉你：你不应该使用任何 Lua 世界的库来解决上述问题，而是应该使用 cosocket 的 lua-resty-* 库。**Lua 世界的库很可能会带来阻塞**，让原本高性能的服务，直接下降几个数量级。这是 OpenResty 初学者的常见错误，而且并不容易觉察到。

那我们怎么找到这些非阻塞的 lua-resty-* 库呢？接下来，我来为你介绍下面几种途径。

### **OPM**

[OPM](https://opm.openresty.org/)（OpenResty Package Manager）是 OpenResty 自带的包管理器，在你安装好 OpenResty 之后，就可以直接使用。我们可以试着去找找发送 http 请求的库 ``



第一次查询可能会比较慢，需要几秒钟的时间。opm.openresty.org 会从 PostgreSQL 数据库中做一次查询，并把结果缓存一段时间。search 具体的返回结果比较长，我们这里只看下第一条返回值：

```
$ opm search http
openresty/lua-resty-upload          Streaming reader and parser for HTTP file uploading based on ngx_lua cosocket
```

呃，看到这个结果，你可能会疑惑：这个 lua-resty-upload 包和发送 http 有什么关系呢？



原来，OPM 做搜索的时候，是用后面的关键字同时搜索了包的名字和包的简介。这也是为什么上面的搜索会持续几秒，因为它在 PostgreSQL 里面做了字符串的全文搜索。

不过，不管怎么说，这个返回并不友好。让我们修改下关键字，重新搜索下：

```
$ opm search lua-resty-http
ledgetech/lua-resty-http                          Lua HTTP client cosocket driver for OpenResty/ngx_lua
pintsized/lua-resty-http                          Lua HTTP client cosocket driver for OpenResty/ngx_lua
agentzh/lua-resty-http                            Lua HTTP client cosocket driver for OpenResty/ngx_lua
```



其实，在 OpenResty 世界中，如果你使用 cosocket 实现了一个包，那么就要使用 lua-resty- 这个前缀，算是一个不成文的规定。

回过头来看刚刚的搜索结果，OPM 使用了贡献者的 GitHub 仓库地址作为包名，即 GitHub ID / repo name。上面返回了三个 lua-resty-http 第三方库，我们应该选择哪一个呢？

眼尖的你，可能已经发现了 agentzh 这个 ID，没错，这就是 OpenResty 作者春哥本人。在选择这个包之前，我们看下它的 star 数和最后更新时间：只有十几个 star，最后一次更新是在 2016 年。很明显，这是个被放弃的坑。更深入地看下，pintsized/lua-resty-http 和 ledgetech/lua-resty-http 其实指向了同一个仓库。所以，不管你选哪个都是一样的。

同时 [OPM 的网站](https://opm.openresty.org/) 也相对简单，没有提供包的下载次数，也没有这个包的依赖关系。你需要花费更多的时间，来甄别出到底使用哪些 lua-resty 库才是正确的选择，而这些本应该是维护者的事情。



### **LUAROCKS**

[LuaRocks](https://luarocks.org/) 是 OpenResty 世界的另一个包管理器，诞生在 OPM 之前。不同于 OPM 里只包含 OpenResty 相关的包，LuaRocks 里面还包含 Lua 世界的库。举个例子，LuaRocks 里面的 LuaSQL-MySQL，就是 Lua 世界中连接 MySQL 的包，并不能用在 OpenResty 中。



还是以 HTTP 库为例，我们尝试用 LuaRocks 来试一试查找：

```
$ luarocks search http
```



你可以看到，也是返回了一大堆包。

我们不妨再换个关键字：

```
$ luarocks search lua-resty-http
```

这次只返回了一个包。我们可以到 LuaRocks 的网站上，去看看[这个包的详细信息](https://luarocks.org/modules/pintsized/lua-resty-http)，下面是网站页面的截图：

<img src="OpenResty从入门到实战.assets/ba5cbaae9a7a9ab1fbd05099dc7e9695.jpg" alt="img" style="zoom:50%;" />



这里面包含了作者、License、GitHub 地址、下载次数、功能简介、历史版本、依赖等。和 OPM 不同的是，LuaRocks 并没有直接使用 GitHub 的用户信息，而是需要开发者单独在 LuaRocks 上进行注册。



其实，开源的 API 网关项目 Kong，就是使用 LuaRocks 来进行包的管理，并且还把 LuaRocks 的作者收归麾下。我们接着就来简单看下，Kong 的包管理配置是怎么写的。



目前 Kong 的最新版本是 1.1.1， 你可以在 https://github.com/Kong/kong 的项目下找到最新的 .rockspec 后缀的文件。

```
package = "kong"
version = "1.1.1-0"
supported_platforms = {"linux", "macosx"}
source = {
  url = "git://github.com/Kong/kong",
  tag = "1.1.1"
}
description = {
  summary = "Kong is a scalable and customizable API Management Layer built on top of Nginx.",
  homepage = "https://konghq.com",
  license = "Apache 2.0"
}
dependencies = {
  "inspect == 3.1.1",
  "luasec == 0.7",
  "luasocket == 3.0-rc1",
  "penlight == 1.5.4",
  "lua-resty-http == 0.13",
  "lua-resty-jit-uuid == 0.0.7",
  "multipart == 0.5.5",
  "version == 1.0.1",
  "kong-lapis == 1.6.0.1",
  "lua-cassandra == 1.3.4",
  "pgmoon == 1.9.0",
  "luatz == 0.3",
  "http == 0.3",
  "lua_system_constants == 0.1.3",
  "lyaml == 6.2.3",
  "lua-resty-iputils == 0.3.0",
  "luaossl == 20181207",
  "luasyslog == 1.0.0",
  "lua_pack == 1.0.5",
  "lua-resty-dns-client == 3.0.2",
  "lua-resty-worker-events == 0.3.3",
  "lua-resty-mediador == 0.1.2",
  "lua-resty-healthcheck == 0.6.0",
  "lua-resty-cookie == 0.1.0",
  "lua-resty-mlcache == 2.3.0",
......
```

通过文件你可以看到，依赖项里面掺杂了 lua-resty 库和纯 Lua 世界的库，使用 OPM 只能部分安装这些依赖项。写好配置后，使用 luarocks 的 upload 命令把这个配置上传，用户就可以用 LuaRocks 来下载并安装 Kong 了。



另外，在 OpenResty 中，除了 Lua 代码外，我们还经常会调用 C 代码，这时候就需要编译才能使用。LuaRocks 是支持这么做的，你可以在 rockspec 文件中，指定 C 源码的路径和名称，这样 LuaRocks 就会帮你本地编译。而 OPM 暂时还不支持这种特性。



不过，需要注意的是，OPM 和 LuaRocks 都不支持私有包。



### **AWESOME-RESTY**

讲了这么多包管理的内容，其实呢，即使有了 OPM 和 LuaRocks，对于 OpenResty 的 lua-resty 包，我们还是管中窥豹的状态。到底有没有地方可以让我们一览全貌呢？



当然是有的，[awesome-resty](https://github.com/bungle/awesome-resty) 这个项目，就维护了几乎所有 OpenResty 可用的包，并且都分门别类地整理好了。当你不确定是否存在适合的第三方包时，来这里“按图索骥”，可以说是最好的办法。



还是以 HTTP 库为例， 在 awesome-resty 中，它自然是属于 [networking](https://github.com/bungle/awesome-resty#networking) 分类：

```
lua-resty-http by @pintsized — Lua HTTP client cosocket driver for OpenResty / ngx_lua
lua-resty-http by @liseen — Lua http client driver for the ngx_lua based on the cosocket API
lua-resty-http by @DorianGray — Lua HTTP client driver for ngx_lua based on the cosocket API
lua-resty-http-simple — Simple Lua HTTP client driver for ngx_lua
lua-resty-httpipe — Lua HTTP client cosocket driver for OpenResty / ngx_lua
lua-resty-httpclient — Nonblocking Lua HTTP Client library for aLiLua & ngx_lua
lua-httpcli-resty — Lua HTTP client module for OpenResty
lua-resty-requests — Yet Another HTTP Library for OpenResty

```



我们看到，这里有 8 个 lua-resty-http 的第三方库。对比一下前面的结果，我们使用 OPM 只找到 2 个，而 LuaRocks 里面更是只有 1 个。不过，如果你是选择困难症，请直接使用第一个，它和 LuaRocks 中的是同一个。



而对于愿意尝试的工程师，我更推荐你用最后一个库： [lua-resty-requests](https://github.com/tokers/lua-resty-requests)，它是人类更友好的 HTTP 访问库，接口风格与 Python 中大名鼎鼎的 [Requests](http://docs.python-requests.org/en/master/) 一致。如果你跟我一样是一个 Python 爱好者，一定会喜欢上 lua-resty-requests。这个库的作者是 OpenResty 社区中活跃的 tokers，因此你可以放心使用。



必须要承认，OpenResty 现有的第三方库并不完善，所以，如果你在 awesome-resty 中没有找到你需要的库，那就需要你自己来实现，比如 OpenResty 一直没有访问 Oracle  或者 SQLServer 的 lua-rsety 库。



### 写在最后

一个开源项目想要健康地发展壮大，不仅需要有硬核的技术、完善的文档和完整的测试，还需要带动更多的开发者和公司一起加入进来，形成一个生态。正如 Apache 基金会的名言：社区胜于代码。



还是那句话，想把 OpenResty 代码写好，一点儿也不简单。OpenResty 还没有系统的学习资料，也没有官方的代码指南，很多的优化点的确已经写在了开源项目中，但大多数开发者却是知其然而不知其所以然。这也是我这个专栏的目的所在，希望你学习完之后，可以写出更高效的 OpenResty 代码，也可以更容易地参与到 OpenResty 相关的开源项目中来。



