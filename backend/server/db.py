import motor.motor_asyncio
from decouple import config
MONGO_DETAILS = config('MONGO_DETAILS')

# motor is used to communicate with MongoDb. Note
# When creating data _id in pydantic means private data and there are issues when creating new data
# This can be solved by adding from bson.objectid import ObjectId
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.userDataBase
collection = database.get_collection("users")
