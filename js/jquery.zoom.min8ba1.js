/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!(function (d) {
  var n = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (d.zoom = function (o, t, e, n) {
    var i,
      u,
      a,
      c,
      r,
      l,
      m,
      f = d(o),
      s = f.css("position"),
      h = d(t);
    return (
      (o.style.position = /(absolute|fixed)/.test(s) ? s : "relative"),
      (o.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      d(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * n,
          height: e.height * n,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(o),
      {
        init: function () {
          (u = f.outerWidth()),
            (i = f.outerHeight()),
            (a =
              t === o ? ((c = u), i) : ((c = h.outerWidth()), h.outerHeight())),
            (r = (e.width - u) / c),
            (l = (e.height - i) / a),
            (m = h.offset());
        },
        move: function (o) {
          var t = o.pageX - m.left,
            o = o.pageY - m.top,
            o = Math.max(Math.min(o, a), 0),
            t = Math.max(Math.min(t, c), 0);
          (e.style.left = t * -r + "px"), (e.style.top = o * -l + "px");
        },
      }
    );
  }),
    (d.fn.zoom = function (e) {
      return this.each(function () {
        var i = d.extend({}, n, e || {}),
          u = (i.target && d(i.target)[0]) || this,
          o = this,
          a = d(o),
          c = document.createElement("img"),
          r = d(c),
          l = "mousemove.zoom",
          m = !1,
          f = !1;
        if (!i.url) {
          var t = o.querySelector("img");
          if (
            (t &&
              ((i.url = t.getAttribute("data-src") || t.currentSrc || t.src),
              (i.alt = t.getAttribute("data-alt") || t.alt)),
            !i.url)
          )
            return;
        }
        a.one(
          "zoom.destroy",
          function (o, t) {
            a.off(".zoom"),
              (u.style.position = o),
              (u.style.overflow = t),
              (c.onload = null),
              r.remove();
          }.bind(this, u.style.position, u.style.overflow)
        ),
          (c.onload = function () {
            var t = d.zoom(u, o, c, i.magnify);
            function e(o) {
              t.init(),
                t.move(o),
                r
                  .stop()
                  .fadeTo(
                    d.support.opacity ? i.duration : 0,
                    1,
                    "function" == typeof i.onZoomIn && i.onZoomIn.call(c)
                  );
            }
            function n() {
              r.stop().fadeTo(
                i.duration,
                0,
                "function" == typeof i.onZoomOut && i.onZoomOut.call(c)
              );
            }
            "grab" === i.on
              ? a.on("mousedown.zoom", function (o) {
                  1 === o.which &&
                    (d(document).one("mouseup.zoom", function () {
                      n(), d(document).off(l, t.move);
                    }),
                    e(o),
                    d(document).on(l, t.move),
                    o.preventDefault());
                })
              : "click" === i.on
              ? a.on("click.zoom", function (o) {
                  if (!m)
                    return (
                      (m = !0),
                      e(o),
                      d(document).on(l, t.move),
                      d(document).one("click.zoom", function () {
                        n(), (m = !1), d(document).off(l, t.move);
                      }),
                      !1
                    );
                })
              : "toggle" === i.on
              ? a.on("click.zoom", function (o) {
                  m ? n() : e(o), (m = !m);
                })
              : "mouseover" === i.on &&
                (t.init(),
                a
                  .on("mouseenter.zoom", e)
                  .on("mouseleave.zoom", n)
                  .on(l, t.move)),
              i.touch &&
                a
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      f
                        ? ((f = !1), n())
                        : ((f = !0),
                          e(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      t.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), f && ((f = !1), n());
                  }),
              "function" == typeof i.callback && i.callback.call(c);
          }),
          c.setAttribute("role", "presentation"),
          (c.alt = i.alt || ""),
          (c.src = i.url);
      });
    }),
    (d.fn.zoom.defaults = n);
})(window.jQuery);
