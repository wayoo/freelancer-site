console.log(process.env.NODE_ENV);


module.exports = {
    pages: {
        pc: {
        // entry for the page
            entry: 'src/pc/main.js',
            // the source template
            template: 'public/pc.html',
            // output as dist/index.html
            filename: 'pc.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'commons', 'pc'],
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        mobile: {
            entry: 'src/mobile/main.js',
            template: 'public/mobile.html',
            filename: 'mobile.html',
            chunks: ['chunk-vendors', 'commons', 'mobile'],
        },
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            return {
                optimization: {
                    splitChunks: {
                        cacheGroups: {
                            vendors: {
                                // https://stackoverflow.com/questions/50937643/exclude-certain-module-from-a-chunk-webpack-4
                                test(mod/* , chunk */) {
                                    // Only node_modules are needed
                                    if (!mod.context.includes('node_modules')) {
                                        return false;
                                    }
                                    // But not node modules that contain these key words in the path
                                    // mand-mobile element-ui 分别为移动端和 PC 端的组件库，不需要打包到 vendors 里面去
                                    // return false 之后会自动被 webpack 打包的 pc.js 和 mobile.js 两个 entry file 中去
                                    // 没有 name 名字会自动被设置为 chunk-vendors
                                    if (['mand-mobile', 'element-ui'].some(str => mod.context.includes(str))) {
                                        return false;
                                    }
                                    return true;
                                },
                                chunks: 'all',
                            },
                        },
                    },
                    mergeDuplicateChunks: true,
                },
            };
        }
    },
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://zyx-api.kk.wolaixiyi.com',
                // target: 'http://www.zyx.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api',
                },
            },
        },
    },
};
