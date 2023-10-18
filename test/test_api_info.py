from collections import namedtuple
from datetime import datetime, timedelta
from enum import Enum
from pathlib import Path
from typing import Dict, List, Literal, Optional, Set, Tuple, Union
from uuid import UUID

import pytest
from gradio_client.utils import json_schema_to_python_type
from pydantic import Field, confloat, conint, conlist
from pydantic.networks import AnyUrl, EmailStr, IPvAnyAddress

from gradio.data_classes import GradioModel, GradioRootModel


class StringModel(GradioModel):
    data: str

    @classmethod
    @property
    def answer(cls):
        return "Dict(data: str)"


class IntegerRootModel(GradioRootModel):
    root: int

    @classmethod
    @property
    def answer(cls):
        return "int"


class FloatModel(GradioModel):
    data: float

    @classmethod
    @property
    def answer(cls):
        return "Dict(data: float)"


class ListModel(GradioModel):
    items: List[int]

    @classmethod
    @property
    def answer(cls):
        return "Dict(items: List[int])"


class DictModel(GradioModel):
    data_dict: Dict[str, int]

    @classmethod
    @property
    def answer(cls):
        return "Dict(data_dict: Dict(str, int))"


class DictModel2(GradioModel):
    data_dict: Dict[str, List[float]]

    @classmethod
    @property
    def answer(cls):
        return "Dict(data_dict: Dict(str, List[float]))"


class OptionalModel(GradioModel):
    optional_data: Optional[int]

    @classmethod
    @property
    def answer(cls):
        return "Dict(optional_data: int | None)"


class ColorEnum(Enum):
    RED = "red"
    GREEN = "green"
    BLUE = "blue"


class EnumRootModel(GradioModel):
    color: ColorEnum

    @classmethod
    @property
    def answer(cls):
        return "Dict(color: Literal[red, green, blue])"


class EmailModel(GradioModel):
    email: EmailStr

    @classmethod
    @property
    def answer(cls):
        return "Dict(email: str)"


class RootWithNestedModel(GradioModel):
    nested_int: IntegerRootModel
    nested_enum: EnumRootModel
    nested_dict: DictModel2

    @classmethod
    @property
    def answer(cls):
        return "Dict(nested_int: int, nested_enum: Dict(color: Literal[red, green, blue]), nested_dict: Dict(data_dict: Dict(str, List[float])))"


class LessNestedModel(GradioModel):
    nested_int: int
    nested_enum: ColorEnum
    nested_dict: Dict[str, List[Union[int, float]]]

    @classmethod
    @property
    def answer(cls):
        return "Dict(nested_int: int, nested_enum: Literal[red, green, blue], nested_dict: Dict(str, List[int | float]))"


class StatusModel(GradioModel):
    status: Literal["active", "inactive"]

    @classmethod
    @property
    def answer(cls):
        return "Dict(status: Literal[active, inactive])"


class PointModel(GradioRootModel):
    root: Tuple[float, float]

    @classmethod
    @property
    def answer(cls):
        return "Tuple[float, float]"


class UuidModel(GradioModel):
    uuid: UUID

    @classmethod
    @property
    def answer(cls):
        return "Dict(uuid: str)"


class UrlModel(GradioModel):
    url: AnyUrl

    @classmethod
    @property
    def answer(cls):
        return "Dict(url: str)"


class CustomFieldModel(GradioModel):
    name: str = Field(..., title="Name of the item", max_length=50)
    price: float = Field(..., title="Price of the item", gt=0)

    @classmethod
    @property
    def answer(cls):
        return "Dict(name: str, price: float)"


class DurationModel(GradioModel):
    duration: timedelta

    @classmethod
    @property
    def answer(cls):
        return "Dict(duration: str)"


class IPv4Model(GradioModel):
    ipv4_address: IPvAnyAddress

    @classmethod
    @property
    def answer(cls):
        return "Dict(ipv4_address: str)"


