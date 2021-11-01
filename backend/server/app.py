from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from server.routes.user import router as UserRouter

app = FastAPI()

origins = [
    f"{API_CONNECTION}",
    "http://localhost:8000",
]
app.include_router(UserRouter, tags=["Users"], prefix="/api")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
