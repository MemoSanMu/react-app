### commit message

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
