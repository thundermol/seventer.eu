const path = require("path");
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return

        return {
            plugins: [
                new PrerenderSpaPlugin(
                    path.resolve(__dirname, 'dist'),
                    [ '/', '/about', '/portfolio', '/contact' ]
                ),
            ]
        }
    }
}
