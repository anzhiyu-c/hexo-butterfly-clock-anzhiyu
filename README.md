# hexo-butterfly-clock

给`hexo-theme-butterfly`添加 [侧边栏电子钟](https://akilar.top/posts/4e39cf4a/)

# 安装

1. 如果有安装店长的插件版侧边栏电子钟（与店长的电子钟冲突），在博客根目录`[Blogroot]`下打开终端，运行以下指令
```bash
  # 卸载原版电子钟
  npm uninstall hexo-butterfly-clock
```

2. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：

   ```bash
   npm install hexo-butterfly-clock-pro --save
   ```

3. 添加配置信息，以下为写法示例
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

  ```yml
    # electric_clock
    # see https://anzhiy.cn/posts/fc18.html
    electric_clock:
      enable: true # 开关
      priority: 5 #过滤器优先权
      enable_page: all # 应用页面
      exclude:
        # - /posts/
        # - /about/
      layout: # 挂载容器类型
        type: class
        name: sticky_layout
        index: 0
      loading: https://cdn.cbd.int/hexo-butterfly-clock-pro/lib/loading.gif #加载动画自定义
      clock_css: https://cdn.cbd.int/hexo-butterfly-clock-pro/lib/clock.min.css
      clock_js: https://cdn.cbd.int/hexo-butterfly-clock-pro/lib/clock.min.js
      ip_api: https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0
  ```
4. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |priority|number|【可选】过滤器优先级，数值越小，执行越早，默认为10，选填|
  |enable|true/false|【必选】控制开关|
  |enable_page|path|【可选】填写想要应用的页面,如根目录就填'/',分类页面就填'/categories/'。若要应用于所有页面，就填`all`，默认为`all`|
  |exclude|path|【可选】填写想要屏蔽的页面，可以多个。写法见示例。原理是将屏蔽项的内容逐个放到当前路径去匹配，若当前路径包含任一屏蔽项，则不会挂载。|
  |layout.type|id/class|【可选】挂载容器类型，填写id或class，不填则默认为id|
  |layout.name|text|【必选】挂载容器名称|
  |layout.index|0和正整数|【可选】前提是layout.type为class，因为同一页面可能有多个class，此项用来确认究竟排在第几个顺位|
  |loading|URL|【可选】电子钟加载动画的图片|
  |clock_css|URL|【可选】电子钟样式CDN资源|
  |clock_js|URL|【可选】电子钟执行脚本CDN资源|
  |ip_api|URL|【可选】获取时钟IP的API|
# 截图
![](https://image.anzhiy.cn/adminuploads/1/2022/08/26/630888b65adc7.png)
