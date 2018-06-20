Profile App
===========

Profile App is a webapp made using ReactJS and Redux. This is my application using Redux. 

Profile App displays a list of user profiles with a heart icon (solid or hollow heart depending upto whether that user profile is favouritised or not). On selecting a user profile you are redirected to a page containing all the details about that user. You can 'favouritise' or 'defavouritise' a user by clicking on the heart on this page. The changes are updated in the Redux store and are immediately reflected in the main user profiles list.

The updates are made persistent using a package Redux-persist. The Redux store is stored in the browsers localstorage, so even if you refresh the page the updates in the user profiles are retained.

Made using Redux-Boilerplate by [Bucky](https://github.com/buckyroberts)

This is an infograph by Bucky which clearly demonstrates the structure of a Redux application.
![](http://i.imgur.com/DUiL9yn.png)

