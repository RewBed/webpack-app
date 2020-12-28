# Webpack App

##### Шаблон приложения с поддержкой:
- js
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

Так же объект `HTML_TEMPLATE.PARAMETERS` можно расширять своими параметрами и использовать их файле шаблона

###### Пример

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





