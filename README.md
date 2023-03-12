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

- Sign up – the page contains a form for new user registration. By providing a user information and password, the app will register a new user in the system, if there are no empty fields. Register functionalty will send POST request to the correct endpoint with names, email and password and correct headers. Upon success, the REST service will return information about the existing user along with a property access token for the user. After successful registration the user will be redirected to the home page. If there are empty fields, alert notification will be displayed.

- Logout – The logout action is available for the logged in users. It perform GET request to the correct endpoint, with access token sent in the X-Authorization header. Any session information will be cleared.

- Home page – All users will be welcomed by the Home page, where they can naviagate to the other views. It contains a list with categories and the last 3 added films.

- Catalog Page – The page displays a list of all films in the system. Details button is available for the logged in users and clicking on the button, leads to the details page for the selected film.

- Create film – The create page is available for logged in users. It contains a form for creating new film publication. All fields must me filled before sharing it. Creating fuctionalty sends POST request to the correct endpoint with required headers – data and access token. The service will return the newly created record. Upon success, the user will be redirected to the catalog page.

- Details Page – The logged in users are able to view details about every film. Clicking the Details button in the view will display the page. If the currently logged in user is the creator of the publication, the Edit and Delete buttons will be displayed.

- Profile Page – The page show the user names, email and all created and saved film publications made by the current user.

- Edit publication page – The edit page is available for the logged in users and it allows owner to edit their own publication. Clicking the Edit button will display the edit page. It contains a form with filled input fields for all relevant properties. All fields must be filled before sending the information.
The service will return the modified record. Upon success the user will be redirected to the details page of the same film.

- Delete Publication – The delete action is available for the logged in users, for the films that they created. When the author clicks on the Delete button on any of his publications, the publication will be deleted from the system. The service will return an object. Upon success, the user will be redirected to catalog page.

## Available Scripts

In the project and server directories, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).