

# React TypeScript Calculator

This is a simple calculator application built using React and TypeScript. It provides a user-friendly interface for performing basic arithmetic calculations.

![Calculator Dark Theme](https://i.imgur.com/6gy600s.png)
![Calculator Light Theme](https://i.imgur.com/AnJtDdS.png)

## Live Preview

Check out the live preview of the calculator: [React TypeScript Calculator](https://calculator-react-tau-orpin.vercel.app/)



## Features

- Support for basic arithmetic operations: addition, subtraction, multiplication, and division
- Percentage calculation
- Dark and light theme toggle
- Clear button to reset the calculator
- CSS modules for styling

## Technologies Used

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- CSS Modules: A CSS file in which all class names and animation names are scoped locally by default
- Context API: Used for managing the theme state globally

## Project Structure

The project structure is as follows:

```
src/
  ├── assets/
  │   ├── ac.svg
  │   ├── moon.svg
  │   └── sun.svg
  ├── components/
  │   ├── Button/
  │   │   ├── Button.module.css
  │   │   └── Button.tsx
  │   └── Text/
  │       ├── Text.module.css
  │       └── Text.tsx
  ├── context/
  │   └── ThemeContext.tsx
  ├── hooks/
  │   └── useCalculator.ts
  ├── layout/
  │   ├── Body/
  │   │   ├── Body.module.css
  │   │   └── Body.tsx
  │   ├── BottomPanel/
  │   │   ├── BottomPanel.module.css
  │   │   └── BottomPanel.tsx
  │   └── TopPanel/
  │       ├── TopPanel.module.css
  │       └── TopPanel.tsx
  ├── utils/
  │   ├── calculatorLogic.ts
  │   └── operations.ts
  ├── App.css
  ├── App.tsx
  └── index.tsx
```

