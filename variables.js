module.exports.variables = {
    /**
     * Путь к папке для сборки
     */
    DIST_PATH: './dist',

    /**
     * Папка для работы сервера
     */
    SERVER_FOLDER: 'dist',

    /**
     * Порт сервера
     */
    SERVER_PORT: 9000,

    /**
     * Имя JS файла
     */
    BUNDLE_JS_FILE_NAME: 'index.bundle.js',

    /**
     * Имя CSS файла
     */
    BUNDLE_CSS_FILE_NAME: 'index.bundle.css',

    /**
     * Параметры HTML шаблона
     */
    HTML_TEMPLATE: {
        TEMPLATE: './src/index.ejs',
        TITLE: 'Webpack App'
    }
};