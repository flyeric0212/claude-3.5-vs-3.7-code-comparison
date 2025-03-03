# Claude 3.5 与 3.7 代码对比

> **教程链接**: [https://flyeric.top/archives/claude-3.5-vs-3.7-code-comparison](https://flyeric.top/archives/claude-3.5-vs-3.7-code-comparison)

本仓库包含了在 Cursor 编辑器环境中 Claude 3.5 和 Claude 3.7 AI 模型前端编程能力的对比。该项目旨在评估和展示这些 AI 模型在代码生成、问题解决方法和前端开发任务整体效果方面的差异。

## 项目结构

本仓库分为两个主要目录：

- `claude3.5/` - 包含由 Claude 3.5 生成的代码
- `claude3.7/` - 包含由 Claude 3.7 生成的代码

## 测试类别

每个 AI 模型都在三个不同的前端开发任务上进行了测试：

### 1. 前端复刻
根据截图重新创建 Cursor 官方网站 UI，测试 AI 将视觉设计转换为功能代码的能力。

claude 3.5:
![image-20250301下午72015695](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8872015695.png)

claude 3.7:
![image-20250301下午84237225](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8884237225.png)

![image-20250301下午84305134](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8884305134.png)

...
![image-20250301下午84432714](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8884432714.png)


### 2. 传统框架应用
使用 HTML、CSS 和 JavaScript 实现登录页面，评估 AI 对基础网络技术的熟练程度。

claude 3.5:
![image-20250301下午85733698](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8885733698.png)

claude 3.7:
![image-20250301下午90148157](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8890148157.png)

### 3. 单页应用
使用 React 开发博客应用，评估 AI 使用现代前端框架和创建交互式用户界面的能力。

claude 3.5:
![image-20250301下午103150854](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%88103150854.png)

![image-20250301下午103223476](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%88103223476.png)

![image-20250301下午103246207](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%88103246207.png)

![image-20250301下午103301981](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%88103301981.png)

claude 3.7:
![image-20250301下午91727614](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8891727614.png)

![image-20250301下午91805328](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8891805328.png)

![image-20250301下午91856270](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8891856270.png)

![image-20250301下午91929079](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8891929079.png)

![image-20250301下午92358376](https://pic-bed-1256249917.cos.ap-chengdu.myqcloud.com/uPic/image-20250301%E4%B8%8B%E5%8D%8892358376.png)

## 项目目的

这个对比项目旨在：

- 突显每个 Claude AI 版本的优势和局限性
- 提供关于 AI 能力在不同版本之间如何演变的见解
- 展示 AI 辅助编码在前端开发中的实际应用
- 为对 AI 驱动的开发工具感兴趣的开发者提供参考

## 开始使用

要探索代码示例：

1. 导航到 `claude3.5/` 或 `claude3.7/` 目录
2. 每个目录都包含三个测试类别的子目录
3. 查看每个 AI 模型使用的代码和实现方法

## 贡献

欢迎 fork 此仓库并进行自己的比较，或扩展现有测试以涵盖前端开发的其他方面。

## 更多信息

如需了解有关此对比的详细文章和分析，请搜索微信公众号：Eric技术圈 或者 个人博客：flyeric.top。

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。