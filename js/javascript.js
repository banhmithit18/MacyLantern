/* skrollr.mina086*/
!(function (a, b, c) {
    "use strict";
    function d(c) {
        if (((e = b.documentElement), (f = b.body), T(), (ha = this), (c = c || {}), (ma = c.constants || {}), c.easing)) for (var d in c.easing) W[d] = c.easing[d];
        (ta = c.edgeStrategy || "set"),
            (ka = { beforerender: c.beforerender, render: c.render, keyframe: c.keyframe }),
            (la = c.forceHeight !== !1),
            la && (Ka = c.scale || 1),
            (na = c.mobileDeceleration || y),
            (pa = c.smoothScrolling !== !1),
            (qa = c.smoothScrollingDuration || A),
            (ra = { targetTop: ha.getScrollTop() }),
            (Sa = (
                c.mobileCheck ||
                function () {
                    return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera);
                }
            )()),
            Sa ? ((ja = b.getElementById(c.skrollrBody || z)), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]),
            ha.refresh(),
            wa(a, "resize orientationchange", function () {
                var a = e.clientWidth,
                    b = e.clientHeight;
                (b !== Pa || a !== Oa) && ((Pa = b), (Oa = a), (Qa = !0));
            });
        var g = U();
        return (
            (function h() {
                $(), (va = g(h));
            })(),
            ha
        );
    }
    var e,
        f,
        g = {
            get: function () {
                return ha;
            },
            init: function (a) {
                return ha || new d(a);
            },
            VERSION: "0.6.29",
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = 0.004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function (a, b) {
            return b.toUpperCase();
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function () {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b) if ((R = c.match(a) || (+c == c && b[c].match(a)))) break;
                if (!R) return void (R = S = "");
                (R = R[0]), "-" === R.slice(0, 1) ? ((S = R), (R = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[R])) : (S = "-" + R.toLowerCase() + "-");
            }
        },
        U = function () {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (
                (Sa || !b) &&
                    (b = function (b) {
                        var d = Ha() - c,
                            e = i.max(0, 1e3 / 60 - d);
                        return a.setTimeout(function () {
                            (c = Ha()), b();
                        }, e);
                    }),
                b
            );
        },
        V = function () {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (
                (Sa || !b) &&
                    (b = function (b) {
                        return a.clearTimeout(b);
                    }),
                b
            );
        },
        W = {
            begin: function () {
                return 0;
            },
            end: function () {
                return 1;
            },
            linear: function (a) {
                return a;
            },
            quadratic: function (a) {
                return a * a;
            },
            cubic: function (a) {
                return a * a * a;
            },
            swing: function (a) {
                return -i.cos(a * i.PI) / 2 + 0.5;
            },
            sqrt: function (a) {
                return i.sqrt(a);
            },
            outCubic: function (a) {
                return i.pow(a - 1, 3) + 1;
            },
            bounce: function (a) {
                var b;
                if (0.5083 >= a) b = 3;
                else if (0.8489 >= a) b = 9;
                else if (0.96208 >= a) b = 27;
                else {
                    if (!(0.99981 >= a)) return 1;
                    b = 91;
                }
                return 1 - i.abs((3 * i.cos(a * b * 1.028)) / b);
            },
        };
    (d.prototype.refresh = function (a) {
        var d,
            e,
            f = !1;
        for (a === c ? ((f = !0), (ia = []), (Ra = 0), (a = b.getElementsByTagName("*"))) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if ((f && F in g && delete g[F], g.attributes)) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = { props: p.value, element: g, eventType: p.name.replace(L, M) };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? ((r.isPercentage = !0), (r.offset = (0 | t.slice(0, -1)) / 100)) : (r.offset = 0 | t);
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? ((r.mode = "relative"), (r.anchors = [u, v])) : ((r.mode = "absolute"), u === C ? (r.isEnd = !0) : r.isPercentage || (r.offset = r.offset * Ka));
                                    }
                                } else l = !0;
                            else k = p.value;
                        else j = "off" !== p.value;
                    else if (((h = b.querySelector(p.value)), null === h)) throw 'Unable to find anchor target "' + p.value + '"';
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? ((y = g[F]), (w = ia[y].styleAttr), (x = ia[y].classAttr)) : ((y = g[F] = Ra++), (w = g.style.cssText), (x = Da(g))),
                        (ia[y] = { element: g, styleAttr: w, classAttr: x, anchorTarget: h, keyFrames: i, smoothScrolling: j, edgeStrategy: k, emitEvents: l, lastFrameIndex: -1 }),
                        Ea(g, [o], []);
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z));
        }
        return ha;
    }),
        (d.prototype.relativeToAbsolute = function (a, b, c) {
            var d = e.clientHeight,
                f = a.getBoundingClientRect(),
                g = f.top,
                h = f.bottom - f.top;
            return b === E ? (g -= d) : b === D && (g -= d / 2), c === E ? (g += h) : c === D && (g += h / 2), (g += ha.getScrollTop()), (g + 0.5) | 0;
        }),
        (d.prototype.animateTo = function (a, b) {
            b = b || {};
            var d = Ha(),
                e = ha.getScrollTop(),
                f = b.duration === c ? x : b.duration;
            return (oa = { startTop: e, topDiff: a - e, targetTop: a, duration: f, startTime: d, endTime: d + f, easing: W[b.easing || w], done: b.done }), oa.topDiff || (oa.done && oa.done.call(ha, !1), (oa = c)), ha;
        }),
        (d.prototype.stopAnimateTo = function () {
            oa && oa.done && oa.done.call(ha, !0), (oa = c);
        }),
        (d.prototype.isAnimatingTo = function () {
            return !!oa;
        }),
        (d.prototype.isMobile = function () {
            return Sa;
        }),
        (d.prototype.setScrollTop = function (b, c) {
            return (sa = c === !0), Sa ? (Ta = i.min(i.max(b, 0), Ja)) : a.scrollTo(0, b), ha;
        }),
        (d.prototype.getScrollTop = function () {
            return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0;
        }),
        (d.prototype.getMaxScrollTop = function () {
            return Ja;
        }),
        (d.prototype.on = function (a, b) {
            return (ka[a] = b), ha;
        }),
        (d.prototype.off = function (a) {
            return delete ka[a], ha;
        }),
        (d.prototype.destroy = function () {
            var a = V();
            a(va), ya(), Ea(e, [t], [s, u, v]);
            for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
            (e.style.overflow = f.style.overflow = ""),
                (e.style.height = f.style.height = ""),
                ja && g.setStyle(ja, "transform", "none"),
                (ha = c),
                (ja = c),
                (ka = c),
                (la = c),
                (Ja = 0),
                (Ka = 1),
                (ma = c),
                (na = c),
                (La = "down"),
                (Ma = -1),
                (Oa = 0),
                (Pa = 0),
                (Qa = !1),
                (oa = c),
                (pa = c),
                (qa = c),
                (ra = c),
                (sa = c),
                (Ra = 0),
                (ta = c),
                (Sa = !1),
                (Ta = 0),
                (ua = c);
        });
    var X = function () {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function (a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType; ) j = j.parentNode;
                switch (((o = e.clientY), (p = e.clientX), (t = a.timeStamp), G.test(j.tagName) || a.preventDefault(), a.type)) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), (d = j), (g = q = o), (h = p), (s = t);
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), (r = o - q), (v = t - u), ha.setScrollTop(Ta - r, !0), (q = o), (u = t);
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y);
                            }
                            return;
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + 0.5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? ((D = (Ja - C) / B), (C = Ja)) : 0 > C && ((D = -C / B), (C = 0)), (A *= 1 - D), ha.animateTo((C + 0.5) | 0, { easing: "outCubic", duration: A });
                }
            }),
                a.scrollTo(0, 0),
                (e.style.overflow = f.style.overflow = "hidden");
        },
        Y = function () {
            var a,
                b,
                c,
                d,
                f,
                g,
                h,
                j,
                k,
                l,
                m,
                n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++)
                    (h = d[f]),
                        (l = h.offset),
                        (m = o[h.constant] || 0),
                        (h.frame = l),
                        h.isPercentage && ((l *= n), (h.frame = l)),
                        "relative" === h.mode && (fa(b), (h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l), fa(b, !0)),
                        (h.frame += m),
                        la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) (h = d[f]), (m = o[h.constant] || 0), h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia);
            }
        },
        Z = function (a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e,
                    f,
                    i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if ((t && -1 === i.edge) || (u && 1 === i.edge)) continue;
                    switch (
                        (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), (i.lastFrameIndex = -1))) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), (i.lastFrameIndex = m))),
                        (i.edge = t ? -1 : 1),
                        i.edgeStrategy)
                    ) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && ((f = ea(y[e].value)), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue;
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), (i.edge = 0));
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                (C = A.props[e].easing(C)), (f = da(A.props[e].value, B.props[e].value, C)), (f = ea(f)), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f);
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), (i.lastFrameIndex = z));
                        break;
                    }
            }
        },
        $ = function () {
            Qa && ((Qa = !1), Aa());
            var a,
                b,
                d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? ((d = oa.targetTop), (a = oa.done), (oa = c)) : ((b = oa.easing((e - oa.startTime) / oa.duration)), (d = (oa.startTop + b * oa.topDiff) | 0)), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = { startTop: Ma, topDiff: d - Ma, targetTop: d, startTime: Na, endTime: Na + qa }), e <= ra.endTime && ((b = W.sqrt((e - ra.startTime) / qa)), (d = (ra.startTop + b * ra.topDiff) | 0));
            }
            if (sa || Ma !== d) {
                (La = d > Ma ? "down" : Ma > d ? "up" : La), (sa = !1);
                var h = { curTop: d, lastTop: Ma, maxTop: Ja, direction: La },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), (Ma = d), ka.render && ka.render.call(ha, h)), a && a.call(ha, !1);
            }
            Na = e;
        },
        _ = function (a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props)); )
                    (f = g[1]), (e = g[2]), (d = f.match(K)), null !== d ? ((f = d[1]), (d = d[2])) : (d = w), (e = e.indexOf("!") ? aa(e) : [e.slice(1)]), (i[f] = { value: e, easing: W[d] });
                h.props = i;
            }
        },
        aa = function (a) {
            var b = [];
            return (
                (P.lastIndex = 0),
                (a = a.replace(P, function (a) {
                    return a.replace(N, function (a) {
                        return (a / 255) * 100 + "%";
                    });
                })),
                S &&
                    ((Q.lastIndex = 0),
                    (a = a.replace(Q, function (a) {
                        return S + a;
                    }))),
                (a = a.replace(N, function (a) {
                    return b.push(+a), "{?}";
                })),
                b.unshift(a),
                b
            );
        },
        ba = function (a) {
            var b,
                c,
                d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d);
        },
        ca = function (a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c];
        },
        da = function (a, b, c) {
            var d,
                e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f;
        },
        ea = function (a) {
            var b = 1;
            return (
                (O.lastIndex = 0),
                a[0].replace(O, function () {
                    return a[b++];
                })
            );
        },
        fa = function (a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++)
                (d = a[e]),
                    (c = ia[d[F]]),
                    c && (b ? ((d.style.cssText = c.dirtyStyleAttr), Ea(d, c.dirtyClassAttr)) : ((c.dirtyStyleAttr = d.style.cssText), (c.dirtyClassAttr = Da(d)), (d.style.cssText = c.styleAttr), Ea(d, c.classAttr)));
        },
        ga = function () {
            (ua = "translateZ(0)"), g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = (b && "none" !== b) || (c && "none" !== c);
            d || (ua = "");
        };
    g.setStyle = function (a, b, c) {
        var d = a.style;
        if (((b = b.replace(L, M).replace("-", "")), "zIndex" === b)) isNaN(c) ? (d[b] = c) : (d[b] = "" + (0 | c));
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else
            try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), (d[b] = c);
            } catch (e) {}
    };
    var ha,
        ia,
        ja,
        ka,
        la,
        ma,
        na,
        oa,
        pa,
        qa,
        ra,
        sa,
        ta,
        ua,
        va,
        wa = (g.addEvent = function (b, c, d) {
            var e = function (b) {
                return (
                    (b = b || a.event),
                    b.target || (b.target = b.srcElement),
                    b.preventDefault ||
                        (b.preventDefault = function () {
                            (b.returnValue = !1), (b.defaultPrevented = !0);
                        }),
                    d.call(this, b)
                );
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) (f = c[g]), b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({ element: b, name: f, listener: d });
        }),
        xa = (g.removeEvent = function (a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c);
        }),
        ya = function () {
            for (var a, b = 0, c = Ua.length; c > b; b++) (a = Ua[b]), xa(a.element, a.name, a.listener);
            Ua = [];
        },
        za = function (a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c);
        },
        Aa = function () {
            var a = ha.getScrollTop();
            (Ja = 0), la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), (sa = !0);
        },
        Ba = function () {
            var a,
                b,
                c = e.clientHeight,
                d = {};
            for (a in ma) (b = ma[a]), "function" == typeof b ? (b = b.call(ha)) : /p$/.test(b) && (b = (b.slice(0, -1) / 100) * c), (d[a] = b);
            return d;
        },
        Ca = function () {
            var a,
                b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), (a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight)), a - e.clientHeight;
        },
        Da = function (b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && ((b = b[c]), (c = "baseVal")), b[c];
        },
        Ea = function (b, d, e) {
            var f = "className";
            if ((a.SVGElement && b instanceof a.SVGElement && ((b = b[f]), (f = "baseVal")), e === c)) return void (b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) -1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g);
        },
        Fa = function (a) {
            return a.replace(H, "");
        },
        Ga = function (a) {
            return " " + a + " ";
        },
        Ha =
            Date.now ||
            function () {
                return +new Date();
            },
        Ia = function (a, b) {
            return a.frame - b.frame;
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd
        ? define([], function () {
              return g;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = g)
        : (a.skrollr = g);
})(window, document);

/*js_composer_front_mina086.js*/
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2020 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

(document.documentElement.className += " js_active "),
    (document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop "),
    (function () {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ");
    })(),
    (function ($) {
        "function" != typeof window.vc_js &&
            (window.vc_js = function () {
                "use strict";
                vc_toggleBehaviour(),
                    vc_tabsBehaviour(),
                    vc_accordionBehaviour(),
                    vc_teaserGrid(),
                    vc_carouselBehaviour(),
                    vc_slidersBehaviour(),
                    vc_prettyPhoto(),
                    vc_pinterest(),
                    vc_progress_bar(),
                    vc_plugin_flexslider(),
                    vc_gridBehaviour(),
                    vc_rowBehaviour(),
                    vc_prepareHoverBox(),
                    vc_googleMapsPointer(),
                    vc_ttaActivation(),
                    jQuery(document).trigger("vc_js"),
                    window.setTimeout(vc_waypoints, 500);
            }),
            "function" != typeof window.vc_plugin_flexslider &&
                (window.vc_plugin_flexslider = function ($parent) {
                    ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
                        var this_element = jQuery(this),
                            sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                            sliderFx = this_element.attr("data-flex_fx"),
                            slideshow = 0 == sliderTimeout ? !1 : !0;
                        this_element.is(":visible") && this_element.flexslider({ animation: sliderFx, slideshow: slideshow, slideshowSpeed: sliderTimeout, sliderSpeed: 800, smoothHeight: !0 });
                    });
                }),
            "function" != typeof window.vc_googleplus &&
                (window.vc_googleplus = function () {
                    0 < jQuery(".wpb_googleplus").length &&
                        (function () {
                            var po = document.createElement("script");
                            (po.type = "text/javascript"), (po.async = !0), (po.src = "https://apis.google.com/js/plusone.js");
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(po, s);
                        })();
                }),
            "function" != typeof window.vc_pinterest &&
                (window.vc_pinterest = function () {
                    0 < jQuery(".wpb_pinterest").length &&
                        (function () {
                            var po = document.createElement("script");
                            (po.type = "text/javascript"), (po.async = !0), (po.src = "https://assets.pinterest.com/js/pinit.js");
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(po, s);
                        })();
                }),
            "function" != typeof window.vc_progress_bar &&
                (window.vc_progress_bar = function () {
                    void 0 !== jQuery.fn.vcwaypoint &&
                        jQuery(".vc_progress_bar").each(function () {
                            var $el = jQuery(this);
                            $el.vcwaypoint(
                                function () {
                                    $el.find(".vc_single_bar").each(function (index) {
                                        var bar = jQuery(this).find(".vc_bar"),
                                            val = bar.data("percentage-value");
                                        setTimeout(function () {
                                            bar.css({ width: val + "%" });
                                        }, 200 * index);
                                    });
                                },
                                { offset: "85%" }
                            );
                        });
                }),
            "function" != typeof window.vc_waypoints &&
                (window.vc_waypoints = function () {
                    void 0 !== jQuery.fn.vcwaypoint &&
                        jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
                            var $el = jQuery(this);
                            $el.vcwaypoint(
                                function () {
                                    $el.addClass("wpb_start_animation animated");
                                },
                                { offset: "85%" }
                            );
                        });
                }),
            "function" != typeof window.vc_toggleBehaviour &&
                (window.vc_toggleBehaviour = function ($el) {
                    function event(e) {
                        e && e.preventDefault && e.preventDefault();
                        var element = jQuery(this).closest(".vc_toggle"),
                            content = element.find(".vc_toggle_content");
                        element.hasClass("vc_toggle_active")
                            ? content.slideUp({
                                  duration: 300,
                                  complete: function () {
                                      element.removeClass("vc_toggle_active");
                                  },
                              })
                            : content.slideDown({
                                  duration: 300,
                                  complete: function () {
                                      element.addClass("vc_toggle_active");
                                  },
                              });
                    }
                    $el ? ($el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event)) : jQuery(".vc_toggle_title").off("click").on("click", event);
                }),
            "function" != typeof window.vc_tabsBehaviour &&
                (window.vc_tabsBehaviour = function ($tab) {
                    var $call, ver, old_version;
                    jQuery.ui &&
                        (($call = $tab || jQuery(".wpb_tabs, .wpb_tour")),
                        (ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10"),
                        (old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9),
                        $call.each(function (index) {
                            var interval = jQuery(this).attr("data-interval"),
                                tabs_array = [],
                                $tabs = jQuery(this)
                                    .find(".wpb_tour_tabs_wrapper")
                                    .tabs({
                                        show: function (event, ui) {
                                            wpb_prepare_tab_content(event, ui);
                                        },
                                        activate: function (event, ui) {
                                            wpb_prepare_tab_content(event, ui);
                                        },
                                    });
                            if (interval && 0 < interval)
                                try {
                                    $tabs.tabs("rotate", 1e3 * interval);
                                } catch (err) {
                                    window.console && window.console.warn && console.warn("tabs behaviours error", err);
                                }
                            jQuery(this)
                                .find(".wpb_tab")
                                .each(function () {
                                    tabs_array.push(this.id);
                                }),
                                jQuery(this)
                                    .find(".wpb_tabs_nav li")
                                    .on("click", function (e) {
                                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1;
                                    }),
                                jQuery(this)
                                    .find(".wpb_prev_slide a, .wpb_next_slide a")
                                    .on("click", function (e) {
                                        var index, length;
                                        e && e.preventDefault && e.preventDefault(),
                                            old_version
                                                ? ((index = $tabs.tabs("option", "selected")),
                                                  jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--,
                                                  index < 0 ? (index = $tabs.tabs("length") - 1) : index >= $tabs.tabs("length") && (index = 0),
                                                  $tabs.tabs("select", index))
                                                : ((index = $tabs.tabs("option", "active")),
                                                  (length = $tabs.find(".wpb_tab").length),
                                                  (index = jQuery(this).parent().hasClass("wpb_next_slide") ? (length <= index + 1 ? 0 : index + 1) : index - 1 < 0 ? length - 1 : index - 1),
                                                  $tabs.tabs("option", "active", index));
                                    });
                        }));
                }),
            "function" != typeof window.vc_accordionBehaviour &&
                (window.vc_accordionBehaviour = function () {
                    jQuery(".wpb_accordion").each(function (index) {
                        var $this = jQuery(this),
                            active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                            collapsible = !1 === active_tab || "yes" === $this.data("collapsible"),
                            $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                                header: "> div > h3",
                                autoHeight: !1,
                                heightStyle: "content",
                                active: active_tab,
                                collapsible: collapsible,
                                navigation: !0,
                                activate: vc_accordionActivate,
                                change: function (event, ui) {
                                    void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel);
                                },
                            });
                        !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {});
                    });
                }),
            "function" != typeof window.vc_teaserGrid &&
                (window.vc_teaserGrid = function () {
                    var layout_modes = { fitrows: "fitRows", masonry: "masonry" };
                    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
                        var $container = jQuery(this),
                            $thumbs = $container.find(".wpb_thumbnails"),
                            layout_mode = $thumbs.attr("data-layout-mode");
                        $thumbs.isotope({ itemSelector: ".isotope-item", layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode] }),
                            $container
                                .find(".categories_filter a")
                                .data("isotope", $thumbs)
                                .on("click", function (e) {
                                    e && e.preventDefault && e.preventDefault();
                                    var $thumbs = jQuery(this).data("isotope");
                                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({ filter: jQuery(this).attr("data-filter") });
                                }),
                            jQuery(window).bind("load resize", function () {
                                $thumbs.isotope("layout");
                            });
                    });
                }),
            "function" != typeof window.vc_carouselBehaviour &&
                (window.vc_carouselBehaviour = function ($parent) {
                    ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
                        var carousel_li,
                            fluid_ul,
                            $this = jQuery(this);
                        !0 !== $this.data("carousel_enabled") &&
                            $this.is(":visible") &&
                            ($this.data("carousel_enabled", !0),
                            getColumnsCount(jQuery(this)),
                            jQuery(this).hasClass("columns_count_1"),
                            (carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li")).css({ "margin-right": carousel_li.css("margin-left"), "margin-left": 0 }),
                            (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300),
                            jQuery(window).on("resize", function () {
                                screen_size != (screen_size = getSizeName()) &&
                                    window.setTimeout(function () {
                                        location.reload();
                                    }, 20);
                            }));
                    });
                }),
            "function" != typeof window.vc_slidersBehaviour &&
                (window.vc_slidersBehaviour = function () {
                    jQuery(".wpb_gallery_slides").each(function (index) {
                        var $imagesGrid,
                            sliderTimeout,
                            this_element = jQuery(this);
                        this_element.hasClass("wpb_slider_nivo")
                            ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999),
                              this_element
                                  .find(".nivoSlider")
                                  .nivoSlider({
                                      effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                                      slices: 15,
                                      boxCols: 8,
                                      boxRows: 4,
                                      animSpeed: 800,
                                      pauseTime: sliderTimeout,
                                      startSlide: 0,
                                      directionNav: !0,
                                      directionNavHide: !0,
                                      controlNav: !0,
                                      keyboardNav: !1,
                                      pauseOnHover: !0,
                                      manualAdvance: !1,
                                      prevText: "Prev",
                                      nextText: "Next",
                                  }))
                            : this_element.hasClass("wpb_image_grid") &&
                              (jQuery.fn.imagesLoaded
                                  ? ($imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                                        $imagesGrid.isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" });
                                    }))
                                  : this_element.find(".wpb_image_grid_ul").isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" }));
                    });
                }),
            "function" != typeof window.vc_prettyPhoto &&
                (window.vc_prettyPhoto = function () {
                    try {
                        jQuery &&
                            jQuery.fn &&
                            jQuery.fn.prettyPhoto &&
                            jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                                animationSpeed: "normal",
                                hook: "data-rel",
                                padding: 15,
                                opacity: 0.7,
                                showTitle: !0,
                                allowresize: !0,
                                counter_separator_label: "/",
                                hideflash: !1,
                                deeplinking: !1,
                                modal: !1,
                                callback: function () {
                                    -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "");
                                },
                                social_tools: "",
                            });
                    } catch (err) {
                        window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err);
                    }
                }),
            "function" != typeof window.vc_google_fonts &&
                (window.vc_google_fonts = function () {
                    return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1;
                }),
            (window.vcParallaxSkroll = !1),
            "function" != typeof window.vc_rowBehaviour &&
                (window.vc_rowBehaviour = function () {
                    var vcSkrollrOptions,
                        callSkrollInit,
                        $ = window.jQuery;
                    function fullWidthRow() {
                        var $elements = $('[data-vc-full-width="true"]');
                        $.each($elements, function (key, item) {
                            var $el = $(this);
                            $el.addClass("vc_hidden");
                            var el_margin_left,
                                el_margin_right,
                                offset,
                                width,
                                padding,
                                paddingRight,
                                $el_full = $el.next(".vc_row-full-width");
                            $el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")),
                                $el_full.length &&
                                    ((el_margin_left = parseInt($el.css("margin-left"), 10)),
                                    (el_margin_right = parseInt($el.css("margin-right"), 10)),
                                    (offset = 0 - $el_full.offset().left - el_margin_left),
                                    (width = $(window).width()),
                                    "rtl" === $el.css("direction") && ((offset -= $el_full.width()), (offset += width), (offset += el_margin_left), (offset += el_margin_right)),
                                    $el.css({ position: "relative", left: offset, "box-sizing": "border-box", width: width }),
                                    $el.data("vcStretchContent") ||
                                        ("rtl" === $el.css("direction")
                                            ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0))
                                            : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)),
                                        $el.css({ "padding-left": padding + "px", "padding-right": paddingRight + "px" })),
                                    $el.attr("data-vc-full-width-init", "true"),
                                    $el.removeClass("vc_hidden"),
                                    $(document).trigger("vc-full-width-row-single", { el: $el, offset: offset, marginLeft: el_margin_left, marginRight: el_margin_right, elFull: $el_full, width: width }));
                        }),
                            $(document).trigger("vc-full-width-row", $elements);
                    }
                    function fullHeightRow() {
                        var fullHeight,
                            windowHeight,
                            offsetTop,
                            $element = $(".vc_row-o-full-height:first");
                        $element.length && ((windowHeight = $(window).height()), (offsetTop = $element.offset().top) < windowHeight && ((fullHeight = 100 - offsetTop / (windowHeight / 100)), $element.css("min-height", fullHeight + "vh"))),
                            $(document).trigger("vc-full-height-row", $element);
                    }
                    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow),
                        fullWidthRow(),
                        fullHeightRow(),
                        (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
                            $(".vc_row-o-full-height").each(function () {
                                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
                            }),
                        vc_initVideoBackgrounds(),
                        (callSkrollInit = !1),
                        window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
                        $(".vc_parallax-inner").remove(),
                        $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),
                        $("[data-vc-parallax]").each(function () {
                            var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                            (callSkrollInit = !0),
                                "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"),
                                (skrollrSize = 100 * $(this).data("vcParallax")),
                                ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"),
                                (parallaxImage = $(this).data("vcParallaxImage")),
                                (youtubeId = vcExtractYoutubeId(parallaxImage))
                                    ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId)
                                    : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"),
                                (skrollrStart = -(skrollrSize - 100)),
                                $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;");
                        }),
                        callSkrollInit &&
                            window.skrollr &&
                            ((vcSkrollrOptions = {
                                forceHeight: !1,
                                smoothScrolling: !1,
                                mobileCheck: function () {
                                    return !1;
                                },
                            }),
                            (window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions)),
                            window.vcParallaxSkroll);
                }),
            "function" != typeof window.vc_gridBehaviour &&
                (window.vc_gridBehaviour = function () {
                    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid();
                }),
            "function" != typeof window.getColumnsCount &&
                (window.getColumnsCount = function (el) {
                    for (var find = !1, i = 1; !1 === find; ) {
                        if (el.hasClass("columns_count_" + i)) return (find = !0), i;
                        i++;
                    }
                });
        var screen_size = getSizeName();
        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : "";
        }
        "function" != typeof window.wpb_prepare_tab_content &&
            (window.wpb_prepare_tab_content = function (event, ui) {
                var $ui_panel,
                    $google_maps,
                    $frame,
                    panel = ui.panel || ui.newPanel,
                    $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = panel.find(".vc_round-chart"),
                    $line_charts = panel.find(".vc_line-chart"),
                    $carousel = panel.find('[data-ride="vc_carousel"]');
                vc_carouselBehaviour(),
                    vc_plugin_flexslider(panel),
                    ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
                        ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                            var grid = jQuery(this).data("vcGrid");
                            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
                        }),
                    panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
                        panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                            var grid = jQuery(this).data("vcGrid");
                            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
                        }),
                    $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
                    $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }),
                    $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }),
                    $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"),
                    ($ui_panel = panel.find(".isotope, .wpb_image_grid_ul")),
                    ($google_maps = panel.find(".wpb_gmaps_widget")),
                    0 < $ui_panel.length && $ui_panel.isotope("layout"),
                    $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")),
                    panel.parents(".isotope").length &&
                        panel.parents(".isotope").each(function () {
                            jQuery(this).isotope("layout");
                        }),
                    $(document).trigger("wpb_prepare_tab_content", panel);
            }),
            "function" != typeof window.vc_ttaActivation &&
                (window.vc_ttaActivation = function () {
                    jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
                        var $ = window.jQuery,
                            ui = {};
                        (ui.newPanel = $(this).data("vc.accordion").getTarget()), window.wpb_prepare_tab_content(e, ui);
                    });
                }),
            "function" != typeof window.vc_accordionActivate &&
                (window.vc_accordionActivate = function (event, ui) {
                    var $pie_charts, $round_charts, $line_charts, $carousel;
                    ui.newPanel.length &&
                        ui.newHeader.length &&
                        (($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")),
                        ($round_charts = ui.newPanel.find(".vc_round-chart")),
                        ($line_charts = ui.newPanel.find(".vc_line-chart")),
                        ($carousel = ui.newPanel.find('[data-ride="vc_carousel"]')),
                        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),
                        ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
                            ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                                var grid = jQuery(this).data("vcGrid");
                                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
                            }),
                        vc_carouselBehaviour(ui.newPanel),
                        vc_plugin_flexslider(ui.newPanel),
                        $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
                        $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }),
                        $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }),
                        $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"),
                        ui.newPanel.parents(".isotope").length &&
                            ui.newPanel.parents(".isotope").each(function () {
                                jQuery(this).isotope("layout");
                            }));
                }),
            "function" != typeof window.initVideoBackgrounds &&
                (window.initVideoBackgrounds = function () {
                    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds();
                }),
            "function" != typeof window.vc_initVideoBackgrounds &&
                (window.vc_initVideoBackgrounds = function () {
                    jQuery("[data-vc-video-bg]").each(function () {
                        var youtubeUrl,
                            youtubeId,
                            $element = jQuery(this);
                        $element.data("vcVideoBg")
                            ? ((youtubeUrl = $element.data("vcVideoBg")),
                              (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)),
                              jQuery(window).on("grid:items:added", function (event, $grid) {
                                  $element.has($grid).length && vcResizeVideoBackground($element);
                              }))
                            : $element.find(".vc_video-bg").remove();
                    });
                }),
            "function" != typeof window.insertYoutubeVideoAsBackground &&
                (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
                    if ("undefined" == typeof YT || void 0 === YT.Player)
                        return 100 < (counter = void 0 === counter ? 0 : counter)
                            ? void console.warn("Too many attempts to load YouTube api")
                            : void setTimeout(function () {
                                  insertYoutubeVideoAsBackground($element, youtubeId, counter++);
                              }, 100);
                    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
                    new YT.Player($container[0], {
                        width: "100%",
                        height: "100%",
                        videoId: youtubeId,
                        playerVars: { playlist: youtubeId, iv_load_policy: 3, enablejsapi: 1, disablekb: 1, autoplay: 1, controls: 0, showinfo: 0, rel: 0, loop: 1, wmode: "transparent" },
                        events: {
                            onReady: function (event) {
                                event.target.mute().setLoop(!0);
                            },
                        },
                    }),
                        vcResizeVideoBackground($element),
                        jQuery(window).bind("resize", function () {
                            vcResizeVideoBackground($element);
                        });
                }),
            "function" != typeof window.vcResizeVideoBackground &&
                (window.vcResizeVideoBackground = function ($element) {
                    var iframeW,
                        iframeH,
                        marginLeft,
                        marginTop,
                        containerW = $element.innerWidth(),
                        containerH = $element.innerHeight();
                    containerW / containerH < 16 / 9
                        ? ((iframeW = containerH * (16 / 9)), (iframeH = containerH), (marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), (marginTop = -Math.round((iframeH - containerH) / 2) + "px"))
                        : ((iframeH = (iframeW = containerW) * (9 / 16)), (marginTop = -Math.round((iframeH - containerH) / 2) + "px"), (marginLeft = -Math.round((iframeW - containerW) / 2) + "px")),
                        (iframeW += "px"),
                        (iframeH += "px"),
                        $element.find(".vc_video-bg iframe").css({ maxWidth: "1000%", marginLeft: marginLeft, marginTop: marginTop, width: iframeW, height: iframeH });
                }),
            "function" != typeof window.vcExtractYoutubeId &&
                (window.vcExtractYoutubeId = function (url) {
                    if (void 0 === url) return !1;
                    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                    return null !== id && id[1];
                }),
            "function" != typeof window.vc_googleMapsPointer &&
                (window.vc_googleMapsPointer = function () {
                    var $ = window.jQuery,
                        $wpbGmapsWidget = $(".wpb_gmaps_widget");
                    $wpbGmapsWidget.on("click", function () {
                        $("iframe", this).css("pointer-events", "auto");
                    }),
                        $wpbGmapsWidget.on("mouseleave", function () {
                            $("iframe", this).css("pointer-events", "none");
                        }),
                        $(".wpb_gmaps_widget iframe").css("pointer-events", "none");
                }),
            "function" != typeof window.vc_setHoverBoxPerspective &&
                (window.vc_setHoverBoxPerspective = function (hoverBox) {
                    hoverBox.each(function () {
                        var $this = jQuery(this),
                            perspective = 4 * $this.width() + "px";
                        $this.css("perspective", perspective);
                    });
                }),
            "function" != typeof window.vc_setHoverBoxHeight &&
                (window.vc_setHoverBoxHeight = function (hoverBox) {
                    hoverBox.each(function () {
                        var $this = jQuery(this),
                            hoverBoxInner = $this.find(".vc-hoverbox-inner");
                        hoverBoxInner.css("min-height", 0);
                        var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                            backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                            hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                        hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px");
                    });
                }),
            "function" != typeof window.vc_prepareHoverBox &&
                (window.vc_prepareHoverBox = function () {
                    var hoverBox = jQuery(".vc-hoverbox");
                    vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox);
                }),
            jQuery(document).ready(window.vc_prepareHoverBox),
            jQuery(window).resize(window.vc_prepareHoverBox),
            jQuery(document).ready(function ($) {
                window.vc_js();
            });
    })(window.jQuery);
