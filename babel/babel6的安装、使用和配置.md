# 安装babel

安装分两步，先安装babel-cli工具，然后安装自己需要的babel转换插件。有人可能觉得疑惑：为什么babel-cli里面不包含插件，还要用户专门安装插件呢？原因如下：

> Babel5版本默认包含各种转换插件，然而Babel6.x相关转换插件需要自己下载，如transform-es2015-arrow-functions、transform-es2015-classes等，而ES2015 preset包含了所有插件。如果不安装任何插件，那么在命令行进行转换是没有任何效果的。

> 至于为什么babel-cli里面不包含插件？其实我也不知道，我猜可能是babel的插件越来越多，让用户去选装自己用到的插件，这样更加容易维护吧


**第一步： 安装babel-cli**

打开命令行工具，安装babel-cli：

	npm install --save-dev babel-cli

但是我通常不会这样干，我会用淘宝镜像来安装，只在开始多敲了一个字母c，安装速度快了N倍

	cnpm install --save-dev babel-cli

--save参数自动更新package.json文件，写进依赖项

**第二步：安装转换插件**

这里我安装了`babel-preset-latest` 和 `babel-preset-env`

	cnpm install --save-dev babel-preset-env
	cnpm install --save-dev babel-preset-latest

如果还想了解更多或者安装其他插件，可以去[这里](https://babeljs.io/docs/plugins/)看看。

# 使用babel

有了上面两步，现在就可以开始使用babel了。

先建立一个名字叫es6-example.js的文件，写些es6的代码：

	input.map(item => item + 1);
	
然后在命令行里输入：

	babel es6-example.js --presets es2015

即可转换成es2015代码在命令行输出：

	"use strict";

	input.map(function (item) {
  		return item + 1;
	});


# 配置babel

每转换一次都写上`--presets es2015`参数那是很麻烦的，可以在当前目录下新建配置文件 .babelrc。但是在windows系统中，不允许直接右键建立没有文件名的文件，可以通过cmd命令行创建：在当前文件夹打开cmd并键入命令

	type nul>.babelrc

即可在当前目录下建立文件.babelrc，然后在文件中写入：

	{
		"presets": ['es2015']
	}

然后就可以直接在命令行中不带参数，直接转换了：

	babel es6-example.js

除了建.babelrc文件，还有种更好的办法就是把babel配置写到package.json文件中，效果一样：

	{
		"devDependencies": {
			"babel-cli": "^6.24.1",
			"babel-preset-env": "^1.4.0",
			"babel-preset-latest": "^6.24.1",
			"babel-preset-react": "^6.24.1"
		},
  
		//这里就是babel的配置
	    "babel": {
	  
			//配置转换插件
			"presets":[
				"latest",
				"react"
			],
			"plugins":[]	
		}
	}


	
# 附Babel常用命令：



1. 转换es6.js文件并在当前命名行程序窗口中输出

		babel es6.js
 

2. 将es6.js转换后输出到es5.js文件中（使用 -o 或 --out-file ）

		babel es6.js -o es5.js 

		babel es6.js --out-file es5.js
 

3. 实时监控es6.js一有变化就重新编译（使用 -w 或 --watch ）

		babel es6.js -w --out-file es5.js

		babel es6.js --watch --out-file es5.js
 

4. 编译整个src文件夹并输出到lib文件夹中（使用 -d 或 --out-dir ）

		babel src -d lib

		babel src --out-dir lib
 

5. 编译整个src文件夹并输出到一个文件中

		babel src --out-file es5.js
 

6. 直接输入babel-node命令，可以在命令行中直接运行ES6代码

		babel-node
