const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = function override(config, env) {
    const preactAliases = {
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils"
    };

    config.resolve.alias = {
        ...config.resolve.alias,
        ...preactAliases
    };

    if (process.env.ANALYZE_BUNDLE) {
        config.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: process.env.ANALYZER_MODE,
            generateStatsFile: true
        }));
    }

    return config;
};
