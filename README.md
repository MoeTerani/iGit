# iGit

## 🖥 Live Demo
https://polar-inlet-99837.herokuapp.com/#

This application is a quick way to find out about the most popular GitHub repositories and faces behind them, who contributed the most.

This application will provide the user with the first 30 repositories that have the highest number of stars by default.

By clicking on each of the repos, the user will receive the first 30 people who contributed the most to that repo, in descending order.

Users also have the possibility to search for any User or Repository on Github and by clicking on each of the result, they'll be sent to the Github page on a new tab.

![](https://github.com/MoeTerani/iGit/blob/master/client/src/Images/screenshot.jpg)

## 👨‍💻 Tech stack

- React (Functional components, Hooks)
- Semantic UI
- Node
- Express

## 🔥 Getting started

If this is your first time running the apllication:

- First, create a `.env` file to increase the limit-rate of the Github API to 5000 instead of the 60 public request per hour. The key that you have recieved needs to be saved at `Server/.env`.

```
API_KEY=XXXXXX
```

- start by running `npm i` insdie the Server folder and then `npm start`.
- start by running `npm i` insdie the Client folder and then `npm start`.

## 📝 Eslint

By running `npm run lint` you can see if there are inconsistencies based on airbnb linting settings in both client and server enviroment. 

## 🏗️ Further Development

- Improve Error handling.
- Removing the UI library and creating customized components in order to improve the CSS.
- Adding redux for state management and reduce the number of API calls.
- Adding the functionality to search for the most popular repos based on programming languages.


## 😎 Enjoy
