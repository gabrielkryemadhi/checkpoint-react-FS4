# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Start editing the **src/app.jsx** file.

Run:

    npm run dev

This will start your react app.

React app will run on **localhost:3000**.

Build a website where a user can input text in a text input field, press a button and save it to a list, then show it to the user.


## You can use function or class components for react.

Write an input field to get the text, and a "Save" button, which when pressed store the text in an array, as an object that looks like:

    { text: "Input text here",id: 1, timestamp: 1676229451520 }

After user clicks the save button, clear your text input, and refocus the text input tag.

You can use **Date.now()** to get your timestamp.

ID is number, and it starts at 1 and then gets incremented by +1 every time a new post gets created. So the first post will have ID 1, second post will have ID 2, and so on.


### Store this in localstorage using JSON.
When the App component mounts, retrieve your data from localstorage, so that we display the data when user refreshes page.
When a user adds a data item, store it in localstoarge so that it's properly synchronized.

## Display

Display all the items in three columns. One column with the items sorted by when they were added, and two more columns:
 - one more column with the same items, sorted alphabetically
 - one more column with the same items, sorted by character length

Display an item in its own Item component. The Item component will have the text, and two buttons "Delete" and "Update".

The Item should also have a character count, displayed at the left of the item. When user writes something in the item, the count changes.
So for example, if our item text is:
"Hello world" then the count should be 11.

The Item should also have a small, gray text at the bottom(styled using css), with the text:
"Posted at Sun, 26 Mar 2023 19:07:20 GMT"

Hint: You can use:

    let d = new Date(1679857640696);
    d.toUTCString();


Use **destructuring** to retrieve props from the component props, when using them to render the item.
Delete button should call a callback function defined inside the App component, that will remove an item from the list of items.

The text inside the post component should be editable. You can use an Input tag, or a simple tag with the property contenteditable enabled, you can choose how you want to do this.

The Update button will update the post text with whatever you edited in that post text.


## Button to sort and reverse sort by timestamp.
Add a button called "Sort by Time", when clicked will sort the items by time, when clicked again it'll reverse sort the items.
(Button only applies to first item column)

## Button to sort and reverse sort alphabetically
Add a button called "Sort by Text", when clicked will sort the items alphabetically, when clicked again it'll reverse sort the items.
Hint: use a.text.localeCompare(b.text) in your sort fc.
(Button only applies to first item column)

## Character count
Every item should have a character count box to the left of the text box.
So for example if the item text is "Hello world" it'll show up like:

Char Count | Text Content | Delete Button
-----------|--------------|--------------
11         | Hello world  |     [Del]