class DateTimeModel(GradioModel):
    created_at: datetime
    updated_at: datetime

    @classmethod
    @property
    def answer(cls):
        return "Dict(created_at: str, updated_at: str)"


class SetModel(GradioModel):
    unique_numbers: Set[int]

    @classmethod
    @property
    def answer(cls):
        return "Dict(unique_numbers: List[int])"


class ItemModel(GradioModel):
    name: str
    price: float


class OrderModel(GradioModel):
    items: List[ItemModel]

    @classmethod
    @property
    def answer(cls):
        return "Dict(items: List[Dict(name: str, price: float)])"


class TemperatureUnitEnum(Enum):
    CELSIUS = "Celsius"
    FAHRENHEIT = "Fahrenheit"
    KELVIN = "Kelvin"


class TemperatureConversionModel(GradioModel):
    temperature: confloat(ge=-273.15, le=1.416808)
    from_unit: TemperatureUnitEnum
    to_unit: TemperatureUnitEnum = Field(..., title="Target temperature unit")

    @classmethod
    @property
    def answer(cls):
        return "Dict(temperature: float, from_unit: Literal[Celsius, Fahrenheit, Kelvin], to_unit: All[Literal[Celsius, Fahrenheit, Kelvin]])"


class CartItemModel(GradioModel):
    product_name: str = Field(..., title="Name of the product", max_length=50)
    quantity: int = Field(..., title="Quantity of the product", ge=1)
    price_per_unit: float = Field(..., title="Price per unit", gt=0)


class ShoppingCartModel(GradioModel):
    items: List[CartItemModel]

    @classmethod
    @property
    def answer(cls):
        return "Dict(items: List[Dict(product_name: str, quantity: int, price_per_unit: float)])"


class CoordinateModel(GradioModel):
    latitude: float
    longitude: float


class PathModel(GradioModel):
    coordinates: conlist(CoordinateModel, min_length=2, max_length=2)

    @classmethod
    @property
    def answer(cls):
        return "Dict(coordinates: List[Dict(latitude: float, longitude: float)])"


class CreditCardModel(GradioModel):
    card_number: conint(ge=1, le=9999999999999999)

    @classmethod
    @property
    def answer(cls):
        return "Dict(card_number: int)"


class TupleListModel(GradioModel):
    data: List[Tuple[int, str]]

    @classmethod
    @property
    def answer(cls):
        return "Dict(data: List[Tuple[int, str]]"


class PathListModel(GradioModel):
    file_paths: List[Path]

    @classmethod
    @property
    def answer(cls):
        return "Dict(file_paths: List[str])"


class PostModel(GradioModel):
    author: str
    content: str
    tags: List[str]
    likes: int = 0

    @classmethod
    @property
    def answer(cls):
        return "Dict(author: str, content: str, tags: List[str], likes: int)"


Person = namedtuple("Person", ["name", "age"])


class NamedTupleDictionaryModel(GradioModel):
    people: Dict[str, Person]

    @classmethod
    @property
    def answer(cls):
        return "Dict(people: Dict(str, Tuple[Any, Any]))"


MODELS = [
    StringModel,
    IntegerRootModel,
    FloatModel,
    ListModel,
    DictModel,
    DictModel2,
    OptionalModel,
    EnumRootModel,
    EmailModel,
    RootWithNestedModel,
    LessNestedModel,
    StatusModel,
    PointModel,
    UuidModel,
    UrlModel,
    CustomFieldModel,
    DurationModel,
    IPv4Model,
    DateTimeModel,
    SetModel,
    OrderModel,
    TemperatureConversionModel,
    ShoppingCartModel,
    PathModel,
    CreditCardModel,
    PathListModel,
    NamedTupleDictionaryModel,
]


@pytest.mark.parametrize("model", MODELS)
def test_api_info_for_model(model):
    assert json_schema_to_python_type(model.model_json_schema()) == model.answer
