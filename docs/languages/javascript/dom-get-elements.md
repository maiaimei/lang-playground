在 JavaScript 中，获取 DOM 元素是进行页面交互的基础。根据选择条件的不同（ID、类名、标签、CSS 选择器等），主要有以下 6 种核心方式。

---

一、 获取单个元素（返回 Element 或 null）

如果你确定目标元素是唯一的，或者只需要操作第一个匹配项，使用以下方法：

1. `document.getElementById(id)`
*   用法：`const el = document.getElementById('header');`
*   特点：
    *   性能最高：浏览器内部通过哈希表查找，速度极快。
    *   唯一性：HTML 标准规定 ID 应唯一。如果页面有多个相同 ID，只返回第一个。
    *   返回值：匹配的 `Element` 对象；未找到返回 `null`。
*   适用场景：精准定位页面中具有唯一标识的元素（如主容器、特定按钮）。

2. `document.querySelector(selector)`
*   用法：`const el = document.querySelector('.btn-primary');`
*   特点：
    *   灵活强大：支持所有 CSS 选择器（ID ``、类 `.`、标签、属性 `[attr]`、伪类 `:first-child` 等）。
    *   只取第一个：即使有多个匹配项，也只返回文档流中的第一个。
    *   返回值：匹配的 `Element` 对象；未找到返回 `null`。
*   适用场景：现代开发首选。适用于复杂选择逻辑，或不需要批量操作的场景。

---

二、 获取元素集合（返回类数组对象）

如果需要操作一组元素，使用以下方法。注意它们的返回值不是真正的数组，而是类数组对象（伪数组）。

3. `document.getElementsByClassName(className)`
*   用法：`const els = document.getElementsByClassName('item');`
*   特点：
    *   动态集合 (Live)：返回 `HTMLCollection`。当 DOM 结构变化（如新增/删除带有该类名的元素）时，集合会自动更新。
    *   多类名支持：可以传入多个类名，如 `getElementsByClassName('box active')`，表示同时拥有这两个类的元素。
    *   返回值：`HTMLCollection`；未找到返回空集合（长度为 0）。
*   适用场景：需要实时反映 DOM 变化的同类元素集合。

4. `document.getElementsByTagName(tagName)`
*   用法：`const els = document.getElementsByTagName('div');`
*   特点：
    *   动态集合 (Live)：返回 `HTMLCollection`。DOM 变化时集合自动更新。
    *   通配符：支持传入 `'*'` 获取所有元素。
    *   返回值：`HTMLCollection`；未找到返回空集合。
*   适用场景：批量操作特定标签（如重置所有 `<input>` 的值）。

5. `document.getElementsByName(name)`
*   用法：`const els = document.getElementsByName('gender');`
*   特点：
    *   表单专用：主要依据 `name` 属性匹配，常用于单选框（Radio）、复选框等表单元素。
    *   动态集合：返回 `NodeList`（在大多数现代浏览器中是动态的）。
    *   返回值：`NodeList`；未找到返回空集合。
*   适用场景：处理表单中的一组同名元素。

6. `document.querySelectorAll(selector)`
*   用法：`const els = document.querySelectorAll('.item');`
*   特点：
    *   静态集合 (Static)：返回 `NodeList`。快照式获取，DOM 后续的变化不会影响该集合。
    *   灵活强大：支持所有 CSS 选择器。
    *   可遍历：原生支持 `forEach` 方法（旧版 IE 不支持，但现代浏览器均支持）。
    *   返回值：`NodeList`；未找到返回空集合。
*   适用场景：现代开发中批量获取元素的首选。适合不需要实时同步 DOM 变化的场景，代码更稳定，不易因 DOM 变动导致索引错乱。

---

三、 核心差异对比与选型指南

| 方法 | 返回值类型 | 动态/静态 | 支持 CSS 选择器 | 未找到返回 | 推荐指数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `getElementById` | `Element` | - | ❌ | `null` | ⭐⭐⭐⭐⭐ (ID 查询最快) |
| `querySelector` | `Element` | - | ✅ | `null` | ⭐⭐⭐⭐⭐ (单元素首选) |
| `getElementsByClassName` | `HTMLCollection` | 动态 | ❌ | 空集合 | ⭐⭐⭐ (需实时同步时用) |
| `getElementsByTagName` | `HTMLCollection` | 动态 | ❌ | 空集合 | ⭐⭐⭐ (按标签批量时用) |
| `getElementsByName` | `NodeList` | 动态 | ❌ | 空集合 | ⭐⭐ (仅限表单) |
| `querySelectorAll` | `NodeList` | 静态 | ✅ | 空集合 | ⭐⭐⭐⭐⭐ (批量首选) |

💡 避坑与建议

1.  动态 vs 静态陷阱：
    *   `getElementsBy...` 返回的是动态集合。如果你在循环中修改 DOM（例如删除元素），集合的长度和内容会实时变化，可能导致循环跳过元素或报错。
    *   `querySelectorAll` 返回的是静态集合，更像是一个快照，遍历时更安全。

2.  伪数组转真数组：
    *   `HTMLCollection` 和 `NodeList` 都不是真正的 Array，不能直接使用 `map`、`filter` 等方法。
    *   如果需要数组方法，可以使用 `Array.from(els)` 或 `[...els]` 将其转换为真数组。
    *   *注：现代浏览器中 `NodeList` 已支持 `forEach`，但 `HTMLCollection` 仍不支持。*

3.  性能考量：
    *   如果已知元素 ID，务必使用 `getElementById`，它的性能远高于 `querySelector('id')`，因为后者需要解析选择器字符串。
    *   在大型文档中，避免使用过于复杂的 CSS 选择器（如 `div > ul li:nth-child(2) .span`），这会降低 `querySelector` 系列的查询速度。

4.  现代开发推荐：
    *   单元素：优先用 `querySelector`。
    *   多元素：优先用 `querySelectorAll`。
    *   极致性能/老项目兼容：保留 `getElementById` 和 `getElementsByClassName`。