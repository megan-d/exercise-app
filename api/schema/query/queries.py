from ariadne import convert_kwargs_to_snake_case
from ariadne import QueryType

query = QueryType()


@query.field("exercises")
def resolve_exercises(obj, info):
    return "Here are your exercises..."
