"use strict";

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
}
var Countdown = function() {
    function t(e) {
        _classCallCheck(this, t), this.options = {
            cont: null,
            countdown: !0,
            date: {
                year: 0,
                month: 0,
                day: 0,
                hour: 0,
                minute: 0,
                second: 0
            },
            endCallback: null,
            outputFormat: "year|week|day|hour|minute|second",
            outputTranslation: {
                year: "Years",
                week: "Weeks",
                day: "Days",
                hour: "Hours",
                minute: "Minutes",
                second: "Seconds"
            }
        }, this.lastTick = null, this.intervalsBySize = ["year", "week", "day", "hour", "minute", "second"], this.elementClassPrefix = "countDown_", this.interval = null, this.digitConts = {}, this._assignOptions(this.options, e)
    }
    return _createClass(t, [{
        key: "TIMESTAMP_SECOND",
        get: function() {
            return 1e3
        }
    }, {
        key: "TIMESTAMP_MINUTE",
        get: function() {
            return 60 * this.TIMESTAMP_SECOND
        }
    }, {
        key: "TIMESTAMP_HOUR",
        get: function() {
            return 60 * this.TIMESTAMP_MINUTE
        }
    }, {
        key: "TIMESTAMP_DAY",
        get: function() {
            return 24 * this.TIMESTAMP_HOUR
        }
    }, {
        key: "TIMESTAMP_WEEK",
        get: function() {
            return 7 * this.TIMESTAMP_DAY
        }
    }, {
        key: "TIMESTAMP_YEAR",
        get: function() {
            return 365 * this.TIMESTAMP_DAY
        }
    }]), _createClass(t, [{
        key: "start",
        value: function() {
            var t, e, n = this;
            this._fixCompatibility(), t = this._getDate(this.options.date), e = this._prepareTimeByOutputFormat(t), this._writeData(e), this.lastTick = e, this.options.countdown && t.getTime() <= Date.now() ? "function" == typeof this.options.endCallback && (this.stop(), this.options.endCallback()) : this.interval = setInterval(function() {
                n._updateView(n._prepareTimeByOutputFormat(t))
            }, this.TIMESTAMP_SECOND)
        }
    }, {
        key: "stop",
        value: function() {
            null !== this.interval && clearInterval(this.interval)
        }
    }, {
        key: "_getDate",
        value: function(t) {
            if ("object" === _typeof(t)) {
                if (t instanceof Date) return t;
                var e = {
                    day: 0,
                    month: 0,
                    year: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                for (var n in e) e.hasOwnProperty(n) && t.hasOwnProperty(n) && (e[n] = t[n]);
                return new Date(e.year, e.month > 0 ? e.month - 1 : e.month, e.day, e.hour, e.minute, e.second)
            }
            return "number" == typeof t || "string" == typeof t ? new Date(t) : new Date
        }
    }, {
        key: "_prepareTimeByOutputFormat",
        value: function(t) {
            var e, n, i = this,
                a = {};
            return e = this.intervalsBySize.filter(function(t) {
                return -1 !== i.options.outputFormat.split("|").indexOf(t)
            }), n = this.options.countdown ? t.getTime() - Date.now() : Date.now() - t.getTime(), e.forEach(function(t) {
                var e;
                if (n > 0) switch (t) {
                    case "year":
                        e = Math.trunc(n / i.TIMESTAMP_YEAR), n -= e * i.TIMESTAMP_YEAR;
                        break;
                    case "week":
                        e = Math.trunc(n / i.TIMESTAMP_WEEK), n -= e * i.TIMESTAMP_WEEK;
                        break;
                    case "day":
                        e = Math.trunc(n / i.TIMESTAMP_DAY), n -= e * i.TIMESTAMP_DAY;
                        break;
                    case "hour":
                        e = Math.trunc(n / i.TIMESTAMP_HOUR), n -= e * i.TIMESTAMP_HOUR;
                        break;
                    case "minute":
                        e = Math.trunc(n / i.TIMESTAMP_MINUTE), n -= e * i.TIMESTAMP_MINUTE;
                        break;
                    case "second":
                        e = Math.trunc(n / i.TIMESTAMP_SECOND), n -= e * i.TIMESTAMP_SECOND
                } else e = "00";
                a[t] = (("" + e).length < 2 ? "0" + e : "" + e).split("")
            }), a
        }
    }, {
        key: "_fixCompatibility",
        value: function() {
            Math.trunc = Math.trunc || function(t) {
                return isNaN(t) ? NaN : t > 0 ? Math.floor(t) : Math.ceil(t)
            }
        }
    }, {
        key: "_writeData",
        value: function(t) {
            var e, n = this,
                i = '<div class="'.concat(this.elementClassPrefix, 'cont">');
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    var a = '<div class="'.concat(this.elementClassPrefix, '_interval_basic_cont">\n                                       <div class="').concat(this._getIntervalContCommonClassName(), " ").concat(this._getIntervalContClassName(e), '">'),
                        o = '<div class="'.concat(this.elementClassPrefix, 'interval_basic_cont_description">\n                                                   ').concat(this.options.outputTranslation[e], "\n                                               </div>");
                    t[e].forEach(function(t, e) {
                        a += '<div class="'.concat(n._getDigitContCommonClassName(), " ").concat(n._getDigitContClassName(e), '">\n                                        ').concat(n._getDigitElementString(t, 0), "\n                                    </div>")
                    }), i += a + "</div>" + o + "</div>"
                }
            this.options.cont.innerHTML = i + "</div>", this.lastTick = t
        }
    }, {
        key: "_getDigitElementString",
        value: function(t, e) {
            return '<div class="'.concat(this.elementClassPrefix, 'digit_last_placeholder">\n                        <div class="').concat(this.elementClassPrefix, 'digit_last_placeholder_inner">\n                            ').concat(e, '\n                        </div>\n                    </div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_placeholder">').concat(t, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_last_rotate">').concat(e, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_rotate">\n                        <div class="').concat(this.elementClassPrefix, 'digit_new_rotated">\n                            <div class="').concat(this.elementClassPrefix, 'digit_new_rotated_inner">\n                                ').concat(t, "\n                            </div>\n                        </div>\n                    </div>")
        }
    }, {
        key: "_updateView",
        value: function(t) {
            var e = this,
                n = function(n) {
                    t.hasOwnProperty(n) && t[n].forEach(function(i, a) {
                        null !== e.lastTick && e.lastTick[n][a] !== t[n][a] && (e._getDigitCont(n, a).innerHTML = e._getDigitElementString(t[n][a], e.lastTick[n][a]))
                    })
                };
            for (var i in t) n(i);
            this.lastTick = t
        }
    }, {
        key: "_getDigitCont",
        value: function(t, e) {
            return this.digitConts["".concat(t, "_").concat(e)] || (this.digitConts["".concat(t, "_").concat(e)] = this.options.cont.querySelector(".".concat(this._getIntervalContClassName(t), " .").concat(this._getDigitContClassName(e)))), this.digitConts["".concat(t, "_").concat(e)]
        }
    }, {
        key: "_getIntervalContClassName",
        value: function(t) {
            return "".concat(this.elementClassPrefix, "interval_cont_").concat(t)
        }
    }, {
        key: "_getIntervalContCommonClassName",
        value: function() {
            return "".concat(this.elementClassPrefix, "interval_cont")
        }
    }, {
        key: "_getDigitContClassName",
        value: function(t) {
            return "".concat(this.elementClassPrefix, "digit_cont_").concat(t)
        }
    }, {
        key: "_getDigitContCommonClassName",
        value: function() {
            return "".concat(this.elementClassPrefix, "digit_cont")
        }
    }, {
        key: "_assignOptions",
        value: function(t, e) {
            for (var n in t) t.hasOwnProperty(n) && e.hasOwnProperty(n) && (null !== t[n] && "object" === _typeof(t[n]) && "object" === _typeof(e[n]) ? this._assignOptions(t[n], e[n]) : t[n] = e[n])
        }
    }]), t
}();

            
var cd = new Countdown({
      cont: document.querySelector('.containerCountDown'),
      date: Date.now()+2431232,
      outputTranslation: {
         
          hour: 'Horas',
          minute: 'Minutos',
          second: 'Segundos',
      },
      endCallback: null,
      outputFormat: 'hour|minute|second',
  });
  cd.start();
