from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.controller.controller import (
    fetchAllUsers,
    fetchUser,
    createUser,
    deleteUser,
    updateUser,
    checkEmail
)
from server.models.model import (
    ErrorResponseModel,
    ResponseModel,
    CreateUser,
    UpdateUser,
)

router = APIRouter()


@router.get("/findAllUsers", response_description='Return all user data')
async def getUsers():
    users = await fetchAllUsers()
    if users:
        length = len(users)
        print(users)
        return ResponseModel(users, f'{length} Users Recieved')
    return ErrorResponseModel("An error occurred.", 400, "No users returned")


@router.get("/findUser/{id}", response_description="Return user data")
async def get_by_id(id):
    user = await fetchUser(id)
    if user:
        return ResponseModel(user, 'User Recieved')
    return ErrorResponseModel("An error occurred.", 404, "User doesn't exist.")


@router.post("/create", response_description="User added to the database")
async def postUser(user: CreateUser = Body(...)):

    user = jsonable_encoder(user)
    email = user["email"]
    checkUser = await checkEmail(user["email"])
    if checkUser:
        return ErrorResponseModel("Email Exists", 400, f"Email: {email} already exists")
    newUser = await createUser((user))
    if newUser:
        return ResponseModel(newUser, "User added successfully.")
    return ErrorResponseModel("An error occurred.", 400, "User was not added")


@ router.delete("/deleteUser/{id}", response_description="remove user data")
async def delete_by_id(id: str):
    response = await deleteUser(id)
    if response:
        return ResponseModel(f"User with ID: {id} removed".format(id), "User deleted successfully")
    return ErrorResponseModel("An error occurred.", 404, f"There is no user with this id: {id}")


@ router.put("/updateUser/{id}", response_description="Update a user")
async def update_user(id: str, user: UpdateUser = Body(...)):
    success = f"User with ID:{id}, update is successful".format(id)
    req = {k: v for k, v in user.dict().items() if v is not None}

    update = await updateUser(id, req)
    # returns a boolean
    # true
    if update:
        return ResponseModel(
            f"User with ID: {id} user update is successful".format(id),
            "User name updated successfully",
        )
    # false
    return ErrorResponseModel(
        "An error occurred",
        404,
        "There was an error updating the user data.",
    )
