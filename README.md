# user-login-session
1. On the Login page create a login form, ask for Name, Email, and Mobile Number, and after successful submission log in. Save that provided info into the database along with the time of login.
2.  After login in the first step, create a session and let the user log in for 10 minutes and then automatically log out and clear the session. If the session is over, the same user with the same Name, Email, or Mobile Number should not be allowed to login back. For each login, all three have to be different. If the session is not over let the user continue with the remaining time. 
3. After login create a navbar displaying the remaining time for the user on the center of the page which should be updated after every 5 seconds. On the top-left of the page display a greeting message for the user with his/her name. And on the top-right provide a log-out button which a user can use to log out anytime he wants.
4.  In the home page body, provide a text box and a submit button. The user can write any message in that text box and hit submit button. The submit button will save his/her response. After submission, the user should log out immediately and his/her session should be cleared.  
5. If a user logs in with the name `admin`, email `admin@admin.com` and mobile `0000000000` then after login, show a table containing data for all the previous logins with columns Name, Email, Mobile Number, and Response.


How to run

This is a next.js based project

Ensure You have require database and tables mentioned in schema.sql

To run: `npm run dev`

Login Page: http://localhost:3000/login
