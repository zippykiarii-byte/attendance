# Zippy Attendance Admin Panel

## Overview

This repository contains a static attendance management panel built with HTML, CSS, and JavaScript, using Firebase Authentication and Realtime Database for backend services.

The project includes an admin-facing dashboard for managing:
- Courses
- GPS venues
- Students
- Admin users
- Attendance reports

## Features

- User login with Firebase Authentication
- Registration page for creating admin accounts
- Reset password page
- Dashboard with system statistics
- Admin and student management pages
- Course management with active/inactive states
- GPS venue management with reopen/close actions
- Firebase-backed data storage in Realtime Database

## Project Structure

- `attendance/`
  - `index.html` — login page
  - `register.html` — account creation page
  - `reset.html` — password reset page
  - `dashboard.html` — main admin dashboard
  - `admins.html` — admin user management
  - `students.html` — student management
  - `courses.html` — course management
  - `gps.html` — GPS venue management
  - `reports.html` — reports and charts
  - `assets/` — image and logo files
  - `css/` — stylesheets
  - `js/` — application logic and Firebase integration

## Setup

1. Open the repository in your editor.
2. Host the files on a static server or open `attendance/index.html` in a browser.
3. Ensure `attendance/js/config.js` contains valid Firebase project credentials.
4. The app uses Firebase Realtime Database and Authentication, so the Firebase project must be configured accordingly.

## Firebase Configuration

The `attendance/js/config.js` file initializes Firebase with the app's configuration. If you want to use your own Firebase project, replace the values in `firebaseConfig` with your project's credentials.

Important Firebase services used:
- Authentication
- Realtime Database

## Notes

- The app is designed as a static front-end with Firebase as the backend.
- All page navigation is handled by HTML links and client-side JavaScript.
- Some admin and student stats are loaded dynamically from Firebase when pages are opened.

## Usage

- Use `attendance/index.html` to sign in.
- Use `attendance/register.html` to create a new admin account.
- Use `attendance/reset.html` to send a password reset link.
- After login, navigate to dashboard, courses, GPS, students, admins, and reports pages.

---

Feel free to update this README with deployment instructions or project-specific details as needed.
# attendance
