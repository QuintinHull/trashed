from flask.cli import AppGroup
from .users import seed_users, undo_users
from .areas import seed_areas, undo_areas
from .events import seed_events, undo_events
from .types import seed_types, undo_types
from .items import seed_items, undo_items

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_areas()
    seed_events()
    seed_types()
    seed_items()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_areas()
    undo_events()
    undo_types()
    undo_items()
    # Add other undo functions here
