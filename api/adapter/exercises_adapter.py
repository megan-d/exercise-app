from api import engine
from uuid import uuid4


fd = open("sql/create_exercise.sql")
create_exercise_mutation = fd.read()
fd.close()


# async def add_exercise():

#     return result
