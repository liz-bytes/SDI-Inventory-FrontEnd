# SDI-Inventory-FrontEnd

# Inventory Management App Frontend

This project is the frontend for the Inventory Management App. It is built with React and uses React Router v6 for client-side routing. The application allows inventory managers to sign up, log in, create, view, edit, and delete items. Visitors can also view all items with truncated descriptions and see detailed information for each item.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Routing](#routing)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **User Authentication:**
  - Sign up
  - Log in
- **Inventory Management:**
  - View inventory list with truncated descriptions
  - View detailed information for each item
  - Create new items (auto-populates user ID from Auth Context)
  - Edit items inline (with edit mode toggle)
  - Delete items (with redirection back to inventory)
- **User Inventory:**
  - View a specific user's inventory

## Tech Stack

- **React:** For building the user interface
- **React Router v6:** For client-side routing
- **Fetch API:** For communicating with the backend API
- **CSS:** For styling (dark theme)

## Project Structure

Routing
 Key routes include:

/ — Home page.

/signup — Signup form.

/login — Login form.

/inventory — List of all inventory items.

/items/new — Create a new item.

/items/edit/:id — Edit an existing item.

/items/:id — View details for a single item.

/users/:id/items — View a specific user's inventory.