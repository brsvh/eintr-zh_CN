Object.assign(window.search, {"doc_urls":["translate-introduction.html#翻译说明","ch00-00-前言.html#前言","ch00-01-如何阅读本书.html#如何阅读本书"],"index":{"documentStore":{"docInfo":{"0":{"body":6,"breadcrumbs":0,"title":0},"1":{"body":19,"breadcrumbs":0,"title":0},"2":{"body":34,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"出于方便的原因，在本译作中大多数情况下并没有打出 GNU Emacs 的全称。由于Emacs 是具有多种实现的，在未作说明的情况下，文中出现的 Emacs 均代指 GNU Emacs。","breadcrumbs":"翻译说明 » 翻译说明","id":"0","title":"翻译说明"},"1":{"body":"GNU Emacs 集成环境的大部分实现都是使用名为 Emacs Lisp 的编程语言来编写的。使用 Emacs Lisp 编写的代码可以被视作软件——一系列指令，当你发出命令时它们将会为计算机的行为提供指导。Emacs 被设计为可以使用 Emacs Lisp 编写新代码，并轻松简单的将新代码安装为编辑器的插件。 GNU Emacs 有时被称作“可扩展编辑器”，但是它所提供的功能远远超出了编辑这一范围。当描述 Emacs 时，将其称之为“可扩展计算环境”更为贴切。但是，这种叫法相当冗长，称其为编辑器相对更为简单。除此之外，你在 Emacs 中完成的一切工作都被视为一般意义上的编辑，比如查询玛雅历和月相、多项式化简、代码调试、文件管理、阅读邮件、写作等活动。 尽管我们只在 Emacs 中使用 Emacs Lisp，但它是一种完备的计算机编程语言。你可以使用 Emacs Lisp 做其他编程语言可以做到的一切事。 本书读者的出发点可能不尽相同，或许你是出于学习编程的目的，亦或是扩展自己的 Emacs 编辑器，甚至是想迈出成为程序开发者的第一步。本书旨在为你的起步之路提供帮助，不止于指导你学习编程的基本知识，更重要的是向你展示如何教自己完成进一步的学习。","breadcrumbs":"前言 » 前言","id":"1","title":"前言"},"2":{"body":"在本书中，你将会看到一些运行在 Emacs 中的示例程序。如果你使用 Emacs 内建的 Info 文档阅读器（译者注：通过在 Emacs 按下C-h i可以打开 Info documentation reader ）阅读本书，你可以在 Info 文档阅读器中出现的示例程序旁直接运行该程序。除此之外，你也可以选择坐在运行着 Emacs 的计算机旁，手捧着本书的印刷副本阅读（作者：我喜欢这种方式，我喜欢印刷的纸质书籍）。如果你的身旁并没有正在运行着 Emacs 的计算机，也不会对你阅读本书产生阻碍，但在这种情况下最好将阅读本书视作阅读小说或是陌生城市旅行指南，这将会很有趣但是缺乏实践效果。 本书的主要内容是 GNU Emacs 上的代码编写实例以及实践指导，这些教程用于实现两个目标：其一是使你熟悉运行在 Emacs 上的实际代码（你会日常使用到的一部分）；其二是使你熟悉 Emacs 的工作方式。实现具有生产力的 Emacs 工作环境的过程是有趣的，在此过程中，我希望你能养成浏览源代码的好习惯，便于从中学习与挖掘源码实现之初的想法。某种角度上讲，拥有 Emacs 就像拥有了巨龙之巢中的宝藏，可以不断发掘有价值的知识。 在学习如何使用 Emacs 编辑器、如何使用 Emacs Lisp 编程语言的相关知识外，本书提供的示例和教程同样有助于你熟悉 Lisp 编程环境。Emacs 提供了一些编程时的有用工具，比如 M-. 所绑定的 xref-find-definitions 命令（它可以便捷的查找变量、函数、方法、宏等定义并跳转）。此外，你还可以了解到更多诸如 buffer 等 Emacs 环境中有用对象的特性。了解这些 Emacs 特性会给你带来探索家乡未知小道一样的体验。 最后，我希望能传达一种想法，即可以通过使用 Emacs 来学习一些你可能不熟悉的编程技能。你可以通过使用 Emacs 来理解编程中困扰你的地方，或是找到如何利用 Emacs 完成新任务的方法。自力更生别有趣味，这也是 Emacs 相较其他编辑器的独特优势。","breadcrumbs":"前言 » 如何阅读本书 » 如何阅读本书","id":"2","title":"如何阅读本书"}},"length":3,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"c":{"df":1,"docs":{"2":{"tf":1.0}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"c":{"df":3,"docs":{"0":{"tf":2.0},"1":{"tf":3.4641016151377544},"2":{"tf":4.358898943540674}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"h":{"df":1,"docs":{"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":2,"docs":{"1":{"tf":2.23606797749979},"2":{"tf":1.4142135623730951}}}}}},"m":{"df":1,"docs":{"2":{"tf":1.0}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"c":{"df":1,"docs":{"2":{"tf":1.0}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"c":{"df":3,"docs":{"0":{"tf":2.0},"1":{"tf":3.4641016151377544},"2":{"tf":4.358898943540674}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"h":{"df":1,"docs":{"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":2,"docs":{"1":{"tf":2.23606797749979},"2":{"tf":1.4142135623730951}}}}}},"m":{"df":1,"docs":{"2":{"tf":1.0}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});