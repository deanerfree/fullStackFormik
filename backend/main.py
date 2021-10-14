from fastapi import FastAPI


# from controller import (createUser, fetchAllUsers,
#                         fetchUser, deleteUser, updateUser)
# virtualenv venv creates a virtual environment with the name venv
# active this environment with the command 'source venv/bin/activate'
# install the packages to run fastAPI locally 'pip3 install -r requirements.txt'
# * note: FastAPI also installs pydantic, starlette, typing-extensions
# to run the server 'uvicorn server.app:app --reload'
# structured after this app https://testdriven.io/blog/fastapi-mongo/

app = FastAPI(title="Related Blog Articles",
              description="This API was built with FastAPI to manage form data",
              version="1.0.0",
              server=[
                  {
                      "url": "http://localhost:8000",
                      "description": "Development Server"
                  }
              ],)
