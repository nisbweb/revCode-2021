# Reverse Coding 2021

This project is part of the Reverse Coding 2021 contest held as a part of RUBIX 2021.
This project requires a firebase project to run with one required collection
- admin:
    - This collection should have a document which a field called start , set to true. This controls whether the application can move ahead of the instructions page or not.

Firebase auth is also required for login.
You will need to specify the following environmental variables in a .env file

```
REACT_APP_apiKey=<Your Firebase API KEY>
REACT_APP_authDomain=<Your Firebase auth domain>
REACT_APP_projectId=<Your Firebase project ID>
REACT_APP_storageBucket=<Your Firebase storage bucket name>
REACT_APP_messagingSenderId=<Your firebase messaging sender ID>
REACT_APP_appId=<Your Firebase APP ID>
```

## Commands available

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).


