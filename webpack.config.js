const path = require("path");

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, "public"),
        watchContentBase: true,
        port: 8080,
    },

    // jsファイルのライブラリ化
    // 複数のjsファイルをimportしてるファイル
    entry: {app: './src/index.js'},

    // ブラウザからバンドルにアクセスする際、以下のようにする
    // <script src="js/app.js"></script>
    output: {
        publicPath: "/js/",
        // entryのキーがnameになる
        filename: '[name].js',
        // パッケージ名
        // 以下のように使う
        // const greeting = new com.example.Greeting();
        library: ["com", "example"],
        // ライブラリ化の方式：Universal Module Definition
        libraryTarget: 'umd'
    }
};