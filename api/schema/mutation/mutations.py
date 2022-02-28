from ariadne import convert_kwargs_to_snake_case
from ariadne import MutationType
from api import engine

mutation = MutationType()

fd = open("sql/create_exercise.sql")
create_exercise_query = fd.read()
fd.close()


@mutation.field("addExercise")
def resolve_add_exercise(obj, info):
    with engine.connect() as con:
        # TODO: figure out how to pass in variable values to sql (using params)
        result = con.execute(create_exercise_query)
    return "You've added an exercise..."
