# Todo List Using React-Redux
An todo list application that allows you to add tasks, as well as edit existing tasks, deleting them and marking them as complete - using React-Redux. 

![image](https://user-images.githubusercontent.com/10632213/224558267-6357b365-79bb-46aa-aca0-9874c59e0563.png)

![image](https://user-images.githubusercontent.com/10632213/224558315-13d3ee4a-9d61-4faa-93a7-85dd1023fb1b.png)


## Contents
<ol>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#improvements">Improvements</a></li>
  <li><a href="#credits">Credits</a></li>
</ol>


## Installation
Download the todoListReactRedux folder to your local machine, or otherwise copy the files to <a href="https://codesandbox.io">Code Sandbox</a> for instant use. Please note that the node modules are not included. You will need to install React and Redux on your machine to run this (or otherwise use Code Sandbox).

## Usage
The app demonstrates the utility of React-Redux, making use of reducers, of 'configureStore' and 'useState'. The user can add tasks by entering text in the input box and either clicking the 'Add' button or hitting enter. The <form> element encompasses both the input box and Add button and hence listens for either.

![image](https://user-images.githubusercontent.com/10632213/224558435-d417e8b6-0d05-4641-98ec-479f3ff5cd84.png)

The input box itself is setup with an onChange event handler, which is necessary for React, as state cannot change without the useState feature.

When a todo is added, it will add the todo to the state and render it alongside three buttons. These three buttons are: Complete, Edit & Delete.

![image](https://user-images.githubusercontent.com/10632213/224558560-d99c8814-b5df-4de8-96e3-1567686b2724.png)

The Complete button will call upon a reducer to toggle the boolean value of the todo object 'completed' from true -> false (or vice versa). This updates the todo's className to include a 'completed' class that will change the CSS accordingly.

Note, we have to make sure that each element render corresponds with its todo, NOT its index, as when we delete todo's, we want the styling for completed and incomplete todo's to remain correctly assigned. This is done by assigning the same id's and properties to each rendered element as the corresponding todo:

![image](https://user-images.githubusercontent.com/10632213/224558772-a6b2383d-9b93-487d-bd96-81d41c98a231.png)

Our Edit button calls our editTask reducer and prompts the user to change the contents of the current todo.

![image](https://user-images.githubusercontent.com/10632213/224558879-874e634a-1199-466c-ae3e-4c28ec93b81f.png)

We do some minor defensive coding here to make sure the edit isn't a null value.

![image](https://user-images.githubusercontent.com/10632213/224558903-f86ac51e-001d-47d8-b7df-38dbc53aa125.png)

The Delete button then calls on the deleteTask reducer and filters out this todo from the todos array using the todo's id.

## Improvements
The 'Complete' button could be replaced as a single checkbox, which is more intuitive for users. Another thing of note is our reducers themselves rely on the same block of code with regard to indexing:

![image](https://user-images.githubusercontent.com/10632213/224558198-1d732d64-0141-45d5-8c4e-fcead06fb1b5.png)

This could be saved as a function and called on to increase efficiency.

It would also be good to add a popup menu for when a user wants to update a todo, rather than just the basic browser's alert box.

## Credits
This project was made by me and with the help of YouTube tutorial videos. At this level, most videos are outdated, not making use of the more recent 'configureStore' feature in Redux, so bridging the gap myself was the challenge. One of the biggest stumbling blocks I encountered was indexing the todo list based off of a selected todo's ID. This was because in React, we need to use the '===' operator. You can see in the code, that we need to pass state[id] and id as Numbers. In the process of sending the id through as an action.payload, it would appear we had a string "1" instead of a number 1.
