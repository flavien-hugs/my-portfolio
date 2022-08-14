"""
Main page routes.
"""

import os
from flask import(
    render_template, url_for, abort, flash, redirect,
    request, current_app, send_from_directory, Response
)


from .. import db
from . import main
from .models import Project

from ..email import send_email
from ..contact.models import Contact
from ..contact.forms import ContactForm


@main.route("/", methods=['GET', 'POST'], strict_slashes=False)
def homePage():
    page_title = 'Hello, je suis Flavien HUGS'

    form = ContactForm()
    if form.validate_on_submit():
        try:
            contact = Contact(
                fullname=form.fullname.data,
                email=form.email.data.lower(),
                phone=form.phone.data,
                subject=form.subject.data,
                message=form.message.data
            )
            db.session.add(contact)
            db.session.commit()
            msg = f"""
                Hey {form.fullname.data},
                votre message a été envoyé avec success.
                Nous vous contacterons dans un bref délais.
            """
            flash(msg, "success")
            return redirect(request.url)
        except Exception as e:
            abort(400)

    return render_template(
        'index.html',
        form=form,
        page_title=page_title
    )


@main.route("/at-etablissement/", strict_slashes=False)
def aboutUsPage():
    page_title = 'Qui sommes-nous'
    return render_template(
        'page/about.html',
        page_title=page_title
    )


@main.route("/at-services/", strict_slashes=False)
def servicePage():
    page_title = 'Nos Prestations'
    return render_template(
        'page/service.html',
        page_title=page_title
    )


@main.route("/sitemap/", strict_slashes=False)
@main.route("/sitemap.xml/", strict_slashes=False)
def sitemap():

    host_components = urlparse(request.host_url)
    host_base = host_components.scheme + "://" + host_components.netloc

    static_urls = list()
    for rule in current_app.url_map.iter_rules():
        if(
            not str(rule).startswith("/contact/")
            and not str(rule).startswith("/errors/")
        ):
            if "GET" in rule.methods and len(rule.arguments) == 0:
                url = {
                    "loc": f"{host_base}{str(rule)}",
                    "changefreq": "weekly",
                    "priority": "0.9"
                }
                static_urls.append(url)

    dynamic_urls = list()
    blog_posts = Post.query.order_by(Post.date_posted.desc()).all()
    for post in blog_posts:
        url = {
            "loc": f"{host_base}/article/{post.slug}",
            "lastmod": post.date_posted.strftime("%Y-%m-%d"),
            "changefreq": "weekly",
            "priority": "0.7"
        }
        dynamic_urls.append(url)

    xml_sitemap = render_template(
        "sitemap.xml", static_urls=static_urls,
        dynamic_urls=dynamic_urls, host_base=host_base
    )
    response = make_response(xml_sitemap)
    response.headers["Content-Type"] = "application/xml"

    return response


@main.route('/robots.txt/', strict_slashes=False)
def noindex():
    Disallow = lambda string: f'Disallow: {string}'
    r = Response(
        "User-Agent: *\n{0}\n".format("\n".join(
            [
                Disallow('/contact/'),
                Disallow('/admin/')
            ])),
            status=200, mimetype="text/plain"
        )
    r.headers["Content-Type"] = "text/plain; charset=utf-8"
    return r


@main.route('/favicon.ico')
def favicon():
    return send_from_directory(
        os.path.join(current_app.root_path, 'static'),
        'img/favicon.ico'
    )
