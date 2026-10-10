document.querySelector() 是 JavaScript 中用于从 DOM（文档对象模型）中检索元素的核心方法之一。它接收一个 ‌CSS 选择器字符串‌作为参数，并返回文档中匹配该选择器的‌第一个‌元素；如果没有找到匹配项，则返回 null。

由于它支持所有标准的 CSS 选择器语法，因此非常灵活。以下是 document.querySelector() 支持的主要选择器类型及具体用法：

1. 基础选择器

ID 选择器 (#id)‌
通过元素的 id 属性查找唯一元素。

javascript
// 查找 id 为 "header" 的元素
const header = document.querySelector('#header');


类选择器 (.class)‌
查找具有指定 class 名的第一个元素。

javascript
// 查找第一个 class 包含 "btn-primary" 的元素
const btn = document.querySelector('.btn-primary');


标签选择器 (tag)‌
查找指定标签名的第一个元素。

javascript
// 查找页面中的第一个 <img> 标签
const firstImg = document.querySelector('img');
// 查找第一个 <div> 标签
const firstDiv = document.querySelector('div');

2. 组合与层级选择器

后代选择器 (ancestor descendant)‌
查找某个元素内部的所有后代元素中的第一个匹配项。

javascript
// 查找 .container 内部的第一个 .text 元素
const text = document.querySelector('.container .text');


子代选择器 (parent > child)‌
查找直接子元素。

javascript
// 查找 ul.menu 下的第一个直接子元素 li.active
const item = document.querySelector('ul.menu > li.active');


相邻兄弟选择器 (prev + next)‌
查找紧接在另一个元素后的第一个元素。

javascript
// 查找紧跟在 h1 后面的第一个 p 元素
const paragraph = document.querySelector('h1 + p');

3. 属性选择器

可以根据元素的属性及其值进行精确匹配。

存在属性‌：[attribute]
等于值‌：[attribute="value"]
包含值‌：[attribute*="value"]
以值开头‌：[attribute^="value"]
javascript
// 查找第一个带有 target="_blank" 属性的 <a> 标签
const link = document.querySelector('a[target="_blank"]');

// 查找第一个 type 为 "text" 的 input 元素
const input = document.querySelector('input[type="text"]');

4. 伪类选择器

支持常用的 CSS 伪类，用于根据元素的状态或位置进行选择。

状态伪类‌：:hover, :focus, :checked, :disabled 等。
结构伪类‌：:first-child, :last-child, :nth-child(n), :first-of-type 等。
javascript
// 查找同层级中的第一个 <input> 元素
const firstInput = document.querySelector('input:first-of-type');

// 查找列表中的最后一个 <li> 元素
const lastItem = document.querySelector('ul li:last-child');

// 查找被选中的复选框
const checkedBox = document.querySelector('input[type="checkbox"]:checked');

5. 分组选择器

可以使用逗号分隔多个选择器，返回匹配其中任意一个选择器的第一个元素（按照文档顺序）。

javascript
// 返回文档中第一个出现的 h1 或 .subtitle 元素
const title = document.querySelector('h1, .subtitle');

使用注意事项
只返回第一个匹配项‌：即使有多个元素符合选择器条件，querySelector() 也只会返回文档流中出现的‌第一个‌元素。如果需要获取所有匹配的元素，请使用 document.querySelectorAll()。
返回值可能为 null‌：如果文档中没有匹配的元素，该方法返回 null。在操作返回的元素之前，建议先进行非空判断，以避免报错。
javascript
const element = document.querySelector('#nonExistent');
if (element) {
    element.style.color = 'red';
}

作用域灵活‌：querySelector() 不仅可以在 document 上调用，也可以在任何 Element 节点上调用，此时它将在该元素的子节点范围内进行搜索。
javascript
const container = document.querySelector('.container');
// 仅在 .container 内部查找 .item
const item = container.querySelector('.item');

性能考量‌：虽然 querySelector() 功能强大且语法简洁，但在极高性能要求的场景下（如频繁循环查询），传统的 getElementById() 通常速度更快，因为它是直接通过哈希表查找。对于简单的 ID 查询，优先推荐使用 getElementById()。