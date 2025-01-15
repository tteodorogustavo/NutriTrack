module.exports = function (api) {
  api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module-resolver", {
                "root": ["./src"],
                extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
                alias: {
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@config": "./src/config",
                    "@constants": "./src/constants",
                    "@hooks": "./src/hooks",
                    "@navigation": "./src/navigation",
                    "@services": "./src/services",
                    "@utils": "./src/utils",
                    "@controllers": "./src/controllers",
                    "@models": "./src/models",
                    "@views": "./src/views",
                },
            }],
        ]
    };
}
