# MapleStory
> 基于odinms开发的Maple Story V079版本服务端进行开

## 在VSCode中搭建开发环境

### Java环境配置

在`settings.json`中写入JDK7的路径：

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
	"vmArgs": "-Dnet.sf.odinms.wzpath={your-path-to-server-wz} gui.ZlhssMS"
}