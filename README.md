# Front-End Skills Task

## What do we want to get from the interview?

- Having some UI elements the exercise needs to have
- Code organisation
  - Components
  - State management
- Code readability (variable names, one liners that should not be)
- Prettier/Eslint
- Unit Tests
- Connect UI to an API
- Good documentation (readme/comments when necessary/what would you have done with more time)
- Git branches and commits
- Styling, does not need to be an amazing UI, but looking OK
- Where do they store the API key
- Did they do more than we ask ?

## Frontend Coding Exercise

What do we expect from you:

- Elegant code
- Efficient code
- Semantically correct ts/js
- Semantically correct css/css-in-js

We would like to see you implement a web application with two screens:

- First screen:
  - a way for the user to insert a first name that will be shown in the second screen.
- Second screen:
  - Display a greeting for the user in the header, e.g. “Hello, John” if the first name is “John”
  - Implement an Image search box
    - Display the results in a grid
    - Page should be responsive

Share a short screen recording (~30 seconds) of you using this application, entering the username and doing a search displaying some
results.

There are multiple public APIs you can use to implement the image search, feel free to use any API you like.

Although we won’t assess your UI design choices, we want to assess your skills when it comes to styling so make sure to style the
application so that you are happy to present it.

You are encouraged to treat this as if you were creating a pull request to be reviewed by your peers prior to a merge to production. We welcome you to use the technology you are familiar with, we don’t want you to spend more time than you should on the exercise.

Make sure to:

- Write some documentation in the Readme and explain the choices you have made;
- Let us know roughly how much time you had spent on your solution;
- Also let us know what you would have added if you had more time; and
- Send us a link to your repository (e.g. GitHub, Bitbucket) once you are ready.

Follow up questions when interviewing the candidate

- Explaining their code / choices
- If not React, giving us an overview of the framework
- Ask about code readability
- What would you improve? How do you envision it.

# Getting Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The task was a create images search box and I've decided to use [Unsplash API](https://unsplash.com/documentation#creating-a-developer-account). It's free and easy to connect but has a [limit](https://unsplash.com/documentation#rate-limiting) of 50 requests per hour for applications in demo mode.

0. create `.env` file in `/server` folder with your `USNPLASH_ACCESS_KEY`
1. `yarn install`
2. `yarn start`
3. open [http://localhost:3000](http://localhost:3000)

## TODO

- [ ] improve loading state to decrease rerenders
- [ ] increase test coverage
- [ ] add aliases for src/\*\* forlders
- [ ] add pre-commit hook with husky + lint-staged
- [ ] add pre-push hook with tests, typechecking and test coverage badges to readme.md
- [ ] could move types definition to separate files

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
