

# 课程介绍



> [OpenResty 从入门到实战](https://time.geekbang.org/column/intro/100028301)

![image-20240903195031991](OpenResty从入门到实战.assets/image-20240903195031991.png)

<img src="OpenResty从入门到实战.assets/4dce464099b7d47a8249602ce7a9bb20.jpg" alt="img" style="zoom:50%;" />



## 一些资料

官网： https://openresty.org/cn/installation.html





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
