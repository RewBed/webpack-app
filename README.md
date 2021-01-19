# Webpack App

##### Установка

`git clone https://github.com/RewBed/webpack-app.git`  
`cd webpack-app`

Windows `rd .git /s /q`  
Unix `rm .git /s /q`

##### Шаблон приложения с поддержкой:
- js
- vue.js
- css
- scss
- sass
- ejs

##### Команды
| Команды | Описание | 
|----------------|---------|
| `watch` | вотчер с точкой входа через JS файл |
| `watch:html` | вотчер с точкой входа через HTML файл |
| `build` | продакшен версия с точкой входа через JS файл |
| `build:html` | продакшен версия с точкой входа через HTML файл |
| `start:server` | запуск сервер с автоматической перезагрузкой |

##### Параметры
| Переменная | Описание | default |
|----------------|---------|---------|
| `DIST_PATH` | путь папки для скомпилированных файлов (относительно `variables.js`)|`./dist`|
| `SERVER_FOLDER` | путь папки сервера (относительно `variables.js`)|`dist`|
| `SERVER_PORT` | порт сервера |`9000`|
| `BUNDLE_JS_FILE_NAME` | имя JS файла | `index.bundle.js` |
| `BUNDLE_CSS_FILE_NAME` | имя CSS файла | `index.bundle.css` |
| `API_PROXY` | прокси для ajax | `http://localhost:8080` |
| `HTML_TEMPLATE` | параметры html шаблона | 

##### Параметры HTML шаблона `HTML_TEMPLATE`

Все JS и CSS файлы подключаются в шаблон автоматически

| Переменная | Описание | default |
|----------------|---------|---------|
| `TEMPLATE` | путь до шаблона (относительно `variables.js`) | `./src/index.ejs` |
| `PARAMETERS.TITLE` | заголовок страницы | `Webpack App` |

Так же объект `HTML_TEMPLATE.PARAMETERS` можно расширять своими свйоствами и использовать их файле шаблона

###### Пример

```js
module.exports.variables = {
    /* ... */
    HTML_TEMPLATE: {
        TEMPLATE: './src/index.ejs',
        PARAMETERS: {
            TITLE: 'Webpack App',
            h1: 'Heading H1'
        }
    }
};
```

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title><%= TITLE %></title>
    </head>
    <body>
        <h1><%= h1 %></h1>
    </body>
</html>
```

##### Vue.js

Vue.js поддерживается по умолчанию  
Для его работы нужно добавить следующий код в `index.js`

```js
import Vue from 'vue';
import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');
```





