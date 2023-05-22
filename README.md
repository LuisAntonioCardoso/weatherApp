# weatherApp

Node.js backend API to fetch data from OpenWeatherMap and React frontend.

I'm using:

-   pnpm: as a package manager
-   express: to create the server
-   node-cache: to cache tha data that comes from the OpenWeatherMap api
-   dotenv: to load the .env file isolated from the code
-   axios: to fetch data from OpenWeatherMap api(backend only)
-   fetch: to fetch data from the backend(frontend only)
-   AsyncPaginate component: to layout data from GeoDB Cities api

To run the project:

-   to run the server(runs on port 3000):

    1.  open backend folder
    2.  run command: 'pnpm install' and then 'pnpm run dev'
    3.  to query the endpoint: 'http://localhost:3000/weather/id/(nome da cidade)' or 'http://localhost:3000/weather/coords/39.743055555&-8.806944444'

-   to run the frontend:
    1.  open frontend folder
    2.  open weatherAppUI folder
    3.  run command: 'pnpm install' and then 'pnpm run dev'
    4.  to access the app ui: '+crl,click' the URL in the terminal or access http://localhost:(port number)/ (likely that port is 5173)

In the upper side is a simple click base interface to get the weather from the cities

In the lower side is a more advanced version with a search bar, that queries an api for the cities that start with the input given
