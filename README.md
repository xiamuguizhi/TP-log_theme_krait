# TP-log_theme_krait
https://github.com/eisongao/TP-log  博客系统移植主题  "krait"

www  WEB部署目录（或者子目录）
├─addon             插件目录
│  └─...          可扩展模块目录
├─application           应用程序目录
│  ├─common             公共模块目录（可以更改）
│  ├─backend            后台模块目录（可以更改）
│  ├─frontend           前台模块目录（可以更改）
│  ├─extra            配置文件目录
│  ├─install            安装模块目录（安装后建议删除）
│  ├─module_name        模块目录（可以更改）
│  │  ├─config.php      模块配置文件
│  │  ├─controller      控制器目录
│  │  ├─logic        逻辑层目录
│  │  ├─model           模型目录
│  │  ├─service       服务层目录
│  │  ├─validate       数据验证层目录
│  │  └─ ...            更多类库目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─config.php         公共配置文件
│  ├─route.php          路由配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─database.php       数据库配置文件
├─coreframe            核心代码目录
│  ├─source          tpframe源码目录
│  ├─thinkphp         thinkphp源码目录
│  ├─vendor          第三方类库目录（Composer依赖库）
│  └─...          更多可扩展模块目录
├─data                 数据资源目录（对外访问目录）
│  ├─assets           静态资源目录
│  ├─conf(<2.0)         配置文件目录(2.0版本已移动到application的extra目录)
│  ├─runtime          运行时目录
│  ├─uploads         上传文件目录
│  ├─install.lock       安装标识文件
│  └─...          其它文件
│─extend                扩展类库目录
├─theme               模板目录
│  ├─backend            后台模板文件目录
│  ├─frontend           前台模板文件目录
│  └─install            安装模板文件目录
│
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─index.php             入口文件
├─...              其它文件
