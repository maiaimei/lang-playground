# Lang Playground
个人多语言学习练习仓库，覆盖 JavaScript/TypeScript/Node.js/Python/Java 等主流编程语言。

## 📁 目录结构
```
lang-playground/
├── .github/
│   ├── workflows/
│   │   ├── lint.yml              # 多语言静态检查
│   │   └── test.yml              # 多语言测试（可选）
│   └── ISSUE_TEMPLATE/
├── docs/                         # ✅ 所有文档集中于此
│   ├── general/                  # 跨语言知识
│   │   ├── git-cheatsheet.md
│   │   ├── cli-tips.md
│   │   └── cross-language-notes.md
│   ├── languages/                # 按语言维度的学习笔记
│   │   ├── javascript.md
│   │   ├── typescript.md
│   │   ├── nodejs.md
│   │   ├── python.md
│   │   └── java.md
│   └── architecture/             # 工程化相关文档
│       └── directory-convention.md
├── languages/                    # ✅ 只放代码
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── basics/
│   │   │   ├── advanced/
│   │   │   └── exercises/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── README.md              # 仅放运行说明 & 进度
│   ├── typescript/
│   │   ├── src/
│   │   ├── tests/
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── nodejs/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   ├── apis/
│   │   │   └── frameworks/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── README.md
│   ├── python/
│   │   ├── src/
│   │   │   ├── basics/
│   │   │   ├── advanced/
│   │   │   ├── scripts/
│   │   │   └── exercises/
│   │   ├── tests/
│   │   ├── requirements.txt
│   │   └── README.md
│   ├── java/
│   │   ├── src/
│   │   │   ├── main/java/
│   │   │   └── test/java/
│   │   ├── pom.xml / build.gradle
│   │   └── README.md
│   └── _template/                 # ✅ 新语言脚手架模板
│       ├── src/
│       ├── tests/
│       └── README.md
├── shared/                        # ✅ 多语言对比实现
│   ├── algorithms/
│   │   ├── sorting/
│   │   │   ├── js/
│   │   │   ├── ts/
│   │   │   ├── py/
│   │   │   └── java/
│   │   └── recursion/
│   └── data-structures/
│       ├── linked-list/
│       └── hash-map/
├── tools/                         # ✅ 工程化脚本（非业务代码）
│   ├── format.sh
│   └── lint.sh
├── .gitignore
├── .editorconfig
├── .prettierrc
├── README.md
└── LICENSE
```

