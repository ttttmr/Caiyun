! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 17)
}([function (e, t, n) {
    var r; /*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
    ! function (i) {
        "use strict";
        var o = document,
            a = "getElementsByClassName",
            s = function (e) {
                return o.querySelectorAll(e)
            },
            c = {
                type: 0,
                shade: !0,
                shadeClose: !0,
                fixed: !0,
                anim: "scale"
            },
            u = {
                extend: function (e) {
                    var t = JSON.parse(JSON.stringify(c));
                    for (var n in e) t[n] = e[n];
                    return t
                },
                timer: {},
                end: {},
                touch: function (e, t) {
                    e.addEventListener("click", function (e) {
                        t.call(this, e)
                    }, !1)
                }
            },
            l = 0,
            d = ["layui-m-layer"],
            p = function (e) {
                this.config = u.extend(e), this.view()
            };
        p.prototype.view = function () {
            var e = this,
                t = e.config,
                n = o.createElement("div");
            e.id = n.id = d[0] + l, n.setAttribute("class", d[0] + " " + d[0] + (t.type || 0)), n.setAttribute("index", l);
            var r = function () {
                    var e = "object" == typeof t.title;
                    return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + "</h3>" : ""
                }(),
                i = function () {
                    "string" == typeof t.btn && (t.btn = [t.btn]);
                    var e, n = (t.btn || []).length;
                    return 0 !== n && t.btn ? (e = '<span yes type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span no type="0">' + t.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
                }();
            if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top : 100, t.style = t.style || "", t.style += " top:" + (o.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (t.content || "") + "</p>"), t.skin && (t.anim = "up"), "msg" === t.skin && (t.shade = !1), n.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (t.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (t.skin ? "layui-m-layer-" + t.skin + " " : "") + (t.className ? t.className : "") + " " + (t.anim ? "layui-m-anim-" + t.anim : "") + '" ' + (t.style ? 'style="' + t.style + '"' : "") + ">" + r + '<div class="layui-m-layercont">' + t.content + "</div>" + i + "</div></div></div>", !t.type || 2 === t.type) {
                var c = o[a](d[0] + t.type);
                c.length >= 1 && layer.close(c[0].getAttribute("index"))
            }
            document.body.appendChild(n);
            var u = e.elem = s("#" + e.id)[0];
            t.success && t.success(u), e.index = l++, e.action(t, u)
        }, p.prototype.action = function (e, t) {
            var n = this;
            e.time && (u.timer[n.index] = setTimeout(function () {
                layer.close(n.index)
            }, 1e3 * e.time));
            var r = function () {
                0 == this.getAttribute("type") ? (e.no && e.no(), layer.close(n.index)) : e.yes ? e.yes(n.index) : layer.close(n.index)
            };
            if (e.btn)
                for (var i = t[a]("layui-m-layerbtn")[0].children, o = i.length, s = 0; o > s; s++) u.touch(i[s], r);
            if (e.shade && e.shadeClose) {
                var c = t[a]("layui-m-layershade")[0];
                u.touch(c, function () {
                    layer.close(n.index, e.end)
                })
            }
            e.end && (u.end[n.index] = e.end)
        }, i.layer = {
            v: "2.0",
            index: l,
            open: function (e) {
                return new p(e || {}).index
            },
            close: function (e) {
                var t = s("#" + d[0] + e)[0];
                t && (t.innerHTML = "", o.body.removeChild(t), clearTimeout(u.timer[e]), delete u.timer[e], "function" == typeof u.end[e] && u.end[e](), delete u.end[e])
            },
            closeAll: function () {
                for (var e = o[a](d[0]), t = 0, n = e.length; n > t; t++) layer.close(0 | e[0].getAttribute("index"))
            }
        }, void 0 === (r = function () {
            return layer
        }.call(t, n, t, e)) || (e.exports = r)
    }(window)
}, , function (e, t, n) {
    var r; /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    ! function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [],
            a = n.document,
            s = Object.getPrototypeOf,
            c = o.slice,
            u = o.concat,
            l = o.push,
            d = o.indexOf,
            p = {},
            f = p.toString,
            h = p.hasOwnProperty,
            m = h.toString,
            g = m.call(Object),
            y = {},
            v = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            x = function (e) {
                return null != e && e === e.window
            },
            A = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function b(e, t, n) {
            var r, i, o = (n = n || a).createElement("script");
            if (o.text = e, t)
                for (r in A)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[f.call(e)] || "object" : typeof e
        }
        var T = "3.4.1",
            E = function (e, t) {
                return new E.fn.init(e, t)
            },
            S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function C(e) {
            var t = !!e && "length" in e && e.length,
                n = w(e);
            return !v(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: T,
            constructor: E,
            length: 0,
            toArray: function () {
                return c.call(this)
            },
            get: function (e) {
                return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return E.each(this, e)
            },
            map: function (e) {
                return this.pushStack(E.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(c.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: o.sort,
            splice: o.splice
        }, E.extend = E.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(u, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, E.extend({
            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== f.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || m.call(n) !== g))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e, t) {
                b(e, {
                    nonce: t && t.nonce
                })
            },
            each: function (e, t) {
                var n, r = 0;
                if (C(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(S, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function (e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (C(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return u.apply([], a)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase()
        });
        var k = function (e) {
            var t, n, r, i, o, a, s, c, u, l, d, p, f, h, m, g, y, v, x, A = "sizzle" + 1 * new Date,
                b = e.document,
                w = 0,
                T = 0,
                E = ce(),
                S = ce(),
                C = ce(),
                k = ce(),
                R = function (e, t) {
                    return e === t && (d = !0), 0
                },
                L = {}.hasOwnProperty,
                O = [],
                N = O.pop,
                M = O.push,
                P = O.push,
                B = O.slice,
                D = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                U = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                F = "\\[" + U + "*(" + j + ")(?:" + U + "*([*^$|!~]?=)" + U + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + U + "*\\]",
                _ = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                H = new RegExp(U + "+", "g"),
                q = new RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$", "g"),
                G = new RegExp("^" + U + "*," + U + "*"),
                K = new RegExp("^" + U + "*([>+~]|" + U + ")" + U + "*"),
                X = new RegExp(U + "|>"),
                V = new RegExp(_),
                W = new RegExp("^" + j + "$"),
                z = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + _),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + U + "*(even|odd|(([+-]|)(\\d*)n|)" + U + "*(?:([+-]|)" + U + "*(\\d+)|))" + U + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + U + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + U + "?|(" + U + ")|.)", "ig"),
                ne = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                oe = function () {
                    p()
                },
                ae = Ae(function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                P.apply(O = B.call(b.childNodes), b.childNodes), O[b.childNodes.length].nodeType
            } catch (t) {
                P = {
                    apply: O.length ? function (e, t) {
                        M.apply(e, B.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function se(e, t, r, i) {
                var o, s, u, l, d, h, y, v = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!i && ((t ? t.ownerDocument || t : b) !== f && p(t), t = t || f, m)) {
                    if (11 !== w && (d = $.exec(e)))
                        if (o = d[1]) {
                            if (9 === w) {
                                if (!(u = t.getElementById(o))) return r;
                                if (u.id === o) return r.push(u), r
                            } else if (v && (u = v.getElementById(o)) && x(t, u) && u.id === o) return r.push(u), r
                        } else {
                            if (d[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r
                        } if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (y = e, v = t, 1 === w && X.test(e)) {
                            for ((l = t.getAttribute("id")) ? l = l.replace(re, ie) : t.setAttribute("id", l = A), s = (h = a(e)).length; s--;) h[s] = "#" + l + " " + xe(h[s]);
                            y = h.join(","), v = ee.test(e) && ye(t.parentNode) || t
                        }
                        try {
                            return P.apply(r, v.querySelectorAll(y)), r
                        } catch (t) {
                            k(e, !0)
                        } finally {
                            l === A && t.removeAttribute("id")
                        }
                    }
                }
                return c(e.replace(q, "$1"), t, r, i)
            }

            function ce() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function ue(e) {
                return e[A] = !0, e
            }

            function le(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function de(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
            }

            function pe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function fe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return ue(function (t) {
                    return t = +t, ue(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ye(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {}, o = se.isXML = function (e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Q.test(t || n && n.nodeName || "HTML")
                }, p = se.setDocument = function (e) {
                    var t, i, a = e ? e.ownerDocument || e : b;
                    return a !== f && 9 === a.nodeType && a.documentElement && (h = (f = a).documentElement, m = !o(f), b !== f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = le(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = le(function (e) {
                        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = le(function (e) {
                        return h.appendChild(e).id = A, !f.getElementsByName || !f.getElementsByName(A).length
                    }), n.getById ? (r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                    }, y = [], g = [], (n.qsa = Z.test(f.querySelectorAll)) && (le(function (e) {
                        h.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + U + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + U + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || g.push(".#.+[+~]")
                    }), le(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + U + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (n.matchesSelector = Z.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                        n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", _)
                    }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(h.compareDocumentPosition), x = t || Z.test(h.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, R = t ? function (e, t) {
                        if (e === t) return d = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === f || e.ownerDocument === b && x(b, e) ? -1 : t === f || t.ownerDocument === b && x(b, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return d = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === f ? -1 : t === f ? 1 : i ? -1 : o ? 1 : l ? D(l, e) - D(l, t) : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? pe(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0
                    }), f
                }, se.matches = function (e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== f && p(e), n.matchesSelector && m && !k[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
                        var r = v.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        k(t, !0)
                    }
                    return 0 < se(t, f, null, [e]).length
                }, se.contains = function (e, t) {
                    return (e.ownerDocument || e) !== f && p(e), x(e, t)
                }, se.attr = function (e, t) {
                    (e.ownerDocument || e) !== f && p(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                    return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, se.escape = function (e) {
                    return (e + "").replace(re, ie)
                }, se.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function (e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (d = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(R), d) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return l = null, e
                }, i = se.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: z,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + U + ")" + e + "(" + U + "|$)")) && E(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var i = se.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(H, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, c) {
                                var u, l, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !c && !s,
                                    x = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                        for (x = (f = (u = (l = (d = (p = g)[A] || (p[A] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (x = f = 0) || h.pop();)
                                            if (1 === p.nodeType && ++x && p === t) {
                                                l[e] = [w, f, x];
                                                break
                                            }
                                    } else if (v && (x = f = (u = (l = (d = (p = t)[A] || (p[A] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === x)
                                        for (;
                                            (p = ++f && p && p[m] || (x = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (v && ((l = (d = p[A] || (p[A] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [w, x]), p !== t)););
                                    return (x -= i) === r || x % r == 0 && 0 <= x / r
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return i[A] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = D(e, o[a])] = !(n[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: ue(function (e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(q, "$1"));
                            return r[A] ? ue(function (e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: ue(function (e) {
                            return function (t) {
                                return 0 < se(e, t).length
                            }
                        }),
                        contains: ue(function (e) {
                            return e = e.replace(te, ne),
                                function (t) {
                                    return -1 < (t.textContent || i(t)).indexOf(e)
                                }
                        }),
                        lang: ue(function (e) {
                            return W.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === h
                        },
                        focus: function (e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function (e) {
                            return J.test(e.nodeName)
                        },
                        input: function (e) {
                            return Y.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ge(function () {
                            return [0]
                        }),
                        last: ge(function (e, t) {
                            return [t - 1]
                        }),
                        eq: ge(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ge(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ge(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ge(function (e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: ge(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = fe(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = he(t);

            function ve() {}

            function xe(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function Ae(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = T++;
                return t.first ? function (t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function (t, n, c) {
                    var u, l, d, p = [w, s];
                    if (c) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, c)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (l = (d = t[A] || (t[A] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((u = l[o]) && u[0] === w && u[1] === s) return p[2] = u[2];
                                    if ((l[o] = p)[2] = e(t, n, c)) return !0
                                } return !1
                }
            }

            function be(e) {
                return 1 < e.length ? function (t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function we(e, t, n, r, i) {
                for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
                return a
            }

            function Te(e, t, n, r, i, o) {
                return r && !r[A] && (r = Te(r)), i && !i[A] && (i = Te(i, o)), ue(function (o, a, s, c) {
                    var u, l, d, p = [],
                        f = [],
                        h = a.length,
                        m = o || function (e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !o && t ? m : we(m, p, e, s, c),
                        y = n ? i || (o ? e : h || r) ? [] : a : g;
                    if (n && n(g, y, s, c), r)
                        for (u = we(y, f), r(u, [], s, c), l = u.length; l--;)(d = u[l]) && (y[f[l]] = !(g[f[l]] = d));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (u = [], l = y.length; l--;)(d = y[l]) && u.push(g[l] = d);
                                i(null, y = [], u, c)
                            }
                            for (l = y.length; l--;)(d = y[l]) && -1 < (u = i ? D(o, d) : p[l]) && (o[u] = !(a[u] = d))
                        }
                    } else y = we(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, c) : P.apply(a, y)
                })
            }

            function Ee(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], c = a ? 1 : 0, l = Ae(function (e) {
                        return e === t
                    }, s, !0), d = Ae(function (e) {
                        return -1 < D(t, e)
                    }, s, !0), p = [function (e, n, r) {
                        var i = !a && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                        return t = null, i
                    }]; c < o; c++)
                    if (n = r.relative[e[c].type]) p = [Ae(be(p), n)];
                    else {
                        if ((n = r.filter[e[c].type].apply(null, e[c].matches))[A]) {
                            for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                            return Te(1 < c && be(p), 1 < c && xe(e.slice(0, c - 1).concat({
                                value: " " === e[c - 2].type ? "*" : ""
                            })).replace(q, "$1"), n, c < i && Ee(e.slice(c, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                        }
                        p.push(n)
                    } return be(p)
            }
            return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = se.tokenize = function (e, t) {
                var n, i, o, a, s, c, u, l = S[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (s = e, c = [], u = r.preFilter; s;) {
                    for (a in n && !(i = G.exec(s)) || (i && (s = s.slice(i[0].length) || s), c.push(o = [])), n = !1, (i = K.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(q, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = z[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? se.error(e) : S(e, c).slice(0)
            }, s = se.compile = function (e, t) {
                var n, i, o, s, c, l, d = [],
                    h = [],
                    g = C[e + " "];
                if (!g) {
                    for (t || (t = a(e)), n = t.length; n--;)(g = Ee(t[n]))[A] ? d.push(g) : h.push(g);
                    (g = C(e, (i = h, s = 0 < (o = d).length, c = 0 < i.length, l = function (e, t, n, a, l) {
                        var d, h, g, y = 0,
                            v = "0",
                            x = e && [],
                            A = [],
                            b = u,
                            T = e || c && r.find.TAG("*", l),
                            E = w += null == b ? 1 : Math.random() || .1,
                            S = T.length;
                        for (l && (u = t === f || t || l); v !== S && null != (d = T[v]); v++) {
                            if (c && d) {
                                for (h = 0, t || d.ownerDocument === f || (p(d), n = !m); g = i[h++];)
                                    if (g(d, t || f, n)) {
                                        a.push(d);
                                        break
                                    } l && (w = E)
                            }
                            s && ((d = !g && d) && y--, e && x.push(d))
                        }
                        if (y += v, s && v !== y) {
                            for (h = 0; g = o[h++];) g(x, A, t, n);
                            if (e) {
                                if (0 < y)
                                    for (; v--;) x[v] || A[v] || (A[v] = N.call(a));
                                A = we(A)
                            }
                            P.apply(a, A), l && !e && 0 < A.length && 1 < y + o.length && se.uniqueSort(a)
                        }
                        return l && (w = E, u = b), x
                    }, s ? ue(l) : l))).selector = e
                }
                return g
            }, c = se.select = function (e, t, n, i) {
                var o, c, u, l, d, p = "function" == typeof e && e,
                    f = !i && a(e = p.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (2 < (c = f[0] = f[0].slice(0)).length && "ID" === (u = c[0]).type && 9 === t.nodeType && m && r.relative[c[1].type]) {
                        if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                    }
                    for (o = z.needsContext.test(e) ? 0 : c.length; o-- && (u = c[o], !r.relative[l = u.type]);)
                        if ((d = r.find[l]) && (i = d(u.matches[0].replace(te, ne), ee.test(c[0].type) && ye(t.parentNode) || t))) {
                            if (c.splice(o, 1), !(e = i.length && xe(c))) return P.apply(n, i), n;
                            break
                        }
                }
                return (p || s(e, f))(i, t, !m, n, !t || ee.test(e) && ye(t.parentNode) || t), n
            }, n.sortStable = A.split("").sort(R).join("") === A, n.detectDuplicates = !!d, p(), n.sortDetached = le(function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
            }), le(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || de("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && le(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), le(function (e) {
                return null == e.getAttribute("disabled")
            }) || de(I, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), se
        }(n);
        E.find = k, E.expr = k.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = k.uniqueSort, E.text = k.getText, E.isXMLDoc = k.isXML, E.contains = k.contains, E.escapeSelector = k.escape;
        var R = function (e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            L = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            O = E.expr.match.needsContext;

        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function P(e, t, n) {
            return v(t) ? E.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? E.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? E.grep(e, function (e) {
                return -1 < d.call(t, e) !== n
            }) : E.filter(t, e, n)
        }
        E.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, E.fn.extend({
            find: function (e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                return 1 < r ? E.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(P(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(P(this, e || [], !0))
            },
            is: function (e) {
                return !!P(this, "string" == typeof e && O.test(e) ? E(e) : e || [], !1).length
            }
        });
        var B, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || B, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), M.test(r[1]) && E.isPlainObject(t))
                        for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, B = E(a);
        var I = /^(?:parents|prev(?:Until|All))/,
            U = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function j(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        E.fn.extend({
            has: function (e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && E(e);
                if (!O.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? d.call(E(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return R(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return R(e, "parentNode", n)
            },
            next: function (e) {
                return j(e, "nextSibling")
            },
            prev: function (e) {
                return j(e, "previousSibling")
            },
            nextAll: function (e) {
                return R(e, "nextSibling")
            },
            prevAll: function (e) {
                return R(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return R(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return R(e, "previousSibling", n)
            },
            siblings: function (e) {
                return L((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return L(e.firstChild)
            },
            contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, function (e, t) {
            E.fn[e] = function (n, r) {
                var i = E.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), 1 < this.length && (U[e] || E.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var F = /[^\x20\t\r\n\f]+/g;

        function _(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function q(e, t, n, r) {
            var i;
            try {
                e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function (e) {
            var t, n;
            e = "string" == typeof e ? (t = e, n = {}, E.each(t.match(F) || [], function (e, t) {
                n[t] = !0
            }), n) : E.extend({}, e);
            var r, i, o, a, s = [],
                c = [],
                u = -1,
                l = function () {
                    for (a = a || e.once, o = r = !0; c.length; u = -1)
                        for (i = c.shift(); ++u < s.length;) !1 === s[u].apply(i[0], i[1]) && e.stopOnFalse && (u = s.length, i = !1);
                    e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
                },
                d = {
                    add: function () {
                        return s && (i && !r && (u = s.length - 1, c.push(i)), function t(n) {
                            E.each(n, function (n, r) {
                                v(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== w(r) && t(r)
                            })
                        }(arguments), i && !r && l()), this
                    },
                    remove: function () {
                        return E.each(arguments, function (e, t) {
                            for (var n; - 1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                        }), this
                    },
                    has: function (e) {
                        return e ? -1 < E.inArray(e, s) : 0 < s.length
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return a = c = [], s = i = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return a = c = [], i || r || (s = i = ""), this
                    },
                    locked: function () {
                        return !!a
                    },
                    fireWith: function (e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || l()), this
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!o
                    }
                };
            return d
        }, E.extend({
            Deferred: function (e) {
                var t = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return i.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return E.Deferred(function (n) {
                                E.each(t, function (t, r) {
                                    var i = v(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, r, i) {
                            var o = 0;

                            function a(e, t, r, i) {
                                return function () {
                                    var s = this,
                                        c = arguments,
                                        u = function () {
                                            var n, u;
                                            if (!(e < o)) {
                                                if ((n = r.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? i ? u.call(n, a(o, t, _, i), a(o, t, H, i)) : (o++, u.call(n, a(o, t, _, i), a(o, t, H, i), a(o, t, _, t.notifyWith))) : (r !== _ && (s = void 0, c = [n]), (i || t.resolveWith)(s, c))
                                            }
                                        },
                                        l = i ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, l.stackTrace), o <= e + 1 && (r !== H && (s = void 0, c = [n]), t.rejectWith(s, c))
                                            }
                                        };
                                    e ? l() : (E.Deferred.getStackHook && (l.stackTrace = E.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            return E.Deferred(function (n) {
                                t[0][3].add(a(0, n, v(i) ? i : _, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : _)), t[2][3].add(a(0, n, v(r) ? r : H))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? E.extend(e, i) : i
                        }
                    },
                    o = {};
                return E.each(t, function (e, n) {
                    var a = n[2],
                        s = n[5];
                    i[n[1]] = a.add, s && a.add(function () {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = c.call(arguments),
                    o = E.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, i[e] = 1 < arguments.length ? c.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (q(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                for (; n--;) q(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && G.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var K = E.Deferred();

        function X() {
            a.removeEventListener("DOMContentLoaded", X), n.removeEventListener("load", X), E.ready()
        }
        E.fn.ready = function (e) {
            return K.then(e).catch(function (e) {
                E.readyException(e)
            }), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || K.resolveWith(a, [E])
            }
        }), E.ready.then = K.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(E.ready) : (a.addEventListener("DOMContentLoaded", X), n.addEventListener("load", X));
        var V = function (e, t, n, r, i, o, a) {
                var s = 0,
                    c = e.length,
                    u = null == n;
                if ("object" === w(n))
                    for (s in i = !0, n) V(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, v(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(E(e), n)
                    })), t))
                    for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
            },
            W = /^-ms-/,
            z = /-([a-z])/g;

        function Q(e, t) {
            return t.toUpperCase()
        }

        function Y(e) {
            return e.replace(W, "ms-").replace(z, Q)
        }
        var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Z() {
            this.expando = E.expando + Z.uid++
        }
        Z.uid = 1, Z.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[Y(t)] = n;
                else
                    for (r in t) i[Y(r)] = t[r];
                return i
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(F) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var $ = new Z,
            ee = new Z,
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;

        function re(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : te.test(i) ? JSON.parse(i) : i)
                    } catch (e) {}
                    ee.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function (e) {
                return ee.hasData(e) || $.hasData(e)
            },
            data: function (e, t, n) {
                return ee.access(e, t, n)
            },
            removeData: function (e, t) {
                ee.remove(e, t)
            },
            _data: function (e, t, n) {
                return $.access(e, t, n)
            },
            _removeData: function (e, t) {
                $.remove(e, t)
            }
        }), E.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = ee.get(o), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), re(o, r, i[r]));
                        $.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ee.set(this, e)
                }) : V(this, function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = ee.get(o, e)) ? n : void 0 !== (n = re(o, e)) ? n : void 0;
                    this.each(function () {
                        ee.set(this, e, t)
                    })
                }, null, t, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    ee.remove(this, e)
                })
            }
        }), E.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = $.get(e, t), n && (!r || Array.isArray(n) ? r = $.access(e, t, E.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                    E.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return $.get(e, n) || $.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                        $.remove(e, [t + "queue", n])
                    })
                })
            }
        }), E.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1,
                    i = E.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = $.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            se = a.documentElement,
            ce = function (e) {
                return E.contains(e.ownerDocument, e)
            },
            ue = {
                composed: !0
            };
        se.getRootNode && (ce = function (e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
        });
        var le = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ce(e) && "none" === E.css(e, "display")
            },
            de = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };

        function pe(e, t, n, r) {
            var i, o, a = 20,
                s = r ? function () {
                    return r.cur()
                } : function () {
                    return E.css(e, t, "")
                },
                c = s(),
                u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (E.cssNumber[t] || "px" !== u && +c) && oe.exec(E.css(e, t));
            if (l && l[3] !== u) {
                for (c /= 2, u = u || l[3], l = +c || 1; a--;) E.style(e, t, l + u), (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0), l /= o;
                l *= 2, E.style(e, t, l + u), n = n || []
            }
            return n && (l = +l || +c || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = i)), i
        }
        var fe = {};

        function he(e, t) {
            for (var n, r, i, o, a, s, c, u = [], l = 0, d = e.length; l < d; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (u[l] = $.get(r, "display") || null, u[l] || (r.style.display = "")), "" === r.style.display && le(r) && (u[l] = (c = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (c = fe[s]) || (o = a.body.appendChild(a.createElement(s)), c = E.css(o, "display"), o.parentNode.removeChild(o), "none" === c && (c = "block"), fe[s] = c)))) : "none" !== n && (u[l] = "none", $.set(r, "display", n)));
            for (l = 0; l < d; l++) null != u[l] && (e[l].style.display = u[l]);
            return e
        }
        E.fn.extend({
            show: function () {
                return he(this, !0)
            },
            hide: function () {
                return he(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    le(this) ? E(this).show() : E(this).hide()
                })
            }
        });
        var me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i,
            ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function xe(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? E.merge([e], n) : n
        }

        function Ae(e, t) {
            for (var n = 0, r = e.length; n < r; n++) $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
        }
        ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
        var be, we, Te = /<|&#?\w+;/;

        function Ee(e, t, n, r, i) {
            for (var o, a, s, c, u, l, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
                    else if (Te.test(o)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(o) || ["", ""])[1].toLowerCase(), c = ve[s] || ve._default, a.innerHTML = c[1] + E.htmlPrefilter(o) + c[2], l = c[0]; l--;) a = a.lastChild;
                E.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
            } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; o = p[f++];)
                if (r && -1 < E.inArray(o, r)) i && i.push(o);
                else if (u = ce(o), a = xe(d.appendChild(o), "script"), u && Ae(a), n)
                for (l = 0; o = a[l++];) ye.test(o.type || "") && n.push(o);
            return d
        }
        be = a.createDocumentFragment().appendChild(a.createElement("div")), (we = a.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), be.appendChild(we), y.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
        var Se = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ke = /^([^.]*)(?:\.(.+)|)/;

        function Re() {
            return !0
        }

        function Le() {
            return !1
        }

        function Oe(e, t) {
            return e === function () {
                try {
                    return a.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Ne(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Le;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function (e) {
                return E().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
                E.event.add(this, t, i, r, n)
            })
        }

        function Me(e, t, n) {
            n ? ($.set(e, t, !1), E.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                    var r, i, o = $.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(E.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = c.call(arguments), $.set(this, t, o), r = n(this, t), this[t](), o !== (i = $.get(this, t)) || r ? $.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && ($.set(this, t, {
                        value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === $.get(e, t) && E.event.add(e, t, Re)
        }
        E.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, c, u, l, d, p, f, h, m, g = $.get(e);
                if (g)
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(se, i), n.guid || (n.guid = E.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                            return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(F) || [""]).length; u--;) f = m = (s = ke.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = E.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = E.event.special[f] || {}, l = E.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = c[f]) || ((p = c[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), E.event.global[f] = !0)
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, c, u, l, d, p, f, h, m, g = $.hasData(e) && $.get(e);
                if (g && (c = g.events)) {
                    for (u = (t = (t || "").match(F) || [""]).length; u--;)
                        if (f = m = (s = ke.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = E.event.special[f] || {}, p = c[f = (r ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, d.remove && d.remove.call(e, l));
                            a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || E.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) E.event.remove(e, f + t[u], n, r, !0);
                    E.isEmptyObject(c) && $.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, r, i, o, a, s = E.event.fix(e),
                    c = new Array(arguments.length),
                    u = ($.get(this, "events") || {})[s.type] || [],
                    l = E.event.special[s.type] || {};
                for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = E.event.handlers.call(this, s, u), t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a, s = [],
                    c = t.delegateCount,
                    u = e.target;
                if (c && u.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length), a[i] && o.push(r);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        } return u = this, c < t.length && s.push({
                    elem: u,
                    handlers: t.slice(c)
                }), s
            },
            addProp: function (e, t) {
                Object.defineProperty(E.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && N(t, "input") && Me(t, "click", Re), !1
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && N(t, "input") && Me(t, "click"), !0
                    },
                    _default: function (e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && N(t, "input") && $.get(t, "click") || N(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Re : Le, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Le,
            isPropagationStopped: Le,
            isImmediatePropagationStopped: Le,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Re, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Re, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            E.event.special[e] = {
                setup: function () {
                    return Me(this, e, Oe), !1
                },
                trigger: function () {
                    return Me(this, e), !0
                },
                delegateType: t
            }
        }), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            E.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === this || E.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), E.fn.extend({
            on: function (e, t, n, r) {
                return Ne(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Le), this.each(function () {
                    E.event.remove(this, e, n, t)
                })
            }
        });
        var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Be = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ue(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function je(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Fe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function _e(e, t) {
            var n, r, i, o, a, s, c, u;
            if (1 === t.nodeType) {
                if ($.hasData(e) && (o = $.access(e), a = $.set(t, o), u = o.events))
                    for (i in delete a.handle, a.events = {}, u)
                        for (n = 0, r = u[i].length; n < r; n++) E.event.add(t, i, u[i][n]);
                ee.hasData(e) && (s = ee.access(e), c = E.extend({}, s), ee.set(t, c))
            }
        }

        function He(e, t, n, r) {
            t = u.apply([], t);
            var i, o, a, s, c, l, d = 0,
                p = e.length,
                f = p - 1,
                h = t[0],
                m = v(h);
            if (m || 1 < p && "string" == typeof h && !y.checkClone && De.test(h)) return e.each(function (i) {
                var o = e.eq(i);
                m && (t[0] = h.call(this, i, o.html())), He(o, t, n, r)
            });
            if (p && (o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = (a = E.map(xe(i, "script"), je)).length; d < p; d++) c = i, d !== f && (c = E.clone(c, !0, !0), s && E.merge(a, xe(c, "script"))), n.call(e[d], c, d);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, E.map(a, Fe), d = 0; d < s; d++) c = a[d], ye.test(c.type || "") && !$.access(c, "globalEval") && E.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : b(c.textContent.replace(Ie, ""), c, l))
            }
            return e
        }

        function qe(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(xe(r)), r.parentNode && (n && ce(r) && Ae(xe(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function (e) {
                return e.replace(Pe, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var r, i, o, a, s, c, u, l = e.cloneNode(!0),
                    d = ce(e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                    for (a = xe(l), r = 0, i = (o = xe(e)).length; r < i; r++) s = o[r], "input" === (u = (c = a[r]).nodeName.toLowerCase()) && me.test(s.type) ? c.checked = s.checked : "input" !== u && "textarea" !== u || (c.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || xe(e), a = a || xe(l), r = 0, i = o.length; r < i; r++) _e(o[r], a[r]);
                    else _e(e, l);
                return 0 < (a = xe(l, "script")).length && Ae(a, !d && xe(e, "script")), l
            },
            cleanData: function (e) {
                for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (J(n)) {
                        if (t = n[$.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[$.expando] = void 0
                        }
                        n[ee.expando] && (n[ee.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function (e) {
                return qe(this, e, !0)
            },
            remove: function (e) {
                return qe(this, e)
            },
            text: function (e) {
                return V(this, function (e) {
                    return void 0 === e ? E.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return He(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ue(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ue(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(xe(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return E.clone(this, e, t)
                })
            },
            html: function (e) {
                return V(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Be.test(e) && !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(xe(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return He(this, arguments, function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 && (E.cleanData(xe(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            E.fn[e] = function (e) {
                for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), E(i[a])[t](n), l.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ge = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Ke = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Xe = new RegExp(ae.join("|"), "i");

        function Ve(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || Ke(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ce(e) || (a = E.style(e, t)), !y.pixelBoxStyles() && Ge.test(a) && Xe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function We(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function () {
            function e() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(u).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top, c = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), se.removeChild(u), l = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, s, c, u = a.createElement("div"),
                l = a.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(y, {
                boxSizingReliable: function () {
                    return e(), i
                },
                pixelBoxStyles: function () {
                    return e(), s
                },
                pixelPosition: function () {
                    return e(), r
                },
                reliableMarginLeft: function () {
                    return e(), c
                },
                scrollboxSize: function () {
                    return e(), o
                }
            }))
        }();
        var ze = ["Webkit", "Moz", "ms"],
            Qe = a.createElement("div").style,
            Ye = {};

        function Je(e) {
            return E.cssProps[e] || Ye[e] || (e in Qe ? e : Ye[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                    if ((e = ze[n] + t) in Qe) return e
            }(e) || e)
        }
        var Ze = /^(none|table(?!-c[ea]).+)/,
            $e = /^--/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function nt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function rt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (c += E.css(e, n + ae[a], !0, i)), r ? ("content" === n && (c -= E.css(e, "padding" + ae[a], !0, i)), "margin" !== n && (c -= E.css(e, "border" + ae[a] + "Width", !0, i))) : (c += E.css(e, "padding" + ae[a], !0, i), "padding" !== n ? c += E.css(e, "border" + ae[a] + "Width", !0, i) : s += E.css(e, "border" + ae[a] + "Width", !0, i));
            return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5)) || 0), c
        }

        function it(e, t, n) {
            var r = Ke(e),
                i = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                o = i,
                a = Ve(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ge.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = Y(t),
                        c = $e.test(t),
                        u = e.style;
                    if (c || (t = Je(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    "string" == (o = typeof n) && (i = oe.exec(n)) && i[1] && (n = pe(e, t, i), o = "number"), null != n && n == n && ("number" !== o || c || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = Y(t);
                return $e.test(t) || (t = Je(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ve(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), E.each(["height", "width"], function (e, t) {
            E.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : de(e, et, function () {
                        return it(e, t, r)
                    })
                },
                set: function (e, n, r) {
                    var i, o = Ke(e),
                        a = !y.scrollboxSize() && "absolute" === o.position,
                        s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                        c = r ? rt(e, t, r, s, o) : 0;
                    return s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), c && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), nt(0, n, c)
                }
            }
        }), E.cssHooks.marginLeft = We(y.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - de(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            E.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (E.cssHooks[e + t].set = nt)
        }), E.fn.extend({
            css: function (e, t) {
                return V(this, function (e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Ke(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((E.Tween = ot).prototype = {
            constructor: ot,
            init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = ot.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
            }
        }).init.prototype = ot.prototype, (ot.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = ot.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = ot.prototype.init, E.fx.step = {};
        var at, st, ct, ut, lt = /^(?:toggle|show|hide)$/,
            dt = /queueHooks$/;

        function pt() {
            st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(pt) : n.setTimeout(pt, E.fx.interval), E.fx.tick())
        }

        function ft() {
            return n.setTimeout(function () {
                at = void 0
            }), at = Date.now()
        }

        function ht(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function mt(e, t, n) {
            for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function gt(e, t, n) {
            var r, i, o = 0,
                a = gt.prefilters.length,
                s = E.Deferred().always(function () {
                    delete c.elem
                }),
                c = function () {
                    if (i) return !1;
                    for (var t = at || ft(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: at || ft(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = E.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (function (e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(l, u.opts.specialEasing); o < a; o++)
                if (r = gt.prefilters[o].call(u, e, l, u.opts)) return v(r.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return E.map(l, mt, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(c, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        E.Animation = E.extend(gt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return pe(n.elem, e, oe.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                v(e) ? (t = e, e = ["*"]) : e = e.match(F);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var r, i, o, a, s, c, u, l, d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && le(e),
                    g = $.get(e, "fxshow");
                for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function () {
                        p.always(function () {
                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], lt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            m = !0
                        }
                        f[r] = g && g[r] || E.style(e, r)
                    } if ((c = !E.isEmptyObject(t)) || !E.isEmptyObject(f))
                    for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = $.get(e, "display")), "none" === (l = E.css(e, "display")) && (u ? l = u : (he([e], !0), u = e.style.display || u, l = E.css(e, "display"), he([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === E.css(e, "float") && (c || (p.done(function () {
                            h.display = u
                        }), null == u && (l = h.display, u = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), c = !1, f) c || (g ? "hidden" in g && (m = g.hidden) : g = $.access(e, "fxshow", {
                        display: u
                    }), o && (g.hidden = !m), m && he([e], !0), p.done(function () {
                        for (r in m || he([e]), $.remove(e, "fxshow"), f) E.style(e, r, f[r])
                    })), c = mt(m ? g[r] : 0, r, p), r in g || (g[r] = c.start, m && (c.end = c.start, c.start = 0))
            }],
            prefilter: function (e, t) {
                t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
            }
        }), E.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || v(e) && e,
                duration: e,
                easing: n && t || t && !v(t) && t
            };
            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
            }, r
        }, E.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = E.isEmptyObject(e),
                    o = E.speed(t, n, r),
                    a = function () {
                        var t = gt(this, E.extend({}, e), o);
                        (i || $.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = E.timers,
                        a = $.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && dt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || E.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = $.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = E.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), E.each(["toggle", "show", "hide"], function (e, t) {
            var n = E.fn[t];
            E.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, r, i)
            }
        }), E.each({
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            E.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), E.timers = [], E.fx.tick = function () {
            var e, t = 0,
                n = E.timers;
            for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), at = void 0
        }, E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start()
        }, E.fx.interval = 13, E.fx.start = function () {
            st || (st = !0, pt())
        }, E.fx.stop = function () {
            st = null
        }, E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, E.fn.delay = function (e, t) {
            return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, ct = a.createElement("input"), ut = a.createElement("select").appendChild(a.createElement("option")), ct.type = "checkbox", y.checkOn = "" !== ct.value, y.optSelected = ut.selected, (ct = a.createElement("input")).value = "t", ct.type = "radio", y.radioValue = "t" === ct.value;
        var yt, vt = E.expr.attrHandle;
        E.fn.extend({
            attr: function (e, t) {
                return V(this, E.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    E.removeAttr(this, e)
                })
            }
        }), E.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0,
                    i = t && t.match(F);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), yt = {
            set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = vt[t] || E.find.attr;
            vt[t] = function (e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i
            }
        });
        var xt = /^(?:input|select|textarea|button)$/i,
            At = /^(?:a|area)$/i;

        function bt(e) {
            return (e.match(F) || []).join(" ")
        }

        function wt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Tt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
        }
        E.fn.extend({
            prop: function (e, t) {
                return V(this, E.prop, e, t, 1 < arguments.length)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[E.propFix[e] || e]
                })
            }
        }), E.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || (E.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            E.propFix[this.toLowerCase()] = this
        }), E.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s, c = 0;
                if (v(e)) return this.each(function (t) {
                    E(this).addClass(e.call(this, t, wt(this)))
                });
                if ((t = Tt(e)).length)
                    for (; n = this[c++];)
                        if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = bt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, i, o, a, s, c = 0;
                if (v(e)) return this.each(function (t) {
                    E(this).removeClass(e.call(this, t, wt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = Tt(e)).length)
                    for (; n = this[c++];)
                        if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                            for (a = 0; o = t[a++];)
                                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                            i !== (s = bt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
                    E(this).toggleClass(e.call(this, n, wt(this), t), t)
                }) : this.each(function () {
                    var t, i, o, a;
                    if (r)
                        for (i = 0, o = E(this), a = Tt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = wt(this)) && $.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + bt(wt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var Et = /\r/g;
        E.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = v(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Et, "") : null == n ? "" : n : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : bt(E.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            c = a ? o + 1 : i.length;
                        for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), E.each(["radio", "checkbox"], function () {
            E.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
                }
            }, y.checkOn || (E.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), y.focusin = "onfocusin" in n;
        var St = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function (e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function (e, t, r, i) {
                var o, s, c, u, l, d, p, f, m = [r || a],
                    g = h.call(e, "type") ? e.type : e,
                    y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = f = c = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(g + E.event.triggered) && (-1 < g.indexOf(".") && (g = (y = g.split(".")).shift(), y.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), p = E.event.special[g] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                    if (!i && !p.noBubble && !x(r)) {
                        for (u = p.delegateType || g, St.test(u + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), c = s;
                        c === (r.ownerDocument || a) && m.push(c.defaultView || c.parentWindow || n)
                    }
                    for (o = 0;
                        (s = m[o++]) && !e.isPropagationStopped();) f = s, e.type = 1 < o ? u : p.bindType || g, (d = ($.get(s, "events") || {})[e.type] && $.get(s, "handle")) && d.apply(s, t), (d = l && s[l]) && d.apply && J(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = g, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !J(r) || l && v(r[g]) && !x(r) && ((c = r[l]) && (r[l] = null), E.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, Ct), r[g](), e.isPropagationStopped() && f.removeEventListener(g, Ct), E.event.triggered = void 0, c && (r[l] = c)), e.result
                }
            },
            simulate: function (e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), y.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                E.event.simulate(t, e.target, E.event.fix(e))
            };
            E.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        i = $.access(r, t);
                    i || r.addEventListener(e, n, !0), $.access(r, t, (i || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        i = $.access(r, t) - 1;
                    i ? $.access(r, t, i) : (r.removeEventListener(e, n, !0), $.remove(r, t))
                }
            }
        });
        var kt = n.location,
            Rt = Date.now(),
            Lt = /\?/;
        E.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
        };
        var Ot = /\[\]$/,
            Nt = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;

        function Bt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) E.each(t, function (t, i) {
                n || Ot.test(e) ? r(e, i) : Bt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== w(t)) r(e, t);
            else
                for (i in t) Bt(e + "[" + i + "]", t[i], n, r)
        }
        E.param = function (e, t) {
            var n, r = [],
                i = function (e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (n in e) Bt(n, e[n], t, i);
            return r.join("&")
        }, E.fn.extend({
            serialize: function () {
                return E.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Pt.test(this.nodeName) && !Mt.test(e) && (this.checked || !me.test(e))
                }).map(function (e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g,
            It = /#.*$/,
            Ut = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ft = /^(?:GET|HEAD)$/,
            _t = /^\/\//,
            Ht = {},
            qt = {},
            Gt = "*/".concat("*"),
            Kt = a.createElement("a");

        function Xt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(F) || [];
                if (v(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Vt(e, t, n, r) {
            var i = {},
                o = e === qt;

            function a(s) {
                var c;
                return i[s] = !0, E.each(e[s] || [], function (e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || o || i[u] ? o ? !(c = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                }), c
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function Wt(e, t) {
            var n, r, i = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e
        }
        Kt.href = kt.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Gt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, E.ajaxSettings), t) : Wt(E.ajaxSettings, e)
            },
            ajaxPrefilter: Xt(Ht),
            ajaxTransport: Xt(qt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, s, c, u, l, d, p, f, h = E.ajaxSetup({}, t),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                    y = E.Deferred(),
                    v = E.Callbacks("once memory"),
                    x = h.statusCode || {},
                    A = {},
                    b = {},
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (l) {
                                if (!s)
                                    for (s = {}; t = jt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return l ? o : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == l && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, A[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == l && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (l) T.always(e[T.status]);
                                else
                                    for (t in e) x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || w;
                            return r && r.abort(t), S(0, t), this
                        }
                    };
                if (y.promise(T), h.url = ((e || h.url || kt.href) + "").replace(_t, kt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(F) || [""], null == h.crossDomain) {
                    u = a.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = Kt.protocol + "//" + Kt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Vt(Ht, h, t, T), l) return T;
                for (p in (d = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), i = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (f = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Lt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Ut, "$1"), f = (Lt.test(i) ? "&" : "?") + "_=" + Rt++ + f), h.url = i + f), h.ifModified && (E.lastModified[i] && T.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, T, h) || l)) return T.abort();
                if (w = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), r = Vt(qt, h, t, T)) {
                    if (T.readyState = 1, d && g.trigger("ajaxSend", [T, h]), l) return T;
                    h.async && 0 < h.timeout && (c = n.setTimeout(function () {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        l = !1, r.send(A, S)
                    } catch (e) {
                        if (l) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, a, s) {
                    var u, p, f, A, b, w = t;
                    l || (l = !0, c && n.clearTimeout(c), r = void 0, o = s || "", T.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, a && (A = function (e, t, n) {
                        for (var r, i, o, a, s = e.contents, c = e.dataTypes;
                            "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    c.unshift(i);
                                    break
                                } if (c[0] in n) o = c[0];
                        else {
                            for (i in n) {
                                if (!c[0] || e.converters[i + " " + c[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== c[0] && c.unshift(o), n[o]
                    }(h, T, a)), A = function (e, t, n, r) {
                        var i, o, a, s, c, u = {},
                            l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                        for (o = l.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
                                if ("*" === o) o = c;
                                else if ("*" !== c && c !== o) {
                            if (!(a = u[c + " " + o] || u["* " + o]))
                                for (i in u)
                                    if ((s = i.split(" "))[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], l.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + c + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, A, T, u), u ? (h.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (E.lastModified[i] = b), (b = T.getResponseHeader("etag")) && (E.etag[i] = b)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = A.state, p = A.data, u = !(f = A.error))) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || w) + "", u ? y.resolveWith(m, [p, w, T]) : y.rejectWith(m, [T, w, f]), T.statusCode(x), x = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? p : f]), v.fireWith(m, [T, w]), d && (g.trigger("ajaxComplete", [T, h]), --E.active || E.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], function (e, t) {
            E[t] = function (e, n, r, i) {
                return v(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, E.isPlainObject(e) && e))
            }
        }), E._evalUrl = function (e, t) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (e) {
                    E.globalEval(e, t)
                }
            })
        }, E.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return v(e) ? this.each(function (t) {
                    E(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = E(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                    E(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    E(this).replaceWith(this.childNodes)
                }), this
            }
        }), E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var zt = {
                0: 200,
                1223: 204
            },
            Qt = E.ajaxSettings.xhr();
        y.cors = !!Qt && "withCredentials" in Qt, y.ajax = Qt = !!Qt, E.ajaxTransport(function (e) {
            var t, r;
            if (y.cors || Qt && !e.crossDomain) return {
                send: function (i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (i) {
                        if (t) throw i
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), E.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (r, i) {
                    t = E("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        });
        var Yt, Jt = [],
            Zt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Jt.pop() || E.expando + "_" + Rt++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || E.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? E(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), a && v(o) && o(a[0]), a = o = void 0
            }), "script"
        }), y.createHTMLDocument = ((Yt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), E.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = !n && [], (i = M.exec(e)) ? [t.createElement(i[1])] : (i = Ee([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o
        }, E.fn.load = function (e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = bt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            E.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), E.expr.pseudos.animated = function (e) {
            return E.grep(E.timers, function (t) {
                return e === t.elem
            }).length
        }, E.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, c, u = E.css(e, "position"),
                    l = E(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), s = l.offset(), o = E.css(e, "top"), c = E.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + c).indexOf("auto") ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), v(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : l.css(d)
            }
        }, E.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    E.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - E.css(r, "marginTop", !0),
                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                    return e || se
                })
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function (r) {
                return V(this, function (e, r, i) {
                    var o;
                    if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), E.each(["top", "left"], function (e, t) {
            E.cssHooks[t] = We(y.pixelPosition, function (e, n) {
                if (n) return n = Ve(e, t), Ge.test(n) ? E(e).position()[t] + "px" : n
            })
        }), E.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            E.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                E.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return V(this, function (t, n, i) {
                        var o;
                        return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            E.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), E.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), E.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = c.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i
        }, E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = N, E.isFunction = v, E.isWindow = x, E.camelCase = Y, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function () {
            return E
        }.apply(t, [])) || (e.exports = r);
        var $t = n.jQuery,
            en = n.$;
        return E.noConflict = function (e) {
            return n.$ === E && (n.$ = en), e && n.jQuery === E && (n.jQuery = $t), E
        }, i || (n.jQuery = n.$ = E), E
    })
}, function (e, t, n) {
    (function (t) {
        var n;
        e.exports = function e(t, r, i) {
            function o(s, c) {
                if (!r[s]) {
                    if (!t[s]) {
                        if (!c && ("function" == typeof n && n)) return n(s, !0);
                        if (a) return a(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var l = r[s] = {
                        exports: {}
                    };
                    t[s][0].call(l.exports, function (e) {
                        return o(t[s][1][e] || e)
                    }, l, l.exports, e, t, r, i)
                }
                return r[s].exports
            }
            for (var a = "function" == typeof n && n, s = 0; s < i.length; s++) o(i[s]);
            return o
        }({
            1: [function (e, t, n) {
                function r(e) {
                    this.name = "RavenConfigError", this.message = e
                }
                r.prototype = new Error, r.prototype.constructor = r, t.exports = r
            }, {}],
            2: [function (e, t, n) {
                var r = e(5);
                t.exports = {
                    wrapMethod: function (e, t, n) {
                        var i = e[t],
                            o = e;
                        if (t in e) {
                            var a = "warn" === t ? "warning" : t;
                            e[t] = function () {
                                var e = [].slice.call(arguments),
                                    s = r.safeJoin(e, " "),
                                    c = {
                                        level: a,
                                        logger: "console",
                                        extra: {
                                            arguments: e
                                        }
                                    };
                                "assert" === t ? !1 === e[0] && (s = "Assertion failed: " + (r.safeJoin(e.slice(1), " ") || "console.assert"), c.extra.arguments = e.slice(1), n && n(s, c)) : n && n(s, c), i && Function.prototype.apply.call(i, o, e)
                            }
                        }
                    }
                }
            }, {
                5: 5
            }],
            3: [function (e, n, r) {
                (function (t) {
                    function r() {
                        return +new Date
                    }

                    function i(e, t) {
                        return v(t) ? function (n) {
                            return t(n, e)
                        } : t
                    }

                    function o() {
                        for (var e in this.a = !("object" != typeof JSON || !JSON.stringify), this.b = !y(K), this.c = !y(X), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = null, this.j = {}, this.k = {
                                release: G.SENTRY_RELEASE && G.SENTRY_RELEASE.id,
                                logger: "javascript",
                                ignoreErrors: [],
                                ignoreUrls: [],
                                whitelistUrls: [],
                                includePaths: [],
                                headers: null,
                                collectWindowErrors: !0,
                                captureUnhandledRejections: !0,
                                maxMessageLength: 0,
                                maxUrlLength: 250,
                                stackTraceLimit: 50,
                                autoBreadcrumbs: !0,
                                instrument: !0,
                                sampleRate: 1,
                                sanitizeKeys: []
                            }, this.l = {
                                method: "POST",
                                keepalive: !0,
                                referrerPolicy: I() ? "origin" : ""
                            }, this.m = 0, this.n = !1, this.o = Error.stackTraceLimit, this.p = G.console || {}, this.q = {}, this.r = [], this.s = r(), this.t = [], this.u = [], this.v = null, this.w = G.location, this.x = this.w && this.w.href, this.y(), this.p) this.q[e] = this.p[e]
                    }
                    var a = e(6),
                        s = e(7),
                        c = e(8),
                        u = e(1),
                        l = e(5),
                        d = l.isErrorEvent,
                        p = l.isDOMError,
                        f = l.isDOMException,
                        h = l.isError,
                        m = l.isObject,
                        g = l.isPlainObject,
                        y = l.isUndefined,
                        v = l.isFunction,
                        x = l.isString,
                        A = l.isArray,
                        b = l.isEmptyObject,
                        w = l.each,
                        T = l.objectMerge,
                        E = l.truncate,
                        S = l.objectFrozen,
                        C = l.hasKey,
                        k = l.joinRegExp,
                        R = l.urlencode,
                        L = l.uuid4,
                        O = l.htmlTreeAsString,
                        N = l.isSameException,
                        M = l.isSameStacktrace,
                        P = l.parseUrl,
                        B = l.fill,
                        D = l.supportsFetch,
                        I = l.supportsReferrerPolicy,
                        U = l.serializeKeysForMessage,
                        j = l.serializeException,
                        F = l.sanitize,
                        _ = e(2).wrapMethod,
                        H = "source protocol user pass host port path".split(" "),
                        q = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                        G = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                        K = G.document,
                        X = G.navigator;
                    o.prototype = {
                        VERSION: "3.26.4",
                        debug: !1,
                        TraceKit: a,
                        config: function (e, t) {
                            var n = this;
                            if (n.g) return this.z("error", "Error: Raven has already been configured"), n;
                            if (!e) return n;
                            var r = n.k;
                            t && w(t, function (e, t) {
                                "tags" === e || "extra" === e || "user" === e ? n.j[e] = t : r[e] = t
                            }), n.setDSN(e), r.ignoreErrors.push(/^Script error\.?$/), r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), r.ignoreErrors = k(r.ignoreErrors), r.ignoreUrls = !!r.ignoreUrls.length && k(r.ignoreUrls), r.whitelistUrls = !!r.whitelistUrls.length && k(r.whitelistUrls), r.includePaths = k(r.includePaths), r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
                            var i = {
                                    xhr: !0,
                                    console: !0,
                                    dom: !0,
                                    location: !0,
                                    sentry: !0
                                },
                                o = r.autoBreadcrumbs;
                            "[object Object]" === {}.toString.call(o) ? o = T(i, o) : !1 !== o && (o = i), r.autoBreadcrumbs = o;
                            var s = {
                                    tryCatch: !0
                                },
                                c = r.instrument;
                            return "[object Object]" === {}.toString.call(c) ? c = T(s, c) : !1 !== c && (c = s), r.instrument = c, a.collectWindowErrors = !!r.collectWindowErrors, n
                        },
                        install: function () {
                            var e = this;
                            return e.isSetup() && !e.n && (a.report.subscribe(function () {
                                e.A.apply(e, arguments)
                            }), e.k.captureUnhandledRejections && e.B(), e.C(), e.k.instrument && e.k.instrument.tryCatch && e.D(), e.k.autoBreadcrumbs && e.E(), e.F(), e.n = !0), Error.stackTraceLimit = e.k.stackTraceLimit, this
                        },
                        setDSN: function (e) {
                            var t = this,
                                n = t.G(e),
                                r = n.path.lastIndexOf("/"),
                                i = n.path.substr(1, r);
                            t.H = e, t.h = n.user, t.I = n.pass && n.pass.substr(1), t.i = n.path.substr(r + 1), t.g = t.J(n), t.K = t.g + "/" + i + "api/" + t.i + "/store/", this.y()
                        },
                        context: function (e, t, n) {
                            return v(e) && (n = t || [], t = e, e = {}), this.wrap(e, t).apply(this, n)
                        },
                        wrap: function (e, t, n) {
                            function r() {
                                var r = [],
                                    o = arguments.length,
                                    a = !e || e && !1 !== e.deep;
                                for (n && v(n) && n.apply(this, arguments); o--;) r[o] = a ? i.wrap(e, arguments[o]) : arguments[o];
                                try {
                                    return t.apply(this, r)
                                } catch (t) {
                                    throw i.L(), i.captureException(t, e), t
                                }
                            }
                            var i = this;
                            if (y(t) && !v(e)) return e;
                            if (v(e) && (t = e, e = void 0), !v(t)) return t;
                            try {
                                if (t.M) return t;
                                if (t.N) return t.N
                            } catch (e) {
                                return t
                            }
                            for (var o in t) C(t, o) && (r[o] = t[o]);
                            return r.prototype = t.prototype, t.N = r, r.M = !0, r.O = t, r
                        },
                        uninstall: function () {
                            return a.report.uninstall(), this.P(), this.Q(), this.R(), this.S(), Error.stackTraceLimit = this.o, this.n = !1, this
                        },
                        T: function (e) {
                            this.z("debug", "Raven caught unhandled promise rejection:", e), this.captureException(e.reason, {
                                mechanism: {
                                    type: "onunhandledrejection",
                                    handled: !1
                                }
                            })
                        },
                        B: function () {
                            return this.T = this.T.bind(this), G.addEventListener && G.addEventListener("unhandledrejection", this.T), this
                        },
                        P: function () {
                            return G.removeEventListener && G.removeEventListener("unhandledrejection", this.T), this
                        },
                        captureException: function (e, t) {
                            if (t = T({
                                    trimHeadFrames: 0
                                }, t || {}), d(e) && e.error) e = e.error;
                            else {
                                if (p(e) || f(e)) {
                                    var n = e.name || (p(e) ? "DOMError" : "DOMException"),
                                        r = e.message ? n + ": " + e.message : n;
                                    return this.captureMessage(r, T(t, {
                                        stacktrace: !0,
                                        trimHeadFrames: t.trimHeadFrames + 1
                                    }))
                                }
                                if (h(e)) e = e;
                                else {
                                    if (!g(e)) return this.captureMessage(e, T(t, {
                                        stacktrace: !0,
                                        trimHeadFrames: t.trimHeadFrames + 1
                                    }));
                                    t = this.U(t, e), e = new Error(t.message)
                                }
                            }
                            this.d = e;
                            try {
                                var i = a.computeStackTrace(e);
                                this.V(i, t)
                            } catch (t) {
                                if (e !== t) throw t
                            }
                            return this
                        },
                        U: function (e, t) {
                            var n = Object.keys(t).sort(),
                                r = T(e, {
                                    message: "Non-Error exception captured with keys: " + U(n),
                                    fingerprint: [c(n)],
                                    extra: e.extra || {}
                                });
                            return r.extra.W = j(t), r
                        },
                        captureMessage: function (e, t) {
                            if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(e)) {
                                var n, r = T({
                                    message: e += ""
                                }, t = t || {});
                                try {
                                    throw new Error(e)
                                } catch (e) {
                                    n = e
                                }
                                n.name = null;
                                var i = a.computeStackTrace(n),
                                    o = A(i.stack) && i.stack[1];
                                o && "Raven.captureException" === o.func && (o = i.stack[2]);
                                var s = o && o.url || "";
                                if ((!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(s)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(s))) {
                                    if (this.k.stacktrace || t.stacktrace || "" === r.message) {
                                        r.fingerprint = null == r.fingerprint ? e : r.fingerprint, (t = T({
                                            trimHeadFrames: 0
                                        }, t)).trimHeadFrames += 1;
                                        var c = this.X(i, t);
                                        r.stacktrace = {
                                            frames: c.reverse()
                                        }
                                    }
                                    return r.fingerprint && (r.fingerprint = A(r.fingerprint) ? r.fingerprint : [r.fingerprint]), this.Y(r), this
                                }
                            }
                        },
                        captureBreadcrumb: function (e) {
                            var t = T({
                                timestamp: r() / 1e3
                            }, e);
                            if (v(this.k.breadcrumbCallback)) {
                                var n = this.k.breadcrumbCallback(t);
                                if (m(n) && !b(n)) t = n;
                                else if (!1 === n) return this
                            }
                            return this.u.push(t), this.u.length > this.k.maxBreadcrumbs && this.u.shift(), this
                        },
                        addPlugin: function (e) {
                            var t = [].slice.call(arguments, 1);
                            return this.r.push([e, t]), this.n && this.F(), this
                        },
                        setUserContext: function (e) {
                            return this.j.user = e, this
                        },
                        setExtraContext: function (e) {
                            return this.Z("extra", e), this
                        },
                        setTagsContext: function (e) {
                            return this.Z("tags", e), this
                        },
                        clearContext: function () {
                            return this.j = {}, this
                        },
                        getContext: function () {
                            return JSON.parse(s(this.j))
                        },
                        setEnvironment: function (e) {
                            return this.k.environment = e, this
                        },
                        setRelease: function (e) {
                            return this.k.release = e, this
                        },
                        setDataCallback: function (e) {
                            var t = this.k.dataCallback;
                            return this.k.dataCallback = i(t, e), this
                        },
                        setBreadcrumbCallback: function (e) {
                            var t = this.k.breadcrumbCallback;
                            return this.k.breadcrumbCallback = i(t, e), this
                        },
                        setShouldSendCallback: function (e) {
                            var t = this.k.shouldSendCallback;
                            return this.k.shouldSendCallback = i(t, e), this
                        },
                        setTransport: function (e) {
                            return this.k.transport = e, this
                        },
                        lastException: function () {
                            return this.d
                        },
                        lastEventId: function () {
                            return this.f
                        },
                        isSetup: function () {
                            return !(!this.a || !this.g && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this.z("error", "Error: Raven has not been configured.")), 1))
                        },
                        afterLoad: function () {
                            var e = G.RavenConfig;
                            e && this.config(e.dsn, e.config).install()
                        },
                        showReportDialog: function (e) {
                            if (K) {
                                if (!(e = Object.assign({
                                        eventId: this.lastEventId(),
                                        dsn: this.H,
                                        user: this.j.user || {}
                                    }, e)).eventId) throw new u("Missing eventId");
                                if (!e.dsn) throw new u("Missing DSN");
                                var t = encodeURIComponent,
                                    n = [];
                                for (var r in e)
                                    if ("user" === r) {
                                        var i = e.user;
                                        i.name && n.push("name=" + t(i.name)), i.email && n.push("email=" + t(i.email))
                                    } else n.push(t(r) + "=" + t(e[r]));
                                var o = this.J(this.G(e.dsn)),
                                    a = K.createElement("script");
                                a.async = !0, a.src = o + "/api/embed/error-page/?" + n.join("&"), (K.head || K.body).appendChild(a)
                            }
                        },
                        L: function () {
                            var e = this;
                            this.m += 1, setTimeout(function () {
                                e.m -= 1
                            })
                        },
                        $: function (e, t) {
                            var n, r;
                            if (this.b) {
                                for (r in t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), K.createEvent ? (n = K.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (n = K.createEventObject()).eventType = e, t) C(t, r) && (n[r] = t[r]);
                                if (K.createEvent) K.dispatchEvent(n);
                                else try {
                                    K.fireEvent("on" + n.eventType.toLowerCase(), n)
                                } catch (e) {}
                            }
                        },
                        _: function (e) {
                            var t = this;
                            return function (n) {
                                if (t.aa = null, t.v !== n) {
                                    var r;
                                    t.v = n;
                                    try {
                                        r = O(n.target)
                                    } catch (e) {
                                        r = "<unknown>"
                                    }
                                    t.captureBreadcrumb({
                                        category: "ui." + e,
                                        message: r
                                    })
                                }
                            }
                        },
                        ba: function () {
                            var e = this;
                            return function (t) {
                                var n;
                                try {
                                    n = t.target
                                } catch (e) {
                                    return
                                }
                                var r = n && n.tagName;
                                if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                                    var i = e.aa;
                                    i || e._("input")(t), clearTimeout(i), e.aa = setTimeout(function () {
                                        e.aa = null
                                    }, 1e3)
                                }
                            }
                        },
                        ca: function (e, t) {
                            var n = P(this.w.href),
                                r = P(t),
                                i = P(e);
                            this.x = t, n.protocol === r.protocol && n.host === r.host && (t = r.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), this.captureBreadcrumb({
                                category: "navigation",
                                data: {
                                    to: t,
                                    from: e
                                }
                            })
                        },
                        C: function () {
                            var e = this;
                            e.da = Function.prototype.toString, Function.prototype.toString = function () {
                                return "function" == typeof this && this.M ? e.da.apply(this.O, arguments) : e.da.apply(this, arguments)
                            }
                        },
                        Q: function () {
                            this.da && (Function.prototype.toString = this.da)
                        },
                        D: function () {
                            function e(e) {
                                return function (t, r) {
                                    for (var i = new Array(arguments.length), o = 0; o < i.length; ++o) i[o] = arguments[o];
                                    var a = i[0];
                                    return v(a) && (i[0] = n.wrap({
                                        mechanism: {
                                            type: "instrument",
                                            data: {
                                                function: e.name || "<anonymous>"
                                            }
                                        }
                                    }, a)), e.apply ? e.apply(this, i) : e(i[0], i[1])
                                }
                            }

                            function t(e) {
                                var t = G[e] && G[e].prototype;
                                t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (B(t, "addEventListener", function (t) {
                                    return function (r, o, a, s) {
                                        try {
                                            o && o.handleEvent && (o.handleEvent = n.wrap({
                                                mechanism: {
                                                    type: "instrument",
                                                    data: {
                                                        target: e,
                                                        function: "handleEvent",
                                                        handler: o && o.name || "<anonymous>"
                                                    }
                                                }
                                            }, o.handleEvent))
                                        } catch (e) {}
                                        var c, u, l;
                                        return i && i.dom && ("EventTarget" === e || "Node" === e) && (u = n._("click"), l = n.ba(), c = function (e) {
                                            if (e) {
                                                var t;
                                                try {
                                                    t = e.type
                                                } catch (e) {
                                                    return
                                                }
                                                return "click" === t ? u(e) : "keypress" === t ? l(e) : void 0
                                            }
                                        }), t.call(this, r, n.wrap({
                                            mechanism: {
                                                type: "instrument",
                                                data: {
                                                    target: e,
                                                    function: "addEventListener",
                                                    handler: o && o.name || "<anonymous>"
                                                }
                                            }
                                        }, o, c), a, s)
                                    }
                                }, r), B(t, "removeEventListener", function (e) {
                                    return function (t, n, r, i) {
                                        try {
                                            n = n && (n.N ? n.N : n)
                                        } catch (e) {}
                                        return e.call(this, t, n, r, i)
                                    }
                                }, r))
                            }
                            var n = this,
                                r = n.t,
                                i = this.k.autoBreadcrumbs;
                            B(G, "setTimeout", e, r), B(G, "setInterval", e, r), G.requestAnimationFrame && B(G, "requestAnimationFrame", function (e) {
                                return function (t) {
                                    return e(n.wrap({
                                        mechanism: {
                                            type: "instrument",
                                            data: {
                                                function: "requestAnimationFrame",
                                                handler: e && e.name || "<anonymous>"
                                            }
                                        }
                                    }, t))
                                }
                            }, r);
                            for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < o.length; a++) t(o[a])
                        },
                        E: function () {
                            function e(e, n) {
                                e in n && v(n[e]) && B(n, e, function (n) {
                                    return t.wrap({
                                        mechanism: {
                                            type: "instrument",
                                            data: {
                                                function: e,
                                                handler: n && n.name || "<anonymous>"
                                            }
                                        }
                                    }, n)
                                })
                            }
                            var t = this,
                                n = this.k.autoBreadcrumbs,
                                r = t.t;
                            if (n.xhr && "XMLHttpRequest" in G) {
                                var i = G.XMLHttpRequest && G.XMLHttpRequest.prototype;
                                B(i, "open", function (e) {
                                    return function (n, r) {
                                        return x(r) && -1 === r.indexOf(t.h) && (this.ea = {
                                            method: n,
                                            url: r,
                                            status_code: null
                                        }), e.apply(this, arguments)
                                    }
                                }, r), B(i, "send", function (n) {
                                    return function () {
                                        function r() {
                                            if (i.ea && 4 === i.readyState) {
                                                try {
                                                    i.ea.status_code = i.status
                                                } catch (e) {}
                                                t.captureBreadcrumb({
                                                    type: "http",
                                                    category: "xhr",
                                                    data: i.ea
                                                })
                                            }
                                        }
                                        for (var i = this, o = ["onload", "onerror", "onprogress"], a = 0; a < o.length; a++) e(o[a], i);
                                        return "onreadystatechange" in i && v(i.onreadystatechange) ? B(i, "onreadystatechange", function (e) {
                                            return t.wrap({
                                                mechanism: {
                                                    type: "instrument",
                                                    data: {
                                                        function: "onreadystatechange",
                                                        handler: e && e.name || "<anonymous>"
                                                    }
                                                }
                                            }, e, r)
                                        }) : i.onreadystatechange = r, n.apply(this, arguments)
                                    }
                                }, r)
                            }
                            n.xhr && D() && B(G, "fetch", function (e) {
                                return function () {
                                    for (var n = new Array(arguments.length), r = 0; r < n.length; ++r) n[r] = arguments[r];
                                    var i, o = n[0],
                                        a = "GET";
                                    if ("string" == typeof o ? i = o : "Request" in G && o instanceof G.Request ? (i = o.url, o.method && (a = o.method)) : i = "" + o, -1 !== i.indexOf(t.h)) return e.apply(this, n);
                                    n[1] && n[1].method && (a = n[1].method);
                                    var s = {
                                        method: a,
                                        url: i,
                                        status_code: null
                                    };
                                    return e.apply(this, n).then(function (e) {
                                        return s.status_code = e.status, t.captureBreadcrumb({
                                            type: "http",
                                            category: "fetch",
                                            data: s
                                        }), e
                                    }).catch(function (e) {
                                        throw t.captureBreadcrumb({
                                            type: "http",
                                            category: "fetch",
                                            data: s,
                                            level: "error"
                                        }), e
                                    })
                                }
                            }, r), n.dom && this.b && (K.addEventListener ? (K.addEventListener("click", t._("click"), !1), K.addEventListener("keypress", t.ba(), !1)) : K.attachEvent && (K.attachEvent("onclick", t._("click")), K.attachEvent("onkeypress", t.ba())));
                            var o = G.chrome,
                                a = !(o && o.app && o.app.runtime) && G.history && G.history.pushState && G.history.replaceState;
                            if (n.location && a) {
                                var s = G.onpopstate;
                                G.onpopstate = function () {
                                    var e = t.w.href;
                                    if (t.ca(t.x, e), s) return s.apply(this, arguments)
                                };
                                var c = function (e) {
                                    return function () {
                                        var n = arguments.length > 2 ? arguments[2] : void 0;
                                        return n && t.ca(t.x, n + ""), e.apply(this, arguments)
                                    }
                                };
                                B(G.history, "pushState", c, r), B(G.history, "replaceState", c, r)
                            }
                            if (n.console && "console" in G && console.log) {
                                var u = function (e, n) {
                                    t.captureBreadcrumb({
                                        message: e,
                                        level: n.level,
                                        category: "console"
                                    })
                                };
                                w(["debug", "info", "warn", "error", "log"], function (e, t) {
                                    _(console, t, u)
                                })
                            }
                        },
                        R: function () {
                            for (var e; this.t.length;) {
                                var t = (e = this.t.shift())[0],
                                    n = e[1],
                                    r = e[2];
                                t[n] = r
                            }
                        },
                        S: function () {
                            for (var e in this.q) this.p[e] = this.q[e]
                        },
                        F: function () {
                            var e = this;
                            w(this.r, function (t, n) {
                                var r = n[0],
                                    i = n[1];
                                r.apply(e, [e].concat(i))
                            })
                        },
                        G: function (e) {
                            var t = q.exec(e),
                                n = {},
                                r = 7;
                            try {
                                for (; r--;) n[H[r]] = t[r] || ""
                            } catch (t) {
                                throw new u("Invalid DSN: " + e)
                            }
                            if (n.pass && !this.k.allowSecretKey) throw new u("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                            return n
                        },
                        J: function (e) {
                            var t = "//" + e.host + (e.port ? ":" + e.port : "");
                            return e.protocol && (t = e.protocol + ":" + t), t
                        },
                        A: function (e, t) {
                            (t = t || {}).mechanism = t.mechanism || {
                                type: "onerror",
                                handled: !1
                            }, this.m || this.V(e, t)
                        },
                        V: function (e, t) {
                            var n = this.X(e, t);
                            this.$("handle", {
                                stackInfo: e,
                                options: t
                            }), this.fa(e.name, e.message, e.url, e.lineno, n, t)
                        },
                        X: function (e, t) {
                            var n = this,
                                r = [];
                            if (e.stack && e.stack.length && (w(e.stack, function (t, i) {
                                    var o = n.ga(i, e.url);
                                    o && r.push(o)
                                }), t && t.trimHeadFrames))
                                for (var i = 0; i < t.trimHeadFrames && i < r.length; i++) r[i].in_app = !1;
                            return r = r.slice(0, this.k.stackTraceLimit)
                        },
                        ga: function (e, t) {
                            var n = {
                                filename: e.url,
                                lineno: e.line,
                                colno: e.column,
                                function: e.func || "?"
                            };
                            return e.url || (n.filename = t), n.in_app = !(this.k.includePaths.test && !this.k.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n.function) || /raven\.(min\.)?js$/.test(n.filename)), n
                        },
                        fa: function (e, t, n, r, i, o) {
                            var a, s = (e ? e + ": " : "") + (t || "");
                            if ((!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(t) && !this.k.ignoreErrors.test(s)) && (i && i.length ? (n = i[0].filename || n, i.reverse(), a = {
                                    frames: i
                                }) : n && (a = {
                                    frames: [{
                                        filename: n,
                                        lineno: r,
                                        in_app: !0
                                    }]
                                }), (!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(n)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(n)))) {
                                var c = T({
                                        exception: {
                                            values: [{
                                                type: e,
                                                value: t,
                                                stacktrace: a
                                            }]
                                        },
                                        transaction: n
                                    }, o),
                                    u = c.exception.values[0];
                                null == u.type && "" === u.value && (u.value = "Unrecoverable error caught"), !c.exception.mechanism && c.mechanism && (c.exception.mechanism = c.mechanism, delete c.mechanism), c.exception.mechanism = T({
                                    type: "generic",
                                    handled: !0
                                }, c.exception.mechanism || {}), this.Y(c)
                            }
                        },
                        ha: function (e) {
                            var t = this.k.maxMessageLength;
                            if (e.message && (e.message = E(e.message, t)), e.exception) {
                                var n = e.exception.values[0];
                                n.value = E(n.value, t)
                            }
                            var r = e.request;
                            return r && (r.url && (r.url = E(r.url, this.k.maxUrlLength)), r.Referer && (r.Referer = E(r.Referer, this.k.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this.ia(e.breadcrumbs), e
                        },
                        ia: function (e) {
                            for (var t, n, r, i = ["to", "from", "url"], o = 0; o < e.values.length; ++o)
                                if ((n = e.values[o]).hasOwnProperty("data") && m(n.data) && !S(n.data)) {
                                    r = T({}, n.data);
                                    for (var a = 0; a < i.length; ++a) t = i[a], r.hasOwnProperty(t) && r[t] && (r[t] = E(r[t], this.k.maxUrlLength));
                                    e.values[o].data = r
                                }
                        },
                        ja: function () {
                            if (this.c || this.b) {
                                var e = {};
                                return this.c && X.userAgent && (e.headers = {
                                    "User-Agent": X.userAgent
                                }), G.location && G.location.href && (e.url = G.location.href), this.b && K.referrer && (e.headers || (e.headers = {}), e.headers.Referer = K.referrer), e
                            }
                        },
                        y: function () {
                            this.ka = 0, this.la = null
                        },
                        ma: function () {
                            return this.ka && r() - this.la < this.ka
                        },
                        na: function (e) {
                            var t = this.e;
                            return !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? M(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || N(e.exception, t.exception))
                        },
                        oa: function (e) {
                            if (!this.ma()) {
                                var t = e.status;
                                if (400 === t || 401 === t || 429 === t) {
                                    var n;
                                    try {
                                        n = D() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10)
                                    } catch (e) {}
                                    this.ka = n || 2 * this.ka || 1e3, this.la = r()
                                }
                            }
                        },
                        Y: function (e) {
                            var t = this.k,
                                n = {
                                    project: this.i,
                                    logger: t.logger,
                                    platform: "javascript"
                                },
                                i = this.ja();
                            if (i && (n.request = i), e.trimHeadFrames && delete e.trimHeadFrames, (e = T(n, e)).tags = T(T({}, this.j.tags), e.tags), e.extra = T(T({}, this.j.extra), e.extra), e.extra["session:duration"] = r() - this.s, this.u && this.u.length > 0 && (e.breadcrumbs = {
                                    values: [].slice.call(this.u, 0)
                                }), this.j.user && (e.user = this.j.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), e = this.pa(e), Object.keys(e).forEach(function (t) {
                                    (null == e[t] || "" === e[t] || b(e[t])) && delete e[t]
                                }), v(t.dataCallback) && (e = t.dataCallback(e) || e), e && !b(e) && (!v(t.shouldSendCallback) || t.shouldSendCallback(e))) return this.ma() ? void this.z("warn", "Raven dropped error due to backoff: ", e) : void("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this.qa(e) : this.qa(e))
                        },
                        pa: function (e) {
                            return F(e, this.k.sanitizeKeys)
                        },
                        ra: function () {
                            return L()
                        },
                        qa: function (e, t) {
                            var n = this,
                                r = this.k;
                            if (this.isSetup()) {
                                if (e = this.ha(e), !this.k.allowDuplicates && this.na(e)) return void this.z("warn", "Raven dropped repeat event: ", e);
                                this.f = e.event_id || (e.event_id = this.ra()), this.e = e, this.z("debug", "Raven about to send:", e);
                                var i = {
                                    sentry_version: "7",
                                    sentry_client: "raven-js/" + this.VERSION,
                                    sentry_key: this.h
                                };
                                this.I && (i.sentry_secret = this.I);
                                var o = e.exception && e.exception.values[0];
                                this.k.autoBreadcrumbs && this.k.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                                    category: "sentry",
                                    message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                                    event_id: e.event_id,
                                    level: e.level || "error"
                                });
                                var a = this.K;
                                (r.transport || this._makeRequest).call(this, {
                                    url: a,
                                    auth: i,
                                    data: e,
                                    options: r,
                                    onSuccess: function () {
                                        n.y(), n.$("success", {
                                            data: e,
                                            src: a
                                        }), t && t()
                                    },
                                    onError: function (r) {
                                        n.z("error", "Raven transport failed to send: ", r), r.request && n.oa(r.request), n.$("failure", {
                                            data: e,
                                            src: a
                                        }), r = r || new Error("Raven send failed (no additional details provided)"), t && t(r)
                                    }
                                })
                            }
                        },
                        _makeRequest: function (e) {
                            var t = e.url + "?" + R(e.auth),
                                n = null,
                                r = {};
                            if (e.options.headers && (n = this.sa(e.options.headers)), e.options.fetchParameters && (r = this.sa(e.options.fetchParameters)), D()) {
                                r.body = s(e.data);
                                var i = T({}, this.l),
                                    o = T(i, r);
                                return n && (o.headers = n), G.fetch(t, o).then(function (t) {
                                    if (t.ok) e.onSuccess && e.onSuccess();
                                    else {
                                        var n = new Error("Sentry error code: " + t.status);
                                        n.request = t, e.onError && e.onError(n)
                                    }
                                }).catch(function () {
                                    e.onError && e.onError(new Error("Sentry error code: network unavailable"))
                                })
                            }
                            var a = G.XMLHttpRequest && new G.XMLHttpRequest;
                            a && (("withCredentials" in a || "undefined" != typeof XDomainRequest) && ("withCredentials" in a ? a.onreadystatechange = function () {
                                if (4 === a.readyState)
                                    if (200 === a.status) e.onSuccess && e.onSuccess();
                                    else if (e.onError) {
                                    var t = new Error("Sentry error code: " + a.status);
                                    t.request = a, e.onError(t)
                                }
                            } : (a = new XDomainRequest, t = t.replace(/^https?:/, ""), e.onSuccess && (a.onload = e.onSuccess), e.onError && (a.onerror = function () {
                                var t = new Error("Sentry error code: XDomainRequest");
                                t.request = a, e.onError(t)
                            })), a.open("POST", t), n && w(n, function (e, t) {
                                a.setRequestHeader(e, t)
                            }), a.send(s(e.data))))
                        },
                        sa: function (e) {
                            var t = {};
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var r = e[n];
                                    t[n] = "function" == typeof r ? r() : r
                                } return t
                        },
                        z: function (e) {
                            this.q[e] && (this.debug || this.k.debug) && Function.prototype.apply.call(this.q[e], this.p, [].slice.call(arguments, 1))
                        },
                        Z: function (e, t) {
                            y(t) ? delete this.j[e] : this.j[e] = T(this.j[e] || {}, t)
                        }
                    }, o.prototype.setUser = o.prototype.setUserContext, o.prototype.setReleaseContext = o.prototype.setRelease, n.exports = o
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                1: 1,
                2: 2,
                5: 5,
                6: 6,
                7: 7,
                8: 8
            }],
            4: [function (e, n, r) {
                (function (t) {
                    var r = e(3),
                        i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                        o = i.Raven,
                        a = new r;
                    a.noConflict = function () {
                        return i.Raven = o, a
                    }, a.afterLoad(), n.exports = a, n.exports.Client = r
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                3: 3
            }],
            5: [function (e, n, r) {
                (function (t) {
                    function r(e) {
                        return void 0 === e
                    }

                    function i(e) {
                        return "[object Object]" === Object.prototype.toString.call(e)
                    }

                    function o(e) {
                        return "[object String]" === Object.prototype.toString.call(e)
                    }

                    function a(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function s() {
                        if (!("fetch" in y)) return !1;
                        try {
                            return new Headers, new Request(""), new Response, !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function c(e, t) {
                        var n, i;
                        if (r(e.length))
                            for (n in e) l(e, n) && t.call(null, n, e[n]);
                        else if (i = e.length)
                            for (n = 0; n < i; n++) t.call(null, n, e[n])
                    }

                    function u(e, t) {
                        if ("number" != typeof t) throw new Error("2nd argument to `truncate` function should be a number");
                        return "string" != typeof e || 0 === t ? e : e.length <= t ? e : e.substr(0, t) + "…"
                    }

                    function l(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function d(e) {
                        for (var t, n = [], r = 0, i = e.length; r < i; r++) o(t = e[r]) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
                        return new RegExp(n.join("|"), "i")
                    }

                    function p(e) {
                        var t, n, r, i, a, s = [];
                        if (!e || !e.tagName) return "";
                        if (s.push(e.tagName.toLowerCase()), e.id && s.push("#" + e.id), (t = e.className) && o(t))
                            for (n = t.split(/\s+/), a = 0; a < n.length; a++) s.push("." + n[a]);
                        var c = ["type", "name", "title", "alt"];
                        for (a = 0; a < c.length; a++) r = c[a], (i = e.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
                        return s.join("")
                    }

                    function f(e, t) {
                        return !!(!!e ^ !!t)
                    }

                    function h(e, t) {
                        if (f(e, t)) return !1;
                        var n = e.frames,
                            r = t.frames;
                        if (void 0 === n || void 0 === r) return !1;
                        if (n.length !== r.length) return !1;
                        for (var i, o, a = 0; a < n.length; a++)
                            if (i = n[a], o = r[a], i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1;
                        return !0
                    }

                    function m(e) {
                        if ("string" == typeof e) return u(e, 40);
                        if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
                        var t = Object.prototype.toString.call(e);
                        return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e
                    }
                    var g = e(7),
                        y = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
                    n.exports = {
                        isObject: function (e) {
                            return "object" == typeof e && null !== e
                        },
                        isError: function (e) {
                            switch (Object.prototype.toString.call(e)) {
                                case "[object Error]":
                                case "[object Exception]":
                                case "[object DOMException]":
                                    return !0;
                                default:
                                    return e instanceof Error
                            }
                        },
                        isErrorEvent: function (e) {
                            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
                        },
                        isDOMError: function (e) {
                            return "[object DOMError]" === Object.prototype.toString.call(e)
                        },
                        isDOMException: function (e) {
                            return "[object DOMException]" === Object.prototype.toString.call(e)
                        },
                        isUndefined: r,
                        isFunction: function (e) {
                            return "function" == typeof e
                        },
                        isPlainObject: i,
                        isString: o,
                        isArray: a,
                        isEmptyObject: function (e) {
                            if (!i(e)) return !1;
                            for (var t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0
                        },
                        supportsErrorEvent: function () {
                            try {
                                return new ErrorEvent(""), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        supportsDOMError: function () {
                            try {
                                return new DOMError(""), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        supportsDOMException: function () {
                            try {
                                return new DOMException(""), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        supportsFetch: s,
                        supportsReferrerPolicy: function () {
                            if (!s()) return !1;
                            try {
                                return new Request("pickleRick", {
                                    referrerPolicy: "origin"
                                }), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        supportsPromiseRejectionEvent: function () {
                            return "function" == typeof PromiseRejectionEvent
                        },
                        wrappedCallback: function (e) {
                            return function (t, n) {
                                var r = e(t) || t;
                                return n && n(r) || r
                            }
                        },
                        each: c,
                        objectMerge: function (e, t) {
                            return t ? (c(t, function (t, n) {
                                e[t] = n
                            }), e) : e
                        },
                        truncate: u,
                        objectFrozen: function (e) {
                            return !!Object.isFrozen && Object.isFrozen(e)
                        },
                        hasKey: l,
                        joinRegExp: d,
                        urlencode: function (e) {
                            var t = [];
                            return c(e, function (e, n) {
                                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                            }), t.join("&")
                        },
                        uuid4: function () {
                            var e = y.crypto || y.msCrypto;
                            if (!r(e) && e.getRandomValues) {
                                var t = new Uint16Array(8);
                                e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                                var n = function (e) {
                                    for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                                    return t
                                };
                                return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
                            }
                            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            })
                        },
                        htmlTreeAsString: function (e) {
                            for (var t, n = [], r = 0, i = 0, o = " > ".length; e && r++ < 5 && !("html" === (t = p(e)) || r > 1 && i + n.length * o + t.length >= 80);) n.push(t), i += t.length, e = e.parentNode;
                            return n.reverse().join(" > ")
                        },
                        htmlElementAsString: p,
                        isSameException: function (e, t) {
                            return !f(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && ! function (e, t) {
                                return r(e) && r(t)
                            }(e.stacktrace, t.stacktrace) && h(e.stacktrace, t.stacktrace))
                        },
                        isSameStacktrace: h,
                        parseUrl: function (e) {
                            if ("string" != typeof e) return {};
                            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
                                n = t[6] || "",
                                r = t[8] || "";
                            return {
                                protocol: t[2],
                                host: t[4],
                                path: t[5],
                                relative: t[5] + n + r
                            }
                        },
                        fill: function (e, t, n, r) {
                            if (null != e) {
                                var i = e[t];
                                e[t] = n(i), e[t].M = !0, e[t].O = i, r && r.push([e, t, i])
                            }
                        },
                        safeJoin: function (e, t) {
                            if (!a(e)) return "";
                            for (var n = [], r = 0; r < e.length; r++) try {
                                n.push(String(e[r]))
                            } catch (e) {
                                n.push("[value cannot be serialized]")
                            }
                            return n.join(t)
                        },
                        serializeException: function e(t, n, r) {
                            if (!i(t)) return t;
                            r = "number" != typeof (n = "number" != typeof n ? 3 : n) ? 51200 : r;
                            var o = function e(t, n) {
                                return 0 === n ? m(t) : i(t) ? Object.keys(t).reduce(function (r, i) {
                                    return r[i] = e(t[i], n - 1), r
                                }, {}) : Array.isArray(t) ? t.map(function (t) {
                                    return e(t, n - 1)
                                }) : m(t)
                            }(t, n);
                            return function (e) {
                                return function (e) {
                                    return ~-encodeURI(e).split(/%..|./).length
                                }(JSON.stringify(e))
                            }(g(o)) > r ? e(t, n - 1) : o
                        },
                        serializeKeysForMessage: function (e, t) {
                            if ("number" == typeof e || "string" == typeof e) return e.toString();
                            if (!Array.isArray(e)) return "";
                            if (0 === (e = e.filter(function (e) {
                                    return "string" == typeof e
                                })).length) return "[object has no keys]";
                            if (t = "number" != typeof t ? 40 : t, e[0].length >= t) return e[0];
                            for (var n = e.length; n > 0; n--) {
                                var r = e.slice(0, n).join(", ");
                                if (!(r.length > t)) return n === e.length ? r : r + "…"
                            }
                            return ""
                        },
                        sanitize: function (e, t) {
                            if (!a(t) || a(t) && 0 === t.length) return e;
                            var n, r = d(t);
                            try {
                                n = JSON.parse(g(e))
                            } catch (t) {
                                return e
                            }
                            return function e(t) {
                                return a(t) ? t.map(function (t) {
                                    return e(t)
                                }) : i(t) ? Object.keys(t).reduce(function (n, i) {
                                    return n[i] = r.test(i) ? "********" : e(t[i]), n
                                }, {}) : t
                            }(n)
                        }
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                7: 7
            }],
            6: [function (e, n, r) {
                (function (t) {
                    function r() {
                        return "undefined" == typeof document || null == document.location ? "" : document.location.href
                    }
                    var i = e(5),
                        o = {
                            collectWindowErrors: !0,
                            debug: !1
                        },
                        a = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                        s = [].slice,
                        c = "?",
                        u = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                    o.report = function () {
                        function e(e, t) {
                            var n = null;
                            if (!t || o.collectWindowErrors) {
                                for (var r in f)
                                    if (f.hasOwnProperty(r)) try {
                                        f[r].apply(null, [e].concat(s.call(arguments, 2)))
                                    } catch (e) {
                                        n = e
                                    }
                                if (n) throw n
                            }
                        }

                        function t(t, a, s, l, p) {
                            var f = i.isErrorEvent(p) ? p.error : p,
                                h = i.isErrorEvent(t) ? t.message : t;
                            if (g) o.computeStackTrace.augmentStackTraceWithInitialElement(g, a, s, h), n();
                            else if (f && i.isError(f)) e(o.computeStackTrace(f), !0);
                            else {
                                var m = {
                                        url: a,
                                        line: s,
                                        column: l
                                    },
                                    y = void 0;
                                if ("[object String]" === {}.toString.call(h)) {
                                    var v = h.match(u);
                                    v && (y = v[1], h = v[2])
                                }
                                m.func = c, e({
                                    name: y,
                                    message: h,
                                    url: r(),
                                    stack: [m]
                                }, !0)
                            }
                            return !!d && d.apply(this, arguments)
                        }

                        function n() {
                            var t = g,
                                n = h;
                            h = null, g = null, m = null, e.apply(null, [t, !1].concat(n))
                        }

                        function l(e, t) {
                            var r = s.call(arguments, 1);
                            if (g) {
                                if (m === e) return;
                                n()
                            }
                            var i = o.computeStackTrace(e);
                            if (g = i, m = e, h = r, setTimeout(function () {
                                    m === e && n()
                                }, i.incomplete ? 2e3 : 0), !1 !== t) throw e
                        }
                        var d, p, f = [],
                            h = null,
                            m = null,
                            g = null;
                        return l.subscribe = function (e) {
                            p || (d = a.onerror, a.onerror = t, p = !0), f.push(e)
                        }, l.unsubscribe = function (e) {
                            for (var t = f.length - 1; t >= 0; --t) f[t] === e && f.splice(t, 1)
                        }, l.uninstall = function () {
                            p && (a.onerror = d, p = !1, d = void 0), f = []
                        }, l
                    }(), o.computeStackTrace = function () {
                        function e(e) {
                            if (void 0 !== e.stack && e.stack) {
                                for (var t, n, i, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, l = /\((\S*)(?::(\d+))(?::(\d+))\)/, d = e.stack.split("\n"), p = [], f = (/^(.*) is undefined$/.exec(e.message), 0), h = d.length; f < h; ++f) {
                                    if (n = o.exec(d[f])) {
                                        var m = n[2] && 0 === n[2].indexOf("native");
                                        n[2] && 0 === n[2].indexOf("eval") && (t = l.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), i = {
                                            url: m ? null : n[2],
                                            func: n[1] || c,
                                            args: m ? [n[2]] : [],
                                            line: n[3] ? +n[3] : null,
                                            column: n[4] ? +n[4] : null
                                        }
                                    } else if (n = a.exec(d[f])) i = {
                                        url: n[2],
                                        func: n[1] || c,
                                        args: [],
                                        line: +n[3],
                                        column: n[4] ? +n[4] : null
                                    };
                                    else {
                                        if (!(n = s.exec(d[f]))) continue;
                                        n[3] && n[3].indexOf(" > eval") > -1 && (t = u.exec(n[3])) ? (n[3] = t[1], n[4] = t[2], n[5] = null) : 0 !== f || n[5] || void 0 === e.columnNumber || (p[0].column = e.columnNumber + 1), i = {
                                            url: n[3],
                                            func: n[1] || c,
                                            args: n[2] ? n[2].split(",") : [],
                                            line: n[4] ? +n[4] : null,
                                            column: n[5] ? +n[5] : null
                                        }
                                    }
                                    if (!i.func && i.line && (i.func = c), i.url && "blob:" === i.url.substr(0, 5)) {
                                        var g = new XMLHttpRequest;
                                        if (g.open("GET", i.url, !1), g.send(null), 200 === g.status) {
                                            var y = g.responseText || "",
                                                v = (y = y.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                                            if (v) {
                                                var x = v[1];
                                                "~" === x.charAt(0) && (x = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + x.slice(1)), i.url = x.slice(0, -4)
                                            }
                                        }
                                    }
                                    p.push(i)
                                }
                                return p.length ? {
                                    name: e.name,
                                    message: e.message,
                                    url: r(),
                                    stack: p
                                } : null
                            }
                        }

                        function t(e, t, n, r) {
                            var i = {
                                url: t,
                                line: n
                            };
                            if (i.url && i.line) {
                                if (e.incomplete = !1, i.func || (i.func = c), e.stack.length > 0 && e.stack[0].url === i.url) {
                                    if (e.stack[0].line === i.line) return !1;
                                    if (!e.stack[0].line && e.stack[0].func === i.func) return e.stack[0].line = i.line, !1
                                }
                                return e.stack.unshift(i), e.partial = !0, !0
                            }
                            return e.incomplete = !0, !1
                        }

                        function n(e, a) {
                            for (var s, u, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], p = {}, f = !1, h = n.caller; h && !f; h = h.caller)
                                if (h !== i && h !== o.report) {
                                    if (u = {
                                            url: null,
                                            func: c,
                                            line: null,
                                            column: null
                                        }, h.name ? u.func = h.name : (s = l.exec(h.toString())) && (u.func = s[1]), void 0 === u.func) try {
                                        u.func = s.input.substring(0, s.input.indexOf("{"))
                                    } catch (e) {}
                                    p["" + h] ? f = !0 : p["" + h] = !0, d.push(u)
                                } a && d.splice(0, a);
                            var m = {
                                name: e.name,
                                message: e.message,
                                url: r(),
                                stack: d
                            };
                            return t(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), m
                        }

                        function i(t, i) {
                            var a = null;
                            i = null == i ? 0 : +i;
                            try {
                                if (a = e(t)) return a
                            } catch (e) {
                                if (o.debug) throw e
                            }
                            try {
                                if (a = n(t, i + 1)) return a
                            } catch (e) {
                                if (o.debug) throw e
                            }
                            return {
                                name: t.name,
                                message: t.message,
                                url: r()
                            }
                        }
                        return i.augmentStackTraceWithInitialElement = t, i.computeStackTraceFromStackProp = e, i
                    }(), n.exports = o
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                5: 5
            }],
            7: [function (e, t, n) {
                function r(e, t) {
                    for (var n = 0; n < e.length; ++n)
                        if (e[n] === t) return n;
                    return -1
                }

                function i(e, t) {
                    var n = [],
                        i = [];
                    return null == t && (t = function (e, t) {
                            return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, r(n, t)).join(".") + "]"
                        }),
                        function (o, a) {
                            if (n.length > 0) {
                                var s = r(n, this);
                                ~s ? n.splice(s + 1) : n.push(this), ~s ? i.splice(s, 1 / 0, o) : i.push(o), ~r(n, a) && (a = t.call(this, o, a))
                            } else n.push(a);
                            return null == e ? a instanceof Error ? function (e) {
                                var t = {
                                    stack: e.stack,
                                    message: e.message,
                                    name: e.name
                                };
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t
                            }(a) : a : e.call(this, o, a)
                        }
                }(t.exports = function (e, t, n, r) {
                    return JSON.stringify(e, i(t, r), n)
                }).getSerialize = i
            }, {}],
            8: [function (e, t, n) {
                function r(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function i(e, t, n, i, o, a) {
                    return r(function (e, t) {
                        return e << o | e >>> 32 - o
                    }(r(r(t, e), r(i, a))), n)
                }

                function o(e, t, n, r, o, a, s) {
                    return i(t & n | ~t & r, e, t, o, a, s)
                }

                function a(e, t, n, r, o, a, s) {
                    return i(t & r | n & ~r, e, t, o, a, s)
                }

                function s(e, t, n, r, o, a, s) {
                    return i(t ^ n ^ r, e, t, o, a, s)
                }

                function c(e, t, n, r, o, a, s) {
                    return i(n ^ (t | ~r), e, t, o, a, s)
                }

                function u(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var n, i, u, l, d, p = 1732584193,
                        f = -271733879,
                        h = -1732584194,
                        m = 271733878;
                    for (n = 0; n < e.length; n += 16) i = p, u = f, l = h, d = m, p = o(p, f, h, m, e[n], 7, -680876936), m = o(m, p, f, h, e[n + 1], 12, -389564586), h = o(h, m, p, f, e[n + 2], 17, 606105819), f = o(f, h, m, p, e[n + 3], 22, -1044525330), p = o(p, f, h, m, e[n + 4], 7, -176418897), m = o(m, p, f, h, e[n + 5], 12, 1200080426), h = o(h, m, p, f, e[n + 6], 17, -1473231341), f = o(f, h, m, p, e[n + 7], 22, -45705983), p = o(p, f, h, m, e[n + 8], 7, 1770035416), m = o(m, p, f, h, e[n + 9], 12, -1958414417), h = o(h, m, p, f, e[n + 10], 17, -42063), f = o(f, h, m, p, e[n + 11], 22, -1990404162), p = o(p, f, h, m, e[n + 12], 7, 1804603682), m = o(m, p, f, h, e[n + 13], 12, -40341101), h = o(h, m, p, f, e[n + 14], 17, -1502002290), p = a(p, f = o(f, h, m, p, e[n + 15], 22, 1236535329), h, m, e[n + 1], 5, -165796510), m = a(m, p, f, h, e[n + 6], 9, -1069501632), h = a(h, m, p, f, e[n + 11], 14, 643717713), f = a(f, h, m, p, e[n], 20, -373897302), p = a(p, f, h, m, e[n + 5], 5, -701558691), m = a(m, p, f, h, e[n + 10], 9, 38016083), h = a(h, m, p, f, e[n + 15], 14, -660478335), f = a(f, h, m, p, e[n + 4], 20, -405537848), p = a(p, f, h, m, e[n + 9], 5, 568446438), m = a(m, p, f, h, e[n + 14], 9, -1019803690), h = a(h, m, p, f, e[n + 3], 14, -187363961), f = a(f, h, m, p, e[n + 8], 20, 1163531501), p = a(p, f, h, m, e[n + 13], 5, -1444681467), m = a(m, p, f, h, e[n + 2], 9, -51403784), h = a(h, m, p, f, e[n + 7], 14, 1735328473), p = s(p, f = a(f, h, m, p, e[n + 12], 20, -1926607734), h, m, e[n + 5], 4, -378558), m = s(m, p, f, h, e[n + 8], 11, -2022574463), h = s(h, m, p, f, e[n + 11], 16, 1839030562), f = s(f, h, m, p, e[n + 14], 23, -35309556), p = s(p, f, h, m, e[n + 1], 4, -1530992060), m = s(m, p, f, h, e[n + 4], 11, 1272893353), h = s(h, m, p, f, e[n + 7], 16, -155497632), f = s(f, h, m, p, e[n + 10], 23, -1094730640), p = s(p, f, h, m, e[n + 13], 4, 681279174), m = s(m, p, f, h, e[n], 11, -358537222), h = s(h, m, p, f, e[n + 3], 16, -722521979), f = s(f, h, m, p, e[n + 6], 23, 76029189), p = s(p, f, h, m, e[n + 9], 4, -640364487), m = s(m, p, f, h, e[n + 12], 11, -421815835), h = s(h, m, p, f, e[n + 15], 16, 530742520), p = c(p, f = s(f, h, m, p, e[n + 2], 23, -995338651), h, m, e[n], 6, -198630844), m = c(m, p, f, h, e[n + 7], 10, 1126891415), h = c(h, m, p, f, e[n + 14], 15, -1416354905), f = c(f, h, m, p, e[n + 5], 21, -57434055), p = c(p, f, h, m, e[n + 12], 6, 1700485571), m = c(m, p, f, h, e[n + 3], 10, -1894986606), h = c(h, m, p, f, e[n + 10], 15, -1051523), f = c(f, h, m, p, e[n + 1], 21, -2054922799), p = c(p, f, h, m, e[n + 8], 6, 1873313359), m = c(m, p, f, h, e[n + 15], 10, -30611744), h = c(h, m, p, f, e[n + 6], 15, -1560198380), f = c(f, h, m, p, e[n + 13], 21, 1309151649), p = c(p, f, h, m, e[n + 4], 6, -145523070), m = c(m, p, f, h, e[n + 11], 10, -1120210379), h = c(h, m, p, f, e[n + 2], 15, 718787259), f = c(f, h, m, p, e[n + 9], 21, -343485551), p = r(p, i), f = r(f, u), h = r(h, l), m = r(m, d);
                    return [p, f, h, m]
                }

                function l(e) {
                    var t, n = "",
                        r = 32 * e.length;
                    for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }

                function d(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                    var r = 8 * e.length;
                    for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }

                function p(e) {
                    var t, n, r = "0123456789abcdef",
                        i = "";
                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                    return i
                }

                function f(e) {
                    return unescape(encodeURIComponent(e))
                }

                function h(e) {
                    return function (e) {
                        return l(u(d(e), 8 * e.length))
                    }(f(e))
                }

                function m(e, t) {
                    return function (e, t) {
                        var n, r, i = d(e),
                            o = [],
                            a = [];
                        for (o[15] = a[15] = void 0, i.length > 16 && (i = u(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                        return r = u(o.concat(d(t)), 512 + 8 * t.length), l(u(a.concat(r), 640))
                    }(f(e), f(t))
                }
                t.exports = function (e, t, n) {
                    return t ? n ? m(t, e) : function (e, t) {
                        return p(m(e, t))
                    }(t, e) : n ? h(e) : function (e) {
                        return p(h(e))
                    }(e)
                }
            }, {}]
        }, {}, [4])(4)
    }).call(this, n(4))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    var n = "lqkr1tfixq1wa9kmj9po",
        r = !1;
    "object" == typeof CAIYUN && (CAIYUN.key && (n = CAIYUN.key), CAIYUN.disable && (r = CAIYUN.disable)), e.exports = {
        ENV: "prd",
        VERSION: "1.1.0",
        token: n,
        disable: r,
        TRS_URL: "https://api.interpreter.caiyunai.com",
        BIZ_URL: "https://biz.caiyunapp.com",
        LOGIN_URL: "https://www.caiyunapp.com/user/login/",
        XIAOYI_USERID: "5a096eec830f7876a48aac47",
        CACHED: !0,
        DOWNLOAD_URL: "http://a.app.qq.com/o/simple.jsp?pkgname=com.caiyuninterpreter.activity",
        LNADING_URL: "http://caiyunapp.com/xiaoyi/landing.html",
        NETWORK_ERROR_MSG: "抱歉，网络请求有误，请刷新重试 ",
        PAGE_AUTH_ERROR_MSG: "抱歉，网页认证有误，请刷新重试 ",
        PAGE_COOKIE_ERROR_MSG: "抱歉，Cookie数据获取异常，请刷新重试 ",
        DATA_ERROR_MSG: "抱歉，数据有误，请重试 ",
        DEFAULT_AVATAR_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACghJREFUeAHdW31wVNUVP/ft5sMNG5KQYAxBSKIhhI8qEGMHGgSDteIfzrTamYwCopI6nWGwpRPa6WhsrZIOWAv9EKIItZNp1c4wbanVVJRE6Tj5sEw+SGIgUbIJ5INkN9lN9vP1nLe7z7fZj+y+d7dA78zm3Xvfvb97znnn3nvuuScM4pyODbVmuVzuMhDEFaIHluFwhcDETABmZCIYaXiRwST+ncTMKBZ7mADd4GEder2uYecta0aoTbwSiwdw7WDLWtHjqRBFcQtjsBKfqsZhjGFXaMdnPROEuqdy1rbwplcVYaGIeH2ky+iyW3aBKO7E98Wh2nCo6wTGjumTUo8+kVWEWqM9aRbAG+OfpTmmHHuQlN34S9dOUlQI49jqUOK8xFceT79zIqoeYRqpFgCp9WuDTTtQRWswnxUGP67VODVGcIpVPZlTcpymi5rBVAngyJXmAub0nEDG16sZlHcfZP4TMUHYXnnzuguxYscsgCMDnz4MIryGA6XGOlic21uAwZOVuaVvxzKOEG1jUvmjA00Hkfm3sM/1xjyxkUq0EY1Ea7R8RdXwiNicAAOe47hXV0QLfG3bsTrIFXZUsnXOueiYUwDEPDO5T+Ji98BcYNfTe1wc/yEu0j00lxAiTgFJlfDL32jM04eQaJZojzwdIgqg1tR84MZR+1D6J1Z4eQj1zlsXdgr4Vnta8G78xOCRcLtDSAHQPg8Odytyfj2u9mo+iAUSdWtC2Qn62Wg072tNTSfQrOLKvNPhgK6OTvii/wsYGb4C1ikruN0uwEMOGAwGyMzKgsVLboXC5cvBaJQOibNJ01JO9Rlu35htMQYJwGve8rfwzpz+EN77+ymw2+0RGSGBFBUXw+b7tsCy5UUR28byEj/seuIN+7yh7BcwBehg47Q6e7AxF9t+dGQUOtvawDQwAJYJM371Kejv61OOHzG/YtUqqHh8OzeNoLNDQkpCofIAFSCAI5c+rUaKnotIVZQvifkzH5yGc62tMDFOhzd1KS09DZ54+nuwJC9PHUBwr+crF5dW+6vlbZDO81i52/9C65MJDIZMJk3MEw0T4xNw+MDL8CWuHZzSbh+vEpwsAMmZwek8b7o0AAd/8RL0dHVxodmBC2jtb36rWZg+YtJ9vAYKwOfJ0UywzWqDVw8dhqlJLg4bmR6z2Qx/+sObcllTxuu1kiAkDSAfHpa4uLHq330XzBOanDRheets74Du81y0qtjHM0gCIAdm2FFjeEGqeraxMYYesTelhZVH8vPsFQB6b3mAft7VDdO2aR5QYTHOt7cDCVprwq1e4lkgvz25rrUCUv/enp4gmAzjfEhJvkmuf/axp6Fs9Tq5HGvG7XZD34WLsXYLak88E+8CXVqQ+RvUQkXFyPBwUK9jP3oBfr/nWfRme4coWpwH79fUwjvP/QpW5t0e1D6aiuHLl6NpFrEN8Uy8C3RjE7FlDC/J0lOmO29bDveXbIBHNt4Pr+/9OSQnJsG5i14tefDue6D5d2/ByZ8dhq13bwS9LsgqV0IF5G02W0BZdQF51/uuq1RjKDt6PHiEUqRHyx+USxWbt0Jp0Sr4678/kusoQwKin8U2BY1tLdDe1wv9V0xgtk7BjMOOgtFJU+jk2dMwPTMj9RXQyOKRiHcSeyEPMMIgs1WZNt1RqixCQc6t8My3twXU+QuphnmwtXSj9PPX+Z9T0zb480f/9BdhQSaXowrhFQrei0oZW1NmydKlcv8EvR5ovvNIvYNfgsfjkaFuK+T0zfCSFrdBxu3wXV66QSYy/5bFIODRlkcas3xlWJWv/TpkpvG6gWNGwX9FzYPQ8oKvSQsaYWWnL+ABKWF40MNJiRbKF3fugXxDhlTW+od45/OJfJQkC3r45a4fgtGQgr95WumT+xtvMkj5Z76zDVbnFwKNwysJaAFwO7WMO6ehAFX/L9W/hpwF3BYqyM7Igu/e8y14ftv3Jb5pHB6JeGfo/e3DK6WlPAAXJqbAQwu9ZgUtWrzWACVtNrcD6obOgQeJ1pwY9Au+sBTNWAQw7LBCt3VEwooH8wR8dgJ3BB7MExiG5NAaEGzA00uVqXG8XxKCB60MnmnG7YTG8T64OH2VJ2yPIAUkcYSkr3MGCSVt4JlaLINw3qddvHCJd4GisXgBKnG4qakP1M1ZoyRY5F2gULTZlwVKRtTmzU6v3a62/+x+ZjdfPOKZeBcoDg/tjPbZA2ot906PaYWQ+0/j/L9s57ZbS7jEM/EuGUIojXp5NE6ZISR4cMbCBe2zyUFe675Mj59nrwAwCFF+wzHTgIuh3ePShDhkt0DH1BVNGKE6U+Al1UsC8EVgdoZqqKXO4rZD/djn4FK5gF112rB/L/evjzx1+qNOJQFITGIEphZmw/UdxKlwaqQLaB+PJZlmzPC34fMwo1GDQo6p4FUWAIWfYmP1l3ghR/JWXnFMxWQXjDlscGq0G+yiOwKq6lfjPl4lAFkAvtjbQ6ph5+gYi10wiVMnjumQMs5YFgANSLG3uDp6jfk4UnCtoIk34lE5foAA6N4cvddVygb/T3niTRkbQLwFuVfJX44hMo34XK+VeafHDW3Wy9BsNoEV1fqxnDWwKaMAilMWwnx9cgC82TUDXWjr09b55lArhblByfxcuMOYw8UBgl//k6cWlQSFyAQJgKjSEiTlRso7kekmZPo/aMCEswNS9ImQokuUhGDFM77V5QgQiL+gF3SwKiUb7krLlZ4JWFaRwgZJhRQADRBLmBwtcN3WUWi2XIJWPLWR0yIeKQldYaQRpBnFKTeDznfbNOdYsYbJ+QG9gceeH/jLyif5Yy7YRqHJYoIW/E2iCv8vE2nPGuMiKEHNuN2QiRZdmG/J2MHK3Lv2hqMtTC9vc1oPUAh/VEaLDuOeTvO0yTwAEy4+vrlwxEVbT+vJutRcKMvIh+xEpTOW1e3KLXkU539Y/1lEARAB/mBpu9v9wDvDbdBwlVyIYfGipTlu7crS8+Dh7NWQJOiiCpaeUwB+IdR8fPr4RdtYRdwo5wicb1hQV7VhM59weZkuukKv33cAP37INUFud60zDF6GLfv34n18VGoalQYE8PT+Pt+/zIhcQ2kDxlBVYNK/zMB9+9+OpXvsAiD0D35aAG7XCbRWNBtLsRAbti0aOaDTb4d7X4j/P03JRNCU+NdPdoBHrMFdgt81kDxANBk8twisCspfPB6tys9GVacBSpQPq9PAMbMHqzDKVOR1bascIUSeSf84CYnJr8Cm6q+ujkO0nKtKuwD8I3xcYwTb+C4s7sSpwSXm0A8tPxkjr9UxMKQfhQ1VXLyk/AQgU4mZ9/atxcAL2jIpFG0l7hzqxmGSwUEe63q8xqqDb+5vwTzXpI6wWEho+HEWunbKUCtWIDvLUBSFyEwmPo1Y9gZn0A21iD8mjuKzB99145zugCTWAGUvxdU/8V+bqL57tgJjtwAAAABJRU5ErkJggg==",
        XIAOYI_DEFAULT_URL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACvAK8DAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAMGBQcIAgQB/8QAOxAAAQMDAQMIBQwDAQAAAAAAAAECAwQFEQYHEjETITZBUXJzoVJhgZGxFCImJzIzNEJTYnHBFiM30f/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAMhEBAAEDAgQFAQYHAQAAAAAAAAECAxEEBQYhMXESMjQ1gUEUM0JRkaETIiNhscHR4f/aAAwDAQACEQMRAD8A6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzK7djcqcUQK1TiMqrWTyIquSRyO45RTG4ly5VnOX5TX2oplbyq8rH154lolNvXV2/NzhZ6OqirIGzQPRzF7Or1FnYtXabtPipnkmDIAAAAAAAAAAAAAAAAAAAB4n+5fjn5lClfllS7lPHE1eUkYzvORDE8/eqiOssHU3Gm3U3ZEev7SzSrvU46pNnV7e7UtVb1zyMzVe1FXg5OPkTDJsurn7TVZ+k8/0bPLPWAAAAAAAAAAAAAAAHiWaOFu9K9rG9rlwnmFaqopjMzhgrlrLT9uz8pulPvJ1MXfXyDSu7npbXmrj/Kp3Pa/ZoMpRU1VVO6lwjW+fOThzbvEWnp5URMqndNsd2lylBRU1MnUr1WRf6Jw513iO9V93TEfuqlVrrUdzqY2VF0nbG56ZZH81CccmjXumpvTiqvkzMr3vVVe5zl7XLkxKVzM9WRp/umfwgZI6Pt2dr9Po+7J8BDJs/uEfLdhZ7sAAAAAAAAAAIK6sp6CndPWTMhibxc9cIOjFevW7NPjuTiFPuG0uw0uUhdPUuT9NmE964K+KHEvcSaO35ZmrsrNx2tTLltBbmM7HSvz5IMuVe4qqnlao/VVrltD1FWZxWJTtXqhbukuZd3/WXfxY7KvXXOurHK6qrKiZV9ORVJaFepu3ZzXVMsc4ljiUTiV4ROJXh+0v4uHvoTPRlo6r4/iphblTIwfdM/gMkdH27Ol+n8fdk+Ahk2b3GPlu4s94AAAAAAAAAAGitqV5nuGop6RXqlNSLybWZ5ld1qYqpzL5vxDrq7+qqtZ/lp5KSohwIRuLQtCN5ZeETiV4QuJXhE4leETyV4eqX8XD30E9GWjqvUnWYW3UyEC/6mfwhLLHR9mzlfrBj7snwEL7L7jHy3gWe+AAAAAAAAABQOdNc9Lbr47jDPV8n3f1t3uwDiYaEI3FoWhG4laETiy8IXEskPVNR1NY9WUlPLM5OdUjYrse4lmt2q7nKiMvnqYZIJVjnjfHInFr2qip7FJhaqmqicVRh5o0zWwInFXognovR1bPkoIY2Yciud1rkwunVbiIR7nJo1qcMcxKkxh9GzdfrCi7snwELbL7jHy3kWe/AAAAAAAAABQOddc9Lbr46mGer5Pu/rbvdX3EufDw4mFoW7TOz+5X6hSsSSOmp3fYWRMq/wBaJ2Fod/b9iv6y3/FziPowOqdO12nK5Kava1Ucm8yRn2Xp6iWprtBd0NzwXP1YFxLUh0RsmoaOm0bRTUrWcrOivlenFXZVML7g+i7Hat0aSmqjrPVVtvlDRpb6CsRrG1iyrHlOZXtxz57cf2TDQ4jtW/BTc/E0vSLishVOKPQtLylE82ypbgxzF30VHdeOswujVeiY5vKScojXcMoSr4sxl9GzZfrDj7snwEL7J7jHy3oWfQAAAAAAAAAAUDnbXHS26+O4wz1l8n3j1t3ur7hDnwjUstDoLZ/fKCu03RsjmijmgjSOSNXIitVC8Ppuz62ze0tMRMRMRiYULbVeqOuqKKipJGSyU+86RzVyjc45s+wOFxLrLV2qm1ROZjq1a4l5eGc03rC76cY+O3Tt5F65WKRu83PanYS6mi3O/o48NueX5MdqTUFx1DVpUXSdZHNTDGomGtT1ITCmq1t3V1eK7OWHY7k5WP8ARVFJYKZwt0VxpqliKyVqOVOdqrhUMU0zDZmqJhl4FzCxU4YQMsTyh9uzT/ocfdk+Ahl2P3GPlvUs+ggAAAAAAAAAoHO2uOll18dTBPV8m3j113uwDiYc+EaloWh5yrVy1VRfUuCWSmqY6IXloWhE4leELiV4RuJXhC4leETiV4T0tyq6NyLBM5E9FVygxEstNUtibG6x1driJ724k5ORXY4cDHNOJb+yUTGvir84l0GHvgAAAAAAAAAUDnfXHSy6+Opgnq+Tbx6673YBwhz4RqWhaEbiy0I3ll4ROJXhE4leETiV4QuJXhG4lkh9NrtFfd6lsFtpZaiRy4RGN5vavAnLZsae5enw24y6C2V6C/xanfV16tkuc7d1d3nbG30U7V9ZjmcvY7Xtv2SPHX5p/ZsEh2AAAAAAAAAAUDnjW/Sy6+OpgnrL5NvHrrvdgHCHOhG4tC0I3FoXhG4laEe6rlw1FVexEySy0xM9GRoNNXm4qnyO21MqL17mE8yct2zoNRe8lEysdv2U6gqsLUJT0rF9N+8qexCcutZ4e1VfmxCz27YzSNwtyuU0vakLUannkZdSzw3RH3leey023ZrpihwqW9J3p+aZ6u8uAy6drZ9Lb/DnutVFQ0tDFydFTwwR+jGxGp5EOjRbotxiiMPoC4AAAAAAAAAAFA541v0suvjqa9Xml8l3j113uwDiYc+GTs2nbpen4t9I+RvXIvM1PaWjn0dDR7bqNXP9KnP9/oudu2UVUiI64V8cSdbIm7y+8vFMvRWOFbk87teOyz2/ZjYabCztnqnJ+o/Ce5ME4dizw3o7fmiau/8A4s1BYLTQIiUlvpo1T8yRpn3kuta0Wns+SiI+GTRETgG1gAAAAAAAAAAAAAAAAFA551smdWXTx1NerzS+S7x6673W/QmgGzsZX3yNdxfnR0682U7Xf+F6aPrL0Wy8PRXEX9VHL6R/1tOCGKnibFBG2ONqYRrUwiGV7aiimiPDTGISBYAAAAAAAAAAAAAAAAAAAABR7Xo9suqa+73NiOas6ugiXgv7lMcUc8y8zptkirW3NXfj68o/2vCJjgZHpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
        LEFT_SLIDE_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAACQRJREFUeAHtXFtsFFUY/mfb0gttpbS0WECB2kAtFYOAkdhoEdBgTUGkERMIvvggxAdi0pqYWBMfSmI04WKiJiLwQIIPoiIqVksiEZSCCDTQ1HKTVi6FQru90XbH/zszZ3Zmu93ttju7s4UvgbnunPN9PWfO7ftHoUihtiqV+noWkUqFpKiziBT+R7l8nEakpvJ+Cv/r4vNuUqiD91v4fAOpSgMf11NC0u9UUuXm87ZDsTWFnyuKiFzl5PEsJkVZSKoaP+L0FKWff/8nuVy/Enn20tLNp0f8rCA/DL8ov1VmULfyOmd8LZeCx4OkP/LLCp1kwXdTsrqDiqvbRv6gwb8Mnyg/VWWT0rOJ/5pvcjJcJaxQuA4UpU2mBelTKT8li/LHZ9LDSRMpPX4cjY9LpJS4BOoa6KPOgV5q779Ll3puUWPnTWrsaqVj7VfodMdV1li1PlQ76uBS+AmpSR/R81XX/d0Q6rnRi9K4JZEutlSyGBWc52RzBpJc8VQ6qYBWZBfS0xnTaWK85bL51qD7t/q76XDbRdp3vZ723zhLPZ5+628U6mZxNtP03GrKf6vXejG0o9GJUlP5Ag2o2zjJPHOyBanZtGHaU7Qyew6lxY0zXwrLfsfAXfr6+hna/u8ROuseVDiaKE7ZSEuqfxxpYiMTBaXjQsuHXDo2mhOem/YgVcx4ll7Mms2VxX6gMn3feo42XzhEf3f8Z01QUbbRjNy3R1JqQs97TeVMLh1fcQ7myVxkcLWoyltC66fMj4gYMl259XC93dl8nKqaaqiNq5kJJ7jUrOZSc950LuhuaKLUVC4gj3qA85Aln7w8axZtL1hBmQnoZkQXN/u6aMPZfXSgtcGbEYVayaUsZ2GOeU8G3osLfNl09WDlMq4uP7AgE+TZTdOLaevsMtFyyHPR3KIFW5VTRHfVATpy+7LMCv5ar9Ha4jrafbhJngy0HV5JgSCk7mdBEvCwRG5VtheUUXnOY4GeHdVre6+d4lLzDfXKVkqhPu4tl9Ky6oPBMhZcFK3K1LIg4/GwyYlptKdoDT2RPiXYs6N+/Xh7M605vYeu9mLUwFCok6tSSbCqFFiUX97No4G+o/IdAkFq579BUxLTtURi4P8rvXdocd3nZmHwjnky0MvXNSQvNLv9fXulIKgyKCGxJAi4TU18QOQb+RdAI4HWE/yGwNCioB9ianbxDomFKuOPJ/KN/JswT/SzTCfMu/5bH/RUPeoWeSNaGfRQYxmFqTnUa22VFtL64j9o1+F/fHkNLim1VUl6113ci37IezOX+P4uJo/BA3wMYIjipxoNFqW/p4J/JMYy6KmiYxb4bWwk4fgd8AAf8NKRJwaz8kjfWkXB8B+jXR3oujuhpyrzE44t+ICXAfAFbxOsooj5EG34j8EdxjJjEeAFfgKY7gBvE7yiYMZMmyASlzHaHSvVxsRX7IIX+BkAb/DX4RVFTCFqM2aYD8HwPxrAoO7I7Uu2Jw1+4KkjTZtC1Y68oqjqOnnHxmmLolJKIMhLf+2kspO76FBbSKN9mfVhb1FarN0MnlPWoYkiZt3VuTiX7EoQ04fyhkhtpSBn3FfFVOOaU3uota/T1uQxMwi+AphkFzrwdLh2xlUuUy+dNNuWKUT5fH9bsyC4jknuj2eVUlaCGIP6+0lYzmGqFHy90HTQRMG6jI4ynmSOJPwJ8umjK+nVyaLg2p4VC19dBxdh5Q4LVQz8hTDrHilEWxDwBF/wFoAOrIdLW8rUVu6wLjOaZQjtycP73wmCIKfgC94CWMHkpV0XTw0Y9QULVZGAUwSRXC28WQ+XttitXcbKnd1wmiDga+HNi//8olWM1y+WMu2EEwURolh4KxCF9EEAibVdu0RxqiDgizVtE3LxTjEWw7HYbQecLAj4WnizHvxO8YqSyqv/4YbTBQFfC2/Wg0uKasy4JPNiUjgRC4KAr4U364F3SpcUAv6QcOLonctU775mPPKh5Am0NDPfOHbKjg/vLrQ+bpk5GGbCCQzP0WWXPcZL3W1iFIwS5CRYeStuvFP05TMSDqJwZxZjGLMwGAVjesBJwsA5ZYD1QPVhF6IGWKrsgNOF8eHdwqKwLVMHPGZ2wcnCWHmrDdz6sE9VisKmOzvhVGFgNjTAeuCdUi9PwIVoN5wojIU36+ESTmYYdxmwZcKFaDecJAz4grcAdGBnt0tYu+FkZsCnCltmJOAUYcDX8OdCB7a6o/XhmVpYuzV8wz7VSMEJwsCXa0DXQRMFXncd37FxFz7VSCGawoAnjMpeaDpoosD8L7zuJJYXYNyNJIYS5nZ/j63ZAE/DuQ3+ehCEXlKQNpv/dcDJ7NcFL2+wYesrzCMpmTx6tWcqA9kHP/D0wsvfKwqiIUjr8sPaDSdzpCGFWZUzh74ofIXiFW/2wp0X8DNZ2DtENIieiDdVhIcgGkIHrN2RLi1IGsLsKFxtqyDgBX4GwNsUHuMVBXcgPATREAx43b9srsPumAN4GV5+8AVvE6yiIF4G4SE64HV30mhW5ms0W/ABLwPg6xMnZBUFd8YnQRRh14b5H173aFQjI9Nh3AEP8DEFNTSJ+CCfNAaLUlLVI+Jl9Bth/n//vElZnwfE0iF4WIIZEBfkJ2Aqzi8p2CjXFWNlTKwxw/yfx00kbJexCnj132k0xUUhHmhp9VZ/fAaXFHkXAoiITshDmP/hdY9FIN/IvwknRICU6YR5d2hRUKziE8q5NRKTDYiGgPm/ubfd/HvH7yO/yLcpmqNVBEb5qTaSzNCi4I7nPmgSAUSIfmAgGqKk7rOYKTEoIcivTxQHAqICesd0YwYoB8A9Fu/j/0Xrqw8iqtayj12hl/nSuAHVQ9/y6BJe92cyZvJp5wDNLloZvFSRTwFR0pWy4QRA4f7Q+NwjMYShiQIZERiFOCBT2Eu0o01ROtB1j060KUQB7sclazr4/T9ABDsMygjnv3ci2M0KIT4I4TB+vnUA4y58qrBlhutbB5hD3n/jHHV7fMwA8lsHGLthqDIKhP5OGSqxUXwVA/4Q2CG62fXgHhNfxfAV6f73U3wV8Tm+/6UdH0F8DwN9kwkWMziqFIVnwXieOMrfZPofMjBeBNBEmuYAAAAASUVORK5CYII=",
        RIGHT_SLIDE_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAACPJJREFUeAHtXFtsFFUY/mfb0jtaKAULKFAbqKViEDASGy0CGqwpoFQxgeCLD0J8ICatiYlr4kNJjCZcTMREBB5I8EFQRMVqSSSCUhCBBppabtLKpVBotzfa7vh/Zy57Zrvdpdudnd3Cl8Bcd+Z8X8/9fP8oFC3UuDOot3s+qVRIijqdSOF/lMvHmURqBu+n8b9OPu8hhdp5v5nP15Oq1PNxHSWl/E4lbg+ftx2KrW/4uaKIyFVOXu8CUpR5pKqJYb9PUfr493+Sy/UrkXc3LdpwKuxnhfhh5EX5rTKLupQ3OeGrOBc8EeL94V9W6AQLvpNS1W1UXNUa/oMG/jJyovzkziGlez3/Nd/m13CRsELhMlCUOYHmjp5E+WnZlJ8+lh5JGUOjE0dRekIypSUkUWd/L3X091Bb3x262H2TGjpuUENnCx1tu0yn2q+wxqr1odpRO+fCz0hN+YRecF8LdMNQzw1flIaNyXShuZLFqOA0p8oJSHElUum4AlqaU0jPZE2hMYmWy/KtIfdv9nXRodYLtOdaHe27foa6vX3W3yjUxeJsoCm5VZT/To/14tCOhidKdeWL1K9u5lfmya8tyMihtZOfpmU5MykzYZR8KSL77f136Jtrp2nLv4fpjGdA5mikBGUdLaz6MdyXhScKcsf55o85d6yTXzwr8yGqmPocvZQ9gwuL/UBh+r7lLG04f5D+bv/P+kJF2UxTc98NJ9cMPe3VldM4d3zNKZhtpCKLi4U7byGtmTgnKmIY7zW2Xi6325uOkbuxmlq5mEk4zrlmBeeac9K5kLtDE6W6ci551f2chmzjyUuyp9OWgqU0NgndDGdxo7eT1p7ZQ/tb6n0JUaiFXMoSFuao72TwvYTgl6WrByoXc3H5gQV50Di7fkoxbZpRJloO45yTW7Rgr4wvojtqPx2+dclICv5ab9Cq4lraeajROBlse3c5BYKQuo8FScLDkrlV2VJQRuXjHw/2bEev7b56knPNXuoxWimFerm3XEqLqw6ESlhoUbQiU8OCpONhE5IzaVfRSnpy9MRQz3b8+rG2Jlp5ahdd6cGogaFQBxelklBFKbgov7yfR/29R4w6BILUzHmLJiaP1l4SB/9f7rlNC2q/kIVBHfNUsMrXNSgvNLt9vbsNQVBkkEPiSRBwm5T8gEg30i+ARgKtJ/gNgsFFQT9EanZRh8RDkQnEE+lG+iXMFv0s6YS8G7j1QU/Vq240bkQrgx5qPKMwYzz1WFulebSm+A/acegff14Dc0qNO0Xvuot70Q/5YNpC/9/F5TF4gI8JDFECFKOBovR1V/CPxFgGPVV0zILXxuYrYn4HPMAHvHTkicGscaRvraJg+I/Rrg503WOhp2qkJxJb8AEvE+AL3hKsooj5EG34j8EdxjIjEeAFfgKY7gBvCT5RMGOmTRCJyxjtjpRiI/EVu+AFfibAG/x1+EQRU4jajBnmQzD8txuHb10kDOKcAPiBp45MbQpVO/KJoqqrjTvWTZ5vey452HqOyk7soJf/2u6IMMgt1m4Gzynr0EQRs+7qLJxLdSWJ6UPjBju2Lb0dtPLkLjGleNpzxTFhMDMIvgKYZBc68HS4dsZVbpAvHTfDlilE4/nYZiel06fTSzk3arWWU8JgqhR8fdB00ETBuoyOMp5kjgZenzCLPn9smePCWPjqOrgIK3dYqGLgL4dZ92ghFoQBXyPHCh1YD5e2lKmt3GFdZjjLEOGI6bQw4AveAljB5KVdF08NmOUFC1VOwGlhLLxZD5e22K1JgZU7p+CkMBbevPjPFa1iVr9YynQSTglj5a1AFNIHASTWdp0UBe92QhisaUvIRZ1iLoZjsTsWEG1hLLxZD65TfKJk8Op/rCCawlh4sx6cU1RzxiWVF5NiCdESxsKb9UCdYg5T4Q+JNSwam08Pp5qLklTnuUpHbl+KaDL9eHei9fEYb4BhJpaAaQWMoi92aUYl9DwxNIj0tIaVt+JBnaIvn5FwEMWKKIYgGCwCEGRr4XLROkU6jXBOmWA9UHzYhagBlqpYQCBBkENes2nt2o93M4vCtkwd8Jg5jcEEQaVrF6y81XpufdinqgOmOyfhhCDga+HNeqBOqTOEgAvRKTglCPhaeLMeLuFkhnGXAVsmXIjRhpOCgC94C0AHdna7hLUbTmYGfKqwZUYTTgoCnuBr+nOhA1vd0frwTC2s3Rr2sk81WnBaEPCEL9eEroMmCrzuOr5j4y58qnYjFgQBTxiVfdB00ESB+V943UksO8C4aydg60RPVe6YoR9iZ7MbiA94ms5t8NeDIPScgp+w+V8HnMwBXfDGDcPcZvJo/NE0bULL6LpHWxDwA08ffPx9oiAagrQuP6zdcDLbhUTFRV8Wvsr2zpliLBNtQcAL/CQLe7uIBtEJ+0RBeAiiIXTA2m1nboEw2wpXRL3IgB54gZ8J8JbCY3yi4A6EhyAaggGv+1dNtdgdcQAv08sPvuAtwSoK4mUQHqIDXne0EiMJ4ANeJsDXL07IKgruTEyBKMKujVYCXnc7i5GZuCjsgAf4SEENjSI+yO/dA0UpcXeLeBn9Rpj/PzwnKev3gHg6BA9LMAPiggIETCUEJAUb5epirIyJNWaY//O4CYXtMl4Br/57DVJcFOKBFlVtCsRnYE4x7kIAEdFx4xDmf3jd4xFIN9Iv4bgIkJJOyLuDi4JslZhUzq2RmGRBNATM/009bfLvY34f6UW6pWiOFhEYFaDYGGQGFwV3PP9RowggQvQDA9EQJbVb4ybHIIcgvX5RHAiIChopdncGyHss3idwRYtsIQMRVavYx67Qcj49ql/10rc8uoTX/dmsaXw6doBmF60MKlWkU0DkdKXsbgKgcP/Q+NwjMYRDEwUyIjAKcUBS2IvT0abIHei6OxNtClGA+3HJmg4B/w8SwQ6DMsL5750IdlkhxAchHCbAtw5g3IVPFbbMSH3rAHPI+66fpS6vnxnA+NYBxm4YqgwDQ69TBnvZML6KAX8I7BBd7HrwjIivYviLdP/7Kf6K+B3f/9KOnyD+h8G+yQSLGRxVisKzYDxP7PA3mf4HejdeBFqgWdYAAAAASUVORK5CYII=",
        CHECKED_IMG_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOtSURBVHhe7ZpraxNBFIbX++UHiXe03kVU1IqKYFVURIoWzZlUKREpUkSsiqiIN1RE6gUp2sxskfrJT/4Yr2i1Ws+ZOWvT5HSlmKTJ7DzwEsK+7M55c3ayl4kCgUAgEAgEAoHa0dc6I+ovzOdvGYaC0PAw0upttgNxQdyLjBplxdG7jnm8NUMUCtOx+LslQbCgGPUVZrMrA4xG0/C0uF0ZxF89Z6fnUBBG3SorvkQwHOncVnZ7jA0CbsghkDCIImxjt8fYUwOuySGgtPqB2s5uj3FzxBUxBJKGn9gVO9jtOUb1VgQwppEozrey03M0XBICSDSCc8ROdnqOhgtCAIlG8NTYxU7PMdAjBJBoBIPaw07PMaq7rPhSYUeovez0HK3OlRVfKgqijZ2eo6FQVnyJ4Bdu389OzzHQJYeA0uo36gA7PSdWp8UQSBSEgYPs9BytlBgCyXYEHGKn52g4JYZAch1xhJ2eY1RHRQCJXEccZafnaDghhkCyHaGOsdNztGrnguUgaHvVKaot+Ass4G+NAf3iaUHE6jg7q0ic34iTzzAe4EPDBEKT4URBkOjUqToxrMOdfx87CAYSw0LeOjXQ32NaEDSZVh2jWvAX+Fp2IBdIMb+IXfWFrhxTO0KdZGeV0fBaPCDJnTKL2Vkf6F6C7imk8Tjl2FkD6PWahjfCQVnwsW6BGNiHx6S7TGEcKLryrDkUiIFBcQBWGIjpXMLu2kDPG9KCMNDJzjrgOsTIA7H6FA2qpeyuLnF+N+4/pSPgDDvrCL2A1UqLA3KqfiD0cDa9I7rYOQUMFebiAIrywFAaPkfF3DJ2/x/0uD41CHWWnVNIPQKhN1n0RkvaP4ke5TUMA+1zcEAD4kBJWn3Bz+Xsnhz0bpOudqX9OnWzs4GgNQsGXgmDZdmLtckFEuc2pwah1Xl2NiAUiIZ+ceBWGEhRrWB3Ojq3Kb0joIedDYzrkJdyASQMROdWslvGwIbUIOhNWNPgOuSFWIiVPWVa2D0enV+P28ZuBCsEF9nZRLgOeSYXRMJA4twqdjtMfi2G+E32o+glcdPy/vAsnOSeioVZ0RySX229GtZwxwg+q17ra2qGCjOx0D6hOBbNIXgJnRaEhst2QYkX0HpKA0/EQv8puOpPEAlugeljueAJRGusvAsiwXaIelRRtCi47m8QCS6QB5XFl0irm/4HkWBPGXVfDIIWpGYmiATXIePXZtMS5cwFkTBusTrcyW4QCS6QNvsZCAQCgUAgkHmi6A/+bsV/gdPAhwAAAABJRU5ErkJggg==",
        FAVOR_IMG_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAYAAACc5fiSAAAAAXNSR0IArs4c6QAABv9JREFUaAXdWVlsVFUY/u7MdJkulEJbSgu0FBUQWYzihgvEhCDV6IPLAyFKiYkbPqgxRl98cnvQJ+OLgoqJBhMTDeiDEtQYowgSCi5o2aQUSkEDTmu3mev3nzNn7txhtnvnTkz8kztn+89/vnvu///n/89YCJDs99GGUayjyDbYCMHC9yw/t3owFOAySpQVlEB7Cx5EAq9TXkWGzBhf4AXU4RXrXsQzxnw3AwFO0MsIei9RhPIgeRs96LEsfoMAKBKADBD0GsrRoGcuAaZfwibxnTsKnO5lNSHLPIAt2M3yDWmUSvl2qHjZFhammFsXA3Uz+LQCHdcDC9YC3OYkPW3vQiCbFQxwG1MMMoQrU1VVaZgNTOvSfTY6cRQr3Az+WsEAt9CUWj4TuAxMJXiHbnKq/mvBALeht7SylmqRRWSN815U/av8w3VmZlnFGSymZm9DlO5upuKtdjTGNbdmmqPnFua6xnw2SgaOYcznLmrrq56aHYYVBqrq9ZiN5uxM3npLB25jaWpJ2dlcZKfc90QuFi/9QQB3dLY2TZczUWhfTpXBeOaQn3ZJwKnfYQK5Uy0cojrU5NGCxKTB998Dp34/Rv2eoxA1dgDhzDAliXVyDJBHU7+plFL63nF7M67lUf+yWlxOxjZHYy4CNHbB6bJx2Gn4r/kCzqCqlTv9EZetUku3LQPy6fdoGnDgiH+4zkztxpx2wZq9h2Hrfuwioz66G2YxHunOfvAYaQP7gD++0y2L3ynlYAxDqkzQZiY4PsIesYVxtg/w+YQh2pvpkaV34G+p6O4htZT45sV3A5Hq1MpZKwc+BIbPZh3y0LkT9VjLmF4Zd9ZIzd7KkzCBTr55TUpwglGdjbvY1qBDnHrZmsKgz/W5QVdGGQDnMOLUYsmKHQfGhk3vrYjheTaelQ4XcBrcLQT3Gt/pShnMS/NW5tdrM/n0QVPji65mpDjPaRdTG2HWd/Bjxvw8t2w8wnPsOVEZBVz54xhepZxNfPKrT5hTOm9ksnBpMcsCsrCQBFpeQat5PBumdwFDh6TVwGRkLssjesdjeIZv87iMKKolcz2TgQg/azpV1QGNnYXVI31OmPofj9GP85PLp5e4xSsZryRpXx3OyXTLfgdLmML+wK5KyOnXtQpoKnI3iwHQ9wVw9nfNKR6ohclSroMqU16CL/rXMbPbMtprbdSxUYSgn1SgpXvOdcGCFpmtVzD3pIFKkHW+Xz/S750kcX3UTJMDaKVqyG7PWGT6gynH/gZ+3aFBly5xhNZ33IgRF9emGlEJ9n3on5GUrTz6NXVbuV0g2kAD5RoTErOorD/bDHefHFTy8uO0D6bfxCo3BLdLQ4xTG6j45SBJosHzJ7RESTAW30P/7WMNkdO7DRg9L7JW25+iylqLMVGV8pDslEkeGvhR/YAWZDJvilYKtip4mdehuuWnLFTF/DOU3BcxyrjPxCdBVZP5msawiBccJB/fLimiUCHG3sBQXdyZ+OH9H7DdTjvy8JEla7pwknrOc0DIwg7ragZhpPIBF+ldN1M/B2mQ/9DAuLg+/WTEDw0SuMsd+hFS3JyKWoa8t3Gn8kcRRQibYJLYbW3AacNb3h2XVQZ6HSOdQlVpmlecoYo3OcuD68KASKmgB32C5TppCJUfeOyUXkluuRZ2ezsrmhYA+96jqjGvsN13jh4sRa/v+dccQBXV3kDLQmLgMk8TDwOHyg9cIk2hYQZ1Q7+wIsdhMUS+M+Qf+dMw/2gqUpZfVeSiX+spcPhL4Ng33MkiMiBJHOLUc0OWyhdMSwEnhyi/FGWgRsb97UyoTjJhFhIw6YB0b+5ficFtvMg/wLanM4mqKLNVn0Ti33JQM2PwiwI4cZG5HheIUbrCza4eNiKcu5Nv1KP+pxnYC8y6JpOn9PbgQap2clMkPu+4IcuLpC0jrvD4t8DgT2ISUbrChzn6VBoHgYd5GxXHfWSoRT+ByynXsgioZIIvn1RCykm6IynHk2WcoakEP1EaumQ19TMpM88hExvSa8pxXwi0cIps4TvzM4ErY77omixi3Y/fmN1vIrv+HINklqdYkpeVC/2Wy4Hm+bQW50YjJSJSqasSe0yOkoc+vRAJn4kubTDYcZPyKlT8LQRfz6GX1Kdx8xRuSRAlN1UndutkWi5Ao41652S2RIqGDn1GdVxOJdW3d6bbVU4QdP8epysE6o2bXN+X4JsJfB2/+nKWNSwZGdF4bcjxN8B/Mk+xb4AKNsS+WsZpK9i/gfU1LMt1JvShBUutO9S1HJfR5AJuOr2W9ru8ap7ERs7byJdo9zo/J7/F24cKrLfWQ12qpPMFAtwIpEpa2Mp/1SZBy8JstqJmLFmKV25nfzM9hZzl9AQ4w+c4H+cgCfHuxMIe5jpfWaso7f9E/wKMr8drdgi7SwAAAABJRU5ErkJggg=="
    }
}, , , , , , , , , , , , function (t, n, r) {
    ! function () {
        var t = document.querySelectorAll(".cyxy-target-popup");
        if (!(t && t.length > 0)) {
            var n = r(3),
                i = r(18),
                o = (r(19), r(0)),
                a = r(24),
                s = r(5),
                c = r(26),
                u = r(2);
            if (r(27), !0 !== s.disable) {
                var l, d = "cyxy-trs-source",
                    p = "cyxy-trs-source-ted",
                    f = "cyxy-trs-target",
                    h = "cyxy-target-count",
                    m = "cyxy-no-trs",
                    g = (s.token, 2.2),
                    y = "小译火力全开！LingoCloud, FIRE!",
                    v = "+30 彩云朵！现有：",
                    x = "限免次数已不足，成为小译注册用户，畅享更多阅读次数！现在注册还送彩云朵哟~",
                    A = "诶呦喂~彩云朵不足！修订译文或点击赞、分享赚取彩云朵，或购买VIP畅享无限阅读次数",
                    b = "抱歉，网页认证有误，请刷新重试",
                    w = "抱歉，网络请求有误，请刷新重试",
                    T = "抱歉，本地数据获取异常，请刷新重试",
                    E = "提交有误",
                    S = "感谢点赞，+5 彩云朵！",
                    C = "已经赞过啦",
                    k = "彩云小译",
                    R = "刚刚",
                    L = "提交",
                    O = "现在",
                    N = navigator.userAgent,
                    M = "",
                    P = "",
                    B = 0,
                    D = {},
                    I = "",
                    U = location.origin + location.pathname,
                    j = 2300,
                    F = !0;
                (location.host.indexOf("youtube.com") >= 0 || location.host.indexOf("wx.qq.com") >= 0 || location.host.indexOf("slack.com") >= 0) && (j = 1e3), "local" != s.ENV && n.config("https://c49231b0334e4624b8941767b8f6bfa4@sentry.in.caiyunapp.com/22", {
                    release: s.VERSION,
                    environment: s.ENV,
                    sampleRate: 1
                }).install();
                var _, H = function () {
                    var e = "web";
                    return ["interpreter.caiyunai.com", "cdn.caiyunapp.com", "interpreter-staging.caiyunai.com"].indexOf(location.host) >= 0 ? (e = "share", u("a").on("click", function (e) {
                        this.href && "#" != this.getAttribute("href")[0] && (e.preventDefault(), window.open(s.LNADING_URL + "?targetUrl=" + encodeURIComponent(this.href)))
                    })) : N.indexOf("Android") > 0 && window.js ? e = "android" : /(iPhone|iPad|iPod)/i.test(N) ? e = (_ = window.cyUserData ? window.cyUserData : u("#cy-ios-user").text()) ? "ios" : "web" : e = "web", e
                }();
                n.context(function () {}),
                    function () {
                        try {
                            var t = document.querySelectorAll(".cyxy-target-popup");
                            if (t && t.length > 0) return;
                            ! function () {
                                var t = document.createElement("div");

                                function n() {
                                    var e = parseInt(u("#cyxy-popup-favour-num").text()) + 1;
                                    u("#cyxy-popup-favour-num").text(e), l.data("comment", "like");
                                    var t = l.data("targetInfo");
                                    t && (t.rate.LIKE = e, l.data("targetInfo", t));
                                    var n = l.data("targetList"),
                                        r = l.data("index");
                                    n && n.length > 0 && r >= 0 && (n[r].rate.lIKE = e, l.data("targetList", n))
                                }

                                function r() {
                                    u("#cyxy-popup-oppose-num").text(parseInt(u("#cyxy-popup-oppose-num").text()) + 1), l.data("comment", "unlike")
                                }
                                t.className = "cyxy-target-popup " + d, t.innerHTML = '<div style="margin: auto"><img id="cyxy-popup-left-slide" src="https://caiyunapp.com/imgs/webtrs/left-slide.png"> <div id="cyxy-popup-userinfo"><img id="cyxy-popup-avatar" src="https://caiyunapp.com/imgs/xiaoyilogo.jpg" /> <div id="cyxy-popup-name-time"> <span id="cyxy-popup-name">彩云小译</span> <span id="cyxy-popup-time">刚刚</span></div></div><div id="cyxy-popup-favour"><img id="cyxy-popup-favour-img" src="https://caiyunapp.com/images/favour.png"><span id="cyxy-popup-favour-num">0</span></div><img id="cyxy-popup-right-slide" src="https://caiyunapp.com/imgs/webtrs/right-slide.png"></div>', document.body.appendChild(t), u(".cyxy-target-popup").hide(), u("#cyxy-popup-left-slide").hide(), u("#cyxy-popup-right-slide").hide(), u(".cyxy-target-popup").click(function () {}), u(document).mouseup(function (e) {
                                    var t = u(".cyxy-target-popup");
                                    t.is(e.target) || 0 !== t.has(e.target).length || u("#cyxy-popup-favour").hasClass("commit") || t.hide()
                                }), u("#cyxy-popup-left-slide").click(function () {
                                    W();
                                    var e = l.data("targetList"),
                                        t = l.data("index");
                                    if (!isNaN(t)) {
                                        --t <= 0 && (t = 0, u("#cyxy-popup-left-slide").hide()), u("#cyxy-popup-right-slide").show();
                                        var n = e[t];
                                        l.data("targetInfo", n), l[0].sentence_id = n.id, l.data("comment", ""), l.text(n.content), u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u("#cyxy-popup-avatar").attr("src", n.user.avatar_url), u("#cyxy-popup-name").text(n.user.username), u("#cyxy-popup-time").text(c.getDateDiff(n.updated_at)), u("#cyxy-popup-favour-num").text(n.rate.LIKE || 0), u("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0), l.data("index", t)
                                    }
                                }), u("#cyxy-popup-right-slide").click(function () {
                                    W();
                                    var e = l.data("targetList"),
                                        t = l.data("index");
                                    if (!isNaN(t)) {
                                        ++t >= e.length - 1 && u("#cyxy-popup-right-slide").hide(), t > 0 && u("#cyxy-popup-left-slide").show();
                                        var n = e[t];
                                        l.text(n.content), l.data("targetInfo", n), l[0].sentence_id = n.id, l.data("comment", ""), u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u("#cyxy-popup-avatar").attr("src", n.user.avatar_url), u("#cyxy-popup-name").text(n.user.username), u("#cyxy-popup-time").text(c.getDateDiff(n.updated_at)), u("#cyxy-popup-favour-num").text(n.rate.LIKE || 0), u("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0), l.data("index", t)
                                    }
                                }), u("#cyxy-popup-favour").click(function () {
                                    if (u("#cyxy-popup-favour").hasClass("commit")) I && (l.data("before") !== l.text() ? l.data("user_s_id") ? function (t, n, r, i) {
                                        if (!G) {
                                            ae();
                                            var a = s.TRS_URL + "/v1/page/" + B + "/sentence/" + n;
                                            G = !0, chrome.runtime.sendMessage({
                                                method: "POST",
                                                contentScriptQuery: "fetchUrl",
                                                url: a,
                                                headers: {
                                                    "X-Authorization": "token " + s.token
                                                },
                                                data: {
                                                    source: t,
                                                    target: r,
                                                    user_id: I,
                                                    sentence_id: n,
                                                    trans_type: "en2zh"
                                                }
                                            }, function (t) {
                                                if ("ok" != t.status) throw G = !1, o.open({
                                                    content: E,
                                                    skin: "msg",
                                                    time: 3
                                                }), i(), new Error("updatePageSentence Error", e);
                                                var n = JSON.parse(t.data);
                                                G = !1, i(n)
                                            })
                                        }
                                    }(l.data("source_text"), l.data("user_s_id"), l.text(), function (e) {
                                        if (u("#cyxy-popup-favour").removeClass("commit"), e && 0 == e.rc) {
                                            u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL);
                                            var t = l.data("targetList"),
                                                n = l.data("user_index"),
                                                r = 0;
                                            l.data("targetInfo") && (r = l.data("targetInfo").rate.LIKE), t && t.length > 0 && n >= 0 && (t[n].content = l.text(), t[n].rate.lIKE = r, l.data("targetList", t)), u("#cyxy-popup-favour-num").text(r || 0), l.data("targetInfo", {
                                                id: e.sentence_id,
                                                content: l.text(),
                                                updated_at: Date.now(),
                                                user: {
                                                    id: I,
                                                    avatar_url: D.avatar_url,
                                                    username: D.username
                                                },
                                                rate: {
                                                    LIKE: r,
                                                    UNLIKE: 0
                                                }
                                            }), l.data("before", l.text()), o.open({
                                                content: "修改译文成功",
                                                skin: "msg",
                                                time: 2
                                            })
                                        } else o.open({
                                            content: E,
                                            skin: "msg",
                                            time: 3
                                        })
                                    }) : z(l.data("source_text"), l.text(), "", function (e) {
                                        if (u("#cyxy-popup-favour").removeClass("commit"), e && 0 == e.rc) {
                                            l[0].sentence_id = e.sentence_id, u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u("#cyxy-popup-favour-num").text(u("cyxy-popup-favour-num").text() || 0), l.data("before", l.text());
                                            var t = {
                                                id: e.sentence_id,
                                                content: l.text(),
                                                updated_at: Date.now(),
                                                user: {
                                                    id: I,
                                                    avatar_url: D.avatar_url,
                                                    username: D.username
                                                },
                                                rate: {
                                                    LIKE: u("cyxy-popup-favour-num").text(),
                                                    UNLIKE: 0
                                                }
                                            };
                                            l.data("targetInfo", t);
                                            var n = l.data("targetList");
                                            n && n.length > 0 && l.data("targetList", n.concat(t)), i = "", a = "", c = "、", (r = u("#cyxy-footer-translator").text()).indexOf(D.username) < 0 && (r || (c = "", i = "和", a = "共同"), u("#cyxy-footer-translator").text(i + D.username + c + r + a)), "android" == H ? window.js.showEditSuccess("", v + e.point.total_point) : "ios" == H ? window.webkit.messageHandlers.showEditSuccess.postMessage({
                                                title1: "",
                                                title2: v + e.point.total_point
                                            }) : o.open({
                                                content: "" + v + e.point.total_point,
                                                skin: "msg",
                                                time: 3
                                            })
                                        } else o.open({
                                            content: E,
                                            skin: "msg",
                                            time: 3
                                        });
                                        var r, i, a, c
                                    }) : (u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u("#cyxy-popup-favour-num").text(u("cyxy-popup-favour-num").text() || 0), o.open({
                                        content: "译文未修改",
                                        skin: "msg",
                                        time: 2
                                    }))), setTimeout(function () {
                                        u("#cyxy-popup-favour").removeClass("commit")
                                    }, 2e3);
                                    else {
                                        var t = l[0].sentence_id;
                                        t ? Q(t, "POINT_LIKE_SENTENCE", n) : z(l.data("source_text"), l.data("xiaoyiText"), "", function (e) {
                                            e && 0 == e.rc && (t = e.sentence_id, l[0].sentence_id = t, Q(t, "POINT_LIKE_SENTENCE", n))
                                        }, s.XIAOYI_USERID)
                                    }
                                }), u("#cyxy-popup-oppose").click(function () {
                                    var e = l.data("comment"),
                                        t = l.data("sentence_id");
                                    e ? "like" == e ? Q(t, "POINT_CANCEL_LIKE_SENTENCE", function () {
                                        u("#cyxy-popup-favour-num").text(parseInt(u("#cyxy-popup-favour-num").text()) - 1), u("#cyxy-popup-favour-img").css("height", "18px"), l.data("comment", "cancel")
                                    }) : "unlike" == e ? Q(t, "POINT_CANCEL_LIKE_SENTENCE", function () {
                                        u("#cyxy-popup-oppose-num").text(parseInt(u("#cyxy-popup-oppose-num").text()) - 1), l.data("comment", "cancel"), u("#cyxy-popup-oppose-img").css("height", "18px")
                                    }) : "cancel" == e && Q(t, "POINT_UNLIKE_SENTENCE", r) : t ? Q(t, "POINT_UNLIKE_SENTENCE", r) : z(l.data("source_text"), l.data("before"), "", function (e) {
                                        e && 0 == e.rc && (t = e.sentence_id, l[0].sentence_id = t, Q(t, "POINT_UNLIKE_SENTENCE", r))
                                    }, s.XIAOYI_USERID)
                                })
                            }(), c.preload([s.XIAOYI_DEFAULT_URL, s.FAVOR_IMG_URL, s.CHECKED_IMG_URL, s.LEFT_SLIDE_URL, s.RIGHT_SLIDE_URL]),
                                function () {
                                    if ("share" == H)(new i).get(function (e, t) {
                                        M = e, V()
                                    });
                                    else if ("android" == H) try {
                                        var e = JSON.parse(window.js.getUserData());
                                        P = e.device_id, e.user && (D = {
                                            username: e.user.username || "",
                                            _id: e.user._id || "",
                                            avatar_url: e.user.avatar_url || s.DEFAULT_AVATAR_URL
                                        }, I = e.user._id || ""), V()
                                    } catch (e) {
                                        o.open({
                                            content: T + e,
                                            skin: "msg",
                                            time: 5
                                        })
                                    } else if ("ios" == H) try {
                                        e = JSON.parse(decodeURIComponent(_));
                                        P = e.device_id || "", e.lang, e.user && (D = {
                                            username: e.user.username || "",
                                            _id: e.user._id || "",
                                            avatar_url: e.user.avatar_url || s.DEFAULT_AVATAR_URL
                                        }, I = e.user._id || ""), V()
                                    } catch (e) {
                                        o.open({
                                            content: T + e,
                                            skin: "msg",
                                            time: 5
                                        })
                                    } else a.testCookie(function (e) {
                                        e ? function (e, t) {
                                            ae();
                                            var n = s.TRS_URL + "/v1/user/" + e;
                                            chrome.runtime.sendMessage({
                                                method: "POST",
                                                contentScriptQuery: "fetchUrl",
                                                url: n,
                                                headers: {
                                                    "X-Authorization": "token " + s.token
                                                },
                                                data: {
                                                    user_id: I,
                                                    page_id: B,
                                                    url: document.URL
                                                }
                                            }, function (e) {
                                                if ("ok" == e.status) {
                                                    var t = JSON.parse(e.data);
                                                    0 == t.rc ? (function (e) {
                                                        D = e, e && !e.avatar_url && (D.avatar_url = s.DEFAULT_AVATAR_URL), V()
                                                    }(t.user), t.user.avatar_url && u(".cyxy-personal .cyxy-favorite-btn").attr("src", t.user.avatar_url)) : o.open({
                                                        content: "抱歉，获取用户信息失败，请刷新重试",
                                                        skin: "msg",
                                                        time: 3
                                                    })
                                                }
                                            })
                                        }(I = e._id) : (new i).get(function (e, t) {
                                            M = e, V()
                                        })
                                    })
                                }(), r = !1, u(".cyxy-favorite").click(function () {
                                    r || a.postFavorite(document.URL, I, function (e) {
                                        0 == e.rc ? (o.open({
                                            type: 4,
                                            content: "<div class='collection-success'>收藏成功<a href='https://fanyi.caiyunapp.com/#/mine/favorite' target='_blank'><span class='collection-icon'></span></a></div>",
                                            time: 8,
                                            skin: "msg"
                                        }), $("#cyxyFavoriteBtn").attr("src", "https://caiyunapp.com/imgs/webtrs/favorite-on-btn.png"), r = !0) : o.open({
                                            content: "收藏失败",
                                            skin: "msg",
                                            time: 3
                                        })
                                    })
                                }),
                                function () {
                                    if (!(location.host.indexOf("bing.com") >= 0 || location.host.indexOf("wx.qq.com") >= 0 || location.host.indexOf("slack.com") >= 0)) {}
                                }(), (n = document.createElement("iframe")).src = ("https:" == document.location.protocol ? "https://" : "http://") + "caiyunapp.com/xiaoyi/web_translate_data_stat.html", n.setAttribute("style", "display: none;"), document.body.appendChild(n), setTimeout(function () {
                                    X(), setInterval(function () {
                                        X()
                                    }, 3e3)
                                }, 9e3)
                        } catch (e) {}
                        var n, r
                    }();
                var q = null,
                    G = !1,
                    K = new Date;
                window.cyPageMark = function () {
                    var e = c.wordStatistics(document.body),
                        t = Math.round(((new Date).getTime() - K.getTime()) / 1e3),
                        n = t / ((1.6 * e.en_words + e.zh_chars) / 9);
                    n >= 1 && (n = 1), a.pageMark({
                        time: t,
                        chars: Math.round(e.chars * n),
                        en_words: Math.round(e.en_words * n),
                        zh_chars: Math.round(e.zh_chars * n)
                    }, I, B, function (e) {})
                }, window.onbeforeunload = function () {
                    cyPageMark()
                }
            }
        }

        function X() {
            document.URL.indexOf("slack.com") >= 0 || location.origin + location.pathname != U && (V(), U = location.origin + location.pathname)
        }

        function V() {
            ae();
            var t = s.TRS_URL + "/v1/page/auth";
            chrome.runtime.sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: t,
                headers: {
                    "X-Authorization": "token " + s.token
                },
                data: {
                    user_id: I,
                    browser_id: Math.random().toString(36).substr(2),
                    device_id: Math.random().toString(36).substr(2),
                    url: document.URL,
                    title: document.title
                }
            }, function (t) {
                if ("ok" != t.status) throw o.open({
                    content: b,
                    skin: "msg",
                    time: 5
                }), new Error("PageAuth Error", e);
                var n, r, i = JSON.parse(t.data),
                    g = i.auth_type;
                0 == i.rc ? g >= 0 && ("android" == H ? window.js.showSpendCMoney() : "ios" == H ? window.webkit.messageHandlers.showSpendCMoney.postMessage() : B = i.page_id, function () {
                    var t = document.querySelectorAll("." + d);
                    if (!(t && t.length > 5)) {
                        var n = [],
                            r = [],
                            i = [],
                            o = [],
                            g = [],
                            y = (Date.now(), null),
                            v = [];
                        setInterval(function () {
                            x(document.body), b()
                        }, j), Y(20), x(document.body), Y(40), b(), Y(80), window.onscroll = function (e) {
                            null !== y && clearTimeout(y), y = setTimeout(function () {
                                x(document.body), b(), u(window).scrollTop() + u(window).height() >= u(document).height() && (u(".cyxy-footer").show(), setTimeout(function () {
                                    u(".cyxy-footer").hide()
                                }, 7500))
                            }, 200)
                        }, setTimeout(function () {}, 500), u("body").on("click", "." + f + "[contenteditable]", function () {
                            (l = u(this)).data("source_text") || l.data("source_text", this.source_text), u(this).find("." + h).remove();
                            var e = this.sentence_id;
                            W(), I || a.testCookie(function (e) {
                                if (!e) return u(this);
                                I = e._id, D = {
                                    username: e.name || "***",
                                    _id: e._id,
                                    avatar_url: e.avatar || s.DEFAULT_AVATAR_URL
                                }
                            }), e ? a.fetchPageSentenceTargetList(e, I, B, function (e) {
                                if (0 == e.rc) {
                                    var t, n = e.sentence;
                                    if (n && n.length > 0) {
                                        l.data("index", 0), u("#cyxy-popup-left-slide").hide(), l.data("targetList", n);
                                        for (var r = 0, i = n.length; r < i; r++) n[r] && (n[r].user && I == n[r].user.id && (l.data("user_s_id", n[r].id), l.data("user_index", r)), n[r].invalid && (n.splice(r, 1), r--));
                                        n.length > 1 && u("#cyxy-popup-right-slide").show()
                                    }
                                    t = n[0], l.data("targetInfo") && l.data("targetInfo").user.id != t.user.id && (t = l.data("targetInfo"), l.data("index", -1)), u("#cyxy-popup-avatar").attr("src", t.user.avatar_url), u("#cyxy-popup-name").text(t.user.username), u("#cyxy-popup-time").text(c.getDateDiff(t.updated_at)), u("#cyxy-popup-favour-num").text(t.rate.LIKE || 0), u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u("#cyxy-popup-oppose-num").text(t.rate.UNLIKE || 0)
                                }
                            }) : (l.data("targetList", []), u("#cyxy-popup-left-slide").hide(), u("#cyxy-popup-right-slide").hide(), u("#cyxy-popup-avatar").attr("src", s.XIAOYI_DEFAULT_URL), u("#cyxy-popup-name").text(k), u("#cyxy-popup-time").text(R), u("#cyxy-popup-favour-num").text("0"), u("#cyxy-popup-favour-img").attr("src", s.FAVOR_IMG_URL), u(this).data("xiaoyiText", u(this).text()));
                            for (var t = this, n = t.offsetTop + t.offsetHeight + 5, r = t.offsetLeft; t.offsetParent;) n += (t = t.offsetParent).offsetTop, r += t.offsetLeft;
                            return r > window.innerWidth / 3 && (r = .25 * window.innerWidth), u(".cyxy-target-popup").css({
                                top: n,
                                left: r
                            }), u(".cyxy-target-popup").show(), u(this).data("before", u(this).text()), u(this)
                        }).on("paste input", "." + f + "[contenteditable]", function () {
                            return u(this).data("before") !== u(this).text() && (l.data("status", "edit"), u("#cyxy-popup-avatar").attr("src", D.avatar_url), u("#cyxy-popup-name").text(D.username), u("#cyxy-popup-time").text(O), u("#cyxy-popup-favour-num").text(L), u("#cyxy-popup-favour-img").attr("src", s.CHECKED_IMG_URL), u("#cyxy-popup-favour").addClass("commit"), u("#cyxy-popup-oppose-num").text("0")), u(this)
                        }).on("blur focusout", "." + f + "[contenteditable]", function () {
                            return null !== q && clearTimeout(q), q = setTimeout(function () {
                                u(".cyxy-target-popup").hide()
                            }, 3e3), u(this)
                        })
                    }

                    function x(e) {
                        if (!(u(e).is(":hidden") || "SCRIPT" == e.nodeName || "LINK" == e.nodeName || "STYLE" == e.nodeName || "CODE" == e.nodeName || "NOSCRIPT" == e.nodeName || "CITE" == e.nodeName || e.classList && (e.classList.contains(d) || e.classList.contains(m) || e.classList.contains(f) || e.classList.contains("qq_face") || e.classList.contains("msg_input_wrapper") || e.classList.contains("prettyprint") || e.classList.contains("PROGRAMLISTING"))))
                            for (var t = e.childNodes, a = 0, s = t.length; a < s; a++) {
                                var c = t[a];
                                if (c && (!c.classList || !c.classList.contains(d) && !c.classList.contains(f)))
                                    if (c.classList && (c.classList.contains("js_message_plain") || c.classList.contains("message_body"))) u(t[a]).children("." + f).length > 0 || (A(c), r.push(c));
                                    else if ("PRE" != c.nodeName)
                                    if ("P" != c.nodeName) {
                                        if (Z(c)) {
                                            if (c.nodeName.indexOf("H") >= 0 && ("H1" == c.nodeName || "H2" == c.nodeName || "H3" == c.nodeName || "H4" == c.nodeName || "H5" == c.nodeName || "H6" == c.nodeName) && !(c.firstElementChild && ("SPAN" == c.firstElementChild.nodeName || "SPAN" == c.lastElementChild.nodeName || "A" == c.firstElementChild.nodeName || "A" == c.lastElementChild.nodeName) || c.parentElement && "A" == c.parentElement.nodeName)) {
                                                re(c, d), i.push(c);
                                                continue
                                            }
                                            if (!("SPAN" != c.nodeName && "LABEL" != c.nodeName && "LI" != c.nodeName || c.firstElementChild && "STRONG" != c.firstElementChild.nodeName)) {
                                                re(c, d), g.push(c);
                                                continue
                                            }
                                            if ("A" == c.nodeName && (!c.firstElementChild || "STRONG" == c.firstElementChild.nodeName)) {
                                                re(c, d), o.push(c);
                                                continue
                                            }
                                        }
                                        c.nodeType === Node.TEXT_NODE && ee(c) ? (re(c.parentElement, d), v.push(c)) : c.nodeType === Node.ELEMENT_NODE && x(c)
                                    } else re(c, d), n.push(c)
                            }
                    }

                    function A(e) {
                        var t = document.createElement("font");
                        re(t, f), e.appendChild(t)
                    }

                    function b() {
                        for (var e = [], t = [], a = [], s = [], c = [], u = [], l = 0, d = i.length; l < d; l++) ie(i[l]) && (e = e.concat(i.splice(l, 1)), l--);
                        for (l = 0, d = n.length; l < d; l++) ie(n[l]) && (t = t.concat(n.splice(l, 1)), l--);
                        r.length > 0 && w(a = a.concat(r.splice(0, r.length)), "pre");
                        for (l = 0, d = o.length; l < d; l++) ie(o[l]) && (s = s.concat(o.splice(l, 1)), l--);
                        for (l = 0, d = g.length; l < d; l++) ie(g[l]) && (c = c.concat(g.splice(l, 1)), l--);
                        for (l = 0, d = v.length; l < d; l++) oe(v[l]) && (u = u.concat(v.splice(l, 1)), l--);
                        var p = e.length + t.length + s.length + c.length,
                            f = p / (p + (i.length + n.length + o.length + g.length)).toFixed(2) * 100;
                        isNaN(f) && (f = 0), w(e, "h"), w(t, "p"), w(s, "a"), w(c, "span"), w(u, "text"), Y(f)
                    }

                    function w(e, t) {
                        for (var n = [], r = [], i = [], o = [], a = [], s = [], u = [], l = [], d = [], p = 0, f = e.length; p < f; p++) {
                            var h = e[p],
                                m = h.innerText;
                            if ("text" == t && (m = h.nodeValue), m = m.trim()) {
                                var g = c.detectLang(m),
                                    y = m.length;
                                if ("jp" == g) y > 30 ? u.push(h) : y > 8 ? l.push(h) : d.push(h);
                                else if ("zh" == g) y > 30 ? a.push(h) : y > 8 ? o.push(h) : s.push(h);
                                else {
                                    var v = m.split(" ").length;
                                    v > 30 ? i.push(h) : v > 6 ? r.push(h) : n.push(h)
                                }
                            }
                        }
                        n.sort(function (e, n) {
                            var r = e.innerText,
                                i = n.innerText;
                            return "text" == t && (r = e.nodeValue, i = n.nodeValue), r.trim().split(" ").length - i.trim().split(" ").length
                        }), T(n, t, 50, "en2zh"), T(r, t, 10, "en2zh"), T(i, t, 2, "en2zh"), T(s, t, 50, "zh2en"), T(o, t, 10, "zh2en"), T(a, t, 2, "zh2en"), T(d, t, 50, "ja2zh"), T(l, t, 20, "ja2zh"), T(u, t, 2, "ja2zh")
                    }

                    function T(e, t, n, r) {
                        var i = 25;
                        for (n && (i = n); e.length > 0;) {
                            E(e.splice(0, i), t, r)
                        }
                    }

                    function E(t, n, r) {
                        for (var i = [], o = 0, a = t.length; o < a; o++) {
                            var c = t[o].innerText;
                            "text" == n && (c = t[o].nodeValue), i.push(te(c))
                        }
                        if (!(i.length <= 0)) {
                            var l = "en2zh",
                                d = s.TRS_URL + "/v1/page/translator";
                            "ja2zh" == r ? (l = "ja2zh", d = s.TRS_URL + "/v1/page/translator") : "zh2en" == r && (l = "zh2en", d = s.TRS_URL + "/v1/page/translator"), chrome.runtime.sendMessage({
                                method: "POST",
                                contentScriptQuery: "fetchUrl",
                                url: d,
                                headers: {
                                    "X-Authorization": "token " + s.token
                                },
                                data: {
                                    source: i,
                                    trans_type: l,
                                    request_id: I || P || M || "web-translate",
                                    url: document.URL,
                                    page_id: B,
                                    replaced: !0,
                                    cached: s.CACHED
                                }
                            }, function (o) {
                                if ("ok" != o.status) throw setTimeout(function () {
                                    E(t, n, r)
                                }, 15e3), new Error("Translate Error", e);
                                var a = JSON.parse(o.data);
                                if (a && 0 == a.rc) {
                                    var s = a.target;
                                    if (i.length != s.length) throw new Error("sources targets length error");
                                    for (var c = 0, l = t.length; c < l; c++) {
                                        var d = t[c],
                                            m = "";
                                        if (s[c] && s[c].target && (m = s[c].target.trim(), i[c].trim().toLowerCase() !== m.toLowerCase())) {
                                            var g = 0;
                                            s[c].sentence_id && (g = s[c].sentence_id);
                                            var y = s[c].count || 0;
                                            if ("p" == n) {
                                                if ((v = d.cloneNode(!0)).innerText = m, I && m.length > 4 && (v.contentEditable = !0), re(v, f), v.sentence_id = g, v.source_text = te(d.innerText), y > 1)(A = document.createElement("span")).className = h, A.innerText = "(" + y + ")", v.appendChild(A);
                                                d.parentNode.insertBefore(v, d.nextSibling)
                                            } else if ("pre" == n) {
                                                if ("" != (v = u(d).children("." + f)[0]).innerText) continue;
                                                m = ne(m), I && m.length > 4 && (v.contentEditable = !0), v.sentence_id = g, v.source_text = te(d.innerText), v.innerText = " " + m
                                            } else if ("h" == n) {
                                                var v;
                                                if (m = ne(m), (v = d.cloneNode(!0)).innerText = m, I && m.length > 4 && (v.contentEditable = !0), v.sentence_id = g, v.source_text = te(d.innerText), re(v, f), y > 1)(A = document.createElement("span")).className = h, A.innerText = "(" + y + ")", v.appendChild(A);
                                                d.parentNode.insertBefore(v, d.nextSibling)
                                            } else if ("a" == n || "span" == n) {
                                                if (m = ne(m), i[c].trim().toLowerCase() === m.toLowerCase()) continue;
                                                if (re(x = document.createElement("font"), f), I && m.length > 4 && "span" == n && (x.contentEditable = !0), x.sentence_id = g, x.source_text = te(d.innerText), y > 1)(A = document.createElement("span")).className = h, A.innerText = "(" + y + ")", x.appendChild(A);
                                                x.innerText = " " + m, d.appendChild(x)
                                            } else {
                                                if (m = ne(m), i[c].trim().toLowerCase() === m.toLowerCase()) continue;
                                                var x, A;
                                                if (re(x = document.createElement("font"), f), I && m.length > 4 && "A" != d.parentNode.nodeName && (x.contentEditable = !0), x.sentence_id = g, x.source_text = te(d.nodeValue), y > 1)(A = document.createElement("span")).className = h, A.innerText = "(" + y + ")", x.appendChild(A);
                                                x.innerText = " " + m, d.parentNode.insertBefore(x, d.nextSibling)
                                            }
                                            "ja2zh" == r && re(v, "colored"), re(d, p)
                                        }
                                    }
                                }
                            })
                        }
                    }
                }(), setTimeout(function () {
                    ! function (t) {
                        ae();
                        var n = s.TRS_URL + "/v1/page/" + B + "/author";
                        chrome.runtime.sendMessage({
                            method: "POST",
                            contentScriptQuery: "fetchUrl",
                            url: n,
                            headers: {
                                "X-Authorization": "token " + s.token
                            },
                            data: {
                                user_id: I
                            }
                        }, function (t) {
                            if ("ok" != t.status) throw new Error("fetchPageTranslator Error", e);
                            var n = JSON.parse(t.data);
                            if (0 == n.rc) {
                                var r = n.user_list,
                                    i = r.length,
                                    o = "",
                                    a = "",
                                    c = "";
                                r.forEach(function (e, t) {
                                    e.username && "彩云小译" != e.username && (a = "和", c = "共同", o = o + e.username + "、")
                                }), o = o.substr(0, o.length - 1), i > 5 && (o += "等"), u("#cyxy-footer-translator").text(a + o + c), u(".cyxy-footer-p").text();
                                var l = 6e3;
                                "和" == a && u(".cyxy-footer").show(), "share" == H && (u(".cyxy-footer").show(), u(".cyxy-footer").click(function () {
                                    location.href = s.DOWNLOAD_URL
                                }), l = 3e4), setTimeout(function () {
                                    u(".cyxy-footer").css({
                                        opacity: .88
                                    }), u(".cyxy-footer").hide()
                                }, l)
                            }
                        })
                    }()
                }, 4e3), "android" == H ? window.js.cancelLoading() : "ios" == H && window.webkit.messageHandlers.removeLoadingView.postMessage(), 6 === g && (r = '<div class="cy_free_box" >', r += '<div class="cy_free_content"><img id="cy_free_content" src="' + (n = "file:" == window.location.protocol ? "http:" : window.location.protocol) + '//www.caiyunapp.com/images/free-trs-box1.png" /></div>', r += '<div class="cy_free_button">', r += '<img  id="cy_free_button" src="' + n + '//www.caiyunapp.com/images/free-trs-button1.png" />', r += '<img  id="cy_free_del" src="' + n + '//www.caiyunapp.com/images/free-trs-del-button.png" />', r += "</div>", r += "</div>", o.open({
                    content: r,
                    skin: "cy_free_content"
                }), u("#cy_free_content,#cy_free_button").click(function () {
                    var e;
                    e = s.TRS_URL + "/v1/coupon/generate", chrome.runtime.sendMessage({
                        method: "POST",
                        contentScriptQuery: "fetchUrl",
                        url: e,
                        headers: {
                            "X-Authorization": "token " + s.token
                        },
                        data: {
                            browser_id: Math.random().toString(36).substr(2)
                        }
                    }, function (e) {
                        var t = JSON.parse(e.data),
                            n = {};
                        0 == t.rc && t.coupon && (localStorage.setItem("cy_coupon_code", JSON.stringify({
                                coupon_code: t.coupon.coupon_code,
                                device_id: t.coupon.device_id
                            })), n = {
                                coupon_code: t.coupon.coupon_code,
                                device_id: t.coupon.device_id
                            }),
                            function (e) {
                                var t = "",
                                    n = "",
                                    r = "";
                                e.coupon_code && e.device_id && (t = "?coupon_code=" + e.coupon_code + "&device_id=" + e.device_id, n = e.coupon_code, r = e.coupon_code), "android" == H ? window.js.showLoginDialog(x, r) : "ios" == H ? window.webkit.messageHandlers.showLoginDialog.postMessage({
                                    title: x,
                                    coupon_code: n
                                }) : window.location.href = s.LOGIN_URL + t
                            }(n)
                    })
                }), u("#cy_free_del").click(function () {
                    o.closeAll()
                }))) : -1 == g ? "android" == H ? window.js.showLoginDialog(x) : "ios" == H ? window.webkit.messageHandlers.showLoginDialog.postMessage({
                    title: x
                }) : o.open({
                    content: x,
                    btn: ["登录", "取消"],
                    yes: function (e) {
                        o.close(e), window.open(s.LOGIN_URL, "_blank")
                    }
                }) : -101 == g && ("android" == H ? window.js.showOpeningVIPDialog(A) : "ios" == H ? window.webkit.messageHandlers.showOpeningVIPDialog.postMessage({
                    title: A
                }) : o.open({
                    content: A,
                    btn: ["成为VIP", "取消"],
                    yes: function (e) {
                        a.alipayForOneMonthRedeem(I, function (e) {
                            0 == e.rc && e.alipay.notify_url ? window.open(e.alipay.notify_url, "_blank") : o.open({
                                content: w,
                                skin: "msg",
                                time: 3
                            })
                        }), o.close(e)
                    }
                }))
            })
        }

        function W() {
            null !== q && clearTimeout(q)
        }

        function z(t, n, r, i, a) {
            if (!G) {
                ae();
                var c = s.TRS_URL + "/v1/page/" + B + "/sentence",
                    u = I;
                a && (u = a), G = !0, chrome.runtime.sendMessage({
                    method: "POST",
                    contentScriptQuery: "fetchUrl",
                    url: c,
                    headers: {
                        "X-Authorization": "token " + s.token
                    },
                    data: {
                        user_id: u,
                        page_id: B,
                        source: t,
                        target: n,
                        trans_type: "en2zh",
                        action: r || ""
                    }
                }, function (t) {
                    if ("ok" != t.status) throw G = !1, o.open({
                        content: E,
                        skin: "msg",
                        time: 3
                    }), new Error("commitPageSentence Error", e);
                    var n = JSON.parse(t.data);
                    G = !1, i(n)
                })
            }
        }

        function Q(t, n, r, i) {
            if (!G) {
                G = !0, n = n.toUpperCase();
                var a = s.TRS_URL + "/v1/page/" + B + "/sentence/" + t + "/comment";
                chrome.runtime.sendMessage({
                    method: "POST",
                    contentScriptQuery: "fetchUrl",
                    url: a,
                    headers: {
                        "X-Authorization": "token " + s.token
                    },
                    data: {
                        user_id: I,
                        sentence_id: t,
                        trans_type: "en2zh",
                        action: n
                    }
                }, function (t) {
                    if ("ok" != t.status) throw G = !1, o.open({
                        content: E,
                        skin: "msg",
                        time: 3
                    }), new Error("commentPageSentence Error", e);
                    G = !1;
                    var n = JSON.parse(t.data);
                    0 == n.rc ? (o.open({
                        content: S,
                        skin: "msg",
                        time: 2
                    }), r()) : -1 == n.rc ? o.open({
                        content: C,
                        skin: "msg",
                        time: 2
                    }) : o.open({
                        content: E,
                        skin: "msg",
                        time: 3
                    })
                })
            }
        }

        function Y(e) {
            "android" == H && window.js.changeProgress(e)
        }

        function J(e) {
            return !!e.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi)
        }

        function Z(e) {
            return e.innerText && e.innerText.trim().length > 1 && e.innerText.length < 2048 && isNaN(e.innerText) && !J(e.innerText)
        }

        function ee(e) {
            if (e.nodeValue) {
                var t = e.nodeValue.trim();
                return t.length > 1 && e.nodeValue.length < 2048 && isNaN(t) && !J(t)
            }
            return !1
        }

        function te(e) {
            return e.trim().replace("\n", "").replace("<br>", "").replace("&nbsp;", "")
        }

        function ne(e) {
            var t = e[e.length - 1];
            return "." != t && "。" != t && "！" != t || (e = e.substr(0, e.length - 1).trim()), e
        }

        function re(e, t) {
            var n = e.className || "";
            if ("String" != typeof n || -1 === n.indexOf(t)) {
                var r = n + ("" != n ? " " : "") + t;
                e.className = r, F || u(".cyxy-trs-target").hide()
            }
        }

        function ie(e) {
            if (e) {
                var t = e.offsetTop || 0;
                for (e.offsetLeft; e.offsetParent;) t += (e = e.offsetParent).offsetTop, e.offsetLeft;
                return t < window.pageYOffset + window.innerHeight * g
            }
        }

        function oe(e) {
            if (e && e.parentElement) {
                for (var t = e.parentElement, n = t.offsetTop || 0, r = t.offsetLeft || 0; t.offsetParent;) n += (t = t.offsetParent).offsetTop, r += t.offsetLeft;
                return n < window.pageYOffset + window.innerHeight * g && r < window.pageXOffset + window.innerWidth
            }
        }

        function ae() {
            for (var e = [function () {
                    return new XMLHttpRequest
                }, function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function () {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }], t = !1, n = 0; n < e.length; n++) {
                try {
                    t = e[n]()
                } catch (e) {
                    continue
                }
                break
            }
            return t
        }
    }()
}, function (e, t, n) {
    ! function (t, n, r) {
        "use strict";
        "function" == typeof window.define && window.define.amd ? window.define(r) : e.exports ? e.exports = r() : n.exports ? n.exports = r() : n.Fingerprint2 = r()
    }(0, this, function () {
        "use strict";
        var e = function (t) {
            if (!(this instanceof e)) return new e(t);
            this.options = this.extend(t, {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                detectScreenOrientation: !0,
                sortPluginsFor: [/palemoon/i],
                userDefinedFonts: [],
                excludeDoNotTrack: !0,
                excludePixelRatio: !0
            }), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
        };
        return e.prototype = {
            extend: function (e, t) {
                if (null == e) return t;
                for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
                return t
            },
            get: function (e) {
                var t = this,
                    n = {
                        data: [],
                        addPreprocessedComponent: function (e) {
                            var r = e.value;
                            "function" == typeof t.options.preprocessor && (r = t.options.preprocessor(e.key, r)), n.data.push({
                                key: e.key,
                                value: r
                            })
                        }
                    };
                n = this.userAgentKey(n), n = this.languageKey(n), n = this.colorDepthKey(n), n = this.deviceMemoryKey(n), n = this.pixelRatioKey(n), n = this.hardwareConcurrencyKey(n), n = this.screenResolutionKey(n), n = this.availableScreenResolutionKey(n), n = this.timezoneOffsetKey(n), n = this.sessionStorageKey(n), n = this.localStorageKey(n), n = this.indexedDbKey(n), n = this.addBehaviorKey(n), n = this.openDatabaseKey(n), n = this.cpuClassKey(n), n = this.platformKey(n), n = this.doNotTrackKey(n), n = this.pluginsKey(n), n = this.canvasKey(n), n = this.webglKey(n), n = this.webglVendorAndRendererKey(n), n = this.adBlockKey(n), n = this.hasLiedLanguagesKey(n), n = this.hasLiedResolutionKey(n), n = this.hasLiedOsKey(n), n = this.hasLiedBrowserKey(n), n = this.touchSupportKey(n), n = this.customEntropyFunction(n), this.fontsKey(n, function (n) {
                    t.audioKey(n, function (n) {
                        var r = [];
                        t.each(n.data, function (e) {
                            var t = e.value;
                            t && "function" == typeof t.join ? r.push(t.join(";")) : r.push(t)
                        });
                        var i = t.x64hash128(r.join("~~~"), 31);
                        return e(i, n.data)
                    })
                })
            },
            audioKey: function (e, t) {
                if (this.options.excludeAudioFP) return t(e);
                var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (null == n) return e.addPreprocessedComponent({
                    key: "audio_fp",
                    value: null
                }), t(e);
                var r = new n(1, 44100, 44100),
                    i = r.createOscillator();
                i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
                var o = r.createDynamicsCompressor();
                this.each([
                    ["threshold", -50],
                    ["knee", 40],
                    ["ratio", 12],
                    ["reduction", -20],
                    ["attack", 0],
                    ["release", .25]
                ], function (e) {
                    void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
                }), r.oncomplete = function (n) {
                    var r = n.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (e, t) {
                        return e + Math.abs(t)
                    }, 0).toString();
                    return i.disconnect(), o.disconnect(), e.addPreprocessedComponent({
                        key: "audio_fp",
                        value: r
                    }), t(e)
                }, i.connect(o), o.connect(r.destination), i.start(0), r.startRendering()
            },
            customEntropyFunction: function (e) {
                return "function" == typeof this.options.customFunction && e.addPreprocessedComponent({
                    key: "custom",
                    value: this.options.customFunction()
                }), e
            },
            userAgentKey: function (e) {
                return this.options.excludeUserAgent || e.addPreprocessedComponent({
                    key: "user_agent",
                    value: this.getUserAgent()
                }), e
            },
            getUserAgent: function () {
                return navigator.userAgent
            },
            languageKey: function (e) {
                return this.options.excludeLanguage || e.addPreprocessedComponent({
                    key: "language",
                    value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                }), e
            },
            colorDepthKey: function (e) {
                return this.options.excludeColorDepth || e.addPreprocessedComponent({
                    key: "color_depth",
                    value: window.screen.colorDepth || -1
                }), e
            },
            deviceMemoryKey: function (e) {
                return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
                    key: "device_memory",
                    value: this.getDeviceMemory()
                }), e
            },
            getDeviceMemory: function () {
                return navigator.deviceMemory || -1
            },
            pixelRatioKey: function (e) {
                return this.options.excludePixelRatio || e.addPreprocessedComponent({
                    key: "pixel_ratio",
                    value: this.getPixelRatio()
                }), e
            },
            getPixelRatio: function () {
                return window.devicePixelRatio || ""
            },
            screenResolutionKey: function (e) {
                return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
            },
            getScreenResolution: function (e) {
                var t;
                return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], e.addPreprocessedComponent({
                    key: "resolution",
                    value: t
                }), e
            },
            availableScreenResolutionKey: function (e) {
                return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
            },
            getAvailableScreenResolution: function (e) {
                var t;
                return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== t && e.addPreprocessedComponent({
                    key: "available_resolution",
                    value: t
                }), e
            },
            timezoneOffsetKey: function (e) {
                return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({
                    key: "timezone_offset",
                    value: (new Date).getTimezoneOffset()
                }), e
            },
            sessionStorageKey: function (e) {
                return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.addPreprocessedComponent({
                    key: "session_storage",
                    value: 1
                }), e
            },
            localStorageKey: function (e) {
                return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.addPreprocessedComponent({
                    key: "local_storage",
                    value: 1
                }), e
            },
            indexedDbKey: function (e) {
                return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.addPreprocessedComponent({
                    key: "indexed_db",
                    value: 1
                }), e
            },
            addBehaviorKey: function (e) {
                return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && e.addPreprocessedComponent({
                    key: "add_behavior",
                    value: 1
                }), e
            },
            openDatabaseKey: function (e) {
                return !this.options.excludeOpenDatabase && window.openDatabase && e.addPreprocessedComponent({
                    key: "open_database",
                    value: 1
                }), e
            },
            cpuClassKey: function (e) {
                return this.options.excludeCpuClass || e.addPreprocessedComponent({
                    key: "cpu_class",
                    value: this.getNavigatorCpuClass()
                }), e
            },
            platformKey: function (e) {
                return this.options.excludePlatform || e.addPreprocessedComponent({
                    key: "navigator_platform",
                    value: this.getNavigatorPlatform()
                }), e
            },
            doNotTrackKey: function (e) {
                return this.options.excludeDoNotTrack || e.addPreprocessedComponent({
                    key: "do_not_track",
                    value: this.getDoNotTrack()
                }), e
            },
            canvasKey: function (e) {
                return !this.options.excludeCanvas && this.isCanvasSupported() && e.addPreprocessedComponent({
                    key: "canvas",
                    value: this.getCanvasFp()
                }), e
            },
            webglKey: function (e) {
                return !this.options.excludeWebGL && this.isWebGlSupported() && e.addPreprocessedComponent({
                    key: "webgl",
                    value: this.getWebglFp()
                }), e
            },
            webglVendorAndRendererKey: function (e) {
                return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && e.addPreprocessedComponent({
                    key: "webgl_vendor",
                    value: this.getWebglVendorAndRenderer()
                }), e
            },
            adBlockKey: function (e) {
                return this.options.excludeAdBlock || e.addPreprocessedComponent({
                    key: "adblock",
                    value: this.getAdBlock()
                }), e
            },
            hasLiedLanguagesKey: function (e) {
                return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
                    key: "has_lied_languages",
                    value: this.getHasLiedLanguages()
                }), e
            },
            hasLiedResolutionKey: function (e) {
                return this.options.excludeHasLiedResolution || e.addPreprocessedComponent({
                    key: "has_lied_resolution",
                    value: this.getHasLiedResolution()
                }), e
            },
            hasLiedOsKey: function (e) {
                return this.options.excludeHasLiedOs || e.addPreprocessedComponent({
                    key: "has_lied_os",
                    value: this.getHasLiedOs()
                }), e
            },
            hasLiedBrowserKey: function (e) {
                return this.options.excludeHasLiedBrowser || e.addPreprocessedComponent({
                    key: "has_lied_browser",
                    value: this.getHasLiedBrowser()
                }), e
            },
            fontsKey: function (e, t) {
                return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
            },
            flashFontsKey: function (e, t) {
                return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function (n) {
                    e.addPreprocessedComponent({
                        key: "swf_fonts",
                        value: n.join(";")
                    }), t(e)
                }) : t(e)
            },
            jsFontsKey: function (e, t) {
                var n = this;
                return setTimeout(function () {
                    var r = ["monospace", "sans-serif", "serif"],
                        i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    n.options.extendedJsFonts && (i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), i = (i = i.concat(n.options.userDefinedFonts)).filter(function (e, t) {
                        return i.indexOf(e) === t
                    });
                    var o = document.getElementsByTagName("body")[0],
                        a = document.createElement("div"),
                        s = document.createElement("div"),
                        c = {},
                        u = {},
                        l = function () {
                            var e = document.createElement("span");
                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                        },
                        d = function (e) {
                            for (var t = !1, n = 0; n < r.length; n++)
                                if (t = e[n].offsetWidth !== c[r[n]] || e[n].offsetHeight !== u[r[n]]) return t;
                            return t
                        },
                        p = function () {
                            for (var e = [], t = 0, n = r.length; t < n; t++) {
                                var i = l();
                                i.style.fontFamily = r[t], a.appendChild(i), e.push(i)
                            }
                            return e
                        }();
                    o.appendChild(a);
                    for (var f = 0, h = r.length; f < h; f++) c[r[f]] = p[f].offsetWidth, u[r[f]] = p[f].offsetHeight;
                    var m = function () {
                        for (var e, t, n, o = {}, a = 0, c = i.length; a < c; a++) {
                            for (var u = [], d = 0, p = r.length; d < p; d++) {
                                var f = (e = i[a], t = r[d], n = void 0, (n = l()).style.fontFamily = "'" + e + "'," + t, n);
                                s.appendChild(f), u.push(f)
                            }
                            o[i[a]] = u
                        }
                        return o
                    }();
                    o.appendChild(s);
                    for (var g = [], y = 0, v = i.length; y < v; y++) d(m[i[y]]) && g.push(i[y]);
                    o.removeChild(s), o.removeChild(a), e.addPreprocessedComponent({
                        key: "js_fonts",
                        value: g
                    }), t(e)
                }, 1)
            },
            pluginsKey: function (e) {
                return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.addPreprocessedComponent({
                    key: "ie_plugins",
                    value: this.getIEPlugins()
                }) : e.addPreprocessedComponent({
                    key: "regular_plugins",
                    value: this.getRegularPlugins()
                })), e
            },
            getRegularPlugins: function () {
                var e = [];
                if (navigator.plugins)
                    for (var t = 0, n = navigator.plugins.length; t < n; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
                return this.pluginsShouldBeSorted() && (e = e.sort(function (e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                })), this.map(e, function (e) {
                    var t = this.map(e, function (e) {
                        return [e.type, e.suffixes].join("~")
                    }).join(",");
                    return [e.name, e.description, t].join("::")
                }, this)
            },
            getIEPlugins: function () {
                var e = [];
                return (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) && (e = this.map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (e) {
                    try {
                        return new window.ActiveXObject(e), e
                    } catch (e) {
                        return null
                    }
                })), navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
            },
            pluginsShouldBeSorted: function () {
                for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
                    var r = this.options.sortPluginsFor[t];
                    if (navigator.userAgent.match(r)) {
                        e = !0;
                        break
                    }
                }
                return e
            },
            touchSupportKey: function (e) {
                return this.options.excludeTouchSupport || e.addPreprocessedComponent({
                    key: "touch_support",
                    value: this.getTouchSupport()
                }), e
            },
            hardwareConcurrencyKey: function (e) {
                return this.options.excludeHardwareConcurrency || e.addPreprocessedComponent({
                    key: "hardware_concurrency",
                    value: this.getHardwareConcurrency()
                }), e
            },
            hasSessionStorage: function () {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            hasLocalStorage: function () {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            hasIndexedDB: function () {
                try {
                    return !!window.indexedDB
                } catch (e) {
                    return !0
                }
            },
            getHardwareConcurrency: function () {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
            },
            getNavigatorCpuClass: function () {
                return navigator.cpuClass ? navigator.cpuClass : "unknown"
            },
            getNavigatorPlatform: function () {
                return navigator.platform ? navigator.platform : "unknown"
            },
            getDoNotTrack: function () {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
            },
            getTouchSupport: function () {
                var e = 0,
                    t = !1;
                void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), t = !0
                } catch (e) {}
                return [e, t, "ontouchstart" in window]
            },
            getCanvasFp: function () {
                var e = [],
                    t = document.createElement("canvas");
                t.width = 2e3, t.height = 200, t.style.display = "inline";
                var n = t.getContext("2d");
                return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), t.toDataURL && e.push("canvas fp:" + t.toDataURL()), e.join("~")
            },
            getWebglFp: function () {
                var e, t = function (t) {
                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                };
                if (!(e = this.getWebglCanvas())) return null;
                var n = [],
                    r = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, r);
                var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                var o = e.createProgram(),
                    a = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, a), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
                try {
                    n.push(e.canvas.toDataURL())
                } catch (t) {}
                n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function (e) {
                    var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (t) {
                        var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === n && (n = 2), n
                    }
                    return null
                }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                try {
                    var c = e.getExtension("WEBGL_debug_renderer_info");
                    c && (n.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                } catch (t) {}
                if (!e.getShaderPrecisionFormat) return n.join("~");
                var u = this;
                return u.each(["FLOAT", "INT"], function (t) {
                    u.each(["VERTEX", "FRAGMENT"], function (r) {
                        u.each(["HIGH", "MEDIUM", "LOW"], function (i) {
                            u.each(["precision", "rangeMin", "rangeMax"], function (o) {
                                var a = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[i + "_" + t])[o];
                                "precision" !== o && (o = "precision " + o);
                                var s = ["webgl ", r.toLowerCase(), " shader ", i.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a];
                                n.push(s.join(""))
                            })
                        })
                    })
                }), n.join("~")
            },
            getWebglVendorAndRenderer: function () {
                try {
                    var e = this.getWebglCanvas(),
                        t = e.getExtension("WEBGL_debug_renderer_info");
                    return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                } catch (e) {
                    return null
                }
            },
            getAdBlock: function () {
                var e = document.createElement("div");
                e.innerHTML = "&nbsp;";
                var t = !(e.className = "adsbox");
                try {
                    document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                } catch (e) {
                    t = !1
                }
                return t
            },
            getHasLiedLanguages: function () {
                if (void 0 !== navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                } catch (e) {
                    return !0
                }
                return !1
            },
            getHasLiedResolution: function () {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
            },
            getHasLiedOs: function () {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.oscpu,
                    r = navigator.platform.toLowerCase();
                if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other", ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                if (void 0 !== n) {
                    if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
                    if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
                    if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
                    if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                }
                return 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
            },
            getHasLiedBrowser: function () {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.productSub;
                if (("Chrome" == (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                var r, i = eval.toString().length;
                if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                if (39 === i && "Internet Explorer" !== e && "Other" !== e) return !0;
                if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                try {
                    throw "a"
                } catch (e) {
                    try {
                        e.toSource(), r = !0
                    } catch (e) {
                        r = !1
                    }
                }
                return !(!r || "Firefox" === e || "Other" === e)
            },
            isCanvasSupported: function () {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            isWebGlSupported: function () {
                if (!this.isCanvasSupported()) return !1;
                var e = this.getWebglCanvas();
                return !!window.WebGLRenderingContext && !!e
            },
            isIE: function () {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            hasSwfObjectLoaded: function () {
                return void 0 !== window.swfobject
            },
            hasMinFlashInstalled: function () {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            },
            addFlashDivNode: function () {
                var e = document.createElement("div");
                e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
            },
            loadSwfAndDetectFonts: function (e) {
                var t = "___fp_swf_loaded";
                window[t] = function (t) {
                    e(t)
                };
                var n = this.options.swfContainerId;
                this.addFlashDivNode();
                var r = {
                    onReady: t
                };
                window.swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, r, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            },
            getWebglCanvas: function () {
                var e = document.createElement("canvas"),
                    t = null;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (e) {}
                return t || (t = null), t
            },
            each: function (e, t, n) {
                if (null !== e)
                    if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
                    else if (e.length === +e.length) {
                    for (var r = 0, i = e.length; r < i; r++)
                        if (t.call(n, e[r], r, e) === {}) return
                } else
                    for (var o in e)
                        if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {}) return
            },
            map: function (e, t, n) {
                var r = [];
                return null == e ? r : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function (e, i, o) {
                    r[r.length] = t.call(n, e, i, o)
                }), r)
            },
            x64Add: function (e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            x64Multiply: function (e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            x64Rotl: function (e, t) {
                return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            },
            x64LeftShift: function (e, t) {
                return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            },
            x64Xor: function (e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            },
            x64Fmix: function (e) {
                return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), this.x64Xor(e, [0, e[0] >>> 1])
            },
            x64hash128: function (e, t) {
                t = t || 0;
                for (var n = (e = e || "").length % 16, r = e.length - n, i = [0, t], o = [0, t], a = [0, 0], s = [0, 0], c = [2277735313, 289559509], u = [1291169091, 658871167], l = 0; l < r; l += 16) a = [255 & e.charCodeAt(l + 4) | (255 & e.charCodeAt(l + 5)) << 8 | (255 & e.charCodeAt(l + 6)) << 16 | (255 & e.charCodeAt(l + 7)) << 24, 255 & e.charCodeAt(l) | (255 & e.charCodeAt(l + 1)) << 8 | (255 & e.charCodeAt(l + 2)) << 16 | (255 & e.charCodeAt(l + 3)) << 24], s = [255 & e.charCodeAt(l + 12) | (255 & e.charCodeAt(l + 13)) << 8 | (255 & e.charCodeAt(l + 14)) << 16 | (255 & e.charCodeAt(l + 15)) << 24, 255 & e.charCodeAt(l + 8) | (255 & e.charCodeAt(l + 9)) << 8 | (255 & e.charCodeAt(l + 10)) << 16 | (255 & e.charCodeAt(l + 11)) << 24], a = this.x64Multiply(a, c), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, u), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, u), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), o = this.x64Xor(o, s), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
                switch (a = [0, 0], s = [0, 0], n) {
                    case 15:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 14)], 48));
                    case 14:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 13)], 40));
                    case 13:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 12)], 32));
                    case 12:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 11)], 24));
                    case 11:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 10)], 16));
                    case 10:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 9)], 8));
                    case 9:
                        s = this.x64Xor(s, [0, e.charCodeAt(l + 8)]), s = this.x64Multiply(s, u), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, c), o = this.x64Xor(o, s);
                    case 8:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 7)], 56));
                    case 7:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 6)], 48));
                    case 6:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 5)], 40));
                    case 5:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 4)], 32));
                    case 4:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 3)], 24));
                    case 3:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 2)], 16));
                    case 2:
                        a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 1)], 8));
                    case 1:
                        a = this.x64Xor(a, [0, e.charCodeAt(l)]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, u), i = this.x64Xor(i, a)
                }
                return i = this.x64Xor(i, [0, e.length]), o = this.x64Xor(o, [0, e.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
            }
        }, e.VERSION = "1.8.0", e
    })
}, function (e, t, n) {
    var r = n(20);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    n(22)(r, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    }), r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, '[contenteditable="true"]:active, [contenteditable="true"]:focus {\n    /*border-color: #00B977;*/\n    outline: #00B977 solid thin;\n    /*color: #00B977;*/\n    background-color: rgba(0, 185, 119, 0.05);\n}\n\n.cyxy-trs-target.colored {\n    background-color: rgba(0, 185, 119, 0.05);\n}\n\n.cyxy-target-popup {\n    padding: 1.3rem 12px;\n    position: absolute;\n    display: -webkit-flex;\n    display: inline-flex;\n    flex-direction: row;\n    overflow: scroll;\n    vertical-align: middle;\n    z-index: 199099;\n    top: 1px;\n    left: 1px;\n    background: #fff;\n    opacity: 0.98;\n    /*margin: 0px 5%;*/\n    height: auto;\n    width: auto;\n    border: 1px solid #E6E6E6;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.13);\n    border-radius: 5px;\n    /*height: 7rem;*/\n}\n\n@media (max-width: 468px) {\n    .cyxy-target-popup {\n        /*width: 90%;*/\n        /*margin: 0px 5%;*/\n        left: 10%;\n        /*right: 5%;*/\n        /*width: 30rem;*/\n        /*height: 14.58rem;*/\n    }\n}\n\n#cyxy-popup-left-slide {\n    height: 22px;\n    display: inline;\n    vertical-align: middle;\n    margin-right: 14px;\n    cursor: pointer;\n}\n\n#cyxy-popup-right-slide {\n    height: 22px;\n    display: inline;\n    vertical-align: middle;\n    margin-left: 0px;\n    cursor: pointer;\n}\n\n#cyxy-popup-userinfo {\n    display: inline;\n}\n\n.cyxy-target-count {\n    display: inline;\n    vertical-align: middle;\n    font-size: 10px;\n}\n\n#cyxy-popup-avatar {\n    /*margin-right: 30px;*/\n    /*font-size: 14px;*/\n    display: inline;\n    height: 32px;\n    vertical-align: middle;\n    border-radius: 16px;\n}\n\n#cyxy-popup-name-time {\n    display: -webkit-flex;\n    display: inline-flex;\n    flex-direction: column;\n    /*align-items: center;*/\n    /*position: relative;*/\n    vertical-align: middle;\n    text-align: left;\n    margin-left: 6px;\n}\n\n#cyxy-popup-name {\n    /*vertical-align: middle;*/\n    /*display: flex;*/\n    font-size: 14px;\n    color: #333;\n    height: 18px;\n    overflow: hidden;\n    max-width: 84px;\n}\n\n#cyxy-popup-time {\n    /*margin-right: 30px;*/\n    /*font-size: 14px;*/\n    /*display: flex;*/\n    font-size: 12px;\n    margin-top: 4px;\n    color: #999\n}\n\n.cyxy-footer {\n    display: none;\n    position: fixed;\n    bottom: 0px;\n    padding: 0px 0px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    opacity: 0.90;\n    border: 1px solid #E6E6E6;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.13);\n    border-radius: 2px;\n    z-index: 201712;\n    text-align: center;\n}\n\n.cyxy-footer-p {\n    padding: 12px 0px;\n    margin: 0px;\n    font-size: 12px;\n    color: #333;\n    background: #fff;\n    text-align: center;\n    line-height: 1.6;\n    font-weight: 200;\n}\n\n#cyxy-popup-favour {\n    text-align: center;\n    display: inline;\n    margin-right: 20px;\n    margin-left: 46px;\n    cursor: pointer;\n}\n\n#cyxy-popup-favour.commit {\n    /*padding: 2px 6px;*/\n    /*border: 1px solid #00B977;*/\n    /*border-radius: 4px;*/\n}\n\n#cyxy-popup-oppose {\n    text-align: center;\n    display: inline;\n    cursor: pointer;\n}\n\n#cyxy-popup-favour-img {\n    display: inline;\n    height: 20px;\n    /*width: 22px;*/\n    vertical-align: middle;\n}\n\n#cyxy-popup-favour-img.commit {\n    /*height: 22px;*/\n    /*vertical-align: middle;*/\n}\n\n#cyxy-popup-oppose-img {\n    display: inline;\n    height: 18px;\n    vertical-align: middle;\n}\n\n#cyxy-popup-favour-num {\n    font-size: 14px;\n    margin-left: 4px;\n    /*margin-left: 0.47rem;*/\n    color: #999999;\n}\n\n#cyxy-popup-oppose-num {\n    font-size: 14px;\n    margin-left: 4px;\n    /*margin-left: 0.47rem;*/\n    color: #999;\n}\n\n@media (max-width: 320px) {\n    #cyxy-popup-favour {\n        margin-right: 0.8rem;\n        margin-left: 1.5rem;\n    }\n\n    #cyxy-popup-left-slide {\n        margin-right: 0.8rem;\n    }\n\n    #cyxy-popup-right-slide {\n        margin-left: 1rem;\n    }\n\n}\n\n.layui-m-layer {\n    position: relative;\n    z-index: 19891014\n}\n\n.layui-m-layer * {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\n.layui-m-layermain, .layui-m-layershade {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%\n}\n\n.layui-m-layershade {\n    background-color: rgba(0, 0, 0, .7);\n    pointer-events: auto\n}\n\n.layui-m-layermain {\n    display: table;\n    font-family: Helvetica, arial, sans-serif;\n    pointer-events: none\n}\n\n.layui-m-layermain .layui-m-layersection {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center\n}\n\n.layui-m-layerchild {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    background-color: #fff;\n    font-size: 14px;\n    border-radius: 5px;\n    box-shadow: 0 0 8px rgba(0, 0, 0, .1);\n    pointer-events: auto;\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-duration: .2s;\n    animation-duration: .2s\n}\n\n@-webkit-keyframes layui-m-anim-scale {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.5);\n        transform: scale(.5)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n@keyframes layui-m-anim-scale {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.5);\n        transform: scale(.5)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n.layui-m-anim-scale {\n    animation-name: layui-m-anim-scale;\n    -webkit-animation-name: layui-m-anim-scale\n}\n\n@-webkit-keyframes layui-m-anim-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(800px);\n        transform: translateY(800px)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n}\n\n@keyframes layui-m-anim-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(800px);\n        transform: translateY(800px)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n}\n\n.layui-m-anim-up {\n    -webkit-animation-name: layui-m-anim-up;\n    animation-name: layui-m-anim-up\n}\n\n.layui-m-layer0 .layui-m-layerchild {\n    width: 90%;\n    max-width: 640px\n}\n\n.layui-m-layer1 .layui-m-layerchild {\n    border: none;\n    border-radius: 0\n}\n\n.layui-m-layer2 .layui-m-layerchild {\n    width: auto;\n    max-width: 260px;\n    min-width: 40px;\n    border: none;\n    background: 0 0;\n    box-shadow: none;\n    color: #fff\n}\n\n.layui-m-layerchild h3 {\n    padding: 0 10px;\n    height: 60px;\n    line-height: 60px;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 5px 5px 0 0;\n    text-align: center\n}\n\n.layui-m-layerbtn span, .layui-m-layerchild h3 {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap\n}\n\n.layui-m-layercont {\n    padding: 50px 30px;\n    line-height: 22px;\n    text-align: center\n}\n\n.layui-m-layer1 .layui-m-layercont {\n    padding: 0;\n    text-align: left\n}\n\n.layui-m-layer2 .layui-m-layercont {\n    text-align: center;\n    padding: 0;\n    line-height: 0\n}\n\n.layui-m-layer2 .layui-m-layercont i {\n    width: 25px;\n    height: 25px;\n    margin-left: 8px;\n    display: inline-block;\n    background-color: #fff;\n    border-radius: 100%;\n    -webkit-animation: layui-m-anim-loading 1.4s infinite ease-in-out;\n    animation: layui-m-anim-loading 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n.layui-m-layerbtn, .layui-m-layerbtn span {\n    position: relative;\n    text-align: center;\n    border-radius: 0 0 5px 5px\n}\n\n.layui-m-layer2 .layui-m-layercont p {\n    margin-top: 20px\n}\n\n@-webkit-keyframes layui-m-anim-loading {\n    0%, 100%, 80% {\n        transform: scale(0);\n        -webkit-transform: scale(0)\n    }\n    40% {\n        transform: scale(1);\n        -webkit-transform: scale(1)\n    }\n}\n\n@keyframes layui-m-anim-loading {\n    0%, 100%, 80% {\n        transform: scale(0);\n        -webkit-transform: scale(0)\n    }\n    40% {\n        transform: scale(1);\n        -webkit-transform: scale(1)\n    }\n}\n\n.layui-m-layer2 .layui-m-layercont i:first-child {\n    margin-left: 0;\n    -webkit-animation-delay: -.32s;\n    animation-delay: -.32s\n}\n\n.layui-m-layer2 .layui-m-layercont i.layui-m-layerload {\n    -webkit-animation-delay: -.16s;\n    animation-delay: -.16s\n}\n\n.layui-m-layer2 .layui-m-layercont > div {\n    line-height: 22px;\n    padding-top: 7px;\n    margin-bottom: 20px;\n    font-size: 14px\n}\n\n.layui-m-layerbtn {\n    display: box;\n    display: -moz-box;\n    display: -webkit-box;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    font-size: 0;\n    border-top: 1px solid #D0D0D0;\n    background-color: #F2F2F2\n}\n\n.layui-m-layerbtn span {\n    display: block;\n    -moz-box-flex: 1;\n    box-flex: 1;\n    -webkit-box-flex: 1;\n    font-size: 14px;\n    cursor: pointer\n}\n\n.layui-m-layerbtn span[yes] {\n    color: #40AFFE\n}\n\n.layui-m-layerbtn span[no] {\n    border-right: 1px solid #D0D0D0;\n    border-radius: 0 0 0 5px\n}\n\n.layui-m-layerbtn span:active {\n    background-color: #F6F6F6\n}\n\n.layui-m-layerend {\n    position: absolute;\n    right: 7px;\n    top: 10px;\n    width: 30px;\n    height: 30px;\n    border: 0;\n    font-weight: 400;\n    background: 0 0;\n    cursor: pointer;\n    -webkit-appearance: none;\n    font-size: 30px\n}\n\n.layui-m-layerend::after, .layui-m-layerend::before {\n    position: absolute;\n    left: 5px;\n    top: 15px;\n    content: \'\';\n    width: 18px;\n    height: 1px;\n    background-color: #999;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    border-radius: 3px\n}\n\n.layui-m-layerend::after {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg)\n}\n\nbody .layui-m-layer .layui-m-layer-footer {\n    position: fixed;\n    width: 95%;\n    max-width: 100%;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    bottom: 10px;\n    background: 0 0\n}\n\n.layui-m-layer-footer .layui-m-layercont {\n    padding: 20px;\n    border-radius: 5px 5px 0 0;\n    background-color: rgba(255, 255, 255, .8)\n}\n\n.layui-m-layer-footer .layui-m-layerbtn {\n    display: block;\n    height: auto;\n    background: 0 0;\n    border-top: none\n}\n\n.layui-m-layer-footer .layui-m-layerbtn span {\n    background-color: rgba(255, 255, 255, .8)\n}\n\n.layui-m-layer-footer .layui-m-layerbtn span[no] {\n    color: #FD482C;\n    border-top: 1px solid #c2c2c2;\n    border-radius: 0 0 5px 5px\n}\n\n.layui-m-layer-footer .layui-m-layerbtn span[yes] {\n    margin-top: 10px;\n    border-radius: 5px\n}\n\nbody .layui-m-layer .layui-m-layer-msg {\n    width: auto;\n    max-width: 90%;\n    margin: 0 auto;\n    bottom: -150px;\n    background-color: rgba(0, 0, 0, .7);\n    color: #fff\n}\n\n.layui-m-layer-msg .layui-m-layercont {\n    padding: 10px 20px\n}\n\n.cyxy-function {\n    position: fixed;\n    bottom: 140px;\n    right: 20px;\n    z-index: 109999;\n    cursor: pointer;\n}\n.cyxy-personal {\n    position: fixed;\n    bottom: 190px;\n    right: 20px;\n    z-index: 109999;\n    cursor: pointer;\n}\n.cyxy-personal  .cyxy-favorite-btn{\n    border: 2px solid #5ebb8d;\n    box-sizing: border-box;\n }\n/*switch button*/\n.cyxy-switch {\n    position: relative;\n    display: inline-block;\n    width: 54px;\n    height: 28px;\n}\n\n.cyxy-switch input {display:none;}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: "";\n    height: 20px;\n    width: 20px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: #00B976;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #00B976;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n.cyxy-favorite {\n    /*background: ;*/\n    position: fixed;\n    bottom: 90px;\n    right: 20px;\n    z-index: 109999;\n    cursor: pointer;\n}\n\n.cyxy-favorite-btn {\n    height: 36px;\n    width: 36px;\n    border-radius: 50%;\n    overflow: hidden;\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n.collection-success{\n    /*opacity: 0.6;*/\n    /*background: #EAEAEA;*/\n    color: #FFFFFF;\n}\n.collection-success:hover{\n    /*opacity: 0.45;*/\n    /*background: #000000;*/\n    color: #FFFFFF;\n}\n.layui-m-layercont .cyxy-trs-target{\n    display: none;\n}\n.collection-icon{\n    width: 12px;\n    height: 13px;\n    background: url(\'//staging.caiyunapp.com/imgs/layar-target.png\') no-repeat;\n    display: inline-block;\n    background-size: cover;\n    background-position: center;\n}\n.collection-success >a{\n    margin-left: 12px;\n    vertical-align: middle;\n}\n.cy_free_box{\n    position: relative;\n}\n.cy_free_box img{\n    width:100%;\n    cursor: pointer;\n    -moz-user-select: none; /*火狐*/\n    -webkit-user-select: none;  /*webkit浏览器*/\n    -ms-user-select: none;   /*IE10*/\n    -khtml-user-select: none; /*早期浏览器*/\n    user-select: none;\n}\n.cy_free_button{\n    /* padding: 0 20%; */\n}\n.cy_free_button img{\n    width: 40%;\n    margin: 0 10px;\n}\n.cy_free_del{\n    position: absolute;\n    width: 6%;\n    height: 6%;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n    /* background: #000; */\n    z-index: 10;\n}\n.layui-m-layer-cy_free_content{\n    background: inherit !important;\n}\n@media (max-width: 650px) {\n    .cyxy-function{\n        /* top: inherit !important; */\n        /* right: 20px !important;\n        bottom: 60px !important; */\n    }\n    .cyxy-favorite{\n        /* top: 50px !important; */\n    }\n}', ""])
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n, r, i, o = e[1] || "",
                        a = e[3];
                    if (!a) return o;
                    if (t && "function" == typeof btoa) {
                        var s = (n = a, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(i, " */")),
                            c = a.sources.map(function (e) {
                                return "/*# sourceURL=".concat(a.sourceRoot).concat(e, " */")
                            });
                        return [o].concat(c).concat([s]).join("\n")
                    }
                    return [o].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (r[o] = !0)
            }
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")), t.push(s))
            }
        }, t
    }
}, function (e, t, n) {
    var r, i, o = {},
        a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }),
        s = function (e) {
            var t = {};
            return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function (e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(),
        c = null,
        u = 0,
        l = [],
        d = n(23);

    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(v(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function f(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                s = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function h(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = l[l.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(e.insertAt.before, n);
            n.insertBefore(t, i)
        }
    }

    function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }

    function g(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = n.nc;
            r && (e.attrs.nonce = r)
        }
        return y(t, e.attrs), h(e, t), t
    }

    function y(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function v(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
            e.css = o
        }
        if (t.singleton) {
            var a = u++;
            n = c || (c = g(t)), r = b.bind(null, n, a, !1), i = b.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), h(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = d(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), i = function () {
            m(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = g(t), r = function (e, t) {
            var n = t.css,
                r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function () {
            m(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = f(e, t);
        return p(n, t),
            function (e) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = o[a.id]).refs--, r.push(s)
                }
                for (e && p(f(e, t), t), i = 0; i < r.length; i++) {
                    var s;
                    if (0 === (s = r[i]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete o[s.id]
                    }
                }
            }
    };
    var x, A = (x = [], function (e, t) {
        return x[e] = t, x.filter(Boolean).join("\n")
    });

    function b(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = A(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function (t, n, r) {
    var i = r(5),
        o = r(25);

    function a() {
        for (var e = [function () {
                return new XMLHttpRequest
            }, function () {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function () {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }, function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }], t = !1, n = 0; n < e.length; n++) {
            try {
                t = e[n]()
            } catch (e) {
                continue
            }
            break
        }
        return t.onerror = function (e) {
            throw o.open({
                content: i.NETWORK_ERROR_MSG,
                skin: "msg",
                time: 3
            }), new Error("XHR.onerror", e)
        }, t
    }
    t.exports.testCookie = function (e) {
        chrome.runtime.sendMessage({
            method: "GET",
            contentScriptQuery: "fetchUrl",
            url: "https://biz.caiyunapp.com/test_cookies"
        }, function (t) {
            if ("ok" == t.status) {
                var n = JSON.parse(t.data);
                "ok" == n.status && n.cookies && n.cookies.cy_user ? e(JSON.parse(decodeURIComponent(n.cookies.cy_user))) : e()
            } else o.open({
                content: i.PAGE_COOKIE_ERROR_MSG,
                skin: "msg",
                time: 6
            })
        })
    }, t.exports.alipayForOneMonthRedeem = function (e, t) {
        chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: i.TRS_URL + "/v1/user/redeem",
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                user_id: e,
                product_id: 16,
                os_type: "web",
                version: "1.0.3",
                timestamp: 0,
                pay_channel: "alipay"
            }
        }, function (e) {
            if ("ok" == e.status) {
                var n = JSON.parse(e.data);
                t(n)
            }
        })
    }, n.fetchPageSentenceTargetList = function (e, t, n, r) {
        chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: i.TRS_URL + "/v1/page/sentence",
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                user_id: t,
                page_id: n,
                sentence_id: e,
                trans_type: "en2zh"
            }
        }, function (e) {
            if ("ok" == e.status) {
                var t = JSON.parse(e.data);
                r(t)
            }
        })
    }, n.updatePageSentence = function (t, n, r, a) {
        xhrLoading || chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: i.TRS_URL + "/v1/page/" + pageId + "/sentence/" + n,
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                source: t,
                target: r,
                user_id: userId,
                sentence_id: n,
                trans_type: "en2zh"
            }
        }, function (t) {
            if ("ok" != t.status) throw xhrLoading = !1, o.open({
                content: UPDATE_TARGET_ERROR,
                skin: "msg",
                time: 3
            }), a(), new Error("commentPageSentence Error", e);
            var n = JSON.parse(t.data);
            a(n)
        })
    }, n.commitPageSentence = function (t, n, r, a, s) {
        if (!xhrLoading) {
            var c = i.TRS_URL + "/v1/page/" + pageId + "/sentence",
                u = userId;
            s && (u = s), chrome.runtime.sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: c,
                headers: {
                    "X-Authorization": "token " + i.token
                },
                data: {
                    user_id: u,
                    page_id: pageId,
                    source: t,
                    target: n,
                    trans_type: "en2zh",
                    action: r || ""
                }
            }, function (t) {
                if ("ok" != t.status) throw xhrLoading = !1, o.open({
                    content: UPDATE_TARGET_ERROR,
                    skin: "msg",
                    time: 3
                }), new Error("commitPageSentence Error", e);
                xhrLoading = !1;
                var n = JSON.parse(t.data);
                a(n)
            })
        }
    }, n.commitPageSentence = function (t, n, r, a, s) {
        if (!xhrLoading) {
            var c = i.TRS_URL + "/v1/page/" + pageId + "/sentence",
                u = userId;
            s && (u = s), xhrLoading = !0, chrome.runtime.sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: c,
                headers: {
                    "X-Authorization": "token " + i.token
                },
                data: {
                    user_id: u,
                    page_id: pageId,
                    source: t,
                    target: n,
                    trans_type: "en2zh",
                    action: r || ""
                }
            }, function (t) {
                if ("ok" != t.status) throw xhrLoading = !1, o.open({
                    content: UPDATE_TARGET_ERROR,
                    skin: "msg",
                    time: 3
                }), new Error("commitPageSentence Error", e);
                var n = JSON.parse(t.data);
                xhrLoading = !1, a(n)
            })
        }
    }, n.commentPageSentence = function (t, n, r) {
        if (!xhrLoading) {
            a(), xhrLoading = !0, n = n.toUpperCase();
            var s = i.TRS_URL + "/v1/page/" + pageId + "/sentence/" + t + "/comment";
            chrome.runtime.sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: s,
                headers: {
                    "X-Authorization": "token " + i.token
                },
                data: {
                    user_id: userId,
                    sentence_id: t,
                    trans_type: "en2zh",
                    action: n
                }
            }, function (t) {
                if ("ok" != t.status) throw xhrLoading = !1, o.open({
                    content: UPDATE_TARGET_ERROR,
                    skin: "msg",
                    time: 3
                }), new Error("commentPageSentence Error", e);
                var n = JSON.parse(t.data);
                xhrLoading = !1, r(n)
            })
        }
    }, n.pageAuth = function (t, n, r, s) {
        a();
        var c = i.TRS_URL + "/v1/page/auth";
        chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: c,
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                user_id: t,
                browser_id: Math.random().toString(36).substr(2),
                device_id: Math.random().toString(36).substr(2),
                url: document.URL,
                title: document.title
            }
        }, function (t) {
            if ("ok" != t.status) throw o.open({
                content: i.PAGE_AUTH_ERROR_MSG,
                skin: "msg",
                time: 3
            }), new Error("PageAuth Error", e);
            var n = JSON.parse(t.data);
            s(n)
        })
    }, n.postFavorite = function (t, n, r) {
        a();
        var s = i.TRS_URL + "/v1/page/favorite";
        chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: s,
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                url: t,
                user_id: n,
                article: !0
            }
        }, function (t) {
            if ("ok" != t.status) throw o.open({
                content: i.PAGE_AUTH_ERROR_MSG,
                skin: "msg",
                time: 3
            }), new Error("PageAuth Error", e);
            xhrLoading = !1;
            var n = JSON.parse(t.data);
            r(n)
        })
    }, n.fetchPageTranslator = function (t, n, r) {
        var o = i.TRS_URL + "/v1/page/" + t + "/author";
        chrome.runtime.sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: o,
            headers: {
                "X-Authorization": "token " + i.token
            },
            data: {
                user_id: n
            }
        }, function (t) {
            if ("ok" != t.status) throw new Error("fetchPageTranslator Error", e);
            var n = JSON.parse(t.data);
            r(n)
        })
    }, n.pageMark = function (e, t, n, r) {
        a();
    }
}, function (e, t, n) {
    var r; /*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
    ! function (i) {
        "use strict";
        var o = document,
            a = "getElementsByClassName",
            s = function (e) {
                return o.querySelectorAll(e)
            },
            c = {
                type: 0,
                shade: !0,
                shadeClose: !0,
                fixed: !0,
                anim: "scale"
            },
            u = {
                extend: function (e) {
                    var t = JSON.parse(JSON.stringify(c));
                    for (var n in e) t[n] = e[n];
                    return t
                },
                timer: {},
                end: {},
                touch: function (e, t) {
                    e.addEventListener("click", function (e) {
                        t.call(this, e)
                    }, !1)
                }
            },
            l = 0,
            d = ["layui-m-layer"],
            p = function (e) {
                this.config = u.extend(e), this.view()
            };
        p.prototype.view = function () {
            var e = this,
                t = e.config,
                n = o.createElement("div");
            e.id = n.id = d[0] + l, n.setAttribute("class", d[0] + " " + d[0] + (t.type || 0)), n.setAttribute("index", l);
            var r = function () {
                    var e = "object" == typeof t.title;
                    return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + "</h3>" : ""
                }(),
                i = function () {
                    "string" == typeof t.btn && (t.btn = [t.btn]);
                    var e, n = (t.btn || []).length;
                    return 0 !== n && t.btn ? (e = '<span yes type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span no type="0">' + t.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
                }();
            if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top : 100, t.style = t.style || "", t.style += " top:" + (o.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (t.content || "") + "</p>"), t.skin && (t.anim = "up"), "msg" === t.skin && (t.shade = !1), n.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (t.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (t.skin ? "layui-m-layer-" + t.skin + " " : "") + (t.className ? t.className : "") + " " + (t.anim ? "layui-m-anim-" + t.anim : "") + '" ' + (t.style ? 'style="' + t.style + '"' : "") + ">" + r + '<div class="layui-m-layercont">' + t.content + "</div>" + i + "</div></div></div>", !t.type || 2 === t.type) {
                var c = o[a](d[0] + t.type);
                c.length >= 1 && layer.close(c[0].getAttribute("index"))
            }
            document.body.appendChild(n);
            var u = e.elem = s("#" + e.id)[0];
            t.success && t.success(u), e.index = l++, e.action(t, u)
        }, p.prototype.action = function (e, t) {
            var n = this;
            e.time && (u.timer[n.index] = setTimeout(function () {
                layer.close(n.index)
            }, 1e3 * e.time));
            var r = function () {
                0 == this.getAttribute("type") ? (e.no && e.no(), layer.close(n.index)) : e.yes ? e.yes(n.index) : layer.close(n.index)
            };
            if (e.btn)
                for (var i = t[a]("layui-m-layerbtn")[0].children, o = i.length, s = 0; o > s; s++) u.touch(i[s], r);
            if (e.shade && e.shadeClose) {
                var c = t[a]("layui-m-layershade")[0];
                u.touch(c, function () {
                    layer.close(n.index, e.end)
                })
            }
            e.end && (u.end[n.index] = e.end)
        }, i.layer = {
            v: "2.0",
            index: l,
            open: function (e) {
                return new p(e || {}).index
            },
            close: function (e) {
                var t = s("#" + d[0] + e)[0];
                t && (t.innerHTML = "", o.body.removeChild(t), clearTimeout(u.timer[e]), delete u.timer[e], "function" == typeof u.end[e] && u.end[e](), delete u.end[e])
            },
            closeAll: function () {
                for (var e = o[a](d[0]), t = 0, n = e.length; n > t; t++) layer.close(0 | e[0].getAttribute("index"))
            }
        }, void 0 === (r = function () {
            return layer
        }.call(t, n, t, e)) || (e.exports = r)
    }(window)
}, function (e, t) {
    t.levenshteinDistance = function (e, t) {
        if (0 == e.length) return t.length;
        if (0 == t.length) return e.length;
        var n, r, i = [];
        for (n = 0; n <= t.length; n++) i[n] = [n];
        for (r = 0; r <= e.length; r++) i[0][r] = r;
        for (n = 1; n <= t.length; n++)
            for (r = 1; r <= e.length; r++) t.charAt(n - 1) == e.charAt(r - 1) ? i[n][r] = i[n - 1][r - 1] : i[n][r] = Math.min(i[n - 1][r - 1] + 1, Math.min(i[n][r - 1] + 1, i[n - 1][r] + 1));
        return i[t.length][e.length]
    }, t.getDateDiff = function (e) {
        "string" == typeof e && (e = new Date(e).getTime());
        var t = (new Date).getTime() - 1e3 * e,
            n = "刚刚";
        if (t < 0) return n;
        var r = t / 2592e6,
            i = t / 6048e5,
            o = t / 864e5,
            a = t / 36e5,
            s = t / 6e4;
        return r >= 1 ? parseInt(r) + "月前" : i >= 1 ? parseInt(i) + "周前" : o >= 1 ? parseInt(o) + "天前" : a >= 1 ? parseInt(a) + "小时前" : s >= 1 ? parseInt(s) + "分钟前" : "刚刚"
    }, t.isURL = function (e) {
        return !!e.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi)
    }, t.detectLang = function (e) {
        if ("string" != typeof e) return "en";
        var t = "en",
            n = (e.match(/[\u4e00-\u9fa5]/g) || []).length / e.length;
        return (e.match(/[\u3020-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31F0-\u31FF]/g) || []).length / e.length > .03 ? t = "jp" : n >= .1 && (t = "zh"), t
    }, t.preload = function (e) {
        for (var t = 0, n = e; t < n; t++)(new Image).src = e[t]
    }, t.uuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        })
    }, t.wordStatistics = function (e) {
        for (var t = e.innerText.replace(/\r\n/g, "\n"), n = t.replace(/\n/g, ""), r = t.match(/[\u4e00-\u9fa5]/g) || [], i = t.match(/\b\w+\b/g) || [], o = t.match(/\b\d+\b/g) || [], a = (n.match(/[|\~|\`|\!|\@|\#|\jq|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g), 0); a < n.length; a++) n.charAt(a).match(/[^\x00-\xff]/);
        (n.match(/[A-Za-z]/g) || []).length, (n.match(/[0-9]/g) || []).length;
        var s = t.split("\n");
        for (a = 0; a < s.length; a++) s[a].length;
        return {
            chars: n.length,
            en_words: i.length - o.length,
            zh_chars: r.length
        }
    }
}, function (e, t, n) {
    let r = n(2),
        i = 300,
        o = !0,
        a = chrome.extension.getURL("images/control.png"),
        s = chrome.extension.getURL("images/settings.png"),
        c = chrome.extension.getURL("images/fanyi-btn-subtitle.png"),
        u = null,
        l = ["personal", "function", "favorite", "video-trans", "options-link"],
        d = `\n    <div class="cyxy-ctrl-wrapper">\n        <div class="cyxy-ctrl-btn">\n            <img class="cyxy-ctrl-img" src=${a}>\n        </div>\n        <div class="cyxy-function" style="display:none;">\n            <img class="cyxy-favorite-btn" src="https://caiyunapp.com/imgs/webtrs/fanyi-btn-hover.png" />\n        </div>\n        <div class="cyxy-options-link" style="display:none;">\n            <div class="cyxy-options-btn">\n                <img class="cyxy-options-img" src=${s}>\n            </div>\n        </div>\n    </div> \n `;
    r("body").append(d);
    let p = r(".cyxy-function >img"),
        f = !0;

    function h() {
        for (let e = 0, t = l.length; e < t; e++) setTimeout(() => {
            r(`.cyxy-${l[t-e-1]}`).stop().fadeIn(i)
        }, 50 * e);
        r(".cyxy-ctrl-wrapper").css({
            height: "150px"
        })
    }

    function m() {
        for (let e = 0, t = l.length; e < t; e++) setTimeout(() => {
            r(`.cyxy-${l[e]}`).stop().fadeOut(i)
        }, 50 * e);
        r(".cyxy-ctrl-wrapper").css({
            height: "50px"
        })
    }
    r(".cyxy-function").click(function () {
        f ? (p.attr("src", "https://caiyunapp.com/imgs/webtrs/fanyi-btn.png"), r(".cyxy-trs-target").hide(), f = !1) : (p.attr("src", "https://caiyunapp.com/imgs/webtrs/fanyi-btn-hover.png"), r(".cyxy-trs-target").show(), f = !0)
    }), r(".cyxy-options-btn").click(function () {
        chrome.runtime.sendMessage({
            tag: "options"
        })
    }), r(".cyxy-video-trans").click(function () {
        document.getElementById("substr") ? chrome.runtime.sendMessage({
            type: "closeSubByVideoBtn"
        }) : chrome.runtime.sendMessage({
            type: "showSubByVideoBtn"
        })
    }), (d = document.getElementsByClassName("cyxy-ctrl-btn")[0]).addEventListener("click", function (e, t) {
        let n = null;
        return function () {
            n || (function () {
                o ? h() : m(), o = !o, clearTimeout(u)
            }.apply(this, arguments), n = setTimeout(() => {
                n = null
            }, 550))
        }
    }()), r(".cyxy-ctrl-wrapper").on("mouseenter", () => {
        clearTimeout(u)
    }), l.forEach(e => {
        ! function (e) {
            let t = document.querySelector(`.cyxy-${e}`);
            t && t.addEventListener("click", () => {
                chrome.runtime.sendMessage({
                    type: "clickCyxyBtn",
                    btnName: e
                })
            })
        }(e)
    }), chrome.storage.sync.get({
        isFirst: !0
    }, function (e) {
        1 == e.isFirst && (h(), o = !1, u = setTimeout(() => {
            m(), o = !0
        }, 8e3), chrome.storage.sync.set({
            isFirst: !1
        }))
    }), r(".cyxy-personal").on("mouseenter", function () {
        r("body").append(`<div class="cyxy-personal-hint cyxy-trs-target">${chrome.i18n.getMessage("logInOut")}</div>`), r(".cyxy-personal-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-function").on("mouseenter", function () {
        r("body").append(`<div class="cyxy-function-hint cyxy-trs-target">${chrome.i18n.getMessage("funcOnOff")}</div>`), r(".cyxy-function-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-favorite").on("mouseenter", function () {
        r("body").append(`<div class="cyxy-favorite-hint cyxy-trs-target">${chrome.i18n.getMessage("addFavorite")}</div>`), r(".cyxy-favorite-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-video-trans").on("mouseenter", function () {
        r("body").append(`<div class="cyxy-video-hint cyxy-trs-target">${chrome.i18n.getMessage("videoTrans")}</div>`), r(".cyxy-video-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-options-link").on("mouseenter", function () {
        r("body").append(`<div class="cyxy-options-hint cyxy-trs-target">${chrome.i18n.getMessage("optionsPage")}</div>`), r(".cyxy-options-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-ctrl-btn").on("mouseenter", function () {
        r(".cyxy-ctrl-hint").remove(), r("body").append(`<div class="cyxy-ctrl-hint cyxy-trs-target">${chrome.i18n.getMessage("ctrlHint")}</div>`), r(".cyxy-ctrl-hint").attr("style", "transform: translateY(-50%) !important;")
    }), r(".cyxy-personal").on("mouseleave", function () {
        r(".cyxy-personal-hint").remove()
    }), r(".cyxy-function").on("mouseleave", function () {
        r(".cyxy-function-hint").remove()
    }), r(".cyxy-favorite").on("mouseleave", function () {
        r(".cyxy-favorite-hint").remove()
    }), r(".cyxy-video-trans").on("mouseleave", function () {
        r(".cyxy-video-hint").remove()
    }), r(".cyxy-options-link").on("mouseleave", function () {
        r(".cyxy-options-hint").remove()
    }), r(".cyxy-ctrl-btn").on("mouseleave", function () {
        r(".cyxy-ctrl-hint").remove()
    })
}]);