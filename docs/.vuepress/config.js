const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')


module.exports = {
    title: 'Plantree',
    description: 'A hub to archive thinkings',
    base: '/press/',

    theme: defaultTheme({

        navbar: [
            {
                text: 'About',
                link: '/about/'
            }
        ],

        repo: 'https://github.com/plantree/press',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,

        sidebar: [
            // Sidebar item
            {
                text: '年度记录',
                link: '/record/',
                children: [
                    {
                        text: '2022',
                        link: '/record/2022/'
                    }
                ]
            },
            {
                text: '硬技能',
                link: '/hard/',
                children: [
                    {
                        text: '01 计算机基础',
                        link: '/hard/fundamental/'
                    }
                ]
            },
            {
                text: '软技能',
                link: '/soft/',
                children: [
                    {
                        text: '01 读书笔记',
                        link: '/soft/book/',
                        children: []
                    }
                ]
            },

        ]
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 5
        }),
        nprogressPlugin(),
    ]
}