/*jquery.parallax-scroll68b3.js*/
var ParallaxScroll = {
    showLogs: false,
    round: 1000,
    init: function () {
        this._log("init");
        if (this._inited) {
            this._log("Already Inited");
            this._inited = true;
            return;
        }
        this._requestAnimationFrame = (function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback, element) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        })();
        this._onScroll(true);
    },
    _inited: false,
    _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
    _requestAnimationFrame: null,
    _log: function (message) {
        if (this.showLogs) console.log("Parallax Scroll / " + message);
    },
    _onScroll: function (noSmooth) {
        var scroll = jQuery(document).scrollTop();
        var windowHeight = jQuery(window).height();
        this._log("onScroll " + scroll);
        jQuery("[data-parallax]").each(
            jQuery.proxy(function (index, el) {
                var jQueryel = jQuery(el);
                var properties = [];
                var applyProperties = false;
                var style = jQueryel.data("style");
                if (style == undefined) {
                    style = jQueryel.attr("style") || "";
                    jQueryel.data("style", style);
                }
                var datas = [jQueryel.data("parallax")];
                var iData;
                for (iData = 2; ; iData++) {
                    if (jQueryel.data("parallax" + iData)) {
                        datas.push(jQueryel.data("parallax-" + iData));
                    } else {
                        break;
                    }
                }
                var datasLength = datas.length;
                for (iData = 0; iData < datasLength; iData++) {
                    var data = datas[iData];
                    var scrollFrom = data["from-scroll"];
                    if (scrollFrom == undefined) scrollFrom = Math.max(0, jQuery(el).offset().top - windowHeight);
                    scrollFrom = scrollFrom | 0;
                    var scrollDistance = data["distance"];
                    var scrollTo = data["to-scroll"];
                    if (scrollDistance == undefined && scrollTo == undefined) scrollDistance = windowHeight;
                    scrollDistance = Math.max(scrollDistance | 0, 1);
                    var easing = data["easing"];
                    var easingReturn = data["easing-return"];
                    if (easing == undefined || !jQuery.easing || !jQuery.easing[easing]) easing = null;
                    if (easingReturn == undefined || !jQuery.easing || !jQuery.easing[easingReturn]) easingReturn = easing;
                    if (easing) {
                        var totalTime = data["duration"];
                        if (totalTime == undefined) totalTime = scrollDistance;
                        totalTime = Math.max(totalTime | 0, 1);
                        var totalTimeReturn = data["duration-return"];
                        if (totalTimeReturn == undefined) totalTimeReturn = totalTime;
                        scrollDistance = 1;
                        var currentTime = jQueryel.data("current-time");
                        if (currentTime == undefined) currentTime = 0;
                    }
                    if (scrollTo == undefined) scrollTo = scrollFrom + scrollDistance;
                    scrollTo = scrollTo | 0;
                    var smoothness = data["smoothness"];
                    if (smoothness == undefined) smoothness = 30;
                    smoothness = smoothness | 0;
                    if (noSmooth || smoothness == 0) smoothness = 1;
                    smoothness = smoothness | 0;
                    var scrollCurrent = scroll;
                    scrollCurrent = Math.max(scrollCurrent, scrollFrom);
                    scrollCurrent = Math.min(scrollCurrent, scrollTo);
                    if (easing) {
                        if (jQueryel.data("sens") == undefined) jQueryel.data("sens", "back");
                        if (scrollCurrent > scrollFrom) {
                            if (jQueryel.data("sens") == "back") {
                                currentTime = 1;
                                jQueryel.data("sens", "go");
                            } else {
                                currentTime++;
                            }
                        }
                        if (scrollCurrent < scrollTo) {
                            if (jQueryel.data("sens") == "go") {
                                currentTime = 1;
                                jQueryel.data("sens", "back");
                            } else {
                                currentTime++;
                            }
                        }
                        if (noSmooth) currentTime = totalTime;
                        jQueryel.data("current-time", currentTime);
                    }
                    this._properties.map(
                        jQuery.proxy(function (prop) {
                            var defaultProp = 0;
                            var to = data[prop];
                            if (to == undefined) return;
                            if (prop == "scale" || prop == "scaleX" || prop == "scaleY" || prop == "scaleZ") {
                                defaultProp = 1;
                            } else {
                                to = to | 0;
                            }
                            var prev = jQueryel.data("_" + prop);
                            if (prev == undefined) prev = defaultProp;
                            var next = (to - defaultProp) * ((scrollCurrent - scrollFrom) / (scrollTo - scrollFrom)) + defaultProp;
                            var val = prev + (next - prev) / smoothness;
                            if (easing && currentTime > 0 && currentTime <= totalTime) {
                                var from = defaultProp;
                                if (jQueryel.data("sens") == "back") {
                                    from = to;
                                    to = -to;
                                    easing = easingReturn;
                                    totalTime = totalTimeReturn;
                                }
                                val = jQuery.easing[easing](null, currentTime, from, to, totalTime);
                            }
                            val = Math.ceil(val * this.round) / this.round;
                            if (val == prev && next == to) val = to;
                            if (!properties[prop]) properties[prop] = 0;
                            properties[prop] += val;
                            if (prev != properties[prop]) {
                                jQueryel.data("_" + prop, properties[prop]);
                                applyProperties = true;
                            }
                        }, this)
                    );
                }
                if (applyProperties) {
                    if (properties["z"] != undefined) {
                        var perspective = data["perspective"];
                        if (perspective == undefined) perspective = 800;
                        var jQueryparent = jQueryel.parent();
                        if (!jQueryparent.data("style")) jQueryparent.data("style", jQueryparent.attr("style") || "");
                        jQueryparent.attr("style", "perspective:" + perspective + "px; -webkit-perspective:" + perspective + "px; " + jQueryparent.data("style"));
                    }
                    if (properties["scaleX"] == undefined) properties["scaleX"] = 1;
                    if (properties["scaleY"] == undefined) properties["scaleY"] = 1;
                    if (properties["scaleZ"] == undefined) properties["scaleZ"] = 1;
                    if (properties["scale"] != undefined) {
                        properties["scaleX"] *= properties["scale"];
                        properties["scaleY"] *= properties["scale"];
                        properties["scaleZ"] *= properties["scale"];
                    }
                    var translate3d = "translate3d(" + (properties["x"] ? properties["x"] : 0) + "px, " + (properties["y"] ? properties["y"] : 0) + "px, " + (properties["z"] ? properties["z"] : 0) + "px)";
                    var rotate3d =
                        "rotateX(" +
                        (properties["rotateX"] ? properties["rotateX"] : 0) +
                        "deg) rotateY(" +
                        (properties["rotateY"] ? properties["rotateY"] : 0) +
                        "deg) rotateZ(" +
                        (properties["rotateZ"] ? properties["rotateZ"] : 0) +
                        "deg)";
                    var scale3d = "scaleX(" + properties["scaleX"] + ") scaleY(" + properties["scaleY"] + ") scaleZ(" + properties["scaleZ"] + ")";
                    var cssTransform = translate3d + " " + rotate3d + " " + scale3d + ";";
                    this._log(cssTransform);
                    jQueryel.attr("style", "transform:" + cssTransform + " -webkit-transform:" + cssTransform + " " + style);
                }
            }, this)
        );
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(jQuery.proxy(this._onScroll, this, false));
        } else {
            this._requestAnimationFrame(jQuery.proxy(this._onScroll, this, false));
        }
    },
};
/*wp-embed.min69c8.js*/
/*! This file is auto-generated */
!(function (c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector) if (c.addEventListener) e = !0;
    if (((c.wp = c.wp || {}), !c.wp.receiveEmbedMessage))
        if (
            ((c.wp.receiveEmbedMessage = function (e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (((r = s[o]), e.source === r.contentWindow)) {
                                    if ((r.removeAttribute("style"), "height" === t.message)) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i;
                                    }
                                    if ("link" === t.message)
                                        if (((a = d.createElement("a")), (i = d.createElement("a")), (a.href = r.getAttribute("src")), (i.href = t.value), i.host === a.host)) if (d.activeElement === r) c.top.location.href = t.value;
                                }
                        }
            }),
            e)
        )
            c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);
    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) (t = Math.random().toString(36).substr(2, 10)), (e.src += "#?secret=" + t), e.setAttribute("data-secret", t);
                if (r || a) (t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e);
            }
        }
    }
})(window, document);

