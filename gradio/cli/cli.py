import sys

import typer
from gradio_client.cli import deploy_discord  # type: ignore

from .commands import custom_component, deploy, print_environment_info, reload

app = typer.Typer()
app.command("environment", help="Print Gradio environment information.")(
    print_environment_info
)
app.command(
    "deploy",
    help="Deploy a Gradio app to Spaces. Must be called within the directory you would like to deploy.",
)(deploy)
app.command("deploy-discord", help="Deploy a Gradio app to Discord.")(
    deploy_discord.main
)


def cli():
    args = sys.argv[1:]
    if len(args) == 0:
        raise ValueError("No file specified.")
    if args[0] in {"deploy", "environment", "deploy-discord"}:
        app()
    elif args[0] in {"cc", "component"}:
        sys.argv = sys.argv[1:]
        custom_component()
    else:
        typer.run(reload)
