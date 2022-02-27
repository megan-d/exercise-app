from dataclasses import dataclass


@dataclass(frozen=True)
class Exercise:
    id: str
    description: str
