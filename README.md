# Equality-Experts_024


# Scheduler App

Scheduler App is a web-based application designed to schedule meetings with clients across the globe. It features a common landing page, admin dashboard, and user (or client) dashboard. Admins can set their availability, which is then visible to users for booking. Users can view and manage their booked slots, including the option to delete bookings.


- **Landing Page**: Common landing page for both admin and users.
- ![Landing Page](https://github.com/user-attachments/assets/b2a0310a-d85b-420f-b43e-1e4750accc44)
- **Admin Dashboard**: Admins can set their availability for meetings.
- ![Admin DashBoard](https://github.com/user-attachments/assets/ac6a105d-5dfc-4186-ad08-8470e2320f0f)
- **Admin Login**:Where Admin will login with Google
- ![Admin Login](https://github.com/user-attachments/assets/897a5d47-858a-4575-bd62-88ea6e8a1c84)
- **User Dashboard**: Users can view available slots and book meetings accordingly.
- ![User DashBoard](https://github.com/user-attachments/assets/4e2294e2-60b2-49ef-8e08-a969e3f043a4)
- **Booking Management**: Users can view their total booked slots and delete bookings if needed.
- ![Booked Slots](https://github.com/user-attachments/assets/92fe47f1-0f53-4c7b-8c36-1cf8d1a67cff)
- **Google Calendar Integration**: Seamlessly integrates with Google Calendar to manage meetings.
- **Google Authentication**: Secure authentication for admins using Google OAuth.

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Calendar API
- Google Authentication (OAuth)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scheduler-app.git
   cd scheduler-app
Set up a local server:
You can use any local server like http-server or live-server.

Install dependencies:
If you are using any package manager, install the required packages.

Google API Setup:

Set up Google Calendar API and Google OAuth as per the instructions on the Google Developer Console.
Obtain the API keys and client IDs.
Configure the application:

Replace the placeholder API keys and client IDs in your JavaScript code with the actual keys obtained from Google.
Set up a local server:
You can use any local server like http-server or live-server.

Install dependencies:
If you are using any package manager, install the required packages.

Google API Setup:

Set up Google Calendar API and Google OAuth as per the instructions on the Google Developer Console.
Obtain the API keys and client IDs.
Configure the application:

Replace the placeholder API keys and client IDs in your JavaScript code with the actual keys obtained from Google.
Usage
Landing Page:

Navigate to the landing page where both admin and users can log in.
Admin Dashboard:

Admins can log in using Google Authentication.
Set availability for meetings which will be visible to users.
User Dashboard:

Users can view the available slots set by the admin.
Book meetings by selecting the desired time slots.
View and manage booked slots, including the option to delete bookings.



Google Calendar Integration
This app uses Google Calendar API for scheduling and managing meetings. To integrate with Google Calendar:

Go to the Google Developer Console.
Create a new project or select an existing project.
Enable the Google Calendar API.
Set up OAuth 2.0 credentials.
Use the obtained API keys and client IDs in your application.
Contributing
We welcome contributions from the community! Please follow these steps to contribute:
