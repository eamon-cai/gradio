"""gr.CheckboxGroup() component"""

from __future__ import annotations

from typing import Any, Callable, Literal

from gradio_client.documentation import document, set_documentation_group

from gradio.components.base import FormComponent
from gradio.events import Events

set_documentation_group("component")


@document()
class CheckboxGroup(FormComponent):
    """
    Creates a set of checkboxes of which a subset can be checked.
    Preprocessing: passes the list of checked checkboxes as a {List[str | int | float]} or their indices as a {List[int]} into the function, depending on `type`.
    Postprocessing: expects a {List[str | int | float]}, each element of which becomes a checked checkbox.
    Examples-format: a {List[str | int | float]} representing the values to be checked.
    Demos: sentence_builder, titanic_survival
    """

    EVENTS = [Events.change, Events.input, Events.select]

    def __init__(
        self,
        choices: list[str | int | float | tuple[str, str | int | float]] | None = None,
        *,
        value: list[str | float | int] | str | float | int | Callable | None = None,
        type: Literal["value", "index"] = "value",
        label: str | None = None,
        info: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        root_url: str | None = None,
        _skip_init_processing: bool = False,
    ):
        """
        Parameters:
            choices: A list of string or numeric options to select from. An option can also be a tuple of the form (name, value), where name is the displayed name of the checkbox button and value is the value to be passed to the function, or returned by the function.
            value: Default selected list of options. If a single choice is selected, it can be passed in as a string or numeric type. If callable, the function will be called whenever the app loads to set the initial value of the component.
            type: Type of value to be returned by component. "value" returns the list of strings of the choices selected, "index" returns the list of indices of the choices selected.
            label: Component name in interface.
            info: Additional component description.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: If True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: Relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: Minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: If True, choices in this checkbox group will be checkable; if False, checking will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            root_url: The remote URL that of the Gradio app that this component belongs to. Used in `gr.load()`. Should not be set manually.
        """
        self.choices = (
            # Although we expect choices to be a list of tuples, it can be a list of tuples if the Gradio app
            # is loaded with gr.load() since Python tuples are converted to lists in JSON.
            [tuple(c) if isinstance(c, (tuple, list)) else (str(c), c) for c in choices]
            if choices
            else []
        )
        valid_types = ["value", "index"]
        if type not in valid_types:
            raise ValueError(
                f"Invalid value for parameter `type`: {type}. Please choose from one of: {valid_types}"
            )
        self.type = type
        super().__init__(
            label=label,
            info=info,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            root_url=root_url,
            _skip_init_processing=_skip_init_processing,
            value=value,
        )

    def example_inputs(self) -> Any:
        return [self.choices[0][1]] if self.choices else None

    def api_info(self) -> dict[str, Any]:
        return {
            "items": {"enum": [c[1] for c in self.choices], "type": "string"},
            "title": "Checkbox Group",
            "type": "array",
        }

    def preprocess(
        self, x: list[str | int | float]
    ) -> list[str | int | float] | list[int | None]:
        """
        Parameters:
            x: list of selected choices
        Returns:
            list of selected choice values as strings or indices within choice list
        """
        if self.type == "value":
            return x
        elif self.type == "index":
            choice_values = [value for _, value in self.choices]
            return [
                choice_values.index(choice) if choice in choice_values else None
                for choice in x
            ]
        else:
            raise ValueError(
                f"Unknown type: {self.type}. Please choose from: 'value', 'index'."
            )

    def postprocess(
        self, y: list[str | int | float] | str | int | float | None
    ) -> list[str | int | float]:
        """
        Parameters:
            y: List of selected choice values. If a single choice is selected, it can be passed in as a string
        Returns:
            List of selected choices
        """
        if y is None:
            return []
        if not isinstance(y, list):
            y = [y]
        return y

    def as_example(self, input_data):
        if input_data is None:
            return None
        elif not isinstance(input_data, list):
            input_data = [input_data]
        for data in input_data:
            if data not in [c[0] for c in self.choices]:
                raise ValueError(f"Example {data} provided not a valid choice.")
        return [
            next((c[0] for c in self.choices if c[1] == data), None)
            for data in input_data
        ]
