"""
Admin app page routes.
"""

from flask import Blueprint

admin = Blueprint("admin", __name__)

from . import routes
