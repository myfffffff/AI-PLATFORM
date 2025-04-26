// src/data/menu.ts

export const headerMenu = [
    { name: '主题信息', link: '/theme-info' },
    { name: '团队介绍', link: '/team' },
    { name: '博客', link: '/blog' },
    { name: '样式指南', link: '/style-guide', showArrow: false,
        children: [
            { name: '排版', link: '/style-guide#typography' },
            { name: '颜色', link: '/style-guide#colors' },
            { name: '链接', link: '/style-guide#links' },
            { name: '按钮', link: '/style-guide#buttons' },
            { name: '表单', link: '/style-guide#forms' },
            { name: '列表', link: '/style-guide#lists' },
        ]
    }
];

export const footerMenu = [
    { name: '样式指南', link: '/style-guide' },
];

export const legalMenu = [
    { name: '隐私政策', link: '/legal/privacy-policy' },
    { name: '服务条款', link: '/legal/terms-of-service' }
];

