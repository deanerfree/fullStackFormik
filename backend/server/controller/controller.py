from server.models.model import (CreateUser)
from server.db import (collection)
from bson import ObjectId


async def fetchAllUsers():
    userList = []
    users = collection.find({})
    async for user in users:
        userList.append(helper(user))
    return userList


async def fetchUser(id: str) -> dict:
    user = await collection.find_one({"_id": ObjectId(id)})
    if user:
        return helper(user)


async def createUser(user: dict) -> dict:
    user = await collection.insert_one(user)
    newUser = await collection.find_one({"_id": user.inserted_id})
    return helper(newUser)


async def deleteUser(id: str):
    user = await collection.find_one({"_id": ObjectId(id)})
    if user:
        await collection.delete_one({"_id": ObjectId(id)})
        return True
    return False


async def updateUser(id: str, data: dict):
    if len(data) < 1:
        return False
    user = await collection.find_one({"_id": ObjectId(id)})
    print("the user", user)
    if user:
        updated = await collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated:
            return True
        return False


def helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "firstName": user["firstName"],
        "lastName": user["lastName"],
        "age": user["age"],
        "company": user["company"],

    }
