!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 15));
})({
  0: function(e, t, n) {
    var i;
    /*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */ !(function(
      r
    ) {
      "use strict";
      var o = document,
        a = "getElementsByClassName",
        s = function(e) {
          return o.querySelectorAll(e);
        },
        l = { type: 0, shade: !0, shadeClose: !0, fixed: !0, anim: "scale" },
        d = {
          extend: function(e) {
            var t = JSON.parse(JSON.stringify(l));
            for (var n in e) t[n] = e[n];
            return t;
          },
          timer: {},
          end: {},
          touch: function(e, t) {
            e.addEventListener(
              "click",
              function(e) {
                t.call(this, e);
              },
              !1
            );
          }
        },
        c = 0,
        u = ["layui-m-layer"],
        y = function(e) {
          (this.config = d.extend(e)), this.view();
        };
      (y.prototype.view = function() {
        var e = this,
          t = e.config,
          n = o.createElement("div");
        (e.id = n.id = u[0] + c),
          n.setAttribute("class", u[0] + " " + u[0] + (t.type || 0)),
          n.setAttribute("index", c);
        var i = (function() {
            var e = "object" == typeof t.title;
            return t.title
              ? '<h3 style="' +
                  (e ? t.title[1] : "") +
                  '">' +
                  (e ? t.title[0] : t.title) +
                  "</h3>"
              : "";
          })(),
          r = (function() {
            "string" == typeof t.btn && (t.btn = [t.btn]);
            var e,
              n = (t.btn || []).length;
            return 0 !== n && t.btn
              ? ((e = '<span yes type="1">' + t.btn[0] + "</span>"),
                2 === n &&
                  (e = '<span no type="0">' + t.btn[1] + "</span>" + e),
                '<div class="layui-m-layerbtn">' + e + "</div>")
              : "";
          })();
        if (
          (t.fixed ||
            ((t.top = t.hasOwnProperty("top") ? t.top : 100),
            (t.style = t.style || ""),
            (t.style += " top:" + (o.body.scrollTop + t.top) + "px")),
          2 === t.type &&
            (t.content =
              '<i></i><i class="layui-m-layerload"></i><i></i><p>' +
              (t.content || "") +
              "</p>"),
          t.skin && (t.anim = "up"),
          "msg" === t.skin && (t.shade = !1),
          (n.innerHTML =
            (t.shade
              ? "<div " +
                ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") +
                ' class="layui-m-layershade"></div>'
              : "") +
            '<div class="layui-m-layermain" ' +
            (t.fixed ? "" : 'style="position:static;"') +
            '><div class="layui-m-layersection"><div class="layui-m-layerchild ' +
            (t.skin ? "layui-m-layer-" + t.skin + " " : "") +
            (t.className ? t.className : "") +
            " " +
            (t.anim ? "layui-m-anim-" + t.anim : "") +
            '" ' +
            (t.style ? 'style="' + t.style + '"' : "") +
            ">" +
            i +
            '<div class="layui-m-layercont">' +
            t.content +
            "</div>" +
            r +
            "</div></div></div>"),
          !t.type || 2 === t.type)
        ) {
          var l = o[a](u[0] + t.type);
          l.length >= 1 && layer.close(l[0].getAttribute("index"));
        }
        document.body.appendChild(n);
        var d = (e.elem = s("#" + e.id)[0]);
        t.success && t.success(d), (e.index = c++), e.action(t, d);
      }),
        (y.prototype.action = function(e, t) {
          var n = this;
          e.time &&
            (d.timer[n.index] = setTimeout(function() {
              layer.close(n.index);
            }, 1e3 * e.time));
          var i = function() {
            0 == this.getAttribute("type")
              ? (e.no && e.no(), layer.close(n.index))
              : e.yes
              ? e.yes(n.index)
              : layer.close(n.index);
          };
          if (e.btn)
            for (
              var r = t[a]("layui-m-layerbtn")[0].children, o = r.length, s = 0;
              o > s;
              s++
            )
              d.touch(r[s], i);
          if (e.shade && e.shadeClose) {
            var l = t[a]("layui-m-layershade")[0];
            d.touch(l, function() {
              layer.close(n.index, e.end);
            });
          }
          e.end && (d.end[n.index] = e.end);
        }),
        (r.layer = {
          v: "2.0",
          index: c,
          open: function(e) {
            return new y(e || {}).index;
          },
          close: function(e) {
            var t = s("#" + u[0] + e)[0];
            t &&
              ((t.innerHTML = ""),
              o.body.removeChild(t),
              clearTimeout(d.timer[e]),
              delete d.timer[e],
              "function" == typeof d.end[e] && d.end[e](),
              delete d.end[e]);
          },
          closeAll: function() {
            for (var e = o[a](u[0]), t = 0, n = e.length; n > t; t++)
              layer.close(0 | e[0].getAttribute("index"));
          }
        }),
        void 0 ===
          (i = function() {
            return layer;
          }.call(t, n, t, e)) || (e.exports = i);
    })(window);
  },
  15: function(e, t, n) {
    var i = n(0);
    function r(e, t, n) {
      "alert" == e.type
        ? i.open({ content: e.content, skin: "msg", time: e.time })
        : "closeVideoBtn" == e.type
        ? document.getElementById("substr") &&
          document.getElementsByClassName("cyxy-video-trans")[0].click()
        : "turnOnVideoBtn" == e.type &&
          (document.getElementsByClassName("cyxy-video-trans"),
          document.getElementById("substr") ||
            (document.querySelector("video:not(#rewardvideo)") &&
              chrome.runtime.sendMessage({ type: "showSubByVideoBtn" })));
    }
    (document.head.appendChild(document.createElement("style")).innerHTML =
      ".cyxy-video-trans {\n        position: fixed;\n        bottom: 130px;\n        right: 20px;\n        z-index: 2147483647 !important;\n        cursor: pointer;\n        filter: grayscale(100%);\n        height: 50px !important;\n    }\n    .cyxy-video-trans-btn {\n        height: 36px !important;\n        width: 36px !important;\n        border-radius: 50%;\n        overflow: hidden;\n    }"),
      chrome.runtime.onMessage.hasListener(r) ||
        chrome.runtime.onMessage.addListener(r);
  }
});