/*select2.full.min7942.js*/
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
!(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery);
})(function (t) {
    var e,
        n,
        d,
        s,
        r,
        p,
        h,
        f,
        g,
        m,
        y,
        i,
        o,
        v,
        a,
        a =
            (((u = t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) && u.requirejs) ||
                (u ? (n = u) : (u = {}),
                (f = {}),
                (g = {}),
                (m = {}),
                (y = {}),
                (i = Object.prototype.hasOwnProperty),
                (o = [].slice),
                (v = /\.js$/),
                (p = function (e, t) {
                    var n,
                        i,
                        o = c(e),
                        s = o[0];
                    return (
                        (e = o[1]),
                        s && (n = b((s = l(s, t)))),
                        s
                            ? (e =
                                  n && n.normalize
                                      ? n.normalize(
                                            e,
                                            ((i = t),
                                            function (e) {
                                                return l(e, i);
                                            })
                                        )
                                      : l(e, t))
                            : ((s = (o = c((e = l(e, t))))[0]), (e = o[1]), s && (n = b(s))),
                        { f: s ? s + "!" + e : e, n: e, pr: s, p: n }
                    );
                }),
                (h = {
                    require: function (e) {
                        return w(e);
                    },
                    exports: function (e) {
                        var t = f[e];
                        return void 0 !== t ? t : (f[e] = {});
                    },
                    module: function (e) {
                        return {
                            id: e,
                            uri: "",
                            exports: f[e],
                            config:
                                ((t = e),
                                function () {
                                    return (m && m.config && m.config[t]) || {};
                                }),
                        };
                        var t;
                    },
                }),
                (s = function (e, t, n, i) {
                    var o,
                        s,
                        r,
                        a,
                        l,
                        c = [],
                        u = typeof n;
                    if (((i = i || e), "undefined" == u || "function" == u)) {
                        for (t = !t.length && n.length ? ["require", "exports", "module"] : t, a = 0; a < t.length; a += 1)
                            if ("require" === (s = (r = p(t[a], i)).f)) c[a] = h.require(e);
                            else if ("exports" === s) (c[a] = h.exports(e)), (l = !0);
                            else if ("module" === s) o = c[a] = h.module(e);
                            else if (_(f, s) || _(g, s) || _(y, s)) c[a] = b(s);
                            else {
                                if (!r.p) throw new Error(e + " missing " + s);
                                r.p.load(
                                    r.n,
                                    w(i, !0),
                                    (function (t) {
                                        return function (e) {
                                            f[t] = e;
                                        };
                                    })(s),
                                    {}
                                ),
                                    (c[a] = f[s]);
                            }
                        (u = n ? n.apply(f[e], c) : undefined), e && (o && o.exports !== d && o.exports !== f[e] ? (f[e] = o.exports) : (u === d && l) || (f[e] = u));
                    } else e && (f[e] = n);
                }),
                (e = n = r = function (e, t, n, i, o) {
                    if ("string" == typeof e) return h[e] ? h[e](t) : b(p(e, t).f);
                    if (!e.splice) {
                        if (((m = e).deps && r(m.deps, m.callback), !t)) return;
                        t.splice ? ((e = t), (t = n), (n = null)) : (e = d);
                    }
                    return (
                        (t = t || function () {}),
                        "function" == typeof n && ((n = i), (i = o)),
                        i
                            ? s(d, e, t, n)
                            : setTimeout(function () {
                                  s(d, e, t, n);
                              }, 4),
                        r
                    );
                }),
                (r.config = function (e) {
                    return r(e);
                }),
                (e._defined = f),
                ((a = function (e, t, n) {
                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || ((n = t), (t = [])), _(f, e) || _(g, e) || (g[e] = [e, t, n]);
                }).amd = { jQuery: !0 }),
                (u.requirejs = e),
                (u.require = n),
                (u.define = a)),
            u.define("almond", function () {}),
            u.define("jquery", [], function () {
                var e = t || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
            }),
            u.define("select2/utils", ["jquery"], function (s) {
                var e = {};
                function c(e) {
                    var t,
                        n = e.prototype,
                        i = [];
                    for (t in n) "function" == typeof n[t] && "constructor" !== t && i.push(t);
                    return i;
                }
                (e.Extend = function (e, t) {
                    var n,
                        i = {}.hasOwnProperty;
                    function o() {
                        this.constructor = e;
                    }
                    for (n in t) i.call(t, n) && (e[n] = t[n]);
                    return (o.prototype = t.prototype), (e.prototype = new o()), (e.__super__ = t.prototype), e;
                }),
                    (e.Decorate = function (i, o) {
                        var e = c(o),
                            t = c(i);
                        function s() {
                            var e = Array.prototype.unshift,
                                t = o.prototype.constructor.length,
                                n = i.prototype.constructor;
                            0 < t && (e.call(arguments, i.prototype.constructor), (n = o.prototype.constructor)), n.apply(this, arguments);
                        }
                        (o.displayName = i.displayName),
                            (s.prototype = new (function () {
                                this.constructor = s;
                            })());
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            s.prototype[r] = i.prototype[r];
                        }
                        for (var a = 0; a < e.length; a++) {
                            var l = e[a];
                            s.prototype[l] = (function (e) {
                                var t = function () {};
                                e in s.prototype && (t = s.prototype[e]);
                                var n = o.prototype[e];
                                return function () {
                                    return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
                                };
                            })(l);
                        }
                        return s;
                    });
                var t = function () {
                    this.listeners = {};
                };
                return (
                    (t.prototype.on = function (e, t) {
                        (this.listeners = this.listeners || {}), e in this.listeners ? this.listeners[e].push(t) : (this.listeners[e] = [t]);
                    }),
                    (t.prototype.trigger = function (e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        (this.listeners = this.listeners || {}),
                            0 === (n = null == n ? [] : n).length && n.push({}),
                            (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                            "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                    }),
                    (t.prototype.invoke = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
                    }),
                    (e.Observable = t),
                    (e.generateChars = function (e) {
                        for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                        return t;
                    }),
                    (e.bind = function (e, t) {
                        return function () {
                            e.apply(t, arguments);
                        };
                    }),
                    (e._convertData = function (e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                i = e;
                            if (1 !== n.length) {
                                for (var o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), o == n.length - 1 && (i[s] = e[t]), (i = i[s]);
                                }
                                delete e[t];
                            }
                        }
                        return e;
                    }),
                    (e.hasScroll = function (e, t) {
                        var n = s(t),
                            i = t.style.overflowX,
                            o = t.style.overflowY;
                        return (i !== o || ("hidden" !== o && "visible" !== o)) && ("scroll" === i || "scroll" === o || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
                    }),
                    (e.escapeMarkup = function (e) {
                        var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
                        return "string" != typeof e
                            ? e
                            : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                                  return t[e];
                              });
                    }),
                    (e.appendMany = function (e, t) {
                        var n;
                        "1.7" === s.fn.jquery.substr(0, 3) &&
                            ((n = s()),
                            s.map(t, function (e) {
                                n = n.add(e);
                            }),
                            (t = n)),
                            e.append(t);
                    }),
                    e
                );
            }),
            u.define("select2/results", ["jquery", "./utils"], function (d, e) {
                function i(e, t, n) {
                    (this.$element = e), (this.data = n), (this.options = t), i.__super__.constructor.call(this);
                }
                return (
                    e.Extend(i, e.Observable),
                    (i.prototype.render = function () {
                        var e = d('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), (this.$results = e);
                    }),
                    (i.prototype.clear = function () {
                        this.$results.empty();
                    }),
                    (i.prototype.displayMessage = function (e) {
                        var t = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var n = d('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            i = this.options.get("translations").get(e.message);
                        n.append(t(i(e.args))), (n[0].className += " select2-results__message"), this.$results.append(n);
                    }),
                    (i.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove();
                    }),
                    (i.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n],
                                    i = this.option(i);
                                t.push(i);
                            }
                            this.$results.append(t);
                        } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
                    }),
                    (i.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e);
                    }),
                    (i.prototype.sort = function (e) {
                        return this.options.get("sorter")(e);
                    }),
                    (i.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible();
                    }),
                    (i.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (e) {
                            var i = d.map(e, function (e) {
                                return e.id.toString();
                            });
                            t.$results.find(".select2-results__option[aria-selected]").each(function () {
                                var e = d(this),
                                    t = d.data(this, "data"),
                                    n = "" + t.id;
                                (null != t.element && t.element.selected) || (null == t.element && -1 < d.inArray(n, i)) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
                            });
                        });
                    }),
                    (i.prototype.showLoading = function (e) {
                        this.hideLoading();
                        (e = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) }), (e = this.option(e));
                        (e.className += " loading-results"), this.$results.prepend(e);
                    }),
                    (i.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove();
                    }),
                    (i.prototype.option = function (e) {
                        var t = document.createElement("li");
                        t.className = "select2-results__option";
                        var n,
                            i = { role: "treeitem", "aria-selected": "false" };
                        for (n in (e.disabled && (delete i["aria-selected"], (i["aria-disabled"] = "true")),
                        null == e.id && delete i["aria-selected"],
                        null != e._resultId && (t.id = e._resultId),
                        e.title && (t.title = e.title),
                        e.children && ((i.role = "group"), (i["aria-label"] = e.text), delete i["aria-selected"]),
                        i)) {
                            var o = i[n];
                            t.setAttribute(n, o);
                        }
                        if (e.children) {
                            var s = d(t),
                                r = document.createElement("strong");
                            r.className = "select2-results__group";
                            d(r);
                            this.template(e, r);
                            for (var a = [], l = 0; l < e.children.length; l++) {
                                var c = e.children[l],
                                    c = this.option(c);
                                a.push(c);
                            }
                            var u = d("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                            u.append(a), s.append(r), s.append(u);
                        } else this.template(e, t);
                        return d.data(t, "data", e), t;
                    }),
                    (i.prototype.bind = function (t, e) {
                        var o = this,
                            n = t.id + "-results";
                        this.$results.attr("id", n),
                            t.on("results:all", function (e) {
                                o.clear(), o.append(e.data), t.isOpen() && (o.setClasses(), o.highlightFirstItem());
                            }),
                            t.on("results:append", function (e) {
                                o.append(e.data), t.isOpen() && o.setClasses();
                            }),
                            t.on("query", function (e) {
                                o.hideMessages(), o.showLoading(e);
                            }),
                            t.on("select", function () {
                                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
                            }),
                            t.on("unselect", function () {
                                t.isOpen() && (o.setClasses(), o.highlightFirstItem());
                            }),
                            t.on("open", function () {
                                o.$results.attr("aria-expanded", "true"), o.$results.attr("aria-hidden", "false"), o.setClasses(), o.ensureHighlightVisible();
                            }),
                            t.on("close", function () {
                                o.$results.attr("aria-expanded", "false"), o.$results.attr("aria-hidden", "true"), o.$results.removeAttr("aria-activedescendant");
                            }),
                            t.on("results:toggle", function () {
                                var e = o.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup");
                            }),
                            t.on("results:select", function () {
                                var e,
                                    t = o.getHighlightedResults();
                                0 !== t.length && ((e = t.data("data")), "true" == t.attr("aria-selected") ? o.trigger("close", {}) : o.trigger("select", { data: e }));
                            }),
                            t.on("results:previous", function () {
                                var e,
                                    t = o.getHighlightedResults(),
                                    n = o.$results.find("[aria-selected]"),
                                    i = n.index(t);
                                0 !== i &&
                                    ((e = i - 1),
                                    0 === t.length && (e = 0),
                                    (i = n.eq(e)).trigger("mouseenter"),
                                    (t = o.$results.offset().top),
                                    (n = i.offset().top),
                                    (i = o.$results.scrollTop() + (n - t)),
                                    0 === e ? o.$results.scrollTop(0) : n - t < 0 && o.$results.scrollTop(i));
                            }),
                            t.on("results:next", function () {
                                var e,
                                    t = o.getHighlightedResults(),
                                    n = o.$results.find("[aria-selected]"),
                                    i = n.index(t) + 1;
                                i >= n.length ||
                                    ((e = n.eq(i)).trigger("mouseenter"),
                                    (t = o.$results.offset().top + o.$results.outerHeight(!1)),
                                    (n = e.offset().top + e.outerHeight(!1)),
                                    (e = o.$results.scrollTop() + n - t),
                                    0 === i ? o.$results.scrollTop(0) : t < n && o.$results.scrollTop(e));
                            }),
                            t.on("results:focus", function (e) {
                                e.element.addClass("select2-results__option--highlighted");
                            }),
                            t.on("results:message", function (e) {
                                o.displayMessage(e);
                            }),
                            d.fn.mousewheel &&
                                this.$results.on("mousewheel", function (e) {
                                    var t = o.$results.scrollTop(),
                                        n = o.$results.get(0).scrollHeight - t + e.deltaY,
                                        t = 0 < e.deltaY && t - e.deltaY <= 0,
                                        n = e.deltaY < 0 && n <= o.$results.height();
                                    t ? (o.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (o.$results.scrollTop(o.$results.get(0).scrollHeight - o.$results.height()), e.preventDefault(), e.stopPropagation());
                                }),
                            this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                                var t = d(this),
                                    n = t.data("data");
                                "true" !== t.attr("aria-selected") ? o.trigger("select", { originalEvent: e, data: n }) : o.options.get("multiple") ? o.trigger("unselect", { originalEvent: e, data: n }) : o.trigger("close", {});
                            }),
                            this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                                var t = d(this).data("data");
                                o.getHighlightedResults().removeClass("select2-results__option--highlighted"), o.trigger("results:focus", { data: t, element: d(this) });
                            });
                    }),
                    (i.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted");
                    }),
                    (i.prototype.destroy = function () {
                        this.$results.remove();
                    }),
                    (i.prototype.ensureHighlightVisible = function () {
                        var e,
                            t,
                            n,
                            i,
                            o = this.getHighlightedResults();
                        0 !== o.length &&
                            ((e = this.$results.find("[aria-selected]").index(o)),
                            (i = this.$results.offset().top),
                            (t = o.offset().top),
                            (n = this.$results.scrollTop() + (t - i)),
                            (i = t - i),
                            (n -= 2 * o.outerHeight(!1)),
                            e <= 2 ? this.$results.scrollTop(0) : (i > this.$results.outerHeight() || i < 0) && this.$results.scrollTop(n));
                    }),
                    (i.prototype.template = function (e, t) {
                        var n = this.options.get("templateResult"),
                            i = this.options.get("escapeMarkup"),
                            n = n(e, t);
                        null == n ? (t.style.display = "none") : "string" == typeof n ? (t.innerHTML = i(n)) : d(t).append(n);
                    }),
                    i
                );
            }),
            u.define("select2/keys", [], function () {
                return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
            }),
            u.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, e, o) {
                function i(e, t) {
                    (this.$element = e), (this.options = t), i.__super__.constructor.call(this);
                }
                return (
                    e.Extend(i, e.Observable),
                    (i.prototype.render = function () {
                        var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return (
                            (this._tabindex = 0),
                            null != this.$element.data("old-tabindex") ? (this._tabindex = this.$element.data("old-tabindex")) : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                            e.attr("title", this.$element.attr("title")),
                            e.attr("tabindex", this._tabindex),
                            (this.$selection = e)
                        );
                    }),
                    (i.prototype.bind = function (e, t) {
                        var n = this,
                            i = (e.id, e.id + "-results");
                        (this.container = e),
                            this.$selection.on("focus", function (e) {
                                n.trigger("focus", e);
                            }),
                            this.$selection.on("blur", function (e) {
                                n._handleBlur(e);
                            }),
                            this.$selection.on("keydown", function (e) {
                                n.trigger("keypress", e), e.which === o.SPACE && e.preventDefault();
                            }),
                            e.on("results:focus", function (e) {
                                n.$selection.attr("aria-activedescendant", e.data._resultId);
                            }),
                            e.on("selection:update", function (e) {
                                n.update(e.data);
                            }),
                            e.on("open", function () {
                                n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e);
                            }),
                            e.on("close", function () {
                                n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e);
                            }),
                            e.on("enable", function () {
                                n.$selection.attr("tabindex", n._tabindex);
                            }),
                            e.on("disable", function () {
                                n.$selection.attr("tabindex", "-1");
                            });
                    }),
                    (i.prototype._handleBlur = function (e) {
                        var t = this;
                        window.setTimeout(function () {
                            document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
                        }, 1);
                    }),
                    (i.prototype._attachCloseHandler = function (e) {
                        n(document.body).on("mousedown.select2." + e.id, function (e) {
                            var t = n(e.target).closest(".select2");
                            n(".select2.select2-container--open").each(function () {
                                var e = n(this);
                                this != t[0] && e.data("element").select2("close");
                            });
                        });
                    }),
                    (i.prototype._detachCloseHandler = function (e) {
                        n(document.body).off("mousedown.select2." + e.id);
                    }),
                    (i.prototype.position = function (e, t) {
                        t.find(".selection").append(e);
                    }),
                    (i.prototype.destroy = function () {
                        this._detachCloseHandler(this.container);
                    }),
                    (i.prototype.update = function (e) {
                        throw new Error("The `update` method must be defined in child classes.");
                    }),
                    i
                );
            }),
            u.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
                function o() {
                    o.__super__.constructor.apply(this, arguments);
                }
                return (
                    n.Extend(o, t),
                    (o.prototype.render = function () {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
                    }),
                    (o.prototype.bind = function (t, e) {
                        var n = this;
                        o.__super__.bind.apply(this, arguments);
                        var i = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i),
                            this.$selection.attr("aria-labelledby", i),
                            this.$selection.on("mousedown", function (e) {
                                1 === e.which && n.trigger("toggle", { originalEvent: e });
                            }),
                            this.$selection.on("focus", function (e) {}),
                            this.$selection.on("blur", function (e) {}),
                            t.on("focus", function (e) {
                                t.isOpen() || n.$selection.focus();
                            }),
                            t.on("selection:update", function (e) {
                                n.update(e.data);
                            });
                    }),
                    (o.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty();
                    }),
                    (o.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t));
                    }),
                    (o.prototype.selectionContainer = function () {
                        return e("<span></span>");
                    }),
                    (o.prototype.update = function (e) {
                        var t, n;
                        0 !== e.length ? ((t = e[0]), (n = this.$selection.find(".select2-selection__rendered")), (e = this.display(t, n)), n.empty().append(e), n.prop("title", t.title || t.text)) : this.clear();
                    }),
                    o
                );
            }),
            u.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, a) {
                function o(e, t) {
                    o.__super__.constructor.apply(this, arguments);
                }
                return (
                    a.Extend(o, e),
                    (o.prototype.render = function () {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
                    }),
                    (o.prototype.bind = function (e, t) {
                        var n = this;
                        o.__super__.bind.apply(this, arguments),
                            this.$selection.on("click", function (e) {
                                n.trigger("toggle", { originalEvent: e });
                            }),
                            this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                                var t;
                                n.options.get("disabled") || ((t = i(this).parent().data("data")), n.trigger("unselect", { originalEvent: e, data: t }));
                            });
                    }),
                    (o.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty();
                    }),
                    (o.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t));
                    }),
                    (o.prototype.selectionContainer = function () {
                        return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                    }),
                    (o.prototype.update = function (e) {
                        if ((this.clear(), 0 !== e.length)) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n],
                                    o = this.selectionContainer(),
                                    s = this.display(i, o);
                                o.append(s), o.prop("title", i.title || i.text), o.data("data", i), t.push(o);
                            }
                            var r = this.$selection.find(".select2-selection__rendered");
                            a.appendMany(r, t);
                        }
                    }),
                    o
                );
            }),
            u.define("select2/selection/placeholder", ["../utils"], function (e) {
                function t(e, t, n) {
                    (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))), e.call(this, t, n);
                }
                return (
                    (t.prototype.normalizePlaceholder = function (e, t) {
                        return (t = "string" == typeof t ? { id: "", text: t } : t);
                    }),
                    (t.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
                    }),
                    (t.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (1 < t.length || n) return e.call(this, t);
                        this.clear();
                        e = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(e);
                    }),
                    t
                );
            }),
            u.define("select2/selection/allowClear", ["jquery", "../keys"], function (n, i) {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                            this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                                i._handleClear(e);
                            }),
                            t.on("keypress", function (e) {
                                i._handleKeyboardClear(e, t);
                            });
                    }),
                    (e.prototype._handleClear = function (e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), o = 0; o < i.length; o++) {
                                    var s = { data: i[o] };
                                    if ((this.trigger("unselect", s), s.prevented)) return;
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
                            }
                        }
                    }),
                    (e.prototype._handleKeyboardClear = function (e, t, n) {
                        n.isOpen() || (t.which != i.DELETE && t.which != i.BACKSPACE) || this._handleClear(t);
                    }),
                    (e.prototype.update = function (e, t) {
                        e.call(this, t),
                            0 < this.$selection.find(".select2-selection__placeholder").length ||
                                0 === t.length ||
                                ((e = n('<span class="select2-selection__clear">&times;</span>')).data("data", t), this.$selection.find(".select2-selection__rendered").prepend(e));
                    }),
                    e
                );
            }),
            u.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (n, e, s) {
                function t(e, t, n) {
                    e.call(this, t, n);
                }
                return (
                    (t.prototype.render = function (e) {
                        var t = n(
                            '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                        );
                        (this.$searchContainer = t), (this.$search = t.find("input"));
                        e = e.call(this);
                        return this._transferTabIndex(), e;
                    }),
                    (t.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            t.on("open", function () {
                                i.$search.trigger("focus");
                            }),
                            t.on("close", function () {
                                i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
                            }),
                            t.on("enable", function () {
                                i.$search.prop("disabled", !1), i._transferTabIndex();
                            }),
                            t.on("disable", function () {
                                i.$search.prop("disabled", !0);
                            }),
                            t.on("focus", function (e) {
                                i.$search.trigger("focus");
                            }),
                            t.on("results:focus", function (e) {
                                i.$search.attr("aria-activedescendant", e.id);
                            }),
                            this.$selection.on("focusin", ".select2-search--inline", function (e) {
                                i.trigger("focus", e);
                            }),
                            this.$selection.on("focusout", ".select2-search--inline", function (e) {
                                i._handleBlur(e);
                            }),
                            this.$selection.on("keydown", ".select2-search--inline", function (e) {
                                var t;
                                e.stopPropagation(),
                                    i.trigger("keypress", e),
                                    (i._keyUpPrevented = e.isDefaultPrevented()),
                                    e.which !== s.BACKSPACE || "" !== i.$search.val() || (0 < (t = i.$searchContainer.prev(".select2-selection__choice")).length && ((t = t.data("data")), i.searchRemoveChoice(t), e.preventDefault()));
                            });
                        var t = document.documentMode,
                            o = t && t <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                            o ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
                        }),
                            this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                                var t;
                                o && "input" === e.type ? i.$selection.off("input.search input.searchcheck") : (t = e.which) != s.SHIFT && t != s.CTRL && t != s.ALT && t != s.TAB && i.handleSearch(e);
                            });
                    }),
                    (t.prototype._transferTabIndex = function (e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                    }),
                    (t.prototype.createPlaceholder = function (e, t) {
                        this.$search.attr("placeholder", t.text);
                    }),
                    (t.prototype.update = function (e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus();
                    }),
                    (t.prototype.handleSearch = function () {
                        var e;
                        this.resizeSearch(), this._keyUpPrevented || ((e = this.$search.val()), this.trigger("query", { term: e })), (this._keyUpPrevented = !1);
                    }),
                    (t.prototype.searchRemoveChoice = function (e, t) {
                        this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch();
                    }),
                    (t.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var e = "";
                        (e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : 0.75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e);
                    }),
                    t
                );
            }),
            u.define("select2/selection/eventRelay", ["jquery"], function (r) {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var i = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            s = ["opening", "closing", "selecting", "unselecting"];
                        e.call(this, t, n),
                            t.on("*", function (e, t) {
                                var n;
                                -1 !== r.inArray(e, o) && ((n = r.Event("select2:" + e, { params: (t = t || {}) })), i.$element.trigger(n), -1 !== r.inArray(e, s) && (t.prevented = n.isDefaultPrevented()));
                            });
                    }),
                    e
                );
            }),
            u.define("select2/translation", ["jquery", "require"], function (t, n) {
                function i(e) {
                    this.dict = e || {};
                }
                return (
                    (i.prototype.all = function () {
                        return this.dict;
                    }),
                    (i.prototype.get = function (e) {
                        return this.dict[e];
                    }),
                    (i.prototype.extend = function (e) {
                        this.dict = t.extend({}, e.all(), this.dict);
                    }),
                    (i._cache = {}),
                    (i.loadPath = function (e) {
                        var t;
                        return e in i._cache || ((t = n(e)), (i._cache[e] = t)), new i(i._cache[e]);
                    }),
                    i
                );
            }),
            u.define("select2/diacritics", [], function () {
                return {
                    "Ⓐ": "A",
                    Ａ: "A",
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ầ: "A",
                    Ấ: "A",
                    Ẫ: "A",
                    Ẩ: "A",
                    Ã: "A",
                    Ā: "A",
                    Ă: "A",
                    Ằ: "A",
                    Ắ: "A",
                    Ẵ: "A",
                    Ẳ: "A",
                    Ȧ: "A",
                    Ǡ: "A",
                    Ä: "A",
                    Ǟ: "A",
                    Ả: "A",
                    Å: "A",
                    Ǻ: "A",
                    Ǎ: "A",
                    Ȁ: "A",
                    Ȃ: "A",
                    Ạ: "A",
                    Ậ: "A",
                    Ặ: "A",
                    Ḁ: "A",
                    Ą: "A",
                    Ⱥ: "A",
                    Ɐ: "A",
                    Ꜳ: "AA",
                    Æ: "AE",
                    Ǽ: "AE",
                    Ǣ: "AE",
                    Ꜵ: "AO",
                    Ꜷ: "AU",
                    Ꜹ: "AV",
                    Ꜻ: "AV",
                    Ꜽ: "AY",
                    "Ⓑ": "B",
                    Ｂ: "B",
                    Ḃ: "B",
                    Ḅ: "B",
                    Ḇ: "B",
                    Ƀ: "B",
                    Ƃ: "B",
                    Ɓ: "B",
                    "Ⓒ": "C",
                    Ｃ: "C",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    Ç: "C",
                    Ḉ: "C",
                    Ƈ: "C",
                    Ȼ: "C",
                    Ꜿ: "C",
                    "Ⓓ": "D",
                    Ｄ: "D",
                    Ḋ: "D",
                    Ď: "D",
                    Ḍ: "D",
                    Ḑ: "D",
                    Ḓ: "D",
                    Ḏ: "D",
                    Đ: "D",
                    Ƌ: "D",
                    Ɗ: "D",
                    Ɖ: "D",
                    Ꝺ: "D",
                    Ǳ: "DZ",
                    Ǆ: "DZ",
                    ǲ: "Dz",
                    ǅ: "Dz",
                    "Ⓔ": "E",
                    Ｅ: "E",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ề: "E",
                    Ế: "E",
                    Ễ: "E",
                    Ể: "E",
                    Ẽ: "E",
                    Ē: "E",
                    Ḕ: "E",
                    Ḗ: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ë: "E",
                    Ẻ: "E",
                    Ě: "E",
                    Ȅ: "E",
                    Ȇ: "E",
                    Ẹ: "E",
                    Ệ: "E",
                    Ȩ: "E",
                    Ḝ: "E",
                    Ę: "E",
                    Ḙ: "E",
                    Ḛ: "E",
                    Ɛ: "E",
                    Ǝ: "E",
                    "Ⓕ": "F",
                    Ｆ: "F",
                    Ḟ: "F",
                    Ƒ: "F",
                    Ꝼ: "F",
                    "Ⓖ": "G",
                    Ｇ: "G",
                    Ǵ: "G",
                    Ĝ: "G",
                    Ḡ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ǧ: "G",
                    Ģ: "G",
                    Ǥ: "G",
                    Ɠ: "G",
                    Ꞡ: "G",
                    Ᵹ: "G",
                    Ꝿ: "G",
                    "Ⓗ": "H",
                    Ｈ: "H",
                    Ĥ: "H",
                    Ḣ: "H",
                    Ḧ: "H",
                    Ȟ: "H",
                    Ḥ: "H",
                    Ḩ: "H",
                    Ḫ: "H",
                    Ħ: "H",
                    Ⱨ: "H",
                    Ⱶ: "H",
                    Ɥ: "H",
                    "Ⓘ": "I",
                    Ｉ: "I",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    İ: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ỉ: "I",
                    Ǐ: "I",
                    Ȉ: "I",
                    Ȋ: "I",
                    Ị: "I",
                    Į: "I",
                    Ḭ: "I",
                    Ɨ: "I",
                    "Ⓙ": "J",
                    Ｊ: "J",
                    Ĵ: "J",
                    Ɉ: "J",
                    "Ⓚ": "K",
                    Ｋ: "K",
                    Ḱ: "K",
                    Ǩ: "K",
                    Ḳ: "K",
                    Ķ: "K",
                    Ḵ: "K",
                    Ƙ: "K",
                    Ⱪ: "K",
                    Ꝁ: "K",
                    Ꝃ: "K",
                    Ꝅ: "K",
                    Ꞣ: "K",
                    "Ⓛ": "L",
                    Ｌ: "L",
                    Ŀ: "L",
                    Ĺ: "L",
                    Ľ: "L",
                    Ḷ: "L",
                    Ḹ: "L",
                    Ļ: "L",
                    Ḽ: "L",
                    Ḻ: "L",
                    Ł: "L",
                    Ƚ: "L",
                    Ɫ: "L",
                    Ⱡ: "L",
                    Ꝉ: "L",
                    Ꝇ: "L",
                    Ꞁ: "L",
                    Ǉ: "LJ",
                    ǈ: "Lj",
                    "Ⓜ": "M",
                    Ｍ: "M",
                    Ḿ: "M",
                    Ṁ: "M",
                    Ṃ: "M",
                    Ɱ: "M",
                    Ɯ: "M",
                    "Ⓝ": "N",
                    Ｎ: "N",
                    Ǹ: "N",
                    Ń: "N",
                    Ñ: "N",
                    Ṅ: "N",
                    Ň: "N",
                    Ṇ: "N",
                    Ņ: "N",
                    Ṋ: "N",
                    Ṉ: "N",
                    Ƞ: "N",
                    Ɲ: "N",
                    Ꞑ: "N",
                    Ꞥ: "N",
                    Ǌ: "NJ",
                    ǋ: "Nj",
                    "Ⓞ": "O",
                    Ｏ: "O",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Ồ: "O",
                    Ố: "O",
                    Ỗ: "O",
                    Ổ: "O",
                    Õ: "O",
                    Ṍ: "O",
                    Ȭ: "O",
                    Ṏ: "O",
                    Ō: "O",
                    Ṑ: "O",
                    Ṓ: "O",
                    Ŏ: "O",
                    Ȯ: "O",
                    Ȱ: "O",
                    Ö: "O",
                    Ȫ: "O",
                    Ỏ: "O",
                    Ő: "O",
                    Ǒ: "O",
                    Ȍ: "O",
                    Ȏ: "O",
                    Ơ: "O",
                    Ờ: "O",
                    Ớ: "O",
                    Ỡ: "O",
                    Ở: "O",
                    Ợ: "O",
                    Ọ: "O",
                    Ộ: "O",
                    Ǫ: "O",
                    Ǭ: "O",
                    Ø: "O",
                    Ǿ: "O",
                    Ɔ: "O",
                    Ɵ: "O",
                    Ꝋ: "O",
                    Ꝍ: "O",
                    Ƣ: "OI",
                    Ꝏ: "OO",
                    Ȣ: "OU",
                    "Ⓟ": "P",
                    Ｐ: "P",
                    Ṕ: "P",
                    Ṗ: "P",
                    Ƥ: "P",
                    Ᵽ: "P",
                    Ꝑ: "P",
                    Ꝓ: "P",
                    Ꝕ: "P",
                    "Ⓠ": "Q",
                    Ｑ: "Q",
                    Ꝗ: "Q",
                    Ꝙ: "Q",
                    Ɋ: "Q",
                    "Ⓡ": "R",
                    Ｒ: "R",
                    Ŕ: "R",
                    Ṙ: "R",
                    Ř: "R",
                    Ȑ: "R",
                    Ȓ: "R",
                    Ṛ: "R",
                    Ṝ: "R",
                    Ŗ: "R",
                    Ṟ: "R",
                    Ɍ: "R",
                    Ɽ: "R",
                    Ꝛ: "R",
                    Ꞧ: "R",
                    Ꞃ: "R",
                    "Ⓢ": "S",
                    Ｓ: "S",
                    ẞ: "S",
                    Ś: "S",
                    Ṥ: "S",
                    Ŝ: "S",
                    Ṡ: "S",
                    Š: "S",
                    Ṧ: "S",
                    Ṣ: "S",
                    Ṩ: "S",
                    Ș: "S",
                    Ş: "S",
                    Ȿ: "S",
                    Ꞩ: "S",
                    Ꞅ: "S",
                    "Ⓣ": "T",
                    Ｔ: "T",
                    Ṫ: "T",
                    Ť: "T",
                    Ṭ: "T",
                    Ț: "T",
                    Ţ: "T",
                    Ṱ: "T",
                    Ṯ: "T",
                    Ŧ: "T",
                    Ƭ: "T",
                    Ʈ: "T",
                    Ⱦ: "T",
                    Ꞇ: "T",
                    Ꜩ: "TZ",
                    "Ⓤ": "U",
                    Ｕ: "U",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ũ: "U",
                    Ṹ: "U",
                    Ū: "U",
                    Ṻ: "U",
                    Ŭ: "U",
                    Ü: "U",
                    Ǜ: "U",
                    Ǘ: "U",
                    Ǖ: "U",
                    Ǚ: "U",
                    Ủ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ǔ: "U",
                    Ȕ: "U",
                    Ȗ: "U",
                    Ư: "U",
                    Ừ: "U",
                    Ứ: "U",
                    Ữ: "U",
                    Ử: "U",
                    Ự: "U",
                    Ụ: "U",
                    Ṳ: "U",
                    Ų: "U",
                    Ṷ: "U",
                    Ṵ: "U",
                    Ʉ: "U",
                    "Ⓥ": "V",
                    Ｖ: "V",
                    Ṽ: "V",
                    Ṿ: "V",
                    Ʋ: "V",
                    Ꝟ: "V",
                    Ʌ: "V",
                    Ꝡ: "VY",
                    "Ⓦ": "W",
                    Ｗ: "W",
                    Ẁ: "W",
                    Ẃ: "W",
                    Ŵ: "W",
                    Ẇ: "W",
                    Ẅ: "W",
                    Ẉ: "W",
                    Ⱳ: "W",
                    "Ⓧ": "X",
                    Ｘ: "X",
                    Ẋ: "X",
                    Ẍ: "X",
                    "Ⓨ": "Y",
                    Ｙ: "Y",
                    Ỳ: "Y",
                    Ý: "Y",
                    Ŷ: "Y",
                    Ỹ: "Y",
                    Ȳ: "Y",
                    Ẏ: "Y",
                    Ÿ: "Y",
                    Ỷ: "Y",
                    Ỵ: "Y",
                    Ƴ: "Y",
                    Ɏ: "Y",
                    Ỿ: "Y",
                    "Ⓩ": "Z",
                    Ｚ: "Z",
                    Ź: "Z",
                    Ẑ: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    Ẓ: "Z",
                    Ẕ: "Z",
                    Ƶ: "Z",
                    Ȥ: "Z",
                    Ɀ: "Z",
                    Ⱬ: "Z",
                    Ꝣ: "Z",
                    "ⓐ": "a",
                    ａ: "a",
                    ẚ: "a",
                    à: "a",
                    á: "a",
                    â: "a",
                    ầ: "a",
                    ấ: "a",
                    ẫ: "a",
                    ẩ: "a",
                    ã: "a",
                    ā: "a",
                    ă: "a",
                    ằ: "a",
                    ắ: "a",
                    ẵ: "a",
                    ẳ: "a",
                    ȧ: "a",
                    ǡ: "a",
                    ä: "a",
                    ǟ: "a",
                    ả: "a",
                    å: "a",
                    ǻ: "a",
                    ǎ: "a",
                    ȁ: "a",
                    ȃ: "a",
                    ạ: "a",
                    ậ: "a",
                    ặ: "a",
                    ḁ: "a",
                    ą: "a",
                    ⱥ: "a",
                    ɐ: "a",
                    ꜳ: "aa",
                    æ: "ae",
                    ǽ: "ae",
                    ǣ: "ae",
                    ꜵ: "ao",
                    ꜷ: "au",
                    ꜹ: "av",
                    ꜻ: "av",
                    ꜽ: "ay",
                    "ⓑ": "b",
                    ｂ: "b",
                    ḃ: "b",
                    ḅ: "b",
                    ḇ: "b",
                    ƀ: "b",
                    ƃ: "b",
                    ɓ: "b",
                    "ⓒ": "c",
                    ｃ: "c",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    ç: "c",
                    ḉ: "c",
                    ƈ: "c",
                    ȼ: "c",
                    ꜿ: "c",
                    ↄ: "c",
                    "ⓓ": "d",
                    ｄ: "d",
                    ḋ: "d",
                    ď: "d",
                    ḍ: "d",
                    ḑ: "d",
                    ḓ: "d",
                    ḏ: "d",
                    đ: "d",
                    ƌ: "d",
                    ɖ: "d",
                    ɗ: "d",
                    ꝺ: "d",
                    ǳ: "dz",
                    ǆ: "dz",
                    "ⓔ": "e",
                    ｅ: "e",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ề: "e",
                    ế: "e",
                    ễ: "e",
                    ể: "e",
                    ẽ: "e",
                    ē: "e",
                    ḕ: "e",
                    ḗ: "e",
                    ĕ: "e",
                    ė: "e",
                    ë: "e",
                    ẻ: "e",
                    ě: "e",
                    ȅ: "e",
                    ȇ: "e",
                    ẹ: "e",
                    ệ: "e",
                    ȩ: "e",
                    ḝ: "e",
                    ę: "e",
                    ḙ: "e",
                    ḛ: "e",
                    ɇ: "e",
                    ɛ: "e",
                    ǝ: "e",
                    "ⓕ": "f",
                    ｆ: "f",
                    ḟ: "f",
                    ƒ: "f",
                    ꝼ: "f",
                    "ⓖ": "g",
                    ｇ: "g",
                    ǵ: "g",
                    ĝ: "g",
                    ḡ: "g",
                    ğ: "g",
                    ġ: "g",
                    ǧ: "g",
                    ģ: "g",
                    ǥ: "g",
                    ɠ: "g",
                    ꞡ: "g",
                    ᵹ: "g",
                    ꝿ: "g",
                    "ⓗ": "h",
                    ｈ: "h",
                    ĥ: "h",
                    ḣ: "h",
                    ḧ: "h",
                    ȟ: "h",
                    ḥ: "h",
                    ḩ: "h",
                    ḫ: "h",
                    ẖ: "h",
                    ħ: "h",
                    ⱨ: "h",
                    ⱶ: "h",
                    ɥ: "h",
                    ƕ: "hv",
                    "ⓘ": "i",
                    ｉ: "i",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    ï: "i",
                    ḯ: "i",
                    ỉ: "i",
                    ǐ: "i",
                    ȉ: "i",
                    ȋ: "i",
                    ị: "i",
                    į: "i",
                    ḭ: "i",
                    ɨ: "i",
                    ı: "i",
                    "ⓙ": "j",
                    ｊ: "j",
                    ĵ: "j",
                    ǰ: "j",
                    ɉ: "j",
                    "ⓚ": "k",
                    ｋ: "k",
                    ḱ: "k",
                    ǩ: "k",
                    ḳ: "k",
                    ķ: "k",
                    ḵ: "k",
                    ƙ: "k",
                    ⱪ: "k",
                    ꝁ: "k",
                    ꝃ: "k",
                    ꝅ: "k",
                    ꞣ: "k",
                    "ⓛ": "l",
                    ｌ: "l",
                    ŀ: "l",
                    ĺ: "l",
                    ľ: "l",
                    ḷ: "l",
                    ḹ: "l",
                    ļ: "l",
                    ḽ: "l",
                    ḻ: "l",
                    ſ: "l",
                    ł: "l",
                    ƚ: "l",
                    ɫ: "l",
                    ⱡ: "l",
                    ꝉ: "l",
                    ꞁ: "l",
                    ꝇ: "l",
                    ǉ: "lj",
                    "ⓜ": "m",
                    ｍ: "m",
                    ḿ: "m",
                    ṁ: "m",
                    ṃ: "m",
                    ɱ: "m",
                    ɯ: "m",
                    "ⓝ": "n",
                    ｎ: "n",
                    ǹ: "n",
                    ń: "n",
                    ñ: "n",
                    ṅ: "n",
                    ň: "n",
                    ṇ: "n",
                    ņ: "n",
                    ṋ: "n",
                    ṉ: "n",
                    ƞ: "n",
                    ɲ: "n",
                    ŉ: "n",
                    ꞑ: "n",
                    ꞥ: "n",
                    ǌ: "nj",
                    "ⓞ": "o",
                    ｏ: "o",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    ồ: "o",
                    ố: "o",
                    ỗ: "o",
                    ổ: "o",
                    õ: "o",
                    ṍ: "o",
                    ȭ: "o",
                    ṏ: "o",
                    ō: "o",
                    ṑ: "o",
                    ṓ: "o",
                    ŏ: "o",
                    ȯ: "o",
                    ȱ: "o",
                    ö: "o",
                    ȫ: "o",
                    ỏ: "o",
                    ő: "o",
                    ǒ: "o",
                    ȍ: "o",
                    ȏ: "o",
                    ơ: "o",
                    ờ: "o",
                    ớ: "o",
                    ỡ: "o",
                    ở: "o",
                    ợ: "o",
                    ọ: "o",
                    ộ: "o",
                    ǫ: "o",
                    ǭ: "o",
                    ø: "o",
                    ǿ: "o",
                    ɔ: "o",
                    ꝋ: "o",
                    ꝍ: "o",
                    ɵ: "o",
                    ƣ: "oi",
                    ȣ: "ou",
                    ꝏ: "oo",
                    "ⓟ": "p",
                    ｐ: "p",
                    ṕ: "p",
                    ṗ: "p",
                    ƥ: "p",
                    ᵽ: "p",
                    ꝑ: "p",
                    ꝓ: "p",
                    ꝕ: "p",
                    "ⓠ": "q",
                    ｑ: "q",
                    ɋ: "q",
                    ꝗ: "q",
                    ꝙ: "q",
                    "ⓡ": "r",
                    ｒ: "r",
                    ŕ: "r",
                    ṙ: "r",
                    ř: "r",
                    ȑ: "r",
                    ȓ: "r",
                    ṛ: "r",
                    ṝ: "r",
                    ŗ: "r",
                    ṟ: "r",
                    ɍ: "r",
                    ɽ: "r",
                    ꝛ: "r",
                    ꞧ: "r",
                    ꞃ: "r",
                    "ⓢ": "s",
                    ｓ: "s",
                    ß: "s",
                    ś: "s",
                    ṥ: "s",
                    ŝ: "s",
                    ṡ: "s",
                    š: "s",
                    ṧ: "s",
                    ṣ: "s",
                    ṩ: "s",
                    ș: "s",
                    ş: "s",
                    ȿ: "s",
                    ꞩ: "s",
                    ꞅ: "s",
                    ẛ: "s",
                    "ⓣ": "t",
                    ｔ: "t",
                    ṫ: "t",
                    ẗ: "t",
                    ť: "t",
                    ṭ: "t",
                    ț: "t",
                    ţ: "t",
                    ṱ: "t",
                    ṯ: "t",
                    ŧ: "t",
                    ƭ: "t",
                    ʈ: "t",
                    ⱦ: "t",
                    ꞇ: "t",
                    ꜩ: "tz",
                    "ⓤ": "u",
                    ｕ: "u",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ũ: "u",
                    ṹ: "u",
                    ū: "u",
                    ṻ: "u",
                    ŭ: "u",
                    ü: "u",
                    ǜ: "u",
                    ǘ: "u",
                    ǖ: "u",
                    ǚ: "u",
                    ủ: "u",
                    ů: "u",
                    ű: "u",
                    ǔ: "u",
                    ȕ: "u",
                    ȗ: "u",
                    ư: "u",
                    ừ: "u",
                    ứ: "u",
                    ữ: "u",
                    ử: "u",
                    ự: "u",
                    ụ: "u",
                    ṳ: "u",
                    ų: "u",
                    ṷ: "u",
                    ṵ: "u",
                    ʉ: "u",
                    "ⓥ": "v",
                    ｖ: "v",
                    ṽ: "v",
                    ṿ: "v",
                    ʋ: "v",
                    ꝟ: "v",
                    ʌ: "v",
                    ꝡ: "vy",
                    "ⓦ": "w",
                    ｗ: "w",
                    ẁ: "w",
                    ẃ: "w",
                    ŵ: "w",
                    ẇ: "w",
                    ẅ: "w",
                    ẘ: "w",
                    ẉ: "w",
                    ⱳ: "w",
                    "ⓧ": "x",
                    ｘ: "x",
                    ẋ: "x",
                    ẍ: "x",
                    "ⓨ": "y",
                    ｙ: "y",
                    ỳ: "y",
                    ý: "y",
                    ŷ: "y",
                    ỹ: "y",
                    ȳ: "y",
                    ẏ: "y",
                    ÿ: "y",
                    ỷ: "y",
                    ẙ: "y",
                    ỵ: "y",
                    ƴ: "y",
                    ɏ: "y",
                    ỿ: "y",
                    "ⓩ": "z",
                    ｚ: "z",
                    ź: "z",
                    ẑ: "z",
                    ż: "z",
                    ž: "z",
                    ẓ: "z",
                    ẕ: "z",
                    ƶ: "z",
                    ȥ: "z",
                    ɀ: "z",
                    ⱬ: "z",
                    ꝣ: "z",
                    Ά: "Α",
                    Έ: "Ε",
                    Ή: "Η",
                    Ί: "Ι",
                    Ϊ: "Ι",
                    Ό: "Ο",
                    Ύ: "Υ",
                    Ϋ: "Υ",
                    Ώ: "Ω",
                    ά: "α",
                    έ: "ε",
                    ή: "η",
                    ί: "ι",
                    ϊ: "ι",
                    ΐ: "ι",
                    ό: "ο",
                    ύ: "υ",
                    ϋ: "υ",
                    ΰ: "υ",
                    ω: "ω",
                    ς: "σ",
                };
            }),
            u.define("select2/data/base", ["../utils"], function (n) {
                function i(e, t) {
                    i.__super__.constructor.call(this);
                }
                return (
                    n.Extend(i, n.Observable),
                    (i.prototype.current = function (e) {
                        throw new Error("The `current` method must be defined in child classes.");
                    }),
                    (i.prototype.query = function (e, t) {
                        throw new Error("The `query` method must be defined in child classes.");
                    }),
                    (i.prototype.bind = function (e, t) {}),
                    (i.prototype.destroy = function () {}),
                    (i.prototype.generateResultId = function (e, t) {
                        e = e.id + "-result-";
                        return (e += n.generateChars(4)), null != t.id ? (e += "-" + t.id.toString()) : (e += "-" + n.generateChars(4)), e;
                    }),
                    i
                );
            }),
            u.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, r) {
                function n(e, t) {
                    (this.$element = e), (this.options = t), n.__super__.constructor.call(this);
                }
                return (
                    t.Extend(n, e),
                    (n.prototype.current = function (e) {
                        var t = [],
                            n = this;
                        this.$element.find(":selected").each(function () {
                            var e = r(this),
                                e = n.item(e);
                            t.push(e);
                        }),
                            e(t);
                    }),
                    (n.prototype.select = function (o) {
                        var e,
                            s = this;
                        if (((o.selected = !0), r(o.element).is("option"))) return (o.element.selected = !0), void this.$element.trigger("change");
                        this.$element.prop("multiple")
                            ? this.current(function (e) {
                                  var t = [];
                                  (o = [o]).push.apply(o, e);
                                  for (var n = 0; n < o.length; n++) {
                                      var i = o[n].id;
                                      -1 === r.inArray(i, t) && t.push(i);
                                  }
                                  s.$element.val(t), s.$element.trigger("change");
                              })
                            : ((e = o.id), this.$element.val(e), this.$element.trigger("change"));
                    }),
                    (n.prototype.unselect = function (o) {
                        var s = this;
                        if (this.$element.prop("multiple")) {
                            if (((o.selected = !1), r(o.element).is("option"))) return (o.element.selected = !1), void this.$element.trigger("change");
                            this.current(function (e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var i = e[n].id;
                                    i !== o.id && -1 === r.inArray(i, t) && t.push(i);
                                }
                                s.$element.val(t), s.$element.trigger("change");
                            });
                        }
                    }),
                    (n.prototype.bind = function (e, t) {
                        var n = this;
                        (this.container = e).on("select", function (e) {
                            n.select(e.data);
                        }),
                            e.on("unselect", function (e) {
                                n.unselect(e.data);
                            });
                    }),
                    (n.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            r.removeData(this, "data");
                        });
                    }),
                    (n.prototype.query = function (t, e) {
                        var n = [],
                            i = this;
                        this.$element.children().each(function () {
                            var e = r(this);
                            (e.is("option") || e.is("optgroup")) && ((e = i.item(e)), null !== (e = i.matches(t, e)) && n.push(e));
                        }),
                            e({ results: n });
                    }),
                    (n.prototype.addOptions = function (e) {
                        t.appendMany(this.$element, e);
                    }),
                    (n.prototype.option = function (e) {
                        var t;
                        e.children ? ((t = document.createElement("optgroup")).label = e.text) : (t = document.createElement("option")).textContent !== undefined ? (t.textContent = e.text) : (t.innerText = e.text),
                            e.id && (t.value = e.id),
                            e.disabled && (t.disabled = !0),
                            e.selected && (t.selected = !0),
                            e.title && (t.title = e.title);
                        var n = r(t),
                            e = this._normalizeItem(e);
                        return (e.element = t), r.data(t, "data", e), n;
                    }),
                    (n.prototype.item = function (e) {
                        var t = {};
                        if (null != (t = r.data(e[0], "data"))) return t;
                        if (e.is("option")) t = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                        else if (e.is("optgroup")) {
                            for (var t = { text: e.prop("label"), children: [], title: e.prop("title") }, n = e.children("option"), i = [], o = 0; o < n.length; o++) {
                                var s = r(n[o]),
                                    s = this.item(s);
                                i.push(s);
                            }
                            t.children = i;
                        }
                        return ((t = this._normalizeItem(t)).element = e[0]), r.data(e[0], "data", t), t;
                    }),
                    (n.prototype._normalizeItem = function (e) {
                        r.isPlainObject(e) || (e = { id: e, text: e });
                        return (
                            null != (e = r.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()),
                            null != e.text && (e.text = e.text.toString()),
                            null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                            r.extend({}, { selected: !1, disabled: !1 }, e)
                        );
                    }),
                    (n.prototype.matches = function (e, t) {
                        return this.options.get("matcher")(e, t);
                    }),
                    n
                );
            }),
            u.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, c, u) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n));
                }
                return (
                    c.Extend(i, e),
                    (i.prototype.select = function (n) {
                        var e;
                        0 ===
                            (e = this.$element.find("option").filter(function (e, t) {
                                return t.value == n.id.toString();
                            })).length && ((e = this.option(n)), this.addOptions(e)),
                            i.__super__.select.call(this, n);
                    }),
                    (i.prototype.convertToOptions = function (e) {
                        var t = this,
                            n = this.$element.find("option"),
                            i = n
                                .map(function () {
                                    return t.item(u(this)).id;
                                })
                                .get(),
                            o = [];
                        for (var s = 0; s < e.length; s++) {
                            var r,
                                a,
                                l = this._normalizeItem(e[s]);
                            0 <= u.inArray(l.id, i)
                                ? ((a = n.filter(
                                      (function (e) {
                                          return function () {
                                              return u(this).val() == e.id;
                                          };
                                      })(l)
                                  )),
                                  (r = this.item(a)),
                                  (r = u.extend(!0, {}, l, r)),
                                  (r = this.option(r)),
                                  a.replaceWith(r))
                                : ((a = this.option(l)), l.children && ((l = this.convertToOptions(l.children)), c.appendMany(a, l)), o.push(a));
                        }
                        return o;
                    }),
                    i
                );
            }),
            u.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, s) {
                function n(e, t) {
                    (this.ajaxOptions = this._applyDefaults(t.get("ajax"))), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
                }
                return (
                    t.Extend(n, e),
                    (n.prototype._applyDefaults = function (e) {
                        var t = {
                            data: function (e) {
                                return s.extend({}, e, { q: e.term });
                            },
                            transport: function (e, t, n) {
                                e = s.ajax(e);
                                return e.then(t), e.fail(n), e;
                            },
                        };
                        return s.extend({}, t, e, !0);
                    }),
                    (n.prototype.processResults = function (e) {
                        return e;
                    }),
                    (n.prototype.query = function (t, n) {
                        var i = this;
                        null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
                        var o = s.extend({ type: "GET" }, this.ajaxOptions);
                        function e() {
                            var e = o.transport(
                                o,
                                function (e) {
                                    e = i.processResults(e, t);
                                    i.options.get("debug") &&
                                        window.console &&
                                        console.error &&
                                        ((e && e.results && s.isArray(e.results)) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                        n(e);
                                },
                                function () {
                                    (e.status && "0" === e.status) || i.trigger("results:message", { message: "errorLoading" });
                                }
                            );
                            i._request = e;
                        }
                        "function" == typeof o.url && (o.url = o.url.call(this.$element, t)),
                            "function" == typeof o.data && (o.data = o.data.call(this.$element, t)),
                            this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), (this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay))) : e();
                    }),
                    n
                );
            }),
            u.define("select2/data/tags", ["jquery"], function (a) {
                function e(e, t, n) {
                    var i = n.get("tags"),
                        o = n.get("createTag");
                    o !== undefined && (this.createTag = o);
                    o = n.get("insertTag");
                    if ((o !== undefined && (this.insertTag = o), e.call(this, t, n), a.isArray(i)))
                        for (var s = 0; s < i.length; s++) {
                            var r = i[s],
                                r = this._normalizeItem(r),
                                r = this.option(r);
                            this.$element.append(r);
                        }
                }
                return (
                    (e.prototype.query = function (e, l, c) {
                        var u = this;
                        this._removeOldTags(),
                            null != l.term && null == l.page
                                ? e.call(this, l, function d(e, t) {
                                      for (var n = e.results, i = 0; i < n.length; i++) {
                                          var o = n[i],
                                              s = null != o.children && !d({ results: o.children }, !0);
                                          if (o.text === l.term || s) return !t && ((e.data = n), void c(e));
                                      }
                                      if (t) return !0;
                                      var r,
                                          a = u.createTag(l);
                                      null != a && ((r = u.option(a)).attr("data-select2-tag", !0), u.addOptions([r]), u.insertTag(n, a)), (e.results = n), c(e);
                                  })
                                : e.call(this, l, c);
                    }),
                    (e.prototype.createTag = function (e, t) {
                        t = a.trim(t.term);
                        return "" === t ? null : { id: t, text: t };
                    }),
                    (e.prototype.insertTag = function (e, t, n) {
                        t.unshift(n);
                    }),
                    (e.prototype._removeOldTags = function (e) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function () {
                            this.selected || a(this).remove();
                        });
                    }),
                    e
                );
            }),
            u.define("select2/data/tokenizer", ["jquery"], function (c) {
                function e(e, t, n) {
                    var i = n.get("tokenizer");
                    i !== undefined && (this.tokenizer = i), e.call(this, t, n);
                }
                return (
                    (e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n), (this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field"));
                    }),
                    (e.prototype.query = function (e, t, n) {
                        var i = this;
                        t.term = t.term || "";
                        var o = this.tokenizer(t, this.options, function (e) {
                            var t = i._normalizeItem(e);
                            i.$element.find("option").filter(function () {
                                return c(this).val() === t.id;
                            }).length || ((e = i.option(t)).attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([e])),
                                i.trigger("select", { data: t });
                        });
                        o.term !== t.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), (t.term = o.term)), e.call(this, t, n);
                    }),
                    (e.prototype.tokenizer = function (e, t, n, i) {
                        for (
                            var o = n.get("tokenSeparators") || [],
                                s = t.term,
                                r = 0,
                                a =
                                    this.createTag ||
                                    function (e) {
                                        return { id: e.term, text: e.term };
                                    };
                            r < s.length;

                        ) {
                            var l = s[r];
                            -1 !== c.inArray(l, o) ? ((l = s.substr(0, r)), null != (l = a(c.extend({}, t, { term: l }))) ? (i(l), (s = s.substr(r + 1) || ""), (r = 0)) : r++) : r++;
                        }
                        return { term: s };
                    }),
                    e
                );
            }),
            u.define("select2/data/minimumInputLength", [], function () {
                function e(e, t, n) {
                    (this.minimumInputLength = n.get("minimumInputLength")), e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (e, t, n) {
                        (t.term = t.term || ""),
                            t.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }) : e.call(this, t, n);
                    }),
                    e
                );
            }),
            u.define("select2/data/maximumInputLength", [], function () {
                function e(e, t, n) {
                    (this.maximumInputLength = n.get("maximumInputLength")), e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (e, t, n) {
                        (t.term = t.term || ""),
                            0 < this.maximumInputLength && t.term.length > this.maximumInputLength
                                ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } })
                                : e.call(this, t, n);
                    }),
                    e
                );
            }),
            u.define("select2/data/maximumSelectionLength", [], function () {
                function e(e, t, n) {
                    (this.maximumSelectionLength = n.get("maximumSelectionLength")), e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (t, n, i) {
                        var o = this;
                        this.current(function (e) {
                            e = null != e ? e.length : 0;
                            0 < o.maximumSelectionLength && e >= o.maximumSelectionLength ? o.trigger("results:message", { message: "maximumSelected", args: { maximum: o.maximumSelectionLength } }) : t.call(o, n, i);
                        });
                    }),
                    e
                );
            }),
            u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
                function n(e, t) {
                    (this.$element = e), (this.options = t), n.__super__.constructor.call(this);
                }
                return (
                    e.Extend(n, e.Observable),
                    (n.prototype.render = function () {
                        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
                    }),
                    (n.prototype.bind = function () {}),
                    (n.prototype.position = function (e, t) {}),
                    (n.prototype.destroy = function () {
                        this.$dropdown.remove();
                    }),
                    n
                );
            }),
            u.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
                function t() {}
                return (
                    (t.prototype.render = function (e) {
                        var t = e.call(this),
                            e = o(
                                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                            );
                        return (this.$searchContainer = e), (this.$search = e.find("input")), t.prepend(e), t;
                    }),
                    (t.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            this.$search.on("keydown", function (e) {
                                i.trigger("keypress", e), (i._keyUpPrevented = e.isDefaultPrevented());
                            }),
                            this.$search.on("input", function (e) {
                                o(this).off("keyup");
                            }),
                            this.$search.on("keyup input", function (e) {
                                i.handleSearch(e);
                            }),
                            t.on("open", function () {
                                i.$search.attr("tabindex", 0),
                                    i.$search.focus(),
                                    window.setTimeout(function () {
                                        i.$search.focus();
                                    }, 0);
                            }),
                            t.on("close", function () {
                                i.$search.attr("tabindex", -1), i.$search.val("");
                            }),
                            t.on("focus", function () {
                                t.isOpen() && i.$search.focus();
                            }),
                            t.on("results:all", function (e) {
                                (null != e.query.term && "" !== e.query.term) || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"));
                            });
                    }),
                    (t.prototype.handleSearch = function (e) {
                        var t;
                        this._keyUpPrevented || ((t = this.$search.val()), this.trigger("query", { term: t })), (this._keyUpPrevented = !1);
                    }),
                    (t.prototype.showSearch = function (e, t) {
                        return !0;
                    }),
                    t
                );
            }),
            u.define("select2/dropdown/hidePlaceholder", [], function () {
                function e(e, t, n, i) {
                    (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))), e.call(this, t, n, i);
                }
                return (
                    (e.prototype.append = function (e, t) {
                        (t.results = this.removePlaceholder(t.results)), e.call(this, t);
                    }),
                    (e.prototype.normalizePlaceholder = function (e, t) {
                        return (t = "string" == typeof t ? { id: "", text: t } : t);
                    }),
                    (e.prototype.removePlaceholder = function (e, t) {
                        for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                            var o = t[i];
                            this.placeholder.id === o.id && n.splice(i, 1);
                        }
                        return n;
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/infiniteScroll", ["jquery"], function (o) {
                function e(e, t, n, i) {
                    (this.lastParams = {}), e.call(this, t, n, i), (this.$loadingMore = this.createLoadingMore()), (this.loading = !1);
                }
                return (
                    (e.prototype.append = function (e, t) {
                        this.$loadingMore.remove(), (this.loading = !1), e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore);
                    }),
                    (e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            t.on("query", function (e) {
                                (i.lastParams = e), (i.loading = !0);
                            }),
                            t.on("query:append", function (e) {
                                (i.lastParams = e), (i.loading = !0);
                            }),
                            this.$results.on("scroll", function () {
                                var e = o.contains(document.documentElement, i.$loadingMore[0]);
                                !i.loading && e && ((e = i.$results.offset().top + i.$results.outerHeight(!1)), i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) <= e + 50 && i.loadMore());
                            });
                    }),
                    (e.prototype.loadMore = function () {
                        this.loading = !0;
                        var e = o.extend({}, { page: 1 }, this.lastParams);
                        e.page++, this.trigger("query:append", e);
                    }),
                    (e.prototype.showLoadingMore = function (e, t) {
                        return t.pagination && t.pagination.more;
                    }),
                    (e.prototype.createLoadingMore = function () {
                        var e = o('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            t = this.options.get("translations").get("loadingMore");
                        return e.html(t(this.lastParams)), e;
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (c, r) {
                function e(e, t, n) {
                    (this.$dropdownParent = n.get("dropdownParent") || c(document.body)), e.call(this, t, n);
                }
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var i = this,
                            o = !1;
                        e.call(this, t, n),
                            t.on("open", function () {
                                i._showDropdown(),
                                    i._attachPositioningHandler(t),
                                    o ||
                                        ((o = !0),
                                        t.on("results:all", function () {
                                            i._positionDropdown(), i._resizeDropdown();
                                        }),
                                        t.on("results:append", function () {
                                            i._positionDropdown(), i._resizeDropdown();
                                        }));
                            }),
                            t.on("close", function () {
                                i._hideDropdown(), i._detachPositioningHandler(t);
                            }),
                            this.$dropdownContainer.on("mousedown", function (e) {
                                e.stopPropagation();
                            });
                    }),
                    (e.prototype.destroy = function (e) {
                        e.call(this), this.$dropdownContainer.remove();
                    }),
                    (e.prototype.position = function (e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), (this.$container = n);
                    }),
                    (e.prototype.render = function (e) {
                        var t = c("<span></span>"),
                            e = e.call(this);
                        return t.append(e), (this.$dropdownContainer = t);
                    }),
                    (e.prototype._hideDropdown = function (e) {
                        this.$dropdownContainer.detach();
                    }),
                    (e.prototype._attachPositioningHandler = function (e, t) {
                        var n = this,
                            i = "scroll.select2." + t.id,
                            o = "resize.select2." + t.id,
                            s = "orientationchange.select2." + t.id,
                            t = this.$container.parents().filter(r.hasScroll);
                        t.each(function () {
                            c(this).data("select2-scroll-position", { x: c(this).scrollLeft(), y: c(this).scrollTop() });
                        }),
                            t.on(i, function (e) {
                                var t = c(this).data("select2-scroll-position");
                                c(this).scrollTop(t.y);
                            }),
                            c(window).on(i + " " + o + " " + s, function (e) {
                                n._positionDropdown(), n._resizeDropdown();
                            });
                    }),
                    (e.prototype._detachPositioningHandler = function (e, t) {
                        var n = "scroll.select2." + t.id,
                            i = "resize.select2." + t.id,
                            t = "orientationchange.select2." + t.id;
                        this.$container.parents().filter(r.hasScroll).off(n), c(window).off(n + " " + i + " " + t);
                    }),
                    (e.prototype._positionDropdown = function () {
                        var e = c(window),
                            t = this.$dropdown.hasClass("select2-dropdown--above"),
                            n = this.$dropdown.hasClass("select2-dropdown--below"),
                            i = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var s = { height: this.$container.outerHeight(!1) };
                        (s.top = o.top), (s.bottom = o.top + s.height);
                        var r = this.$dropdown.outerHeight(!1),
                            a = e.scrollTop(),
                            l = e.scrollTop() + e.height(),
                            e = a < o.top - r,
                            a = l > o.bottom + r,
                            l = { left: o.left, top: s.bottom },
                            o = this.$dropdownParent,
                            o = (o = "static" === o.css("position") ? o.offsetParent() : o).offset();
                        (l.top -= o.top),
                            (l.left -= o.left),
                            t || n || (i = "below"),
                            a || !e || t ? !e && a && t && (i = "below") : (i = "above"),
                            ("above" == i || (t && "below" !== i)) && (l.top = s.top - o.top - r),
                            null != i &&
                                (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i),
                                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)),
                            this.$dropdownContainer.css(l);
                    }),
                    (e.prototype._resizeDropdown = function () {
                        var e = { width: this.$container.outerWidth(!1) + "px" };
                        this.options.get("dropdownAutoWidth") && ((e.minWidth = e.width), (e.position = "relative"), (e.width = "auto")), this.$dropdown.css(e);
                    }),
                    (e.prototype._showDropdown = function (e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/minimumResultsForSearch", [], function () {
                function e(e, t, n, i) {
                    (this.minimumResultsForSearch = n.get("minimumResultsForSearch")), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), e.call(this, t, n, i);
                }
                return (
                    (e.prototype.showSearch = function (e, t) {
                        return (
                            !(
                                (function o(e) {
                                    for (var t = 0, n = 0; n < e.length; n++) {
                                        var i = e[n];
                                        i.children ? (t += o(i.children)) : t++;
                                    }
                                    return t;
                                })(t.data.results) < this.minimumResultsForSearch
                            ) && e.call(this, t)
                        );
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/selectOnClose", [], function () {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            t.on("close", function (e) {
                                i._handleSelectOnClose(e);
                            });
                    }),
                    (e.prototype._handleSelectOnClose = function (e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var n = t.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type) return;
                        }
                        n = this.getHighlightedResults();
                        n.length < 1 || (null != (n = n.data("data")).element && n.element.selected) || (null == n.element && n.selected) || this.trigger("select", { data: n });
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/closeOnSelect", [], function () {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n),
                            t.on("select", function (e) {
                                i._selectTriggered(e);
                            }),
                            t.on("unselect", function (e) {
                                i._selectTriggered(e);
                            });
                    }),
                    (e.prototype._selectTriggered = function (e, t) {
                        var n = t.originalEvent;
                        (n && n.ctrlKey) || this.trigger("close", { originalEvent: n, originalSelect2Event: t });
                    }),
                    e
                );
            }),
            u.define("select2/i18n/en", [], function () {
                return {
                    errorLoading: function () {
                        return "The results could not be loaded.";
                    },
                    inputTooLong: function (e) {
                        var t = e.input.length - e.maximum,
                            e = "Please delete " + t + " character";
                        return 1 != t && (e += "s"), e;
                    },
                    inputTooShort: function (e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                    },
                    loadingMore: function () {
                        return "Loading more results…";
                    },
                    maximumSelected: function (e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t;
                    },
                    noResults: function () {
                        return "No results found";
                    },
                    searching: function () {
                        return "Searching…";
                    },
                };
            }),
            u.define(
                "select2/defaults",
                [
                    "jquery",
                    "require",
                    "./results",
                    "./selection/single",
                    "./selection/multiple",
                    "./selection/placeholder",
                    "./selection/allowClear",
                    "./selection/search",
                    "./selection/eventRelay",
                    "./utils",
                    "./translation",
                    "./diacritics",
                    "./data/select",
                    "./data/array",
                    "./data/ajax",
                    "./data/tags",
                    "./data/tokenizer",
                    "./data/minimumInputLength",
                    "./data/maximumInputLength",
                    "./data/maximumSelectionLength",
                    "./dropdown",
                    "./dropdown/search",
                    "./dropdown/hidePlaceholder",
                    "./dropdown/infiniteScroll",
                    "./dropdown/attachBody",
                    "./dropdown/minimumResultsForSearch",
                    "./dropdown/selectOnClose",
                    "./dropdown/closeOnSelect",
                    "./i18n/en",
                ],
                function (p, h, f, g, m, y, v, _, w, $, b, t, x, A, C, S, O, E, D, T, q, j, L, k, P, I, M, R, e) {
                    function n() {
                        this.reset();
                    }
                    return (
                        (n.prototype.apply = function (e) {
                            var t, n;
                            if (
                                (null == (e = p.extend(!0, {}, this.defaults, e)).dataAdapter &&
                                    (null != e.ajax ? (e.dataAdapter = C) : null != e.data ? (e.dataAdapter = A) : (e.dataAdapter = x),
                                    0 < e.minimumInputLength && (e.dataAdapter = $.Decorate(e.dataAdapter, E)),
                                    0 < e.maximumInputLength && (e.dataAdapter = $.Decorate(e.dataAdapter, D)),
                                    0 < e.maximumSelectionLength && (e.dataAdapter = $.Decorate(e.dataAdapter, T)),
                                    e.tags && (e.dataAdapter = $.Decorate(e.dataAdapter, S)),
                                    (null == e.tokenSeparators && null == e.tokenizer) || (e.dataAdapter = $.Decorate(e.dataAdapter, O)),
                                    null != e.query && ((t = h(e.amdBase + "compat/query")), (e.dataAdapter = $.Decorate(e.dataAdapter, t))),
                                    null != e.initSelection && ((t = h(e.amdBase + "compat/initSelection")), (e.dataAdapter = $.Decorate(e.dataAdapter, t)))),
                                null == e.resultsAdapter &&
                                    ((e.resultsAdapter = f),
                                    null != e.ajax && (e.resultsAdapter = $.Decorate(e.resultsAdapter, k)),
                                    null != e.placeholder && (e.resultsAdapter = $.Decorate(e.resultsAdapter, L)),
                                    e.selectOnClose && (e.resultsAdapter = $.Decorate(e.resultsAdapter, M))),
                                null == e.dropdownAdapter &&
                                    (e.multiple ? (e.dropdownAdapter = q) : ((n = $.Decorate(q, j)), (e.dropdownAdapter = n)),
                                    0 !== e.minimumResultsForSearch && (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, I)),
                                    e.closeOnSelect && (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, R)),
                                    (null == e.dropdownCssClass && null == e.dropdownCss && null == e.adaptDropdownCssClass) || ((n = h(e.amdBase + "compat/dropdownCss")), (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, n))),
                                    (e.dropdownAdapter = $.Decorate(e.dropdownAdapter, P))),
                                null == e.selectionAdapter &&
                                    (e.multiple ? (e.selectionAdapter = m) : (e.selectionAdapter = g),
                                    null != e.placeholder && (e.selectionAdapter = $.Decorate(e.selectionAdapter, y)),
                                    e.allowClear && (e.selectionAdapter = $.Decorate(e.selectionAdapter, v)),
                                    e.multiple && (e.selectionAdapter = $.Decorate(e.selectionAdapter, _)),
                                    (null == e.containerCssClass && null == e.containerCss && null == e.adaptContainerCssClass) || ((l = h(e.amdBase + "compat/containerCss")), (e.selectionAdapter = $.Decorate(e.selectionAdapter, l))),
                                    (e.selectionAdapter = $.Decorate(e.selectionAdapter, w))),
                                "string" == typeof e.language && (0 < e.language.indexOf("-") ? ((c = e.language.split("-")[0]), (e.language = [e.language, c])) : (e.language = [e.language])),
                                p.isArray(e.language))
                            ) {
                                var i = new b();
                                e.language.push("en");
                                for (var o = e.language, s = 0; s < o.length; s++) {
                                    var r = o[s],
                                        a = {};
                                    try {
                                        a = b.loadPath(r);
                                    } catch (u) {
                                        try {
                                            (r = this.defaults.amdLanguageBase + r), (a = b.loadPath(r));
                                        } catch (d) {
                                            e.debug && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue;
                                        }
                                    }
                                    i.extend(a);
                                }
                                e.translations = i;
                            } else {
                                var l = b.loadPath(this.defaults.amdLanguageBase + "en"),
                                    c = new b(e.language);
                                c.extend(l), (e.translations = c);
                            }
                            return e;
                        }),
                        (n.prototype.reset = function () {
                            function r(e) {
                                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                                    return t[e] || e;
                                });
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: $.escapeMarkup,
                                language: e,
                                matcher: function a(e, t) {
                                    if ("" === p.trim(e.term)) return t;
                                    if (t.children && 0 < t.children.length) {
                                        for (var n = p.extend(!0, {}, t), i = t.children.length - 1; 0 <= i; i--) null == a(e, t.children[i]) && n.children.splice(i, 1);
                                        return 0 < n.children.length ? n : a(e, n);
                                    }
                                    var o = r(t.text).toUpperCase(),
                                        s = r(e.term).toUpperCase();
                                    return -1 < o.indexOf(s) ? t : null;
                                },
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function (e) {
                                    return e;
                                },
                                templateResult: function (e) {
                                    return e.text;
                                },
                                templateSelection: function (e) {
                                    return e.text;
                                },
                                theme: "default",
                                width: "resolve",
                            };
                        }),
                        (n.prototype.set = function (e, t) {
                            var n = {};
                            n[p.camelCase(e)] = t;
                            n = $._convertData(n);
                            p.extend(this.defaults, n);
                        }),
                        new n()
                    );
                }
            ),
            u.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (n, s, i, r) {
                function e(e, t) {
                    (this.options = e),
                        null != t && this.fromElement(t),
                        (this.options = i.apply(this.options)),
                        t && t.is("input") && ((t = n(this.get("amdBase") + "compat/inputData")), (this.options.dataAdapter = r.Decorate(this.options.dataAdapter, t)));
                }
                return (
                    (e.prototype.fromElement = function (e) {
                        var t = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                            null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                            null == this.options.language && (e.prop("lang") ? (this.options.language = e.prop("lang").toLowerCase()) : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))),
                            null == this.options.dir && (e.prop("dir") ? (this.options.dir = e.prop("dir")) : e.closest("[dir]").prop("dir") ? (this.options.dir = e.closest("[dir]").prop("dir")) : (this.options.dir = "ltr")),
                            e.prop("disabled", this.options.disabled),
                            e.prop("multiple", this.options.multiple),
                            e.data("select2Tags") &&
                                (this.options.debug &&
                                    window.console &&
                                    console.warn &&
                                    console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                                e.data("data", e.data("select2Tags")),
                                e.data("tags", !0)),
                            e.data("ajaxUrl") &&
                                (this.options.debug &&
                                    window.console &&
                                    console.warn &&
                                    console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                                e.attr("ajax--url", e.data("ajaxUrl")),
                                e.data("ajax--url", e.data("ajaxUrl")));
                        var n,
                            i = {},
                            i = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && e[0].dataset ? s.extend(!0, {}, e[0].dataset, e.data()) : e.data(),
                            o = s.extend(!0, {}, i);
                        for (n in (o = r._convertData(o))) -1 < s.inArray(n, t) || (s.isPlainObject(this.options[n]) ? s.extend(this.options[n], o[n]) : (this.options[n] = o[n]));
                        return this;
                    }),
                    (e.prototype.get = function (e) {
                        return this.options[e];
                    }),
                    (e.prototype.set = function (e, t) {
                        this.options[e] = t;
                    }),
                    e
                );
            }),
            u.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (o, s, n, i) {
                var r = function (e, t) {
                    null != e.data("select2") && e.data("select2").destroy(), (this.$element = e), (this.id = this._generateId(e)), (this.options = new s((t = t || {}), e)), r.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    e.data("old-tabindex", n), e.attr("tabindex", "-1");
                    t = this.options.get("dataAdapter");
                    this.dataAdapter = new t(e, this.options);
                    n = this.render();
                    this._placeContainer(n);
                    t = this.options.get("selectionAdapter");
                    (this.selection = new t(e, this.options)), (this.$selection = this.selection.render()), this.selection.position(this.$selection, n);
                    t = this.options.get("dropdownAdapter");
                    (this.dropdown = new t(e, this.options)), (this.$dropdown = this.dropdown.render()), this.dropdown.position(this.$dropdown, n);
                    n = this.options.get("resultsAdapter");
                    (this.results = new n(e, this.options, this.dataAdapter)), (this.$results = this.results.render()), this.results.position(this.$results, this.$dropdown);
                    var i = this;
                    this._bindAdapters(),
                        this._registerDomEvents(),
                        this._registerDataEvents(),
                        this._registerSelectionEvents(),
                        this._registerDropdownEvents(),
                        this._registerResultsEvents(),
                        this._registerEvents(),
                        this.dataAdapter.current(function (e) {
                            i.trigger("selection:update", { data: e });
                        }),
                        e.addClass("select2-hidden-accessible"),
                        e.attr("aria-hidden", "true"),
                        this._syncAttributes(),
                        e.data("select2", this);
                };
                return (
                    n.Extend(r, n.Observable),
                    (r.prototype._generateId = function (e) {
                        return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
                    }),
                    (r.prototype._placeContainer = function (e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t);
                    }),
                    (r.prototype._resolveWidth = function (e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element");
                        }
                        if ("element" == t) {
                            i = e.outerWidth(!1);
                            return i <= 0 ? "auto" : i + "px";
                        }
                        if ("style" != t) return t;
                        e = e.attr("style");
                        if ("string" != typeof e) return null;
                        for (var o = e.split(";"), s = 0, r = o.length; s < r; s += 1) {
                            var a = o[s].replace(/\s/g, "").match(n);
                            if (null !== a && 1 <= a.length) return a[1];
                        }
                        return null;
                    }),
                    (r.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                    }),
                    (r.prototype._registerDomEvents = function () {
                        var t = this;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (e) {
                                t.trigger("selection:update", { data: e });
                            });
                        }),
                            this.$element.on("focus.select2", function (e) {
                                t.trigger("focus", e);
                            }),
                            (this._syncA = n.bind(this._syncAttributes, this)),
                            (this._syncS = n.bind(this._syncSubtree, this)),
                            this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != e
                            ? ((this._observer = new e(function (e) {
                                  o.each(e, t._syncA), o.each(e, t._syncS);
                              })),
                              this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                            : this.$element[0].addEventListener &&
                              (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
                    }),
                    (r.prototype._registerDataEvents = function () {
                        var n = this;
                        this.dataAdapter.on("*", function (e, t) {
                            n.trigger(e, t);
                        });
                    }),
                    (r.prototype._registerSelectionEvents = function () {
                        var n = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            n.toggleDropdown();
                        }),
                            this.selection.on("focus", function (e) {
                                n.focus(e);
                            }),
                            this.selection.on("*", function (e, t) {
                                -1 === o.inArray(e, i) && n.trigger(e, t);
                            });
                    }),
                    (r.prototype._registerDropdownEvents = function () {
                        var n = this;
                        this.dropdown.on("*", function (e, t) {
                            n.trigger(e, t);
                        });
                    }),
                    (r.prototype._registerResultsEvents = function () {
                        var n = this;
                        this.results.on("*", function (e, t) {
                            n.trigger(e, t);
                        });
                    }),
                    (r.prototype._registerEvents = function () {
                        var n = this;
                        this.on("open", function () {
                            n.$container.addClass("select2-container--open");
                        }),
                            this.on("close", function () {
                                n.$container.removeClass("select2-container--open");
                            }),
                            this.on("enable", function () {
                                n.$container.removeClass("select2-container--disabled");
                            }),
                            this.on("disable", function () {
                                n.$container.addClass("select2-container--disabled");
                            }),
                            this.on("blur", function () {
                                n.$container.removeClass("select2-container--focus");
                            }),
                            this.on("query", function (t) {
                                n.isOpen() || n.trigger("open", {}),
                                    this.dataAdapter.query(t, function (e) {
                                        n.trigger("results:all", { data: e, query: t });
                                    });
                            }),
                            this.on("query:append", function (t) {
                                this.dataAdapter.query(t, function (e) {
                                    n.trigger("results:append", { data: e, query: t });
                                });
                            }),
                            this.on("keypress", function (e) {
                                var t = e.which;
                                n.isOpen()
                                    ? t === i.ESC || t === i.TAB || (t === i.UP && e.altKey)
                                        ? (n.close(), e.preventDefault())
                                        : t === i.ENTER
                                        ? (n.trigger("results:select", {}), e.preventDefault())
                                        : t === i.SPACE && e.ctrlKey
                                        ? (n.trigger("results:toggle", {}), e.preventDefault())
                                        : t === i.UP
                                        ? (n.trigger("results:previous", {}), e.preventDefault())
                                        : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault())
                                    : (t === i.ENTER || t === i.SPACE || (t === i.DOWN && e.altKey)) && (n.open(), e.preventDefault());
                            });
                    }),
                    (r.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
                    }),
                    (r.prototype._syncSubtree = function (e, t) {
                        var n = !1,
                            i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && 0 < t.addedNodes.length) for (var o = 0; o < t.addedNodes.length; o++) t.addedNodes[o].selected && (n = !0);
                                else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                            else n = !0;
                            n &&
                                this.dataAdapter.current(function (e) {
                                    i.trigger("selection:update", { data: e });
                                });
                        }
                    }),
                    (r.prototype.trigger = function (e, t) {
                        var n = r.__super__.trigger,
                            i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };
                        if ((t === undefined && (t = {}), e in i)) {
                            var o = { prevented: !1, name: e, args: t };
                            if ((n.call(this, i[e], o), o.prevented)) return void (t.prevented = !0);
                        }
                        n.call(this, e, t);
                    }),
                    (r.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
                    }),
                    (r.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {});
                    }),
                    (r.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {});
                    }),
                    (r.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open");
                    }),
                    (r.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus");
                    }),
                    (r.prototype.focus = function (e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
                    }),
                    (r.prototype.enable = function (e) {
                        this.options.get("debug") &&
                            window.console &&
                            console.warn &&
                            console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                        e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
                        this.$element.prop("disabled", e);
                    }),
                    (r.prototype.data = function () {
                        this.options.get("debug") &&
                            0 < arguments.length &&
                            window.console &&
                            console.warn &&
                            console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var t = [];
                        return (
                            this.dataAdapter.current(function (e) {
                                t = e;
                            }),
                            t
                        );
                    }),
                    (r.prototype.val = function (e) {
                        if (
                            (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                            null == e || 0 === e.length)
                        )
                            return this.$element.val();
                        e = e[0];
                        o.isArray(e) &&
                            (e = o.map(e, function (e) {
                                return e.toString();
                            })),
                            this.$element.val(e).trigger("change");
                    }),
                    (r.prototype.destroy = function () {
                        this.$container.remove(),
                            this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                            null != this._observer
                                ? (this._observer.disconnect(), (this._observer = null))
                                : this.$element[0].removeEventListener &&
                                  (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                  this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                  this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                            (this._syncA = null),
                            (this._syncS = null),
                            this.$element.off(".select2"),
                            this.$element.attr("tabindex", this.$element.data("old-tabindex")),
                            this.$element.removeClass("select2-hidden-accessible"),
                            this.$element.attr("aria-hidden", "false"),
                            this.$element.removeData("select2"),
                            this.dataAdapter.destroy(),
                            this.selection.destroy(),
                            this.dropdown.destroy(),
                            this.results.destroy(),
                            (this.dataAdapter = null),
                            (this.selection = null),
                            (this.dropdown = null),
                            (this.results = null);
                    }),
                    (r.prototype.render = function () {
                        var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return e.attr("dir", this.options.get("dir")), (this.$container = e), this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e;
                    }),
                    r
                );
            }),
            u.define("select2/compat/utils", ["jquery"], function (r) {
                return {
                    syncCssClasses: function (e, t, n) {
                        var i,
                            o = [],
                            s = r.trim(e.attr("class"));
                        s &&
                            r((s = "" + s).split(/\s+/)).each(function () {
                                0 === this.indexOf("select2-") && o.push(this);
                            }),
                            (s = r.trim(t.attr("class"))) &&
                                r((s = "" + s).split(/\s+/)).each(function () {
                                    0 !== this.indexOf("select2-") && null != (i = n(this)) && o.push(i);
                                }),
                            e.attr("class", o.join(" "));
                    },
                };
            }),
            u.define("select2/compat/containerCss", ["jquery", "./utils"], function (s, r) {
                function a(e) {
                    return null;
                }
                function e() {}
                return (
                    (e.prototype.render = function (e) {
                        var t = e.call(this),
                            n = this.options.get("containerCssClass") || "";
                        s.isFunction(n) && (n = n(this.$element));
                        var i,
                            o = this.options.get("adaptContainerCssClass");
                        (o = o || a),
                            -1 !== n.indexOf(":all:") &&
                                ((n = n.replace(":all:", "")),
                                (i = o),
                                (o = function (e) {
                                    var t = i(e);
                                    return null != t ? t + " " + e : e;
                                }));
                        e = this.options.get("containerCss") || {};
                        return s.isFunction(e) && (e = e(this.$element)), r.syncCssClasses(t, this.$element, o), t.css(e), t.addClass(n), t;
                    }),
                    e
                );
            }),
            u.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (s, r) {
                function a(e) {
                    return null;
                }
                function e() {}
                return (
                    (e.prototype.render = function (e) {
                        var t = e.call(this),
                            n = this.options.get("dropdownCssClass") || "";
                        s.isFunction(n) && (n = n(this.$element));
                        var i,
                            o = this.options.get("adaptDropdownCssClass");
                        (o = o || a),
                            -1 !== n.indexOf(":all:") &&
                                ((n = n.replace(":all:", "")),
                                (i = o),
                                (o = function (e) {
                                    var t = i(e);
                                    return null != t ? t + " " + e : e;
                                }));
                        e = this.options.get("dropdownCss") || {};
                        return s.isFunction(e) && (e = e(this.$element)), r.syncCssClasses(t, this.$element, o), t.css(e), t.addClass(n), t;
                    }),
                    e
                );
            }),
            u.define("select2/compat/initSelection", ["jquery"], function (i) {
                function e(e, t, n) {
                    n.get("debug") &&
                        window.console &&
                        console.warn &&
                        console.warn(
                            "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
                        ),
                        (this.initSelection = n.get("initSelection")),
                        (this._isInitialized = !1),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.current = function (e, t) {
                        var n = this;
                        this._isInitialized
                            ? e.call(this, t)
                            : this.initSelection.call(null, this.$element, function (e) {
                                  (n._isInitialized = !0), i.isArray(e) || (e = [e]), t(e);
                              });
                    }),
                    e
                );
            }),
            u.define("select2/compat/inputData", ["jquery"], function (r) {
                function e(e, t, n) {
                    (this._currentData = []),
                        (this._valueSeparator = n.get("valueSeparator") || ","),
                        "hidden" === t.prop("type") &&
                            n.get("debug") &&
                            console &&
                            console.warn &&
                            console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.current = function (e, t) {
                        for (var n = [], i = 0; i < this._currentData.length; i++) {
                            var o = this._currentData[i];
                            n.push.apply(
                                n,
                                (function s(e, t) {
                                    var n = [];
                                    return e.selected || -1 !== r.inArray(e.id, t) ? ((e.selected = !0), n.push(e)) : (e.selected = !1), e.children && n.push.apply(n, s(e.children, t)), n;
                                })(o, this.$element.val().split(this._valueSeparator))
                            );
                        }
                        t(n);
                    }),
                    (e.prototype.select = function (e, t) {
                        var n;
                        this.options.get("multiple")
                            ? ((n = this.$element.val()), (n += this._valueSeparator + t.id), this.$element.val(n))
                            : (this.current(function (e) {
                                  r.map(e, function (e) {
                                      e.selected = !1;
                                  });
                              }),
                              this.$element.val(t.id)),
                            this.$element.trigger("change");
                    }),
                    (e.prototype.unselect = function (e, o) {
                        var s = this;
                        (o.selected = !1),
                            this.current(function (e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    o.id != i.id && t.push(i.id);
                                }
                                s.$element.val(t.join(s._valueSeparator)), s.$element.trigger("change");
                            });
                    }),
                    (e.prototype.query = function (e, t, n) {
                        for (var i = [], o = 0; o < this._currentData.length; o++) {
                            var s = this._currentData[o],
                                s = this.matches(t, s);
                            null !== s && i.push(s);
                        }
                        n({ results: i });
                    }),
                    (e.prototype.addOptions = function (e, t) {
                        t = r.map(t, function (e) {
                            return r.data(e[0], "data");
                        });
                        this._currentData.push.apply(this._currentData, t);
                    }),
                    e
                );
            }),
            u.define("select2/compat/matcher", ["jquery"], function (r) {
                return function (s) {
                    return function (e, t) {
                        var n = r.extend(!0, {}, t);
                        if (null == e.term || "" === r.trim(e.term)) return n;
                        if (t.children) {
                            for (var i = t.children.length - 1; 0 <= i; i--) {
                                var o = t.children[i];
                                s(e.term, o.text, o) || n.children.splice(i, 1);
                            }
                            if (0 < n.children.length) return n;
                        }
                        return s(e.term, t.text, t) ? n : null;
                    };
                };
            }),
            u.define("select2/compat/query", [], function () {
                function e(e, t, n) {
                    n.get("debug") &&
                        window.console &&
                        console.warn &&
                        console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (e, t, n) {
                        (t.callback = n), this.options.get("query").call(null, t);
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/attachContainer", [], function () {
                function e(e, t, n) {
                    e.call(this, t, n);
                }
                return (
                    (e.prototype.position = function (e, t, n) {
                        n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below");
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/stopPropagation", [], function () {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        this.$dropdown.on(
                            [
                                "blur",
                                "change",
                                "click",
                                "dblclick",
                                "focus",
                                "focusin",
                                "focusout",
                                "input",
                                "keydown",
                                "keyup",
                                "keypress",
                                "mousedown",
                                "mouseenter",
                                "mouseleave",
                                "mousemove",
                                "mouseover",
                                "mouseup",
                                "search",
                                "touchend",
                                "touchstart",
                            ].join(" "),
                            function (e) {
                                e.stopPropagation();
                            }
                        );
                    }),
                    e
                );
            }),
            u.define("select2/selection/stopPropagation", [], function () {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        this.$selection.on(
                            [
                                "blur",
                                "change",
                                "click",
                                "dblclick",
                                "focus",
                                "focusin",
                                "focusout",
                                "input",
                                "keydown",
                                "keyup",
                                "keypress",
                                "mousedown",
                                "mouseenter",
                                "mouseleave",
                                "mousemove",
                                "mouseover",
                                "mouseup",
                                "search",
                                "touchend",
                                "touchstart",
                            ].join(" "),
                            function (e) {
                                e.stopPropagation();
                            }
                        );
                    }),
                    e
                );
            }),
            /*!
             * jQuery Mousewheel 3.1.13
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             */
            (a = function (u) {
                var d,
                    p,
                    e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                    t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                    h = Array.prototype.slice;
                if (u.event.fixHooks) for (var n = e.length; n; ) u.event.fixHooks[e[--n]] = u.event.mouseHooks;
                var f = (u.event.special.mousewheel = {
                    version: "3.1.12",
                    setup: function () {
                        if (this.addEventListener) for (var e = t.length; e; ) this.addEventListener(t[--e], i, !1);
                        else this.onmousewheel = i;
                        u.data(this, "mousewheel-line-height", f.getLineHeight(this)), u.data(this, "mousewheel-page-height", f.getPageHeight(this));
                    },
                    teardown: function () {
                        if (this.removeEventListener) for (var e = t.length; e; ) this.removeEventListener(t[--e], i, !1);
                        else this.onmousewheel = null;
                        u.removeData(this, "mousewheel-line-height"), u.removeData(this, "mousewheel-page-height");
                    },
                    getLineHeight: function (e) {
                        var t = u(e),
                            e = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
                        return e.length || (e = u("body")), parseInt(e.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
                    },
                    getPageHeight: function (e) {
                        return u(e).height();
                    },
                    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
                });
                function i(e) {
                    var t,
                        n = e || window.event,
                        i = h.call(arguments, 1),
                        o = 0,
                        s = 0,
                        r = 0,
                        a = 0,
                        l = 0,
                        c = 0;
                    if (
                        (((e = u.event.fix(n)).type = "mousewheel"),
                        "detail" in n && (r = -1 * n.detail),
                        "wheelDelta" in n && (r = n.wheelDelta),
                        "wheelDeltaY" in n && (r = n.wheelDeltaY),
                        "wheelDeltaX" in n && (s = -1 * n.wheelDeltaX),
                        "axis" in n && n.axis === n.HORIZONTAL_AXIS && ((s = -1 * r), (r = 0)),
                        (o = 0 === r ? s : r),
                        "deltaY" in n && (o = r = -1 * n.deltaY),
                        "deltaX" in n && ((s = n.deltaX), 0 === r && (o = -1 * s)),
                        0 !== r || 0 !== s)
                    )
                        return (
                            1 === n.deltaMode ? ((o *= t = u.data(this, "mousewheel-line-height")), (r *= t), (s *= t)) : 2 === n.deltaMode && ((o *= t = u.data(this, "mousewheel-page-height")), (r *= t), (s *= t)),
                            (a = Math.max(Math.abs(r), Math.abs(s))),
                            (!p || a < p) && m(n, (p = a)) && (p /= 40),
                            m(n, a) && ((o /= 40), (s /= 40), (r /= 40)),
                            (o = Math[1 <= o ? "floor" : "ceil"](o / p)),
                            (s = Math[1 <= s ? "floor" : "ceil"](s / p)),
                            (r = Math[1 <= r ? "floor" : "ceil"](r / p)),
                            f.settings.normalizeOffset && this.getBoundingClientRect && ((a = this.getBoundingClientRect()), (l = e.clientX - a.left), (c = e.clientY - a.top)),
                            (e.deltaX = s),
                            (e.deltaY = r),
                            (e.deltaFactor = p),
                            (e.offsetX = l),
                            (e.offsetY = c),
                            (e.deltaMode = 0),
                            i.unshift(e, o, s, r),
                            d && clearTimeout(d),
                            (d = setTimeout(g, 200)),
                            (u.event.dispatch || u.event.handle).apply(this, i)
                        );
                }
                function g() {
                    p = null;
                }
                function m(e, t) {
                    return f.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
                }
                u.fn.extend({
                    mousewheel: function (e) {
                        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
                    },
                    unmousewheel: function (e) {
                        return this.unbind("mousewheel", e);
                    },
                });
            }),
            "function" == typeof u.define && u.define.amd ? u.define("jquery-mousewheel", ["jquery"], a) : "object" == typeof exports ? (module.exports = a) : a(t),
            u.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (o, e, s, t) {
                var r;
                return (
                    null == o.fn.select2 &&
                        ((r = ["open", "close", "destroy"]),
                        (o.fn.select2 = function (t) {
                            if ("object" == typeof (t = t || {}))
                                return (
                                    this.each(function () {
                                        var e = o.extend(!0, {}, t);
                                        new s(o(this), e);
                                    }),
                                    this
                                );
                            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                            var n,
                                i = Array.prototype.slice.call(arguments, 1);
                            return (
                                this.each(function () {
                                    var e = o(this).data("select2");
                                    null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), (n = e[t].apply(e, i));
                                }),
                                -1 < o.inArray(t, r) ? this : n
                            );
                        })),
                    null == o.fn.select2.defaults && (o.fn.select2.defaults = t),
                    s
                );
            }),
            { define: u.define, require: u.require });
    function _(e, t) {
        return i.call(e, t);
    }
    function l(e, t) {
        var n,
            i,
            o,
            s,
            r,
            a,
            l,
            c,
            u,
            d,
            p = t && t.split("/"),
            h = m.map,
            f = (h && h["*"]) || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (t = (e = e.split("/")).length - 1, m.nodeIdCompat && v.test(e[t]) && (e[t] = e[t].replace(v, "")), e = p.slice(0, p.length - 1).concat(e), c = 0; c < e.length; c += 1)
                    if ("." === (d = e[c])) e.splice(c, 1), --c;
                    else if (".." === d) {
                        if (1 === c && (".." === e[2] || ".." === e[0])) break;
                        0 < c && (e.splice(c - 1, 2), (c -= 2));
                    }
                e = e.join("/");
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((p || f) && h) {
            for (c = (n = e.split("/")).length; 0 < c; --c) {
                if (((i = n.slice(0, c).join("/")), p))
                    for (u = p.length; 0 < u; --u)
                        if ((o = (o = h[p.slice(0, u).join("/")]) && o[i])) {
                            (s = o), (r = c);
                            break;
                        }
                if (s) break;
                !a && f && f[i] && ((a = f[i]), (l = c));
            }
            !s && a && ((s = a), (r = l)), s && (n.splice(0, r, s), (e = n.join("/")));
        }
        return e;
    }
    function w(t, n) {
        return function () {
            var e = o.call(arguments, 0);
            return "string" != typeof e[0] && 1 === e.length && e.push(null), r.apply(d, e.concat([t, n]));
        };
    }
    function b(e) {
        var t;
        if ((_(g, e) && ((t = g[e]), delete g[e], (y[e] = !0), s.apply(d, t)), !_(f, e) && !_(y, e))) throw new Error("No " + e);
        return f[e];
    }
    function c(e) {
        var t,
            n = e ? e.indexOf("!") : -1;
        return -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
    }
    var u = a.require("jquery.select2");
    return (t.fn.select2.amd = a), u;
});

