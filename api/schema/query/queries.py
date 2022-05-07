from ariadne import convert_kwargs_to_snake_case
from ariadne import QueryType

query = QueryType()


@query.field("getExercises")
def resolve_exercises(obj, info):
    print("Here are your exercises...")
    return {"id": "5", "description": "hi"}
