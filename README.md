# UR Career Guide

UR Career Guide is a complete web-based platform to help students explore and apply to the best colleges based on career interest, location, and academic preferences. It provides aptitude testing, real-time data display, and application tracking via Firebase integration.

---

## Features

- User authentication (Login / Signup)
- Career-based and location-based college filtering
- Detailed college view with fees, placement, eligibility, and facilities
- Aptitude test with scoring
- Bookmark and apply for colleges
- Dashboard for personalized view
- Admin panel for adding and managing colleges

---

## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap 4
- Firebase:
  - Authentication
  - Firestore Database
  - Firebase Hosting
- Font Awesome Icons

---

## Basic Workflow

1. The user visits the homepage (`index.html`), which shows the main features and navigation links.
2. New users can register via `signup.html`, and returning users log in through `login.html`. Firebase Authentication handles this.
3. After login, users are directed to `dashboard.html`, which displays their name, aptitude score, and navigation cards.
4. Users can:
   - Take the aptitude test (`aptitude-test.html`) and view results.
   - Explore colleges using filters on `college-list.html`.
   - View detailed college information via `college-details.html`.
   - Apply or bookmark colleges (data saved to Firestore).
5. Admin users can access `admin.html` to upload or manage college data.
6. Firebase Firestore stores all application data, scores, bookmarks, and college info.
7. The entire site is deployed using Firebase Hosting.

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ur-career-guide.git
   cd ur-career-guide
   ```

2. Set up Firebase:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
   ```

3. Make sure `firebase.json` includes:
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         { "source": "**", "destination": "/index.html" }
       ]
     }
   }
   ```

---

## Folder Structure

```
/
├── index.html
├── login.html
├── signup.html
├── college-list.html
├── college-details.html
├── aptitude-test.html
├── dashboard.html
├── admin.html
├── js/
│   └── db.js
├── assets/
│   ├── stairs.jpg
│   └── stress.jpg
└── firebase.json
```

---

## License

This project is licensed under the MIT License.