/*jquery.magnific-popup.min.js*/
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
                        : (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                      f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});

/*swiper.min69c8*/
/**
 * Swiper 4.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 1, 2018
 */
 !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Swiper = t());
})(this, function () {
    "use strict";
    var f =
            "undefined" == typeof document
                ? {
                      body: {},
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      activeElement: { blur: function () {}, nodeName: "" },
                      querySelector: function () {
                          return null;
                      },
                      querySelectorAll: function () {
                          return [];
                      },
                      getElementById: function () {
                          return null;
                      },
                      createEvent: function () {
                          return { initEvent: function () {} };
                      },
                      createElement: function () {
                          return {
                              children: [],
                              childNodes: [],
                              style: {},
                              setAttribute: function () {},
                              getElementsByTagName: function () {
                                  return [];
                              },
                          };
                      },
                      location: { hash: "" },
                  }
                : document,
        Y =
            "undefined" == typeof window
                ? {
                      document: f,
                      navigator: { userAgent: "" },
                      location: {},
                      history: {},
                      CustomEvent: function () {
                          return this;
                      },
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      getComputedStyle: function () {
                          return {
                              getPropertyValue: function () {
                                  return "";
                              },
                          };
                      },
                      Image: function () {},
                      Date: function () {},
                      screen: {},
                      setTimeout: function () {},
                      clearTimeout: function () {},
                  }
                : window,
        l = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s,
                    r,
                    n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (
                        0 === n.indexOf("<li") && (o = "ul"),
                            0 === n.indexOf("<tr") && (o = "tbody"),
                            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
                            0 === n.indexOf("<tbody") && (o = "table"),
                            0 === n.indexOf("<option") && (o = "select"),
                            (r = f.createElement(o)).innerHTML = n,
                            i = 0;
                        i < r.childNodes.length;
                        i += 1
                    )
                        a.push(r.childNodes[i]);
                } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i]);
            } else if (e.nodeType || e === Y || e === f) a.push(e);
            else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a);
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
    }
    (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this;
        },
        removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this;
        },
        attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
            return this;
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), (a.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((a = this[0])) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0;
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransform = e), (a.transform = e);
            }
            return this;
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransitionDuration = e), (a.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r))) n.apply(t, a);
                    else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a);
                }
            }
            function l(e) {
                var t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s);
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s);
                    }
            }
            return this;
        },
        off: function () {
            for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if ((!s && c.dom7Listeners ? (u = c.dom7Listeners[d]) : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length))
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
                        }
                }
            return this;
        },
        trigger: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new Y.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 });
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), (l.detail = i);
                    }
                    (o.dom7EventData = e.filter(function (e, t) {
                        return 0 < t;
                    })),
                        o.dispatchEvent(l),
                        (o.dom7EventData = []),
                        delete o.dom7EventData;
                }
            return this;
        },
        transitionEnd: function (t) {
            var a,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            function r(e) {
                if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r);
            }
            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this;
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === Y ? Y.scrollY : e.scrollTop,
                    n = e === Y ? Y.scrollX : e.scrollLeft;
                return { top: t.top + r - i, left: t.left + n - s };
            }
            return null;
        },
        css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
                    return this;
                }
                if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function (e) {
            var t,
                a,
                i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1;
            }
            if (e === f) return i === f;
            if (e === Y) return i === Y;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? ((t = a + e) < 0 ? [] : [this[t]]) : [this[e]]);
        },
        append: function () {
            for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild; ) this[s].appendChild(r.firstChild);
                    } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                    else this[s].appendChild(e);
            }
            return this;
        },
        prepend: function (e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
                } else if (e instanceof l) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
        },
        next: function (e) {
            return 0 < this.length
                ? e
                    ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e)
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                    : this[0].nextElementSibling
                    ? new l([this[0].nextElementSibling])
                    : new l([])
                : new l([]);
        },
        nextAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? (t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([])) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
            }
            return new l([]);
        },
        prevAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t));
        },
        parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i; ) e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
            return L(r(t));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t);
        },
        children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t));
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) (this[this.length] = s[i]), (this.length += 1);
            }
            return this;
        },
        styles: function () {
            return this[0] ? Y.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e];
    });
    var e,
        a,
        i,
        V = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = Y.getComputedStyle(e, null);
                return (
                    Y.WebKitCSSMatrix
                        ? (6 < (i = r.transform || r.webkitTransform).split(",").length &&
                              (i = i
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (s = new Y.WebKitCSSMatrix("none" === i ? "" : i)))
                        : (a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                    "y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                    i || 0
                );
            },
            parseUrlQuery: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r = {},
                    n = e || Y.location.href;
                if ("string" == typeof n && n.length)
                    for (
                        s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e;
                        })).length,
                            t = 0;
                        t < s;
                        t += 1
                    )
                        (i = a[t].replace(/#\S+/g, "").split("=")), (r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                return r;
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (V.isObject(a[l]) && V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? ((a[l] = {}), V.extend(a[l], s[l])) : (a[l] = s[l]));
                        }
                }
                return a;
            },
        },
        F =
            ((i = f.createElement("div")),
            {
                touch: (Y.Modernizr && !0 === Y.Modernizr.touch) || !!("ontouchstart" in Y || (Y.DocumentTouch && f instanceof Y.DocumentTouch)),
                pointerEvents: !!(Y.navigator.pointerEnabled || Y.PointerEvent || "maxTouchPoints" in Y.navigator),
                prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
                transition: ((a = i.style), "transition" in a || "webkitTransition" in a || "MozTransition" in a),
                transforms3d: (Y.Modernizr && !0 === Y.Modernizr.csstransforms3d) || ((e = i.style), "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: (function () {
                    for (
                        var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0;
                        a < t.length;
                        a += 1
                    )
                        if (t[a] in e) return !0;
                    return !1;
                })(),
                observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
                passiveListener: (function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0;
                            },
                        });
                        Y.addEventListener("testPassiveListener", null, t);
                    } catch (e) {}
                    return e;
                })(),
                gestures: "ongesturestart" in Y,
            }),
        s = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        n = { components: { configurable: !0 } };
    (s.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return (
            e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
            }),
            i
        );
    }),
        (s.prototype.once = function (i, s, e) {
            var r = this;
            if ("function" != typeof s) return r;
            return r.on(
                i,
                function e() {
                    for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a];
                    s.apply(r, t), r.off(i, e);
                },
                e
            );
        }),
        (s.prototype.off = function (e, i) {
            var s = this;
            return (
                s.eventsListeners &&
                    e.split(" ").forEach(function (a) {
                        void 0 === i
                            ? (s.eventsListeners[a] = [])
                            : s.eventsListeners[a] &&
                              s.eventsListeners[a].length &&
                              s.eventsListeners[a].forEach(function (e, t) {
                                  e === i && s.eventsListeners[a].splice(t, 1);
                              });
                    }),
                s
            );
        }),
        (s.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a,
                i,
                s,
                r = this;
            return (
                r.eventsListeners &&
                    ("string" == typeof e[0] || Array.isArray(e[0]) ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r)) : ((a = e[0].events), (i = e[0].data), (s = e[0].context || r)),
                    (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
                        if (r.eventsListeners && r.eventsListeners[e]) {
                            var t = [];
                            r.eventsListeners[e].forEach(function (e) {
                                t.push(e);
                            }),
                                t.forEach(function (e) {
                                    e.apply(s, i);
                                });
                        }
                    })),
                r
            );
        }),
        (s.prototype.useModulesParams = function (a) {
            var i = this;
            i.modules &&
                Object.keys(i.modules).forEach(function (e) {
                    var t = i.modules[e];
                    t.params && V.extend(a, t.params);
                });
        }),
        (s.prototype.useModules = function (i) {
            void 0 === i && (i = {});
            var s = this;
            s.modules &&
                Object.keys(s.modules).forEach(function (e) {
                    var a = s.modules[e],
                        t = i[e] || {};
                    a.instance &&
                        Object.keys(a.instance).forEach(function (e) {
                            var t = a.instance[e];
                            s[e] = "function" == typeof t ? t.bind(s) : t;
                        }),
                        a.on &&
                            s.on &&
                            Object.keys(a.on).forEach(function (e) {
                                s.on(e, a.on[e]);
                            }),
                        a.create && a.create.bind(s)(t);
                });
        }),
        (n.components.set = function (e) {
            this.use && this.use(e);
        }),
        (s.installModule = function (t) {
            for (var e = [], a = arguments.length - 1; 0 < a--; ) e[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
            return (
                (i.prototype.modules[s] = t).proto &&
                    Object.keys(t.proto).forEach(function (e) {
                        i.prototype[e] = t.proto[e];
                    }),
                t.static &&
                    Object.keys(t.static).forEach(function (e) {
                        i[e] = t.static[e];
                    }),
                t.install && t.install.apply(i, e),
                i
            );
        }),
        (s.use = function (e) {
            for (var t = [], a = arguments.length - 1; 0 < a--; ) t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                      return i.installModule(e);
                  }),
                  i)
                : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(s, n);
    var o = {
        updateSize: function () {
            var e,
                t,
                a = this,
                i = a.$el;
            (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
                (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
                (0 === e && a.isHorizontal()) ||
                    (0 === t && a.isVertical()) ||
                    ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                    (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                    V.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = (parseFloat(g.replace("%", "")) / 100) * i),
                    (e.virtualSize = -g),
                    s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }),
                    1 < t.slidesPerColumn &&
                        ((x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) {
                    T = 0;
                    var P = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var z = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill
                            ? ((L = k - ($ = Math.floor(k / S)) * S),
                              (M < $ || ($ === M && L === S - 1)) && S <= (L += 1) && ((L = 0), ($ += 1)),
                              (z = $ + (L * x) / S),
                              P.css({ "-webkit-box-ordinal-group": z, "-moz-box-ordinal-group": z, "-ms-flex-order": z, "-webkit-order": z, order: z }))
                            : ($ = k - (L = Math.floor(k / C)) * C),
                            P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px")
                                .attr("data-swiper-column", $)
                                .attr("data-swiper-row", L);
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = Y.getComputedStyle(P[0], null),
                                D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            D && (P[0].style.transform = "none"),
                                O && (P[0].style.webkitTransform = "none"),
                                (T = t.roundLengths
                                    ? e.isHorizontal()
                                        ? P.outerWidth(!0)
                                        : P.outerHeight(!0)
                                    : e.isHorizontal()
                                    ? parseFloat(I.getPropertyValue("width")) + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right"))
                                    : parseFloat(I.getPropertyValue("height")) + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom"))),
                                D && (P[0].style.transform = D),
                                O && (P[0].style.webkitTransform = O),
                                t.roundLengths && (T = Math.floor(T));
                        } else (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView), t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? (l[k].style.width = T + "px") : (l[k].style.height = T + "px"));
                        l[k] && (l[k].swiperSlideSize = T),
                            u.push(T),
                            t.centeredSlides
                                ? ((b = b + T / 2 + w / 2 + g),
                                  0 === w && 0 !== k && (b = b - i / 2 - g),
                                  0 === k && (b = b - i / 2 - g),
                                  Math.abs(b) < 0.001 && (b = 0),
                                  t.roundLengths && (b = Math.floor(b)),
                                  y % t.slidesPerGroup == 0 && p.push(b),
                                  c.push(b))
                                : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), (b = b + T + g)),
                            (e.virtualSize += T + g),
                            (w = T),
                            (y += 1);
                    }
                }
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, i) + v),
                    s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                    (F.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                    1 < t.slidesPerColumn &&
                        ((e.virtualSize = (T + t.spaceBetween) * x),
                        (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                        e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                        t.centeredSlides))
                ) {
                    E = [];
                    for (var A = 0; A < p.length; A += 1) {
                        var N = p[A];
                        t.roundLengths && (N = Math.floor(N)), p[A] < e.virtualSize + p[0] && E.push(N);
                    }
                    p = E;
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var H = 0; H < p.length; H += 1) {
                        var G = p[H];
                        t.roundLengths && (G = Math.floor(G)), p[H] <= e.virtualSize - i && E.push(G);
                    }
                    (p = E), 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
                }
                if ((0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? (s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" })) : l.css({ marginBottom: g + "px" })), t.centerInsufficientSlides)) {
                    var B = 0;
                    if (
                        (u.forEach(function (e) {
                            B += e + (t.spaceBetween ? t.spaceBetween : 0);
                        }),
                        (B -= t.spaceBetween) < i)
                    ) {
                        var X = (i - B) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - X;
                        }),
                            c.forEach(function (e, t) {
                                c[t] = e + X;
                            });
                    }
                }
                V.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }),
                    d !== o && e.emit("slidesLengthChange"),
                    p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    c.length !== m && e.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
            }
        },
        updateAutoHeight: function (e) {
            var t,
                a = this,
                i = [],
                s = 0;
            if (("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView))
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0]);
                }
            else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s;
                }
            s && a.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        ((0 <= d && d < t.size) || (0 < p && p <= t.size) || (d <= 0 && p >= t.size)) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
                    }
                    o.progress = s ? -l : l;
                }
                t.visibleSlides = L(t.visibleSlides);
            }
        },
        updateProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? (n = r = !(s = 0)) : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
                V.extend(t, { progress: s, isBeginning: r, isEnd: n }),
                (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                n && !l && t.emit("reachEnd toEdge"),
                ((o && !r) || (l && !n)) && t.emit("fromEdge"),
                t.emit("progress", s);
        },
        updateSlidesClasses: function () {
            var e,
                t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass),
                i.loop &&
                    (e.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                    (l.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                    d.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
            var t,
                a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? (i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? (p = c) : i >= s[c] && i < s[c + 1] && (p = c + 1)) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
            }
            if (((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o)) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                V.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
            } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = L(i).index()),
                a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        },
    };
    var d = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = V.getTranslate(s[0], e);
            return a && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.virtualTranslate || (F.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                (a.previousTranslate = a.translate),
                (a.translate = a.isHorizontal() ? o : l);
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
    };
    var p = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if ((n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r)) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            (a.animating = !1), a.setTransition(0);
            var r = t;
            if ((r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s)) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
            }
        },
    };
    var c = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h,
                v = -o[u];
            if ((s.updateProgress(v), n.normalizeSlideIndex)) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
            }
            return (
                (h = p < r ? "next" : r < p ? "prev" : "reset"),
                (c && -v === s.translate) || (!c && v === s.translate)
                    ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1)
                    : (0 !== t && F.transition
                          ? (s.setTransition(t),
                            s.setTranslate(v),
                            s.updateActiveIndex(r),
                            s.updateSlidesClasses(),
                            s.emit("beforeTransitionStart", t, i),
                            s.transitionStart(a, h),
                            s.animating ||
                                ((s.animating = !0),
                                s.onSlideToWrapperTransitionEnd ||
                                    (s.onSlideToWrapperTransitionEnd = function (e) {
                                        s &&
                                            !s.destroyed &&
                                            e.target === this &&
                                            (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                            s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                                            (s.onSlideToWrapperTransitionEnd = null),
                                            delete s.onSlideToWrapperTransitionEnd,
                                            s.transitionEnd(a, h));
                                    }),
                                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)))
                          : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)),
                      !0)
            );
        },
        slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
        },
        slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
        },
        slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var p,
                c = d(l ? i.translate : -i.translate),
                u = n.map(function (e) {
                    return d(e);
                }),
                h =
                    (o.map(function (e) {
                        return d(e);
                    }),
                    n[u.indexOf(c)],
                    n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
        },
        slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
        },
        slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
            }
            return i.slideTo(s, e, t, a);
        },
        slideToClickedSlide: function () {
            var e,
                t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                (e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                    a.centeredSlides
                        ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
                            ? (t.loopFix(),
                              (r = i
                                  .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                                  .eq(0)
                                  .index()),
                              V.nextTick(function () {
                                  t.slideTo(r);
                              }))
                            : t.slideTo(r)
                        : r > t.slides.length - s
                        ? (t.loopFix(),
                          (r = i
                              .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                              .eq(0)
                              .index()),
                          V.nextTick(function () {
                              t.slideTo(r);
                          }))
                        : t.slideTo(r);
            } else t.slideTo(r);
        },
    };
    var u = {
        loopCreate: function () {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n);
                    }
                    s = t.children("." + e.slideClass);
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
                (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
                (i.loopedSlides += e.loopAdditionalSlides),
                i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
        },
        loopFix: function () {
            var e,
                t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            var p = -l[i] - t.getTranslate();
            i < r
                ? ((e = s.length - 3 * r + i), (e += r), t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p))
                : (("auto" === a.slidesPerView && 2 * r <= i) || i >= s.length - r) && ((e = -s.length + i + r), (e += r), t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            (t.allowSlidePrev = n), (t.allowSlideNext = o);
        },
        loopDestroy: function () {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index");
        },
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(F.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked))) {
                var t = this.el;
                (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
            }
        },
        unsetGrabCursor: function () {
            F.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = "");
        },
    };
    var v = {
            appendSlide: function (e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), (i.observer && F.observer) || t.update();
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length;
                } else i.prepend(e);
                a.loop && t.loopCreate(), (a.observer && F.observer) || t.update(), t.slideTo(r, 0, !1);
            },
            addSlide: function (e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop && ((r -= a.loopedSlides), a.loopDestroy(), (a.slides = i.children("." + s.slideClass)));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p);
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r;
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(), (s.observer && F.observer) || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
                }
            },
            removeSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && ((s -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
                var r,
                    n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) (r = e[o]), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0);
                } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), (n = Math.max(n, 0));
                a.loop && t.loopCreate(), (a.observer && F.observer) || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e);
            },
        },
        m = (function () {
            var e = Y.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: Y.cordova || Y.phonegap, phonegap: Y.cordova || Y.phonegap },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
                i && !a && ((t.os = "android"), (t.osVersion = i[2]), (t.android = !0), (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
                (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
                n && !r && ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
                s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
                r && ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                (t.desktop = !(t.os || t.android || t.webView)),
                (t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                t.os && "ios" === t.os)
            ) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
            }
            return (t.pixelRatio = Y.devicePixelRatio || 1), t;
        })();
    function g() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            (e.allowSlidePrev = s), (e.allowSlideNext = i), e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    var b = {
        attachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl;
            (e.onTouchStart = function (e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (
                        (r.originalEvent && (r = r.originalEvent),
                        (a.isTouchEvent = "touchstart" === r.type),
                        (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !((!a.isTouchEvent && "button" in r && 0 < r.button) || (a.isTouched && a.isMoved)))
                    )
                        if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                            (s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX), (s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
                            var n = s.currentX,
                                o = s.currentY,
                                l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                            if (!l || !(n <= d || n >= Y.screen.width - d)) {
                                if (
                                    (V.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                    (s.startX = n),
                                    (s.startY = o),
                                    (a.touchStartTime = V.now()),
                                    (t.allowClick = !0),
                                    t.updateSize(),
                                    (t.swipeDirection = void 0),
                                    0 < i.threshold && (a.allowThresholdMove = !1),
                                    "touchstart" !== r.type)
                                ) {
                                    var p = !0;
                                    L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                    var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                    (i.touchStartForcePreventDefault || c) && r.preventDefault();
                                }
                                t.emit("touchStart", r);
                            }
                        }
                }
            }.bind(e)),
                (e.onTouchMove = function (e) {
                    var t = this,
                        a = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        r = t.rtlTranslate,
                        n = e;
                    if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
                        if (!a.isTouchEvent || "mousemove" !== n.type) {
                            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                                l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                            if (n.preventedByNestedSwiper) return (s.startX = o), void (s.startY = l);
                            if (!t.allowTouchMove) return (t.allowClick = !1), void (a.isTouched && (V.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), (a.touchStartTime = V.now())));
                            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if ((l < s.startY && t.translate <= t.maxTranslate()) || (l > s.startY && t.translate >= t.minTranslate())) return (a.isTouched = !1), void (a.isMoved = !1);
                                } else if ((o < s.startX && t.translate <= t.maxTranslate()) || (o > s.startX && t.translate >= t.minTranslate())) return;
                            if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return (a.isMoved = !0), void (t.allowClick = !1);
                            if ((a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length))) {
                                (s.currentX = o), (s.currentY = l);
                                var d,
                                    p = s.currentX - s.startX,
                                    c = s.currentY - s.startY;
                                if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                    if (
                                        (void 0 === a.isScrolling &&
                                            ((t.isHorizontal() && s.currentY === s.startY) || (t.isVertical() && s.currentX === s.startX)
                                                ? (a.isScrolling = !1)
                                                : 25 <= p * p + c * c && ((d = (180 * Math.atan2(Math.abs(c), Math.abs(p))) / Math.PI), (a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle))),
                                        a.isScrolling && t.emit("touchMoveOpposite", n),
                                        void 0 === a.startMoving && ((s.currentX === s.startX && s.currentY === s.startY) || (a.startMoving = !0)),
                                        a.isScrolling)
                                    )
                                        a.isTouched = !1;
                                    else if (a.startMoving) {
                                        (t.allowClick = !1),
                                            n.preventDefault(),
                                            i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                            a.isMoved ||
                                                (i.loop && t.loopFix(),
                                                (a.startTranslate = t.getTranslate()),
                                                t.setTransition(0),
                                                t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                (a.allowMomentumBounce = !1),
                                                !i.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                                                t.emit("sliderFirstMove", n)),
                                            t.emit("sliderMove", n),
                                            (a.isMoved = !0);
                                        var u = t.isHorizontal() ? p : c;
                                        (s.diff = u), (u *= i.touchRatio), r && (u = -u), (t.swipeDirection = 0 < u ? "prev" : "next"), (a.currentTranslate = u + a.startTranslate);
                                        var h = !0,
                                            v = i.resistanceRatio;
                                        if (
                                            (i.touchReleaseOnEdges && (v = 0),
                                            0 < u && a.currentTranslate > t.minTranslate()
                                                ? ((h = !1), i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v)))
                                                : u < 0 && a.currentTranslate < t.maxTranslate() && ((h = !1), i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))),
                                            h && (n.preventedByNestedSwiper = !0),
                                            !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                            !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                            0 < i.threshold)
                                        ) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove)
                                                return (
                                                    (a.allowThresholdMove = !0),
                                                    (s.startX = s.currentX),
                                                    (s.startY = s.currentY),
                                                    (a.currentTranslate = a.startTranslate),
                                                    void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                                );
                                        }
                                        i.followFinger &&
                                            ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                                            i.freeMode &&
                                                (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }),
                                                a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: V.now() })),
                                            t.updateProgress(a.currentTranslate),
                                            t.setTranslate(a.currentTranslate));
                                    }
                            }
                        }
                    } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
                }.bind(e)),
                (e.onTouchEnd = function (e) {
                    var t = this,
                        a = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        r = t.rtlTranslate,
                        n = t.$wrapperEl,
                        o = t.slidesGrid,
                        l = t.snapGrid,
                        d = e;
                    if ((d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), (a.allowTouchCallbacks = !1), !a.isTouched))
                        return a.isMoved && i.grabCursor && t.setGrabCursor(!1), (a.isMoved = !1), void (a.startMoving = !1);
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p,
                        c = V.now(),
                        u = c - a.touchStartTime;
                    if (
                        (t.allowClick &&
                            (t.updateClickedSlide(d),
                            t.emit("tap", d),
                            u < 300 &&
                                300 < c - a.lastClickTime &&
                                (a.clickTimeout && clearTimeout(a.clickTimeout),
                                (a.clickTimeout = V.nextTick(function () {
                                    t && !t.destroyed && t.emit("click", d);
                                }, 300))),
                            u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))),
                        (a.lastClickTime = V.now()),
                        V.nextTick(function () {
                            t.destroyed || (t.allowClick = !0);
                        }),
                        !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                    )
                        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
                    if (((a.isTouched = !1), (a.isMoved = !1), (a.startMoving = !1), (p = i.followFinger ? (r ? t.translate : -t.translate) : -a.currentTranslate), i.freeMode)) {
                        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (1 < a.velocities.length) {
                                var h = a.velocities.pop(),
                                    v = a.velocities.pop(),
                                    f = h.position - v.position,
                                    m = h.time - v.time;
                                (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0);
                            } else t.velocity = 0;
                            (t.velocity *= i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
                            var g = 1e3 * i.freeModeMomentumRatio,
                                b = t.velocity * g,
                                w = t.translate + b;
                            r && (w = -w);
                            var y,
                                x,
                                T = !1,
                                E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (w < t.maxTranslate())
                                i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), (y = t.maxTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (w = t.maxTranslate()),
                                    i.loop && i.centeredSlides && (x = !0);
                            else if (w > t.minTranslate())
                                i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), (y = t.minTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (w = t.minTranslate()),
                                    i.loop && i.centeredSlides && (x = !0);
                            else if (i.freeModeSticky) {
                                for (var S, C = 0; C < l.length; C += 1)
                                    if (l[C] > -w) {
                                        S = C;
                                        break;
                                    }
                                w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
                            }
                            if (
                                (x &&
                                    t.once("transitionEnd", function () {
                                        t.loopFix();
                                    }),
                                0 !== t.velocity)
                            )
                                g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                            else if (i.freeModeSticky) return void t.slideToClosest();
                            i.freeModeMomentumBounce && T
                                ? (t.updateProgress(y),
                                  t.setTransition(g),
                                  t.setTranslate(w),
                                  t.transitionStart(!0, t.swipeDirection),
                                  (t.animating = !0),
                                  n.transitionEnd(function () {
                                      t &&
                                          !t.destroyed &&
                                          a.allowMomentumBounce &&
                                          (t.emit("momentumBounce"),
                                          t.setTransition(i.speed),
                                          t.setTranslate(y),
                                          n.transitionEnd(function () {
                                              t && !t.destroyed && t.transitionEnd();
                                          }));
                                  }))
                                : t.velocity
                                ? (t.updateProgress(w),
                                  t.setTransition(g),
                                  t.setTranslate(w),
                                  t.transitionStart(!0, t.swipeDirection),
                                  t.animating ||
                                      ((t.animating = !0),
                                      n.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      })))
                                : t.updateProgress(w),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses();
                        } else if (i.freeModeSticky) return void t.slideToClosest();
                        (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    } else {
                        for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                            void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && ((M = P), (k = o[o.length - 1] - o[o.length - 2]));
                        var z = (p - o[M]) / k;
                        if (u > i.longSwipesMs) {
                            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                                "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
                        } else {
                            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
                        }
                    }
                }.bind(e)),
                (e.onClick = function (e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                }.bind(e));
            var r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (F.touch || (!F.pointerEvents && !F.prefixedPointerEvents)) {
                if (F.touch) {
                    var o = !("touchstart" !== a.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, F.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
                }
                ((t.simulateTouch && !m.ios && !m.android) || (t.simulateTouch && !F.touch && m.ios)) &&
                    (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0);
        },
        detachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (F.touch || (!F.pointerEvents && !F.prefixedPointerEvents)) {
                if (F.touch) {
                    var o = !("onTouchStart" !== a.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
                }
                ((t.simulateTouch && !m.ios && !m.android) || (t.simulateTouch && !F.touch && m.ios)) &&
                    (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g);
        },
    };
    var w,
        y = {
            setBreakpoint: function () {
                var e = this,
                    t = e.activeIndex,
                    a = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params,
                    r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o &&
                            ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                            });
                        var l = o || e.originalParams,
                            d = s.loop && l.slidesPerView !== s.slidesPerView;
                        V.extend(e.params, l),
                            V.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                            (e.currentBreakpoint = n),
                            d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", l);
                    }
                }
            },
            getBreakpoint: function (e) {
                if (e) {
                    var t = !1,
                        a = [];
                    Object.keys(e).forEach(function (e) {
                        a.push(e);
                    }),
                        a.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10);
                        });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s);
                    }
                    return t || "max";
                }
            },
        },
        I = {
            isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g),
            isEdge: !!Y.navigator.userAgent.match(/Edge/g),
            isSafari: ((w = Y.navigator.userAgent.toLowerCase()), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent),
        };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.isLocked;
                    (e.isLocked = 1 === e.snapGrid.length),
                        (e.allowSlideNext = !e.isLocked),
                        (e.allowSlidePrev = !e.isLocked),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                        t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(a.direction),
                        a.freeMode && s.push("free-mode"),
                        F.flexbox || s.push("no-flexbox"),
                        a.autoHeight && s.push("autoheight"),
                        e && s.push("rtl"),
                        1 < a.slidesPerColumn && s.push("multirow"),
                        m.android && s.push("android"),
                        m.ios && s.push("ios"),
                        (I.isIE || I.isEdge) && (F.pointerEvents || F.prefixedPointerEvents) && s.push("wp8-" + a.direction),
                        s.forEach(function (e) {
                            t.push(a.containerModifierClass + e);
                        }),
                        i.addClass(t.join(" "));
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "));
                },
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;
                    function o() {
                        r && r();
                    }
                    e.complete && s ? o() : t ? (((n = new Y.Image()).onload = o), (n.onerror = o), i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        E = {},
        S = (function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--; ) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? (s = a[0]) : ((t = (e = a)[0]), (s = e[1])),
                    s || (s = {}),
                    (s = V.extend({}, s)),
                    t && !s.el && (s.el = t),
                    u.call(this, s),
                    Object.keys(T).forEach(function (t) {
                        Object.keys(T[t]).forEach(function (e) {
                            h.prototype[e] || (h.prototype[e] = T[t][e]);
                        });
                    });
                var r = this;
                void 0 === r.modules && (r.modules = {}),
                    Object.keys(r.modules).forEach(function (e) {
                        var t = r.modules[e];
                        if (t.params) {
                            var a = Object.keys(t.params)[0],
                                i = t.params[a];
                            if ("object" != typeof i || null === i) return;
                            if (!(a in s && "enabled" in i)) return;
                            !0 === s[a] && (s[a] = { enabled: !0 }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 });
                        }
                    });
                var n = V.extend({}, x);
                r.useModulesParams(n), (r.params = V.extend({}, n, E, s)), (r.originalParams = V.extend({}, r.params)), (r.passedParams = V.extend({}, s));
                var o = (r.$ = L)(r.params.el);
                if ((t = o[0])) {
                    if (1 < o.length) {
                        var l = [];
                        return (
                            o.each(function (e, t) {
                                var a = V.extend({}, s, { el: t });
                                l.push(new h(a));
                            }),
                            l
                        );
                    }
                    (t.swiper = r), o.data("swiper", r);
                    var d,
                        p,
                        c = o.children("." + r.params.wrapperClass);
                    return (
                        V.extend(r, {
                            $el: o,
                            el: t,
                            $wrapperEl: c,
                            wrapperEl: c[0],
                            classNames: [],
                            slides: L(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === r.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === r.params.direction;
                            },
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                            wrongRTL: "-webkit-box" === c.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: r.params.allowSlideNext,
                            allowSlidePrev: r.params.allowSlidePrev,
                            touchEvents:
                                ((d = ["touchstart", "touchmove", "touchend"]),
                                (p = ["mousedown", "mousemove", "mouseup"]),
                                F.pointerEvents ? (p = ["pointerdown", "pointermove", "pointerup"]) : F.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                (r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }),
                                (r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
                                F.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: V.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: r.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        r.useModules(),
                        r.params.init && r.init(),
                        r
                    );
                }
            }
            u && (h.__proto__ = u);
            var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return (
                (((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && ((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0));
                        for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && ((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0));
                    } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (h.prototype.update = function () {
                    var a = this;
                    if (a && !a.destroyed) {
                        var e = a.snapGrid,
                            t = a.params;
                        t.breakpoints && a.setBreakpoint(),
                            a.updateSize(),
                            a.updateSlides(),
                            a.updateProgress(),
                            a.updateSlidesClasses(),
                            a.params.freeMode
                                ? (i(), a.params.autoHeight && a.updateAutoHeight())
                                : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
                            t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
                            a.emit("update");
                    }
                    function i() {
                        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                        a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
                    }
                }),
                (h.prototype.init = function () {
                    var e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                        e.params.breakpoints && e.setBreakpoint(),
                        e.addClasses(),
                        e.params.loop && e.loopCreate(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.params.watchOverflow && e.checkOverflow(),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.params.preloadImages && e.preloadImages(),
                        e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                        e.attachEvents(),
                        (e.initialized = !0),
                        e.emit("init"));
                }),
                (h.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a = this,
                        i = a.params,
                        s = a.$el,
                        r = a.$wrapperEl,
                        n = a.slides;
                    return (
                        void 0 === a.params ||
                            a.destroyed ||
                            (a.emit("beforeDestroy"),
                            (a.initialized = !1),
                            a.detachEvents(),
                            i.loop && a.loopDestroy(),
                            t &&
                                (a.removeClasses(),
                                s.removeAttr("style"),
                                r.removeAttr("style"),
                                n &&
                                    n.length &&
                                    n
                                        .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                        .removeAttr("style")
                                        .removeAttr("data-swiper-slide-index")
                                        .removeAttr("data-swiper-column")
                                        .removeAttr("data-swiper-row")),
                            a.emit("destroy"),
                            Object.keys(a.eventsListeners).forEach(function (e) {
                                a.off(e);
                            }),
                            !1 !== e && ((a.$el[0].swiper = null), a.$el.data("swiper", null), V.deleteProps(a)),
                            (a.destroyed = !0)),
                        null
                    );
                }),
                (h.extendDefaults = function (e) {
                    V.extend(E, e);
                }),
                (e.extendedDefaults.get = function () {
                    return E;
                }),
                (e.defaults.get = function () {
                    return x;
                }),
                (e.Class.get = function () {
                    return u;
                }),
                (e.$.get = function () {
                    return L;
                }),
                Object.defineProperties(h, e),
                h
            );
        })(s),
        C = { name: "device", proto: { device: m }, static: { device: m } },
        M = { name: "support", proto: { support: F }, static: { support: F } },
        k = { name: "browser", proto: { browser: I }, static: { browser: I } },
        P = {
            name: "resize",
            create: function () {
                var e = this;
                V.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
                destroy: function () {
                    Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
            },
        },
        z = {
            func: Y.MutationObserver || Y.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new z.func(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                a.emit("observerUpdate", e[0]);
                            };
                            Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0);
                        } else a.emit("observerUpdate", e[0]);
                    });
                i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
            },
            init: function () {
                var e = this;
                if (F.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        $ = {
            name: "observer",
            params: { observer: !1, observeParents: !1 },
            create: function () {
                V.extend(this, { observer: { init: z.init.bind(this), attach: z.attach.bind(this), destroy: z.destroy.bind(this), observers: [] } });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        D = {
            update: function (e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m,
                    g,
                    b,
                    w = t.activeIndex || 0;
                (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), r ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l)) : ((g = i + (s - 1) + o), (b = s + l));
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if ((V.extend(t.virtual, { from: y, to: x, offset: T, slidesGrid: t.slidesGrid }), p === y && c === x && !e)) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: T,
                            from: y,
                            to: x,
                            slides: (function () {
                                for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void E()
                    );
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e));
                }),
                    S.sort(function (e, t) {
                        return t - e;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(v(u[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
                    E();
            },
            renderSlide: function (e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
            },
            appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this;
                if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e];
                    }),
                        (t.virtual.cache = i);
                }
                t.virtual.update(!0), t.slideNext(0);
            },
        },
        O = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create: function () {
                var e = this;
                V.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = { watchSlidesProgress: !0 };
                        V.extend(e.params, t), V.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        A = {
            handle: function (e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || (f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase())))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = Y.innerWidth,
                            o = Y.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (
                            var d = [
                                    [l.left, l.top],
                                    [l.left + t.width, l.top],
                                    [l.left, l.top + t.height],
                                    [l.left + t.width, l.top + t.height],
                                ],
                                p = 0;
                            p < d.length;
                            p += 1
                        ) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
                        }
                        if (!r) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== s && 39 !== s) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), ((39 === s && !a) || (37 === s && a)) && t.slideNext(), ((37 === s && !a) || (39 === s && a)) && t.slidePrev())
                        : ((38 !== s && 40 !== s) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), 40 === s && t.slideNext(), 38 === s && t.slidePrev()),
                        t.emit("keyPress", s);
                }
            },
            enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        },
        N = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function () {
                V.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } });
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var H = {
            lastScrollTime: V.now(),
            event:
                -1 < Y.navigator.userAgent.indexOf("firefox")
                    ? "DOMMouseScroll"
                    : (function () {
                          var e = "onwheel",
                              t = e in f;
                          if (!t) {
                              var a = f.createElement("div");
                              a.setAttribute(e, "return;"), (t = "function" == typeof a[e]);
                          }
                          return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
                      })()
                    ? "wheel"
                    : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1;
            },
            handle: function (e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = H.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        s = n.pixelX * r;
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        s = n.pixelY;
                    }
                else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === s) return !0;
                if ((i.invert && (s = -s), a.params.freeMode)) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (
                        (o >= a.minTranslate() && (o = a.minTranslate()),
                        o <= a.maxTranslate() && (o = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(o),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        ((!l && a.isBeginning) || (!d && a.isEnd)) && a.updateSlidesClasses(),
                        a.params.freeModeSticky &&
                            (clearTimeout(a.mousewheel.timeout),
                            (a.mousewheel.timeout = V.nextTick(function () {
                                a.slideToClosest();
                            }, 300))),
                        a.emit("scroll", t),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                        o === a.minTranslate() || o === a.maxTranslate())
                    )
                        return !0;
                } else {
                    if (60 < V.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if ((a.isEnd && !a.params.loop) || a.animating) {
                                if (i.releaseOnEdges) return !0;
                            } else a.slideNext(), a.emit("scroll", t);
                        else if ((a.isBeginning && !a.params.loop) || a.animating) {
                            if (i.releaseOnEdges) return !0;
                        } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = new Y.Date().getTime();
                }
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
            },
            enable: function () {
                var e = this;
                if (!H.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", e.mousewheel.handleMouseEnter),
                    t.on("mouseleave", e.mousewheel.handleMouseLeave),
                    t.on(H.event, e.mousewheel.handle),
                    (e.mousewheel.enabled = !0)
                );
            },
            disable: function () {
                var e = this;
                if (!H.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
            },
        },
        G = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                        i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function (e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function () {
                var e,
                    t,
                    a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl && ((e = L(i.nextEl)), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
                    i.prevEl && ((t = L(i.prevEl)), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
                    e && 0 < e.length && e.on("click", a.navigation.onNextClick),
                    t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
                    V.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
            },
        },
        B = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r,
                        a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                              n - 1 < r && (r -= n),
                              r < 0 && "bullets" !== e.params.paginationType && (r = n + r))
                            : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                        "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length)
                    ) {
                        var o,
                            l,
                            d,
                            p = e.pagination.bullets;
                        if (
                            (s.dynamicBullets &&
                                ((e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                                1 < s.dynamicMainBullets &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                                (o = r - e.pagination.dynamicBulletIndex),
                                (d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2)),
                            p.removeClass(
                                s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"
                            ),
                            1 < i.length)
                        )
                            p.each(function (e, t) {
                                var a = L(t),
                                    i = a.index();
                                i === r && a.addClass(s.bulletActiveClass),
                                    s.dynamicBullets &&
                                        (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"),
                                        i === o &&
                                            a
                                                .prev()
                                                .addClass(s.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(s.bulletActiveClass + "-prev-prev"),
                                        i === l &&
                                            a
                                                .next()
                                                .addClass(s.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(s.bulletActiveClass + "-next-next"));
                            });
                        else if ((p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev")
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev-prev"),
                                u
                                    .next()
                                    .addClass(s.bulletActiveClass + "-next")
                                    .next()
                                    .addClass(s.bulletActiveClass + "-next-next");
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px");
                        }
                    }
                    if (("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type)) {
                        var g;
                        g = s.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? (w = b) : (y = b),
                            i
                                .find("." + s.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")")
                                .transition(e.params.speed);
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                        i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                            t.renderBullet ? (s += t.renderBullet.call(e, n, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                        i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
                    }
                    "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length &&
                        (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)),
                        "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                        t.addClass(e.modifierClass + e.type),
                        "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), (a.pagination.dynamicBulletIndex = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                            t.on("click", "." + e.bulletClass, function (e) {
                                e.preventDefault();
                                var t = L(this).index() * a.params.slidesPerGroup;
                                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
                            }),
                        V.extend(a.pagination, { $el: t, el: t[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
                }
            },
        },
        X = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? (0 < (p = -p) ? ((d = s - p), (p = 0)) : r < -p + s && (d = r + p)) : p < 0 ? ((d = s + p), (p = 0)) : r < p + s && (d = r - p),
                        e.isHorizontal()
                            ? (F.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), (n[0].style.width = d + "px"))
                            : (F.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), (n[0].style.height = d + "px")),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (a[0].style.width = s + "px") : (a[0].style.height = s + "px"),
                        (i[0].style.display = 1 <= n ? "none" : ""),
                        e.params.scrollbarHide && (i[0].style.opacity = 0),
                        V.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }),
                        t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
                }
            },
            setDragPosition: function (e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                (t =
                    ((a.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY) -
                        r.offset()[a.isHorizontal() ? "left" : "top"] -
                        n / 2) /
                    (o - n)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = V.nextTick(function () {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideToClosest());
            },
            enableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!F.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                        o = !(!F.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                    F.touch
                        ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o))
                        : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
                }
            },
            disableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!F.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                        o = !(!F.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                    F.touch
                        ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o))
                        : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && ((r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>')), s.append(r)), V.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        R = {
            setTransform: function (e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (
                    (n || o ? ((n = n || "0"), (o = o || "0")) : this.isHorizontal() ? ((n = r), (o = "0")) : ((o = r), (n = "0")),
                    (n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px"),
                    (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px"),
                    null != d)
                ) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p;
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
                }
            },
            setTranslate: function () {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, s);
                }),
                    t.each(function (e, t) {
                        var a = t.progress;
                        1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)),
                            (a = Math.min(Math.max(a, -1), 1)),
                            L(t)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each(function (e, t) {
                                    i.parallax.setTransform(t, a);
                                });
                    });
            },
            setTransition: function (s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i);
                });
            },
        },
        q = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !F.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureTouched = !0), (s.scaleStart = q.getDistanceBetweenTouches(e));
                }
                (s.$slideEl && s.$slideEl.length) ||
                ((s.$slideEl = L(e.target).closest(".swiper-slide")),
                0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
                (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
                (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
                (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                0 !== s.$imageWrapEl.length)
                    ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
                    : (s.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!F.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (a.fakeGestureMoved = !0), (i.scaleMove = q.getDistanceBetweenTouches(e));
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (F.gestures ? (this.zoom.scale = e.scale * a.currentScale) : (a.scale = (i.scaleMove / i.scaleStart) * a.currentScale),
                    a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
                    a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
                    i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!F.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !m.android)) return;
                    (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
                    i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                    (a.currentScale = a.scale),
                    (a.isScaling = !1),
                    1 === a.scale && (i.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl &&
                    0 !== a.$imageEl.length &&
                    (i.isTouched ||
                        (m.android && e.preventDefault(),
                        (i.isTouched = !0),
                        (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved && !a.isScaling)
                        ) {
                            if (t.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                return void (s.isTouched = !1);
                            if (!t.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                            (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), (t.$slideEl = void 0), (t.$imageEl = void 0), (t.$imageWrapEl = void 0), (e.scale = 1), (e.currentScale = 1));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r,
                    n,
                    o,
                    l,
                    d,
                    p,
                    c,
                    u,
                    h,
                    v,
                    f,
                    m,
                    g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || ((y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex)), (y.$imageEl = y.$slideEl.find("img, svg, canvas")), (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
                y.$imageEl && 0 !== y.$imageEl.length) &&
                    (y.$slideEl.addClass("" + w.zoomedSlideClass),
                    void 0 === x.touchesStart.x && e
                        ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
                    (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    (b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    e
                        ? ((f = y.$slideEl[0].offsetWidth),
                          (m = y.$slideEl[0].offsetHeight),
                          (i = y.$slideEl.offset().left + f / 2 - t),
                          (s = y.$slideEl.offset().top + m / 2 - a),
                          (o = y.$imageEl[0].offsetWidth),
                          (l = y.$imageEl[0].offsetHeight),
                          (d = o * b.scale),
                          (p = l * b.scale),
                          (h = -(c = Math.min(f / 2 - d / 2, 0))),
                          (v = -(u = Math.min(m / 2 - p / 2, 0))),
                          (r = i * b.scale) < c && (r = c),
                          h < r && (r = h),
                          (n = s * b.scale) < u && (n = u),
                          v < n && (n = v))
                        : (n = r = 0),
                    y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
                    y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || ((i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex)), (i.$imageEl = i.$slideEl.find("img, svg, canvas")), (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + a.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function () {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    F.gestures
                        ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                          e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                          e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                        e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    F.gestures
                        ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                          e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                          e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                        e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                }
            },
        },
        W = {
            loadInSlide: function (e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
                        0 !== t.length &&
                            t.each(function (e, t) {
                                var i = L(t);
                                i.addClass(p.loadingClass);
                                var s = i.attr("data-background"),
                                    r = i.attr("data-src"),
                                    n = i.attr("data-srcset"),
                                    o = i.attr("data-sizes");
                                d.loadImage(i[0], r || s, n, o, !1, function () {
                                    if (null != d && d && (!d || d.params) && !d.destroyed) {
                                        if (
                                            (s
                                                ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background"))
                                                : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))),
                                            i.addClass(p.loadedClass).removeClass(p.loadingClass),
                                            c.find("." + p.preloaderClass).remove(),
                                            d.params.loop && l)
                                        ) {
                                            var e = c.attr("data-swiper-slide-index");
                                            if (c.hasClass(d.params.slideDuplicateClass)) {
                                                var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                                d.lazy.loadInSlide(t.index(), !1);
                                            } else {
                                                var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                d.lazy.loadInSlide(a.index(), !1);
                                            }
                                        }
                                        d.emit("lazyImageReady", c[0], i[0]);
                                    }
                                }),
                                    d.emit("lazyImageLoad", c[0], i[0]);
                            });
                }
            },
            load: function () {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;
                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (s[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
                }
                if (("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                    t.children("." + a.slideVisibleClass).each(function (e, t) {
                        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                        i.lazy.loadInSlide(a);
                    });
                else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b));
                    }
            },
        },
        j = {
            LinearSpline: function (e, t) {
                var a,
                    i,
                    s,
                    r,
                    n,
                    o = function (e, t) {
                        for (i = -1, a = e.length; 1 < a - i; ) e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                        return a;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((n = o(this.x, e)), (r = n - 1), ((e - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var a,
                    i,
                    s = this,
                    r = s.controller.control;
                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), (i = -s.controller.spline.interpolate(-t))),
                        (i && "container" !== s.params.controller.by) || ((a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate())), (i = (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse && (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
                else r instanceof S && t !== r && n(r);
            },
            setTransition: function (t, e) {
                var a,
                    i = this,
                    s = i.controller.control;
                function r(e) {
                    e.setTransition(t, i),
                        0 !== t &&
                            (e.transitionStart(),
                            e.params.autoHeight &&
                                V.nextTick(function () {
                                    e.updateAutoHeight();
                                }),
                            e.$wrapperEl.transitionEnd(function () {
                                s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
                            }));
                }
                if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
                else s instanceof S && e !== s && r(s);
            },
        },
        U = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
                        t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
                        t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
                }
            },
            updatePagination: function () {
                var i = this,
                    s = i.params.a11y;
                i.pagination &&
                    i.params.pagination.clickable &&
                    i.pagination.bullets &&
                    i.pagination.bullets.length &&
                    i.pagination.bullets.each(function (e, t) {
                        var a = L(t);
                        i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
                    });
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t,
                    a,
                    i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                    a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
            destroy: function () {
                var e,
                    t,
                    a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
                    a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
                    a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
                    e && e.off("keydown", a.a11y.onEnterKey),
                    t && t.off("keydown", a.a11y.onEnterKey),
                    a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
            },
        },
        K = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!Y.history || !Y.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    (t.initialized = !0),
                        (t.paths = K.getPathValues()),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState));
                }
            },
            destroy: function () {
                this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                (this.history.paths = K.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues: function () {
                var e = Y.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function (e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = K.slugify(a.attr("data-history"));
                    Y.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = Y.history.state;
                    (s && s.value === i) || (this.params.history.replaceState ? Y.history.replaceState({ value: i }, null, i) : Y.history.pushState({ value: i }, null, i));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        _ = {
            onHashCange: function () {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a);
                }
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || "";
                    }
            },
            init: function () {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        Z = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = V.nextTick(function () {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, a));
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
        },
        Q = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    t.transitionEnd(function () {
                        if (!s && a && !a.destroyed) {
                            (s = !0), (a.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t]);
                        }
                    });
                }
            },
        },
        J = {
            setTranslate: function () {
                var e,
                    t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow &&
                    (p
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = L('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: r + "px" }))
                        : 0 === (e = a.find(".swiper-cube-shadow")).length && ((e = L('<div class="swiper-cube-shadow"></div>')), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? ((w = 4 * -g * l), (x = 0)) : (f - 1) % 4 == 0 ? ((w = 0), (x = 4 * -g * l)) : (f - 2) % 4 == 0 ? ((w = l + 4 * g * l), (x = l)) : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        p || ((y = w), (w = 0));
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if ((b <= 1 && -1 < b && ((u = 90 * f + 90 * b), o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows)) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && ((E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>')), v.append(E)),
                            0 === S.length && ((S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>')), v.append(S)),
                            E.length && (E[0].style.opacity = Math.max(-b, 0)),
                            S.length && (S[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
                    d.shadow)
                )
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin((2 * C * Math.PI) / 360) / 2 + Math.cos((2 * C * Math.PI) / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / M,
                            z = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            },
        },
        ee = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if ((e.isHorizontal() ? a && (n = -n) : ((d = l), (o = -n), (n = l = 0)), (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length), e.params.flipEffect.slideShadows)) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && ((p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>')), s.append(p)),
                            0 === c.length && ((c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>')), s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if ((t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    t.eq(i).transitionEnd(function () {
                        if (!r && a && !a.destroyed) {
                            (r = !0), (a.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t]);
                        }
                    });
                }
            },
        },
        te = {
            setTranslate: function () {
                for (
                    var e = this,
                        t = e.width,
                        a = e.height,
                        i = e.slides,
                        s = e.$wrapperEl,
                        r = e.slidesSizesGrid,
                        n = e.params.coverflowEffect,
                        o = e.isHorizontal(),
                        l = e.translate,
                        d = o ? t / 2 - l : a / 2 - l,
                        p = o ? n.rotate : -n.rotate,
                        c = n.depth,
                        u = 0,
                        h = i.length;
                    u < h;
                    u += 1
                ) {
                    var v = i.eq(u),
                        f = r[u],
                        m = ((d - v[0].swiperSlideOffset - f / 2) / f) * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < 0.001 && (x = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(b) < 0.001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if ((v.transform(T), (v[0].style.zIndex = 1 - Math.abs(Math.round(m))), n.slideShadows)) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && ((E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>')), v.append(E)),
                            0 === S.length && ((S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>')), v.append(S)),
                            E.length && (E[0].style.opacity = 0 < m ? m : 0),
                            S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
                    }
                }
                (F.pointerEvents || F.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        ae = {
            init: function () {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a
                    ? ((e.thumbs.swiper = t.swiper), V.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), V.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                    : V.isObject(t.swiper) && ((e.thumbs.swiper = new a(V.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!((i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass)) || null == a)) {
                        var s;
                        if (((s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a), e.params.loop)) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (r = e.activeIndex));
                            var n = e.slides
                                    .eq(r)
                                    .prevAll('[data-swiper-slide-index="' + s + '"]')
                                    .eq(0)
                                    .index(),
                                o = e.slides
                                    .eq(r)
                                    .nextAll('[data-swiper-slide-index="' + s + '"]')
                                    .eq(0)
                                    .index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
                        }
                        e.slideTo(s);
                    }
                }
            },
            update: function (e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s,
                            r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft), (r = a.activeIndex));
                            var n = a.slides
                                    .eq(r)
                                    .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                    .eq(0)
                                    .index(),
                                o = a.slides
                                    .eq(r)
                                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                    .eq(0)
                                    .index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? (s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1) : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if ((1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop))
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d);
                }
            },
        },
        ie = [
            C,
            M,
            k,
            P,
            $,
            O,
            N,
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create: function () {
                    var e = this;
                    V.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: H.enable.bind(e),
                            disable: H.disable.bind(e),
                            handle: H.handle.bind(e),
                            handleMouseEnter: H.handleMouseEnter.bind(e),
                            handleMouseLeave: H.handleMouseLeave.bind(e),
                            lastScrollTime: V.now(),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.mousewheel.enabled && this.mousewheel.enable();
                    },
                    destroy: function () {
                        this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    var e = this;
                    V.extend(e, { navigation: { init: G.init.bind(e), update: G.update.bind(e), destroy: G.destroy.bind(e), onNextClick: G.onNextClick.bind(e), onPrevClick: G.onPrevClick.bind(e) } });
                },
                on: {
                    init: function () {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function () {
                        this.navigation.update();
                    },
                    fromEdge: function () {
                        this.navigation.update();
                    },
                    destroy: function () {
                        this.navigation.destroy();
                    },
                    click: function (e) {
                        var t = this.navigation,
                            a = t.$nextEl,
                            i = t.$prevEl;
                        !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    var e = this;
                    V.extend(e, { pagination: { init: B.init.bind(e), render: B.render.bind(e), update: B.update.bind(e), destroy: B.destroy.bind(e), dynamicBulletIndex: 0 } });
                },
                on: {
                    init: function () {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange: function () {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function () {
                        this.params.loop && (this.pagination.render(), this.pagination.update());
                    },
                    snapGridLengthChange: function () {
                        this.params.loop || (this.pagination.render(), this.pagination.update());
                    },
                    destroy: function () {
                        this.pagination.destroy();
                    },
                    click: function (e) {
                        var t = this;
                        t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function () {
                    var e = this;
                    V.extend(e, {
                        scrollbar: {
                            init: X.init.bind(e),
                            destroy: X.destroy.bind(e),
                            updateSize: X.updateSize.bind(e),
                            setTranslate: X.setTranslate.bind(e),
                            setTransition: X.setTransition.bind(e),
                            enableDraggable: X.enableDraggable.bind(e),
                            disableDraggable: X.disableDraggable.bind(e),
                            setDragPosition: X.setDragPosition.bind(e),
                            onDragStart: X.onDragStart.bind(e),
                            onDragMove: X.onDragMove.bind(e),
                            onDragEnd: X.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function () {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                    },
                    update: function () {
                        this.scrollbar.updateSize();
                    },
                    resize: function () {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function () {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    V.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                    },
                    init: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTranslate: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTransition: function (e) {
                        this.params.parallax && this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function () {
                    var t = this,
                        a = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                        a[e] = q[e].bind(t);
                    }),
                        V.extend(t, { zoom: a });
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function () {
                        this.zoom.disable();
                    },
                    touchStart: function (e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function (e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function (e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                    },
                    transitionEnd: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    V.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                    },
                    init: function () {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                    },
                    scroll: function () {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                    },
                    resize: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function () {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd: function () {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create: function () {
                    var e = this;
                    V.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: j.getInterpolateFunction.bind(e), setTranslate: j.setTranslate.bind(e), setTransition: j.setTransition.bind(e) } });
                },
                on: {
                    update: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    resize: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    observerUpdate: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    setTranslate: function (e, t) {
                        this.controller.control && this.controller.setTranslate(e, t);
                    },
                    setTransition: function (e, t) {
                        this.controller.control && this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create: function () {
                    var t = this;
                    V.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                        Object.keys(U).forEach(function (e) {
                            t.a11y[e] = U[e].bind(t);
                        });
                },
                on: {
                    init: function () {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate: function () {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy: function () {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create: function () {
                    var e = this;
                    V.extend(e, { history: { init: K.init.bind(e), setHistory: K.setHistory.bind(e), setHistoryPopState: K.setHistoryPopState.bind(e), scrollToSlide: K.scrollToSlide.bind(e), destroy: K.destroy.bind(e) } });
                },
                on: {
                    init: function () {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function () {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function () {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create: function () {
                    var e = this;
                    V.extend(e, { hashNavigation: { initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e) } });
                },
                on: {
                    init: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.init();
                    },
                    destroy: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                    },
                    transitionEnd: function () {
                        this.hashNavigation.initialized && this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function () {
                    var t = this;
                    V.extend(t, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Z.run.bind(t),
                            start: Z.start.bind(t),
                            stop: Z.stop.bind(t),
                            pause: Z.pause.bind(t),
                            onTransitionEnd: function (e) {
                                t &&
                                    !t.destroyed &&
                                    t.$wrapperEl &&
                                    e.target === this &&
                                    (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                                    t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                                    (t.autoplay.paused = !1),
                                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled && this.autoplay.start();
                    },
                    beforeTransitionStart: function (e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop();
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    V.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create: function () {
                    V.extend(this, { cubeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    V.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "flip" === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create: function () {
                    V.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function () {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function () {
                    V.extend(this, { thumbs: { swiper: null, init: ae.init.bind(this), update: ae.update.bind(this), onThumbClick: ae.onThumbClick.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this.params.thumbs;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition: function (e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy: function () {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
    return void 0 === S.use && ((S.use = S.Class.use), (S.installModule = S.Class.installModule)), S.use(ie), S;
});

/*jquery.appear69c8.js*/
(function ($) {
    $.fn.appear = function (fn, options) {
        var settings = $.extend({ data: undefined, one: true, accX: 0, accY: 0 }, options);
        return this.each(function () {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger("appear", settings.data);
                return;
            }
            var w = $(window);
            var check = function () {
                if (!t.is(":visible")) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger("appear", settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function () {
                t.appeared = true;
                if (settings.one) {
                    w.unbind("scroll", check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one("appear", settings.data, modifiedFn);
            else t.bind("appear", settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            check();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) $.fn.appear.checks[length]();
        },
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        },
    });
    $.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function () {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            };
        }
    });
})(jQuery);

/*jquery.waitforimages69c8.js*/
/*!waitForImages jQuery Plugin 2018-02-13*/ !(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
})(function (a) {
    var b = "waitForImages",
        c = (function (a) {
            return a.srcset && a.sizes;
        })(new Image());
    (a.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"], hasImageAttributes: ["srcset"] }),
        (a.expr.pseudos["has-src"] = function (b) {
            return a(b).is('img[src][src!=""]');
        }),
        (a.expr.pseudos.uncached = function (b) {
            return !!a(b).is(":has-src") && !b.complete;
        }),
        (a.fn.waitForImages = function () {
            var d,
                e,
                f,
                g = 0,
                h = 0,
                i = a.Deferred(),
                j = this,
                k = [],
                l = a.waitForImages.hasImageProperties || [],
                m = a.waitForImages.hasImageAttributes || [],
                n = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (
                (a.isPlainObject(arguments[0])
                    ? ((f = arguments[0].waitForAll), (e = arguments[0].each), (d = arguments[0].finished))
                    : 1 === arguments.length && "boolean" === a.type(arguments[0])
                    ? (f = arguments[0])
                    : ((d = arguments[0]), (e = arguments[1]), (f = arguments[2])),
                (d = d || a.noop),
                (e = e || a.noop),
                (f = !!f),
                !a.isFunction(d) || !a.isFunction(e))
            )
                throw new TypeError("An invalid callback was supplied.");
            return (
                this.each(function () {
                    var b = a(this);
                    f
                        ? b
                              .find("*")
                              .addBack()
                              .each(function () {
                                  var b = a(this);
                                  b.is("img:has-src") && !b.is("[srcset]") && k.push({ src: b.attr("src"), element: b[0] }),
                                      a.each(l, function (a, c) {
                                          var d,
                                              e = b.css(c);
                                          if (!e) return !0;
                                          for (; (d = n.exec(e)); ) k.push({ src: d[2], element: b[0] });
                                      }),
                                      a.each(m, function (a, c) {
                                          var d = b.attr(c);
                                          return !d || void k.push({ src: b.attr("src"), srcset: b.attr("srcset"), element: b[0] });
                                      });
                              })
                        : b.find("img:has-src").each(function () {
                              k.push({ src: this.src, element: this });
                          });
                }),
                (g = k.length),
                (h = 0),
                0 === g && (d.call(j), i.resolveWith(j)),
                a.each(k, function (f, k) {
                    var l = new Image(),
                        m = "load." + b + " error." + b;
                    a(l).one(m, function b(c) {
                        var f = [h, g, "load" == c.type];
                        if ((h++, e.apply(k.element, f), i.notifyWith(k.element, f), a(this).off(m, b), h == g)) return d.call(j[0]), i.resolveWith(j[0]), !1;
                    }),
                        c && k.srcset && ((l.srcset = k.srcset), (l.sizes = k.sizes)),
                        (l.src = k.src);
                }),
                i.promise()
            );
        });
});

/*banquet-core-min69c8.js*/
!(function (t) {
    "use strict";
    (window.qodefCore = {}),
        (qodefCore.body = t("body")),
        t(document).ready(function () {
            e.init(), n.init();
        });
    var a = {
        disable: function () {
            window.addEventListener && window.addEventListener("wheel", a.preventDefaultValue, { passive: !1 }), (document.onkeydown = a.keyDown);
        },
        enable: function () {
            window.removeEventListener && window.removeEventListener("wheel", a.preventDefaultValue, { passive: !1 }), (window.onmousewheel = document.onmousewheel = document.onkeydown = null);
        },
        preventDefaultValue: function (e) {
            (e = e || window.event).preventDefault && e.preventDefault(), (e.returnValue = !1);
        },
        keyDown: function (e) {
            for (var o = [37, 38, 39, 40], n = o.length; n--; ) if (e.keyCode === o[n]) return void a.preventDefaultValue(e);
        },
    };
    qodefCore.qodefScroll = a;
    var o = {
        init: function (e) {
            e.length && o.qodefInitScroll(e);
        },
        qodefInitScroll: function (e) {
            var o = new PerfectScrollbar(e.selector, { wheelSpeed: 0.6, suppressScrollX: !0 });
            t(window).resize(function () {
                o.update();
            });
        },
    };
    qodefCore.qodefPerfectScrollbar = o;
    var e = {
            init: function () {
                var e;
                (this.holder = t("#banquet-core-page-inline-style")), !this.holder.length || ((e = this.holder.data("style")).length && t("head").append('<style type="text/css">' + e + "</style>"));
            },
        },
        n = {
            init: function () {
                var e, o, n;
                (this.holder = t(".qodef--page-has-borders")),
                    this.holder.length &&
                        ((o = (e = t("#qodef-page-header .qodef-widget-holder")).children().last()),
                        (n = t(".qodef-fullscreen-menu-opener")),
                        t(".qodef-header-logo-link").wrap('<div class="qodef-header-logo-wrapper">'),
                        o.length && e.is(":last-child") ? o.wrap('<div class="qodef-last-widget-wrapper">') : n.length && n.wrap('<div class="qodef-fullscreen-menu-opener-outer">'));
            },
        };
})(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                (this.holder = a("#qodef-back-to-top")),
                    this.holder.length &&
                        (this.holder.on("click", function (e) {
                            e.preventDefault(), a("html, body").animate({ scrollTop: 0 }, a(window).scrollTop() / 4, "swing");
                        }),
                        i.showHideBackToTop());
            },
            showHideBackToTop: function () {
                a(window).scroll(function () {
                    var e = a(this),
                        o = e.scrollTop(),
                        n = e.height(),
                        t = 0 < o ? o + n / 2 : 1;
                    t < 1e3 ? i.addClass("off") : i.addClass("on");
                });
            },
            addClass: function (e) {
                this.holder.removeClass("qodef--off qodef--on"), "on" === e ? this.holder.addClass("qodef--on") : this.holder.addClass("qodef--off");
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            t.init(), e.init();
        }),
            n(window).resize(function () {
                e.init();
            });
        var t = {
                init: function () {
                    var e = n("a.qodef-fullscreen-menu-opener"),
                        o = n(".qodef-fullscreen-menu-holder nav ul li a");
                    e.on("click", function (e) {
                        e.preventDefault(),
                            qodef.body.hasClass("qodef-fullscreen-menu--opened")
                                ? t.closeFullscreen()
                                : (t.openFullscreen(),
                                  n(document).keyup(function (e) {
                                      27 === e.keyCode && t.closeFullscreen();
                                  }));
                    }),
                        window.matchMedia("(max-width: 680px)").matches &&
                            o.on("tap click", function (e) {
                                var o = n(this);
                                o.parent().hasClass("menu-item-has-children") ? (e.preventDefault(), t.clickItemWithChild(o)) : "http://#" !== n(this).attr("href") && "#" !== n(this).attr("href") && t.closeFullscreen();
                            });
                },
                openFullscreen: function () {
                    qodef.body.removeClass("qodef-fullscreen-menu-animate--out").addClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in"), qodefCore.qodefScroll.disable();
                },
                closeFullscreen: function () {
                    qodef.body.removeClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in").addClass("qodef-fullscreen-menu-animate--out"),
                        qodefCore.qodefScroll.enable(),
                        n("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200);
                },
                clickItemWithChild: function (e) {
                    var o = e.parent(),
                        n = o.find(".sub-menu").first();
                    n.is(":visible") ? n.slideUp(300) : (n.slideDown(300), o.siblings().find(".sub-menu").slideUp(400));
                },
            },
            e = {
                init: function () {
                    var e = n(".qodef-fullscreen-menu-holder nav ul").width();
                    n(".qodef-fullscreen-menu-holder nav ul ul").each(function () {
                        n(this).width(e);
                    });
                },
            };
    })(jQuery),
    (function () {
        "use strict";
        jQuery(document).ready(function () {
            e.init();
        });
        var e = {
            appearanceType: function () {
                return -1 !== qodef.body.attr("class").indexOf("qodef-header-appearance--") ? qodef.body.attr("class").match(/qodef-header-appearance--([\w]+)/)[1] : "";
            },
            init: function () {
                var e = this.appearanceType();
                "" !== e && "none" !== e && window.qodef[e + "HeaderAppearance"]();
            },
        };
    })(),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            a.init();
        });
        var a = {
            init: function () {
                var e, o, n;
                qodef.body.hasClass("qodef-mobile-header-appearance--sticky") &&
                    ((e = qodef.scroll),
                    (o = qodefGlobal.vars.mobileHeaderHeight + qodefGlobal.vars.adminBarHeight),
                    (n = t("#qodef-page-outer")),
                    a.showHideMobileHeader(e, o, n),
                    t(window).scroll(function () {
                        a.showHideMobileHeader(e, o, n), (e = qodef.scroll);
                    }),
                    t(window).resize(function () {
                        n.css("padding-top", 0), a.showHideMobileHeader(e, o, n);
                    }));
            },
            showHideMobileHeader: function (e, o, n) {
                qodef.windowWidth <= 1024 &&
                    (qodef.scroll > 2 * o
                        ? (qodef.body.addClass("qodef-mobile-header--sticky"),
                          setTimeout(function () {
                              qodef.body.addClass("qodef-mobile-header--sticky-animation");
                          }, 300),
                          n.css("padding-top", qodefGlobal.vars.mobileHeaderHeight))
                        : (qodef.body.removeClass("qodef-mobile-header--sticky"),
                          setTimeout(function () {
                              qodef.body.removeClass("qodef-mobile-header--sticky-animation");
                          }, 300),
                          n.css("padding-top", 0)),
                    (qodef.scroll > e && qodef.scroll > o) || qodef.scroll < 3 * o ? qodef.body.removeClass("qodef-mobile-header--sticky-display") : qodef.body.addClass("qodef-mobile-header--sticky-display"));
            },
        };
    })(jQuery),
    (function (s) {
        "use strict";
        s(document).ready(function () {
            e.init(), e.wideDropdownPosition(), e.dropdownPosition();
        });
        var e = {
            wideDropdownPosition: function () {
                var e = s(".qodef-header-navigation > ul > li.qodef-menu-item--wide");
                e.length &&
                    e.each(function () {
                        var e,
                            o,
                            n = s(this).find(".qodef-drop-down-second");
                        n.length &&
                            (n.css("left", 0),
                            (e = n.offset().left),
                            qodefCore.body.hasClass("qodef--boxed")
                                ? ((o = s(".qodef--boxed .qodef-wrapper .qodef-wrapper-inner").outerWidth()), (e -= (qodefCore.windowWidth - o) / 2), n.css({ left: -e, width: o }))
                                : qodefCore.body.hasClass("qodef-drop-down-second--full-width")
                                ? n.css({ left: -e })
                                : n.css({ left: -e + (qodefCore.windowWidth - n.width()) / 2 }));
                    });
            },
            dropdownPosition: function () {
                var e = s(".qodef-header-navigation > ul > li.qodef-menu-item--narrow.menu-item-has-children"),
                    r = s(".qodef-last-widget-wrapper");
                e.length &&
                    e.each(function () {
                        var e,
                            o = s(this),
                            n = o.offset().left + r.width(),
                            t = o.find(".qodef-drop-down-second"),
                            a = t.find(".qodef-drop-down-second-inner ul"),
                            i = a.outerWidth(),
                            d = s(window).width() - n;
                        0 < o.find("li.menu-item-has-children").length && (e = d - i),
                            t.removeClass("qodef-drop-down--right"),
                            a.removeClass("qodef-drop-down--right"),
                            (d < i || e < i) && (t.addClass("qodef-drop-down--right"), a.addClass("qodef-drop-down--right"));
                    });
            },
            init: function () {
                s(".qodef-header-navigation > ul > li").each(function () {
                    var a = s(this);
                    a.find(".qodef-drop-down-second").length &&
                        a.waitForImages(function () {
                            var e,
                                o,
                                n = a.find(".qodef-drop-down-second"),
                                t = n.find(".qodef-drop-down-second-inner ul").outerHeight();
                            navigator.userAgent.match(/(iPod|iPhone|iPad)/)
                                ? a
                                      .on("touchstart mouseenter", function () {
                                          n.css({ height: t, overflow: "visible", visibility: "visible", opacity: "1" });
                                      })
                                      .on("mouseleave", function () {
                                          n.css({ height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0" });
                                      })
                                : qodefCore.body.hasClass("qodef-drop-down-second--animate-height")
                                ? ((e = {
                                      interval: 0,
                                      over: function () {
                                          setTimeout(function () {
                                              n.addClass("qodef-drop-down--start").css({ visibility: "visible", height: "0", opacity: "1" }),
                                                  n.stop().animate({ height: t }, 400, "easeInOutQuint", function () {
                                                      n.css("overflow", "visible");
                                                  });
                                          }, 100);
                                      },
                                      timeout: 100,
                                      out: function () {
                                          n.stop().animate({ height: "0", opacity: 0 }, 100, function () {
                                              n.css({ overflow: "hidden", visibility: "hidden" });
                                          }),
                                              n.removeClass("qodef-drop-down--start");
                                      },
                                  }),
                                  a.hoverIntent(e))
                                : ((o = {
                                      interval: 0,
                                      over: function () {
                                          setTimeout(function () {
                                              n.addClass("qodef-drop-down--start").stop().css({ height: t });
                                          }, 150);
                                      },
                                      timeout: 150,
                                      out: function () {
                                          n.stop().css({ height: "0" }).removeClass("qodef-drop-down--start");
                                      },
                                  }),
                                  a.hoverIntent(o));
                        });
                });
            },
        };
    })(jQuery),
    (function (t) {
        "use strict";
        t(window).on("load", function () {
            d.init();
        });
        var d = {
            init: function (e) {
                (this.$sections = t(".qodef-parallax")), t.extend(this.$sections, e);
                var o = !qodef.html.hasClass("touchevents") && !qodef.body.hasClass("qodef-browser--edge") && !qodef.body.hasClass("qodef-browser--ms-explorer");
                this.$sections.length &&
                    o &&
                    this.$sections.each(function () {
                        d.ready(t(this));
                    });
            },
            ready: function (e) {
                (e.$imgHolder = e.find(".qodef-parallax-img-holder")), (e.$imgWrapper = e.find(".qodef-parallax-img-wrapper")), (e.$img = e.find("img"));
                var o = e.height(),
                    n = e.$imgWrapper.height();
                (e.movement = (100 * (n - o)) / o / 2),
                    (e.buffer = window.pageYOffset),
                    (e.scrollBuffer = null),
                    requestAnimationFrame(function () {
                        e.$imgHolder.animate({ opacity: 1 }, 100), d.calc(e), d.loop(e);
                    }),
                    t(window).on("resize", function () {
                        d.calc(e);
                    });
            },
            calc: function (e) {
                var o = e.$imgWrapper.height(),
                    n = e.$imgWrapper.width();
                e.$img.width() < n && e.$img.css({ width: "100%", height: "auto" }), e.$img.height() < o && e.$img.css({ height: "100%", width: "auto", "max-width": "unset" });
            },
            loop: function (e) {
                if (e.scrollBuffer === Math.round(window.pageYOffset))
                    return (
                        requestAnimationFrame(function () {
                            d.loop(e);
                        }),
                        !1
                    );
                e.scrollBuffer = Math.round(window.pageYOffset);
                var o,
                    n,
                    t = window.outerHeight,
                    a = e.offset().top,
                    i = e.height();
                e.scrollBuffer + 1.2 * t > a &&
                    e.scrollBuffer < a + i &&
                    ((n = ((o = (Math.abs(e.scrollBuffer + t - a) / (t + i)).toFixed(4)) * e.movement).toFixed(4)), e.buffer !== o && e.$imgWrapper.css("transform", "translate3d(0," + n + "%, 0)"), (e.buffer = o)),
                    requestAnimationFrame(function () {
                        d.loop(e);
                    });
            },
        };
    })(jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            a.init();
        });
        var a = {
            init: function () {
                var e = t("a.qodef-side-area-opener"),
                    o = t("#qodef-side-area-close"),
                    n = t("#qodef-side-area");
                a.openerHoverColor(e),
                    e.on("click", function (e) {
                        e.preventDefault(),
                            qodef.body.hasClass("qodef-side-area--opened")
                                ? a.closeSideArea()
                                : (a.openSideArea(),
                                  t(document).keyup(function (e) {
                                      27 === e.keyCode && a.closeSideArea();
                                  }));
                    }),
                    o.on("click", function (e) {
                        e.preventDefault(), a.closeSideArea();
                    }),
                    n.length && "object" == typeof window.qodefCore.qodefPerfectScrollbar && window.qodefCore.qodefPerfectScrollbar.init(n);
            },
            openSideArea: function () {
                var e = t("#qodef-page-wrapper"),
                    o = t(window).scrollTop();
                t(".qodef-side-area-cover").remove(),
                    e.prepend('<div class="qodef-side-area-cover"/>'),
                    qodef.body.removeClass("qodef-side-area-animate--out").addClass("qodef-side-area--opened qodef-side-area-animate--in"),
                    t(".qodef-side-area-cover").on("click", function (e) {
                        e.preventDefault(), a.closeSideArea();
                    }),
                    t(window).scroll(function () {
                        400 < Math.abs(qodef.scroll - o) && a.closeSideArea();
                    });
            },
            closeSideArea: function () {
                qodef.body.removeClass("qodef-side-area--opened qodef-side-area-animate--in").addClass("qodef-side-area-animate--out");
            },
            openerHoverColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-color") &&
                    ((o = e.data("hover-color")),
                    (n = e.css("color")),
                    e
                        .on("mouseenter", function () {
                            e.css("color", o);
                        })
                        .on("mouseleave", function () {
                            e.css("color", n);
                        }));
            },
        };
    })(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                (this.holder = a("#qodef-page-spinner")), this.holder.length && (this.holder.hasClass("qodef-layout--predefined") ? i.animateCustomSpinner(this.holder) : i.animateSpinner(this.holder));
            },
            animateSpinner: function (e) {
                a(window).on("load", function () {
                    i.fadeOutLoader(e);
                });
            },
            animateCustomSpinner: function (e) {
                var o,
                    n = this.holder.find(".qodef-predefined-spinner-text"),
                    t = n.find(".qodef-e-character");
                n.length &&
                    (setTimeout(function () {
                        function e() {
                            t.each(function (e) {
                                t.eq(e).css({ opacity: "1", transition: "1.7s " + 0.1 * e + "s" });
                            }),
                                setTimeout(function () {
                                    t.each(function (e) {
                                        t.eq(e).css({ opacity: "0" });
                                    });
                                }, 1700);
                        }
                        n.css({ opacity: "1" }),
                            e(),
                            (o = setInterval(function () {
                                e();
                            }, 3500));
                    }, 100),
                    a(window).on("load", function () {
                        i.fadeOutLoader(e, 1e3, 6e3),
                            setTimeout(function () {
                                clearInterval(o);
                            }, 6500);
                    }));
            },
            fadeOutLoader: function (o, n, e, t) {
                (n = n || 600),
                    (e = e || 0),
                    (t = t || "swing"),
                    o.delay(e).fadeOut(n, t),
                    a(window).on("bind", "pageshow", function (e) {
                        e.originalEvent.persisted && o.fadeOut(n, t);
                    });
            },
        };
    })(jQuery),
    (function (d) {
        "use strict";
        d(window).on("load", function () {
            r.init();
        });
        var r = {
            init: function () {
                var e, o, n, t, a, i;
                (this.holder = d("#qodef-subscribe-popup-modal")),
                    this.holder.length &&
                        ((e = this.holder.find(".qodef-sp-prevent")),
                        (o = d(".qodef-sp-close")),
                        (n = "no"),
                        e.length &&
                            ((t = this.holder.hasClass("qodef-sp-prevent-cookies")),
                            (a = e.find(".qodef-sp-prevent-input")),
                            (i = a.data("value")),
                            t ? ((n = localStorage.getItem("disabledPopup")), sessionStorage.removeItem("disabledPopup")) : ((n = sessionStorage.getItem("disabledPopup")), localStorage.removeItem("disabledPopup")),
                            e.children().on("click", function (e) {
                                "yes" !== i ? ((i = "yes"), a.addClass("qodef-sp-prevent-clicked").data("value", "yes")) : ((i = "no"), a.removeClass("qodef-sp-prevent-clicked").data("value", "no")),
                                    "yes" === i
                                        ? t
                                            ? localStorage.setItem("disabledPopup", "yes")
                                            : sessionStorage.setItem("disabledPopup", "yes")
                                        : t
                                        ? localStorage.setItem("disabledPopup", "no")
                                        : sessionStorage.setItem("disabledPopup", "no");
                            })),
                        "yes" !== n &&
                            (qodef.body.hasClass("qodef-sp-opened") ? r.handleClassAndScroll("remove") : r.handleClassAndScroll("add"),
                            o.on("click", function (e) {
                                e.preventDefault(), r.handleClassAndScroll("remove");
                            }),
                            d(document).keyup(function (e) {
                                27 === e.keyCode && r.handleClassAndScroll("remove");
                            })));
            },
            handleClassAndScroll: function (e) {
                "remove" === e && (qodef.body.removeClass("qodef-sp-opened"), qodefCore.qodefScroll.enable()), "add" === e && (qodef.body.addClass("qodef-sp-opened"), qodefCore.qodefScroll.disable());
            },
        };
    })(jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            o.init();
        });
        var o = {
            init: function () {
                (this.holder = t(".qodef-accordion")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = t(this);
                            e.hasClass("qodef-behavior--accordion") && o.initAccordion(e), e.hasClass("qodef-behavior--toggle") && o.initToggle(e), e.addClass("qodef--init");
                        });
            },
            initAccordion: function (e) {
                e.accordion({ animate: "swing", collapsible: !0, active: 0, icons: "", heightStyle: "content" });
            },
            initToggle: function (e) {
                var o = e.find(".qodef-accordion-title"),
                    n = o.next();
                e.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),
                    o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"),
                    n.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                    o.each(function () {
                        var e = t(this);
                        e.hover(function () {
                            e.toggleClass("ui-state-hover");
                        }),
                            e.on("click", function () {
                                e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(400);
                            });
                    });
            },
        };
    })(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                (this.buttons = o(".qodef-button")),
                    this.buttons.length &&
                        this.buttons.each(function () {
                            var e = o(this);
                            t.buttonHoverColor(e), t.buttonHoverBgColor(e), t.buttonHoverBorderColor(e);
                        });
            },
            buttonHoverColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-color") &&
                    ((o = e.data("hover-color")),
                    (n = e.css("color")),
                    e.on("mouseenter", function () {
                        t.changeColor(e, "color", o);
                    }),
                    e.on("mouseleave", function () {
                        t.changeColor(e, "color", n);
                    }));
            },
            buttonHoverBgColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-background-color") &&
                    ((o = e.data("hover-background-color")),
                    (n = e.css("background-color")),
                    e.on("mouseenter", function () {
                        t.changeColor(e, "background-color", o);
                    }),
                    e.on("mouseleave", function () {
                        t.changeColor(e, "background-color", n);
                    }));
            },
            buttonHoverBorderColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-border-color") &&
                    ((o = e.data("hover-border-color")),
                    (n = e.css("borderTopColor")),
                    e.on("mouseenter", function () {
                        t.changeColor(e, "border-color", o);
                    }),
                    e.on("mouseleave", function () {
                        t.changeColor(e, "border-color", n);
                    }));
            },
            changeColor: function (e, o, n) {
                e.css(o, n);
            },
        };
    })(jQuery),
    (function (r) {
        "use strict";
        r(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                (this.countdowns = r(".qodef-countdown")),
                    this.countdowns.length &&
                        this.countdowns.each(function () {
                            var e = r(this),
                                o = e.find(".qodef-m-date"),
                                n = t.generateOptions(e);
                            t.initCountdown(o, n);
                        });
            },
            generateOptions: function (e) {
                var o = {};
                return (
                    (o.date = void 0 !== e.data("date") ? e.data("date") : null),
                    (o.weekLabel = void 0 !== e.data("week-label") ? e.data("week-label") : ""),
                    (o.weekLabelPlural = void 0 !== e.data("week-label-plural") ? e.data("week-label-plural") : ""),
                    (o.dayLabel = void 0 !== e.data("day-label") ? e.data("day-label") : ""),
                    (o.dayLabelPlural = void 0 !== e.data("day-label-plural") ? e.data("day-label-plural") : ""),
                    (o.hourLabel = void 0 !== e.data("hour-label") ? e.data("hour-label") : ""),
                    (o.hourLabelPlural = void 0 !== e.data("hour-label-plural") ? e.data("hour-label-plural") : ""),
                    (o.minuteLabel = void 0 !== e.data("minute-label") ? e.data("minute-label") : ""),
                    (o.minuteLabelPlural = void 0 !== e.data("minute-label-plural") ? e.data("minute-label-plural") : ""),
                    (o.secondLabel = void 0 !== e.data("second-label") ? e.data("second-label") : ""),
                    (o.secondLabelPlural = void 0 !== e.data("second-label-plural") ? e.data("second-label-plural") : ""),
                    o
                );
            },
            initCountdown: function (e, o) {
                var n = '<span class="qodef-digit-wrapper"><span class="qodef-digit">%w</span><span class="qodef-label">%!w:' + o.weekLabel + "," + o.weekLabelPlural + ";</span></span>",
                    t = '<span class="qodef-digit-wrapper"><span class="qodef-digit">%d</span><span class="qodef-label">%!d:' + o.dayLabel + "," + o.dayLabelPlural + ";</span></span>",
                    a = '<span class="qodef-digit-wrapper"><span class="qodef-digit">%H</span><span class="qodef-label">%!H:' + o.hourLabel + "," + o.hourLabelPlural + ";</span></span>",
                    i = '<span class="qodef-digit-wrapper"><span class="qodef-digit">%M</span><span class="qodef-label">%!M:' + o.minuteLabel + "," + o.minuteLabelPlural + ";</span></span>",
                    d = '<span class="qodef-digit-wrapper"><span class="qodef-digit">%S</span><span class="qodef-label">%!S:' + o.secondLabel + "," + o.secondLabelPlural + ";</span></span>";
                e.countdown(o.date, function (e) {
                    r(this).html(e.strftime(n + t + a + i + d));
                });
            },
        };
    })(jQuery),
    (function (i) {
        "use strict";
        i(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                (this.counters = i(".qodef-counter")),
                    this.counters.length &&
                        this.counters.each(function () {
                            var e = i(this),
                                o = e.find(".qodef-m-digit"),
                                n = t.generateOptions(e);
                            t.counterScript(o, n);
                        });
            },
            generateOptions: function (e) {
                var o = {};
                return (
                    (o.start = void 0 !== e.data("start-digit") && "" !== e.data("start-digit") ? e.data("start-digit") : 0),
                    (o.end = void 0 !== e.data("end-digit") && "" !== e.data("end-digit") ? e.data("end-digit") : null),
                    (o.step = void 0 !== e.data("step-digit") && "" !== e.data("step-digit") ? e.data("step-digit") : 1),
                    (o.delay = void 0 !== e.data("step-delay") && "" !== e.data("step-delay") ? parseInt(e.data("step-delay"), 10) : 100),
                    (o.txt = void 0 !== e.data("digit-label") && "" !== e.data("digit-label") ? e.data("digit-label") : ""),
                    o
                );
            },
            counterScript: function (e, o) {
                var n = i.extend({ start: 0, end: null, step: 1, delay: 100, txt: "" }, o || {}),
                    t = n.start,
                    a = n.end;
                e.text(t + n.txt);
                setInterval(function () {
                    (null !== a && a <= t) || ((t += n.step), a <= t && (t = a), e.text(t + n.txt));
                }, n.delay);
            },
        };
    })(jQuery),
    (function (e) {
        "use strict";
        e(document).ready(function () {
            o.init();
        });
        var o = {
            init: function () {
                (this.holder = e(".qodef-google-map")),
                    this.holder.length &&
                        this.holder.each(function () {
                            void 0 !== qodefCore.qodefGoogleMap && qodefCore.qodefGoogleMap.initMap(e(this).find(".qodef-m-map"));
                        });
            },
        };
    })(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            a.init();
        });
        var a = {
            init: function () {
                (this.icons = o(".qodef-icon-holder")),
                    this.icons.length &&
                        this.icons.each(function () {
                            var e = o(this);
                            a.iconHoverColor(e), a.iconHoverBgColor(e), a.iconHoverBorderColor(e);
                        });
            },
            iconHoverColor: function (e) {
                var o, n, t;
                void 0 !== e.data("hover-color") &&
                    ((o = e.find("span")),
                    (n = o.css("color")),
                    (t = e.data("hover-color")),
                    e.on("mouseenter", function () {
                        a.changeColor(o, "color", t);
                    }),
                    e.on("mouseleave", function () {
                        a.changeColor(o, "color", n);
                    }));
            },
            iconHoverBgColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-background-color") &&
                    ((o = e.data("hover-background-color")),
                    (n = e.css("background-color")),
                    e.on("mouseenter", function () {
                        a.changeColor(e, "background-color", o);
                    }),
                    e.on("mouseleave", function () {
                        a.changeColor(e, "background-color", n);
                    }));
            },
            iconHoverBorderColor: function (e) {
                var o, n;
                void 0 !== e.data("hover-border-color") &&
                    ((o = e.data("hover-border-color")),
                    (n = e.css("borderTopColor")),
                    e.on("mouseenter", function () {
                        a.changeColor(e, "border-color", o);
                    }),
                    e.on("mouseleave", function () {
                        a.changeColor(e, "border-color", n);
                    }));
            },
            changeColor: function (e, o, n) {
                e.css(o, n);
            },
        };
        qodefCore.qodefIcon = a;
    })(jQuery),
    (function (h) {
        "use strict";
        h(document).ready(function () {
            e.init();
        });
        var e = {
            init: function () {
                var e = h(".qodef-image-with-text.qodef-action--scrolling-image");
                e.length &&
                    e.each(function () {
                        function e() {
                            (o = l.height()),
                                (t = c.height()),
                                (n = l.width()),
                                (a = c.width()),
                                (d = u ? ((i = Math.round(a - n)), 2 * Math.round(a / n)) : ((i = Math.round(t - o)), 2 * Math.round(t / o))),
                                u ? n < a && (f = !0) : o < t && (f = !0);
                        }
                        var o,
                            n,
                            t,
                            a,
                            i,
                            d,
                            r = h(this),
                            s = r.find(".qodef-m-image"),
                            l = r.find(".qodef-e-frame"),
                            c = r.find(".qodef-e-main-image"),
                            f = !1,
                            u = r.hasClass("qodef-scrolling--horizontal");
                        r.waitForImages(function () {
                            r.css("visibility", "visible"),
                                e(),
                                s.mouseenter(function () {
                                    c.css("transition-duration", d + "s"), u ? c.css("transform", "translate3d(-" + i + "px, 0px, 0px)") : c.css("transform", "translate3d(0px, -" + i + "px, 0px)");
                                }),
                                s.mouseleave(function () {
                                    f && (c.css("transition-duration", Math.min(d / 3, 3) + "s"), c.css("transform", "translate3d(0px, 0px, 0px)"));
                                });
                        }),
                            h(window).resize(function () {
                                e();
                            });
                    });
            },
        };
    })(jQuery),
    (function (i) {
        "use strict";
        i(document).ready(function () {
            d.init();
        });
        var d = {
            init: function () {
                (this.holder = i(".qodef-progress-bar")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = i(this),
                                o = e.data("layout"),
                                n = d.generateBarData(e, o),
                                t = "#qodef-m-canvas-" + e.data("rand-number"),
                                a = e.data("number") / 100;
                            switch (o) {
                                case "circle":
                                    d.initCircleBar(t, n, a);
                                    break;
                                case "semi-circle":
                                    d.initSemiCircleBar(t, n, a);
                                    break;
                                case "line":
                                    (a = e.data("number")), (t = e.find(".qodef-m-canvas")), (n = d.generateLineData(e, o, a)), d.initLineBar(t, n);
                                    break;
                                case "custom":
                                    (t = "#" + e.data("custom-shape-id")), d.initCustomBar(t, n, a);
                            }
                        });
            },
            generateBarData: function (e, n) {
                var o = e.data("active-line-width"),
                    t = e.data("active-line-color"),
                    a = e.data("inactive-line-width"),
                    i = e.data("inactive-line-color");
                return {
                    strokeWidth: o,
                    color: t,
                    trailWidth: a,
                    trailColor: i,
                    easing: "linear",
                    duration: 1400,
                    svgStyle: { width: "100%", height: "100%" },
                    text: { style: { color: e.data("text-color") }, autoStyleContainer: !1 },
                    from: { color: i },
                    to: { color: t },
                    step: function (e, o) {
                        "custom" !== n && o.setText(Math.round(100 * o.value()) + "%");
                    },
                };
            },
            generateLineData: function (e, o, n) {
                var t = e.data("active-line-width"),
                    a = e.data("active-line-color"),
                    i = e.data("inactive-line-width");
                return { percentage: n, duration: 800, fillBackgroundColor: a, backgroundColor: e.data("inactive-line-color"), height: t, inactiveHeight: i, followText: !0, textColor: e.data("text-color") };
            },
            initCircleBar: function (e, o, n) {
                var t = new ProgressBar.Circle(e, o);
                i(e).appear(function () {
                    t.animate(n);
                });
            },
            initSemiCircleBar: function (e, o, n) {
                var t = new ProgressBar.SemiCircle(e, o);
                i(e).appear(function () {
                    t.animate(n);
                });
            },
            initCustomBar: function (e, o, n) {
                var t = new ProgressBar.Path(e, o);
                t.set(0),
                    i(e).appear(function () {
                        t.animate(n);
                    });
            },
            initLineBar: function (e, o) {
                i(e).appear(function () {
                    e.LineProgressbar(o);
                });
            },
        };
    })(jQuery),
    (function (i) {
        "use strict";
        i(document).ready(function () {
            e.init();
        });
        var e = {
            init: function () {
                (this.holder = i(".qodef-tabs")),
                    this.holder.length &&
                        this.holder.each(function () {
                            e.initTabs(i(this));
                        });
            },
            initTabs: function (e) {
                e.children(".qodef-tabs-content").each(function (e) {
                    e += 1;
                    var o = i(this),
                        n = o.attr("id"),
                        t = o.parent().find(".qodef-tabs-navigation li:nth-child(" + e + ") a"),
                        a = t.attr("href");
                    -1 < (n = "#" + n).indexOf(a) && t.attr("href", n);
                }),
                    e.addClass("qodef--init").tabs();
            },
        };
    })(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            n.init();
        }),
            o(window).on("load", function () {
                n.initParallaxElements();
            });
        var n = {
            init: function () {
                (this.images = o(".qodef-stacked-images")),
                    this.images.length &&
                        this.images.each(function () {
                            var e = o(this);
                            n.animate(e), n.parallaxElements(e);
                        });
            },
            animate: function (e) {
                var o = e.find(".qodef-m-images");
                setTimeout(function () {
                    e.appear(function () {
                        o.addClass("qodef--appeared");
                    });
                }, 200);
            },
            parallaxElements: function (e) {
                var o = e.find(".qodef-m-images"),
                    n = o.find("img.qodef-e-stack-image"),
                    t = o.find("img.qodef-e-main-image");
                1024 < qodef.windowWidth && (n.attr("data-parallax", '{"y" : -15 , "smoothness": 10}'), t.attr("data-parallax", '{"y" : 30 , "scale": 1 , "smoothness": 30}'));
            },
            initParallaxElements: function () {
                o("[data-parallax]").length && ParallaxScroll.init();
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        var t = {
            showHideHeader: function (e, o) {
                1024 < qodef.windowWidth &&
                    (qodef.scroll <= 0
                        ? (qodef.body.removeClass("qodef-header--fixed-display"), e.css("padding-top", "0"), o.css("margin-top", "0"))
                        : (qodef.body.addClass("qodef-header--fixed-display"),
                          e.css("padding-top", parseInt(qodefGlobal.vars.headerHeight + qodefGlobal.vars.topAreaHeight) + "px"),
                          o.css("margin-top", parseInt(qodefGlobal.vars.topAreaHeight) + "px")));
            },
            init: function () {
                var e = n("#qodef-page-outer"),
                    o = n("#qodef-page-header");
                t.showHideHeader(e, o),
                    n(window).scroll(function () {
                        t.showHideHeader(e, o);
                    }),
                    n(window).resize(function () {
                        e.css("padding-top", "0"), t.showHideHeader(e, o);
                    });
            },
        };
        qodef.fixedHeaderAppearance = t.init;
    })(jQuery),
    (function (o) {
        "use strict";
        var n = {
            displayAmount: function () {
                return 0 !== qodefGlobal.vars.qodefStickyHeaderScrollAmount ? parseInt(qodefGlobal.vars.qodefStickyHeaderScrollAmount) : parseInt(qodefGlobal.vars.headerHeight + qodefGlobal.vars.adminBarHeight);
            },
            showHideHeader: function (e) {
                qodef.scroll < e ? qodef.body.removeClass("qodef-header--sticky-display") : qodef.body.addClass("qodef-header--sticky-display");
            },
            init: function () {
                var e = n.displayAmount();
                n.showHideHeader(e),
                    o(window).scroll(function () {
                        n.showHideHeader(e);
                    });
            },
        };
        qodef.stickyHeaderAppearance = n.init;
    })(jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            a.init();
        });
        var a = {
            init: function () {
                var e = t("a.qodef-search-opener"),
                    o = t(".qodef-fullscreen-search-holder"),
                    n = t(".qodef-search-close");
                e.length &&
                    o.length &&
                    (e.on("click", function (e) {
                        e.preventDefault(), qodef.body.hasClass("qodef-fullscreen-search--opened") ? a.closeFullscreen(o) : a.openFullscreen(o);
                    }),
                    n.on("click", function (e) {
                        e.preventDefault(), a.closeFullscreen(o);
                    }),
                    t(document).keyup(function (e) {
                        27 === e.keyCode && a.closeFullscreen(o);
                    }));
            },
            openFullscreen: function (e) {
                qodef.body.removeClass("qodef-fullscreen-search--fadeout"),
                    qodef.body.addClass("qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"),
                    setTimeout(function () {
                        e.find(".qodef-search-field").focus();
                    }, 900),
                    qodefCore.qodefScroll.disable();
            },
            closeFullscreen: function (e) {
                qodef.body.removeClass("qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"),
                    qodef.body.addClass("qodef-fullscreen-search--fadeout"),
                    setTimeout(function () {
                        e.find(".qodef-search-field").val(""), e.find(".qodef-search-field").blur(), qodef.body.removeClass("qodef-fullscreen-search--fadeout");
                    }, 300),
                    qodefCore.qodefScroll.enable();
            },
        };
    })(jQuery),
    (function (d) {
        "use strict";
        d(document).ready(function () {
            r.init();
        });
        var r = {
            percentNumber: 0,
            init: function () {
                (this.holder = d("#qodef-page-spinner.qodef-layout--progress-bar")), this.holder.length && r.animateSpinner(this.holder);
            },
            animateSpinner: function (e) {
                var o,
                    n = e.find(".qodef-m-spinner-number-label"),
                    t = e.find(".qodef-m-spinner-line-front"),
                    a = !1;
                t.animate({ width: "100%" }, 1e4, "linear");
                var i = setInterval(function () {
                    r.animatePercent(n, r.percentNumber), a && clearInterval(i);
                }, 100);
                d(window).on("load", function () {
                    (a = !0),
                        (o = setInterval(function () {
                            100 <= r.percentNumber
                                ? (clearInterval(o),
                                  t.stop().animate({ width: "100%" }, 500),
                                  setTimeout(function () {
                                      e.addClass("qodef--finished"),
                                          setTimeout(function () {
                                              r.fadeOutLoader(e);
                                          }, 1e3);
                                  }, 600))
                                : r.animatePercent(n, r.percentNumber);
                        }, 6));
                });
            },
            animatePercent: function (e, o) {
                o < 100 && ((o += 5), e.text(o), (r.percentNumber = o));
            },
            fadeOutLoader: function (o, n, e, t) {
                (n = n || 600),
                    (e = e || 0),
                    (t = t || "swing"),
                    o.delay(e).fadeOut(n, t),
                    d(window).on("bind", "pageshow", function (e) {
                        e.originalEvent.persisted && o.fadeOut(n, t);
                    });
            },
        };
    })(jQuery);

    /*main.min69c8.js*/
    !(function (o) {
        "use strict";
        (window.qodef = {}),
            (qodef.windowWidth = o(window).width()),
            (qodef.windowHeight = o(window).height()),
            (qodef.body = o("body")),
            (qodef.html = o("html")),
            (qodef.scroll = 0),
            o(document).ready(function () {
                (qodef.scroll = o(window).scrollTop()), t.init(), i.init(), n.init();
            }),
            o(window).on("load", function () {}),
            o(window).resize(function () {
                (qodef.windowWidth = o(window).width()), (qodef.windowHeight = o(window).height());
            }),
            o(window).scroll(function () {
                qodef.scroll = o(window).scrollTop();
            }),
            o(document).on("banquet_trigger_get_new_posts", function () {
                i.init(), n.init();
            });
        var t = {
                init: function () {
                    t.addBodyClassName();
                },
                isBrowser: function (e) {
                    var i = !1;
                    switch (e) {
                        case "chrome":
                            i = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                            break;
                        case "safari":
                            i = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                            break;
                        case "firefox":
                            i = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
                            break;
                        case "ie":
                            i = 0 < window.navigator.userAgent.indexOf("MSIE ") || !!navigator.userAgent.match(/Trident.*rv\:11\./);
                            break;
                        case "edge":
                            i = /Edge\/\d./i.test(navigator.userAgent);
                    }
                    return i;
                },
                addBodyClassName: function () {
                    o.each(["chrome", "safari", "firefox", "ie", "edge"], function (e, i) {
                        t.isBrowser(i) && void 0 !== qodef.body && ("ie" === i && (i = "ms-explorer"), qodef.body.addClass("qodef-browser--" + i));
                    });
                },
            },
            i = {
                init: function (e) {
                    (this.holder = o(".qodef-swiper-container")),
                        o.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                i.createSlider(o(this));
                            });
                },
                createSlider: function (e) {
                    var i = void 0 !== e.data("options") ? e.data("options") : {},
                        t = void 0 !== i.spaceBetween && "" !== i.spaceBetween ? i.spaceBetween : 0,
                        o = void 0 !== i.slidesPerView && "" !== i.slidesPerView ? i.slidesPerView : 1,
                        n = void 0 !== i.centeredSlides && "" !== i.centeredSlides && i.centeredSlides,
                        a = void 0 === i.loop || "" === i.loop || i.loop,
                        d = void 0 === i.autoplay || "" === i.autoplay || i.autoplay,
                        s = void 0 !== i.speed && "" !== i.speed ? parseInt(i.speed, 10) : 5e3,
                        r = void 0 !== i.speedAnimation && "" !== i.speedAnimation ? parseInt(i.speedAnimation, 10) : 800,
                        l = void 0 !== i.customStages && "" !== i.customStages && i.customStages,
                        f = void 0 !== i.outsideNavigation && "yes" === i.outsideNavigation,
                        c = f ? ".swiper-button-next-" + i.unique : e.find(".swiper-button-next"),
                        h = f ? ".swiper-button-prev-" + i.unique : e.find(".swiper-button-prev"),
                        u = e.find(".swiper-pagination");
                    "false" !== d && 5e3 !== s && (d = { delay: s });
                    var g = void 0 !== i.slidesPerView1440 && "" !== i.slidesPerView1440 ? i.slidesPerView1440 : 5,
                        p = void 0 !== i.slidesPerView1366 && "" !== i.slidesPerView1366 ? i.slidesPerView1366 : 4,
                        m = void 0 !== i.slidesPerView1024 && "" !== i.slidesPerView1024 ? i.slidesPerView1024 : 3,
                        q = void 0 !== i.slidesPerView768 && "" !== i.slidesPerView768 ? i.slidesPerView768 : 2,
                        w = void 0 !== i.slidesPerView680 && "" !== i.slidesPerView680 ? i.slidesPerView680 : 1,
                        v = void 0 !== i.slidesPerView480 && "" !== i.slidesPerView480 ? i.slidesPerView480 : 1;
                    l || (o < 2 ? (q = m = p = g = o) : o < 3 ? (m = p = g = o) : o < 4 ? (p = g = o) : o < 5 && (g = o));
                    new Swiper(e, {
                        slidesPerView: o,
                        centeredSlides: n,
                        spaceBetween: t,
                        autoplay: d,
                        loop: a,
                        speed: r,
                        navigation: { nextEl: c, prevEl: h },
                        pagination: { el: u, type: "bullets", clickable: !0 },
                        breakpoints: { 480: { slidesPerView: v }, 680: { slidesPerView: w }, 768: { slidesPerView: q }, 1024: { slidesPerView: m }, 1366: { slidesPerView: p }, 1440: { slidesPerView: g } },
                        on: {
                            init: function () {
                                e.addClass("qodef-swiper--initialized");
                            },
                        },
                    });
                },
            },
            n = {
                init: function (e) {
                    (this.holder = o(".qodef-magnific-popup")),
                        o.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                var e = o(this);
                                e.hasClass("qodef-popup-item") ? n.initSingleImagePopup(e) : e.hasClass("qodef-popup-gallery") && n.initGalleryPopup(e);
                            });
                },
                initSingleImagePopup: function (e) {
                    var i = e.data("type");
                    e.magnificPopup({ type: i, titleSrc: "title", image: { cursor: null } });
                },
                initGalleryPopup: function (e) {
                    var i = e.find(".qodef-popup-item"),
                        t = n.generateGalleryItems(i);
                    i.each(function (e) {
                        o(this).magnificPopup({ items: t, gallery: { enabled: !0 }, index: e, type: "image", image: { cursor: null } });
                    });
                },
                generateGalleryItems: function (e) {
                    var t = [];
                    return (
                        e.length &&
                            e.each(function () {
                                var e = o(this),
                                    i = { src: e.attr("href"), title: e.attr("title"), type: e.data("type") };
                                t.push(i);
                            }),
                        t
                    );
                },
            };
        qodef.qodefMagnificPopup = n;
    })(jQuery),
        (function (n) {
            "use strict";
            n(document).ready(function () {
                o.init();
            }),
                n(window).on("resize", function () {
                    o.init();
                }),
                n(document).on("banquet_trigger_get_new_posts", function (e, i) {
                    i.hasClass("qodef-blog") && (t.init(i), o.resize(i));
                });
            var t = {
                    init: function (e) {
                        var i = e.find(".wp-video-shortcode, .wp-audio-shortcode").not(".mejs-container");
                        i.length &&
                            i.each(function () {
                                var e = n(this);
                                "function" == typeof e.mediaelementplayer && e.mediaelementplayer();
                            });
                    },
                },
                o = {
                    init: function () {
                        var e = n(".qodef-blog");
                        e.length && o.resize(e);
                    },
                    resize: function (e) {
                        var i = e.find(".qodef-e-media iframe");
                        i.length &&
                            i.each(function () {
                                var e = n(this),
                                    i = e.attr("width"),
                                    t = e.attr("height"),
                                    o = (e.width() / i) * t;
                                e.css("height", o);
                            });
                    },
                };
        })(jQuery),
        (function (u) {
            "use strict";
            u(document).ready(function () {
                g.init();
            }),
                u(document).on("banquet_trigger_get_new_posts", function (e, i) {
                    i.hasClass("qodef-filter--on") && g.setVisibility(i, i.find(".qodef-m-filter-item.qodef--active"), !0);
                });
            var g = {
                init: function (e) {
                    (this.holder = u(".qodef-filter--on")),
                        u.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                var e = u(this),
                                    i = e.find(".qodef-m-filter-item");
                                g.extendListHTML(e), g.clickEvent(e, i);
                            });
                },
                extendListHTML: function (e) {
                    e.children(".qodef-hidden-filter-items").length || g.isMasonryLayout(e) || e.append('<div class="qodef-hidden-filter-items"></div>');
                },
                clickEvent: function (t, o) {
                    o.on("click", function (e) {
                        e.preventDefault();
                        var i = u(this);
                        i.hasClass("qodef--active") || (t.addClass("qodef--filter-loading"), o.removeClass("qodef--active"), i.addClass("qodef--active"), g.setVisibility(t, i));
                    });
                },
                setVisibility: function (e, i, t) {
                    var o = e.children(".qodef-hidden-filter-items"),
                        n = o.length,
                        a = n ? o.children(".qodef-grid-item") : "",
                        d = e.find(".qodef-grid-inner"),
                        s = d.children(".qodef-grid-item"),
                        r = i.data("taxonomy"),
                        l = i.data("filter"),
                        f = "*" === l,
                        c = f ? l : r + "-" + l,
                        h = s.hasClass(c);
                    n && !h && a.hasClass(c) && (h = !0),
                        (t && f) ||
                            (f || h || !g.hasLoadMore(e)
                                ? (g.isMasonryLayout(e)
                                      ? d.isotope({ filter: f ? "" : "." + c })
                                      : (f ||
                                            s.each(function () {
                                                var e = u(this);
                                                -1 === e.attr("class").indexOf(c) &&
                                                    e.hide(300, "linear", function () {
                                                        e.appendTo(o);
                                                    });
                                            }),
                                        a.length &&
                                            a.each(function () {
                                                var e = u(this),
                                                    i = e.attr("class");
                                                (!f && -1 === i.indexOf(c)) || e.appendTo(d).show(300, "linear");
                                            })),
                                  e.removeClass("qodef--filter-loading"))
                                : qodef.body.trigger("banquet_trigger_load_more", [e]));
                },
                isMasonryLayout: function (e) {
                    return e.hasClass("qodef-layout--masonry");
                },
                hasLoadMore: function (e) {
                    return e.hasClass("qodef-pagination-type--load-more");
                },
            };
        })(jQuery),
        (function (s) {
            "use strict";
            s(document).ready(function () {
                e.init();
            }),
                s(document).on("banquet_trigger_get_new_posts", function () {
                    e.init();
                });
            var e = {
                init: function () {
                    var e = s(".qodef-layout--justified-gallery");
                    e.length &&
                        e.each(function () {
                            var e = s(this),
                                i = e.data("options"),
                                t = e.children(".qodef-grid-inner"),
                                o = void 0 !== i.justified_gallery_row_height && "" !== i.justified_gallery_row_height ? i.justified_gallery_row_height : 150,
                                n = void 0 !== i.justified_gallery_row_height_max && "" !== i.justified_gallery_row_height_max && i.justified_gallery_row_height_max,
                                a = 2 * i.space_value,
                                d = void 0 !== i.justified_gallery_treshold && "" !== i.justified_gallery_treshold ? i.justified_gallery_treshold : 0.75;
                            t.waitForImages(function () {
                                "function" == typeof t.justifiedGallery &&
                                    t.justifiedGallery({ captions: !1, rowHeight: o, maxRowHeight: n, margins: a, border: 0, lastRow: "nojustify", justifyThreshold: d, selector: ".qodef-grid-item" }).on("jg.complete jg.rowflush", function () {
                                        var i = s(this),
                                            t = !1;
                                        i.find(".qodef-grid-item")
                                            .addClass("show")
                                            .each(function () {
                                                var e = s(this);
                                                e.height(Math.round(e.height())), t || 0 !== e.width() || (i.height(i.height() - e.height() - a), (t = !0));
                                            });
                                    }),
                                    e.addClass("qodef--justified-gallery-init");
                            });
                        });
                },
            };
        })(jQuery),
        (function (i) {
            "use strict";
            i(document).ready(function () {
                n.init();
            }),
                i(document).on("banquet_trigger_get_new_posts", function (e, i) {
                    i.hasClass("qodef-layout--masonry") && n.init();
                });
            var n = {
                init: function (e) {
                    (this.holder = i(".qodef-layout--masonry")),
                        i.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                n.createMasonry(i(this));
                            });
                },
                createMasonry: function (e) {
                    var i = e.find(".qodef-grid-inner"),
                        t = i.find(".qodef-grid-item"),
                        o = i.find(".qodef-grid-masonry-sizer").width();
                    i.waitForImages(function () {
                        "function" == typeof i.isotope &&
                            (i.isotope({ layoutMode: "packery", itemSelector: ".qodef-grid-item", percentPosition: !0, masonry: { columnWidth: ".qodef-grid-masonry-sizer", gutter: ".qodef-grid-masonry-gutter" } }),
                            e.hasClass("qodef-items--fixed") && n.setFixedImageProportionSize(i, t, o),
                            i.isotope("layout")),
                            i.addClass("qodef--masonry-init");
                    });
                },
                setFixedImageProportionSize: function (e, i, t) {
                    var o = parseInt(i.css("paddingLeft"), 10),
                        n = t - 2 * o,
                        a = e.find(".qodef-item--square"),
                        d = e.find(".qodef-item--landscape"),
                        s = e.find(".qodef-item--portrait"),
                        r = e.find(".qodef-item--huge-square");
                    a.css("height", n), s.css("height", Math.round(2 * (n + o))), 680 < qodef.windowWidth ? (d.css("height", n), r.css("height", Math.round(2 * (n + o)))) : (d.css("height", Math.round(n / 2)), r.css("height", n));
                },
            };
        })(jQuery),
        (function (i) {
            "use strict";
            i(document).ready(function () {
                t.init();
            });
            var t = {
                init: function () {
                    var e = i("#qodef-page-mobile-header");
                    e.length && (t.initMobileHeaderOpener(e), t.initDropDownMobileMenu());
                },
                initMobileHeaderOpener: function (e) {
                    var i,
                        t = e.find("#qodef-mobile-header-opener");
                    t.length &&
                        ((i = e.find("#qodef-mobile-header-navigation")),
                        t.on("tap click", function (e) {
                            e.preventDefault(), i.is(":visible") ? (i.slideUp(450), t.removeClass("qodef--opened")) : (i.slideDown(450), t.addClass("qodef--opened"));
                        }));
                },
                initDropDownMobileMenu: function () {
                    var e = i('#qodef-mobile-header-navigation .qodef-menu-arrow, #qodef-mobile-header-navigation .qodef-hide-link > a, body:not([class*="banquet-core"]) #qodef-mobile-header-navigation .menu-item-has-children > a');
                    e.length &&
                        e.each(function () {
                            var n = i(this);
                            n.on("tap click", function (e) {
                                e.preventDefault();
                                var i,
                                    t = n.parent(),
                                    o = t.siblings(".menu-item-has-children");
                                t.hasClass("menu-item-has-children") &&
                                    ((i = t.find("ul.sub-menu").first()).is(":visible")
                                        ? (i.slideUp(450), t.removeClass("qodef--opened"))
                                        : (t.addClass("qodef--opened"),
                                          0 === o.length
                                              ? t.find(".sub-menu").slideUp(400, function () {
                                                    i.slideDown(400);
                                                })
                                              : t
                                                    .siblings()
                                                    .removeClass("qodef--opened")
                                                    .find(".sub-menu")
                                                    .slideUp(400, function () {
                                                        i.slideDown(400);
                                                    })));
                            });
                        });
                },
            };
        })(jQuery),
        (function (s) {
            s(document).ready(function () {
                e.init();
            });
            var e = {
                init: function () {
                    var e = s(".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children");
                    e.length &&
                        e.each(function (e) {
                            var i,
                                t = s(this),
                                o = t.offset().left,
                                n = t.find(" > ul"),
                                a = n.outerWidth(),
                                d = s(window).width() - o;
                            0 < t.find("li.menu-item-has-children").length && (i = d - a), n.removeClass("qodef-drop-down--right"), (d < a || i < a) && n.addClass("qodef-drop-down--right");
                        });
                },
            };
        })(jQuery),
        (function (a) {
            "use strict";
            a(document).ready(function () {
                d.init();
            }),
                a(window).scroll(function () {
                    d.scroll();
                }),
                a(document).on("banquet_trigger_load_more", function (e, i) {
                    d.triggerLoadMore(i);
                });
            var d = {
                init: function (e) {
                    (this.holder = a(".qodef-pagination--on")),
                        a.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                var e = a(this);
                                d.initPaginationType(e);
                            });
                },
                scroll: function (e) {
                    (this.holder = a(".qodef-pagination--on")),
                        a.extend(this.holder, e),
                        this.holder.length &&
                            this.holder.each(function () {
                                var e = a(this);
                                e.hasClass("qodef-pagination-type--infinite-scroll") && d.initInfiniteScroll(e);
                            });
                },
                initPaginationType: function (e) {
                    e.hasClass("qodef-pagination-type--standard") ? d.initStandard(e) : e.hasClass("qodef-pagination-type--load-more") ? d.initLoadMore(e) : e.hasClass("qodef-pagination-type--infinite-scroll") && d.initInfiniteScroll(e);
                },
                initStandard: function (o) {
                    var e,
                        i = o.find(".qodef-m-pagination-items");
                    i.length &&
                        ((e = o.data("options")),
                        i.children().each(function () {
                            var i = a(this),
                                t = i.children("a");
                            d.changeStandardState(o, e.max_pages_num, 1),
                                t.on("click", function (e) {
                                    e.preventDefault(), i.hasClass("qodef--active") || d.getNewPosts(o, t.data("paged"));
                                });
                        }));
                },
                changeStandardState: function (e, i, t) {
                    var o, n, a, d;
                    e.hasClass("qodef-pagination-type--standard") &&
                        ((n = (o = e.find(".qodef-m-pagination-items")).children(".qodef--number")),
                        (a = o.children(".qodef--prev")),
                        (d = o.children(".qodef--next")),
                        n
                            .removeClass("qodef--active")
                            .eq(t - 1)
                            .addClass("qodef--active"),
                        a.children().data("paged", t - 1),
                        1 < t ? a.show() : a.hide(),
                        d.children().data("paged", t + 1),
                        t === i ? d.hide() : d.show());
                },
                initLoadMore: function (i) {
                    i.find(".qodef-load-more-button").on("click", function (e) {
                        e.preventDefault(), d.getNewPosts(i);
                    });
                },
                triggerLoadMore: function (e) {
                    d.getNewPosts(e);
                },
                hideLoadMoreButton: function (e, i) {
                    e.hasClass("qodef-pagination-type--load-more") && i.next_page > i.max_pages_num && e.find(".qodef-load-more-button").hide();
                },
                initInfiniteScroll: function (e) {
                    var i = e.outerHeight() + e.offset().top,
                        t = qodef.scroll + qodef.windowHeight;
                    !e.hasClass("qodef--loading") && i < t && d.getNewPosts(e);
                },
                getNewPosts: function (i, t) {
                    i.addClass("qodef--loading");
                    var o = i.children(".qodef-grid-inner"),
                        n = i.data("options");
                    d.setNextPageValue(n, t, !1),
                        a.ajax({
                            type: "GET",
                            url: qodefGlobal.vars.restUrl + qodefGlobal.vars.paginationRestRoute,
                            data: { options: n },
                            beforeSend: function (e) {
                                e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.paginationNonce);
                            },
                            success: function (e) {
                                "success" === e.status
                                    ? (d.setNextPageValue(n, t, !0),
                                      d.changeStandardState(i, n.max_pages_num, t),
                                      o.waitForImages(function () {
                                          d.addPosts(o, e.data, t), d.reInitMasonryPosts(i, o), qodef.body.trigger("banquet_trigger_get_new_posts", [i]);
                                      }),
                                      d.hideLoadMoreButton(i, n))
                                    : console.log(e.message);
                            },
                            complete: function () {
                                i.removeClass("qodef--loading");
                            },
                        });
                },
                setNextPageValue: function (e, i, t) {
                    void 0 === i || "" === i || t ? t && (e.next_page = parseInt(e.next_page, 10) + 1) : (e.next_page = i);
                },
                addPosts: function (e, i, t) {
                    void 0 !== t && "" !== t ? e.html(i) : e.append(i);
                },
                reInitMasonryPosts: function (e, i) {
                    e.hasClass("qodef-layout--masonry") &&
                        (i.isotope("reloadItems").isotope({ sortBy: "original-order" }),
                        setTimeout(function () {
                            i.isotope("layout");
                        }, 200));
                },
            };
        })(jQuery),
        (function (r) {
            "use strict";
            r(document).ready(function () {
                t.init(), e.init(), i.init();
            });
            var t = {
                    init: function (e) {
                        (this.holder = []),
                            this.holder.push({ holder: r("#qodef-woo-page .woocommerce-ordering select"), options: { minimumResultsForSearch: 1 / 0 } }),
                            this.holder.push({ holder: r("#qodef-woo-page .variations select"), options: {} }),
                            this.holder.push({ holder: r("#qodef-woo-page #calc_shipping_country"), options: {} }),
                            this.holder.push({ holder: r("#qodef-woo-page .shipping select#calc_shipping_state"), options: {} }),
                            this.holder.push({ holder: r(".widget.widget_archive select"), options: {} }),
                            this.holder.push({ holder: r(".widget.widget_categories select"), options: {} }),
                            this.holder.push({ holder: r(".widget.widget_text select"), options: {} }),
                            r.extend(this.holder, e),
                            "object" == typeof this.holder &&
                                r.each(this.holder, function (e, i) {
                                    t.createSelect2(i.holder, i.options);
                                });
                    },
                    createSelect2: function (e, i) {
                        "function" == typeof e.select2 && e.select2(i);
                    },
                },
                e = {
                    init: function () {
                        r(document).on("click", ".qodef-quantity-minus, .qodef-quantity-plus", function (e) {
                            e.stopPropagation();
                            var i,
                                t = r(this),
                                o = t.siblings(".qodef-quantity-input"),
                                n = parseFloat(o.data("step")),
                                a = parseFloat(o.data("max")),
                                d = !1,
                                s = parseFloat(o.val());
                            t.hasClass("qodef-quantity-minus") && (d = !0), d ? (1 <= (i = s - n) ? o.val(i) : o.val(0)) : ((i = s + n), void 0 !== a && a <= i ? o.val(a) : o.val(i)), o.trigger("change");
                        });
                    },
                },
                i = {
                    init: function () {
                        var e;
                        "object" != typeof qodef.qodefMagnificPopup ||
                            ((e = r(".qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image")).length &&
                                (e.each(function () {
                                    r(this).children("a").attr("data-type", "image").addClass("qodef-popup-item");
                                }),
                                qodef.qodefMagnificPopup.init()));
                    },
                };
        })(jQuery);

        /*modernizr69c8.js*/
        /*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/ !(function (e, n, t) {
    function o(e) {
        var n = u.className,
            t = Modernizr._config.classPrefix || "";
        if ((p && (n = n.baseVal), Modernizr._config.enableJSClass)) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses && ((n += " " + t + e.join(" " + t)), p ? (u.className.baseVal = n) : (u.className = n));
    }
    function s(e, n) {
        return typeof e === n;
    }
    function a() {
        var e, n, t, o, a, i, r;
        for (var l in c)
            if (c.hasOwnProperty(l)) {
                if (((e = []), (n = c[l]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
                    (i = e[a]),
                        (r = i.split(".")),
                        1 === r.length ? (Modernizr[r[0]] = o) : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), (Modernizr[r[0]][r[1]] = o)),
                        f.push((o ? "" : "no-") + r.join("-"));
            }
    }
    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    function r() {
        var e = n.body;
        return e || ((e = i(p ? "svg" : "body")), (e.fake = !0)), e;
    }
    function l(e, t, o, s) {
        var a,
            l,
            f,
            c,
            d = "modernizr",
            p = i("div"),
            h = r();
        if (parseInt(o, 10)) for (; o--; ) (f = i("div")), (f.id = s ? s[o] : d + (o + 1)), p.appendChild(f);
        return (
            (a = i("style")),
            (a.type = "text/css"),
            (a.id = "s" + d),
            (h.fake ? h : p).appendChild(a),
            h.appendChild(p),
            a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(n.createTextNode(e)),
            (p.id = d),
            h.fake && ((h.style.background = ""), (h.style.overflow = "hidden"), (c = u.style.overflow), (u.style.overflow = "hidden"), u.appendChild(h)),
            (l = t(p, e)),
            h.fake ? (h.parentNode.removeChild(h), (u.style.overflow = c), u.offsetHeight) : p.parentNode.removeChild(p),
            !!l
        );
    }
    var f = [],
        c = [],
        d = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e]);
                }, 0);
            },
            addTest: function (e, n, t) {
                c.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function (e) {
                c.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = d), (Modernizr = new Modernizr());
    var u = n.documentElement,
        p = "svg" === u.nodeName.toLowerCase(),
        h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    d._prefixes = h;
    var m = (d.testStyles = l);
    Modernizr.addTest("touchevents", function () {
        var t;
        if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch)) t = !0;
        else {
            var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            m(o, function (e) {
                t = 9 === e.offsetTop;
            });
        }
        return t;
    }),
        a(),
        o(f),
        delete d.addTest,
        delete d.addAsyncTest;
    for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
    e.Modernizr = Modernizr;
})(window, document);

/*jquery.easing.1.369c8.js*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f + a;
        }
        return (-h / 2) * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f + a;
        }
        return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin((f / g) * (Math.PI / 2)) + a;
    },
    easeInOutSine: function (e, f, a, h, g) {
        return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
    },
    easeInExpo: function (e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function (e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
        }
        return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) + l + e;
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (0.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) * 0.5 + l + e;
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }
        return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
    },
});

/*core.min35d0.js*/
/*! jQuery UI - v1.12.1 - 2020-09-25
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed  */
!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
    var t, e, n, W, C, o, s, r, l, a, i, h;
    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)];
    }
    function H(t, e) {
        return parseInt(x.css(t, e), 10) || 0;
    }
    (x.ui = x.ui || {}),
        (x.ui.version = "1.12.1"),
        /*!
         * jQuery UI :data 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            data: x.expr.createPseudo
                ? x.expr.createPseudo(function (e) {
                      return function (t) {
                          return !!x.data(t, e);
                      };
                  })
                : function (t, e, i) {
                      return !!x.data(t, i[3]);
                  },
        }),
        /*!
         * jQuery UI Disable Selection 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            disableSelection:
                ((t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"),
                function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault();
                    });
                }),
            enableSelection: function () {
                return this.off(".ui-disableSelection");
            },
        }),
        (x.ui.escapeSelector =
            ((e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g),
            function (t) {
                return t.replace(e, "\\$1");
            })),
        /*!
         * jQuery UI Focusable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        (x.ui.focusable = function (t, e) {
            var i,
                n,
                o,
                s,
                r = t.nodeName.toLowerCase();
            return "area" === r
                ? ((n = (i = t.parentNode).name), !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && 0 < (n = x("img[usemap='#" + n + "']")).length && n.is(":visible"))
                : (/^(input|select|textarea|button|object)$/.test(r) ? (o = !t.disabled) && (s = x(t).closest("fieldset")[0]) && (o = !s.disabled) : (o = ("a" === r && t.href) || e),
                  o &&
                      x(t).is(":visible") &&
                      (function (t) {
                          var e = t.css("visibility");
                          for (; "inherit" === e; ) (t = t.parent()), (e = t.css("visibility"));
                          return "hidden" !== e;
                      })(x(t)));
        }),
        x.extend(x.expr[":"], {
            focusable: function (t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"));
            },
        }),
        (x.fn.form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form);
        }),
        /*!
         * jQuery UI Form Reset Mixin 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        (x.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = x(this);
                setTimeout(function () {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function () {
                        this.refresh();
                    });
                });
            },
            _bindFormResetHandler: function () {
                var t;
                (this.form = this.element.form()),
                    this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t));
            },
            _unbindFormResetHandler: function () {
                var t;
                this.form.length &&
                    ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
            },
        }),
        (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
        /*!
         * jQuery UI Support for jQuery core 1.7.x 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
        "1.7" === x.fn.jquery.substring(0, 3) &&
            (x.each(["Width", "Height"], function (t, i) {
                var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    n = i.toLowerCase(),
                    s = { innerWidth: x.fn.innerWidth, innerHeight: x.fn.innerHeight, outerWidth: x.fn.outerWidth, outerHeight: x.fn.outerHeight };
                function r(t, e, i, n) {
                    return (
                        x.each(o, function () {
                            (e -= parseFloat(x.css(t, "padding" + this)) || 0), i && (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(x.css(t, "margin" + this)) || 0);
                        }),
                        e
                    );
                }
                (x.fn["inner" + i] = function (t) {
                    return void 0 === t
                        ? s["inner" + i].call(this)
                        : this.each(function () {
                              x(this).css(n, r(this, t) + "px");
                          });
                }),
                    (x.fn["outer" + i] = function (t, e) {
                        return "number" != typeof t
                            ? s["outer" + i].call(this, t)
                            : this.each(function () {
                                  x(this).css(n, r(this, t, !0, e) + "px");
                              });
                    });
            }),
            (x.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            })),
        /*!
         * jQuery UI Keycode 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        (x.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }),
        /*!
         * jQuery UI Labels 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        (x.fn.labels = function () {
            var t, e, i;
            return this[0].labels && this[0].labels.length
                ? this.pushStack(this[0].labels)
                : ((e = this.eq(0).parents("label")),
                  (t = this.attr("id")) && ((i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings())), (t = "label[for='" + x.ui.escapeSelector(t) + "']"), (e = e.add(i.find(t).addBack(t)))),
                  this.pushStack(e));
        }),
        (x.ui.plugin = {
            add: function (t, e, i) {
                var n,
                    o = x.ui[t].prototype;
                for (n in i) (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
            },
            call: function (t, e, i, n) {
                var o,
                    s = t.plugins[e];
                if (s && (n || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))) for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i);
            },
        }),
        /*!
         * jQuery UI Position 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
        (W = Math.max),
        (C = Math.abs),
        (o = /left|center|right/),
        (s = /top|center|bottom/),
        (r = /[\+\-]\d+(\.[\d]+)?%?/),
        (l = /^\w+/),
        (a = /%$/),
        (i = x.fn.position),
        (x.position = {
            scrollbarWidth: function () {
                if (void 0 !== n) return n;
                var t,
                    e = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = e.children()[0];
                return x("body").append(e), (t = i.offsetWidth), e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), (n = t - i);
            },
            getScrollInfo: function (t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || ("auto" === e && t.width < t.element[0].scrollWidth);
                return { width: "scroll" === i || ("auto" === i && t.height < t.element[0].scrollHeight) ? x.position.scrollbarWidth() : 0, height: e ? x.position.scrollbarWidth() : 0 };
            },
            getWithinInfo: function (t) {
                var e = x(t || window),
                    i = x.isWindow(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return { element: e, isWindow: i, isDocument: n, offset: !i && !n ? x(t).offset() : { left: 0, top: 0 }, scrollLeft: e.scrollLeft(), scrollTop: e.scrollTop(), width: e.outerWidth(), height: e.outerHeight() };
            },
        }),
        (x.fn.position = function (f) {
            if (!f || !f.of) return i.apply(this, arguments);
            f = x.extend({}, f);
            var u,
                d,
                p,
                g,
                m,
                t,
                v = x(f.of),
                b = x.position.getWithinInfo(f.within),
                w = x.position.getScrollInfo(b),
                y = (f.collision || "flip").split(" "),
                _ = {},
                e =
                    9 === (t = (e = v)[0]).nodeType
                        ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
                        : x.isWindow(t)
                        ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
                        : t.preventDefault
                        ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
                        : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
            return (
                v[0].preventDefault && (f.at = "left top"),
                (d = e.width),
                (p = e.height),
                (m = x.extend({}, (g = e.offset))),
                x.each(["my", "at"], function () {
                    var t,
                        e,
                        i = (f[this] || "").split(" ");
                    ((i = 1 === i.length ? (o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"]) : i)[0] = o.test(i[0]) ? i[0] : "center"),
                        (i[1] = s.test(i[1]) ? i[1] : "center"),
                        (t = r.exec(i[0])),
                        (e = r.exec(i[1])),
                        (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                        (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
                }),
                1 === y.length && (y[1] = y[0]),
                "right" === f.at[0] ? (m.left += d) : "center" === f.at[0] && (m.left += d / 2),
                "bottom" === f.at[1] ? (m.top += p) : "center" === f.at[1] && (m.top += p / 2),
                (u = E(_.at, d, p)),
                (m.left += u[0]),
                (m.top += u[1]),
                this.each(function () {
                    var i,
                        t,
                        r = x(this),
                        l = r.outerWidth(),
                        a = r.outerHeight(),
                        e = H(this, "marginLeft"),
                        n = H(this, "marginTop"),
                        o = l + e + H(this, "marginRight") + w.width,
                        s = a + n + H(this, "marginBottom") + w.height,
                        h = x.extend({}, m),
                        c = E(_.my, r.outerWidth(), r.outerHeight());
                    "right" === f.my[0] ? (h.left -= l) : "center" === f.my[0] && (h.left -= l / 2),
                        "bottom" === f.my[1] ? (h.top -= a) : "center" === f.my[1] && (h.top -= a / 2),
                        (h.left += c[0]),
                        (h.top += c[1]),
                        (i = { marginLeft: e, marginTop: n }),
                        x.each(["left", "top"], function (t, e) {
                            x.ui.position[y[t]] &&
                                x.ui.position[y[t]][e](h, {
                                    targetWidth: d,
                                    targetHeight: p,
                                    elemWidth: l,
                                    elemHeight: a,
                                    collisionPosition: i,
                                    collisionWidth: o,
                                    collisionHeight: s,
                                    offset: [u[0] + c[0], u[1] + c[1]],
                                    my: f.my,
                                    at: f.at,
                                    within: b,
                                    elem: r,
                                });
                        }),
                        f.using &&
                            (t = function (t) {
                                var e = g.left - h.left,
                                    i = e + d - l,
                                    n = g.top - h.top,
                                    o = n + p - a,
                                    s = {
                                        target: { element: v, left: g.left, top: g.top, width: d, height: p },
                                        element: { element: r, left: h.left, top: h.top, width: l, height: a },
                                        horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                        vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                                    };
                                d < l && C(e + i) < d && (s.horizontal = "center"),
                                    p < a && C(n + o) < p && (s.vertical = "middle"),
                                    W(C(e), C(i)) > W(C(n), C(o)) ? (s.important = "horizontal") : (s.important = "vertical"),
                                    f.using.call(this, t, s);
                            }),
                        r.offset(x.extend(h, { using: t }));
                })
            );
        }),
        (x.ui.position = {
            fit: {
                left: function (t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollLeft : i.offset.left,
                        o = i.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = n - s,
                        l = s + e.collisionWidth - o - n;
                    e.collisionWidth > o
                        ? 0 < r && l <= 0
                            ? ((i = t.left + r + e.collisionWidth - o - n), (t.left += r - i))
                            : (t.left = !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n)
                        : 0 < r
                        ? (t.left += r)
                        : 0 < l
                        ? (t.left -= l)
                        : (t.left = W(t.left - s, t.left));
                },
                top: function (t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollTop : i.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o
                        ? 0 < r && l <= 0
                            ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
                            : (t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
                        : 0 < r
                        ? (t.top += r)
                        : 0 < l
                        ? (t.top -= l)
                        : (t.top = W(t.top - s, t.top));
                },
            },
            flip: {
                left: function (t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        s = i.isWindow ? i.scrollLeft : i.offset.left,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = r - s,
                        a = r + e.collisionWidth - o - s,
                        h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        r = -2 * e.offset[0];
                    l < 0 ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 || n < C(l)) && (t.left += h + i + r) : 0 < a && (0 < (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) || C(s) < a) && (t.left += h + i + r);
                },
                top: function (t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        s = i.isWindow ? i.scrollTop : i.offset.top,
                        r = t.top - e.collisionPosition.marginTop,
                        l = r - s,
                        a = r + e.collisionHeight - o - s,
                        h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        r = -2 * e.offset[1];
                    l < 0 ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 || n < C(l)) && (t.top += h + i + r) : 0 < a && (0 < (s = t.top - e.collisionPosition.marginTop + h + i + r - s) || C(s) < a) && (t.top += h + i + r);
                },
            },
            flipfit: {
                left: function () {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments);
                },
                top: function () {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments);
                },
            },
        }),
        (x.ui.safeActiveElement = function (e) {
            var i;
            try {
                i = e.activeElement;
            } catch (t) {
                i = e.body;
            }
            return (i = !(i = i || e.body).nodeName ? e.body : i);
        }),
        (x.ui.safeBlur = function (t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
        }),
        /*!
         * jQuery UI Scroll Parent 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        (x.fn.scrollParent = function (t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents()
                    .filter(function () {
                        var t = x(this);
                        return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                    })
                    .eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document);
        }),
        /*!
         * jQuery UI Tabbable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            tabbable: function (t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i);
            },
        }),
        /*!
         * jQuery UI Unique ID 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            uniqueId:
                ((h = 0),
                function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++h);
                    });
                }),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
                });
            },
        });
    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var c,
        f = 0,
        u = Array.prototype.slice;
    (x.cleanData =
        ((c = x.cleanData),
        function (t) {
            for (var e, i, n = 0; null != (i = t[n]); n++)
                try {
                    (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
                } catch (t) {}
            c(t);
        })),
        (x.widget = function (t, i, e) {
            var n,
                o,
                s,
                r = {},
                l = t.split(".")[0],
                a = l + "-" + (t = t.split(".")[1]);
            return (
                e || ((e = i), (i = x.Widget)),
                x.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
                (x.expr[":"][a.toLowerCase()] = function (t) {
                    return !!x.data(t, a);
                }),
                (x[l] = x[l] || {}),
                (n = x[l][t]),
                (o = x[l][t] = function (t, e) {
                    if (!this._createWidget) return new o(t, e);
                    arguments.length && this._createWidget(t, e);
                }),
                x.extend(o, n, { version: e.version, _proto: x.extend({}, e), _childConstructors: [] }),
                ((s = new i()).options = x.widget.extend({}, s.options)),
                x.each(e, function (e, n) {
                    function o() {
                        return i.prototype[e].apply(this, arguments);
                    }
                    function s(t) {
                        return i.prototype[e].apply(this, t);
                    }
                    x.isFunction(n)
                        ? (r[e] = function () {
                              var t,
                                  e = this._super,
                                  i = this._superApply;
                              return (this._super = o), (this._superApply = s), (t = n.apply(this, arguments)), (this._super = e), (this._superApply = i), t;
                          })
                        : (r[e] = n);
                }),
                (o.prototype = x.widget.extend(s, { widgetEventPrefix: (n && s.widgetEventPrefix) || t }, r, { constructor: o, namespace: l, widgetName: t, widgetFullName: a })),
                n
                    ? (x.each(n._childConstructors, function (t, e) {
                          var i = e.prototype;
                          x.widget(i.namespace + "." + i.widgetName, o, e._proto);
                      }),
                      delete n._childConstructors)
                    : i._childConstructors.push(o),
                x.widget.bridge(t, o),
                o
            );
        }),
        (x.widget.extend = function (t) {
            for (var e, i, n = u.call(arguments, 1), o = 0, s = n.length; o < s; o++)
                for (e in n[o]) (i = n[o][e]), n[o].hasOwnProperty(e) && void 0 !== i && (x.isPlainObject(i) ? (t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i)) : (t[e] = i));
            return t;
        }),
        (x.widget.bridge = function (s, e) {
            var r = e.prototype.widgetFullName || s;
            x.fn[s] = function (i) {
                var t = "string" == typeof i,
                    n = u.call(arguments, 1),
                    o = this;
                return (
                    t
                        ? this.length || "instance" !== i
                            ? this.each(function () {
                                  var t,
                                      e = x.data(this, r);
                                  return "instance" === i
                                      ? ((o = e), !1)
                                      : e
                                      ? x.isFunction(e[i]) && "_" !== i.charAt(0)
                                          ? (t = e[i].apply(e, n)) !== e && void 0 !== t
                                              ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                                              : void 0
                                          : x.error("no such method '" + i + "' for " + s + " widget instance")
                                      : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'");
                              })
                            : (o = void 0)
                        : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
                          this.each(function () {
                              var t = x.data(this, r);
                              t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this));
                          })),
                    o
                );
            };
        }),
        (x.Widget = function () {}),
        (x.Widget._childConstructors = []),
        (x.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function (t, e) {
                (e = x(e || this.defaultElement || this)[0]),
                    (this.element = x(e)),
                    (this.uuid = f++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = x()),
                    (this.hoverable = x()),
                    (this.focusable = x()),
                    (this.classesElementLookup = {}),
                    e !== this &&
                        (x.data(e, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === e && this.destroy();
                            },
                        }),
                        (this.document = x(e.style ? e.ownerDocument : e.document || e)),
                        (this.window = x(this.document[0].defaultView || this.document[0].parentWindow))),
                    (this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t)),
                    this._create(),
                    this.options.disabled && this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: function () {
                return {};
            },
            _getCreateEventData: x.noop,
            _create: x.noop,
            _init: x.noop,
            destroy: function () {
                var i = this;
                this._destroy(),
                    x.each(this.classesElementLookup, function (t, e) {
                        i._removeClass(e, t);
                    }),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace);
            },
            _destroy: x.noop,
            widget: function () {
                return this.element;
            },
            option: function (t, e) {
                var i,
                    n,
                    o,
                    s = t;
                if (0 === arguments.length) return x.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
                        for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
                        if (((t = i.pop()), 1 === arguments.length)) return void 0 === n[t] ? null : n[t];
                        n[t] = e;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        s[t] = e;
                    }
                return this._setOptions(s), this;
            },
            _setOptions: function (t) {
                for (var e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), (this.options[t] = e), "disabled" === t && this._setOptionDisabled(e), this;
            },
            _setOptionClasses: function (t) {
                var e, i, n;
                for (e in t) (n = this.classesElementLookup[e]), t[e] !== this.options.classes[e] && n && n.length && ((i = x(n.get())), this._removeClass(n, e), i.addClass(this._classes({ element: i, keys: e, classes: t, add: !0 })));
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _classes: function (o) {
                var s = [],
                    r = this;
                function t(t, e) {
                    for (var i, n = 0; n < t.length; n++)
                        (i = r.classesElementLookup[t[n]] || x()),
                            (i = o.add ? x(x.unique(i.get().concat(o.element.get()))) : x(i.not(o.element).get())),
                            (r.classesElementLookup[t[n]] = i),
                            s.push(t[n]),
                            e && o.classes[t[n]] && s.push(o.classes[t[n]]);
                }
                return (
                    (o = x.extend({ element: this.element, classes: this.options.classes || {} }, o)),
                    this._on(o.element, { remove: "_untrackClassesElement" }),
                    o.keys && t(o.keys.match(/\S+/g) || [], !0),
                    o.extra && t(o.extra.match(/\S+/g) || []),
                    s.join(" ")
                );
            },
            _untrackClassesElement: function (i) {
                var n = this;
                x.each(n.classesElementLookup, function (t, e) {
                    -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()));
                });
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1);
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0);
            },
            _toggleClass: function (t, e, i, n) {
                var o = "string" == typeof t || null === t,
                    i = { extra: o ? e : i, keys: o ? t : e, element: o ? this.element : t, add: (n = "boolean" == typeof n ? n : i) };
                return i.element.toggleClass(this._classes(i), n), this;
            },
            _on: function (o, s, t) {
                var r,
                    l = this;
                "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
                    t ? ((s = r = x(s)), (this.bindings = this.bindings.add(s))) : ((t = s), (s = this.element), (r = this.widget())),
                    x.each(t, function (t, e) {
                        function i() {
                            if (o || (!0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled"))) return ("string" == typeof e ? l[e] : e).apply(l, arguments);
                        }
                        "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                        var n = t.match(/^([\w:-]*)\s*(.*)$/),
                            t = n[1] + l.eventNamespace,
                            n = n[2];
                        n ? r.on(t, n, i) : s.on(t, i);
                    });
            },
            _off: function (t, e) {
                (e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                    t.off(e).off(e),
                    (this.bindings = x(this.bindings.not(t).get())),
                    (this.focusable = x(this.focusable.not(t).get())),
                    (this.hoverable = x(this.hoverable.not(t).get()));
            },
            _delay: function (t, e) {
                var i = this;
                return setTimeout(function () {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments);
                }, e || 0);
            },
            _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                    this._on(t, {
                        mouseenter: function (t) {
                            this._addClass(x(t.currentTarget), null, "ui-state-hover");
                        },
                        mouseleave: function (t) {
                            this._removeClass(x(t.currentTarget), null, "ui-state-hover");
                        },
                    });
            },
            _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                    this._on(t, {
                        focusin: function (t) {
                            this._addClass(x(t.currentTarget), null, "ui-state-focus");
                        },
                        focusout: function (t) {
                            this._removeClass(x(t.currentTarget), null, "ui-state-focus");
                        },
                    });
            },
            _trigger: function (t, e, i) {
                var n,
                    o,
                    s = this.options[t];
                if (((i = i || {}), ((e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (e.target = this.element[0]), (o = e.originalEvent))) for (n in o) n in e || (e[n] = o[n]);
                return this.element.trigger(e, i), !((x.isFunction(s) && !1 === s.apply(this.element[0], [e].concat(i))) || e.isDefaultPrevented());
            },
        }),
        x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
            x.Widget.prototype["_" + s] = function (e, t, i) {
                var n = (t = "string" == typeof t ? { effect: t } : t) ? (!0 !== t && "number" != typeof t && t.effect) || r : s,
                    o = !x.isEmptyObject((t = "number" == typeof (t = t || {}) ? { duration: t } : t));
                (t.complete = i),
                    t.delay && e.delay(t.delay),
                    o && x.effects && x.effects.effect[n]
                        ? e[s](t)
                        : n !== s && e[n]
                        ? e[n](t.duration, t.easing, i)
                        : e.queue(function (t) {
                              x(this)[s](), i && i.call(e[0]), t();
                          });
            };
        });
});

/*hoverIntent.min733.js*/
/*! This file is auto-generated */
!(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("jquery"))) : jQuery && !jQuery.fn.hoverIntent && e(jQuery);
})(function (i) {
    "use strict";
    function d(e) {
        (u = e.pageX), (r = e.pageY);
    }
    var u,
        r,
        v = { interval: 100, sensitivity: 6, timeout: 0 },
        a = 0,
        p = function (e, t, n, o) {
            if (Math.sqrt((n.pX - u) * (n.pX - u) + (n.pY - r) * (n.pY - r)) < o.sensitivity) return t.off(n.event, d), delete n.timeoutId, (n.isActive = !0), (e.pageX = u), (e.pageY = r), delete n.pX, delete n.pY, o.over.apply(t[0], [e]);
            (n.pX = u),
                (n.pY = r),
                (n.timeoutId = setTimeout(function () {
                    p(e, t, n, o);
                }, o.interval));
        };
    i.fn.hoverIntent = function (e, t, n) {
        var o = a++,
            s = i.extend({}, v);
        i.isPlainObject(e) ? ((s = i.extend(s, e)), i.isFunction(s.out) || (s.out = s.over)) : (s = i.isFunction(t) ? i.extend(s, { over: e, out: t, selector: n }) : i.extend(s, { over: e, out: e, selector: t }));
        t = function (e) {
            var u = i.extend({}, e),
                r = i(this),
                t = r.data("hoverIntent");
            t || r.data("hoverIntent", (t = {}));
            var v = t[o];
            v || (t[o] = v = { id: o }), v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId));
            t = v.event = "mousemove.hoverIntent.hoverIntent" + o;
            "mouseenter" === e.type
                ? v.isActive ||
                  ((v.pX = u.pageX),
                  (v.pY = u.pageY),
                  r.off(t, d).on(t, d),
                  (v.timeoutId = setTimeout(function () {
                      p(u, r, v, s);
                  }, s.interval)))
                : v.isActive &&
                  (r.off(t, d),
                  (v.timeoutId = setTimeout(function () {
                      var e, t, n, o, i;
                      (e = u), (t = r), (n = v), (o = s.out), (i = t.data("hoverIntent")) && delete i[n.id], o.apply(t[0], [e]);
                  }, s.timeout)));
        };
        return this.on({ "mouseenter.hoverIntent": t, "mouseleave.hoverIntent": t }, s.selector);
    };
});

