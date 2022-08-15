""" Contact forms"""

from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField, SelectField
from wtforms.validators import InputRequired, DataRequired, Length, Email, Regexp

from .models import Contact

SUBJECT_CHOICE = [
    (1, "Je souhaite prendre un rendez-vous avec toi"),
    (2, "J'aimerais plus d'informations sur tes prestations"),
    (3, "Pourais-je avoir des d'informations sur tes séances de formations"),
    (4, "J'aimerais t'engager sur un projet"),
]


class ContactForm(FlaskForm):
    fullname = StringField(
        "Nom & prénoms",
        validators=[
            Length(min=4, max=80), InputRequired(),
            DataRequired(),
        ]
    )
    email = StringField(
        'Adresse Email',
        validators=[
            Length(min=4, max=80), DataRequired(), InputRequired(),
            Email(message='Entrer une adresse email valide.')
        ]
    )
    phone = StringField(
        "Téléphone",
        validators=[
            Length(min=4, max=15), InputRequired(), DataRequired(),
        ]
    )
    subject = SelectField(
        "Sujet",
        choices=SUBJECT_CHOICE, coerce=int,
        validators=[InputRequired(), DataRequired()]
    )
    message = TextAreaField("Votre message", validators=[InputRequired(), DataRequired()])
    submit = SubmitField("Envoyer le message")
