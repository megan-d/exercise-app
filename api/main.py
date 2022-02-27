from ariadne import graphql_sync
from api import app
from api.schema.query.queries import resolve_exercises
from flask import request, jsonify
from ariadne.constants import PLAYGROUND_HTML
from ariadne import (
    load_schema_from_path,
    make_executable_schema,
    graphql_sync,
    snake_case_fallback_resolvers,
    ObjectType,
)


@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200


@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()

    success, result = graphql_sync(schema, data, context_value=request, debug=app.debug)

    status_code = 200 if success else 400
    return jsonify(result), status_code


query = ObjectType("Query")

query.set_field("exercises", resolve_exercises)

mutation = ObjectType("Mutation")
# mutation.set_field("createTodo", resolve_create_todo)

type_defs = load_schema_from_path("schema/schema.graphql")
schema = make_executable_schema(
    type_defs, query, mutation, snake_case_fallback_resolvers
)