/*perfect-scrollbar.jquery.min69c8.js*/
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.PerfectScrollbar = e());
})(this, function () {
    "use strict";
    function t(t) {
        return getComputedStyle(t);
    }
    function e(t, e) {
        for (var i in e) {
            var r = e[i];
            "number" == typeof r && (r += "px"), (t.style[i] = r);
        }
        return t;
    }
    function i(t) {
        var e = document.createElement("div");
        return (e.className = t), e;
    }
    function r(t, e) {
        if (!v) throw new Error("No element matching method supported");
        return v.call(t, e);
    }
    function l(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }
    function n(t, e) {
        return Array.prototype.filter.call(t.children, function (t) {
            return r(t, e);
        });
    }
    function o(t, e) {
        var i = t.element.classList,
            r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
    }
    function s(t, e) {
        Y[e] = setTimeout(function () {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
        }, t.settings.scrollingThreshold);
    }
    function a(t, e) {
        o(t, e), s(t, e);
    }
    function c(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e;
    }
    function h(t, e, i, r, l) {
        var n = i[0],
            o = i[1],
            s = i[2],
            h = i[3],
            u = i[4],
            d = i[5];
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var f = t.element;
        (t.reach[h] = null),
            f[s] < 1 && (t.reach[h] = "start"),
            f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
            e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)),
            t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
    }
    function u(t) {
        return parseInt(t, 10) || 0;
    }
    function d(t) {
        return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]");
    }
    function f(e) {
        var i = t(e);
        return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
    }
    function p(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }
    function b(t, i) {
        var r = { width: i.railXWidth },
            l = Math.floor(t.scrollTop);
        i.isRtl ? (r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth) : (r.left = t.scrollLeft),
            i.isScrollbarXUsingBottom ? (r.bottom = i.scrollbarXBottom - l) : (r.top = i.scrollbarXTop + l),
            e(i.scrollbarXRail, r);
        var n = { top: l, height: i.railYHeight };
        i.isScrollbarYUsingRight
            ? i.isRtl
                ? (n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth)
                : (n.right = i.scrollbarYRight - t.scrollLeft)
            : i.isRtl
            ? (n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth)
            : (n.left = i.scrollbarYLeft + t.scrollLeft),
            e(i.scrollbarYRail, n),
            e(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth }),
            e(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
    }
    function g(t, e) {
        function i(e) {
            (b[d] = g + Y * (e[a] - v)), o(t, f), R(t), e.stopPropagation(), e.preventDefault();
        }
        function r() {
            s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i);
        }
        var l = e[0],
            n = e[1],
            a = e[2],
            c = e[3],
            h = e[4],
            u = e[5],
            d = e[6],
            f = e[7],
            p = e[8],
            b = t.element,
            g = null,
            v = null,
            Y = null;
        t.event.bind(t[h], "mousedown", function (e) {
            (g = b[d]),
                (v = e[a]),
                (Y = (t[n] - t[l]) / (t[c] - t[u])),
                t.event.bind(t.ownerDocument, "mousemove", i),
                t.event.once(t.ownerDocument, "mouseup", r),
                t[p].classList.add(m.state.clicking),
                e.stopPropagation(),
                e.preventDefault();
        });
    }
    var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps",
            element: {
                thumb: function (t) {
                    return "ps__thumb-" + t;
                },
                rail: function (t) {
                    return "ps__rail-" + t;
                },
                consuming: "ps__child--consume",
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (t) {
                    return "ps--active-" + t;
                },
                scrolling: function (t) {
                    return "ps--scrolling-" + t;
                },
            },
        },
        Y = { x: null, y: null },
        X = function (t) {
            (this.element = t), (this.handlers = {});
        },
        w = { isEmpty: { configurable: !0 } };
    (X.prototype.bind = function (t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
    }),
        (X.prototype.unbind = function (t, e) {
            var i = this;
            this.handlers[t] = this.handlers[t].filter(function (r) {
                return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
            });
        }),
        (X.prototype.unbindAll = function () {
            var t = this;
            for (var e in t.handlers) t.unbind(e);
        }),
        (w.isEmpty.get = function () {
            var t = this;
            return Object.keys(this.handlers).every(function (e) {
                return 0 === t.handlers[e].length;
            });
        }),
        Object.defineProperties(X.prototype, w);
    var y = function () {
        this.eventElements = [];
    };
    (y.prototype.eventElement = function (t) {
        var e = this.eventElements.filter(function (e) {
            return e.element === t;
        })[0];
        return e || ((e = new X(t)), this.eventElements.push(e)), e;
    }),
        (y.prototype.bind = function (t, e, i) {
            this.eventElement(t).bind(e, i);
        }),
        (y.prototype.unbind = function (t, e, i) {
            var r = this.eventElement(t);
            r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
        }),
        (y.prototype.unbindAll = function () {
            this.eventElements.forEach(function (t) {
                return t.unbindAll();
            }),
                (this.eventElements = []);
        }),
        (y.prototype.once = function (t, e, i) {
            var r = this.eventElement(t),
                l = function (t) {
                    r.unbind(e, l), i(t);
                };
            r.bind(e, l);
        });
    var W = function (t, e, i, r, l) {
            void 0 === r && (r = !0), void 0 === l && (l = !1);
            var n;
            if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== e) throw new Error("A proper axis should be provided");
                n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
            }
            h(t, i, n, r, l);
        },
        L = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
        },
        R = function (t) {
            var e = t.element,
                i = Math.floor(e.scrollTop);
            (t.containerWidth = e.clientWidth),
                (t.containerHeight = e.clientHeight),
                (t.contentWidth = e.scrollWidth),
                (t.contentHeight = e.scrollHeight),
                e.contains(t.scrollbarXRail) ||
                    (n(e, m.element.rail("x")).forEach(function (t) {
                        return l(t);
                    }),
                    e.appendChild(t.scrollbarXRail)),
                e.contains(t.scrollbarYRail) ||
                    (n(e, m.element.rail("y")).forEach(function (t) {
                        return l(t);
                    }),
                    e.appendChild(t.scrollbarYRail)),
                !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
                    ? ((t.scrollbarXActive = !0),
                      (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                      (t.railXRatio = t.containerWidth / t.railXWidth),
                      (t.scrollbarXWidth = p(t, u((t.railXWidth * t.containerWidth) / t.contentWidth))),
                      (t.scrollbarXLeft = u(((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) / (t.contentWidth - t.containerWidth))))
                    : (t.scrollbarXActive = !1),
                !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
                    ? ((t.scrollbarYActive = !0),
                      (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                      (t.railYRatio = t.containerHeight / t.railYHeight),
                      (t.scrollbarYHeight = p(t, u((t.railYHeight * t.containerHeight) / t.contentHeight))),
                      (t.scrollbarYTop = u((i * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight))))
                    : (t.scrollbarYActive = !1),
                t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
                t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                b(e, t),
                t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), (t.scrollbarXWidth = 0), (t.scrollbarXLeft = 0), (e.scrollLeft = 0)),
                t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), (t.scrollbarYHeight = 0), (t.scrollbarYTop = 0), (e.scrollTop = 0));
        },
        T = {
            "click-rail": function (t) {
                t.event.bind(t.scrollbarY, "mousedown", function (t) {
                    return t.stopPropagation();
                }),
                    t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                        (t.element.scrollTop += i * t.containerHeight), R(t), e.stopPropagation();
                    }),
                    t.event.bind(t.scrollbarX, "mousedown", function (t) {
                        return t.stopPropagation();
                    }),
                    t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                        (t.element.scrollLeft += i * t.containerWidth), R(t), e.stopPropagation();
                    });
            },
            "drag-thumb": function (t) {
                g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                    g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
            },
            keyboard: function (t) {
                function e(e, r) {
                    var l = Math.floor(i.scrollTop);
                    if (0 === e) {
                        if (!t.scrollbarYActive) return !1;
                        if ((0 === l && r > 0) || (l >= t.contentHeight - t.containerHeight && r < 0)) return !t.settings.wheelPropagation;
                    }
                    var n = i.scrollLeft;
                    if (0 === r) {
                        if (!t.scrollbarXActive) return !1;
                        if ((0 === n && e < 0) || (n >= t.contentWidth - t.containerWidth && e > 0)) return !t.settings.wheelPropagation;
                    }
                    return !0;
                }
                var i = t.element,
                    l = function () {
                        return r(i, ":hover");
                    },
                    n = function () {
                        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
                    };
                t.event.bind(t.ownerDocument, "keydown", function (r) {
                    if (!((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) && (l() || n())) {
                        var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
                            if (d(o)) return;
                        }
                        var s = 0,
                            a = 0;
                        switch (r.which) {
                            case 37:
                                s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                a = t.containerHeight;
                                break;
                            case 34:
                                a = -t.containerHeight;
                                break;
                            case 36:
                                a = t.contentHeight;
                                break;
                            case 35:
                                a = -t.contentHeight;
                                break;
                            default:
                                return;
                        }
                        (t.settings.suppressScrollX && 0 !== s) || (t.settings.suppressScrollY && 0 !== a) || ((i.scrollTop -= a), (i.scrollLeft += s), R(t), e(s, a) && r.preventDefault());
                    }
                });
            },
            wheel: function (e) {
                function i(t, i) {
                    var r = Math.floor(o.scrollTop),
                        l = 0 === o.scrollTop,
                        n = r + o.offsetHeight === o.scrollHeight,
                        s = 0 === o.scrollLeft,
                        a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                    return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation;
                }
                function r(t) {
                    var e = t.deltaX,
                        i = -1 * t.deltaY;
                    return (
                        (void 0 !== e && void 0 !== i) || ((e = (-1 * t.wheelDeltaX) / 6), (i = t.wheelDeltaY / 6)),
                        t.deltaMode && 1 === t.deltaMode && ((e *= 10), (i *= 10)),
                        e !== e && i !== i && ((e = 0), (i = t.wheelDelta)),
                        t.shiftKey ? [-i, -e] : [e, i]
                    );
                }
                function l(e, i, r) {
                    if (!L.isWebKit && o.querySelector("select:focus")) return !0;
                    if (!o.contains(e)) return !1;
                    for (var l = e; l && l !== o; ) {
                        if (l.classList.contains(m.element.consuming)) return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = l.scrollHeight - l.clientHeight;
                            if (s > 0 && !((0 === l.scrollTop && r > 0) || (l.scrollTop === s && r < 0))) return !0;
                            var a = l.scrollWidth - l.clientWidth;
                            if (a > 0 && !((0 === l.scrollLeft && i < 0) || (l.scrollLeft === a && i > 0))) return !0;
                        }
                        l = l.parentNode;
                    }
                    return !1;
                }
                function n(t) {
                    var n = r(t),
                        s = n[0],
                        a = n[1];
                    if (!l(t.target, s, a)) {
                        var c = !1;
                        e.settings.useBothWheelAxes
                            ? e.scrollbarYActive && !e.scrollbarXActive
                                ? (a ? (o.scrollTop -= a * e.settings.wheelSpeed) : (o.scrollTop += s * e.settings.wheelSpeed), (c = !0))
                                : e.scrollbarXActive && !e.scrollbarYActive && (s ? (o.scrollLeft += s * e.settings.wheelSpeed) : (o.scrollLeft -= a * e.settings.wheelSpeed), (c = !0))
                            : ((o.scrollTop -= a * e.settings.wheelSpeed), (o.scrollLeft += s * e.settings.wheelSpeed)),
                            R(e),
                            (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
                    }
                }
                var o = e.element;
                void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
            },
            touch: function (e) {
                function i(t, i) {
                    var r = Math.floor(h.scrollTop),
                        l = h.scrollLeft,
                        n = Math.abs(t),
                        o = Math.abs(i);
                    if (o > n) {
                        if ((i < 0 && r === e.contentHeight - e.containerHeight) || (i > 0 && 0 === r)) return 0 === window.scrollY && i > 0 && L.isChrome;
                    } else if (n > o && ((t < 0 && l === e.contentWidth - e.containerWidth) || (t > 0 && 0 === l))) return !0;
                    return !0;
                }
                function r(t, i) {
                    (h.scrollTop -= i), (h.scrollLeft -= t), R(e);
                }
                function l(t) {
                    return t.targetTouches ? t.targetTouches[0] : t;
                }
                function n(t) {
                    return !(
                        (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
                        ((!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                    );
                }
                function o(t) {
                    if (n(t)) {
                        var e = l(t);
                        (u.pageX = e.pageX), (u.pageY = e.pageY), (d = new Date().getTime()), null !== p && clearInterval(p);
                    }
                }
                function s(e, i, r) {
                    if (!h.contains(e)) return !1;
                    for (var l = e; l && l !== h; ) {
                        if (l.classList.contains(m.element.consuming)) return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var o = l.scrollHeight - l.clientHeight;
                            if (o > 0 && !((0 === l.scrollTop && r > 0) || (l.scrollTop === o && r < 0))) return !0;
                            var s = l.scrollLeft - l.clientWidth;
                            if (s > 0 && !((0 === l.scrollLeft && i < 0) || (l.scrollLeft === s && i > 0))) return !0;
                        }
                        l = l.parentNode;
                    }
                    return !1;
                }
                function a(t) {
                    if (n(t)) {
                        var e = l(t),
                            o = { pageX: e.pageX, pageY: e.pageY },
                            a = o.pageX - u.pageX,
                            c = o.pageY - u.pageY;
                        if (s(t.target, a, c)) return;
                        r(a, c), (u = o);
                        var h = new Date().getTime(),
                            p = h - d;
                        p > 0 && ((f.x = a / p), (f.y = c / p), (d = h)), i(a, c) && t.preventDefault();
                    }
                }
                function c() {
                    e.settings.swipeEasing &&
                        (clearInterval(p),
                        (p = setInterval(function () {
                            e.isInitialized ? clearInterval(p) : f.x || f.y ? (Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), (f.x *= 0.8), (f.y *= 0.8))) : clearInterval(p);
                        }, 10)));
                }
                if (L.supportsTouch || L.supportsIePointer) {
                    var h = e.element,
                        u = {},
                        d = 0,
                        f = {},
                        p = null;
                    L.supportsTouch
                        ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c))
                        : L.supportsIePointer &&
                          (window.PointerEvent
                              ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c))
                              : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)));
                }
            },
        },
        H = function (r, l) {
            var n = this;
            if ((void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
            (this.element = r),
                r.classList.add(m.main),
                (this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1,
                });
            for (var o in l) n.settings[o] = l[o];
            (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
            var s = function () {
                    return r.classList.add(m.state.focus);
                },
                a = function () {
                    return r.classList.remove(m.state.focus);
                };
            (this.isRtl = "rtl" === t(r).direction),
                (this.isNegativeScroll = (function () {
                    var t = r.scrollLeft,
                        e = null;
                    return (r.scrollLeft = -1), (e = r.scrollLeft < 0), (r.scrollLeft = t), e;
                })()),
                (this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0),
                (this.event = new y()),
                (this.ownerDocument = r.ownerDocument || document),
                (this.scrollbarXRail = i(m.element.rail("x"))),
                r.appendChild(this.scrollbarXRail),
                (this.scrollbarX = i(m.element.thumb("x"))),
                this.scrollbarXRail.appendChild(this.scrollbarX),
                this.scrollbarX.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarX, "focus", s),
                this.event.bind(this.scrollbarX, "blur", a),
                (this.scrollbarXActive = null),
                (this.scrollbarXWidth = null),
                (this.scrollbarXLeft = null);
            var c = t(this.scrollbarXRail);
            (this.scrollbarXBottom = parseInt(c.bottom, 10)),
                isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = u(c.top))) : (this.isScrollbarXUsingBottom = !0),
                (this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth)),
                e(this.scrollbarXRail, { display: "block" }),
                (this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight)),
                e(this.scrollbarXRail, { display: "" }),
                (this.railXWidth = null),
                (this.railXRatio = null),
                (this.scrollbarYRail = i(m.element.rail("y"))),
                r.appendChild(this.scrollbarYRail),
                (this.scrollbarY = i(m.element.thumb("y"))),
                this.scrollbarYRail.appendChild(this.scrollbarY),
                this.scrollbarY.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarY, "focus", s),
                this.event.bind(this.scrollbarY, "blur", a),
                (this.scrollbarYActive = null),
                (this.scrollbarYHeight = null),
                (this.scrollbarYTop = null);
            var h = t(this.scrollbarYRail);
            (this.scrollbarYRight = parseInt(h.right, 10)),
                isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = u(h.left))) : (this.isScrollbarYUsingRight = !0),
                (this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null),
                (this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth)),
                e(this.scrollbarYRail, { display: "block" }),
                (this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom)),
                e(this.scrollbarYRail, { display: "" }),
                (this.railYHeight = null),
                (this.railYRatio = null),
                (this.reach = {
                    x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
                }),
                (this.isAlive = !0),
                this.settings.handlers.forEach(function (t) {
                    return T[t](n);
                }),
                (this.lastScrollTop = Math.floor(r.scrollTop)),
                (this.lastScrollLeft = r.scrollLeft),
                this.event.bind(this.element, "scroll", function (t) {
                    return n.onScroll(t);
                }),
                R(this);
        };
    return (
        (H.prototype.update = function () {
            this.isAlive &&
                ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
                e(this.scrollbarXRail, { display: "block" }),
                e(this.scrollbarYRail, { display: "block" }),
                (this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight)),
                (this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom)),
                e(this.scrollbarXRail, { display: "none" }),
                e(this.scrollbarYRail, { display: "none" }),
                R(this),
                W(this, "top", 0, !1, !0),
                W(this, "left", 0, !1, !0),
                e(this.scrollbarXRail, { display: "" }),
                e(this.scrollbarYRail, { display: "" }));
        }),
        (H.prototype.onScroll = function (t) {
            this.isAlive &&
                (R(this),
                W(this, "top", this.element.scrollTop - this.lastScrollTop),
                W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                (this.lastScrollTop = Math.floor(this.element.scrollTop)),
                (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (H.prototype.destroy = function () {
            this.isAlive &&
                (this.event.unbindAll(),
                l(this.scrollbarX),
                l(this.scrollbarY),
                l(this.scrollbarXRail),
                l(this.scrollbarYRail),
                this.removePsClasses(),
                (this.element = null),
                (this.scrollbarX = null),
                (this.scrollbarY = null),
                (this.scrollbarXRail = null),
                (this.scrollbarYRail = null),
                (this.isAlive = !1));
        }),
        (H.prototype.removePsClasses = function () {
            this.element.className = this.element.className
                .split(" ")
                .filter(function (t) {
                    return !t.match(/^ps([-_].+|)$/);
                })
                .join(" ");
        }),
        H
    );
});

