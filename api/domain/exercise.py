from dataclasses import dataclass
from typing import List


@dataclass(frozen=True)
class Exercise:
    id: str
    name: str
    description: str


@dataclass(frozen=True)
class Exercises:
    exercises: List[Exercise]