const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')



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
        contributors: false,
        sidebarDepth: 0,

        sidebar: [
            // Sidebar item
            {
                text: '年度记录',
                // link: '/record/README.md',
                children: [
                    {
                        text: '2022',
                        link: '/record/2022/'
                    }
                ]
            },
            {
                text: '硬技能',
                // link: '/hard/',
                children: [
                    {
                        text: '01 计算机基础',
                        link: '/hard/fundamental/'
                    },
                    {
                        text: '02 日常学习',
                        link: '/hard/learning/'
                    },
                    {
                        text: '03 论文',
                        link: '/hard/papers/'
                    }
                ]
            },
            {
                text: '软技能',
                // link: '/soft/',
                children: [
                    {
                        text: '01 读书笔记',
                        link: '/soft/book/',
                        children: [
                            {
                                text: '奈飞文化手册',
                                link: '/soft/book/奈飞文化手册.md',
                                children: []
                            }
                        ]
                    },
                    {
                        text: '02 日常思考',
                        link: '/soft/daily/',
                        children: [
                            {
                                text: '苏州漫行记',
                                link: '/soft/daily/苏州漫行记.md',
                                children: []
                            },
                            {
                                text: '东方健康膳食模式',
                                link: '/soft/daily/东方健康膳食模式.md',
                                children: []
                            },
                            {
                                text: '跟着孟岩学编程',
                                link: '/soft/daily/跟着孟岩学编程.md',
                                children: []
                            }
                        ]
                    },
                    {
                        text: '03 职场',
                        link: '/soft/workplace/',
                        children: [
                            {
                                text: '微软内推',
                                link: '/soft/workplace/微软内推.md',
                                children: []
                            }
                        ]
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
        activeHeaderLinksPlugin({})
    ]
}