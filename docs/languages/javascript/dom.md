# DOM

DOM 最常见指计算机领域的“文档对象模型”，是网页开发中的标准接口。

‌基本含义‌：全称 Document Object Model，由 W3C 制定，用于表示 HTML 和 XML 文档结构。
‌主要作用‌：把网页文档解析成一棵节点树，让程序能访问、修改页面的内容、结构和样式。
‌使用场景‌：前端开发中常用 JavaScript 通过 DOM 操作页面元素，如获取标签、添加事件等。

DOM 里文档、元素、节点这三个概念，简单说就是从大到小、一层层包含的关系：文档是整棵树的根，节点是树上的每一个点，元素是节点里最常见、最常用的一种。

🌳 从"文档"开始理解

文档（Document） 就是一个 HTML 页面本身，它是整棵 DOM 树的顶层根节点。 在 JavaScript 里用 `document` 对象来表示整个页面，所有操作都从它开始。

📦 节点（Node）是"一切"

节点（Node） 是 DOM 树的基本组成单位，页面上所有东西都是节点：标签、文字、属性、注释，甚至标签之间的空格和换行，都是节点。 常用的节点类型有这几种：

- 元素节点（Element）：就是 `<div>`、`<p>` 这类 HTML 标签，`nodeType` 为 1。
- 文本节点（Text）：标签里写的文字，比如 `<p>你好</p>` 里的"你好"，`nodeType` 为 3。
- 属性节点（Attr）：标签上的属性，比如 `<img src="...">` 里的 `src`，`nodeType` 为 2。
- 注释节点（Comment）：代码里的 `<!-- 注释 -->`，`nodeType` 为 8。
- 文档节点（Document）：整棵树的根，`nodeType` 为 9。

🏷️ 元素（Element）是"标签"

元素（Element） 是节点的一种具体类型，特指 HTML 或 XML 里的标签，是开发中最常操作的对象。 关键区别在于：

- 节点是全集，元素是子集：所有元素都是节点，但节点不一定是元素。
- 比如一个 `<p>` 标签里，`<p>` 本身是元素节点，里面的文字是文本节点，这俩都是节点，但只有 `<p>` 是元素。

> 实际开发时，`childNodes` 拿到的子节点会包含文本、注释等所有类型；而 `children` 只会拿到元素节点。想要过滤掉空白文本，直接用 `children` 更省事。

# Reference

[https://developer.mozilla.org/zh-CN/docs/Web/API](https://developer.mozilla.org/zh-CN/docs/Web/API)