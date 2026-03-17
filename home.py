import asyncio

import tornado
import tornado.web


class OldStaticRedirecter(tornado.web.RequestHandler):
    def get(self, path):
        self.redirect(f"//s.kmdw.dev/{path}")


class E404Handler(tornado.web.RequestHandler):
    def get(self, _=None):
        self.set_status(404)
        with open("404.html", "rb") as file:
            self.write(file.read())


options = {"debug": True, "default_handler_class": E404Handler, "static_path": "web"}


async def main():
    app = tornado.web.Application(
        [
            (r"/sp/(.*)", OldStaticRedirecter),
            (
                r"/(.*)",
                tornado.web.StaticFileHandler,
                {"path": "web", "default_filename": "index.html"},
            ),
        ],
        **options,
    )

    app.listen(10000, "127.0.0.1")
    print("listening on 127.0.0.1:10000")
    try:
        await asyncio.Event().wait()
    except asyncio.exceptions.CancelledError:
        print("\b\bexited")


if __name__ == "__main__":
    asyncio.run(main())
