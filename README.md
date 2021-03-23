# Trashed is an organizational tool to help users keep their communities clean. 

<h2>Try the site live: <a href=https://trash-ed.herokuapp.com/login/>Here</a> <b>|</b> Check out our <a href="https://github.com/QuintinHull/trashed">documentation</a></h2>

[![Screen-Shot-2021-03-23-at-6-38-18-PM.png](https://i.postimg.cc/DfxBbYSk/Screen-Shot-2021-03-23-at-6-38-18-PM.png)](https://postimg.cc/z3Rns7w0)

## Technologies used in Trashed

**JavaScript**

**Python**

**SQLAlchemy**

**Flask** 

**React**

**Redux**

**Google Maps API**

**Geocode API**

**CSS**

**Docker**

**Heroku** 

## Features implemented

* Users can **log in** or **sign up** to access the site.
* A user has the ability to **report a trashed area** that displays on Google Map.
* A user has the ability to **organize clean up events** for a trashed area.
* The **search** bar can locate using a case insensitive search term and display results to the user.
* A user has the ability to **post tips** to share different ways to reduce waste at home.
* A user can only **edit** an area, event, or tip that they created.
* A user can only **delete** an event or tip that they created.


## Challenges
Implementing Geocode to obtain the latitude and longitude of each created area proved to be challenging. The challenge I found was coming up with a way to use Geocode that would send back the latitude and longitude before the post request was sent to the back end. For my solution I used two helper functions (one for latitude and one for longitude) that utilized **Geocode.fromAddress()** and passed in an interpolated string that made up the entire address provided by the user. From there I was able to call each helper function and await the results inside of an asynchronous **handleSubmit()** before it was sent to the appropriate thunk.

[![Screen-Shot-2021-03-23-at-6-36-47-PM.png](https://i.postimg.cc/X78GvTqd/Screen-Shot-2021-03-23-at-6-36-47-PM.png)](https://postimg.cc/WhdbWYM1)

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

[![logo-with-name.png](https://i.postimg.cc/507LjTns/logo-with-name.png)](https://postimg.cc/G8DH570D)
