# Test task from Zenfuse

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

## Task technical description

Задача:
1. Необходимо сверстать компонент и подключить стили из Tailwind CSS v.2
2. Настроить взаимодействие с компонентом через слайдер и инпут. При изменении позиции слайдера должно происходить изменение значения в инпуте. И наоборот, при изменении содержимого инпута слайдер должен изменять позицию
3. Сделать переключение режима light/dark через Tailwind Dark Mode

Валидация:
- в инпут можно ввести только числа с плавающей точкой
- после запятой только 2 знака
- минимальное значение 0, максимальное значение 100
- недопустимы отрицительные значения, при вводе отрицательного значения приводить его к 0
- при вводе значения большее 100, приводить значение к 100
