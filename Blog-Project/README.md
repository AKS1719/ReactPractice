# Blog Project Using React 📫

## Screenshots 📜

## Requirements for Blog App

-   React + vite
-   backend -> appwrite -> it is a open source library
-   TinyMCE for text editor
-   Html react parser -> for parsing the html for the blog
-   React Hook form to handle the forms

## React setup :

Required Libaries for the project

`npm create vite@latest`

### Installing dependencies

```CLI
npm i @reduxjs/toolkit
npm i react-redux
npm i react-router-dom
npm i appwrite
npm i @tinymce/tinymce-react
npm i html-react-parser
npm i react-hook-form
```

## Environment variable setup

-   Creating `.env` file alwasy in the root
    all the hosting websites takes a good care of accessing the secret varibales

-   Taking access of the .env file in the app.jsx

-   First must keep the env variables name starting with the framework you are using or check the docs for the framework with env

-   In vite we have to put `VITE_` before the env variable name

-   By using this line we can import it

```javascript
import.meta.env.<var name>
```

## Appwrite Backend Setup

-   Create new project
-   Go to setting and bring the project id and the endpoint (the url of appwrite api)

### Database

-   Create new database
-   Copy the id and set the environment variables

### Collection

-   After creating the collection in the database
-   Copy the collection id and paste it in the environment variable
-   Go to the collection setting and
-   Assign permission that who can change update delete and read the content of the table

### Attributes

-   In collection we can create the attributes to click on the attributes tab in the collection
-   Then create as many attributes you want

### Buckets

-   Currently for this project we are using the storage and trying to store the images in the bucket

-   Go to storage
-   Create bucket
-   Copy the buccket id
-   Paste it in the env variable

`bucket also require permission thorugh the settings`

## Creating Conf folder in the source folder

-   This file is used for the config purposes

-   `in some cases we can provide the env file values not in the double quotes which can be treated as number which is gonna make trouble and debugging will be hard `

-   so using of conf file and forcefully converting the env values to string

## Backend Configuration

## Appwrite

-   It is a backend service provider

-   we are creating a production grade app and if we want to change our backend functionality
    so for that case we make individual folders

### Auth service of appwrite

-   create user (signup )
-   login user
-   logout user (deleting sessions)
-   getting current user

`making the services in a sepearte files won't affect frontend content and code reusability increases`

### config service of appwrite

-   createPost
-   updatePost
-   deletePost
-   getPost
-   getPosts

-   uploadFile
-   deleteFile

## Redux Toolkit setup

-   Create a `Store` Folder

Add the following code

```javascript
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {},
});

export default store;
```

-   This store will be created which uses redux context to store data and propagate though the app

-   Create a Reducer for the store

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            (state.status = false), (state.userData = null);
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
```

-   This reducer provides actions like login and logout

-   Now add the provider to the main.jsx file

```javascript
<Provider store={store}>
    <App />
</Provider>
```

-   Redux setup is complete now we can use the reducer using `dispatch` method and `useSelector ` hook

## Components

-   Creating a head that is the navigation component
-   Create a static Footer component
-   Create a Container component
-   Create a Button component
-   Create a Input component
-   Create a Logout Component

## React Hook Form

-   provides a handlesubmit
-   The Handlesubmit is a event which on occurence defines which method you want to call
-   useForm hook used here

### Login

### Signup

### AuthLayout componenet

It is a mechanism to protect routes and pages 

it is a protected container through which we decide to display the content or not 

## RTE Real time editor