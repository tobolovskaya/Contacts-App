# Contacts App
This is a refactored Contacts App as part of the "Mastering Front-End Development with React" course assignment. The app allows users to manage a list of contacts with interaction through a backend for persistent data storage.

## Task Description
Refactor the code of the Contacts App from the previous module's homework assignment.

Remove the code related to storing and reading contacts from local storage, specifically the code associated with Redux Persist.
Add backend interaction to store contacts.

## Backend Setup
Create a personal backend for development using the UI service mockapi.io.

## Operations
In the redux folder, create a file named contactsOps.js to store asynchronous action creators.
Use createAsyncThunk to define asynchronous operations.
Use the axios library to perform HTTP requests.

## Technologies Used
**React** for the front-end interface
**Redux Toolkit** for state management
**createAsyncThunk** for handling asynchronous actions
**axios** for making HTTP requests
**mockapi.io** as the mock backend

## Prerequisites
Node.js (version 16 or later)
NPM or Yarn

## Features
**View Contacts:** View all stored contacts retrieved from the backend.
**Add Contact:** Add a new contact to the backend.
**Delete Contact:** Remove a contact from the backend.

## Folder Structure
**redux/contactsOps.js** - Contains asynchronous action creators for backend operations.
**redux/slices/contactsSlice.js** - Contains reducers and actions for managing contact data in the state.
