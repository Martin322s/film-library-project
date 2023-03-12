# Film- Library- Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview 
Single Page App for for sharing your favourtite films. The application allows visitors to browse through different publications. Users may register with user information, email and password, which allows them to create their own publications. Creators can also edit and delete their own sharings at any time.

## Technical Details 
The application have following resources:

# Project scaffold: 
- A package.json file, containing list of common dependencies.
- Components for every endpoint of the application. 
- To start the application, execute the command “npm install” via the command-line terminal.
- Local REST Service: A special server, which contains sample data and support user registration and CRUD operations via REST requests is included with the project.

## Application Endpoints
- Navigation bar – links will correctly change the current page (view). Guests can see the links to the home, catalog, sign in and sign up pages. The logged in user navbar will contain the links to the home page, catalog, create page, profile page and logout action. 

- Sign in – contains a form for existing user authentication. By providing a email and password, the app will login user, if there are no empty fields. Login functionalty will send POST request to the correct endpoint with email and password with correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful login the user will be redirected to the home page. If there are empty fields, alert notification will be displayed.

Sign up – the page contains a form for new user registration. By providing a first anme, last name, email and password, the app will register a new user in the system, if there are no empty fields. Register functionalty will send POST request to the correct endpoint with names, email and password with correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful register the user will be redirected to the home page with requiring login. If there is empty fields, alert notification will be displayed.

Logout – The logout action is available to logged in users. It perform GET request to the correct endpoint, with access token sent in the required headers. Any session information will be cleared.

Home page – All users will be welcomed by the Home page, where they can naviagate to the other views.

Publications Page – The page displays a list of all publications in the system. Details button is available to the logged in users and clicking on the button, leads to the details page for the selected cause.

If there are no publications, the following view will be displayed:

Create Publication – The create page is available to logged in users. It contains a form for creating new causes. All fields must me filled before create it. Creating fuctionalty sends POST request to the correct endpoint with required headers – data and access token. The service will return the newly created record. Upon success, the user will be redirected to the publications page.
Details Page – The logged in users are able to view details about publications. Clicking the Details link in the view will display the page. If the currently logged in user is the creator of the publication, the Edit and Delete buttons will be displayed.
If the currently logged in user is not the creator, the Donate button will be displayed:

If the Donate button is clicked, the user will donate 100$ to the selected cause and the button won’t be available:

Profile Page – The page show the user names, email and all created publications made by the current user:
If there are no created publications:

Edit publication page – The edit page is available to logged in users and it allows author to edit their own publication. Clicking the Edit link will display the edit page. It contains a form with input fields for all relevant properties. All fields must be filled before sending the information.
The service will return the modified record. Upon success the user will be redirected to the publications page.

Delete Publication – The delete action is available to the logged in users, for publication that they created. When the author clicks on the Delete button on any of his publications, the publication will be deleted from the system. The service will return an object, containing the deletion time. Upon success, the user will be redirected the user to publications page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
