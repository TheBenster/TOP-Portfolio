(() => {
  "use strict";
  var n = {
      424: (n, t, e) => {
        e.d(t, { Z: () => s });
        var o = e(81),
          i = e.n(o),
          r = e(645),
          a = e.n(r)()(i());
        a.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700&display=swap);",
        ]),
          a.push([
            n.id,
            'body {\n  margin: 0;\n  font-family: "Inter";\n  overflow-x: hidden;\n}\n\n.title {\n  font-family: "Inter";\n  font-weight: 400;\n  padding: 0;\n  margin: 0;\n}\n\n.home {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0f172a;\n  color: white;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n\n.title-btn {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.position {\n  text-align: center;\n  font-weight: 100;\n  margin: 0;\n}\n\n.name {\n  color: #60a5fa;\n}\n\n.btn {\n  margin-top: 5px;\n  height: 50px;\n  width: 50%;\n  font-size: 25px;\n  font-weight: 100;\n  border-radius: 20px;\n  border-style: none;\n  background-color: #172554;\n  color: white;\n  transition: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n\n.btn:hover {\n  cursor: pointer;\n  background-color: #60a5fa;\n  color: #172554;\n}\n\n.about-nav {\n  background-color: #212121;\n  height: 7vh;\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n  font-weight: 200;\n  justify-content: end;\n  color: white;\n  position: sticky;\n  top: 0;\n}\n.nav {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.about {\n  height: 100vh;\n  background-color: #0f172a;\n}\n\n.link-to {\n  width: 100%;\n  text-decoration: none;\n  color: white;\n}\n\n.nav > a:hover {\n  color: #60a5fa;\n  transition-duration: 0.4s;\n}\n.headshot {\n  width: 15vw;\n  height: 15vw;\n  display: flex;\n  border-radius: 50%;\n  padding: 100px 100px 0px 100px;\n}\n.headshot-img {\n  border-radius: 50%;\n}\n.about-intro {\n  height: 30vh;\n  color: white;\n  padding-top: 100px;\n  padding-right: 100px;\n}\n.intro-text {\n  font-size: 25px;\n}\n.top-half {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom-half {\n  color: white;\n  padding-left: 100px;\n  display: flex;\n  flex-direction: column;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n}\n\ni {\n  font-size: 50px;\n}\n.techs {\n  display: flex;\n  gap: 30px;\n}\n\n.tech-cards {\n  font-weight: 200;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  padding-top: 10px;\n}\n.card-body {\n  display: flex;\n  gap: 20px;\n}\n.card-head {\n  display: flex;\n  align-items: center;\n}\n\n.portfolio {\n  height: 70vh;\n  background-color: #0f172a;\n  padding: 0;\n  margin: 0;\n  padding: 50px 100px 0px 100px;\n}\n\n.portfolio-header {\n  color: white;\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.portfolio-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  color: white;\n  gap: 100px;\n  padding-top: 20px;\n  font-size: 1.5rem;\n  font-weight: 200;\n  height: 50%;\n}\n\n.portfolio-item {\n  display: flex;\n  width: auto;\n  flex-direction: column;\n  gap: 20px;\n  height: 20%;\n  object-fit: contain;\n}\n.portfolio-item img {\n  border-radius: 10px;\n  /* height: 20%; */\n}\n.portfolio-list {\n  object-fit: contain;\n}\n\n.imgs img {\n  object-fit: contain;\n  height: auto;\n  width: 100%;\n}\n.portfolio-item imgs img {\n  object-fit: contain;\n  height: auto;\n  width: 100%;\n}\n.pieces img {\n  height: 20%;\n}\nimgs > img:hover,\n.pieces > img:hover {\n  height: 27vh;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  transition-timing-function: ease-in-out;\n}\n\n.imgs > img:not(:hover),\n.pieces > img:not(:hover) {\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in-out;\n}\n\n.contact-page {\n  background-color: #1e293b;\n  color: white;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.contact-form {\n  display: flex;\n  flex-direction: column;\n}\n.contact {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput[type="email"],\ninput[type="text"] {\n  height: 20px;\n  margin-top: 10px;\n  border-style: none;\n  border-radius: 15px;\n  padding-left: 10px;\n}\n.submit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.submit-btn {\n  background-color: #60a5fa;\n  color: white;\n  width: 50%;\n  border-style: none;\n  border-radius: 15px;\n  height: 30px;\n  font-weight: 600;\n}\n@media only screen and (max-width: 900px) {\n  .title {\n    font-size: 1.5rem; /* Adjust font size for smaller screens */\n  }\n  .intro-text {\n    font-size: 0.9rem;\n  }\n  .home {\n    padding: 10px; /* Add some padding for smaller screens */\n  }\n\n  .btn {\n    width: 80%; /* Adjust button width for smaller screens */\n  }\n\n  .about-intro {\n    padding: 50px; /* Adjust padding for smaller screens */\n  }\n\n  .headshot {\n    padding-right: 0;\n  }\n\n  .bottom-half {\n    padding-left: 50px; /* Adjust padding for smaller screens */\n  }\n\n  .portfolio {\n    padding-left: 50px; /* Adjust padding for smaller screens */\n  }\n\n  .portfolio-list {\n    flex-direction: column; /* Stack portfolio items in a column for smaller screens */\n    gap: 20px; /* Adjust gap for smaller screens */\n  }\n}\n@media screen and (max-width: 1205px) {\n  .intro-text {\n    font-size: 1.1em;\n  }\n  .headshot-img {\n    width: 1fr;\n  }\n}\n@media screen and (max-width: 650px) {\n  /* .about {\n    height: 70vh;\n  } */\n  /* .top-half {\n    height: 25vh;\n  } */\n  .portfolio {\n    padding-top: 20px;\n    height: 1000px;\n  }\n  #portfolio-page {\n    height: 170vh;\n    background-color: #0f172a;\n  }\n  #misc {\n    display: none;\n  }\n  .portfolio-list {\n    display: flex;\n    flex-direction: column;\n  }\n  .imgs.video > a > img {\n    height: 100%;\n    width: auto;\n  }\n  .portfolio-item {\n    height: 50%;\n    padding-bottom: 0;\n  }\n\n  .imgs > img {\n    width: auto;\n    height: 100%;\n  }\n  .imgs {\n    height: 70%;\n    object-fit: contain;\n  }\n  .pieces {\n    height: 70%;\n  }\n  .pieces > img {\n    width: auto;\n    height: 100%;\n  }\n}\n.socials-page {\n  background-color: #0f172a;\n  color: white;\n  height: 25vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.active {\n  color: #60a5fa;\n}\n.home.photos,\n.home.websites {\n  align-items: start;\n  justify-content: start;\n  padding-top: 20px;\n  padding-left: 50px;\n  flex-direction: column;\n}\n\n.images {\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.image-item,\n.image-item > img,\n.image-item > h3,\n.image-item > a > img {\n  width: 25vw;\n  font-weight: 200;\n}\n',
            "",
          ]);
        const s = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (e += n(t)),
                  o && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, o, i, r) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (o && a[d[0]]) ||
                  (void 0 !== r &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = r)),
                  e &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = e))
                      : (d[2] = e)),
                  i &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = i))
                      : (d[4] = "".concat(i))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var r = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              l = o.base ? c[0] + o.base : c[0],
              d = r[l] || 0,
              p = "".concat(l, " ").concat(d);
            r[l] = d + 1;
            var f = e(p),
              h = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(h);
            else {
              var g = i(h, o);
              (o.byIndex = s),
                t.splice(s, 0, { identifier: p, updater: g, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function i(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, i) {
          var r = o((n = n || []), (i = i || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < r.length; a++) {
              var s = e(r[a]);
              t[s].references--;
            }
            for (var c = o(n, i), l = 0; l < r.length; l++) {
              var d = e(r[l]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            r = c;
          };
        };
      },
      569: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var i = void 0 !== e.layer;
                i &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  i && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var r = e.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  t.styleTagTransform(o, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { id: o, exports: {} });
    return n[o](r, r.exports, e), r.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        t = e.n(n),
        o = e(795),
        i = e.n(o),
        r = e(569),
        a = e.n(r),
        s = e(565),
        c = e.n(s),
        l = e(216),
        d = e.n(l),
        p = e(589),
        f = e.n(p),
        h = e(424),
        g = {};
      (g.styleTagTransform = f()),
        (g.setAttributes = c()),
        (g.insert = a().bind(null, "head")),
        (g.domAPI = i()),
        (g.insertStyleElement = d()),
        t()(h.Z, g),
        h.Z && h.Z.locals && h.Z.locals;
      const u = document.querySelectorAll(".link-to");
      function m() {
        const n = window.scrollY;
        console.log("test"),
          u.forEach((t) => {
            const e = t.getAttribute("href").substring(1),
              o = document.getElementById(e);
            if (o) {
              const e = o.offsetTop,
                i = e + o.clientHeight;
              n >= e && n < i
                ? t.classList.add("active")
                : t.classList.remove("active");
            }
          });
      }
      window.addEventListener("scroll", m), m();
      const x = document.querySelectorAll(".portfolio-item"),
        v = document.getElementById("modal"),
        y = document.getElementById("modalImage");
      x.forEach((n) => {
        const t = n.querySelector("img").src;
        n.addEventListener("click", () => {
          !(function (n) {
            console.log("hello"), (y.src = n), (v.style.display = "flex");
          })(t);
        });
      }),
        window.addEventListener("click", (n) => {
          n.target === v && (v.style.display = "none");
        });
    })();
})();
