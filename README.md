# Data Explorer

This project is a proof of concept to explore general data sets with  many different types of visualization using javascript llibraries and using a REST API to access the data from a storage device. In this case, it uses json-server as a lightweight server. Later versions will use Django as a REST API so that it can also execute models in addition to grabbing static data.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npx json-server --watch data/db.json --port 8000`

Runs the lightweight json server as REST API. The keys in the json become part of the path.