# react-app

## 代码规范：

### 1.ts+eslint+pritter

### 2.引入模块按需引入(给 tree-shaking 准备)

#### 案例：

    import { isEmpty } from 'lodash-es';

## 快速开始

1. 安装依赖：`yarn install`
2. 启动服务：`yarn start`
3. 生产打包：`yarn build`
4. 分析打包：`yarn analyze`
5. 提交记录：`yarn commit`

> 这里使用的是 yarn，但也可以替换为 npm。

## 项目结构

```
├── build                产物
├── config               webpack 配
├── public               模版
├── scripts              执行脚本
├── src
│   ├── assets           静态资源
│   ├── containers       模块容器
│   ├── index.tsx        入口文件
│   ├── layouts          布局
│   ├── pages            页面
│   ├── publicComponents 组件
│   │   ├── base         基础组件
│   │   └── basic        业务组件
│   ├── routers          路由
│   ├── services         接口服务
│   ├── store            状态
│   ├── style            样式
│   ├── typings          通用 ts 规范
│   └── utils            工具集
```

> ⚠ 确保 `src/utils` 内的文件（函数）下没有副作用。

## commit message

> commitizen 此包也可不全局安装，项目内已经安装完毕

```
npm install -g commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

#### 执行 git cz (确保全局安装 commitizen) 或 npm run commmit | yarn commit 进入 interactive 模式，根据提示依次填写

```
1. Select the type of change that you're committing 选择改动类型 (type)

2. What is the scope of this change (e.g. component or file name)? 填写改动范围 (scope)

3. Write a short, imperative tense description of the change: 写一个精简的描述 (subject)

4. Provide a longer description of the change: (press enter to skip) 对于改动写一段长描述 (body)

5. Are there any breaking changes? (y/n) 是破坏性修改吗？默认 n (footer)

6. Does this change affect any openreve issues? (y/n) 改动修复了哪个问题？默认 n (footer)
```

##### 主要 type

```
feat: 增加新功能

fix: 修复 bug
```

##### 特殊 type

```
docs: 只改动了文档相关的内容

style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号

build: 构造工具的或者外部依赖的改动，例如 webpack，npm

refactor: 代码重构时使用

revert: 执行 git revert 打印的 message


test: 添加测试或者修改现有测试

perf: 提高性能的改动

ci: 与 CI（持续集成服务）有关的改动

chore: 不修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动
```

## standard-version

> standard-version 是一款遵循语义化版本（ semver）和 commit message 标准规范 的版本和 changlog 自动化工具。

#### 安装 & 使用

```
在这里我仍然推荐的全局安装：

$ npm install -g standard-version
# 或者
$ npm install --save-dev standard-version
执行：

# Help standard-version --help
$ standard-version
```

##### 执行 standard-version 命令，我们会在控制台看到整个执行流程的 log 信息，在这里几个常用的参数需要注意下:

##### --release-as, -r 指定版本号

> 默认情况下，工具会自动根据 主版本（major）,次版本（ minor） or 修订版（patch） 规则生成版本号，例如如果你 package.json 中的 version 为 1.0.0, 那么执行后版本号则是：1.0.1。自定义可以通过：

```
$ standard-version -r minor
# output 1.1.0
$ standard-version -r 2.0.0
# output 2.0.0
$ standard-version -r 2.0.0-test
# output 2.0.0-test
```

##### 需要注意的是，这里的版本名称不是随便的字符，而是需要遵循语义化版本（ semver） 规范的

```
--prerelease, -p 预发版本命名
用来生成预发版本, 如果当期的版本号是 2.0.0，例如

$ standard-version --prerelease alpha

# output 2.0.0-alpha.0

--tag-prefix, -t 版本 tag 前缀
用来给生成 tag 标签添加前缀，例如如果前版本号为 2.0.0，则：

$ standard-version --tag-prefix "stable-"

# output tag: stable-v2.0.0
```

> 以上这几个参数可能我们用的比较多，还有其他选项可以通过 standard-version --help 查看。

##### postcss-px-to-viewport 行内样式兼容

> 行内样式的转换与这个插件无关，你可以用公式进行转换
> const getVwUnit = (num: number): number => num / window.screen.width \* 100，num 是 px 单位

```tsx
import { getVwUnit } from '@/utils/common';
style={
  {
    fontSize: getVwUnit(16),
  }
}
```
