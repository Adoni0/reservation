Pool Lane Reservation App

The home page asks a user to select a date of reservation. Once selected, two choices are presented asking whether the user would prefer the A.M swim programs or P.M programs. Two buttons are rendered each representing a certain time of day to reserve. For each time on a particular day there are 6 spots reservable. Hovering over the button times displays a popover that shows the remaining spots available for that specific time.

<!-- ![](Gifs/home.gif) -->


After the user selects the date and time of their reservation, they are routed to a page to enter their name, email, and phone that is stored in the mongoDB database with the users time and date.

<!-- ![](Gifs/reserve.gif) -->

This app utilizes Firebase Auth for authenticating administrators. Admins can sign in to view all data in the database or request an email link to change their password?

<!-- ![](Gifs/signIn.gif) -->

The Admin page allows administrators to delete and edit reservations. It also displays the number of reservations in the current month, week, and day in the chart boxes at the top.

<!-- ![](Gifs/admin1.gif) -->

To make navigating through all reservations easier, the Admin page includes the options to filter by the upcoming week, filter by specific day, or view all reservations.

<!-- ![](Gifs/filter.gif) -->

