"""gr.Code() component"""

from __future__ import annotations

from pathlib import Path
from typing import Any, Literal

from gradio_client.documentation import document, set_documentation_group

from gradio.components.base import Component
from gradio.events import Events

set_documentation_group("component")


@document("languages")
class Code(Component):
    """
    Creates a Code editor for entering, editing or viewing code.
    Preprocessing: passes a {str} of code into the function.
    Postprocessing: expects the function to return a {str} of code or a single-element {tuple}: {(string_filepath,)}
    """

    languages = [
        "python",
        "markdown",
        "json",
        "html",
        "css",
        "javascript",
        "typescript",
        "yaml",
        "dockerfile",
        "shell",
        "r",
        None,
    ]

    EVENTS = [Events.change, Events.input]

    def __init__(
        self,
        value: str | tuple[str] | None = None,
        language: Literal[
            "python",
            "markdown",
            "json",
            "html",
            "css",
            "javascript",
            "typescript",
            "yaml",
            "dockerfile",
            "shell",
            "r",
        ]
        | None = None,
        *,
        every: float | None = None,
        lines: int = 5,
        label: str | None = None,
        interactive: bool | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        root_url: str | None = None,
        _skip_init_processing: bool = False,
    ):
        """
        Parameters:
            value: Default value to show in the code editor. If callable, the function will be called whenever the app loads to set the initial value of the component.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            language: The language to display the code as. Supported languages listed in `gr.Code.languages`.
            label: component name in interface.
            interactive: Whether user should be able to enter code or only view it.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            root_url: The remote URL that of the Gradio app that this component belongs to. Used in `gr.load()`. Should not be set manually.
            _skip_init_processing: If True, will skip the initial postprocessing step. Used in `gr.load()`. Should not be set manually.
        """
        if language not in Code.languages:
            raise ValueError(f"Language {language} not supported.")

        self.language = language
        self.lines = lines
        super().__init__(
            label=label,
            every=every,
            interactive=interactive,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            root_url=root_url,
            _skip_init_processing=_skip_init_processing,
            value=value,
        )

    def preprocess(self, x: Any) -> Any:
        return x

    def postprocess(self, y: tuple | str | None) -> None | str:
        if y is None:
            return None
        elif isinstance(y, tuple):
            with open(y[0]) as file_data:
                return file_data.read()
        else:
            return y.strip()

    def flag(self, x: Any, flag_dir: str | Path = "") -> str:
        return super().flag(x, flag_dir)

    def api_info(self) -> dict[str, Any]:
        return {"type": "string"}

    def example_inputs(self) -> Any:
        return "print('Hello World')"
