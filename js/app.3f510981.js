(function() {
    "use strict";
    var e = {
            6061: function(e, t, r) {
                var l = r(9242),
                    i = r(3396),
                    n = r(7139),
                    o = r.p + "Zer075/img/logo.950ece5c.jpeg";
                const a = {
                        class: "text-bg-dark"
                    },
                    s = {
                        class: "col-6 offset-3"
                    },
                    c = (0, i._)("div", {
                        class: "col-4 offset-4 pt-5"
                    }, [(0, i._)("img", {
                        alt: "Logo",
                        class: "img-fluid",
                        src: o
                    })], -1),
                    u = {
                        class: "mb-3"
                    },
                    f = (0, i._)("label", {
                        for: "exampleFormControlInput1",
                        class: "form-label"
                    }, "Valor: ", -1),
                    h = {
                        class: "col-12"
                    },
                    m = (0, i._)("label", {
                        class: "form-label"
                    }, "Número de parcelas: ", -1),
                    p = {
                        class: "text-center"
                    },
                    v = {
                        class: "form-check form-switch"
                    },
                    d = {
                        key: 0,
                        class: "form-check-label"
                    },
                    b = {
                        key: 1,
                        class: "form-check-label"
                    },
                    w = {
                        class: "jumbotron"
                    },
                    g = (0, i._)("h1", {
                        class: "display-6"
                    }, "Detalhes da simulação", -1),
                    _ = {
                        class: "lead"
                    },
                    y = {
                        class: "lead"
                    },
                    k = (0, i._)("hr", {
                        class: "my-4"
                    }, null, -1),
                    C = {
                        class: "lead"
                    },
                    x = (0, i._)("br", null, null, -1),
                    O = (0, i._)("br", null, null, -1),
                    z = (0, i._)("br", null, null, -1),
                    j = (0, i._)("br", null, null, -1),
                    R = (0, i._)("br", null, null, -1);

                function S(e, t, r, o, S, V) {
                    return (0, i.wg)(), (0, i.iD)("div", a, [(0, i._)("div", s, [c, (0, i._)("div", u, [f, (0, i.wy)((0, i._)("input", {
                        type: "number",
                        class: "form-control",
                        "onUpdate:modelValue": t[0] || (t[0] = t => e.value = t),
                        onChange: t[1] || (t[1] = e => V.process())
                    }, null, 544), [
                        [l.nr, e.value]
                    ])]), (0, i._)("div", h, [m, (0, i.wy)((0, i._)("input", {
                        type: "range",
                        class: "form-range",
                        min: "1",
                        max: "18",
                        "onUpdate:modelValue": t[2] || (t[2] = t => e.term = t),
                        onChange: t[3] || (t[3] = e => V.process())
                    }, null, 544), [
                        [l.nr, e.term]
                    ]), (0, i._)("h2", p, (0, n.zw)(e.term), 1)]), (0, i._)("div", v, [(0, i.wy)((0, i._)("input", {
                        class: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        "onUpdate:modelValue": t[4] || (t[4] = t => e.limit = t),
                        onChange: t[5] || (t[5] = e => V.process())
                    }, null, 544), [
                        [l.e8, e.limit]
                    ]), e.limit ? ((0, i.wg)(), (0, i.iD)("label", d, "Calcular a partir do limite")) : (0, i.kq)("", !0), e.limit ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.iD)("label", b, "Calcular valor à receber"))]), (0, i._)("div", w, [g, (0, i._)("p", _, "Será cobrado no cartão: " + (0, n.zw)(this.result.willCharge), 1), (0, i._)("p", y, "Você receberá: " + (0, n.zw)(this.result.willReceive), 1), k, (0, i._)("p", null, "Ser" + (0, n.zw)(e.term > 1 ? "ão" : "á") + " " + (0, n.zw)(e.term) + " parcela" + (0, n.zw)(e.term > 1 ? "s" : "") + " de " + (0, n.zw)(e.result.portion), 1)]), (0, i._)("p", C, [(0, i._)("a", {
                        class: "btn btn-outline-primary btn-lg",
                        role: "button",
                        onClick: t[6] || (t[6] = (...e) => V.copy && V.copy(...e))
                    }, "Copiar")])]), x, O, z, j, R])
                }
                var V = {
                        name: "App",
                        data: function() {
                            return {
                                rates: {
                                    receivable: [
                                      0,          // índice 0
                                      1.0799,     // índice 1
                                      1.0922,     // índice 2
                                      1.0984,     // índice 3
                                      1.1045,     // índice 4
                                      1.11,       // índice 5
                                      1.1278,     // índice 6
                                      1.138,      // índice 7
                                      1.13384,    // índice 8
                                      1.1368,     // índice 9
                                      1.1448,     // índice 10
                                      1.1498,     // índice 11
                                      1.1548,     // índice 12
                                      1.185,      // índice 13
                                      1.19,       // índice 14
                                      1.195,      // índice 15 
                                      1.2,        // índice 16 
                                      1.205,      // índice 17 
                                      1.22        // índice 18
                                      ],
                                    limit: [
                                         0, 
                                         0.07398833225298646, 
                                         0.08441677348470975, 
                                         0.08958485069191553,
                                         0.09461294703485748, 
                                         0.09909909909909914, 
                                         0.11331796417804568, 
                                         0.12126537785588738, 
                                         0.11804134622168902, 
                                         0.12033779028852919,
                                         0.12648497554157942,
                                         0.13028352757001216, 
                                         0.1340491860062349, 
                                         0.15611814345991562, 
                                         0.15966386554621848, 
                                         0.16317991631799175, 
                                         0.16666666666666657, 
                                         0.17012448132780095, 
                                         0.18032786885245897
                                       ]
                                },
                                value: 1e3,
                                term: 1,
                                limit: !1,
                                result: {
                                    willCharge: 0,
                                    willReceive: 0,
                                    portion: 0
                                }
                            }
                        },
                        mounted() {
                            this.process()
                        },
                        methods: {
                            process: function() {
                                this.limit ? this.result = {
                                    willCharge: this.formatter(this.value),
                                    willReceive: this.formatter(this.value - (this.value * this.rates.limit[this.term])),
                                    portion: this.formatter(this.value / this.term)
                                } : this.result = {
                                    willCharge: this.formatter(this.value * this.rates.receivable[this.term]),
                                    willReceive: this.formatter(this.value),
                                    portion: this.formatter(this.value * this.rates.receivable[this.term] / this.term)
                                }
                            },
                            formatter: function(e) {
                                return e.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })
                            },
                            copy: function() {
                                let e = `Simulador ZER075 CRED\nSerá cobrado no cartão: ${this.result.willCharge}.\nVocê receberá: ${this.result.willReceive}.\nSer${this.term>1?"ão":"á"} ${this.term} parcela${this.term>1?"s":""} de ${this.result.portion}`;
                                navigator.clipboard.writeText(e)
                            }
                        }
                    },
                    $ = r(89);
                const D = (0, $.Z)(V, [
                    ["render", S]
                ]);
                var L = D;
                r(3455);
                (0, l.ri)(L).mount("#app")
            }
        },
        t = {};

    function r(l) {
        var i = t[l];
        if (void 0 !== i) return i.exports;
        var n = t[l] = {
            exports: {}
        };
        return e[l].call(n.exports, n, n.exports, r), n.exports
    }
    r.m = e,
        function() {
            var e = [];
            r.O = function(t, l, i, n) {
                if (!l) {
                    var o = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        l = e[u][0], i = e[u][1], n = e[u][2];
                        for (var a = !0, s = 0; s < l.length; s++)(!1 & n || o >= n) && Object.keys(r.O).every((function(e) {
                            return r.O[e](l[s])
                        })) ? l.splice(s--, 1) : (a = !1, n < o && (o = n));
                        if (a) {
                            e.splice(u--, 1);
                            var c = i();
                            void 0 !== c && (t = c)
                        }
                    }
                    return t
                }
                n = n || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
                e[u] = [l, i, n]
            }
        }(),
        function() {
            r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return r.d(t, {
                    a: t
                }), t
            }
        }(),
        function() {
            r.d = function(e, t) {
                for (var l in t) r.o(t, l) && !r.o(e, l) && Object.defineProperty(e, l, {
                    enumerable: !0,
                    get: t[l]
                })
            }
        }(),
        function() {
            r.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            r.p = "/"
        }(),
        function() {
            var e = {
                143: 0
            };
            r.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, l) {
                    var i, n, o = l[0],
                        a = l[1],
                        s = l[2],
                        c = 0;
                    if (o.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (i in a) r.o(a, i) && (r.m[i] = a[i]);
                        if (s) var u = s(r)
                    }
                    for (t && t(l); c < o.length; c++) n = o[c], r.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                    return r.O(u)
                },
                l = self["webpackChunkzero75"] = self["webpackChunkzero75"] || [];
            l.forEach(t.bind(null, 0)), l.push = t.bind(null, l.push.bind(l))
        }();
    var l = r.O(void 0, [998], (function() {
        return r(6061)
    }));
    l = r.O(l)
})();
