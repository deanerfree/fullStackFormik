# fullStackFormik

<h2>Full Stack</h1>
<div>
  <p>This is a full stack app built using the FARM framework</p>
  <p>Frontend is built using React and Formik to manage the form state</p>
  <p>Backend is built on Python using <a href="https://fastapi.tiangolo.com">Fast API</a></p>
  <p>Database is built with MongoDB using motor to manage it</p>
<div>
  <h3>To get started</h3>
  <h4>Frontend</h4>
<ol>
  <li>In a folder of your liking git clone <a href='https://github.com/deanerfree/fullStackFormik'>http://https://github.com/deanerfree/fullStackFormik</a></li>
  <li>from console, terminal or command prompt type or copy npm install && npm start</li>
  <li>Enjoy!</li>
</ol>
  <h4>Backend</h4>
<ol>
  <li>Activate backend virtual environment : source venv/bin/activate</li>
  <li>Install packages: pip3 install -r requirements.txt</li>
  <li>Run the server: uvicorn server.app:app --reload</li>
</ol>
  <h3>Features</h3>
  <ol>
    <li>This is a multistep form</li>
    <li>This was styled using Material UI</li>
    <li>Items in the form are validated using Formik and Yup</li>
    <li>Email format is validated using regex</li>
    <li>The request is sent to a FastAPI server then stored in a mongoDB</li>
    <li>Server creates a timestamp when entered and updated</li>
    <li>The users email is the most unique entry so if the email already exists you will be redirected to a new page detailing the error</li>
    <li>If the request to create a new entry is successful you will be redirected to a success page</li>
    <li>Successfull server response lets you know when the entry was made and who made it</li>
    <li>Server is setup for CRUD with the ability to get, get by id, edit, and delete additionally to creating a profile</li>
  </ol>
  </div>
</div>
<div>
  <h3>Future Items</h3>
  <ol>
    <li>Add full CRUD functionality of the app connecting the frontend and backend to allow for get, put, and delete</li>
  </ol>
  </div>
</div>
