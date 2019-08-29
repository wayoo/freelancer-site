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
            chunks: ['chunk-vendors', 'chunk-common', 'pc'],
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        mobile: {
            entry: 'src/mobile/main.js',
            template: 'public/mobile.html',
            filename: 'mobile.html',
            chunks: ['chunk-vendors', 'chunk-common', 'mobile'],
        },
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
