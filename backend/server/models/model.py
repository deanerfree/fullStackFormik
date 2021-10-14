from pydantic import BaseModel, Field
from bson import ObjectId
from datetime import datetime, date
from typing import Optional

currentDateTime = datetime.now()
currentDate = date.today()

# Model to create a user


class CreateUser(BaseModel):
    firstName: str
    lastName: str
    age: int
    company: str

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }


# Model if updating a user
class UpdateUser(BaseModel):
    firstName: Optional[str]
    lastName: Optional[str]
    age: Optional[int]
    company: Optional[str]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "firstName": "Greg",
                "lastName": "Dog",
                "age": "30",
                "company": "Cenovus",
            }
        }

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
