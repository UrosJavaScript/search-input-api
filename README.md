# Install and run project

After cloning the project from the git repository, it is necessary to run the command npm install in the terminal of the root folder (of the cloned project). After that, all the necessary dependencies will be installed and you can start the project with the command "npm run dev", in a few milliseconds the url address will be displayed in the terminal, which you need to start in the browser.

# My description

I was creating a search input that calls the API and autocompletes after entering the first character and displays the results.
Using Vite + JavaScript SWC compiler.

In the App.jsx file, I set the react-router, which is used to display different screens in the application. I've added a reusable InputSearch component that receives two basic props.

In the services directory there is a file that contains a function to call the Api and cache the data if it is not there or if it has expired. The function in this file contains props that is passed to the component that uses the API when calling the function.

The main component is InputSearch, which is responsible for calling the Api function and passing it the values ​​entered in the textFild. After that, it checks whether the entered values ​​are correct and whether they are empty.

Then in this component there is SearchResult, which accepts 6 props and displays the data if it exists or prints an error depending on whether the entered characters match the results from the API.

If the SearchResult component displays the result after the search, you can select more entries (suggested items) and click the Submit button to move on to the next process. As long as you have not selected a single item, you will not be able to press the Submit button.

The last component, ListResult, is responsible for displaying submitted items. It receives data via useLocation(array of objects) from react-router and displays the data on the page via the map() function.
