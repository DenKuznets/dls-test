# Тестовое задание (Front-End React)

# Верстка

Необходимо сверстать тестовую страницу согласно дизайн-макетам.

Дизайн-макеты доступны в Figma по [ссылке](https://www.figma.com/file/5dPAPZRin0lfmgrmvVkg8R/frontend-trial?node-id=0%3A2). 


## Размеры

Для отступов использовать `rem` за исключением отступов между колонками с постами, где нужно использовать `px`.

## Retina

Все изображения должны поддерживать Retina экраны и включать `srcset` атрибут (в json файле есть пути к двум картинкам).


# React

### **Шаг 1: Получение данных**

Вы можете получить данные с помощью **`fetch()`** или любой другой библиотеки (такой как Axios).

<aside>
💡 https://cloud.codesupply.co/endpoint/react/data.json

</aside>



### **Шаг 3: Поиск постов**

При вводе пользователем текста в поле поиска (визуально поле сделайте на свое усмотрение, в макете его нет), должны отображаться только те посты, заголовки или описания которых содержат этот текст.


### Технические моменты:

- Код должен быть написан с использованием функциональных компонентов и хуков (React Hooks).
- Для управления состоянием компонентов следует использовать хук **`useState`**.
- При обновлении состояния и/или производительности компонентов следует использовать хук **`useEffect`**.

## Конечный результат

Конечным результатом является ZIP архив.

Название файла архива должно быть в формате `front-ivanov.zip`, где `ivanov` - Ваша фамилия. 

Архив пришлите нам на почту, или закачайте на сайт/файлообменник и пришлите ссылку на скачивание.

Готовый скомпилированный проект закачайте на публичный сервер (например GitHub) и пришлите ссылку.