!(function (e) {
  function t(t) {
    for (var r, o, i = t[0], s = t[1], a = 0, u = []; a < i.length; a++)
      (o = i[a]), n[o] && u.push(n[o][0]), (n[o] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (c && c(t); u.length; ) u.shift()();
  }
  var r = {},
    n = { 0: 0 };
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [],
      r = n[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var i = new Promise(function (t, o) {
          r = n[e] = [t, o];
        });
        t.push((r[2] = i));
        var s,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          (a.src = (function (e) {
            return o.p + "" + ({}[e] || e) + ".js";
          })(e)),
          (s = function (t) {
            (a.onerror = a.onload = null), clearTimeout(c);
            var r = n[e];
            if (0 !== r) {
              if (r) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src,
                  s = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"
                  );
                (s.type = o), (s.request = i), r[1](s);
              }
              n[e] = void 0;
            }
          });
        var c = setTimeout(function () {
          s({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = s), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = r),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw e;
    });
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var a = 0; a < i.length; a++) t(i[a]);
  var c = s;
  o((o.s = 63));
})([
  function (e, t, r) {
    "use strict";
    var n = r(7),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return void 0 === e;
    }
    function a(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function u(e) {
      return "[object Function]" === o.call(e);
    }
    function l(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !s(e) &&
          null !== e.constructor &&
          !s(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: a,
      isPlainObject: c,
      isUndefined: s,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: u,
      isStream: function (e) {
        return a(e) && u(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: l,
      merge: function e() {
        var t = {};
        function r(r, n) {
          c(t[n]) && c(r)
            ? (t[n] = e(t[n], r))
            : c(r)
            ? (t[n] = e({}, r))
            : i(r)
            ? (t[n] = r.slice())
            : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) l(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          l(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
    };
  },
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupVolcengine = function () {
        const e = window,
          t = "cyxyCollectEvent";
        if (((e.TeaAnalyticsObject = t), !e[t])) {
          function n() {
            n.q.push(arguments);
          }
          (n.q = n.q || []), (e[t] = n);
        }
        (e[t].l = +new Date()),
          r.e(7).then(r.t.bind(null, 47, 7)),
          window.cyxyCollectEvent("init", {
            debug: !0,
            app_id: 254266,
            channel: "cn",
            autotrack: !1,
          }),
          window.cyxyCollectEvent("config", {
            app_version: browser.runtime.getManifest().version,
            evtParams: { userType: "游客" },
          }),
          window.cyxyCollectEvent("start");
      }),
      (t.cyxyCollectEvent = t.setupVolcengineBackgroundListener = void 0),
      (t.setupVolcengineBackgroundListener = () => {
        browser.runtime.onMessage.addListener((e) => {
          return;
          if (e && "VolcengineCollectEvent" === e.type)
            return (
              window.cyxyCollectEvent.apply(window, e.args), Promise.resolve()
            );
        });
      }),
      (t.cyxyCollectEvent = (...e) => {});
      // (t.cyxyCollectEvent = (...e) =>
      //   window.cyxyCollectEvent
      //     ? window.cyxyCollectEvent.apply(window, e)
      //     : browser.runtime.sendMessage({
      //         type: "VolcengineCollectEvent",
      //         args: e,
      //       }));
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        n = s;
      }
    })();
    var c,
      u = [],
      l = !1,
      f = -1;
    function p() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && h());
    }
    function h() {
      if (!l) {
        var e = a(p);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++f < t; ) c && c[f].run();
          (f = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function d(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new d(e, t)), 1 !== u.length || l || a(h);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var i;
      if (r) i = r(t);
      else if (n.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (i = s.join("&"));
      }
      if (i) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(0),
        o = r(31),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function s(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var a,
        c = {
          adapter:
            ("undefined" != typeof XMLHttpRequest
              ? (a = r(11))
              : void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t) &&
                (a = r(11)),
            a),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e)
                  ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = n.merge(i);
        }),
        (e.exports = c);
    }.call(this, r(6)));
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(32),
      i = r(34),
      s = r(8),
      a = r(35),
      c = r(38),
      u = r(39),
      l = r(12);
    e.exports = function (e) {
      return new Promise(function (t, r) {
        var f = e.data,
          p = e.headers;
        n.isFormData(f) && delete p["Content-Type"];
        var h = new XMLHttpRequest();
        if (e.auth) {
          var d = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          p.Authorization = "Basic " + btoa(d + ":" + g);
        }
        var m = a(e.baseURL, e.url);
        if (
          (h.open(
            e.method.toUpperCase(),
            s(m, e.params, e.paramsSerializer),
            !0
          ),
          (h.timeout = e.timeout),
          (h.onreadystatechange = function () {
            if (
              h &&
              4 === h.readyState &&
              (0 !== h.status ||
                (h.responseURL && 0 === h.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in h
                    ? c(h.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? h.response
                      : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: n,
                  config: e,
                  request: h,
                };
              o(t, r, i), (h = null);
            }
          }),
          (h.onabort = function () {
            h && (r(l("Request aborted", e, "ECONNABORTED", h)), (h = null));
          }),
          (h.onerror = function () {
            r(l("Network Error", e, null, h)), (h = null);
          }),
          (h.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(l(t, e, "ECONNABORTED", h)),
              (h = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var b =
            (e.withCredentials || u(m)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          b && (p[e.xsrfHeaderName] = b);
        }
        if (
          ("setRequestHeader" in h &&
            n.forEach(p, function (e, t) {
              void 0 === f && "content-type" === t.toLowerCase()
                ? delete p[t]
                : h.setRequestHeader(t, e);
            }),
          n.isUndefined(e.withCredentials) ||
            (h.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            h.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          h.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            h.upload &&
            h.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              h && (h.abort(), r(e), (h = null));
            }),
          f || (f = null),
          h.send(f);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(33);
    e.exports = function (e, t, r, o, i) {
      var s = new Error(e);
      return n(s, t, r, o, i);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      t = t || {};
      var r = {},
        o = ["url", "method", "data"],
        i = ["headers", "auth", "proxy", "params"],
        s = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        a = ["validateStatus"];
      function c(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
          ? n.merge({}, t)
          : n.isArray(t)
          ? t.slice()
          : t;
      }
      function u(o) {
        n.isUndefined(t[o])
          ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
          : (r[o] = c(e[o], t[o]));
      }
      n.forEach(o, function (e) {
        n.isUndefined(t[e]) || (r[e] = c(void 0, t[e]));
      }),
        n.forEach(i, u),
        n.forEach(s, function (o) {
          n.isUndefined(t[o])
            ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
            : (r[o] = c(void 0, t[o]));
        }),
        n.forEach(a, function (n) {
          n in t ? (r[n] = c(e[n], t[n])) : n in e && (r[n] = c(void 0, e[n]));
        });
      var l = o.concat(i).concat(s).concat(a),
        f = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === l.indexOf(e);
          });
      return n.forEach(f, u), r;
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n;
    r.r(t);
    var o = new Uint8Array(16);
    function i() {
      if (
        !n &&
        !(n =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return n(o);
    }
    for (
      var s =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        a = function (e) {
          return "string" == typeof e && s.test(e);
        },
        c = [],
        u = 0;
      u < 256;
      ++u
    )
      c.push((u + 256).toString(16).substr(1));
    var l,
      f,
      p = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            c[e[t + 0]] +
            c[e[t + 1]] +
            c[e[t + 2]] +
            c[e[t + 3]] +
            "-" +
            c[e[t + 4]] +
            c[e[t + 5]] +
            "-" +
            c[e[t + 6]] +
            c[e[t + 7]] +
            "-" +
            c[e[t + 8]] +
            c[e[t + 9]] +
            "-" +
            c[e[t + 10]] +
            c[e[t + 11]] +
            c[e[t + 12]] +
            c[e[t + 13]] +
            c[e[t + 14]] +
            c[e[t + 15]]
          ).toLowerCase();
        if (!a(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      },
      h = 0,
      d = 0,
      g = function (e, t, r) {
        var n = (t && r) || 0,
          o = t || new Array(16),
          s = (e = e || {}).node || l,
          a = void 0 !== e.clockseq ? e.clockseq : f;
        if (null == s || null == a) {
          var c = e.random || (e.rng || i)();
          null == s && (s = l = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
            null == a && (a = f = 16383 & ((c[6] << 8) | c[7]));
        }
        var u = void 0 !== e.msecs ? e.msecs : Date.now(),
          g = void 0 !== e.nsecs ? e.nsecs : d + 1,
          m = u - h + (g - d) / 1e4;
        if (
          (m < 0 && void 0 === e.clockseq && (a = (a + 1) & 16383),
          (m < 0 || u > h) && void 0 === e.nsecs && (g = 0),
          g >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (h = u), (d = g), (f = a);
        var b = (1e4 * (268435455 & (u += 122192928e5)) + g) % 4294967296;
        (o[n++] = (b >>> 24) & 255),
          (o[n++] = (b >>> 16) & 255),
          (o[n++] = (b >>> 8) & 255),
          (o[n++] = 255 & b);
        var v = ((u / 4294967296) * 1e4) & 268435455;
        (o[n++] = (v >>> 8) & 255),
          (o[n++] = 255 & v),
          (o[n++] = ((v >>> 24) & 15) | 16),
          (o[n++] = (v >>> 16) & 255),
          (o[n++] = (a >>> 8) | 128),
          (o[n++] = 255 & a);
        for (var y = 0; y < 6; ++y) o[n + y] = s[y];
        return t || p(o);
      },
      m = function (e) {
        if (!a(e)) throw TypeError("Invalid UUID");
        var t,
          r = new Uint8Array(16);
        return (
          (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (r[1] = (t >>> 16) & 255),
          (r[2] = (t >>> 8) & 255),
          (r[3] = 255 & t),
          (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (r[5] = 255 & t),
          (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (r[7] = 255 & t),
          (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (r[9] = 255 & t),
          (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
          (r[11] = (t / 4294967296) & 255),
          (r[12] = (t >>> 24) & 255),
          (r[13] = (t >>> 16) & 255),
          (r[14] = (t >>> 8) & 255),
          (r[15] = 255 & t),
          r
        );
      },
      b = function (e, t, r) {
        function n(e, n, o, i) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(e.charCodeAt(r));
                return t;
              })(e)),
            "string" == typeof n && (n = m(n)),
            16 !== n.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var s = new Uint8Array(16 + e.length);
          if (
            (s.set(n),
            s.set(e, n.length),
            ((s = r(s))[6] = (15 & s[6]) | t),
            (s[8] = (63 & s[8]) | 128),
            o)
          ) {
            i = i || 0;
            for (var a = 0; a < 16; ++a) o[i + a] = s[a];
            return o;
          }
          return p(s);
        }
        try {
          n.name = e;
        } catch (e) {}
        return (
          (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          n
        );
      };
    function v(e) {
      return 14 + (((e + 64) >>> 9) << 4) + 1;
    }
    function y(e, t) {
      var r = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function w(e, t, r, n, o, i) {
      return y(((s = y(y(t, e), y(n, i))) << (a = o)) | (s >>> (32 - a)), r);
      var s, a;
    }
    function _(e, t, r, n, o, i, s) {
      return w((t & r) | (~t & n), e, t, o, i, s);
    }
    function E(e, t, r, n, o, i, s) {
      return w((t & n) | (r & ~n), e, t, o, i, s);
    }
    function x(e, t, r, n, o, i, s) {
      return w(t ^ r ^ n, e, t, o, i, s);
    }
    function S(e, t, r, n, o, i, s) {
      return w(r ^ (t | ~n), e, t, o, i, s);
    }
    var O = b("v3", 48, function (e) {
        if ("string" == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r);
        }
        return (function (e) {
          for (var t = [], r = 32 * e.length, n = 0; n < r; n += 8) {
            var o = (e[n >> 5] >>> n % 32) & 255,
              i = parseInt(
                "0123456789abcdef".charAt((o >>> 4) & 15) +
                  "0123456789abcdef".charAt(15 & o),
                16
              );
            t.push(i);
          }
          return t;
        })(
          (function (e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[v(t) - 1] = t);
            for (
              var r = 1732584193,
                n = -271733879,
                o = -1732584194,
                i = 271733878,
                s = 0;
              s < e.length;
              s += 16
            ) {
              var a = r,
                c = n,
                u = o,
                l = i;
              (r = _(r, n, o, i, e[s], 7, -680876936)),
                (i = _(i, r, n, o, e[s + 1], 12, -389564586)),
                (o = _(o, i, r, n, e[s + 2], 17, 606105819)),
                (n = _(n, o, i, r, e[s + 3], 22, -1044525330)),
                (r = _(r, n, o, i, e[s + 4], 7, -176418897)),
                (i = _(i, r, n, o, e[s + 5], 12, 1200080426)),
                (o = _(o, i, r, n, e[s + 6], 17, -1473231341)),
                (n = _(n, o, i, r, e[s + 7], 22, -45705983)),
                (r = _(r, n, o, i, e[s + 8], 7, 1770035416)),
                (i = _(i, r, n, o, e[s + 9], 12, -1958414417)),
                (o = _(o, i, r, n, e[s + 10], 17, -42063)),
                (n = _(n, o, i, r, e[s + 11], 22, -1990404162)),
                (r = _(r, n, o, i, e[s + 12], 7, 1804603682)),
                (i = _(i, r, n, o, e[s + 13], 12, -40341101)),
                (o = _(o, i, r, n, e[s + 14], 17, -1502002290)),
                (r = E(
                  r,
                  (n = _(n, o, i, r, e[s + 15], 22, 1236535329)),
                  o,
                  i,
                  e[s + 1],
                  5,
                  -165796510
                )),
                (i = E(i, r, n, o, e[s + 6], 9, -1069501632)),
                (o = E(o, i, r, n, e[s + 11], 14, 643717713)),
                (n = E(n, o, i, r, e[s], 20, -373897302)),
                (r = E(r, n, o, i, e[s + 5], 5, -701558691)),
                (i = E(i, r, n, o, e[s + 10], 9, 38016083)),
                (o = E(o, i, r, n, e[s + 15], 14, -660478335)),
                (n = E(n, o, i, r, e[s + 4], 20, -405537848)),
                (r = E(r, n, o, i, e[s + 9], 5, 568446438)),
                (i = E(i, r, n, o, e[s + 14], 9, -1019803690)),
                (o = E(o, i, r, n, e[s + 3], 14, -187363961)),
                (n = E(n, o, i, r, e[s + 8], 20, 1163531501)),
                (r = E(r, n, o, i, e[s + 13], 5, -1444681467)),
                (i = E(i, r, n, o, e[s + 2], 9, -51403784)),
                (o = E(o, i, r, n, e[s + 7], 14, 1735328473)),
                (r = x(
                  r,
                  (n = E(n, o, i, r, e[s + 12], 20, -1926607734)),
                  o,
                  i,
                  e[s + 5],
                  4,
                  -378558
                )),
                (i = x(i, r, n, o, e[s + 8], 11, -2022574463)),
                (o = x(o, i, r, n, e[s + 11], 16, 1839030562)),
                (n = x(n, o, i, r, e[s + 14], 23, -35309556)),
                (r = x(r, n, o, i, e[s + 1], 4, -1530992060)),
                (i = x(i, r, n, o, e[s + 4], 11, 1272893353)),
                (o = x(o, i, r, n, e[s + 7], 16, -155497632)),
                (n = x(n, o, i, r, e[s + 10], 23, -1094730640)),
                (r = x(r, n, o, i, e[s + 13], 4, 681279174)),
                (i = x(i, r, n, o, e[s], 11, -358537222)),
                (o = x(o, i, r, n, e[s + 3], 16, -722521979)),
                (n = x(n, o, i, r, e[s + 6], 23, 76029189)),
                (r = x(r, n, o, i, e[s + 9], 4, -640364487)),
                (i = x(i, r, n, o, e[s + 12], 11, -421815835)),
                (o = x(o, i, r, n, e[s + 15], 16, 530742520)),
                (r = S(
                  r,
                  (n = x(n, o, i, r, e[s + 2], 23, -995338651)),
                  o,
                  i,
                  e[s],
                  6,
                  -198630844
                )),
                (i = S(i, r, n, o, e[s + 7], 10, 1126891415)),
                (o = S(o, i, r, n, e[s + 14], 15, -1416354905)),
                (n = S(n, o, i, r, e[s + 5], 21, -57434055)),
                (r = S(r, n, o, i, e[s + 12], 6, 1700485571)),
                (i = S(i, r, n, o, e[s + 3], 10, -1894986606)),
                (o = S(o, i, r, n, e[s + 10], 15, -1051523)),
                (n = S(n, o, i, r, e[s + 1], 21, -2054922799)),
                (r = S(r, n, o, i, e[s + 8], 6, 1873313359)),
                (i = S(i, r, n, o, e[s + 15], 10, -30611744)),
                (o = S(o, i, r, n, e[s + 6], 15, -1560198380)),
                (n = S(n, o, i, r, e[s + 13], 21, 1309151649)),
                (r = S(r, n, o, i, e[s + 4], 6, -145523070)),
                (i = S(i, r, n, o, e[s + 11], 10, -1120210379)),
                (o = S(o, i, r, n, e[s + 2], 15, 718787259)),
                (n = S(n, o, i, r, e[s + 9], 21, -343485551)),
                (r = y(r, a)),
                (n = y(n, c)),
                (o = y(o, u)),
                (i = y(i, l));
            }
            return [r, n, o, i];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (
                var t = 8 * e.length, r = new Uint32Array(v(t)), n = 0;
                n < t;
                n += 8
              )
                r[n >> 5] |= (255 & e[n / 8]) << n % 32;
              return r;
            })(e),
            8 * e.length
          )
        );
      }),
      R = function (e, t, r) {
        var n = (e = e || {}).random || (e.rng || i)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (var o = 0; o < 16; ++o) t[r + o] = n[o];
          return t;
        }
        return p(n);
      };
    function T(e, t, r, n) {
      switch (e) {
        case 0:
          return (t & r) ^ (~t & n);
        case 1:
          return t ^ r ^ n;
        case 2:
          return (t & r) ^ (t & n) ^ (r & n);
        case 3:
          return t ^ r ^ n;
      }
    }
    function k(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    var C = b("v5", 80, function (e) {
        var t = [1518500249, 1859775393, 2400959708, 3395469782],
          r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof e) {
          var n = unescape(encodeURIComponent(e));
          e = [];
          for (var o = 0; o < n.length; ++o) e.push(n.charCodeAt(o));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for (
          var i = e.length / 4 + 2,
            s = Math.ceil(i / 16),
            a = new Array(s),
            c = 0;
          c < s;
          ++c
        ) {
          for (var u = new Uint32Array(16), l = 0; l < 16; ++l)
            u[l] =
              (e[64 * c + 4 * l] << 24) |
              (e[64 * c + 4 * l + 1] << 16) |
              (e[64 * c + 4 * l + 2] << 8) |
              e[64 * c + 4 * l + 3];
          a[c] = u;
        }
        (a[s - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
          (a[s - 1][14] = Math.floor(a[s - 1][14])),
          (a[s - 1][15] = (8 * (e.length - 1)) & 4294967295);
        for (var f = 0; f < s; ++f) {
          for (var p = new Uint32Array(80), h = 0; h < 16; ++h) p[h] = a[f][h];
          for (var d = 16; d < 80; ++d)
            p[d] = k(p[d - 3] ^ p[d - 8] ^ p[d - 14] ^ p[d - 16], 1);
          for (
            var g = r[0], m = r[1], b = r[2], v = r[3], y = r[4], w = 0;
            w < 80;
            ++w
          ) {
            var _ = Math.floor(w / 20),
              E = (k(g, 5) + T(_, m, b, v) + y + t[_] + p[w]) >>> 0;
            (y = v), (v = b), (b = k(m, 30) >>> 0), (m = g), (g = E);
          }
          (r[0] = (r[0] + g) >>> 0),
            (r[1] = (r[1] + m) >>> 0),
            (r[2] = (r[2] + b) >>> 0),
            (r[3] = (r[3] + v) >>> 0),
            (r[4] = (r[4] + y) >>> 0);
        }
        return [
          (r[0] >> 24) & 255,
          (r[0] >> 16) & 255,
          (r[0] >> 8) & 255,
          255 & r[0],
          (r[1] >> 24) & 255,
          (r[1] >> 16) & 255,
          (r[1] >> 8) & 255,
          255 & r[1],
          (r[2] >> 24) & 255,
          (r[2] >> 16) & 255,
          (r[2] >> 8) & 255,
          255 & r[2],
          (r[3] >> 24) & 255,
          (r[3] >> 16) & 255,
          (r[3] >> 8) & 255,
          255 & r[3],
          (r[4] >> 24) & 255,
          (r[4] >> 16) & 255,
          (r[4] >> 8) & 255,
          255 & r[4],
        ];
      }),
      L = function (e) {
        if (!a(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
      };
    r.d(t, "v1", function () {
      return g;
    }),
      r.d(t, "v3", function () {
        return O;
      }),
      r.d(t, "v4", function () {
        return R;
      }),
      r.d(t, "v5", function () {
        return C;
      }),
      r.d(t, "NIL", function () {
        return "00000000-0000-0000-0000-000000000000";
      }),
      r.d(t, "version", function () {
        return L;
      }),
      r.d(t, "validate", function () {
        return a;
      }),
      r.d(t, "stringify", function () {
        return p;
      }),
      r.d(t, "parse", function () {
        return m;
      });
  },
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.firebasePageView = function (e) {
        (0, n.reportPageview)(e);
      }),
      (t.firebaseEvent = async function (...e) {
        e.forEach((e) => {
          (0, o.cyxyCollectEvent)(e.name, e.params);
          const t = { category: "firebase", action: e.name },
            r = Object.values(e.params)[0];
          null != r && (t.label = r), (0, n.reportEvent)(t);
        });
      });
    var n = r(21),
      o = r(4);
  },
  function (e, t, r) {
    (function (t) {
      var n = r(43),
        o =
          "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {};
      function i(e) {
        return void 0 === e;
      }
      function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function a(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      function c(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }
      function u() {
        if (!("fetch" in o)) return !1;
        try {
          return new Headers(), new Request(""), new Response(), !0;
        } catch (e) {
          return !1;
        }
      }
      function l(e, t) {
        var r, n;
        if (i(e.length)) for (r in e) p(e, r) && t.call(null, r, e[r]);
        else if ((n = e.length)) for (r = 0; r < n; r++) t.call(null, r, e[r]);
      }
      function f(e, t) {
        if ("number" != typeof t)
          throw new Error(
            "2nd argument to `truncate` function should be a number"
          );
        return "string" != typeof e || 0 === t
          ? e
          : e.length <= t
          ? e
          : e.substr(0, t) + "…";
      }
      function p(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function h(e) {
        for (var t, r = [], n = 0, o = e.length; n < o; n++)
          a((t = e[n]))
            ? r.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
            : t && t.source && r.push(t.source);
        return new RegExp(r.join("|"), "i");
      }
      function d(e) {
        var t,
          r,
          n,
          o,
          i,
          s = [];
        if (!e || !e.tagName) return "";
        if (
          (s.push(e.tagName.toLowerCase()),
          e.id && s.push("#" + e.id),
          (t = e.className) && a(t))
        )
          for (r = t.split(/\s+/), i = 0; i < r.length; i++) s.push("." + r[i]);
        var c = ["type", "name", "title", "alt"];
        for (i = 0; i < c.length; i++)
          (n = c[i]),
            (o = e.getAttribute(n)) && s.push("[" + n + '="' + o + '"]');
        return s.join("");
      }
      function g(e, t) {
        return !!(!!e ^ !!t);
      }
      function m(e, t) {
        if (g(e, t)) return !1;
        var r,
          n,
          o = e.frames,
          i = t.frames;
        if (void 0 === o || void 0 === i) return !1;
        if (o.length !== i.length) return !1;
        for (var s = 0; s < o.length; s++)
          if (
            ((r = o[s]),
            (n = i[s]),
            r.filename !== n.filename ||
              r.lineno !== n.lineno ||
              r.colno !== n.colno ||
              r.function !== n.function)
          )
            return !1;
        return !0;
      }
      function b(e) {
        if ("string" == typeof e) return f(e, 40);
        if ("number" == typeof e || "boolean" == typeof e || void 0 === e)
          return e;
        var t = Object.prototype.toString.call(e);
        return "[object Object]" === t
          ? "[Object]"
          : "[object Array]" === t
          ? "[Array]"
          : "[object Function]" === t
          ? e.name
            ? "[Function: " + e.name + "]"
            : "[Function]"
          : e;
      }
      e.exports = {
        isObject: function (e) {
          return "object" == typeof e && null !== e;
        },
        isError: function (e) {
          switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
              return !0;
            default:
              return e instanceof Error;
          }
        },
        isErrorEvent: function (e) {
          return "[object ErrorEvent]" === Object.prototype.toString.call(e);
        },
        isDOMError: function (e) {
          return "[object DOMError]" === Object.prototype.toString.call(e);
        },
        isDOMException: function (e) {
          return "[object DOMException]" === Object.prototype.toString.call(e);
        },
        isUndefined: i,
        isFunction: function (e) {
          return "function" == typeof e;
        },
        isPlainObject: s,
        isString: a,
        isArray: c,
        isEmptyObject: function (e) {
          if (!s(e)) return !1;
          for (var t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        },
        supportsErrorEvent: function () {
          try {
            return new ErrorEvent(""), !0;
          } catch (e) {
            return !1;
          }
        },
        supportsDOMError: function () {
          try {
            return new DOMError(""), !0;
          } catch (e) {
            return !1;
          }
        },
        supportsDOMException: function () {
          try {
            return new DOMException(""), !0;
          } catch (e) {
            return !1;
          }
        },
        supportsFetch: u,
        supportsReferrerPolicy: function () {
          if (!u()) return !1;
          try {
            return new Request("pickleRick", { referrerPolicy: "origin" }), !0;
          } catch (e) {
            return !1;
          }
        },
        supportsPromiseRejectionEvent: function () {
          return "function" == typeof PromiseRejectionEvent;
        },
        wrappedCallback: function (e) {
          return function (t, r) {
            var n = e(t) || t;
            return (r && r(n)) || n;
          };
        },
        each: l,
        objectMerge: function (e, t) {
          return t
            ? (l(t, function (t, r) {
                e[t] = r;
              }),
              e)
            : e;
        },
        truncate: f,
        objectFrozen: function (e) {
          return !!Object.isFrozen && Object.isFrozen(e);
        },
        hasKey: p,
        joinRegExp: h,
        urlencode: function (e) {
          var t = [];
          return (
            l(e, function (e, r) {
              t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
            }),
            t.join("&")
          );
        },
        uuid4: function () {
          var e = o.crypto || o.msCrypto;
          if (!i(e) && e.getRandomValues) {
            var t = new Uint16Array(8);
            e.getRandomValues(t),
              (t[3] = (4095 & t[3]) | 16384),
              (t[4] = (16383 & t[4]) | 32768);
            var r = function (e) {
              for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
              return t;
            };
            return (
              r(t[0]) +
              r(t[1]) +
              r(t[2]) +
              r(t[3]) +
              r(t[4]) +
              r(t[5]) +
              r(t[6]) +
              r(t[7])
            );
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            }
          );
        },
        htmlTreeAsString: function (e) {
          for (
            var t, r = [], n = 0, o = 0, i = " > ".length;
            e &&
            n++ < 5 &&
            !(
              "html" === (t = d(e)) ||
              (n > 1 && o + r.length * i + t.length >= 80)
            );

          )
            r.push(t), (o += t.length), (e = e.parentNode);
          return r.reverse().join(" > ");
        },
        htmlElementAsString: d,
        isSameException: function (e, t) {
          return (
            !g(e, t) &&
            ((e = e.values[0]),
            (t = t.values[0]),
            e.type === t.type &&
              e.value === t.value &&
              ((r = e.stacktrace),
              (n = t.stacktrace),
              (!i(r) || !i(n)) && m(e.stacktrace, t.stacktrace)))
          );
          var r, n;
        },
        isSameStacktrace: m,
        parseUrl: function (e) {
          if ("string" != typeof e) return {};
          var t = e.match(
              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
            ),
            r = t[6] || "",
            n = t[8] || "";
          return {
            protocol: t[2],
            host: t[4],
            path: t[5],
            relative: t[5] + r + n,
          };
        },
        fill: function (e, t, r, n) {
          if (null != e) {
            var o = e[t];
            (e[t] = r(o)),
              (e[t].__raven__ = !0),
              (e[t].__orig__ = o),
              n && n.push([e, t, o]);
          }
        },
        safeJoin: function (e, t) {
          if (!c(e)) return "";
          for (var r = [], n = 0; n < e.length; n++)
            try {
              r.push(String(e[n]));
            } catch (e) {
              r.push("[value cannot be serialized]");
            }
          return r.join(t);
        },
        serializeException: function e(t, r, o) {
          if (!s(t)) return t;
          o = "number" != typeof (r = "number" != typeof r ? 3 : r) ? 51200 : o;
          var i = (function e(t, r) {
            return 0 === r
              ? b(t)
              : s(t)
              ? Object.keys(t).reduce(function (n, o) {
                  return (n[o] = e(t[o], r - 1)), n;
                }, {})
              : Array.isArray(t)
              ? t.map(function (t) {
                  return e(t, r - 1);
                })
              : b(t);
          })(t, r);
          return (function (e) {
            return (function (e) {
              return ~-encodeURI(e).split(/%..|./).length;
            })(JSON.stringify(e));
          })(n(i)) > o
            ? e(t, r - 1)
            : i;
        },
        serializeKeysForMessage: function (e, t) {
          if ("number" == typeof e || "string" == typeof e) return e.toString();
          if (!Array.isArray(e)) return "";
          if (
            0 ===
            (e = e.filter(function (e) {
              return "string" == typeof e;
            })).length
          )
            return "[object has no keys]";
          if (((t = "number" != typeof t ? 40 : t), e[0].length >= t))
            return e[0];
          for (var r = e.length; r > 0; r--) {
            var n = e.slice(0, r).join(", ");
            if (!(n.length > t)) return r === e.length ? n : n + "…";
          }
          return "";
        },
        sanitize: function (e, t) {
          if (!c(t) || (c(t) && 0 === t.length)) return e;
          var r,
            o = h(t);
          try {
            r = JSON.parse(n(e));
          } catch (t) {
            return e;
          }
          return (function e(t) {
            return c(t)
              ? t.map(function (t) {
                  return e(t);
                })
              : s(t)
              ? Object.keys(t).reduce(function (r, n) {
                  return o.test(n) ? (r[n] = "********") : (r[n] = e(t[n])), r;
                }, {})
              : t;
          })(r);
        },
      };
    }.call(this, r(5)));
  },
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.INTERPRETER_API =
        t.DISTILLER_WHITE_LIST =
        t.TRS_TOKEN =
        t.PUBLIC_SENTRY_URL =
        t.SUB_TYPE_l =
        t.DEFAULT_SUB_TYPE =
        t.SUB_TYPE_TGT =
        t.SUB_TYPE_ORG =
        t.SUB_TYPE_BIL =
        t.LANG_L =
        t.DEFAULT_LANG =
        t.JA =
        t.EN =
        t.ZH =
          void 0);
    (t.INTERPRETER_API = "https://api.interpreter.caiyunai.com/"),
      (t.DISTILLER_WHITE_LIST = [
        "popsci.com",
        "sciencealert.com",
        "livescience.com",
        "sciencedaily.com",
        "aeon.co",
        "thoughtco.com",
        "pixiv",
        "verywellmind.com",
        "wired.com",
        "buzzfeed.com",
        "brightside.me",
        "boredpanda.com",
        "iflscience.com",
        "archiveofourown.org",
      ]),
      (t.TRS_TOKEN = "lqkr1tfixq1wa9kmj9po"),
      (t.PUBLIC_SENTRY_URL =
        ""),
      (t.SUB_TYPE_l = ["bilingual", "original", "target"]),
      (t.DEFAULT_SUB_TYPE = "bilingual"),
      (t.SUB_TYPE_TGT = "target"),
      (t.SUB_TYPE_ORG = "original"),
      (t.SUB_TYPE_BIL = "bilingual"),
      (t.LANG_L = ["zh", "en", "ja-JP"]),
      (t.DEFAULT_LANG = "en"),
      (t.JA = "ja-JP"),
      (t.EN = "en"),
      (t.ZH = "zh");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.reportPageview = async function (e, t) {
        const r = {
          t: "pageview",
          dp: e,
          de: "UTF-8",
          dl: document.location.href,
          sd: screen.colorDepth + "-bit",
          sr: screen.width + "x" + screen.height,
          ul: "zh-cn",
        };
        t && (r.tid = t);
        try {
          await u(r);
        } catch (e) {}
      }),
      (t.reportEvent = async function (e, t) {
        const r = { t: "event", ec: e.category, ea: e.action };
        null != e.label && (r.el = e.label),
          null != e.value && (r.ev = e.value),
          t && (r.tid = t);
        try {
          await u(r);
        } catch (e) {}
      });
    var n,
      o = r(15),
      i = (n = r(25)) && n.__esModule ? n : { default: n },
      s = r(22);
    const a = navigator.userAgent.includes("Firefox"),
      c = /apple/i.test(navigator.vendor);
    async function u(e) {
      return;
      if (a || c) {
        const { isEnableGa: e = !1 } = await browser.storage.sync.get({
          isEnableGa: !1,
        });
        if (!e) return;
      }
      const t = await (0, s.getCid)();
      return (0, i.default)({
        url: "https://www.google-analytics.com/collect",
        method: "post",
        headers: { "content-type": "text/plain;charset=UTF-8" },
        data: new URLSearchParams({
          v: "1",
          tid: "UA-83184075-2",
          cid: t,
          z: (0, o.v4)(),
          ...e,
        }),
      });
    }
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getCid = async function () {
        if (i) return i;
        if (
          !(i =
            localStorage.getItem("gacid") ||
            (await browser.storage.sync.get("gacid")))
        ) {
          (i = (0, n.v4)()), localStorage.setItem("gacid", i);
          try {
            await browser.storage.sync.set({ gacid: i });
          } catch (e) {}
        }
        return (0, o.cyxyCollectEvent)("config", { user_unique_id: i }), i;
      }),
      (t.setCid = async function (e) {
        e &&
          ((i = e), (0, o.cyxyCollectEvent)("config", { user_unique_id: i }));
      });
    var n = r(15),
      o = r(4);
    let i = "";
  },
  function (e, t, r) {
    (function (t) {
      var n = r(49),
        o =
          "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {},
        i = o.Raven,
        s = new n();
      (s.noConflict = function () {
        return (o.Raven = i), s;
      }),
        s.afterLoad(),
        (e.exports = s),
        (e.exports.Client = n);
    }.call(this, r(5)));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isExtEnv = void 0);
    const n = "undefined" != typeof browser || "undefined" != typeof chrome;
    t.isExtEnv = n;
  },
  function (e, t, r) {
    e.exports = r(26);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(7),
      i = r(27),
      s = r(13);
    function a(e) {
      var t = new i(e),
        r = o(i.prototype.request, t);
      return n.extend(r, i.prototype, t), n.extend(r, t), r;
    }
    var c = a(r(10));
    (c.Axios = i),
      (c.create = function (e) {
        return a(s(c.defaults, e));
      }),
      (c.Cancel = r(14)),
      (c.CancelToken = r(40)),
      (c.isCancel = r(9)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = r(41)),
      (c.isAxiosError = r(42)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(8),
      i = r(28),
      s = r(29),
      a = r(13);
    function c(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (c.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = a(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [s, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      (c.prototype.getUri = function (e) {
        return (
          (e = a(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        c.prototype[e] = function (t, r) {
          return this.request(
            a(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        c.prototype[e] = function (t, r, n) {
          return this.request(a(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(30),
      i = r(9),
      s = r(10);
    function a(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        a(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || s.adapter)(e).then(
          function (t) {
            return (
              a(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (a(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(12);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, i, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && a.push("path=" + o),
              n.isString(i) && a.push("domain=" + i),
              !0 === s && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(36),
      o = r(37);
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        i,
        s = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = n.trim(e.substr(0, i)).toLowerCase()),
              (r = n.trim(e.substr(i + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([r])
                  : s[t]
                  ? s[t] + ", " + r
                  : r;
            }
          }),
          s)
        : s;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(14);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  function (e, t) {
    function r(e, t) {
      for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
      return -1;
    }
    function n(e, t) {
      var n = [],
        o = [];
      return (
        null == t &&
          (t = function (e, t) {
            return n[0] === t
              ? "[Circular ~]"
              : "[Circular ~." + o.slice(0, r(n, t)).join(".") + "]";
          }),
        function (i, s) {
          if (n.length > 0) {
            var a = r(n, this);
            ~a ? n.splice(a + 1) : n.push(this),
              ~a ? o.splice(a, 1 / 0, i) : o.push(i),
              ~r(n, s) && (s = t.call(this, i, s));
          } else n.push(s);
          return null == e
            ? s instanceof Error
              ? (function (e) {
                  var t = { stack: e.stack, message: e.message, name: e.name };
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                  return t;
                })(s)
              : s
            : e.call(this, i, s);
        }
      );
    }
    (e.exports = function (e, t, r, o) {
      return JSON.stringify(e, n(t, o), r);
    }).getSerialize = n;
  },
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.cyxyFetch = function (e = {}) {
        return i.isExtEnv && !window[s]
          ? browser.runtime.sendMessage({ type: "CYXY_FETCH", config: e })
          : a(e);
      }),
      (t.setupCyxyFetch = function () {
        window[s] = !0;
        const e = (e) => {
          if (e && "CYXY_FETCH" === e.type) return a(e.config);
        };
        return (
          browser.runtime.onMessage.addListener(e),
          () => browser.runtime.onMessage.removeListener(e)
        );
      });
    var n,
      o = (n = r(23)) && n.__esModule ? n : { default: n },
      i = r(24);
    const s = "IsCyxyFetchStation";
    async function a(e = {}) {
      const t = {
        method: e.method || "POST",
        credentials: "include",
        headers: Object.assign(
          { "Content-Type": "application/json" },
          e.headers || {}
        ),
      };
      if (e.data)
        try {
          t.body = JSON.stringify(e.data);
        } catch (e) {}
      try {
        const r = await fetch(e.url, t);
        return {
          ok: r.ok,
          redirected: r.redirected,
          status: r.status,
          statusText: r.statusText,
          type: r.type,
          url: r.url,
          data: await r.json(),
        };
      } catch (e) {
        return o.default.captureException(e), { error: e };
      }
    }
  },
  function (e, t, r) {
    (function (t) {
      var n = r(50),
        o = r(43),
        i = r(51),
        s = r(52),
        a = r(18),
        c = a.isErrorEvent,
        u = a.isDOMError,
        l = a.isDOMException,
        f = a.isError,
        p = a.isObject,
        h = a.isPlainObject,
        d = a.isUndefined,
        g = a.isFunction,
        m = a.isString,
        b = a.isArray,
        v = a.isEmptyObject,
        y = a.each,
        w = a.objectMerge,
        _ = a.truncate,
        E = a.objectFrozen,
        x = a.hasKey,
        S = a.joinRegExp,
        O = a.urlencode,
        R = a.uuid4,
        T = a.htmlTreeAsString,
        k = a.isSameException,
        C = a.isSameStacktrace,
        L = a.parseUrl,
        j = a.fill,
        A = a.supportsFetch,
        P = a.supportsReferrerPolicy,
        M = a.serializeKeysForMessage,
        U = a.serializeException,
        B = a.sanitize,
        I = r(53).wrapMethod,
        N = "source protocol user pass host port path".split(" "),
        D = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
      function F() {
        return +new Date();
      }
      var q =
          "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {},
        H = q.document,
        W = q.navigator;
      function z(e, t) {
        return g(t)
          ? function (r) {
              return t(r, e);
            }
          : t;
      }
      function $() {
        for (var e in ((this._hasJSON = !(
          "object" != typeof JSON || !JSON.stringify
        )),
        (this._hasDocument = !d(H)),
        (this._hasNavigator = !d(W)),
        (this._lastCapturedException = null),
        (this._lastData = null),
        (this._lastEventId = null),
        (this._globalServer = null),
        (this._globalKey = null),
        (this._globalProject = null),
        (this._globalContext = {}),
        (this._globalOptions = {
          release: q.SENTRY_RELEASE && q.SENTRY_RELEASE.id,
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
          sanitizeKeys: [],
        }),
        (this._fetchDefaults = {
          method: "POST",
          referrerPolicy: P() ? "origin" : "",
        }),
        (this._ignoreOnError = 0),
        (this._isRavenInstalled = !1),
        (this._originalErrorStackTraceLimit = Error.stackTraceLimit),
        (this._originalConsole = q.console || {}),
        (this._originalConsoleMethods = {}),
        (this._plugins = []),
        (this._startTime = F()),
        (this._wrappedBuiltIns = []),
        (this._breadcrumbs = []),
        (this._lastCapturedEvent = null),
        this._keypressTimeout,
        (this._location = q.location),
        (this._lastHref = this._location && this._location.href),
        this._resetBackoff(),
        this._originalConsole))
          this._originalConsoleMethods[e] = this._originalConsole[e];
      }
      ($.prototype = {
        VERSION: "3.27.2",
        debug: !1,
        TraceKit: n,
        config: function (e, t) {
          var r = this;
          if (r._globalServer)
            return (
              this._logDebug(
                "error",
                "Error: Raven has already been configured"
              ),
              r
            );
          if (!e) return r;
          var o = r._globalOptions;
          t &&
            y(t, function (e, t) {
              "tags" === e || "extra" === e || "user" === e
                ? (r._globalContext[e] = t)
                : (o[e] = t);
            }),
            r.setDSN(e),
            o.ignoreErrors.push(/^Script error\.?$/),
            o.ignoreErrors.push(
              /^Javascript error: Script error\.? on line 0$/
            ),
            (o.ignoreErrors = S(o.ignoreErrors)),
            (o.ignoreUrls = !!o.ignoreUrls.length && S(o.ignoreUrls)),
            (o.whitelistUrls = !!o.whitelistUrls.length && S(o.whitelistUrls)),
            (o.includePaths = S(o.includePaths)),
            (o.maxBreadcrumbs = Math.max(
              0,
              Math.min(o.maxBreadcrumbs || 100, 100)
            ));
          var i = { xhr: !0, console: !0, dom: !0, location: !0, sentry: !0 },
            s = o.autoBreadcrumbs;
          "[object Object]" === {}.toString.call(s)
            ? (s = w(i, s))
            : !1 !== s && (s = i),
            (o.autoBreadcrumbs = s);
          var a = { tryCatch: !0 },
            c = o.instrument;
          return (
            "[object Object]" === {}.toString.call(c)
              ? (c = w(a, c))
              : !1 !== c && (c = a),
            (o.instrument = c),
            (n.collectWindowErrors = !!o.collectWindowErrors),
            r
          );
        },
        install: function () {
          var e = this;
          return (
            e.isSetup() &&
              !e._isRavenInstalled &&
              (n.report.subscribe(function () {
                e._handleOnErrorStackInfo.apply(e, arguments);
              }),
              e._globalOptions.captureUnhandledRejections &&
                e._attachPromiseRejectionHandler(),
              e._patchFunctionToString(),
              e._globalOptions.instrument &&
                e._globalOptions.instrument.tryCatch &&
                e._instrumentTryCatch(),
              e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(),
              e._drainPlugins(),
              (e._isRavenInstalled = !0)),
            (Error.stackTraceLimit = e._globalOptions.stackTraceLimit),
            this
          );
        },
        setDSN: function (e) {
          var t = this._parseDSN(e),
            r = t.path.lastIndexOf("/"),
            n = t.path.substr(1, r);
          (this._dsn = e),
            (this._globalKey = t.user),
            (this._globalSecret = t.pass && t.pass.substr(1)),
            (this._globalProject = t.path.substr(r + 1)),
            (this._globalServer = this._getGlobalServer(t)),
            (this._globalEndpoint =
              this._globalServer +
              "/" +
              n +
              "api/" +
              this._globalProject +
              "/store/"),
            this._resetBackoff();
        },
        context: function (e, t, r) {
          return (
            g(e) && ((r = t || []), (t = e), (e = {})),
            this.wrap(e, t).apply(this, r)
          );
        },
        wrap: function (e, t, r) {
          var n = this;
          if (d(t) && !g(e)) return e;
          if ((g(e) && ((t = e), (e = void 0)), !g(t))) return t;
          try {
            if (t.__raven__) return t;
            if (t.__raven_wrapper__) return t.__raven_wrapper__;
          } catch (e) {
            return t;
          }
          function o() {
            var o = [],
              i = arguments.length,
              s = !e || (e && !1 !== e.deep);
            for (r && g(r) && r.apply(this, arguments); i--; )
              o[i] = s ? n.wrap(e, arguments[i]) : arguments[i];
            try {
              return t.apply(this, o);
            } catch (t) {
              throw (n._ignoreNextOnError(), n.captureException(t, e), t);
            }
          }
          for (var i in t) x(t, i) && (o[i] = t[i]);
          return (
            (o.prototype = t.prototype),
            (t.__raven_wrapper__ = o),
            (o.__raven__ = !0),
            (o.__orig__ = t),
            o
          );
        },
        uninstall: function () {
          return (
            n.report.uninstall(),
            this._detachPromiseRejectionHandler(),
            this._unpatchFunctionToString(),
            this._restoreBuiltIns(),
            this._restoreConsole(),
            (Error.stackTraceLimit = this._originalErrorStackTraceLimit),
            (this._isRavenInstalled = !1),
            this
          );
        },
        _promiseRejectionHandler: function (e) {
          this._logDebug(
            "debug",
            "Raven caught unhandled promise rejection:",
            e
          ),
            this.captureException(e.reason, {
              mechanism: { type: "onunhandledrejection", handled: !1 },
            });
        },
        _attachPromiseRejectionHandler: function () {
          return (
            (this._promiseRejectionHandler =
              this._promiseRejectionHandler.bind(this)),
            q.addEventListener &&
              q.addEventListener(
                "unhandledrejection",
                this._promiseRejectionHandler
              ),
            this
          );
        },
        _detachPromiseRejectionHandler: function () {
          return (
            q.removeEventListener &&
              q.removeEventListener(
                "unhandledrejection",
                this._promiseRejectionHandler
              ),
            this
          );
        },
        captureException: function (e, t) {
          if (((t = w({ trimHeadFrames: 0 }, t || {})), c(e) && e.error))
            e = e.error;
          else {
            if (u(e) || l(e)) {
              var r = e.name || (u(e) ? "DOMError" : "DOMException"),
                o = e.message ? r + ": " + e.message : r;
              return this.captureMessage(
                o,
                w(t, { stacktrace: !0, trimHeadFrames: t.trimHeadFrames + 1 })
              );
            }
            if (f(e)) e = e;
            else {
              if (!h(e))
                return this.captureMessage(
                  e,
                  w(t, { stacktrace: !0, trimHeadFrames: t.trimHeadFrames + 1 })
                );
              (t = this._getCaptureExceptionOptionsFromPlainObject(t, e)),
                (e = new Error(t.message));
            }
          }
          this._lastCapturedException = e;
          try {
            var i = n.computeStackTrace(e);
            this._handleStackInfo(i, t);
          } catch (t) {
            if (e !== t) throw t;
          }
          return this;
        },
        _getCaptureExceptionOptionsFromPlainObject: function (e, t) {
          var r = Object.keys(t).sort(),
            n = w(e, {
              message: "Non-Error exception captured with keys: " + M(r),
              fingerprint: [i(r)],
              extra: e.extra || {},
            });
          return (n.extra.__serialized__ = U(t)), n;
        },
        captureMessage: function (e, t) {
          if (
            !this._globalOptions.ignoreErrors.test ||
            !this._globalOptions.ignoreErrors.test(e)
          ) {
            var r,
              o = w({ message: (e += "") }, (t = t || {}));
            try {
              throw new Error(e);
            } catch (e) {
              r = e;
            }
            r.name = null;
            var i = n.computeStackTrace(r),
              s = b(i.stack) && i.stack[1];
            s && "Raven.captureException" === s.func && (s = i.stack[2]);
            var a = (s && s.url) || "";
            if (
              (!this._globalOptions.ignoreUrls.test ||
                !this._globalOptions.ignoreUrls.test(a)) &&
              (!this._globalOptions.whitelistUrls.test ||
                this._globalOptions.whitelistUrls.test(a))
            ) {
              if (
                this._globalOptions.stacktrace ||
                t.stacktrace ||
                "" === o.message
              ) {
                (o.fingerprint = null == o.fingerprint ? e : o.fingerprint),
                  ((t = w({ trimHeadFrames: 0 }, t)).trimHeadFrames += 1);
                var c = this._prepareFrames(i, t);
                o.stacktrace = { frames: c.reverse() };
              }
              return (
                o.fingerprint &&
                  (o.fingerprint = b(o.fingerprint)
                    ? o.fingerprint
                    : [o.fingerprint]),
                this._send(o),
                this
              );
            }
          }
        },
        captureBreadcrumb: function (e) {
          var t = w({ timestamp: F() / 1e3 }, e);
          if (g(this._globalOptions.breadcrumbCallback)) {
            var r = this._globalOptions.breadcrumbCallback(t);
            if (p(r) && !v(r)) t = r;
            else if (!1 === r) return this;
          }
          return (
            this._breadcrumbs.push(t),
            this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs &&
              this._breadcrumbs.shift(),
            this
          );
        },
        addPlugin: function (e) {
          var t = [].slice.call(arguments, 1);
          return (
            this._plugins.push([e, t]),
            this._isRavenInstalled && this._drainPlugins(),
            this
          );
        },
        setUserContext: function (e) {
          return (this._globalContext.user = e), this;
        },
        setExtraContext: function (e) {
          return this._mergeContext("extra", e), this;
        },
        setTagsContext: function (e) {
          return this._mergeContext("tags", e), this;
        },
        clearContext: function () {
          return (this._globalContext = {}), this;
        },
        getContext: function () {
          return JSON.parse(o(this._globalContext));
        },
        setEnvironment: function (e) {
          return (this._globalOptions.environment = e), this;
        },
        setRelease: function (e) {
          return (this._globalOptions.release = e), this;
        },
        setDataCallback: function (e) {
          var t = this._globalOptions.dataCallback;
          return (this._globalOptions.dataCallback = z(t, e)), this;
        },
        setBreadcrumbCallback: function (e) {
          var t = this._globalOptions.breadcrumbCallback;
          return (this._globalOptions.breadcrumbCallback = z(t, e)), this;
        },
        setShouldSendCallback: function (e) {
          var t = this._globalOptions.shouldSendCallback;
          return (this._globalOptions.shouldSendCallback = z(t, e)), this;
        },
        setTransport: function (e) {
          return (this._globalOptions.transport = e), this;
        },
        lastException: function () {
          return this._lastCapturedException;
        },
        lastEventId: function () {
          return this._lastEventId;
        },
        isSetup: function () {
          return !(
            !this._hasJSON ||
            (!this._globalServer &&
              (this.ravenNotConfiguredError ||
                ((this.ravenNotConfiguredError = !0),
                this._logDebug(
                  "error",
                  "Error: Raven has not been configured."
                )),
              1))
          );
        },
        afterLoad: function () {
          var e = q.RavenConfig;
          e && this.config(e.dsn, e.config).install();
        },
        showReportDialog: function (e) {
          if (H) {
            if (
              !(e = w(
                {
                  eventId: this.lastEventId(),
                  dsn: this._dsn,
                  user: this._globalContext.user || {},
                },
                e
              )).eventId
            )
              throw new s("Missing eventId");
            if (!e.dsn) throw new s("Missing DSN");
            var t = encodeURIComponent,
              r = [];
            for (var n in e)
              if ("user" === n) {
                var o = e.user;
                o.name && r.push("name=" + t(o.name)),
                  o.email && r.push("email=" + t(o.email));
              } else r.push(t(n) + "=" + t(e[n]));
            var i = this._getGlobalServer(this._parseDSN(e.dsn)),
              a = H.createElement("script");
            (a.async = !0),
              (a.src = i + "/api/embed/error-page/?" + r.join("&")),
              (H.head || H.body).appendChild(a);
          }
        },
        _ignoreNextOnError: function () {
          var e = this;
          (this._ignoreOnError += 1),
            setTimeout(function () {
              e._ignoreOnError -= 1;
            });
        },
        _triggerEvent: function (e, t) {
          var r, n;
          if (this._hasDocument) {
            for (n in ((t = t || {}),
            (e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1)),
            H.createEvent
              ? (r = H.createEvent("HTMLEvents")).initEvent(e, !0, !0)
              : ((r = H.createEventObject()).eventType = e),
            t))
              x(t, n) && (r[n] = t[n]);
            if (H.createEvent) H.dispatchEvent(r);
            else
              try {
                H.fireEvent("on" + r.eventType.toLowerCase(), r);
              } catch (e) {}
          }
        },
        _breadcrumbEventHandler: function (e) {
          var t = this;
          return function (r) {
            if (((t._keypressTimeout = null), t._lastCapturedEvent !== r)) {
              var n;
              t._lastCapturedEvent = r;
              try {
                n = T(r.target);
              } catch (e) {
                n = "<unknown>";
              }
              t.captureBreadcrumb({ category: "ui." + e, message: n });
            }
          };
        },
        _keypressEventHandler: function () {
          var e = this;
          return function (t) {
            var r;
            try {
              r = t.target;
            } catch (e) {
              return;
            }
            var n = r && r.tagName;
            if (
              n &&
              ("INPUT" === n || "TEXTAREA" === n || r.isContentEditable)
            ) {
              var o = e._keypressTimeout;
              o || e._breadcrumbEventHandler("input")(t),
                clearTimeout(o),
                (e._keypressTimeout = setTimeout(function () {
                  e._keypressTimeout = null;
                }, 1e3));
            }
          };
        },
        _captureUrlChange: function (e, t) {
          var r = L(this._location.href),
            n = L(t),
            o = L(e);
          (this._lastHref = t),
            r.protocol === n.protocol && r.host === n.host && (t = n.relative),
            r.protocol === o.protocol && r.host === o.host && (e = o.relative),
            this.captureBreadcrumb({
              category: "navigation",
              data: { to: t, from: e },
            });
        },
        _patchFunctionToString: function () {
          var e = this;
          (e._originalFunctionToString = Function.prototype.toString),
            (Function.prototype.toString = function () {
              return "function" == typeof this && this.__raven__
                ? e._originalFunctionToString.apply(this.__orig__, arguments)
                : e._originalFunctionToString.apply(this, arguments);
            });
        },
        _unpatchFunctionToString: function () {
          this._originalFunctionToString &&
            (Function.prototype.toString = this._originalFunctionToString);
        },
        _instrumentTryCatch: function () {
          var e = this,
            t = e._wrappedBuiltIns;
          function r(t) {
            return function (r, n) {
              for (
                var o = new Array(arguments.length), i = 0;
                i < o.length;
                ++i
              )
                o[i] = arguments[i];
              var s = o[0];
              return (
                g(s) &&
                  (o[0] = e.wrap(
                    {
                      mechanism: {
                        type: "instrument",
                        data: { function: t.name || "<anonymous>" },
                      },
                    },
                    s
                  )),
                t.apply ? t.apply(this, o) : t(o[0], o[1])
              );
            };
          }
          var n = this._globalOptions.autoBreadcrumbs;
          function o(r) {
            var o = q[r] && q[r].prototype;
            o &&
              o.hasOwnProperty &&
              o.hasOwnProperty("addEventListener") &&
              (j(
                o,
                "addEventListener",
                function (t) {
                  return function (o, i, s, a) {
                    try {
                      i &&
                        i.handleEvent &&
                        (i.handleEvent = e.wrap(
                          {
                            mechanism: {
                              type: "instrument",
                              data: {
                                target: r,
                                function: "handleEvent",
                                handler: (i && i.name) || "<anonymous>",
                              },
                            },
                          },
                          i.handleEvent
                        ));
                    } catch (e) {}
                    var c, u, l;
                    return (
                      n &&
                        n.dom &&
                        ("EventTarget" === r || "Node" === r) &&
                        ((u = e._breadcrumbEventHandler("click")),
                        (l = e._keypressEventHandler()),
                        (c = function (e) {
                          if (e) {
                            var t;
                            try {
                              t = e.type;
                            } catch (e) {
                              return;
                            }
                            return "click" === t
                              ? u(e)
                              : "keypress" === t
                              ? l(e)
                              : void 0;
                          }
                        })),
                      t.call(
                        this,
                        o,
                        e.wrap(
                          {
                            mechanism: {
                              type: "instrument",
                              data: {
                                target: r,
                                function: "addEventListener",
                                handler: (i && i.name) || "<anonymous>",
                              },
                            },
                          },
                          i,
                          c
                        ),
                        s,
                        a
                      )
                    );
                  };
                },
                t
              ),
              j(
                o,
                "removeEventListener",
                function (e) {
                  return function (t, r, n, o) {
                    try {
                      r = r && (r.__raven_wrapper__ ? r.__raven_wrapper__ : r);
                    } catch (e) {}
                    return e.call(this, t, r, n, o);
                  };
                },
                t
              ));
          }
          j(q, "setTimeout", r, t),
            j(q, "setInterval", r, t),
            q.requestAnimationFrame &&
              j(
                q,
                "requestAnimationFrame",
                function (t) {
                  return function (r) {
                    return t(
                      e.wrap(
                        {
                          mechanism: {
                            type: "instrument",
                            data: {
                              function: "requestAnimationFrame",
                              handler: (t && t.name) || "<anonymous>",
                            },
                          },
                        },
                        r
                      )
                    );
                  };
                },
                t
              );
          for (
            var i = [
                "EventTarget",
                "Window",
                "Node",
                "ApplicationCache",
                "AudioTrackList",
                "ChannelMergerNode",
                "CryptoOperation",
                "EventSource",
                "FileReader",
                "HTMLUnknownElement",
                "IDBDatabase",
                "IDBRequest",
                "IDBTransaction",
                "KeyOperation",
                "MediaController",
                "MessagePort",
                "ModalWindow",
                "Notification",
                "SVGElementInstance",
                "Screen",
                "TextTrack",
                "TextTrackCue",
                "TextTrackList",
                "WebSocket",
                "WebSocketWorker",
                "Worker",
                "XMLHttpRequest",
                "XMLHttpRequestEventTarget",
                "XMLHttpRequestUpload",
              ],
              s = 0;
            s < i.length;
            s++
          )
            o(i[s]);
        },
        _instrumentBreadcrumbs: function () {
          var e = this,
            t = this._globalOptions.autoBreadcrumbs,
            r = e._wrappedBuiltIns;
          function n(t, r) {
            t in r &&
              g(r[t]) &&
              j(r, t, function (r) {
                return e.wrap(
                  {
                    mechanism: {
                      type: "instrument",
                      data: {
                        function: t,
                        handler: (r && r.name) || "<anonymous>",
                      },
                    },
                  },
                  r
                );
              });
          }
          if (t.xhr && "XMLHttpRequest" in q) {
            var o = q.XMLHttpRequest && q.XMLHttpRequest.prototype;
            j(
              o,
              "open",
              function (t) {
                return function (r, n) {
                  return (
                    m(n) &&
                      -1 === n.indexOf(e._globalKey) &&
                      (this.__raven_xhr = {
                        method: r,
                        url: n,
                        status_code: null,
                      }),
                    t.apply(this, arguments)
                  );
                };
              },
              r
            ),
              j(
                o,
                "send",
                function (t) {
                  return function () {
                    var r = this;
                    function o() {
                      if (r.__raven_xhr && 4 === r.readyState) {
                        try {
                          r.__raven_xhr.status_code = r.status;
                        } catch (e) {}
                        e.captureBreadcrumb({
                          type: "http",
                          category: "xhr",
                          data: r.__raven_xhr,
                        });
                      }
                    }
                    for (
                      var i = ["onload", "onerror", "onprogress"], s = 0;
                      s < i.length;
                      s++
                    )
                      n(i[s], r);
                    return (
                      "onreadystatechange" in r && g(r.onreadystatechange)
                        ? j(r, "onreadystatechange", function (t) {
                            return e.wrap(
                              {
                                mechanism: {
                                  type: "instrument",
                                  data: {
                                    function: "onreadystatechange",
                                    handler: (t && t.name) || "<anonymous>",
                                  },
                                },
                              },
                              t,
                              o
                            );
                          })
                        : (r.onreadystatechange = o),
                      t.apply(this, arguments)
                    );
                  };
                },
                r
              );
          }
          t.xhr &&
            A() &&
            j(
              q,
              "fetch",
              function (t) {
                return function () {
                  for (
                    var r = new Array(arguments.length), n = 0;
                    n < r.length;
                    ++n
                  )
                    r[n] = arguments[n];
                  var o,
                    i = r[0],
                    s = "GET";
                  if (
                    ("string" == typeof i
                      ? (o = i)
                      : "Request" in q && i instanceof q.Request
                      ? ((o = i.url), i.method && (s = i.method))
                      : (o = "" + i),
                    -1 !== o.indexOf(e._globalKey))
                  )
                    return t.apply(this, r);
                  r[1] && r[1].method && (s = r[1].method);
                  var a = { method: s, url: o, status_code: null };
                  return t
                    .apply(this, r)
                    .then(function (t) {
                      return (
                        (a.status_code = t.status),
                        e.captureBreadcrumb({
                          type: "http",
                          category: "fetch",
                          data: a,
                        }),
                        t
                      );
                    })
                    .catch(function (t) {
                      throw (
                        (e.captureBreadcrumb({
                          type: "http",
                          category: "fetch",
                          data: a,
                          level: "error",
                        }),
                        t)
                      );
                    });
                };
              },
              r
            ),
            t.dom &&
              this._hasDocument &&
              (H.addEventListener
                ? (H.addEventListener(
                    "click",
                    e._breadcrumbEventHandler("click"),
                    !1
                  ),
                  H.addEventListener("keypress", e._keypressEventHandler(), !1))
                : H.attachEvent &&
                  (H.attachEvent("onclick", e._breadcrumbEventHandler("click")),
                  H.attachEvent("onkeypress", e._keypressEventHandler())));
          var i = q.chrome,
            s =
              !(i && i.app && i.app.runtime) &&
              q.history &&
              q.history.pushState &&
              q.history.replaceState;
          if (t.location && s) {
            var a = q.onpopstate;
            q.onpopstate = function () {
              var t = e._location.href;
              if ((e._captureUrlChange(e._lastHref, t), a))
                return a.apply(this, arguments);
            };
            var c = function (t) {
              return function () {
                var r = arguments.length > 2 ? arguments[2] : void 0;
                return (
                  r && e._captureUrlChange(e._lastHref, r + ""),
                  t.apply(this, arguments)
                );
              };
            };
            j(q.history, "pushState", c, r), j(q.history, "replaceState", c, r);
          }
          if (t.console && "console" in q && console.log) {
            var u = function (t, r) {
              e.captureBreadcrumb({
                message: t,
                level: r.level,
                category: "console",
              });
            };
            y(["debug", "info", "warn", "error", "log"], function (e, t) {
              I(console, t, u);
            });
          }
        },
        _restoreBuiltIns: function () {
          for (var e; this._wrappedBuiltIns.length; ) {
            var t = (e = this._wrappedBuiltIns.shift())[0],
              r = e[1],
              n = e[2];
            t[r] = n;
          }
        },
        _restoreConsole: function () {
          for (var e in this._originalConsoleMethods)
            this._originalConsole[e] = this._originalConsoleMethods[e];
        },
        _drainPlugins: function () {
          var e = this;
          y(this._plugins, function (t, r) {
            var n = r[0],
              o = r[1];
            n.apply(e, [e].concat(o));
          });
        },
        _parseDSN: function (e) {
          var t = D.exec(e),
            r = {},
            n = 7;
          try {
            for (; n--; ) r[N[n]] = t[n] || "";
          } catch (t) {
            throw new s("Invalid DSN: " + e);
          }
          if (r.pass && !this._globalOptions.allowSecretKey)
            throw new s(
              "Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key"
            );
          return r;
        },
        _getGlobalServer: function (e) {
          var t = "//" + e.host + (e.port ? ":" + e.port : "");
          return e.protocol && (t = e.protocol + ":" + t), t;
        },
        _handleOnErrorStackInfo: function (e, t) {
          ((t = t || {}).mechanism = t.mechanism || {
            type: "onerror",
            handled: !1,
          }),
            this._ignoreOnError || this._handleStackInfo(e, t);
        },
        _handleStackInfo: function (e, t) {
          var r = this._prepareFrames(e, t);
          this._triggerEvent("handle", { stackInfo: e, options: t }),
            this._processException(e.name, e.message, e.url, e.lineno, r, t);
        },
        _prepareFrames: function (e, t) {
          var r = this,
            n = [];
          if (
            e.stack &&
            e.stack.length &&
            (y(e.stack, function (t, o) {
              var i = r._normalizeFrame(o, e.url);
              i && n.push(i);
            }),
            t && t.trimHeadFrames)
          )
            for (var o = 0; o < t.trimHeadFrames && o < n.length; o++)
              n[o].in_app = !1;
          return (n = n.slice(0, this._globalOptions.stackTraceLimit));
        },
        _normalizeFrame: function (e, t) {
          var r = {
            filename: e.url,
            lineno: e.line,
            colno: e.column,
            function: e.func || "?",
          };
          return (
            e.url || (r.filename = t),
            (r.in_app = !(
              (this._globalOptions.includePaths.test &&
                !this._globalOptions.includePaths.test(r.filename)) ||
              /(Raven|TraceKit)\./.test(r.function) ||
              /raven\.(min\.)?js$/.test(r.filename)
            )),
            r
          );
        },
        _processException: function (e, t, r, n, o, i) {
          var s,
            a = (e ? e + ": " : "") + (t || "");
          if (
            (!this._globalOptions.ignoreErrors.test ||
              (!this._globalOptions.ignoreErrors.test(t) &&
                !this._globalOptions.ignoreErrors.test(a))) &&
            (o && o.length
              ? ((r = o[0].filename || r), o.reverse(), (s = { frames: o }))
              : r && (s = { frames: [{ filename: r, lineno: n, in_app: !0 }] }),
            (!this._globalOptions.ignoreUrls.test ||
              !this._globalOptions.ignoreUrls.test(r)) &&
              (!this._globalOptions.whitelistUrls.test ||
                this._globalOptions.whitelistUrls.test(r)))
          ) {
            var c = w(
                {
                  exception: { values: [{ type: e, value: t, stacktrace: s }] },
                  transaction: r,
                },
                i
              ),
              u = c.exception.values[0];
            null == u.type &&
              "" === u.value &&
              (u.value = "Unrecoverable error caught"),
              !c.exception.mechanism &&
                c.mechanism &&
                ((c.exception.mechanism = c.mechanism), delete c.mechanism),
              (c.exception.mechanism = w(
                { type: "generic", handled: !0 },
                c.exception.mechanism || {}
              )),
              this._send(c);
          }
        },
        _trimPacket: function (e) {
          var t = this._globalOptions.maxMessageLength;
          if ((e.message && (e.message = _(e.message, t)), e.exception)) {
            var r = e.exception.values[0];
            r.value = _(r.value, t);
          }
          var n = e.request;
          return (
            n &&
              (n.url && (n.url = _(n.url, this._globalOptions.maxUrlLength)),
              n.Referer &&
                (n.Referer = _(n.Referer, this._globalOptions.maxUrlLength))),
            e.breadcrumbs &&
              e.breadcrumbs.values &&
              this._trimBreadcrumbs(e.breadcrumbs),
            e
          );
        },
        _trimBreadcrumbs: function (e) {
          for (
            var t, r, n, o = ["to", "from", "url"], i = 0;
            i < e.values.length;
            ++i
          )
            if (
              (r = e.values[i]).hasOwnProperty("data") &&
              p(r.data) &&
              !E(r.data)
            ) {
              n = w({}, r.data);
              for (var s = 0; s < o.length; ++s)
                (t = o[s]),
                  n.hasOwnProperty(t) &&
                    n[t] &&
                    (n[t] = _(n[t], this._globalOptions.maxUrlLength));
              e.values[i].data = n;
            }
        },
        _getHttpData: function () {
          if (this._hasNavigator || this._hasDocument) {
            var e = {};
            return (
              this._hasNavigator &&
                W.userAgent &&
                (e.headers = { "User-Agent": W.userAgent }),
              q.location && q.location.href && (e.url = q.location.href),
              this._hasDocument &&
                H.referrer &&
                (e.headers || (e.headers = {}),
                (e.headers.Referer = H.referrer)),
              e
            );
          }
        },
        _resetBackoff: function () {
          (this._backoffDuration = 0), (this._backoffStart = null);
        },
        _shouldBackoff: function () {
          return (
            this._backoffDuration &&
            F() - this._backoffStart < this._backoffDuration
          );
        },
        _isRepeatData: function (e) {
          var t = this._lastData;
          return (
            !(
              !t ||
              e.message !== t.message ||
              e.transaction !== t.transaction
            ) &&
            (e.stacktrace || t.stacktrace
              ? C(e.stacktrace, t.stacktrace)
              : e.exception || t.exception
              ? k(e.exception, t.exception)
              : (!e.fingerprint && !t.fingerprint) ||
                (Boolean(e.fingerprint && t.fingerprint) &&
                  JSON.stringify(e.fingerprint) ===
                    JSON.stringify(t.fingerprint)))
          );
        },
        _setBackoffState: function (e) {
          if (!this._shouldBackoff()) {
            var t = e.status;
            if (400 === t || 401 === t || 429 === t) {
              var r;
              try {
                (r = A()
                  ? e.headers.get("Retry-After")
                  : e.getResponseHeader("Retry-After")),
                  (r = 1e3 * parseInt(r, 10));
              } catch (e) {}
              (this._backoffDuration = r || 2 * this._backoffDuration || 1e3),
                (this._backoffStart = F());
            }
          }
        },
        _send: function (e) {
          var t = this._globalOptions,
            r = {
              project: this._globalProject,
              logger: t.logger,
              platform: "javascript",
            },
            n = this._getHttpData();
          n && (r.request = n),
            e.trimHeadFrames && delete e.trimHeadFrames,
            ((e = w(r, e)).tags = w(w({}, this._globalContext.tags), e.tags)),
            (e.extra = w(w({}, this._globalContext.extra), e.extra)),
            (e.extra["session:duration"] = F() - this._startTime),
            this._breadcrumbs &&
              this._breadcrumbs.length > 0 &&
              (e.breadcrumbs = { values: [].slice.call(this._breadcrumbs, 0) }),
            this._globalContext.user && (e.user = this._globalContext.user),
            t.environment && (e.environment = t.environment),
            t.release && (e.release = t.release),
            t.serverName && (e.server_name = t.serverName),
            (e = this._sanitizeData(e)),
            Object.keys(e).forEach(function (t) {
              (null == e[t] || "" === e[t] || v(e[t])) && delete e[t];
            }),
            g(t.dataCallback) && (e = t.dataCallback(e) || e),
            e &&
              !v(e) &&
              ((g(t.shouldSendCallback) && !t.shouldSendCallback(e)) ||
                (this._shouldBackoff()
                  ? this._logDebug(
                      "warn",
                      "Raven dropped error due to backoff: ",
                      e
                    )
                  : "number" == typeof t.sampleRate
                  ? Math.random() < t.sampleRate &&
                    this._sendProcessedPayload(e)
                  : this._sendProcessedPayload(e)));
        },
        _sanitizeData: function (e) {
          return B(e, this._globalOptions.sanitizeKeys);
        },
        _getUuid: function () {
          return R();
        },
        _sendProcessedPayload: function (e, t) {
          var r = this,
            n = this._globalOptions;
          if (this.isSetup())
            if (
              ((e = this._trimPacket(e)),
              this._globalOptions.allowDuplicates || !this._isRepeatData(e))
            ) {
              (this._lastEventId =
                e.event_id || (e.event_id = this._getUuid())),
                (this._lastData = e),
                this._logDebug("debug", "Raven about to send:", e);
              var o = {
                sentry_version: "7",
                sentry_client: "raven-js/" + this.VERSION,
                sentry_key: this._globalKey,
              };
              this._globalSecret && (o.sentry_secret = this._globalSecret);
              var i = e.exception && e.exception.values[0];
              this._globalOptions.autoBreadcrumbs &&
                this._globalOptions.autoBreadcrumbs.sentry &&
                this.captureBreadcrumb({
                  category: "sentry",
                  message: i
                    ? (i.type ? i.type + ": " : "") + i.value
                    : e.message,
                  event_id: e.event_id,
                  level: e.level || "error",
                });
              var s = this._globalEndpoint;
              (n.transport || this._makeRequest).call(this, {
                url: s,
                auth: o,
                data: e,
                options: n,
                onSuccess: function () {
                  r._resetBackoff(),
                    r._triggerEvent("success", { data: e, src: s }),
                    t && t();
                },
                onError: function (n) {
                  r._logDebug("error", "Raven transport failed to send: ", n),
                    n.request && r._setBackoffState(n.request),
                    r._triggerEvent("failure", { data: e, src: s }),
                    (n =
                      n ||
                      new Error(
                        "Raven send failed (no additional details provided)"
                      )),
                    t && t(n);
                },
              });
            } else this._logDebug("warn", "Raven dropped repeat event: ", e);
        },
        _makeRequest: function (e) {
          var t = e.url + "?" + O(e.auth),
            r = null,
            n = {};
          if (
            (e.options.headers && (r = this._evaluateHash(e.options.headers)),
            e.options.fetchParameters &&
              (n = this._evaluateHash(e.options.fetchParameters)),
            A())
          ) {
            n.body = o(e.data);
            var i = w({}, this._fetchDefaults),
              s = w(i, n);
            return (
              r && (s.headers = r),
              q
                .fetch(t, s)
                .then(function (t) {
                  if (t.ok) e.onSuccess && e.onSuccess();
                  else {
                    var r = new Error("Sentry error code: " + t.status);
                    (r.request = t), e.onError && e.onError(r);
                  }
                })
                .catch(function () {
                  e.onError &&
                    e.onError(
                      new Error("Sentry error code: network unavailable")
                    );
                })
            );
          }
          var a = q.XMLHttpRequest && new q.XMLHttpRequest();
          a &&
            ("withCredentials" in a || "undefined" != typeof XDomainRequest) &&
            ("withCredentials" in a
              ? (a.onreadystatechange = function () {
                  if (4 === a.readyState)
                    if (200 === a.status) e.onSuccess && e.onSuccess();
                    else if (e.onError) {
                      var t = new Error("Sentry error code: " + a.status);
                      (t.request = a), e.onError(t);
                    }
                })
              : ((a = new XDomainRequest()),
                (t = t.replace(/^https?:/, "")),
                e.onSuccess && (a.onload = e.onSuccess),
                e.onError &&
                  (a.onerror = function () {
                    var t = new Error("Sentry error code: XDomainRequest");
                    (t.request = a), e.onError(t);
                  })),
            a.open("POST", t),
            r &&
              y(r, function (e, t) {
                a.setRequestHeader(e, t);
              }),
            a.send(o(e.data)));
        },
        _evaluateHash: function (e) {
          var t = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              t[r] = "function" == typeof n ? n() : n;
            }
          return t;
        },
        _logDebug: function (e) {
          this._originalConsoleMethods[e] &&
            (this.debug || this._globalOptions.debug) &&
            Function.prototype.apply.call(
              this._originalConsoleMethods[e],
              this._originalConsole,
              [].slice.call(arguments, 1)
            );
        },
        _mergeContext: function (e, t) {
          d(t)
            ? delete this._globalContext[e]
            : (this._globalContext[e] = w(this._globalContext[e] || {}, t));
        },
      }),
        ($.prototype.setUser = $.prototype.setUserContext),
        ($.prototype.setReleaseContext = $.prototype.setRelease),
        (e.exports = $);
    }.call(this, r(5)));
  },
  function (e, t, r) {
    (function (t) {
      var n = r(18),
        o = { collectWindowErrors: !0, debug: !1 },
        i =
          "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {},
        s = [].slice,
        a = "?",
        c =
          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
      function u() {
        return "undefined" == typeof document || null == document.location
          ? ""
          : document.location.href;
      }
      (o.report = (function () {
        var e,
          t,
          r = [],
          l = null,
          f = null,
          p = null;
        function h(e, t) {
          var n = null;
          if (!t || o.collectWindowErrors) {
            for (var i in r)
              if (r.hasOwnProperty(i))
                try {
                  r[i].apply(null, [e].concat(s.call(arguments, 2)));
                } catch (e) {
                  n = e;
                }
            if (n) throw n;
          }
        }
        function d(t, r, i, s, l) {
          var f = n.isErrorEvent(l) ? l.error : l,
            d = n.isErrorEvent(t) ? t.message : t;
          if (p)
            o.computeStackTrace.augmentStackTraceWithInitialElement(p, r, i, d),
              g();
          else if (f && n.isError(f)) h(o.computeStackTrace(f), !0);
          else {
            var m,
              b = { url: r, line: i, column: s },
              v = void 0;
            "[object String]" === {}.toString.call(d) &&
              (m = d.match(c)) &&
              ((v = m[1]), (d = m[2])),
              (b.func = a),
              h({ name: v, message: d, url: u(), stack: [b] }, !0);
          }
          return !!e && e.apply(this, arguments);
        }
        function g() {
          var e = p,
            t = l;
          (l = null), (p = null), (f = null), h.apply(null, [e, !1].concat(t));
        }
        function m(e, t) {
          var r = s.call(arguments, 1);
          if (p) {
            if (f === e) return;
            g();
          }
          var n = o.computeStackTrace(e);
          if (
            ((p = n),
            (f = e),
            (l = r),
            setTimeout(
              function () {
                f === e && g();
              },
              n.incomplete ? 2e3 : 0
            ),
            !1 !== t)
          )
            throw e;
        }
        return (
          (m.subscribe = function (n) {
            t || ((e = i.onerror), (i.onerror = d), (t = !0)), r.push(n);
          }),
          (m.unsubscribe = function (e) {
            for (var t = r.length - 1; t >= 0; --t)
              r[t] === e && r.splice(t, 1);
          }),
          (m.uninstall = function () {
            t && ((i.onerror = e), (t = !1), (e = void 0)), (r = []);
          }),
          m
        );
      })()),
        (o.computeStackTrace = (function () {
          function e(e) {
            if (void 0 !== e.stack && e.stack) {
              for (
                var t,
                  r,
                  n,
                  o =
                    /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                  i =
                    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                  s =
                    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
                  c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                  l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                  f = e.stack.split("\n"),
                  p = [],
                  h = (/^(.*) is undefined$/.exec(e.message), 0),
                  d = f.length;
                h < d;
                ++h
              ) {
                if ((r = o.exec(f[h]))) {
                  var g = r[2] && 0 === r[2].indexOf("native");
                  r[2] &&
                    0 === r[2].indexOf("eval") &&
                    (t = l.exec(r[2])) &&
                    ((r[2] = t[1]), (r[3] = t[2]), (r[4] = t[3])),
                    (n = {
                      url: g ? null : r[2],
                      func: r[1] || a,
                      args: g ? [r[2]] : [],
                      line: r[3] ? +r[3] : null,
                      column: r[4] ? +r[4] : null,
                    });
                } else if ((r = i.exec(f[h])))
                  n = {
                    url: r[2],
                    func: r[1] || a,
                    args: [],
                    line: +r[3],
                    column: r[4] ? +r[4] : null,
                  };
                else {
                  if (!(r = s.exec(f[h]))) continue;
                  r[3] && r[3].indexOf(" > eval") > -1 && (t = c.exec(r[3]))
                    ? ((r[3] = t[1]), (r[4] = t[2]), (r[5] = null))
                    : 0 !== h ||
                      r[5] ||
                      void 0 === e.columnNumber ||
                      (p[0].column = e.columnNumber + 1),
                    (n = {
                      url: r[3],
                      func: r[1] || a,
                      args: r[2] ? r[2].split(",") : [],
                      line: r[4] ? +r[4] : null,
                      column: r[5] ? +r[5] : null,
                    });
                }
                if (
                  (!n.func && n.line && (n.func = a),
                  n.url && "blob:" === n.url.substr(0, 5))
                ) {
                  var m = new XMLHttpRequest();
                  if (
                    (m.open("GET", n.url, !1), m.send(null), 200 === m.status)
                  ) {
                    var b = m.responseText || "",
                      v = (b = b.slice(-300)).match(
                        /\/\/# sourceMappingURL=(.*)$/
                      );
                    if (v) {
                      var y = v[1];
                      "~" === y.charAt(0) &&
                        (y =
                          ("undefined" == typeof document ||
                          null == document.location
                            ? ""
                            : document.location.origin
                            ? document.location.origin
                            : document.location.protocol +
                              "//" +
                              document.location.hostname +
                              (document.location.port
                                ? ":" + document.location.port
                                : "")) + y.slice(1)),
                        (n.url = y.slice(0, -4));
                    }
                  }
                }
                p.push(n);
              }
              return p.length
                ? { name: e.name, message: e.message, url: u(), stack: p }
                : null;
            }
          }
          function t(e, t, r, n) {
            var o = { url: t, line: r };
            if (o.url && o.line) {
              if (
                ((e.incomplete = !1),
                o.func || (o.func = a),
                e.stack.length > 0 && e.stack[0].url === o.url)
              ) {
                if (e.stack[0].line === o.line) return !1;
                if (!e.stack[0].line && e.stack[0].func === o.func)
                  return (e.stack[0].line = o.line), !1;
              }
              return e.stack.unshift(o), (e.partial = !0), !0;
            }
            return (e.incomplete = !0), !1;
          }
          function r(e, i) {
            for (
              var s,
                c,
                l =
                  /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                f = [],
                p = {},
                h = !1,
                d = r.caller;
              d && !h;
              d = d.caller
            )
              if (d !== n && d !== o.report) {
                if (
                  ((c = { url: null, func: a, line: null, column: null }),
                  d.name
                    ? (c.func = d.name)
                    : (s = l.exec(d.toString())) && (c.func = s[1]),
                  void 0 === c.func)
                )
                  try {
                    c.func = s.input.substring(0, s.input.indexOf("{"));
                  } catch (e) {}
                p["" + d] ? (h = !0) : (p["" + d] = !0), f.push(c);
              }
            i && f.splice(0, i);
            var g = { name: e.name, message: e.message, url: u(), stack: f };
            return (
              t(
                g,
                e.sourceURL || e.fileName,
                e.line || e.lineNumber,
                e.message || e.description
              ),
              g
            );
          }
          function n(t, n) {
            var i = null;
            n = null == n ? 0 : +n;
            try {
              if ((i = e(t))) return i;
            } catch (e) {
              if (o.debug) throw e;
            }
            try {
              if ((i = r(t, n + 1))) return i;
            } catch (e) {
              if (o.debug) throw e;
            }
            return { name: t.name, message: t.message, url: u() };
          }
          return (
            (n.augmentStackTraceWithInitialElement = t),
            (n.computeStackTraceFromStackProp = e),
            n
          );
        })()),
        (e.exports = o);
    }.call(this, r(5)));
  },
  function (e, t) {
    function r(e, t) {
      var r = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function n(e, t, n, o, i, s) {
      return r(((a = r(r(t, e), r(o, s))) << (c = i)) | (a >>> (32 - c)), n);
      var a, c;
    }
    function o(e, t, r, o, i, s, a) {
      return n((t & r) | (~t & o), e, t, i, s, a);
    }
    function i(e, t, r, o, i, s, a) {
      return n((t & o) | (r & ~o), e, t, i, s, a);
    }
    function s(e, t, r, o, i, s, a) {
      return n(t ^ r ^ o, e, t, i, s, a);
    }
    function a(e, t, r, o, i, s, a) {
      return n(r ^ (t | ~o), e, t, i, s, a);
    }
    function c(e, t) {
      var n, c, u, l, f;
      (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
      var p = 1732584193,
        h = -271733879,
        d = -1732584194,
        g = 271733878;
      for (n = 0; n < e.length; n += 16)
        (c = p),
          (u = h),
          (l = d),
          (f = g),
          (p = o(p, h, d, g, e[n], 7, -680876936)),
          (g = o(g, p, h, d, e[n + 1], 12, -389564586)),
          (d = o(d, g, p, h, e[n + 2], 17, 606105819)),
          (h = o(h, d, g, p, e[n + 3], 22, -1044525330)),
          (p = o(p, h, d, g, e[n + 4], 7, -176418897)),
          (g = o(g, p, h, d, e[n + 5], 12, 1200080426)),
          (d = o(d, g, p, h, e[n + 6], 17, -1473231341)),
          (h = o(h, d, g, p, e[n + 7], 22, -45705983)),
          (p = o(p, h, d, g, e[n + 8], 7, 1770035416)),
          (g = o(g, p, h, d, e[n + 9], 12, -1958414417)),
          (d = o(d, g, p, h, e[n + 10], 17, -42063)),
          (h = o(h, d, g, p, e[n + 11], 22, -1990404162)),
          (p = o(p, h, d, g, e[n + 12], 7, 1804603682)),
          (g = o(g, p, h, d, e[n + 13], 12, -40341101)),
          (d = o(d, g, p, h, e[n + 14], 17, -1502002290)),
          (p = i(
            p,
            (h = o(h, d, g, p, e[n + 15], 22, 1236535329)),
            d,
            g,
            e[n + 1],
            5,
            -165796510
          )),
          (g = i(g, p, h, d, e[n + 6], 9, -1069501632)),
          (d = i(d, g, p, h, e[n + 11], 14, 643717713)),
          (h = i(h, d, g, p, e[n], 20, -373897302)),
          (p = i(p, h, d, g, e[n + 5], 5, -701558691)),
          (g = i(g, p, h, d, e[n + 10], 9, 38016083)),
          (d = i(d, g, p, h, e[n + 15], 14, -660478335)),
          (h = i(h, d, g, p, e[n + 4], 20, -405537848)),
          (p = i(p, h, d, g, e[n + 9], 5, 568446438)),
          (g = i(g, p, h, d, e[n + 14], 9, -1019803690)),
          (d = i(d, g, p, h, e[n + 3], 14, -187363961)),
          (h = i(h, d, g, p, e[n + 8], 20, 1163531501)),
          (p = i(p, h, d, g, e[n + 13], 5, -1444681467)),
          (g = i(g, p, h, d, e[n + 2], 9, -51403784)),
          (d = i(d, g, p, h, e[n + 7], 14, 1735328473)),
          (p = s(
            p,
            (h = i(h, d, g, p, e[n + 12], 20, -1926607734)),
            d,
            g,
            e[n + 5],
            4,
            -378558
          )),
          (g = s(g, p, h, d, e[n + 8], 11, -2022574463)),
          (d = s(d, g, p, h, e[n + 11], 16, 1839030562)),
          (h = s(h, d, g, p, e[n + 14], 23, -35309556)),
          (p = s(p, h, d, g, e[n + 1], 4, -1530992060)),
          (g = s(g, p, h, d, e[n + 4], 11, 1272893353)),
          (d = s(d, g, p, h, e[n + 7], 16, -155497632)),
          (h = s(h, d, g, p, e[n + 10], 23, -1094730640)),
          (p = s(p, h, d, g, e[n + 13], 4, 681279174)),
          (g = s(g, p, h, d, e[n], 11, -358537222)),
          (d = s(d, g, p, h, e[n + 3], 16, -722521979)),
          (h = s(h, d, g, p, e[n + 6], 23, 76029189)),
          (p = s(p, h, d, g, e[n + 9], 4, -640364487)),
          (g = s(g, p, h, d, e[n + 12], 11, -421815835)),
          (d = s(d, g, p, h, e[n + 15], 16, 530742520)),
          (p = a(
            p,
            (h = s(h, d, g, p, e[n + 2], 23, -995338651)),
            d,
            g,
            e[n],
            6,
            -198630844
          )),
          (g = a(g, p, h, d, e[n + 7], 10, 1126891415)),
          (d = a(d, g, p, h, e[n + 14], 15, -1416354905)),
          (h = a(h, d, g, p, e[n + 5], 21, -57434055)),
          (p = a(p, h, d, g, e[n + 12], 6, 1700485571)),
          (g = a(g, p, h, d, e[n + 3], 10, -1894986606)),
          (d = a(d, g, p, h, e[n + 10], 15, -1051523)),
          (h = a(h, d, g, p, e[n + 1], 21, -2054922799)),
          (p = a(p, h, d, g, e[n + 8], 6, 1873313359)),
          (g = a(g, p, h, d, e[n + 15], 10, -30611744)),
          (d = a(d, g, p, h, e[n + 6], 15, -1560198380)),
          (h = a(h, d, g, p, e[n + 13], 21, 1309151649)),
          (p = a(p, h, d, g, e[n + 4], 6, -145523070)),
          (g = a(g, p, h, d, e[n + 11], 10, -1120210379)),
          (d = a(d, g, p, h, e[n + 2], 15, 718787259)),
          (h = a(h, d, g, p, e[n + 9], 21, -343485551)),
          (p = r(p, c)),
          (h = r(h, u)),
          (d = r(d, l)),
          (g = r(g, f));
      return [p, h, d, g];
    }
    function u(e) {
      var t,
        r = "",
        n = 32 * e.length;
      for (t = 0; t < n; t += 8)
        r += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
      return r;
    }
    function l(e) {
      var t,
        r = [];
      for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)
        r[t] = 0;
      var n = 8 * e.length;
      for (t = 0; t < n; t += 8)
        r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
      return r;
    }
    function f(e) {
      var t,
        r,
        n = "";
      for (r = 0; r < e.length; r += 1)
        (t = e.charCodeAt(r)),
          (n +=
            "0123456789abcdef".charAt((t >>> 4) & 15) +
            "0123456789abcdef".charAt(15 & t));
      return n;
    }
    function p(e) {
      return unescape(encodeURIComponent(e));
    }
    function h(e) {
      return (function (e) {
        return u(c(l(e), 8 * e.length));
      })(p(e));
    }
    function d(e, t) {
      return (function (e, t) {
        var r,
          n,
          o = l(e),
          i = [],
          s = [];
        for (
          i[15] = s[15] = void 0,
            o.length > 16 && (o = c(o, 8 * e.length)),
            r = 0;
          r < 16;
          r += 1
        )
          (i[r] = 909522486 ^ o[r]), (s[r] = 1549556828 ^ o[r]);
        return (
          (n = c(i.concat(l(t)), 512 + 8 * t.length)), u(c(s.concat(n), 640))
        );
      })(p(e), p(t));
    }
    e.exports = function (e, t, r) {
      return t ? (r ? d(t, e) : f(d(t, e))) : r ? h(e) : f(h(e));
    };
  },
  function (e, t) {
    function r(e) {
      (this.name = "RavenConfigError"), (this.message = e);
    }
    (r.prototype = new Error()), (r.prototype.constructor = r), (e.exports = r);
  },
  function (e, t, r) {
    var n = r(18);
    e.exports = {
      wrapMethod: function (e, t, r) {
        var o = e[t],
          i = e;
        if (t in e) {
          var s = "warn" === t ? "warning" : t;
          e[t] = function () {
            var e = [].slice.call(arguments),
              a = n.safeJoin(e, " "),
              c = { level: s, logger: "console", extra: { arguments: e } };
            "assert" === t
              ? !1 === e[0] &&
                ((a =
                  "Assertion failed: " +
                  (n.safeJoin(e.slice(1), " ") || "console.assert")),
                (c.extra.arguments = e.slice(1)),
                r && r(a, c))
              : r && r(a, c),
              o && Function.prototype.apply.call(o, i, e);
          };
        }
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    var n = r(4),
      o = r(20),
      i = r(21),
      s = r(17),
      a = r(64);
    r(65), r(68);
    const c = navigator.userAgent.includes("Firefox"),
      u = /apple/i.test(navigator.vendor);
    var l, f;
    // (0, n.setupVolcengine)(),
    //   (0, n.setupVolcengineBackgroundListener)(),
    //   (0, s.firebasePageView)("background");
    var p = r(23),
      h = !1,
      d = !0,
      g = o.DEFAULT_LANG,
      m = o.DEFAULT_SUB_TYPE;
    function b(e) {
      browser.tabs.sendMessage(T, { type: "show_msg", msg_str: e });
    }
    function v(e, t, r) {
      if (f.readyState == WebSocket.OPEN) {
        for (let t = 0; t < e.length; t++) f.send(e[t]);
        e.length = 0;
      } else
        f.readyState == WebSocket.CONNECTING
          ? b(browser.i18n.getMessage("WsIsConnecting"))
          : (b(browser.i18n.getMessage("WsIsNotOpened")), S());
    }
    p.config(o.PUBLIC_SENTRY_URL, {
      release: "1.2.0",
      environment: "prod",
      sampleRate: 1,
    }).install();
    var y = null,
      w = function (e) {
        let t = JSON.parse(e);
        1 == t.to_close &&
          null == y &&
          (b((y = t.msg)),
          b(browser.i18n.getMessage("closeRecorder")),
          browser.tabs.sendMessage(T, { type: "stopSubtitle" }),
          (0, i.reportEvent)({
            category: j,
            action: "closeSubByWS",
            label: y,
          })),
          t && 0 == t.rc && t.target
            ? browser.tabs.sendMessage(T, { type: "subtitleMsg", subtitle: t })
            : browser.tabs.sendMessage(T, {
                type: "subtitleMsg",
                subtitle: null,
              });
      },
      _ = !1,
      E = "chrome_ext",
      x = "";
    function S() {
      var e = 6;
      g == o.JA && (e = 12),
        ((f = new WebSocket("ws://api.interpreter.caiyunai.com/v1/audio", [
          "subprotocols",
          `lang#${g}`,
          "if_interim_results#true",
          `trans_interval#${e}`,
          `token#${x}`,
          `app#${E}`,
        ])).onopen = function () {
          b(browser.i18n.getMessage("wsIsOpened")),
            (k = T),
            _ ||
              (l && (l.start(), b(browser.i18n.getMessage("recording"))),
              (_ = !0));
        }),
        browser.runtime.lastError,
        (f.onmessage = function (e) {
          w(e.data);
        }),
        (f.onerror = function (e) {
          b(browser.i18n.getMessage("wsError")),
            (function (e) {
              for (
                var t = new Date().getTime();
                new Date().getTime() < t + e;

              );
            })(2500),
            O(function () {
              b(browser.i18n.getMessage("closeRecorder")),
                browser.tabs.sendMessage(T, { type: "stopSubtitle" }),
                (0, i.reportEvent)({
                  category: j,
                  action: "closeSubByWS",
                  label: "ws.onerror",
                });
            });
        });
    }
    function O(e) {
      (e = e || NOOP),
        l ? l.close(e) : e(),
        (_ = !1),
        f && (f.CLOSED || f.close());
    }
    var R = "",
      T = -1,
      k = -11,
      C = [],
      L = "cyxy-",
      j = `${L}video`;
    function A(e, t, r) {
      if ("showSubByVideoBtn" == e.type)
        browser.tabs
          .query({ active: !0, currentWindow: !0 })
          .then(function (e) {
            if (!e[0]) return;
            let t = e[0].url;
            var r;
            t.match(D) ||
              ((R = t),
              (T = e[0].id),
              (r = {
                audio: !0,
                video: !1,
                audioConstraints: { mandatory: { chromeMediaSource: "tab" } },
              }),
              browser.tabCapture.capture(r, (e) => {
                if (e) {
                  P(T);
                  let t = e.getTracks();
                  for (let e = 0; e < t.length; e++) t[e].stop();
                } else {
                  browser.runtime.lastError.message.includes("permission")
                    ? (alert(browser.i18n.getMessage("requestReloadAndReload")),
                      browser.tabs.sendMessage(T, { type: "closeVideoBtn" }))
                    : P(T);
                }
              }));
          });
      else if ("closeSubByVideoBtn" == e.type)
        browser.tabs.sendMessage(T, { type: "closeSubtitle" }),
          (0, i.reportEvent)({ category: j, action: e.type, label: g });
      else if ("recopen" == e.type)
        O(function () {
          (g = e.lang),
            (l = Recorder({
              bitRate: 16,
              sampleRate: 16e3,
              type: "wav",
              bufferSize: 4096,
              onProcess: v,
            })).open_tab_audio_stream(
              function () {
                b(browser.i18n.getMessage("openRecorder")), S();
              },
              function (e) {
                b(browser.i18n.getMessage("openRecorderError") + e);
              }
            ),
            r({ type: "accept" });
        }),
          (0, i.reportEvent)({ category: j, action: e.type, label: e.lang });
      else if ("recclose" == e.type)
        O(function () {
          b(browser.i18n.getMessage("closeRecorder")), r({ type: "reset" });
        }),
          (0, i.reportEvent)({ category: j, action: e.type, label: e.lang });
      else if ("switchTrack" == e.type)
        (0, i.reportEvent)({ category: j, action: e.type, label: e.newTrack });
      else if ("clickCyxyBtn" == e.type)
        X()
          ? (0, i.reportEvent)({
              category: `${L}${e.btnName}`,
              action: "click",
              label: "isLoggedIn",
            })
          : (0, i.reportEvent)({
              category: `${L}${e.btnName}`,
              action: "click",
              label: "isUnlogin",
            });
      else if ("useDictAPI" == e.type || "useTranslatorAPI" == e.type)
        M
          ? (0, i.reportEvent)({
              category: `${L}${e.type}`,
              action: `${e.direction}`,
              label: "isLoggedIn",
            })
          : (0, i.reportEvent)({
              category: `${L}${e.type}`,
              action: `${e.direction}`,
              label: "isUnlogin",
            });
      else if ("audio" == e.type)
        M
          ? (0, i.reportEvent)({
              category: `${L}${e.type}`,
              action: "read",
              label: "isLoggedIn",
            })
          : (0, i.reportEvent)({
              category: `${L}${e.type}`,
              action: "read",
              label: "isUnlogin",
            });
      else if ("showSWTview" == e.type) {
        let t = z(e.direction);
        (0, s.firebasePageView)(`${e.type}?utm_source=${t}&utm_medium=website`);
      } else "optionsPageview" == e.type && (0, s.firebasePageView)("options");
    }
    function P(e) {
      !(function (e, t) {
        (e = e || (() => {})),
          (t = t || (() => {})),
          X()
            ? e()
            : fetch("https://biz.caiyunapp.com/test_cookies", {
                method: "GET",
                headers: { "content-type": "application/json" },
              })
                .then((e) => e.text())
                .then((r) => {
                  let n = JSON.parse(r);
                  if (n.cookies && n.cookies.cy_user) {
                    let t = JSON.parse(decodeURIComponent(n.cookies.cy_user));
                    if (t.is_login)
                      return (M = t._id), (x = t.token), (Y = M), void e();
                  }
                  browser.tabs.sendMessage(T, {
                    type: "alert",
                    content: browser.i18n.getMessage("VideoTransReqLogin"),
                    time: 5,
                  }),
                    t();
                });
      })(
        function () {
          !(function (e, t, r) {
            (T = e),
              browser.tabs.sendMessage(T, {
                type: "showSubtitle",
                lang: t,
                showLangMenu: !0,
              }),
              (C = C.filter((e) => e !== T));
            for (let e = 0; e < C.length; e++) {
              let t = C[e];
              browser.tabs.get(t, function () {
                if (browser.runtime.lastError) {
                  let e = browser.runtime.lastError.message;
                  p.captureException(e);
                } else K(t);
              });
            }
            C = [T];
          })(e, g),
            (0, i.reportEvent)({
              category: "video",
              action: `transByVideoBtn:${g}`,
            }),
            (0, s.firebasePageView)("subtitle");
        },
        function () {
          (0, i.reportEvent)({ category: "video", action: "requestLogin" });
        }
      );
    }
    var M = "";
    function U(e, t, r) {
      if ("fetchUrl" == e.contentScriptQuery) {
        const t = {};
        if (
          ((t.method = e.method || "GET"),
          (t.credentials = "include"),
          (t.headers = { "content-type": "application/json" }),
          e.data && (t.body = JSON.stringify(e.data)),
          e.headers)
        ) {
          var n = t.headers;
          for (var o in e.headers) n[o] = e.headers[o];
          t.headers = n;
        }
        return (
          fetch(e.url, t)
            .then((e) => e.text())
            .then((e) => {
              r({ status: "ok", data: e });
              let t = JSON.parse(e);
              if (t.cookies && "" == M && t.cookies.cy_user) {
                let e = JSON.parse(decodeURIComponent(t.cookies.cy_user));
                e.is_login && ((M = e._id), (x = e.token), (Y = M));
              }
            })
            .catch((e) => {
              r({ status: "error", error: e }), p.captureException(e);
            }),
          !0
        );
      }
    }
    function B(e, t, r) {
      e.error && p.captureException(e.error);
    }
    function I(e) {
      "options" == e.tag && browser.runtime.openOptionsPage();
    }
    function N(e) {
      "checkPms" == e.type && V();
    }
    const D = "^(chrome://).+",
      F = "^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+",
      q = "^(file:///).+(mp3|mp4|avi|flv|wmv|mov|html)$";
    function H(e, t) {
      return new Promise((r, n) => {
        browser.tabs.executeScript(e, t).then((e) => {
          if (browser.runtime.lastError) {
            let e = browser.runtime.lastError.message;
            n(e);
          } else r(e);
        });
      });
    }
    function W(e, t) {
      browser.tabs.query({ active: !0, currentWindow: !0 }).then(function (r) {
        if (!r[0]) return;
        let n = z(r[0].url);
        Q(),
          h &&
            (browser.tabs.executeScript(e, {
              file: "/lib/browser-polyfill.js",
              runAt: t,
            }),
            browser.tabs.executeScript(e, { file: "/trs.js", runAt: t }),
            browser.tabs.executeScript(e, { file: "/vbt.js", runAt: t }),
            (0, s.firebasePageView)(
              `web_trs?utm_source=${n}&utm_medium=website`
            ),
            M
              ? (0, i.reportEvent)({
                  category: `${L}web`,
                  action: "open",
                  label: "isLoggedIn",
                })
              : (0, i.reportEvent)({
                  category: `${L}web`,
                  action: "open",
                  label: "isUnlogin",
                }),
            setTimeout(function () {
              browser.tabs
                .sendMessage(e, { type: "checkInserted", script: "sub" })
                .then(function (t) {
                  browser.runtime.lastError || !t
                    ? (async function (e) {
                        try {
                          await H(e, { file: "jquery.js" }),
                            await (async function (e) {
                              let t = R.split("//");
                              t = t.length >= 2 ? t[1].split("/")[0] : "";
                              for (const r of o.DISTILLER_WHITE_LIST)
                                if (t.includes(r)) {
                                  browser.tabs
                                    .executeScript(e, {
                                      file: "ddl.js",
                                      runAt: "document_end",
                                    })
                                    .then(([e]) => {
                                      Z(e);
                                    });
                                  break;
                                }
                            })(e),
                            await H(e, {
                              code: `var optionLang = "${g}", optionSubType = "${m}"`,
                            }),
                            await H(e, { file: "sub.js" }),
                            browser.tabs.sendMessage(e, {
                              type: "turnOnVideoBtn",
                            });
                        } catch (t) {
                          browser.tabs.sendMessage(e, {
                            type: "alert",
                            content: t.message,
                            time: 5,
                          }),
                            p.captureException(t);
                        }
                      })(e)
                    : browser.tabs.sendMessage(e, { type: "turnOnVideoBtn" });
                });
            }, 100),
            (h = !1)),
          d &&
            (browser.tabs.executeScript(e, {
              file: "/lib/browser-polyfill.js",
              runAt: t,
            }),
            browser.tabs.executeScript(e, { file: "swt.js", runAt: t }),
            browser.tabs.insertCSS(e, { file: "css/swt.css", runAt: t }),
            (d = !1)),
          browser.tabs.insertCSS(e, { file: "css/btn.css", runAt: t });
      });
    }
    function z(e) {
      let t;
      try {
        t = new URL(e).hostname.replace("www.", "");
      } catch (e) {
        t = "";
      }
      return "" == t && (t = "others"), t;
    }
    function $({ tab: e, source: t }) {
      e.url.match(q) &&
        browser.extension.isAllowedFileSchemeAccess().then(function (e) {
          if (!e)
            return (
              alert(browser.i18n.getMessage("RequireAllowAccessFile")),
              void browser.tabs.create({
                url: "chrome://extensions/?id=" + browser.runtime.id,
              })
            );
        }),
        main(e);
      let r = "";
      try {
        r = new URL(e.url).origin;
      } catch (e) {}
      (0, s.firebaseEvent)({
        name: "trs-start",
        params: { source: t, origin: r },
      });
    }
    function V() {
      browser.permissions
        .contains({
          permissions: ["webNavigation", "tabCapture"],
          origins: ["<all_urls>"],
        })
        .then(function (e) {
          e
            ? J()
            : browser.permissions.request(
                {
                  permissions: ["webNavigation", "tabCapture"],
                  origins: ["<all_urls>"],
                },
                function (e) {
                  e
                    ? (J(), G())
                    : alert(browser.i18n.getMessage("getAllUrlsFailed"));
                }
              );
        }),
        browser.permissions
          .contains({
            permissions: ["cookies"],
            origins: ["https://biz.caiyunapp.com/"],
          })
          .then(function (e) {
            e || alert(browser.i18n.getMessage("getCookiesPermissionFailed"));
          });
    }
    function J() {
      browser.webNavigation.onHistoryStateUpdated.addListener(function (e) {
        0 === e.frameId &&
          -1 != T &&
          "" != R &&
          browser.tabs.get(e.tabId).then(function (e) {
            R.match(F) &&
              e.id == T &&
              e.url != R &&
              ((R = e.url), browser.tabs.update(T, { url: R }));
          }).catch(e=>{console.log(e)});
      }),
        browser.webNavigation.onBeforeNavigate.addListener(function (e) {
          e.id == T && _ && O(() => {});
        }),
        browser.tabs.onRemoved.addListener(function (e, t) {
          e == k && f && ((f.onclose = function () {}), f.close());
        });
    }
    async function G(e) {
      await new Promise(function (e, t) {
        let r = !1;
        if (!browser.cookies) return;
        let n = "";
        if (
          (browser.cookies
            .get({ url: "https://caiyunapp.com", name: "cy_user" })
            .then(function (t) {
              let o = "",
                i = !1;
              if (((r = !0), t && t.value)) {
                let e = decodeURIComponent(t.value);
                if ((e = e.replace('}"', "}").replace('"{', "{"))) {
                  let t = JSON.parse(e);
                  (o = t._id), (n = t.token);
                }
              }
              if (
                (Y != o && ((i = !0), (M = o), (x = n)),
                (Y = o),
                browser.runtime.lastError)
              ) {
                let e = browser.runtime.lastError.message;
                p.captureException(e);
              }
              e([r, o, i]);
            }),
          browser.runtime.lastError)
        ) {
          let e = browser.runtime.lastError.message;
          p.captureException(e), t(e);
        }
      }),
        browser.tabs
          .query({ active: !0, currentWindow: !0 })
          .then(function (e) {
            if (!e[0]) return;
            let t = e[0].url;
            t.match(D) || ((R = t), W((T = e[0].id), "document_start"));
          });
    }
    browser.browserAction.onClicked.addListener((e) => {
      $({ tab: e, source: "browser-action" });
    }),
      browser.contextMenus.create({
        title: browser.i18n.getMessage("launchApp"),
        contexts: ["all"],
        onclick: function () {
          browser.tabs
            .query({ active: !0, currentWindow: !0 })
            .then(function (e) {
              let t = e[0];
              main(t);
            });
        },
      }),
      browser.contextMenus.create({
        title: browser.i18n.getMessage("pdfOpen"),
        contexts: ["browser_action"],
        onclick: function () {
          (0, a.openPDF)();
        },
      }),
      (window.main = function (e) {
        (h = !0),
          browser.storage.sync
            .get({
              version: "",
              isAutoTranslate: !1,
              isAutoSWT: !0,
              isEnableGa: !(c || u),
              isFirst: !0,
              transDirect: 1,
              subType: 0,
            })
            .then(function (e) {
              (d = e.isAutoSWT),
                (g = o.LANG_L[e.transDirect]),
                (m = o.SUB_TYPE_l[e.subType]);
              var t = browser.runtime.getManifest();
              e.isFirst && V(),
                e.version != t.version && setTimeout(function () {}, 3e4);
            }),
          G();
      }),
      browser.webNavigation.onDOMContentLoaded.addListener(function (e) {
        1 != (0 != e.frameId) &&
          browser.storage.sync
            .get({
              isAutoTranslate: !1,
              isAutoSWT: !0,
              isEnableGa: !(c || u),
              transDirect: 1,
              subType: 0,
              favoriteColor: "red",
              likesColor: !0,
            })
            .then(function (t) {
              (d = t.isAutoSWT),
                (g = o.LANG_L[t.transDirect]),
                (m = o.SUB_TYPE_l[t.subType]),
                t.isAutoTranslate &&
                  (t.isAutoTranslate
                    ? (browser.browserAction.setBadgeText({ text: "auto" }),
                      browser.browserAction.setBadgeBackgroundColor({
                        color: "#5ebb8d",
                      }))
                    : browser.browserAction.setBadgeText({ text: "" }),
                  browser.tabs.detectLanguage(e.id).then(function (e) {
                    (h = !(!e.includes("en") && !e.includes("ja"))), G();
                  })),
                G();
            });
      });
    let Y = "";
    function X() {
      return !(!M && !x);
    }
    function K(e) {
      if (browser.runtime.onMessage.hasListener(A)) {
        try {
          browser.tabs.sendMessage(e, { action: "close" }),
            browser.tabs.sendMessage(e, { type: "closeSubtitle" });
        } catch (e) {
          p.captureException(e);
        }
        O(function () {});
      }
    }
    function Z(e) {
      let t = o.INTERPRETER_API + "v1/page/cache/update",
        r = {
          headers: { "content-type": "application/json", token: x },
          method: "POST",
          body: JSON.stringify({ url: R, result: e, user_id: M }),
        };
      try {
        fetch(t, r).then((e) => {});
      } catch (e) {
        p.captureException(e);
      }
    }
    function Q() {
      browser.runtime.onMessage.hasListener(U) ||
        browser.runtime.onMessage.addListener(U),
        browser.runtime.onMessage.hasListener(A) ||
          browser.runtime.onMessage.addListener(A),
        browser.runtime.onMessage.hasListener(B) ||
          browser.runtime.onMessage.addListener(B),
        browser.runtime.onMessage.hasListener(I) ||
          browser.runtime.onMessage.addListener(I),
        browser.runtime.onMessage.hasListener(N) ||
          browser.runtime.onMessage.addListener(N);
    }
    browser.commands.onCommand.addListener((e, t) => {
      "translate-page" === e && t && $({ tab: t, source: "context-menus" });
    }),
      Q();
  },
  function (e, t, r) {
    "use strict";
    function n() {
      browser.webRequest.onBeforeRequest.hasListener(o) ||
        browser.webRequest.onBeforeRequest.addListener(
          o,
          {
            urls: [
              "ftp://*/*.pdf",
              "ftp://*/*.PDF",
              "file://*/*.pdf",
              "file://*/*.PDF",
            ],
            types: ["main_frame", "sub_frame"],
          },
          ["blocking"]
        ),
        browser.webRequest.onHeadersReceived.hasListener(i) ||
          browser.webRequest.onHeadersReceived.addListener(
            i,
            {
              urls: ["https://*/*", "https://*/*", "http://*/*", "http://*/*"],
              types: ["main_frame", "sub_frame"],
            },
            ["blocking", "responseHeaders"]
          );
    }
    function o({ tabId: e, url: t }) {
      const r = browser.runtime.getURL(
        `assets/pdf/web/viewer.html?file=${encodeURIComponent(t)}`
      );
      return -1 !== e && "always" === window.appConfig.pdfStandalone
        ? (browser.tabs.remove(e),
          (function (e) {
            browser.windows.create({ type: "popup", url: e });
          })(r),
          { cancel: !0 })
        : { redirectUrl: r };
    }
    function i({ tabId: e, responseHeaders: t, url: r }) {
      if (!t) return;
      const n = t.find(({ name: e }) => "content-type" === e.toLowerCase());
      if (n && n.value) {
        const e = n.value.toLowerCase();
        if (
          e.endsWith("pdf") ||
          ("application/octet-stream" === e && r.endsWith(".pdf"))
        )
          return {
            redirectUrl: browser.runtime.getURL(
              `assets/pdf/web/viewer.html?file=${encodeURIComponent(r)}`
            ),
          };
      }
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.initPDF = async function () {
        if (browser.webRequest.onBeforeRequest.hasListener(o)) return;
        const { isPdfSniff: e } = await browser.storage.sync.get({
          isPdfSniff: !1,
        });
        e && n(),
          browser.storage.onChanged.addListener((e, t) => {
            "sync" === t &&
              e.isPdfSniff &&
              (e.isPdfSniff.newValue
                ? n()
                : (browser.webRequest.onBeforeRequest.removeListener(o),
                  browser.webRequest.onHeadersReceived.removeListener(i)));
          });
      }),
      (t.openPDF = async function (e, t) {
        let r = browser.runtime.getURL("assets/pdf/web/viewer.html");
        if (e) r += "?file=" + encodeURIComponent(e);
        else {
          const e = await browser.tabs.query({ active: !0, currentWindow: !0 });
          if (e.length > 0 && e[0].url) {
            const n = e[0].url;
            if (n.startsWith(r)) return;
            (t || n.endsWith("pdf")) && (r += "?file=" + encodeURIComponent(n));
          }
        }
        return browser.tabs.create({ url: r, active: !0 });
      }),
      (t.extractPDFUrl = function (e) {
        if (!e) return;
        const t = new URL(e);
        return decodeURIComponent(t.searchParams.get("file") || "");
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(48),
      o = r(66),
      i = r(67);
    (0, o.setupSentry)(function () {
      (0, n.setupCyxyFetch)();
      const e = (0, i.setupBrowserActionIcon)(),
        t = (0, i.setupBrowserActionTitle)();
      browser.runtime.onMessage.addListener((r) => {
        if (r)
          switch (r.type) {
            case "UPDATE_BROWSER_ACTION":
              t(r.title), e(r.logo);
          }
      });
    });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupSentry = function (e) {
        o.default
          .config(
            "",
            { release: "1.2.0", environment: "prod", sampleRate: 1 }
          )
          .install(),
          o.default.context(function () {
            e();
          });
      });
    var n,
      o = (n = r(23)) && n.__esModule ? n : { default: n };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupBrowserActionIcon = function () {
        let e = NaN;
        return (t) => {
          e !== t &&
            ((e = t),
            browser.browserAction.setIcon({
              path:
                e || browser.runtime.getManifest().browser_action.default_icon,
            }));
        };
      }),
      (t.setupBrowserActionTitle = function () {
        let e = NaN;
        return (t) => {
          e !== t &&
            ((e = t),
            browser.browserAction.setTitle({
              title:
                t || browser.runtime.getManifest().browser_action.default_title,
            }));
        };
      }),
      (t.getImageData = function (e) {
        return new Promise((t, r) => {
          const n = new Image();
          (n.crossOrigin = "Anonymous"),
            (n.onload = () => {
              const e = document.createElement("canvas"),
                r = e.getContext("2d");
              (e.height = n.height), (e.width = n.width), r.drawImage(n, 0, 0);
              const o = r.getImageData(0, 0, n.width, n.height);
              t(o);
            }),
            (n.onerror = (e) => {
              r(e);
            }),
            (n.src = e);
        });
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(69);
    !(function (e) {
      e.RecorderLM = "2018-09-19 10:50";
      var t = function () {},
        r = {
          extend: function (e, t) {
            for (var r in (e || (e = {}), t || (t = {}), t)) e[r] = t[r];
            return e;
          },
        };
      function o(e) {
        return new i(e);
      }
      function i(e) {
        this.set = r.extend(
          {
            type: "wav",
            bitRate: 16,
            sampleRate: 16e3,
            bufferSize: 8192,
            onProcess: t,
          },
          e
        );
      }
      (o.IsOpen = function () {
        var e = o.Stream;
        if (e) {
          var t = e.getTracks();
          if (t.length > 0) return "live" == t[0].readyState;
        }
        return !1;
      }),
        (i.prototype = {
          open: function (r, n) {
            if (((r = r || t), (n = n || t), o.IsOpen())) r();
            else {
              var i = e.AudioContext;
              if ((i || (i = e.webkitAudioContext), i)) {
                var s = navigator.mediaDevices || {};
                if (
                  (s.getUserMedia ||
                    (s = navigator).getUserMedia ||
                    (s.getUserMedia =
                      s.webkitGetUserMedia ||
                      s.mozGetUserMedia ||
                      s.msGetUserMedia),
                  s.getUserMedia)
                ) {
                  o.Ctx = o.Ctx || new i();
                  var a = function (e) {
                      (o.Stream = e), r();
                    },
                    c = function (e) {
                      var t = e.code || e.name || "";
                      n(
                        /Permission/i.test(t)
                          ? "用户拒绝了录音权限"
                          : "无法录音：" + t
                      );
                    },
                    u = s.getUserMedia({ audio: !0 }, a, c);
                  u && u.then && u.then(a).catch(c);
                } else n("此浏览器不支持录音");
              } else n("此浏览器不支持录音");
            }
          },
          open_tab_audio_stream: function (r, n) {
            if (((r = r || t), (n = n || t), o.IsOpen())) r();
            else {
              var i = e.AudioContext;
              i || (i = e.webkitAudioContext),
                i
                  ? ((o.Ctx = o.Ctx || new i()),
                    browser.tabs
                      .query({ active: !0, currentWindow: !0 })
                      .then(function (e) {
                        chrome.tabCapture.capture(
                          {
                            audio: !0,
                            video: !1,
                            audioConstraints: {
                              mandatory: { chromeMediaSource: "tab" },
                            },
                          },
                          (e) => {
                            e && ((o.Stream = e), r());
                          }
                        );
                      }))
                  : n("此浏览器不支持录音");
            }
          },
          close: function (e) {
            (e = e || t), this._stop();
            var r = o.Stream;
            if (r)
              for (var n = r.getTracks(), i = 0; i < n.length; i++) n[i].stop();
            (o.Stream = 0), e();
          },
          start: function () {
            var e = this,
              t = e.set,
              r = (e.buffer = []);
            if (((e.recSize = 0), e._stop(), (e.state = 0), !o.IsOpen()))
              return;
            const i = o.Stream;
            var s,
              a = o.Ctx,
              c = (e.media = a.createMediaStreamSource(o.Stream)),
              u = (e.process = (
                a.createScriptProcessor || a.createJavaScriptNode
              ).call(a, t.bufferSize, 1, 1));
            (u.onaudioprocess = function (i) {
              if (1 == e.state) {
                var a,
                  c = i.inputBuffer.getChannelData(0);
                if (o.Ctx.sampleRate == e.set.sampleRate) a = c;
                else {
                  var u = new n.Resampler(
                    o.Ctx.sampleRate,
                    e.set.sampleRate,
                    1,
                    c
                  );
                  a = u.resampler(c.length) > 0 ? u.outputBuffer : c;
                }
                for (
                  var l = new Int16Array(a.length), f = 0, p = 0;
                  p < a.length;
                  p++
                ) {
                  var h = Math.max(-1, Math.min(1, a[p]));
                  (h = h < 0 ? 32768 * h : 32767 * h),
                    (l[p] = h),
                    (f += Math.abs(h));
                }
                r.push(l), (e.recSize += l.length), (f /= l.length);
                var d = 0;
                f > 0 &&
                  (d = Math.round(
                    Math.max(0, (100 * (20 * Math.log10(f / 32767) + 34)) / 34)
                  ));
                var g = Math.round((e.recSize / e.set.sampleRate) * 1e3);
                clearTimeout(s),
                  (s = setTimeout(function () {
                    t.onProcess(r, d, g);
                  }));
              }
            }),
              c.connect(u),
              u.connect(a.destination),
              (e.state = 1);
            let l = new Audio();
            (l.srcObject = i), l.play();
          },
          _stop: function () {
            this.state &&
              ((this.state = 0),
              this.media.disconnect(),
              this.process.disconnect());
          },
          pause: function (e) {
            this.state && (this.state = e || 2);
          },
          resume: function () {
            this.pause(1);
          },
          stop: function (e, r) {
            (e = e || t), (r = r || t);
            var n = this,
              o = n.set;
            if (n.state) {
              n._stop();
              var i = n.recSize;
              if (i) {
                for (
                  var s = new Int16Array(i), a = 0, c = 0;
                  c < n.buffer.length;
                  c++
                ) {
                  var u = n.buffer[c];
                  s.set(u, a), (a += u.length);
                }
                var l = Math.round((i / o.sampleRate) * 1e3);
                setTimeout(function () {
                  Date.now(),
                    n[o.type](s, function (t) {
                      e(t, l);
                    });
                });
              } else r("未采集到录音");
            } else r("未开始录音");
          },
          wav: function (e, t) {
            var r = this.set,
              n = this.recSize,
              o = r.sampleRate,
              i = r.sampleRate,
              s = 8 == r.bitRate ? 8 : 16,
              a = Math.round(i / o);
            if (a > 1) {
              n = Math.floor(n / a);
              for (var c = new Int16Array(n), u = 0, l = 0; u < n; )
                (c[u] = e[l]), (l += a), u++;
              e = c;
            } else o = i;
            var f = n * (s / 8),
              p = new ArrayBuffer(44 + f),
              h = new DataView(p),
              d = 0,
              g = function (e) {
                for (var t = 0; t < e.length; t++, d++)
                  h.setUint8(d, e.charCodeAt(t));
              },
              m = function (e) {
                h.setUint16(d, e, !0), (d += 2);
              },
              b = function (e) {
                h.setUint32(d, e, !0), (d += 4);
              };
            if (
              (g("RIFF"),
              b(36 + f),
              g("WAVE"),
              g("fmt "),
              b(16),
              m(1),
              m(1),
              b(o),
              b(o * (s / 8)),
              m(s / 8),
              m(s),
              g("data"),
              b(f),
              8 == s)
            )
              for (u = 0; u < n; u++, d++) {
                var v = e[u];
                (v = parseInt(255 / (65535 / (v + 32768)))),
                  h.setInt8(d, v, !0);
              }
            else for (u = 0; u < n; u++, d += 2) h.setInt16(d, e[u], !0);
            t(new Blob([h], { type: "audio/wav" }));
          },
        }),
        (e.Recorder = o);
    })(window);
  },
  function (e, t, r) {
    "use strict";
    function n(e, t, r, n) {
      if (
        ((this.fromSampleRate = +e),
        (this.toSampleRate = +t),
        (this.channels = 0 | r),
        "object" != typeof n)
      )
        throw new Error("inputBuffer is not an object.");
      if (
        !(
          n instanceof Array ||
          n instanceof Float32Array ||
          n instanceof Float64Array
        )
      )
        throw new Error(
          "inputBuffer is not an array or a float32 or a float64 array."
        );
      (this.inputBuffer = n), this.initialize();
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Resampler = n),
      (n.prototype.initialize = function () {
        if (
          !(
            this.fromSampleRate > 0 &&
            this.toSampleRate > 0 &&
            this.channels > 0
          )
        )
          throw new Error("Invalid settings specified for the resampler.");
        this.fromSampleRate == this.toSampleRate
          ? ((this.resampler = this.bypassResampler),
            (this.ratioWeight = 1),
            (this.outputBuffer = this.inputBuffer))
          : ((this.ratioWeight = this.fromSampleRate / this.toSampleRate),
            this.fromSampleRate < this.toSampleRate
              ? (this.compileLinearInterpolationFunction(),
                (this.lastWeight = 1))
              : (this.compileMultiTapFunction(),
                (this.tailExists = !1),
                (this.lastWeight = 0)),
            this.initializeBuffers());
      }),
      (n.prototype.compileLinearInterpolationFunction = function () {
        for (
          var e =
              "var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = this.lastWeight;        var firstWeight = 0;        var secondWeight = 0;        var sourceOffset = 0;        var outputOffset = 0;        var outputBuffer = this.outputBuffer;        for (; weight < 1; weight += " +
              this.ratioWeight +
              ") {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;",
            t = 0;
          t < this.channels;
          ++t
        )
          e +=
            "outputBuffer[outputOffset++] = (this.lastOutput[" +
            t +
            "] * firstWeight) + (buffer[" +
            t +
            "] * secondWeight);";
        for (
          e +=
            "}        weight -= 1;        for (bufferLength -= " +
            this.channels +
            ", sourceOffset = Math.floor(weight) * " +
            this.channels +
            "; sourceOffset < bufferLength;) {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;",
            t = 0;
          t < this.channels;
          ++t
        )
          e +=
            "outputBuffer[outputOffset++] = (buffer[sourceOffset" +
            (t > 0 ? " + " + t : "") +
            "] * firstWeight) + (buffer[sourceOffset + " +
            (this.channels + t) +
            "] * secondWeight);";
        for (
          e +=
            "weight += " +
            this.ratioWeight +
            ";            sourceOffset = Math.floor(weight) * " +
            this.channels +
            ";        }",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "this.lastOutput[" + t + "] = buffer[sourceOffset++];";
        (e += "this.lastWeight = weight % 1;    }    return outputOffset;"),
          (this.resampler = Function("bufferLength", e));
      }),
      (n.prototype.compileMultiTapFunction = function () {
        for (
          var e =
              "var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = 0;",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "var output" + t + " = 0;";
        for (
          e +=
            "var actualPosition = 0;        var amountToNext = 0;        var alreadyProcessedTail = !this.tailExists;        this.tailExists = false;        var outputBuffer = this.outputBuffer;        var currentPosition = 0;        do {            if (alreadyProcessedTail) {                weight = " +
            this.ratioWeight +
            ";",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "output" + t + " = 0;";
        for (
          e += "}            else {                weight = this.lastWeight;",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "output" + t + " = this.lastOutput[" + t + "];";
        for (
          e +=
            "alreadyProcessedTail = true;            }            while (weight > 0 && actualPosition < bufferLength) {                amountToNext = 1 + actualPosition - currentPosition;                if (weight >= amountToNext) {",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "output" + t + " += buffer[actualPosition++] * amountToNext;";
        for (
          e +=
            "currentPosition = actualPosition;                    weight -= amountToNext;                }                else {",
            t = 0;
          t < this.channels;
          ++t
        )
          e +=
            "output" +
            t +
            " += buffer[actualPosition" +
            (t > 0 ? " + " + t : "") +
            "] * weight;";
        for (
          e +=
            "currentPosition += weight;                    weight = 0;                    break;                }            }            if (weight <= 0) {",
            t = 0;
          t < this.channels;
          ++t
        )
          e +=
            "outputBuffer[outputOffset++] = output" +
            t +
            " / " +
            this.ratioWeight +
            ";";
        for (
          e += "}            else {                this.lastWeight = weight;",
            t = 0;
          t < this.channels;
          ++t
        )
          e += "this.lastOutput[" + t + "] = output" + t + ";";
        (e +=
          "this.tailExists = true;                break;            }        } while (actualPosition < bufferLength);    }    return outputOffset;"),
          (this.resampler = Function("bufferLength", e));
      }),
      (n.prototype.bypassResampler = function (e) {
        return e;
      }),
      (n.prototype.initializeBuffers = function () {
        var e =
          Math.ceil(
            ((this.inputBuffer.length * this.toSampleRate) /
              this.fromSampleRate /
              this.channels) *
              1.0000004768371582
          ) *
            this.channels +
          this.channels;
        try {
          (this.outputBuffer = new Float32Array(e)),
            (this.lastOutput = new Float32Array(this.channels));
        } catch (e) {
          (this.outputBuffer = []), (this.lastOutput = []);
        }
      });
  },
]);
