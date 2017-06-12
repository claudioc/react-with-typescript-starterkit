# React with TypeScript: a starter kit

## This project puts together and gets you going with:

- React and ReactDOM
- TypeScript
- CSS (with autoprefixer)
- Webpack 2 (with hot module reload and web server)
- [Jest](https://facebook.github.io/jest/) for testing
- simple asset management

## This project won't give you:

- Application level state management ([Redux](https://github.com/reactjs/redux) or [Mobx](https://github.com/mobxjs/mobx))
    - I'd like to consider this project a starter for people wanting to learn something new, and putting Redux (which [you might not need](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)) at this stage it'd be too much. Redux also somehow forces you to jump into [containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) while at the beginning it's already enough getting accustomed to components
- A router
    - [React Router 4](https://reacttraining.com/react-router/) is much more than just a... router (you can "render" it, got it?) and before using it in a project is imho better if you take some time try learning how it actually works. Like Redux, RR is something which at the very beginning greatly removes the fun in the learning process and again, [you might not need it](https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d)
- a TypeScript [linter](https://github.com/palantir/tslint)
    - because, again, you might or might not want to use it in the future in the way I use it
- (rendered) component testing
    - this part would have needed another dependency and more configurations ([AirBnB's Enzyme](https://github.com/airbnb/enzyme))
- [CSS modules](https://github.com/css-modules/css-modules)
    - the modules are maybe at the moment the most common way to deal with CSS componentization and namespacing in React, but there are quite a few alternatives that you may consider before getting married to that technique. Take a look at [Fela](http://fela.js.org) for example, or [Styled Components](https://github.com/styled-components/styled-components) and pick the best which suits your need
- A proper _production_ build
    - since this is a starter and getting stuff production ready is where opinions tend to diverge the most, I prefer to not add any optimization here. What you probably want to do in this case is to extract all the CSS in one file (Webpack's `ExtractTextPlugin`), compress the JavaScript (Webpack's `UglifyJsPlugin`) and give every asset a unique name (with some sort of hashing). Of course, you might want to get [Critical](https://github.com/addyosmani/critical) too, and so on and so forth

## This project is very little opinionated but still:

- Uses [standardjs](https://standardjs.com) for the code style
- Puts the tests where they belong (together with modules or components) not in `__tests__`
- Each components in its own directory, with the `index.tsx` containing logic and JSX, plus test as `spec.js`, (if any) and style`.css`
- Uses a unprocessed `index.css` where you should put anything related to fonts definition and/or other CSS libraries imports which _could_ give you some headache when trying to put them together in the webpack assets pipeline. The file is just moved in the right position as it is

## Using it:

- `npm install`
- `npm start` will get you up and running on port http://localhost:3000
- Edit or add anything and the project will be automatically build
- If you want to run tests in watch mode, `npm test -- --watch` will do it
- If you want to copy the "final" application somewhere, just run `npm run build` and then copy everything that's into `/dist` wherever you want

## Known issues

- When the web page reload itself on a change, sometimes the changes are not honored. In that case, nothing beats a Cmd+R
- The `index.css` file doesn't trigger the live reload of the page (you shouldn't be editing this page too much anyway)

## Aknowledgments and further readings

- Thanks to @nickytonline for its [starter project](https://github.com/nickytonline/ts-react-starter) which gave me something to start with
- Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app) which gave this project some ideas (and the CSS bits)
- Here is [another TypeScript starter](https://github.com/Microsoft/TypeScript-React-Starter) from Microsoft which is based on create-react-app. It's own README is seriously worth reading
