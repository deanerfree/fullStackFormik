from pydantic import BaseModel, Field
from bson import ObjectId, Timestamp
from typing import Optional


# Model to create a user


class CreateUser(BaseModel):
    firstName: str
    lastName: str
    age: int
    email: str
    company: str
    address1: str
    address2: str
    city: str
    province: str
    postalcode: str
    createDate: str
    dateUpdated: str

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


# Model if updating a user
class UpdateUser(BaseModel):
    firstName: Optional[str]
    lastName: Optional[str]
    email: Optional[str]
    age: Optional[int]
    company: Optional[str]
    address1: Optional[str]
    address2: Optional[str]
    city: Optional[str]
    province: Optional[str]
    postalcode: Optional[str]
    dateUpdated: Optional[str]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        # schema_extra = {
        #     "example": {
        #         "firstName": "Greg",
        #         "lastName": "Dog",
        #         "age": "30",
        #         "company": "Cenovus",
        #     }
        # }

# Successful response header


def ResponseModel(data, message):

    return {
        "data": [data],
        "code": 200,
        "message": message,
    }

# Error response header


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}
