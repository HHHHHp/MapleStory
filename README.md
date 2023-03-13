# MapleStory
> 基于odinms开发的Maple Story V079版本服务端进行开

## 在VSCode中搭建开发环境

### Java环境配置

需要安装JDK7，并在`settings.json`中写入JDK7的路径：

```json
{
	"java.configuration.runtimes": [
		{
			"name": "JavaSE-1.7",
			"path": "path-to-jdk7"
		}
	]
}
```

另外项目使用Apache Ant构建，可以下一个，然后再根目录下运行`ant`即可。

另外由于一些加密策略问题，参考[此篇文章](https://www.iteye.com/blog/czj4451-1986483)的做法，把JRE和JDK中的jar包用`./lib/local_policy.jar`和`./lib/US_export_policy.jar`进行替换。

### 服务器配置

根据自己情况修改`服务端配置.ini`中的内容，比较关键的内容：

- 数据库连接设置：数据库表格用样例sql构建
- 服务器地址设置

### 调试

在调试`ZlhssMS`时，在`launch.json`中配置VM参数，把服务端所需的wz数据路径传进去：

```json
{
	"type": "java",
	"name": "ZlhssMS",
	"request": "launch",
	"mainClass": "gui.ZlhssMS",
	"projectName": "MapleStory_e64f788c",
	"vmArgs": "-Dnet.sf.odinms.wzpath={your-path-to-server-wz}"
}

### 打包说明

直接在项目根目录下运行`ant`即可，会在`./dist`下生成依赖库`./lib`和打包的jar文件。

运行jar时参考以下批处理的内容:

```
@title ZlhssMS_079
set path=D:\Java\jdk-7\jre\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%
set JRE_HOME=D:\Java\jdk-7\jre
set JAVA_HOME=D:\Java\jdk-7\jre\bin
set CLASSPATH=.;.\dist\*;.\lib\*
java -Dnet.sf.odinms.wzpath=D:\MXD\mxd\Server\mSer\wz gui.ZlhssMS
pause
```

主要设置好jdk7的路径，指定`wzpath`路径，另外`CLASSPATH`要包含依赖的jar包路径。