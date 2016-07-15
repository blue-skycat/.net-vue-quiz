﻿!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("vue")) : "function" == typeof define && define.amd ? define("MintLoadmore", ["Vue"], e) : "object" == typeof exports ? exports.MintLoadmore = e(require("vue")) : t.MintLoadmore = e(t.vue) }(this, function (t) { return function (t) { function e(i) { if (o[i]) return o[i].exports; var n = o[i] = { exports: {}, id: i, loaded: !1 }; return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports } var o = {}; return e.m = t, e.c = o, e.p = "/lib/", e(0) }([function (t, e, o) { "use strict"; function i(t) { return t && t.__esModule ? t : { "default": t } } Object.defineProperty(e, "__esModule", { value: !0 }); var n = (o(6), o(1)), s = i(n), r = o(7), l = i(r), a = o(3), c = i(a); l["default"].component("spinner", s["default"]), e["default"] = c["default"] }, function (t, e, o) { !function (e, o) { t.exports = o() }(this, function () { return function (t) { function e(i) { if (o[i]) return o[i].exports; var n = o[i] = { exports: {}, id: i, loaded: !1 }; return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports } var o = {}; return e.m = t, e.c = o, e.p = "/dist/", e(0) }([function (t, e, o) { t.exports = o(8) }, function (t, e, o) { var i, n; i = o(2), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports["default"]), n && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = n) }, function (t, e) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = { computed: { spinnerColor: function () { return this.color || this.$parent.color || "#ccc" }, spinnerSize: function () { return (this.size || this.$parent.size || 28) + "px" } }, props: { size: Number, color: String } } }, , function (t, e) { t.exports = '<div class="kebab-spinner-fading-circle circle-color-{{_uid}}" :style="{\n    width: spinnerSize,\n    height: spinnerSize\n  }"> <style>.circle-color-{{_uid}} > div::before { background-color: {{ spinnerColor }}; }</style> <div class="is-circle1 kebab-spinner-fading-circle-circle"></div> <div class="is-circle2 kebab-spinner-fading-circle-circle"></div> <div class="is-circle3 kebab-spinner-fading-circle-circle"></div> <div class="is-circle4 kebab-spinner-fading-circle-circle"></div> <div class="is-circle5 kebab-spinner-fading-circle-circle"></div> <div class="is-circle6 kebab-spinner-fading-circle-circle"></div> <div class="is-circle7 kebab-spinner-fading-circle-circle"></div> <div class="is-circle8 kebab-spinner-fading-circle-circle"></div> <div class="is-circle9 kebab-spinner-fading-circle-circle"></div> <div class="is-circle10 kebab-spinner-fading-circle-circle"></div> <div class="is-circle11 kebab-spinner-fading-circle-circle"></div> <div class="is-circle12 kebab-spinner-fading-circle-circle"></div> </div>' }, , , , function (t, e, o) { var i, n; o(16), i = o(12), n = o(4), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports["default"]), n && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = n) }, , , , function (t, e, o) { "use strict"; function i(t) { return t && t.__esModule ? t : { "default": t } } Object.defineProperty(e, "__esModule", { value: !0 }); var n = o(1), s = i(n); e["default"] = { name: "fading-circle", mixins: [s["default"]] } }, , , , function (t, e) { }]) }) }, function (t, e) { t.exports = "<div class=mint-loadmore> <div class=mint-loadmore-content :class=\"{ 'is-dropped': topDropped || bottomDropped}\" :style=\"{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }\" v-el:loadmore-content> <slot name=top> <div class=mint-loadmore-top> <spinner v-if=\"topStatus === 'loading'\" class=mint-loadmore-spinner :size=20 type=fading-circle></spinner> <span class=mint-loadmore-text>{{ topText }}</span> </div> </slot> <slot></slot> <slot name=bottom> <div class=mint-loadmore-bottom> <spinner v-if=\"bottomStatus === 'loading'\" class=mint-loadmore-spinner :size=20 type=fading-circle></spinner> <span class=mint-loadmore-text>{{ bottomText }}</span> </div> </slot> </div> </div>" }, function (t, e, o) { var i, n; o(5), i = o(4), n = o(2), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports["default"]), n && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = n) }, function (t, e) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = { name: "mt-loadmore", props: { topPullText: { type: String, "default": "下拉刷新" }, topDropText: { type: String, "default": "释放更新" }, topLoadingText: { type: String, "default": "加载中..." }, topDistance: { type: Number, "default": 70 }, topMethod: { type: Function }, topStatus: { type: String, "default": "" }, bottomPullText: { type: String, "default": "上拉刷新" }, bottomDropText: { type: String, "default": "释放更新" }, bottomLoadingText: { type: String, "default": "加载中..." }, bottomDistance: { type: Number, "default": 70 }, bottomMethod: { type: Function }, bottomStatus: { type: String, "default": "" }, bottomAllLoaded: { type: Boolean, "default": !1 } }, data: function () { return { uuid: null, translate: 0, scrollEventTarget: null, containerFilled: !1, topText: "", topDropped: !1, bottomText: "", bottomDropped: !1, bottomReached: !1, direction: "", startY: 0, startScrollTop: 0, currentY: 0 } }, watch: { topStatus: function (t) { switch (t) { case "pull": this.topText = this.topPullText; break; case "drop": this.topText = this.topDropText; break; case "loading": this.topText = this.topLoadingText } }, bottomStatus: function (t) { switch (t) { case "pull": this.bottomText = this.bottomPullText; break; case "drop": this.bottomText = this.bottomDropText; break; case "loading": this.bottomText = this.bottomLoadingText } } }, events: { onTopLoaded: function (t) { var e = this; t === this.uuid && (this.translate = 0, setTimeout(function () { e.topStatus = "pull" }, 200)) }, onBottomLoaded: function (t) { var e = this; this.bottomStatus = "pull", this.bottomDropped = !1, t === this.uuid && this.$nextTick(function () { e.scrollEventTarget === window ? document.body.scrollTop += 50 : e.scrollEventTarget.scrollTop += 50, e.translate = 0 }), this.bottomAllLoaded || this.containerFilled || this.fillContainer() } }, methods: { getScrollEventTarget: function (t) { for (var e = t; e && "HTML" !== e.tagName && "BODY" !== e.tagName && 1 === e.nodeType;) { var o = document.defaultView.getComputedStyle(e).overflowY; if ("scroll" === o || "auto" === o) return e; e = e.parentNode } return window }, getScrollTop: function (t) { return t === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : t.scrollTop }, bindTouchEvents: function () { this.$el.addEventListener("touchstart", this.handleTouchStart), this.$el.addEventListener("touchmove", this.handleTouchMove), this.$el.addEventListener("touchend", this.handleTouchEnd) }, init: function () { this.topStatus = "pull", this.bottomStatus = "pull", this.topText = this.topPullText, this.scrollEventTarget = this.getScrollEventTarget(this.$el), "function" == typeof this.bottomMethod && (this.fillContainer(), this.bindTouchEvents()), "function" == typeof this.topMethod && this.bindTouchEvents() }, fillContainer: function () { var t = this; this.$nextTick(function () { t.scrollEventTarget === window ? t.containerFilled = t.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom : t.containerFilled = t.$el.getBoundingClientRect().bottom >= t.scrollEventTarget.getBoundingClientRect().bottom, t.containerFilled || (t.bottomStatus = "loading", t.bottomMethod(t.uuid)) }) }, checkBottomReached: function () { return this.scrollEventTarget === window ? document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight : this.$el.getBoundingClientRect().bottom === this.scrollEventTarget.getBoundingClientRect().bottom }, handleTouchStart: function (t) { this.startY = t.touches[0].clientY, this.startScrollTop = this.getScrollTop(this.scrollEventTarget), this.bottomReached = !1, "loading" !== this.topStatus && (this.topStatus = "pull", this.topDropped = !1), "loading" !== this.bottomStatus && (this.bottomStatus = "pull", this.bottomDropped = !1) }, handleTouchMove: function (t) { if (!(this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom)) { this.currentY = t.touches[0].clientY; var e = this.currentY - this.startY; this.direction = e > 0 ? "down" : "up", "function" == typeof this.topMethod && "down" === this.direction && 0 === this.getScrollTop(this.scrollEventTarget) && "loading" !== this.topStatus && (t.preventDefault(), t.stopPropagation(), this.translate = e - this.startScrollTop, this.translate < 0 && (this.translate = 0), this.topStatus = this.translate >= this.topDistance ? "drop" : "pull"), "up" === this.direction && (this.bottomReached = this.bottomReached || this.checkBottomReached()), "function" == typeof this.bottomMethod && "up" === this.direction && this.bottomReached && "loading" !== this.bottomStatus && !this.bottomAllLoaded && (t.preventDefault(), t.stopPropagation(), this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + e, this.translate > 0 && (this.translate = 0), this.bottomStatus = -this.translate >= this.bottomDistance ? "drop" : "pull") } }, handleTouchEnd: function () { "down" === this.direction && 0 === this.getScrollTop(this.scrollEventTarget) && this.translate > 0 && (this.topDropped = !0, "drop" === this.topStatus ? (this.translate = "50", this.topStatus = "loading", this.topMethod(this.uuid)) : (this.translate = "0", this.topStatus = "pull")), "up" === this.direction && this.bottomReached && this.translate < 0 && (this.bottomDropped = !0, this.bottomReached = !1, "drop" === this.bottomStatus ? (this.translate = "-50", this.bottomStatus = "loading", this.bottomMethod(this.uuid)) : (this.translate = "0", this.bottomStatus = "pull")), this.direction = "" } }, ready: function () { this.uuid = Math.random().toString(36).substring(3, 8), this.init() } } }, function (t, e) { }, function (t, e) { }, function (e, o) { e.exports = t }]) });