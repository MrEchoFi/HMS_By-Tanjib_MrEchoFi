 ! function() {
    var e = {
            310: function(e) {
                "undefined" != typeof self && self, e.exports = function(e) {
                    function t(s) {
                        if (i[s]) return i[s].exports;
                        var r = i[s] = {
                            i: s,
                            l: !1,
                            exports: {}
                        };
                        return e[s].call(r.exports, r, r.exports, t), r.l = !0, r.exports
                    }
                    var i = {};
                    return t.m = e, t.c = i, t.d = function(e, i, s) {
                        t.o(e, i) || Object.defineProperty(e, i, {
                            configurable: !1,
                            enumerable: !0,
                            get: s
                        })
                    }, t.n = function(e) {
                        var i = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(i, "a", i), i
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 29)
                }([function(e, t, i) {
                    var s = i(24)("wks"),
                        r = i(12),
                        n = i(1).Symbol,
                        a = "function" == typeof n;
                    (e.exports = function(e) {
                        return s[e] || (s[e] = a && n[e] || (a ? n : r)("Symbol." + e))
                    }).store = s
                }, function(e, t) {
                    var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = i)
                }, function(e, t) {
                    var i = e.exports = {
                        version: "2.5.6"
                    };
                    "number" == typeof __e && (__e = i)
                }, function(e, t, i) {
                    var s = i(4),
                        r = i(11);
                    e.exports = i(6) ? function(e, t, i) {
                        return s.f(e, t, r(1, i))
                    } : function(e, t, i) {
                        return e[t] = i, e
                    }
                }, function(e, t, i) {
                    var s = i(5),
                        r = i(34),
                        n = i(35),
                        a = Object.defineProperty;
                    t.f = i(6) ? Object.defineProperty : function(e, t, i) {
                        if (s(e), t = n(t, !0), s(i), r) try {
                            return a(e, t, i)
                        } catch (e) {}
                        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
                        return "value" in i && (e[t] = i.value), e
                    }
                }, function(e, t, i) {
                    var s = i(10);
                    e.exports = function(e) {
                        if (!s(e)) throw TypeError(e + " is not an object!");
                        return e
                    }
                }, function(e, t, i) {
                    e.exports = !i(17)((function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                }, function(e, t) {
                    var i = {}.hasOwnProperty;
                    e.exports = function(e, t) {
                        return i.call(e, t)
                    }
                }, function(e, t) {
                    var i = Math.ceil,
                        s = Math.floor;
                    e.exports = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? s : i)(e)
                    }
                }, function(e, t) {
                    e.exports = function(e) {
                        if (null == e) throw TypeError("Can't call method on  " + e);
                        return e
                    }
                }, function(e, t) {
                    e.exports = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }
                }, function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                }, function(e, t) {
                    var i = 0,
                        s = Math.random();
                    e.exports = function(e) {
                        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + s).toString(36))
                    }
                }, function(e, t) {
                    e.exports = {}
                }, function(e, t, i) {
                    var s = i(24)("keys"),
                        r = i(12);
                    e.exports = function(e) {
                        return s[e] || (s[e] = r(e))
                    }
                }, function(e, t) {
                    e.exports = !1
                }, function(e, t, i) {
                    var s = i(1),
                        r = i(2),
                        n = i(3),
                        a = i(19),
                        o = i(20),
                        l = function(e, t, i) {
                            var c, d, u, p, h = e & l.F,
                                f = e & l.G,
                                m = e & l.S,
                                g = e & l.P,
                                v = e & l.B,
                                y = f ? s : m ? s[t] || (s[t] = {}) : (s[t] || {}).prototype,
                                b = f ? r : r[t] || (r[t] = {}),
                                w = b.prototype || (b.prototype = {});
                            for (c in f && (i = t), i) u = ((d = !h && y && void 0 !== y[c]) ? y : i)[c], p = v && d ? o(u, s) : g && "function" == typeof u ? o(Function.call, u) : u, y && a(y, c, u, e & l.U), b[c] != u && n(b, c, p), g && w[c] != u && (w[c] = u)
                        };
                    s.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
                }, function(e, t) {
                    e.exports = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    }
                }, function(e, t, i) {
                    var s = i(10),
                        r = i(1).document,
                        n = s(r) && s(r.createElement);
                    e.exports = function(e) {
                        return n ? r.createElement(e) : {}
                    }
                }, function(e, t, i) {
                    var s = i(1),
                        r = i(3),
                        n = i(7),
                        a = i(12)("src"),
                        o = Function.toString,
                        l = ("" + o).split("toString");
                    i(2).inspectSource = function(e) {
                        return o.call(e)
                    }, (e.exports = function(e, t, i, o) {
                        var c = "function" == typeof i;
                        c && (n(i, "name") || r(i, "name", t)), e[t] !== i && (c && (n(i, a) || r(i, a, e[t] ? "" + e[t] : l.join(String(t)))), e === s ? e[t] = i : o ? e[t] ? e[t] = i : r(e, t, i) : (delete e[t], r(e, t, i)))
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && this[a] || o.call(this)
                    }))
                }, function(e, t, i) {
                    var s = i(36);
                    e.exports = function(e, t, i) {
                        if (s(e), void 0 === t) return e;
                        switch (i) {
                            case 1:
                                return function(i) {
                                    return e.call(t, i)
                                };
                            case 2:
                                return function(i, s) {
                                    return e.call(t, i, s)
                                };
                            case 3:
                                return function(i, s, r) {
                                    return e.call(t, i, s, r)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                }, function(e, t, i) {
                    var s = i(42),
                        r = i(9);
                    e.exports = function(e) {
                        return s(r(e))
                    }
                }, function(e, t) {
                    var i = {}.toString;
                    e.exports = function(e) {
                        return i.call(e).slice(8, -1)
                    }
                }, function(e, t, i) {
                    var s = i(8),
                        r = Math.min;
                    e.exports = function(e) {
                        return e > 0 ? r(s(e), 9007199254740991) : 0
                    }
                }, function(e, t, i) {
                    var s = i(2),
                        r = i(1),
                        n = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
                    (e.exports = function(e, t) {
                        return n[e] || (n[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: s.version,
                        mode: i(15) ? "pure" : "global",
                        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
                    })
                }, function(e, t) {
                    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                }, function(e, t, i) {
                    var s = i(4).f,
                        r = i(7),
                        n = i(0)("toStringTag");
                    e.exports = function(e, t, i) {
                        e && !r(e = i ? e : e.prototype, n) && s(e, n, {
                            configurable: !0,
                            value: t
                        })
                    }
                }, function(e, t, i) {
                    var s = i(9);
                    e.exports = function(e) {
                        return Object(s(e))
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = Math.PI / 180;
                    t.default = function(e) {
                        return e * s
                    }
                }, function(e, t, i) {
                    "use strict";
                    i(30);
                    var s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(i(54));
                    e.exports = s.default
                }, function(e, t, i) {
                    i(31), i(47), e.exports = i(2).Array.from
                }, function(e, t, i) {
                    "use strict";
                    var s = i(32)(!0);
                    i(33)(String, "String", (function(e) {
                        this._t = String(e), this._i = 0
                    }), (function() {
                        var e, t = this._t,
                            i = this._i;
                        return i >= t.length ? {
                            value: void 0,
                            done: !0
                        } : (e = s(t, i), this._i += e.length, {
                            value: e,
                            done: !1
                        })
                    }))
                }, function(e, t, i) {
                    var s = i(8),
                        r = i(9);
                    e.exports = function(e) {
                        return function(t, i) {
                            var n, a, o = String(r(t)),
                                l = s(i),
                                c = o.length;
                            return l < 0 || l >= c ? e ? "" : void 0 : (n = o.charCodeAt(l)) < 55296 || n > 56319 || l + 1 === c || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? o.charAt(l) : n : e ? o.slice(l, l + 2) : a - 56320 + (n - 55296 << 10) + 65536
                        }
                    }
                }, function(e, t, i) {
                    "use strict";
                    var s = i(15),
                        r = i(16),
                        n = i(19),
                        a = i(3),
                        o = i(13),
                        l = i(37),
                        c = i(26),
                        d = i(46),
                        u = i(0)("iterator"),
                        p = !([].keys && "next" in [].keys()),
                        h = function() {
                            return this
                        };
                    e.exports = function(e, t, i, f, m, g, v) {
                        l(i, t, f);
                        var y, b, w, x = function(e) {
                                if (!p && e in E) return E[e];
                                switch (e) {
                                    case "keys":
                                    case "values":
                                        return function() {
                                            return new i(this, e)
                                        }
                                }
                                return function() {
                                    return new i(this, e)
                                }
                            },
                            _ = t + " Iterator",
                            T = "values" == m,
                            S = !1,
                            E = e.prototype,
                            M = E[u] || E["@@iterator"] || m && E[m],
                            C = M || x(m),
                            P = m ? T ? x("entries") : C : void 0,
                            k = "Array" == t && E.entries || M;
                        if (k && (w = d(k.call(new e))) !== Object.prototype && w.next && (c(w, _, !0), s || "function" == typeof w[u] || a(w, u, h)), T && M && "values" !== M.name && (S = !0, C = function() {
                                return M.call(this)
                            }), s && !v || !p && !S && E[u] || a(E, u, C), o[t] = C, o[_] = h, m)
                            if (y = {
                                    values: T ? C : x("values"),
                                    keys: g ? C : x("keys"),
                                    entries: P
                                }, v)
                                for (b in y) b in E || n(E, b, y[b]);
                            else r(r.P + r.F * (p || S), t, y);
                        return y
                    }
                }, function(e, t, i) {
                    e.exports = !i(6) && !i(17)((function() {
                        return 7 != Object.defineProperty(i(18)("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                }, function(e, t, i) {
                    var s = i(10);
                    e.exports = function(e, t) {
                        if (!s(e)) return e;
                        var i, r;
                        if (t && "function" == typeof(i = e.toString) && !s(r = i.call(e))) return r;
                        if ("function" == typeof(i = e.valueOf) && !s(r = i.call(e))) return r;
                        if (!t && "function" == typeof(i = e.toString) && !s(r = i.call(e))) return r;
                        throw TypeError("Can't convert object to primitive value")
                    }
                }, function(e, t) {
                    e.exports = function(e) {
                        if ("function" != typeof e) throw TypeError(e + " is not a function!");
                        return e
                    }
                }, function(e, t, i) {
                    "use strict";
                    var s = i(38),
                        r = i(11),
                        n = i(26),
                        a = {};
                    i(3)(a, i(0)("iterator"), (function() {
                        return this
                    })), e.exports = function(e, t, i) {
                        e.prototype = s(a, {
                            next: r(1, i)
                        }), n(e, t + " Iterator")
                    }
                }, function(e, t, i) {
                    var s = i(5),
                        r = i(39),
                        n = i(25),
                        a = i(14)("IE_PROTO"),
                        o = function() {},
                        l = function() {
                            var e, t = i(18)("iframe"),
                                s = n.length;
                            for (t.style.display = "none", i(45).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; s--;) delete l.prototype[n[s]];
                            return l()
                        };
                    e.exports = Object.create || function(e, t) {
                        var i;
                        return null !== e ? (o.prototype = s(e), i = new o, o.prototype = null, i[a] = e) : i = l(), void 0 === t ? i : r(i, t)
                    }
                }, function(e, t, i) {
                    var s = i(4),
                        r = i(5),
                        n = i(40);
                    e.exports = i(6) ? Object.defineProperties : function(e, t) {
                        r(e);
                        for (var i, a = n(t), o = a.length, l = 0; o > l;) s.f(e, i = a[l++], t[i]);
                        return e
                    }
                }, function(e, t, i) {
                    var s = i(41),
                        r = i(25);
                    e.exports = Object.keys || function(e) {
                        return s(e, r)
                    }
                }, function(e, t, i) {
                    var s = i(7),
                        r = i(21),
                        n = i(43)(!1),
                        a = i(14)("IE_PROTO");
                    e.exports = function(e, t) {
                        var i, o = r(e),
                            l = 0,
                            c = [];
                        for (i in o) i != a && s(o, i) && c.push(i);
                        for (; t.length > l;) s(o, i = t[l++]) && (~n(c, i) || c.push(i));
                        return c
                    }
                }, function(e, t, i) {
                    var s = i(22);
                    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                        return "String" == s(e) ? e.split("") : Object(e)
                    }
                }, function(e, t, i) {
                    var s = i(21),
                        r = i(23),
                        n = i(44);
                    e.exports = function(e) {
                        return function(t, i, a) {
                            var o, l = s(t),
                                c = r(l.length),
                                d = n(a, c);
                            if (e && i != i) {
                                for (; c > d;)
                                    if ((o = l[d++]) != o) return !0
                            } else
                                for (; c > d; d++)
                                    if ((e || d in l) && l[d] === i) return e || d || 0;
                            return !e && -1
                        }
                    }
                }, function(e, t, i) {
                    var s = i(8),
                        r = Math.max,
                        n = Math.min;
                    e.exports = function(e, t) {
                        return (e = s(e)) < 0 ? r(e + t, 0) : n(e, t)
                    }
                }, function(e, t, i) {
                    var s = i(1).document;
                    e.exports = s && s.documentElement
                }, function(e, t, i) {
                    var s = i(7),
                        r = i(27),
                        n = i(14)("IE_PROTO"),
                        a = Object.prototype;
                    e.exports = Object.getPrototypeOf || function(e) {
                        return e = r(e), s(e, n) ? e[n] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
                    }
                }, function(e, t, i) {
                    "use strict";
                    var s = i(20),
                        r = i(16),
                        n = i(27),
                        a = i(48),
                        o = i(49),
                        l = i(23),
                        c = i(50),
                        d = i(51);
                    r(r.S + r.F * !i(53)((function(e) {
                        Array.from(e)
                    })), "Array", {
                        from: function(e) {
                            var t, i, r, u, p = n(e),
                                h = "function" == typeof this ? this : Array,
                                f = arguments.length,
                                m = f > 1 ? arguments[1] : void 0,
                                g = void 0 !== m,
                                v = 0,
                                y = d(p);
                            if (g && (m = s(m, f > 2 ? arguments[2] : void 0, 2)), null == y || h == Array && o(y))
                                for (i = new h(t = l(p.length)); t > v; v++) c(i, v, g ? m(p[v], v) : p[v]);
                            else
                                for (u = y.call(p), i = new h; !(r = u.next()).done; v++) c(i, v, g ? a(u, m, [r.value, v], !0) : r.value);
                            return i.length = v, i
                        }
                    })
                }, function(e, t, i) {
                    var s = i(5);
                    e.exports = function(e, t, i, r) {
                        try {
                            return r ? t(s(i)[0], i[1]) : t(i)
                        } catch (t) {
                            var n = e.return;
                            throw void 0 !== n && s(n.call(e)), t
                        }
                    }
                }, function(e, t, i) {
                    var s = i(13),
                        r = i(0)("iterator"),
                        n = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (s.Array === e || n[r] === e)
                    }
                }, function(e, t, i) {
                    "use strict";
                    var s = i(4),
                        r = i(11);
                    e.exports = function(e, t, i) {
                        t in e ? s.f(e, t, r(0, i)) : e[t] = i
                    }
                }, function(e, t, i) {
                    var s = i(52),
                        r = i(0)("iterator"),
                        n = i(13);
                    e.exports = i(2).getIteratorMethod = function(e) {
                        if (null != e) return e[r] || e["@@iterator"] || n[s(e)]
                    }
                }, function(e, t, i) {
                    var s = i(22),
                        r = i(0)("toStringTag"),
                        n = "Arguments" == s(function() {
                            return arguments
                        }());
                    e.exports = function(e) {
                        var t, i, a;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = Object(e), r)) ? i : n ? s(t) : "Object" == (a = s(t)) && "function" == typeof t.callee ? "Arguments" : a
                    }
                }, function(e, t, i) {
                    var s = i(0)("iterator"),
                        r = !1;
                    try {
                        var n = [7][s]();
                        n.return = function() {
                            r = !0
                        }, Array.from(n, (function() {
                            throw 2
                        }))
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !r) return !1;
                        var i = !1;
                        try {
                            var n = [7],
                                a = n[s]();
                            a.next = function() {
                                return {
                                    done: i = !0
                                }
                            }, n[s] = function() {
                                return a
                            }, e(n)
                        } catch (e) {}
                        return i
                    }
                }, function(e, t, i) {
                    "use strict";

                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function e(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var s = t[i];
                                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                                }
                            }
                            return function(t, i, s) {
                                return i && e(t.prototype, i), s && e(t, s), t
                            }
                        }(),
                        n = s(i(55)),
                        a = s(i(56)),
                        o = s(i(57)),
                        l = s(i(58)),
                        c = s(i(59)),
                        d = Math.PI,
                        u = Math.max,
                        p = Math.min,
                        h = function() {
                            function e(t, i) {
                                (function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                })(this, e), this.element = t, this.originalHTML = this.element.innerHTML;
                                var s = document.createElement("div"),
                                    r = document.createDocumentFragment();
                                s.setAttribute("aria-label", t.innerText), s.style.position = "relative", this.container = s, this._letters = (0, a.default)(t, i), this._letters.forEach((function(e) {
                                    return r.appendChild(e)
                                })), s.appendChild(r), this.element.innerHTML = "", this.element.appendChild(s);
                                var o = window.getComputedStyle(this.element),
                                    l = o.fontSize,
                                    c = o.lineHeight;
                                this._fontSize = parseFloat(l), this._lineHeight = parseFloat(c) || this._fontSize, this._metrics = this._letters.map(n.default);
                                var u = this._metrics.reduce((function(e, t) {
                                    return e + t.width
                                }), 0);
                                this._minRadius = u / d / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                            }
                            return r(e, [{
                                key: "radius",
                                value: function(e) {
                                    return void 0 !== e ? (this._radius = u(this._minRadius, e), this._invalidate(), this) : this._radius
                                }
                            }, {
                                key: "dir",
                                value: function(e) {
                                    return void 0 !== e ? (this._dir = e, this._invalidate(), this) : this._dir
                                }
                            }, {
                                key: "forceWidth",
                                value: function(e) {
                                    return void 0 !== e ? (this._forceWidth = e, this._invalidate(), this) : this._forceWidth
                                }
                            }, {
                                key: "forceHeight",
                                value: function(e) {
                                    return void 0 !== e ? (this._forceHeight = e, this._invalidate(), this) : this._forceHeight
                                }
                            }, {
                                key: "refresh",
                                value: function() {
                                    return this._invalidate()
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    return this.element.innerHTML = this.originalHTML, this
                                }
                            }, {
                                key: "_invalidate",
                                value: function() {
                                    var e = this;
                                    return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame((function() {
                                        e._layout()
                                    })), this
                                }
                            }, {
                                key: "_layout",
                                value: function() {
                                    var e = this,
                                        t = this._radius,
                                        i = this._dir,
                                        s = "center " + (-1 === i ? -t + this._lineHeight : t) / this._fontSize + "em",
                                        r = t - this._lineHeight,
                                        n = (0, c.default)(this._metrics, r),
                                        a = n.rotations,
                                        d = n.θ;
                                    if (this._letters.forEach((function(t, r) {
                                            var n = t.style,
                                                o = (-.5 * d + a[r]) * i,
                                                l = "translateX(" + -.5 * e._metrics[r].width / e._fontSize + "em) rotate(" + o + "deg)";
                                            n.position = "absolute", n.bottom = -1 === i ? 0 : "auto", n.left = "50%", n.transform = l, n.transformOrigin = s, n.webkitTransform = l, n.webkitTransformOrigin = s
                                        })), this._forceHeight) {
                                        var u = d > 180 ? (0, o.default)(t, d) : (0, o.default)(r, d) + this._lineHeight;
                                        this.container.style.height = u / this._fontSize + "em"
                                    }
                                    if (this._forceWidth) {
                                        var h = (0, l.default)(t, p(180, d));
                                        this.container.style.width = h / this._fontSize + "em"
                                    }
                                    return this
                                }
                            }]), e
                        }();
                    t.default = h
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        var t = e.getBoundingClientRect();
                        return {
                            height: t.height,
                            left: t.left + window.pageXOffset,
                            top: t.top + window.pageYOffset,
                            width: t.width
                        }
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e, t) {
                        var i = document.createElement("span"),
                            s = e.innerText.trim();
                        return (t ? t(s) : [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                                return i
                            }
                            return Array.from(e)
                        }(s))).map((function(e) {
                            var t = i.cloneNode();
                            return t.insertAdjacentHTML("afterbegin", " " === e ? "&nbsp;" : e), t
                        }))
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(i(28));
                    t.default = function(e, t) {
                        return e * (1 - Math.cos((0, s.default)(t / 2)))
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(i(28));
                    t.default = function(e, t) {
                        return 2 * e * Math.sin((0, s.default)(t / 2))
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(i(60));
                    t.default = function(e, t) {
                        return e.reduce((function(e, i) {
                            var r = i.width,
                                n = (0, s.default)(r / t);
                            return {
                                "θ": e.θ + n,
                                rotations: e.rotations.concat([e.θ + n / 2])
                            }
                        }), {
                            "θ": 0,
                            rotations: []
                        })
                    }
                }, function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = 180 / Math.PI;
                    t.default = function(e) {
                        return e * s
                    }
                }])
            }
        },
        t = {};

    function i(s) {
        var r = t[s];
        if (void 0 !== r) return r.exports;
        var n = t[s] = {
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i), n.exports
    }! function() {
        "use strict";
        var e = !0,
            t = {
                startDate: "October 1, 2023 00:00:00",
                finishDate: "December 31, 2023 00:00:00"
            },
            s = "./static/audio.mp3",
            r = {
                path: "php/subscribe/subscribe.php"
            };

        function n(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function a(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }
        var o, l, c, d, u, p, h, f, m, g, v, y, b, w, x, _ = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            T = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            S = 1e8,
            E = 1e-8,
            M = 2 * Math.PI,
            C = M / 4,
            P = 0,
            k = Math.sqrt,
            A = Math.cos,
            O = Math.sin,
            L = function(e) {
                return "string" == typeof e
            },
            I = function(e) {
                return "function" == typeof e
            },
            z = function(e) {
                return "number" == typeof e
            },
            D = function(e) {
                return void 0 === e
            },
            B = function(e) {
                return "object" == typeof e
            },
            $ = function(e) {
                return !1 !== e
            },
            R = function() {
                return "undefined" != typeof window
            },
            F = function(e) {
                return I(e) || L(e)
            },
            N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
            X = Array.isArray,
            Y = /(?:-?\.?\d|\.)+/gi,
            H = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            j = /[+-]=-?[.\d]+/,
            G = /[^,'"\[\]\s]+/gi,
            W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            U = {},
            Z = {},
            K = function(e) {
                return (Z = Me(e, U)) && Mi
            },
            Q = function(e, t) {
                return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
            },
            J = function(e, t) {
                return !t && console.warn(e)
            },
            ee = function(e, t) {
                return e && (U[e] = t) && Z && (Z[e] = t) || U
            },
            te = function() {
                return 0
            },
            ie = {
                suppressEvents: !0,
                isStart: !0,
                kill: !1
            },
            se = {
                suppressEvents: !0,
                kill: !1
            },
            re = {
                suppressEvents: !0
            },
            ne = {},
            ae = [],
            oe = {},
            le = {},
            ce = {},
            de = 30,
            ue = [],
            pe = "",
            he = function(e) {
                var t, i, s = e[0];
                if (B(s) || I(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
                    for (i = ue.length; i-- && !ue[i].targetTest(s););
                    t = ue[i]
                }
                for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Nt(e[i], t))) || e.splice(i, 1);
                return e
            },
            fe = function(e) {
                return e._gsap || he(st(e))[0]._gsap
            },
            me = function(e, t, i) {
                return (i = e[t]) && I(i) ? e[t]() : D(i) && e.getAttribute && e.getAttribute(t) || i
            },
            ge = function(e, t) {
                return (e = e.split(",")).forEach(t) || e
            },
            ve = function(e) {
                return Math.round(1e5 * e) / 1e5 || 0
            },
            ye = function(e) {
                return Math.round(1e7 * e) / 1e7 || 0
            },
            be = function(e, t) {
                var i = t.charAt(0),
                    s = parseFloat(t.substr(2));
                return e = parseFloat(e), "+" === i ? e + s : "-" === i ? e - s : "*" === i ? e * s : e / s
            },
            we = function(e, t) {
                for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i;);
                return s < i
            },
            xe = function() {
                var e, t, i = ae.length,
                    s = ae.slice(0);
                for (oe = {}, ae.length = 0, e = 0; e < i; e++)(t = s[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
            },
            _e = function(e, t, i, s) {
                ae.length && !l && xe(), e.render(t, i, s || l && t < 0 && (e._initted || e._startAt)), ae.length && !l && xe()
            },
            Te = function(e) {
                var t = parseFloat(e);
                return (t || 0 === t) && (e + "").match(G).length < 2 ? t : L(e) ? e.trim() : e
            },
            Se = function(e) {
                return e
            },
            Ee = function(e, t) {
                for (var i in t) i in e || (e[i] = t[i]);
                return e
            },
            Me = function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            Ce = function e(t, i) {
                for (var s in i) "__proto__" !== s && "constructor" !== s && "prototype" !== s && (t[s] = B(i[s]) ? e(t[s] || (t[s] = {}), i[s]) : i[s]);
                return t
            },
            Pe = function(e, t) {
                var i, s = {};
                for (i in e) i in t || (s[i] = e[i]);
                return s
            },
            ke = function(e) {
                var t, i = e.parent || d,
                    s = e.keyframes ? (t = X(e.keyframes), function(e, i) {
                        for (var s in i) s in e || "duration" === s && t || "ease" === s || (e[s] = i[s])
                    }) : Ee;
                if ($(e.inherit))
                    for (; i;) s(e, i.vars.defaults), i = i.parent || i._dp;
                return e
            },
            Ae = function(e, t, i, s, r) {
                void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                var n, a = e[s];
                if (r)
                    for (n = t[r]; a && a[r] > n;) a = a._prev;
                return a ? (t._next = a._next, a._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[s] = t, t._prev = a, t.parent = t._dp = e, t
            },
            Oe = function(e, t, i, s) {
                void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                var r = t._prev,
                    n = t._next;
                r ? r._next = n : e[i] === t && (e[i] = n), n ? n._prev = r : e[s] === t && (e[s] = r), t._next = t._prev = t.parent = null
            },
            Le = function(e, t) {
                e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
            },
            Ie = function(e, t) {
                if (e && (!t || t._end > e._dur || t._start < 0))
                    for (var i = e; i;) i._dirty = 1, i = i.parent;
                return e
            },
            ze = function(e, t, i, s) {
                return e._startAt && (l ? e._startAt.revert(se) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
            },
            De = function e(t) {
                return !t || t._ts && e(t.parent)
            },
            Be = function(e) {
                return e._repeat ? $e(e._tTime, e = e.duration() + e._rDelay) * e : 0
            },
            $e = function(e, t) {
                var i = Math.floor(e /= t);
                return e && i === e ? i - 1 : i
            },
            Re = function(e, t) {
                return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            },
            Fe = function(e) {
                return e._end = ye(e._start + (e._tDur / Math.abs(e._ts || e._rts || E) || 0))
            },
            Ne = function(e, t) {
                var i = e._dp;
                return i && i.smoothChildTiming && e._ts && (e._start = ye(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Fe(e), i._dirty || Ie(i, e)), e
            },
            Xe = function(e, t) {
                var i;
                if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Re(e.rawTime(), t), (!t._dur || Je(0, t.totalDuration(), i) - t._tTime > E) && t.render(i, !0)), Ie(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                    if (e._dur < e.duration())
                        for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    e._zTime = -1e-8
                }
            },
            Ye = function(e, t, i, s) {
                return t.parent && Le(t), t._start = ye((z(i) ? i : i || e !== d ? Ze(e, i, t) : e._time) + t._delay), t._end = ye(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ae(e, t, "_first", "_last", e._sort ? "_start" : 0), je(t) || (e._recent = t), s || Xe(e, t), e._ts < 0 && Ne(e, e._tTime), e
            },
            He = function(e, t) {
                return (U.ScrollTrigger || Q("scrollTrigger", t)) && U.ScrollTrigger.create(t, e)
            },
            Ve = function(e, t, i, s, r) {
                return Wt(e, t, r), e._initted ? !i && e._pt && !l && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== Ct.frame ? (ae.push(e), e._lazy = [r, s], 1) : void 0 : 1
            },
            qe = function e(t) {
                var i = t.parent;
                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e(i))
            },
            je = function(e) {
                var t = e.data;
                return "isFromStart" === t || "isStart" === t
            },
            Ge = function(e, t, i, s) {
                var r = e._repeat,
                    n = ye(t) || 0,
                    a = e._tTime / e._tDur;
                return a && !s && (e._time *= n / e._dur), e._dur = n, e._tDur = r ? r < 0 ? 1e10 : ye(n * (r + 1) + e._rDelay * r) : n, a > 0 && !s && Ne(e, e._tTime = e._tDur * a), e.parent && Fe(e), i || Ie(e.parent, e), e
            },
            We = function(e) {
                return e instanceof Yt ? Ie(e) : Ge(e, e._dur)
            },
            Ue = {
                _start: 0,
                endTime: te,
                totalDuration: te
            },
            Ze = function e(t, i, s) {
                var r, n, a, o = t.labels,
                    l = t._recent || Ue,
                    c = t.duration() >= S ? l.endTime(!1) : t._dur;
                return L(i) && (isNaN(i) || i in o) ? (n = i.charAt(0), a = "%" === i.substr(-1), r = i.indexOf("="), "<" === n || ">" === n ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === n ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (r < 0 ? l : s).totalDuration() / 100 : 1)) : r < 0 ? (i in o || (o[i] = c), o[i]) : (n = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), a && s && (n = n / 100 * (X(s) ? s[0] : s).totalDuration()), r > 1 ? e(t, i.substr(0, r - 1), s) + n : c + n)) : null == i ? c : +i
            },
            Ke = function(e, t, i) {
                var s, r, n = z(t[1]),
                    a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
                    o = t[a];
                if (n && (o.duration = t[1]), o.parent = i, e) {
                    for (s = o, r = i; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = $(r.vars.inherit) && r.parent;
                    o.immediateRender = $(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
                }
                return new Jt(t[0], o, t[a + 1])
            },
            Qe = function(e, t) {
                return e || 0 === e ? t(e) : t
            },
            Je = function(e, t, i) {
                return i < e ? e : i > t ? t : i
            },
            et = function(e, t) {
                return L(e) && (t = W.exec(e)) ? t[1] : ""
            },
            tt = [].slice,
            it = function(e, t) {
                return e && B(e) && "length" in e && (!t && !e.length || e.length - 1 in e && B(e[0])) && !e.nodeType && e !== u
            },
            st = function(e, t, i) {
                return c && !t && c.selector ? c.selector(e) : !L(e) || i || !p && Pt() ? X(e) ? function(e, t, i) {
                    return void 0 === i && (i = []), e.forEach((function(e) {
                        var s;
                        return L(e) && !t || it(e, 1) ? (s = i).push.apply(s, st(e)) : i.push(e)
                    })) || i
                }(e, i) : it(e) ? tt.call(e, 0) : e ? [e] : [] : tt.call((t || h).querySelectorAll(e), 0)
            },
            rt = function(e) {
                return e = st(e)[0] || J("Invalid scope") || {},
                    function(t) {
                        var i = e.current || e.nativeElement || e;
                        return st(t, i.querySelectorAll ? i : i === e ? J("Invalid scope") || h.createElement("div") : e)
                    }
            },
            nt = function(e) {
                return e.sort((function() {
                    return .5 - Math.random()
                }))
            },
            at = function(e) {
                if (I(e)) return e;
                var t = B(e) ? e : {
                        each: e
                    },
                    i = Dt(t.ease),
                    s = t.from || 0,
                    r = parseFloat(t.base) || 0,
                    n = {},
                    a = s > 0 && s < 1,
                    o = isNaN(s) || a,
                    l = t.axis,
                    c = s,
                    d = s;
                return L(s) ? c = d = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[s] || 0 : !a && o && (c = s[0], d = s[1]),
                    function(e, a, u) {
                        var p, h, f, m, g, v, y, b, w, x = (u || t).length,
                            _ = n[x];
                        if (!_) {
                            if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, S])[1])) {
                                for (y = -S; y < (y = u[w++].getBoundingClientRect().left) && w < x;);
                                w--
                            }
                            for (_ = n[x] = [], p = o ? Math.min(w, x) * c - .5 : s % w, h = w === S ? 0 : o ? x * d / w - .5 : s / w | 0, y = 0, b = S, v = 0; v < x; v++) f = v % w - p, m = h - (v / w | 0), _[v] = g = l ? Math.abs("y" === l ? m : f) : k(f * f + m * m), g > y && (y = g), g < b && (b = g);
                            "random" === s && nt(_), _.max = y - b, _.min = b, _.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (w > x ? x - 1 : l ? "y" === l ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === s ? -1 : 1), _.b = x < 0 ? r - x : r, _.u = et(t.amount || t.each) || 0, i = i && x < 0 ? It(i) : i
                        }
                        return x = (_[e] - _.min) / _.max || 0, ye(_.b + (i ? i(x) : x) * _.v) + _.u
                    }
            },
            ot = function(e) {
                var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
                return function(i) {
                    var s = ye(Math.round(parseFloat(i) / e) * e * t);
                    return (s - s % 1) / t + (z(i) ? 0 : et(i))
                }
            },
            lt = function(e, t) {
                var i, s, r = X(e);
                return !r && B(e) && (i = r = e.radius || S, e.values ? (e = st(e.values), (s = !z(e[0])) && (i *= i)) : e = ot(e.increment)), Qe(t, r ? I(e) ? function(t) {
                    return s = e(t), Math.abs(s - t) <= i ? s : t
                } : function(t) {
                    for (var r, n, a = parseFloat(s ? t.x : t), o = parseFloat(s ? t.y : 0), l = S, c = 0, d = e.length; d--;)(r = s ? (r = e[d].x - a) * r + (n = e[d].y - o) * n : Math.abs(e[d] - a)) < l && (l = r, c = d);
                    return c = !i || l <= i ? e[c] : t, s || c === t || z(t) ? c : c + et(t)
                } : ot(e))
            },
            ct = function(e, t, i, s) {
                return Qe(X(e) ? !t : !0 === i ? !!(i = 0) : !s, (function() {
                    return X(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + .99 * i)) / i) * i * s) / s
                }))
            },
            dt = function(e, t, i) {
                return Qe(i, (function(i) {
                    return e[~~t(i)]
                }))
            },
            ut = function(e) {
                for (var t, i, s, r, n = 0, a = ""; ~(t = e.indexOf("random(", n));) s = e.indexOf(")", t), r = "[" === e.charAt(t + 7), i = e.substr(t + 7, s - t - 7).match(r ? G : Y), a += e.substr(n, t - n) + ct(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), n = s + 1;
                return a + e.substr(n, e.length - n)
            },
            pt = function(e, t, i, s, r) {
                var n = t - e,
                    a = s - i;
                return Qe(r, (function(t) {
                    return i + ((t - e) / n * a || 0)
                }))
            },
            ht = function(e, t, i) {
                var s, r, n, a = e.labels,
                    o = S;
                for (s in a)(r = a[s] - t) < 0 == !!i && r && o > (r = Math.abs(r)) && (n = s, o = r);
                return n
            },
            ft = function(e, t, i) {
                var s, r, n, a = e.vars,
                    o = a[t],
                    l = c,
                    d = e._ctx;
                if (o) return s = a[t + "Params"], r = a.callbackScope || e, i && ae.length && xe(), d && (c = d), n = s ? o.apply(r, s) : o.call(r), c = l, n
            },
            mt = function(e) {
                return Le(e), e.scrollTrigger && e.scrollTrigger.kill(!!l), e.progress() < 1 && ft(e, "onInterrupt"), e
            },
            gt = [],
            vt = function(e) {
                if (R() && e) {
                    var t = (e = !e.name && e.default || e).name,
                        i = I(e),
                        s = t && !i && e.init ? function() {
                            this._props = []
                        } : e,
                        r = {
                            init: te,
                            render: li,
                            add: jt,
                            kill: di,
                            modifier: ci,
                            rawVars: 0
                        },
                        n = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ri,
                            aliases: {},
                            register: 0
                        };
                    if (Pt(), e !== s) {
                        if (le[t]) return;
                        Ee(s, Ee(Pe(e, r), n)), Me(s.prototype, Me(r, Pe(e, n))), le[s.prop = t] = s, e.targetTest && (ue.push(s), ne[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                    }
                    ee(t, s), e.register && e.register(Mi, s, hi)
                } else e && gt.push(e)
            },
            yt = 255,
            bt = {
                aqua: [0, yt, yt],
                lime: [0, yt, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, yt],
                navy: [0, 0, 128],
                white: [yt, yt, yt],
                olive: [128, 128, 0],
                yellow: [yt, yt, 0],
                orange: [yt, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [yt, 0, 0],
                pink: [yt, 192, 203],
                cyan: [0, yt, yt],
                transparent: [yt, yt, yt, 0]
            },
            wt = function(e, t, i) {
                return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * yt + .5 | 0
            },
            xt = function(e, t, i) {
                var s, r, n, a, o, l, c, d, u, p, h = e ? z(e) ? [e >> 16, e >> 8 & yt, e & yt] : 0 : bt.black;
                if (!h) {
                    if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), bt[e]) h = bt[e];
                    else if ("#" === e.charAt(0)) {
                        if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), n = e.charAt(3), e = "#" + s + s + r + r + n + n + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(h = parseInt(e.substr(1, 6), 16)) >> 16, h >> 8 & yt, h & yt, parseInt(e.substr(7), 16) / 255];
                        h = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & yt, e & yt]
                    } else if ("hsl" === e.substr(0, 3))
                        if (h = p = e.match(Y), t) {
                            if (~e.indexOf("=")) return h = e.match(H), i && h.length < 4 && (h[3] = 1), h
                        } else a = +h[0] % 360 / 360, o = +h[1] / 100, s = 2 * (l = +h[2] / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), h.length > 3 && (h[3] *= 1), h[0] = wt(a + 1 / 3, s, r), h[1] = wt(a, s, r), h[2] = wt(a - 1 / 3, s, r);
                    else h = e.match(Y) || bt.transparent;
                    h = h.map(Number)
                }
                return t && !p && (s = h[0] / yt, r = h[1] / yt, n = h[2] / yt, l = ((c = Math.max(s, r, n)) + (d = Math.min(s, r, n))) / 2, c === d ? a = o = 0 : (u = c - d, o = l > .5 ? u / (2 - c - d) : u / (c + d), a = c === s ? (r - n) / u + (r < n ? 6 : 0) : c === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), h[0] = ~~(a + .5), h[1] = ~~(100 * o + .5), h[2] = ~~(100 * l + .5)), i && h.length < 4 && (h[3] = 1), h
            },
            _t = function(e) {
                var t = [],
                    i = [],
                    s = -1;
                return e.split(St).forEach((function(e) {
                    var r = e.match(V) || [];
                    t.push.apply(t, r), i.push(s += r.length + 1)
                })), t.c = i, t
            },
            Tt = function(e, t, i) {
                var s, r, n, a, o = "",
                    l = (e + o).match(St),
                    c = t ? "hsla(" : "rgba(",
                    d = 0;
                if (!l) return e;
                if (l = l.map((function(e) {
                        return (e = xt(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                    })), i && (n = _t(e), (s = i.c).join(o) !== n.c.join(o)))
                    for (a = (r = e.replace(St, "1").split(V)).length - 1; d < a; d++) o += r[d] + (~s.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (n.length ? n : l.length ? l : i).shift());
                if (!r)
                    for (a = (r = e.split(St)).length - 1; d < a; d++) o += r[d] + l[d];
                return o + r[a]
            },
            St = function() {
                var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (e in bt) t += "|" + e + "\\b";
                return new RegExp(t + ")", "gi")
            }(),
            Et = /hsl[a]?\(/,
            Mt = function(e) {
                var t, i = e.join(" ");
                if (St.lastIndex = 0, St.test(i)) return t = Et.test(i), e[1] = Tt(e[1], t), e[0] = Tt(e[0], t, _t(e[1])), !0
            },
            Ct = function() {
                var e, t, i, s, r, n, a = Date.now,
                    o = 500,
                    l = 33,
                    c = a(),
                    d = c,
                    m = 1e3 / 240,
                    g = m,
                    y = [],
                    b = function i(u) {
                        var p, h, f, v, b = a() - d,
                            w = !0 === u;
                        if (b > o && (c += b - l), ((p = (f = (d += b) - c) - g) > 0 || w) && (v = ++s.frame, r = f - 1e3 * s.time, s.time = f /= 1e3, g += p + (p >= m ? 4 : m - p), h = 1), w || (e = t(i)), h)
                            for (n = 0; n < y.length; n++) y[n](f, r, v, u)
                    };
                return s = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        b(!0)
                    },
                    deltaRatio: function(e) {
                        return r / (1e3 / (e || 60))
                    },
                    wake: function() {
                        f && (!p && R() && (u = p = window, h = u.document || {}, U.gsap = Mi, (u.gsapVersions || (u.gsapVersions = [])).push(Mi.version), K(Z || u.GreenSockGlobals || !u.gsap && u || {}), i = u.requestAnimationFrame, gt.forEach(vt)), e && s.sleep(), t = i || function(e) {
                            return setTimeout(e, g - 1e3 * s.time + 1 | 0)
                        }, v = 1, b(2))
                    },
                    sleep: function() {
                        (i ? u.cancelAnimationFrame : clearTimeout)(e), v = 0, t = te
                    },
                    lagSmoothing: function(e, t) {
                        o = e || 1 / 0, l = Math.min(t || 33, o)
                    },
                    fps: function(e) {
                        m = 1e3 / (e || 240), g = 1e3 * s.time + m
                    },
                    add: function(e, t, i) {
                        var r = t ? function(t, i, n, a) {
                            e(t, i, n, a), s.remove(r)
                        } : e;
                        return s.remove(e), y[i ? "unshift" : "push"](r), Pt(), r
                    },
                    remove: function(e, t) {
                        ~(t = y.indexOf(e)) && y.splice(t, 1) && n >= t && n--
                    },
                    _listeners: y
                }
            }(),
            Pt = function() {
                return !v && Ct.wake()
            },
            kt = {},
            At = /^[\d.\-M][\d.\-,\s]/,
            Ot = /["']/g,
            Lt = function(e) {
                for (var t, i, s, r = {}, n = e.substr(1, e.length - 3).split(":"), a = n[0], o = 1, l = n.length; o < l; o++) i = n[o], t = o !== l - 1 ? i.lastIndexOf(",") : i.length, s = i.substr(0, t), r[a] = isNaN(s) ? s.replace(Ot, "").trim() : +s, a = i.substr(t + 1).trim();
                return r
            },
            It = function(e) {
                return function(t) {
                    return 1 - e(1 - t)
                }
            },
            zt = function e(t, i) {
                for (var s, r = t._first; r;) r instanceof Yt ? e(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? e(r.timeline, i) : (s = r._ease, r._ease = r._yEase, r._yEase = s, r._yoyo = i)), r = r._next
            },
            Dt = function(e, t) {
                return e && (I(e) ? e : kt[e] || function(e) {
                    var t, i, s, r, n = (e + "").split("("),
                        a = kt[n[0]];
                    return a && n.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Lt(n[1])] : (t = e, i = t.indexOf("(") + 1, s = t.indexOf(")"), r = t.indexOf("(", i), t.substring(i, ~r && r < s ? t.indexOf(")", s + 1) : s)).split(",").map(Te)) : kt._CE && At.test(e) ? kt._CE("", e) : a
                }(e)) || t
            },
            Bt = function(e, t, i, s) {
                void 0 === i && (i = function(e) {
                    return 1 - t(1 - e)
                }), void 0 === s && (s = function(e) {
                    return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
                });
                var r, n = {
                    easeIn: t,
                    easeOut: i,
                    easeInOut: s
                };
                return ge(e, (function(e) {
                    for (var t in kt[e] = U[e] = n, kt[r = e.toLowerCase()] = i, n) kt[r + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = kt[e + "." + t] = n[t]
                })), n
            },
            $t = function(e) {
                return function(t) {
                    return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
                }
            },
            Rt = function e(t, i, s) {
                var r = i >= 1 ? i : 1,
                    n = (s || (t ? .3 : .45)) / (i < 1 ? i : 1),
                    a = n / M * (Math.asin(1 / r) || 0),
                    o = function(e) {
                        return 1 === e ? 1 : r * Math.pow(2, -10 * e) * O((e - a) * n) + 1
                    },
                    l = "out" === t ? o : "in" === t ? function(e) {
                        return 1 - o(1 - e)
                    } : $t(o);
                return n = M / n, l.config = function(i, s) {
                    return e(t, i, s)
                }, l
            },
            Ft = function e(t, i) {
                void 0 === i && (i = 1.70158);
                var s = function(e) {
                        return e ? --e * e * ((i + 1) * e + i) + 1 : 0
                    },
                    r = "out" === t ? s : "in" === t ? function(e) {
                        return 1 - s(1 - e)
                    } : $t(s);
                return r.config = function(i) {
                    return e(t, i)
                }, r
            };
        ge("Linear,Quad,Cubic,Quart,Quint,Strong", (function(e, t) {
            var i = t < 5 ? t + 1 : t;
            Bt(e + ",Power" + (i - 1), t ? function(e) {
                return Math.pow(e, i)
            } : function(e) {
                return e
            }, (function(e) {
                return 1 - Math.pow(1 - e, i)
            }), (function(e) {
                return e < .5 ? Math.pow(2 * e, i) / 2 : 1 - Math.pow(2 * (1 - e), i) / 2
            }))
        })), kt.Linear.easeNone = kt.none = kt.Linear.easeIn, Bt("Elastic", Rt("in"), Rt("out"), Rt()), y = 7.5625, w = 1 / (b = 2.75), Bt("Bounce", (function(e) {
            return 1 - x(1 - e)
        }), x = function(e) {
            return e < w ? y * e * e : e < .7272727272727273 ? y * Math.pow(e - 1.5 / b, 2) + .75 : e < .9090909090909092 ? y * (e -= 2.25 / b) * e + .9375 : y * Math.pow(e - 2.625 / b, 2) + .984375
        }), Bt("Expo", (function(e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
        })), Bt("Circ", (function(e) {
            return -(k(1 - e * e) - 1)
        })), Bt("Sine", (function(e) {
            return 1 === e ? 1 : 1 - A(e * C)
        })), Bt("Back", Ft("in"), Ft("out"), Ft()), kt.SteppedEase = kt.steps = U.SteppedEase = {
            config: function(e, t) {
                void 0 === e && (e = 1);
                var i = 1 / e,
                    s = e + (t ? 0 : 1),
                    r = t ? 1 : 0;
                return function(e) {
                    return ((s * Je(0, .99999999, e) | 0) + r) * i
                }
            }
        }, T.ease = kt["quad.out"], ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(e) {
            return pe += e + "," + e + "Params,"
        }));
        var Nt = function(e, t) {
                this.id = P++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : me, this.set = t ? t.getSetter : ri
            },
            Xt = function() {
                function e(e) {
                    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ge(this, +e.duration, 1, 1), this.data = e.data, c && (this._ctx = c, c.data.push(this)), v || Ct.wake()
                }
                var t = e.prototype;
                return t.delay = function(e) {
                    return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
                }, t.duration = function(e) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
                }, t.totalDuration = function(e) {
                    return arguments.length ? (this._dirty = 0, Ge(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, t.totalTime = function(e, t) {
                    if (Pt(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (Ne(this, e), !i._dp || i.parent || Xe(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ye(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === E || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), _e(this, e, t)), this
                }, t.time = function(e, t) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Be(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
                }, t.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, t.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Be(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, t.iteration = function(e, t) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (e - 1) * i, t) : this._repeat ? $e(this._tTime, i) + 1 : 1
                }, t.timeScale = function(e) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === e) return this;
                    var t = this.parent && this._ts ? Re(this.parent._time, this) : this._tTime;
                    return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Je(-Math.abs(this._delay), this._tDur, t), !0), Fe(this),
                        function(e) {
                            for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                            return e
                        }(this)
                }, t.paused = function(e) {
                    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== E && (this._tTime -= E)))), this) : this._ps
                }, t.startTime = function(e) {
                    if (arguments.length) {
                        this._start = e;
                        var t = this.parent || this._dp;
                        return t && (t._sort || !this.parent) && Ye(t, this, e - this._delay), this
                    }
                    return this._start
                }, t.endTime = function(e) {
                    return this._start + ($(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }, t.rawTime = function(e) {
                    var t = this.parent || this._dp;
                    return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Re(t.rawTime(e), this) : this._tTime : this._tTime
                }, t.revert = function(e) {
                    void 0 === e && (e = re);
                    var t = l;
                    return l = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), l = t, this
                }, t.globalTime = function(e) {
                    for (var t = this, i = arguments.length ? e : t.rawTime(); t;) i = t._start + i / (t._ts || 1), t = t._dp;
                    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : i
                }, t.repeat = function(e) {
                    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, We(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, t.repeatDelay = function(e) {
                    if (arguments.length) {
                        var t = this._time;
                        return this._rDelay = e, We(this), t ? this.time(t) : this
                    }
                    return this._rDelay
                }, t.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, t.seek = function(e, t) {
                    return this.totalTime(Ze(this, e), $(t))
                }, t.restart = function(e, t) {
                    return this.play().totalTime(e ? -this._delay : 0, $(t))
                }, t.play = function(e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, t.reverse = function(e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, t.pause = function(e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, t.resume = function() {
                    return this.paused(!1)
                }, t.reversed = function(e) {
                    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
                }, t.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, t.isActive = function() {
                    var e, t = this.parent || this._dp,
                        i = this._start;
                    return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= i && e < this.endTime(!0) - E))
                }, t.eventCallback = function(e, t, i) {
                    var s = this.vars;
                    return arguments.length > 1 ? (t ? (s[e] = t, i && (s[e + "Params"] = i), "onUpdate" === e && (this._onUpdate = t)) : delete s[e], this) : s[e]
                }, t.then = function(e) {
                    var t = this;
                    return new Promise((function(i) {
                        var s = I(e) ? e : Se,
                            r = function() {
                                var e = t.then;
                                t.then = null, I(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), i(s), t.then = e
                            };
                        t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? r() : t._prom = r
                    }))
                }, t.kill = function() {
                    mt(this)
                }, e
            }();
        Ee(Xt.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Yt = function(e) {
            function t(t, i) {
                var s;
                return void 0 === t && (t = {}), (s = e.call(this, t) || this).labels = {}, s.smoothChildTiming = !!t.smoothChildTiming, s.autoRemoveChildren = !!t.autoRemoveChildren, s._sort = $(t.sortChildren), d && Ye(t.parent || d, n(s), i), t.reversed && s.reverse(), t.paused && s.paused(!0), t.scrollTrigger && He(n(s), t.scrollTrigger), s
            }
            a(t, e);
            var i = t.prototype;
            return i.to = function(e, t, i) {
                return Ke(0, arguments, this), this
            }, i.from = function(e, t, i) {
                return Ke(1, arguments, this), this
            }, i.fromTo = function(e, t, i, s) {
                return Ke(2, arguments, this), this
            }, i.set = function(e, t, i) {
                return t.duration = 0, t.parent = this, ke(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Jt(e, t, Ze(this, i), 1), this
            }, i.call = function(e, t, i) {
                return Ye(this, Jt.delayedCall(0, e, t), i)
            }, i.staggerTo = function(e, t, i, s, r, n, a) {
                return i.duration = t, i.stagger = i.stagger || s, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new Jt(e, i, Ze(this, r)), this
            }, i.staggerFrom = function(e, t, i, s, r, n, a) {
                return i.runBackwards = 1, ke(i).immediateRender = $(i.immediateRender), this.staggerTo(e, t, i, s, r, n, a)
            }, i.staggerFromTo = function(e, t, i, s, r, n, a, o) {
                return s.startAt = i, ke(s).immediateRender = $(s.immediateRender), this.staggerTo(e, t, s, r, n, a, o)
            }, i.render = function(e, t, i) {
                var s, r, n, a, o, c, u, p, h, f, m, g, v = this._time,
                    y = this._dirty ? this.totalDuration() : this._tDur,
                    b = this._dur,
                    w = e <= 0 ? 0 : ye(e),
                    x = this._zTime < 0 != e < 0 && (this._initted || !b);
                if (this !== d && w > y && e >= 0 && (w = y), w !== this._tTime || i || x) {
                    if (v !== this._time && b && (w += this._time - v, e += this._time - v), s = w, h = this._start, c = !(p = this._ts), x && (b || (v = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                        if (m = this._yoyo, o = b + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * o + e, t, i);
                        if (s = ye(w % o), w === y ? (a = this._repeat, s = b) : ((a = ~~(w / o)) && a === w / o && (s = b, a--), s > b && (s = b)), f = $e(this._tTime, o), !v && this._tTime && f !== a && this._tTime - f * o - this._dur <= 0 && (f = a), m && 1 & a && (s = b - s, g = 1), a !== f && !this._lock) {
                            var _ = m && 1 & f,
                                T = _ === (m && 1 & a);
                            if (a < f && (_ = !_), v = _ ? 0 : w % b ? b : w, this._lock = 1, this.render(v || (g ? 0 : ye(a * o)), t, !b)._lock = 0, this._tTime = w, !t && this.parent && ft(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (b = this._dur, y = this._tDur, T && (this._lock = 2, v = _ ? b : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                            zt(this, g)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(e, t, i) {
                            var s;
                            if (i > t)
                                for (s = e._first; s && s._start <= i;) {
                                    if ("isPause" === s.data && s._start > t) return s;
                                    s = s._next
                                } else
                                    for (s = e._last; s && s._start >= i;) {
                                        if ("isPause" === s.data && s._start < t) return s;
                                        s = s._prev
                                    }
                        }(this, ye(v), ye(s)), u && (w -= s - (s = u._start))), this._tTime = w, this._time = s, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && s && !t && !a && (ft(this, "onStart"), this._tTime !== w)) return this;
                    if (s >= v && e >= 0)
                        for (r = this._first; r;) {
                            if (n = r._next, (r._act || s >= r._start) && r._ts && u !== r) {
                                if (r.parent !== this) return this.render(e, t, i);
                                if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, t, i), s !== this._time || !this._ts && !c) {
                                    u = 0, n && (w += this._zTime = -1e-8);
                                    break
                                }
                            }
                            r = n
                        } else {
                            r = this._last;
                            for (var S = e < 0 ? e : s; r;) {
                                if (n = r._prev, (r._act || S <= r._end) && r._ts && u !== r) {
                                    if (r.parent !== this) return this.render(e, t, i);
                                    if (r.render(r._ts > 0 ? (S - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (S - r._start) * r._ts, t, i || l && (r._initted || r._startAt)), s !== this._time || !this._ts && !c) {
                                        u = 0, n && (w += this._zTime = S ? -1e-8 : E);
                                        break
                                    }
                                }
                                r = n
                            }
                        }
                    if (u && !t && (this.pause(), u.render(s >= v ? 0 : -1e-8)._zTime = s >= v ? 1 : -1, this._ts)) return this._start = h, Fe(this), this.render(e, t, i);
                    this._onUpdate && !t && ft(this, "onUpdate", !0), (w === y && this._tTime >= this.totalDuration() || !w && v) && (h !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((e || !b) && (w === y && this._ts > 0 || !w && this._ts < 0) && Le(this, 1), t || e < 0 && !v || !w && !v && y || (ft(this, w === y && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < y && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, i.add = function(e, t) {
                var i = this;
                if (z(t) || (t = Ze(this, t, e)), !(e instanceof Xt)) {
                    if (X(e)) return e.forEach((function(e) {
                        return i.add(e, t)
                    })), this;
                    if (L(e)) return this.addLabel(e, t);
                    if (!I(e)) return this;
                    e = Jt.delayedCall(0, e)
                }
                return this !== e ? Ye(this, e, t) : this
            }, i.getChildren = function(e, t, i, s) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === i && (i = !0), void 0 === s && (s = -S);
                for (var r = [], n = this._first; n;) n._start >= s && (n instanceof Jt ? t && r.push(n) : (i && r.push(n), e && r.push.apply(r, n.getChildren(!0, t, i)))), n = n._next;
                return r
            }, i.getById = function(e) {
                for (var t = this.getChildren(1, 1, 1), i = t.length; i--;)
                    if (t[i].vars.id === e) return t[i]
            }, i.remove = function(e) {
                return L(e) ? this.removeLabel(e) : I(e) ? this.killTweensOf(e) : (Oe(this, e), e === this._recent && (this._recent = this._last), Ie(this))
            }, i.totalTime = function(t, i) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ye(Ct.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function(e, t) {
                return this.labels[e] = Ze(this, t), this
            }, i.removeLabel = function(e) {
                return delete this.labels[e], this
            }, i.addPause = function(e, t, i) {
                var s = Jt.delayedCall(0, t || te, i);
                return s.data = "isPause", this._hasPause = 1, Ye(this, s, Ze(this, e))
            }, i.removePause = function(e) {
                var t = this._first;
                for (e = Ze(this, e); t;) t._start === e && "isPause" === t.data && Le(t), t = t._next
            }, i.killTweensOf = function(e, t, i) {
                for (var s = this.getTweensOf(e, i), r = s.length; r--;) Ht !== s[r] && s[r].kill(e, t);
                return this
            }, i.getTweensOf = function(e, t) {
                for (var i, s = [], r = st(e), n = this._first, a = z(t); n;) n instanceof Jt ? we(n._targets, r) && (a ? (!Ht || n._initted && n._ts) && n.globalTime(0) <= t && n.globalTime(n.totalDuration()) > t : !t || n.isActive()) && s.push(n) : (i = n.getTweensOf(r, t)).length && s.push.apply(s, i), n = n._next;
                return s
            }, i.tweenTo = function(e, t) {
                t = t || {};
                var i, s = this,
                    r = Ze(s, e),
                    n = t,
                    a = n.startAt,
                    o = n.onStart,
                    l = n.onStartParams,
                    c = n.immediateRender,
                    d = Jt.to(s, Ee({
                        ease: t.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: r,
                        overwrite: "auto",
                        duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale()) || E,
                        onStart: function() {
                            if (s.pause(), !i) {
                                var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale());
                                d._dur !== e && Ge(d, e, 0, 1).render(d._time, !0, !0), i = 1
                            }
                            o && o.apply(d, l || [])
                        }
                    }, t));
                return c ? d.render(0) : d
            }, i.tweenFromTo = function(e, t, i) {
                return this.tweenTo(t, Ee({
                    startAt: {
                        time: Ze(this, e)
                    }
                }, i))
            }, i.recent = function() {
                return this._recent
            }, i.nextLabel = function(e) {
                return void 0 === e && (e = this._time), ht(this, Ze(this, e))
            }, i.previousLabel = function(e) {
                return void 0 === e && (e = this._time), ht(this, Ze(this, e), 1)
            }, i.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + E)
            }, i.shiftChildren = function(e, t, i) {
                void 0 === i && (i = 0);
                for (var s, r = this._first, n = this.labels; r;) r._start >= i && (r._start += e, r._end += e), r = r._next;
                if (t)
                    for (s in n) n[s] >= i && (n[s] += e);
                return Ie(this)
            }, i.invalidate = function(t) {
                var i = this._first;
                for (this._lock = 0; i;) i.invalidate(t), i = i._next;
                return e.prototype.invalidate.call(this, t)
            }, i.clear = function(e) {
                void 0 === e && (e = !0);
                for (var t, i = this._first; i;) t = i._next, this.remove(i), i = t;
                return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Ie(this)
            }, i.totalDuration = function(e) {
                var t, i, s, r = 0,
                    n = this,
                    a = n._last,
                    o = S;
                if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
                if (n._dirty) {
                    for (s = n.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, Ye(n, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += i / n._ts, n._time -= i, n._tTime -= i), n.shiftChildren(-i, !1, -Infinity), o = 0), a._end > r && a._ts && (r = a._end), a = t;
                    Ge(n, n === d && n._time > r ? n._time : r, 1, 1), n._dirty = 0
                }
                return n._tDur
            }, t.updateRoot = function(e) {
                if (d._ts && (_e(d, Re(e, d)), m = Ct.frame), Ct.frame >= de) {
                    de += _.autoSleep || 120;
                    var t = d._first;
                    if ((!t || !t._ts) && _.autoSleep && Ct._listeners.length < 2) {
                        for (; t && !t._ts;) t = t._next;
                        t || Ct.sleep()
                    }
                }
            }, t
        }(Xt);
        Ee(Yt.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ht, Vt, qt = function(e, t, i, s, r, n, a) {
                var o, l, c, d, u, p, h, f, m = new hi(this._pt, e, t, 0, 1, oi, null, r),
                    g = 0,
                    v = 0;
                for (m.b = i, m.e = s, i += "", (h = ~(s += "").indexOf("random(")) && (s = ut(s)), n && (n(f = [i, s], e, t), i = f[0], s = f[1]), l = i.match(q) || []; o = q.exec(s);) d = o[0], u = s.substring(g, o.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), d !== l[v++] && (p = parseFloat(l[v - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: u || 1 === v ? u : ",",
                    s: p,
                    c: "=" === d.charAt(1) ? be(p, d) - p : parseFloat(d) - p,
                    m: c && c < 4 ? Math.round : 0
                }, g = q.lastIndex);
                return m.c = g < s.length ? s.substring(g, s.length) : "", m.fp = a, (j.test(s) || h) && (m.e = 0), this._pt = m, m
            },
            jt = function(e, t, i, s, r, n, a, o, l, c) {
                I(s) && (s = s(r || 0, e, n));
                var d, u = e[t],
                    p = "get" !== i ? i : I(u) ? l ? e[t.indexOf("set") || !I(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : u,
                    h = I(u) ? l ? ii : ti : ei;
                if (L(s) && (~s.indexOf("random(") && (s = ut(s)), "=" === s.charAt(1) && ((d = be(p, s) + (et(p) || 0)) || 0 === d) && (s = d)), !c || p !== s || Vt) return isNaN(p * s) || "" === s ? (!u && !(t in e) && Q(t, s), qt.call(this, e, t, p, s, h, o || _.stringFilter, l)) : (d = new hi(this._pt, e, t, +p || 0, s - (p || 0), "boolean" == typeof u ? ai : ni, 0, h), l && (d.fp = l), a && d.modifier(a, this, e), this._pt = d)
            },
            Gt = function(e, t, i, s, r, n) {
                var a, o, l, c;
                if (le[e] && !1 !== (a = new le[e]).init(r, a.rawVars ? t[e] : function(e, t, i, s, r) {
                        if (I(e) && (e = Zt(e, r, t, i, s)), !B(e) || e.style && e.nodeType || X(e) || N(e)) return L(e) ? Zt(e, r, t, i, s) : e;
                        var n, a = {};
                        for (n in e) a[n] = Zt(e[n], r, t, i, s);
                        return a
                    }(t[e], s, r, n, i), i, s, n) && (i._pt = o = new hi(i._pt, r, e, 0, 1, a.render, a, 0, a.priority), i !== g))
                    for (l = i._ptLookup[i._targets.indexOf(r)], c = a._props.length; c--;) l[a._props[c]] = o;
                return a
            },
            Wt = function e(t, i, s) {
                var r, n, a, c, u, p, h, f, m, g, v, y, b, w = t.vars,
                    x = w.ease,
                    _ = w.startAt,
                    M = w.immediateRender,
                    C = w.lazy,
                    P = w.onUpdate,
                    k = w.onUpdateParams,
                    A = w.callbackScope,
                    O = w.runBackwards,
                    L = w.yoyoEase,
                    I = w.keyframes,
                    z = w.autoRevert,
                    D = t._dur,
                    B = t._startAt,
                    R = t._targets,
                    F = t.parent,
                    N = F && "nested" === F.data ? F.vars.targets : R,
                    X = "auto" === t._overwrite && !o,
                    Y = t.timeline;
                if (Y && (!I || !x) && (x = "none"), t._ease = Dt(x, T.ease), t._yEase = L ? It(Dt(!0 === L ? x : L, T.ease)) : 0, L && t._yoyo && !t._repeat && (L = t._yEase, t._yEase = t._ease, t._ease = L), t._from = !Y && !!w.runBackwards, !Y || I && !w.stagger) {
                    if (y = (f = R[0] ? fe(R[0]).harness : 0) && w[f.prop], r = Pe(w, ne), B && (B._zTime < 0 && B.progress(1), i < 0 && O && M && !z ? B.render(-1, !0) : B.revert(O && D ? se : ie), B._lazy = 0), _) {
                        if (Le(t._startAt = Jt.set(R, Ee({
                                data: "isStart",
                                overwrite: !1,
                                parent: F,
                                immediateRender: !0,
                                lazy: !B && $(C),
                                startAt: null,
                                delay: 0,
                                onUpdate: P,
                                onUpdateParams: k,
                                callbackScope: A,
                                stagger: 0
                            }, _))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (l || !M && !z) && t._startAt.revert(se), M && D && i <= 0 && s <= 0) return void(i && (t._zTime = i))
                    } else if (O && D && !B)
                        if (i && (M = !1), a = Ee({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: M && !B && $(C),
                                immediateRender: M,
                                stagger: 0,
                                parent: F
                            }, r), y && (a[f.prop] = y), Le(t._startAt = Jt.set(R, a)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (l ? t._startAt.revert(se) : t._startAt.render(-1, !0)), t._zTime = i, M) {
                            if (!i) return
                        } else e(t._startAt, E, E);
                    for (t._pt = t._ptCache = 0, C = D && $(C) || C && !D, n = 0; n < R.length; n++) {
                        if (h = (u = R[n])._gsap || he(R)[n]._gsap, t._ptLookup[n] = g = {}, oe[h.id] && ae.length && xe(), v = N === R ? n : N.indexOf(u), f && !1 !== (m = new f).init(u, y || r, t, v, N) && (t._pt = c = new hi(t._pt, u, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function(e) {
                                g[e] = c
                            })), m.priority && (p = 1)), !f || y)
                            for (a in r) le[a] && (m = Gt(a, r, t, v, u, N)) ? m.priority && (p = 1) : g[a] = c = jt.call(t, u, a, "get", r[a], v, N, 0, w.stringFilter);
                        t._op && t._op[n] && t.kill(u, t._op[n]), X && t._pt && (Ht = t, d.killTweensOf(u, g, t.globalTime(i)), b = !t.parent, Ht = 0), t._pt && C && (oe[h.id] = 1)
                    }
                    p && pi(t), t._onInit && t._onInit(t)
                }
                t._onUpdate = P, t._initted = (!t._op || t._pt) && !b, I && i <= 0 && Y.render(S, !0, !0)
            },
            Ut = function(e, t, i, s) {
                var r, n, a = t.ease || s || "power1.inOut";
                if (X(t)) n = i[e] || (i[e] = []), t.forEach((function(e, i) {
                    return n.push({
                        t: i / (t.length - 1) * 100,
                        v: e,
                        e: a
                    })
                }));
                else
                    for (r in t) n = i[r] || (i[r] = []), "ease" === r || n.push({
                        t: parseFloat(e),
                        v: t[r],
                        e: a
                    })
            },
            Zt = function(e, t, i, s, r) {
                return I(e) ? e.call(t, i, s, r) : L(e) && ~e.indexOf("random(") ? ut(e) : e
            },
            Kt = pe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            Qt = {};
        ge(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", (function(e) {
            return Qt[e] = 1
        }));
        var Jt = function(e) {
            function t(t, i, s, r) {
                var a;
                "number" == typeof i && (s.duration = i, i = s, s = null);
                var l, c, u, p, h, f, m, g, v = (a = e.call(this, r ? i : ke(i)) || this).vars,
                    y = v.duration,
                    b = v.delay,
                    w = v.immediateRender,
                    x = v.stagger,
                    T = v.overwrite,
                    S = v.keyframes,
                    E = v.defaults,
                    M = v.scrollTrigger,
                    C = v.yoyoEase,
                    P = i.parent || d,
                    k = (X(t) || N(t) ? z(t[0]) : "length" in i) ? [t] : st(t);
                if (a._targets = k.length ? he(k) : J("GSAP target " + t + " not found. https://greensock.com", !_.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, S || x || F(y) || F(b)) {
                    if (i = a.vars, (l = a.timeline = new Yt({
                            data: "nested",
                            defaults: E || {},
                            targets: P && "nested" === P.data ? P.vars.targets : k
                        })).kill(), l.parent = l._dp = n(a), l._start = 0, x || F(y) || F(b)) {
                        if (p = k.length, m = x && at(x), B(x))
                            for (h in x) ~Kt.indexOf(h) && (g || (g = {}), g[h] = x[h]);
                        for (c = 0; c < p; c++)(u = Pe(i, Qt)).stagger = 0, C && (u.yoyoEase = C), g && Me(u, g), f = k[c], u.duration = +Zt(y, n(a), c, f, k), u.delay = (+Zt(b, n(a), c, f, k) || 0) - a._delay, !x && 1 === p && u.delay && (a._delay = b = u.delay, a._start += b, u.delay = 0), l.to(f, u, m ? m(c, f, k) : 0), l._ease = kt.none;
                        l.duration() ? y = b = 0 : a.timeline = 0
                    } else if (S) {
                        ke(Ee(l.vars.defaults, {
                            ease: "none"
                        })), l._ease = Dt(S.ease || i.ease || "none");
                        var A, O, L, I = 0;
                        if (X(S)) S.forEach((function(e) {
                            return l.to(k, e, ">")
                        })), l.duration();
                        else {
                            for (h in u = {}, S) "ease" === h || "easeEach" === h || Ut(h, S[h], u, S.easeEach);
                            for (h in u)
                                for (A = u[h].sort((function(e, t) {
                                        return e.t - t.t
                                    })), I = 0, c = 0; c < A.length; c++)(L = {
                                    ease: (O = A[c]).e,
                                    duration: (O.t - (c ? A[c - 1].t : 0)) / 100 * y
                                })[h] = O.v, l.to(k, L, I), I += L.duration;
                            l.duration() < y && l.to({}, {
                                duration: y - l.duration()
                            })
                        }
                    }
                    y || a.duration(y = l.duration())
                } else a.timeline = 0;
                return !0 !== T || o || (Ht = n(a), d.killTweensOf(k), Ht = 0), Ye(P, n(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (w || !y && !S && a._start === ye(P._time) && $(w) && De(n(a)) && "nested" !== P.data) && (a._tTime = -1e-8, a.render(Math.max(0, -b) || 0)), M && He(n(a), M), a
            }
            a(t, e);
            var i = t.prototype;
            return i.render = function(e, t, i) {
                var s, r, n, a, o, c, d, u, p, h = this._time,
                    f = this._tDur,
                    m = this._dur,
                    g = e < 0,
                    v = e > f - E && !g ? f : e < E ? 0 : e;
                if (m) {
                    if (v !== this._tTime || !e || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                        if (s = v, u = this.timeline, this._repeat) {
                            if (a = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * a + e, t, i);
                            if (s = ye(v % a), v === f ? (n = this._repeat, s = m) : ((n = ~~(v / a)) && n === v / a && (s = m, n--), s > m && (s = m)), (c = this._yoyo && 1 & n) && (p = this._yEase, s = m - s), o = $e(this._tTime, a), s === h && !i && this._initted) return this._tTime = v, this;
                            n !== o && (u && this._yEase && zt(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = i = 1, this.render(ye(a * n), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ve(this, g ? e : s, i, t, v)) return this._tTime = 0, this;
                            if (h !== this._time) return this;
                            if (m !== this._dur) return this.render(e, t, i)
                        }
                        if (this._tTime = v, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (p || this._ease)(s / m), this._from && (this.ratio = d = 1 - d), s && !h && !t && !n && (ft(this, "onStart"), this._tTime !== v)) return this;
                        for (r = this._pt; r;) r.r(d, r.d), r = r._next;
                        u && u.render(e < 0 ? e : !s && c ? -1e-8 : u._dur * u._ease(s / this._dur), t, i) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && ze(this, e, 0, i), ft(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !t && this.parent && ft(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && ze(this, e, 0, !0), (e || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Le(this, 1), t || g && !h || !(v || h || c) || (ft(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(e, t, i, s) {
                    var r, n, a, o = e.ratio,
                        c = t < 0 || !t && (!e._start && qe(e) && (e._initted || !je(e)) || (e._ts < 0 || e._dp._ts < 0) && !je(e)) ? 0 : 1,
                        d = e._rDelay,
                        u = 0;
                    if (d && e._repeat && (u = Je(0, e._tDur, t), n = $e(u, d), e._yoyo && 1 & n && (c = 1 - c), n !== $e(e._tTime, d) && (o = 1 - c, e.vars.repeatRefresh && e._initted && e.invalidate())), c !== o || l || s || e._zTime === E || !t && e._zTime) {
                        if (!e._initted && Ve(e, t, s, i, u)) return;
                        for (a = e._zTime, e._zTime = t || (i ? E : 0), i || (i = t && !a), e.ratio = c, e._from && (c = 1 - c), e._time = 0, e._tTime = u, r = e._pt; r;) r.r(c, r.d), r = r._next;
                        t < 0 && ze(e, t, 0, !0), e._onUpdate && !i && ft(e, "onUpdate"), u && e._repeat && !i && e.parent && ft(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === c && (c && Le(e, 1), i || l || (ft(e, c ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, i);
                return this
            }, i.targets = function() {
                return this._targets
            }, i.invalidate = function(t) {
                return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
            }, i.resetTo = function(e, t, i, s) {
                v || Ct.wake(), this._ts || this.play();
                var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || Wt(this, r),
                    function(e, t, i, s, r, n, a) {
                        var o, l, c, d, u = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                        if (!u)
                            for (u = e._ptCache[t] = [], c = e._ptLookup, d = e._targets.length; d--;) {
                                if ((o = c[d][t]) && o.d && o.d._pt)
                                    for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                                if (!o) return Vt = 1, e.vars[t] = "+=0", Wt(e, a), Vt = 0, 1;
                                u.push(o)
                            }
                        for (d = u.length; d--;)(o = (l = u[d])._pt || l).s = !s && 0 !== s || r ? o.s + (s || 0) + n * o.c : s, o.c = i - o.s, l.e && (l.e = ve(i) + et(l.e)), l.b && (l.b = o.s + et(l.b))
                    }(this, e, t, i, s, this._ease(r / this._dur), r) ? this.resetTo(e, t, i, s) : (Ne(this, 0), this.parent || Ae(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, i.kill = function(e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? mt(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Ht && !0 !== Ht.vars.overwrite)._first || mt(this), this.parent && i !== this.timeline.totalDuration() && Ge(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var s, r, n, a, o, l, c, d = this._targets,
                    u = e ? st(e) : d,
                    p = this._ptLookup,
                    h = this._pt;
                if ((!t || "all" === t) && function(e, t) {
                        for (var i = e.length, s = i === t.length; s && i-- && e[i] === t[i];);
                        return i < 0
                    }(d, u)) return "all" === t && (this._pt = 0), mt(this);
                for (s = this._op = this._op || [], "all" !== t && (L(t) && (o = {}, ge(t, (function(e) {
                        return o[e] = 1
                    })), t = o), t = function(e, t) {
                        var i, s, r, n, a = e[0] ? fe(e[0]).harness : 0,
                            o = a && a.aliases;
                        if (!o) return t;
                        for (s in i = Me({}, t), o)
                            if (s in i)
                                for (r = (n = o[s].split(",")).length; r--;) i[n[r]] = i[s];
                        return i
                    }(d, t)), c = d.length; c--;)
                    if (~u.indexOf(d[c]))
                        for (o in r = p[c], "all" === t ? (s[c] = t, a = r, n = {}) : (n = s[c] = s[c] || {}, a = t), a)(l = r && r[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Oe(this, l, "_pt"), delete r[o]), "all" !== n && (n[o] = 1);
                return this._initted && !this._pt && h && mt(this), this
            }, t.to = function(e, i) {
                return new t(e, i, arguments[2])
            }, t.from = function(e, t) {
                return Ke(1, arguments)
            }, t.delayedCall = function(e, i, s, r) {
                return new t(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: s,
                    onReverseCompleteParams: s,
                    callbackScope: r
                })
            }, t.fromTo = function(e, t, i) {
                return Ke(2, arguments)
            }, t.set = function(e, i) {
                return i.duration = 0, i.repeatDelay || (i.repeat = 0), new t(e, i)
            }, t.killTweensOf = function(e, t, i) {
                return d.killTweensOf(e, t, i)
            }, t
        }(Xt);
        Ee(Jt.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), ge("staggerTo,staggerFrom,staggerFromTo", (function(e) {
            Jt[e] = function() {
                var t = new Yt,
                    i = tt.call(arguments, 0);
                return i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
            }
        }));
        var ei = function(e, t, i) {
                return e[t] = i
            },
            ti = function(e, t, i) {
                return e[t](i)
            },
            ii = function(e, t, i, s) {
                return e[t](s.fp, i)
            },
            si = function(e, t, i) {
                return e.setAttribute(t, i)
            },
            ri = function(e, t) {
                return I(e[t]) ? ti : D(e[t]) && e.setAttribute ? si : ei
            },
            ni = function(e, t) {
                return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
            },
            ai = function(e, t) {
                return t.set(t.t, t.p, !!(t.s + t.c * e), t)
            },
            oi = function(e, t) {
                var i = t._pt,
                    s = "";
                if (!e && t.b) s = t.b;
                else if (1 === e && t.e) s = t.e;
                else {
                    for (; i;) s = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round(1e4 * (i.s + i.c * e)) / 1e4) + s, i = i._next;
                    s += t.c
                }
                t.set(t.t, t.p, s, t)
            },
            li = function(e, t) {
                for (var i = t._pt; i;) i.r(e, i.d), i = i._next
            },
            ci = function(e, t, i, s) {
                for (var r, n = this._pt; n;) r = n._next, n.p === s && n.modifier(e, t, i), n = r
            },
            di = function(e) {
                for (var t, i, s = this._pt; s;) i = s._next, s.p === e && !s.op || s.op === e ? Oe(this, s, "_pt") : s.dep || (t = 1), s = i;
                return !t
            },
            ui = function(e, t, i, s) {
                s.mSet(e, t, s.m.call(s.tween, i, s.mt), s)
            },
            pi = function(e) {
                for (var t, i, s, r, n = e._pt; n;) {
                    for (t = n._next, i = s; i && i.pr > n.pr;) i = i._next;
                    (n._prev = i ? i._prev : r) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : r = n, n = t
                }
                e._pt = s
            },
            hi = function() {
                function e(e, t, i, s, r, n, a, o, l) {
                    this.t = t, this.s = s, this.c = r, this.p = i, this.r = n || ni, this.d = a || this, this.set = o || ei, this.pr = l || 0, this._next = e, e && (e._prev = this)
                }
                return e.prototype.modifier = function(e, t, i) {
                    this.mSet = this.mSet || this.set, this.set = ui, this.m = e, this.mt = i, this.tween = t
                }, e
            }();
        ge(pe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(e) {
            return ne[e] = 1
        })), U.TweenMax = U.TweenLite = Jt, U.TimelineLite = U.TimelineMax = Yt, d = new Yt({
            sortChildren: !1,
            defaults: T,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), _.stringFilter = Mt;
        var fi = [],
            mi = {},
            gi = [],
            vi = 0,
            yi = 0,
            bi = function(e) {
                return (mi[e] || gi).map((function(e) {
                    return e()
                }))
            },
            wi = function() {
                var e = Date.now(),
                    t = [];
                e - vi > 2 && (bi("matchMediaInit"), fi.forEach((function(e) {
                    var i, s, r, n, a = e.queries,
                        o = e.conditions;
                    for (s in a)(i = u.matchMedia(a[s]).matches) && (r = 1), i !== o[s] && (o[s] = i, n = 1);
                    n && (e.revert(), r && t.push(e))
                })), bi("matchMediaRevert"), t.forEach((function(e) {
                    return e.onMatch(e)
                })), vi = e, bi("matchMedia"))
            },
            xi = function() {
                function e(e, t) {
                    this.selector = t && rt(t), this.data = [], this._r = [], this.isReverted = !1, this.id = yi++, e && this.add(e)
                }
                var t = e.prototype;
                return t.add = function(e, t, i) {
                    I(e) && (i = t, t = e, e = I);
                    var s = this,
                        r = function() {
                            var e, r = c,
                                n = s.selector;
                            return r && r !== s && r.data.push(s), i && (s.selector = rt(i)), c = s, e = t.apply(s, arguments), I(e) && s._r.push(e), c = r, s.selector = n, s.isReverted = !1, e
                        };
                    return s.last = r, e === I ? r(s) : e ? s[e] = r : r
                }, t.ignore = function(e) {
                    var t = c;
                    c = null, e(this), c = t
                }, t.getTweens = function() {
                    var t = [];
                    return this.data.forEach((function(i) {
                        return i instanceof e ? t.push.apply(t, i.getTweens()) : i instanceof Jt && !(i.parent && "nested" === i.parent.data) && t.push(i)
                    })), t
                }, t.clear = function() {
                    this._r.length = this.data.length = 0
                }, t.kill = function(e, t) {
                    var i = this;
                    if (e) {
                        var s = this.getTweens();
                        this.data.forEach((function(e) {
                            "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(e) {
                                return s.splice(s.indexOf(e), 1)
                            })))
                        })), s.map((function(e) {
                            return {
                                g: e.globalTime(0),
                                t: e
                            }
                        })).sort((function(e, t) {
                            return t.g - e.g || -1 / 0
                        })).forEach((function(t) {
                            return t.t.revert(e)
                        })), this.data.forEach((function(t) {
                            return !(t instanceof Jt) && t.revert && t.revert(e)
                        })), this._r.forEach((function(t) {
                            return t(e, i)
                        })), this.isReverted = !0
                    } else this.data.forEach((function(e) {
                        return e.kill && e.kill()
                    }));
                    if (this.clear(), t)
                        for (var r = fi.length; r--;) fi[r].id === this.id && fi.splice(r, 1)
                }, t.revert = function(e) {
                    this.kill(e || {})
                }, e
            }(),
            _i = function() {
                function e(e) {
                    this.contexts = [], this.scope = e
                }
                var t = e.prototype;
                return t.add = function(e, t, i) {
                    B(e) || (e = {
                        matches: e
                    });
                    var s, r, n, a = new xi(0, i || this.scope),
                        o = a.conditions = {};
                    for (r in c && !a.selector && (a.selector = c.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === r ? n = 1 : (s = u.matchMedia(e[r])) && (fi.indexOf(a) < 0 && fi.push(a), (o[r] = s.matches) && (n = 1), s.addListener ? s.addListener(wi) : s.addEventListener("change", wi));
                    return n && t(a), this
                }, t.revert = function(e) {
                    this.kill(e || {})
                }, t.kill = function(e) {
                    this.contexts.forEach((function(t) {
                        return t.kill(e, !0)
                    }))
                }, e
            }(),
            Ti = {
                registerPlugin: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    t.forEach((function(e) {
                        return vt(e)
                    }))
                },
                timeline: function(e) {
                    return new Yt(e)
                },
                getTweensOf: function(e, t) {
                    return d.getTweensOf(e, t)
                },
                getProperty: function(e, t, i, s) {
                    L(e) && (e = st(e)[0]);
                    var r = fe(e || {}).get,
                        n = i ? Se : Te;
                    return "native" === i && (i = ""), e ? t ? n((le[t] && le[t].get || r)(e, t, i, s)) : function(t, i, s) {
                        return n((le[t] && le[t].get || r)(e, t, i, s))
                    } : e
                },
                quickSetter: function(e, t, i) {
                    if ((e = st(e)).length > 1) {
                        var s = e.map((function(e) {
                                return Mi.quickSetter(e, t, i)
                            })),
                            r = s.length;
                        return function(e) {
                            for (var t = r; t--;) s[t](e)
                        }
                    }
                    e = e[0] || {};
                    var n = le[t],
                        a = fe(e),
                        o = a.harness && (a.harness.aliases || {})[t] || t,
                        l = n ? function(t) {
                            var s = new n;
                            g._pt = 0, s.init(e, i ? t + i : t, g, 0, [e]), s.render(1, s), g._pt && li(1, g)
                        } : a.set(e, o);
                    return n ? l : function(t) {
                        return l(e, o, i ? t + i : t, a, 1)
                    }
                },
                quickTo: function(e, t, i) {
                    var s, r = Mi.to(e, Me(((s = {})[t] = "+=0.1", s.paused = !0, s), i || {})),
                        n = function(e, i, s) {
                            return r.resetTo(t, e, i, s)
                        };
                    return n.tween = r, n
                },
                isTweening: function(e) {
                    return d.getTweensOf(e, !0).length > 0
                },
                defaults: function(e) {
                    return e && e.ease && (e.ease = Dt(e.ease, T.ease)), Ce(T, e || {})
                },
                config: function(e) {
                    return Ce(_, e || {})
                },
                registerEffect: function(e) {
                    var t = e.name,
                        i = e.effect,
                        s = e.plugins,
                        r = e.defaults,
                        n = e.extendTimeline;
                    (s || "").split(",").forEach((function(e) {
                        return e && !le[e] && !U[e] && J(t + " effect requires " + e + " plugin.")
                    })), ce[t] = function(e, t, s) {
                        return i(st(e), Ee(t || {}, r), s)
                    }, n && (Yt.prototype[t] = function(e, i, s) {
                        return this.add(ce[t](e, B(i) ? i : (s = i) && {}, this), s)
                    })
                },
                registerEase: function(e, t) {
                    kt[e] = Dt(t)
                },
                parseEase: function(e, t) {
                    return arguments.length ? Dt(e, t) : kt
                },
                getById: function(e) {
                    return d.getById(e)
                },
                exportRoot: function(e, t) {
                    void 0 === e && (e = {});
                    var i, s, r = new Yt(e);
                    for (r.smoothChildTiming = $(e.smoothChildTiming), d.remove(r), r._dp = 0, r._time = r._tTime = d._time, i = d._first; i;) s = i._next, !t && !i._dur && i instanceof Jt && i.vars.onComplete === i._targets[0] || Ye(r, i, i._start - i._delay), i = s;
                    return Ye(d, r, 0), r
                },
                context: function(e, t) {
                    return e ? new xi(e, t) : c
                },
                matchMedia: function(e) {
                    return new _i(e)
                },
                matchMediaRefresh: function() {
                    return fi.forEach((function(e) {
                        var t, i, s = e.conditions;
                        for (i in s) s[i] && (s[i] = !1, t = 1);
                        t && e.revert()
                    })) || wi()
                },
                addEventListener: function(e, t) {
                    var i = mi[e] || (mi[e] = []);
                    ~i.indexOf(t) || i.push(t)
                },
                removeEventListener: function(e, t) {
                    var i = mi[e],
                        s = i && i.indexOf(t);
                    s >= 0 && i.splice(s, 1)
                },
                utils: {
                    wrap: function e(t, i, s) {
                        var r = i - t;
                        return X(t) ? dt(t, e(0, t.length), i) : Qe(s, (function(e) {
                            return (r + (e - t) % r) % r + t
                        }))
                    },
                    wrapYoyo: function e(t, i, s) {
                        var r = i - t,
                            n = 2 * r;
                        return X(t) ? dt(t, e(0, t.length - 1), i) : Qe(s, (function(e) {
                            return t + ((e = (n + (e - t) % n) % n || 0) > r ? n - e : e)
                        }))
                    },
                    distribute: at,
                    random: ct,
                    snap: lt,
                    normalize: function(e, t, i) {
                        return pt(e, t, 0, 1, i)
                    },
                    getUnit: et,
                    clamp: function(e, t, i) {
                        return Qe(i, (function(i) {
                            return Je(e, t, i)
                        }))
                    },
                    splitColor: xt,
                    toArray: st,
                    selector: rt,
                    mapRange: pt,
                    pipe: function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return function(e) {
                            return t.reduce((function(e, t) {
                                return t(e)
                            }), e)
                        }
                    },
                    unitize: function(e, t) {
                        return function(i) {
                            return e(parseFloat(i)) + (t || et(i))
                        }
                    },
                    interpolate: function e(t, i, s, r) {
                        var n = isNaN(t + i) ? 0 : function(e) {
                            return (1 - e) * t + e * i
                        };
                        if (!n) {
                            var a, o, l, c, d, u = L(t),
                                p = {};
                            if (!0 === s && (r = 1) && (s = null), u) t = {
                                p: t
                            }, i = {
                                p: i
                            };
                            else if (X(t) && !X(i)) {
                                for (l = [], c = t.length, d = c - 2, o = 1; o < c; o++) l.push(e(t[o - 1], t[o]));
                                c--, n = function(e) {
                                    e *= c;
                                    var t = Math.min(d, ~~e);
                                    return l[t](e - t)
                                }, s = i
                            } else r || (t = Me(X(t) ? [] : {}, t));
                            if (!l) {
                                for (a in i) jt.call(p, t, a, "get", i[a]);
                                n = function(e) {
                                    return li(e, p) || (u ? t.p : t)
                                }
                            }
                        }
                        return Qe(s, n)
                    },
                    shuffle: nt
                },
                install: K,
                effects: ce,
                ticker: Ct,
                updateRoot: Yt.updateRoot,
                plugins: le,
                globalTimeline: d,
                core: {
                    PropTween: hi,
                    globals: ee,
                    Tween: Jt,
                    Timeline: Yt,
                    Animation: Xt,
                    getCache: fe,
                    _removeLinkedListItem: Oe,
                    reverting: function() {
                        return l
                    },
                    context: function(e) {
                        return e && c && (c.data.push(e), e._ctx = c), c
                    },
                    suppressOverwrites: function(e) {
                        return o = e
                    }
                }
            };
        ge("to,from,fromTo,delayedCall,set,killTweensOf", (function(e) {
            return Ti[e] = Jt[e]
        })), Ct.add(Yt.updateRoot), g = Ti.to({}, {
            duration: 0
        });
        var Si = function(e, t) {
                for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
                return i
            },
            Ei = function(e, t) {
                return {
                    name: e,
                    rawVars: 1,
                    init: function(e, i, s) {
                        s._onInit = function(e) {
                            var s, r;
                            if (L(i) && (s = {}, ge(i, (function(e) {
                                    return s[e] = 1
                                })), i = s), t) {
                                for (r in s = {}, i) s[r] = t(i[r]);
                                i = s
                            }! function(e, t) {
                                var i, s, r, n = e._targets;
                                for (i in t)
                                    for (s = n.length; s--;)(r = e._ptLookup[s][i]) && (r = r.d) && (r._pt && (r = Si(r, i)), r && r.modifier && r.modifier(t[i], e, n[s], i))
                            }(e, i)
                        }
                    }
                }
            },
            Mi = Ti.registerPlugin({
                name: "attr",
                init: function(e, t, i, s, r) {
                    var n, a, o;
                    for (n in this.tween = i, t) o = e.getAttribute(n) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[n], s, r, 0, 0, n)).op = n, a.b = o, this._props.push(n)
                },
                render: function(e, t) {
                    for (var i = t._pt; i;) l ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
                }
            }, {
                name: "endArray",
                init: function(e, t) {
                    for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
                }
            }, Ei("roundProps", ot), Ei("modifiers"), Ei("snap", lt)) || Ti;
        Jt.version = Yt.version = Mi.version = "3.12.2", f = 1, R() && Pt(), kt.Power0, kt.Power1, kt.Power2, kt.Power3, kt.Power4, kt.Linear, kt.Quad, kt.Cubic, kt.Quart, kt.Quint, kt.Strong, kt.Elastic, kt.Back, kt.SteppedEase, kt.Bounce, kt.Sine, kt.Expo, kt.Circ;
        var Ci, Pi, ki, Ai, Oi, Li, Ii, zi, Di = {},
            Bi = 180 / Math.PI,
            $i = Math.PI / 180,
            Ri = Math.atan2,
            Fi = /([A-Z])/g,
            Ni = /(left|right|width|margin|padding|x)/i,
            Xi = /[\s,\(]\S/,
            Yi = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            Hi = function(e, t) {
                return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            Vi = function(e, t) {
                return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            qi = function(e, t) {
                return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
            },
            ji = function(e, t) {
                var i = t.s + t.c * e;
                t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
            },
            Gi = function(e, t) {
                return t.set(t.t, t.p, e ? t.e : t.b, t)
            },
            Wi = function(e, t) {
                return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
            },
            Ui = function(e, t, i) {
                return e.style[t] = i
            },
            Zi = function(e, t, i) {
                return e.style.setProperty(t, i)
            },
            Ki = function(e, t, i) {
                return e._gsap[t] = i
            },
            Qi = function(e, t, i) {
                return e._gsap.scaleX = e._gsap.scaleY = i
            },
            Ji = function(e, t, i, s, r) {
                var n = e._gsap;
                n.scaleX = n.scaleY = i, n.renderTransform(r, n)
            },
            es = function(e, t, i, s, r) {
                var n = e._gsap;
                n[t] = i, n.renderTransform(r, n)
            },
            ts = "transform",
            is = ts + "Origin",
            ss = function e(t, i) {
                var s = this,
                    r = this.target,
                    n = r.style;
                if (t in Di && n) {
                    if (this.tfm = this.tfm || {}, "transform" === t) return Yi.transform.split(",").forEach((function(t) {
                        return e.call(s, t, i)
                    }));
                    if (~(t = Yi[t] || t).indexOf(",") ? t.split(",").forEach((function(e) {
                            return s.tfm[e] = xs(r, e)
                        })) : this.tfm[t] = r._gsap.x ? r._gsap[t] : xs(r, t), this.props.indexOf(ts) >= 0) return;
                    r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(is, i, "")), t = ts
                }(n || i) && this.props.push(t, i, n[t])
            },
            rs = function(e) {
                e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
            },
            ns = function() {
                var e, t, i = this.props,
                    s = this.target,
                    r = s.style,
                    n = s._gsap;
                for (e = 0; e < i.length; e += 3) i[e + 1] ? s[i[e]] = i[e + 2] : i[e + 2] ? r[i[e]] = i[e + 2] : r.removeProperty("--" === i[e].substr(0, 2) ? i[e] : i[e].replace(Fi, "-$1").toLowerCase());
                if (this.tfm) {
                    for (t in this.tfm) n[t] = this.tfm[t];
                    n.svg && (n.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), (e = Ii()) && e.isStart || r[ts] || (rs(r), n.uncache = 1)
                }
            },
            as = function(e, t) {
                var i = {
                    target: e,
                    props: [],
                    revert: ns,
                    save: ss
                };
                return e._gsap || Mi.core.getCache(e), t && t.split(",").forEach((function(e) {
                    return i.save(e)
                })), i
            },
            os = function(e, t) {
                var i = Pi.createElementNS ? Pi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Pi.createElement(e);
                return i.style ? i : Pi.createElement(e)
            },
            ls = function e(t, i, s) {
                var r = getComputedStyle(t);
                return r[i] || r.getPropertyValue(i.replace(Fi, "-$1").toLowerCase()) || r.getPropertyValue(i) || !s && e(t, ds(i) || i, 1) || ""
            },
            cs = "O,Moz,ms,Ms,Webkit".split(","),
            ds = function(e, t, i) {
                var s = (t || Oi).style,
                    r = 5;
                if (e in s && !i) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(cs[r] + e in s););
                return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? cs[r] : "") + e
            },
            us = function() {
                "undefined" != typeof window && window.document && (Ci = window, Pi = Ci.document, ki = Pi.documentElement, Oi = os("div") || {
                    style: {}
                }, os("div"), ts = ds(ts), is = ts + "Origin", Oi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zi = !!ds("perspective"), Ii = Mi.core.reverting, Ai = 1)
            },
            ps = function e(t) {
                var i, s = os("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    n = this.nextSibling,
                    a = this.style.cssText;
                if (ki.appendChild(s), s.appendChild(this), this.style.display = "block", t) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
                } catch (e) {} else this._gsapBBox && (i = this._gsapBBox());
                return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), ki.removeChild(s), this.style.cssText = a, i
            },
            hs = function(e, t) {
                for (var i = t.length; i--;)
                    if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
            },
            fs = function(e) {
                var t;
                try {
                    t = e.getBBox()
                } catch (i) {
                    t = ps.call(e, !0)
                }
                return t && (t.width || t.height) || e.getBBox === ps || (t = ps.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                    x: +hs(e, ["x", "cx", "x1"]) || 0,
                    y: +hs(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            ms = function(e) {
                return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !fs(e))
            },
            gs = function(e, t) {
                if (t) {
                    var i = e.style;
                    t in Di && t !== is && (t = ts), i.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty(t.replace(Fi, "-$1").toLowerCase())) : i.removeAttribute(t)
                }
            },
            vs = function(e, t, i, s, r, n) {
                var a = new hi(e._pt, t, i, 0, 1, n ? Wi : Gi);
                return e._pt = a, a.b = s, a.e = r, e._props.push(i), a
            },
            ys = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            bs = {
                grid: 1,
                flex: 1
            },
            ws = function e(t, i, s, r) {
                var n, a, o, l, c = parseFloat(s) || 0,
                    d = (s + "").trim().substr((c + "").length) || "px",
                    u = Oi.style,
                    p = Ni.test(i),
                    h = "svg" === t.tagName.toLowerCase(),
                    f = (h ? "client" : "offset") + (p ? "Width" : "Height"),
                    m = 100,
                    g = "px" === r,
                    v = "%" === r;
                return r === d || !c || ys[r] || ys[d] ? c : ("px" !== d && !g && (c = e(t, i, s, "px")), l = t.getCTM && ms(t), !v && "%" !== d || !Di[i] && !~i.indexOf("adius") ? (u[p ? "width" : "height"] = m + (g ? d : r), a = ~i.indexOf("adius") || "em" === r && t.appendChild && !h ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Pi && a.appendChild || (a = Pi.body), (o = a._gsap) && v && o.width && p && o.time === Ct.time && !o.uncache ? ve(c / o.width * m) : ((v || "%" === d) && !bs[ls(a, "display")] && (u.position = ls(t, "position")), a === t && (u.position = "static"), a.appendChild(Oi), n = Oi[f], a.removeChild(Oi), u.position = "absolute", p && v && ((o = fe(a)).time = Ct.time, o.width = a[f]), ve(g ? n * c / m : n && c ? m / n * c : 0))) : (n = l ? t.getBBox()[p ? "width" : "height"] : t[f], ve(v ? c / n * m : c / 100 * n)))
            },
            xs = function(e, t, i, s) {
                var r;
                return Ai || us(), t in Yi && "transform" !== t && ~(t = Yi[t]).indexOf(",") && (t = t.split(",")[0]), Di[t] && "transform" !== t ? (r = Is(e, s), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : zs(ls(e, is)) + " " + r.zOrigin + "px") : (!(r = e.style[t]) || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Ms[t] && Ms[t](e, t, i) || ls(e, t) || me(e, t) || ("opacity" === t ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? ws(e, t, r, i) + i : r
            },
            _s = function(e, t, i, s) {
                if (!i || "none" === i) {
                    var r = ds(t, e, 1),
                        n = r && ls(e, r, 1);
                    n && n !== i ? (t = r, i = n) : "borderColor" === t && (i = ls(e, "borderTopColor"))
                }
                var a, o, l, c, d, u, p, h, f, m, g, v = new hi(this._pt, e.style, t, 0, 1, oi),
                    y = 0,
                    b = 0;
                if (v.b = i, v.e = s, i += "", "auto" == (s += "") && (e.style[t] = s, s = ls(e, t) || s, e.style[t] = i), Mt(a = [i, s]), s = a[1], l = (i = a[0]).match(V) || [], (s.match(V) || []).length) {
                    for (; o = V.exec(s);) p = o[0], f = s.substring(y, o.index), d ? d = (d + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (d = 1), p !== (u = l[b++] || "") && (c = parseFloat(u) || 0, g = u.substr((c + "").length), "=" === p.charAt(1) && (p = be(c, p) + g), h = parseFloat(p), m = p.substr((h + "").length), y = V.lastIndex - m.length, m || (m = m || _.units[t] || g, y === s.length && (s += m, v.e += m)), g !== m && (c = ws(e, t, u, m) || 0), v._pt = {
                        _next: v._pt,
                        p: f || 1 === b ? f : ",",
                        s: c,
                        c: h - c,
                        m: d && d < 4 || "zIndex" === t ? Math.round : 0
                    });
                    v.c = y < s.length ? s.substring(y, s.length) : ""
                } else v.r = "display" === t && "none" === s ? Wi : Gi;
                return j.test(s) && (v.e = 0), this._pt = v, v
            },
            Ts = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            Ss = function(e) {
                var t = e.split(" "),
                    i = t[0],
                    s = t[1] || "50%";
                return "top" !== i && "bottom" !== i && "left" !== s && "right" !== s || (e = i, i = s, s = e), t[0] = Ts[i] || i, t[1] = Ts[s] || s, t.join(" ")
            },
            Es = function(e, t) {
                if (t.tween && t.tween._time === t.tween._dur) {
                    var i, s, r, n = t.t,
                        a = n.style,
                        o = t.u,
                        l = n._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", s = 1;
                    else
                        for (r = (o = o.split(",")).length; --r > -1;) i = o[r], Di[i] && (s = 1, i = "transformOrigin" === i ? is : ts), gs(n, i);
                    s && (gs(n, ts), l && (l.svg && n.removeAttribute("transform"), Is(n, 1), l.uncache = 1, rs(a)))
                }
            },
            Ms = {
                clearProps: function(e, t, i, s, r) {
                    if ("isFromStart" !== r.data) {
                        var n = e._pt = new hi(e._pt, t, i, 0, 0, Es);
                        return n.u = s, n.pr = -10, n.tween = r, e._props.push(i), 1
                    }
                }
            },
            Cs = [1, 0, 0, 1, 0, 0],
            Ps = {},
            ks = function(e) {
                return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
            },
            As = function(e) {
                var t = ls(e, ts);
                return ks(t) ? Cs : t.substr(7).match(H).map(ve)
            },
            Os = function(e, t) {
                var i, s, r, n, a = e._gsap || fe(e),
                    o = e.style,
                    l = As(e);
                return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Cs : l : (l !== Cs || e.offsetParent || e === ki || a.svg || (r = o.display, o.display = "block", (i = e.parentNode) && e.offsetParent || (n = 1, s = e.nextElementSibling, ki.appendChild(e)), l = As(e), r ? o.display = r : gs(e, "display"), n && (s ? i.insertBefore(e, s) : i ? i.appendChild(e) : ki.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
            },
            Ls = function(e, t, i, s, r, n) {
                var a, o, l, c = e._gsap,
                    d = r || Os(e, !0),
                    u = c.xOrigin || 0,
                    p = c.yOrigin || 0,
                    h = c.xOffset || 0,
                    f = c.yOffset || 0,
                    m = d[0],
                    g = d[1],
                    v = d[2],
                    y = d[3],
                    b = d[4],
                    w = d[5],
                    x = t.split(" "),
                    _ = parseFloat(x[0]) || 0,
                    T = parseFloat(x[1]) || 0;
                i ? d !== Cs && (o = m * y - g * v) && (l = _ * (-g / o) + T * (m / o) - (m * w - g * b) / o, _ = _ * (y / o) + T * (-v / o) + (v * w - y * b) / o, T = l) : (_ = (a = fs(e)).x + (~x[0].indexOf("%") ? _ / 100 * a.width : _), T = a.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * a.height : T)), s || !1 !== s && c.smooth ? (b = _ - u, w = T - p, c.xOffset = h + (b * m + w * v) - b, c.yOffset = f + (b * g + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = _, c.yOrigin = T, c.smooth = !!s, c.origin = t, c.originIsAbsolute = !!i, e.style[is] = "0px 0px", n && (vs(n, c, "xOrigin", u, _), vs(n, c, "yOrigin", p, T), vs(n, c, "xOffset", h, c.xOffset), vs(n, c, "yOffset", f, c.yOffset)), e.setAttribute("data-svg-origin", _ + " " + T)
            },
            Is = function(e, t) {
                var i = e._gsap || new Nt(e);
                if ("x" in i && !t && !i.uncache) return i;
                var s, r, n, a, o, l, c, d, u, p, h, f, m, g, v, y, b, w, x, T, S, E, M, C, P, k, A, O, L, I, z, D, B = e.style,
                    $ = i.scaleX < 0,
                    R = "px",
                    F = "deg",
                    N = getComputedStyle(e),
                    X = ls(e, is) || "0";
                return s = r = n = l = c = d = u = p = h = 0, a = o = 1, i.svg = !(!e.getCTM || !ms(e)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (B[ts] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[ts] ? N[ts] : "")), B.scale = B.rotate = B.translate = "none"), g = Os(e, i.svg), i.svg && (i.uncache ? (P = e.getBBox(), X = i.xOrigin - P.x + "px " + (i.yOrigin - P.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), Ls(e, C || X, !!C || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== Cs && (w = g[0], x = g[1], T = g[2], S = g[3], s = E = g[4], r = M = g[5], 6 === g.length ? (a = Math.sqrt(w * w + x * x), o = Math.sqrt(S * S + T * T), l = w || x ? Ri(x, w) * Bi : 0, (u = T || S ? Ri(T, S) * Bi + l : 0) && (o *= Math.abs(Math.cos(u * $i))), i.svg && (s -= f - (f * w + m * T), r -= m - (f * x + m * S))) : (D = g[6], I = g[7], A = g[8], O = g[9], L = g[10], z = g[11], s = g[12], r = g[13], n = g[14], c = (v = Ri(D, L)) * Bi, v && (C = E * (y = Math.cos(-v)) + A * (b = Math.sin(-v)), P = M * y + O * b, k = D * y + L * b, A = E * -b + A * y, O = M * -b + O * y, L = D * -b + L * y, z = I * -b + z * y, E = C, M = P, D = k), d = (v = Ri(-T, L)) * Bi, v && (y = Math.cos(-v), z = S * (b = Math.sin(-v)) + z * y, w = C = w * y - A * b, x = P = x * y - O * b, T = k = T * y - L * b), l = (v = Ri(x, w)) * Bi, v && (C = w * (y = Math.cos(v)) + x * (b = Math.sin(v)), P = E * y + M * b, x = x * y - w * b, M = M * y - E * b, w = C, E = P), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, d = 180 - d), a = ve(Math.sqrt(w * w + x * x + T * T)), o = ve(Math.sqrt(M * M + D * D)), v = Ri(E, M), u = Math.abs(v) > 2e-4 ? v * Bi : 0, h = z ? 1 / (z < 0 ? -z : z) : 0), i.svg && (C = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !ks(ls(e, ts)), C && e.setAttribute("transform", C))), Math.abs(u) > 90 && Math.abs(u) < 270 && ($ ? (a *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), t = t || i.uncache, i.x = s - ((i.xPercent = s && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + R, i.y = r - ((i.yPercent = r && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + R, i.z = n + R, i.scaleX = ve(a), i.scaleY = ve(o), i.rotation = ve(l) + F, i.rotationX = ve(c) + F, i.rotationY = ve(d) + F, i.skewX = u + F, i.skewY = p + F, i.transformPerspective = h + R, (i.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (B[is] = zs(X)), i.xOffset = i.yOffset = 0, i.force3D = _.force3D, i.renderTransform = i.svg ? Xs : zi ? Ns : Bs, i.uncache = 0, i
            },
            zs = function(e) {
                return (e = e.split(" "))[0] + " " + e[1]
            },
            Ds = function(e, t, i) {
                var s = et(t);
                return ve(parseFloat(t) + parseFloat(ws(e, "x", i + "px", s))) + s
            },
            Bs = function(e, t) {
                t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ns(e, t)
            },
            $s = "0deg",
            Rs = "0px",
            Fs = ") ",
            Ns = function(e, t) {
                var i = t || this,
                    s = i.xPercent,
                    r = i.yPercent,
                    n = i.x,
                    a = i.y,
                    o = i.z,
                    l = i.rotation,
                    c = i.rotationY,
                    d = i.rotationX,
                    u = i.skewX,
                    p = i.skewY,
                    h = i.scaleX,
                    f = i.scaleY,
                    m = i.transformPerspective,
                    g = i.force3D,
                    v = i.target,
                    y = i.zOrigin,
                    b = "",
                    w = "auto" === g && e && 1 !== e || !0 === g;
                if (y && (d !== $s || c !== $s)) {
                    var x, _ = parseFloat(c) * $i,
                        T = Math.sin(_),
                        S = Math.cos(_);
                    _ = parseFloat(d) * $i, x = Math.cos(_), n = Ds(v, n, T * x * -y), a = Ds(v, a, -Math.sin(_) * -y), o = Ds(v, o, S * x * -y + y)
                }
                m !== Rs && (b += "perspective(" + m + Fs), (s || r) && (b += "translate(" + s + "%, " + r + "%) "), (w || n !== Rs || a !== Rs || o !== Rs) && (b += o !== Rs || w ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + Fs), l !== $s && (b += "rotate(" + l + Fs), c !== $s && (b += "rotateY(" + c + Fs), d !== $s && (b += "rotateX(" + d + Fs), u === $s && p === $s || (b += "skew(" + u + ", " + p + Fs), 1 === h && 1 === f || (b += "scale(" + h + ", " + f + Fs), v.style[ts] = b || "translate(0, 0)"
            },
            Xs = function(e, t) {
                var i, s, r, n, a, o = t || this,
                    l = o.xPercent,
                    c = o.yPercent,
                    d = o.x,
                    u = o.y,
                    p = o.rotation,
                    h = o.skewX,
                    f = o.skewY,
                    m = o.scaleX,
                    g = o.scaleY,
                    v = o.target,
                    y = o.xOrigin,
                    b = o.yOrigin,
                    w = o.xOffset,
                    x = o.yOffset,
                    _ = o.forceCSS,
                    T = parseFloat(d),
                    S = parseFloat(u);
                p = parseFloat(p), h = parseFloat(h), (f = parseFloat(f)) && (h += f = parseFloat(f), p += f), p || h ? (p *= $i, h *= $i, i = Math.cos(p) * m, s = Math.sin(p) * m, r = Math.sin(p - h) * -g, n = Math.cos(p - h) * g, h && (f *= $i, a = Math.tan(h - f), r *= a = Math.sqrt(1 + a * a), n *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), s *= a)), i = ve(i), s = ve(s), r = ve(r), n = ve(n)) : (i = m, n = g, s = r = 0), (T && !~(d + "").indexOf("px") || S && !~(u + "").indexOf("px")) && (T = ws(v, "x", d, "px"), S = ws(v, "y", u, "px")), (y || b || w || x) && (T = ve(T + y - (y * i + b * r) + w), S = ve(S + b - (y * s + b * n) + x)), (l || c) && (a = v.getBBox(), T = ve(T + l / 100 * a.width), S = ve(S + c / 100 * a.height)), a = "matrix(" + i + "," + s + "," + r + "," + n + "," + T + "," + S + ")", v.setAttribute("transform", a), _ && (v.style[ts] = a)
            },
            Ys = function(e, t, i, s, r) {
                var n, a, o = 360,
                    l = L(r),
                    c = parseFloat(r) * (l && ~r.indexOf("rad") ? Bi : 1) - s,
                    d = s + c + "deg";
                return l && ("short" === (n = r.split("_")[1]) && (c %= o) != c % 180 && (c += c < 0 ? o : -360), "cw" === n && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === n && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), e._pt = a = new hi(e._pt, t, i, s, c, Vi), a.e = d, a.u = "deg", e._props.push(i), a
            },
            Hs = function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            Vs = function(e, t, i) {
                var s, r, n, a, o, l, c, d = Hs({}, i._gsap),
                    u = i.style;
                for (r in d.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), u[ts] = t, s = Is(i, 1), gs(i, ts), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[ts], u[ts] = t, s = Is(i, 1), u[ts] = n), Di)(n = d[r]) !== (a = s[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = et(n) !== (c = et(a)) ? ws(i, r, n, c) : parseFloat(n), l = parseFloat(a), e._pt = new hi(e._pt, s, r, o, l - o, Hi), e._pt.u = c || 0, e._props.push(r));
                Hs(s, d)
            };
        ge("padding,margin,Width,Radius", (function(e, t) {
            var i = "Top",
                s = "Right",
                r = "Bottom",
                n = "Left",
                a = (t < 3 ? [i, s, r, n] : [i + n, i + s, r + s, r + n]).map((function(i) {
                    return t < 2 ? e + i : "border" + i + e
                }));
            Ms[t > 1 ? "border" + e : e] = function(e, t, i, s, r) {
                var n, o;
                if (arguments.length < 4) return n = a.map((function(t) {
                    return xs(e, t, i)
                })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
                n = (s + "").split(" "), o = {}, a.forEach((function(e, t) {
                    return o[e] = n[t] = n[t] || n[(t - 1) / 2 | 0]
                })), e.init(t, o, r)
            }
        }));
        var qs, js, Gs = {
            name: "css",
            register: us,
            targetTest: function(e) {
                return e.style && e.nodeType
            },
            init: function(e, t, i, s, r) {
                var n, a, o, l, c, d, u, p, h, f, m, g, v, y, b, w, x = this._props,
                    T = e.style,
                    S = i.vars.startAt;
                for (u in Ai || us(), this.styles = this.styles || as(e), w = this.styles.props, this.tween = i, t)
                    if ("autoRound" !== u && (a = t[u], !le[u] || !Gt(u, t, i, s, e, r)))
                        if (c = typeof a, d = Ms[u], "function" === c && (c = typeof(a = a.call(i, s, e, r))), "string" === c && ~a.indexOf("random(") && (a = ut(a)), d) d(this, e, u, a, i) && (b = 1);
                        else if ("--" === u.substr(0, 2)) n = (getComputedStyle(e).getPropertyValue(u) + "").trim(), a += "", St.lastIndex = 0, St.test(n) || (p = et(n), h = et(a)), h ? p !== h && (n = ws(e, u, n, h) + h) : p && (a += p), this.add(T, "setProperty", n, a, s, r, 0, 0, u), x.push(u), w.push(u, 0, T[u]);
                else if ("undefined" !== c) {
                    if (S && u in S ? (n = "function" == typeof S[u] ? S[u].call(i, s, e, r) : S[u], L(n) && ~n.indexOf("random(") && (n = ut(n)), et(n + "") || (n += _.units[u] || et(xs(e, u)) || ""), "=" === (n + "").charAt(1) && (n = xs(e, u))) : n = xs(e, u), l = parseFloat(n), (f = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), u in Yi && ("autoAlpha" === u && (1 === l && "hidden" === xs(e, "visibility") && o && (l = 0), w.push("visibility", 0, T.visibility), vs(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && ~(u = Yi[u]).indexOf(",") && (u = u.split(",")[0])), m = u in Di)
                        if (this.styles.save(u), g || ((v = e._gsap).renderTransform && !t.parseTransform || Is(e, t.parseTransform), y = !1 !== t.smoothOrigin && v.smooth, (g = this._pt = new hi(this._pt, T, ts, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === u) this._pt = new hi(this._pt, v, "scaleY", v.scaleY, (f ? be(v.scaleY, f + o) : o) - v.scaleY || 0, Hi), this._pt.u = 0, x.push("scaleY", u), u += "X";
                        else {
                            if ("transformOrigin" === u) {
                                w.push(is, 0, T[is]), a = Ss(a), v.svg ? Ls(e, a, 0, y, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && vs(this, v, "zOrigin", v.zOrigin, h), vs(this, T, u, zs(n), zs(a)));
                                continue
                            }
                            if ("svgOrigin" === u) {
                                Ls(e, a, 1, y, 0, this);
                                continue
                            }
                            if (u in Ps) {
                                Ys(this, v, u, l, f ? be(l, f + a) : a);
                                continue
                            }
                            if ("smoothOrigin" === u) {
                                vs(this, v, "smooth", v.smooth, a);
                                continue
                            }
                            if ("force3D" === u) {
                                v[u] = a;
                                continue
                            }
                            if ("transform" === u) {
                                Vs(this, a, e);
                                continue
                            }
                        }
                    else u in T || (u = ds(u) || u);
                    if (m || (o || 0 === o) && (l || 0 === l) && !Xi.test(a) && u in T) o || (o = 0), (p = (n + "").substr((l + "").length)) !== (h = et(a) || (u in _.units ? _.units[u] : p)) && (l = ws(e, u, n, h)), this._pt = new hi(this._pt, m ? v : T, u, l, (f ? be(l, f + o) : o) - l, m || "px" !== h && "zIndex" !== u || !1 === t.autoRound ? Hi : ji), this._pt.u = h || 0, p !== h && "%" !== h && (this._pt.b = n, this._pt.r = qi);
                    else if (u in T) _s.call(this, e, u, n, f ? f + a : a);
                    else if (u in e) this.add(e, u, n || e[u], f ? f + a : a, s, r);
                    else if ("parseTransform" !== u) {
                        Q(u, a);
                        continue
                    }
                    m || (u in T ? w.push(u, 0, T[u]) : w.push(u, 1, n || e[u])), x.push(u)
                }
                b && pi(this)
            },
            render: function(e, t) {
                if (t.tween._time || !Ii())
                    for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
                else t.styles.revert()
            },
            get: xs,
            aliases: Yi,
            getSetter: function(e, t, i) {
                var s = Yi[t];
                return s && s.indexOf(",") < 0 && (t = s), t in Di && t !== is && (e._gsap.x || xs(e, "x")) ? i && Li === i ? "scale" === t ? Qi : Ki : (Li = i || {}) && ("scale" === t ? Ji : es) : e.style && !D(e.style[t]) ? Ui : ~t.indexOf("-") ? Zi : ri(e, t)
            },
            core: {
                _removeProperty: gs,
                _getMatrix: Os
            }
        };
        Mi.utils.checkPrefix = ds, Mi.core.getStyleSaver = as, js = ge("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (qs = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(e) {
            Di[e] = 1
        })), ge(qs, (function(e) {
            _.units[e] = "deg", Ps[e] = 1
        })), Yi[js[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qs, ge("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(e) {
            var t = e.split(":");
            Yi[t[1]] = js[t[0]]
        })), ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(e) {
            _.units[e] = "px"
        })), Mi.registerPlugin(Gs);
        var Ws = Mi.registerPlugin(Gs) || Mi;
        Ws.core.Tween;
        class Us {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                this.domElement = e, this.triggerArea = t, this.interpolationFactor = i, this.lerpingData = {
                    x: {
                        current: 0,
                        target: 0
                    },
                    y: {
                        current: 0,
                        target: 0
                    }
                }, this.mousePosition = {
                    x: 0,
                    y: 0
                }, this.boundingClientRect = this.domElement.getBoundingClientRect(), this.initEventListeners(), this.render()
            }
            initEventListeners() {
                window.addEventListener("mousemove", (e => {
                    this.mousePosition.x = e.pageX, this.mousePosition.y = e.pageY
                })), window.addEventListener("resize", (() => {
                    this.boundingClientRect = this.domElement.getBoundingClientRect()
                }))
            }
            calculateDistance(e, t, i, s) {
                return Math.hypot(e - i, t - s)
            }
            lerp(e, t, i) {
                return e * (1 - i) + t * i
            }
            update() {
                let e = {
                    x: 0,
                    y: 0
                };
                this.calculateDistance(this.mousePosition.x, this.mousePosition.y, this.boundingClientRect.left + this.boundingClientRect.width / 2, this.boundingClientRect.top + this.boundingClientRect.height / 2) < this.triggerArea ? (this.domElement.classList.add("focus"), e.x = .2 * (this.mousePosition.x - (this.boundingClientRect.left + this.boundingClientRect.width / 2)), e.y = .2 * (this.mousePosition.y - (this.boundingClientRect.top + this.boundingClientRect.height / 2))) : this.domElement.classList.remove("focus"), this.lerpingData.x.target = e.x, this.lerpingData.y.target = e.y;
                for (const e in this.lerpingData) this.lerpingData[e].current = this.lerp(this.lerpingData[e].current, this.lerpingData[e].target, this.interpolationFactor);
                this.domElement.style.transform = `translate(${this.lerpingData.x.current}px, ${this.lerpingData.y.current}px)`
            }
            render() {
                window.requestAnimationFrame((() => {
                    this.update(), this.render()
                }))
            }
        }
        class Zs {
            constructor() {
                this.links = document.querySelectorAll(".navigation__social-links li"), this.applyMagnetsToLinks()
            }
            applyMagnetsToLinks() {
                this.links.forEach((e => {
                    new Us(e, 30, .4)
                }))
            }
        }
        class Ks {
            constructor() {
                this.status = !1, this.title = document.querySelector(".notify-user__title"), this.svg = document.querySelector(".notify-user__svg-container"), this.input = document.querySelector(".notify-user__subscribe-email"), this.inputGroup = document.querySelector(".notify-user__subscribe-input-group"), this.form = document.querySelector(".notify-user__subscribe"), this.button = document.querySelector(".notify-user__subscribe-button"), this.success = document.querySelector(".notify-user__success"), this.emailStatus = !1, this.emailMessageDescription = "dummy message description", this.emailMessageTitle = "Dummy Message Title", this.emailIcon = document.querySelector(".notify-user__success-icon > i"), this.emailTitle = document.querySelector(".notify-user__success-title"), this.emailDescription = document.querySelector(".notify-user__success-description");
                const e = window.location.origin;
                console.log("Root Path:", e), this.pathToPHP = r.path, this.init()
            }
            initSendButton() {
                this.button.addEventListener("click", (e => {
                    this.status ? this.successAnimation((() => {
                        this.sendDataToPhp(this.input.value)
                    })) : this.shakeAnimation(), e.preventDefault(), e.stopPropagation()
                })), this.input.addEventListener("keydown", (e => {
                    "Enter" !== e.key && 13 !== e.keyCode || e.preventDefault()
                }))
            }
            sendDataToPhp(e) {
                const t = new FormData;
                t.append("email", e), fetch(this.pathToPHP, {
                    method: "POST",
                    body: t
                }).then((e => {
                    if (!e.ok) throw this.emailStatus = !1, this.emailMessageTitle = "Network error", this.emailMessageDescription = "The server is not responding. Something went wrong.", this.showMessage(), new Error("Network response was not ok");
                    return e.json()
                })).then((e => {
                    e.success ? (this.emailStatus = !0, this.emailMessageTitle = "Success", this.emailMessageDescription = e.message, this.showMessage()) : (this.emailStatus = !1, this.emailMessageTitle = "Error", this.message.textContent = e.message, this.showMessage())
                })).catch((e => {
                    console.error("Fetch error:", e)
                }))
            }
            validateEmail(e) {
                return new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$').test(e)
            }
            checkEmail() {
                this.input.addEventListener("keyup", (e => {
                    const t = this.validateEmail(this.input.value);
                    this.form.classList.toggle("valid", t), this.status = t
                }))
            }
            shakeAnimation() {
                Ws.timeline({
                    yoyo: !0,
                    repeat: 1
                }), this.input, this.button.classList.add("shake"), setTimeout((() => {
                    this.button.classList.remove("shake")
                }), 2e3)
            }
            successAnimation(e) {
                Ws.to([this.title, this.svg], {
                    y: -100,
                    opacity: 0,
                    stagger: .2,
                    duration: .5,
                    ease: "power2.inOut"
                }), Ws.to([this.inputGroup, this.button], {
                    delay: .3,
                    y: -200,
                    opacity: 0,
                    stagger: .3,
                    duration: .7,
                    ease: "power2.inOut",
                    onComplete: () => {
                        this.inputGroup.style.display = "none", this.button.style.display = "none", this.title.style.display = "none", this.svg.style.display = "none", e()
                    }
                })
            }
            showMessage() {
                this.emailStatus ? (this.emailIcon.classList.remove(), this.emailIcon.classList.add("fa-regular", "fa-circle-check")) : (this.emailIcon.classList.remove(), this.emailIcon.classList.add("fa-regular", "fa-circle-xmark")), this.emailTitle.textContent = this.emailMessageTitle, this.emailDescription.textContent = this.emailMessageDescription, this.animateMessage()
            }
            animateMessage() {
                Ws.to(this.success, {
                    onStart: () => {
                        this.success.style.display = "flex"
                    },
                    delay: .3,
                    opacity: 1
                })
            }
            init() {
                this.checkEmail(), this.initSendButton()
            }
        }

        function Qs(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function Js(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((i => {
                void 0 === e[i] ? e[i] = t[i] : Qs(t[i]) && Qs(e[i]) && Object.keys(t[i]).length > 0 && Js(e[i], t[i])
            }))
        }
        const er = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null
            },
            querySelectorAll() {
                return []
            },
            getElementById() {
                return null
            },
            createEvent() {
                return {
                    initEvent() {}
                }
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return []
                    }
                }
            },
            createElementNS() {
                return {}
            },
            importNode() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function tr() {
            const e = "undefined" != typeof document ? document : {};
            return Js(e, er), e
        }
        const ir = {
            document: er,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return ""
                    }
                }
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {}
            },
            requestAnimationFrame(e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
            },
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function sr() {
            const e = "undefined" != typeof window ? window : {};
            return Js(e, ir), e
        }

        function rr(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function nr() {
            return Date.now()
        }

        function ar(e, t) {
            void 0 === t && (t = "x");
            const i = sr();
            let s, r, n;
            const a = function(e) {
                const t = sr();
                let i;
                return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
            }(e);
            return i.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new i.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), "x" === t && (r = i.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (r = i.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), r || 0
        }

        function or(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function lr() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let s = 1; s < arguments.length; s += 1) {
                const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                if (null != r && (i = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                    const i = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, s = i.length; t < s; t += 1) {
                        const s = i[t],
                            n = Object.getOwnPropertyDescriptor(r, s);
                        void 0 !== n && n.enumerable && (or(e[s]) && or(r[s]) ? r[s].__swiper__ ? e[s] = r[s] : lr(e[s], r[s]) : !or(e[s]) && or(r[s]) ? (e[s] = {}, r[s].__swiper__ ? e[s] = r[s] : lr(e[s], r[s])) : e[s] = r[s])
                    }
                }
            }
            var i;
            return e
        }

        function cr(e, t, i) {
            e.style.setProperty(t, i)
        }

        function dr(e) {
            let {
                swiper: t,
                targetPosition: i,
                side: s
            } = e;
            const r = sr(),
                n = -t.translate;
            let a, o = null;
            const l = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
            const c = i > n ? "next" : "prev",
                d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    a = (new Date).getTime(), null === o && (o = a);
                    const e = Math.max(Math.min((a - o) / l, 1), 0),
                        c = .5 - Math.cos(e * Math.PI) / 2;
                    let p = n + c * (i - n);
                    if (d(p, i) && (p = i), t.wrapperEl.scrollTo({
                            [s]: p
                        }), d(p, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [s]: p
                        })
                    })), void r.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = r.requestAnimationFrame(u)
                };
            u()
        }

        function ur(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }

        function pr(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function hr(e, t) {
            void 0 === t && (t = []);
            const i = document.createElement(e);
            return i.classList.add(...Array.isArray(t) ? t : [t]), i
        }

        function fr(e) {
            const t = sr(),
                i = tr(),
                s = e.getBoundingClientRect(),
                r = i.body,
                n = e.clientTop || r.clientTop || 0,
                a = e.clientLeft || r.clientLeft || 0,
                o = e === t ? t.scrollY : e.scrollTop,
                l = e === t ? t.scrollX : e.scrollLeft;
            return {
                top: s.top + o - n,
                left: s.left + l - a
            }
        }

        function mr(e, t) {
            return sr().getComputedStyle(e, null).getPropertyValue(t)
        }

        function gr(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                return t
            }
        }

        function vr(e, t) {
            const i = [];
            let s = e.parentElement;
            for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
            return i
        }

        function yr(e, t) {
            t && e.addEventListener("transitionend", (function i(s) {
                s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
            }))
        }

        function br(e, t, i) {
            const s = sr();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        let wr, xr, _r;

        function Tr() {
            return wr || (wr = function() {
                const e = sr(),
                    t = tr();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), wr
        }
        var Sr = {
            on(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;
                const r = i ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                })), s
            },
            once(e, t, i) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;

                function r() {
                    s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                    for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    t.apply(s, n)
                }
                return r.__emitterProxy = t, s.on(e, r, i)
            },
            onAny(e, t) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;
                const s = t ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
            },
            off(e, t) {
                const i = this;
                return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, r) => {
                        (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                    }))
                })), i) : i
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, i, s;
                for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], i = n.slice(1, n.length), s = e) : (t = n[0].events, i = n[0].data, s = n[0].context || e), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(s, [t, ...i])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(s, i)
                    }))
                })), e
            }
        };
        const Er = (e, t) => {
                if (!e || e.destroyed || !e.params) return;
                const i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                if (i) {
                    let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                    !t && e.isElement && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove()
                }
            },
            Mr = (e, t) => {
                if (!e.slides[t]) return;
                const i = e.slides[t].querySelector('[loading="lazy"]');
                i && i.removeAttribute("loading")
            },
            Cr = e => {
                if (!e || e.destroyed || !e.params) return;
                let t = e.params.lazyPreloadPrevNext;
                const i = e.slides.length;
                if (!i || !t || t < 0) return;
                t = Math.min(t, i);
                const s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                    r = e.activeIndex;
                if (e.params.grid && e.params.grid.rows > 1) {
                    const i = r,
                        n = [i - t];
                    return n.push(...Array.from({
                        length: t
                    }).map(((e, t) => i + s + t))), void e.slides.forEach(((t, i) => {
                        n.includes(t.column) && Mr(e, i)
                    }))
                }
                const n = r + s - 1;
                if (e.params.rewind || e.params.loop)
                    for (let s = r - t; s <= n + t; s += 1) {
                        const t = (s % i + i) % i;
                        (t < r || t > n) && Mr(e, t)
                    } else
                        for (let s = Math.max(r - t, 0); s <= Math.min(n + t, i - 1); s += 1) s !== r && (s > n || s < r) && Mr(e, s)
            };
        var Pr = {
            updateSize: function() {
                const e = this;
                let t, i;
                const s = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s.clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s.clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(mr(s, "padding-left") || 0, 10) - parseInt(mr(s, "padding-right") || 0, 10), i = i - parseInt(mr(s, "padding-top") || 0, 10) - parseInt(mr(s, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function i(e, i) {
                    return parseFloat(e.getPropertyValue(t(i)) || 0)
                }
                const s = e.params,
                    {
                        wrapperEl: r,
                        slidesEl: n,
                        size: a,
                        rtlTranslate: o,
                        wrongRTL: l
                    } = e,
                    c = e.virtual && s.virtual.enabled,
                    d = c ? e.virtual.slides.length : e.slides.length,
                    u = pr(n, `.${e.params.slideClass}, swiper-slide`),
                    p = c ? e.virtual.slides.length : u.length;
                let h = [];
                const f = [],
                    m = [];
                let g = s.slidesOffsetBefore;
                "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
                let v = s.slidesOffsetAfter;
                "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
                const y = e.snapGrid.length,
                    b = e.slidesGrid.length;
                let w = s.spaceBetween,
                    x = -g,
                    _ = 0,
                    T = 0;
                if (void 0 === a) return;
                "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * a : "string" == typeof w && (w = parseFloat(w)), e.virtualSize = -w, u.forEach((e => {
                    o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), s.centeredSlides && s.cssMode && (cr(r, "--swiper-centered-offset-before", ""), cr(r, "--swiper-centered-offset-after", ""));
                const S = s.grid && s.grid.rows > 1 && e.grid;
                let E;
                S && e.grid.initSlides(p);
                const M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                for (let r = 0; r < p; r += 1) {
                    let n;
                    if (E = 0, u[r] && (n = u[r]), S && e.grid.updateSlide(r, n, p, t), !u[r] || "none" !== mr(n, "display")) {
                        if ("auto" === s.slidesPerView) {
                            M && (u[r].style[t("width")] = "");
                            const a = getComputedStyle(n),
                                o = n.style.transform,
                                l = n.style.webkitTransform;
                            if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? br(n, "width", !0) : br(n, "height", !0);
                            else {
                                const e = i(a, "width"),
                                    t = i(a, "padding-left"),
                                    s = i(a, "padding-right"),
                                    r = i(a, "margin-left"),
                                    o = i(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) E = e + r + o;
                                else {
                                    const {
                                        clientWidth: i,
                                        offsetWidth: a
                                    } = n;
                                    E = e + t + s + r + o + (a - i)
                                }
                            }
                            o && (n.style.transform = o), l && (n.style.webkitTransform = l), s.roundLengths && (E = Math.floor(E))
                        } else E = (a - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), u[r] && (u[r].style[t("width")] = `${E}px`);
                        u[r] && (u[r].swiperSlideSize = E), m.push(E), s.centeredSlides ? (x = x + E / 2 + _ / 2 + w, 0 === _ && 0 !== r && (x = x - a / 2 - w), 0 === r && (x = x - a / 2 - w), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), T % s.slidesPerGroup == 0 && h.push(x), f.push(x)) : (s.roundLengths && (x = Math.floor(x)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && h.push(x), f.push(x), x = x + E + w), e.virtualSize += E + w, _ = E, T += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + v, o && l && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${e.virtualSize+w}px`), s.setWrapperSize && (r.style[t("width")] = `${e.virtualSize+w}px`), S && e.grid.updateWrapperSize(E, h, t), !s.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < h.length; i += 1) {
                        let r = h[i];
                        s.roundLengths && (r = Math.floor(r)), h[i] <= e.virtualSize - a && t.push(r)
                    }
                    h = t, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a)
                }
                if (c && s.loop) {
                    const t = m[0] + w;
                    if (s.slidesPerGroup > 1) {
                        const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                            r = t * s.slidesPerGroup;
                        for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + r)
                    }
                    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && h.push(h[h.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
                }
                if (0 === h.length && (h = [0]), 0 !== w) {
                    const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    u.filter(((e, t) => !(s.cssMode && !s.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[i] = `${w}px`
                    }))
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    m.forEach((t => {
                        e += t + (w || 0)
                    })), e -= w;
                    const t = e - a;
                    h = h.map((e => e <= 0 ? -g : e > t ? t + v : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (m.forEach((t => {
                            e += t + (w || 0)
                        })), e -= w, e < a) {
                        const t = (a - e) / 2;
                        h.forEach(((e, i) => {
                            h[i] = e - t
                        })), f.forEach(((e, i) => {
                            f[i] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: u,
                        snapGrid: h,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    cr(r, "--swiper-centered-offset-before", -h[0] + "px"), cr(r, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        i = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                }
                if (p !== d && e.emit("slidesLengthChange"), h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !(c || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`,
                        i = e.el.classList.contains(t);
                    p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    i = [],
                    s = t.virtual && t.params.virtual.enabled;
                let r, n = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                        i.push(e)
                    }));
                    else
                        for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                            const e = t.activeIndex + r;
                            if (e > t.slides.length && !s) break;
                            i.push(a(e))
                        } else i.push(a(t.activeIndex));
                for (r = 0; r < i.length; r += 1)
                    if (void 0 !== i[r]) {
                        const e = i[r].offsetHeight;
                        n = e > n ? e : n
                    }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides,
                    i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    i = t.params,
                    {
                        slides: s,
                        rtlTranslate: r,
                        snapGrid: n
                    } = t;
                if (0 === s.length) return;
                void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                r && (a = e), s.forEach((e => {
                    e.classList.remove(i.slideVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = i.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < s.length; e += 1) {
                    const l = s[e];
                    let c = l.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
                    const d = (a + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o),
                        u = (a - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o),
                        p = -(a - c),
                        h = p + t.slidesSizesGrid[e];
                    (p >= 0 && p < t.size - 1 || h > 1 && h <= t.size || p <= 0 && h >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), s[e].classList.add(i.slideVisibleClass)), l.progress = r ? -d : d, l.originalProgress = r ? -u : u
                }
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params,
                    s = t.maxTranslate() - t.minTranslate();
                let {
                    progress: r,
                    isBeginning: n,
                    isEnd: a,
                    progressLoop: o
                } = t;
                const l = n,
                    c = a;
                if (0 === s) r = 0, n = !0, a = !0;
                else {
                    r = (e - t.minTranslate()) / s;
                    const i = Math.abs(e - t.minTranslate()) < 1,
                        o = Math.abs(e - t.maxTranslate()) < 1;
                    n = i || r <= 0, a = o || r >= 1, i && (r = 0), o && (r = 1)
                }
                if (i.loop) {
                    const i = t.getSlideIndexByData(0),
                        s = t.getSlideIndexByData(t.slides.length - 1),
                        r = t.slidesGrid[i],
                        n = t.slidesGrid[s],
                        a = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: r,
                    progressLoop: o,
                    isBeginning: n,
                    isEnd: a
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !c && t.emit("reachEnd toEdge"), (l && !n || c && !a) && t.emit("fromEdge"), t.emit("progress", r)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: i,
                        slidesEl: s,
                        activeIndex: r
                    } = e,
                    n = e.virtual && i.virtual.enabled,
                    a = e => pr(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                let o;
                if (t.forEach((e => {
                        e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                    })), n)
                    if (i.loop) {
                        let t = r - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${t}"]`)
                    } else o = a(`[data-swiper-slide-index="${r}"]`);
                else o = t[r];
                if (o) {
                    o.classList.add(i.slideActiveClass);
                    let e = function(e, t) {
                        const i = [];
                        for (; e.nextElementSibling;) {
                            const s = e.nextElementSibling;
                            t ? s.matches(t) && i.push(s) : i.push(s), e = s
                        }
                        return i
                    }(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
                    let s = function(e, t) {
                        const i = [];
                        for (; e.previousElementSibling;) {
                            const s = e.previousElementSibling;
                            t ? s.matches(t) && i.push(s) : i.push(s), e = s
                        }
                        return i
                    }(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && 0 === !s && (s = t[t.length - 1]), s && s.classList.add(i.slidePrevClass)
                }
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    i = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        snapGrid: s,
                        params: r,
                        activeIndex: n,
                        realIndex: a,
                        snapIndex: o
                    } = t;
                let l, c = e;
                const d = e => {
                    let i = e - t.virtual.slidesBefore;
                    return i < 0 && (i = t.virtual.slides.length + i), i >= t.virtual.slides.length && (i -= t.virtual.slides.length), i
                };
                if (void 0 === c && (c = function(e) {
                        const {
                            slidesGrid: t,
                            params: i
                        } = e, s = e.rtlTranslate ? e.translate : -e.translate;
                        let r;
                        for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : s >= t[e] && s < t[e + 1] && (r = e + 1) : s >= t[e] && (r = e);
                        return i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                    }(t)), s.indexOf(i) >= 0) l = s.indexOf(i);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    l = e + Math.floor((c - e) / r.slidesPerGroup)
                }
                if (l >= s.length && (l = s.length - 1), c === n) return l !== o && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(c)));
                let u;
                u = t.virtual && r.virtual.enabled && r.loop ? d(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: c
                }), t.initialized && Cr(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this,
                    i = t.params,
                    s = e.closest(`.${i.slideClass}, swiper-slide`);
                let r, n = !1;
                if (s)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === s) {
                            n = !0, r = e;
                            break
                        }
                if (!s || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };

        function kr(e) {
            let {
                swiper: t,
                runCallbacks: i,
                direction: s,
                step: r
            } = e;
            const {
                activeIndex: n,
                previousIndex: a
            } = t;
            let o = s;
            if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), i && n !== a) {
                if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
                t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
            }
        }
        var Ar = {
                slideTo: function(e, t, i, s, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                    const n = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: d,
                        activeIndex: u,
                        rtlTranslate: p,
                        wrapperEl: h,
                        enabled: f
                    } = n;
                    if (n.animating && o.preventInteractionOnTransition || !f && !s && !r) return !1;
                    const m = Math.min(n.params.slidesPerGroupSkip, a);
                    let g = m + Math.floor((a - m) / n.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1);
                    const v = -l[g];
                    if (o.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            const t = -Math.floor(100 * v),
                                i = Math.floor(100 * c[e]),
                                s = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                        }
                    if (n.initialized && a !== u) {
                        if (!n.allowSlideNext && (p ? v > n.translate && v > n.minTranslate() : v < n.translate && v < n.minTranslate())) return !1;
                        if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (u || 0) !== a) return !1
                    }
                    let y;
                    if (a !== (d || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(v), y = a > u ? "next" : a < u ? "prev" : "reset", p && -v === n.translate || !p && v === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(v), "reset" !== y && (n.transitionStart(i, y), n.transitionEnd(i, y)), !1;
                    if (o.cssMode) {
                        const e = n.isHorizontal(),
                            i = p ? v : -v;
                        if (0 === t) {
                            const t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                                h[e ? "scrollLeft" : "scrollTop"] = i
                            }))) : h[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                            }))
                        } else {
                            if (!n.support.smoothScroll) return dr({
                                swiper: n,
                                targetPosition: i,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, y), 0 === t ? n.transitionEnd(i, y) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, y))
                    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                    const r = this;
                    let n = e;
                    return r.params.loop && (r.virtual && r.params.virtual.enabled ? n += r.virtual.slidesBefore : n = r.getSlideIndexByData(n)), r.slideTo(n, t, i, s)
                },
                slideNext: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const s = this,
                        {
                            enabled: r,
                            params: n,
                            animating: a
                        } = s;
                    if (!r) return s;
                    let o = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : o,
                        c = s.virtual && n.virtual.enabled;
                    if (n.loop) {
                        if (a && !c && n.loopPreventsSliding) return !1;
                        s.loopFix({
                            direction: "next"
                        }), s._clientLeft = s.wrapperEl.clientLeft
                    }
                    return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: r,
                            snapGrid: n,
                            slidesGrid: a,
                            rtlTranslate: o,
                            enabled: l,
                            animating: c
                        } = s;
                    if (!l) return s;
                    const d = s.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (c && !d && r.loopPreventsSliding) return !1;
                        s.loopFix({
                            direction: "prev"
                        }), s._clientLeft = s.wrapperEl.clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = u(o ? s.translate : -s.translate),
                        h = n.map((e => u(e)));
                    let f = n[h.indexOf(p) - 1];
                    if (void 0 === f && r.cssMode) {
                        let e;
                        n.forEach(((t, i) => {
                            p >= t && (e = i)
                        })), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), r.rewind && s.isBeginning) {
                        const r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(r, e, t, i)
                    }
                    return s.slideTo(m, e, t, i)
                },
                slideReset: function(e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                    const r = this;
                    let n = r.activeIndex;
                    const a = Math.min(r.params.slidesPerGroupSkip, n),
                        o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        const e = r.snapGrid[o];
                        l - e > (r.snapGrid[o + 1] - e) * s && (n += r.params.slidesPerGroup)
                    } else {
                        const e = r.snapGrid[o - 1];
                        l - e <= (r.snapGrid[o] - e) * s && (n -= r.params.slidesPerGroup)
                    }
                    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, i)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: i
                        } = e,
                        s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let r, n = e.clickedIndex;
                    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                    if (t.loop) {
                        if (e.animating) return;
                        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), n = e.getSlideIndex(pr(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), rr((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n) : n > e.slides.length - s ? (e.loopFix(), n = e.getSlideIndex(pr(i, `${a}[data-swiper-slide-index="${r}"]`)[0]), rr((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n)
                    } else e.slideTo(n)
                }
            },
            Or = {
                loopCreate: function(e) {
                    const t = this,
                        {
                            params: i,
                            slidesEl: s
                        } = t;
                    !i.loop || t.virtual && t.params.virtual.enabled || (pr(s, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    })), t.loopFix({
                        slideRealIndex: e,
                        direction: i.centeredSlides ? void 0 : "next"
                    }))
                },
                loopFix: function(e) {
                    let {
                        slideRealIndex: t,
                        slideTo: i = !0,
                        direction: s,
                        setTranslate: r,
                        activeSlideIndex: n,
                        byController: a,
                        byMousewheel: o
                    } = void 0 === e ? {} : e;
                    const l = this;
                    if (!l.params.loop) return;
                    l.emit("beforeLoopFix");
                    const {
                        slides: c,
                        allowSlidePrev: d,
                        allowSlideNext: u,
                        slidesEl: p,
                        params: h
                    } = l;
                    if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && h.virtual.enabled) return i && (h.centeredSlides || 0 !== l.snapIndex ? h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = u, void l.emit("loopFix");
                    const f = "auto" === h.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10));
                    let m = h.loopedSlides || f;
                    m % h.slidesPerGroup != 0 && (m += h.slidesPerGroup - m % h.slidesPerGroup), l.loopedSlides = m;
                    const g = [],
                        v = [];
                    let y = l.activeIndex;
                    void 0 === n ? n = l.getSlideIndex(l.slides.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : y = n;
                    const b = "next" === s || !s,
                        w = "prev" === s || !s;
                    let x = 0,
                        _ = 0;
                    if (n < m) {
                        x = Math.max(m - n, h.slidesPerGroup);
                        for (let e = 0; e < m - n; e += 1) {
                            const t = e - Math.floor(e / c.length) * c.length;
                            g.push(c.length - t - 1)
                        }
                    } else if (n > l.slides.length - 2 * m) {
                        _ = Math.max(n - (l.slides.length - 2 * m), h.slidesPerGroup);
                        for (let e = 0; e < _; e += 1) {
                            const t = e - Math.floor(e / c.length) * c.length;
                            v.push(t)
                        }
                    }
                    if (w && g.forEach((e => {
                            l.slides[e].swiperLoopMoveDOM = !0, p.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                        })), b && v.forEach((e => {
                            l.slides[e].swiperLoopMoveDOM = !0, p.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                        })), l.recalcSlides(), "auto" === h.slidesPerView && l.updateSlides(), h.watchSlidesProgress && l.updateSlidesOffset(), i)
                        if (g.length > 0 && w)
                            if (void 0 === t) {
                                const e = l.slidesGrid[y],
                                    t = l.slidesGrid[y + x] - e;
                                o ? l.setTranslate(l.translate - t) : (l.slideTo(y + x, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                            } else r && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
                    else if (v.length > 0 && b)
                        if (void 0 === t) {
                            const e = l.slidesGrid[y],
                                t = l.slidesGrid[y - _] - e;
                            o ? l.setTranslate(l.translate - t) : (l.slideTo(y - _, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                        } else l.slideToLoop(t, 0, !1, !0);
                    if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !a) {
                        const e = {
                            slideRealIndex: t,
                            direction: s,
                            setTranslate: r,
                            activeSlideIndex: n,
                            byController: !0
                        };
                        Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                            !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                slideTo: t.params.slidesPerView === h.slidesPerView && i
                            })
                        })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...e,
                            slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && i
                        })
                    }
                    l.emit("loopFix")
                },
                loopDestroy: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: i
                        } = e;
                    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides();
                    const s = [];
                    e.slides.forEach((e => {
                        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        s[t] = e
                    })), e.slides.forEach((e => {
                        e.removeAttribute("data-swiper-slide-index")
                    })), s.forEach((e => {
                        i.append(e)
                    })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                }
            };

        function Lr(e) {
            const t = this,
                i = tr(),
                s = sr(),
                r = t.touchEventsData;
            r.evCache.push(e);
            const {
                params: n,
                touches: a,
                enabled: o
            } = t;
            if (!o) return;
            if (!n.simulateTouch && "mouse" === e.pointerType) return;
            if (t.animating && n.preventInteractionOnTransition) return;
            !t.animating && n.cssMode && n.loop && t.loopFix();
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            let c = l.target;
            if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(c)) return;
            if ("which" in l && 3 === l.which) return;
            if ("button" in l && l.button > 0) return;
            if (r.isTouched && r.isMoved) return;
            const d = !!n.noSwipingClass && "" !== n.noSwipingClass,
                u = e.composedPath ? e.composedPath() : e.path;
            d && l.target && l.target.shadowRoot && u && (c = u[0]);
            const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
                h = !(!l.target || !l.target.shadowRoot);
            if (n.noSwiping && (h ? function(e, t) {
                    return void 0 === t && (t = this),
                        function t(i) {
                            if (!i || i === tr() || i === sr()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            const s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                }(p, c) : c.closest(p))) return void(t.allowClick = !0);
            if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
            a.currentX = l.pageX, a.currentY = l.pageY;
            const f = a.currentX,
                m = a.currentY,
                g = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
            if (g && (f <= v || f >= s.innerWidth - v)) {
                if ("prevent" !== g) return;
                e.preventDefault()
            }
            Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), a.startX = f, a.startY = m, r.touchStartTime = nr(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
            let y = !0;
            c.matches(r.focusableElements) && (y = !1, "SELECT" === c.nodeName && (r.isTouched = !1)), i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== c && i.activeElement.blur();
            const b = y && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !b || c.isContentEditable || l.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
        }

        function Ir(e) {
            const t = tr(),
                i = this,
                s = i.touchEventsData,
                {
                    params: r,
                    touches: n,
                    rtlTranslate: a,
                    enabled: o
                } = i;
            if (!o) return;
            if (!r.simulateTouch && "mouse" === e.pointerType) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l));
            const c = s.evCache.findIndex((e => e.pointerId === l.pointerId));
            c >= 0 && (s.evCache[c] = l);
            const d = s.evCache.length > 1 ? s.evCache[0] : l,
                u = d.pageX,
                p = d.pageY;
            if (l.preventedByNestedSwiper) return n.startX = u, void(n.startY = p);
            if (!i.allowTouchMove) return l.target.matches(s.focusableElements) || (i.allowClick = !1), void(s.isTouched && (Object.assign(n, {
                startX: u,
                startY: p,
                prevX: i.touches.currentX,
                prevY: i.touches.currentY,
                currentX: u,
                currentY: p
            }), s.touchStartTime = nr()));
            if (r.touchReleaseOnEdges && !r.loop)
                if (i.isVertical()) {
                    if (p < n.startY && i.translate <= i.maxTranslate() || p > n.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                } else if (u < n.startX && i.translate <= i.maxTranslate() || u > n.startX && i.translate >= i.minTranslate()) return;
            if (t.activeElement && l.target === t.activeElement && l.target.matches(s.focusableElements)) return s.isMoved = !0, void(i.allowClick = !1);
            if (s.allowTouchCallbacks && i.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
            n.currentX = u, n.currentY = p;
            const h = n.currentX - n.startX,
                f = n.currentY - n.startY;
            if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let e;
                i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", l), void 0 === s.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (s.startMoving = !0)), s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) return void(s.isTouched = !1);
            if (!s.startMoving) return;
            i.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
            let m = i.isHorizontal() ? h : f,
                g = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
            r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), n.diff = m, m *= r.touchRatio, a && (m = -m, g = -g);
            const v = i.touchesDirection;
            i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = g > 0 ? "prev" : "next";
            const y = i.params.loop && !r.cssMode;
            if (!s.isMoved) {
                if (y && i.loopFix({
                        direction: i.swipeDirection
                    }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    i.wrapperEl.dispatchEvent(e)
                }
                s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)
            }
            let b;
            s.isMoved && v !== i.touchesDirection && y && Math.abs(m) >= 1 && (i.loopFix({
                direction: i.swipeDirection,
                setTranslate: !0
            }), b = !0), i.emit("sliderMove", l), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
            let w = !0,
                x = r.resistanceRatio;
            if (r.touchReleaseOnEdges && (x = 0), m > 0 ? (y && !b && s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0
                }), s.currentTranslate > i.minTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** x))) : m < 0 && (y && !b && s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: i.slides.length - ("auto" === r.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                }), s.currentTranslate < i.maxTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** x))), w && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                if (!(Math.abs(m) > r.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, void(n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            }
            r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
        }

        function zr(e) {
            const t = this,
                i = t.touchEventsData,
                s = i.evCache.findIndex((t => t.pointerId === e.pointerId));
            if (s >= 0 && i.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && (!["pointercancel", "contextmenu"].includes(e.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
            const {
                params: r,
                touches: n,
                rtlTranslate: a,
                slidesGrid: o,
                enabled: l
            } = t;
            if (!l) return;
            if (!r.simulateTouch && "mouse" === e.pointerType) return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const d = nr(),
                u = d - i.touchStartTime;
            if (t.allowClick) {
                const e = c.path || c.composedPath && c.composedPath();
                t.updateClickedSlide(e && e[0] || c.target), t.emit("tap click", c), u < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)
            }
            if (i.lastClickTime = nr(), rr((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            let p;
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = r.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, r.cssMode) return;
            if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: p
            });
            let h = 0,
                f = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== o[e + t] ? p >= o[e] && p < o[e + t] && (h = e, f = o[e + t] - o[e]) : p >= o[e] && (h = e, f = o[o.length - 1] - o[o.length - 2])
            }
            let m = null,
                g = null;
            r.rewind && (t.isBeginning ? g = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
            const v = (p - o[h]) / f,
                y = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (u > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (v >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? m : h + y) : t.slideTo(h)), "prev" === t.swipeDirection && (v > 1 - r.longSwipesRatio ? t.slideTo(h + y) : null !== g && v < 0 && Math.abs(v) > r.longSwipesRatio ? t.slideTo(g) : t.slideTo(h))
            } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== m ? m : h + y), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h)) : c.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h)
            }
        }

        function Dr() {
            const e = this,
                {
                    params: t,
                    el: i
                } = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: s,
                allowSlidePrev: r,
                snapGrid: n
            } = e, a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }

        function Br(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function $r() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: i,
                    enabled: s
                } = e;
            if (!s) return;
            let r;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const n = e.maxTranslate() - e.minTranslate();
            r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function Rr(e) {
            const t = this;
            Er(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }
        let Fr = !1;

        function Nr() {}
        const Xr = (e, t) => {
                const i = tr(),
                    {
                        params: s,
                        el: r,
                        wrapperEl: n,
                        device: a
                    } = e,
                    o = !!s.nested,
                    l = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                r[l]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), i[l]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), i[l]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), i[l]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), i[l]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), i[l]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), i[l]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (s.preventClicks || s.preventClicksPropagation) && r[l]("click", e.onClick, !0), s.cssMode && n[l]("scroll", e.onScroll), s.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Dr, !0) : e[c]("observerUpdate", Dr, !0), r[l]("load", e.onLoad, {
                    capture: !0
                })
            },
            Yr = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var Hr = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: i,
                            rtl: s,
                            el: r,
                            device: n
                        } = e,
                        a = function(e, t) {
                            const i = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((s => {
                                    e[s] && i.push(t + s)
                                })) : "string" == typeof e && i.push(t + e)
                            })), i
                        }(["initialized", i.direction, {
                            "free-mode": e.params.freeMode && i.freeMode.enabled
                        }, {
                            autoheight: i.autoHeight
                        }, {
                            rtl: s
                        }, {
                            grid: i.grid && i.grid.rows > 1
                        }, {
                            "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                        }, {
                            android: n.android
                        }, {
                            ios: n.ios
                        }, {
                            "css-mode": i.cssMode
                        }, {
                            centered: i.cssMode && i.centeredSlides
                        }, {
                            "watch-progress": i.watchSlidesProgress
                        }], i.containerModifierClass);
                    t.push(...a), r.classList.add(...t), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        el: e,
                        classNames: t
                    } = this;
                    e.classList.remove(...t), this.emitContainerClasses()
                }
            },
            Vr = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 1,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

        function qr(e, t) {
            return function(i) {
                void 0 === i && (i = {});
                const s = Object.keys(i)[0],
                    r = i[s];
                "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                    auto: !0
                }), s in e && "enabled" in r ? (!0 === e[s] && (e[s] = {
                    enabled: !0
                }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                    enabled: !1
                }), lr(t, i)) : lr(t, i)) : lr(t, i)
            }
        }
        const jr = {
                eventsEmitter: Sr,
                update: Pr,
                translate: {
                    getTranslate: function(e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        const {
                            params: t,
                            rtlTranslate: i,
                            translate: s,
                            wrapperEl: r
                        } = this;
                        if (t.virtualTranslate) return i ? -s : s;
                        if (t.cssMode) return s;
                        let n = ar(r, e);
                        return n += this.cssOverflowAdjustment(), i && (n = -n), n || 0
                    },
                    setTranslate: function(e, t) {
                        const i = this,
                            {
                                rtlTranslate: s,
                                params: r,
                                wrapperEl: n,
                                progress: a
                            } = i;
                        let o, l = 0,
                            c = 0;
                        i.isHorizontal() ? l = s ? -e : e : c = e, r.roundLengths && (l = Math.floor(l), c = Math.floor(c)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c, r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -c : r.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : c -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                        const d = i.maxTranslate() - i.minTranslate();
                        o = 0 === d ? 0 : (e - i.minTranslate()) / d, o !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    },
                    translateTo: function(e, t, i, s, r) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                        const n = this,
                            {
                                params: a,
                                wrapperEl: o
                            } = n;
                        if (n.animating && a.preventInteractionOnTransition) return !1;
                        const l = n.minTranslate(),
                            c = n.maxTranslate();
                        let d;
                        if (d = s && e > l ? l : s && e < c ? c : e, n.updateProgress(d), a.cssMode) {
                            const e = n.isHorizontal();
                            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                            else {
                                if (!n.support.smoothScroll) return dr({
                                    swiper: n,
                                    targetPosition: -d,
                                    side: e ? "left" : "top"
                                }), !0;
                                o.scrollTo({
                                    [e ? "left" : "top"]: -d,
                                    behavior: "smooth"
                                })
                            }
                            return !0
                        }
                        return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                            n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                        }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                    }
                },
                transition: {
                    setTransition: function(e, t) {
                        const i = this;
                        i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), i.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        const i = this,
                            {
                                params: s
                            } = i;
                        s.cssMode || (s.autoHeight && i.updateAutoHeight(), kr({
                            swiper: i,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        const i = this,
                            {
                                params: s
                            } = i;
                        i.animating = !1, s.cssMode || (i.setTransition(0), kr({
                            swiper: i,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: Ar,
                loop: Or,
                grabCursor: {
                    setGrabCursor: function(e) {
                        const t = this;
                        if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                            t.__preventObserver__ = !1
                        }))
                    },
                    unsetGrabCursor: function() {
                        const e = this;
                        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                            e.__preventObserver__ = !1
                        })))
                    }
                },
                events: {
                    attachEvents: function() {
                        const e = this,
                            t = tr(),
                            {
                                params: i
                            } = e;
                        e.onTouchStart = Lr.bind(e), e.onTouchMove = Ir.bind(e), e.onTouchEnd = zr.bind(e), i.cssMode && (e.onScroll = $r.bind(e)), e.onClick = Br.bind(e), e.onLoad = Rr.bind(e), Fr || (t.addEventListener("touchstart", Nr), Fr = !0), Xr(e, "on")
                    },
                    detachEvents: function() {
                        Xr(this, "off")
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        const e = this,
                            {
                                realIndex: t,
                                initialized: i,
                                params: s,
                                el: r
                            } = e,
                            n = s.breakpoints;
                        if (!n || n && 0 === Object.keys(n).length) return;
                        const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                        if (!a || e.currentBreakpoint === a) return;
                        const o = (a in n ? n[a] : void 0) || e.originalParams,
                            l = Yr(e, s),
                            c = Yr(e, o),
                            d = s.enabled;
                        l && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && c && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                            if (void 0 === o[t]) return;
                            const i = s[t] && s[t].enabled,
                                r = o[t] && o[t].enabled;
                            i && !r && e[t].disable(), !i && r && e[t].enable()
                        }));
                        const u = o.direction && o.direction !== s.direction,
                            p = s.loop && (o.slidesPerView !== s.slidesPerView || u);
                        u && i && e.changeDirection(), lr(e.params, o);
                        const h = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), d && !h ? e.disable() : !d && h && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                    },
                    getBreakpoint: function(e, t, i) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                        let s = !1;
                        const r = sr(),
                            n = "window" === t ? r.innerHeight : i.clientHeight,
                            a = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: n * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                        for (let e = 0; e < a.length; e += 1) {
                            const {
                                point: n,
                                value: o
                            } = a[e];
                            "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (s = n) : o <= i.clientWidth && (s = n)
                        }
                        return s || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        const e = this,
                            {
                                isLocked: t,
                                params: i
                            } = e,
                            {
                                slidesOffsetBefore: s
                            } = i;
                        if (s) {
                            const t = e.slides.length - 1,
                                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                            e.isLocked = e.size > i
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: Hr
            },
            Gr = {};
        class Wr {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = lr({}, t), e && !t.el && (t.el = e);
                const n = tr();
                if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return n.querySelectorAll(t.el).forEach((i => {
                        const s = lr({}, t, {
                            el: i
                        });
                        e.push(new Wr(s))
                    })), e
                }
                const a = this;
                var o;
                a.__swiper__ = !0, a.support = Tr(), a.device = (void 0 === (o = {
                    userAgent: t.userAgent
                }) && (o = {}), xr || (xr = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const i = Tr(),
                        s = sr(),
                        r = s.navigator.platform,
                        n = t || s.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1
                        },
                        o = s.screen.width,
                        l = s.screen.height,
                        c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let d = n.match(/(iPad).*OS\s([\d_]+)/);
                    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === r;
                    let f = "MacIntel" === r;
                    return !d && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), c && !h && (a.os = "android", a.android = !0), (d || p || u) && (a.os = "ios", a.ios = !0), a
                }(o)), xr), a.browser = (_r || (_r = function() {
                    const e = sr();
                    let t = !1;

                    function i() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (i()) {
                        const i = String(e.navigator.userAgent);
                        if (i.includes("Version/")) {
                            const [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            t = e < 16 || 16 === e && s < 2
                        }
                    }
                    return {
                        isSafari: t || i(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), _r), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                const l = {};
                a.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: a,
                        extendParams: qr(t, l),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a)
                    })
                }));
                const c = lr({}, Vr, l);
                return a.params = lr({}, c, Gr, t), a.originalParams = lr({}, a.params), a.passedParams = lr({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                    a.on(e, a.params.on[e])
                })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === a.params.direction
                    },
                    isVertical() {
                        return "vertical" === a.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.emit("_swiper"), a.params.init && a.init(), a
            }
            getSlideIndex(e) {
                const {
                    slidesEl: t,
                    params: i
                } = this, s = gr(pr(t, `.${i.slideClass}, swiper-slide`)[0]);
                return gr(e) - s
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const {
                    slidesEl: e,
                    params: t
                } = this;
                this.slides = pr(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const i = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = i.minTranslate(),
                    r = (i.maxTranslate() - s) * e + s;
                i.translateTo(r, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((i => {
                    const s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }), e.emit("_slideClass", i, s)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {
                    params: i,
                    slides: s,
                    slidesGrid: r,
                    slidesSizesGrid: n,
                    size: a,
                    activeIndex: o
                } = this;
                let l = 1;
                if (i.centeredSlides) {
                    let e, t = s[o] ? s[o].swiperSlideSize : 0;
                    for (let i = o + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > a && (e = !0));
                    for (let i = o - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e)
                    for (let e = o + 1; e < s.length; e += 1)(t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
                else
                    for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
                return l
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: i
                } = e;

                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let r;
                if (i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && Er(e, t)
                    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                        const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                        r = e.slideTo(t.length - 1, 0, !1, !0)
                    } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                    r || s()
                }
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const i = this,
                    s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), i.emit("changeDirection"), t && i.update()), i
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                i.swiper = t, i.parentNode && i.parentNode.host && "SWIPER-CONTAINER" === i.parentNode.host.nodeName && (t.isElement = !0);
                const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                let r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : pr(i, s())[0];
                return !r && t.params.createElements && (r = hr("div", t.params.wrapperClass), i.append(r), pr(i, `.${t.params.slideClass}`).forEach((e => {
                    r.append(e)
                }))), Object.assign(t, {
                    el: i,
                    wrapperEl: r,
                    slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                    hostEl: t.isElement ? i.parentNode.host : i,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === mr(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === mr(i, "direction")),
                    wrongRTL: "-webkit-box" === mr(r, "display")
                }), !0
            }
            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const i = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((e => {
                    e.complete ? Er(t, e) : e.addEventListener("load", (e => {
                        Er(t, e.target)
                    }))
                })), Cr(t), t.initialized = !0, Cr(t), t.emit("init"), t.emit("afterInit"), t
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const i = this,
                    {
                        params: s,
                        el: r,
                        wrapperEl: n,
                        slides: a
                    } = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach((e => {
                    e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                    i.off(e)
                })), !1 !== e && (i.el.swiper = null, function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    }))
                }(i)), i.destroyed = !0), null
            }
            static extendDefaults(e) {
                lr(Gr, e)
            }
            static get extendedDefaults() {
                return Gr
            }
            static get defaults() {
                return Vr
            }
            static installModule(e) {
                Wr.prototype.__modules__ || (Wr.prototype.__modules__ = []);
                const t = Wr.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => Wr.installModule(e))), Wr) : (Wr.installModule(e), Wr)
            }
        }

        function Ur(e, t, i, s) {
            return e.params.createElements && Object.keys(s).forEach((r => {
                if (!i[r] && !0 === i.auto) {
                    let n = pr(e.el, `.${s[r]}`)[0];
                    n || (n = hr("div", s[r]), n.className = s[r], e.el.append(n)), i[r] = n, t[r] = n
                }
            })), i
        }

        function Zr(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
        }

        function Kr(e) {
            const t = this,
                {
                    params: i,
                    slidesEl: s
                } = t;
            i.loop && t.loopDestroy();
            const r = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, s.append(t.children[0]), t.innerHTML = ""
                } else s.append(e)
            };
            if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]);
            else r(e);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update()
        }

        function Qr(e) {
            const t = this,
                {
                    params: i,
                    activeIndex: s,
                    slidesEl: r
                } = t;
            i.loop && t.loopDestroy();
            let n = s + 1;
            const a = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, r.prepend(t.children[0]), t.innerHTML = ""
                } else r.prepend(e)
            };
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
                n = s + e.length
            } else a(e);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update(), t.slideTo(n, 0, !1)
        }

        function Jr(e, t) {
            const i = this,
                {
                    params: s,
                    activeIndex: r,
                    slidesEl: n
                } = i;
            let a = r;
            s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.recalcSlides());
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const c = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides[t];
                e.remove(), c.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                l = a > e ? a + t.length : a
            } else n.append(t);
            for (let e = 0; e < c.length; e += 1) n.append(c[e]);
            i.recalcSlides(), s.loop && i.loopCreate(), s.observer && !i.isElement || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        }

        function en(e) {
            const t = this,
                {
                    params: i,
                    activeIndex: s
                } = t;
            let r = s;
            i.loop && (r -= t.loopedSlides, t.loopDestroy());
            let n, a = r;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1) n = e[i], t.slides[n] && t.slides[n].remove(), n < a && (a -= 1);
                a = Math.max(a, 0)
            } else n = e, t.slides[n] && t.slides[n].remove(), n < a && (a -= 1), a = Math.max(a, 0);
            t.recalcSlides(), i.loop && t.loopCreate(), i.observer && !t.isElement || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
        }

        function tn() {
            const e = this,
                t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t)
        }

        function sn(e) {
            const {
                effect: t,
                swiper: i,
                on: s,
                setTranslate: r,
                setTransition: n,
                overwriteParams: a,
                perspective: o,
                recreateShadows: l,
                getEffectParams: c
            } = e;
            let d;
            s("beforeInit", (() => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                const e = a ? a() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e)
            })), s("setTranslate", (() => {
                i.params.effect === t && r()
            })), s("setTransition", ((e, s) => {
                i.params.effect === t && n(s)
            })), s("transitionEnd", (() => {
                if (i.params.effect === t && l) {
                    if (!c || !c().slideShadows) return;
                    i.slides.forEach((e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                    })), l()
                }
            })), s("virtualUpdate", (() => {
                i.params.effect === t && (i.slides.length || (d = !0), requestAnimationFrame((() => {
                    d && i.slides && i.slides.length && (r(), d = !1)
                })))
            }))
        }

        function rn(e, t) {
            const i = ur(t);
            return i !== t && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
        }

        function nn(e) {
            let {
                swiper: t,
                duration: i,
                transformElements: s,
                allSlides: r
            } = e;
            const {
                activeIndex: n
            } = t;
            if (t.params.virtualTranslate && 0 !== i) {
                let e, i = !1;
                e = r ? s : s.filter((e => {
                    const i = e.classList.contains("swiper-slide-transform") ? (e => e.parentElement ? e.parentElement : t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0])(e) : e;
                    return t.getSlideIndex(i) === n
                })), e.forEach((e => {
                    yr(e, (() => {
                        if (i) return;
                        if (!t || t.destroyed) return;
                        i = !0, t.animating = !1;
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.wrapperEl.dispatchEvent(e)
                    }))
                }))
            }
        }

        function an(e, t, i) {
            const s = `swiper-slide-shadow${i?`-${i}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
                r = ur(t);
            let n = r.querySelector(`.${s.split(" ").join(".")}`);
            return n || (n = hr("div", s.split(" ")), r.append(n)), n
        }
        Object.keys(jr).forEach((e => {
            Object.keys(jr[e]).forEach((t => {
                Wr.prototype[t] = jr[e][t]
            }))
        })), Wr.use([function(e) {
            let {
                swiper: t,
                on: i,
                emit: s
            } = e;
            const r = sr();
            let n = null,
                a = null;
            const o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                },
                l = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
            i("init", (() => {
                t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                    a = r.requestAnimationFrame((() => {
                        const {
                            width: i,
                            height: s
                        } = t;
                        let r = i,
                            n = s;
                        e.forEach((e => {
                            let {
                                contentBoxSize: i,
                                contentRect: s,
                                target: a
                            } = e;
                            a && a !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, n = s ? s.height : (i[0] || i).blockSize)
                        })), r === i && n === s || o()
                    }))
                })), n.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", l))
            })), i("destroy", (() => {
                a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", l)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = [],
                a = sr(),
                o = function(e, i) {
                    void 0 === i && (i = {});
                    const s = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) return void r("observerUpdate", e[0]);
                        const i = function() {
                            r("observerUpdate", e[0])
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(i) : a.setTimeout(i, 0)
                    }));
                    s.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), n.push(s)
                };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), s("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = vr(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) o(e[t])
                    }
                    o(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }), o(t.wrapperEl, {
                        attributes: !1
                    })
                }
            })), s("destroy", (() => {
                n.forEach((e => {
                    e.disconnect()
                })), n.splice(0, n.length)
            }))
        }]);
        const on = [function(e) {
            let t, {
                swiper: i,
                extendParams: s,
                on: r,
                emit: n
            } = e;
            s({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            const a = tr();
            i.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            };
            const o = a.createElement("div");

            function l(e, t) {
                const s = i.params.virtual;
                if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                let r;
                return s.renderSlide ? (r = s.renderSlide.call(i, e, t), "string" == typeof r && (o.innerHTML = r, r = o.children[0])) : r = i.isElement ? hr("swiper-slide") : hr("div", i.params.slideClass), r.setAttribute("data-swiper-slide-index", t), s.renderSlide || (r.innerHTML = e), s.cache && (i.virtual.cache[t] = r), r
            }

            function c(e) {
                const {
                    slidesPerView: t,
                    slidesPerGroup: s,
                    centeredSlides: r,
                    loop: a
                } = i.params, {
                    addSlidesBefore: o,
                    addSlidesAfter: c
                } = i.params.virtual, {
                    from: d,
                    to: u,
                    slides: p,
                    slidesGrid: h,
                    offset: f
                } = i.virtual;
                i.params.cssMode || i.updateActiveIndex();
                const m = i.activeIndex || 0;
                let g, v, y;
                g = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (v = Math.floor(t / 2) + s + c, y = Math.floor(t / 2) + s + o) : (v = t + (s - 1) + c, y = (a ? t : s) + o);
                let b = m - y,
                    w = m + v;
                a || (b = Math.max(b, 0), w = Math.min(w, p.length - 1));
                let x = (i.slidesGrid[b] || 0) - (i.slidesGrid[0] || 0);

                function _() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), n("virtualUpdate")
                }
                if (a && m >= y ? (b -= y, r || (x += i.slidesGrid[0])) : a && m < y && (b = -y, r && (x += i.slidesGrid[0])), Object.assign(i.virtual, {
                        from: b,
                        to: w,
                        offset: x,
                        slidesGrid: i.slidesGrid,
                        slidesBefore: y,
                        slidesAfter: v
                    }), d === b && u === w && !e) return i.slidesGrid !== h && x !== f && i.slides.forEach((e => {
                    e.style[g] = x - Math.abs(i.cssOverflowAdjustment()) + "px"
                })), i.updateProgress(), void n("virtualUpdate");
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: x,
                    from: b,
                    to: w,
                    slides: function() {
                        const e = [];
                        for (let t = b; t <= w; t += 1) e.push(p[t]);
                        return e
                    }()
                }), void(i.params.virtual.renderExternalUpdate ? _() : n("virtualUpdate"));
                const T = [],
                    S = [],
                    E = e => {
                        let t = e;
                        return e < 0 ? t = p.length + e : t >= p.length && (t -= p.length), t
                    };
                if (e) i.slidesEl.querySelectorAll(`.${i.params.slideClass}, swiper-slide`).forEach((e => {
                    e.remove()
                }));
                else
                    for (let e = d; e <= u; e += 1)
                        if (e < b || e > w) {
                            const t = E(e);
                            i.slidesEl.querySelectorAll(`.${i.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e => {
                                e.remove()
                            }))
                        } const M = a ? -p.length : 0,
                    C = a ? 2 * p.length : p.length;
                for (let t = M; t < C; t += 1)
                    if (t >= b && t <= w) {
                        const i = E(t);
                        void 0 === u || e ? S.push(i) : (t > u && S.push(i), t < d && T.push(i))
                    }
                if (S.forEach((e => {
                        i.slidesEl.append(l(p[e], e))
                    })), a)
                    for (let e = T.length - 1; e >= 0; e -= 1) {
                        const t = T[e];
                        i.slidesEl.prepend(l(p[t], t))
                    } else T.sort(((e, t) => t - e)), T.forEach((e => {
                        i.slidesEl.prepend(l(p[e], e))
                    }));
                pr(i.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                    e.style[g] = x - Math.abs(i.cssOverflowAdjustment()) + "px"
                })), _()
            }
            r("beforeInit", (() => {
                if (!i.params.virtual.enabled) return;
                let e;
                if (void 0 === i.passedParams.virtual.slides) {
                    const t = [...i.slidesEl.children].filter((e => e.matches(`.${i.params.slideClass}, swiper-slide`)));
                    t && t.length && (i.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t), i.virtual.cache[t] = e, e.remove()
                    })))
                }
                e || (i.virtual.slides = i.params.virtual.slides), i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, i.params.initialSlide || c()
            })), r("setTranslate", (() => {
                i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                    c()
                }), 100)) : c())
            })), r("init update resize", (() => {
                i.params.virtual.enabled && i.params.cssMode && cr(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
            })), Object.assign(i.virtual, {
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e)
                        for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]);
                    else i.virtual.slides.push(e);
                    c(!0)
                },
                prependSlide: function(e) {
                    const t = i.activeIndex;
                    let s = t + 1,
                        r = 1;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.unshift(e[t]);
                        s = t + e.length, r = e.length
                    } else i.virtual.slides.unshift(e);
                    if (i.params.virtual.cache) {
                        const e = i.virtual.cache,
                            t = {};
                        Object.keys(e).forEach((i => {
                            const s = e[i],
                                n = s.getAttribute("data-swiper-slide-index");
                            n && s.setAttribute("data-swiper-slide-index", parseInt(n, 10) + r), t[parseInt(i, 10) + r] = s
                        })), i.virtual.cache = t
                    }
                    c(!0), i.slideTo(s, 0)
                },
                removeSlide: function(e) {
                    if (null == e) return;
                    let t = i.activeIndex;
                    if (Array.isArray(e))
                        for (let s = e.length - 1; s >= 0; s -= 1) i.virtual.slides.splice(e[s], 1), i.params.virtual.cache && delete i.virtual.cache[e[s]], e[s] < t && (t -= 1), t = Math.max(t, 0);
                    else i.virtual.slides.splice(e, 1), i.params.virtual.cache && delete i.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    c(!0), i.slideTo(t, 0)
                },
                removeAllSlides: function() {
                    i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), c(!0), i.slideTo(0, 0)
                },
                update: c
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = tr(),
                a = sr();

            function o(e) {
                if (!t.enabled) return;
                const {
                    rtlTranslate: i
                } = t;
                let s = e;
                s.originalEvent && (s = s.originalEvent);
                const o = s.keyCode || s.charCode,
                    l = t.params.keyboard.pageUpDown,
                    c = l && 33 === o,
                    d = l && 34 === o,
                    u = 37 === o,
                    p = 39 === o,
                    h = 38 === o,
                    f = 40 === o;
                if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (c || d || u || p || h || f)) {
                        let e = !1;
                        if (vr(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === vr(t.el, `.${t.params.slideActiveClass}`).length) return;
                        const s = t.el,
                            r = s.clientWidth,
                            n = s.clientHeight,
                            o = a.innerWidth,
                            l = a.innerHeight,
                            c = fr(s);
                        i && (c.left -= s.scrollLeft);
                        const d = [
                            [c.left, c.top],
                            [c.left + r, c.top],
                            [c.left, c.top + n],
                            [c.left + r, c.top + n]
                        ];
                        for (let t = 0; t < d.length; t += 1) {
                            const i = d[t];
                            if (i[0] >= 0 && i[0] <= o && i[1] >= 0 && i[1] <= l) {
                                if (0 === i[0] && 0 === i[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((c || d || u || p) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((d || p) && !i || (c || u) && i) && t.slideNext(), ((c || u) && !i || (d || p) && i) && t.slidePrev()) : ((c || d || h || f) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (d || f) && t.slideNext(), (c || h) && t.slidePrev()), r("keyPress", o)
                }
            }

            function l() {
                t.keyboard.enabled || (n.addEventListener("keydown", o), t.keyboard.enabled = !0)
            }

            function c() {
                t.keyboard.enabled && (n.removeEventListener("keydown", o), t.keyboard.enabled = !1)
            }
            t.keyboard = {
                enabled: !1
            }, i({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s("init", (() => {
                t.params.keyboard.enabled && l()
            })), s("destroy", (() => {
                t.keyboard.enabled && c()
            })), Object.assign(t.keyboard, {
                enable: l,
                disable: c
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = sr();
            let a;
            i({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            }), t.mousewheel = {
                enabled: !1
            };
            let o, l = nr();
            const c = [];

            function d() {
                t.enabled && (t.mouseEntered = !0)
            }

            function u() {
                t.enabled && (t.mouseEntered = !1)
            }

            function p(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && nr() - l < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && nr() - l < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), r("scroll", e.raw)), l = (new n.Date).getTime(), 1))
            }

            function h(e) {
                let i = e,
                    s = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const n = t.params.mousewheel;
                t.params.cssMode && i.preventDefault();
                let l = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
                const d = l && l.contains(i.target);
                if (!t.mouseEntered && !d && !n.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                let u = 0;
                const h = t.rtlTranslate ? -1 : 1,
                    f = function(e) {
                        let t = 0,
                            i = 0,
                            s = 0,
                            r = 0;
                        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = r, r = 0), (s || r) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, r *= 40) : (s *= 800, r *= 800)), s && !t && (t = s < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: i,
                            pixelX: s,
                            pixelY: r
                        }
                    }(i);
                if (n.forceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                        u = -f.pixelX * h
                    } else {
                        if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                        u = -f.pixelY
                    }
                else u = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * h : -f.pixelY;
                if (0 === u) return !0;
                n.invert && (u = -u);
                let m = t.getTranslate() + u * n.sensitivity;
                if (m >= t.minTranslate() && (m = t.minTranslate()), m <= t.maxTranslate() && (m = t.maxTranslate()), s = !!t.params.loop || !(m === t.minTranslate() || m === t.maxTranslate()), s && t.params.nested && i.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {
                            time: nr(),
                            delta: Math.abs(u),
                            direction: Math.sign(u)
                        },
                        s = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                    if (!s) {
                        o = void 0;
                        let l = t.getTranslate() + u * n.sensitivity;
                        const d = t.isBeginning,
                            p = t.isEnd;
                        if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0), t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                                direction: e.direction < 0 ? "next" : "prev",
                                byMousewheel: !0
                            }), t.params.freeMode.sticky) {
                            clearTimeout(a), a = void 0, c.length >= 15 && c.shift();
                            const i = c.length ? c[c.length - 1] : void 0,
                                s = c[0];
                            if (c.push(e), i && (e.delta > i.delta || e.direction !== i.direction)) c.splice(0);
                            else if (c.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                                const i = u > 0 ? .8 : .2;
                                o = e, c.splice(0), a = rr((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, i)
                                }), 0)
                            }
                            a || (a = rr((() => {
                                o = e, c.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (s || r("scroll", i), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n.releaseOnEdges && (l === t.minTranslate() || l === t.maxTranslate())) return !0
                    }
                } else {
                    const i = {
                        time: nr(),
                        delta: Math.abs(u),
                        direction: Math.sign(u),
                        raw: e
                    };
                    c.length >= 2 && c.shift();
                    const s = c.length ? c[c.length - 1] : void 0;
                    if (c.push(i), s ? (i.direction !== s.direction || i.delta > s.delta || i.time > s.time + 150) && p(i) : p(i), function(e) {
                            const i = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
                            } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                            return !1
                        }(i)) return !0
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            }

            function f(e) {
                let i = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (i = document.querySelector(t.params.mousewheel.eventsTarget)), i[e]("mouseenter", d), i[e]("mouseleave", u), i[e]("wheel", h)
            }

            function m() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (f("addEventListener"), t.mousewheel.enabled = !0, !0)
            }

            function g() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (f("removeEventListener"), t.mousewheel.enabled = !1, !0)
            }
            s("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && g(), t.params.mousewheel.enabled && m()
            })), s("destroy", (() => {
                t.params.cssMode && m(), t.mousewheel.enabled && g()
            })), Object.assign(t.mousewheel, {
                enable: m,
                disable: g
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                prevEl: null
            };
            const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function a(e) {
                let i;
                return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e), i) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.el.querySelectorAll(e).length && (i = t.el.querySelector(e))), e && !i ? e : i)
            }

            function o(e, i) {
                const s = t.params.navigation;
                (e = n(e)).forEach((e => {
                    e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
                }))
            }

            function l() {
                const {
                    nextEl: e,
                    prevEl: i
                } = t.navigation;
                if (t.params.loop) return o(i, !1), void o(e, !1);
                o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
            }

            function c(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
            }

            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
            }

            function u() {
                const e = t.params.navigation;
                if (t.params.navigation = Ur(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                let i = a(e.nextEl),
                    s = a(e.prevEl);
                Object.assign(t.navigation, {
                    nextEl: i,
                    prevEl: s
                }), i = n(i), s = n(s);
                const r = (i, s) => {
                    i && i.addEventListener("click", "next" === s ? d : c), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
                };
                i.forEach((e => r(e, "next"))), s.forEach((e => r(e, "prev")))
            }

            function p() {
                let {
                    nextEl: e,
                    prevEl: i
                } = t.navigation;
                e = n(e), i = n(i);
                const s = (e, i) => {
                    e.removeEventListener("click", "next" === i ? d : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => s(e, "next"))), i.forEach((e => s(e, "prev")))
            }
            s("init", (() => {
                !1 === t.params.navigation.enabled ? h() : (u(), l())
            })), s("toEdge fromEdge lock unlock", (() => {
                l()
            })), s("destroy", (() => {
                p()
            })), s("enable disable", (() => {
                let {
                    nextEl: e,
                    prevEl: i
                } = t.navigation;
                e = n(e), i = n(i), [...e, ...i].filter((e => !!e)).forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass)))
            })), s("click", ((e, i) => {
                let {
                    nextEl: s,
                    prevEl: a
                } = t.navigation;
                s = n(s), a = n(a);
                const o = i.target;
                if (t.params.navigation.hideOnClick && !a.includes(o) && !s.includes(o)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                    let e;
                    s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...s, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const h = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), l()
                },
                disable: h,
                update: l,
                init: u,
                destroy: p
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = "swiper-pagination";
            let a;
            i({
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
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${n}-bullet`,
                    bulletActiveClass: `${n}-bullet-active`,
                    modifierClass: `${n}-`,
                    currentClass: `${n}-current`,
                    totalClass: `${n}-total`,
                    hiddenClass: `${n}-hidden`,
                    progressbarFillClass: `${n}-progressbar-fill`,
                    progressbarOppositeClass: `${n}-progressbar-opposite`,
                    clickableClass: `${n}-clickable`,
                    lockClass: `${n}-lock`,
                    horizontalClass: `${n}-horizontal`,
                    verticalClass: `${n}-vertical`,
                    paginationDisabledClass: `${n}-disabled`
                }
            }), t.pagination = {
                el: null,
                bullets: []
            };
            let o = 0;
            const l = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function c() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }

            function d(e, i) {
                const {
                    bulletActiveClass: s
                } = t.params.pagination;
                e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${i}`), (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${i}-${i}`))
            }

            function u(e) {
                const i = e.target.closest(Zr(t.params.pagination.bulletClass));
                if (!i) return;
                e.preventDefault();
                const s = gr(i) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === s) return;
                    const e = t.realIndex,
                        i = t.getSlideIndexByData(s),
                        r = t.getSlideIndexByData(t.realIndex);
                    if (i > t.slides.length - t.loopedSlides) {
                        const s = t.activeIndex;
                        t.loopFix({
                            direction: i > r ? "next" : "prev",
                            activeSlideIndex: i,
                            slideTo: !1
                        }), s === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
                    }
                    t.slideToLoop(s)
                } else t.slideTo(s)
            }

            function p() {
                const e = t.rtl,
                    i = t.params.pagination;
                if (c()) return;
                let s, n, u = t.pagination.el;
                u = l(u);
                const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    h = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (n = t.previousRealIndex || 0, s = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (s = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, s = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const r = t.pagination.bullets;
                    let l, c, p;
                    if (i.dynamicBullets && (a = br(r[0], t.isHorizontal() ? "width" : "height", !0), u.forEach((e => {
                            e.style[t.isHorizontal() ? "width" : "height"] = a * (i.dynamicMainBullets + 4) + "px"
                        })), i.dynamicMainBullets > 1 && void 0 !== n && (o += s - (n || 0), o > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(s - o, 0), c = l + (Math.min(r.length, i.dynamicMainBullets) - 1), p = (c + l) / 2), r.forEach((e => {
                            const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                            e.classList.remove(...t)
                        })), u.length > 1) r.forEach((e => {
                        const r = gr(e);
                        r === s ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), i.dynamicBullets && (r >= l && r <= c && e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), r === l && d(e, "prev"), r === c && d(e, "next"))
                    }));
                    else {
                        const e = r[s];
                        if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
                                e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                            })), i.dynamicBullets) {
                            const e = r[l],
                                t = r[c];
                            for (let e = l; e <= c; e += 1) r[e] && r[e].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next")
                        }
                    }
                    if (i.dynamicBullets) {
                        const s = Math.min(r.length, i.dynamicMainBullets + 4),
                            n = (a * s - a) / 2 - p * a,
                            o = e ? "right" : "left";
                        r.forEach((e => {
                            e.style[t.isHorizontal() ? o : "top"] = `${n}px`
                        }))
                    }
                }
                u.forEach(((e, n) => {
                    if ("fraction" === i.type && (e.querySelectorAll(Zr(i.currentClass)).forEach((e => {
                            e.textContent = i.formatFractionCurrent(s + 1)
                        })), e.querySelectorAll(Zr(i.totalClass)).forEach((e => {
                            e.textContent = i.formatFractionTotal(h)
                        }))), "progressbar" === i.type) {
                        let r;
                        r = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const n = (s + 1) / h;
                        let a = 1,
                            o = 1;
                        "horizontal" === r ? a = n : o = n, e.querySelectorAll(Zr(i.progressbarFillClass)).forEach((e => {
                            e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                        }))
                    }
                    "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(t, s + 1, h), 0 === n && r("paginationRender", e)) : (0 === n && r("paginationRender", e), r("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass)
                }))
            }

            function h() {
                const e = t.params.pagination;
                if (c()) return;
                const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
                let s = t.pagination.el;
                s = l(s);
                let n = "";
                if ("bullets" === e.type) {
                    let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
                    for (let i = 0; i < s; i += 1) e.renderBullet ? n += e.renderBullet.call(t, i, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], s.forEach((i => {
                    "custom" !== e.type && (i.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll(Zr(e.bulletClass)))
                })), "custom" !== e.type && r("paginationRender", s[0])
            }

            function f() {
                t.params.pagination = Ur(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let i;
                "string" == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)), i || "string" != typeof e.el || (i = [...document.querySelectorAll(e.el)]), i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(i) && i.length > 1 && (i = [...t.el.querySelectorAll(e.el)], i.length > 1 && (i = i.filter((e => vr(e, ".swiper")[0] === t.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(t.pagination, {
                    el: i
                }), i = l(i), i.forEach((i => {
                    "bullets" === e.type && e.clickable && i.classList.add(...(e.clickableClass || "").split(" ")), i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), e.clickable && i.addEventListener("click", u), t.enabled || i.classList.add(e.lockClass)
                })))
            }

            function m() {
                const e = t.params.pagination;
                if (c()) return;
                let i = t.pagination.el;
                i && (i = l(i), i.forEach((i => {
                    i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (i.classList.remove(...(e.clickableClass || "").split(" ")), i.removeEventListener("click", u))
                }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }
            s("changeDirection", (() => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let {
                    el: i
                } = t.pagination;
                i = l(i), i.forEach((i => {
                    i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), s("init", (() => {
                !1 === t.params.pagination.enabled ? g() : (f(), h(), p())
            })), s("activeIndexChange", (() => {
                void 0 === t.snapIndex && p()
            })), s("snapIndexChange", (() => {
                p()
            })), s("snapGridLengthChange", (() => {
                h(), p()
            })), s("destroy", (() => {
                m()
            })), s("enable disable", (() => {
                let {
                    el: e
                } = t.pagination;
                e && (e = l(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            })), s("lock unlock", (() => {
                p()
            })), s("click", ((e, i) => {
                const s = i.target,
                    n = l(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                    const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                    r(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }));
            const g = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = l(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), m()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = l(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), f(), h(), p()
                },
                disable: g,
                render: h,
                update: p,
                init: f,
                destroy: m
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = tr();
            let a, o, l, c, d = !1,
                u = null,
                p = null;

            function h() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e,
                    rtlTranslate: i
                } = t, {
                    dragEl: s,
                    el: r
                } = e, n = t.params.scrollbar, a = t.params.loop ? t.progressLoop : t.progress;
                let c = o,
                    d = (l - o) * a;
                i ? (d = -d, d > 0 ? (c = o - d, d = 0) : -d + o > l && (c = l + d)) : d < 0 ? (c = o + d, d = 0) : d + o > l && (c = l - d), t.isHorizontal() ? (s.style.transform = `translate3d(${d}px, 0, 0)`, s.style.width = `${c}px`) : (s.style.transform = `translate3d(0px, ${d}px, 0)`, s.style.height = `${c}px`), n.hide && (clearTimeout(u), r.style.opacity = 1, u = setTimeout((() => {
                    r.style.opacity = 0, r.style.transitionDuration = "400ms"
                }), 1e3))
            }

            function f() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e
                } = t, {
                    dragEl: i,
                    el: s
                } = e;
                i.style.width = "", i.style.height = "", l = t.isHorizontal() ? s.offsetWidth : s.offsetHeight, c = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? l * c : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i.style.width = `${o}px` : i.style.height = `${o}px`, s.style.display = c >= 1 ? "none" : "", t.params.scrollbar.hide && (s.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
            }

            function m(e) {
                return t.isHorizontal() ? e.clientX : e.clientY
            }

            function g(e) {
                const {
                    scrollbar: i,
                    rtlTranslate: s
                } = t, {
                    el: r
                } = i;
                let n;
                n = (m(e) - fr(r)[t.isHorizontal() ? "left" : "top"] - (null !== a ? a : o / 2)) / (l - o), n = Math.max(Math.min(n, 1), 0), s && (n = 1 - n);
                const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
                t.updateProgress(c), t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function v(e) {
                const i = t.params.scrollbar,
                    {
                        scrollbar: s,
                        wrapperEl: n
                    } = t,
                    {
                        el: o,
                        dragEl: l
                    } = s;
                d = !0, a = e.target === l ? m(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", g(e), clearTimeout(p), o.style.transitionDuration = "0ms", i.hide && (o.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e)
            }

            function y(e) {
                const {
                    scrollbar: i,
                    wrapperEl: s
                } = t, {
                    el: n,
                    dragEl: a
                } = i;
                d && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), s.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", a.style.transitionDuration = "0ms", r("scrollbarDragMove", e))
            }

            function b(e) {
                const i = t.params.scrollbar,
                    {
                        scrollbar: s,
                        wrapperEl: n
                    } = t,
                    {
                        el: a
                    } = s;
                d && (d = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", n.style.transitionDuration = ""), i.hide && (clearTimeout(p), p = rr((() => {
                    a.style.opacity = 0, a.style.transitionDuration = "400ms"
                }), 1e3)), r("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            }

            function w(e) {
                const {
                    scrollbar: i,
                    params: s
                } = t, r = i.el;
                if (!r) return;
                const a = r,
                    o = !!s.passiveListeners && {
                        passive: !1,
                        capture: !1
                    },
                    l = !!s.passiveListeners && {
                        passive: !0,
                        capture: !1
                    };
                if (!a) return;
                const c = "on" === e ? "addEventListener" : "removeEventListener";
                a[c]("pointerdown", v, o), n[c]("pointermove", y, o), n[c]("pointerup", b, l)
            }

            function x() {
                const {
                    scrollbar: e,
                    el: i
                } = t;
                t.params.scrollbar = Ur(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const s = t.params.scrollbar;
                if (!s.el) return;
                let r, a;
                "string" == typeof s.el && t.isElement && (r = t.el.querySelector(s.el)), r || "string" != typeof s.el ? r || (r = s.el) : r = n.querySelectorAll(s.el), t.params.uniqueNavElements && "string" == typeof s.el && r.length > 1 && 1 === i.querySelectorAll(s.el).length && (r = i.querySelector(s.el)), r.length > 0 && (r = r[0]), r.classList.add(t.isHorizontal() ? s.horizontalClass : s.verticalClass), r && (a = r.querySelector(`.${t.params.scrollbar.dragClass}`), a || (a = hr("div", t.params.scrollbar.dragClass), r.append(a))), Object.assign(e, {
                    el: r,
                    dragEl: a
                }), s.draggable && t.params.scrollbar.el && t.scrollbar.el && w("on"), r && r.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
            }

            function _() {
                const e = t.params.scrollbar,
                    i = t.scrollbar.el;
                i && i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && w("off")
            }
            i({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {
                el: null,
                dragEl: null
            }, s("init", (() => {
                !1 === t.params.scrollbar.enabled ? T() : (x(), f(), h())
            })), s("update resize observerUpdate lock unlock", (() => {
                f()
            })), s("setTranslate", (() => {
                h()
            })), s("setTransition", ((e, i) => {
                ! function(e) {
                    t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
                }(i)
            })), s("enable disable", (() => {
                const {
                    el: e
                } = t.scrollbar;
                e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
            })), s("destroy", (() => {
                _()
            }));
            const T = () => {
                t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), _()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), x(), f(), h()
                },
                disable: T,
                updateSize: f,
                setTranslate: h,
                init: x,
                destroy: _
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                parallax: {
                    enabled: !1
                }
            });
            const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                n = (e, i) => {
                    const {
                        rtl: s
                    } = t, r = s ? -1 : 1, n = e.getAttribute("data-swiper-parallax") || "0";
                    let a = e.getAttribute("data-swiper-parallax-x"),
                        o = e.getAttribute("data-swiper-parallax-y");
                    const l = e.getAttribute("data-swiper-parallax-scale"),
                        c = e.getAttribute("data-swiper-parallax-opacity"),
                        d = e.getAttribute("data-swiper-parallax-rotate");
                    if (a || o ? (a = a || "0", o = o || "0") : t.isHorizontal() ? (a = n, o = "0") : (o = n, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i * r + "%" : a * i * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px", null != c) {
                        const t = c - (c - 1) * (1 - Math.abs(i));
                        e.style.opacity = t
                    }
                    let u = `translate3d(${a}, ${o}, 0px)`;
                    null != l && (u += ` scale(${l-(l-1)*(1-Math.abs(i))})`), d && null != d && (u += ` rotate(${d*i*-1}deg)`), e.style.transform = u
                },
                a = () => {
                    const {
                        el: e,
                        slides: i,
                        progress: s,
                        snapGrid: a,
                        isElement: o
                    } = t, l = pr(e, r);
                    t.isElement && l.push(...pr(t.hostEl, r)), l.forEach((e => {
                        n(e, s)
                    })), i.forEach(((e, i) => {
                        let o = e.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(i / 2) - s * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), e.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((e => {
                            n(e, o)
                        }))
                    }))
                };
            s("beforeInit", (() => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            })), s("init", (() => {
                t.params.parallax.enabled && a()
            })), s("setTranslate", (() => {
                t.params.parallax.enabled && a()
            })), s("setTransition", ((e, i) => {
                t.params.parallax.enabled && function(e) {
                    void 0 === e && (e = t.params.speed);
                    const {
                        el: i,
                        hostEl: s
                    } = t, n = [...i.querySelectorAll(r)];
                    t.isElement && n.push(...s.querySelectorAll(r)), n.forEach((t => {
                        let i = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), t.style.transitionDuration = `${i}ms`
                    }))
                }(i)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e;
            const n = sr();
            i({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {
                enabled: !1
            };
            let a, o, l = 1,
                c = !1;
            const d = [],
                u = {
                    originX: 0,
                    originY: 0,
                    slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    imageEl: void 0,
                    imageWrapEl: void 0,
                    maxRatio: 3
                },
                p = {
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
                    touchesCurrent: {}
                },
                h = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                };
            let f = 1;

            function m() {
                if (d.length < 2) return 1;
                const e = d[0].pageX,
                    t = d[0].pageY,
                    i = d[1].pageX,
                    s = d[1].pageY;
                return Math.sqrt((i - e) ** 2 + (s - t) ** 2)
            }

            function g(e) {
                const i = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
                return !!e.target.matches(i) || t.slides.filter((t => t.contains(e.target))).length > 0
            }

            function v(e) {
                if ("mouse" === e.pointerType && d.splice(0, d.length), !g(e)) return;
                const i = t.params.zoom;
                if (a = !1, o = !1, d.push(e), !(d.length < 2)) {
                    if (a = !0, u.scaleStart = m(), !u.slideEl) {
                        u.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), u.slideEl || (u.slideEl = t.slides[t.activeIndex]);
                        let s = u.slideEl.querySelector(`.${i.containerClass}`);
                        if (s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = s, u.imageWrapEl = s ? vr(u.imageEl, `.${i.containerClass}`)[0] : void 0, !u.imageWrapEl) return void(u.imageEl = void 0);
                        u.maxRatio = u.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio
                    }
                    if (u.imageEl) {
                        const [e, t] = function() {
                            if (d.length < 2) return {
                                x: null,
                                y: null
                            };
                            const e = u.imageEl.getBoundingClientRect();
                            return [(d[0].pageX + (d[1].pageX - d[0].pageX) / 2 - e.x) / l, (d[0].pageY + (d[1].pageY - d[0].pageY) / 2 - e.y) / l]
                        }();
                        u.originX = e, u.originY = t, u.imageEl.style.transitionDuration = "0ms"
                    }
                    c = !0
                }
            }

            function y(e) {
                if (!g(e)) return;
                const i = t.params.zoom,
                    s = t.zoom,
                    r = d.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && (d[r] = e), d.length < 2 || (o = !0, u.scaleMove = m(), u.imageEl && (s.scale = u.scaleMove / u.scaleStart * l, s.scale > u.maxRatio && (s.scale = u.maxRatio - 1 + (s.scale - u.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), u.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`))
            }

            function b(e) {
                if (!g(e)) return;
                if ("mouse" === e.pointerType && "pointerout" === e.type) return;
                const i = t.params.zoom,
                    s = t.zoom,
                    r = d.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && d.splice(r, 1), a && o && (a = !1, o = !1, u.imageEl && (s.scale = Math.max(Math.min(s.scale, u.maxRatio), i.minRatio), u.imageEl.style.transitionDuration = `${t.params.speed}ms`, u.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`, l = s.scale, c = !1, s.scale > 1 && u.slideEl ? u.slideEl.classList.add(`${i.zoomedSlideClass}`) : s.scale <= 1 && u.slideEl && u.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === s.scale && (u.originX = 0, u.originY = 0, u.slideEl = void 0)))
            }

            function w(e) {
                if (!g(e) || ! function(e) {
                        const i = `.${t.params.zoom.containerClass}`;
                        return !!e.target.matches(i) || [...t.hostEl.querySelectorAll(i)].filter((t => t.contains(e.target))).length > 0
                    }(e)) return;
                const i = t.zoom;
                if (!u.imageEl) return;
                if (!p.isTouched || !u.slideEl) return;
                p.isMoved || (p.width = u.imageEl.offsetWidth, p.height = u.imageEl.offsetHeight, p.startX = ar(u.imageWrapEl, "x") || 0, p.startY = ar(u.imageWrapEl, "y") || 0, u.slideWidth = u.slideEl.offsetWidth, u.slideHeight = u.slideEl.offsetHeight, u.imageWrapEl.style.transitionDuration = "0ms");
                const s = p.width * i.scale,
                    r = p.height * i.scale;
                if (s < u.slideWidth && r < u.slideHeight) return;
                if (p.minX = Math.min(u.slideWidth / 2 - s / 2, 0), p.maxX = -p.minX, p.minY = Math.min(u.slideHeight / 2 - r / 2, 0), p.maxY = -p.minY, p.touchesCurrent.x = d.length > 0 ? d[0].pageX : e.pageX, p.touchesCurrent.y = d.length > 0 ? d[0].pageY : e.pageY, Math.max(Math.abs(p.touchesCurrent.x - p.touchesStart.x), Math.abs(p.touchesCurrent.y - p.touchesStart.y)) > 5 && (t.allowClick = !1), !p.isMoved && !c) {
                    if (t.isHorizontal() && (Math.floor(p.minX) === Math.floor(p.startX) && p.touchesCurrent.x < p.touchesStart.x || Math.floor(p.maxX) === Math.floor(p.startX) && p.touchesCurrent.x > p.touchesStart.x)) return void(p.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(p.minY) === Math.floor(p.startY) && p.touchesCurrent.y < p.touchesStart.y || Math.floor(p.maxY) === Math.floor(p.startY) && p.touchesCurrent.y > p.touchesStart.y)) return void(p.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), p.isMoved = !0;
                const n = (i.scale - l) / (u.maxRatio - t.params.zoom.minRatio),
                    {
                        originX: a,
                        originY: o
                    } = u;
                p.currentX = p.touchesCurrent.x - p.touchesStart.x + p.startX + n * (p.width - 2 * a), p.currentY = p.touchesCurrent.y - p.touchesStart.y + p.startY + n * (p.height - 2 * o), p.currentX < p.minX && (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** .8), p.currentX > p.maxX && (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** .8), p.currentY < p.minY && (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** .8), p.currentY > p.maxY && (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** .8), h.prevPositionX || (h.prevPositionX = p.touchesCurrent.x), h.prevPositionY || (h.prevPositionY = p.touchesCurrent.y), h.prevTime || (h.prevTime = Date.now()), h.x = (p.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2, h.y = (p.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2, Math.abs(p.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0), Math.abs(p.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0), h.prevPositionX = p.touchesCurrent.x, h.prevPositionY = p.touchesCurrent.y, h.prevTime = Date.now(), u.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`
            }

            function x() {
                const e = t.zoom;
                u.slideEl && t.activeIndex !== t.slides.indexOf(u.slideEl) && (u.imageEl && (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"), u.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, l = 1, u.slideEl = void 0, u.imageEl = void 0, u.imageWrapEl = void 0, u.originX = 0, u.originY = 0)
            }

            function _(e) {
                const i = t.zoom,
                    s = t.params.zoom;
                if (!u.slideEl) {
                    e && e.target && (u.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), u.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? u.slideEl = pr(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : u.slideEl = t.slides[t.activeIndex]);
                    let i = u.slideEl.querySelector(`.${s.containerClass}`);
                    i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = i, u.imageWrapEl = i ? vr(u.imageEl, `.${s.containerClass}`)[0] : void 0
                }
                if (!u.imageEl || !u.imageWrapEl) return;
                let r, a, o, c, d, h, f, m, g, v, y, b, w, x, _, T, S, E;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), u.slideEl.classList.add(`${s.zoomedSlideClass}`), void 0 === p.touchesStart.x && e ? (r = e.pageX, a = e.pageY) : (r = p.touchesStart.x, a = p.touchesStart.y);
                const M = "number" == typeof e ? e : null;
                1 === l && M && (r = void 0, a = void 0), i.scale = M || u.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio, l = M || u.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio, !e || 1 === l && M ? (f = 0, m = 0) : (S = u.slideEl.offsetWidth, E = u.slideEl.offsetHeight, o = fr(u.slideEl).left + n.scrollX, c = fr(u.slideEl).top + n.scrollY, d = o + S / 2 - r, h = c + E / 2 - a, g = u.imageEl.offsetWidth, v = u.imageEl.offsetHeight, y = g * i.scale, b = v * i.scale, w = Math.min(S / 2 - y / 2, 0), x = Math.min(E / 2 - b / 2, 0), _ = -w, T = -x, f = d * i.scale, m = h * i.scale, f < w && (f = w), f > _ && (f = _), m < x && (m = x), m > T && (m = T)), M && 1 === i.scale && (u.originX = 0, u.originY = 0), u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = `translate3d(${f}px, ${m}px,0)`, u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`
            }

            function T() {
                const e = t.zoom,
                    i = t.params.zoom;
                if (!u.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual ? u.slideEl = pr(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : u.slideEl = t.slides[t.activeIndex];
                    let e = u.slideEl.querySelector(`.${i.containerClass}`);
                    e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = e, u.imageWrapEl = e ? vr(u.imageEl, `.${i.containerClass}`)[0] : void 0
                }
                u.imageEl && u.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, l = 1, u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = "translate3d(0,0,0)", u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = "translate3d(0,0,0) scale(1)", u.slideEl.classList.remove(`${i.zoomedSlideClass}`), u.slideEl = void 0, u.originX = 0, u.originY = 0)
            }

            function S(e) {
                const i = t.zoom;
                i.scale && 1 !== i.scale ? T() : _(e)
            }

            function E() {
                return {
                    passiveListener: !!t.params.passiveListeners && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.params.passiveListeners || {
                        passive: !1,
                        capture: !0
                    }
                }
            }

            function M() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const {
                    passiveListener: i,
                    activeListenerWithCapture: s
                } = E();
                t.wrapperEl.addEventListener("pointerdown", v, i), t.wrapperEl.addEventListener("pointermove", y, s), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.addEventListener(e, b, i)
                })), t.wrapperEl.addEventListener("pointermove", w, s)
            }

            function C() {
                const e = t.zoom;
                if (!e.enabled) return;
                e.enabled = !1;
                const {
                    passiveListener: i,
                    activeListenerWithCapture: s
                } = E();
                t.wrapperEl.removeEventListener("pointerdown", v, i), t.wrapperEl.removeEventListener("pointermove", y, s), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.removeEventListener(e, b, i)
                })), t.wrapperEl.removeEventListener("pointermove", w, s)
            }
            Object.defineProperty(t.zoom, "scale", {
                get() {
                    return f
                },
                set(e) {
                    if (f !== e) {
                        const t = u.imageEl,
                            i = u.slideEl;
                        r("zoomChange", e, t, i)
                    }
                    f = e
                }
            }), s("init", (() => {
                t.params.zoom.enabled && M()
            })), s("destroy", (() => {
                C()
            })), s("touchStart", ((e, i) => {
                t.zoom.enabled && function(e) {
                    const i = t.device;
                    if (!u.imageEl) return;
                    if (p.isTouched) return;
                    i.android && e.cancelable && e.preventDefault(), p.isTouched = !0;
                    const s = d.length > 0 ? d[0] : e;
                    p.touchesStart.x = s.pageX, p.touchesStart.y = s.pageY
                }(i)
            })), s("touchEnd", ((e, i) => {
                t.zoom.enabled && function() {
                    const e = t.zoom;
                    if (!u.imageEl) return;
                    if (!p.isTouched || !p.isMoved) return p.isTouched = !1, void(p.isMoved = !1);
                    p.isTouched = !1, p.isMoved = !1;
                    let i = 300,
                        s = 300;
                    const r = h.x * i,
                        n = p.currentX + r,
                        a = h.y * s,
                        o = p.currentY + a;
                    0 !== h.x && (i = Math.abs((n - p.currentX) / h.x)), 0 !== h.y && (s = Math.abs((o - p.currentY) / h.y));
                    const l = Math.max(i, s);
                    p.currentX = n, p.currentY = o;
                    const c = p.width * e.scale,
                        d = p.height * e.scale;
                    p.minX = Math.min(u.slideWidth / 2 - c / 2, 0), p.maxX = -p.minX, p.minY = Math.min(u.slideHeight / 2 - d / 2, 0), p.maxY = -p.minY, p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX), p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY), u.imageWrapEl.style.transitionDuration = `${l}ms`, u.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`
                }()
            })), s("doubleTap", ((e, i) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(i)
            })), s("transitionEnd", (() => {
                t.zoom.enabled && t.params.zoom.enabled && x()
            })), s("slideChange", (() => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x()
            })), Object.assign(t.zoom, {
                enable: M,
                disable: C,
                in: _,
                out: T,
                toggle: S
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;

            function r(e, t) {
                const i = function() {
                    let e, t, i;
                    return (s, r) => {
                        for (t = -1, e = s.length; e - t > 1;) i = e + t >> 1, s[i] <= r ? t = i : e = i;
                        return e
                    }
                }();
                let s, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = i(this.x, e), s = r - 1, (e - this.x[s]) * (this.y[r] - this.y[s]) / (this.x[r] - this.x[s]) + this.y[s]) : 0
                }, this
            }

            function n() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }
            i({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {
                control: void 0
            }, s("beforeInit", (() => {
                if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                    const e = document.querySelector(t.params.controller.control);
                    if (e && e.swiper) t.controller.control = e.swiper;
                    else if (e) {
                        const i = s => {
                            t.controller.control = s.detail[0], t.update(), e.removeEventListener("init", i)
                        };
                        e.addEventListener("init", i)
                    }
                } else t.controller.control = t.params.controller.control
            })), s("update", (() => {
                n()
            })), s("resize", (() => {
                n()
            })), s("observerUpdate", (() => {
                n()
            })), s("setTranslate", ((e, i, s) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(i, s)
            })), s("setTransition", ((e, i, s) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(i, s)
            })), Object.assign(t.controller, {
                setTranslate: function(e, i) {
                    const s = t.controller.control;
                    let n, a;
                    const o = t.constructor;

                    function l(e) {
                        if (e.destroyed) return;
                        const i = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (function(e) {
                            t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid)
                        }(e), a = -t.controller.spline.interpolate(-i)), a && "container" !== t.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(n) && Number.isFinite(n) || (n = 1), a = (i - t.minTranslate()) * n + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(s))
                        for (let e = 0; e < s.length; e += 1) s[e] !== i && s[e] instanceof o && l(s[e]);
                    else s instanceof o && i !== s && l(s)
                },
                setTransition: function(e, i) {
                    const s = t.constructor,
                        r = t.controller.control;
                    let n;

                    function a(i) {
                        i.destroyed || (i.setTransition(e, t), 0 !== e && (i.transitionStart(), i.params.autoHeight && rr((() => {
                            i.updateAutoHeight()
                        })), yr(i.wrapperEl, (() => {
                            r && i.transitionEnd()
                        }))))
                    }
                    if (Array.isArray(r))
                        for (n = 0; n < r.length; n += 1) r[n] !== i && r[n] instanceof s && a(r[n]);
                    else r instanceof s && i !== r && a(r)
                }
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }), t.a11y = {
                clicked: !1
            };
            let r = null;

            function n(e) {
                const t = r;
                0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
            }
            const a = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function o(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("tabIndex", "0")
                }))
            }

            function l(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("tabIndex", "-1")
                }))
            }

            function c(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("role", t)
                }))
            }

            function d(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-roledescription", t)
                }))
            }

            function u(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-label", t)
                }))
            }

            function p(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !0)
                }))
            }

            function h(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !1)
                }))
            }

            function f(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const i = t.params.a11y,
                    s = e.target;
                t.pagination && t.pagination.el && (s === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(Zr(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && s === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? n(i.lastSlideMessage) : n(i.nextSlideMessage)), t.navigation && t.navigation.prevEl && s === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? n(i.firstSlideMessage) : n(i.prevSlideMessage)), t.pagination && s.matches(Zr(t.params.pagination.bulletClass)) && s.click())
            }

            function m() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function g() {
                return m() && t.params.pagination.clickable
            }
            const v = (e, t, i) => {
                    o(e), "BUTTON" !== e.tagName && (c(e, "button"), e.addEventListener("keydown", f)), u(e, i),
                        function(e, t) {
                            (e = a(e)).forEach((e => {
                                e.setAttribute("aria-controls", t)
                            }))
                        }(e, t)
                },
                y = () => {
                    t.a11y.clicked = !0
                },
                b = () => {
                    requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            t.destroyed || (t.a11y.clicked = !1)
                        }))
                    }))
                },
                w = e => {
                    if (t.a11y.clicked) return;
                    const i = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                    if (!i || !t.slides.includes(i)) return;
                    const s = t.slides.indexOf(i) === t.activeIndex,
                        r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
                    s || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(i), 0))
                },
                x = () => {
                    const e = t.params.a11y;
                    e.itemRoleDescriptionMessage && d(t.slides, e.itemRoleDescriptionMessage), e.slideRole && c(t.slides, e.slideRole);
                    const i = t.slides.length;
                    e.slideLabelMessage && t.slides.forEach(((s, r) => {
                        const n = t.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r;
                        u(s, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, i))
                    }))
                };
            s("beforeInit", (() => {
                r = hr("span", t.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true")
            })), s("afterInit", (() => {
                t.params.a11y.enabled && (() => {
                    const e = t.params.a11y;
                    t.el.append(r);
                    const i = t.el;
                    e.containerRoleDescriptionMessage && d(i, e.containerRoleDescriptionMessage), e.containerMessage && u(i, e.containerMessage);
                    const s = t.wrapperEl,
                        n = e.id || s.getAttribute("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                    var o;
                    const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var c;
                    c = n, a(s).forEach((e => {
                            e.setAttribute("id", c)
                        })),
                        function(e, t) {
                            (e = a(e)).forEach((e => {
                                e.setAttribute("aria-live", t)
                            }))
                        }(s, l), x();
                    let {
                        nextEl: p,
                        prevEl: h
                    } = t.navigation ? t.navigation : {};
                    p = a(p), h = a(h), p && p.forEach((t => v(t, n, e.nextSlideMessage))), h && h.forEach((t => v(t, n, e.prevSlideMessage))), g() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                        e.addEventListener("keydown", f)
                    })), t.el.addEventListener("focus", w, !0), t.el.addEventListener("pointerdown", y, !0), t.el.addEventListener("pointerup", b, !0)
                })()
            })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && x()
            })), s("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    i && (t.isBeginning ? (p(i), l(i)) : (h(i), o(i))), e && (t.isEnd ? (p(e), l(e)) : (h(e), o(e)))
                }()
            })), s("paginationUpdate", (() => {
                t.params.a11y.enabled && function() {
                    const e = t.params.a11y;
                    m() && t.pagination.bullets.forEach((i => {
                        t.params.pagination.clickable && (o(i), t.params.pagination.renderBullet || (c(i, "button"), u(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, gr(i) + 1)))), i.matches(Zr(t.params.pagination.bulletActiveClass)) ? i.setAttribute("aria-current", "true") : i.removeAttribute("aria-current")
                    }))
                }()
            })), s("destroy", (() => {
                t.params.a11y.enabled && function() {
                    r && r.remove();
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation ? t.navigation : {};
                    e = a(e), i = a(i), e && e.forEach((e => e.removeEventListener("keydown", f))), i && i.forEach((e => e.removeEventListener("keydown", f))), g() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                        e.removeEventListener("keydown", f)
                    })), t.el.removeEventListener("focus", w, !0), t.el.removeEventListener("pointerdown", y, !0), t.el.removeEventListener("pointerup", b, !0)
                }()
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let r = !1,
                n = {};
            const a = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                o = e => {
                    const t = sr();
                    let i;
                    i = e ? new URL(e) : t.location;
                    const s = i.pathname.slice(1).split("/").filter((e => "" !== e)),
                        r = s.length;
                    return {
                        key: s[r - 2],
                        value: s[r - 1]
                    }
                },
                l = (e, i) => {
                    const s = sr();
                    if (!r || !t.params.history.enabled) return;
                    let n;
                    n = t.params.url ? new URL(t.params.url) : s.location;
                    const o = t.slides[i];
                    let l = a(o.getAttribute("data-history"));
                    if (t.params.history.root.length > 0) {
                        let i = t.params.history.root;
                        "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), l = `${i}/${e?`${e}/`:""}${l}`
                    } else n.pathname.includes(e) || (l = `${e?`${e}/`:""}${l}`);
                    t.params.history.keepQuery && (l += n.search);
                    const c = s.history.state;
                    c && c.value === l || (t.params.history.replaceState ? s.history.replaceState({
                        value: l
                    }, null, l) : s.history.pushState({
                        value: l
                    }, null, l))
                },
                c = (e, i, s) => {
                    if (i)
                        for (let r = 0, n = t.slides.length; r < n; r += 1) {
                            const n = t.slides[r];
                            if (a(n.getAttribute("data-history")) === i) {
                                const i = t.getSlideIndex(n);
                                t.slideTo(i, e, s)
                            }
                        } else t.slideTo(0, e, s)
                },
                d = () => {
                    n = o(t.params.url), c(t.params.speed, n.value, !1)
                };
            s("init", (() => {
                t.params.history.enabled && (() => {
                    const e = sr();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                        r = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", d)) : t.params.history.replaceState || e.addEventListener("popstate", d)
                    }
                })()
            })), s("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = sr();
                    t.params.history.replaceState || e.removeEventListener("popstate", d)
                })()
            })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && l(t.params.history.key, t.activeIndex)
            })), s("slideChange", (() => {
                r && t.params.cssMode && l(t.params.history.key, t.activeIndex)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                emit: s,
                on: r
            } = e, n = !1;
            const a = tr(),
                o = sr();
            i({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1,
                    getSlideIndex(e, i) {
                        if (t.virtual && t.params.virtual.enabled) {
                            const e = t.slides.filter((e => e.getAttribute("data-hash") === i))[0];
                            return e ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : 0
                        }
                        return t.getSlideIndex(pr(t.slidesEl, `.${t.params.slideClass}[data-hash="${i}"], swiper-slide[data-hash="${i}"]`)[0])
                    }
                }
            });
            const l = () => {
                    s("hashChange");
                    const e = a.location.hash.replace("#", ""),
                        i = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                    if (e !== (i ? i.getAttribute("data-hash") : "")) {
                        const i = t.params.hashNavigation.getSlideIndex(t, e);
                        if (void 0 === i || Number.isNaN(i)) return;
                        t.slideTo(i)
                    }
                },
                c = () => {
                    if (!n || !t.params.hashNavigation.enabled) return;
                    const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                        i = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                    t.params.hashNavigation.replaceState && o.history && o.history.replaceState ? (o.history.replaceState(null, null, `#${i}` || ""), s("hashSet")) : (a.location.hash = i || "", s("hashSet"))
                };
            r("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    n = !0;
                    const e = a.location.hash.replace("#", "");
                    if (e) {
                        const i = 0,
                            s = t.params.hashNavigation.getSlideIndex(t, e);
                        t.slideTo(s || 0, i, t.params.runCallbacksOnInit, !0)
                    }
                    t.params.hashNavigation.watchState && o.addEventListener("hashchange", l)
                })()
            })), r("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && o.removeEventListener("hashchange", l)
            })), r("transitionEnd _freeModeNoMomentumRelease", (() => {
                n && c()
            })), r("slideChange", (() => {
                n && t.params.cssMode && c()
            }))
        }, function(e) {
            let t, i, {
                swiper: s,
                extendParams: r,
                on: n,
                emit: a,
                params: o
            } = e;
            s.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            }, r({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let l, c, d, u, p, h, f, m = o && o.autoplay ? o.autoplay.delay : 3e3,
                g = o && o.autoplay ? o.autoplay.delay : 3e3,
                v = (new Date).getTime;

            function y(e) {
                s && !s.destroyed && s.wrapperEl && e.target === s.wrapperEl && (s.wrapperEl.removeEventListener("transitionend", y), S())
            }
            const b = () => {
                    if (s.destroyed || !s.autoplay.running) return;
                    s.autoplay.paused ? c = !0 : c && (g = l, c = !1);
                    const e = s.autoplay.paused ? l : v + g - (new Date).getTime();
                    s.autoplay.timeLeft = e, a("autoplayTimeLeft", e, e / m), i = requestAnimationFrame((() => {
                        b()
                    }))
                },
                w = e => {
                    if (s.destroyed || !s.autoplay.running) return;
                    cancelAnimationFrame(i), b();
                    let r = void 0 === e ? s.params.autoplay.delay : e;
                    m = s.params.autoplay.delay, g = s.params.autoplay.delay;
                    const n = (() => {
                        let e;
                        if (e = s.virtual && s.params.virtual.enabled ? s.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : s.slides[s.activeIndex], e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                    })();
                    !Number.isNaN(n) && n > 0 && void 0 === e && (r = n, m = n, g = n), l = r;
                    const o = s.params.speed,
                        c = () => {
                            s && !s.destroyed && (s.params.autoplay.reverseDirection ? !s.isBeginning || s.params.loop || s.params.rewind ? (s.slidePrev(o, !0, !0), a("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(s.slides.length - 1, o, !0, !0), a("autoplay")) : !s.isEnd || s.params.loop || s.params.rewind ? (s.slideNext(o, !0, !0), a("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(0, o, !0, !0), a("autoplay")), s.params.cssMode && (v = (new Date).getTime(), requestAnimationFrame((() => {
                                w()
                            }))))
                        };
                    return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                        c()
                    }), r)) : requestAnimationFrame((() => {
                        c()
                    })), r
                },
                x = () => {
                    s.autoplay.running = !0, w(), a("autoplayStart")
                },
                _ = () => {
                    s.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), a("autoplayStop")
                },
                T = (e, i) => {
                    if (s.destroyed || !s.autoplay.running) return;
                    clearTimeout(t), e || (f = !0);
                    const r = () => {
                        a("autoplayPause"), s.params.autoplay.waitForTransition ? s.wrapperEl.addEventListener("transitionend", y) : S()
                    };
                    if (s.autoplay.paused = !0, i) return h && (l = s.params.autoplay.delay), h = !1, void r();
                    const n = l || s.params.autoplay.delay;
                    l = n - ((new Date).getTime() - v), s.isEnd && l < 0 && !s.params.loop || (l < 0 && (l = 0), r())
                },
                S = () => {
                    s.isEnd && l < 0 && !s.params.loop || s.destroyed || !s.autoplay.running || (v = (new Date).getTime(), f ? (f = !1, w(l)) : w(), s.autoplay.paused = !1, a("autoplayResume"))
                },
                E = () => {
                    if (s.destroyed || !s.autoplay.running) return;
                    const e = tr();
                    "hidden" === e.visibilityState && (f = !0, T(!0)), "visible" === e.visibilityState && S()
                },
                M = e => {
                    "mouse" === e.pointerType && (f = !0, s.animating || s.autoplay.paused || T(!0))
                },
                C = e => {
                    "mouse" === e.pointerType && s.autoplay.paused && S()
                };
            n("init", (() => {
                s.params.autoplay.enabled && (s.params.autoplay.pauseOnMouseEnter && (s.el.addEventListener("pointerenter", M), s.el.addEventListener("pointerleave", C)), tr().addEventListener("visibilitychange", E), v = (new Date).getTime(), x())
            })), n("destroy", (() => {
                s.el.removeEventListener("pointerenter", M), s.el.removeEventListener("pointerleave", C), tr().removeEventListener("visibilitychange", E), s.autoplay.running && _()
            })), n("beforeTransitionStart", ((e, t, i) => {
                !s.destroyed && s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? T(!0, !0) : _())
            })), n("sliderFirstMove", (() => {
                !s.destroyed && s.autoplay.running && (s.params.autoplay.disableOnInteraction ? _() : (d = !0, u = !1, f = !1, p = setTimeout((() => {
                    f = !0, u = !0, T(!0)
                }), 200)))
            })), n("touchEnd", (() => {
                if (!s.destroyed && s.autoplay.running && d) {
                    if (clearTimeout(p), clearTimeout(t), s.params.autoplay.disableOnInteraction) return u = !1, void(d = !1);
                    u && s.params.cssMode && S(), u = !1, d = !1
                }
            })), n("slideChange", (() => {
                !s.destroyed && s.autoplay.running && (h = !0)
            })), Object.assign(s.autoplay, {
                start: x,
                stop: _,
                pause: T,
                resume: S
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let r = !1,
                n = !1;

            function a() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const i = e.clickedIndex,
                    s = e.clickedSlide;
                if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == i) return;
                let r;
                r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
            }

            function o() {
                const {
                    thumbs: e
                } = t.params;
                if (r) return !1;
                r = !0;
                const i = t.constructor;
                if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update();
                else if (or(e.swiper)) {
                    const s = Object.assign({}, e.swiper);
                    Object.assign(s, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new i(s), n = !0
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", a), !0
            }

            function l(e) {
                const i = t.thumbs.swiper;
                if (!i || i.destroyed) return;
                const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                let r = 1;
                const n = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach((e => e.classList.remove(n))), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                    for (let e = 0; e < r; e += 1) pr(i.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
                        e.classList.add(n)
                    }));
                else
                    for (let e = 0; e < r; e += 1) i.slides[t.realIndex + e] && i.slides[t.realIndex + e].classList.add(n);
                const a = t.params.thumbs.autoScrollOffset,
                    o = a && !i.params.loop;
                if (t.realIndex !== i.realIndex || o) {
                    const r = i.activeIndex;
                    let n, l;
                    if (i.params.loop) {
                        const e = i.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                        n = i.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
                    o && (n += "next" === l ? a : -1 * a), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = n > r ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > r && i.params.slidesPerGroup, i.slideTo(n, e ? 0 : void 0))
                }
            }
            t.thumbs = {
                swiper: null
            }, s("beforeInit", (() => {
                const {
                    thumbs: e
                } = t.params;
                if (e && e.swiper)
                    if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                        const i = tr(),
                            s = () => {
                                const s = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                                if (s && s.swiper) e.swiper = s.swiper, o(), l(!0);
                                else if (s) {
                                    const i = r => {
                                        e.swiper = r.detail[0], s.removeEventListener("init", i), o(), l(!0), e.swiper.update(), t.update()
                                    };
                                    s.addEventListener("init", i)
                                }
                                return s
                            },
                            r = () => {
                                t.destroyed || s() || requestAnimationFrame(r)
                            };
                        requestAnimationFrame(r)
                    } else o(), l(!0)
            })), s("slideChange update resize observerUpdate", (() => {
                l()
            })), s("setTransition", ((e, i) => {
                const s = t.thumbs.swiper;
                s && !s.destroyed && s.setTransition(i)
            })), s("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && n && e.destroy()
            })), Object.assign(t.thumbs, {
                init: o,
                update: l
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                emit: s,
                once: r
            } = e;
            i({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function() {
                        if (t.params.cssMode) return;
                        const e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                            currentPos: t.rtl ? t.translate : -t.translate
                        })
                    },
                    onTouchMove: function() {
                        if (t.params.cssMode) return;
                        const {
                            touchEventsData: e,
                            touches: i
                        } = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: i[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: i[t.isHorizontal() ? "currentX" : "currentY"],
                            time: nr()
                        })
                    },
                    onTouchEnd: function(e) {
                        let {
                            currentPos: i
                        } = e;
                        if (t.params.cssMode) return;
                        const {
                            params: n,
                            wrapperEl: a,
                            rtlTranslate: o,
                            snapGrid: l,
                            touchEventsData: c
                        } = t, d = nr() - c.touchStartTime;
                        if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                        else if (i > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                        else {
                            if (n.freeMode.momentum) {
                                if (c.velocities.length > 1) {
                                    const e = c.velocities.pop(),
                                        i = c.velocities.pop(),
                                        s = e.position - i.position,
                                        r = e.time - i.time;
                                    t.velocity = s / r, t.velocity /= 2, Math.abs(t.velocity) < n.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || nr() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                let e = 1e3 * n.freeMode.momentumRatio;
                                const i = t.velocity * e;
                                let d = t.translate + i;
                                o && (d = -d);
                                let u, p = !1;
                                const h = 20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
                                let f;
                                if (d < t.maxTranslate()) n.freeMode.momentumBounce ? (d + t.maxTranslate() < -h && (d = t.maxTranslate() - h), u = t.maxTranslate(), p = !0, c.allowMomentumBounce = !0) : d = t.maxTranslate(), n.loop && n.centeredSlides && (f = !0);
                                else if (d > t.minTranslate()) n.freeMode.momentumBounce ? (d - t.minTranslate() > h && (d = t.minTranslate() + h), u = t.minTranslate(), p = !0, c.allowMomentumBounce = !0) : d = t.minTranslate(), n.loop && n.centeredSlides && (f = !0);
                                else if (n.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1)
                                        if (l[t] > -d) {
                                            e = t;
                                            break
                                        }
                                    d = Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) || "next" === t.swipeDirection ? l[e] : l[e - 1], d = -d
                                }
                                if (f && r("transitionEnd", (() => {
                                        t.loopFix()
                                    })), 0 !== t.velocity) {
                                    if (e = o ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), n.freeMode.sticky) {
                                        const i = Math.abs((o ? -d : d) - t.translate),
                                            s = t.slidesSizesGrid[t.activeIndex];
                                        e = i < s ? n.speed : i < 2 * s ? 1.5 * n.speed : 2.5 * n.speed
                                    }
                                } else if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode.momentumBounce && p ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, yr(a, (() => {
                                    t && !t.destroyed && c.allowMomentumBounce && (s("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                        t.setTranslate(u), yr(a, (() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : t.velocity ? (s("_freeModeNoMomentumRelease"), t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, yr(a, (() => {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode && s("_freeModeNoMomentumRelease")
                            }(!n.freeMode.momentum || d >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function(e) {
            let t, i, s, {
                swiper: r,
                extendParams: n
            } = e;
            n({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            });
            const a = () => {
                let e = r.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
            };
            r.grid = {
                initSlides: e => {
                    const {
                        slidesPerView: n
                    } = r.params, {
                        rows: a,
                        fill: o
                    } = r.params.grid;
                    s = Math.floor(e / a), t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a, "auto" !== n && "row" === o && (t = Math.max(t, n * a)), i = t / a
                },
                updateSlide: (e, n, o, l) => {
                    const {
                        slidesPerGroup: c
                    } = r.params, d = a(), {
                        rows: u,
                        fill: p
                    } = r.params.grid;
                    let h, f, m;
                    if ("row" === p && c > 1) {
                        const i = Math.floor(e / (c * u)),
                            s = e - u * c * i,
                            r = 0 === i ? c : Math.min(Math.ceil((o - i * u * c) / u), c);
                        m = Math.floor(s / r), f = s - m * r + i * c, h = f + m * t / u, n.style.order = h
                    } else "column" === p ? (f = Math.floor(e / u), m = e - f * u, (f > s || f === s && m === u - 1) && (m += 1, m >= u && (m = 0, f += 1))) : (m = Math.floor(e / i), f = e - m * i);
                    n.row = m, n.column = f, n.style[l("margin-top")] = 0 !== m ? d && `${d}px` : ""
                },
                updateWrapperSize: (e, i, s) => {
                    const {
                        centeredSlides: n,
                        roundLengths: o
                    } = r.params, l = a(), {
                        rows: c
                    } = r.params.grid;
                    if (r.virtualSize = (e + l) * t, r.virtualSize = Math.ceil(r.virtualSize / c) - l, r.wrapperEl.style[s("width")] = `${r.virtualSize+l}px`, n) {
                        const e = [];
                        for (let t = 0; t < i.length; t += 1) {
                            let s = i[t];
                            o && (s = Math.floor(s)), i[t] < r.virtualSize + i[0] && e.push(s)
                        }
                        i.splice(0, i.length), i.push(...e)
                    }
                }
            }
        }, function(e) {
            let {
                swiper: t
            } = e;
            Object.assign(t, {
                appendSlide: Kr.bind(t),
                prependSlide: Qr.bind(t),
                addSlide: Jr.bind(t),
                removeSlide: en.bind(t),
                removeAllSlides: tn.bind(t)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                fadeEffect: {
                    crossFade: !1
                }
            }), sn({
                effect: "fade",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e
                    } = t;
                    t.params.fadeEffect;
                    for (let i = 0; i < e.length; i += 1) {
                        const e = t.slides[i];
                        let s = -e.swiperSlideOffset;
                        t.params.virtualTranslate || (s -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = s, s = 0);
                        const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                            a = rn(0, e);
                        a.style.opacity = n, a.style.transform = `translate3d(${s}px, ${r}px, 0px)`
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => ur(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    })), nn({
                        swiper: t,
                        duration: e,
                        transformElements: i,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            const r = (e, t, i) => {
                let s = i ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = i ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                s || (s = hr("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "left" : "top")).split(" ")), e.append(s)), r || (r = hr("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "right" : "bottom")).split(" ")), e.append(r)), s && (s.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0))
            };
            sn({
                effect: "cube",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        el: e,
                        wrapperEl: i,
                        slides: s,
                        width: n,
                        height: a,
                        rtlTranslate: o,
                        size: l,
                        browser: c
                    } = t, d = t.params.cubeEffect, u = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled;
                    let h, f = 0;
                    d.shadow && (u ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = hr("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${n}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = hr("div", "swiper-cube-shadow"), e.append(h))));
                    for (let e = 0; e < s.length; e += 1) {
                        const t = s[e];
                        let i = e;
                        p && (i = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                        let n = 90 * i,
                            a = Math.floor(n / 360);
                        o && (n = -n, a = Math.floor(-n / 360));
                        const c = Math.max(Math.min(t.progress, 1), -1);
                        let h = 0,
                            m = 0,
                            g = 0;
                        i % 4 == 0 ? (h = 4 * -a * l, g = 0) : (i - 1) % 4 == 0 ? (h = 0, g = 4 * -a * l) : (i - 2) % 4 == 0 ? (h = l + 4 * a * l, g = l) : (i - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * a), o && (h = -h), u || (m = h, h = 0);
                        const v = `rotateX(${u?0:-n}deg) rotateY(${u?n:0}deg) translate3d(${h}px, ${m}px, ${g}px)`;
                        c <= 1 && c > -1 && (f = 90 * i + 90 * c, o && (f = 90 * -i - 90 * c)), t.style.transform = v, d.slideShadows && r(t, c, u)
                    }
                    if (i.style.transformOrigin = `50% 50% -${l/2}px`, i.style["-webkit-transform-origin"] = `50% 50% -${l/2}px`, d.shadow)
                        if (u) h.style.transform = `translate3d(0px, ${n/2+d.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`;
                        else {
                            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                i = d.shadowScale,
                                s = d.shadowScale / t,
                                r = d.shadowOffset;
                            h.style.transform = `scale3d(${i}, 1, ${s}) translate3d(0px, ${a/2+r}px, ${-a/2/s}px) rotateX(-90deg)`
                        }
                    const m = (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
                    i.style.transform = `translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`, i.style.setProperty("--swiper-cube-translate-z", `${m}px`)
                },
                setTransition: e => {
                    const {
                        el: i,
                        slides: s
                    } = t;
                    if (s.forEach((t => {
                            t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                                t.style.transitionDuration = `${e}ms`
                            }))
                        })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                        const t = i.querySelector(".swiper-cube-shadow");
                        t && (t.style.transitionDuration = `${e}ms`)
                    }
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.forEach((t => {
                        const i = Math.max(Math.min(t.progress, 1), -1);
                        r(t, i, e)
                    }))
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            });
            const r = (e, i) => {
                let s = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                s || (s = an("flip", e, t.isHorizontal() ? "left" : "top")), r || (r = an("flip", e, t.isHorizontal() ? "right" : "bottom")), s && (s.style.opacity = Math.max(-i, 0)), r && (r.style.opacity = Math.max(i, 0))
            };
            sn({
                effect: "flip",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e,
                        rtlTranslate: i
                    } = t, s = t.params.flipEffect;
                    for (let n = 0; n < e.length; n += 1) {
                        const a = e[n];
                        let o = a.progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(a.progress, 1), -1));
                        const l = a.swiperSlideOffset;
                        let c = -180 * o,
                            d = 0,
                            u = t.params.cssMode ? -l - t.translate : -l,
                            p = 0;
                        t.isHorizontal() ? i && (c = -c) : (p = u, u = 0, d = -c, c = 0), a.style.zIndex = -Math.abs(Math.round(o)) + e.length, s.slideShadows && r(a, o);
                        const h = `translate3d(${u}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                        rn(0, a).style.transform = h
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => ur(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), nn({
                        swiper: t,
                        duration: e,
                        transformElements: i
                    })
                },
                recreateShadows: () => {
                    t.params.flipEffect, t.slides.forEach((e => {
                        let i = e.progress;
                        t.params.flipEffect.limitRotation && (i = Math.max(Math.min(e.progress, 1), -1)), r(e, i)
                    }))
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            }), sn({
                effect: "coverflow",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        width: e,
                        height: i,
                        slides: s,
                        slidesSizesGrid: r
                    } = t, n = t.params.coverflowEffect, a = t.isHorizontal(), o = t.translate, l = a ? e / 2 - o : i / 2 - o, c = a ? n.rotate : -n.rotate, d = n.depth;
                    for (let e = 0, t = s.length; e < t; e += 1) {
                        const t = s[e],
                            i = r[e],
                            o = (l - t.swiperSlideOffset - i / 2) / i,
                            u = "function" == typeof n.modifier ? n.modifier(o) : o * n.modifier;
                        let p = a ? c * u : 0,
                            h = a ? 0 : c * u,
                            f = -d * Math.abs(u),
                            m = n.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(n.stretch) / 100 * i);
                        let g = a ? 0 : m * u,
                            v = a ? m * u : 0,
                            y = 1 - (1 - n.scale) * Math.abs(u);
                        Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0), Math.abs(y) < .001 && (y = 0);
                        const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${h}deg) rotateY(${p}deg) scale(${y})`;
                        if (rn(0, t).style.transform = b, t.style.zIndex = 1 - Math.abs(Math.round(u)), n.slideShadows) {
                            let e = a ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                                i = a ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = an("coverflow", t, a ? "left" : "top")), i || (i = an("coverflow", t, a ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), i && (i.style.opacity = -u > 0 ? -u : 0)
                        }
                    }
                },
                setTransition: e => {
                    t.slides.map((e => ur(e))).forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    }))
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const r = e => "string" == typeof e ? e : `${e}px`;
            sn({
                effect: "creative",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e,
                        wrapperEl: i,
                        slidesSizesGrid: s
                    } = t, n = t.params.creativeEffect, {
                        progressMultiplier: a
                    } = n, o = t.params.centeredSlides;
                    if (o) {
                        const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                        i.style.transform = `translateX(calc(50% - ${e}px))`
                    }
                    for (let i = 0; i < e.length; i += 1) {
                        const s = e[i],
                            l = s.progress,
                            c = Math.min(Math.max(s.progress, -n.limitProgress), n.limitProgress);
                        let d = c;
                        o || (d = Math.min(Math.max(s.originalProgress, -n.limitProgress), n.limitProgress));
                        const u = s.swiperSlideOffset,
                            p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                            h = [0, 0, 0];
                        let f = !1;
                        t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                        let m = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        c < 0 ? (m = n.next, f = !0) : c > 0 && (m = n.prev, f = !0), p.forEach(((e, t) => {
                            p[t] = `calc(${e}px + (${r(m.translate[t])} * ${Math.abs(c*a)}))`
                        })), h.forEach(((e, t) => {
                            h[t] = m.rotate[t] * Math.abs(c * a)
                        })), s.style.zIndex = -Math.abs(Math.round(l)) + e.length;
                        const g = p.join(", "),
                            v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                            y = d < 0 ? `scale(${1+(1-m.scale)*d*a})` : `scale(${1-(1-m.scale)*d*a})`,
                            b = d < 0 ? 1 + (1 - m.opacity) * d * a : 1 - (1 - m.opacity) * d * a,
                            w = `translate3d(${g}) ${v} ${y}`;
                        if (f && m.shadow || !f) {
                            let e = s.querySelector(".swiper-slide-shadow");
                            if (!e && m.shadow && (e = an("creative", s)), e) {
                                const t = n.shadowPerProgress ? c * (1 / n.limitProgress) : c;
                                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const x = rn(0, s);
                        x.style.transform = w, x.style.opacity = b, m.origin && (x.style.transformOrigin = m.origin)
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => ur(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), nn({
                        swiper: t,
                        duration: e,
                        transformElements: i,
                        allSlides: !0
                    })
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                cardsEffect: {
                    slideShadows: !0,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8
                }
            }), sn({
                effect: "cards",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e,
                        activeIndex: i,
                        rtlTranslate: s
                    } = t, r = t.params.cardsEffect, {
                        startTranslate: n,
                        isTouched: a
                    } = t.touchEventsData, o = s ? -t.translate : t.translate;
                    for (let l = 0; l < e.length; l += 1) {
                        const c = e[l],
                            d = c.progress,
                            u = Math.min(Math.max(d, -4), 4);
                        let p = c.swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                        let h = t.params.cssMode ? -p - t.translate : -p,
                            f = 0;
                        const m = -100 * Math.abs(u);
                        let g = 1,
                            v = -r.perSlideRotate * u,
                            y = r.perSlideOffset - .75 * Math.abs(u);
                        const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                            w = (b === i || b === i - 1) && u > 0 && u < 1 && (a || t.params.cssMode) && o < n,
                            x = (b === i || b === i + 1) && u < 0 && u > -1 && (a || t.params.cssMode) && o > n;
                        if (w || x) {
                            const e = (1 - Math.abs((Math.abs(u) - .5) / .5)) ** .5;
                            v += -28 * u * e, g += -.5 * e, y += 96 * e, f = -25 * e * Math.abs(u) + "%"
                        }
                        if (h = u < 0 ? `calc(${h}px ${s?"-":"+"} (${y*Math.abs(u)}%))` : u > 0 ? `calc(${h}px ${s?"-":"+"} (-${y*Math.abs(u)}%))` : `${h}px`, !t.isHorizontal()) {
                            const e = f;
                            f = h, h = e
                        }
                        const _ = u < 0 ? "" + (1 + (1 - g) * u) : "" + (1 - (1 - g) * u),
                            T = `\n        translate3d(${h}, ${f}, ${m}px)\n        rotateZ(${r.rotate?s?-v:v:0}deg)\n        scale(${_})\n      `;
                        if (r.slideShadows) {
                            let e = c.querySelector(".swiper-slide-shadow");
                            e || (e = an("cards", c)), e && (e.style.opacity = Math.min(Math.max((Math.abs(u) - .5) / .5, 0), 1))
                        }
                        c.style.zIndex = -Math.abs(Math.round(d)) + e.length, rn(0, c).style.transform = T
                    }
                },
                setTransition: e => {
                    const i = t.slides.map((e => ur(e)));
                    i.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), nn({
                        swiper: t,
                        duration: e,
                        transformElements: i
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }];

        function ln(e, t) {
            return Object.getOwnPropertyNames(Object(e)).reduce(((i, s) => {
                const r = Object.getOwnPropertyDescriptor(Object(e), s),
                    n = Object.getOwnPropertyDescriptor(Object(t), s);
                return Object.defineProperty(i, s, n || r)
            }), {})
        }

        function cn(e) {
            return "string" == typeof e
        }

        function dn(e) {
            return Array.isArray(e)
        }

        function un(e = {}) {
            const t = ln(e);
            let i;
            return void 0 !== t.types ? i = t.types : void 0 !== t.split && (i = t.split), void 0 !== i && (t.types = (cn(i) || dn(i) ? String(i) : "").split(",").map((e => String(e).trim())).filter((e => /((line)|(word)|(char))/i.test(e)))), (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(e.position)), t
        }

        function pn(e) {
            const t = cn(e) || dn(e) ? String(e) : "";
            return {
                none: !t,
                lines: /line/i.test(t),
                words: /word/i.test(t),
                chars: /char/i.test(t)
            }
        }

        function hn(e) {
            return null !== e && "object" == typeof e
        }

        function fn(e) {
            return hn(e) && /^(1|3|11)$/.test(e.nodeType)
        }

        function mn(e) {
            return dn(e) ? e : null == e ? [] : function(e) {
                return hn(e) && function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0
                }(e.length)
            }(e) ? Array.prototype.slice.call(e) : [e]
        }

        function gn(e) {
            let t = e;
            return cn(e) && (t = /^(#[a-z]\w+)$/.test(e.trim()) ? document.getElementById(e.trim().slice(1)) : document.querySelectorAll(e)), mn(t).reduce(((e, t) => [...e, ...mn(t).filter(fn)]), [])
        }
        Wr.use(on), (() => {
            function e(...e) {
                const t = e.length;
                for (let i = 0; i < t; i++) {
                    const t = e[i];
                    1 === t.nodeType || 11 === t.nodeType ? this.appendChild(t) : this.appendChild(document.createTextNode(String(t)))
                }
            }

            function t(...e) {
                for (; this.lastChild;) this.removeChild(this.lastChild);
                e.length && this.append(...e)
            }

            function i(...e) {
                const t = this.parentNode;
                let i = e.length;
                if (t)
                    for (i || t.removeChild(this); i--;) {
                        let s = e[i];
                        "object" != typeof s ? s = this.ownerDocument.createTextNode(s) : s.parentNode && s.parentNode.removeChild(s), i ? t.insertBefore(this.previousSibling, s) : t.replaceChild(s, this)
                    }
            }
            "undefined" != typeof Element && (Element.prototype.append || (Element.prototype.append = e, DocumentFragment.prototype.append = e), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = t, DocumentFragment.prototype.replaceChildren = t), Element.prototype.replaceWith || (Element.prototype.replaceWith = i, DocumentFragment.prototype.replaceWith = i))
        })();
        const {
            entries: vn,
            keys: yn,
            values: bn
        } = Object, wn = "_splittype", xn = {};
        let _n = 0;

        function Tn(e, t, i) {
            if (!hn(e)) return console.warn("[data.set] owner is not an object"), null;
            const s = e[wn] || (e[wn] = ++_n),
                r = xn[s] || (xn[s] = {});
            return void 0 === i ? t && Object.getPrototypeOf(t) === Object.prototype && (xn[s] = { ...r,
                ...t
            }) : void 0 !== t && (r[t] = i), i
        }

        function Sn(e, t) {
            const i = hn(e) ? e[wn] : null,
                s = i && xn[i] || {};
            return void 0 === t ? s : s[t]
        }

        function En(e) {
            const t = e && e[wn];
            t && (delete e[t], delete xn[t])
        }
        const Mn = "\\ud800-\\udfff",
            Cn = "\\u0300-\\u036f\\ufe20-\\ufe23",
            Pn = "\\u20d0-\\u20f0",
            kn = "\\ufe0e\\ufe0f",
            An = `[${Mn}]`,
            On = `[${Cn}${Pn}]`,
            Ln = "\\ud83c[\\udffb-\\udfff]",
            In = `[^${Mn}]`,
            zn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Dn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Bn = "\\u200d",
            $n = `(?:${On}|${Ln})?`,
            Rn = `[${kn}]?`,
            Fn = Rn + $n + "(?:" + Bn + "(?:" + [In, zn, Dn].join("|") + ")" + Rn + $n + ")*",
            Nn = `(?:${[`${In}${On}?`,On,zn,Dn,An].join("|")}\n)`,
            Xn = RegExp(`${Ln}(?=${Ln})|${Nn}${Fn}`, "g"),
            Yn = RegExp(`[${[Bn,Mn,Cn,Pn,kn].join("")}]`);

        function Hn(e) {
            return Yn.test(e)
        }

        function Vn(e, t = "") {
            var i;
            return (e = null == (i = e) ? "" : String(i)) && cn(e) && !t && Hn(e) ? function(e) {
                return Hn(e) ? function(e) {
                    return e.match(Xn) || []
                }(e) : function(e) {
                    return e.split("")
                }(e)
            }(e) : e.split(t)
        }

        function qn(e, t) {
            const i = document.createElement(e);
            return t ? (Object.keys(t).forEach((e => {
                const s = t[e],
                    r = cn(s) ? s.trim() : s;
                null !== r && "" !== r && ("children" === e ? i.append(...mn(r)) : i.setAttribute(e, r))
            })), i) : i
        }
        var jn = {
            splitClass: "",
            lineClass: "line",
            wordClass: "word",
            charClass: "char",
            types: ["lines", "words", "chars"],
            absolute: !1,
            tagName: "div"
        };

        function Gn(e, t) {
            const i = e.nodeType,
                s = {
                    words: [],
                    chars: []
                };
            if (!/(1|3|11)/.test(i)) return s;
            if (3 === i && /\S/.test(e.nodeValue)) return function(e, t) {
                const i = pn((t = ln(jn, t)).types),
                    s = t.tagName,
                    r = e.nodeValue,
                    n = document.createDocumentFragment();
                let a = [],
                    o = [];
                return /^\s/.test(r) && n.append(" "), a = function(e, t = " ") {
                    return (e ? String(e) : "").trim().replace(/\s+/g, " ").split(t)
                }(r).reduce(((e, r, a, l) => {
                    let c, d;
                    return i.chars && (d = Vn(r).map((e => {
                        const i = qn(s, {
                            class: `${t.splitClass} ${t.charClass}`,
                            style: "display: inline-block;",
                            children: e
                        });
                        return Tn(i, "isChar", !0), o = [...o, i], i
                    }))), i.words || i.lines ? (c = qn(s, {
                        class: `${t.wordClass} ${t.splitClass}`,
                        style: "display: inline-block; " + (i.words && t.absolute ? "position: relative;" : ""),
                        children: i.chars ? d : r
                    }), Tn(c, {
                        isWord: !0,
                        isWordStart: !0,
                        isWordEnd: !0
                    }), n.appendChild(c)) : d.forEach((e => {
                        n.appendChild(e)
                    })), a < l.length - 1 && n.append(" "), i.words ? e.concat(c) : e
                }), []), /\s$/.test(r) && n.append(" "), e.replaceWith(n), {
                    words: a,
                    chars: o
                }
            }(e, t);
            const r = mn(e.childNodes);
            if (r.length && (Tn(e, "isSplit", !0), !Sn(e).isRoot)) {
                e.style.display = "inline-block", e.style.position = "relative";
                const t = e.nextSibling,
                    i = e.previousSibling,
                    s = e.textContent || "",
                    r = t ? t.textContent : " ",
                    n = i ? i.textContent : " ";
                Tn(e, {
                    isWordEnd: /\s$/.test(s) || /^\s/.test(r),
                    isWordStart: /^\s/.test(s) || /\s$/.test(n)
                })
            }
            return r.reduce(((e, i) => {
                const {
                    words: s,
                    chars: r
                } = Gn(i, t);
                return {
                    words: [...e.words, ...s],
                    chars: [...e.chars, ...r]
                }
            }), s)
        }

        function Wn(e) {
            Sn(e).isWord ? (En(e), e.replaceWith(...e.childNodes)) : mn(e.children).forEach((e => Wn(e)))
        }

        function Un(e, t, i) {
            const s = pn(t.types),
                r = t.tagName,
                n = e.getElementsByTagName("*"),
                a = [];
            let o, l, c, d = [],
                u = null,
                p = [];
            const h = e.parentElement,
                f = e.nextElementSibling,
                m = document.createDocumentFragment(),
                g = window.getComputedStyle(e),
                v = g.textAlign,
                y = .2 * parseFloat(g.fontSize);
            return t.absolute && (c = {
                left: e.offsetLeft,
                top: e.offsetTop,
                width: e.offsetWidth
            }, l = e.offsetWidth, o = e.offsetHeight, Tn(e, {
                cssWidth: e.style.width,
                cssHeight: e.style.height
            })), mn(n).forEach((r => {
                const n = r.parentElement === e,
                    {
                        width: o,
                        height: l,
                        top: c,
                        left: p
                    } = function(e, t, i, s) {
                        if (!i.absolute) return {
                            top: t ? e.offsetTop : null
                        };
                        const r = e.offsetParent,
                            [n, a] = s;
                        let o = 0,
                            l = 0;
                        if (r && r !== document.body) {
                            const e = r.getBoundingClientRect();
                            o = e.x + n, l = e.y + a
                        }
                        const {
                            width: c,
                            height: d,
                            x: u,
                            y: p
                        } = e.getBoundingClientRect();
                        return {
                            width: c,
                            height: d,
                            top: p + a - l,
                            left: u + n - o
                        }
                    }(r, n, t, i);
                /^br$/i.test(r.nodeName) || (s.lines && n && ((null === u || c - u >= y) && (u = c, a.push(d = [])), d.push(r)), t.absolute && Tn(r, {
                    top: c,
                    left: p,
                    width: o,
                    height: l
                }))
            })), h && h.removeChild(e), s.lines && (p = a.map((e => {
                const i = qn(r, {
                    class: `${t.splitClass} ${t.lineClass}`,
                    style: `display: block; text-align: ${v}; width: 100%;`
                });
                Tn(i, "isLine", !0);
                const s = {
                    height: 0,
                    top: 1e4
                };
                return m.appendChild(i), e.forEach(((e, t, r) => {
                    const {
                        isWordEnd: n,
                        top: a,
                        height: o
                    } = Sn(e), l = r[t + 1];
                    s.height = Math.max(s.height, o), s.top = Math.min(s.top, a), i.appendChild(e), n && Sn(l).isWordStart && i.append(" ")
                })), t.absolute && Tn(i, {
                    height: s.height,
                    top: s.top
                }), i
            })), s.words || Wn(m), e.replaceChildren(m)), t.absolute && (e.style.width = `${e.style.width||l}px`, e.style.height = `${o}px`, mn(n).forEach((e => {
                const {
                    isLine: t,
                    top: i,
                    left: s,
                    width: r,
                    height: n
                } = Sn(e), a = Sn(e.parentElement), o = !t && a.isLine;
                e.style.top = `${o?i-a.top:i}px`, e.style.left = t ? `${c.left}px` : s - (o ? c.left : 0) + "px", e.style.height = `${n}px`, e.style.width = t ? `${c.width}px` : `${r}px`, e.style.position = "absolute"
            }))), h && (f ? h.insertBefore(e, f) : h.appendChild(e)), p
        }
        let Zn = ln(jn, {});
        class Kn {
            static get data() {
                return xn
            }
            static get defaults() {
                return Zn
            }
            static set defaults(e) {
                Zn = ln(Zn, un(e))
            }
            static setDefaults(e) {
                return Zn = ln(Zn, un(e)), jn
            }
            static revert(e) {
                gn(e).forEach((e => {
                    const {
                        isSplit: t,
                        html: i,
                        cssWidth: s,
                        cssHeight: r
                    } = Sn(e);
                    t && (e.innerHTML = i, e.style.width = s || "", e.style.height = r || "", En(e))
                }))
            }
            static create(e, t) {
                return new Kn(e, t)
            }
            constructor(e, t) {
                this.isSplit = !1, this.settings = ln(Zn, un(t)), this.elements = gn(e), this.split()
            }
            split(e) {
                this.revert(), this.elements.forEach((e => {
                    Tn(e, "html", e.innerHTML)
                })), this.lines = [], this.words = [], this.chars = [];
                const t = [window.pageXOffset, window.pageYOffset];
                void 0 !== e && (this.settings = ln(this.settings, un(e)));
                const i = pn(this.settings.types);
                i.none || (this.elements.forEach((e => {
                    Tn(e, "isRoot", !0);
                    const {
                        words: t,
                        chars: i
                    } = Gn(e, this.settings);
                    this.words = [...this.words, ...t], this.chars = [...this.chars, ...i]
                })), this.elements.forEach((e => {
                    if (i.lines || this.settings.absolute) {
                        const i = Un(e, this.settings, t);
                        this.lines = [...this.lines, ...i]
                    }
                })), this.isSplit = !0, window.scrollTo(t[0], t[1]), vn(xn).forEach((([e, {
                    isRoot: t,
                    isSplit: i
                }]) => {
                    t && i || (xn[e] = null, delete xn[e])
                })))
            }
            revert() {
                this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), Kn.revert(this.elements)
            }
        }
        class Qn {
            constructor(e) {
                this.swiper = new Wr(e, {
                    direction: "horizontal",
                    autoplay: {
                        delay: 4800
                    },
                    pagination: {
                        el: ".swiper-pagination"
                    }
                }), this.swiper.on("slideChange", this.handleSlideChange.bind(this))
            }
            handleSlideChange() {
                const e = this.swiper.slides[this.swiper.activeIndex],
                    t = e.querySelector("p"),
                    i = e.querySelector("h2").querySelectorAll(".char");
                Ws.from(i, {
                    opacity: 0,
                    y: 30,
                    stagger: .2,
                    duration: .7,
                    delay: .2,
                    ease: "elastic.out(1, 0.3)"
                }), Ws.from(t, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: .5,
                    ease: "power4.out"
                })
            }
        }
        class Jn {
            constructor() {
                this.initSplitSliderTitle(), this.initSwiper()
            }
            initSplitSliderTitle() {
                this.splitType = new Kn(".swiper .swiper-slide-title", {
                    types: "chars"
                })
            }
            initSwiper() {
                this.slider = new Qn(".swiper")
            }
        }
        class ea {
            constructor() {
                this.pauseButton = document.getElementById("pauseButton"), this.playButton = document.getElementById("playButton"), this.calendar = document.querySelector(".launch-date__calendar"), this.launchDate = document.querySelector(".launch-date__calendar-date"), this.launchMonth = document.querySelector(".launch-date__calendar-month");
                const e = new Date(t.finishDate);
                this.finishMonth = e.toLocaleString("default", {
                    month: "long"
                }), this.finishDay = e.getDate(), this.launchDate.textContent = this.finishDay, this.launchMonth.textContent = this.finishMonth, this.launchDate.setAttribute("datetime", `${e.getFullYear()}-${e.getMonth()+1}-${this.finishDay}`), this.launchMonth.setAttribute("datetime", `${e.getFullYear()}-${e.getMonth()+1}-${this.finishDay}`), this.calendarListening = !0, this.hoverCalendar = !0, this.calendarAnimation = Ws.timeline({
                    id: "calendar",
                    paused: !1
                }), this.toChars = new Kn(".launch-date__calendar-month", {
                    types: "chars"
                }), this.monthChars = Ws.utils.toArray(".launch-date__calendar-month .char"), this.calendar.addEventListener("mouseover", (e => this.handleMouseOver(e))), this.calendar.addEventListener("click", (e => this.handleCalendarClick(e))), this.calendar.addEventListener("animationend", (e => this.handleAnimationEnd(e)), !1), this.animateCalendar()
            }
            handleMouseOver(e) {
                this.hoverCalendar && (this.calendar.classList.add("intern"), this.hoverCalendar = !1)
            }
            handleCalendarClick(e) {
                this.calendarListening && this.calendar.classList.contains("intern") && !this.calendar.classList.contains("runAnim") && (this.calendar.classList.remove("intern"), this.calendar.classList.add("runAnim"), this.calendarListening = !1)
            }
            handleAnimationEnd(e) {
                "flipCard" === e.animationName && (this.calendarAnimation.restart(), this.calendar.classList.remove("runAnim"), this.calendarListening = !0, this.hoverCalendar = !0)
            }
            animateCalendar() {
                let e = {
                    value: 0
                };
                this.calendarAnimation.to(e, {
                    value: this.finishDay,
                    duration: 3,
                    ease: "expo.out",
                    onUpdate: () => {
                        this.launchDate.innerText = Math.round(e.value)
                    }
                }), this.calendarAnimation.from(this.monthChars, {
                    opacity: 0,
                    y: 30,
                    stagger: .05,
                    duration: .7,
                    ease: "back"
                }, "-=2"), this.calendarAnimation.from(".launch-date__calendar-label", {
                    opacity: 0,
                    y: -50,
                    duration: .7,
                    ease: "back"
                }, "-=1")
            }
        }
        class ta {
            constructor() {
                this.progressBar = document.getElementById("progressBar"), this.endTip = document.getElementById("endTip"), this.daysContainer = document.querySelector(".counter__month");
                const e = new Date(t.startDate),
                    i = new Date(t.finishDate);
                this.countDateStart = e.getTime(), this.countDateTarget = i.getTime(), this.second = 1e3, this.minute = 60 * this.second, this.hour = 60 * this.minute, this.day = 24 * this.hour, this.isAsyncFunctionLoaded = !1, this.intervalId = null, this.initializationPromise = this.init()
            }
            generateMonthList() {
                const e = new Date,
                    t = e.getMonth(),
                    i = e.getFullYear(),
                    s = new Date(i, t + 1, 0).getDate();
                for (let t = 1; t <= s; t++) {
                    const i = document.createElement("li");
                    i.classList.add("counter__month-day"), i.textContent = t, t === e.getDate() && i.classList.add("counter__month-day--current"), this.daysContainer.appendChild(i)
                }
            }
            formatTime(e, t) {
                return `${this.addZeroInFront(2,e)}<span>${t}</span>`
            }
            updateCountdownDisplay(e, t) {
                const i = Math.max(0, Math.floor(e / this.day)),
                    s = Math.max(0, Math.floor(e % this.day / this.hour)),
                    r = Math.max(0, Math.floor(e % this.hour / this.minute)),
                    n = Math.max(0, Math.floor(e % this.minute / this.second));
                document.querySelector("#days").innerHTML = this.formatTime(i, "days"), document.querySelector("#hours").innerHTML = this.formatTime(s, "hours"), document.querySelector("#minutes").innerHTML = this.formatTime(r, "minutes"), document.querySelector("#seconds").innerHTML = this.formatTime(n, "seconds"), document.querySelector(".counter__countdown-percent").innerHTML = `${t}%`, this.updateProgressBar(t)
            }
            addZeroInFront(e, t) {
                return String(t).padStart(e, "0")
            }
            updateProgressBar(e) {
                this.progressBar.value = e;
                const t = e / 100 * this.progressBar.clientWidth;
                this.endTip.style.left = t + "px"
            }
            async countdown() {
                const e = (new Date).getTime(),
                    t = this.countDateTarget - e,
                    i = this.countDateTarget - this.countDateStart,
                    s = i <= 0 ? 100 : Math.min(100, Math.floor((i - t) / i * 100));
                return this.updateCountdownDisplay(t, s), t <= 0 && (clearInterval(this.intervalId), this.updateCountdownDisplay(0, 100)), Promise.resolve()
            }
            async init() {
                await this.countdown(), this.generateMonthList(), this.isAsyncFunctionLoaded = !0, this.intervalId = setInterval((async () => {
                    this.isAsyncFunctionLoaded && await this.countdown()
                }), 1e3)
            }
            async waitForInitialization() {
                await this.initializationPromise
            }
            async runGsapAnimation() {
                await this.waitForInitialization(), Ws.from("#endTip", {
                    duration: 1,
                    opacity: 1,
                    y: -60
                })
            }
        }
        var ia = i(310),
            sa = new class {
                constructor() {
                    const e = this.constructor.instance;
                    if (e) return e;
                    this.constructor.instance = this, this.components = {}, this.boxes = {}
                }
                registerComponent(e, t) {
                    this.components[t] = e
                }
                registerBox(e, t) {
                    this.boxes[t] = e
                }
            },
            ra = class {
                constructor() {
                    sa.registerComponent(this, "RoundPlayer"), this.element = document.querySelector(".round-player"), this.playerText = document.querySelector(".round-player__text"), this.playerTextWidth = this.playerText.offsetWidth, this.wrapper = document.querySelector(".round-player__wrapper"), this.playButton = document.getElementById("playButton"), this.track = document.getElementById("track"), this.setAudioFileSource(s), this.circledText = this.circlizeText(), this.element.addEventListener("click", this.togglePlay.bind(this))
                }
                setAudioFileSource(e) {
                    this.track.getElementsByTagName("source")[0].src = e, this.track.load()
                }
                circlizeText() {
                    new ia(this.playerText).radius(this.playerTextWidth / 2)
                }
                circledTextRefresh() {
                    this.circledText.refresh()
                }
                rotate() {
                    this.playerText.classList.toggle("round-player__text--rotate")
                }
                animateIn() {
                    Ws.to(this.element, {
                        duration: .5,
                        opacity: 1
                    })
                }
                togglePlay(e) {
                    const t = this.track.paused;
                    this.playButton.classList.toggle("paused"), t ? this.track.play() : this.track.pause(), this.rotate(), e.preventDefault()
                }
                sideFlip() {
                    this.wrapper.classList.toggle("round-player__wrapper--flip")
                }
            };
        class na {
            constructor() {
                this.roundPlayer = sa.components.RoundPlayer
            }
            prepare() {
                var e = Ws.timeline();
                e.set(".launch-date__slider-left-part", {
                    borderRadius: "30px",
                    width: "30px",
                    height: "30px"
                }), e.set(".launch-date__slider-right-part", {
                    opacity: 0,
                    x: "-20px"
                }), e.set(".launch-date__calendar-content", {
                    opacity: 0
                }), e.set(".launch-date__slider-content", {
                    opacity: 0
                }), Ws.set(".launch-date__calendar", {
                    "--ticketOpacity": 0
                }), e.set(".launch-date__calendar-right-part", {
                    borderRadius: "30px",
                    width: "30px",
                    height: "30px"
                }), e.set(".launch-date__calendar-left-part", {
                    opacity: 0,
                    x: "20px"
                })
            }
            assemble() {
                const e = Ws.timeline();
                e.to(".launch-date__slider-left-part", {
                    borderRadius: "30 0 0 30",
                    width: "calc(100% - 10px)",
                    height: "initial",
                    rotate: 0,
                    duration: .7
                }), e.to(".launch-date__calendar-right-part", {
                    borderRadius: "0 30px 30px 0",
                    width: "calc(100% - 10px)",
                    height: "initial",
                    rotate: 0,
                    duration: .7
                }, "-=0.7"), e.to(".launch-date__slider-right-part", {
                    opacity: 1,
                    x: 0,
                    duration: .5
                }, "-=0.2"), e.to(".launch-date__calendar-left-part", {
                    opacity: 1,
                    x: 0
                }, "-=0.5"), e.to(".launch-date__slider-content", {
                    opacity: 1
                }, "-=0.5"), e.to(".launch-date__calendar", {
                    "--ticketOpacity": 1,
                    duration: 1
                }), e.to(".launch-date__calendar-content", {
                    opacity: 1,
                    duration: .7,
                    onComplete: () => {
                        this.roundPlayer.animateIn()
                    }
                }, "-=0.3")
            }
        }
        class aa {
            constructor(e) {
                this.boxName = e.boxName, this.elementClass = e.elementClass, this.contentClass = e.contentClass, this.contentOpacityVarName = e.contentOpacityVarName, this.element = document.querySelector(this.elementClass), this.measures = null, this.percentX = 0, this.percentY = 0, this.activeTweens = []
            }
            test() {
                return this.contentClass
            }
            opacity() {
                const e = document.querySelector(this.contentClass),
                    t = e ? getComputedStyle(e) : null;
                return {
                    getValue: () => t ? t.getPropertyValue(`--${this.contentOpacityVarName}`) : null,
                    off: () => {
                        t && (e.style.display = "none", e.style.setProperty(`--${this.contentOpacityVarName}`, 0))
                    },
                    on: () => {
                        t && e.style.setProperty(`--${this.contentOpacityVarName}`, 1)
                    }
                }
            }
            getMeasures() {
                const e = this.element.getBoundingClientRect();
                return {
                    x: e.left + window.scrollX,
                    y: e.top + window.scrollY,
                    bottom: window.innerHeight - (e.top + e.height + window.scrollY),
                    right: window.innerWidth - (e.left + e.width + window.scrollX)
                }
            }
            contentShow(e) {
                let t = `--${this.contentOpacityVarName}`;
                const i = document.querySelector(this.contentClass);
                Ws.to(i, {
                    onStart: () => {
                        i.style.display = e || "block"
                    },
                    duration: 1,
                    [t]: 1
                })
            }
            setStaticInitialState(e) {
                Ws.set(this.element, e), this.measures = this.getMeasures()
            }
            setInitialState(e) {
                Ws.set(this.element, e)
            }
            setCoordinates(e, t) {
                this.percentX = e, this.percentY = t, Ws.set(this.element, {
                    x: this.percentX,
                    y: this.percentY
                })
            }
            startWobbleAnimation() {
                Ws.to(this.element, {
                    opacity: 1,
                    duration: 1
                }), this.activeTweens.push(this.tweenProperty(this.element, "scale", .5, 1.4)), this.activeTweens.push(this.tweenProperty(this.element, "x", this.percentX - 100, this.percentX + 100)), this.activeTweens.push(this.tweenProperty(this.element, "y", this.percentY - 100, this.percentY + 100))
            }
            tweenProperty(e, t, i, s) {
                return Ws.to(e, {
                    [t]: Ws.utils.random(i, s),
                    duration: "random(2, 5)",
                    ease: "power.inOut",
                    onComplete: () => {
                        this.tweenProperty(e, t, i, s)
                    }
                })
            }
            stopAnimation() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                Ws.delayedCall(e, (() => {
                    Ws.killTweensOf(this.element), this.activeTweens = [], "function" == typeof t && t()
                }))
            }
            resetPosition() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                this.stopAnimation(e, (() => {
                    Ws.to(this.element, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        onComplete: () => {
                            "function" == typeof t && t()
                        }
                    })
                }))
            }
            animateBox() {
                let {
                    easeType: e = "power4.out",
                    animDuration: t = 1,
                    delayBeforeAnim: i = 0,
                    delayBeforeStop: s = 0,
                    callback: r
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.resetPosition(s, (() => {
                    Ws.to(this.element, {
                        width: "auto",
                        height: "auto",
                        borderRadius: "30px",
                        ease: e,
                        duration: t,
                        delay: i,
                        onComplete: () => {
                            "function" == typeof r && r()
                        }
                    })
                }))
            }
        }
        class oa {
            constructor(e) {
                this.boxes = e
            }
            startWobbleAnimation() {
                for (const e in this.boxes) this.boxes[e].startWobbleAnimation()
            }
            animBox(e, t) {
                const i = this.boxes.find((t => t.boxName === e));
                i ? i.animateBox(t) : console.error(`Box with name "${e}" not found.`)
            }
            boxesToCircles(e) {
                for (const t in this.boxes) this.boxes[t].setStaticInitialState(e)
            }
        }
        var la, ca, da, ua, pa, ha, fa, ma, ga, va = "transform",
            ya = va + "Origin",
            ba = function(e) {
                var t = e.ownerDocument || e;
                !(va in e.style) && "msTransform" in e.style && (ya = (va = "msTransform") + "Origin");
                for (; t.parentNode && (t = t.parentNode););
                if (ca = window, fa = new ka, t) {
                    la = t, da = t.documentElement, ua = t.body, (ma = la.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                    var i = t.createElement("div"),
                        s = t.createElement("div");
                    ua.appendChild(i), i.appendChild(s), i.style.position = "static", i.style[va] = "translate3d(0,0,1px)", ga = s.offsetParent !== i, ua.removeChild(i)
                }
                return t
            },
            wa = [],
            xa = [],
            _a = function() {
                return ca.pageYOffset || la.scrollTop || da.scrollTop || ua.scrollTop || 0
            },
            Ta = function() {
                return ca.pageXOffset || la.scrollLeft || da.scrollLeft || ua.scrollLeft || 0
            },
            Sa = function(e) {
                return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
            },
            Ea = function e(t) {
                return "fixed" === ca.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
            },
            Ma = function e(t, i) {
                if (t.parentNode && (la || ba(t))) {
                    var s = Sa(t),
                        r = s ? s.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                        n = s ? i ? "rect" : "g" : "div",
                        a = 2 !== i ? 0 : 100,
                        o = 3 === i ? 100 : 0,
                        l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                        c = la.createElementNS ? la.createElementNS(r.replace(/^https/, "http"), n) : la.createElement(n);
                    return i && (s ? (ha || (ha = e(t)), c.setAttribute("width", .01), c.setAttribute("height", .01), c.setAttribute("transform", "translate(" + a + "," + o + ")"), ha.appendChild(c)) : (pa || ((pa = e(t)).style.cssText = l), c.style.cssText = l + "width:0.1px;height:0.1px;top:" + o + "px;left:" + a + "px", pa.appendChild(c))), c
                }
                throw "Need document and parent."
            },
            Ca = function(e) {
                var t, i = e.getCTM();
                return i || (t = e.style[va], e.style[va] = "none", e.appendChild(ma), i = ma.getCTM(), e.removeChild(ma), t ? e.style[va] = t : e.style.removeProperty(va.replace(/([A-Z])/g, "-$1").toLowerCase())), i || fa.clone()
            },
            Pa = function(e, t, i, s, r, n, a) {
                return e.a = t, e.b = i, e.c = s, e.d = r, e.e = n, e.f = a, e
            },
            ka = function() {
                function e(e, t, i, s, r, n) {
                    void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === s && (s = 1), void 0 === r && (r = 0), void 0 === n && (n = 0), Pa(this, e, t, i, s, r, n)
                }
                var t = e.prototype;
                return t.inverse = function() {
                    var e = this.a,
                        t = this.b,
                        i = this.c,
                        s = this.d,
                        r = this.e,
                        n = this.f,
                        a = e * s - t * i || 1e-10;
                    return Pa(this, s / a, -t / a, -i / a, e / a, (i * n - s * r) / a, -(e * n - t * r) / a)
                }, t.multiply = function(e) {
                    var t = this.a,
                        i = this.b,
                        s = this.c,
                        r = this.d,
                        n = this.e,
                        a = this.f,
                        o = e.a,
                        l = e.c,
                        c = e.b,
                        d = e.d,
                        u = e.e,
                        p = e.f;
                    return Pa(this, o * t + c * s, o * i + c * r, l * t + d * s, l * i + d * r, n + u * t + p * s, a + u * i + p * r)
                }, t.clone = function() {
                    return new e(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.equals = function(e) {
                    var t = this.a,
                        i = this.b,
                        s = this.c,
                        r = this.d,
                        n = this.e,
                        a = this.f;
                    return t === e.a && i === e.b && s === e.c && r === e.d && n === e.e && a === e.f
                }, t.apply = function(e, t) {
                    void 0 === t && (t = {});
                    var i = e.x,
                        s = e.y,
                        r = this.a,
                        n = this.b,
                        a = this.c,
                        o = this.d,
                        l = this.e,
                        c = this.f;
                    return t.x = i * r + s * a + l || 0, t.y = i * n + s * o + c || 0, t
                }, e
            }();

        function Aa(e, t, i, s) {
            if (!e || !e.parentNode || (la || ba(e)).documentElement === e) return new ka;
            var r = function(e) {
                    for (var t, i; e && e !== ua;)(i = e._gsap) && i.uncache && i.get(e, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), t ? t.push(i) : t = [i]), e = e.parentNode;
                    return t
                }(e),
                n = Sa(e) ? wa : xa,
                a = function(e, t) {
                    var i, s, r, n, a, o, l = Sa(e),
                        c = e === l,
                        d = l ? wa : xa,
                        u = e.parentNode;
                    if (e === ca) return e;
                    if (d.length || d.push(Ma(e, 1), Ma(e, 2), Ma(e, 3)), i = l ? ha : pa, l) c ? (n = -(r = Ca(e)).e / r.a, a = -r.f / r.d, s = fa) : e.getBBox ? (r = e.getBBox(), s = (s = e.transform ? e.transform.baseVal : {}).numberOfItems ? s.numberOfItems > 1 ? function(e) {
                        for (var t = new ka, i = 0; i < e.numberOfItems; i++) t.multiply(e.getItem(i).matrix);
                        return t
                    }(s) : s.getItem(0).matrix : fa, n = s.a * r.x + s.c * r.y, a = s.b * r.x + s.d * r.y) : (s = new ka, n = a = 0), t && "g" === e.tagName.toLowerCase() && (n = a = 0), (c ? l : u).appendChild(i), i.setAttribute("transform", "matrix(" + s.a + "," + s.b + "," + s.c + "," + s.d + "," + (s.e + n) + "," + (s.f + a) + ")");
                    else {
                        if (n = a = 0, ga)
                            for (s = e.offsetParent, r = e; r && (r = r.parentNode) && r !== s && r.parentNode;)(ca.getComputedStyle(r)[va] + "").length > 4 && (n = r.offsetLeft, a = r.offsetTop, r = 0);
                        if ("absolute" !== (o = ca.getComputedStyle(e)).position && "fixed" !== o.position)
                            for (s = e.offsetParent; u && u !== s;) n += u.scrollLeft || 0, a += u.scrollTop || 0, u = u.parentNode;
                        (r = i.style).top = e.offsetTop - a + "px", r.left = e.offsetLeft - n + "px", r[va] = o[va], r[ya] = o[ya], r.position = "fixed" === o.position ? "fixed" : "absolute", e.parentNode.appendChild(i)
                    }
                    return i
                }(e, i),
                o = n[0].getBoundingClientRect(),
                l = n[1].getBoundingClientRect(),
                c = n[2].getBoundingClientRect(),
                d = a.parentNode,
                u = !s && Ea(e),
                p = new ka((l.left - o.left) / 100, (l.top - o.top) / 100, (c.left - o.left) / 100, (c.top - o.top) / 100, o.left + (u ? 0 : Ta()), o.top + (u ? 0 : _a()));
            if (d.removeChild(a), r)
                for (o = r.length; o--;)(l = r[o]).scaleX = l.scaleY = 0, l.renderTransform(1, l);
            return t ? p.inverse() : p
        }
        var Oa, La, Ia, za, Da, Ba, $a, Ra, Fa = 1,
            Na = function(e, t) {
                return e.actions.forEach((function(e) {
                    return e.vars[t] && e.vars[t](e)
                }))
            },
            Xa = {},
            Ya = 180 / Math.PI,
            Ha = Math.PI / 180,
            Va = {},
            qa = {},
            ja = {},
            Ga = function(e) {
                return "string" == typeof e ? e.split(" ").join("").split(",") : e
            },
            Wa = Ga("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
            Ua = Ga("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
            Za = function(e) {
                return Oa(e)[0] || console.warn("Element not found:", e)
            },
            Ka = function(e) {
                return Math.round(1e4 * e) / 1e4 || 0
            },
            Qa = function(e, t, i) {
                return e.forEach((function(e) {
                    return e.classList[i](t)
                }))
            },
            Ja = {
                zIndex: 1,
                kill: 1,
                simple: 1,
                spin: 1,
                clearProps: 1,
                targets: 1,
                toggleClass: 1,
                onComplete: 1,
                onUpdate: 1,
                onInterrupt: 1,
                onStart: 1,
                delay: 1,
                repeat: 1,
                repeatDelay: 1,
                yoyo: 1,
                scale: 1,
                fade: 1,
                absolute: 1,
                props: 1,
                onEnter: 1,
                onLeave: 1,
                custom: 1,
                paused: 1,
                nested: 1,
                prune: 1,
                absoluteOnLeave: 1
            },
            eo = {
                zIndex: 1,
                simple: 1,
                clearProps: 1,
                scale: 1,
                absolute: 1,
                fitChild: 1,
                getVars: 1,
                props: 1
            },
            to = function(e) {
                return e.replace(/([A-Z])/g, "-$1").toLowerCase()
            },
            io = function(e, t) {
                var i, s = {};
                for (i in e) t[i] || (s[i] = e[i]);
                return s
            },
            so = {},
            ro = function(e) {
                var t = so[e] = Ga(e);
                return ja[e] = t.concat(Ua), t
            },
            no = function e(t, i, s) {
                void 0 === s && (s = 0);
                for (var r = t.parentNode, n = 1e3 * Math.pow(10, s) * (i ? -1 : 1), a = i ? 900 * -n : 0; t;) a += n, t = t.previousSibling;
                return r ? a + e(r, i, s + 1) : a
            },
            ao = function(e, t, i) {
                return e.forEach((function(e) {
                    return e.d = no(i ? e.element : e.t, t)
                })), e.sort((function(e, t) {
                    return e.d - t.d
                })), e
            },
            oo = function(e, t) {
                for (var i, s, r = e.element.style, n = e.css = e.css || [], a = t.length; a--;) s = r[i = t[a]] || r.getPropertyValue(i), n.push(s ? i : qa[i] || (qa[i] = to(i)), s);
                return r
            },
            lo = function(e) {
                var t = e.css,
                    i = e.element.style,
                    s = 0;
                for (e.cache.uncache = 1; s < t.length; s += 2) t[s + 1] ? i[t[s]] = t[s + 1] : i.removeProperty(t[s]);
                !t[t.indexOf("transform") + 1] && i.translate && (i.removeProperty("translate"), i.removeProperty("scale"), i.removeProperty("rotate"))
            },
            co = function(e, t) {
                e.forEach((function(e) {
                    return e.a.cache.uncache = 1
                })), t || e.finalStates.forEach(lo)
            },
            uo = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
            po = function(e, t, i) {
                var s, r, n, a = e.element,
                    o = e.width,
                    l = e.height,
                    c = e.uncache,
                    d = e.getProp,
                    u = a.style,
                    p = 4;
                if ("object" != typeof t && (t = e), Ia && 1 !== i) return Ia._abs.push({
                    t: a,
                    b: e,
                    a: e,
                    sd: 0
                }), Ia._final.push((function() {
                    return (e.cache.uncache = 1) && lo(e)
                })), a;
                for (r = "none" === d("display"), e.isVisible && !r || (r && (oo(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = o = e.width || t.width, e.height = l = e.height || t.height), oo(e, uo), n = window.getComputedStyle(a); p--;) u[uo[p]] = n[uo[p]];
                if (u.gridArea = "1 / 1 / 1 / 1", u.transition = "none", u.position = "absolute", u.width = o + "px", u.height = l + "px", u.top || (u.top = "0px"), u.left || (u.left = "0px"), c) s = new Ao(a);
                else if ((s = io(e, Va)).position = "absolute", e.simple) {
                    var h = a.getBoundingClientRect();
                    s.matrix = new ka(1, 0, 0, 1, h.left + Ta(), h.top + _a())
                } else s.matrix = Aa(a, !1, !1, !0);
                return s = bo(s, e, !0), e.x = Ba(s.x, .01), e.y = Ba(s.y, .01), a
            },
            ho = function(e, t) {
                return !0 !== t && (t = Oa(t), e = e.filter((function(e) {
                    if (-1 !== t.indexOf((e.sd < 0 ? e.b : e.a).element)) return !0;
                    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px")
                }))), e
            },
            fo = function(e) {
                return ao(e, !0).forEach((function(e) {
                    return (e.a.isVisible || e.b.isVisible) && po(e.sd < 0 ? e.b : e.a, e.b, 1)
                }))
            },
            mo = function(e, t, i, s) {
                return e instanceof Ao ? e : e instanceof ko ? function(e, t) {
                    return t && e.idLookup[mo(t).id] || e.elementStates[0]
                }(e, s) : new Ao("string" == typeof e ? Za(e) || console.warn(e + " not found") : e, t, i)
            },
            go = function(e, t) {
                var i, s = e.style || e;
                for (i in t) s[i] = t[i]
            },
            vo = function(e) {
                return e.map((function(e) {
                    return e.element
                }))
            },
            yo = function(e, t, i) {
                return e && t.length && i.add(e(vo(t), i, new ko(t, 0, !0)), 0)
            },
            bo = function(e, t, i, s, r, n) {
                var a, o, l, c, d, u, p, h = e.element,
                    f = e.cache,
                    m = e.parent,
                    g = e.x,
                    v = e.y,
                    y = t.width,
                    b = t.height,
                    w = t.scaleX,
                    x = t.scaleY,
                    _ = t.rotation,
                    T = t.bounds,
                    S = n && $a && $a(h, "transform"),
                    E = e,
                    M = t.matrix,
                    C = M.e,
                    P = M.f,
                    k = e.bounds.width !== T.width || e.bounds.height !== T.height || e.scaleX !== w || e.scaleY !== x || e.rotation !== _,
                    A = !k && e.simple && t.simple && !r;
                return A || !m ? (w = x = 1, _ = a = 0) : (d = function(e) {
                    var t = e._gsap || La.core.getCache(e);
                    return t.gmCache === La.ticker.frame ? t.gMatrix : (t.gmCache = La.ticker.frame, t.gMatrix = Aa(e, !0, !1, !0))
                }(m), u = d.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), _ = Ka(Math.atan2(u.b, u.a) * Ya), a = Ka(Math.atan2(u.c, u.d) * Ya + _) % 360, w = Math.sqrt(Math.pow(u.a, 2) + Math.pow(u.b, 2)), x = Math.sqrt(Math.pow(u.c, 2) + Math.pow(u.d, 2)) * Math.cos(a * Ha), r && (r = Oa(r)[0], c = La.getProperty(r), p = r.getBBox && "function" == typeof r.getBBox && r.getBBox(), E = {
                    scaleX: c("scaleX"),
                    scaleY: c("scaleY"),
                    width: p ? p.width : Math.ceil(parseFloat(c("width", "px"))),
                    height: p ? p.height : parseFloat(c("height", "px"))
                }), f.rotation = _ + "deg", f.skewX = a + "deg"), i ? (w *= y !== E.width && E.width ? y / E.width : 1, x *= b !== E.height && E.height ? b / E.height : 1, f.scaleX = w, f.scaleY = x) : (y = Ba(y * w / E.scaleX, 0), b = Ba(b * x / E.scaleY, 0), h.style.width = y + "px", h.style.height = b + "px"), s && go(h, t.props), A || !m ? (g += C - e.matrix.e, v += P - e.matrix.f) : k || m !== t.parent ? (f.renderTransform(1, f), u = Aa(r || h, !1, !1, !0), o = d.apply({
                    x: u.e,
                    y: u.f
                }), g += (l = d.apply({
                    x: C,
                    y: P
                })).x - o.x, v += l.y - o.y) : (d.e = d.f = 0, g += (l = d.apply({
                    x: C - e.matrix.e,
                    y: P - e.matrix.f
                })).x, v += l.y), g = Ba(g, .02), v = Ba(v, .02), !n || n instanceof Ao ? (f.x = g + "px", f.y = v + "px", f.renderTransform(1, f)) : S && S.revert(), n && (n.x = g, n.y = v, n.rotation = _, n.skewX = a, i ? (n.scaleX = w, n.scaleY = x) : (n.width = y, n.height = b)), n || f
            },
            wo = function(e, t) {
                return e instanceof ko ? e : new ko(e, t)
            },
            xo = function(e, t, i) {
                var s = e.idLookup[i],
                    r = e.alt[i];
                return !r.isVisible || (t.getElementState(r.element) || r).isVisible && s.isVisible ? s : r
            },
            _o = [],
            To = "width,height,overflowX,overflowY".split(","),
            So = function(e) {
                if (e !== Ra) {
                    var t = Da.style,
                        i = Da.clientWidth === window.outerWidth,
                        s = Da.clientHeight === window.outerHeight,
                        r = 4;
                    if (e && (i || s)) {
                        for (; r--;) _o[r] = t[To[r]];
                        i && (t.width = Da.clientWidth + "px", t.overflowY = "hidden"), s && (t.height = Da.clientHeight + "px", t.overflowX = "hidden"), Ra = e
                    } else if (Ra) {
                        for (; r--;) _o[r] ? t[To[r]] = _o[r] : t.removeProperty(to(To[r]));
                        Ra = e
                    }
                }
            },
            Eo = function(e, t, i, s) {
                e instanceof ko && t instanceof ko || console.warn("Not a valid state object.");
                var r, n, a, o, l, c, d, u, p, h, f, m, g, v, y, b = i = i || {},
                    w = b.clearProps,
                    x = b.onEnter,
                    _ = b.onLeave,
                    T = b.absolute,
                    S = b.absoluteOnLeave,
                    E = b.custom,
                    M = b.delay,
                    C = b.paused,
                    P = b.repeat,
                    k = b.repeatDelay,
                    A = b.yoyo,
                    O = b.toggleClass,
                    L = b.nested,
                    I = b.zIndex,
                    z = b.scale,
                    D = b.fade,
                    B = b.stagger,
                    $ = b.spin,
                    R = b.prune,
                    F = ("props" in i ? i : e).props,
                    N = io(i, Ja),
                    X = La.timeline({
                        delay: M,
                        paused: C,
                        repeat: P,
                        repeatDelay: k,
                        yoyo: A,
                        data: "isFlip"
                    }),
                    Y = N,
                    H = [],
                    V = [],
                    q = [],
                    j = [],
                    G = !0 === $ ? 1 : $ || 0,
                    W = "function" == typeof $ ? $ : function() {
                        return G
                    },
                    U = e.interrupted || t.interrupted,
                    Z = X[1 !== s ? "to" : "from"];
                for (n in t.idLookup) f = t.alt[n] ? xo(t, e, n) : t.idLookup[n], l = f.element, h = e.idLookup[n], e.alt[n] && l === h.element && (e.alt[n].isVisible || !f.isVisible) && (h = e.alt[n]), h ? (c = {
                    t: l,
                    b: h,
                    a: f,
                    sd: h.element === l ? 0 : f.isVisible ? 1 : -1
                }, q.push(c), c.sd && (c.sd < 0 && (c.b = f, c.a = h), U && oo(c.b, F ? ja[F] : Ua), D && q.push(c.swap = {
                    t: h.element,
                    b: c.b,
                    a: c.a,
                    sd: -c.sd,
                    swap: c
                })), l._flip = h.element._flip = Ia ? Ia.timeline : X) : f.isVisible && (q.push({
                    t: l,
                    b: io(f, {
                        isVisible: 1
                    }),
                    a: f,
                    sd: 0,
                    entering: 1
                }), l._flip = Ia ? Ia.timeline : X);
                F && (so[F] || ro(F)).forEach((function(e) {
                    return N[e] = function(t) {
                        return q[t].a.props[e]
                    }
                })), q.finalStates = p = [], m = function() {
                    for (ao(q), So(!0), o = 0; o < q.length; o++) c = q[o], g = c.a, v = c.b, !R || g.isDifferent(v) || c.entering ? (l = c.t, L && !(c.sd < 0) && o && (g.matrix = Aa(l, !1, !1, !0)), v.isVisible && g.isVisible ? (c.sd < 0 ? (d = new Ao(l, F, e.simple), bo(d, g, z, 0, 0, d), d.matrix = Aa(l, !1, !1, !0), d.css = c.b.css, c.a = g = d, D && (l.style.opacity = U ? v.opacity : g.opacity), B && j.push(l)) : c.sd > 0 && D && (l.style.opacity = U ? g.opacity - v.opacity : "0"), bo(g, v, z, F)) : v.isVisible !== g.isVisible && (v.isVisible ? g.isVisible || (v.css = g.css, V.push(v), q.splice(o--, 1), T && L && bo(g, v, z, F)) : (g.isVisible && H.push(g), q.splice(o--, 1))), z || (l.style.maxWidth = Math.max(g.width, v.width) + "px", l.style.maxHeight = Math.max(g.height, v.height) + "px", l.style.minWidth = Math.min(g.width, v.width) + "px", l.style.minHeight = Math.min(g.height, v.height) + "px"), L && O && l.classList.add(O)) : q.splice(o--, 1), p.push(g);
                    var t;
                    if (O && (t = p.map((function(e) {
                            return e.element
                        })), L && t.forEach((function(e) {
                            return e.classList.remove(O)
                        }))), So(!1), z ? (N.scaleX = function(e) {
                            return q[e].a.scaleX
                        }, N.scaleY = function(e) {
                            return q[e].a.scaleY
                        }) : (N.width = function(e) {
                            return q[e].a.width + "px"
                        }, N.height = function(e) {
                            return q[e].a.height + "px"
                        }, N.autoRound = i.autoRound || !1), N.x = function(e) {
                            return q[e].a.x + "px"
                        }, N.y = function(e) {
                            return q[e].a.y + "px"
                        }, N.rotation = function(e) {
                            return q[e].a.rotation + ($ ? 360 * W(e, u[e], u) : 0)
                        }, N.skewX = function(e) {
                            return q[e].a.skewX
                        }, u = q.map((function(e) {
                            return e.t
                        })), (I || 0 === I) && (N.modifiers = {
                            zIndex: function() {
                                return I
                            }
                        }, N.zIndex = I, N.immediateRender = !1 !== i.immediateRender), D && (N.opacity = function(e) {
                            return q[e].sd < 0 ? 0 : q[e].sd > 0 ? q[e].a.opacity : "+=0"
                        }), j.length) {
                        B = La.utils.distribute(B);
                        var s = u.slice(j.length);
                        N.stagger = function(e, t) {
                            return B(~j.indexOf(t) ? u.indexOf(q[e].swap.t) : e, t, s)
                        }
                    }
                    if (Wa.forEach((function(e) {
                            return i[e] && X.eventCallback(e, i[e], i[e + "Params"])
                        })), E && u.length)
                        for (n in Y = io(N, Ja), "scale" in E && (E.scaleX = E.scaleY = E.scale, delete E.scale), E)(r = io(E[n], eo))[n] = N[n], !("duration" in r) && "duration" in N && (r.duration = N.duration), r.stagger = N.stagger, Z.call(X, u, r, 0), delete Y[n];
                    (u.length || V.length || H.length) && (O && X.add((function() {
                        return Qa(t, O, X._zTime < 0 ? "remove" : "add")
                    }), 0) && !C && Qa(t, O, "add"), u.length && Z.call(X, u, Y, 0)), yo(x, H, X), yo(_, V, X);
                    var h = Ia && Ia.timeline;
                    h && (h.add(X, 0), Ia._final.push((function() {
                        return co(q, !w)
                    }))), a = X.duration(), X.call((function() {
                        var e = X.time() >= a;
                        e && !h && co(q, !w), O && Qa(t, O, e ? "remove" : "add")
                    }))
                }, S && (T = q.filter((function(e) {
                    return !e.sd && !e.a.isVisible && e.b.isVisible
                })).map((function(e) {
                    return e.a.element
                }))), Ia ? (T && (y = Ia._abs).push.apply(y, ho(q, T)), Ia._run.push(m)) : (T && fo(ho(q, T)), m());
                var K = Ia ? Ia.timeline : X;
                return K.revert = function() {
                    return Co(K, 1, 1)
                }, K
            },
            Mo = function e(t) {
                t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e)
            },
            Co = function(e, t, i) {
                if (e && e.progress() < 1 && (!e.paused() || i)) return t && (Mo(e), t < 2 && e.progress(1), e.kill()), !0
            },
            Po = function(e) {
                for (var t, i = e.idLookup = {}, s = e.alt = {}, r = e.elementStates, n = r.length; n--;) i[(t = r[n]).id] ? s[t.id] = t : i[t.id] = t
            },
            ko = function() {
                function e(e, t, i) {
                    if (this.props = t && t.props, this.simple = !(!t || !t.simple), i) this.targets = vo(e), this.elementStates = e, Po(this);
                    else {
                        this.targets = Oa(e);
                        var s = t && (!1 === t.kill || t.batch && !t.kill);
                        Ia && !s && Ia._kill.push(this), this.update(s || !!Ia)
                    }
                }
                var t = e.prototype;
                return t.update = function(e) {
                    var t = this;
                    return this.elementStates = this.targets.map((function(e) {
                        return new Ao(e, t.props, t.simple)
                    })), Po(this), this.interrupt(e), this.recordInlineStyles(), this
                }, t.clear = function() {
                    return this.targets.length = this.elementStates.length = 0, Po(this), this
                }, t.fit = function(e, t, i) {
                    for (var s, r, n = ao(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, o = 0; o < n.length; o++) s = n[o], i && (s.matrix = Aa(s.element, !1, !1, !0)), (r = a[s.id]) && bo(s, r, t, !0, 0, s), s.matrix = Aa(s.element, !1, !1, !0);
                    return this
                }, t.getProperty = function(e, t) {
                    var i = this.getElementState(e) || Va;
                    return (t in i ? i : i.props || Va)[t]
                }, t.add = function(e) {
                    for (var t, i, s, r = e.targets.length, n = this.idLookup, a = this.alt; r--;)(s = n[(i = e.elementStates[r]).id]) && (i.element === s.element || a[i.id] && a[i.id].element === i.element) ? (t = this.elementStates.indexOf(i.element === s.element ? s : a[i.id]), this.targets.splice(t, 1, e.targets[r]), this.elementStates.splice(t, 1, i)) : (this.targets.push(e.targets[r]), this.elementStates.push(i));
                    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Po(this), this
                }, t.compare = function(e) {
                    var t, i, s, r, n, a, o, l, c = e.idLookup,
                        d = this.idLookup,
                        u = [],
                        p = [],
                        h = [],
                        f = [],
                        m = [],
                        g = e.alt,
                        v = this.alt,
                        y = function(e, t, i) {
                            return (e.isVisible !== t.isVisible ? e.isVisible ? h : f : e.isVisible ? p : u).push(i) && m.push(i)
                        },
                        b = function(e, t, i) {
                            return m.indexOf(i) < 0 && y(e, t, i)
                        };
                    for (s in c) n = g[s], a = v[s], r = (t = n ? xo(e, this, s) : c[s]).element, i = d[s], a ? (l = i.isVisible || !a.isVisible && r === i.element ? i : a, (o = !n || t.isVisible || n.isVisible || l.element !== n.element ? t : n).isVisible && l.isVisible && o.element !== l.element ? ((o.isDifferent(l) ? p : u).push(o.element, l.element), m.push(o.element, l.element)) : y(o, l, o.element), n && o.element === n.element && (n = c[s]), b(o.element !== i.element && n ? n : o, i, i.element), b(n && n.element === a.element ? n : o, a, a.element), n && b(n, a.element === n.element ? a : i, n.element)) : (i ? i.isDifferent(t) ? y(t, i, r) : u.push(r) : h.push(r), n && b(n, i, n.element));
                    for (s in d) c[s] || (f.push(d[s].element), v[s] && f.push(v[s].element));
                    return {
                        changed: p,
                        unchanged: u,
                        enter: h,
                        leave: f
                    }
                }, t.recordInlineStyles = function() {
                    for (var e = ja[this.props] || Ua, t = this.elementStates.length; t--;) oo(this.elementStates[t], e)
                }, t.interrupt = function(e) {
                    var t = this,
                        i = [];
                    this.targets.forEach((function(s) {
                        var r = s._flip,
                            n = Co(r, e ? 0 : 1);
                        e && n && i.indexOf(r) < 0 && r.add((function() {
                            return t.updateVisibility()
                        })), n && i.push(r)
                    })), !e && i.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!i.length)
                }, t.updateVisibility = function() {
                    this.elementStates.forEach((function(e) {
                        var t = e.element.getBoundingClientRect();
                        e.isVisible = !!(t.width || t.height || t.top || t.left), e.uncache = 1
                    }))
                }, t.getElementState = function(e) {
                    return this.elementStates[this.targets.indexOf(Za(e))]
                }, t.makeAbsolute = function() {
                    return ao(this.elementStates.slice(0), !0, !0).map(po)
                }, e
            }(),
            Ao = function() {
                function e(e, t, i) {
                    this.element = e, this.update(t, i)
                }
                var t = e.prototype;
                return t.isDifferent = function(e) {
                    var t = this.bounds,
                        i = e.bounds;
                    return t.top !== i.top || t.left !== i.left || t.width !== i.width || t.height !== i.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props)
                }, t.update = function(e, t) {
                    var i, s, r = this,
                        n = r.element,
                        a = La.getProperty(n),
                        o = La.core.getCache(n),
                        l = n.getBoundingClientRect(),
                        c = n.getBBox && "function" == typeof n.getBBox && "svg" !== n.nodeName.toLowerCase() && n.getBBox(),
                        d = t ? new ka(1, 0, 0, 1, l.left + Ta(), l.top + _a()) : Aa(n, !1, !1, !0);
                    r.getProp = a, r.element = n, r.id = ((s = (i = n).getAttribute("data-flip-id")) || i.setAttribute("data-flip-id", s = "auto-" + Fa++), s), r.matrix = d, r.cache = o, r.bounds = l, r.isVisible = !!(l.width || l.height || l.left || l.top), r.display = a("display"), r.position = a("position"), r.parent = n.parentNode, r.x = a("x"), r.y = a("y"), r.scaleX = o.scaleX, r.scaleY = o.scaleY, r.rotation = a("rotation"), r.skewX = a("skewX"), r.opacity = a("opacity"), r.width = c ? c.width : Ba(a("width", "px"), .04), r.height = c ? c.height : Ba(a("height", "px"), .04), e && function(e, t) {
                        for (var i = La.getProperty(e.element, null, "native"), s = e.props = {}, r = t.length; r--;) s[t[r]] = (i(t[r]) + "").trim();
                        s.zIndex && (s.zIndex = parseFloat(s.zIndex) || 0)
                    }(r, so[e] || ro(e)), r.ctm = n.getCTM && "svg" === n.nodeName.toLowerCase() && Ca(n).inverse(), r.simple = t || 1 === Ka(d.a) && !Ka(d.b) && !Ka(d.c) && 1 === Ka(d.d), r.uncache = 0
                }, e
            }(),
            Oo = function() {
                function e(e, t) {
                    this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline
                }
                var t = e.prototype;
                return t.getStateById = function(e) {
                    for (var t = this.states.length; t--;)
                        if (this.states[t].idLookup[e]) return this.states[t]
                }, t.kill = function() {
                    this.batch.remove(this)
                }, e
            }(),
            Lo = function() {
                function e(e) {
                    this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new ko, this.timeline = La.timeline()
                }
                var t = e.prototype;
                return t.add = function(e) {
                    var t = this.actions.filter((function(t) {
                        return t.vars === e
                    }));
                    return t.length ? t[0] : (t = new Oo("function" == typeof e ? {
                        animate: e
                    } : e, this), this.actions.push(t), t)
                }, t.remove = function(e) {
                    var t = this.actions.indexOf(e);
                    return t >= 0 && this.actions.splice(t, 1), this
                }, t.getState = function(e) {
                    var t = this,
                        i = Ia,
                        s = za;
                    return Ia = this, this.state.clear(), this._kill.length = 0, this.actions.forEach((function(i) {
                        i.vars.getState && (i.states.length = 0, za = i, i.state = i.vars.getState(i)), e && i.states.forEach((function(e) {
                            return t.state.add(e)
                        }))
                    })), za = s, Ia = i, this.killConflicts(), this
                }, t.animate = function() {
                    var e, t, i = this,
                        s = Ia,
                        r = this.timeline,
                        n = this.actions.length;
                    for (Ia = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach((function(e) {
                            e.vars.animate && e.vars.animate(e);
                            var t, i, s = e.vars.onEnter,
                                r = e.vars.onLeave,
                                n = e.targets;
                            n && n.length && (s || r) && (t = new ko, e.states.forEach((function(e) {
                                return t.add(e)
                            })), (i = t.compare(Io.getState(n))).enter.length && s && s(i.enter), i.leave.length && r && r(i.leave))
                        })), fo(this._abs), this._run.forEach((function(e) {
                            return e()
                        })), t = r.duration(), e = this._final.slice(0), r.add((function() {
                            t <= r.time() && (e.forEach((function(e) {
                                return e()
                            })), Na(i, "onComplete"))
                        })), Ia = s; n--;) this.actions[n].vars.once && this.actions[n].kill();
                    return Na(this, "onStart"), r.restart(), this
                }, t.loadState = function(e) {
                    e || (e = function() {
                        return 0
                    });
                    var t = [];
                    return this.actions.forEach((function(i) {
                        if (i.vars.loadState) {
                            var s, r = function r(n) {
                                n && (i.targets = n), ~(s = t.indexOf(r)) && (t.splice(s, 1), t.length || e())
                            };
                            t.push(r), i.vars.loadState(r)
                        }
                    })), t.length || e(), this
                }, t.setState = function() {
                    return this.actions.forEach((function(e) {
                        return e.targets = e.vars.setState && e.vars.setState(e)
                    })), this
                }, t.killConflicts = function(e) {
                    return this.state.interrupt(e), this._kill.forEach((function(t) {
                        return t.interrupt(e)
                    })), this
                }, t.run = function(e, t) {
                    var i = this;
                    return this !== Ia && (e || this.getState(t), this.loadState((function() {
                        i._killed || (i.setState(), i.animate())
                    }))), this
                }, t.clear = function(e) {
                    this.state.clear(), e || (this.actions.length = 0)
                }, t.getStateById = function(e) {
                    for (var t, i = this.actions.length; i--;)
                        if (t = this.actions[i].getStateById(e)) return t;
                    return this.state.idLookup[e] && this.state
                }, t.kill = function() {
                    this._killed = 1, this.clear(), delete Xa[this.id]
                }, e
            }(),
            Io = function() {
                function e() {}
                return e.getState = function(t, i) {
                    var s = wo(t, i);
                    return za && za.states.push(s), i && i.batch && e.batch(i.batch).state.add(s), s
                }, e.from = function(e, t) {
                    return "clearProps" in (t = t || {}) || (t.clearProps = !0), Eo(e, wo(t.targets || e.targets, {
                        props: t.props || e.props,
                        simple: t.simple,
                        kill: !!t.kill
                    }), t, -1)
                }, e.to = function(e, t) {
                    return Eo(e, wo(t.targets || e.targets, {
                        props: t.props || e.props,
                        simple: t.simple,
                        kill: !!t.kill
                    }), t, 1)
                }, e.fromTo = function(e, t, i) {
                    return Eo(e, t, i)
                }, e.fit = function(e, t, i) {
                    var s = i ? io(i, eo) : {},
                        r = i || s,
                        n = r.absolute,
                        a = r.scale,
                        o = r.getVars,
                        l = r.props,
                        c = r.runBackwards,
                        d = r.onComplete,
                        u = r.simple,
                        p = i && i.fitChild && Za(i.fitChild),
                        h = mo(t, l, u, e),
                        f = mo(e, 0, u, h),
                        m = l ? ja[l] : Ua;
                    return l && go(s, h.props), c && (oo(f, m), "immediateRender" in s || (s.immediateRender = !0), s.onComplete = function() {
                        lo(f), d && d.apply(this, arguments)
                    }), n && po(f, h), s = bo(f, h, a || p, l, p, s.duration || o ? s : 0), o ? s : s.duration ? La.to(f.element, s) : null
                }, e.makeAbsolute = function(e, t) {
                    return (e instanceof ko ? e : new ko(e, t)).makeAbsolute()
                }, e.batch = function(e) {
                    return e || (e = "default"), Xa[e] || (Xa[e] = new Lo(e))
                }, e.killFlipsOf = function(e, t) {
                    (e instanceof ko ? e.targets : Oa(e)).forEach((function(e) {
                        return e && Co(e._flip, !1 !== t ? 1 : 2)
                    }))
                }, e.isFlipping = function(t) {
                    var i = e.getByTarget(t);
                    return !!i && i.isActive()
                }, e.getByTarget = function(e) {
                    return (Za(e) || Va)._flip
                }, e.getElementState = function(e, t) {
                    return new Ao(Za(e), t)
                }, e.convertCoordinates = function(e, t, i) {
                    var s = Aa(t, !0, !0).multiply(Aa(e));
                    return i ? s.apply(i) : s
                }, e.register = function(e) {
                    if (Da = "undefined" != typeof document && document.body) {
                        La = e, ba(Da), Oa = La.utils.toArray, $a = La.core.getStyleSaver;
                        var t = La.utils.snap(.1);
                        Ba = function(e, i) {
                            return t(parseFloat(e) + i)
                        }
                    }
                }, e
            }();
        Io.version = "3.12.2", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(Io), Ws.registerPlugin(Io);
        var zo = class extends aa {
            constructor(e, t) {
                super(e, t), this.roundPlayer = sa.components.RoundPlayer, this.boxCounter = sa.boxes.boxCounter, this.isInit = !1, this.isFlipped = !1, this.states = null, this.boxOpened = !1, this.aboutTeamBox = this.element, this.aboutTeamBoxIsFlipped = !1, this.aboutTeamBoxUsersContent = document.querySelector(".about-team__users"), this.aboutTeamBoxCloseBtn = document.querySelector(".about-team__users-btn-close"), this.ticketBox = document.querySelector(".launch-date"), this.ticketFlipAnimation = this.createTicketFlipAnimation(), this.aboutBoxFlipAnimation = this.createAboutBoxFlipAnimation(), this.listenScreenSize()
            }
            initialize() {
                this.setupElements(), this.setupAnimations()
            }
            listenScreenSize() {
                window.addEventListener("smallScreen", (() => {
                    this.aboutTeamBox.removeEventListener("click", this.aboutTeamBoxClickHandler)
                })), window.addEventListener("largeScreen", (() => {
                    this.aboutTeamBox.addEventListener("click", this.aboutTeamBoxClickHandler)
                }))
            }
            aboutTeamBoxClickHandler = e => {
                this.isInit || (this.initialize(), this.isInit = !0);
                let t = e.target;
                !1 === this.aboutTeamBoxIsFlipped ? (this.animateBoxIn(), this.aboutTeamBoxIsFlipped = !0) : !0 === this.aboutTeamBoxIsFlipped && t.closest(".about-team__users-btn-close") && (this.animateBoxOut(), this.aboutTeamBoxIsFlipped = !1), e.preventDefault()
            };
            setupButtons() {}
            async animateBoxIn() {
                this.roundPlayer.sideFlip(), await this.hideBoxesAsync(), await this.expandBox(), await this.revealAboutBoxUsersContent()
            }
            async animateBoxOut() {
                await this.revealAboutBoxUsersContent(), await this.expandBox(), await this.showBoxesAsync()
            }
            setupElements() {
                Ws.set(".wrapper", {
                    transformStyle: "preserve-3d",
                    transformPerspective: 800
                }), Ws.set(this.ticketBox, {
                    transformStyle: "preserve-3d",
                    transformOrigin: "top center",
                    backfaceVisibility: "hidden"
                }), Ws.set(this.aboutTeamBox, {
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center"
                })
            }
            setupAnimations() {
                this.ticketFlipAnimation = this.createTicketFlipAnimation(), this.aboutBoxFlipAnimation = this.createAboutBoxFlipAnimation()
            }
            createTicketFlipAnimation() {
                return Ws.timeline({
                    paused: !0
                }).to(this.ticketBox, {
                    y: -50,
                    rotationX: "-=180",
                    duration: .9,
                    opacity: 0,
                    ease: "back.out(1.7)"
                })
            }
            createAboutBoxFlipAnimation() {
                return Ws.timeline({
                    paused: !0
                }).to(this.aboutTeamBox, {
                    rotationX: "-=180",
                    duration: .8,
                    ease: "back.out(1.7)",
                    translateX: "none",
                    translateY: "none"
                }).to(this.contentClass, {
                    opacity: 0,
                    display: "none",
                    duration: .2,
                    ease: "linear",
                    onComplete: () => {
                        this.boxCounter.element.classList.add("counter__content--smaller")
                    }
                }, "-=0.8")
            }
            async hideBoxesAsync() {
                await Promise.all([new Promise((e => {
                    this.aboutBoxFlipAnimation.play(), this.aboutBoxFlipAnimation.eventCallback("onComplete", (() => {
                        Ws.set(this.aboutTeamBox, {
                            rotationX: 0
                        }), e()
                    }))
                })), new Promise((e => {
                    this.ticketFlipAnimation.play(), e()
                }))])
            }
            async showBoxesAsync() {
                await Promise.all([new Promise((e => {
                    this.aboutBoxFlipAnimation.reverse(), this.aboutBoxFlipAnimation.eventCallback("onComplete", (() => {
                        e()
                    }))
                })), new Promise((e => {
                    this.ticketFlipAnimation.reverse(), this.boxCounter.element.classList.remove("counter__content--smaller"), setTimeout((() => {
                        this.roundPlayer.sideFlip()
                    }), 800), e()
                }))])
            }
            async expandBox() {
                return new Promise((e => {
                    this.states = Io.getState([this.aboutTeamBox, this.boxCounter.element]), this.aboutTeamBox.classList.toggle("about-team--expand"), this.boxCounter.element.classList.toggle("counter--expand"), Io.from(this.states, {
                        duration: .7,
                        absolute: !0,
                        ease: "power4.out",
                        onComplete: () => {
                            this.boxCounter.element.classList.add("counter__content--smaller"), e()
                        }
                    })
                }))
            }
            async revealAboutBoxUsersContent(e) {
                return new Promise((e => {
                    this.boxOpened ? Ws.to(this.aboutTeamBoxUsersContent, {
                        opacity: 0,
                        display: "none",
                        duration: .2,
                        onComplete: () => {
                            this.boxOpened = !1, e()
                        }
                    }) : Ws.to(this.aboutTeamBoxUsersContent, {
                        display: "flex",
                        opacity: 1,
                        duration: .2,
                        onComplete: () => {
                            this.boxOpened = !0, e()
                        }
                    })
                }))
            }
            animateContentIn() {}
        };
        class Do {
            constructor() {
                this.boxes = {}, this.animate = new oa(this.boxes), this.boxCounter = 0
            }
            createBox(e) {
                let t;
                e.boxName || (e.boxName = "box_" + this.boxCounter++), t = "boxAboutTeam" === e.boxName ? zo : aa;
                const i = new t(e);
                return sa.registerBox(i, e.boxName), this.boxes[e.boxName] = i, i
            }
            createBoxes(e) {
                for (const t of e) this.createBox(t)
            }
            getBoxByName(e) {
                return this.boxes[e]
            }
            setNewShiftedCoordinates(e) {
                for (const t in this.boxes) {
                    const i = this.boxes[t],
                        s = [],
                        r = e[t];
                    for (const e in r) {
                        const t = r[e],
                            n = i.measures[e] * t;
                        s.push(n)
                    }
                    i.setCoordinates(s[0], s[1])
                }
            }
        }
        class Bo {
            constructor() {
                this.boxFactory = new Do, this.ticketAnimation = new na, this.boxes = sa.boxes, e ? window.innerWidth < 1100 ? (this.initBoxes(), sa.components.RoundPlayer.animateIn()) : (this.initBoxes(), this.hideBoxesContent(), this.initBoxesAnimation()) : (this.initBoxes(), sa.components.RoundPlayer.animateIn())
            }
            initBoxes() {
                this.boxFactory.createBoxes([{
                    boxName: "boxNotifyUser",
                    elementClass: ".notify-user",
                    contentClass: ".notify-user__content",
                    contentOpacityVarName: "notifyUserOpacity"
                }, {
                    boxName: "boxCounter",
                    elementClass: ".counter",
                    contentClass: ".counter__content",
                    contentOpacityVarName: "counterOpacity"
                }, {
                    boxName: "boxAboutTeam",
                    elementClass: ".about-team",
                    contentClass: ".about-team__content",
                    contentOpacityVarName: "aboutTeamOpacity"
                }, {
                    boxName: "boxJournal",
                    elementClass: ".journal",
                    contentClass: ".journal__content",
                    contentOpacityVarName: "journalOpacity"
                }, {
                    boxName: "boxTicketBody",
                    elementClass: ".launch-date__slider-left-part"
                }, {
                    boxName: "boxTicketStub",
                    elementClass: ".launch-date__calendar-right-part"
                }])
            }
            hideBoxesContent() {
                for (const e in this.boxes) this.boxes[e].opacity().off()
            }
            initBoxesAnimation() {
                this.ticketAnimation.prepare(), this.boxFactory.animate.boxesToCircles({
                    borderRadius: "50px",
                    width: "30px",
                    height: "30px",
                    opacity: 0
                }), this.boxFactory.setNewShiftedCoordinates({
                    boxNotifyUser: {
                        right: .3,
                        bottom: .4
                    },
                    boxAboutTeam: {
                        right: .2,
                        bottom: .7
                    },
                    boxTicketBody: {
                        x: -.5,
                        bottom: .5
                    },
                    boxTicketStub: {
                        right: .5,
                        bottom: .3
                    },
                    boxCounter: {
                        right: .2,
                        y: -.5
                    },
                    boxJournal: {
                        right: -.2,
                        bottom: .2
                    }
                }), this.boxFactory.animate.startWobbleAnimation(), this.cirlesToBoxes(), this.reverseTicketAnimation()
            }
            cirlesToBoxes() {
                this.boxes.boxNotifyUser.animateBox({
                    easeType: "circ.inOut",
                    animDuration: .8,
                    delayBeforeStop: 2,
                    delayBeforeAnim: 0,
                    callback: () => {
                        this.boxes.boxNotifyUser.contentShow()
                    }
                }), this.boxes.boxAboutTeam.animateBox({
                    easeType: "linear",
                    animDuration: .5,
                    delayBeforeStop: 2.8,
                    delayBeforeAnim: 0,
                    callback: () => {
                        this.boxes.boxAboutTeam.contentShow("flex")
                    }
                }), this.boxes.boxCounter.animateBox({
                    easeType: "circ.inOut",
                    animDuration: .8,
                    delayBeforeStop: 1,
                    delayBeforeAnim: 0,
                    callback: () => {
                        this.boxes.boxCounter.contentShow()
                    }
                }), this.boxes.boxJournal.animateBox({
                    easeType: "expo.inOut",
                    animDuration: 1,
                    delayBeforeStop: 2.8,
                    delayBeforeAnim: 0,
                    callback: () => {
                        this.boxes.boxJournal.contentShow("flex")
                    }
                })
            }
            reverseTicketAnimation() {
                (e => {
                    this.boxes.boxTicketBody.resetPosition(4, (() => {
                        this.boxes.boxTicketStub.resetPosition(0, (() => {
                            this.ticketAnimation.assemble()
                        }))
                    }))
                })()
            }
        }
        class $o {
            constructor() {
                this.breakpoint = {
                    optimalSize: 1100
                }, this.isSmallScreen = this.checkWindowSize(), this.triggerEvent(), window.addEventListener("resize", (() => {
                    const e = this.checkWindowSize();
                    this.isSmallScreen !== e && location.reload()
                }))
            }
            triggerEvent() {
                const e = this.isSmallScreen ? "smallScreen" : "largeScreen",
                    t = new Event(e);
                window.dispatchEvent(t)
            }
            checkWindowSize() {
                return window.innerWidth < this.breakpoint.optimalSize
            }
        }
        new class {
            constructor(e) {
                Pace.on("done", (() => {
                    const t = document.querySelector(".pace-progress"),
                        i = document.querySelector(".wrapper"),
                        s = document.querySelector(".pace");
                    Ws.to(t, {
                        top: -100,
                        opacity: 0,
                        duration: .7,
                        delay: .3,
                        onComplete: () => {
                            s.style.display = "none"
                        }
                    }), Ws.to(i, {
                        delay: 1.1,
                        onStart: () => {
                            new e
                        },
                        duration: .3,
                        opacity: 1
                    })
                }))
            }
        }(class {
            constructor() {
                this.initUtils(), this.initRoundPlayer(), this.initBoxes(), this.initResizeHandler(), this.initNavigation(), this.initCountdown(), this.initNotifyUser(), this.initTicketSlider(), this.initTicketCalendar()
            }
            initUtils() {
                (e => {
                    const t = new Image;
                    t.onload = t.onerror = () => (e => {
                        const t = e ? "webp" : "no-webp";
                        document.documentElement.classList.add(t)
                    })(2 === t.height), t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
                })()
            }
            initResizeHandler() {
                new $o
            }
            initRoundPlayer() {
                new ra
            }
            initNavigation() {
                new Zs
            }
            initNotifyUser() {
                new Ks
            }
            initTicketCalendar() {
                new ea
            }
            initTicketSlider() {
                new Jn
            }
            initCountdown() {
                (new ta).runGsapAnimation()
            }
            initBoxes() {
                new Bo
            }
        })
    }()
}();