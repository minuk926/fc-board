!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd
        ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).ZXingBrowser = {})
}(this, (function (t) {
        "use strict";
        var e, r, n, o = (e = function (t, r) {
                return e = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        }
                    }
                    ,
                    e(t, r)
            }
                ,
                function (t, r) {
                    if ("function" != typeof r && null !== r) {
                        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                    }

                    function n() {
                        this.constructor = t
                    }

                    e(t, r),
                        t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                            new n)
                }
        ), i = function (t) {
            function e(e, r) {
                var n, o, i, a = this.constructor, s = t.call(this, e, r) || this;
                return Object.defineProperty(s, "name", {
                    value: a.name,
                    enumerable: !1,
                    configurable: !0
                }),
                    n = s,
                    o = a.prototype,
                    (i = Object.setPrototypeOf) ? i(n, o) : n.__proto__ = o,
                    function (t, e) {
                        void 0 === e && (e = t.constructor);
                        var r = Error.captureStackTrace;
                        r && r(t, e)
                    }(s),
                    s
            }

            return o(e, t),
                e
        }(Error), a = (r = function (t, e) {
                return r = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    r(t, e)
            }
                ,
                function (t, e) {
                    function n() {
                        this.constructor = t
                    }

                    r(t, e),
                        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                            new n)
                }
        ), s = function (t) {
            function e(e) {
                void 0 === e && (e = void 0);
                var r = t.call(this, e) || this;
                return r.message = e,
                    r
            }

            return a(e, t),
                e.prototype.getKind = function () {
                    return this.constructor.kind
                }
                ,
                e.kind = "Exception",
                e
        }(i), u = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return u(e, t),
                e.kind = "ArgumentException",
                e
        }(s), f = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), h = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return f(e, t),
                e.kind = "IllegalArgumentException",
                e
        }(s), l = function () {
            function t(t) {
                if (this.binarizer = t,
                null === t) {
                    throw new h("Binarizer must be non-null.")
                }
            }

            return t.prototype.getWidth = function () {
                return this.binarizer.getWidth()
            }
                ,
                t.prototype.getHeight = function () {
                    return this.binarizer.getHeight()
                }
                ,
                t.prototype.getBlackRow = function (t, e) {
                    return this.binarizer.getBlackRow(t, e)
                }
                ,
                t.prototype.getBlackMatrix = function () {
                    return null !== this.matrix && void 0 !== this.matrix
                    || (this.matrix = this.binarizer.getBlackMatrix()),
                        this.matrix
                }
                ,
                t.prototype.isCropSupported = function () {
                    return this.binarizer.getLuminanceSource().isCropSupported()
                }
                ,
                t.prototype.crop = function (e, r, n, o) {
                    var i = this.binarizer.getLuminanceSource().crop(e, r, n, o);
                    return new t(this.binarizer.createBinarizer(i))
                }
                ,
                t.prototype.isRotateSupported = function () {
                    return this.binarizer.getLuminanceSource().isRotateSupported()
                }
                ,
                t.prototype.rotateCounterClockwise = function () {
                    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                    return new t(this.binarizer.createBinarizer(e))
                }
                ,
                t.prototype.rotateCounterClockwise45 = function () {
                    var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                    return new t(this.binarizer.createBinarizer(e))
                }
                ,
                t.prototype.toString = function () {
                    try {
                        return this.getBlackMatrix().toString()
                    } catch (t) {
                        return ""
                    }
                }
                ,
                t
        }(), d = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), p = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return d(e, t),
                e.getChecksumInstance = function () {
                    return new e
                }
                ,
                e.kind = "ChecksumException",
                e
        }(s), g = function () {
            function t(t) {
                this.source = t
            }

            return t.prototype.getLuminanceSource = function () {
                return this.source
            }
                ,
                t.prototype.getWidth = function () {
                    return this.source.getWidth()
                }
                ,
                t.prototype.getHeight = function () {
                    return this.source.getHeight()
                }
                ,
                t
        }(), w = function () {
            function t() {
            }

            return t.arraycopy = function (t, e, r, n, o) {
                for (; o--;) {
                    r[n++] = t[e++]
                }
            }
                ,
                t.currentTimeMillis = function () {
                    return Date.now()
                }
                ,
                t
        }(), y = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), v = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return y(e, t),
                e.kind = "IndexOutOfBoundsException",
                e
        }(s), _ = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), m = function (t) {
            function e(e, r) {
                void 0 === e && (e = void 0),
                void 0 === r && (r = void 0);
                var n = t.call(this, r) || this;
                return n.index = e,
                    n.message = r,
                    n
            }

            return _(e, t),
                e.kind = "ArrayIndexOutOfBoundsException",
                e
        }(v), C = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, A = function () {
            function t() {
            }

            return t.fill = function (t, e) {
                for (var r = 0, n = t.length; r < n; r++) {
                    t[r] = e
                }
            }
                ,
                t.fillWithin = function (e, r, n, o) {
                    t.rangeCheck(e.length, r, n);
                    for (var i = r; i < n; i++) {
                        e[i] = o
                    }
                }
                ,
                t.rangeCheck = function (t, e, r) {
                    if (e > r) {
                        throw new h("fromIndex(" + e + ") > toIndex(" + r + ")");
                    }
                    if (e < 0) {
                        throw new m(e);
                    }
                    if (r > t) {
                        throw new m(r)
                    }
                }
                ,
                t.asList = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        t[e] = arguments[e];
                    }
                    return t
                }
                ,
                t.create = function (t, e, r) {
                    return Array.from({
                        length: t
                    }).map((function (t) {
                            return Array.from({
                                length: e
                            }).fill(r)
                        }
                    ))
                }
                ,
                t.createInt32Array = function (t, e, r) {
                    return Array.from({
                        length: t
                    }).map((function (t) {
                            return Int32Array.from({
                                length: e
                            }).fill(r)
                        }
                    ))
                }
                ,
                t.equals = function (t, e) {
                    if (!t) {
                        return !1;
                    }
                    if (!e) {
                        return !1;
                    }
                    if (!t.length) {
                        return !1;
                    }
                    if (!e.length) {
                        return !1;
                    }
                    if (t.length !== e.length) {
                        return !1;
                    }
                    for (var r = 0, n = t.length; r < n; r++) {
                        if (t[r] !== e[r]) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.hashCode = function (t) {
                    var e, r;
                    if (null === t) {
                        return 0;
                    }
                    var n = 1;
                    try {
                        for (var o = C(t), i = o.next(); !i.done; i = o.next()) {
                            n = 31 * n + i.value
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    return n
                }
                ,
                t.fillUint8Array = function (t, e) {
                    for (var r = 0; r !== t.length; r++) {
                        t[r] = e
                    }
                }
                ,
                t.copyOf = function (t, e) {
                    return t.slice(0, e)
                }
                ,
                t.copyOfUint8Array = function (t, e) {
                    if (t.length <= e) {
                        var r = new Uint8Array(e);
                        return r.set(t),
                            r
                    }
                    return t.slice(0, e)
                }
                ,
                t.copyOfRange = function (t, e, r) {
                    var n = r - e
                        , o = new Int32Array(n);
                    return w.arraycopy(t, e, o, 0, n),
                        o
                }
                ,
                t.binarySearch = function (e, r, n) {
                    void 0 === n && (n = t.numberComparator);
                    for (var o = 0, i = e.length - 1; o <= i;) {
                        var a = i + o >> 1
                            , s = n(r, e[a]);
                        if (s > 0) {
                            o = a + 1;
                        } else {
                            if (!(s < 0)) {
                                return a;
                            }
                            i = a - 1
                        }
                    }
                    return -o - 1
                }
                ,
                t.numberComparator = function (t, e) {
                    return t - e
                }
                ,
                t
        }(), E = function () {
            function t() {
            }

            return t.numberOfTrailingZeros = function (t) {
                var e;
                if (0 === t) {
                    return 32;
                }
                var r = 31;
                return 0 !== (e = t << 16) && (r -= 16,
                    t = e),
                0 !== (e = t << 8) && (r -= 8,
                    t = e),
                0 !== (e = t << 4) && (r -= 4,
                    t = e),
                0 !== (e = t << 2) && (r -= 2,
                    t = e),
                r - (t << 1 >>> 31)
            }
                ,
                t.numberOfLeadingZeros = function (t) {
                    if (0 === t) {
                        return 32;
                    }
                    var e = 1;
                    return t >>> 16 == 0 && (e += 16,
                        t <<= 16),
                    t >>> 24 == 0 && (e += 8,
                        t <<= 8),
                    t >>> 28 == 0 && (e += 4,
                        t <<= 4),
                    t >>> 30 == 0 && (e += 2,
                        t <<= 2),
                        e -= t >>> 31
                }
                ,
                t.toHexString = function (t) {
                    return t.toString(16)
                }
                ,
                t.toBinaryString = function (t) {
                    return String(parseInt(String(t), 2))
                }
                ,
                t.bitCount = function (t) {
                    return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4)
                        & 252645135,
                        t += t >>> 8,
                    63 & (t += t >>> 16)
                }
                ,
                t.truncDivision = function (t, e) {
                    return Math.trunc(t / e)
                }
                ,
                t.parseInt = function (t, e) {
                    return void 0 === e && (e = void 0),
                        parseInt(t, e)
                }
                ,
                t.MIN_VALUE_32_BITS = -2147483648,
                t.MAX_VALUE = Number.MAX_SAFE_INTEGER,
                t
        }(), I = function () {
            function t(e, r) {
                void 0 === e ? (this.size = 0,
                    this.bits = new Int32Array(1)) : (this.size = e,
                    this.bits = null == r ? t.makeArray(e) : r)
            }

            return t.prototype.getSize = function () {
                return this.size
            }
                ,
                t.prototype.getSizeInBytes = function () {
                    return Math.floor((this.size + 7) / 8)
                }
                ,
                t.prototype.ensureCapacity = function (e) {
                    if (e > 32 * this.bits.length) {
                        var r = t.makeArray(e);
                        w.arraycopy(this.bits, 0, r, 0, this.bits.length),
                            this.bits = r
                    }
                }
                ,
                t.prototype.get = function (t) {
                    return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
                }
                ,
                t.prototype.set = function (t) {
                    this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
                }
                ,
                t.prototype.flip = function (t) {
                    this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
                }
                ,
                t.prototype.getNextSet = function (t) {
                    var e = this.size;
                    if (t >= e) {
                        return e;
                    }
                    var r = this.bits
                        , n = Math.floor(t / 32)
                        , o = r[n];
                    o &= ~((1 << (31 & t)) - 1);
                    for (var i = r.length; 0 === o;) {
                        if (++n === i) {
                            return e;
                        }
                        o = r[n]
                    }
                    var a = 32 * n + E.numberOfTrailingZeros(o);
                    return a > e ? e : a
                }
                ,
                t.prototype.getNextUnset = function (t) {
                    var e = this.size;
                    if (t >= e) {
                        return e;
                    }
                    var r = this.bits
                        , n = Math.floor(t / 32)
                        , o = ~r[n];
                    o &= ~((1 << (31 & t)) - 1);
                    for (var i = r.length; 0 === o;) {
                        if (++n === i) {
                            return e;
                        }
                        o = ~r[n]
                    }
                    var a = 32 * n + E.numberOfTrailingZeros(o);
                    return a > e ? e : a
                }
                ,
                t.prototype.setBulk = function (t, e) {
                    this.bits[Math.floor(t / 32)] = e
                }
                ,
                t.prototype.setRange = function (t, e) {
                    if (e < t || t < 0 || e > this.size) {
                        throw new h;
                    }
                    if (e !== t) {
                        e--;
                        for (var r = Math.floor(t / 32), n = Math.floor(e / 32), o = this.bits, i = r; i <= n; i++) {
                            var a = (2 << (i < n ? 31 : 31 & e)) - (1 << (i > r ? 0 : 31 & t));
                            o[i] |= a
                        }
                    }
                }
                ,
                t.prototype.clear = function () {
                    for (var t = this.bits.length, e = this.bits, r = 0; r < t; r++) {
                        e[r] = 0
                    }
                }
                ,
                t.prototype.isRange = function (t, e, r) {
                    if (e < t || t < 0 || e > this.size) {
                        throw new h;
                    }
                    if (e === t) {
                        return !0;
                    }
                    e--;
                    for (var n = Math.floor(t / 32), o = Math.floor(e / 32), i = this.bits, a = n; a <= o; a++) {
                        var s = (2 << (a < o ? 31 : 31 & e)) - (1 << (a > n ? 0 : 31 & t)) & 4294967295;
                        if ((i[a] & s) !== (r ? s : 0)) {
                            return !1
                        }
                    }
                    return !0
                }
                ,
                t.prototype.appendBit = function (t) {
                    this.ensureCapacity(this.size + 1),
                    t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)),
                        this.size++
                }
                ,
                t.prototype.appendBits = function (t, e) {
                    if (e < 0 || e > 32) {
                        throw new h("Num bits must be between 0 and 32");
                    }
                    this.ensureCapacity(this.size + e);
                    for (var r = e; r > 0; r--) {
                        this.appendBit(1 == (t >> r - 1 & 1))
                    }
                }
                ,
                t.prototype.appendBitArray = function (t) {
                    var e = t.size;
                    this.ensureCapacity(this.size + e);
                    for (var r = 0; r < e; r++) {
                        this.appendBit(t.get(r))
                    }
                }
                ,
                t.prototype.xor = function (t) {
                    if (this.size !== t.size) {
                        throw new h("Sizes don't match");
                    }
                    for (var e = this.bits, r = 0, n = e.length; r < n; r++) {
                        e[r] ^= t.bits[r]
                    }
                }
                ,
                t.prototype.toBytes = function (t, e, r, n) {
                    for (var o = 0; o < n; o++) {
                        for (var i = 0, a = 0; a < 8; a++) {
                            this.get(t) && (i |= 1 << 7 - a),
                                t++;
                        }
                        e[r + o] = i
                    }
                }
                ,
                t.prototype.getBitArray = function () {
                    return this.bits
                }
                ,
                t.prototype.reverse = function () {
                    for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), r = e + 1,
                        n = this.bits, o = 0; o < r; o++) {
                        var i = n[o];
                        i = (i = (i = (i = (i = i >> 1 & 1431655765 | (1431655765 & i) << 1) >> 2 & 858993459
                            | (858993459 & i) << 2) >> 4 & 252645135 | (252645135 & i) << 4) >> 8 & 16711935 | (16711935
                            & i) << 8) >> 16 & 65535 | (65535 & i) << 16,
                            t[e - o] = i
                    }
                    if (this.size !== 32 * r) {
                        var a = 32 * r - this.size
                            , s = t[0] >>> a;
                        for (o = 1; o < r; o++) {
                            var u = t[o];
                            s |= u << 32 - a,
                                t[o - 1] = s,
                                s = u >>> a
                        }
                        t[r - 1] = s
                    }
                    this.bits = t
                }
                ,
                t.makeArray = function (t) {
                    return new Int32Array(Math.floor((t + 31) / 32))
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.size === r.size && A.equals(this.bits, r.bits)
                }
                ,
                t.prototype.hashCode = function () {
                    return 31 * this.size + A.hashCode(this.bits)
                }
                ,
                t.prototype.toString = function () {
                    for (var t = "", e = 0, r = this.size; e < r; e++) {
                        0 == (7 & e) && (t += " "),
                            t += this.get(e) ? "X" : ".";
                    }
                    return t
                }
                ,
                t.prototype.clone = function () {
                    return new t(this.size, this.bits.slice())
                }
                ,
                t.prototype.toArray = function () {
                    for (var t = [], e = 0, r = this.size; e < r; e++) {
                        t.push(this.get(e));
                    }
                    return t
                }
                ,
                t
        }();
        !function (t) {
            t[t.OTHER = 0] = "OTHER",
                t[t.PURE_BARCODE = 1] = "PURE_BARCODE",
                t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS",
                t[t.TRY_HARDER = 3] = "TRY_HARDER",
                t[t.CHARACTER_SET = 4] = "CHARACTER_SET",
                t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS",
                t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT",
                t[t.ASSUME_GS1 = 7] = "ASSUME_GS1",
                t[t.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END",
                t[t.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK",
                t[t.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS"
        }(n || (n = {}));
        var S, O = n, T = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), b = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return T(e, t),
                e.getFormatInstance = function () {
                    return new e
                }
                ,
                e.kind = "FormatException",
                e
        }(s), R = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
        !function (t) {
            t[t.Cp437 = 0] = "Cp437",
                t[t.ISO8859_1 = 1] = "ISO8859_1",
                t[t.ISO8859_2 = 2] = "ISO8859_2",
                t[t.ISO8859_3 = 3] = "ISO8859_3",
                t[t.ISO8859_4 = 4] = "ISO8859_4",
                t[t.ISO8859_5 = 5] = "ISO8859_5",
                t[t.ISO8859_6 = 6] = "ISO8859_6",
                t[t.ISO8859_7 = 7] = "ISO8859_7",
                t[t.ISO8859_8 = 8] = "ISO8859_8",
                t[t.ISO8859_9 = 9] = "ISO8859_9",
                t[t.ISO8859_10 = 10] = "ISO8859_10",
                t[t.ISO8859_11 = 11] = "ISO8859_11",
                t[t.ISO8859_13 = 12] = "ISO8859_13",
                t[t.ISO8859_14 = 13] = "ISO8859_14",
                t[t.ISO8859_15 = 14] = "ISO8859_15",
                t[t.ISO8859_16 = 15] = "ISO8859_16",
                t[t.SJIS = 16] = "SJIS",
                t[t.Cp1250 = 17] = "Cp1250",
                t[t.Cp1251 = 18] = "Cp1251",
                t[t.Cp1252 = 19] = "Cp1252",
                t[t.Cp1256 = 20] = "Cp1256",
                t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked",
                t[t.UTF8 = 22] = "UTF8",
                t[t.ASCII = 23] = "ASCII",
                t[t.Big5 = 24] = "Big5",
                t[t.GB18030 = 25] = "GB18030",
                t[t.EUC_KR = 26] = "EUC_KR"
        }(S || (S = {}));
        var N, D = function () {
            function t(e, r, n) {
                for (var o, i, a = [], s = 3; s < arguments.length; s++) {
                    a[s - 3] = arguments[s];
                }
                this.valueIdentifier = e,
                    this.name = n,
                    this.values = "number" == typeof r ? Int32Array.from([r]) : r,
                    this.otherEncodingNames = a,
                    t.VALUE_IDENTIFIER_TO_ECI.set(e, this),
                    t.NAME_TO_ECI.set(n, this);
                for (var u = this.values, c = 0, f = u.length; c !== f; c++) {
                    var h = u[c];
                    t.VALUES_TO_ECI.set(h, this)
                }
                try {
                    for (var l = R(a), d = l.next(); !d.done; d = l.next()) {
                        var p = d.value;
                        t.NAME_TO_ECI.set(p, this)
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        d && !d.done && (i = l.return) && i.call(l)
                    } finally {
                        if (o) {
                            throw o.error
                        }
                    }
                }
            }

            return t.prototype.getValueIdentifier = function () {
                return this.valueIdentifier
            }
                ,
                t.prototype.getName = function () {
                    return this.name
                }
                ,
                t.prototype.getValue = function () {
                    return this.values[0]
                }
                ,
                t.getCharacterSetECIByValue = function (e) {
                    if (e < 0 || e >= 900) {
                        throw new b("incorect value");
                    }
                    var r = t.VALUES_TO_ECI.get(e);
                    if (void 0 === r) {
                        throw new b("incorect value");
                    }
                    return r
                }
                ,
                t.getCharacterSetECIByName = function (e) {
                    var r = t.NAME_TO_ECI.get(e);
                    if (void 0 === r) {
                        throw new b("incorect value");
                    }
                    return r
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.getName() === r.getName()
                }
                ,
                t.VALUE_IDENTIFIER_TO_ECI = new Map,
                t.VALUES_TO_ECI = new Map,
                t.NAME_TO_ECI = new Map,
                t.Cp437 = new t(S.Cp437, Int32Array.from([0, 2]), "Cp437"),
                t.ISO8859_1 = new t(S.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"),
                t.ISO8859_2 = new t(S.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"),
                t.ISO8859_3 = new t(S.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"),
                t.ISO8859_4 = new t(S.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"),
                t.ISO8859_5 = new t(S.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"),
                t.ISO8859_6 = new t(S.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"),
                t.ISO8859_7 = new t(S.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"),
                t.ISO8859_8 = new t(S.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"),
                t.ISO8859_9 = new t(S.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"),
                t.ISO8859_10 = new t(S.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"),
                t.ISO8859_11 = new t(S.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"),
                t.ISO8859_13 = new t(S.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"),
                t.ISO8859_14 = new t(S.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"),
                t.ISO8859_15 = new t(S.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"),
                t.ISO8859_16 = new t(S.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"),
                t.SJIS = new t(S.SJIS, 20, "SJIS", "Shift_JIS"),
                t.Cp1250 = new t(S.Cp1250, 21, "Cp1250", "windows-1250"),
                t.Cp1251 = new t(S.Cp1251, 22, "Cp1251", "windows-1251"),
                t.Cp1252 = new t(S.Cp1252, 23, "Cp1252", "windows-1252"),
                t.Cp1256 = new t(S.Cp1256, 24, "Cp1256", "windows-1256"),
                t.UnicodeBigUnmarked = new t(S.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"),
                t.UTF8 = new t(S.UTF8, 26, "UTF8", "UTF-8"),
                t.ASCII = new t(S.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"),
                t.Big5 = new t(S.Big5, 28, "Big5"),
                t.GB18030 = new t(S.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"),
                t.EUC_KR = new t(S.EUC_KR, 30, "EUC_KR", "EUC-KR"),
                t
        }(), M = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), P = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return M(e, t),
                e.kind = "UnsupportedOperationException",
                e
        }(s), B = function () {
            function t() {
            }

            return t.decode = function (t, e) {
                var r = this.encodingName(e);
                return this.customDecoder ? this.customDecoder(t, r) : "undefined" == typeof TextDecoder
                || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
            }
                ,
                t.shouldDecodeOnFallback = function (e) {
                    return !t.isBrowser() && "ISO-8859-1" === e
                }
                ,
                t.encode = function (t, e) {
                    var r = this.encodingName(e);
                    return this.customEncoder ? this.customEncoder(t, r) : "undefined" == typeof TextEncoder
                        ? this.encodeFallback(t) : (new TextEncoder).encode(t)
                }
                ,
                t.isBrowser = function () {
                    return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
                }
                ,
                t.encodingName = function (t) {
                    return "string" == typeof t ? t : t.getName()
                }
                ,
                t.encodingCharacterSet = function (t) {
                    return t instanceof D ? t : D.getCharacterSetECIByName(t)
                }
                ,
                t.decodeFallback = function (e, r) {
                    var n = this.encodingCharacterSet(r);
                    if (t.isDecodeFallbackSupported(n)) {
                        for (var o = "", i = 0, a = e.length; i < a; i++) {
                            var s = e[i].toString(16);
                            s.length < 2 && (s = "0" + s),
                                o += "%" + s
                        }
                        return decodeURIComponent(o)
                    }
                    if (n.equals(D.UnicodeBigUnmarked)) {
                        return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
                    }
                    throw new P("Encoding " + this.encodingName(r) + " not supported by fallback.")
                }
                ,
                t.isDecodeFallbackSupported = function (t) {
                    return t.equals(D.UTF8) || t.equals(D.ISO8859_1) || t.equals(D.ASCII)
                }
                ,
                t.encodeFallback = function (t) {
                    for (var e = btoa(unescape(encodeURIComponent(t))).split(""), r = [], n = 0; n < e.length; n++) {
                        r.push(e[n].charCodeAt(0));
                    }
                    return new Uint8Array(r)
                }
                ,
                t
        }(), L = function () {
            function t() {
            }

            return t.castAsNonUtf8Char = function (t, e) {
                void 0 === e && (e = null);
                var r = e ? e.getName() : this.ISO88591;
                return B.decode(new Uint8Array([t]), r)
            }
                ,
                t.guessEncoding = function (e, r) {
                    if (null != r && void 0 !== r.get(O.CHARACTER_SET)) {
                        return r.get(O.CHARACTER_SET).toString();
                    }
                    for (var n = e.length, o = !0, i = !0, a = !0, s = 0, u = 0, c = 0, f = 0, h = 0, l = 0, d = 0,
                        p = 0, g = 0, w = 0, y = 0, v = e.length > 3 && 239 === e[0] && 187 === e[1] && 191 === e[2],
                        _ = 0; _ < n && (o || i || a); _++) {
                        var m = 255 & e[_];
                        a && (s > 0 ? 0 == (128 & m) ? a = !1 : s-- : 0 != (128 & m) && (0 == (64 & m) ? a = !1 : (s++,
                            0 == (32 & m) ? u++ : (s++,
                                0 == (16 & m) ? c++ : (s++,
                                    0 == (8 & m) ? f++ : a = !1))))),
                        o && (m > 127 && m < 160 ? o = !1 : m > 159 && (m < 192 || 215 === m || 247 === m) && y++),
                        i && (h > 0 ? m < 64 || 127 === m || m > 252 ? i = !1 : h-- : 128 === m || 160 === m || m > 239
                            ? i = !1 : m > 160 && m < 224 ? (l++,
                                p = 0,
                            ++d > g && (g = d)) : m > 127 ? (h++,
                                d = 0,
                            ++p > w && (w = p)) : (d = 0,
                                p = 0))
                    }
                    return a && s > 0 && (a = !1),
                    i && h > 0 && (i = !1),
                        a && (v || u + c + f > 0) ? t.UTF8 : i && (t.ASSUME_SHIFT_JIS || g >= 3 || w >= 3) ? t.SHIFT_JIS
                            : o && i ? 2 === g && 2 === l || 10 * y >= n ? t.SHIFT_JIS : t.ISO88591 : o ? t.ISO88591 : i
                                ? t.SHIFT_JIS : a ? t.UTF8 : t.PLATFORM_DEFAULT_ENCODING
                }
                ,
                t.format = function (t) {
                    for (var e = [], r = 1; r < arguments.length; r++) {
                        e[r - 1] = arguments[r];
                    }
                    var n = -1;
                    return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g,
                        (function (t, r, o, i, a, s) {
                                if ("%%" === t) {
                                    return "%";
                                }
                                if (void 0 !== e[++n]) {
                                    t = i ? parseInt(i.substr(1)) : void 0;
                                    var u, c = a ? parseInt(a.substr(1)) : void 0;
                                    switch (s) {
                                        case "s":
                                            u = e[n];
                                            break;
                                        case "c":
                                            u = e[n][0];
                                            break;
                                        case "f":
                                            u = parseFloat(e[n]).toFixed(t);
                                            break;
                                        case "p":
                                            u = parseFloat(e[n]).toPrecision(t);
                                            break;
                                        case "e":
                                            u = parseFloat(e[n]).toExponential(t);
                                            break;
                                        case "x":
                                            u = parseInt(e[n]).toString(c || 16);
                                            break;
                                        case "d":
                                            u = parseFloat(parseInt(e[n], c || 10).toPrecision(t)).toFixed(0)
                                    }
                                    u = "object" == typeof u ? JSON.stringify(u) : (+u).toString(c);
                                    for (var f = parseInt(o), h = o && o[0] + "" == "0" ? "0" : " "; u.length < f;) {
                                        u = void 0 !== r ? u + h : h + u;
                                    }
                                    return u
                                }
                            }
                        ))
                }
                ,
                t.getBytes = function (t, e) {
                    return B.encode(t, e)
                }
                ,
                t.getCharCode = function (t, e) {
                    return void 0 === e && (e = 0),
                        t.charCodeAt(e)
                }
                ,
                t.getCharAt = function (t) {
                    return String.fromCharCode(t)
                }
                ,
                t.SHIFT_JIS = D.SJIS.getName(),
                t.GB2312 = "GB2312",
                t.ISO88591 = D.ISO8859_1.getName(),
                t.EUC_JP = "EUC_JP",
                t.UTF8 = D.UTF8.getName(),
                t.PLATFORM_DEFAULT_ENCODING = t.UTF8,
                t.ASSUME_SHIFT_JIS = !1,
                t
        }(), F = function () {
            function t(t) {
                void 0 === t && (t = ""),
                    this.value = t
            }

            return t.prototype.enableDecoding = function (t) {
                return this.encoding = t,
                    this
            }
                ,
                t.prototype.append = function (t) {
                    return "string" == typeof t ? this.value += t.toString() : this.encoding
                        ? this.value += L.castAsNonUtf8Char(t, this.encoding) : this.value += String.fromCharCode(t),
                        this
                }
                ,
                t.prototype.appendChars = function (t, e, r) {
                    for (var n = e; e < e + r; n++) {
                        this.append(t[n]);
                    }
                    return this
                }
                ,
                t.prototype.length = function () {
                    return this.value.length
                }
                ,
                t.prototype.charAt = function (t) {
                    return this.value.charAt(t)
                }
                ,
                t.prototype.deleteCharAt = function (t) {
                    this.value = this.value.substr(0, t) + this.value.substring(t + 1)
                }
                ,
                t.prototype.setCharAt = function (t, e) {
                    this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
                }
                ,
                t.prototype.substring = function (t, e) {
                    return this.value.substring(t, e)
                }
                ,
                t.prototype.setLengthToZero = function () {
                    this.value = ""
                }
                ,
                t.prototype.toString = function () {
                    return this.value
                }
                ,
                t.prototype.insert = function (t, e) {
                    this.value = this.value.substring(0, t) + e + this.value.substring(t)
                }
                ,
                t
        }(), k = function () {
            function t(t, e, r, n) {
                if (this.width = t,
                    this.height = e,
                    this.rowSize = r,
                    this.bits = n,
                null == e && (e = t),
                    this.height = e,
                t < 1 || e < 1) {
                    throw new h("Both dimensions must be greater than 0");
                }
                null == r && (r = Math.floor((t + 31) / 32)),
                    this.rowSize = r,
                null == n && (this.bits = new Int32Array(this.rowSize * this.height))
            }

            return t.parseFromBooleanArray = function (e) {
                for (var r = e.length, n = e[0].length, o = new t(n, r), i = 0; i < r; i++) {
                    for (var a = e[i], s = 0; s < n; s++) {
                        a[s] && o.set(s, i);
                    }
                }
                return o
            }
                ,
                t.parseFromString = function (e, r, n) {
                    if (null === e) {
                        throw new h("stringRepresentation cannot be null");
                    }
                    for (var o = new Array(e.length), i = 0, a = 0, s = -1, u = 0, c = 0; c < e.length;) {
                        if ("\n" === e.charAt(c) || "\r" === e.charAt(c)) {
                            if (i > a) {
                                if (-1 === s) {
                                    s = i - a;
                                } else if (i - a !== s) {
                                    throw new h("row lengths do not match");
                                }
                                a = i,
                                    u++
                            }
                            c++
                        } else if (e.substring(c, c + r.length) === r) {
                            c += r.length,
                                o[i] = !0,
                                i++;
                        } else {
                            if (e.substring(c, c + n.length) !== n) {
                                throw new h("illegal character encountered: " + e.substring(c));
                            }
                            c += n.length,
                                o[i] = !1,
                                i++
                        }
                    }
                    if (i > a) {
                        if (-1 === s) {
                            s = i - a;
                        } else if (i - a !== s) {
                            throw new h("row lengths do not match");
                        }
                        u++
                    }
                    for (var f = new t(s, u), l = 0; l < i; l++) {
                        o[l] && f.set(Math.floor(l % s), Math.floor(l / s));
                    }
                    return f
                }
                ,
                t.prototype.get = function (t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    return 0 != (this.bits[r] >>> (31 & t) & 1)
                }
                ,
                t.prototype.set = function (t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] |= 1 << (31 & t) & 4294967295
                }
                ,
                t.prototype.unset = function (t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] &= ~(1 << (31 & t) & 4294967295)
                }
                ,
                t.prototype.flip = function (t, e) {
                    var r = e * this.rowSize + Math.floor(t / 32);
                    this.bits[r] ^= 1 << (31 & t) & 4294967295
                }
                ,
                t.prototype.xor = function (t) {
                    if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize
                        !== t.getRowSize()) {
                        throw new h("input matrix dimensions do not match");
                    }
                    for (var e = new I(Math.floor(this.width / 32) + 1), r = this.rowSize, n = this.bits, o = 0,
                        i = this.height; o < i; o++) {
                        for (var a = o * r, s = t.getRow(o, e).getBitArray(), u = 0; u < r; u++) {
                            n[a + u] ^= s[u]
                        }
                    }
                }
                ,
                t.prototype.clear = function () {
                    for (var t = this.bits, e = t.length, r = 0; r < e; r++) {
                        t[r] = 0
                    }
                }
                ,
                t.prototype.setRegion = function (t, e, r, n) {
                    if (e < 0 || t < 0) {
                        throw new h("Left and top must be nonnegative");
                    }
                    if (n < 1 || r < 1) {
                        throw new h("Height and width must be at least 1");
                    }
                    var o = t + r
                        , i = e + n;
                    if (i > this.height || o > this.width) {
                        throw new h("The region must fit inside the matrix");
                    }
                    for (var a = this.rowSize, s = this.bits, u = e; u < i; u++) {
                        for (var c = u * a, f = t; f < o; f++) {
                            s[c + Math.floor(f / 32)] |= 1 << (31 & f) & 4294967295
                        }
                    }
                }
                ,
                t.prototype.getRow = function (t, e) {
                    null == e || e.getSize() < this.width ? e = new I(this.width) : e.clear();
                    for (var r = this.rowSize, n = this.bits, o = t * r, i = 0; i < r; i++) {
                        e.setBulk(32 * i, n[o + i]);
                    }
                    return e
                }
                ,
                t.prototype.setRow = function (t, e) {
                    w.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
                }
                ,
                t.prototype.rotate180 = function () {
                    for (var t = this.getWidth(), e = this.getHeight(), r = new I(t), n = new I(t), o = 0,
                        i = Math.floor((e + 1) / 2); o < i; o++) {
                        r = this.getRow(o, r),
                            n = this.getRow(e - 1 - o, n),
                            r.reverse(),
                            n.reverse(),
                            this.setRow(o, n),
                            this.setRow(e - 1 - o, r)
                    }
                }
                ,
                t.prototype.getEnclosingRectangle = function () {
                    for (var t = this.width, e = this.height, r = this.rowSize, n = this.bits, o = t, i = e, a = -1,
                        s = -1, u = 0; u < e; u++) {
                        for (var c = 0; c < r; c++) {
                            var f = n[u * r + c];
                            if (0 !== f) {
                                if (u < i && (i = u),
                                u > s && (s = u),
                                32 * c < o) {
                                    for (var h = 0; 0 == (f << 31 - h & 4294967295);) {
                                        h++;
                                    }
                                    32 * c + h < o && (o = 32 * c + h)
                                }
                                if (32 * c + 31 > a) {
                                    for (h = 31; f >>> h == 0;) {
                                        h--;
                                    }
                                    32 * c + h > a && (a = 32 * c + h)
                                }
                            }
                        }
                    }
                    return a < o || s < i ? null : Int32Array.from([o, i, a - o + 1, s - i + 1])
                }
                ,
                t.prototype.getTopLeftOnBit = function () {
                    for (var t = this.rowSize, e = this.bits, r = 0; r < e.length && 0 === e[r];) {
                        r++;
                    }
                    if (r === e.length) {
                        return null;
                    }
                    for (var n = r / t, o = r % t * 32, i = e[r], a = 0; 0 == (i << 31 - a & 4294967295);) {
                        a++;
                    }
                    return o += a,
                        Int32Array.from([o, n])
                }
                ,
                t.prototype.getBottomRightOnBit = function () {
                    for (var t = this.rowSize, e = this.bits, r = e.length - 1; r >= 0 && 0 === e[r];) {
                        r--;
                    }
                    if (r < 0) {
                        return null;
                    }
                    for (var n = Math.floor(r / t), o = 32 * Math.floor(r % t), i = e[r], a = 31; i >>> a == 0;) {
                        a--;
                    }
                    return o += a,
                        Int32Array.from([o, n])
                }
                ,
                t.prototype.getWidth = function () {
                    return this.width
                }
                ,
                t.prototype.getHeight = function () {
                    return this.height
                }
                ,
                t.prototype.getRowSize = function () {
                    return this.rowSize
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && A.equals(
                        this.bits, r.bits)
                }
                ,
                t.prototype.hashCode = function () {
                    var t = this.width;
                    return t = 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize)
                        + A.hashCode(this.bits)
                }
                ,
                t.prototype.toString = function (t, e, r) {
                    return void 0 === t && (t = "X "),
                    void 0 === e && (e = "  "),
                    void 0 === r && (r = "\n"),
                        this.buildToString(t, e, r)
                }
                ,
                t.prototype.buildToString = function (t, e, r) {
                    for (var n = new F, o = 0, i = this.height; o < i; o++) {
                        for (var a = 0, s = this.width; a < s; a++) {
                            n.append(this.get(a, o) ? t : e);
                        }
                        n.append(r)
                    }
                    return n.toString()
                }
                ,
                t.prototype.clone = function () {
                    return new t(this.width, this.height, this.rowSize, this.bits.slice())
                }
                ,
                t
        }(), x = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), V = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return x(e, t),
                e.getNotFoundInstance = function () {
                    return new e
                }
                ,
                e.kind = "NotFoundException",
                e
        }(s), H = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), U = function (t) {
            function e(r) {
                var n = t.call(this, r) || this;
                return n.luminances = e.EMPTY,
                    n.buckets = new Int32Array(e.LUMINANCE_BUCKETS),
                    n
            }

            return H(e, t),
                e.prototype.getBlackRow = function (t, r) {
                    var n = this.getLuminanceSource()
                        , o = n.getWidth();
                    null == r || r.getSize() < o ? r = new I(o) : r.clear(),
                        this.initArrays(o);
                    for (var i = n.getRow(t, this.luminances), a = this.buckets, s = 0; s < o; s++) {
                        a[(255 & i[s]) >> e.LUMINANCE_SHIFT]++;
                    }
                    var u = e.estimateBlackPoint(a);
                    if (o < 3) {
                        for (s = 0; s < o; s++) {
                            (255 & i[s]) < u && r.set(s);
                        }
                    } else {
                        var c = 255 & i[0]
                            , f = 255 & i[1];
                        for (s = 1; s < o - 1; s++) {
                            var h = 255 & i[s + 1];
                            (4 * f - c - h) / 2 < u && r.set(s),
                                c = f,
                                f = h
                        }
                    }
                    return r
                }
                ,
                e.prototype.getBlackMatrix = function () {
                    var t = this.getLuminanceSource()
                        , r = t.getWidth()
                        , n = t.getHeight()
                        , o = new k(r, n);
                    this.initArrays(r);
                    for (var i = this.buckets, a = 1; a < 5; a++) {
                        for (var s = Math.floor(n * a / 5), u = t.getRow(s, this.luminances), c = Math.floor(4 * r / 5),
                            f = Math.floor(r / 5); f < c; f++) {
                            i[(255 & u[f]) >> e.LUMINANCE_SHIFT]++
                        }
                    }
                    var h = e.estimateBlackPoint(i)
                        , l = t.getMatrix();
                    for (a = 0; a < n; a++) {
                        var d = a * r;
                        for (f = 0; f < r; f++) {
                            (255 & l[d + f]) < h && o.set(f, a)
                        }
                    }
                    return o
                }
                ,
                e.prototype.createBinarizer = function (t) {
                    return new e(t)
                }
                ,
                e.prototype.initArrays = function (t) {
                    this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                    for (var r = this.buckets, n = 0; n < e.LUMINANCE_BUCKETS; n++) {
                        r[n] = 0
                    }
                }
                ,
                e.estimateBlackPoint = function (t) {
                    for (var r = t.length, n = 0, o = 0, i = 0, a = 0; a < r; a++) {
                        t[a] > i && (o = a,
                            i = t[a]),
                        t[a] > n && (n = t[a]);
                    }
                    var s = 0
                        , u = 0;
                    for (a = 0; a < r; a++) {
                        var c = a - o;
                        (d = t[a] * c * c) > u && (s = a,
                            u = d)
                    }
                    if (o > s) {
                        var f = o;
                        o = s,
                            s = f
                    }
                    if (s - o <= r / 16) {
                        throw new V;
                    }
                    var h = s - 1
                        , l = -1;
                    for (a = s - 1; a > o; a--) {
                        var d, p = a - o;
                        (d = p * p * (s - a) * (n - t[a])) > l && (h = a,
                            l = d)
                    }
                    return h << e.LUMINANCE_SHIFT
                }
                ,
                e.LUMINANCE_BITS = 5,
                e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS,
                e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS,
                e.EMPTY = Uint8ClampedArray.from([0]),
                e
        }(g), G = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), X = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.matrix = null,
                    r
            }

            return G(e, t),
                e.prototype.getBlackMatrix = function () {
                    if (null !== this.matrix) {
                        return this.matrix;
                    }
                    var r = this.getLuminanceSource()
                        , n = r.getWidth()
                        , o = r.getHeight();
                    if (n >= e.MINIMUM_DIMENSION && o >= e.MINIMUM_DIMENSION) {
                        var i = r.getMatrix()
                            , a = n >> e.BLOCK_SIZE_POWER;
                        0 != (n & e.BLOCK_SIZE_MASK) && a++;
                        var s = o >> e.BLOCK_SIZE_POWER;
                        0 != (o & e.BLOCK_SIZE_MASK) && s++;
                        var u = e.calculateBlackPoints(i, a, s, n, o)
                            , c = new k(n, o);
                        e.calculateThresholdForBlock(i, a, s, n, o, u, c),
                            this.matrix = c
                    } else {
                        this.matrix = t.prototype.getBlackMatrix.call(this);
                    }
                    return this.matrix
                }
                ,
                e.prototype.createBinarizer = function (t) {
                    return new e(t)
                }
                ,
                e.calculateThresholdForBlock = function (t, r, n, o, i, a, s) {
                    for (var u = i - e.BLOCK_SIZE, c = o - e.BLOCK_SIZE, f = 0; f < n; f++) {
                        var h = f << e.BLOCK_SIZE_POWER;
                        h > u && (h = u);
                        for (var l = e.cap(f, 2, n - 3), d = 0; d < r; d++) {
                            var p = d << e.BLOCK_SIZE_POWER;
                            p > c && (p = c);
                            for (var g = e.cap(d, 2, r - 3), w = 0, y = -2; y <= 2; y++) {
                                var v = a[l + y];
                                w += v[g - 2] + v[g - 1] + v[g] + v[g + 1] + v[g + 2]
                            }
                            var _ = w / 25;
                            e.thresholdBlock(t, p, h, _, o, s)
                        }
                    }
                }
                ,
                e.cap = function (t, e, r) {
                    return t < e ? e : t > r ? r : t
                }
                ,
                e.thresholdBlock = function (t, r, n, o, i, a) {
                    for (var s = 0, u = n * i + r; s < e.BLOCK_SIZE; s++,
                        u += i) {
                        for (var c = 0; c < e.BLOCK_SIZE; c++) {
                            (255 & t[u + c]) <= o && a.set(r + c, n + s)
                        }
                    }
                }
                ,
                e.calculateBlackPoints = function (t, r, n, o, i) {
                    for (var a = i - e.BLOCK_SIZE, s = o - e.BLOCK_SIZE, u = new Array(n), c = 0; c < n; c++) {
                        u[c] = new Int32Array(r);
                        var f = c << e.BLOCK_SIZE_POWER;
                        f > a && (f = a);
                        for (var h = 0; h < r; h++) {
                            var l = h << e.BLOCK_SIZE_POWER;
                            l > s && (l = s);
                            for (var d = 0, p = 255, g = 0, w = 0, y = f * o + l; w < e.BLOCK_SIZE; w++,
                                y += o) {
                                for (var v = 0; v < e.BLOCK_SIZE; v++) {
                                    var _ = 255 & t[y + v];
                                    d += _,
                                    _ < p && (p = _),
                                    _ > g && (g = _)
                                }
                                if (g - p > e.MIN_DYNAMIC_RANGE) {
                                    for (w++,
                                        y += o; w < e.BLOCK_SIZE; w++,
                                        y += o) {
                                        for (v = 0; v < e.BLOCK_SIZE; v++) {
                                            d += 255 & t[y + v]
                                        }
                                    }
                                }
                            }
                            var m = d >> 2 * e.BLOCK_SIZE_POWER;
                            if (g - p <= e.MIN_DYNAMIC_RANGE && (m = p / 2,
                            c > 0 && h > 0)) {
                                var C = (u[c - 1][h] + 2 * u[c][h - 1] + u[c - 1][h - 1]) / 4;
                                p < C && (m = C)
                            }
                            u[c][h] = m
                        }
                    }
                    return u
                }
                ,
                e.BLOCK_SIZE_POWER = 3,
                e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER,
                e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1,
                e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE,
                e.MIN_DYNAMIC_RANGE = 24,
                e
        }(U), W = function () {
            function t(t, e) {
                this.width = t,
                    this.height = e
            }

            return t.prototype.getWidth = function () {
                return this.width
            }
                ,
                t.prototype.getHeight = function () {
                    return this.height
                }
                ,
                t.prototype.isCropSupported = function () {
                    return !1
                }
                ,
                t.prototype.crop = function (t, e, r, n) {
                    throw new P("This luminance source does not support cropping.")
                }
                ,
                t.prototype.isRotateSupported = function () {
                    return !1
                }
                ,
                t.prototype.rotateCounterClockwise = function () {
                    throw new P("This luminance source does not support rotation by 90 degrees.")
                }
                ,
                t.prototype.rotateCounterClockwise45 = function () {
                    throw new P("This luminance source does not support rotation by 45 degrees.")
                }
                ,
                t.prototype.toString = function () {
                    for (var t = new Uint8ClampedArray(this.width), e = new F, r = 0; r < this.height; r++) {
                        for (var n = this.getRow(r, t), o = 0; o < this.width; o++) {
                            var i = 255 & n[o]
                                , a = void 0;
                            a = i < 64 ? "#" : i < 128 ? "+" : i < 192 ? "." : " ",
                                e.append(a)
                        }
                        e.append("\n")
                    }
                    return e.toString()
                }
                ,
                t
        }(), z = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), j = function (t) {
            function e(e) {
                var r = t.call(this, e.getWidth(), e.getHeight()) || this;
                return r.delegate = e,
                    r
            }

            return z(e, t),
                e.prototype.getRow = function (t, e) {
                    for (var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0; o < n; o++) {
                        r[o] = 255 - (255 & r[o]);
                    }
                    return r
                }
                ,
                e.prototype.getMatrix = function () {
                    for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(),
                        r = new Uint8ClampedArray(e), n = 0; n < e; n++) {
                        r[n] = 255 - (255 & t[n]);
                    }
                    return r
                }
                ,
                e.prototype.isCropSupported = function () {
                    return this.delegate.isCropSupported()
                }
                ,
                e.prototype.crop = function (t, r, n, o) {
                    return new e(this.delegate.crop(t, r, n, o))
                }
                ,
                e.prototype.isRotateSupported = function () {
                    return this.delegate.isRotateSupported()
                }
                ,
                e.prototype.invert = function () {
                    return this.delegate
                }
                ,
                e.prototype.rotateCounterClockwise = function () {
                    return new e(this.delegate.rotateCounterClockwise())
                }
                ,
                e.prototype.rotateCounterClockwise45 = function () {
                    return new e(this.delegate.rotateCounterClockwise45())
                }
                ,
                e
        }(W), Y = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), Z = function (t) {
            function e(r) {
                var n = t.call(this, r.width, r.height) || this;
                return n.canvas = r,
                    n.tempCanvasElement = null,
                    n.buffer = e.makeBufferFromCanvasImageData(r),
                    n
            }

            return Y(e, t),
                e.makeBufferFromCanvasImageData = function (t) {
                    var r = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                    return e.toGrayscaleBuffer(r.data, t.width, t.height)
                }
                ,
                e.toGrayscaleBuffer = function (t, r, n) {
                    var o = new Uint8ClampedArray(r * n);
                    if (e.FRAME_INDEX = !e.FRAME_INDEX,
                        e.FRAME_INDEX) {
                        for (var i = 0, a = 0, s = t.length; i < s; i += 4,
                            a++) {
                            var u = void 0;
                            if (0 === t[i + 3]) {
                                u = 255;
                            } else {
                                u = 306 * t[i] + 601 * t[i + 1] + 117 * t[i + 2] + 512 >> 10;
                            }
                            o[a] = u
                        }
                    } else {
                        i = 0,
                            a = 0;
                        for (var c = t.length; i < c; i += 4,
                            a++) {
                            u = void 0;
                            if (0 === t[i + 3]) {
                                u = 255;
                            } else {
                                u = 306 * t[i] + 601 * t[i + 1] + 117 * t[i + 2] + 512 >> 10;
                            }
                            o[a] = 255 - u
                        }
                    }
                    return o
                }
                ,
                e.prototype.getRow = function (t, e) {
                    if (t < 0 || t >= this.getHeight()) {
                        throw new h("Requested row is outside the image: " + t);
                    }
                    var r = this.getWidth()
                        , n = t * r;
                    return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(
                        r)),
                        e.set(this.buffer.slice(n, n + r))),
                        e
                }
                ,
                e.prototype.getMatrix = function () {
                    return this.buffer
                }
                ,
                e.prototype.isCropSupported = function () {
                    return !0
                }
                ,
                e.prototype.crop = function (e, r, n, o) {
                    return t.prototype.crop.call(this, e, r, n, o),
                        this
                }
                ,
                e.prototype.isRotateSupported = function () {
                    return !0
                }
                ,
                e.prototype.rotateCounterClockwise = function () {
                    return this.rotate(-90),
                        this
                }
                ,
                e.prototype.rotateCounterClockwise45 = function () {
                    return this.rotate(-45),
                        this
                }
                ,
                e.prototype.getTempCanvasElement = function () {
                    if (null === this.tempCanvasElement) {
                        var t = this.canvas.ownerDocument.createElement("canvas");
                        t.width = this.canvas.width,
                            t.height = this.canvas.height,
                            this.tempCanvasElement = t
                    }
                    return this.tempCanvasElement
                }
                ,
                e.prototype.rotate = function (t) {
                    var r = this.getTempCanvasElement()
                        , n = r.getContext("2d")
                        , o = t * e.DEGREE_TO_RADIANS
                        , i = this.canvas.width
                        , a = this.canvas.height
                        , s = Math.ceil(Math.abs(Math.cos(o)) * i + Math.abs(Math.sin(o)) * a)
                        , u = Math.ceil(Math.abs(Math.sin(o)) * i + Math.abs(Math.cos(o)) * a);
                    return r.width = s,
                        r.height = u,
                        n.translate(s / 2, u / 2),
                        n.rotate(o),
                        n.drawImage(this.canvas, i / -2, a / -2),
                        this.buffer = e.makeBufferFromCanvasImageData(r),
                        this
                }
                ,
                e.prototype.invert = function () {
                    return new j(this)
                }
                ,
                e.DEGREE_TO_RADIANS = Math.PI / 180,
                e.FRAME_INDEX = !0,
                e
        }(W), K = function () {
            function t(t, e, r) {
                this.deviceId = t,
                    this.label = e,
                    this.kind = "videoinput",
                    this.groupId = r || void 0
            }

            return t.prototype.toJSON = function () {
                return {
                    kind: this.kind,
                    groupId: this.groupId,
                    deviceId: this.deviceId,
                    label: this.label
                }
            }
                ,
                t
        }(), q = function (t, e, r, n) {
            return new (r || (r = Promise))((function (o, i) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value,
                            e instanceof r ? e : new r((function (t) {
                                    t(e)
                                }
                            ))).then(a, s)
                    }

                    u((n = n.apply(t, e || [])).next())
                }
            ))
        }, Q = function (t, e) {
            var r, n, o, i, a = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) {
                        throw o[1];
                    }
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }
            ),
                i;

            function s(i) {
                return function (s) {
                    return function (i) {
                        if (r) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; a;) {
                            try {
                                if (r = 1,
                                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, i[1])).done) {
                                    return o;
                                }
                                switch (n = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            n = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys,
                                        (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                    n = 0
                            } finally {
                                r = o = 0
                            }
                        }
                        if (5 & i[0]) {
                            throw i[1];
                        }
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }, J = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, $ = function () {
            function t(t, e, r) {
                void 0 === e && (e = 500),
                    this.reader = t,
                    this.timeBetweenScansMillis = e,
                    this._hints = r,
                    this._stopContinuousDecode = !1,
                    this._stopAsyncDecode = !1,
                    this._timeBetweenDecodingAttempts = 0
            }

            return Object.defineProperty(t.prototype, "hasNavigator", {
                get: function () {
                    return "undefined" != typeof navigator
                },
                enumerable: !1,
                configurable: !0
            }),
                Object.defineProperty(t.prototype, "isMediaDevicesSuported", {
                    get: function () {
                        return this.hasNavigator && !!navigator.mediaDevices
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "canEnumerateDevices", {
                    get: function () {
                        return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "timeBetweenDecodingAttempts", {
                    get: function () {
                        return this._timeBetweenDecodingAttempts
                    },
                    set: function (t) {
                        this._timeBetweenDecodingAttempts = t < 0 ? 0 : t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "hints", {
                    get: function () {
                        return this._hints
                    },
                    set: function (t) {
                        this._hints = t || null
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.listVideoInputDevices = function () {
                    return q(this, void 0, void 0, (function () {
                            var t, e, r, n, o, i, a, s, u, c, f, h;
                            return Q(this, (function (l) {
                                    switch (l.label) {
                                        case 0:
                                            if (!this.hasNavigator) {
                                                throw new Error("Can't enumerate devices, navigator is not present.");
                                            }
                                            if (!this.canEnumerateDevices) {
                                                throw new Error("Can't enumerate devices, method not supported.");
                                            }
                                            return [4, navigator.mediaDevices.enumerateDevices()];
                                        case 1:
                                            t = l.sent(),
                                                e = [];
                                            try {
                                                for (r = J(t),
                                                    n = r.next(); !n.done; n = r.next()) {
                                                    o = n.value,
                                                    "videoinput" === (i = "video" === o.kind ? "videoinput" : o.kind)
                                                    && (a = o.deviceId || o.id,
                                                        s = o.label || "Video device " + (e.length + 1),
                                                        u = o.groupId,
                                                        c = {
                                                            deviceId: a,
                                                            label: s,
                                                            kind: i,
                                                            groupId: u
                                                        },
                                                        e.push(c))
                                                }
                                            } catch (t) {
                                                f = {
                                                    error: t
                                                }
                                            } finally {
                                                try {
                                                    n && !n.done && (h = r.return) && h.call(r)
                                                } finally {
                                                    if (f) {
                                                        throw f.error
                                                    }
                                                }
                                            }
                                            return [2, e]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.getVideoInputDevices = function () {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.listVideoInputDevices()];
                                        case 1:
                                            return [2, t.sent().map((function (t) {
                                                    return new K(t.deviceId, t.label)
                                                }
                                            ))]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.findDeviceById = function (t) {
                    return q(this, void 0, void 0, (function () {
                            var e;
                            return Q(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.listVideoInputDevices()];
                                        case 1:
                                            return (e = r.sent()) ? [2, e.find((function (e) {
                                                    return e.deviceId === t
                                                }
                                            ))] : [2, null]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeFromInputVideoDevice = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.decodeOnceFromVideoDevice(t, e)];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeOnceFromVideoDevice = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            var r;
                            return Q(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.reset(),
                                                r = {
                                                    video: t ? {
                                                        deviceId: {
                                                            exact: t
                                                        }
                                                    } : {
                                                        facingMode: "environment"
                                                    }
                                                },
                                                [4, this.decodeOnceFromConstraints(r, e)];
                                        case 1:
                                            return [2, n.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeOnceFromConstraints = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            var r;
                            return Q(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, navigator.mediaDevices.getUserMedia(t)];
                                        case 1:
                                            return r = n.sent(),
                                                [4, this.decodeOnceFromStream(r, e)];
                                        case 2:
                                            return [2, n.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeOnceFromStream = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            var r;
                            return Q(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.reset(),
                                                [4, this.attachStreamToVideo(t, e)];
                                        case 1:
                                            return r = n.sent(),
                                                [4, this.decodeOnce(r)];
                                        case 2:
                                            return [2, n.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, r) {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.decodeFromVideoDevice(t, e, r)];
                                        case 1:
                                            return [2, n.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeFromVideoDevice = function (t, e, r) {
                    return q(this, void 0, void 0, (function () {
                            var n;
                            return Q(this, (function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return n = {
                                                video: t ? {
                                                    deviceId: {
                                                        exact: t
                                                    }
                                                } : {
                                                    facingMode: "environment"
                                                }
                                            },
                                                [4, this.decodeFromConstraints(n, e, r)];
                                        case 1:
                                            return [2, o.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeFromConstraints = function (t, e, r) {
                    return q(this, void 0, void 0, (function () {
                            var n;
                            return Q(this, (function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, navigator.mediaDevices.getUserMedia(t)];
                                        case 1:
                                            return n = o.sent(),
                                                [4, this.decodeFromStream(n, e, r)];
                                        case 2:
                                            return [2, o.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.decodeFromStream = function (t, e, r) {
                    return q(this, void 0, void 0, (function () {
                            var n;
                            return Q(this, (function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return this.reset(),
                                                [4, this.attachStreamToVideo(t, e)];
                                        case 1:
                                            return n = o.sent(),
                                                [4, this.decodeContinuously(n, r)];
                                        case 2:
                                            return [2, o.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.stopAsyncDecode = function () {
                    this._stopAsyncDecode = !0
                }
                ,
                t.prototype.stopContinuousDecode = function () {
                    this._stopContinuousDecode = !0
                }
                ,
                t.prototype.attachStreamToVideo = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            var r;
                            return Q(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return r = this.prepareVideoElement(e),
                                                this.addVideoSource(r, t),
                                                this.videoElement = r,
                                                this.stream = t,
                                                [4, this.playVideoOnLoadAsync(r)];
                                        case 1:
                                            return n.sent(),
                                                [2, r]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.playVideoOnLoadAsync = function (t) {
                    var e = this;
                    return new Promise((function (r, n) {
                            return e.playVideoOnLoad(t, (function () {
                                    return r()
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.playVideoOnLoad = function (t, e) {
                    var r = this;
                    this.videoEndedListener = function () {
                        return r.stopStreams()
                    }
                        ,
                        this.videoCanPlayListener = function () {
                            return r.tryPlayVideo(t)
                        }
                        ,
                        t.addEventListener("ended", this.videoEndedListener),
                        t.addEventListener("canplay", this.videoCanPlayListener),
                        t.addEventListener("playing", e),
                        this.tryPlayVideo(t)
                }
                ,
                t.prototype.isVideoPlaying = function (t) {
                    return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2
                }
                ,
                t.prototype.tryPlayVideo = function (t) {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (e) {
                                    switch (e.label) {
                                        case 0:
                                            if (this.isVideoPlaying(t)) {
                                                return console.warn("Trying to play video that is already playing."),
                                                    [2];
                                            }
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]),
                                                [4, t.play()];
                                        case 2:
                                            return e.sent(),
                                                [3, 4];
                                        case 3:
                                            return e.sent(),
                                                console.warn("It was not possible to play the video."),
                                                [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.getMediaElement = function (t, e) {
                    var r = document.getElementById(t);
                    if (!r) {
                        throw new c("element with id '" + t + "' not found");
                    }
                    if (r.nodeName.toLowerCase() !== e.toLowerCase()) {
                        throw new c("element with id '" + t + "' must be an " + e + " element");
                    }
                    return r
                }
                ,
                t.prototype.decodeFromImage = function (t, e) {
                    if (!t && !e) {
                        throw new c("either imageElement with a src set or an url must be provided");
                    }
                    return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t)
                }
                ,
                t.prototype.decodeFromVideo = function (t, e) {
                    if (!t && !e) {
                        throw new c("Either an element with a src set or an URL must be provided");
                    }
                    return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t)
                }
                ,
                t.prototype.decodeFromVideoContinuously = function (t, e, r) {
                    if (void 0 === t && void 0 === e) {
                        throw new c("Either an element with a src set or an URL must be provided");
                    }
                    return e && !t ? this.decodeFromVideoUrlContinuously(e, r)
                        : this.decodeFromVideoElementContinuously(t, r)
                }
                ,
                t.prototype.decodeFromImageElement = function (t) {
                    if (!t) {
                        throw new c("An image element must be provided.");
                    }
                    this.reset();
                    var e = this.prepareImageElement(t);
                    return this.imageElement = e,
                        this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e)
                }
                ,
                t.prototype.decodeFromVideoElement = function (t) {
                    var e = this._decodeFromVideoElementSetup(t);
                    return this._decodeOnLoadVideo(e)
                }
                ,
                t.prototype.decodeFromVideoElementContinuously = function (t, e) {
                    var r = this._decodeFromVideoElementSetup(t);
                    return this._decodeOnLoadVideoContinuously(r, e)
                }
                ,
                t.prototype._decodeFromVideoElementSetup = function (t) {
                    if (!t) {
                        throw new c("A video element must be provided.");
                    }
                    this.reset();
                    var e = this.prepareVideoElement(t);
                    return this.videoElement = e,
                        e
                }
                ,
                t.prototype.decodeFromImageUrl = function (t) {
                    if (!t) {
                        throw new c("An URL must be provided.");
                    }
                    this.reset();
                    var e = this.prepareImageElement();
                    this.imageElement = e;
                    var r = this._decodeOnLoadImage(e);
                    return e.src = t,
                        r
                }
                ,
                t.prototype.decodeFromVideoUrl = function (t) {
                    if (!t) {
                        throw new c("An URL must be provided.");
                    }
                    this.reset();
                    var e = this.prepareVideoElement()
                        , r = this.decodeFromVideoElement(e);
                    return e.src = t,
                        r
                }
                ,
                t.prototype.decodeFromVideoUrlContinuously = function (t, e) {
                    if (!t) {
                        throw new c("An URL must be provided.");
                    }
                    this.reset();
                    var r = this.prepareVideoElement()
                        , n = this.decodeFromVideoElementContinuously(r, e);
                    return r.src = t,
                        n
                }
                ,
                t.prototype._decodeOnLoadImage = function (t) {
                    var e = this;
                    return new Promise((function (r, n) {
                            e.imageLoadedListener = function () {
                                return e.decodeOnce(t, !1, !0).then(r, n)
                            }
                                ,
                                t.addEventListener("load", e.imageLoadedListener)
                        }
                    ))
                }
                ,
                t.prototype._decodeOnLoadVideo = function (t) {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.playVideoOnLoadAsync(t)];
                                        case 1:
                                            return e.sent(),
                                                [4, this.decodeOnce(t)];
                                        case 2:
                                            return [2, e.sent()]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype._decodeOnLoadVideoContinuously = function (t, e) {
                    return q(this, void 0, void 0, (function () {
                            return Q(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.playVideoOnLoadAsync(t)];
                                        case 1:
                                            return r.sent(),
                                                this.decodeContinuously(t, e),
                                                [2]
                                    }
                                }
                            ))
                        }
                    ))
                }
                ,
                t.prototype.isImageLoaded = function (t) {
                    return !!t.complete && 0 !== t.naturalWidth
                }
                ,
                t.prototype.prepareImageElement = function (t) {
                    var e;
                    return void 0 === t && ((e = document.createElement("img")).width = 200,
                        e.height = 200),
                    "string" == typeof t && (e = this.getMediaElement(t, "img")),
                    t instanceof HTMLImageElement && (e = t),
                        e
                }
                ,
                t.prototype.prepareVideoElement = function (t) {
                    var e;
                    return t || "undefined" == typeof document || ((e = document.createElement("video")).width = 200,
                        e.height = 200),
                    "string" == typeof t && (e = this.getMediaElement(t, "video")),
                    t instanceof HTMLVideoElement && (e = t),
                        e.setAttribute("autoplay", "true"),
                        e.setAttribute("muted", "true"),
                        e.setAttribute("playsinline", "true"),
                        e
                }
                ,
                t.prototype.decodeOnce = function (t, e, r) {
                    var n = this;
                    void 0 === e && (e = !0),
                    void 0 === r && (r = !0),
                        this._stopAsyncDecode = !1;
                    var o = function (i, a) {
                        if (n._stopAsyncDecode) {
                            return a(new V("Video stream has ended before any code could be detected.")),
                                void (n._stopAsyncDecode = void 0);
                        }
                        try {
                            i(n.decode(t))
                        } catch (t) {
                            if (e && t instanceof V || (t instanceof p || t instanceof b) && r) {
                                return setTimeout(o, n._timeBetweenDecodingAttempts, i, a);
                            }
                            a(t)
                        }
                    };
                    return new Promise((function (t, e) {
                            return o(t, e)
                        }
                    ))
                }
                ,
                t.prototype.decodeContinuously = function (t, e) {
                    var r = this;
                    this._stopContinuousDecode = !1;
                    var n = function () {
                        if (r._stopContinuousDecode) {
                            r._stopContinuousDecode = void 0;
                        } else {
                            try {
                                var o = r.decode(t);
                                e(o, null),
                                    setTimeout(n, r.timeBetweenScansMillis)
                            } catch (t) {
                                e(null, t),
                                (t instanceof p || t instanceof b || t instanceof V) && setTimeout(n,
                                    r._timeBetweenDecodingAttempts)
                            }
                        }
                    };
                    n()
                }
                ,
                t.prototype.decode = function (t) {
                    var e = this.createBinaryBitmap(t);
                    return this.decodeBitmap(e)
                }
                ,
                t.prototype.createBinaryBitmap = function (t) {
                    this.getCaptureCanvasContext(t),
                        t instanceof HTMLVideoElement ? this.drawFrameOnCanvas(t) : this.drawImageOnCanvas(t);
                    var e = this.getCaptureCanvas(t)
                        , r = new Z(e)
                        , n = new X(r);
                    return new l(n)
                }
                ,
                t.prototype.getCaptureCanvasContext = function (t) {
                    if (!this.captureCanvasContext) {
                        var e = this.getCaptureCanvas(t)
                            , r = void 0;
                        try {
                            r = e.getContext("2d", {
                                willReadFrequently: !0
                            })
                        } catch (t) {
                            r = e.getContext("2d")
                        }
                        this.captureCanvasContext = r
                    }
                    return this.captureCanvasContext
                }
                ,
                t.prototype.getCaptureCanvas = function (t) {
                    if (!this.captureCanvas) {
                        var e = this.createCaptureCanvas(t);
                        this.captureCanvas = e
                    }
                    return this.captureCanvas
                }
                ,
                t.prototype.drawFrameOnCanvas = function (t, e, r) {
                    void 0 === e && (e = {
                        sx: 0,
                        sy: 0,
                        sWidth: t.videoWidth,
                        sHeight: t.videoHeight,
                        dx: 0,
                        dy: 0,
                        dWidth: t.videoWidth,
                        dHeight: t.videoHeight
                    }),
                    void 0 === r && (r = this.captureCanvasContext),
                        r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight)
                }
                ,
                t.prototype.drawImageOnCanvas = function (t, e, r) {
                    void 0 === e && (e = {
                        sx: 0,
                        sy: 0,
                        sWidth: t.naturalWidth,
                        sHeight: t.naturalHeight,
                        dx: 0,
                        dy: 0,
                        dWidth: t.naturalWidth,
                        dHeight: t.naturalHeight
                    }),
                    void 0 === r && (r = this.captureCanvasContext),
                        r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight)
                }
                ,
                t.prototype.decodeBitmap = function (t) {
                    return this.reader.decode(t, this._hints)
                }
                ,
                t.prototype.createCaptureCanvas = function (t) {
                    if ("undefined" == typeof document) {
                        return this._destroyCaptureCanvas(),
                            null;
                    }
                    var e, r, n = document.createElement("canvas");
                    return void 0 !== t && (t instanceof HTMLVideoElement ? (e = t.videoWidth,
                        r = t.videoHeight) : t instanceof HTMLImageElement && (e = t.naturalWidth || t.width,
                        r = t.naturalHeight || t.height)),
                        n.style.width = e + "px",
                        n.style.height = r + "px",
                        n.width = e,
                        n.height = r,
                        n
                }
                ,
                t.prototype.stopStreams = function () {
                    this.stream && (this.stream.getVideoTracks().forEach((function (t) {
                            return t.stop()
                        }
                    )),
                        this.stream = void 0),
                    !1 === this._stopAsyncDecode && this.stopAsyncDecode(),
                    !1 === this._stopContinuousDecode && this.stopContinuousDecode()
                }
                ,
                t.prototype.reset = function () {
                    this.stopStreams(),
                        this._destroyVideoElement(),
                        this._destroyImageElement(),
                        this._destroyCaptureCanvas()
                }
                ,
                t.prototype._destroyVideoElement = function () {
                    this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener(
                        "ended", this.videoEndedListener),
                    void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing",
                        this.videoPlayingEventListener),
                    void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata",
                        this.videoCanPlayListener),
                        this.cleanVideoSource(this.videoElement),
                        this.videoElement = void 0)
                }
                ,
                t.prototype._destroyImageElement = function () {
                    this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener(
                        "load", this.imageLoadedListener),
                        this.imageElement.src = void 0,
                        this.imageElement.removeAttribute("src"),
                        this.imageElement = void 0)
                }
                ,
                t.prototype._destroyCaptureCanvas = function () {
                    this.captureCanvasContext = void 0,
                        this.captureCanvas = void 0
                }
                ,
                t.prototype.addVideoSource = function (t, e) {
                    try {
                        t.srcObject = e
                    } catch (r) {
                        t.src = URL.createObjectURL(e)
                    }
                }
                ,
                t.prototype.cleanVideoSource = function (t) {
                    try {
                        t.srcObject = null
                    } catch (e) {
                        t.src = ""
                    }
                    this.videoElement.removeAttribute("src")
                }
                ,
                t
        }(), tt = function () {
            function t(t, e, r, n, o, i) {
                void 0 === r && (r = null == e ? 0 : 8 * e.length),
                void 0 === i && (i = w.currentTimeMillis()),
                    this.text = t,
                    this.rawBytes = e,
                    this.numBits = r,
                    this.resultPoints = n,
                    this.format = o,
                    this.timestamp = i,
                    this.text = t,
                    this.rawBytes = e,
                    this.numBits = null == r ? null == e ? 0 : 8 * e.length : r,
                    this.resultPoints = n,
                    this.format = o,
                    this.resultMetadata = null,
                    this.timestamp = null == i ? w.currentTimeMillis() : i
            }

            return t.prototype.getText = function () {
                return this.text
            }
                ,
                t.prototype.getRawBytes = function () {
                    return this.rawBytes
                }
                ,
                t.prototype.getNumBits = function () {
                    return this.numBits
                }
                ,
                t.prototype.getResultPoints = function () {
                    return this.resultPoints
                }
                ,
                t.prototype.getBarcodeFormat = function () {
                    return this.format
                }
                ,
                t.prototype.getResultMetadata = function () {
                    return this.resultMetadata
                }
                ,
                t.prototype.putMetadata = function (t, e) {
                    null === this.resultMetadata && (this.resultMetadata = new Map),
                        this.resultMetadata.set(t, e)
                }
                ,
                t.prototype.putAllMetadata = function (t) {
                    null !== t && (null === this.resultMetadata ? this.resultMetadata = t
                        : this.resultMetadata = new Map(t))
                }
                ,
                t.prototype.addResultPoints = function (t) {
                    var e = this.resultPoints;
                    if (null === e) {
                        this.resultPoints = t;
                    } else if (null !== t && t.length > 0) {
                        var r = new Array(e.length + t.length);
                        w.arraycopy(e, 0, r, 0, e.length),
                            w.arraycopy(t, 0, r, e.length, t.length),
                            this.resultPoints = r
                    }
                }
                ,
                t.prototype.getTimestamp = function () {
                    return this.timestamp
                }
                ,
                t.prototype.toString = function () {
                    return this.text
                }
                ,
                t
        }();
        !function (t) {
            t[t.AZTEC = 0] = "AZTEC",
                t[t.CODABAR = 1] = "CODABAR",
                t[t.CODE_39 = 2] = "CODE_39",
                t[t.CODE_93 = 3] = "CODE_93",
                t[t.CODE_128 = 4] = "CODE_128",
                t[t.DATA_MATRIX = 5] = "DATA_MATRIX",
                t[t.EAN_8 = 6] = "EAN_8",
                t[t.EAN_13 = 7] = "EAN_13",
                t[t.ITF = 8] = "ITF",
                t[t.MAXICODE = 9] = "MAXICODE",
                t[t.PDF_417 = 10] = "PDF_417",
                t[t.QR_CODE = 11] = "QR_CODE",
                t[t.RSS_14 = 12] = "RSS_14",
                t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED",
                t[t.UPC_A = 14] = "UPC_A",
                t[t.UPC_E = 15] = "UPC_E",
                t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
        }(N || (N = {}));
        var et, rt = N;
        !function (t) {
            t[t.OTHER = 0] = "OTHER",
                t[t.ORIENTATION = 1] = "ORIENTATION",
                t[t.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS",
                t[t.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL",
                t[t.ISSUE_NUMBER = 4] = "ISSUE_NUMBER",
                t[t.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE",
                t[t.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY",
                t[t.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION",
                t[t.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA",
                t[t.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE",
                t[t.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
        }(et || (et = {}));
        var nt, ot = et, it = function () {
            function t(t, e, r, n, o, i) {
                void 0 === o && (o = -1),
                void 0 === i && (i = -1),
                    this.rawBytes = t,
                    this.text = e,
                    this.byteSegments = r,
                    this.ecLevel = n,
                    this.structuredAppendSequenceNumber = o,
                    this.structuredAppendParity = i,
                    this.numBits = null == t ? 0 : 8 * t.length
            }

            return t.prototype.getRawBytes = function () {
                return this.rawBytes
            }
                ,
                t.prototype.getNumBits = function () {
                    return this.numBits
                }
                ,
                t.prototype.setNumBits = function (t) {
                    this.numBits = t
                }
                ,
                t.prototype.getText = function () {
                    return this.text
                }
                ,
                t.prototype.getByteSegments = function () {
                    return this.byteSegments
                }
                ,
                t.prototype.getECLevel = function () {
                    return this.ecLevel
                }
                ,
                t.prototype.getErrorsCorrected = function () {
                    return this.errorsCorrected
                }
                ,
                t.prototype.setErrorsCorrected = function (t) {
                    this.errorsCorrected = t
                }
                ,
                t.prototype.getErasures = function () {
                    return this.erasures
                }
                ,
                t.prototype.setErasures = function (t) {
                    this.erasures = t
                }
                ,
                t.prototype.getOther = function () {
                    return this.other
                }
                ,
                t.prototype.setOther = function (t) {
                    this.other = t
                }
                ,
                t.prototype.hasStructuredAppend = function () {
                    return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
                }
                ,
                t.prototype.getStructuredAppendParity = function () {
                    return this.structuredAppendParity
                }
                ,
                t.prototype.getStructuredAppendSequenceNumber = function () {
                    return this.structuredAppendSequenceNumber
                }
                ,
                t
        }(), at = function () {
            function t() {
            }

            return t.prototype.exp = function (t) {
                return this.expTable[t]
            }
                ,
                t.prototype.log = function (t) {
                    if (0 === t) {
                        throw new h;
                    }
                    return this.logTable[t]
                }
                ,
                t.addOrSubtract = function (t, e) {
                    return t ^ e
                }
                ,
                t
        }(), st = function () {
            function t(t, e) {
                if (0 === e.length) {
                    throw new h;
                }
                this.field = t;
                var r = e.length;
                if (r > 1 && 0 === e[0]) {
                    for (var n = 1; n < r && 0 === e[n];) {
                        n++;
                    }
                    n === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - n),
                        w.arraycopy(e, n, this.coefficients, 0, this.coefficients.length))
                } else {
                    this.coefficients = e
                }
            }

            return t.prototype.getCoefficients = function () {
                return this.coefficients
            }
                ,
                t.prototype.getDegree = function () {
                    return this.coefficients.length - 1
                }
                ,
                t.prototype.isZero = function () {
                    return 0 === this.coefficients[0]
                }
                ,
                t.prototype.getCoefficient = function (t) {
                    return this.coefficients[this.coefficients.length - 1 - t]
                }
                ,
                t.prototype.evaluateAt = function (t) {
                    if (0 === t) {
                        return this.getCoefficient(0);
                    }
                    var e, r = this.coefficients;
                    if (1 === t) {
                        e = 0;
                        for (var n = 0, o = r.length; n !== o; n++) {
                            var i = r[n];
                            e = at.addOrSubtract(e, i)
                        }
                        return e
                    }
                    e = r[0];
                    var a = r.length
                        , s = this.field;
                    for (n = 1; n < a; n++) {
                        e = at.addOrSubtract(s.multiply(t, e), r[n]);
                    }
                    return e
                }
                ,
                t.prototype.addOrSubtract = function (e) {
                    if (!this.field.equals(e.field)) {
                        throw new h("GenericGFPolys do not have same GenericGF field");
                    }
                    if (this.isZero()) {
                        return e;
                    }
                    if (e.isZero()) {
                        return this;
                    }
                    var r = this.coefficients
                        , n = e.coefficients;
                    if (r.length > n.length) {
                        var o = r;
                        r = n,
                            n = o
                    }
                    var i = new Int32Array(n.length)
                        , a = n.length - r.length;
                    w.arraycopy(n, 0, i, 0, a);
                    for (var s = a; s < n.length; s++) {
                        i[s] = at.addOrSubtract(r[s - a], n[s]);
                    }
                    return new t(this.field, i)
                }
                ,
                t.prototype.multiply = function (e) {
                    if (!this.field.equals(e.field)) {
                        throw new h("GenericGFPolys do not have same GenericGF field");
                    }
                    if (this.isZero() || e.isZero()) {
                        return this.field.getZero();
                    }
                    for (var r = this.coefficients, n = r.length, o = e.coefficients, i = o.length,
                        a = new Int32Array(n + i - 1), s = this.field, u = 0; u < n; u++) {
                        for (var c = r[u], f = 0; f < i; f++) {
                            a[u + f] = at.addOrSubtract(a[u + f], s.multiply(c, o[f]));
                        }
                    }
                    return new t(s, a)
                }
                ,
                t.prototype.multiplyScalar = function (e) {
                    if (0 === e) {
                        return this.field.getZero();
                    }
                    if (1 === e) {
                        return this;
                    }
                    for (var r = this.coefficients.length, n = this.field, o = new Int32Array(r), i = this.coefficients,
                        a = 0; a < r; a++) {
                        o[a] = n.multiply(i[a], e);
                    }
                    return new t(n, o)
                }
                ,
                t.prototype.multiplyByMonomial = function (e, r) {
                    if (e < 0) {
                        throw new h;
                    }
                    if (0 === r) {
                        return this.field.getZero();
                    }
                    for (var n = this.coefficients, o = n.length, i = new Int32Array(o + e), a = this.field, s = 0;
                        s < o; s++) {
                        i[s] = a.multiply(n[s], r);
                    }
                    return new t(a, i)
                }
                ,
                t.prototype.divide = function (t) {
                    if (!this.field.equals(t.field)) {
                        throw new h("GenericGFPolys do not have same GenericGF field");
                    }
                    if (t.isZero()) {
                        throw new h("Divide by 0");
                    }
                    for (var e = this.field, r = e.getZero(), n = this, o = t.getCoefficient(t.getDegree()),
                        i = e.inverse(o); n.getDegree() >= t.getDegree() && !n.isZero();) {
                        var a = n.getDegree() - t.getDegree()
                            , s = e.multiply(n.getCoefficient(n.getDegree()), i)
                            , u = t.multiplyByMonomial(a, s)
                            , c = e.buildMonomial(a, s);
                        r = r.addOrSubtract(c),
                            n = n.addOrSubtract(u)
                    }
                    return [r, n]
                }
                ,
                t.prototype.toString = function () {
                    for (var t = "", e = this.getDegree(); e >= 0; e--) {
                        var r = this.getCoefficient(e);
                        if (0 !== r) {
                            if (r < 0 ? (t += " - ",
                                r = -r) : t.length > 0 && (t += " + "),
                            0 === e || 1 !== r) {
                                var n = this.field.log(r);
                                0 === n ? t += "1" : 1 === n ? t += "a" : (t += "a^",
                                    t += n)
                            }
                            0 !== e && (1 === e ? t += "x" : (t += "x^",
                                t += e))
                        }
                    }
                    return t
                }
                ,
                t
        }(), ut = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), ct = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return ut(e, t),
                e.kind = "ArithmeticException",
                e
        }(s), ft = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), ht = function (t) {
            function e(e, r, n) {
                var o = t.call(this) || this;
                o.primitive = e,
                    o.size = r,
                    o.generatorBase = n;
                for (var i = new Int32Array(r), a = 1, s = 0; s < r; s++) {
                    i[s] = a,
                    (a *= 2) >= r && (a ^= e,
                        a &= r - 1);
                }
                o.expTable = i;
                var u = new Int32Array(r);
                for (s = 0; s < r - 1; s++) {
                    u[i[s]] = s;
                }
                return o.logTable = u,
                    o.zero = new st(o, Int32Array.from([0])),
                    o.one = new st(o, Int32Array.from([1])),
                    o
            }

            return ft(e, t),
                e.prototype.getZero = function () {
                    return this.zero
                }
                ,
                e.prototype.getOne = function () {
                    return this.one
                }
                ,
                e.prototype.buildMonomial = function (t, e) {
                    if (t < 0) {
                        throw new h;
                    }
                    if (0 === e) {
                        return this.zero;
                    }
                    var r = new Int32Array(t + 1);
                    return r[0] = e,
                        new st(this, r)
                }
                ,
                e.prototype.inverse = function (t) {
                    if (0 === t) {
                        throw new ct;
                    }
                    return this.expTable[this.size - this.logTable[t] - 1]
                }
                ,
                e.prototype.multiply = function (t, e) {
                    return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size
                        - 1)]
                }
                ,
                e.prototype.getSize = function () {
                    return this.size
                }
                ,
                e.prototype.getGeneratorBase = function () {
                    return this.generatorBase
                }
                ,
                e.prototype.toString = function () {
                    return "GF(0x" + E.toHexString(this.primitive) + "," + this.size + ")"
                }
                ,
                e.prototype.equals = function (t) {
                    return t === this
                }
                ,
                e.AZTEC_DATA_12 = new e(4201, 4096, 1),
                e.AZTEC_DATA_10 = new e(1033, 1024, 1),
                e.AZTEC_DATA_6 = new e(67, 64, 1),
                e.AZTEC_PARAM = new e(19, 16, 1),
                e.QR_CODE_FIELD_256 = new e(285, 256, 0),
                e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1),
                e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256,
                e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6,
                e
        }(at), lt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), dt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return lt(e, t),
                e.kind = "ReedSolomonException",
                e
        }(s), pt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), gt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return pt(e, t),
                e.kind = "IllegalStateException",
                e
        }(s), wt = function () {
            function t(t) {
                this.field = t
            }

            return t.prototype.decode = function (t, e) {
                for (var r = this.field, n = new st(r, t), o = new Int32Array(e), i = !0, a = 0; a < e; a++) {
                    var s = n.evaluateAt(r.exp(a + r.getGeneratorBase()));
                    o[o.length - 1 - a] = s,
                    0 !== s && (i = !1)
                }
                if (!i) {
                    var u = new st(r, o)
                        , c = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), u, e)
                        , f = c[0]
                        , h = c[1]
                        , l = this.findErrorLocations(f)
                        , d = this.findErrorMagnitudes(h, l);
                    for (a = 0; a < l.length; a++) {
                        var p = t.length - 1 - r.log(l[a]);
                        if (p < 0) {
                            throw new dt("Bad error location");
                        }
                        t[p] = ht.addOrSubtract(t[p], d[a])
                    }
                }
            }
                ,
                t.prototype.runEuclideanAlgorithm = function (t, e, r) {
                    if (t.getDegree() < e.getDegree()) {
                        var n = t;
                        t = e,
                            e = n
                    }
                    for (var o = this.field, i = t, a = e, s = o.getZero(), u = o.getOne();
                        a.getDegree() >= (r / 2 | 0);) {
                        var c = i
                            , f = s;
                        if (s = u,
                            (i = a).isZero()) {
                            throw new dt("r_{i-1} was zero");
                        }
                        a = c;
                        for (var h = o.getZero(), l = i.getCoefficient(i.getDegree()), d = o.inverse(l);
                            a.getDegree() >= i.getDegree() && !a.isZero();) {
                            var p = a.getDegree() - i.getDegree()
                                , g = o.multiply(a.getCoefficient(a.getDegree()), d);
                            h = h.addOrSubtract(o.buildMonomial(p, g)),
                                a = a.addOrSubtract(i.multiplyByMonomial(p, g))
                        }
                        if (u = h.multiply(s).addOrSubtract(f),
                        a.getDegree() >= i.getDegree()) {
                            throw new gt("Division algorithm failed to reduce polynomial?")
                        }
                    }
                    var w = u.getCoefficient(0);
                    if (0 === w) {
                        throw new dt("sigmaTilde(0) was zero");
                    }
                    var y = o.inverse(w);
                    return [u.multiplyScalar(y), a.multiplyScalar(y)]
                }
                ,
                t.prototype.findErrorLocations = function (t) {
                    var e = t.getDegree();
                    if (1 === e) {
                        return Int32Array.from([t.getCoefficient(1)]);
                    }
                    for (var r = new Int32Array(e), n = 0, o = this.field, i = 1; i < o.getSize() && n < e; i++) {
                        0 === t.evaluateAt(i) && (r[n] = o.inverse(i),
                            n++);
                    }
                    if (n !== e) {
                        throw new dt("Error locator degree does not match number of roots");
                    }
                    return r
                }
                ,
                t.prototype.findErrorMagnitudes = function (t, e) {
                    for (var r = e.length, n = new Int32Array(r), o = this.field, i = 0; i < r; i++) {
                        for (var a = o.inverse(e[i]), s = 1, u = 0; u < r; u++) {
                            if (i !== u) {
                                var c = o.multiply(e[u], a)
                                    , f = 0 == (1 & c) ? 1 | c : -2 & c;
                                s = o.multiply(s, f)
                            }
                        }
                        n[i] = o.multiply(t.evaluateAt(a), o.inverse(s)),
                        0 !== o.getGeneratorBase() && (n[i] = o.multiply(n[i], a))
                    }
                    return n
                }
                ,
                t
        }();
        !function (t) {
            t[t.UPPER = 0] = "UPPER",
                t[t.LOWER = 1] = "LOWER",
                t[t.MIXED = 2] = "MIXED",
                t[t.DIGIT = 3] = "DIGIT",
                t[t.PUNCT = 4] = "PUNCT",
                t[t.BINARY = 5] = "BINARY"
        }(nt || (nt = {}));
        var yt = function () {
            function t() {
            }

            return t.prototype.decode = function (e) {
                this.ddata = e;
                var r = e.getBits()
                    , n = this.extractBits(r)
                    , o = this.correctBits(n)
                    , i = t.convertBoolArrayToByteArray(o)
                    , a = t.getEncodedData(o)
                    , s = new it(i, a, null, null);
                return s.setNumBits(o.length),
                    s
            }
                ,
                t.highLevelDecode = function (t) {
                    return this.getEncodedData(t)
                }
                ,
                t.getEncodedData = function (e) {
                    for (var r = e.length, n = nt.UPPER, o = nt.UPPER, i = "", a = 0; a < r;) {
                        if (o === nt.BINARY) {
                            if (r - a < 5) {
                                break;
                            }
                            var s = t.readCode(e, a, 5);
                            if (a += 5,
                            0 === s) {
                                if (r - a < 11) {
                                    break;
                                }
                                s = t.readCode(e, a, 11) + 31,
                                    a += 11
                            }
                            for (var u = 0; u < s; u++) {
                                if (r - a < 8) {
                                    a = r;
                                    break
                                }
                                var c = t.readCode(e, a, 8);
                                i += L.castAsNonUtf8Char(c),
                                    a += 8
                            }
                            o = n
                        } else {
                            var f = o === nt.DIGIT ? 4 : 5;
                            if (r - a < f) {
                                break;
                            }
                            c = t.readCode(e, a, f);
                            a += f;
                            var h = t.getCharacter(o, c);
                            h.startsWith("CTRL_") ? (n = o,
                                o = t.getTable(h.charAt(5)),
                            "L" === h.charAt(6) && (n = o)) : (i += h,
                                o = n)
                        }
                    }
                    return i
                }
                ,
                t.getTable = function (t) {
                    switch (t) {
                        case "L":
                            return nt.LOWER;
                        case "P":
                            return nt.PUNCT;
                        case "M":
                            return nt.MIXED;
                        case "D":
                            return nt.DIGIT;
                        case "B":
                            return nt.BINARY;
                        default:
                            return nt.UPPER
                    }
                }
                ,
                t.getCharacter = function (e, r) {
                    switch (e) {
                        case nt.UPPER:
                            return t.UPPER_TABLE[r];
                        case nt.LOWER:
                            return t.LOWER_TABLE[r];
                        case nt.MIXED:
                            return t.MIXED_TABLE[r];
                        case nt.PUNCT:
                            return t.PUNCT_TABLE[r];
                        case nt.DIGIT:
                            return t.DIGIT_TABLE[r];
                        default:
                            throw new gt("Bad table")
                    }
                }
                ,
                t.prototype.correctBits = function (e) {
                    var r, n;
                    this.ddata.getNbLayers() <= 2 ? (n = 6,
                        r = ht.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (n = 8,
                        r = ht.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (n = 10,
                        r = ht.AZTEC_DATA_10) : (n = 12,
                        r = ht.AZTEC_DATA_12);
                    var o = this.ddata.getNbDatablocks()
                        , i = e.length / n;
                    if (i < o) {
                        throw new b;
                    }
                    for (var a = e.length % n, s = new Int32Array(i), u = 0; u < i; u++,
                        a += n) {
                        s[u] = t.readCode(e, a, n);
                    }
                    try {
                        new wt(r).decode(s, i - o)
                    } catch (t) {
                        throw new b(t)
                    }
                    var c = (1 << n) - 1
                        , f = 0;
                    for (u = 0; u < o; u++) {
                        if (0 === (d = s[u]) || d === c) {
                            throw new b;
                        }
                        1 !== d && d !== c - 1 || f++
                    }
                    var h = new Array(o * n - f)
                        , l = 0;
                    for (u = 0; u < o; u++) {
                        var d;
                        if (1 === (d = s[u]) || d === c - 1) {
                            h.fill(d > 1, l, l + n - 1),
                                l += n - 1;
                        } else {
                            for (var p = n - 1; p >= 0; --p) {
                                h[l++] = 0 != (d & 1 << p)
                            }
                        }
                    }
                    return h
                }
                ,
                t.prototype.extractBits = function (t) {
                    var e = this.ddata.isCompact()
                        , r = this.ddata.getNbLayers()
                        , n = (e ? 11 : 14) + 4 * r
                        , o = new Int32Array(n)
                        , i = new Array(this.totalBitsInLayer(r, e));
                    if (e) {
                        for (var a = 0; a < o.length; a++) {
                            o[a] = a;
                        }
                    } else {
                        var s = n + 1 + 2 * E.truncDivision(E.truncDivision(n, 2) - 1, 15)
                            , u = n / 2
                            , c = E.truncDivision(s, 2);
                        for (a = 0; a < u; a++) {
                            var f = a + E.truncDivision(a, 15);
                            o[u - a - 1] = c - f - 1,
                                o[u + a] = c + f + 1
                        }
                    }
                    a = 0;
                    for (var h = 0; a < r; a++) {
                        for (var l = 4 * (r - a) + (e ? 9 : 12), d = 2 * a, p = n - 1 - d, g = 0; g < l; g++) {
                            for (var w = 2 * g, y = 0; y < 2; y++) {
                                i[h + w + y] = t.get(o[d + y], o[d + g]),
                                    i[h + 2 * l + w + y] = t.get(o[d + g], o[p - y]),
                                    i[h + 4 * l + w + y] = t.get(o[p - y], o[p - g]),
                                    i[h + 6 * l + w + y] = t.get(o[p - g], o[d + y]);
                            }
                        }
                        h += 8 * l
                    }
                    return i
                }
                ,
                t.readCode = function (t, e, r) {
                    for (var n = 0, o = e; o < e + r; o++) {
                        n <<= 1,
                        t[o] && (n |= 1);
                    }
                    return n
                }
                ,
                t.readByte = function (e, r) {
                    var n = e.length - r;
                    return n >= 8 ? t.readCode(e, r, 8) : t.readCode(e, r, n) << 8 - n
                }
                ,
                t.convertBoolArrayToByteArray = function (e) {
                    for (var r = new Uint8Array((e.length + 7) / 8), n = 0; n < r.length; n++) {
                        r[n] = t.readByte(e, 8 * n);
                    }
                    return r
                }
                ,
                t.prototype.totalBitsInLayer = function (t, e) {
                    return ((e ? 88 : 112) + 16 * t) * t
                }
                ,
                t.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL",
                    "CTRL_BS"],
                t.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL",
                    "CTRL_BS"],
                t.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n",
                    "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~",
                    "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"],
                t.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*",
                    "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"],
                t.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL",
                    "CTRL_US"],
                t
        }()
            , vt = function () {
            function t() {
            }

            return t.round = function (t) {
                return isNaN(t) ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t
                >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
            }
                ,
                t.distance = function (t, e, r, n) {
                    var o = t - r
                        , i = e - n;
                    return Math.sqrt(o * o + i * i)
                }
                ,
                t.sum = function (t) {
                    for (var e = 0, r = 0, n = t.length; r !== n; r++) {
                        e += t[r]
                    }
                    return e
                }
                ,
                t
        }()
            , _t = function () {
            function t() {
            }

            return t.floatToIntBits = function (t) {
                return t
            }
                ,
                t.MAX_VALUE = Number.MAX_SAFE_INTEGER,
                t
        }()
            , mt = function () {
            function t(t, e) {
                this.x = t,
                    this.y = e
            }

            return t.prototype.getX = function () {
                return this.x
            }
                ,
                t.prototype.getY = function () {
                    return this.y
                }
                ,
                t.prototype.equals = function (e) {
                    if (e instanceof t) {
                        var r = e;
                        return this.x === r.x && this.y === r.y
                    }
                    return !1
                }
                ,
                t.prototype.hashCode = function () {
                    return 31 * _t.floatToIntBits(this.x) + _t.floatToIntBits(this.y)
                }
                ,
                t.prototype.toString = function () {
                    return "(" + this.x + "," + this.y + ")"
                }
                ,
                t.orderBestPatterns = function (t) {
                    var e, r, n, o = this.distance(t[0], t[1]), i = this.distance(t[1], t[2]),
                        a = this.distance(t[0], t[2]);
                    if (i >= o && i >= a ? (r = t[0],
                        e = t[1],
                        n = t[2]) : a >= i && a >= o ? (r = t[1],
                        e = t[0],
                        n = t[2]) : (r = t[2],
                        e = t[0],
                        n = t[1]),
                    this.crossProductZ(e, r, n) < 0) {
                        var s = e;
                        e = n,
                            n = s
                    }
                    t[0] = e,
                        t[1] = r,
                        t[2] = n
                }
                ,
                t.distance = function (t, e) {
                    return vt.distance(t.x, t.y, e.x, e.y)
                }
                ,
                t.crossProductZ = function (t, e, r) {
                    var n = e.x
                        , o = e.y;
                    return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n)
                }
                ,
                t
        }()
            , Ct = function () {
            function t(t, e) {
                this.bits = t,
                    this.points = e
            }

            return t.prototype.getBits = function () {
                return this.bits
            }
                ,
                t.prototype.getPoints = function () {
                    return this.points
                }
                ,
                t
        }()
            , At = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Et = function (t) {
            function e(e, r, n, o, i) {
                var a = t.call(this, e, r) || this;
                return a.compact = n,
                    a.nbDatablocks = o,
                    a.nbLayers = i,
                    a
            }

            return At(e, t),
                e.prototype.getNbLayers = function () {
                    return this.nbLayers
                }
                ,
                e.prototype.getNbDatablocks = function () {
                    return this.nbDatablocks
                }
                ,
                e.prototype.isCompact = function () {
                    return this.compact
                }
                ,
                e
        }(Ct)
            , It = function () {
            function t(e, r, n, o) {
                this.image = e,
                    this.height = e.getHeight(),
                    this.width = e.getWidth(),
                null == r && (r = t.INIT_SIZE),
                null == n && (n = e.getWidth() / 2 | 0),
                null == o && (o = e.getHeight() / 2 | 0);
                var i = r / 2 | 0;
                if (this.leftInit = n - i,
                    this.rightInit = n + i,
                    this.upInit = o - i,
                    this.downInit = o + i,
                this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
                    throw new V
                }
            }

            return t.prototype.detect = function () {
                for (var t = this.leftInit, e = this.rightInit, r = this.upInit, n = this.downInit, o = !1, i = !0,
                    a = !1, s = !1, u = !1, c = !1, f = !1, h = this.width, l = this.height; i;) {
                    i = !1;
                    for (var d = !0; (d || !s) && e < h;) {
                        (d = this.containsBlackPoint(r, n, e, !1)) ? (e++,
                            i = !0,
                            s = !0) : s || e++;
                    }
                    if (e >= h) {
                        o = !0;
                        break
                    }
                    for (var p = !0; (p || !u) && n < l;) {
                        (p = this.containsBlackPoint(t, e, n, !0)) ? (n++,
                            i = !0,
                            u = !0) : u || n++;
                    }
                    if (n >= l) {
                        o = !0;
                        break
                    }
                    for (var g = !0; (g || !c) && t >= 0;) {
                        (g = this.containsBlackPoint(r, n, t, !1)) ? (t--,
                            i = !0,
                            c = !0) : c || t--;
                    }
                    if (t < 0) {
                        o = !0;
                        break
                    }
                    for (var w = !0; (w || !f) && r >= 0;) {
                        (w = this.containsBlackPoint(t, e, r, !0)) ? (r--,
                            i = !0,
                            f = !0) : f || r--;
                    }
                    if (r < 0) {
                        o = !0;
                        break
                    }
                    i && (a = !0)
                }
                if (!o && a) {
                    for (var y = e - t, v = null, _ = 1; null === v && _ < y; _++) {
                        v = this.getBlackPointOnSegment(t, n - _, t + _, n);
                    }
                    if (null == v) {
                        throw new V;
                    }
                    var m = null;
                    for (_ = 1; null === m && _ < y; _++) {
                        m = this.getBlackPointOnSegment(t, r + _, t + _, r);
                    }
                    if (null == m) {
                        throw new V;
                    }
                    var C = null;
                    for (_ = 1; null === C && _ < y; _++) {
                        C = this.getBlackPointOnSegment(e, r + _, e - _, r);
                    }
                    if (null == C) {
                        throw new V;
                    }
                    var A = null;
                    for (_ = 1; null === A && _ < y; _++) {
                        A = this.getBlackPointOnSegment(e, n - _, e - _, n);
                    }
                    if (null == A) {
                        throw new V;
                    }
                    return this.centerEdges(A, v, C, m)
                }
                throw new V
            }
                ,
                t.prototype.getBlackPointOnSegment = function (t, e, r, n) {
                    for (var o = vt.round(vt.distance(t, e, r, n)), i = (r - t) / o, a = (n - e) / o, s = this.image,
                        u = 0; u < o; u++) {
                        var c = vt.round(t + u * i)
                            , f = vt.round(e + u * a);
                        if (s.get(c, f)) {
                            return new mt(c, f)
                        }
                    }
                    return null
                }
                ,
                t.prototype.centerEdges = function (e, r, n, o) {
                    var i = e.getX()
                        , a = e.getY()
                        , s = r.getX()
                        , u = r.getY()
                        , c = n.getX()
                        , f = n.getY()
                        , h = o.getX()
                        , l = o.getY()
                        , d = t.CORR;
                    return i < this.width / 2 ? [new mt(h - d, l + d), new mt(s + d, u + d), new mt(c - d, f - d),
                        new mt(i + d, a - d)] : [new mt(h + d, l + d), new mt(s + d, u - d), new mt(c - d, f + d),
                        new mt(i - d, a - d)]
                }
                ,
                t.prototype.containsBlackPoint = function (t, e, r, n) {
                    var o = this.image;
                    if (n) {
                        for (var i = t; i <= e; i++) {
                            if (o.get(i, r)) {
                                return !0
                            }
                        }
                    } else {
                        for (var a = t; a <= e; a++) {
                            if (o.get(r, a)) {
                                return !0;
                            }
                        }
                    }
                    return !1
                }
                ,
                t.INIT_SIZE = 10,
                t.CORR = 1,
                t
        }()
            , St = function () {
            function t() {
            }

            return t.checkAndNudgePoints = function (t, e) {
                for (var r = t.getWidth(), n = t.getHeight(), o = !0, i = 0; i < e.length && o; i += 2) {
                    var a = Math.floor(e[i])
                        , s = Math.floor(e[i + 1]);
                    if (a < -1 || a > r || s < -1 || s > n) {
                        throw new V;
                    }
                    o = !1,
                        -1 === a ? (e[i] = 0,
                            o = !0) : a === r && (e[i] = r - 1,
                            o = !0),
                        -1 === s ? (e[i + 1] = 0,
                            o = !0) : s === n && (e[i + 1] = n - 1,
                            o = !0)
                }
                o = !0;
                for (i = e.length - 2; i >= 0 && o; i -= 2) {
                    a = Math.floor(e[i]),
                        s = Math.floor(e[i + 1]);
                    if (a < -1 || a > r || s < -1 || s > n) {
                        throw new V;
                    }
                    o = !1,
                        -1 === a ? (e[i] = 0,
                            o = !0) : a === r && (e[i] = r - 1,
                            o = !0),
                        -1 === s ? (e[i + 1] = 0,
                            o = !0) : s === n && (e[i + 1] = n - 1,
                            o = !0)
                }
            }
                ,
                t
        }()
            , Ot = function () {
            function t(t, e, r, n, o, i, a, s, u) {
                this.a11 = t,
                    this.a21 = e,
                    this.a31 = r,
                    this.a12 = n,
                    this.a22 = o,
                    this.a32 = i,
                    this.a13 = a,
                    this.a23 = s,
                    this.a33 = u
            }

            return t.quadrilateralToQuadrilateral = function (e, r, n, o, i, a, s, u, c, f, h, l, d, p, g, w) {
                var y = t.quadrilateralToSquare(e, r, n, o, i, a, s, u);
                return t.squareToQuadrilateral(c, f, h, l, d, p, g, w).times(y)
            }
                ,
                t.prototype.transformPoints = function (t) {
                    for (var e = t.length, r = this.a11, n = this.a12, o = this.a13, i = this.a21, a = this.a22,
                        s = this.a23, u = this.a31, c = this.a32, f = this.a33, h = 0; h < e; h += 2) {
                        var l = t[h]
                            , d = t[h + 1]
                            , p = o * l + s * d + f;
                        t[h] = (r * l + i * d + u) / p,
                            t[h + 1] = (n * l + a * d + c) / p
                    }
                }
                ,
                t.prototype.transformPointsWithValues = function (t, e) {
                    for (var r = this.a11, n = this.a12, o = this.a13, i = this.a21, a = this.a22, s = this.a23,
                        u = this.a31, c = this.a32, f = this.a33, h = t.length, l = 0; l < h; l++) {
                        var d = t[l]
                            , p = e[l]
                            , g = o * d + s * p + f;
                        t[l] = (r * d + i * p + u) / g,
                            e[l] = (n * d + a * p + c) / g
                    }
                }
                ,
                t.squareToQuadrilateral = function (e, r, n, o, i, a, s, u) {
                    var c = e - n + i - s
                        , f = r - o + a - u;
                    if (0 === c && 0 === f) {
                        return new t(n - e, i - n, e, o - r, a - o, r, 0, 0, 1);
                    }
                    var h = n - i
                        , l = s - i
                        , d = o - a
                        , p = u - a
                        , g = h * p - l * d
                        , w = (c * p - l * f) / g
                        , y = (h * f - c * d) / g;
                    return new t(n - e + w * n, s - e + y * s, e, o - r + w * o, u - r + y * u, r, w, y, 1)
                }
                ,
                t.quadrilateralToSquare = function (e, r, n, o, i, a, s, u) {
                    return t.squareToQuadrilateral(e, r, n, o, i, a, s, u).buildAdjoint()
                }
                ,
                t.prototype.buildAdjoint = function () {
                    return new t(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33,
                        this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33,
                        this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32,
                        this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23,
                        this.a11 * this.a22 - this.a12 * this.a21)
                }
                ,
                t.prototype.times = function (e) {
                    return new t(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13,
                        this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23,
                        this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33,
                        this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13,
                        this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23,
                        this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33,
                        this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13,
                        this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23,
                        this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
                }
                ,
                t
        }()
            , Tt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , bt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return Tt(e, t),
                e.prototype.sampleGrid = function (t, e, r, n, o, i, a, s, u, c, f, h, l, d, p, g, w, y, v) {
                    var _ = Ot.quadrilateralToQuadrilateral(n, o, i, a, s, u, c, f, h, l, d, p, g, w, y, v);
                    return this.sampleGridWithTransform(t, e, r, _)
                }
                ,
                e.prototype.sampleGridWithTransform = function (t, e, r, n) {
                    if (e <= 0 || r <= 0) {
                        throw new V;
                    }
                    for (var o = new k(e, r), i = new Float32Array(2 * e), a = 0; a < r; a++) {
                        for (var s = i.length, u = a + .5, c = 0; c < s; c += 2) {
                            i[c] = c / 2 + .5,
                                i[c + 1] = u;
                        }
                        n.transformPoints(i),
                            St.checkAndNudgePoints(t, i);
                        try {
                            for (c = 0; c < s; c += 2) {
                                t.get(Math.floor(i[c]), Math.floor(i[c + 1])) && o.set(c / 2, a)
                            }
                        } catch (t) {
                            throw new V
                        }
                    }
                    return o
                }
                ,
                e
        }(St)
            , Rt = function () {
            function t() {
            }

            return t.setGridSampler = function (e) {
                t.gridSampler = e
            }
                ,
                t.getInstance = function () {
                    return t.gridSampler
                }
                ,
                t.gridSampler = new bt,
                t
        }()
            , Nt = function () {
            function t(t, e) {
                this.x = t,
                    this.y = e
            }

            return t.prototype.toResultPoint = function () {
                return new mt(this.getX(), this.getY())
            }
                ,
                t.prototype.getX = function () {
                    return this.x
                }
                ,
                t.prototype.getY = function () {
                    return this.y
                }
                ,
                t
        }()
            , Dt = function () {
            function t(t) {
                this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]),
                    this.image = t
            }

            return t.prototype.detect = function () {
                return this.detectMirror(!1)
            }
                ,
                t.prototype.detectMirror = function (t) {
                    var e = this.getMatrixCenter()
                        , r = this.getBullsEyeCorners(e);
                    if (t) {
                        var n = r[0];
                        r[0] = r[2],
                            r[2] = n
                    }
                    this.extractParameters(r);
                    var o = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4],
                        r[(this.shift + 2) % 4], r[(this.shift + 3) % 4])
                        , i = this.getMatrixCornerPoints(r);
                    return new Et(o, i, this.compact, this.nbDataBlocks, this.nbLayers)
                }
                ,
                t.prototype.extractParameters = function (t) {
                    if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2])
                        && this.isValidPoint(t[3]))) {
                        throw new V;
                    }
                    var e = 2 * this.nbCenterLayers
                        , r = new Int32Array(
                        [this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e),
                            this.sampleLine(t[3], t[0], e)]);
                    this.shift = this.getRotation(r, e);
                    for (var n = 0, o = 0; o < 4; o++) {
                        var i = r[(this.shift + o) % 4];
                        this.compact ? (n <<= 7,
                            n += i >> 1 & 127) : (n <<= 10,
                            n += (i >> 2 & 992) + (i >> 1 & 31))
                    }
                    var a = this.getCorrectedParameterData(n, this.compact);
                    this.compact ? (this.nbLayers = 1 + (a >> 6),
                        this.nbDataBlocks = 1 + (63 & a)) : (this.nbLayers = 1 + (a >> 11),
                        this.nbDataBlocks = 1 + (2047 & a))
                }
                ,
                t.prototype.getRotation = function (t, e) {
                    var r = 0;
                    t.forEach((function (t, n, o) {
                            r = (r << 3) + ((t >> e - 2 << 1) + (1 & t))
                        }
                    )),
                        r = ((1 & r) << 11) + (r >> 1);
                    for (var n = 0; n < 4; n++) {
                        if (E.bitCount(r ^ this.EXPECTED_CORNER_BITS[n]) <= 2) {
                            return n;
                        }
                    }
                    throw new V
                }
                ,
                t.prototype.getCorrectedParameterData = function (t, e) {
                    var r, n;
                    e ? (r = 7,
                        n = 2) : (r = 10,
                        n = 4);
                    for (var o = r - n, i = new Int32Array(r), a = r - 1; a >= 0; --a) {
                        i[a] = 15 & t,
                            t >>= 4;
                    }
                    try {
                        new wt(ht.AZTEC_PARAM).decode(i, o)
                    } catch (t) {
                        throw new V
                    }
                    var s = 0;
                    for (a = 0; a < n; a++) {
                        s = (s << 4) + i[a];
                    }
                    return s
                }
                ,
                t.prototype.getBullsEyeCorners = function (t) {
                    var e = t
                        , r = t
                        , n = t
                        , o = t
                        , i = !0;
                    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                        var a = this.getFirstDifferent(e, i, 1, -1)
                            , s = this.getFirstDifferent(r, i, 1, 1)
                            , u = this.getFirstDifferent(n, i, -1, 1)
                            , c = this.getFirstDifferent(o, i, -1, -1);
                        if (this.nbCenterLayers > 2) {
                            var f = this.distancePoint(c, a) * this.nbCenterLayers / (this.distancePoint(o, e)
                                * (this.nbCenterLayers + 2));
                            if (f < .75 || f > 1.25 || !this.isWhiteOrBlackRectangle(a, s, u, c)) {
                                break
                            }
                        }
                        e = a,
                            r = s,
                            n = u,
                            o = c,
                            i = !i
                    }
                    if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) {
                        throw new V;
                    }
                    this.compact = 5 === this.nbCenterLayers;
                    var h = new mt(e.getX() + .5, e.getY() - .5)
                        , l = new mt(r.getX() + .5, r.getY() + .5)
                        , d = new mt(n.getX() - .5, n.getY() + .5)
                        , p = new mt(o.getX() - .5, o.getY() - .5);
                    return this.expandSquare([h, l, d, p], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
                }
                ,
                t.prototype.getMatrixCenter = function () {
                    var t, e, r, n;
                    try {
                        t = (u = new It(this.image).detect())[0],
                            e = u[1],
                            r = u[2],
                            n = u[3]
                    } catch (a) {
                        var o = this.image.getWidth() / 2
                            , i = this.image.getHeight() / 2;
                        t = this.getFirstDifferent(new Nt(o + 7, i - 7), !1, 1, -1).toResultPoint(),
                            e = this.getFirstDifferent(new Nt(o + 7, i + 7), !1, 1, 1).toResultPoint(),
                            r = this.getFirstDifferent(new Nt(o - 7, i + 7), !1, -1, 1).toResultPoint(),
                            n = this.getFirstDifferent(new Nt(o - 7, i - 7), !1, -1, -1).toResultPoint()
                    }
                    var a = vt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)
                        , s = vt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
                    try {
                        var u;
                        t = (u = new It(this.image, 15, a, s).detect())[0],
                            e = u[1],
                            r = u[2],
                            n = u[3]
                    } catch (o) {
                        t = this.getFirstDifferent(new Nt(a + 7, s - 7), !1, 1, -1).toResultPoint(),
                            e = this.getFirstDifferent(new Nt(a + 7, s + 7), !1, 1, 1).toResultPoint(),
                            r = this.getFirstDifferent(new Nt(a - 7, s + 7), !1, -1, 1).toResultPoint(),
                            n = this.getFirstDifferent(new Nt(a - 7, s - 7), !1, -1, -1).toResultPoint()
                    }
                    return a = vt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
                        s = vt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4),
                        new Nt(a, s)
                }
                ,
                t.prototype.getMatrixCornerPoints = function (t) {
                    return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
                }
                ,
                t.prototype.sampleGrid = function (t, e, r, n, o) {
                    var i = Rt.getInstance()
                        , a = this.getDimension()
                        , s = a / 2 - this.nbCenterLayers
                        , u = a / 2 + this.nbCenterLayers;
                    return i.sampleGrid(t, a, a, s, s, u, s, u, u, s, u, e.getX(), e.getY(), r.getX(), r.getY(),
                        n.getX(), n.getY(), o.getX(), o.getY())
                }
                ,
                t.prototype.sampleLine = function (t, e, r) {
                    for (var n = 0, o = this.distanceResultPoint(t, e), i = o / r, a = t.getX(), s = t.getY(),
                        u = i * (e.getX() - t.getX()) / o, c = i * (e.getY() - t.getY()) / o, f = 0; f < r; f++) {
                        this.image.get(vt.round(a + f * u), vt.round(s + f * c)) && (n |= 1 << r - f - 1);
                    }
                    return n
                }
                ,
                t.prototype.isWhiteOrBlackRectangle = function (t, e, r, n) {
                    t = new Nt(t.getX() - 3, t.getY() + 3),
                        e = new Nt(e.getX() - 3, e.getY() - 3),
                        r = new Nt(r.getX() + 3, r.getY() - 3),
                        n = new Nt(n.getX() + 3, n.getY() + 3);
                    var o = this.getColor(n, t);
                    if (0 === o) {
                        return !1;
                    }
                    var i = this.getColor(t, e);
                    return i === o && ((i = this.getColor(e, r)) === o && (i = this.getColor(r, n)) === o)
                }
                ,
                t.prototype.getColor = function (t, e) {
                    for (var r = this.distancePoint(t, e), n = (e.getX() - t.getX()) / r, o = (e.getY() - t.getY()) / r,
                        i = 0, a = t.getX(), s = t.getY(), u = this.image.get(t.getX(), t.getY()), c = Math.ceil(r),
                        f = 0; f < c; f++) {
                        a += n,
                            s += o,
                        this.image.get(vt.round(a), vt.round(s)) !== u && i++;
                    }
                    var h = i / r;
                    return h > .1 && h < .9 ? 0 : h <= .1 === u ? 1 : -1
                }
                ,
                t.prototype.getFirstDifferent = function (t, e, r, n) {
                    for (var o = t.getX() + r, i = t.getY() + n; this.isValid(o, i) && this.image.get(o, i) === e;) {
                        o += r,
                            i += n;
                    }
                    for (o -= r,
                        i -= n; this.isValid(o, i) && this.image.get(o, i) === e;) {
                        o += r;
                    }
                    for (o -= r; this.isValid(o, i) && this.image.get(o, i) === e;) {
                        i += n;
                    }
                    return new Nt(o, i -= n)
                }
                ,
                t.prototype.expandSquare = function (t, e, r) {
                    var n = r / (2 * e)
                        , o = t[0].getX() - t[2].getX()
                        , i = t[0].getY() - t[2].getY()
                        , a = (t[0].getX() + t[2].getX()) / 2
                        , s = (t[0].getY() + t[2].getY()) / 2
                        , u = new mt(a + n * o, s + n * i)
                        , c = new mt(a - n * o, s - n * i);
                    return o = t[1].getX() - t[3].getX(),
                        i = t[1].getY() - t[3].getY(),
                        a = (t[1].getX() + t[3].getX()) / 2,
                        s = (t[1].getY() + t[3].getY()) / 2,
                        [u, new mt(a + n * o, s + n * i), c, new mt(a - n * o, s - n * i)]
                }
                ,
                t.prototype.isValid = function (t, e) {
                    return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight()
                }
                ,
                t.prototype.isValidPoint = function (t) {
                    var e = vt.round(t.getX())
                        , r = vt.round(t.getY());
                    return this.isValid(e, r)
                }
                ,
                t.prototype.distancePoint = function (t, e) {
                    return vt.distance(t.getX(), t.getY(), e.getX(), e.getY())
                }
                ,
                t.prototype.distanceResultPoint = function (t, e) {
                    return vt.distance(t.getX(), t.getY(), e.getX(), e.getY())
                }
                ,
                t.prototype.getDimension = function () {
                    return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4
                        * this.nbLayers + 2 * (E.truncDivision(this.nbLayers - 4, 8) + 1) + 15
                }
                ,
                t
        }()
            , Mt = function () {
            function t() {
            }

            return t.prototype.decode = function (t, e) {
                void 0 === e && (e = null);
                var r = null
                    , n = new Dt(t.getBlackMatrix())
                    , o = null
                    , i = null;
                try {
                    o = (a = n.detectMirror(!1)).getPoints(),
                        this.reportFoundResultPoints(e, o),
                        i = (new yt).decode(a)
                } catch (t) {
                    r = t
                }
                if (null == i) {
                    try {
                        var a;
                        o = (a = n.detectMirror(!0)).getPoints(),
                            this.reportFoundResultPoints(e, o),
                            i = (new yt).decode(a)
                    } catch (t) {
                        if (null != r) {
                            throw r;
                        }
                        throw t
                    }
                }
                var s = new tt(i.getText(), i.getRawBytes(), i.getNumBits(), o, rt.AZTEC, w.currentTimeMillis())
                    , u = i.getByteSegments();
                null != u && s.putMetadata(ot.BYTE_SEGMENTS, u);
                var c = i.getECLevel();
                return null != c && s.putMetadata(ot.ERROR_CORRECTION_LEVEL, c),
                    s
            }
                ,
                t.prototype.reportFoundResultPoints = function (t, e) {
                    if (null != t) {
                        var r = t.get(O.NEED_RESULT_POINT_CALLBACK);
                        null != r && e.forEach((function (t, e, n) {
                                r.foundPossibleResultPoint(t)
                            }
                        ))
                    }
                }
                ,
                t.prototype.reset = function () {
                }
                ,
                t
        }()
            , Pt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e) {
                return void 0 === e && (e = 500),
                t.call(this, new Mt, e) || this
            }

            Pt(e, t)
        }($);
        var Bt = function () {
            function t() {
            }

            return t.prototype.decode = function (t, e) {
                try {
                    return this.doDecode(t, e)
                } catch (c) {
                    if (e && !0 === e.get(O.TRY_HARDER) && t.isRotateSupported()) {
                        var r = t.rotateCounterClockwise()
                            , n = this.doDecode(r, e)
                            , o = n.getResultMetadata()
                            , i = 270;
                        null !== o && !0 === o.get(ot.ORIENTATION) && (i += o.get(ot.ORIENTATION) % 360),
                            n.putMetadata(ot.ORIENTATION, i);
                        var a = n.getResultPoints();
                        if (null !== a) {
                            for (var s = r.getHeight(), u = 0; u < a.length; u++) {
                                a[u] = new mt(s - a[u].getY() - 1, a[u].getX());
                            }
                        }
                        return n
                    }
                    throw new V
                }
            }
                ,
                t.prototype.reset = function () {
                }
                ,
                t.prototype.doDecode = function (t, e) {
                    var r, n = t.getWidth(), o = t.getHeight(), i = new I(n), a = e && !0 === e.get(O.TRY_HARDER),
                        s = Math.max(1, o >> (a ? 8 : 5));
                    r = a ? o : 15;
                    for (var u = Math.trunc(o / 2), c = 0; c < r; c++) {
                        var f = Math.trunc((c + 1) / 2)
                            , h = u + s * (0 == (1 & c) ? f : -f);
                        if (h < 0 || h >= o) {
                            break;
                        }
                        try {
                            i = t.getBlackRow(h, i)
                        } catch (t) {
                            continue
                        }
                        for (var l = function (t) {
                            if (1 === t && (i.reverse(),
                            e && !0 === e.get(O.NEED_RESULT_POINT_CALLBACK))) {
                                var r = new Map;
                                e.forEach((function (t, e) {
                                        return r.set(e, t)
                                    }
                                )),
                                    r.delete(O.NEED_RESULT_POINT_CALLBACK),
                                    e = r
                            }
                            try {
                                var o = d.decodeRow(h, i, e);
                                if (1 === t) {
                                    o.putMetadata(ot.ORIENTATION, 180);
                                    var a = o.getResultPoints();
                                    null !== a && (a[0] = new mt(n - a[0].getX() - 1, a[0].getY()),
                                        a[1] = new mt(n - a[1].getX() - 1, a[1].getY()))
                                }
                                return {
                                    value: o
                                }
                            } catch (t) {
                            }
                        }, d = this, p = 0; p < 2; p++) {
                            var g = l(p);
                            if ("object" == typeof g) {
                                return g.value
                            }
                        }
                    }
                    throw new V
                }
                ,
                t.recordPattern = function (t, e, r) {
                    for (var n = r.length, o = 0; o < n; o++) {
                        r[o] = 0;
                    }
                    var i = t.getSize();
                    if (e >= i) {
                        throw new V;
                    }
                    for (var a = !t.get(e), s = 0, u = e; u < i;) {
                        if (t.get(u) !== a) {
                            r[s]++;
                        } else {
                            if (++s === n) {
                                break;
                            }
                            r[s] = 1,
                                a = !a
                        }
                        u++
                    }
                    if (s !== n && (s !== n - 1 || u !== i)) {
                        throw new V
                    }
                }
                ,
                t.recordPatternInReverse = function (e, r, n) {
                    for (var o = n.length, i = e.get(r); r > 0 && o >= 0;) {
                        e.get(--r) !== i && (o--,
                            i = !i);
                    }
                    if (o >= 0) {
                        throw new V;
                    }
                    t.recordPattern(e, r + 1, n)
                }
                ,
                t.patternMatchVariance = function (t, e, r) {
                    for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++) {
                        o += t[a],
                            i += e[a];
                    }
                    if (o < i) {
                        return Number.POSITIVE_INFINITY;
                    }
                    var s = o / i;
                    r *= s;
                    for (var u = 0, c = 0; c < n; c++) {
                        var f = t[c]
                            , h = e[c] * s
                            , l = f > h ? f - h : h - f;
                        if (l > r) {
                            return Number.POSITIVE_INFINITY;
                        }
                        u += l
                    }
                    return u / o
                }
                ,
                t
        }()
            , Lt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Ft = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return Lt(e, t),
                e.findStartPattern = function (t) {
                    for (var r = t.getSize(), n = t.getNextSet(0), o = 0, i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                        a = n, s = !1, u = n; u < r; u++) {
                        if (t.get(u) !== s) {
                            i[o]++;
                        } else {
                            if (5 === o) {
                                for (var c = e.MAX_AVG_VARIANCE, f = -1, h = e.CODE_START_A; h <= e.CODE_START_C; h++) {
                                    var l = Bt.patternMatchVariance(i, e.CODE_PATTERNS[h], e.MAX_INDIVIDUAL_VARIANCE);
                                    l < c && (c = l,
                                        f = h)
                                }
                                if (f >= 0 && t.isRange(Math.max(0, a - (u - a) / 2), a, !1)) {
                                    return Int32Array.from([a, u, f]);
                                }
                                a += i[0] + i[1],
                                    (i = i.slice(2, i.length - 1))[o - 1] = 0,
                                    i[o] = 0,
                                    o--
                            } else {
                                o++;
                            }
                            i[o] = 1,
                                s = !s
                        }
                    }
                    throw new V
                }
                ,
                e.decodeCode = function (t, r, n) {
                    Bt.recordPattern(t, n, r);
                    for (var o = e.MAX_AVG_VARIANCE, i = -1, a = 0; a < e.CODE_PATTERNS.length; a++) {
                        var s = e.CODE_PATTERNS[a]
                            , u = this.patternMatchVariance(r, s, e.MAX_INDIVIDUAL_VARIANCE);
                        u < o && (o = u,
                            i = a)
                    }
                    if (i >= 0) {
                        return i;
                    }
                    throw new V
                }
                ,
                e.prototype.decodeRow = function (t, r, n) {
                    var o, i = n && !0 === n.get(O.ASSUME_GS1), a = e.findStartPattern(r), s = a[2], u = 0,
                        c = new Uint8Array(20);
                    switch (c[u++] = s,
                        s) {
                        case e.CODE_START_A:
                            o = e.CODE_CODE_A;
                            break;
                        case e.CODE_START_B:
                            o = e.CODE_CODE_B;
                            break;
                        case e.CODE_START_C:
                            o = e.CODE_CODE_C;
                            break;
                        default:
                            throw new b
                    }
                    for (var f = !1, h = !1, l = "", d = a[0], g = a[1], w = Int32Array.from([0, 0, 0, 0, 0, 0]), y = 0,
                        v = 0, _ = s, m = 0, C = !0, A = !1, E = !1; !f;) {
                        var I = h;
                        switch (h = !1,
                            y = v,
                            v = e.decodeCode(r, w, g),
                            c[u++] = v,
                        v !== e.CODE_STOP && (C = !0),
                        v !== e.CODE_STOP && (_ += ++m * v),
                            d = g,
                            g += w.reduce((function (t, e) {
                                    return t + e
                                }
                            ), 0),
                            v) {
                            case e.CODE_START_A:
                            case e.CODE_START_B:
                            case e.CODE_START_C:
                                throw new b
                        }
                        switch (o) {
                            case e.CODE_CODE_A:
                                if (v < 64) {
                                    l += E === A ? String.fromCharCode(" ".charCodeAt(0) + v) : String.fromCharCode(
                                        " ".charCodeAt(0) + v + 128),
                                        E = !1;
                                } else if (v < 96) {
                                    l += E === A ? String.fromCharCode(v - 64) : String.fromCharCode(v + 64),
                                        E = !1;
                                } else {
                                    switch (v !== e.CODE_STOP && (C = !1),
                                        v) {
                                        case e.CODE_FNC_1:
                                            i && (0 === l.length ? l += "]C1" : l += String.fromCharCode(29));
                                            break;
                                        case e.CODE_FNC_2:
                                        case e.CODE_FNC_3:
                                            break;
                                        case e.CODE_FNC_4_A:
                                            !A && E ? (A = !0,
                                                E = !1) : A && E ? (A = !1,
                                                E = !1) : E = !0;
                                            break;
                                        case e.CODE_SHIFT:
                                            h = !0,
                                                o = e.CODE_CODE_B;
                                            break;
                                        case e.CODE_CODE_B:
                                            o = e.CODE_CODE_B;
                                            break;
                                        case e.CODE_CODE_C:
                                            o = e.CODE_CODE_C;
                                            break;
                                        case e.CODE_STOP:
                                            f = !0
                                    }
                                }
                                break;
                            case e.CODE_CODE_B:
                                if (v < 96) {
                                    l += E === A ? String.fromCharCode(" ".charCodeAt(0) + v) : String.fromCharCode(
                                        " ".charCodeAt(0) + v + 128),
                                        E = !1;
                                } else {
                                    switch (v !== e.CODE_STOP && (C = !1),
                                        v) {
                                        case e.CODE_FNC_1:
                                            i && (0 === l.length ? l += "]C1" : l += String.fromCharCode(29));
                                            break;
                                        case e.CODE_FNC_2:
                                        case e.CODE_FNC_3:
                                            break;
                                        case e.CODE_FNC_4_B:
                                            !A && E ? (A = !0,
                                                E = !1) : A && E ? (A = !1,
                                                E = !1) : E = !0;
                                            break;
                                        case e.CODE_SHIFT:
                                            h = !0,
                                                o = e.CODE_CODE_A;
                                            break;
                                        case e.CODE_CODE_A:
                                            o = e.CODE_CODE_A;
                                            break;
                                        case e.CODE_CODE_C:
                                            o = e.CODE_CODE_C;
                                            break;
                                        case e.CODE_STOP:
                                            f = !0
                                    }
                                }
                                break;
                            case e.CODE_CODE_C:
                                if (v < 100) {
                                    v < 10 && (l += "0"),
                                        l += v;
                                } else {
                                    switch (v !== e.CODE_STOP && (C = !1),
                                        v) {
                                        case e.CODE_FNC_1:
                                            i && (0 === l.length ? l += "]C1" : l += String.fromCharCode(29));
                                            break;
                                        case e.CODE_CODE_A:
                                            o = e.CODE_CODE_A;
                                            break;
                                        case e.CODE_CODE_B:
                                            o = e.CODE_CODE_B;
                                            break;
                                        case e.CODE_STOP:
                                            f = !0
                                    }
                                }
                        }
                        I && (o = o === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A)
                    }
                    var S = g - d;
                    if (g = r.getNextUnset(g),
                        !r.isRange(g, Math.min(r.getSize(), g + (g - d) / 2), !1)) {
                        throw new V;
                    }
                    if ((_ -= m * y) % 103 !== y) {
                        throw new p;
                    }
                    var T = l.length;
                    if (0 === T) {
                        throw new V;
                    }
                    T > 0 && C && (l = o === e.CODE_CODE_C ? l.substring(0, T - 2) : l.substring(0, T - 1));
                    for (var R = (a[1] + a[0]) / 2, N = d + S / 2, D = c.length, M = new Uint8Array(D), P = 0; P < D;
                        P++) {
                        M[P] = c[P];
                    }
                    var B = [new mt(R, t), new mt(N, t)];
                    return new tt(l, M, 0, B, rt.CODE_128, (new Date).getTime())
                }
                ,
                e.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]),
                    Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]),
                    Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]),
                    Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]),
                    Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]),
                    Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]),
                    Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]),
                    Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]),
                    Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]),
                    Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]),
                    Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]),
                    Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]),
                    Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]),
                    Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]),
                    Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]),
                    Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]),
                    Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]),
                    Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]),
                    Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]),
                    Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]),
                    Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]),
                    Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]),
                    Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]),
                    Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]),
                    Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]),
                    Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]),
                    Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]),
                    Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]),
                    Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]),
                    Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]),
                    Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]),
                    Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]),
                    Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]),
                    Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]),
                    Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]),
                    Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]),
                    Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]),
                    Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]),
                    Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]),
                    Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]),
                    Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]),
                    Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]),
                    Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]),
                    Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]),
                    Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]),
                    Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]),
                    Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]),
                    Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]),
                    Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]),
                    Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]),
                    Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]),
                    Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]),
                    Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]),
                    Int32Array.from([2, 3, 3, 1, 1, 1, 2])],
                e.MAX_AVG_VARIANCE = .25,
                e.MAX_INDIVIDUAL_VARIANCE = .7,
                e.CODE_SHIFT = 98,
                e.CODE_CODE_C = 99,
                e.CODE_CODE_B = 100,
                e.CODE_CODE_A = 101,
                e.CODE_FNC_1 = 102,
                e.CODE_FNC_2 = 97,
                e.CODE_FNC_3 = 96,
                e.CODE_FNC_4_A = 101,
                e.CODE_FNC_4_B = 100,
                e.CODE_START_A = 103,
                e.CODE_START_B = 104,
                e.CODE_START_C = 105,
                e.CODE_STOP = 106,
                e
        }(Bt)
            , kt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , xt = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Vt = function (t) {
            function e(e, r) {
                void 0 === e && (e = !1),
                void 0 === r && (r = !1);
                var n = t.call(this) || this;
                return n.usingCheckDigit = e,
                    n.extendedMode = r,
                    n.decodeRowResult = "",
                    n.counters = new Int32Array(9),
                    n
            }

            return kt(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    var o, i, a, s, u = this.counters;
                    u.fill(0),
                        this.decodeRowResult = "";
                    var c, f, h = e.findAsteriskPattern(r, u), l = r.getNextSet(h[1]), d = r.getSize();
                    do {
                        e.recordPattern(r, l, u);
                        var g = e.toNarrowWidePattern(u);
                        if (g < 0) {
                            throw new V;
                        }
                        c = e.patternToChar(g),
                            this.decodeRowResult += c,
                            f = l;
                        try {
                            for (var w = (o = void 0,
                                xt(u)), y = w.next(); !y.done; y = w.next()) {
                                l += y.value
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                y && !y.done && (i = w.return) && i.call(w)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        l = r.getNextSet(l)
                    } while ("*" !== c);
                    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                    var v, _ = 0;
                    try {
                        for (var m = xt(u), C = m.next(); !C.done; C = m.next()) {
                            _ += C.value
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            C && !C.done && (s = m.return) && s.call(m)
                        } finally {
                            if (a) {
                                throw a.error
                            }
                        }
                    }
                    if (l !== d && 2 * (l - f - _) < _) {
                        throw new V;
                    }
                    if (this.usingCheckDigit) {
                        for (var A = this.decodeRowResult.length - 1, E = 0, I = 0; I < A; I++) {
                            E += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(I));
                        }
                        if (this.decodeRowResult.charAt(A) !== e.ALPHABET_STRING.charAt(E % 43)) {
                            throw new p;
                        }
                        this.decodeRowResult = this.decodeRowResult.substring(0, A)
                    }
                    if (0 === this.decodeRowResult.length) {
                        throw new V;
                    }
                    v = this.extendedMode ? e.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                    var S = (h[1] + h[0]) / 2
                        , O = f + _ / 2;
                    return new tt(v, null, 0, [new mt(S, t), new mt(O, t)], rt.CODE_39, (new Date).getTime())
                }
                ,
                e.findAsteriskPattern = function (t, r) {
                    for (var n = t.getSize(), o = t.getNextSet(0), i = 0, a = o, s = !1, u = r.length, c = o; c < n;
                        c++) {
                        if (t.get(c) !== s) {
                            r[i]++;
                        } else {
                            if (i === u - 1) {
                                if (this.toNarrowWidePattern(r) === e.ASTERISK_ENCODING && t.isRange(
                                    Math.max(0, a - Math.floor((c - a) / 2)), a, !1)) {
                                    return [a, c];
                                }
                                a += r[0] + r[1],
                                    r.copyWithin(0, 2, 2 + i - 1),
                                    r[i - 1] = 0,
                                    r[i] = 0,
                                    i--
                            } else {
                                i++;
                            }
                            r[i] = 1,
                                s = !s
                        }
                    }
                    throw new V
                }
                ,
                e.toNarrowWidePattern = function (t) {
                    var e, r, n, o = t.length, i = 0;
                    do {
                        var a = 2147483647;
                        try {
                            for (var s = (e = void 0,
                                xt(t)), u = s.next(); !u.done; u = s.next()) {
                                (l = u.value) < a && l > i && (a = l)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (r = s.return) && r.call(s)
                            } finally {
                                if (e) {
                                    throw e.error
                                }
                            }
                        }
                        i = a,
                            n = 0;
                        for (var c = 0, f = 0, h = 0; h < o; h++) {
                            (l = t[h]) > i && (f |= 1 << o - 1 - h,
                                n++,
                                c += l)
                        }
                        if (3 === n) {
                            for (h = 0; h < o && n > 0; h++) {
                                var l;
                                if ((l = t[h]) > i && (n--,
                                2 * l >= c)) {
                                    return -1
                                }
                            }
                            return f
                        }
                    } while (n > 3);
                    return -1
                }
                ,
                e.patternToChar = function (t) {
                    for (var r = 0; r < e.CHARACTER_ENCODINGS.length; r++) {
                        if (e.CHARACTER_ENCODINGS[r] === t) {
                            return e.ALPHABET_STRING.charAt(r);
                        }
                    }
                    if (t === e.ASTERISK_ENCODING) {
                        return "*";
                    }
                    throw new V
                }
                ,
                e.decodeExtended = function (t) {
                    for (var e = t.length, r = "", n = 0; n < e; n++) {
                        var o = t.charAt(n);
                        if ("+" === o || "$" === o || "%" === o || "/" === o) {
                            var i = t.charAt(n + 1)
                                , a = "\0";
                            switch (o) {
                                case "+":
                                    if (!(i >= "A" && i <= "Z")) {
                                        throw new b;
                                    }
                                    a = String.fromCharCode(i.charCodeAt(0) + 32);
                                    break;
                                case "$":
                                    if (!(i >= "A" && i <= "Z")) {
                                        throw new b;
                                    }
                                    a = String.fromCharCode(i.charCodeAt(0) - 64);
                                    break;
                                case "%":
                                    if (i >= "A" && i <= "E") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 38);
                                    } else if (i >= "F" && i <= "J") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 11);
                                    } else if (i >= "K" && i <= "O") {
                                        a = String.fromCharCode(i.charCodeAt(0) + 16);
                                    } else if (i >= "P" && i <= "T") {
                                        a = String.fromCharCode(i.charCodeAt(0) + 43);
                                    } else if ("U" === i) {
                                        a = "\0";
                                    } else if ("V" === i) {
                                        a = "@";
                                    } else if ("W" === i) {
                                        a = "`";
                                    } else {
                                        if ("X" !== i && "Y" !== i && "Z" !== i) {
                                            throw new b;
                                        }
                                        a = ""
                                    }
                                    break;
                                case "/":
                                    if (i >= "A" && i <= "O") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 32);
                                    } else {
                                        if ("Z" !== i) {
                                            throw new b;
                                        }
                                        a = ":"
                                    }
                            }
                            r += a,
                                n++
                        } else {
                            r += o
                        }
                    }
                    return r
                }
                ,
                e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%",
                e.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13,
                    268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196,
                    168, 162, 138, 42],
                e.ASTERISK_ENCODING = 148,
                e
        }(Bt)
            , Ht = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Ut = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Gt = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.decodeRowResult = "",
                    e.counters = new Int32Array(6),
                    e
            }

            return Ht(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    var o, i, a, s, u, c, f = this.findAsteriskPattern(r), h = r.getNextSet(f[1]), l = r.getSize(),
                        d = this.counters;
                    d.fill(0),
                        this.decodeRowResult = "";
                    do {
                        e.recordPattern(r, h, d);
                        var p = this.toPattern(d);
                        if (p < 0) {
                            throw new V;
                        }
                        u = this.patternToChar(p),
                            this.decodeRowResult += u,
                            c = h;
                        try {
                            for (var g = (o = void 0,
                                Ut(d)), w = g.next(); !w.done; w = g.next()) {
                                h += w.value
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                w && !w.done && (i = g.return) && i.call(g)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        h = r.getNextSet(h)
                    } while ("*" !== u);
                    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                    var y = 0;
                    try {
                        for (var v = Ut(d), _ = v.next(); !_.done; _ = v.next()) {
                            y += _.value
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            _ && !_.done && (s = v.return) && s.call(v)
                        } finally {
                            if (a) {
                                throw a.error
                            }
                        }
                    }
                    if (h === l || !r.get(h)) {
                        throw new V;
                    }
                    if (this.decodeRowResult.length < 2) {
                        throw new V;
                    }
                    this.checkChecksums(this.decodeRowResult),
                        this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
                    var m = this.decodeExtended(this.decodeRowResult)
                        , C = (f[1] + f[0]) / 2
                        , A = c + y / 2;
                    return new tt(m, null, 0, [new mt(C, t), new mt(A, t)], rt.CODE_93, (new Date).getTime())
                }
                ,
                e.prototype.findAsteriskPattern = function (t) {
                    var r = t.getSize()
                        , n = t.getNextSet(0);
                    this.counters.fill(0);
                    for (var o = this.counters, i = n, a = !1, s = o.length, u = 0, c = n; c < r; c++) {
                        if (t.get(c) !== a) {
                            o[u]++;
                        } else {
                            if (u === s - 1) {
                                if (this.toPattern(o) === e.ASTERISK_ENCODING) {
                                    return new Int32Array([i, c]);
                                }
                                i += o[0] + o[1],
                                    o.copyWithin(0, 2, 2 + u - 1),
                                    o[u - 1] = 0,
                                    o[u] = 0,
                                    u--
                            } else {
                                u++;
                            }
                            o[u] = 1,
                                a = !a
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.toPattern = function (t) {
                    var e, r, n = 0;
                    try {
                        for (var o = Ut(t), i = o.next(); !i.done; i = o.next()) {
                            n += i.value
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    for (var a = 0, s = t.length, u = 0; u < s; u++) {
                        var c = Math.round(9 * t[u] / n);
                        if (c < 1 || c > 4) {
                            return -1;
                        }
                        if (0 == (1 & u)) {
                            for (var f = 0; f < c; f++) {
                                a = a << 1 | 1;
                            }
                        } else {
                            a <<= c
                        }
                    }
                    return a
                }
                ,
                e.prototype.patternToChar = function (t) {
                    for (var r = 0; r < e.CHARACTER_ENCODINGS.length; r++) {
                        if (e.CHARACTER_ENCODINGS[r] === t) {
                            return e.ALPHABET_STRING.charAt(r);
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.decodeExtended = function (t) {
                    for (var e = t.length, r = "", n = 0; n < e; n++) {
                        var o = t.charAt(n);
                        if (o >= "a" && o <= "d") {
                            if (n >= e - 1) {
                                throw new b;
                            }
                            var i = t.charAt(n + 1)
                                , a = "\0";
                            switch (o) {
                                case "d":
                                    if (!(i >= "A" && i <= "Z")) {
                                        throw new b;
                                    }
                                    a = String.fromCharCode(i.charCodeAt(0) + 32);
                                    break;
                                case "a":
                                    if (!(i >= "A" && i <= "Z")) {
                                        throw new b;
                                    }
                                    a = String.fromCharCode(i.charCodeAt(0) - 64);
                                    break;
                                case "b":
                                    if (i >= "A" && i <= "E") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 38);
                                    } else if (i >= "F" && i <= "J") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 11);
                                    } else if (i >= "K" && i <= "O") {
                                        a = String.fromCharCode(i.charCodeAt(0) + 16);
                                    } else if (i >= "P" && i <= "T") {
                                        a = String.fromCharCode(i.charCodeAt(0) + 43);
                                    } else if ("U" === i) {
                                        a = "\0";
                                    } else if ("V" === i) {
                                        a = "@";
                                    } else if ("W" === i) {
                                        a = "`";
                                    } else {
                                        if (!(i >= "X" && i <= "Z")) {
                                            throw new b;
                                        }
                                        a = String.fromCharCode(127)
                                    }
                                    break;
                                case "c":
                                    if (i >= "A" && i <= "O") {
                                        a = String.fromCharCode(i.charCodeAt(0) - 32);
                                    } else {
                                        if ("Z" !== i) {
                                            throw new b;
                                        }
                                        a = ":"
                                    }
                            }
                            r += a,
                                n++
                        } else {
                            r += o
                        }
                    }
                    return r
                }
                ,
                e.prototype.checkChecksums = function (t) {
                    var e = t.length;
                    this.checkOneChecksum(t, e - 2, 20),
                        this.checkOneChecksum(t, e - 1, 15)
                }
                ,
                e.prototype.checkOneChecksum = function (t, r, n) {
                    for (var o = 1, i = 0, a = r - 1; a >= 0; a--) {
                        i += o * e.ALPHABET_STRING.indexOf(t.charAt(a)),
                        ++o > n && (o = 1);
                    }
                    if (t.charAt(r) !== e.ALPHABET_STRING[i % 47]) {
                        throw new p
                    }
                }
                ,
                e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*",
                e.CHARACTER_ENCODINGS = [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394,
                    360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314,
                    302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350],
                e.ASTERISK_ENCODING = e.CHARACTER_ENCODINGS[47],
                e
        }(Bt)
            , Xt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Wt = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , zt = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.narrowLineWidth = -1,
                    e
            }

            return Xt(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    var o, i, a = this.decodeStart(r), s = this.decodeEnd(r), u = new F;
                    e.decodeMiddle(r, a[1], s[0], u);
                    var c = u.toString()
                        , f = null;
                    null != n && (f = n.get(O.ALLOWED_LENGTHS)),
                    null == f && (f = e.DEFAULT_ALLOWED_LENGTHS);
                    var h = c.length
                        , l = !1
                        , d = 0;
                    try {
                        for (var p = Wt(f), g = p.next(); !g.done; g = p.next()) {
                            var w = g.value;
                            if (h === w) {
                                l = !0;
                                break
                            }
                            w > d && (d = w)
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            g && !g.done && (i = p.return) && i.call(p)
                        } finally {
                            if (o) {
                                throw o.error
                            }
                        }
                    }
                    if (!l && h > d && (l = !0),
                        !l) {
                        throw new b;
                    }
                    var y = [new mt(a[1], t), new mt(s[0], t)];
                    return new tt(c, null, 0, y, rt.ITF, (new Date).getTime())
                }
                ,
                e.decodeMiddle = function (t, r, n, o) {
                    var i = new Int32Array(10)
                        , a = new Int32Array(5)
                        , s = new Int32Array(5);
                    for (i.fill(0),
                        a.fill(0),
                        s.fill(0); r < n;) {
                        Bt.recordPattern(t, r, i);
                        for (var u = 0; u < 5; u++) {
                            var c = 2 * u;
                            a[u] = i[c],
                                s[u] = i[c + 1]
                        }
                        var f = e.decodeDigit(a);
                        o.append(f.toString()),
                            f = this.decodeDigit(s),
                            o.append(f.toString()),
                            i.forEach((function (t) {
                                    r += t
                                }
                            ))
                    }
                }
                ,
                e.prototype.decodeStart = function (t) {
                    var r = e.skipWhiteSpace(t)
                        , n = e.findGuardPattern(t, r, e.START_PATTERN);
                    return this.narrowLineWidth = (n[1] - n[0]) / 4,
                        this.validateQuietZone(t, n[0]),
                        n
                }
                ,
                e.prototype.validateQuietZone = function (t, e) {
                    var r = 10 * this.narrowLineWidth;
                    r = r < e ? r : e;
                    for (var n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) {
                        r--;
                    }
                    if (0 !== r) {
                        throw new V
                    }
                }
                ,
                e.skipWhiteSpace = function (t) {
                    var e = t.getSize()
                        , r = t.getNextSet(0);
                    if (r === e) {
                        throw new V;
                    }
                    return r
                }
                ,
                e.prototype.decodeEnd = function (t) {
                    t.reverse();
                    try {
                        var r = e.skipWhiteSpace(t)
                            , n = void 0;
                        try {
                            n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[0])
                        } catch (o) {
                            o instanceof V && (n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[1]))
                        }
                        this.validateQuietZone(t, n[0]);
                        var o = n[0];
                        return n[0] = t.getSize() - n[1],
                            n[1] = t.getSize() - o,
                            n
                    } finally {
                        t.reverse()
                    }
                }
                ,
                e.findGuardPattern = function (t, r, n) {
                    var o = n.length
                        , i = new Int32Array(o)
                        , a = t.getSize()
                        , s = !1
                        , u = 0
                        , c = r;
                    i.fill(0);
                    for (var f = r; f < a; f++) {
                        if (t.get(f) !== s) {
                            i[u]++;
                        } else {
                            if (u === o - 1) {
                                if (Bt.patternMatchVariance(i, n, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
                                    return [c, f];
                                }
                                c += i[0] + i[1],
                                    w.arraycopy(i, 2, i, 0, u - 1),
                                    i[u - 1] = 0,
                                    i[u] = 0,
                                    u--
                            } else {
                                u++;
                            }
                            i[u] = 1,
                                s = !s
                        }
                    }
                    throw new V
                }
                ,
                e.decodeDigit = function (t) {
                    for (var r = e.MAX_AVG_VARIANCE, n = -1, o = e.PATTERNS.length, i = 0; i < o; i++) {
                        var a = e.PATTERNS[i]
                            , s = Bt.patternMatchVariance(t, a, e.MAX_INDIVIDUAL_VARIANCE);
                        s < r ? (r = s,
                            n = i) : s === r && (n = -1)
                    }
                    if (n >= 0) {
                        return n % 10;
                    }
                    throw new V
                }
                ,
                e.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]),
                    Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]),
                    Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]),
                    Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]),
                    Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]),
                    Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]),
                    Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]),
                    Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]),
                    Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]),
                    Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])],
                e.MAX_AVG_VARIANCE = .38,
                e.MAX_INDIVIDUAL_VARIANCE = .5,
                e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14],
                e.START_PATTERN = Int32Array.from([1, 1, 1, 1]),
                e.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])],
                e
        }(Bt)
            , jt = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Yt = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.decodeRowStringBuffer = "",
                    e
            }

            return jt(e, t),
                e.findStartGuardPattern = function (t) {
                    for (var r, n = !1, o = 0, i = Int32Array.from([0, 0, 0]); !n;) {
                        i = Int32Array.from([0, 0, 0]);
                        var a = (r = e.findGuardPattern(t, o, !1, this.START_END_PATTERN, i))[0]
                            , s = a - ((o = r[1]) - a);
                        s >= 0 && (n = t.isRange(s, a, !1))
                    }
                    return r
                }
                ,
                e.checkChecksum = function (t) {
                    return e.checkStandardUPCEANChecksum(t)
                }
                ,
                e.checkStandardUPCEANChecksum = function (t) {
                    var r = t.length;
                    if (0 === r) {
                        return !1;
                    }
                    var n = parseInt(t.charAt(r - 1), 10);
                    return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n
                }
                ,
                e.getStandardUPCEANChecksum = function (t) {
                    for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
                            throw new b;
                        }
                        r += o
                    }
                    r *= 3;
                    for (n = e - 2; n >= 0; n -= 2) {
                        var o;
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
                            throw new b;
                        }
                        r += o
                    }
                    return (1e3 - r) % 10
                }
                ,
                e.decodeEnd = function (t, r) {
                    return e.findGuardPattern(t, r, !1, e.START_END_PATTERN,
                        new Int32Array(e.START_END_PATTERN.length).fill(0))
                }
                ,
                e.findGuardPatternWithoutCounters = function (t, e, r, n) {
                    return this.findGuardPattern(t, e, r, n, new Int32Array(n.length))
                }
                ,
                e.findGuardPattern = function (t, r, n, o, i) {
                    for (var a = t.getSize(), s = 0, u = r = n ? t.getNextUnset(r) : t.getNextSet(r), c = o.length,
                        f = n, h = r; h < a; h++) {
                        if (t.get(h) !== f) {
                            i[s]++;
                        } else {
                            if (s === c - 1) {
                                if (Bt.patternMatchVariance(i, o, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
                                    return Int32Array.from([u, h]);
                                }
                                u += i[0] + i[1];
                                for (var l = i.slice(2, i.length), d = 0; d < s - 1; d++) {
                                    i[d] = l[d];
                                }
                                i[s - 1] = 0,
                                    i[s] = 0,
                                    s--
                            } else {
                                s++;
                            }
                            i[s] = 1,
                                f = !f
                        }
                    }
                    throw new V
                }
                ,
                e.decodeDigit = function (t, r, n, o) {
                    this.recordPattern(t, n, r);
                    for (var i = this.MAX_AVG_VARIANCE, a = -1, s = o.length, u = 0; u < s; u++) {
                        var c = o[u]
                            , f = Bt.patternMatchVariance(r, c, e.MAX_INDIVIDUAL_VARIANCE);
                        f < i && (i = f,
                            a = u)
                    }
                    if (a >= 0) {
                        return a;
                    }
                    throw new V
                }
                ,
                e.MAX_AVG_VARIANCE = .48,
                e.MAX_INDIVIDUAL_VARIANCE = .7,
                e.START_END_PATTERN = Int32Array.from([1, 1, 1]),
                e.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]),
                e.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]),
                e.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]),
                    Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]),
                    Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]),
                    Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])],
                e
        }(Bt)
            , Zt = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Kt = function () {
            function t() {
                this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5],
                    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                    this.decodeRowStringBuffer = ""
            }

            return t.prototype.decodeRow = function (e, r, n) {
                var o = this.decodeRowStringBuffer
                    , i = this.decodeMiddle(r, n, o)
                    , a = o.toString()
                    , s = t.parseExtensionString(a)
                    , u = [new mt((n[0] + n[1]) / 2, e), new mt(i, e)]
                    , c = new tt(a, null, 0, u, rt.UPC_EAN_EXTENSION, (new Date).getTime());
                return null != s && c.putAllMetadata(s),
                    c
            }
                ,
                t.prototype.decodeMiddle = function (e, r, n) {
                    var o, i, a = this.decodeMiddleCounters;
                    a[0] = 0,
                        a[1] = 0,
                        a[2] = 0,
                        a[3] = 0;
                    for (var s = e.getSize(), u = r[1], c = 0, f = 0; f < 5 && u < s; f++) {
                        var h = Yt.decodeDigit(e, a, u, Yt.L_AND_G_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + h % 10);
                        try {
                            for (var l = (o = void 0,
                                Zt(a)), d = l.next(); !d.done; d = l.next()) {
                                u += d.value
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (i = l.return) && i.call(l)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        h >= 10 && (c |= 1 << 4 - f),
                        4 !== f && (u = e.getNextSet(u),
                            u = e.getNextUnset(u))
                    }
                    if (5 !== n.length) {
                        throw new V;
                    }
                    var p = this.determineCheckDigit(c);
                    if (t.extensionChecksum(n.toString()) !== p) {
                        throw new V;
                    }
                    return u
                }
                ,
                t.extensionChecksum = function (t) {
                    for (var e = t.length, r = 0, n = e - 2; n >= 0; n -= 2) {
                        r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                    }
                    r *= 3;
                    for (n = e - 1; n >= 0; n -= 2) {
                        r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                    }
                    return (r *= 3) % 10
                }
                ,
                t.prototype.determineCheckDigit = function (t) {
                    for (var e = 0; e < 10; e++) {
                        if (t === this.CHECK_DIGIT_ENCODINGS[e]) {
                            return e;
                        }
                    }
                    throw new V
                }
                ,
                t.parseExtensionString = function (e) {
                    if (5 !== e.length) {
                        return null;
                    }
                    var r = t.parseExtension5String(e);
                    return null == r ? null : new Map([[ot.SUGGESTED_PRICE, r]])
                }
                ,
                t.parseExtension5String = function (t) {
                    var e;
                    switch (t.charAt(0)) {
                        case "0":
                            e = "£";
                            break;
                        case "5":
                            e = "$";
                            break;
                        case "9":
                            switch (t) {
                                case "90000":
                                    return null;
                                case "99991":
                                    return "0.00";
                                case "99990":
                                    return "Used"
                            }
                            e = "";
                            break;
                        default:
                            e = ""
                    }
                    var r = parseInt(t.substring(1))
                        , n = r % 100;
                    return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
                }
                ,
                t
        }()
            , qt = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Qt = function () {
            function t() {
                this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                    this.decodeRowStringBuffer = ""
            }

            return t.prototype.decodeRow = function (e, r, n) {
                var o = this.decodeRowStringBuffer
                    , i = this.decodeMiddle(r, n, o)
                    , a = o.toString()
                    , s = t.parseExtensionString(a)
                    , u = [new mt((n[0] + n[1]) / 2, e), new mt(i, e)]
                    , c = new tt(a, null, 0, u, rt.UPC_EAN_EXTENSION, (new Date).getTime());
                return null != s && c.putAllMetadata(s),
                    c
            }
                ,
                t.prototype.decodeMiddle = function (t, e, r) {
                    var n, o, i = this.decodeMiddleCounters;
                    i[0] = 0,
                        i[1] = 0,
                        i[2] = 0,
                        i[3] = 0;
                    for (var a = t.getSize(), s = e[1], u = 0, c = 0; c < 2 && s < a; c++) {
                        var f = Yt.decodeDigit(t, i, s, Yt.L_AND_G_PATTERNS);
                        r += String.fromCharCode("0".charCodeAt(0) + f % 10);
                        try {
                            for (var h = (n = void 0,
                                qt(i)), l = h.next(); !l.done; l = h.next()) {
                                s += l.value
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (o = h.return) && o.call(h)
                            } finally {
                                if (n) {
                                    throw n.error
                                }
                            }
                        }
                        f >= 10 && (u |= 1 << 1 - c),
                        1 !== c && (s = t.getNextSet(s),
                            s = t.getNextUnset(s))
                    }
                    if (2 !== r.length) {
                        throw new V;
                    }
                    if (parseInt(r.toString()) % 4 !== u) {
                        throw new V;
                    }
                    return s
                }
                ,
                t.parseExtensionString = function (t) {
                    return 2 !== t.length ? null : new Map([[ot.ISSUE_NUMBER, parseInt(t)]])
                }
                ,
                t
        }()
            , Jt = function () {
            function t() {
            }

            return t.decodeRow = function (t, e, r) {
                var n = Yt.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN,
                    new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
                try {
                    return (new Kt).decodeRow(t, e, n)
                } catch (r) {
                    return (new Qt).decodeRow(t, e, n)
                }
            }
                ,
                t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]),
                t
        }()
            , $t = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , te = function (t) {
            function e() {
                var r = t.call(this) || this;
                r.decodeRowStringBuffer = "",
                    e.L_AND_G_PATTERNS = e.L_PATTERNS.map((function (t) {
                            return Int32Array.from(t)
                        }
                    ));
                for (var n = 10; n < 20; n++) {
                    for (var o = e.L_PATTERNS[n - 10], i = new Int32Array(o.length), a = 0; a < o.length; a++) {
                        i[a] = o[o.length - a - 1];
                    }
                    e.L_AND_G_PATTERNS[n] = i
                }
                return r
            }

            return $t(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    var o = e.findStartGuardPattern(r)
                        , i = null == n ? null : n.get(O.NEED_RESULT_POINT_CALLBACK);
                    if (null != i) {
                        var a = new mt((o[0] + o[1]) / 2, t);
                        i.foundPossibleResultPoint(a)
                    }
                    var s = this.decodeMiddle(r, o, this.decodeRowStringBuffer)
                        , u = s.rowOffset
                        , c = s.resultString;
                    if (null != i) {
                        var f = new mt(u, t);
                        i.foundPossibleResultPoint(f)
                    }
                    var h = e.decodeEnd(r, u);
                    if (null != i) {
                        var l = new mt((h[0] + h[1]) / 2, t);
                        i.foundPossibleResultPoint(l)
                    }
                    var d = h[1]
                        , g = d + (d - h[0]);
                    if (g >= r.getSize() || !r.isRange(d, g, !1)) {
                        throw new V;
                    }
                    var w = c.toString();
                    if (w.length < 8) {
                        throw new b;
                    }
                    if (!e.checkChecksum(w)) {
                        throw new p;
                    }
                    var y = (o[1] + o[0]) / 2
                        , v = (h[1] + h[0]) / 2
                        , _ = this.getBarcodeFormat()
                        , m = [new mt(y, t), new mt(v, t)]
                        , C = new tt(w, null, 0, m, _, (new Date).getTime())
                        , A = 0;
                    try {
                        var E = Jt.decodeRow(t, r, h[1]);
                        C.putMetadata(ot.UPC_EAN_EXTENSION, E.getText()),
                            C.putAllMetadata(E.getResultMetadata()),
                            C.addResultPoints(E.getResultPoints()),
                            A = E.getText().length
                    } catch (t) {
                    }
                    var I = null == n ? null : n.get(O.ALLOWED_EAN_EXTENSIONS);
                    if (null != I) {
                        var S = !1;
                        for (var T in I) {
                            if (A.toString() === T) {
                                S = !0;
                                break
                            }
                        }
                        if (!S) {
                            throw new V
                        }
                    }
                    return _ === rt.EAN_13 || rt.UPC_A,
                        C
                }
                ,
                e.checkChecksum = function (t) {
                    return e.checkStandardUPCEANChecksum(t)
                }
                ,
                e.checkStandardUPCEANChecksum = function (t) {
                    var r = t.length;
                    if (0 === r) {
                        return !1;
                    }
                    var n = parseInt(t.charAt(r - 1), 10);
                    return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n
                }
                ,
                e.getStandardUPCEANChecksum = function (t) {
                    for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
                            throw new b;
                        }
                        r += o
                    }
                    r *= 3;
                    for (n = e - 2; n >= 0; n -= 2) {
                        var o;
                        if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o > 9) {
                            throw new b;
                        }
                        r += o
                    }
                    return (1e3 - r) % 10
                }
                ,
                e.decodeEnd = function (t, r) {
                    return e.findGuardPattern(t, r, !1, e.START_END_PATTERN,
                        new Int32Array(e.START_END_PATTERN.length).fill(0))
                }
                ,
                e
        }(Yt)
            , ee = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , re = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , ne = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                    e
            }

            return ee(e, t),
                e.prototype.decodeMiddle = function (t, r, n) {
                    var o, i, a, s, u = this.decodeMiddleCounters;
                    u[0] = 0,
                        u[1] = 0,
                        u[2] = 0,
                        u[3] = 0;
                    for (var c = t.getSize(), f = r[1], h = 0, l = 0; l < 6 && f < c; l++) {
                        var d = te.decodeDigit(t, u, f, te.L_AND_G_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + d % 10);
                        try {
                            for (var p = (o = void 0,
                                re(u)), g = p.next(); !g.done; g = p.next()) {
                                f += g.value
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                g && !g.done && (i = p.return) && i.call(p)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        d >= 10 && (h |= 1 << 5 - l)
                    }
                    n = e.determineFirstDigit(n, h),
                        f = te.findGuardPattern(t, f, !0, te.MIDDLE_PATTERN,
                            new Int32Array(te.MIDDLE_PATTERN.length).fill(0))[1];
                    for (l = 0; l < 6 && f < c; l++) {
                        d = te.decodeDigit(t, u, f, te.L_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + d);
                        try {
                            for (var w = (a = void 0,
                                re(u)), y = w.next(); !y.done; y = w.next()) {
                                f += y.value
                            }
                        } catch (t) {
                            a = {
                                error: t
                            }
                        } finally {
                            try {
                                y && !y.done && (s = w.return) && s.call(w)
                            } finally {
                                if (a) {
                                    throw a.error
                                }
                            }
                        }
                    }
                    return {
                        rowOffset: f,
                        resultString: n
                    }
                }
                ,
                e.prototype.getBarcodeFormat = function () {
                    return rt.EAN_13
                }
                ,
                e.determineFirstDigit = function (t, e) {
                    for (var r = 0; r < 10; r++) {
                        if (e === this.FIRST_DIGIT_ENCODINGS[r]) {
                            return t = String.fromCharCode("0".charCodeAt(0) + r) + t;
                        }
                    }
                    throw new V
                }
                ,
                e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26],
                e
        }(te)
            , oe = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , ie = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , ae = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                    e
            }

            return oe(e, t),
                e.prototype.decodeMiddle = function (t, e, r) {
                    var n, o, i, a, s = this.decodeMiddleCounters;
                    s[0] = 0,
                        s[1] = 0,
                        s[2] = 0,
                        s[3] = 0;
                    for (var u = t.getSize(), c = e[1], f = 0; f < 4 && c < u; f++) {
                        var h = te.decodeDigit(t, s, c, te.L_PATTERNS);
                        r += String.fromCharCode("0".charCodeAt(0) + h);
                        try {
                            for (var l = (n = void 0,
                                ie(s)), d = l.next(); !d.done; d = l.next()) {
                                c += d.value
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (o = l.return) && o.call(l)
                            } finally {
                                if (n) {
                                    throw n.error
                                }
                            }
                        }
                    }
                    c = te.findGuardPattern(t, c, !0, te.MIDDLE_PATTERN,
                        new Int32Array(te.MIDDLE_PATTERN.length).fill(0))[1];
                    for (f = 0; f < 4 && c < u; f++) {
                        h = te.decodeDigit(t, s, c, te.L_PATTERNS);
                        r += String.fromCharCode("0".charCodeAt(0) + h);
                        try {
                            for (var p = (i = void 0,
                                ie(s)), g = p.next(); !g.done; g = p.next()) {
                                c += g.value
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                g && !g.done && (a = p.return) && a.call(p)
                            } finally {
                                if (i) {
                                    throw i.error
                                }
                            }
                        }
                    }
                    return {
                        rowOffset: c,
                        resultString: r
                    }
                }
                ,
                e.prototype.getBarcodeFormat = function () {
                    return rt.EAN_8
                }
                ,
                e
        }(te)
            , se = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , ue = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ean13Reader = new ne,
                    e
            }

            return se(e, t),
                e.prototype.getBarcodeFormat = function () {
                    return rt.UPC_A
                }
                ,
                e.prototype.decode = function (t, e) {
                    return this.maybeReturnResult(this.ean13Reader.decode(t))
                }
                ,
                e.prototype.decodeRow = function (t, e, r) {
                    return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r))
                }
                ,
                e.prototype.decodeMiddle = function (t, e, r) {
                    return this.ean13Reader.decodeMiddle(t, e, r)
                }
                ,
                e.prototype.maybeReturnResult = function (t) {
                    var e = t.getText();
                    if ("0" === e.charAt(0)) {
                        var r = new tt(e.substring(1), null, null, t.getResultPoints(), rt.UPC_A);
                        return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()),
                            r
                    }
                    throw new V
                }
                ,
                e.prototype.reset = function () {
                    this.ean13Reader.reset()
                }
                ,
                e
        }(te)
            , ce = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , fe = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , he = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.decodeMiddleCounters = new Int32Array(4),
                    e
            }

            return ce(e, t),
                e.prototype.decodeMiddle = function (t, r, n) {
                    var o, i, a = this.decodeMiddleCounters.map((function (t) {
                            return t
                        }
                    ));
                    a[0] = 0,
                        a[1] = 0,
                        a[2] = 0,
                        a[3] = 0;
                    for (var s = t.getSize(), u = r[1], c = 0, f = 0; f < 6 && u < s; f++) {
                        var h = e.decodeDigit(t, a, u, e.L_AND_G_PATTERNS);
                        n += String.fromCharCode("0".charCodeAt(0) + h % 10);
                        try {
                            for (var l = (o = void 0,
                                fe(a)), d = l.next(); !d.done; d = l.next()) {
                                u += d.value
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (i = l.return) && i.call(l)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        h >= 10 && (c |= 1 << 5 - f)
                    }
                    return e.determineNumSysAndCheckDigit(new F(n), c),
                        u
                }
                ,
                e.prototype.decodeEnd = function (t, r) {
                    return e.findGuardPatternWithoutCounters(t, r, !0, e.MIDDLE_END_PATTERN)
                }
                ,
                e.prototype.checkChecksum = function (t) {
                    return te.checkChecksum(e.convertUPCEtoUPCA(t))
                }
                ,
                e.determineNumSysAndCheckDigit = function (t, e) {
                    for (var r = 0; r <= 1; r++) {
                        for (var n = 0; n < 10; n++) {
                            if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) {
                                return t.insert(0, "0" + r),
                                    void t.append("0" + n);
                            }
                        }
                    }
                    throw V.getNotFoundInstance()
                }
                ,
                e.prototype.getBarcodeFormat = function () {
                    return rt.UPC_E
                }
                ,
                e.convertUPCEtoUPCA = function (t) {
                    var e = t.slice(1, 7).split("").map((function (t) {
                            return t.charCodeAt(0)
                        }
                    ))
                        , r = new F;
                    r.append(t.charAt(0));
                    var n = e[5];
                    switch (n) {
                        case 0:
                        case 1:
                        case 2:
                            r.appendChars(e, 0, 2),
                                r.append(n),
                                r.append("0000"),
                                r.appendChars(e, 2, 3);
                            break;
                        case 3:
                            r.appendChars(e, 0, 3),
                                r.append("00000"),
                                r.appendChars(e, 3, 2);
                            break;
                        case 4:
                            r.appendChars(e, 0, 4),
                                r.append("00000"),
                                r.append(e[4]);
                            break;
                        default:
                            r.appendChars(e, 0, 5),
                                r.append("0000"),
                                r.append(n)
                    }
                    return t.length >= 8 && r.append(t.charAt(7)),
                        r.toString()
                }
                ,
                e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]),
                e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
                    Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])],
                e
        }(te)
            , le = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , de = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , pe = function (t) {
            function e(e) {
                var r = t.call(this) || this
                    , n = null == e ? null : e.get(O.POSSIBLE_FORMATS)
                    , o = [];
                return null != n && (n.indexOf(rt.EAN_13) > -1 && o.push(new ne),
                n.indexOf(rt.UPC_A) > -1 && o.push(new ue),
                n.indexOf(rt.EAN_8) > -1 && o.push(new ae),
                n.indexOf(rt.UPC_E) > -1 && o.push(new he)),
                0 === o.length && (o.push(new ne),
                    o.push(new ue),
                    o.push(new ae),
                    o.push(new he)),
                    r.readers = o,
                    r
            }

            return le(e, t),
                e.prototype.decodeRow = function (t, e, r) {
                    var n, o;
                    try {
                        for (var i = de(this.readers), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value;
                            try {
                                var u = s.decodeRow(t, e, r)
                                    , c = u.getBarcodeFormat() === rt.EAN_13 && "0" === u.getText().charAt(0)
                                    , f = null == r ? null : r.get(O.POSSIBLE_FORMATS)
                                    , h = null == f || f.includes(rt.UPC_A);
                                if (c && h) {
                                    var l = u.getRawBytes()
                                        , d = new tt(u.getText().substring(1), l, l ? l.length : null,
                                        u.getResultPoints(), rt.UPC_A);
                                    return d.putAllMetadata(u.getResultMetadata()),
                                        d
                                }
                                return u
                            } catch (t) {
                            }
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (o = i.return) && o.call(i)
                        } finally {
                            if (n) {
                                throw n.error
                            }
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.reset = function () {
                    var t, e;
                    try {
                        for (var r = de(this.readers), n = r.next(); !n.done; n = r.next()) {
                            n.value.reset()
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (e = r.return) && e.call(r)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                }
                ,
                e
        }(Bt)
            , ge = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , we = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.CODA_BAR_CHAR_SET = {
                    nnnnnww: "0",
                    nnnnwwn: "1",
                    nnnwnnw: "2",
                    wwnnnnn: "3",
                    nnwnnwn: "4",
                    wnnnnwn: "5",
                    nwnnnnw: "6",
                    nwnnwnn: "7",
                    nwwnnnn: "8",
                    wnnwnnn: "9",
                    nnnwwnn: "-",
                    nnwwnnn: "$",
                    wnnnwnw: ":",
                    wnwnnnw: "/",
                    wnwnwnn: ".",
                    nnwwwww: "+",
                    nnwwnwn: "A",
                    nwnwnnw: "B",
                    nnnwnww: "C",
                    nnnwwwn: "D"
                },
                    e
            }

            return ge(e, t),
                e.prototype.decodeRow = function (t, e, r) {
                    var n = this.getValidRowData(e);
                    if (!n) {
                        throw new V;
                    }
                    var o = this.codaBarDecodeRow(n.row);
                    if (!o) {
                        throw new V;
                    }
                    return new tt(o, null, 0, [new mt(n.left, t), new mt(n.right, t)], rt.CODABAR, (new Date).getTime())
                }
                ,
                e.prototype.getValidRowData = function (t) {
                    var e = t.toArray()
                        , r = e.indexOf(!0);
                    if (-1 === r) {
                        return null;
                    }
                    var n = e.lastIndexOf(!0);
                    if (n <= r) {
                        return null;
                    }
                    for (var o = [], i = (e = e.slice(r, n + 1))[0], a = 1, s = 1; s < e.length; s++) {
                        e[s] === i ? a++ : (i = e[s],
                            o.push(a),
                            a = 1);
                    }
                    return o.push(a),
                        o.length < 23 && (o.length + 1) % 8 != 0 ? null : {
                            row: o,
                            left: r,
                            right: n
                        }
                }
                ,
                e.prototype.codaBarDecodeRow = function (t) {
                    for (var e = [], r = Math.ceil(t.reduce((function (t, e) {
                            return (t + e) / 2
                        }
                    ), 0)); t.length > 0;) {
                        var n = t.splice(0, 8).splice(0, 7).map((function (t) {
                                return t < r ? "n" : "w"
                            }
                        )).join("");
                        if (void 0 === this.CODA_BAR_CHAR_SET[n]) {
                            return null;
                        }
                        e.push(this.CODA_BAR_CHAR_SET[n])
                    }
                    var o = e.join("");
                    return this.validCodaBarString(o) ? o : null
                }
                ,
                e.prototype.validCodaBarString = function (t) {
                    return /^[A-D].{1,}[A-D]$/.test(t)
                }
                ,
                e
        }(Bt)
            , ye = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , ve = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , _e = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.decodeFinderCounters = new Int32Array(4),
                    e.dataCharacterCounters = new Int32Array(8),
                    e.oddRoundingErrors = new Array(4),
                    e.evenRoundingErrors = new Array(4),
                    e.oddCounts = new Array(e.dataCharacterCounters.length / 2),
                    e.evenCounts = new Array(e.dataCharacterCounters.length / 2),
                    e
            }

            return ye(e, t),
                e.prototype.getDecodeFinderCounters = function () {
                    return this.decodeFinderCounters
                }
                ,
                e.prototype.getDataCharacterCounters = function () {
                    return this.dataCharacterCounters
                }
                ,
                e.prototype.getOddRoundingErrors = function () {
                    return this.oddRoundingErrors
                }
                ,
                e.prototype.getEvenRoundingErrors = function () {
                    return this.evenRoundingErrors
                }
                ,
                e.prototype.getOddCounts = function () {
                    return this.oddCounts
                }
                ,
                e.prototype.getEvenCounts = function () {
                    return this.evenCounts
                }
                ,
                e.prototype.parseFinderValue = function (t, r) {
                    for (var n = 0; n < r.length; n++) {
                        if (Bt.patternMatchVariance(t, r[n], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) {
                            return n;
                        }
                    }
                    throw new V
                }
                ,
                e.count = function (t) {
                    return vt.sum(new Int32Array(t))
                }
                ,
                e.increment = function (t, e) {
                    for (var r = 0, n = e[0], o = 1; o < t.length; o++) {
                        e[o] > n && (n = e[o],
                            r = o);
                    }
                    t[r]++
                }
                ,
                e.decrement = function (t, e) {
                    for (var r = 0, n = e[0], o = 1; o < t.length; o++) {
                        e[o] < n && (n = e[o],
                            r = o);
                    }
                    t[r]--
                }
                ,
                e.isFinderPattern = function (t) {
                    var r, n, o = t[0] + t[1], i = o / (o + t[2] + t[3]);
                    if (i >= e.MIN_FINDER_PATTERN_RATIO && i <= e.MAX_FINDER_PATTERN_RATIO) {
                        var a = Number.MAX_SAFE_INTEGER
                            , s = Number.MIN_SAFE_INTEGER;
                        try {
                            for (var u = ve(t), c = u.next(); !c.done; c = u.next()) {
                                var f = c.value;
                                f > s && (s = f),
                                f < a && (a = f)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                c && !c.done && (n = u.return) && n.call(u)
                            } finally {
                                if (r) {
                                    throw r.error
                                }
                            }
                        }
                        return s < 10 * a
                    }
                    return !1
                }
                ,
                e.MAX_AVG_VARIANCE = .2,
                e.MAX_INDIVIDUAL_VARIANCE = .45,
                e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12,
                e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14,
                e
        }(Bt)
            , me = function () {
            function t(t, e) {
                this.value = t,
                    this.checksumPortion = e
            }

            return t.prototype.getValue = function () {
                return this.value
            }
                ,
                t.prototype.getChecksumPortion = function () {
                    return this.checksumPortion
                }
                ,
                t.prototype.toString = function () {
                    return this.value + "(" + this.checksumPortion + ")"
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.value === r.value && this.checksumPortion === r.checksumPortion
                }
                ,
                t.prototype.hashCode = function () {
                    return this.value ^ this.checksumPortion
                }
                ,
                t
        }()
            , Ce = function () {
            function t(t, e, r, n, o) {
                this.value = t,
                    this.startEnd = e,
                    this.value = t,
                    this.startEnd = e,
                    this.resultPoints = new Array,
                    this.resultPoints.push(new mt(r, o)),
                    this.resultPoints.push(new mt(n, o))
            }

            return t.prototype.getValue = function () {
                return this.value
            }
                ,
                t.prototype.getStartEnd = function () {
                    return this.startEnd
                }
                ,
                t.prototype.getResultPoints = function () {
                    return this.resultPoints
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.value === r.value
                }
                ,
                t.prototype.hashCode = function () {
                    return this.value
                }
                ,
                t
        }()
            , Ae = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Ee = function () {
            function t() {
            }

            return t.getRSSvalue = function (e, r, n) {
                var o, i, a = 0;
                try {
                    for (var s = Ae(e), u = s.next(); !u.done; u = s.next()) {
                        a += u.value
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (i = s.return) && i.call(s)
                    } finally {
                        if (o) {
                            throw o.error
                        }
                    }
                }
                for (var c = 0, f = 0, h = e.length, l = 0; l < h - 1; l++) {
                    var d = void 0;
                    for (d = 1,
                        f |= 1 << l; d < e[l]; d++,
                        f &= ~(1 << l)) {
                        var p = t.combins(a - d - 1, h - l - 2);
                        if (n && 0 === f && a - d - (h - l - 1) >= h - l - 1 && (p -= t.combins(a - d - (h - l),
                            h - l - 2)),
                        h - l - 1 > 1) {
                            for (var g = 0, w = a - d - (h - l - 2); w > r; w--) {
                                g += t.combins(a - d - w - 1, h - l - 3);
                            }
                            p -= g * (h - 1 - l)
                        } else {
                            a - d > r && p--;
                        }
                        c += p
                    }
                    a -= d
                }
                return c
            }
                ,
                t.combins = function (t, e) {
                    var r, n;
                    t - e > e ? (n = e,
                        r = t - e) : (n = t - e,
                        r = e);
                    for (var o = 1, i = 1, a = t; a > r; a--) {
                        o *= a,
                        i <= n && (o /= i,
                            i++);
                    }
                    for (; i <= n;) {
                        o /= i,
                            i++;
                    }
                    return o
                }
                ,
                t
        }()
            , Ie = function () {
            function t() {
            }

            return t.buildBitArray = function (t) {
                var e = 2 * t.length - 1;
                null == t[t.length - 1].getRightChar() && (e -= 1);
                for (var r = new I(12 * e), n = 0, o = t[0].getRightChar().getValue(), i = 11; i >= 0; --i) {
                    0 != (o & 1 << i) && r.set(n),
                        n++;
                }
                for (i = 1; i < t.length; ++i) {
                    for (var a = t[i], s = a.getLeftChar().getValue(), u = 11; u >= 0; --u) {
                        0 != (s & 1 << u) && r.set(n),
                            n++;
                    }
                    if (null !== a.getRightChar()) {
                        var c = a.getRightChar().getValue();
                        for (u = 11; u >= 0; --u) {
                            0 != (c & 1 << u) && r.set(n),
                                n++
                        }
                    }
                }
                return r
            }
                ,
                t
        }()
            , Se = function () {
            function t(t, e) {
                e ? this.decodedInformation = null : (this.finished = t,
                    this.decodedInformation = e)
            }

            return t.prototype.getDecodedInformation = function () {
                return this.decodedInformation
            }
                ,
                t.prototype.isFinished = function () {
                    return this.finished
                }
                ,
                t
        }()
            , Oe = function () {
            function t(t) {
                this.newPosition = t
            }

            return t.prototype.getNewPosition = function () {
                return this.newPosition
            }
                ,
                t
        }()
            , Te = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , be = function (t) {
            function e(e, r) {
                var n = t.call(this, e) || this;
                return n.value = r,
                    n
            }

            return Te(e, t),
                e.prototype.getValue = function () {
                    return this.value
                }
                ,
                e.prototype.isFNC1 = function () {
                    return this.value === e.FNC1
                }
                ,
                e.FNC1 = "$",
                e
        }(Oe)
            , Re = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Ne = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e) || this;
                return n ? (o.remaining = !0,
                    o.remainingValue = o.remainingValue) : (o.remaining = !1,
                    o.remainingValue = 0),
                    o.newString = r,
                    o
            }

            return Re(e, t),
                e.prototype.getNewString = function () {
                    return this.newString
                }
                ,
                e.prototype.isRemaining = function () {
                    return this.remaining
                }
                ,
                e.prototype.getRemainingValue = function () {
                    return this.remainingValue
                }
                ,
                e
        }(Oe)
            , De = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Me = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e) || this;
                if (r < 0 || r > 10 || n < 0 || n > 10) {
                    throw new b;
                }
                return o.firstDigit = r,
                    o.secondDigit = n,
                    o
            }

            return De(e, t),
                e.prototype.getFirstDigit = function () {
                    return this.firstDigit
                }
                ,
                e.prototype.getSecondDigit = function () {
                    return this.secondDigit
                }
                ,
                e.prototype.getValue = function () {
                    return 10 * this.firstDigit + this.secondDigit
                }
                ,
                e.prototype.isFirstDigitFNC1 = function () {
                    return this.firstDigit === e.FNC1
                }
                ,
                e.prototype.isSecondDigitFNC1 = function () {
                    return this.secondDigit === e.FNC1
                }
                ,
                e.prototype.isAnyFNC1 = function () {
                    return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1
                }
                ,
                e.FNC1 = 10,
                e
        }(Oe)
            , Pe = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Be = function () {
            function t() {
            }

            return t.parseFieldsInGeneralPurpose = function (e) {
                var r, n, o, i, a, s, u, c;
                if (!e) {
                    return null;
                }
                if (e.length < 2) {
                    throw new V;
                }
                var f = e.substring(0, 2);
                try {
                    for (var h = Pe(t.TWO_DIGIT_DATA_LENGTH), l = h.next(); !l.done; l = h.next()) {
                        if ((C = l.value)[0] === f) {
                            return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(2, C[2], e) : t.processFixedAI(2,
                                C[1], e)
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (n = h.return) && n.call(h)
                    } finally {
                        if (r) {
                            throw r.error
                        }
                    }
                }
                if (e.length < 3) {
                    throw new V;
                }
                var d = e.substring(0, 3);
                try {
                    for (var p = Pe(t.THREE_DIGIT_DATA_LENGTH), g = p.next(); !g.done; g = p.next()) {
                        if ((C = g.value)[0] === d) {
                            return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(3, C[2], e) : t.processFixedAI(3,
                                C[1], e)
                        }
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        g && !g.done && (i = p.return) && i.call(p)
                    } finally {
                        if (o) {
                            throw o.error
                        }
                    }
                }
                try {
                    for (var w = Pe(t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), y = w.next(); !y.done; y = w.next()) {
                        if ((C = y.value)[0] === d) {
                            return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, C[2], e) : t.processFixedAI(4,
                                C[1], e)
                        }
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        y && !y.done && (s = w.return) && s.call(w)
                    } finally {
                        if (a) {
                            throw a.error
                        }
                    }
                }
                if (e.length < 4) {
                    throw new V;
                }
                var v = e.substring(0, 4);
                try {
                    for (var _ = Pe(t.FOUR_DIGIT_DATA_LENGTH), m = _.next(); !m.done; m = _.next()) {
                        var C;
                        if ((C = m.value)[0] === v) {
                            return C[1] === t.VARIABLE_LENGTH ? t.processVariableAI(4, C[2], e) : t.processFixedAI(4,
                                C[1], e)
                        }
                    }
                } catch (t) {
                    u = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (c = _.return) && c.call(_)
                    } finally {
                        if (u) {
                            throw u.error
                        }
                    }
                }
                throw new V
            }
                ,
                t.processFixedAI = function (e, r, n) {
                    if (n.length < e) {
                        throw new V;
                    }
                    var o = n.substring(0, e);
                    if (n.length < e + r) {
                        throw new V;
                    }
                    var i = n.substring(e, e + r)
                        , a = n.substring(e + r)
                        , s = "(" + o + ")" + i
                        , u = t.parseFieldsInGeneralPurpose(a);
                    return null == u ? s : s + u
                }
                ,
                t.processVariableAI = function (e, r, n) {
                    var o, i = n.substring(0, e);
                    o = n.length < e + r ? n.length : e + r;
                    var a = n.substring(e, o)
                        , s = n.substring(o)
                        , u = "(" + i + ")" + a
                        , c = t.parseFieldsInGeneralPurpose(s);
                    return null == c ? u : u + c
                }
                ,
                t.VARIABLE_LENGTH = [],
                t.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", t.VARIABLE_LENGTH, 20], ["11", 6],
                    ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", t.VARIABLE_LENGTH, 20],
                    ["22", t.VARIABLE_LENGTH, 29], ["30", t.VARIABLE_LENGTH, 8], ["37", t.VARIABLE_LENGTH, 8],
                    ["90", t.VARIABLE_LENGTH, 30], ["91", t.VARIABLE_LENGTH, 30], ["92", t.VARIABLE_LENGTH, 30],
                    ["93", t.VARIABLE_LENGTH, 30], ["94", t.VARIABLE_LENGTH, 30], ["95", t.VARIABLE_LENGTH, 30],
                    ["96", t.VARIABLE_LENGTH, 30], ["97", t.VARIABLE_LENGTH, 3], ["98", t.VARIABLE_LENGTH, 30],
                    ["99", t.VARIABLE_LENGTH, 30]],
                t.THREE_DIGIT_DATA_LENGTH = [["240", t.VARIABLE_LENGTH, 30], ["241", t.VARIABLE_LENGTH, 30],
                    ["242", t.VARIABLE_LENGTH, 6], ["250", t.VARIABLE_LENGTH, 30], ["251", t.VARIABLE_LENGTH, 30],
                    ["253", t.VARIABLE_LENGTH, 17], ["254", t.VARIABLE_LENGTH, 20], ["400", t.VARIABLE_LENGTH, 30],
                    ["401", t.VARIABLE_LENGTH, 30], ["402", 17], ["403", t.VARIABLE_LENGTH, 30], ["410", 13],
                    ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", t.VARIABLE_LENGTH, 20],
                    ["421", t.VARIABLE_LENGTH, 15], ["422", 3], ["423", t.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3],
                    ["426", 3]],
                t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6],
                    ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6],
                    ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6],
                    ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6],
                    ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6],
                    ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6],
                    ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6],
                    ["390", t.VARIABLE_LENGTH, 15], ["391", t.VARIABLE_LENGTH, 18], ["392", t.VARIABLE_LENGTH, 15],
                    ["393", t.VARIABLE_LENGTH, 18], ["703", t.VARIABLE_LENGTH, 30]],
                t.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", t.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14],
                    ["8002", t.VARIABLE_LENGTH, 20], ["8003", t.VARIABLE_LENGTH, 30], ["8004", t.VARIABLE_LENGTH, 30],
                    ["8005", 6], ["8006", 18], ["8007", t.VARIABLE_LENGTH, 30], ["8008", t.VARIABLE_LENGTH, 12],
                    ["8018", 18], ["8020", t.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2],
                    ["8110", t.VARIABLE_LENGTH, 70], ["8200", t.VARIABLE_LENGTH, 70]],
                t
        }()
            , Le = function () {
            function t(t) {
                this.buffer = new F,
                    this.information = t
            }

            return t.prototype.decodeAllCodes = function (t, e) {
                for (var r = e, n = null; ;) {
                    var o = this.decodeGeneralPurposeField(r, n)
                        , i = Be.parseFieldsInGeneralPurpose(o.getNewString());
                    if (null != i && t.append(i),
                        n = o.isRemaining() ? "" + o.getRemainingValue() : null,
                    r === o.getNewPosition()) {
                        break;
                    }
                    r = o.getNewPosition()
                }
                return t.toString()
            }
                ,
                t.prototype.isStillNumeric = function (t) {
                    if (t + 7 > this.information.getSize()) {
                        return t + 4 <= this.information.getSize();
                    }
                    for (var e = t; e < t + 3; ++e) {
                        if (this.information.get(e)) {
                            return !0;
                        }
                    }
                    return this.information.get(t + 3)
                }
                ,
                t.prototype.decodeNumeric = function (t) {
                    if (t + 7 > this.information.getSize()) {
                        var e = this.extractNumericValueFromBitArray(t, 4);
                        return new Me(this.information.getSize(), 0 === e ? Me.FNC1 : e - 1, Me.FNC1)
                    }
                    var r = this.extractNumericValueFromBitArray(t, 7);
                    return new Me(t + 7, (r - 8) / 11, (r - 8) % 11)
                }
                ,
                t.prototype.extractNumericValueFromBitArray = function (e, r) {
                    return t.extractNumericValueFromBitArray(this.information, e, r)
                }
                ,
                t.extractNumericValueFromBitArray = function (t, e, r) {
                    for (var n = 0, o = 0; o < r; ++o) {
                        t.get(e + o) && (n |= 1 << r - o - 1);
                    }
                    return n
                }
                ,
                t.prototype.decodeGeneralPurposeField = function (t, e) {
                    this.buffer.setLengthToZero(),
                    null != e && this.buffer.append(e),
                        this.current.setPosition(t);
                    var r = this.parseBlocks();
                    return null != r && r.isRemaining() ? new Ne(this.current.getPosition(), this.buffer.toString(),
                        r.getRemainingValue()) : new Ne(this.current.getPosition(), this.buffer.toString())
                }
                ,
                t.prototype.parseBlocks = function () {
                    var t, e;
                    do {
                        var r = this.current.getPosition();
                        if (t = this.current.isAlpha() ? (e = this.parseAlphaBlock()).isFinished()
                            : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block()).isFinished()
                                : (e = this.parseNumericBlock()).isFinished(),
                        !(r !== this.current.getPosition()) && !t) {
                            break
                        }
                    } while (!t);
                    return e.getDecodedInformation()
                }
                ,
                t.prototype.parseNumericBlock = function () {
                    for (; this.isStillNumeric(this.current.getPosition());) {
                        var t = this.decodeNumeric(this.current.getPosition());
                        if (this.current.setPosition(t.getNewPosition()),
                            t.isFirstDigitFNC1()) {
                            var e = void 0;
                            return e = t.isSecondDigitFNC1() ? new Ne(this.current.getPosition(),
                                this.buffer.toString()) : new Ne(this.current.getPosition(), this.buffer.toString(),
                                t.getSecondDigit()),
                                new Se(!0, e)
                        }
                        if (this.buffer.append(t.getFirstDigit()),
                            t.isSecondDigitFNC1()) {
                            e = new Ne(this.current.getPosition(), this.buffer.toString());
                            return new Se(!0, e)
                        }
                        this.buffer.append(t.getSecondDigit())
                    }
                    return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(),
                        this.current.incrementPosition(4)),
                        new Se(!1)
                }
                ,
                t.prototype.parseIsoIec646Block = function () {
                    for (; this.isStillIsoIec646(this.current.getPosition());) {
                        var t = this.decodeIsoIec646(this.current.getPosition());
                        if (this.current.setPosition(t.getNewPosition()),
                            t.isFNC1()) {
                            var e = new Ne(this.current.getPosition(), this.buffer.toString());
                            return new Se(!0, e)
                        }
                        this.buffer.append(t.getValue())
                    }
                    return this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                        ? (this.current.incrementPosition(3),
                            this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition())
                        && (this.current.getPosition() + 5 < this.information.getSize()
                            ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()),
                            this.current.setAlpha()),
                        new Se(!1)
                }
                ,
                t.prototype.parseAlphaBlock = function () {
                    for (; this.isStillAlpha(this.current.getPosition());) {
                        var t = this.decodeAlphanumeric(this.current.getPosition());
                        if (this.current.setPosition(t.getNewPosition()),
                            t.isFNC1()) {
                            var e = new Ne(this.current.getPosition(), this.buffer.toString());
                            return new Se(!0, e)
                        }
                        this.buffer.append(t.getValue())
                    }
                    return this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                        ? (this.current.incrementPosition(3),
                            this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition())
                        && (this.current.getPosition() + 5 < this.information.getSize()
                            ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()),
                            this.current.setIsoIec646()),
                        new Se(!1)
                }
                ,
                t.prototype.isStillIsoIec646 = function (t) {
                    if (t + 5 > this.information.getSize()) {
                        return !1;
                    }
                    var e = this.extractNumericValueFromBitArray(t, 5);
                    if (e >= 5 && e < 16) {
                        return !0;
                    }
                    if (t + 7 > this.information.getSize()) {
                        return !1;
                    }
                    var r = this.extractNumericValueFromBitArray(t, 7);
                    if (r >= 64 && r < 116) {
                        return !0;
                    }
                    if (t + 8 > this.information.getSize()) {
                        return !1;
                    }
                    var n = this.extractNumericValueFromBitArray(t, 8);
                    return n >= 232 && n < 253
                }
                ,
                t.prototype.decodeIsoIec646 = function (t) {
                    var e = this.extractNumericValueFromBitArray(t, 5);
                    if (15 === e) {
                        return new be(t + 5, be.FNC1);
                    }
                    if (e >= 5 && e < 15) {
                        return new be(t + 5, "0" + (e - 5));
                    }
                    var r, n = this.extractNumericValueFromBitArray(t, 7);
                    if (n >= 64 && n < 90) {
                        return new be(t + 7, "" + (n + 1));
                    }
                    if (n >= 90 && n < 116) {
                        return new be(t + 7, "" + (n + 7));
                    }
                    switch (this.extractNumericValueFromBitArray(t, 8)) {
                        case 232:
                            r = "!";
                            break;
                        case 233:
                            r = '"';
                            break;
                        case 234:
                            r = "%";
                            break;
                        case 235:
                            r = "&";
                            break;
                        case 236:
                            r = "'";
                            break;
                        case 237:
                            r = "(";
                            break;
                        case 238:
                            r = ")";
                            break;
                        case 239:
                            r = "*";
                            break;
                        case 240:
                            r = "+";
                            break;
                        case 241:
                            r = ",";
                            break;
                        case 242:
                            r = "-";
                            break;
                        case 243:
                            r = ".";
                            break;
                        case 244:
                            r = "/";
                            break;
                        case 245:
                            r = ":";
                            break;
                        case 246:
                            r = ";";
                            break;
                        case 247:
                            r = "<";
                            break;
                        case 248:
                            r = "=";
                            break;
                        case 249:
                            r = ">";
                            break;
                        case 250:
                            r = "?";
                            break;
                        case 251:
                            r = "_";
                            break;
                        case 252:
                            r = " ";
                            break;
                        default:
                            throw new b
                    }
                    return new be(t + 8, r)
                }
                ,
                t.prototype.isStillAlpha = function (t) {
                    if (t + 5 > this.information.getSize()) {
                        return !1;
                    }
                    var e = this.extractNumericValueFromBitArray(t, 5);
                    if (e >= 5 && e < 16) {
                        return !0;
                    }
                    if (t + 6 > this.information.getSize()) {
                        return !1;
                    }
                    var r = this.extractNumericValueFromBitArray(t, 6);
                    return r >= 16 && r < 63
                }
                ,
                t.prototype.decodeAlphanumeric = function (t) {
                    var e = this.extractNumericValueFromBitArray(t, 5);
                    if (15 === e) {
                        return new be(t + 5, be.FNC1);
                    }
                    if (e >= 5 && e < 15) {
                        return new be(t + 5, "0" + (e - 5));
                    }
                    var r, n = this.extractNumericValueFromBitArray(t, 6);
                    if (n >= 32 && n < 58) {
                        return new be(t + 6, "" + (n + 33));
                    }
                    switch (n) {
                        case 58:
                            r = "*";
                            break;
                        case 59:
                            r = ",";
                            break;
                        case 60:
                            r = "-";
                            break;
                        case 61:
                            r = ".";
                            break;
                        case 62:
                            r = "/";
                            break;
                        default:
                            throw new gt("Decoding invalid alphanumeric value: " + n)
                    }
                    return new be(t + 6, r)
                }
                ,
                t.prototype.isAlphaTo646ToAlphaLatch = function (t) {
                    if (t + 1 > this.information.getSize()) {
                        return !1;
                    }
                    for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e) {
                        if (2 === e) {
                            if (!this.information.get(t + 2)) {
                                return !1
                            }
                        } else if (this.information.get(t + e)) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.prototype.isAlphaOr646ToNumericLatch = function (t) {
                    if (t + 3 > this.information.getSize()) {
                        return !1;
                    }
                    for (var e = t; e < t + 3; ++e) {
                        if (this.information.get(e)) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.prototype.isNumericToAlphaNumericLatch = function (t) {
                    if (t + 1 > this.information.getSize()) {
                        return !1;
                    }
                    for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e) {
                        if (this.information.get(t + e)) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t
        }()
            , Fe = function () {
            function t(t) {
                this.information = t,
                    this.generalDecoder = new Le(t)
            }

            return t.prototype.getInformation = function () {
                return this.information
            }
                ,
                t.prototype.getGeneralDecoder = function () {
                    return this.generalDecoder
                }
                ,
                t
        }()
            , ke = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , xe = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return ke(e, t),
                e.prototype.encodeCompressedGtin = function (t, e) {
                    t.append("(01)");
                    var r = t.length();
                    t.append("9"),
                        this.encodeCompressedGtinWithoutAI(t, e, r)
                }
                ,
                e.prototype.encodeCompressedGtinWithoutAI = function (t, r, n) {
                    for (var o = 0; o < 4; ++o) {
                        var i = this.getGeneralDecoder().extractNumericValueFromBitArray(r + 10 * o, 10);
                        i / 100 == 0 && t.append("0"),
                        i / 10 == 0 && t.append("0"),
                            t.append(i)
                    }
                    e.appendCheckDigit(t, n)
                }
                ,
                e.appendCheckDigit = function (t, e) {
                    for (var r = 0, n = 0; n < 13; n++) {
                        var o = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0);
                        r += 0 == (1 & n) ? 3 * o : o
                    }
                    10 === (r = 10 - r % 10) && (r = 0),
                        t.append(r)
                }
                ,
                e.GTIN_SIZE = 40,
                e
        }(Fe)
            , Ve = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , He = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Ve(e, t),
                e.prototype.parseInformation = function () {
                    var t = new F;
                    t.append("(01)");
                    var r = t.length()
                        , n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4);
                    return t.append(n),
                        this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, r),
                        this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44)
                }
                ,
                e.HEADER_SIZE = 4,
                e
        }(xe)
            , Ue = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Ge = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Ue(e, t),
                e.prototype.parseInformation = function () {
                    var t = new F;
                    return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE)
                }
                ,
                e.HEADER_SIZE = 5,
                e
        }(Fe)
            , Xe = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , We = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Xe(e, t),
                e.prototype.encodeCompressedWeight = function (t, e, r) {
                    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
                    this.addWeightCode(t, n);
                    for (var o = this.checkWeight(n), i = 1e5, a = 0; a < 5; ++a) {
                        o / i == 0 && t.append("0"),
                            i /= 10;
                    }
                    t.append(o)
                }
                ,
                e
        }(xe)
            , ze = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , je = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return ze(e, t),
                e.prototype.parseInformation = function () {
                    if (this.getInformation().getSize() !== e.HEADER_SIZE + We.GTIN_SIZE + e.WEIGHT_SIZE) {
                        throw new V;
                    }
                    var t = new F;
                    return this.encodeCompressedGtin(t, e.HEADER_SIZE),
                        this.encodeCompressedWeight(t, e.HEADER_SIZE + We.GTIN_SIZE, e.WEIGHT_SIZE),
                        t.toString()
                }
                ,
                e.HEADER_SIZE = 5,
                e.WEIGHT_SIZE = 15,
                e
        }(We)
            , Ye = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Ze = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Ye(e, t),
                e.prototype.addWeightCode = function (t, e) {
                    t.append("(3103)")
                }
                ,
                e.prototype.checkWeight = function (t) {
                    return t
                }
                ,
                e
        }(je)
            , Ke = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , qe = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Ke(e, t),
                e.prototype.addWeightCode = function (t, e) {
                    e < 1e4 ? t.append("(3202)") : t.append("(3203)")
                }
                ,
                e.prototype.checkWeight = function (t) {
                    return t < 1e4 ? t : t - 1e4
                }
                ,
                e
        }(je)
            , Qe = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , Je = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return Qe(e, t),
                e.prototype.parseInformation = function () {
                    if (this.getInformation().getSize() < e.HEADER_SIZE + xe.GTIN_SIZE) {
                        throw new V;
                    }
                    var t = new F;
                    this.encodeCompressedGtin(t, e.HEADER_SIZE);
                    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + xe.GTIN_SIZE,
                        e.LAST_DIGIT_SIZE);
                    t.append("(392"),
                        t.append(r),
                        t.append(")");
                    var n = this.getGeneralDecoder().decodeGeneralPurposeField(
                        e.HEADER_SIZE + xe.GTIN_SIZE + e.LAST_DIGIT_SIZE, null);
                    return t.append(n.getNewString()),
                        t.toString()
                }
                ,
                e.HEADER_SIZE = 8,
                e.LAST_DIGIT_SIZE = 2,
                e
        }(xe)
            , $e = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , tr = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return $e(e, t),
                e.prototype.parseInformation = function () {
                    if (this.getInformation().getSize() < e.HEADER_SIZE + xe.GTIN_SIZE) {
                        throw new V;
                    }
                    var t = new F;
                    this.encodeCompressedGtin(t, e.HEADER_SIZE);
                    var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + xe.GTIN_SIZE,
                        e.LAST_DIGIT_SIZE);
                    t.append("(393"),
                        t.append(r),
                        t.append(")");
                    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(
                        e.HEADER_SIZE + xe.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE);
                    n / 100 == 0 && t.append("0"),
                    n / 10 == 0 && t.append("0"),
                        t.append(n);
                    var o = this.getGeneralDecoder().decodeGeneralPurposeField(
                        e.HEADER_SIZE + xe.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null);
                    return t.append(o.getNewString()),
                        t.toString()
                }
                ,
                e.HEADER_SIZE = 8,
                e.LAST_DIGIT_SIZE = 2,
                e.FIRST_THREE_DIGITS_SIZE = 10,
                e
        }(xe)
            , er = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , rr = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e) || this;
                return o.dateCode = n,
                    o.firstAIdigits = r,
                    o
            }

            return er(e, t),
                e.prototype.parseInformation = function () {
                    if (this.getInformation().getSize() !== e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE) {
                        throw new V;
                    }
                    var t = new F;
                    return this.encodeCompressedGtin(t, e.HEADER_SIZE),
                        this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE),
                        this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE),
                        t.toString()
                }
                ,
                e.prototype.encodeCompressedDate = function (t, r) {
                    var n = this.getGeneralDecoder().extractNumericValueFromBitArray(r, e.DATE_SIZE);
                    if (38400 !== n) {
                        t.append("("),
                            t.append(this.dateCode),
                            t.append(")");
                        var o = n % 32
                            , i = (n /= 32) % 12 + 1
                            , a = n /= 12;
                        a / 10 == 0 && t.append("0"),
                            t.append(a),
                        i / 10 == 0 && t.append("0"),
                            t.append(i),
                        o / 10 == 0 && t.append("0"),
                            t.append(o)
                    }
                }
                ,
                e.prototype.addWeightCode = function (t, e) {
                    t.append("("),
                        t.append(this.firstAIdigits),
                        t.append(e / 1e5),
                        t.append(")")
                }
                ,
                e.prototype.checkWeight = function (t) {
                    return t % 1e5
                }
                ,
                e.HEADER_SIZE = 8,
                e.WEIGHT_SIZE = 20,
                e.DATE_SIZE = 16,
                e
        }(We);
        var nr = function () {
            function t(t, e, r, n) {
                this.leftchar = t,
                    this.rightchar = e,
                    this.finderpattern = r,
                    this.maybeLast = n
            }

            return t.prototype.mayBeLast = function () {
                return this.maybeLast
            }
                ,
                t.prototype.getLeftChar = function () {
                    return this.leftchar
                }
                ,
                t.prototype.getRightChar = function () {
                    return this.rightchar
                }
                ,
                t.prototype.getFinderPattern = function () {
                    return this.finderpattern
                }
                ,
                t.prototype.mustBeLast = function () {
                    return null == this.rightchar
                }
                ,
                t.prototype.toString = function () {
                    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null"
                        : this.finderpattern.getValue()) + " ]"
                }
                ,
                t.equals = function (e, r) {
                    return e instanceof t && (t.equalsOrNull(e.leftchar, r.leftchar) && t.equalsOrNull(e.rightchar,
                        r.rightchar) && t.equalsOrNull(e.finderpattern, r.finderpattern))
                }
                ,
                t.equalsOrNull = function (e, r) {
                    return null === e ? null === r : t.equals(e, r)
                }
                ,
                t.prototype.hashCode = function () {
                    return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
                }
                ,
                t
        }()
            , or = function () {
            function t(t, e, r) {
                this.pairs = t,
                    this.rowNumber = e,
                    this.wasReversed = r
            }

            return t.prototype.getPairs = function () {
                return this.pairs
            }
                ,
                t.prototype.getRowNumber = function () {
                    return this.rowNumber
                }
                ,
                t.prototype.isReversed = function () {
                    return this.wasReversed
                }
                ,
                t.prototype.isEquivalent = function (t) {
                    return this.checkEqualitity(this, t)
                }
                ,
                t.prototype.toString = function () {
                    return "{ " + this.pairs + " }"
                }
                ,
                t.prototype.equals = function (e, r) {
                    return e instanceof t && (this.checkEqualitity(e, r) && e.wasReversed === r.wasReversed)
                }
                ,
                t.prototype.checkEqualitity = function (t, e) {
                    var r;
                    if (t && e) {
                        return t.forEach((function (t, n) {
                                e.forEach((function (e) {
                                        t.getLeftChar().getValue() === e.getLeftChar().getValue()
                                        && t.getRightChar().getValue() === e.getRightChar().getValue()
                                        && t.getFinderPatter().getValue() === e.getFinderPatter().getValue() && (r = !0)
                                    }
                                ))
                            }
                        )),
                            r
                    }
                }
                ,
                t
        }()
            , ir = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , ar = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , sr = function (t) {
            function e() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.pairs = new Array(e.MAX_PAIRS),
                    r.rows = new Array,
                    r.startEnd = [2],
                    r
            }

            return ir(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    this.pairs.length = 0,
                        this.startFromEven = !1;
                    try {
                        return e.constructResult(this.decodeRow2pairs(t, r))
                    } catch (t) {
                    }
                    return this.pairs.length = 0,
                        this.startFromEven = !0,
                        e.constructResult(this.decodeRow2pairs(t, r))
                }
                ,
                e.prototype.reset = function () {
                    this.pairs.length = 0,
                        this.rows.length = 0
                }
                ,
                e.prototype.decodeRow2pairs = function (t, e) {
                    for (var r, n = !1; !n;) {
                        try {
                            this.pairs.push(this.retrieveNextPair(e, this.pairs, t))
                        } catch (t) {
                            if (t instanceof V) {
                                if (!this.pairs.length) {
                                    throw new V;
                                }
                                n = !0
                            }
                        }
                    }
                    if (this.checkChecksum()) {
                        return this.pairs;
                    }
                    if (r = !!this.rows.length,
                        this.storeRow(t, !1),
                        r) {
                        var o = this.checkRowsBoolean(!1);
                        if (null != o) {
                            return o;
                        }
                        if (null != (o = this.checkRowsBoolean(!0))) {
                            return o
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.checkRowsBoolean = function (t) {
                    if (this.rows.length > 25) {
                        return this.rows.length = 0,
                            null;
                    }
                    this.pairs.length = 0,
                    t && (this.rows = this.rows.reverse());
                    var e = null;
                    try {
                        e = this.checkRows(new Array, 0)
                    } catch (t) {
                        console.log(t)
                    }
                    return t && (this.rows = this.rows.reverse()),
                        e
                }
                ,
                e.prototype.checkRows = function (t, r) {
                    for (var n, o, i = r; i < this.rows.length; i++) {
                        var a = this.rows[i];
                        this.pairs.length = 0;
                        try {
                            for (var s = (n = void 0,
                                ar(t)), u = s.next(); !u.done; u = s.next()) {
                                var c = u.value;
                                this.pairs.push(c.getPairs())
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (o = s.return) && o.call(s)
                            } finally {
                                if (n) {
                                    throw n.error
                                }
                            }
                        }
                        if (this.pairs.push(a.getPairs()),
                            e.isValidSequence(this.pairs)) {
                            if (this.checkChecksum()) {
                                return this.pairs;
                            }
                            var f = new Array(t);
                            f.push(a);
                            try {
                                return this.checkRows(f, i + 1)
                            } catch (t) {
                                console.log(t)
                            }
                        }
                    }
                    throw new V
                }
                ,
                e.isValidSequence = function (t) {
                    var r, n;
                    try {
                        for (var o = ar(e.FINDER_PATTERN_SEQUENCES), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            if (!(t.length > a.length)) {
                                for (var s = !0, u = 0; u < t.length; u++) {
                                    if (t[u].getFinderPattern().getValue() !== a[u]) {
                                        s = !1;
                                        break
                                    }
                                }
                                if (s) {
                                    return !0
                                }
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (n = o.return) && n.call(o)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                    return !1
                }
                ,
                e.prototype.storeRow = function (t, r) {
                    for (var n = 0, o = !1, i = !1; n < this.rows.length;) {
                        var a = this.rows[n];
                        if (a.getRowNumber() > t) {
                            i = a.isEquivalent(this.pairs);
                            break
                        }
                        o = a.isEquivalent(this.pairs),
                            n++
                    }
                    i || o || e.isPartialRow(this.pairs, this.rows) || (this.rows.push(n, new or(this.pairs, t, r)),
                        this.removePartialRows(this.pairs, this.rows))
                }
                ,
                e.prototype.removePartialRows = function (t, e) {
                    var r, n, o, i, a, s;
                    try {
                        for (var u = ar(e), c = u.next(); !c.done; c = u.next()) {
                            var f = c.value;
                            if (f.getPairs().length !== t.length) {
                                try {
                                    for (var h = (o = void 0,
                                        ar(f.getPairs())), l = h.next(); !l.done; l = h.next()) {
                                        var d = l.value
                                            , p = !1;
                                        try {
                                            for (var g = (a = void 0,
                                                ar(t)), w = g.next(); !w.done; w = g.next()) {
                                                var y = w.value;
                                                if (nr.equals(d, y)) {
                                                    p = !0;
                                                    break
                                                }
                                            }
                                        } catch (t) {
                                            a = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                w && !w.done && (s = g.return) && s.call(g)
                                            } finally {
                                                if (a) {
                                                    throw a.error
                                                }
                                            }
                                        }
                                        p || !1
                                    }
                                } catch (t) {
                                    o = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (i = h.return) && i.call(h)
                                    } finally {
                                        if (o) {
                                            throw o.error
                                        }
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (n = u.return) && n.call(u)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                }
                ,
                e.isPartialRow = function (t, e) {
                    var r, n, o, i, a, s;
                    try {
                        for (var u = ar(e), c = u.next(); !c.done; c = u.next()) {
                            var f = c.value
                                , h = !0;
                            try {
                                for (var l = (o = void 0,
                                    ar(t)), d = l.next(); !d.done; d = l.next()) {
                                    var p = d.value
                                        , g = !1;
                                    try {
                                        for (var w = (a = void 0,
                                            ar(f.getPairs())), y = w.next(); !y.done; y = w.next()) {
                                            var v = y.value;
                                            if (p.equals(v)) {
                                                g = !0;
                                                break
                                            }
                                        }
                                    } catch (t) {
                                        a = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            y && !y.done && (s = w.return) && s.call(w)
                                        } finally {
                                            if (a) {
                                                throw a.error
                                            }
                                        }
                                    }
                                    if (!g) {
                                        h = !1;
                                        break
                                    }
                                }
                            } catch (t) {
                                o = {
                                    error: t
                                }
                            } finally {
                                try {
                                    d && !d.done && (i = l.return) && i.call(l)
                                } finally {
                                    if (o) {
                                        throw o.error
                                    }
                                }
                            }
                            if (h) {
                                return !0
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (n = u.return) && n.call(u)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                    return !1
                }
                ,
                e.prototype.getRows = function () {
                    return this.rows
                }
                ,
                e.constructResult = function (t) {
                    var e = function (t) {
                        try {
                            if (t.get(1)) {
                                return new He(t);
                            }
                            if (!t.get(2)) {
                                return new Ge(t);
                            }
                            switch (Le.extractNumericValueFromBitArray(t, 1, 4)) {
                                case 4:
                                    return new Ze(t);
                                case 5:
                                    return new qe(t)
                            }
                            switch (Le.extractNumericValueFromBitArray(t, 1, 5)) {
                                case 12:
                                    return new Je(t);
                                case 13:
                                    return new tr(t)
                            }
                            switch (Le.extractNumericValueFromBitArray(t, 1, 7)) {
                                case 56:
                                    return new rr(t, "310", "11");
                                case 57:
                                    return new rr(t, "320", "11");
                                case 58:
                                    return new rr(t, "310", "13");
                                case 59:
                                    return new rr(t, "320", "13");
                                case 60:
                                    return new rr(t, "310", "15");
                                case 61:
                                    return new rr(t, "320", "15");
                                case 62:
                                    return new rr(t, "310", "17");
                                case 63:
                                    return new rr(t, "320", "17")
                            }
                        } catch (e) {
                            throw console.log(e),
                                new gt("unknown decoder: " + t)
                        }
                    }(Ie.buildBitArray(t)).parseInformation()
                        , r = t[0].getFinderPattern().getResultPoints()
                        , n = t[t.length - 1].getFinderPattern().getResultPoints()
                        , o = [r[0], r[1], n[0], n[1]];
                    return new tt(e, null, null, o, rt.RSS_EXPANDED, null)
                }
                ,
                e.prototype.checkChecksum = function () {
                    var t = this.pairs.get(0)
                        , e = t.getLeftChar()
                        , r = t.getRightChar();
                    if (null === r) {
                        return !1;
                    }
                    for (var n = r.getChecksumPortion(), o = 2, i = 1; i < this.pairs.size(); ++i) {
                        var a = this.pairs.get(i);
                        n += a.getLeftChar().getChecksumPortion(),
                            o++;
                        var s = a.getRightChar();
                        null != s && (n += s.getChecksumPortion(),
                            o++)
                    }
                    return 211 * (o - 4) + (n %= 211) === e.getValue()
                }
                ,
                e.getNextSecondBar = function (t, e) {
                    var r;
                    return t.get(e) ? (r = t.getNextUnset(e),
                        r = t.getNextSet(r)) : (r = t.getNextSet(e),
                        r = t.getNextUnset(r)),
                        r
                }
                ,
                e.prototype.retrieveNextPair = function (t, r, n) {
                    var o, i = r.length % 2 == 0;
                    this.startFromEven && (i = !i);
                    var a = !0
                        , s = -1;
                    do {
                        this.findNextPair(t, r, s),
                            null === (o = this.parseFoundFinderPattern(t, n, i)) ? s = e.getNextSecondBar(t,
                                this.startEnd[0]) : a = !1
                    } while (a);
                    var u, c = this.decodeDataCharacter(t, o, i, !0);
                    if (!this.isEmptyPair(r) && r[r.length - 1].mustBeLast()) {
                        throw new V;
                    }
                    try {
                        u = this.decodeDataCharacter(t, o, i, !1)
                    } catch (t) {
                        u = null,
                            console.log(t)
                    }
                    return new nr(c, u, o, !0)
                }
                ,
                e.prototype.isEmptyPair = function (t) {
                    return 0 === t.length
                }
                ,
                e.prototype.findNextPair = function (t, r, n) {
                    var o = this.getDecodeFinderCounters();
                    o[0] = 0,
                        o[1] = 0,
                        o[2] = 0,
                        o[3] = 0;
                    var i, a = t.getSize();
                    if (n >= 0) {
                        i = n;
                    } else if (this.isEmptyPair(r)) {
                        i = 0;
                    } else {
                        i = r[r.length - 1].getFinderPattern().getStartEnd()[1]
                    }
                    var s = r.length % 2 != 0;
                    this.startFromEven && (s = !s);
                    for (var u = !1; i < a && (u = !t.get(i));) {
                        i++;
                    }
                    for (var c = 0, f = i, h = i; h < a; h++) {
                        if (t.get(h) !== u) {
                            o[c]++;
                        } else {
                            if (3 === c) {
                                if (s && e.reverseCounters(o),
                                    e.isFinderPattern(o)) {
                                    return this.startEnd[0] = f,
                                        void (this.startEnd[1] = h);
                                }
                                s && e.reverseCounters(o),
                                    f += o[0] + o[1],
                                    o[0] = o[2],
                                    o[1] = o[3],
                                    o[2] = 0,
                                    o[3] = 0,
                                    c--
                            } else {
                                c++;
                            }
                            o[c] = 1,
                                u = !u
                        }
                    }
                    throw new V
                }
                ,
                e.reverseCounters = function (t) {
                    for (var e = t.length, r = 0; r < e / 2; ++r) {
                        var n = t[r];
                        t[r] = t[e - r - 1],
                            t[e - r - 1] = n
                    }
                }
                ,
                e.prototype.parseFoundFinderPattern = function (t, r, n) {
                    var o, i, a;
                    if (n) {
                        for (var s = this.startEnd[0] - 1; s >= 0 && !t.get(s);) {
                            s--;
                        }
                        s++,
                            o = this.startEnd[0] - s,
                            i = s,
                            a = this.startEnd[1]
                    } else {
                        i = this.startEnd[0],
                            o = (a = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
                    }
                    var u, c = this.getDecodeFinderCounters();
                    w.arraycopy(c, 0, c, 1, c.length - 1),
                        c[0] = o;
                    try {
                        u = this.parseFinderValue(c, e.FINDER_PATTERNS)
                    } catch (t) {
                        return null
                    }
                    return new Ce(u, [i, a], i, a, r)
                }
                ,
                e.prototype.decodeDataCharacter = function (t, r, n, o) {
                    for (var i = this.getDataCharacterCounters(), a = 0; a < i.length; a++) {
                        i[a] = 0;
                    }
                    if (o) {
                        e.recordPatternInReverse(t, r.getStartEnd()[0], i);
                    } else {
                        e.recordPattern(t, r.getStartEnd()[1], i);
                        for (var s = 0, u = i.length - 1; s < u; s++,
                            u--) {
                            var c = i[s];
                            i[s] = i[u],
                                i[u] = c
                        }
                    }
                    var f = vt.sum(new Int32Array(i)) / 17
                        , h = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
                    if (Math.abs(f - h) / h > .3) {
                        throw new V;
                    }
                    var l = this.getOddCounts()
                        , d = this.getEvenCounts()
                        , p = this.getOddRoundingErrors()
                        , g = this.getEvenRoundingErrors();
                    for (s = 0; s < i.length; s++) {
                        var w = 1 * i[s] / f
                            , y = w + .5;
                        if (y < 1) {
                            if (w < .3) {
                                throw new V;
                            }
                            y = 1
                        } else if (y > 8) {
                            if (w > 8.7) {
                                throw new V;
                            }
                            y = 8
                        }
                        var v = s / 2;
                        0 == (1 & s) ? (l[v] = y,
                            p[v] = w - y) : (d[v] = y,
                            g[v] = w - y)
                    }
                    this.adjustOddEvenCounts(17);
                    var _ = 4 * r.getValue() + (n ? 0 : 2) + (o ? 0 : 1) - 1
                        , m = 0
                        , C = 0;
                    for (s = l.length - 1; s >= 0; s--) {
                        if (e.isNotA1left(r, n, o)) {
                            var A = e.WEIGHTS[_][2 * s];
                            C += l[s] * A
                        }
                        m += l[s]
                    }
                    var E = 0;
                    for (s = d.length - 1; s >= 0; s--) {
                        if (e.isNotA1left(r, n, o)) {
                            A = e.WEIGHTS[_][2 * s + 1];
                            E += d[s] * A
                        }
                    }
                    var I = C + E;
                    if (0 != (1 & m) || m > 13 || m < 4) {
                        throw new V;
                    }
                    var S = (13 - m) / 2
                        , O = e.SYMBOL_WIDEST[S]
                        , T = 9 - O
                        , b = Ee.getRSSvalue(l, O, !0)
                        , R = Ee.getRSSvalue(d, T, !1)
                        , N = e.EVEN_TOTAL_SUBSET[S]
                        , D = e.GSUM[S];
                    return new me(b * N + R + D, I)
                }
                ,
                e.isNotA1left = function (t, e, r) {
                    return !(0 === t.getValue() && e && r)
                }
                ,
                e.prototype.adjustOddEvenCounts = function (t) {
                    var r = vt.sum(new Int32Array(this.getOddCounts()))
                        , n = vt.sum(new Int32Array(this.getEvenCounts()))
                        , o = !1
                        , i = !1;
                    r > 13 ? i = !0 : r < 4 && (o = !0);
                    var a = !1
                        , s = !1;
                    n > 13 ? s = !0 : n < 4 && (a = !0);
                    var u = r + n - t
                        , c = 1 == (1 & r)
                        , f = 0 == (1 & n);
                    if (1 === u) {
                        if (c) {
                            if (f) {
                                throw new V;
                            }
                            i = !0
                        } else {
                            if (!f) {
                                throw new V;
                            }
                            s = !0
                        }
                    } else if (-1 === u) {
                        if (c) {
                            if (f) {
                                throw new V;
                            }
                            o = !0
                        } else {
                            if (!f) {
                                throw new V;
                            }
                            a = !0
                        }
                    } else {
                        if (0 !== u) {
                            throw new V;
                        }
                        if (c) {
                            if (!f) {
                                throw new V;
                            }
                            r < n ? (o = !0,
                                s = !0) : (i = !0,
                                a = !0)
                        } else if (f) {
                            throw new V
                        }
                    }
                    if (o) {
                        if (i) {
                            throw new V;
                        }
                        e.increment(this.getOddCounts(), this.getOddRoundingErrors())
                    }
                    if (i && e.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
                        a) {
                        if (s) {
                            throw new V;
                        }
                        e.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                    }
                    s && e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                }
                ,
                e.SYMBOL_WIDEST = [7, 5, 4, 3, 1],
                e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204],
                e.GSUM = [0, 348, 1388, 2948, 3988],
                e.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]),
                    Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]),
                    Int32Array.from([2, 2, 9, 1])],
                e.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63],
                    [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91],
                    [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108],
                    [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156],
                    [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155],
                    [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177],
                    [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115],
                    [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2],
                    [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167],
                    [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124],
                    [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15],
                    [45, 135, 194, 160, 58, 174, 100, 89]],
                e.FINDER_PAT_A = 0,
                e.FINDER_PAT_B = 1,
                e.FINDER_PAT_C = 2,
                e.FINDER_PAT_D = 3,
                e.FINDER_PAT_E = 4,
                e.FINDER_PAT_F = 5,
                e.FINDER_PATTERN_SEQUENCES = [[e.FINDER_PAT_A, e.FINDER_PAT_A],
                    [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B],
                    [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D],
                    [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_C],
                    [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_D, e.FINDER_PAT_F],
                    [e.FINDER_PAT_A, e.FINDER_PAT_E, e.FINDER_PAT_B, e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F,
                        e.FINDER_PAT_F],
                    [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C,
                        e.FINDER_PAT_D, e.FINDER_PAT_D],
                    [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C,
                        e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E],
                    [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_C,
                        e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F],
                    [e.FINDER_PAT_A, e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B, e.FINDER_PAT_C, e.FINDER_PAT_D,
                        e.FINDER_PAT_D, e.FINDER_PAT_E, e.FINDER_PAT_E, e.FINDER_PAT_F, e.FINDER_PAT_F]],
                e.MAX_PAIRS = 11,
                e
        }(_e)
            , ur = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , cr = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e, r) || this;
                return o.count = 0,
                    o.finderPattern = n,
                    o
            }

            return ur(e, t),
                e.prototype.getFinderPattern = function () {
                    return this.finderPattern
                }
                ,
                e.prototype.getCount = function () {
                    return this.count
                }
                ,
                e.prototype.incrementCount = function () {
                    this.count++
                }
                ,
                e
        }(me)
            , fr = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , hr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , lr = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.possibleLeftPairs = [],
                    e.possibleRightPairs = [],
                    e
            }

            return fr(e, t),
                e.prototype.decodeRow = function (t, r, n) {
                    var o, i, a, s, u = this.decodePair(r, !1, t, n);
                    e.addOrTally(this.possibleLeftPairs, u),
                        r.reverse();
                    var c = this.decodePair(r, !0, t, n);
                    e.addOrTally(this.possibleRightPairs, c),
                        r.reverse();
                    try {
                        for (var f = hr(this.possibleLeftPairs), h = f.next(); !h.done; h = f.next()) {
                            var l = h.value;
                            if (l.getCount() > 1) {
                                try {
                                    for (var d = (a = void 0,
                                        hr(this.possibleRightPairs)), p = d.next(); !p.done; p = d.next()) {
                                        var g = p.value;
                                        if (g.getCount() > 1 && e.checkChecksum(l, g)) {
                                            return e.constructResult(l, g)
                                        }
                                    }
                                } catch (t) {
                                    a = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        p && !p.done && (s = d.return) && s.call(d)
                                    } finally {
                                        if (a) {
                                            throw a.error
                                        }
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            h && !h.done && (i = f.return) && i.call(f)
                        } finally {
                            if (o) {
                                throw o.error
                            }
                        }
                    }
                    throw new V
                }
                ,
                e.addOrTally = function (t, e) {
                    var r, n;
                    if (null != e) {
                        var o = !1;
                        try {
                            for (var i = hr(t), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                if (s.getValue() === e.getValue()) {
                                    s.incrementCount(),
                                        o = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) {
                                    throw r.error
                                }
                            }
                        }
                        o || t.push(e)
                    }
                }
                ,
                e.prototype.reset = function () {
                    this.possibleLeftPairs.length = 0,
                        this.possibleRightPairs.length = 0
                }
                ,
                e.constructResult = function (t, e) {
                    for (var r = 4537077 * t.getValue() + e.getValue(), n = new String(r).toString(), o = new F,
                        i = 13 - n.length; i > 0; i--) {
                        o.append("0");
                    }
                    o.append(n);
                    var a = 0;
                    for (i = 0; i < 13; i++) {
                        var s = o.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
                        a += 0 == (1 & i) ? 3 * s : s
                    }
                    10 === (a = 10 - a % 10) && (a = 0),
                        o.append(a.toString());
                    var u = t.getFinderPattern().getResultPoints()
                        , c = e.getFinderPattern().getResultPoints();
                    return new tt(o.toString(), null, 0, [u[0], u[1], c[0], c[1]], rt.RSS_14, (new Date).getTime())
                }
                ,
                e.checkChecksum = function (t, e) {
                    var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79
                        , n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                    return n > 72 && n--,
                    n > 8 && n--,
                    r === n
                }
                ,
                e.prototype.decodePair = function (t, e, r, n) {
                    try {
                        var o = this.findFinderPattern(t, e)
                            , i = this.parseFoundFinderPattern(t, r, e, o)
                            , a = null == n ? null : n.get(O.NEED_RESULT_POINT_CALLBACK);
                        if (null != a) {
                            var s = (o[0] + o[1]) / 2;
                            e && (s = t.getSize() - 1 - s),
                                a.foundPossibleResultPoint(new mt(s, r))
                        }
                        var u = this.decodeDataCharacter(t, i, !0)
                            , c = this.decodeDataCharacter(t, i, !1);
                        return new cr(1597 * u.getValue() + c.getValue(),
                            u.getChecksumPortion() + 4 * c.getChecksumPortion(), i)
                    } catch (t) {
                        return null
                    }
                }
                ,
                e.prototype.decodeDataCharacter = function (t, r, n) {
                    for (var o = this.getDataCharacterCounters(), i = 0; i < o.length; i++) {
                        o[i] = 0;
                    }
                    if (n) {
                        Bt.recordPatternInReverse(t, r.getStartEnd()[0], o);
                    } else {
                        Bt.recordPattern(t, r.getStartEnd()[1] + 1, o);
                        for (var a = 0, s = o.length - 1; a < s; a++,
                            s--) {
                            var u = o[a];
                            o[a] = o[s],
                                o[s] = u
                        }
                    }
                    var c = n ? 16 : 15
                        , f = vt.sum(new Int32Array(o)) / c
                        , h = this.getOddCounts()
                        , l = this.getEvenCounts()
                        , d = this.getOddRoundingErrors()
                        , p = this.getEvenRoundingErrors();
                    for (a = 0; a < o.length; a++) {
                        var g = o[a] / f
                            , w = Math.floor(g + .5);
                        w < 1 ? w = 1 : w > 8 && (w = 8);
                        var y = Math.floor(a / 2);
                        0 == (1 & a) ? (h[y] = w,
                            d[y] = g - w) : (l[y] = w,
                            p[y] = g - w)
                    }
                    this.adjustOddEvenCounts(n, c);
                    var v = 0
                        , _ = 0;
                    for (a = h.length - 1; a >= 0; a--) {
                        _ *= 9,
                            _ += h[a],
                            v += h[a];
                    }
                    var m = 0
                        , C = 0;
                    for (a = l.length - 1; a >= 0; a--) {
                        m *= 9,
                            m += l[a],
                            C += l[a];
                    }
                    var A = _ + 3 * m;
                    if (n) {
                        if (0 != (1 & v) || v > 12 || v < 4) {
                            throw new V;
                        }
                        var E = (12 - v) / 2
                            , I = 9 - (R = e.OUTSIDE_ODD_WIDEST[E])
                            , S = Ee.getRSSvalue(h, R, !1)
                            , O = Ee.getRSSvalue(l, I, !0)
                            , T = e.OUTSIDE_EVEN_TOTAL_SUBSET[E]
                            , b = e.OUTSIDE_GSUM[E];
                        return new me(S * T + O + b, A)
                    }
                    if (0 != (1 & C) || C > 10 || C < 4) {
                        throw new V;
                    }
                    E = (10 - C) / 2,
                        I = 9 - (R = e.INSIDE_ODD_WIDEST[E]),
                        S = Ee.getRSSvalue(h, R, !0),
                        O = Ee.getRSSvalue(l, I, !1);
                    var R, N = e.INSIDE_ODD_TOTAL_SUBSET[E];
                    b = e.INSIDE_GSUM[E];
                    return new me(O * N + S + b, A)
                }
                ,
                e.prototype.findFinderPattern = function (t, e) {
                    var r = this.getDecodeFinderCounters();
                    r[0] = 0,
                        r[1] = 0,
                        r[2] = 0,
                        r[3] = 0;
                    for (var n = t.getSize(), o = !1, i = 0; i < n && e !== (o = !t.get(i));) {
                        i++;
                    }
                    for (var a = 0, s = i, u = i; u < n; u++) {
                        if (t.get(u) !== o) {
                            r[a]++;
                        } else {
                            if (3 === a) {
                                if (_e.isFinderPattern(r)) {
                                    return [s, u];
                                }
                                s += r[0] + r[1],
                                    r[0] = r[2],
                                    r[1] = r[3],
                                    r[2] = 0,
                                    r[3] = 0,
                                    a--
                            } else {
                                a++;
                            }
                            r[a] = 1,
                                o = !o
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.parseFoundFinderPattern = function (t, r, n, o) {
                    for (var i = t.get(o[0]), a = o[0] - 1; a >= 0 && i !== t.get(a);) {
                        a--;
                    }
                    a++;
                    var s = o[0] - a
                        , u = this.getDecodeFinderCounters()
                        , c = new Int32Array(u.length);
                    w.arraycopy(u, 0, c, 1, u.length - 1),
                        c[0] = s;
                    var f = this.parseFinderValue(c, e.FINDER_PATTERNS)
                        , h = a
                        , l = o[1];
                    return n && (h = t.getSize() - 1 - h,
                        l = t.getSize() - 1 - l),
                        new Ce(f, [a, o[1]], h, l, r)
                }
                ,
                e.prototype.adjustOddEvenCounts = function (t, e) {
                    var r = vt.sum(new Int32Array(this.getOddCounts()))
                        , n = vt.sum(new Int32Array(this.getEvenCounts()))
                        , o = !1
                        , i = !1
                        , a = !1
                        , s = !1;
                    t ? (r > 12 ? i = !0 : r < 4 && (o = !0),
                        n > 12 ? s = !0 : n < 4 && (a = !0)) : (r > 11 ? i = !0 : r < 5 && (o = !0),
                        n > 10 ? s = !0 : n < 4 && (a = !0));
                    var u = r + n - e
                        , c = (1 & r) == (t ? 1 : 0)
                        , f = 1 == (1 & n);
                    if (1 === u) {
                        if (c) {
                            if (f) {
                                throw new V;
                            }
                            i = !0
                        } else {
                            if (!f) {
                                throw new V;
                            }
                            s = !0
                        }
                    } else if (-1 === u) {
                        if (c) {
                            if (f) {
                                throw new V;
                            }
                            o = !0
                        } else {
                            if (!f) {
                                throw new V;
                            }
                            a = !0
                        }
                    } else {
                        if (0 !== u) {
                            throw new V;
                        }
                        if (c) {
                            if (!f) {
                                throw new V;
                            }
                            r < n ? (o = !0,
                                s = !0) : (i = !0,
                                a = !0)
                        } else if (f) {
                            throw new V
                        }
                    }
                    if (o) {
                        if (i) {
                            throw new V;
                        }
                        _e.increment(this.getOddCounts(), this.getOddRoundingErrors())
                    }
                    if (i && _e.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
                        a) {
                        if (s) {
                            throw new V;
                        }
                        _e.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                    }
                    s && _e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                }
                ,
                e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126],
                e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81],
                e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715],
                e.INSIDE_GSUM = [0, 336, 1036, 1516],
                e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1],
                e.INSIDE_ODD_WIDEST = [2, 4, 6, 8],
                e.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]),
                    Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]),
                    Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]),
                    Int32Array.from([1, 3, 9, 1])],
                e
        }(_e)
            , dr = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , pr = function (t) {
            function e(e) {
                var r = t.call(this) || this;
                r.readers = [];
                var n = e ? e.get(O.POSSIBLE_FORMATS) : null
                    , o = e && void 0 !== e.get(O.ASSUME_CODE_39_CHECK_DIGIT);
                return n && ((n.includes(rt.EAN_13) || n.includes(rt.UPC_A) || n.includes(rt.EAN_8) || n.includes(
                    rt.UPC_E)) && r.readers.push(new pe(e)),
                n.includes(rt.CODE_39) && r.readers.push(new Vt(o)),
                n.includes(rt.CODE_93) && r.readers.push(new Gt),
                n.includes(rt.CODE_128) && r.readers.push(new Ft),
                n.includes(rt.ITF) && r.readers.push(new zt),
                n.includes(rt.CODABAR) && r.readers.push(new we),
                n.includes(rt.RSS_14) && r.readers.push(new lr),
                n.includes(rt.RSS_EXPANDED) && (console.warn(
                    "RSS Expanded reader IS NOT ready for production yet! use at your own risk."),
                    r.readers.push(new sr))),
                0 === r.readers.length && (r.readers.push(new pe(e)),
                    r.readers.push(new Vt),
                    r.readers.push(new Gt),
                    r.readers.push(new pe(e)),
                    r.readers.push(new Ft),
                    r.readers.push(new zt),
                    r.readers.push(new lr)),
                    r
            }

            return dr(e, t),
                e.prototype.decodeRow = function (t, e, r) {
                    for (var n = 0; n < this.readers.length; n++) {
                        try {
                            return this.readers[n].decodeRow(t, e, r)
                        } catch (t) {
                        }
                    }
                    throw new V
                }
                ,
                e.prototype.reset = function () {
                    this.readers.forEach((function (t) {
                            return t.reset()
                        }
                    ))
                }
                ,
                e
        }(Bt)
            , gr = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e, r) {
                return void 0 === e && (e = 500),
                t.call(this, new pr(r), e, r) || this
            }

            gr(e, t)
        }($);
        var wr, yr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, vr = function () {
            function t(t, e, r) {
                this.ecCodewords = t,
                    this.ecBlocks = [e],
                r && this.ecBlocks.push(r)
            }

            return t.prototype.getECCodewords = function () {
                return this.ecCodewords
            }
                ,
                t.prototype.getECBlocks = function () {
                    return this.ecBlocks
                }
                ,
                t
        }(), _r = function () {
            function t(t, e) {
                this.count = t,
                    this.dataCodewords = e
            }

            return t.prototype.getCount = function () {
                return this.count
            }
                ,
                t.prototype.getDataCodewords = function () {
                    return this.dataCodewords
                }
                ,
                t
        }(), mr = function () {
            function t(t, e, r, n, o, i) {
                var a, s;
                this.versionNumber = t,
                    this.symbolSizeRows = e,
                    this.symbolSizeColumns = r,
                    this.dataRegionSizeRows = n,
                    this.dataRegionSizeColumns = o,
                    this.ecBlocks = i;
                var u = 0
                    , c = i.getECCodewords()
                    , f = i.getECBlocks();
                try {
                    for (var h = yr(f), l = h.next(); !l.done; l = h.next()) {
                        var d = l.value;
                        u += d.getCount() * (d.getDataCodewords() + c)
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (s = h.return) && s.call(h)
                    } finally {
                        if (a) {
                            throw a.error
                        }
                    }
                }
                this.totalCodewords = u
            }

            return t.prototype.getVersionNumber = function () {
                return this.versionNumber
            }
                ,
                t.prototype.getSymbolSizeRows = function () {
                    return this.symbolSizeRows
                }
                ,
                t.prototype.getSymbolSizeColumns = function () {
                    return this.symbolSizeColumns
                }
                ,
                t.prototype.getDataRegionSizeRows = function () {
                    return this.dataRegionSizeRows
                }
                ,
                t.prototype.getDataRegionSizeColumns = function () {
                    return this.dataRegionSizeColumns
                }
                ,
                t.prototype.getTotalCodewords = function () {
                    return this.totalCodewords
                }
                ,
                t.prototype.getECBlocks = function () {
                    return this.ecBlocks
                }
                ,
                t.getVersionForDimensions = function (e, r) {
                    var n, o;
                    if (0 != (1 & e) || 0 != (1 & r)) {
                        throw new b;
                    }
                    try {
                        for (var i = yr(t.VERSIONS), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value;
                            if (s.symbolSizeRows === e && s.symbolSizeColumns === r) {
                                return s
                            }
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (o = i.return) && o.call(i)
                        } finally {
                            if (n) {
                                throw n.error
                            }
                        }
                    }
                    throw new b
                }
                ,
                t.prototype.toString = function () {
                    return "" + this.versionNumber
                }
                ,
                t.buildVersions = function () {
                    return [new t(1, 10, 10, 8, 8, new vr(5, new _r(1, 3))),
                        new t(2, 12, 12, 10, 10, new vr(7, new _r(1, 5))),
                        new t(3, 14, 14, 12, 12, new vr(10, new _r(1, 8))),
                        new t(4, 16, 16, 14, 14, new vr(12, new _r(1, 12))),
                        new t(5, 18, 18, 16, 16, new vr(14, new _r(1, 18))),
                        new t(6, 20, 20, 18, 18, new vr(18, new _r(1, 22))),
                        new t(7, 22, 22, 20, 20, new vr(20, new _r(1, 30))),
                        new t(8, 24, 24, 22, 22, new vr(24, new _r(1, 36))),
                        new t(9, 26, 26, 24, 24, new vr(28, new _r(1, 44))),
                        new t(10, 32, 32, 14, 14, new vr(36, new _r(1, 62))),
                        new t(11, 36, 36, 16, 16, new vr(42, new _r(1, 86))),
                        new t(12, 40, 40, 18, 18, new vr(48, new _r(1, 114))),
                        new t(13, 44, 44, 20, 20, new vr(56, new _r(1, 144))),
                        new t(14, 48, 48, 22, 22, new vr(68, new _r(1, 174))),
                        new t(15, 52, 52, 24, 24, new vr(42, new _r(2, 102))),
                        new t(16, 64, 64, 14, 14, new vr(56, new _r(2, 140))),
                        new t(17, 72, 72, 16, 16, new vr(36, new _r(4, 92))),
                        new t(18, 80, 80, 18, 18, new vr(48, new _r(4, 114))),
                        new t(19, 88, 88, 20, 20, new vr(56, new _r(4, 144))),
                        new t(20, 96, 96, 22, 22, new vr(68, new _r(4, 174))),
                        new t(21, 104, 104, 24, 24, new vr(56, new _r(6, 136))),
                        new t(22, 120, 120, 18, 18, new vr(68, new _r(6, 175))),
                        new t(23, 132, 132, 20, 20, new vr(62, new _r(8, 163))),
                        new t(24, 144, 144, 22, 22, new vr(62, new _r(8, 156), new _r(2, 155))),
                        new t(25, 8, 18, 6, 16, new vr(7, new _r(1, 5))),
                        new t(26, 8, 32, 6, 14, new vr(11, new _r(1, 10))),
                        new t(27, 12, 26, 10, 24, new vr(14, new _r(1, 16))),
                        new t(28, 12, 36, 10, 16, new vr(18, new _r(1, 22))),
                        new t(29, 16, 36, 14, 16, new vr(24, new _r(1, 32))),
                        new t(30, 16, 48, 14, 22, new vr(28, new _r(1, 49)))]
                }
                ,
                t.VERSIONS = t.buildVersions(),
                t
        }(), Cr = function () {
            function t(e) {
                var r = e.getHeight();
                if (r < 8 || r > 144 || 0 != (1 & r)) {
                    throw new b;
                }
                this.version = t.readVersion(e),
                    this.mappingBitMatrix = this.extractDataRegion(e),
                    this.readMappingMatrix = new k(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
            }

            return t.prototype.getVersion = function () {
                return this.version
            }
                ,
                t.readVersion = function (t) {
                    var e = t.getHeight()
                        , r = t.getWidth();
                    return mr.getVersionForDimensions(e, r)
                }
                ,
                t.prototype.readCodewords = function () {
                    var t = new Int8Array(this.version.getTotalCodewords())
                        , e = 0
                        , r = 4
                        , n = 0
                        , o = this.mappingBitMatrix.getHeight()
                        , i = this.mappingBitMatrix.getWidth()
                        , a = !1
                        , s = !1
                        , u = !1
                        , c = !1;
                    do {
                        if (r !== o || 0 !== n || a) {
                            if (r !== o - 2 || 0 !== n || 0 == (3 & i) || s) {
                                if (r !== o + 4 || 2 !== n || 0 != (7 & i) || u) {
                                    if (r !== o - 2 || 0 !== n || 4 != (7 & i) || c) {
                                        do {
                                            r < o && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255
                                                & this.readUtah(r, n, o, i)),
                                                r -= 2,
                                                n += 2
                                        } while (r >= 0 && n < i);
                                        r += 1,
                                            n += 3;
                                        do {
                                            r >= 0 && n < i && !this.readMappingMatrix.get(n, r) && (t[e++] = 255
                                                & this.readUtah(r, n, o, i)),
                                                r += 2,
                                                n -= 2
                                        } while (r < o && n >= 0);
                                        r += 3,
                                            n += 1
                                    } else {
                                        t[e++] = 255 & this.readCorner4(o, i),
                                            r -= 2,
                                            n += 2,
                                            c = !0;
                                    }
                                } else {
                                    t[e++] = 255 & this.readCorner3(o, i),
                                        r -= 2,
                                        n += 2,
                                        u = !0;
                                }
                            } else {
                                t[e++] = 255 & this.readCorner2(o, i),
                                    r -= 2,
                                    n += 2,
                                    s = !0;
                            }
                        } else {
                            t[e++] = 255 & this.readCorner1(o, i),
                                r -= 2,
                                n += 2,
                                a = !0
                        }
                    } while (r < o || n < i);
                    if (e !== this.version.getTotalCodewords()) {
                        throw new b;
                    }
                    return t
                }
                ,
                t.prototype.readModule = function (t, e, r, n) {
                    return t < 0 && (t += r,
                        e += 4 - (r + 4 & 7)),
                    e < 0 && (e += n,
                        t += 4 - (n + 4 & 7)),
                        this.readMappingMatrix.set(e, t),
                        this.mappingBitMatrix.get(e, t)
                }
                ,
                t.prototype.readUtah = function (t, e, r, n) {
                    var o = 0;
                    return this.readModule(t - 2, e - 2, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t - 2, e - 1, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t - 1, e - 2, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t - 1, e - 1, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t - 1, e, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t, e - 2, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t, e - 1, r, n) && (o |= 1),
                        o <<= 1,
                    this.readModule(t, e, r, n) && (o |= 1),
                        o
                }
                ,
                t.prototype.readCorner1 = function (t, e) {
                    var r = 0;
                    return this.readModule(t - 1, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 1, 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 1, 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(2, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(3, e - 1, t, e) && (r |= 1),
                        r
                }
                ,
                t.prototype.readCorner2 = function (t, e) {
                    var r = 0;
                    return this.readModule(t - 3, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 2, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 4, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 3, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                        r
                }
                ,
                t.prototype.readCorner3 = function (t, e) {
                    var r = 0;
                    return this.readModule(t - 1, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 1, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 3, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 3, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                        r
                }
                ,
                t.prototype.readCorner4 = function (t, e) {
                    var r = 0;
                    return this.readModule(t - 3, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 2, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(t - 1, 0, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 2, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(0, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(1, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(2, e - 1, t, e) && (r |= 1),
                        r <<= 1,
                    this.readModule(3, e - 1, t, e) && (r |= 1),
                        r
                }
                ,
                t.prototype.extractDataRegion = function (t) {
                    var e = this.version.getSymbolSizeRows()
                        , r = this.version.getSymbolSizeColumns();
                    if (t.getHeight() !== e) {
                        throw new h("Dimension of bitMatrix must match the version size");
                    }
                    for (var n = this.version.getDataRegionSizeRows(), o = this.version.getDataRegionSizeColumns(),
                        i = e / n | 0, a = r / o | 0, s = new k(a * o, i * n), u = 0; u < i; ++u) {
                        for (var c = u * n, f = 0; f < a; ++f) {
                            for (var l = f * o, d = 0; d < n; ++d) {
                                for (var p = u * (n + 2) + 1 + d, g = c + d, w = 0; w < o; ++w) {
                                    var y = f * (o + 2) + 1 + w;
                                    if (t.get(y, p)) {
                                        var v = l + w;
                                        s.set(v, g)
                                    }
                                }
                            }
                        }
                    }
                    return s
                }
                ,
                t
        }(), Ar = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Er = function () {
            function t(t, e) {
                this.numDataCodewords = t,
                    this.codewords = e
            }

            return t.getDataBlocks = function (e, r) {
                var n, o, i, a, s = r.getECBlocks(), u = 0, c = s.getECBlocks();
                try {
                    for (var f = Ar(c), l = f.next(); !l.done; l = f.next()) {
                        u += (y = l.value).getCount()
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (o = f.return) && o.call(f)
                    } finally {
                        if (n) {
                            throw n.error
                        }
                    }
                }
                var d = new Array(u)
                    , p = 0;
                try {
                    for (var g = Ar(c), w = g.next(); !w.done; w = g.next()) {
                        for (var y = w.value, v = 0; v < y.getCount(); v++) {
                            var _ = y.getDataCodewords()
                                , m = s.getECCodewords() + _;
                            d[p++] = new t(_, new Uint8Array(m))
                        }
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        w && !w.done && (a = g.return) && a.call(g)
                    } finally {
                        if (i) {
                            throw i.error
                        }
                    }
                }
                var C = d[0].codewords.length - s.getECCodewords()
                    , A = C - 1
                    , E = 0;
                for (v = 0; v < A; v++) {
                    for (var I = 0; I < p; I++) {
                        d[I].codewords[v] = e[E++];
                    }
                }
                var S = 24 === r.getVersionNumber()
                    , O = S ? 8 : p;
                for (I = 0; I < O; I++) {
                    d[I].codewords[C - 1] = e[E++];
                }
                var T = d[0].codewords.length;
                for (v = C; v < T; v++) {
                    for (I = 0; I < p; I++) {
                        var b = S ? (I + 8) % p : I
                            , R = S && b > 7 ? v - 1 : v;
                        d[b].codewords[R] = e[E++]
                    }
                }
                if (E !== e.length) {
                    throw new h;
                }
                return d
            }
                ,
                t.prototype.getNumDataCodewords = function () {
                    return this.numDataCodewords
                }
                ,
                t.prototype.getCodewords = function () {
                    return this.codewords
                }
                ,
                t
        }(), Ir = function () {
            function t(t) {
                this.bytes = t,
                    this.byteOffset = 0,
                    this.bitOffset = 0
            }

            return t.prototype.getBitOffset = function () {
                return this.bitOffset
            }
                ,
                t.prototype.getByteOffset = function () {
                    return this.byteOffset
                }
                ,
                t.prototype.readBits = function (t) {
                    if (t < 1 || t > 32 || t > this.available()) {
                        throw new h("" + t);
                    }
                    var e = 0
                        , r = this.bitOffset
                        , n = this.byteOffset
                        , o = this.bytes;
                    if (r > 0) {
                        var i = 8 - r
                            , a = t < i ? t : i
                            , s = 255 >> 8 - a << (u = i - a);
                        e = (o[n] & s) >> u,
                            t -= a,
                        8 === (r += a) && (r = 0,
                            n++)
                    }
                    if (t > 0) {
                        for (; t >= 8;) {
                            e = e << 8 | 255 & o[n],
                                n++,
                                t -= 8;
                        }
                        if (t > 0) {
                            var u;
                            s = 255 >> (u = 8 - t) << u;
                            e = e << t | (o[n] & s) >> u,
                                r += t
                        }
                    }
                    return this.bitOffset = r,
                        this.byteOffset = n,
                        e
                }
                ,
                t.prototype.available = function () {
                    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                }
                ,
                t
        }();
        !function (t) {
            t[t.PAD_ENCODE = 0] = "PAD_ENCODE",
                t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE",
                t[t.C40_ENCODE = 2] = "C40_ENCODE",
                t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE",
                t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE",
                t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE",
                t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE"
        }(wr || (wr = {}));
        var Sr, Or = function () {
            function t() {
            }

            return t.decode = function (t) {
                var e = new Ir(t)
                    , r = new F
                    , n = new F
                    , o = new Array
                    , i = wr.ASCII_ENCODE;
                do {
                    if (i === wr.ASCII_ENCODE) {
                        i = this.decodeAsciiSegment(e, r, n);
                    } else {
                        switch (i) {
                            case wr.C40_ENCODE:
                                this.decodeC40Segment(e, r);
                                break;
                            case wr.TEXT_ENCODE:
                                this.decodeTextSegment(e, r);
                                break;
                            case wr.ANSIX12_ENCODE:
                                this.decodeAnsiX12Segment(e, r);
                                break;
                            case wr.EDIFACT_ENCODE:
                                this.decodeEdifactSegment(e, r);
                                break;
                            case wr.BASE256_ENCODE:
                                this.decodeBase256Segment(e, r, o);
                                break;
                            default:
                                throw new b
                        }
                        i = wr.ASCII_ENCODE
                    }
                } while (i !== wr.PAD_ENCODE && e.available() > 0);
                return n.length() > 0 && r.append(n.toString()),
                    new it(t, r.toString(), 0 === o.length ? null : o, null)
            }
                ,
                t.decodeAsciiSegment = function (t, e, r) {
                    var n = !1;
                    do {
                        var o = t.readBits(8);
                        if (0 === o) {
                            throw new b;
                        }
                        if (o <= 128) {
                            return n && (o += 128),
                                e.append(String.fromCharCode(o - 1)),
                                wr.ASCII_ENCODE;
                        }
                        if (129 === o) {
                            return wr.PAD_ENCODE;
                        }
                        if (o <= 229) {
                            var i = o - 130;
                            i < 10 && e.append("0"),
                                e.append("" + i)
                        } else {
                            switch (o) {
                                case 230:
                                    return wr.C40_ENCODE;
                                case 231:
                                    return wr.BASE256_ENCODE;
                                case 232:
                                    e.append(String.fromCharCode(29));
                                    break;
                                case 233:
                                case 234:
                                case 241:
                                    break;
                                case 235:
                                    n = !0;
                                    break;
                                case 236:
                                    e.append("[)>05"),
                                        r.insert(0, "");
                                    break;
                                case 237:
                                    e.append("[)>06"),
                                        r.insert(0, "");
                                    break;
                                case 238:
                                    return wr.ANSIX12_ENCODE;
                                case 239:
                                    return wr.TEXT_ENCODE;
                                case 240:
                                    return wr.EDIFACT_ENCODE;
                                default:
                                    if (254 !== o || 0 !== t.available()) {
                                        throw new b
                                    }
                            }
                        }
                    } while (t.available() > 0);
                    return wr.ASCII_ENCODE
                }
                ,
                t.decodeC40Segment = function (t, e) {
                    var r = !1
                        , n = []
                        , o = 0;
                    do {
                        if (8 === t.available()) {
                            return;
                        }
                        var i = t.readBits(8);
                        if (254 === i) {
                            return;
                        }
                        this.parseTwoBytes(i, t.readBits(8), n);
                        for (var a = 0; a < 3; a++) {
                            var s = n[a];
                            switch (o) {
                                case 0:
                                    if (s < 3) {
                                        o = s + 1;
                                    } else {
                                        if (!(s < this.C40_BASIC_SET_CHARS.length)) {
                                            throw new b;
                                        }
                                        var u = this.C40_BASIC_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(u.charCodeAt(0) + 128)),
                                            r = !1) : e.append(u)
                                    }
                                    break;
                                case 1:
                                    r ? (e.append(String.fromCharCode(s + 128)),
                                        r = !1) : e.append(String.fromCharCode(s)),
                                        o = 0;
                                    break;
                                case 2:
                                    if (s < this.C40_SHIFT2_SET_CHARS.length) {
                                        u = this.C40_SHIFT2_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(u.charCodeAt(0) + 128)),
                                            r = !1) : e.append(u)
                                    } else {
                                        switch (s) {
                                            case 27:
                                                e.append(String.fromCharCode(29));
                                                break;
                                            case 30:
                                                r = !0;
                                                break;
                                            default:
                                                throw new b
                                        }
                                    }
                                    o = 0;
                                    break;
                                case 3:
                                    r ? (e.append(String.fromCharCode(s + 224)),
                                        r = !1) : e.append(String.fromCharCode(s + 96)),
                                        o = 0;
                                    break;
                                default:
                                    throw new b
                            }
                        }
                    } while (t.available() > 0)
                }
                ,
                t.decodeTextSegment = function (t, e) {
                    var r = !1
                        , n = []
                        , o = 0;
                    do {
                        if (8 === t.available()) {
                            return;
                        }
                        var i = t.readBits(8);
                        if (254 === i) {
                            return;
                        }
                        this.parseTwoBytes(i, t.readBits(8), n);
                        for (var a = 0; a < 3; a++) {
                            var s = n[a];
                            switch (o) {
                                case 0:
                                    if (s < 3) {
                                        o = s + 1;
                                    } else {
                                        if (!(s < this.TEXT_BASIC_SET_CHARS.length)) {
                                            throw new b;
                                        }
                                        var u = this.TEXT_BASIC_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(u.charCodeAt(0) + 128)),
                                            r = !1) : e.append(u)
                                    }
                                    break;
                                case 1:
                                    r ? (e.append(String.fromCharCode(s + 128)),
                                        r = !1) : e.append(String.fromCharCode(s)),
                                        o = 0;
                                    break;
                                case 2:
                                    if (s < this.TEXT_SHIFT2_SET_CHARS.length) {
                                        u = this.TEXT_SHIFT2_SET_CHARS[s];
                                        r ? (e.append(String.fromCharCode(u.charCodeAt(0) + 128)),
                                            r = !1) : e.append(u)
                                    } else {
                                        switch (s) {
                                            case 27:
                                                e.append(String.fromCharCode(29));
                                                break;
                                            case 30:
                                                r = !0;
                                                break;
                                            default:
                                                throw new b
                                        }
                                    }
                                    o = 0;
                                    break;
                                case 3:
                                    if (!(s < this.TEXT_SHIFT3_SET_CHARS.length)) {
                                        throw new b;
                                    }
                                    u = this.TEXT_SHIFT3_SET_CHARS[s];
                                    r ? (e.append(String.fromCharCode(u.charCodeAt(0) + 128)),
                                        r = !1) : e.append(u),
                                        o = 0;
                                    break;
                                default:
                                    throw new b
                            }
                        }
                    } while (t.available() > 0)
                }
                ,
                t.decodeAnsiX12Segment = function (t, e) {
                    var r = [];
                    do {
                        if (8 === t.available()) {
                            return;
                        }
                        var n = t.readBits(8);
                        if (254 === n) {
                            return;
                        }
                        this.parseTwoBytes(n, t.readBits(8), r);
                        for (var o = 0; o < 3; o++) {
                            var i = r[o];
                            switch (i) {
                                case 0:
                                    e.append("\r");
                                    break;
                                case 1:
                                    e.append("*");
                                    break;
                                case 2:
                                    e.append(">");
                                    break;
                                case 3:
                                    e.append(" ");
                                    break;
                                default:
                                    if (i < 14) {
                                        e.append(String.fromCharCode(i + 44));
                                    } else {
                                        if (!(i < 40)) {
                                            throw new b;
                                        }
                                        e.append(String.fromCharCode(i + 51))
                                    }
                            }
                        }
                    } while (t.available() > 0)
                }
                ,
                t.parseTwoBytes = function (t, e, r) {
                    var n = (t << 8) + e - 1
                        , o = Math.floor(n / 1600);
                    r[0] = o,
                        n -= 1600 * o,
                        o = Math.floor(n / 40),
                        r[1] = o,
                        r[2] = n - 40 * o
                }
                ,
                t.decodeEdifactSegment = function (t, e) {
                    do {
                        if (t.available() <= 16) {
                            return;
                        }
                        for (var r = 0; r < 4; r++) {
                            var n = t.readBits(6);
                            if (31 === n) {
                                var o = 8 - t.getBitOffset();
                                return void (8 !== o && t.readBits(o))
                            }
                            0 == (32 & n) && (n |= 64),
                                e.append(String.fromCharCode(n))
                        }
                    } while (t.available() > 0)
                }
                ,
                t.decodeBase256Segment = function (t, e, r) {
                    var n, o = 1 + t.getByteOffset(), i = this.unrandomize255State(t.readBits(8), o++);
                    if ((n = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(
                        t.readBits(8), o++)) < 0) {
                        throw new b;
                    }
                    for (var a = new Uint8Array(n), s = 0; s < n; s++) {
                        if (t.available() < 8) {
                            throw new b;
                        }
                        a[s] = this.unrandomize255State(t.readBits(8), o++)
                    }
                    r.push(a);
                    try {
                        e.append(B.decode(a, L.ISO88591))
                    } catch (t) {
                        throw new gt("Platform does not support required encoding: " + t.message)
                    }
                }
                ,
                t.unrandomize255State = function (t, e) {
                    var r = t - (149 * e % 255 + 1);
                    return r >= 0 ? r : r + 256
                }
                ,
                t.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B",
                    "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
                    "W", "X", "Y", "Z"],
                t.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
                    ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"],
                t.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a",
                    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
                    "v", "w", "x", "y", "z"],
                t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS,
                t.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~",
                    String.fromCharCode(127)],
                t
        }(), Tr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, br = function () {
            function t() {
                this.rsDecoder = new wt(ht.DATA_MATRIX_FIELD_256)
            }

            return t.prototype.decode = function (t) {
                var e, r, n = new Cr(t), o = n.getVersion(), i = n.readCodewords(), a = Er.getDataBlocks(i, o), s = 0;
                try {
                    for (var u = Tr(a), c = u.next(); !c.done; c = u.next()) {
                        s += c.value.getNumDataCodewords()
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (r = u.return) && r.call(u)
                    } finally {
                        if (e) {
                            throw e.error
                        }
                    }
                }
                for (var f = new Uint8Array(s), h = a.length, l = 0; l < h; l++) {
                    var d = a[l]
                        , p = d.getCodewords()
                        , g = d.getNumDataCodewords();
                    this.correctErrors(p, g);
                    for (var w = 0; w < g; w++) {
                        f[w * h + l] = p[w]
                    }
                }
                return Or.decode(f)
            }
                ,
                t.prototype.correctErrors = function (t, e) {
                    var r = new Int32Array(t);
                    try {
                        this.rsDecoder.decode(r, t.length - e)
                    } catch (t) {
                        throw new p
                    }
                    for (var n = 0; n < e; n++) {
                        t[n] = r[n]
                    }
                }
                ,
                t
        }(), Rr = function () {
            function t(t) {
                this.image = t,
                    this.rectangleDetector = new It(this.image)
            }

            return t.prototype.detect = function () {
                var e = this.rectangleDetector.detect()
                    , r = this.detectSolid1(e);
                if ((r = this.detectSolid2(r))[3] = this.correctTopRight(r),
                    !r[3]) {
                    throw new V;
                }
                var n = (r = this.shiftToModuleCenter(r))[0]
                    , o = r[1]
                    , i = r[2]
                    , a = r[3]
                    , s = this.transitionsBetween(n, a) + 1
                    , u = this.transitionsBetween(i, a) + 1;
                1 == (1 & s) && (s += 1),
                1 == (1 & u) && (u += 1),
                4 * s < 7 * u && 4 * u < 7 * s && (s = u = Math.max(s, u));
                var c = t.sampleGrid(this.image, n, o, i, a, s, u);
                return new Ct(c, [n, o, i, a])
            }
                ,
                t.shiftPoint = function (t, e, r) {
                    var n = (e.getX() - t.getX()) / (r + 1)
                        , o = (e.getY() - t.getY()) / (r + 1);
                    return new mt(t.getX() + n, t.getY() + o)
                }
                ,
                t.moveAway = function (t, e, r) {
                    var n = t.getX()
                        , o = t.getY();
                    return n < e ? n -= 1 : n += 1,
                        o < r ? o -= 1 : o += 1,
                        new mt(n, o)
                }
                ,
                t.prototype.detectSolid1 = function (t) {
                    var e = t[0]
                        , r = t[1]
                        , n = t[3]
                        , o = t[2]
                        , i = this.transitionsBetween(e, r)
                        , a = this.transitionsBetween(r, n)
                        , s = this.transitionsBetween(n, o)
                        , u = this.transitionsBetween(o, e)
                        , c = i
                        , f = [o, e, r, n];
                    return c > a && (c = a,
                        f[0] = e,
                        f[1] = r,
                        f[2] = n,
                        f[3] = o),
                    c > s && (c = s,
                        f[0] = r,
                        f[1] = n,
                        f[2] = o,
                        f[3] = e),
                    c > u && (f[0] = n,
                        f[1] = o,
                        f[2] = e,
                        f[3] = r),
                        f
                }
                ,
                t.prototype.detectSolid2 = function (e) {
                    var r = e[0]
                        , n = e[1]
                        , o = e[2]
                        , i = e[3]
                        , a = this.transitionsBetween(r, i)
                        , s = t.shiftPoint(n, o, 4 * (a + 1))
                        , u = t.shiftPoint(o, n, 4 * (a + 1));
                    return this.transitionsBetween(s, r) < this.transitionsBetween(u, i) ? (e[0] = r,
                        e[1] = n,
                        e[2] = o,
                        e[3] = i) : (e[0] = n,
                        e[1] = o,
                        e[2] = i,
                        e[3] = r),
                        e
                }
                ,
                t.prototype.correctTopRight = function (e) {
                    var r = e[0]
                        , n = e[1]
                        , o = e[2]
                        , i = e[3]
                        , a = this.transitionsBetween(r, i)
                        , s = this.transitionsBetween(n, i)
                        , u = t.shiftPoint(r, n, 4 * (s + 1))
                        , c = t.shiftPoint(o, n, 4 * (a + 1));
                    a = this.transitionsBetween(u, i),
                        s = this.transitionsBetween(c, i);
                    var f = new mt(i.getX() + (o.getX() - n.getX()) / (a + 1),
                        i.getY() + (o.getY() - n.getY()) / (a + 1))
                        , h = new mt(i.getX() + (r.getX() - n.getX()) / (s + 1),
                        i.getY() + (r.getY() - n.getY()) / (s + 1));
                    return this.isValid(f) ? this.isValid(h) ? this.transitionsBetween(u, f) + this.transitionsBetween(
                            c, f) > this.transitionsBetween(u, h) + this.transitionsBetween(c, h) ? f : h : f
                        : this.isValid(h) ? h : null
                }
                ,
                t.prototype.shiftToModuleCenter = function (e) {
                    var r = e[0]
                        , n = e[1]
                        , o = e[2]
                        , i = e[3]
                        , a = this.transitionsBetween(r, i) + 1
                        , s = this.transitionsBetween(o, i) + 1
                        , u = t.shiftPoint(r, n, 4 * s)
                        , c = t.shiftPoint(o, n, 4 * a);
                    1 == (1 & (a = this.transitionsBetween(u, i) + 1)) && (a += 1),
                    1 == (1 & (s = this.transitionsBetween(c, i) + 1)) && (s += 1);
                    var f, h, l = (r.getX() + n.getX() + o.getX() + i.getX()) / 4,
                        d = (r.getY() + n.getY() + o.getY() + i.getY()) / 4;
                    return r = t.moveAway(r, l, d),
                        n = t.moveAway(n, l, d),
                        o = t.moveAway(o, l, d),
                        i = t.moveAway(i, l, d),
                        u = t.shiftPoint(r, n, 4 * s),
                        u = t.shiftPoint(u, i, 4 * a),
                        f = t.shiftPoint(n, r, 4 * s),
                        f = t.shiftPoint(f, o, 4 * a),
                        c = t.shiftPoint(o, i, 4 * s),
                        c = t.shiftPoint(c, n, 4 * a),
                        h = t.shiftPoint(i, o, 4 * s),
                        [u, f, c, h = t.shiftPoint(h, r, 4 * a)]
                }
                ,
                t.prototype.isValid = function (t) {
                    return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY()
                        < this.image.getHeight()
                }
                ,
                t.sampleGrid = function (t, e, r, n, o, i, a) {
                    return Rt.getInstance().sampleGrid(t, i, a, .5, .5, i - .5, .5, i - .5, a - .5, .5, a - .5,
                        e.getX(), e.getY(), o.getX(), o.getY(), n.getX(), n.getY(), r.getX(), r.getY())
                }
                ,
                t.prototype.transitionsBetween = function (t, e) {
                    var r = Math.trunc(t.getX())
                        , n = Math.trunc(t.getY())
                        , o = Math.trunc(e.getX())
                        , i = Math.trunc(e.getY())
                        , a = Math.abs(i - n) > Math.abs(o - r);
                    if (a) {
                        var s = r;
                        r = n,
                            n = s,
                            s = o,
                            o = i,
                            i = s
                    }
                    for (var u = Math.abs(o - r), c = Math.abs(i - n), f = -u / 2, h = n < i ? 1 : -1,
                        l = r < o ? 1 : -1, d = 0, p = this.image.get(a ? n : r, a ? r : n), g = r, w = n; g !== o;
                        g += l) {
                        var y = this.image.get(a ? w : g, a ? g : w);
                        if (y !== p && (d++,
                            p = y),
                        (f += c) > 0) {
                            if (w === i) {
                                break;
                            }
                            w += h,
                                f -= u
                        }
                    }
                    return d
                }
                ,
                t
        }(), Nr = function () {
            function t() {
                this.decoder = new br
            }

            return t.prototype.decode = function (e, r) {
                var n, o;
                if (void 0 === r && (r = null),
                null != r && r.has(O.PURE_BARCODE)) {
                    var i = t.extractPureBits(e.getBlackMatrix());
                    n = this.decoder.decode(i),
                        o = t.NO_POINTS
                } else {
                    var a = new Rr(e.getBlackMatrix()).detect();
                    n = this.decoder.decode(a.getBits()),
                        o = a.getPoints()
                }
                var s = n.getRawBytes()
                    , u = new tt(n.getText(), s, 8 * s.length, o, rt.DATA_MATRIX, w.currentTimeMillis())
                    , c = n.getByteSegments();
                null != c && u.putMetadata(ot.BYTE_SEGMENTS, c);
                var f = n.getECLevel();
                return null != f && u.putMetadata(ot.ERROR_CORRECTION_LEVEL, f),
                    u
            }
                ,
                t.prototype.reset = function () {
                }
                ,
                t.extractPureBits = function (t) {
                    var e = t.getTopLeftOnBit()
                        , r = t.getBottomRightOnBit();
                    if (null == e || null == r) {
                        throw new V;
                    }
                    var n = this.moduleSize(e, t)
                        , o = e[1]
                        , i = r[1]
                        , a = e[0]
                        , s = (r[0] - a + 1) / n
                        , u = (i - o + 1) / n;
                    if (s <= 0 || u <= 0) {
                        throw new V;
                    }
                    var c = n / 2;
                    o += c,
                        a += c;
                    for (var f = new k(s, u), h = 0; h < u; h++) {
                        for (var l = o + h * n, d = 0; d < s; d++) {
                            t.get(a + d * n, l) && f.set(d, h);
                        }
                    }
                    return f
                }
                ,
                t.moduleSize = function (t, e) {
                    for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o);) {
                        n++;
                    }
                    if (n === r) {
                        throw new V;
                    }
                    var i = n - t[0];
                    if (0 === i) {
                        throw new V;
                    }
                    return i
                }
                ,
                t.NO_POINTS = [],
                t
        }(), Dr = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e) {
                return void 0 === e && (e = 500),
                t.call(this, new Nr, e) || this
            }

            Dr(e, t)
        }($),
            function (t) {
                t[t.L = 0] = "L",
                    t[t.M = 1] = "M",
                    t[t.Q = 2] = "Q",
                    t[t.H = 3] = "H"
            }(Sr || (Sr = {}));
        var Mr, Pr = function () {
            function t(e, r, n) {
                this.value = e,
                    this.stringValue = r,
                    this.bits = n,
                    t.FOR_BITS.set(n, this),
                    t.FOR_VALUE.set(e, this)
            }

            return t.prototype.getValue = function () {
                return this.value
            }
                ,
                t.prototype.getBits = function () {
                    return this.bits
                }
                ,
                t.fromString = function (e) {
                    switch (e) {
                        case "L":
                            return t.L;
                        case "M":
                            return t.M;
                        case "Q":
                            return t.Q;
                        case "H":
                            return t.H;
                        default:
                            throw new c(e + "not available")
                    }
                }
                ,
                t.prototype.toString = function () {
                    return this.stringValue
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.value === r.value
                }
                ,
                t.forBits = function (e) {
                    if (e < 0 || e >= t.FOR_BITS.size) {
                        throw new h;
                    }
                    return t.FOR_BITS.get(e)
                }
                ,
                t.FOR_BITS = new Map,
                t.FOR_VALUE = new Map,
                t.L = new t(Sr.L, "L", 1),
                t.M = new t(Sr.M, "M", 0),
                t.Q = new t(Sr.Q, "Q", 3),
                t.H = new t(Sr.H, "H", 2),
                t
        }(), Br = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Lr = function () {
            function t(t) {
                this.errorCorrectionLevel = Pr.forBits(t >> 3 & 3),
                    this.dataMask = 7 & t
            }

            return t.numBitsDiffering = function (t, e) {
                return E.bitCount(t ^ e)
            }
                ,
                t.decodeFormatInformation = function (e, r) {
                    var n = t.doDecodeFormatInformation(e, r);
                    return null !== n ? n : t.doDecodeFormatInformation(e ^ t.FORMAT_INFO_MASK_QR,
                        r ^ t.FORMAT_INFO_MASK_QR)
                }
                ,
                t.doDecodeFormatInformation = function (e, r) {
                    var n, o, i = Number.MAX_SAFE_INTEGER, a = 0;
                    try {
                        for (var s = Br(t.FORMAT_INFO_DECODE_LOOKUP), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value
                                , f = c[0];
                            if (f === e || f === r) {
                                return new t(c[1]);
                            }
                            var h = t.numBitsDiffering(e, f);
                            h < i && (a = c[1],
                                i = h),
                            e !== r && (h = t.numBitsDiffering(r, f)) < i && (a = c[1],
                                i = h)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (o = s.return) && o.call(s)
                        } finally {
                            if (n) {
                                throw n.error
                            }
                        }
                    }
                    return i <= 3 ? new t(a) : null
                }
                ,
                t.prototype.getErrorCorrectionLevel = function () {
                    return this.errorCorrectionLevel
                }
                ,
                t.prototype.getDataMask = function () {
                    return this.dataMask
                }
                ,
                t.prototype.hashCode = function () {
                    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask
                }
                ,
                t.FORMAT_INFO_MASK_QR = 21522,
                t.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]),
                    Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]),
                    Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]),
                    Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]),
                    Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]),
                    Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]),
                    Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]),
                    Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]),
                    Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]),
                    Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]),
                    Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])],
                t
        }(), Fr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, kr = function () {
            function t(t) {
                for (var e = [], r = 1; r < arguments.length; r++) {
                    e[r - 1] = arguments[r];
                }
                this.ecCodewordsPerBlock = t,
                    this.ecBlocks = e
            }

            return t.prototype.getECCodewordsPerBlock = function () {
                return this.ecCodewordsPerBlock
            }
                ,
                t.prototype.getNumBlocks = function () {
                    var t, e, r = 0, n = this.ecBlocks;
                    try {
                        for (var o = Fr(n), i = o.next(); !i.done; i = o.next()) {
                            r += i.value.getCount()
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (e = o.return) && e.call(o)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                    return r
                }
                ,
                t.prototype.getTotalECCodewords = function () {
                    return this.ecCodewordsPerBlock * this.getNumBlocks()
                }
                ,
                t.prototype.getECBlocks = function () {
                    return this.ecBlocks
                }
                ,
                t
        }(), xr = function () {
            function t(t, e) {
                this.count = t,
                    this.dataCodewords = e
            }

            return t.prototype.getCount = function () {
                return this.count
            }
                ,
                t.prototype.getDataCodewords = function () {
                    return this.dataCodewords
                }
                ,
                t
        }(), Vr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Hr = function () {
            function t(t, e) {
                for (var r, n, o = [], i = 2; i < arguments.length; i++) {
                    o[i - 2] = arguments[i];
                }
                this.versionNumber = t,
                    this.alignmentPatternCenters = e,
                    this.ecBlocks = o;
                var a = 0
                    , s = o[0].getECCodewordsPerBlock()
                    , u = o[0].getECBlocks();
                try {
                    for (var c = Vr(u), f = c.next(); !f.done; f = c.next()) {
                        var h = f.value;
                        a += h.getCount() * (h.getDataCodewords() + s)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (n = c.return) && n.call(c)
                    } finally {
                        if (r) {
                            throw r.error
                        }
                    }
                }
                this.totalCodewords = a
            }

            return t.prototype.getVersionNumber = function () {
                return this.versionNumber
            }
                ,
                t.prototype.getAlignmentPatternCenters = function () {
                    return this.alignmentPatternCenters
                }
                ,
                t.prototype.getTotalCodewords = function () {
                    return this.totalCodewords
                }
                ,
                t.prototype.getDimensionForVersion = function () {
                    return 17 + 4 * this.versionNumber
                }
                ,
                t.prototype.getECBlocksForLevel = function (t) {
                    return this.ecBlocks[t.getValue()]
                }
                ,
                t.getProvisionalVersionForDimension = function (t) {
                    if (t % 4 != 1) {
                        throw new b;
                    }
                    try {
                        return this.getVersionForNumber((t - 17) / 4)
                    } catch (t) {
                        throw new b
                    }
                }
                ,
                t.getVersionForNumber = function (e) {
                    if (e < 1 || e > 40) {
                        throw new h;
                    }
                    return t.VERSIONS[e - 1]
                }
                ,
                t.decodeVersionInformation = function (e) {
                    for (var r = Number.MAX_SAFE_INTEGER, n = 0, o = 0; o < t.VERSION_DECODE_INFO.length; o++) {
                        var i = t.VERSION_DECODE_INFO[o];
                        if (i === e) {
                            return t.getVersionForNumber(o + 7);
                        }
                        var a = Lr.numBitsDiffering(e, i);
                        a < r && (n = o + 7,
                            r = a)
                    }
                    return r <= 3 ? t.getVersionForNumber(n) : null
                }
                ,
                t.prototype.buildFunctionPattern = function () {
                    var t = this.getDimensionForVersion()
                        , e = new k(t);
                    e.setRegion(0, 0, 9, 9),
                        e.setRegion(t - 8, 0, 8, 9),
                        e.setRegion(0, t - 8, 9, 8);
                    for (var r = this.alignmentPatternCenters.length, n = 0; n < r; n++) {
                        for (var o = this.alignmentPatternCenters[n] - 2, i = 0; i < r; i++) {
                            0 === n && (0 === i || i === r - 1) || n === r - 1 && 0 === i || e.setRegion(
                                this.alignmentPatternCenters[i] - 2, o, 5, 5);
                        }
                    }
                    return e.setRegion(6, 9, 1, t - 17),
                        e.setRegion(9, 6, t - 17, 1),
                    this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6),
                        e.setRegion(0, t - 11, 6, 3)),
                        e
                }
                ,
                t.prototype.toString = function () {
                    return "" + this.versionNumber
                }
                ,
                t.VERSION_DECODE_INFO = Int32Array.from(
                    [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390,
                        87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589,
                        136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]),
                t.VERSIONS = [new t(1, new Int32Array(0), new kr(7, new xr(1, 19)), new kr(10, new xr(1, 16)),
                    new kr(13, new xr(1, 13)), new kr(17, new xr(1, 9))),
                    new t(2, Int32Array.from([6, 18]), new kr(10, new xr(1, 34)), new kr(16, new xr(1, 28)),
                        new kr(22, new xr(1, 22)), new kr(28, new xr(1, 16))),
                    new t(3, Int32Array.from([6, 22]), new kr(15, new xr(1, 55)), new kr(26, new xr(1, 44)),
                        new kr(18, new xr(2, 17)), new kr(22, new xr(2, 13))),
                    new t(4, Int32Array.from([6, 26]), new kr(20, new xr(1, 80)), new kr(18, new xr(2, 32)),
                        new kr(26, new xr(2, 24)), new kr(16, new xr(4, 9))),
                    new t(5, Int32Array.from([6, 30]), new kr(26, new xr(1, 108)), new kr(24, new xr(2, 43)),
                        new kr(18, new xr(2, 15), new xr(2, 16)), new kr(22, new xr(2, 11), new xr(2, 12))),
                    new t(6, Int32Array.from([6, 34]), new kr(18, new xr(2, 68)), new kr(16, new xr(4, 27)),
                        new kr(24, new xr(4, 19)), new kr(28, new xr(4, 15))),
                    new t(7, Int32Array.from([6, 22, 38]), new kr(20, new xr(2, 78)), new kr(18, new xr(4, 31)),
                        new kr(18, new xr(2, 14), new xr(4, 15)), new kr(26, new xr(4, 13), new xr(1, 14))),
                    new t(8, Int32Array.from([6, 24, 42]), new kr(24, new xr(2, 97)),
                        new kr(22, new xr(2, 38), new xr(2, 39)), new kr(22, new xr(4, 18), new xr(2, 19)),
                        new kr(26, new xr(4, 14), new xr(2, 15))),
                    new t(9, Int32Array.from([6, 26, 46]), new kr(30, new xr(2, 116)),
                        new kr(22, new xr(3, 36), new xr(2, 37)), new kr(20, new xr(4, 16), new xr(4, 17)),
                        new kr(24, new xr(4, 12), new xr(4, 13))),
                    new t(10, Int32Array.from([6, 28, 50]), new kr(18, new xr(2, 68), new xr(2, 69)),
                        new kr(26, new xr(4, 43), new xr(1, 44)), new kr(24, new xr(6, 19), new xr(2, 20)),
                        new kr(28, new xr(6, 15), new xr(2, 16))),
                    new t(11, Int32Array.from([6, 30, 54]), new kr(20, new xr(4, 81)),
                        new kr(30, new xr(1, 50), new xr(4, 51)), new kr(28, new xr(4, 22), new xr(4, 23)),
                        new kr(24, new xr(3, 12), new xr(8, 13))),
                    new t(12, Int32Array.from([6, 32, 58]), new kr(24, new xr(2, 92), new xr(2, 93)),
                        new kr(22, new xr(6, 36), new xr(2, 37)), new kr(26, new xr(4, 20), new xr(6, 21)),
                        new kr(28, new xr(7, 14), new xr(4, 15))),
                    new t(13, Int32Array.from([6, 34, 62]), new kr(26, new xr(4, 107)),
                        new kr(22, new xr(8, 37), new xr(1, 38)), new kr(24, new xr(8, 20), new xr(4, 21)),
                        new kr(22, new xr(12, 11), new xr(4, 12))),
                    new t(14, Int32Array.from([6, 26, 46, 66]), new kr(30, new xr(3, 115), new xr(1, 116)),
                        new kr(24, new xr(4, 40), new xr(5, 41)), new kr(20, new xr(11, 16), new xr(5, 17)),
                        new kr(24, new xr(11, 12), new xr(5, 13))),
                    new t(15, Int32Array.from([6, 26, 48, 70]), new kr(22, new xr(5, 87), new xr(1, 88)),
                        new kr(24, new xr(5, 41), new xr(5, 42)), new kr(30, new xr(5, 24), new xr(7, 25)),
                        new kr(24, new xr(11, 12), new xr(7, 13))),
                    new t(16, Int32Array.from([6, 26, 50, 74]), new kr(24, new xr(5, 98), new xr(1, 99)),
                        new kr(28, new xr(7, 45), new xr(3, 46)), new kr(24, new xr(15, 19), new xr(2, 20)),
                        new kr(30, new xr(3, 15), new xr(13, 16))),
                    new t(17, Int32Array.from([6, 30, 54, 78]), new kr(28, new xr(1, 107), new xr(5, 108)),
                        new kr(28, new xr(10, 46), new xr(1, 47)), new kr(28, new xr(1, 22), new xr(15, 23)),
                        new kr(28, new xr(2, 14), new xr(17, 15))),
                    new t(18, Int32Array.from([6, 30, 56, 82]), new kr(30, new xr(5, 120), new xr(1, 121)),
                        new kr(26, new xr(9, 43), new xr(4, 44)), new kr(28, new xr(17, 22), new xr(1, 23)),
                        new kr(28, new xr(2, 14), new xr(19, 15))),
                    new t(19, Int32Array.from([6, 30, 58, 86]), new kr(28, new xr(3, 113), new xr(4, 114)),
                        new kr(26, new xr(3, 44), new xr(11, 45)), new kr(26, new xr(17, 21), new xr(4, 22)),
                        new kr(26, new xr(9, 13), new xr(16, 14))),
                    new t(20, Int32Array.from([6, 34, 62, 90]), new kr(28, new xr(3, 107), new xr(5, 108)),
                        new kr(26, new xr(3, 41), new xr(13, 42)), new kr(30, new xr(15, 24), new xr(5, 25)),
                        new kr(28, new xr(15, 15), new xr(10, 16))),
                    new t(21, Int32Array.from([6, 28, 50, 72, 94]), new kr(28, new xr(4, 116), new xr(4, 117)),
                        new kr(26, new xr(17, 42)), new kr(28, new xr(17, 22), new xr(6, 23)),
                        new kr(30, new xr(19, 16), new xr(6, 17))),
                    new t(22, Int32Array.from([6, 26, 50, 74, 98]), new kr(28, new xr(2, 111), new xr(7, 112)),
                        new kr(28, new xr(17, 46)), new kr(30, new xr(7, 24), new xr(16, 25)),
                        new kr(24, new xr(34, 13))),
                    new t(23, Int32Array.from([6, 30, 54, 78, 102]), new kr(30, new xr(4, 121), new xr(5, 122)),
                        new kr(28, new xr(4, 47), new xr(14, 48)), new kr(30, new xr(11, 24), new xr(14, 25)),
                        new kr(30, new xr(16, 15), new xr(14, 16))),
                    new t(24, Int32Array.from([6, 28, 54, 80, 106]), new kr(30, new xr(6, 117), new xr(4, 118)),
                        new kr(28, new xr(6, 45), new xr(14, 46)), new kr(30, new xr(11, 24), new xr(16, 25)),
                        new kr(30, new xr(30, 16), new xr(2, 17))),
                    new t(25, Int32Array.from([6, 32, 58, 84, 110]), new kr(26, new xr(8, 106), new xr(4, 107)),
                        new kr(28, new xr(8, 47), new xr(13, 48)), new kr(30, new xr(7, 24), new xr(22, 25)),
                        new kr(30, new xr(22, 15), new xr(13, 16))),
                    new t(26, Int32Array.from([6, 30, 58, 86, 114]), new kr(28, new xr(10, 114), new xr(2, 115)),
                        new kr(28, new xr(19, 46), new xr(4, 47)), new kr(28, new xr(28, 22), new xr(6, 23)),
                        new kr(30, new xr(33, 16), new xr(4, 17))),
                    new t(27, Int32Array.from([6, 34, 62, 90, 118]), new kr(30, new xr(8, 122), new xr(4, 123)),
                        new kr(28, new xr(22, 45), new xr(3, 46)), new kr(30, new xr(8, 23), new xr(26, 24)),
                        new kr(30, new xr(12, 15), new xr(28, 16))),
                    new t(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new kr(30, new xr(3, 117), new xr(10, 118)),
                        new kr(28, new xr(3, 45), new xr(23, 46)), new kr(30, new xr(4, 24), new xr(31, 25)),
                        new kr(30, new xr(11, 15), new xr(31, 16))),
                    new t(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new kr(30, new xr(7, 116), new xr(7, 117)),
                        new kr(28, new xr(21, 45), new xr(7, 46)), new kr(30, new xr(1, 23), new xr(37, 24)),
                        new kr(30, new xr(19, 15), new xr(26, 16))),
                    new t(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new kr(30, new xr(5, 115), new xr(10, 116)),
                        new kr(28, new xr(19, 47), new xr(10, 48)), new kr(30, new xr(15, 24), new xr(25, 25)),
                        new kr(30, new xr(23, 15), new xr(25, 16))),
                    new t(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new kr(30, new xr(13, 115), new xr(3, 116)),
                        new kr(28, new xr(2, 46), new xr(29, 47)), new kr(30, new xr(42, 24), new xr(1, 25)),
                        new kr(30, new xr(23, 15), new xr(28, 16))),
                    new t(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new kr(30, new xr(17, 115)),
                        new kr(28, new xr(10, 46), new xr(23, 47)), new kr(30, new xr(10, 24), new xr(35, 25)),
                        new kr(30, new xr(19, 15), new xr(35, 16))),
                    new t(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new kr(30, new xr(17, 115), new xr(1, 116)),
                        new kr(28, new xr(14, 46), new xr(21, 47)), new kr(30, new xr(29, 24), new xr(19, 25)),
                        new kr(30, new xr(11, 15), new xr(46, 16))),
                    new t(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new kr(30, new xr(13, 115), new xr(6, 116)),
                        new kr(28, new xr(14, 46), new xr(23, 47)), new kr(30, new xr(44, 24), new xr(7, 25)),
                        new kr(30, new xr(59, 16), new xr(1, 17))),
                    new t(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                        new kr(30, new xr(12, 121), new xr(7, 122)), new kr(28, new xr(12, 47), new xr(26, 48)),
                        new kr(30, new xr(39, 24), new xr(14, 25)), new kr(30, new xr(22, 15), new xr(41, 16))),
                    new t(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                        new kr(30, new xr(6, 121), new xr(14, 122)), new kr(28, new xr(6, 47), new xr(34, 48)),
                        new kr(30, new xr(46, 24), new xr(10, 25)), new kr(30, new xr(2, 15), new xr(64, 16))),
                    new t(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                        new kr(30, new xr(17, 122), new xr(4, 123)), new kr(28, new xr(29, 46), new xr(14, 47)),
                        new kr(30, new xr(49, 24), new xr(10, 25)), new kr(30, new xr(24, 15), new xr(46, 16))),
                    new t(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                        new kr(30, new xr(4, 122), new xr(18, 123)), new kr(28, new xr(13, 46), new xr(32, 47)),
                        new kr(30, new xr(48, 24), new xr(14, 25)), new kr(30, new xr(42, 15), new xr(32, 16))),
                    new t(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                        new kr(30, new xr(20, 117), new xr(4, 118)), new kr(28, new xr(40, 47), new xr(7, 48)),
                        new kr(30, new xr(43, 24), new xr(22, 25)), new kr(30, new xr(10, 15), new xr(67, 16))),
                    new t(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
                        new kr(30, new xr(19, 118), new xr(6, 119)), new kr(28, new xr(18, 47), new xr(31, 48)),
                        new kr(30, new xr(34, 24), new xr(34, 25)), new kr(30, new xr(20, 15), new xr(61, 16)))],
                t
        }();
        !function (t) {
            t[t.DATA_MASK_000 = 0] = "DATA_MASK_000",
                t[t.DATA_MASK_001 = 1] = "DATA_MASK_001",
                t[t.DATA_MASK_010 = 2] = "DATA_MASK_010",
                t[t.DATA_MASK_011 = 3] = "DATA_MASK_011",
                t[t.DATA_MASK_100 = 4] = "DATA_MASK_100",
                t[t.DATA_MASK_101 = 5] = "DATA_MASK_101",
                t[t.DATA_MASK_110 = 6] = "DATA_MASK_110",
                t[t.DATA_MASK_111 = 7] = "DATA_MASK_111"
        }(Mr || (Mr = {}));
        var Ur, Gr = function () {
            function t(t, e) {
                this.value = t,
                    this.isMasked = e
            }

            return t.prototype.unmaskBitMatrix = function (t, e) {
                for (var r = 0; r < e; r++) {
                    for (var n = 0; n < e; n++) {
                        this.isMasked(r, n) && t.flip(n, r)
                    }
                }
            }
                ,
                t.values = new Map([[Mr.DATA_MASK_000, new t(Mr.DATA_MASK_000, (function (t, e) {
                        return 0 == (t + e & 1)
                    }
                ))], [Mr.DATA_MASK_001, new t(Mr.DATA_MASK_001, (function (t, e) {
                        return 0 == (1 & t)
                    }
                ))], [Mr.DATA_MASK_010, new t(Mr.DATA_MASK_010, (function (t, e) {
                        return e % 3 == 0
                    }
                ))], [Mr.DATA_MASK_011, new t(Mr.DATA_MASK_011, (function (t, e) {
                        return (t + e) % 3 == 0
                    }
                ))], [Mr.DATA_MASK_100, new t(Mr.DATA_MASK_100, (function (t, e) {
                        return 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)
                    }
                ))], [Mr.DATA_MASK_101, new t(Mr.DATA_MASK_101, (function (t, e) {
                        return t * e % 6 == 0
                    }
                ))], [Mr.DATA_MASK_110, new t(Mr.DATA_MASK_110, (function (t, e) {
                        return t * e % 6 < 3
                    }
                ))], [Mr.DATA_MASK_111, new t(Mr.DATA_MASK_111, (function (t, e) {
                        return 0 == (t + e + t * e % 3 & 1)
                    }
                ))]]),
                t
        }(), Xr = function () {
            function t(t) {
                var e = t.getHeight();
                if (e < 21 || 1 != (3 & e)) {
                    throw new b;
                }
                this.bitMatrix = t
            }

            return t.prototype.readFormatInformation = function () {
                if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) {
                    return this.parsedFormatInfo;
                }
                for (var t = 0, e = 0; e < 6; e++) {
                    t = this.copyBit(e, 8, t);
                }
                t = this.copyBit(7, 8, t),
                    t = this.copyBit(8, 8, t),
                    t = this.copyBit(8, 7, t);
                for (var r = 5; r >= 0; r--) {
                    t = this.copyBit(8, r, t);
                }
                var n = this.bitMatrix.getHeight()
                    , o = 0
                    , i = n - 7;
                for (r = n - 1; r >= i; r--) {
                    o = this.copyBit(8, r, o);
                }
                for (e = n - 8; e < n; e++) {
                    o = this.copyBit(e, 8, o);
                }
                if (this.parsedFormatInfo = Lr.decodeFormatInformation(t, o),
                null !== this.parsedFormatInfo) {
                    return this.parsedFormatInfo;
                }
                throw new b
            }
                ,
                t.prototype.readVersion = function () {
                    if (null !== this.parsedVersion && void 0 !== this.parsedVersion) {
                        return this.parsedVersion;
                    }
                    var t = this.bitMatrix.getHeight()
                        , e = Math.floor((t - 17) / 4);
                    if (e <= 6) {
                        return Hr.getVersionForNumber(e);
                    }
                    for (var r = 0, n = t - 11, o = 5; o >= 0; o--) {
                        for (var i = t - 9; i >= n; i--) {
                            r = this.copyBit(i, o, r);
                        }
                    }
                    var a = Hr.decodeVersionInformation(r);
                    if (null !== a && a.getDimensionForVersion() === t) {
                        return this.parsedVersion = a,
                            a;
                    }
                    r = 0;
                    for (i = 5; i >= 0; i--) {
                        for (o = t - 9; o >= n; o--) {
                            r = this.copyBit(i, o, r);
                        }
                    }
                    if (null !== (a = Hr.decodeVersionInformation(r)) && a.getDimensionForVersion() === t) {
                        return this.parsedVersion = a,
                            a;
                    }
                    throw new b
                }
                ,
                t.prototype.copyBit = function (t, e, r) {
                    return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
                }
                ,
                t.prototype.readCodewords = function () {
                    var t = this.readFormatInformation()
                        , e = this.readVersion()
                        , r = Gr.values.get(t.getDataMask())
                        , n = this.bitMatrix.getHeight();
                    r.unmaskBitMatrix(this.bitMatrix, n);
                    for (var o = e.buildFunctionPattern(), i = !0, a = new Uint8Array(e.getTotalCodewords()), s = 0,
                        u = 0, c = 0, f = n - 1; f > 0; f -= 2) {
                        6 === f && f--;
                        for (var h = 0; h < n; h++) {
                            for (var l = i ? n - 1 - h : h, d = 0; d < 2; d++) {
                                o.get(f - d, l) || (c++,
                                    u <<= 1,
                                this.bitMatrix.get(f - d, l) && (u |= 1),
                                8 === c && (a[s++] = u,
                                    c = 0,
                                    u = 0));
                            }
                        }
                        i = !i
                    }
                    if (s !== e.getTotalCodewords()) {
                        throw new b;
                    }
                    return a
                }
                ,
                t.prototype.remask = function () {
                    if (null !== this.parsedFormatInfo) {
                        var t = Gr.values[this.parsedFormatInfo.getDataMask()]
                            , e = this.bitMatrix.getHeight();
                        t.unmaskBitMatrix(this.bitMatrix, e)
                    }
                }
                ,
                t.prototype.setMirror = function (t) {
                    this.parsedVersion = null,
                        this.parsedFormatInfo = null,
                        this.isMirror = t
                }
                ,
                t.prototype.mirror = function () {
                    for (var t = this.bitMatrix, e = 0, r = t.getWidth(); e < r; e++) {
                        for (var n = e + 1, o = t.getHeight(); n < o; n++) {
                            t.get(e, n) !== t.get(n, e) && (t.flip(n, e),
                                t.flip(e, n))
                        }
                    }
                }
                ,
                t
        }(), Wr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, zr = function () {
            function t(t, e) {
                this.numDataCodewords = t,
                    this.codewords = e
            }

            return t.getDataBlocks = function (e, r, n) {
                var o, i, a, s;
                if (e.length !== r.getTotalCodewords()) {
                    throw new h;
                }
                var u = r.getECBlocksForLevel(n)
                    , c = 0
                    , f = u.getECBlocks();
                try {
                    for (var l = Wr(f), d = l.next(); !d.done; d = l.next()) {
                        c += (v = d.value).getCount()
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        d && !d.done && (i = l.return) && i.call(l)
                    } finally {
                        if (o) {
                            throw o.error
                        }
                    }
                }
                var p = new Array(c)
                    , g = 0;
                try {
                    for (var w = Wr(f), y = w.next(); !y.done; y = w.next()) {
                        for (var v = y.value, _ = 0; _ < v.getCount(); _++) {
                            var m = v.getDataCodewords()
                                , C = u.getECCodewordsPerBlock() + m;
                            p[g++] = new t(m, new Uint8Array(C))
                        }
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        y && !y.done && (s = w.return) && s.call(w)
                    } finally {
                        if (a) {
                            throw a.error
                        }
                    }
                }
                for (var A = p[0].codewords.length, E = p.length - 1; E >= 0;) {
                    if (p[E].codewords.length === A) {
                        break;
                    }
                    E--
                }
                E++;
                var I = A - u.getECCodewordsPerBlock()
                    , S = 0;
                for (_ = 0; _ < I; _++) {
                    for (var O = 0; O < g; O++) {
                        p[O].codewords[_] = e[S++];
                    }
                }
                for (O = E; O < g; O++) {
                    p[O].codewords[I] = e[S++];
                }
                var T = p[0].codewords.length;
                for (_ = I; _ < T; _++) {
                    for (O = 0; O < g; O++) {
                        var b = O < E ? _ : _ + 1;
                        p[O].codewords[b] = e[S++]
                    }
                }
                return p
            }
                ,
                t.prototype.getNumDataCodewords = function () {
                    return this.numDataCodewords
                }
                ,
                t.prototype.getCodewords = function () {
                    return this.codewords
                }
                ,
                t
        }();
        !function (t) {
            t[t.TERMINATOR = 0] = "TERMINATOR",
                t[t.NUMERIC = 1] = "NUMERIC",
                t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC",
                t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND",
                t[t.BYTE = 4] = "BYTE",
                t[t.ECI = 5] = "ECI",
                t[t.KANJI = 6] = "KANJI",
                t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION",
                t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION",
                t[t.HANZI = 9] = "HANZI"
        }(Ur || (Ur = {}));
        var jr, Yr, Zr = function () {
            function t(e, r, n, o) {
                this.value = e,
                    this.stringValue = r,
                    this.characterCountBitsForVersions = n,
                    this.bits = o,
                    t.FOR_BITS.set(o, this),
                    t.FOR_VALUE.set(e, this)
            }

            return t.forBits = function (e) {
                var r = t.FOR_BITS.get(e);
                if (void 0 === r) {
                    throw new h;
                }
                return r
            }
                ,
                t.prototype.getCharacterCountBits = function (t) {
                    var e, r = t.getVersionNumber();
                    return e = r <= 9 ? 0 : r <= 26 ? 1 : 2,
                        this.characterCountBitsForVersions[e]
                }
                ,
                t.prototype.getValue = function () {
                    return this.value
                }
                ,
                t.prototype.getBits = function () {
                    return this.bits
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    return this.value === r.value
                }
                ,
                t.prototype.toString = function () {
                    return this.stringValue
                }
                ,
                t.FOR_BITS = new Map,
                t.FOR_VALUE = new Map,
                t.TERMINATOR = new t(Ur.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0),
                t.NUMERIC = new t(Ur.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1),
                t.ALPHANUMERIC = new t(Ur.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2),
                t.STRUCTURED_APPEND = new t(Ur.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3),
                t.BYTE = new t(Ur.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4),
                t.ECI = new t(Ur.ECI, "ECI", Int32Array.from([0, 0, 0]), 7),
                t.KANJI = new t(Ur.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8),
                t.FNC1_FIRST_POSITION = new t(Ur.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]),
                    5),
                t.FNC1_SECOND_POSITION = new t(Ur.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION",
                    Int32Array.from([0, 0, 0]), 9),
                t.HANZI = new t(Ur.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13),
                t
        }(), Kr = function () {
            function t() {
            }

            return t.decode = function (e, r, n, o) {
                var i = new Ir(e)
                    , a = new F
                    , s = new Array
                    , u = -1
                    , c = -1;
                try {
                    var f = null
                        , h = !1
                        , l = void 0;
                    do {
                        if (i.available() < 4) {
                            l = Zr.TERMINATOR;
                        } else {
                            var d = i.readBits(4);
                            l = Zr.forBits(d)
                        }
                        switch (l) {
                            case Zr.TERMINATOR:
                                break;
                            case Zr.FNC1_FIRST_POSITION:
                            case Zr.FNC1_SECOND_POSITION:
                                h = !0;
                                break;
                            case Zr.STRUCTURED_APPEND:
                                if (i.available() < 16) {
                                    throw new b;
                                }
                                u = i.readBits(8),
                                    c = i.readBits(8);
                                break;
                            case Zr.ECI:
                                var p = t.parseECIValue(i);
                                if (null === (f = D.getCharacterSetECIByValue(p))) {
                                    throw new b;
                                }
                                break;
                            case Zr.HANZI:
                                var g = i.readBits(4)
                                    , w = i.readBits(l.getCharacterCountBits(r));
                                g === t.GB2312_SUBSET && t.decodeHanziSegment(i, a, w);
                                break;
                            default:
                                var y = i.readBits(l.getCharacterCountBits(r));
                                switch (l) {
                                    case Zr.NUMERIC:
                                        t.decodeNumericSegment(i, a, y);
                                        break;
                                    case Zr.ALPHANUMERIC:
                                        t.decodeAlphanumericSegment(i, a, y, h);
                                        break;
                                    case Zr.BYTE:
                                        t.decodeByteSegment(i, a, y, f, s, o);
                                        break;
                                    case Zr.KANJI:
                                        t.decodeKanjiSegment(i, a, y);
                                        break;
                                    default:
                                        throw new b
                                }
                        }
                    } while (l !== Zr.TERMINATOR)
                } catch (t) {
                    throw new b
                }
                return new it(e, a.toString(), 0 === s.length ? null : s, null === n ? null : n.toString(), u, c)
            }
                ,
                t.decodeHanziSegment = function (t, e, r) {
                    if (13 * r > t.available()) {
                        throw new b;
                    }
                    for (var n = new Uint8Array(2 * r), o = 0; r > 0;) {
                        var i = t.readBits(13)
                            , a = i / 96 << 8 & 4294967295 | i % 96;
                        a += a < 959 ? 41377 : 42657,
                            n[o] = a >> 8 & 255,
                            n[o + 1] = 255 & a,
                            o += 2,
                            r--
                    }
                    try {
                        e.append(B.decode(n, L.GB2312))
                    } catch (t) {
                        throw new b(t)
                    }
                }
                ,
                t.decodeKanjiSegment = function (t, e, r) {
                    if (13 * r > t.available()) {
                        throw new b;
                    }
                    for (var n = new Uint8Array(2 * r), o = 0; r > 0;) {
                        var i = t.readBits(13)
                            , a = i / 192 << 8 & 4294967295 | i % 192;
                        a += a < 7936 ? 33088 : 49472,
                            n[o] = a >> 8,
                            n[o + 1] = a,
                            o += 2,
                            r--
                    }
                    try {
                        e.append(B.decode(n, L.SHIFT_JIS))
                    } catch (t) {
                        throw new b(t)
                    }
                }
                ,
                t.decodeByteSegment = function (t, e, r, n, o, i) {
                    if (8 * r > t.available()) {
                        throw new b;
                    }
                    for (var a, s = new Uint8Array(r), u = 0; u < r; u++) {
                        s[u] = t.readBits(8);
                    }
                    a = null === n ? L.guessEncoding(s, i) : n.getName();
                    try {
                        e.append(B.decode(s, a))
                    } catch (t) {
                        throw new b(t)
                    }
                    o.push(s)
                }
                ,
                t.toAlphaNumericChar = function (e) {
                    if (e >= t.ALPHANUMERIC_CHARS.length) {
                        throw new b;
                    }
                    return t.ALPHANUMERIC_CHARS[e]
                }
                ,
                t.decodeAlphanumericSegment = function (e, r, n, o) {
                    for (var i = r.length(); n > 1;) {
                        if (e.available() < 11) {
                            throw new b;
                        }
                        var a = e.readBits(11);
                        r.append(t.toAlphaNumericChar(Math.floor(a / 45))),
                            r.append(t.toAlphaNumericChar(a % 45)),
                            n -= 2
                    }
                    if (1 === n) {
                        if (e.available() < 6) {
                            throw new b;
                        }
                        r.append(t.toAlphaNumericChar(e.readBits(6)))
                    }
                    if (o) {
                        for (var s = i; s < r.length(); s++) {
                            "%" === r.charAt(s) && (s < r.length() - 1 && "%" === r.charAt(s + 1) ? r.deleteCharAt(
                                s + 1) : r.setCharAt(s, String.fromCharCode(29)))
                        }
                    }
                }
                ,
                t.decodeNumericSegment = function (e, r, n) {
                    for (; n >= 3;) {
                        if (e.available() < 10) {
                            throw new b;
                        }
                        var o = e.readBits(10);
                        if (o >= 1e3) {
                            throw new b;
                        }
                        r.append(t.toAlphaNumericChar(Math.floor(o / 100))),
                            r.append(t.toAlphaNumericChar(Math.floor(o / 10) % 10)),
                            r.append(t.toAlphaNumericChar(o % 10)),
                            n -= 3
                    }
                    if (2 === n) {
                        if (e.available() < 7) {
                            throw new b;
                        }
                        var i = e.readBits(7);
                        if (i >= 100) {
                            throw new b;
                        }
                        r.append(t.toAlphaNumericChar(Math.floor(i / 10))),
                            r.append(t.toAlphaNumericChar(i % 10))
                    } else if (1 === n) {
                        if (e.available() < 4) {
                            throw new b;
                        }
                        var a = e.readBits(4);
                        if (a >= 10) {
                            throw new b;
                        }
                        r.append(t.toAlphaNumericChar(a))
                    }
                }
                ,
                t.parseECIValue = function (t) {
                    var e = t.readBits(8);
                    if (0 == (128 & e)) {
                        return 127 & e;
                    }
                    if (128 == (192 & e)) {
                        return (63 & e) << 8 & 4294967295 | t.readBits(8);
                    }
                    if (192 == (224 & e)) {
                        return (31 & e) << 16 & 4294967295 | t.readBits(16);
                    }
                    throw new b
                }
                ,
                t.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
                t.GB2312_SUBSET = 1,
                t
        }(), qr = function () {
            function t(t) {
                this.mirrored = t
            }

            return t.prototype.isMirrored = function () {
                return this.mirrored
            }
                ,
                t.prototype.applyMirroredCorrection = function (t) {
                    if (this.mirrored && null !== t && !(t.length < 3)) {
                        var e = t[0];
                        t[0] = t[2],
                            t[2] = e
                    }
                }
                ,
                t
        }(), Qr = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Jr = function () {
            function t() {
                this.rsDecoder = new wt(ht.QR_CODE_FIELD_256)
            }

            return t.prototype.decodeBooleanArray = function (t, e) {
                return this.decodeBitMatrix(k.parseFromBooleanArray(t), e)
            }
                ,
                t.prototype.decodeBitMatrix = function (t, e) {
                    var r = new Xr(t)
                        , n = null;
                    try {
                        return this.decodeBitMatrixParser(r, e)
                    } catch (t) {
                        n = t
                    }
                    try {
                        r.remask(),
                            r.setMirror(!0),
                            r.readVersion(),
                            r.readFormatInformation(),
                            r.mirror();
                        var o = this.decodeBitMatrixParser(r, e);
                        return o.setOther(new qr(!0)),
                            o
                    } catch (t) {
                        if (null !== n) {
                            throw n;
                        }
                        throw t
                    }
                }
                ,
                t.prototype.decodeBitMatrixParser = function (t, e) {
                    var r, n, o, i, a = t.readVersion(), s = t.readFormatInformation().getErrorCorrectionLevel(),
                        u = t.readCodewords(), c = zr.getDataBlocks(u, a, s), f = 0;
                    try {
                        for (var h = Qr(c), l = h.next(); !l.done; l = h.next()) {
                            f += (y = l.value).getNumDataCodewords()
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (n = h.return) && n.call(h)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                    var d = new Uint8Array(f)
                        , p = 0;
                    try {
                        for (var g = Qr(c), w = g.next(); !w.done; w = g.next()) {
                            var y, v = (y = w.value).getCodewords(), _ = y.getNumDataCodewords();
                            this.correctErrors(v, _);
                            for (var m = 0; m < _; m++) {
                                d[p++] = v[m]
                            }
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            w && !w.done && (i = g.return) && i.call(g)
                        } finally {
                            if (o) {
                                throw o.error
                            }
                        }
                    }
                    return Kr.decode(d, a, s, e)
                }
                ,
                t.prototype.correctErrors = function (t, e) {
                    var r = new Int32Array(t);
                    try {
                        this.rsDecoder.decode(r, t.length - e)
                    } catch (t) {
                        throw new p
                    }
                    for (var n = 0; n < e; n++) {
                        t[n] = r[n]
                    }
                }
                ,
                t
        }(), $r = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), tn = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e, r) || this;
                return o.estimatedModuleSize = n,
                    o
            }

            return $r(e, t),
                e.prototype.aboutEquals = function (t, e, r) {
                    if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                        var n = Math.abs(t - this.estimatedModuleSize);
                        return n <= 1 || n <= this.estimatedModuleSize
                    }
                    return !1
                }
                ,
                e.prototype.combineEstimate = function (t, r, n) {
                    return new e((this.getX() + r) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + n) / 2)
                }
                ,
                e
        }(mt), en = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, rn = function () {
            function t(t, e, r, n, o, i, a) {
                this.image = t,
                    this.startX = e,
                    this.startY = r,
                    this.width = n,
                    this.height = o,
                    this.moduleSize = i,
                    this.resultPointCallback = a,
                    this.possibleCenters = [],
                    this.crossCheckStateCount = new Int32Array(3)
            }

            return t.prototype.find = function () {
                for (var t = this.startX, e = this.height, r = t + this.width, n = this.startY + e / 2,
                    o = new Int32Array(3), i = this.image, a = 0; a < e; a++) {
                    var s = n + (0 == (1 & a) ? Math.floor((a + 1) / 2) : -Math.floor((a + 1) / 2));
                    o[0] = 0,
                        o[1] = 0,
                        o[2] = 0;
                    for (var u = t; u < r && !i.get(u, s);) {
                        u++;
                    }
                    for (var c = 0; u < r;) {
                        if (i.get(u, s)) {
                            if (1 === c) {
                                o[1]++;
                            } else if (2 === c) {
                                var f;
                                if (this.foundPatternCross(o)) {
                                    if (null !== (f = this.handlePossibleCenter(o, s, u))) {
                                        return f;
                                    }
                                }
                                o[0] = o[2],
                                    o[1] = 1,
                                    o[2] = 0,
                                    c = 1
                            } else {
                                o[++c]++;
                            }
                        } else {
                            1 === c && c++,
                                o[c]++;
                        }
                        u++
                    }
                    if (this.foundPatternCross(o)) {
                        if (null !== (f = this.handlePossibleCenter(o, s, r))) {
                            return f
                        }
                    }
                }
                if (0 !== this.possibleCenters.length) {
                    return this.possibleCenters[0];
                }
                throw new V
            }
                ,
                t.centerFromEnd = function (t, e) {
                    return e - t[2] - t[1] / 2
                }
                ,
                t.prototype.foundPatternCross = function (t) {
                    for (var e = this.moduleSize, r = e / 2, n = 0; n < 3; n++) {
                        if (Math.abs(e - t[n]) >= r) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.prototype.crossCheckVertical = function (e, r, n, o) {
                    var i = this.image
                        , a = i.getHeight()
                        , s = this.crossCheckStateCount;
                    s[0] = 0,
                        s[1] = 0,
                        s[2] = 0;
                    for (var u = e; u >= 0 && i.get(r, u) && s[1] <= n;) {
                        s[1]++,
                            u--;
                    }
                    if (u < 0 || s[1] > n) {
                        return NaN;
                    }
                    for (; u >= 0 && !i.get(r, u) && s[0] <= n;) {
                        s[0]++,
                            u--;
                    }
                    if (s[0] > n) {
                        return NaN;
                    }
                    for (u = e + 1; u < a && i.get(r, u) && s[1] <= n;) {
                        s[1]++,
                            u++;
                    }
                    if (u === a || s[1] > n) {
                        return NaN;
                    }
                    for (; u < a && !i.get(r, u) && s[2] <= n;) {
                        s[2]++,
                            u++;
                    }
                    if (s[2] > n) {
                        return NaN;
                    }
                    var c = s[0] + s[1] + s[2];
                    return 5 * Math.abs(c - o) >= 2 * o ? NaN : this.foundPatternCross(s) ? t.centerFromEnd(s, u) : NaN
                }
                ,
                t.prototype.handlePossibleCenter = function (e, r, n) {
                    var o, i, a = e[0] + e[1] + e[2], s = t.centerFromEnd(e, n),
                        u = this.crossCheckVertical(r, s, 2 * e[1], a);
                    if (!isNaN(u)) {
                        var c = (e[0] + e[1] + e[2]) / 3;
                        try {
                            for (var f = en(this.possibleCenters), h = f.next(); !h.done; h = f.next()) {
                                var l = h.value;
                                if (l.aboutEquals(c, u, s)) {
                                    return l.combineEstimate(u, s, c)
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (i = f.return) && i.call(f)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                        var d = new tn(s, u, c);
                        this.possibleCenters.push(d),
                        null !== this.resultPointCallback && void 0 !== this.resultPointCallback
                        && this.resultPointCallback.foundPossibleResultPoint(d)
                    }
                    return null
                }
                ,
                t
        }(), nn = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), on = function (t) {
            function e(e, r, n, o) {
                var i = t.call(this, e, r) || this;
                return i.estimatedModuleSize = n,
                    i.count = o,
                void 0 === o && (i.count = 1),
                    i
            }

            return nn(e, t),
                e.prototype.getEstimatedModuleSize = function () {
                    return this.estimatedModuleSize
                }
                ,
                e.prototype.getCount = function () {
                    return this.count
                }
                ,
                e.prototype.aboutEquals = function (t, e, r) {
                    if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                        var n = Math.abs(t - this.estimatedModuleSize);
                        return n <= 1 || n <= this.estimatedModuleSize
                    }
                    return !1
                }
                ,
                e.prototype.combineEstimate = function (t, r, n) {
                    var o = this.count + 1;
                    return new e((this.count * this.getX() + r) / o, (this.count * this.getY() + t) / o,
                        (this.count * this.estimatedModuleSize + n) / o, o)
                }
                ,
                e
        }(mt), an = function () {
            function t(t) {
                this.bottomLeft = t[0],
                    this.topLeft = t[1],
                    this.topRight = t[2]
            }

            return t.prototype.getBottomLeft = function () {
                return this.bottomLeft
            }
                ,
                t.prototype.getTopLeft = function () {
                    return this.topLeft
                }
                ,
                t.prototype.getTopRight = function () {
                    return this.topRight
                }
                ,
                t
        }(), sn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, un = function () {
            function t(t, e) {
                this.image = t,
                    this.resultPointCallback = e,
                    this.possibleCenters = [],
                    this.crossCheckStateCount = new Int32Array(5),
                    this.resultPointCallback = e
            }

            return t.prototype.getImage = function () {
                return this.image
            }
                ,
                t.prototype.getPossibleCenters = function () {
                    return this.possibleCenters
                }
                ,
                t.prototype.find = function (e) {
                    var r = null != e && void 0 !== e.get(O.TRY_HARDER)
                        , n = null != e && void 0 !== e.get(O.PURE_BARCODE)
                        , o = this.image
                        , i = o.getHeight()
                        , a = o.getWidth()
                        , s = Math.floor(3 * i / (4 * t.MAX_MODULES));
                    (s < t.MIN_SKIP || r) && (s = t.MIN_SKIP);
                    for (var u = !1, c = new Int32Array(5), f = s - 1; f < i && !u; f += s) {
                        c[0] = 0,
                            c[1] = 0,
                            c[2] = 0,
                            c[3] = 0,
                            c[4] = 0;
                        for (var h = 0, l = 0; l < a; l++) {
                            if (o.get(l, f)) {
                                1 == (1 & h) && h++,
                                    c[h]++;
                            } else if (0 == (1 & h)) {
                                if (4 === h) {
                                    if (t.foundPatternCross(c)) {
                                        if (!0 !== this.handlePossibleCenter(c, f, l, n)) {
                                            c[0] = c[2],
                                                c[1] = c[3],
                                                c[2] = c[4],
                                                c[3] = 1,
                                                c[4] = 0,
                                                h = 3;
                                            continue
                                        }
                                        if (s = 2,
                                        !0 === this.hasSkipped) {
                                            u = this.haveMultiplyConfirmedCenters();
                                        } else {
                                            var d = this.findRowSkip();
                                            d > c[2] && (f += d - c[2] - s,
                                                l = a - 1)
                                        }
                                        h = 0,
                                            c[0] = 0,
                                            c[1] = 0,
                                            c[2] = 0,
                                            c[3] = 0,
                                            c[4] = 0
                                    } else {
                                        c[0] = c[2],
                                            c[1] = c[3],
                                            c[2] = c[4],
                                            c[3] = 1,
                                            c[4] = 0,
                                            h = 3;
                                    }
                                } else {
                                    c[++h]++;
                                }
                            } else {
                                c[h]++;
                            }
                        }
                        if (t.foundPatternCross(c)) {
                            !0 === this.handlePossibleCenter(c, f, a, n) && (s = c[0],
                            this.hasSkipped && (u = this.haveMultiplyConfirmedCenters()))
                        }
                    }
                    var p = this.selectBestPatterns();
                    return mt.orderBestPatterns(p),
                        new an(p)
                }
                ,
                t.centerFromEnd = function (t, e) {
                    return e - t[4] - t[3] - t[2] / 2
                }
                ,
                t.foundPatternCross = function (t) {
                    for (var e = 0, r = 0; r < 5; r++) {
                        var n = t[r];
                        if (0 === n) {
                            return !1;
                        }
                        e += n
                    }
                    if (e < 7) {
                        return !1;
                    }
                    var o = e / 7
                        , i = o / 2;
                    return Math.abs(o - t[0]) < i && Math.abs(o - t[1]) < i && Math.abs(3 * o - t[2]) < 3 * i
                        && Math.abs(o - t[3]) < i && Math.abs(o - t[4]) < i
                }
                ,
                t.prototype.getCrossCheckStateCount = function () {
                    var t = this.crossCheckStateCount;
                    return t[0] = 0,
                        t[1] = 0,
                        t[2] = 0,
                        t[3] = 0,
                        t[4] = 0,
                        t
                }
                ,
                t.prototype.crossCheckDiagonal = function (e, r, n, o) {
                    for (var i = this.getCrossCheckStateCount(), a = 0, s = this.image;
                        e >= a && r >= a && s.get(r - a, e - a);) {
                        i[2]++,
                            a++;
                    }
                    if (e < a || r < a) {
                        return !1;
                    }
                    for (; e >= a && r >= a && !s.get(r - a, e - a) && i[1] <= n;) {
                        i[1]++,
                            a++;
                    }
                    if (e < a || r < a || i[1] > n) {
                        return !1;
                    }
                    for (; e >= a && r >= a && s.get(r - a, e - a) && i[0] <= n;) {
                        i[0]++,
                            a++;
                    }
                    if (i[0] > n) {
                        return !1;
                    }
                    var u = s.getHeight()
                        , c = s.getWidth();
                    for (a = 1; e + a < u && r + a < c && s.get(r + a, e + a);) {
                        i[2]++,
                            a++;
                    }
                    if (e + a >= u || r + a >= c) {
                        return !1;
                    }
                    for (; e + a < u && r + a < c && !s.get(r + a, e + a) && i[3] < n;) {
                        i[3]++,
                            a++;
                    }
                    if (e + a >= u || r + a >= c || i[3] >= n) {
                        return !1;
                    }
                    for (; e + a < u && r + a < c && s.get(r + a, e + a) && i[4] < n;) {
                        i[4]++,
                            a++;
                    }
                    if (i[4] >= n) {
                        return !1;
                    }
                    var f = i[0] + i[1] + i[2] + i[3] + i[4];
                    return Math.abs(f - o) < 2 * o && t.foundPatternCross(i)
                }
                ,
                t.prototype.crossCheckVertical = function (e, r, n, o) {
                    for (var i = this.image, a = i.getHeight(), s = this.getCrossCheckStateCount(), u = e;
                        u >= 0 && i.get(r, u);) {
                        s[2]++,
                            u--;
                    }
                    if (u < 0) {
                        return NaN;
                    }
                    for (; u >= 0 && !i.get(r, u) && s[1] <= n;) {
                        s[1]++,
                            u--;
                    }
                    if (u < 0 || s[1] > n) {
                        return NaN;
                    }
                    for (; u >= 0 && i.get(r, u) && s[0] <= n;) {
                        s[0]++,
                            u--;
                    }
                    if (s[0] > n) {
                        return NaN;
                    }
                    for (u = e + 1; u < a && i.get(r, u);) {
                        s[2]++,
                            u++;
                    }
                    if (u === a) {
                        return NaN;
                    }
                    for (; u < a && !i.get(r, u) && s[3] < n;) {
                        s[3]++,
                            u++;
                    }
                    if (u === a || s[3] >= n) {
                        return NaN;
                    }
                    for (; u < a && i.get(r, u) && s[4] < n;) {
                        s[4]++,
                            u++;
                    }
                    if (s[4] >= n) {
                        return NaN;
                    }
                    var c = s[0] + s[1] + s[2] + s[3] + s[4];
                    return 5 * Math.abs(c - o) >= 2 * o ? NaN : t.foundPatternCross(s) ? t.centerFromEnd(s, u) : NaN
                }
                ,
                t.prototype.crossCheckHorizontal = function (e, r, n, o) {
                    for (var i = this.image, a = i.getWidth(), s = this.getCrossCheckStateCount(), u = e;
                        u >= 0 && i.get(u, r);) {
                        s[2]++,
                            u--;
                    }
                    if (u < 0) {
                        return NaN;
                    }
                    for (; u >= 0 && !i.get(u, r) && s[1] <= n;) {
                        s[1]++,
                            u--;
                    }
                    if (u < 0 || s[1] > n) {
                        return NaN;
                    }
                    for (; u >= 0 && i.get(u, r) && s[0] <= n;) {
                        s[0]++,
                            u--;
                    }
                    if (s[0] > n) {
                        return NaN;
                    }
                    for (u = e + 1; u < a && i.get(u, r);) {
                        s[2]++,
                            u++;
                    }
                    if (u === a) {
                        return NaN;
                    }
                    for (; u < a && !i.get(u, r) && s[3] < n;) {
                        s[3]++,
                            u++;
                    }
                    if (u === a || s[3] >= n) {
                        return NaN;
                    }
                    for (; u < a && i.get(u, r) && s[4] < n;) {
                        s[4]++,
                            u++;
                    }
                    if (s[4] >= n) {
                        return NaN;
                    }
                    var c = s[0] + s[1] + s[2] + s[3] + s[4];
                    return 5 * Math.abs(c - o) >= o ? NaN : t.foundPatternCross(s) ? t.centerFromEnd(s, u) : NaN
                }
                ,
                t.prototype.handlePossibleCenter = function (e, r, n, o) {
                    var i = e[0] + e[1] + e[2] + e[3] + e[4]
                        , a = t.centerFromEnd(e, n)
                        , s = this.crossCheckVertical(r, Math.floor(a), e[2], i);
                    if (!isNaN(s) && (a = this.crossCheckHorizontal(Math.floor(a), Math.floor(s), e[2], i),
                    !isNaN(a) && (!o || this.crossCheckDiagonal(Math.floor(s), Math.floor(a), e[2], i)))) {
                        for (var u = i / 7, c = !1, f = this.possibleCenters, h = 0, l = f.length; h < l; h++) {
                            var d = f[h];
                            if (d.aboutEquals(u, s, a)) {
                                f[h] = d.combineEstimate(s, a, u),
                                    c = !0;
                                break
                            }
                        }
                        if (!c) {
                            var p = new on(a, s, u);
                            f.push(p),
                            null !== this.resultPointCallback && void 0 !== this.resultPointCallback
                            && this.resultPointCallback.foundPossibleResultPoint(p)
                        }
                        return !0
                    }
                    return !1
                }
                ,
                t.prototype.findRowSkip = function () {
                    var e, r;
                    if (this.possibleCenters.length <= 1) {
                        return 0;
                    }
                    var n = null;
                    try {
                        for (var o = sn(this.possibleCenters), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            if (a.getCount() >= t.CENTER_QUORUM) {
                                if (null != n) {
                                    return this.hasSkipped = !0,
                                        Math.floor((Math.abs(n.getX() - a.getX()) - Math.abs(n.getY() - a.getY())) / 2);
                                }
                                n = a
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    return 0
                }
                ,
                t.prototype.haveMultiplyConfirmedCenters = function () {
                    var e, r, n, o, i = 0, a = 0, s = this.possibleCenters.length;
                    try {
                        for (var u = sn(this.possibleCenters), c = u.next(); !c.done; c = u.next()) {
                            (p = c.value).getCount() >= t.CENTER_QUORUM && (i++,
                                a += p.getEstimatedModuleSize())
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (r = u.return) && r.call(u)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    if (i < 3) {
                        return !1;
                    }
                    var f = a / s
                        , h = 0;
                    try {
                        for (var l = sn(this.possibleCenters), d = l.next(); !d.done; d = l.next()) {
                            var p = d.value;
                            h += Math.abs(p.getEstimatedModuleSize() - f)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            d && !d.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n) {
                                throw n.error
                            }
                        }
                    }
                    return h <= .05 * a
                }
                ,
                t.prototype.selectBestPatterns = function () {
                    var t, e, r, n, o = this.possibleCenters.length;
                    if (o < 3) {
                        throw new V;
                    }
                    var i, a = this.possibleCenters;
                    if (o > 3) {
                        var s = 0
                            , u = 0;
                        try {
                            for (var c = sn(this.possibleCenters), f = c.next(); !f.done; f = c.next()) {
                                var h = f.value.getEstimatedModuleSize();
                                s += h,
                                    u += h * h
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                f && !f.done && (e = c.return) && e.call(c)
                            } finally {
                                if (t) {
                                    throw t.error
                                }
                            }
                        }
                        i = s / o;
                        var l = Math.sqrt(u / o - i * i);
                        a.sort((function (t, e) {
                                var r = Math.abs(e.getEstimatedModuleSize() - i)
                                    , n = Math.abs(t.getEstimatedModuleSize() - i);
                                return r < n ? -1 : r > n ? 1 : 0
                            }
                        ));
                        for (var d = Math.max(.2 * i, l), p = 0; p < a.length && a.length > 3; p++) {
                            var g = a[p];
                            Math.abs(g.getEstimatedModuleSize() - i) > d && (a.splice(p, 1),
                                p--)
                        }
                    }
                    if (a.length > 3) {
                        s = 0;
                        try {
                            for (var w = sn(a), y = w.next(); !y.done; y = w.next()) {
                                s += y.value.getEstimatedModuleSize()
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                y && !y.done && (n = w.return) && n.call(w)
                            } finally {
                                if (r) {
                                    throw r.error
                                }
                            }
                        }
                        i = s / a.length,
                            a.sort((function (t, e) {
                                    if (e.getCount() === t.getCount()) {
                                        var r = Math.abs(e.getEstimatedModuleSize() - i)
                                            , n = Math.abs(t.getEstimatedModuleSize() - i);
                                        return r < n ? 1 : r > n ? -1 : 0
                                    }
                                    return e.getCount() - t.getCount()
                                }
                            )),
                            a.splice(3)
                    }
                    return [a[0], a[1], a[2]]
                }
                ,
                t.CENTER_QUORUM = 2,
                t.MIN_SKIP = 3,
                t.MAX_MODULES = 57,
                t
        }(), cn = function () {
            function t(t) {
                this.image = t
            }

            return t.prototype.getImage = function () {
                return this.image
            }
                ,
                t.prototype.getResultPointCallback = function () {
                    return this.resultPointCallback
                }
                ,
                t.prototype.detect = function (t) {
                    this.resultPointCallback = null == t ? null : t.get(O.NEED_RESULT_POINT_CALLBACK);
                    var e = new un(this.image, this.resultPointCallback).find(t);
                    return this.processFinderPatternInfo(e)
                }
                ,
                t.prototype.processFinderPatternInfo = function (e) {
                    var r = e.getTopLeft()
                        , n = e.getTopRight()
                        , o = e.getBottomLeft()
                        , i = this.calculateModuleSize(r, n, o);
                    if (i < 1) {
                        throw new V("No pattern found in proccess finder.");
                    }
                    var a = t.computeDimension(r, n, o, i)
                        , s = Hr.getProvisionalVersionForDimension(a)
                        , u = s.getDimensionForVersion() - 7
                        , c = null;
                    if (s.getAlignmentPatternCenters().length > 0) {
                        for (var f = n.getX() - r.getX() + o.getX(), h = n.getY() - r.getY() + o.getY(), l = 1 - 3 / u,
                            d = Math.floor(r.getX() + l * (f - r.getX())),
                            p = Math.floor(r.getY() + l * (h - r.getY())), g = 4; g <= 16; g <<= 1) {
                            try {
                                c = this.findAlignmentInRegion(i, d, p, g);
                                break
                            } catch (t) {
                                if (!(t instanceof V)) {
                                    throw t
                                }
                            }
                        }
                    }
                    var w = t.createTransform(r, n, o, c, a)
                        , y = t.sampleGrid(this.image, w, a);
                    return new Ct(y, null === c ? [o, r, n] : [o, r, n, c])
                }
                ,
                t.createTransform = function (t, e, r, n, o) {
                    var i, a, s, u, c = o - 3.5;
                    return null !== n ? (i = n.getX(),
                        a = n.getY(),
                        u = s = c - 3) : (i = e.getX() - t.getX() + r.getX(),
                        a = e.getY() - t.getY() + r.getY(),
                        s = c,
                        u = c),
                        Ot.quadrilateralToQuadrilateral(3.5, 3.5, c, 3.5, s, u, 3.5, c, t.getX(), t.getY(), e.getX(),
                            e.getY(), i, a, r.getX(), r.getY())
                }
                ,
                t.sampleGrid = function (t, e, r) {
                    return Rt.getInstance().sampleGridWithTransform(t, r, r, e)
                }
                ,
                t.computeDimension = function (t, e, r, n) {
                    var o = vt.round(mt.distance(t, e) / n)
                        , i = vt.round(mt.distance(t, r) / n)
                        , a = Math.floor((o + i) / 2) + 7;
                    switch (3 & a) {
                        case 0:
                            a++;
                            break;
                        case 2:
                            a--;
                            break;
                        case 3:
                            throw new V("Dimensions could be not found.")
                    }
                    return a
                }
                ,
                t.prototype.calculateModuleSize = function (t, e, r) {
                    return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
                }
                ,
                t.prototype.calculateModuleSizeOneWay = function (t, e) {
                    var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()),
                        Math.floor(e.getX()), Math.floor(e.getY()))
                        , n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()),
                        Math.floor(t.getX()), Math.floor(t.getY()));
                    return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
                }
                ,
                t.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, r, n) {
                    var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n)
                        , i = 1
                        , a = t - (r - t);
                    a < 0 ? (i = t / (t - a),
                        a = 0) : a >= this.image.getWidth() && (i = (this.image.getWidth() - 1 - t) / (a - t),
                        a = this.image.getWidth() - 1);
                    var s = Math.floor(e - (n - e) * i);
                    return i = 1,
                        s < 0 ? (i = e / (e - s),
                            s = 0) : s >= this.image.getHeight() && (i = (this.image.getHeight() - 1 - e) / (s - e),
                            s = this.image.getHeight() - 1),
                        a = Math.floor(t + (a - t) * i),
                    (o += this.sizeOfBlackWhiteBlackRun(t, e, a, s)) - 1
                }
                ,
                t.prototype.sizeOfBlackWhiteBlackRun = function (t, e, r, n) {
                    var o = Math.abs(n - e) > Math.abs(r - t);
                    if (o) {
                        var i = t;
                        t = e,
                            e = i,
                            i = r,
                            r = n,
                            n = i
                    }
                    for (var a = Math.abs(r - t), s = Math.abs(n - e), u = -a / 2, c = t < r ? 1 : -1,
                        f = e < n ? 1 : -1, h = 0, l = r + c, d = t, p = e; d !== l; d += c) {
                        var g = o ? p : d
                            , w = o ? d : p;
                        if (1 === h === this.image.get(g, w)) {
                            if (2 === h) {
                                return vt.distance(d, p, t, e);
                            }
                            h++
                        }
                        if ((u += s) > 0) {
                            if (p === n) {
                                break;
                            }
                            p += f,
                                u -= a
                        }
                    }
                    return 2 === h ? vt.distance(r + c, n, t, e) : NaN
                }
                ,
                t.prototype.findAlignmentInRegion = function (t, e, r, n) {
                    var o = Math.floor(n * t)
                        , i = Math.max(0, e - o)
                        , a = Math.min(this.image.getWidth() - 1, e + o);
                    if (a - i < 3 * t) {
                        throw new V("Alignment top exceeds estimated module size.");
                    }
                    var s = Math.max(0, r - o)
                        , u = Math.min(this.image.getHeight() - 1, r + o);
                    if (u - s < 3 * t) {
                        throw new V("Alignment bottom exceeds estimated module size.");
                    }
                    return new rn(this.image, i, s, a - i, u - s, t, this.resultPointCallback).find()
                }
                ,
                t
        }(), fn = function () {
            function t() {
                this.decoder = new Jr
            }

            return t.prototype.getDecoder = function () {
                return this.decoder
            }
                ,
                t.prototype.decode = function (e, r) {
                    var n, o;
                    if (null != r && void 0 !== r.get(O.PURE_BARCODE)) {
                        var i = t.extractPureBits(e.getBlackMatrix());
                        n = this.decoder.decodeBitMatrix(i, r),
                            o = t.NO_POINTS
                    } else {
                        var a = new cn(e.getBlackMatrix()).detect(r);
                        n = this.decoder.decodeBitMatrix(a.getBits(), r),
                            o = a.getPoints()
                    }
                    n.getOther() instanceof qr && n.getOther().applyMirroredCorrection(o);
                    var s = new tt(n.getText(), n.getRawBytes(), void 0, o, rt.QR_CODE, void 0)
                        , u = n.getByteSegments();
                    null !== u && s.putMetadata(ot.BYTE_SEGMENTS, u);
                    var c = n.getECLevel();
                    return null !== c && s.putMetadata(ot.ERROR_CORRECTION_LEVEL, c),
                    n.hasStructuredAppend() && (s.putMetadata(ot.STRUCTURED_APPEND_SEQUENCE,
                        n.getStructuredAppendSequenceNumber()),
                        s.putMetadata(ot.STRUCTURED_APPEND_PARITY, n.getStructuredAppendParity())),
                        s
                }
                ,
                t.prototype.reset = function () {
                }
                ,
                t.extractPureBits = function (t) {
                    var e = t.getTopLeftOnBit()
                        , r = t.getBottomRightOnBit();
                    if (null === e || null === r) {
                        throw new V;
                    }
                    var n = this.moduleSize(e, t)
                        , o = e[1]
                        , i = r[1]
                        , a = e[0]
                        , s = r[0];
                    if (a >= s || o >= i) {
                        throw new V;
                    }
                    if (i - o != s - a && (s = a + (i - o)) >= t.getWidth()) {
                        throw new V;
                    }
                    var u = Math.round((s - a + 1) / n)
                        , c = Math.round((i - o + 1) / n);
                    if (u <= 0 || c <= 0) {
                        throw new V;
                    }
                    if (c !== u) {
                        throw new V;
                    }
                    var f = Math.floor(n / 2);
                    o += f;
                    var h = (a += f) + Math.floor((u - 1) * n) - s;
                    if (h > 0) {
                        if (h > f) {
                            throw new V;
                        }
                        a -= h
                    }
                    var l = o + Math.floor((c - 1) * n) - i;
                    if (l > 0) {
                        if (l > f) {
                            throw new V;
                        }
                        o -= l
                    }
                    for (var d = new k(u, c), p = 0; p < c; p++) {
                        for (var g = o + Math.floor(p * n), w = 0; w < u; w++) {
                            t.get(a + Math.floor(w * n), g) && d.set(w, p);
                        }
                    }
                    return d
                }
                ,
                t.moduleSize = function (t, e) {
                    for (var r = e.getHeight(), n = e.getWidth(), o = t[0], i = t[1], a = !0, s = 0; o < n && i < r;) {
                        if (a !== e.get(o, i)) {
                            if (5 == ++s) {
                                break;
                            }
                            a = !a
                        }
                        o++,
                            i++
                    }
                    if (o === n || i === r) {
                        throw new V;
                    }
                    return (o - t[0]) / 7
                }
                ,
                t.NO_POINTS = new Array,
                t
        }(), hn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, ln = function () {
            function t() {
            }

            return t.prototype.PDF417Common = function () {
            }
                ,
                t.getBitCountSum = function (t) {
                    return vt.sum(t)
                }
                ,
                t.toIntArray = function (e) {
                    var r, n;
                    if (null == e || !e.length) {
                        return t.EMPTY_INT_ARRAY;
                    }
                    var o = new Int32Array(e.length)
                        , i = 0;
                    try {
                        for (var a = hn(e), s = a.next(); !s.done; s = a.next()) {
                            var u = s.value;
                            o[i++] = u
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                    return o
                }
                ,
                t.getCodeword = function (e) {
                    var r = A.binarySearch(t.SYMBOL_TABLE, 262143 & e);
                    return r < 0 ? -1 : (t.CODEWORD_TABLE[r] - 1) % t.NUMBER_OF_CODEWORDS
                }
                ,
                t.NUMBER_OF_CODEWORDS = 929,
                t.MAX_CODEWORDS_IN_BARCODE = t.NUMBER_OF_CODEWORDS - 1,
                t.MIN_ROWS_IN_BARCODE = 3,
                t.MAX_ROWS_IN_BARCODE = 90,
                t.MODULES_IN_CODEWORD = 17,
                t.MODULES_IN_STOP_PATTERN = 18,
                t.BARS_IN_MODULE = 8,
                t.EMPTY_INT_ARRAY = new Int32Array([]),
                t.SYMBOL_TABLE = Int32Array.from(
                    [66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600,
                        66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748,
                        66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936,
                        66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150,
                        67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438,
                        67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686,
                        67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826,
                        67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046,
                        68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336,
                        68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552,
                        68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764,
                        68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976,
                        68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108,
                        69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340,
                        69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484,
                        69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790,
                        69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952,
                        70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174,
                        70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600,
                        70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136,
                        71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554,
                        71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758,
                        71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910,
                        71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124,
                        72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444,
                        72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668,
                        72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856,
                        72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022,
                        73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226,
                        73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346,
                        73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522,
                        73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886,
                        73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136,
                        74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502,
                        74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732,
                        74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632,
                        75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836,
                        75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296,
                        77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688,
                        77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966,
                        77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210,
                        78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448,
                        78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782,
                        78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100,
                        79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664,
                        79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894,
                        79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092,
                        80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328,
                        80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576,
                        80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856,
                        80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990,
                        80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154,
                        81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342,
                        81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508,
                        81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702,
                        81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180,
                        82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404,
                        82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736,
                        82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974,
                        82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648,
                        83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916,
                        83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116,
                        85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792,
                        85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256,
                        86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536,
                        89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998,
                        90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396,
                        90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610,
                        90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912,
                        90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126,
                        91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708,
                        91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104,
                        92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200,
                        93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888,
                        93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156,
                        94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414,
                        94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658,
                        94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816,
                        94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164,
                        95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480,
                        95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060,
                        96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310,
                        96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416,
                        96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544,
                        96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744,
                        96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048,
                        97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260,
                        97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474,
                        97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672,
                        97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868,
                        97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024,
                        98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968,
                        99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386,
                        99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560,
                        99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780,
                        99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920,
                        99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078,
                        100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396,
                        100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558,
                        100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792,
                        100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988,
                        101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280,
                        101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442,
                        101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580,
                        101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784,
                        101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992,
                        102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214,
                        102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458,
                        102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626,
                        102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850,
                        102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160,
                        103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384,
                        103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048,
                        104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326,
                        104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514,
                        104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652,
                        104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910,
                        104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240,
                        105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564,
                        105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742,
                        105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972,
                        106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174,
                        106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308,
                        106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612,
                        106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776,
                        106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974,
                        106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376,
                        107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502,
                        107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088,
                        108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352,
                        108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592,
                        108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072,
                        110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384,
                        110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686,
                        110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850,
                        110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074,
                        111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372,
                        111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676,
                        111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520,
                        112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836,
                        112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032,
                        113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376,
                        113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686,
                        113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854,
                        113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076,
                        114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242,
                        114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364,
                        114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842,
                        114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250,
                        115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408,
                        115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738,
                        115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896,
                        115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098,
                        116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212,
                        116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364,
                        116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520,
                        116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714,
                        116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892,
                        116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118,
                        117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236,
                        117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568,
                        117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750,
                        117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966,
                        117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210,
                        118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374,
                        118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574,
                        118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738,
                        118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940,
                        118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152,
                        119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278,
                        119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568,
                        119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772,
                        119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328,
                        120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700,
                        120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876,
                        120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038,
                        121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282,
                        121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536,
                        121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890,
                        121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014,
                        122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176,
                        122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460,
                        122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618,
                        122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786,
                        122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154,
                        123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258,
                        123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464,
                        123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590,
                        123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752,
                        123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006,
                        124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142,
                        124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294,
                        124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462,
                        124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616,
                        124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788,
                        124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982,
                        124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072,
                        125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192,
                        125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404,
                        125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702,
                        125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896,
                        125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052,
                        126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236,
                        126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452,
                        126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604,
                        126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760,
                        126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900,
                        126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290,
                        127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400,
                        127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628,
                        127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764,
                        127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922,
                        127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134,
                        128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268,
                        128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464,
                        128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578,
                        128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672,
                        128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868,
                        128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204,
                        129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398,
                        129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614,
                        129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744,
                        129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906,
                        129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]),
                t.CODEWORD_TABLE = Int32Array.from(
                    [2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865,
                        861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809,
                        2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655,
                        2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783,
                        2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678,
                        2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345,
                        654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608,
                        606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536,
                        905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489,
                        2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701,
                        2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750,
                        2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296,
                        1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462,
                        2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425,
                        419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365,
                        2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168,
                        1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786,
                        783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663,
                        693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624,
                        2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651,
                        1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907,
                        904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513,
                        876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675,
                        2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850,
                        1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306,
                        2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253,
                        2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052,
                        202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231,
                        1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162,
                        2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173,
                        1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572,
                        568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541,
                        1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484,
                        2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427,
                        414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473,
                        1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432,
                        2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405,
                        745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368,
                        2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610,
                        2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573,
                        2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528,
                        1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703,
                        1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851,
                        1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137,
                        136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117,
                        1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950,
                        1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081,
                        1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925,
                        53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047,
                        1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28,
                        1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992,
                        2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338,
                        2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308,
                        305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357,
                        2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095,
                        272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037,
                        2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064,
                        215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263,
                        2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287,
                        2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263,
                        2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279,
                        528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479,
                        2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251,
                        497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453,
                        2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423,
                        1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795,
                        2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701,
                        2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607,
                        2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564,
                        2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840,
                        1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810,
                        897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726,
                        2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643,
                        1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613,
                        1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818,
                        2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567,
                        1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529,
                        411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158,
                        360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415,
                        1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363,
                        665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646,
                        1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851,
                        1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352,
                        1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250,
                        2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045,
                        191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079,
                        154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167,
                        170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559,
                        556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450,
                        2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177,
                        410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397,
                        2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667,
                        688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532,
                        895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769,
                        1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113,
                        111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79,
                        1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082,
                        1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920,
                        1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944,
                        1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963,
                        29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351,
                        2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286,
                        2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085,
                        2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030,
                        2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286,
                        2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514,
                        2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449,
                        474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421,
                        2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730,
                        727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549,
                        2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686,
                        1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629,
                        1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822,
                        820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452,
                        1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371,
                        1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625,
                        623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846,
                        2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343,
                        255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224,
                        214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160,
                        1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023,
                        585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393,
                        390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391,
                        729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516,
                        885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122,
                        1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068,
                        1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909,
                        1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940,
                        1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964,
                        961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329,
                        327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237,
                        2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177,
                        2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282,
                        562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216,
                        435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383,
                        2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717,
                        2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668,
                        1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554,
                        1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387,
                        1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773,
                        1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210,
                        197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149,
                        1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556,
                        1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713,
                        1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118,
                        1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066,
                        1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009,
                        52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18,
                        943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288,
                        285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178,
                        2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500,
                        513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767,
                        711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769,
                        1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625,
                        1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141,
                        146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425,
                        388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962,
                        1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930,
                        3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325,
                        1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179,
                        1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706,
                        913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002,
                        1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924,
                        1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270,
                        2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]),
                t
        }(), dn = function () {
            function t(t, e) {
                this.bits = t,
                    this.points = e
            }

            return t.prototype.getBits = function () {
                return this.bits
            }
                ,
                t.prototype.getPoints = function () {
                    return this.points
                }
                ,
                t
        }(), pn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, gn = function () {
            function t() {
            }

            return t.detectMultiple = function (e, r, n) {
                var o = e.getBlackMatrix()
                    , i = t.detect(n, o);
                return i.length || ((o = o.clone()).rotate180(),
                    i = t.detect(n, o)),
                    new dn(o, i)
            }
                ,
                t.detect = function (e, r) {
                    for (var n, o, i = new Array, a = 0, s = 0, u = !1; a < r.getHeight();) {
                        var c = t.findVertices(r, a, s);
                        if (null != c[0] || null != c[3]) {
                            if (u = !0,
                                i.push(c),
                                !e) {
                                break;
                            }
                            null != c[2] ? (s = Math.trunc(c[2].getX()),
                                a = Math.trunc(c[2].getY())) : (s = Math.trunc(c[4].getX()),
                                a = Math.trunc(c[4].getY()))
                        } else {
                            if (!u) {
                                break;
                            }
                            u = !1,
                                s = 0;
                            try {
                                for (var f = (n = void 0,
                                    pn(i)), h = f.next(); !h.done; h = f.next()) {
                                    var l = h.value;
                                    null != l[1] && (a = Math.trunc(Math.max(a, l[1].getY()))),
                                    null != l[3] && (a = Math.max(a, Math.trunc(l[3].getY())))
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    h && !h.done && (o = f.return) && o.call(f)
                                } finally {
                                    if (n) {
                                        throw n.error
                                    }
                                }
                            }
                            a += t.ROW_STEP
                        }
                    }
                    return i
                }
                ,
                t.findVertices = function (e, r, n) {
                    var o = e.getHeight()
                        , i = e.getWidth()
                        , a = new Array(8);
                    return t.copyToResult(a, t.findRowsWithPattern(e, o, i, r, n, t.START_PATTERN),
                        t.INDEXES_START_PATTERN),
                    null != a[4] && (n = Math.trunc(a[4].getX()),
                        r = Math.trunc(a[4].getY())),
                        t.copyToResult(a, t.findRowsWithPattern(e, o, i, r, n, t.STOP_PATTERN), t.INDEXES_STOP_PATTERN),
                        a
                }
                ,
                t.copyToResult = function (t, e, r) {
                    for (var n = 0; n < r.length; n++) {
                        t[r[n]] = e[n]
                    }
                }
                ,
                t.findRowsWithPattern = function (e, r, n, o, i, a) {
                    for (var s = new Array(4), u = !1, c = new Int32Array(a.length); o < r; o += t.ROW_STEP) {
                        if (null != (d = t.findGuardPattern(e, i, o, n, !1, a, c))) {
                            for (; o > 0;) {
                                if (null == (l = t.findGuardPattern(e, i, --o, n, !1, a, c))) {
                                    o++;
                                    break
                                }
                                d = l
                            }
                            s[0] = new mt(d[0], o),
                                s[1] = new mt(d[1], o),
                                u = !0;
                            break
                        }
                    }
                    var f = o + 1;
                    if (u) {
                        for (var h = 0, l = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]); f < r;
                            f++) {
                            var d;
                            if (null != (d = t.findGuardPattern(e, l[0], f, n, !1, a, c)) && Math.abs(l[0] - d[0])
                                < t.MAX_PATTERN_DRIFT && Math.abs(l[1] - d[1]) < t.MAX_PATTERN_DRIFT) {
                                l = d,
                                    h = 0;
                            } else {
                                if (h > t.SKIPPED_ROW_COUNT_MAX) {
                                    break;
                                }
                                h++
                            }
                        }
                        f -= h + 1,
                            s[2] = new mt(l[0], f),
                            s[3] = new mt(l[1], f)
                    }
                    return f - o < t.BARCODE_MIN_HEIGHT && A.fill(s, null),
                        s
                }
                ,
                t.findGuardPattern = function (e, r, n, o, i, a, s) {
                    A.fillWithin(s, 0, s.length, 0);
                    for (var u = r, c = 0; e.get(u, n) && u > 0 && c++ < t.MAX_PIXEL_DRIFT;) {
                        u--;
                    }
                    for (var f = u, h = 0, l = a.length, d = i; f < o; f++) {
                        if (e.get(f, n) !== d) {
                            s[h]++;
                        } else {
                            if (h === l - 1) {
                                if (t.patternMatchVariance(s, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) {
                                    return new Int32Array([u, f]);
                                }
                                u += s[0] + s[1],
                                    w.arraycopy(s, 2, s, 0, h - 1),
                                    s[h - 1] = 0,
                                    s[h] = 0,
                                    h--
                            } else {
                                h++;
                            }
                            s[h] = 1,
                                d = !d
                        }
                    }
                    return h === l - 1 && t.patternMatchVariance(s, a, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE
                        ? new Int32Array([u, f - 1]) : null
                }
                ,
                t.patternMatchVariance = function (t, e, r) {
                    for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++) {
                        o += t[a],
                            i += e[a];
                    }
                    if (o < i) {
                        return 1 / 0;
                    }
                    var s = o / i;
                    r *= s;
                    for (var u = 0, c = 0; c < n; c++) {
                        var f = t[c]
                            , h = e[c] * s
                            , l = f > h ? f - h : h - f;
                        if (l > r) {
                            return 1 / 0;
                        }
                        u += l
                    }
                    return u / o
                }
                ,
                t.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]),
                t.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]),
                t.MAX_AVG_VARIANCE = .42,
                t.MAX_INDIVIDUAL_VARIANCE = .8,
                t.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]),
                t.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]),
                t.MAX_PIXEL_DRIFT = 3,
                t.MAX_PATTERN_DRIFT = 5,
                t.SKIPPED_ROW_COUNT_MAX = 25,
                t.ROW_STEP = 5,
                t.BARCODE_MIN_HEIGHT = 10,
                t
        }(), wn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, yn = function () {
            function t(t, e) {
                if (0 === e.length) {
                    throw new h;
                }
                this.field = t;
                var r = e.length;
                if (r > 1 && 0 === e[0]) {
                    for (var n = 1; n < r && 0 === e[n];) {
                        n++;
                    }
                    n === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - n),
                        w.arraycopy(e, n, this.coefficients, 0, this.coefficients.length))
                } else {
                    this.coefficients = e
                }
            }

            return t.prototype.getCoefficients = function () {
                return this.coefficients
            }
                ,
                t.prototype.getDegree = function () {
                    return this.coefficients.length - 1
                }
                ,
                t.prototype.isZero = function () {
                    return 0 === this.coefficients[0]
                }
                ,
                t.prototype.getCoefficient = function (t) {
                    return this.coefficients[this.coefficients.length - 1 - t]
                }
                ,
                t.prototype.evaluateAt = function (t) {
                    var e, r;
                    if (0 === t) {
                        return this.getCoefficient(0);
                    }
                    if (1 === t) {
                        var n = 0;
                        try {
                            for (var o = wn(this.coefficients), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                n = this.field.add(n, a)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (e) {
                                    throw e.error
                                }
                            }
                        }
                        return n
                    }
                    for (var s = this.coefficients[0], u = this.coefficients.length, c = 1; c < u; c++) {
                        s = this.field.add(this.field.multiply(t, s), this.coefficients[c]);
                    }
                    return s
                }
                ,
                t.prototype.add = function (e) {
                    if (!this.field.equals(e.field)) {
                        throw new h("ModulusPolys do not have same ModulusGF field");
                    }
                    if (this.isZero()) {
                        return e;
                    }
                    if (e.isZero()) {
                        return this;
                    }
                    var r = this.coefficients
                        , n = e.coefficients;
                    if (r.length > n.length) {
                        var o = r;
                        r = n,
                            n = o
                    }
                    var i = new Int32Array(n.length)
                        , a = n.length - r.length;
                    w.arraycopy(n, 0, i, 0, a);
                    for (var s = a; s < n.length; s++) {
                        i[s] = this.field.add(r[s - a], n[s]);
                    }
                    return new t(this.field, i)
                }
                ,
                t.prototype.subtract = function (t) {
                    if (!this.field.equals(t.field)) {
                        throw new h("ModulusPolys do not have same ModulusGF field");
                    }
                    return t.isZero() ? this : this.add(t.negative())
                }
                ,
                t.prototype.multiply = function (e) {
                    return e instanceof t ? this.multiplyOther(e) : this.multiplyScalar(e)
                }
                ,
                t.prototype.multiplyOther = function (e) {
                    if (!this.field.equals(e.field)) {
                        throw new h("ModulusPolys do not have same ModulusGF field");
                    }
                    if (this.isZero() || e.isZero()) {
                        return new t(this.field, new Int32Array([0]));
                    }
                    for (var r = this.coefficients, n = r.length, o = e.coefficients, i = o.length,
                        a = new Int32Array(n + i - 1), s = 0; s < n; s++) {
                        for (var u = r[s], c = 0; c < i; c++) {
                            a[s + c] = this.field.add(a[s + c], this.field.multiply(u, o[c]));
                        }
                    }
                    return new t(this.field, a)
                }
                ,
                t.prototype.negative = function () {
                    for (var e = this.coefficients.length, r = new Int32Array(e), n = 0; n < e; n++) {
                        r[n] = this.field.subtract(0, this.coefficients[n]);
                    }
                    return new t(this.field, r)
                }
                ,
                t.prototype.multiplyScalar = function (e) {
                    if (0 === e) {
                        return new t(this.field, new Int32Array([0]));
                    }
                    if (1 === e) {
                        return this;
                    }
                    for (var r = this.coefficients.length, n = new Int32Array(r), o = 0; o < r; o++) {
                        n[o] = this.field.multiply(this.coefficients[o], e);
                    }
                    return new t(this.field, n)
                }
                ,
                t.prototype.multiplyByMonomial = function (e, r) {
                    if (e < 0) {
                        throw new h;
                    }
                    if (0 === r) {
                        return new t(this.field, new Int32Array([0]));
                    }
                    for (var n = this.coefficients.length, o = new Int32Array(n + e), i = 0; i < n; i++) {
                        o[i] = this.field.multiply(this.coefficients[i], r);
                    }
                    return new t(this.field, o)
                }
                ,
                t.prototype.toString = function () {
                    for (var t = new F, e = this.getDegree(); e >= 0; e--) {
                        var r = this.getCoefficient(e);
                        0 !== r && (r < 0 ? (t.append(" - "),
                            r = -r) : t.length() > 0 && t.append(" + "),
                        0 !== e && 1 === r || t.append(r),
                        0 !== e && (1 === e ? t.append("x") : (t.append("x^"),
                            t.append(e))))
                    }
                    return t.toString()
                }
                ,
                t
        }(), vn = function () {
            function t() {
            }

            return t.prototype.add = function (t, e) {
                return (t + e) % this.modulus
            }
                ,
                t.prototype.subtract = function (t, e) {
                    return (this.modulus + t - e) % this.modulus
                }
                ,
                t.prototype.exp = function (t) {
                    return this.expTable[t]
                }
                ,
                t.prototype.log = function (t) {
                    if (0 === t) {
                        throw new h;
                    }
                    return this.logTable[t]
                }
                ,
                t.prototype.inverse = function (t) {
                    if (0 === t) {
                        throw new ct;
                    }
                    return this.expTable[this.modulus - this.logTable[t] - 1]
                }
                ,
                t.prototype.multiply = function (t, e) {
                    return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus
                        - 1)]
                }
                ,
                t.prototype.getSize = function () {
                    return this.modulus
                }
                ,
                t.prototype.equals = function (t) {
                    return t === this
                }
                ,
                t
        }(), _n = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), mn = function (t) {
            function e(e, r) {
                var n = t.call(this) || this;
                n.modulus = e,
                    n.expTable = new Int32Array(e),
                    n.logTable = new Int32Array(e);
                for (var o = 1, i = 0; i < e; i++) {
                    n.expTable[i] = o,
                        o = o * r % e;
                }
                for (i = 0; i < e - 1; i++) {
                    n.logTable[n.expTable[i]] = i;
                }
                return n.zero = new yn(n, new Int32Array([0])),
                    n.one = new yn(n, new Int32Array([1])),
                    n
            }

            return _n(e, t),
                e.prototype.getZero = function () {
                    return this.zero
                }
                ,
                e.prototype.getOne = function () {
                    return this.one
                }
                ,
                e.prototype.buildMonomial = function (t, e) {
                    if (t < 0) {
                        throw new h;
                    }
                    if (0 === e) {
                        return this.zero;
                    }
                    var r = new Int32Array(t + 1);
                    return r[0] = e,
                        new yn(this, r)
                }
                ,
                e.PDF417_GF = new e(ln.NUMBER_OF_CODEWORDS, 3),
                e
        }(vn), Cn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, An = function () {
            function t() {
                this.field = mn.PDF417_GF
            }

            return t.prototype.decode = function (t, e, r) {
                for (var n, o, i = new yn(this.field, t), a = new Int32Array(e), s = !1, u = e; u > 0; u--) {
                    var c = i.evaluateAt(this.field.exp(u));
                    a[e - u] = c,
                    0 !== c && (s = !0)
                }
                if (!s) {
                    return 0;
                }
                var f = this.field.getOne();
                if (null != r) {
                    try {
                        for (var h = Cn(r), l = h.next(); !l.done; l = h.next()) {
                            var d = l.value
                                , g = this.field.exp(t.length - 1 - d)
                                , w = new yn(this.field, new Int32Array([this.field.subtract(0, g), 1]));
                            f = f.multiply(w)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (o = h.return) && o.call(h)
                        } finally {
                            if (n) {
                                throw n.error
                            }
                        }
                    }
                }
                var y = new yn(this.field, a)
                    , v = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), y, e)
                    , _ = v[0]
                    , m = v[1]
                    , C = this.findErrorLocations(_)
                    , A = this.findErrorMagnitudes(m, _, C);
                for (u = 0; u < C.length; u++) {
                    var E = t.length - 1 - this.field.log(C[u]);
                    if (E < 0) {
                        throw p.getChecksumInstance();
                    }
                    t[E] = this.field.subtract(t[E], A[u])
                }
                return C.length
            }
                ,
                t.prototype.runEuclideanAlgorithm = function (t, e, r) {
                    if (t.getDegree() < e.getDegree()) {
                        var n = t;
                        t = e,
                            e = n
                    }
                    for (var o = t, i = e, a = this.field.getZero(), s = this.field.getOne();
                        i.getDegree() >= Math.round(r / 2);) {
                        var u = o
                            , c = a;
                        if (a = s,
                            (o = i).isZero()) {
                            throw p.getChecksumInstance();
                        }
                        i = u;
                        for (var f = this.field.getZero(), h = o.getCoefficient(o.getDegree()),
                            l = this.field.inverse(h); i.getDegree() >= o.getDegree() && !i.isZero();) {
                            var d = i.getDegree() - o.getDegree()
                                , g = this.field.multiply(i.getCoefficient(i.getDegree()), l);
                            f = f.add(this.field.buildMonomial(d, g)),
                                i = i.subtract(o.multiplyByMonomial(d, g))
                        }
                        s = f.multiply(a).subtract(c).negative()
                    }
                    var w = s.getCoefficient(0);
                    if (0 === w) {
                        throw p.getChecksumInstance();
                    }
                    var y = this.field.inverse(w);
                    return [s.multiply(y), i.multiply(y)]
                }
                ,
                t.prototype.findErrorLocations = function (t) {
                    for (var e = t.getDegree(), r = new Int32Array(e), n = 0, o = 1; o < this.field.getSize() && n < e;
                        o++) {
                        0 === t.evaluateAt(o) && (r[n] = this.field.inverse(o),
                            n++);
                    }
                    if (n !== e) {
                        throw p.getChecksumInstance();
                    }
                    return r
                }
                ,
                t.prototype.findErrorMagnitudes = function (t, e, r) {
                    for (var n = e.getDegree(), o = new Int32Array(n), i = 1; i <= n; i++) {
                        o[n - i] = this.field.multiply(i, e.getCoefficient(i));
                    }
                    var a = new yn(this.field, o)
                        , s = r.length
                        , u = new Int32Array(s);
                    for (i = 0; i < s; i++) {
                        var c = this.field.inverse(r[i])
                            , f = this.field.subtract(0, t.evaluateAt(c))
                            , h = this.field.inverse(a.evaluateAt(c));
                        u[i] = this.field.multiply(f, h)
                    }
                    return u
                }
                ,
                t
        }(), En = function () {
            function t(e, r, n, o, i) {
                e instanceof t ? this.constructor_2(e) : this.constructor_1(e, r, n, o, i)
            }

            return t.prototype.constructor_1 = function (t, e, r, n, o) {
                var i = null == e || null == r
                    , a = null == n || null == o;
                if (i && a) {
                    throw new V;
                }
                i ? (e = new mt(0, n.getY()),
                    r = new mt(0, o.getY())) : a && (n = new mt(t.getWidth() - 1, e.getY()),
                    o = new mt(t.getWidth() - 1, r.getY())),
                    this.image = t,
                    this.topLeft = e,
                    this.bottomLeft = r,
                    this.topRight = n,
                    this.bottomRight = o,
                    this.minX = Math.trunc(Math.min(e.getX(), r.getX())),
                    this.maxX = Math.trunc(Math.max(n.getX(), o.getX())),
                    this.minY = Math.trunc(Math.min(e.getY(), n.getY())),
                    this.maxY = Math.trunc(Math.max(r.getY(), o.getY()))
            }
                ,
                t.prototype.constructor_2 = function (t) {
                    this.image = t.image,
                        this.topLeft = t.getTopLeft(),
                        this.bottomLeft = t.getBottomLeft(),
                        this.topRight = t.getTopRight(),
                        this.bottomRight = t.getBottomRight(),
                        this.minX = t.getMinX(),
                        this.maxX = t.getMaxX(),
                        this.minY = t.getMinY(),
                        this.maxY = t.getMaxY()
                }
                ,
                t.merge = function (e, r) {
                    return null == e ? r : null == r ? e : new t(e.image, e.topLeft, e.bottomLeft, r.topRight,
                        r.bottomRight)
                }
                ,
                t.prototype.addMissingRows = function (e, r, n) {
                    var o = this.topLeft
                        , i = this.bottomLeft
                        , a = this.topRight
                        , s = this.bottomRight;
                    if (e > 0) {
                        var u = n ? this.topLeft : this.topRight
                            , c = Math.trunc(u.getY() - e);
                        c < 0 && (c = 0);
                        var f = new mt(u.getX(), c);
                        n ? o = f : a = f
                    }
                    if (r > 0) {
                        var h = n ? this.bottomLeft : this.bottomRight
                            , l = Math.trunc(h.getY() + r);
                        l >= this.image.getHeight() && (l = this.image.getHeight() - 1);
                        var d = new mt(h.getX(), l);
                        n ? i = d : s = d
                    }
                    return new t(this.image, o, i, a, s)
                }
                ,
                t.prototype.getMinX = function () {
                    return this.minX
                }
                ,
                t.prototype.getMaxX = function () {
                    return this.maxX
                }
                ,
                t.prototype.getMinY = function () {
                    return this.minY
                }
                ,
                t.prototype.getMaxY = function () {
                    return this.maxY
                }
                ,
                t.prototype.getTopLeft = function () {
                    return this.topLeft
                }
                ,
                t.prototype.getTopRight = function () {
                    return this.topRight
                }
                ,
                t.prototype.getBottomLeft = function () {
                    return this.bottomLeft
                }
                ,
                t.prototype.getBottomRight = function () {
                    return this.bottomRight
                }
                ,
                t
        }(), In = function () {
            function t(t, e, r, n) {
                this.columnCount = t,
                    this.errorCorrectionLevel = n,
                    this.rowCountUpperPart = e,
                    this.rowCountLowerPart = r,
                    this.rowCount = e + r
            }

            return t.prototype.getColumnCount = function () {
                return this.columnCount
            }
                ,
                t.prototype.getErrorCorrectionLevel = function () {
                    return this.errorCorrectionLevel
                }
                ,
                t.prototype.getRowCount = function () {
                    return this.rowCount
                }
                ,
                t.prototype.getRowCountUpperPart = function () {
                    return this.rowCountUpperPart
                }
                ,
                t.prototype.getRowCountLowerPart = function () {
                    return this.rowCountLowerPart
                }
                ,
                t
        }(), Sn = function () {
            function t() {
                this.buffer = ""
            }

            return t.form = function (t, e) {
                var r = -1;
                return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, (function (t, n, o, i, a, s) {
                        if ("%%" === t) {
                            return "%";
                        }
                        if (void 0 !== e[++r]) {
                            t = i ? parseInt(i.substr(1)) : void 0;
                            var u, c = a ? parseInt(a.substr(1)) : void 0;
                            switch (s) {
                                case "s":
                                    u = e[r];
                                    break;
                                case "c":
                                    u = e[r][0];
                                    break;
                                case "f":
                                    u = parseFloat(e[r]).toFixed(t);
                                    break;
                                case "p":
                                    u = parseFloat(e[r]).toPrecision(t);
                                    break;
                                case "e":
                                    u = parseFloat(e[r]).toExponential(t);
                                    break;
                                case "x":
                                    u = parseInt(e[r]).toString(c || 16);
                                    break;
                                case "d":
                                    u = parseFloat(parseInt(e[r], c || 10).toPrecision(t)).toFixed(0)
                            }
                            u = "object" == typeof u ? JSON.stringify(u) : (+u).toString(c);
                            for (var f = parseInt(o), h = o && o[0] + "" == "0" ? "0" : " "; u.length < f;) {
                                u = void 0 !== n ? u + h : h + u;
                            }
                            return u
                        }
                    }
                ))
            }
                ,
                t.prototype.format = function (e) {
                    for (var r = [], n = 1; n < arguments.length; n++) {
                        r[n - 1] = arguments[n];
                    }
                    this.buffer += t.form(e, r)
                }
                ,
                t.prototype.toString = function () {
                    return this.buffer
                }
                ,
                t
        }(), On = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Tn = function () {
            function t(t) {
                this.boundingBox = new En(t),
                    this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
            }

            return t.prototype.getCodewordNearby = function (e) {
                var r = this.getCodeword(e);
                if (null != r) {
                    return r;
                }
                for (var n = 1; n < t.MAX_NEARBY_DISTANCE; n++) {
                    var o = this.imageRowToCodewordIndex(e) - n;
                    if (o >= 0 && null != (r = this.codewords[o])) {
                        return r;
                    }
                    if ((o = this.imageRowToCodewordIndex(e) + n) < this.codewords.length && null
                        != (r = this.codewords[o])) {
                        return r
                    }
                }
                return null
            }
                ,
                t.prototype.imageRowToCodewordIndex = function (t) {
                    return t - this.boundingBox.getMinY()
                }
                ,
                t.prototype.setCodeword = function (t, e) {
                    this.codewords[this.imageRowToCodewordIndex(t)] = e
                }
                ,
                t.prototype.getCodeword = function (t) {
                    return this.codewords[this.imageRowToCodewordIndex(t)]
                }
                ,
                t.prototype.getBoundingBox = function () {
                    return this.boundingBox
                }
                ,
                t.prototype.getCodewords = function () {
                    return this.codewords
                }
                ,
                t.prototype.toString = function () {
                    var t, e, r = new Sn, n = 0;
                    try {
                        for (var o = On(this.codewords), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            null != a ? r.format("%3d: %3d|%3d%n", n++, a.getRowNumber(), a.getValue()) : r.format(
                                "%3d:    |   %n", n++)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (e = o.return) && e.call(o)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                    return r.toString()
                }
                ,
                t.MAX_NEARBY_DISTANCE = 5,
                t
        }(), bn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Rn = function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) {
                return t;
            }
            var n, o, i = r.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done;) {
                    a.push(n.value)
                }
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) {
                        throw o.error
                    }
                }
            }
            return a
        }, Nn = function () {
            function t() {
                this.values = new Map
            }

            return t.prototype.setValue = function (t) {
                t = Math.trunc(t);
                var e = this.values.get(t);
                null == e && (e = 0),
                    e++,
                    this.values.set(t, e)
            }
                ,
                t.prototype.getValue = function () {
                    var t, e, r = -1, n = new Array, o = function (t, e) {
                        var o = function () {
                            return t
                        }
                            , i = function () {
                            return e
                        };
                        i() > r ? (r = i(),
                            (n = []).push(o())) : i() === r && n.push(o())
                    };
                    try {
                        for (var i = bn(this.values.entries()), a = i.next(); !a.done; a = i.next()) {
                            var s = Rn(a.value, 2);
                            o(s[0], s[1])
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (e = i.return) && e.call(i)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                    return ln.toIntArray(n)
                }
                ,
                t.prototype.getConfidence = function (t) {
                    return this.values.get(t)
                }
                ,
                t
        }(), Dn = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), Mn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Pn = function (t) {
            function e(e, r) {
                var n = t.call(this, e) || this;
                return n._isLeft = r,
                    n
            }

            return Dn(e, t),
                e.prototype.setRowNumbers = function () {
                    var t, e;
                    try {
                        for (var r = Mn(this.getCodewords()), n = r.next(); !n.done; n = r.next()) {
                            var o = n.value;
                            null != o && o.setRowNumberAsRowIndicatorColumn()
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (e = r.return) && e.call(r)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                }
                ,
                e.prototype.adjustCompleteIndicatorColumnRowNumbers = function (t) {
                    var e = this.getCodewords();
                    this.setRowNumbers(),
                        this.removeIncorrectCodewords(e, t);
                    for (var r = this.getBoundingBox(), n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
                        o = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
                        i = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                        a = this.imageRowToCodewordIndex(Math.trunc(o.getY())), s = -1, u = 1, c = 0, f = i; f < a;
                        f++) {
                        if (null != e[f]) {
                            var h = e[f]
                                , l = h.getRowNumber() - s;
                            if (0 === l) {
                                c++;
                            } else if (1 === l) {
                                u = Math.max(u, c),
                                    c = 1,
                                    s = h.getRowNumber();
                            } else if (l < 0 || h.getRowNumber() >= t.getRowCount() || l > f) {
                                e[f] = null;
                            } else {
                                for (var d = void 0, p = (d = u > 2 ? (u - 2) * l : l) >= f, g = 1; g <= d && !p; g++) {
                                    p = null != e[f - g];
                                }
                                p ? e[f] = null : (s = h.getRowNumber(),
                                    c = 1)
                            }
                        }
                    }
                }
                ,
                e.prototype.getRowHeights = function () {
                    var t, e, r = this.getBarcodeMetadata();
                    if (null == r) {
                        return null;
                    }
                    this.adjustIncompleteIndicatorColumnRowNumbers(r);
                    var n = new Int32Array(r.getRowCount());
                    try {
                        for (var o = Mn(this.getCodewords()), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            if (null != a) {
                                var s = a.getRowNumber();
                                if (s >= n.length) {
                                    continue;
                                }
                                n[s]++
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (e = o.return) && e.call(o)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                    return n
                }
                ,
                e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (t) {
                    for (var e = this.getBoundingBox(), r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                        n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                        o = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                        i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.getCodewords(), s = -1, u = o;
                        u < i; u++) {
                        if (null != a[u]) {
                            var c = a[u];
                            c.setRowNumberAsRowIndicatorColumn();
                            var f = c.getRowNumber() - s;
                            0 === f || (1 === f ? s = c.getRowNumber() : c.getRowNumber() >= t.getRowCount()
                                ? a[u] = null : s = c.getRowNumber())
                        }
                    }
                }
                ,
                e.prototype.getBarcodeMetadata = function () {
                    var t, e, r = this.getCodewords(), n = new Nn, o = new Nn, i = new Nn, a = new Nn;
                    try {
                        for (var s = Mn(r), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value;
                            if (null != c) {
                                c.setRowNumberAsRowIndicatorColumn();
                                var f = c.getValue() % 30
                                    , h = c.getRowNumber();
                                switch (this._isLeft || (h += 2),
                                h % 3) {
                                    case 0:
                                        o.setValue(3 * f + 1);
                                        break;
                                    case 1:
                                        a.setValue(f / 3),
                                            i.setValue(f % 3);
                                        break;
                                    case 2:
                                        n.setValue(f + 1)
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (e = s.return) && e.call(s)
                        } finally {
                            if (t) {
                                throw t.error
                            }
                        }
                    }
                    if (0 === n.getValue().length || 0 === o.getValue().length || 0 === i.getValue().length || 0
                        === a.getValue().length || n.getValue()[0] < 1 || o.getValue()[0] + i.getValue()[0]
                        < ln.MIN_ROWS_IN_BARCODE || o.getValue()[0] + i.getValue()[0] > ln.MAX_ROWS_IN_BARCODE) {
                        return null;
                    }
                    var l = new In(n.getValue()[0], o.getValue()[0], i.getValue()[0], a.getValue()[0]);
                    return this.removeIncorrectCodewords(r, l),
                        l
                }
                ,
                e.prototype.removeIncorrectCodewords = function (t, e) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (null != t[r]) {
                            var o = n.getValue() % 30
                                , i = n.getRowNumber();
                            if (i > e.getRowCount()) {
                                t[r] = null;
                            } else {
                                switch (this._isLeft || (i += 2),
                                i % 3) {
                                    case 0:
                                        3 * o + 1 !== e.getRowCountUpperPart() && (t[r] = null);
                                        break;
                                    case 1:
                                        Math.trunc(o / 3) === e.getErrorCorrectionLevel() && o % 3
                                        === e.getRowCountLowerPart() || (t[r] = null);
                                        break;
                                    case 2:
                                        o + 1 !== e.getColumnCount() && (t[r] = null)
                                }
                            }
                        }
                    }
                }
                ,
                e.prototype.isLeft = function () {
                    return this._isLeft
                }
                ,
                e.prototype.toString = function () {
                    return "IsLeft: " + this._isLeft + "\n" + t.prototype.toString.call(this)
                }
                ,
                e
        }(Tn), Bn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Ln = function () {
            function t(t, e) {
                this.ADJUST_ROW_NUMBER_SKIP = 2,
                    this.barcodeMetadata = t,
                    this.barcodeColumnCount = t.getColumnCount(),
                    this.boundingBox = e,
                    this.detectionResultColumns = new Array(this.barcodeColumnCount + 2)
            }

            return t.prototype.getDetectionResultColumns = function () {
                this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]),
                    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
                var t, e = ln.MAX_CODEWORDS_IN_BARCODE;
                do {
                    t = e,
                        e = this.adjustRowNumbersAndGetCount()
                } while (e > 0 && e < t);
                return this.detectionResultColumns
            }
                ,
                t.prototype.adjustIndicatorColumnRowNumbers = function (t) {
                    null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
                }
                ,
                t.prototype.adjustRowNumbersAndGetCount = function () {
                    var t = this.adjustRowNumbersByRow();
                    if (0 === t) {
                        return 0;
                    }
                    for (var e = 1; e < this.barcodeColumnCount + 1; e++) {
                        for (var r = this.detectionResultColumns[e].getCodewords(), n = 0; n < r.length; n++) {
                            null != r[n] && (r[n].hasValidRowNumber() || this.adjustRowNumbers(e, n, r));
                        }
                    }
                    return t
                }
                ,
                t.prototype.adjustRowNumbersByRow = function () {
                    return this.adjustRowNumbersFromBothRI(),
                    this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
                }
                ,
                t.prototype.adjustRowNumbersFromBothRI = function () {
                    if (null != this.detectionResultColumns[0] && null
                        != this.detectionResultColumns[this.barcodeColumnCount + 1]) {
                        for (var t = this.detectionResultColumns[0].getCodewords(),
                            e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0;
                            r < t.length; r++) {
                            if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber()) {
                                for (var n = 1; n <= this.barcodeColumnCount; n++) {
                                    var o = this.detectionResultColumns[n].getCodewords()[r];
                                    null != o && (o.setRowNumber(t[r].getRowNumber()),
                                    o.hasValidRowNumber() || (this.detectionResultColumns[n].getCodewords()[r] = null))
                                }
                            }
                        }
                    }
                }
                ,
                t.prototype.adjustRowNumbersFromRRI = function () {
                    if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) {
                        return 0;
                    }
                    for (var e = 0, r = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0;
                        n < r.length; n++) {
                        if (null != r[n]) {
                            for (var o = r[n].getRowNumber(), i = 0, a = this.barcodeColumnCount + 1;
                                a > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; a--) {
                                var s = this.detectionResultColumns[a].getCodewords()[n];
                                null != s && (i = t.adjustRowNumberIfValid(o, i, s),
                                s.hasValidRowNumber() || e++)
                            }
                        }
                    }
                    return e
                }
                ,
                t.prototype.adjustRowNumbersFromLRI = function () {
                    if (null == this.detectionResultColumns[0]) {
                        return 0;
                    }
                    for (var e = 0, r = this.detectionResultColumns[0].getCodewords(), n = 0; n < r.length; n++) {
                        if (null != r[n]) {
                            for (var o = r[n].getRowNumber(), i = 0, a = 1;
                                a < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; a++) {
                                var s = this.detectionResultColumns[a].getCodewords()[n];
                                null != s && (i = t.adjustRowNumberIfValid(o, i, s),
                                s.hasValidRowNumber() || e++)
                            }
                        }
                    }
                    return e
                }
                ,
                t.adjustRowNumberIfValid = function (t, e, r) {
                    return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t),
                        e = 0) : ++e),
                        e
                }
                ,
                t.prototype.adjustRowNumbers = function (e, r, n) {
                    var o, i;
                    if (null != this.detectionResultColumns[e - 1]) {
                        var a = n[r]
                            , s = this.detectionResultColumns[e - 1].getCodewords()
                            , u = s;
                        null != this.detectionResultColumns[e + 1] && (u = this.detectionResultColumns[e
                        + 1].getCodewords());
                        var c = new Array(14);
                        c[2] = s[r],
                            c[3] = u[r],
                        r > 0 && (c[0] = n[r - 1],
                            c[4] = s[r - 1],
                            c[5] = u[r - 1]),
                        r > 1 && (c[8] = n[r - 2],
                            c[10] = s[r - 2],
                            c[11] = u[r - 2]),
                        r < n.length - 1 && (c[1] = n[r + 1],
                            c[6] = s[r + 1],
                            c[7] = u[r + 1]),
                        r < n.length - 2 && (c[9] = n[r + 2],
                            c[12] = s[r + 2],
                            c[13] = u[r + 2]);
                        try {
                            for (var f = Bn(c), h = f.next(); !h.done; h = f.next()) {
                                var l = h.value;
                                if (t.adjustRowNumber(a, l)) {
                                    return
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (i = f.return) && i.call(f)
                            } finally {
                                if (o) {
                                    throw o.error
                                }
                            }
                        }
                    }
                }
                ,
                t.adjustRowNumber = function (t, e) {
                    return null != e && (!(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket())
                        && (t.setRowNumber(e.getRowNumber()),
                            !0))
                }
                ,
                t.prototype.getBarcodeColumnCount = function () {
                    return this.barcodeColumnCount
                }
                ,
                t.prototype.getBarcodeRowCount = function () {
                    return this.barcodeMetadata.getRowCount()
                }
                ,
                t.prototype.getBarcodeECLevel = function () {
                    return this.barcodeMetadata.getErrorCorrectionLevel()
                }
                ,
                t.prototype.setBoundingBox = function (t) {
                    this.boundingBox = t
                }
                ,
                t.prototype.getBoundingBox = function () {
                    return this.boundingBox
                }
                ,
                t.prototype.setDetectionResultColumn = function (t, e) {
                    this.detectionResultColumns[t] = e
                }
                ,
                t.prototype.getDetectionResultColumn = function (t) {
                    return this.detectionResultColumns[t]
                }
                ,
                t.prototype.toString = function () {
                    var t = this.detectionResultColumns[0];
                    null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
                    for (var e = new Sn, r = 0; r < t.getCodewords().length; r++) {
                        e.format("CW %3d:", r);
                        for (var n = 0; n < this.barcodeColumnCount + 2; n++) {
                            if (null != this.detectionResultColumns[n]) {
                                var o = this.detectionResultColumns[n].getCodewords()[r];
                                null != o ? e.format(" %3d|%3d", o.getRowNumber(), o.getValue()) : e.format("    |   ")
                            } else {
                                e.format("    |   ");
                            }
                        }
                        e.format("%n")
                    }
                    return e.toString()
                }
                ,
                t
        }(), Fn = function () {
            function t(e, r, n, o) {
                this.rowNumber = t.BARCODE_ROW_UNKNOWN,
                    this.startX = Math.trunc(e),
                    this.endX = Math.trunc(r),
                    this.bucket = Math.trunc(n),
                    this.value = Math.trunc(o)
            }

            return t.prototype.hasValidRowNumber = function () {
                return this.isValidRowNumber(this.rowNumber)
            }
                ,
                t.prototype.isValidRowNumber = function (e) {
                    return e !== t.BARCODE_ROW_UNKNOWN && this.bucket === e % 3 * 3
                }
                ,
                t.prototype.setRowNumberAsRowIndicatorColumn = function () {
                    this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
                }
                ,
                t.prototype.getWidth = function () {
                    return this.endX - this.startX
                }
                ,
                t.prototype.getStartX = function () {
                    return this.startX
                }
                ,
                t.prototype.getEndX = function () {
                    return this.endX
                }
                ,
                t.prototype.getBucket = function () {
                    return this.bucket
                }
                ,
                t.prototype.getValue = function () {
                    return this.value
                }
                ,
                t.prototype.getRowNumber = function () {
                    return this.rowNumber
                }
                ,
                t.prototype.setRowNumber = function (t) {
                    this.rowNumber = t
                }
                ,
                t.prototype.toString = function () {
                    return this.rowNumber + "|" + this.value
                }
                ,
                t.BARCODE_ROW_UNKNOWN = -1,
                t
        }(), kn = function () {
            function t() {
            }

            return t.initialize = function () {
                for (var e = 0; e < ln.SYMBOL_TABLE.length; e++) {
                    for (var r = ln.SYMBOL_TABLE[e], n = 1 & r, o = 0; o < ln.BARS_IN_MODULE; o++) {
                        for (var i = 0; (1 & r) === n;) {
                            i += 1,
                                r >>= 1;
                        }
                        n = 1 & r,
                        t.RATIOS_TABLE[e] || (t.RATIOS_TABLE[e] = new Array(ln.BARS_IN_MODULE)),
                            t.RATIOS_TABLE[e][ln.BARS_IN_MODULE - o - 1] = Math.fround(i / ln.MODULES_IN_CODEWORD)
                    }
                }
                this.bSymbolTableReady = !0
            }
                ,
                t.getDecodedValue = function (e) {
                    var r = t.getDecodedCodewordValue(t.sampleBitCounts(e));
                    return -1 !== r ? r : t.getClosestDecodedValue(e)
                }
                ,
                t.sampleBitCounts = function (t) {
                    for (var e = vt.sum(t), r = new Int32Array(ln.BARS_IN_MODULE), n = 0, o = 0, i = 0;
                        i < ln.MODULES_IN_CODEWORD; i++) {
                        var a = e / (2 * ln.MODULES_IN_CODEWORD) + i * e / ln.MODULES_IN_CODEWORD;
                        o + t[n] <= a && (o += t[n],
                            n++),
                            r[n]++
                    }
                    return r
                }
                ,
                t.getDecodedCodewordValue = function (e) {
                    var r = t.getBitValue(e);
                    return -1 === ln.getCodeword(r) ? -1 : r
                }
                ,
                t.getBitValue = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        for (var n = 0; n < t[r]; n++) {
                            e = e << 1 | (r % 2 == 0 ? 1 : 0);
                        }
                    }
                    return Math.trunc(e)
                }
                ,
                t.getClosestDecodedValue = function (e) {
                    var r = vt.sum(e)
                        , n = new Array(ln.BARS_IN_MODULE);
                    if (r > 1) {
                        for (var o = 0; o < n.length; o++) {
                            n[o] = Math.fround(e[o] / r);
                        }
                    }
                    var i = _t.MAX_VALUE
                        , a = -1;
                    this.bSymbolTableReady || t.initialize();
                    for (var s = 0; s < t.RATIOS_TABLE.length; s++) {
                        for (var u = 0, c = t.RATIOS_TABLE[s], f = 0; f < ln.BARS_IN_MODULE; f++) {
                            var h = Math.fround(c[f] - n[f]);
                            if ((u += Math.fround(h * h)) >= i) {
                                break
                            }
                        }
                        u < i && (i = u,
                            a = ln.SYMBOL_TABLE[s])
                    }
                    return a
                }
                ,
                t.bSymbolTableReady = !1,
                t.RATIOS_TABLE = new Array(ln.SYMBOL_TABLE.length).map((function (t) {
                        return new Array(ln.BARS_IN_MODULE)
                    }
                )),
                t
        }(), xn = function () {
            function t() {
                this.segmentCount = -1,
                    this.fileSize = -1,
                    this.timestamp = -1,
                    this.checksum = -1
            }

            return t.prototype.getSegmentIndex = function () {
                return this.segmentIndex
            }
                ,
                t.prototype.setSegmentIndex = function (t) {
                    this.segmentIndex = t
                }
                ,
                t.prototype.getFileId = function () {
                    return this.fileId
                }
                ,
                t.prototype.setFileId = function (t) {
                    this.fileId = t
                }
                ,
                t.prototype.getOptionalData = function () {
                    return this.optionalData
                }
                ,
                t.prototype.setOptionalData = function (t) {
                    this.optionalData = t
                }
                ,
                t.prototype.isLastSegment = function () {
                    return this.lastSegment
                }
                ,
                t.prototype.setLastSegment = function (t) {
                    this.lastSegment = t
                }
                ,
                t.prototype.getSegmentCount = function () {
                    return this.segmentCount
                }
                ,
                t.prototype.setSegmentCount = function (t) {
                    this.segmentCount = t
                }
                ,
                t.prototype.getSender = function () {
                    return this.sender || null
                }
                ,
                t.prototype.setSender = function (t) {
                    this.sender = t
                }
                ,
                t.prototype.getAddressee = function () {
                    return this.addressee || null
                }
                ,
                t.prototype.setAddressee = function (t) {
                    this.addressee = t
                }
                ,
                t.prototype.getFileName = function () {
                    return this.fileName
                }
                ,
                t.prototype.setFileName = function (t) {
                    this.fileName = t
                }
                ,
                t.prototype.getFileSize = function () {
                    return this.fileSize
                }
                ,
                t.prototype.setFileSize = function (t) {
                    this.fileSize = t
                }
                ,
                t.prototype.getChecksum = function () {
                    return this.checksum
                }
                ,
                t.prototype.setChecksum = function (t) {
                    this.checksum = t
                }
                ,
                t.prototype.getTimestamp = function () {
                    return this.timestamp
                }
                ,
                t.prototype.setTimestamp = function (t) {
                    this.timestamp = t
                }
                ,
                t
        }(), Vn = function () {
            function t() {
            }

            return t.parseLong = function (t, e) {
                return void 0 === e && (e = void 0),
                    parseInt(t, e)
            }
                ,
                t
        }(), Hn = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), Un = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return Hn(e, t),
                e.kind = "NullPointerException",
                e
        }(s), Gn = function () {
            function t() {
            }

            return t.prototype.writeBytes = function (t) {
                this.writeBytesOffset(t, 0, t.length)
            }
                ,
                t.prototype.writeBytesOffset = function (t, e, r) {
                    if (null == t) {
                        throw new Un;
                    }
                    if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) {
                        throw new v;
                    }
                    if (0 !== r) {
                        for (var n = 0; n < r; n++) {
                            this.write(t[e + n])
                        }
                    }
                }
                ,
                t.prototype.flush = function () {
                }
                ,
                t.prototype.close = function () {
                }
                ,
                t
        }(), Xn = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), Wn = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return Xn(e, t),
                e
        }(s), zn = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), jn = function (t) {
            function e(e) {
                void 0 === e && (e = 32);
                var r = t.call(this) || this;
                if (r.count = 0,
                e < 0) {
                    throw new h("Negative initial size: " + e);
                }
                return r.buf = new Uint8Array(e),
                    r
            }

            return zn(e, t),
                e.prototype.ensureCapacity = function (t) {
                    t - this.buf.length > 0 && this.grow(t)
                }
                ,
                e.prototype.grow = function (t) {
                    var e = this.buf.length << 1;
                    if (e - t < 0 && (e = t),
                    e < 0) {
                        if (t < 0) {
                            throw new Wn;
                        }
                        e = E.MAX_VALUE
                    }
                    this.buf = A.copyOfUint8Array(this.buf, e)
                }
                ,
                e.prototype.write = function (t) {
                    this.ensureCapacity(this.count + 1),
                        this.buf[this.count] = t,
                        this.count += 1
                }
                ,
                e.prototype.writeBytesOffset = function (t, e, r) {
                    if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) {
                        throw new v;
                    }
                    this.ensureCapacity(this.count + r),
                        w.arraycopy(t, e, this.buf, this.count, r),
                        this.count += r
                }
                ,
                e.prototype.writeTo = function (t) {
                    t.writeBytesOffset(this.buf, 0, this.count)
                }
                ,
                e.prototype.reset = function () {
                    this.count = 0
                }
                ,
                e.prototype.toByteArray = function () {
                    return A.copyOfUint8Array(this.buf, this.count)
                }
                ,
                e.prototype.size = function () {
                    return this.count
                }
                ,
                e.prototype.toString = function (t) {
                    return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t)
                        : this.toString_void()
                }
                ,
                e.prototype.toString_void = function () {
                    return new String(this.buf).toString()
                }
                ,
                e.prototype.toString_string = function (t) {
                    return new String(this.buf).toString()
                }
                ,
                e.prototype.toString_number = function (t) {
                    return new String(this.buf).toString()
                }
                ,
                e.prototype.close = function () {
                }
                ,
                e
        }(Gn);

        function Yn() {
            if ("undefined" != typeof window) {
                return window.BigInt || null;
            }
            if ("undefined" != typeof global) {
                return global.BigInt || null;
            }
            if ("undefined" != typeof self) {
                return self.BigInt || null;
            }
            throw new Error("Can't search globals for BigInt!")
        }

        function Zn(t) {
            if (void 0 === Yr && (Yr = Yn()),
            null === Yr) {
                throw new Error("BigInt is not supported!");
            }
            return Yr(t)
        }

        !function (t) {
            t[t.ALPHA = 0] = "ALPHA",
                t[t.LOWER = 1] = "LOWER",
                t[t.MIXED = 2] = "MIXED",
                t[t.PUNCT = 3] = "PUNCT",
                t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT",
                t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
        }(jr || (jr = {}));
        var Kn = function () {
            function t() {
            }

            return t.decode = function (e, r) {
                var n = new F("")
                    , o = D.ISO8859_1;
                n.enableDecoding(o);
                for (var i = 1, a = e[i++], s = new xn; i < e[0];) {
                    switch (a) {
                        case t.TEXT_COMPACTION_MODE_LATCH:
                            i = t.textCompaction(e, i, n);
                            break;
                        case t.BYTE_COMPACTION_MODE_LATCH:
                        case t.BYTE_COMPACTION_MODE_LATCH_6:
                            i = t.byteCompaction(a, e, o, i, n);
                            break;
                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                            n.append(e[i++]);
                            break;
                        case t.NUMERIC_COMPACTION_MODE_LATCH:
                            i = t.numericCompaction(e, i, n);
                            break;
                        case t.ECI_CHARSET:
                            D.getCharacterSetECIByValue(e[i++]);
                            break;
                        case t.ECI_GENERAL_PURPOSE:
                            i += 2;
                            break;
                        case t.ECI_USER_DEFINED:
                            i++;
                            break;
                        case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            i = t.decodeMacroBlock(e, i, s);
                            break;
                        case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case t.MACRO_PDF417_TERMINATOR:
                            throw new b;
                        default:
                            i--,
                                i = t.textCompaction(e, i, n)
                    }
                    if (!(i < e.length)) {
                        throw b.getFormatInstance();
                    }
                    a = e[i++]
                }
                if (0 === n.length()) {
                    throw b.getFormatInstance();
                }
                var u = new it(null, n.toString(), null, r);
                return u.setOther(s),
                    u
            }
                ,
                t.decodeMacroBlock = function (e, r, n) {
                    if (r + t.NUMBER_OF_SEQUENCE_CODEWORDS > e[0]) {
                        throw b.getFormatInstance();
                    }
                    for (var o = new Int32Array(t.NUMBER_OF_SEQUENCE_CODEWORDS), i = 0;
                        i < t.NUMBER_OF_SEQUENCE_CODEWORDS; i++,
                        r++) {
                        o[i] = e[r];
                    }
                    n.setSegmentIndex(E.parseInt(t.decodeBase900toBase10(o, t.NUMBER_OF_SEQUENCE_CODEWORDS)));
                    var a = new F;
                    r = t.textCompaction(e, r, a),
                        n.setFileId(a.toString());
                    var s = -1;
                    for (e[r] === t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = r + 1); r < e[0];) {
                        switch (e[r]) {
                            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                switch (e[++r]) {
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                        var u = new F;
                                        r = t.textCompaction(e, r + 1, u),
                                            n.setFileName(u.toString());
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                        var c = new F;
                                        r = t.textCompaction(e, r + 1, c),
                                            n.setSender(c.toString());
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                        var f = new F;
                                        r = t.textCompaction(e, r + 1, f),
                                            n.setAddressee(f.toString());
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                        var h = new F;
                                        r = t.numericCompaction(e, r + 1, h),
                                            n.setSegmentCount(E.parseInt(h.toString()));
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                        var l = new F;
                                        r = t.numericCompaction(e, r + 1, l),
                                            n.setTimestamp(Vn.parseLong(l.toString()));
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                        var d = new F;
                                        r = t.numericCompaction(e, r + 1, d),
                                            n.setChecksum(E.parseInt(d.toString()));
                                        break;
                                    case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                        var p = new F;
                                        r = t.numericCompaction(e, r + 1, p),
                                            n.setFileSize(Vn.parseLong(p.toString()));
                                        break;
                                    default:
                                        throw b.getFormatInstance()
                                }
                                break;
                            case t.MACRO_PDF417_TERMINATOR:
                                r++,
                                    n.setLastSegment(!0);
                                break;
                            default:
                                throw b.getFormatInstance()
                        }
                    }
                    if (-1 !== s) {
                        var g = r - s;
                        n.isLastSegment() && g--,
                            n.setOptionalData(A.copyOfRange(e, s, s + g))
                    }
                    return r
                }
                ,
                t.textCompaction = function (e, r, n) {
                    for (var o = new Int32Array(2 * (e[0] - r)), i = new Int32Array(2 * (e[0] - r)), a = 0, s = !1;
                        r < e[0] && !s;) {
                        var u = e[r++];
                        if (u < t.TEXT_COMPACTION_MODE_LATCH) {
                            o[a] = u / 30,
                                o[a + 1] = u % 30,
                                a += 2;
                        } else {
                            switch (u) {
                                case t.TEXT_COMPACTION_MODE_LATCH:
                                    o[a++] = t.TEXT_COMPACTION_MODE_LATCH;
                                    break;
                                case t.BYTE_COMPACTION_MODE_LATCH:
                                case t.BYTE_COMPACTION_MODE_LATCH_6:
                                case t.NUMERIC_COMPACTION_MODE_LATCH:
                                case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                case t.MACRO_PDF417_TERMINATOR:
                                    r--,
                                        s = !0;
                                    break;
                                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    o[a] = t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE,
                                        u = e[r++],
                                        i[a] = u,
                                        a++
                            }
                        }
                    }
                    return t.decodeTextCompaction(o, i, a, n),
                        r
                }
                ,
                t.decodeTextCompaction = function (e, r, n, o) {
                    for (var i = jr.ALPHA, a = jr.ALPHA, s = 0; s < n;) {
                        var u = e[s]
                            , c = "";
                        switch (i) {
                            case jr.ALPHA:
                                if (u < 26) {
                                    c = String.fromCharCode(65 + u);
                                } else {
                                    switch (u) {
                                        case 26:
                                            c = " ";
                                            break;
                                        case t.LL:
                                            i = jr.LOWER;
                                            break;
                                        case t.ML:
                                            i = jr.MIXED;
                                            break;
                                        case t.PS:
                                            a = i,
                                                i = jr.PUNCT_SHIFT;
                                            break;
                                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                            o.append(r[s]);
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                                break;
                            case jr.LOWER:
                                if (u < 26) {
                                    c = String.fromCharCode(97 + u);
                                } else {
                                    switch (u) {
                                        case 26:
                                            c = " ";
                                            break;
                                        case t.AS:
                                            a = i,
                                                i = jr.ALPHA_SHIFT;
                                            break;
                                        case t.ML:
                                            i = jr.MIXED;
                                            break;
                                        case t.PS:
                                            a = i,
                                                i = jr.PUNCT_SHIFT;
                                            break;
                                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                            o.append(r[s]);
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                                break;
                            case jr.MIXED:
                                if (u < t.PL) {
                                    c = t.MIXED_CHARS[u];
                                } else {
                                    switch (u) {
                                        case t.PL:
                                            i = jr.PUNCT;
                                            break;
                                        case 26:
                                            c = " ";
                                            break;
                                        case t.LL:
                                            i = jr.LOWER;
                                            break;
                                        case t.AL:
                                            i = jr.ALPHA;
                                            break;
                                        case t.PS:
                                            a = i,
                                                i = jr.PUNCT_SHIFT;
                                            break;
                                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                            o.append(r[s]);
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                                break;
                            case jr.PUNCT:
                                if (u < t.PAL) {
                                    c = t.PUNCT_CHARS[u];
                                } else {
                                    switch (u) {
                                        case t.PAL:
                                            i = jr.ALPHA;
                                            break;
                                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                            o.append(r[s]);
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                                break;
                            case jr.ALPHA_SHIFT:
                                if (i = a,
                                u < 26) {
                                    c = String.fromCharCode(65 + u);
                                } else {
                                    switch (u) {
                                        case 26:
                                            c = " ";
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                                break;
                            case jr.PUNCT_SHIFT:
                                if (i = a,
                                u < t.PAL) {
                                    c = t.PUNCT_CHARS[u];
                                } else {
                                    switch (u) {
                                        case t.PAL:
                                            i = jr.ALPHA;
                                            break;
                                        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                            o.append(r[s]);
                                            break;
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                            i = jr.ALPHA
                                    }
                                }
                        }
                        "" !== c && o.append(c),
                            s++
                    }
                }
                ,
                t.byteCompaction = function (e, r, n, o, i) {
                    var a = new jn
                        , s = 0
                        , u = 0
                        , c = !1;
                    switch (e) {
                        case t.BYTE_COMPACTION_MODE_LATCH:
                            for (var f = new Int32Array(6), h = r[o++]; o < r[0] && !c;) {
                                switch (f[s++] = h,
                                    u = 900 * u + h,
                                    h = r[o++]) {
                                    case t.TEXT_COMPACTION_MODE_LATCH:
                                    case t.BYTE_COMPACTION_MODE_LATCH:
                                    case t.NUMERIC_COMPACTION_MODE_LATCH:
                                    case t.BYTE_COMPACTION_MODE_LATCH_6:
                                    case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case t.MACRO_PDF417_TERMINATOR:
                                        o--,
                                            c = !0;
                                        break;
                                    default:
                                        if (s % 5 == 0 && s > 0) {
                                            for (var l = 0; l < 6; ++l) {
                                                a.write(Number(Zn(u) >> Zn(8 * (5 - l))));
                                            }
                                            u = 0,
                                                s = 0
                                        }
                                }
                            }
                            o === r[0] && h < t.TEXT_COMPACTION_MODE_LATCH && (f[s++] = h);
                            for (var d = 0; d < s; d++) {
                                a.write(f[d]);
                            }
                            break;
                        case t.BYTE_COMPACTION_MODE_LATCH_6:
                            for (; o < r[0] && !c;) {
                                var p = r[o++];
                                if (p < t.TEXT_COMPACTION_MODE_LATCH) {
                                    s++,
                                        u = 900 * u + p;
                                } else {
                                    switch (p) {
                                        case t.TEXT_COMPACTION_MODE_LATCH:
                                        case t.BYTE_COMPACTION_MODE_LATCH:
                                        case t.NUMERIC_COMPACTION_MODE_LATCH:
                                        case t.BYTE_COMPACTION_MODE_LATCH_6:
                                        case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                        case t.MACRO_PDF417_TERMINATOR:
                                            o--,
                                                c = !0
                                    }
                                }
                                if (s % 5 == 0 && s > 0) {
                                    for (l = 0; l < 6; ++l) {
                                        a.write(Number(Zn(u) >> Zn(8 * (5 - l))));
                                    }
                                    u = 0,
                                        s = 0
                                }
                            }
                    }
                    return i.append(B.decode(a.toByteArray(), n)),
                        o
                }
                ,
                t.numericCompaction = function (e, r, n) {
                    for (var o = 0, i = !1, a = new Int32Array(t.MAX_NUMERIC_CODEWORDS); r < e[0] && !i;) {
                        var s = e[r++];
                        if (r === e[0] && (i = !0),
                        s < t.TEXT_COMPACTION_MODE_LATCH) {
                            a[o] = s,
                                o++;
                        } else {
                            switch (s) {
                                case t.TEXT_COMPACTION_MODE_LATCH:
                                case t.BYTE_COMPACTION_MODE_LATCH:
                                case t.BYTE_COMPACTION_MODE_LATCH_6:
                                case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                case t.MACRO_PDF417_TERMINATOR:
                                    r--,
                                        i = !0
                            }
                        }
                        (o % t.MAX_NUMERIC_CODEWORDS == 0 || s === t.NUMERIC_COMPACTION_MODE_LATCH || i) && o > 0
                        && (n.append(t.decodeBase900toBase10(a, o)),
                            o = 0)
                    }
                    return r
                }
                ,
                t.decodeBase900toBase10 = function (e, r) {
                    for (var n = Zn(0), o = 0; o < r; o++) {
                        n += t.EXP900[r - o - 1] * Zn(e[o]);
                    }
                    var i = n.toString();
                    if ("1" !== i.charAt(0)) {
                        throw new b;
                    }
                    return i.substring(1)
                }
                ,
                t.TEXT_COMPACTION_MODE_LATCH = 900,
                t.BYTE_COMPACTION_MODE_LATCH = 901,
                t.NUMERIC_COMPACTION_MODE_LATCH = 902,
                t.BYTE_COMPACTION_MODE_LATCH_6 = 924,
                t.ECI_USER_DEFINED = 925,
                t.ECI_GENERAL_PURPOSE = 926,
                t.ECI_CHARSET = 927,
                t.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928,
                t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923,
                t.MACRO_PDF417_TERMINATOR = 922,
                t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913,
                t.MAX_NUMERIC_CODEWORDS = 15,
                t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0,
                t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1,
                t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2,
                t.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3,
                t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4,
                t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5,
                t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6,
                t.PL = 25,
                t.LL = 27,
                t.AS = 27,
                t.ML = 28,
                t.AL = 28,
                t.PS = 29,
                t.PAL = 29,
                t.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'",
                t.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^",
                t.EXP900 = Yn() ? function () {
                    var t = [];
                    t[0] = Zn(1);
                    var e = Zn(900);
                    t[1] = e;
                    for (var r = 2; r < 16; r++) {
                        t[r] = t[r - 1] * e;
                    }
                    return t
                }() : [],
                t.NUMBER_OF_SEQUENCE_CODEWORDS = 2,
                t
        }()
            , qn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , Qn = function () {
            function t() {
            }

            return t.decode = function (e, r, n, o, i, a, s) {
                for (var u, c = new En(e, r, n, o, i), f = null, h = null, l = !0; ; l = !1) {
                    if (null != r && (f = t.getRowIndicatorColumn(e, c, r, !0, a, s)),
                    null != o && (h = t.getRowIndicatorColumn(e, c, o, !1, a, s)),
                    null == (u = t.merge(f, h))) {
                        throw V.getNotFoundInstance();
                    }
                    var d = u.getBoundingBox();
                    if (!l || null == d || !(d.getMinY() < c.getMinY() || d.getMaxY() > c.getMaxY())) {
                        break;
                    }
                    c = d
                }
                u.setBoundingBox(c);
                var p = u.getBarcodeColumnCount() + 1;
                u.setDetectionResultColumn(0, f),
                    u.setDetectionResultColumn(p, h);
                for (var g = null != f, w = 1; w <= p; w++) {
                    var y = g ? w : p - w;
                    if (void 0 === u.getDetectionResultColumn(y)) {
                        var v = void 0;
                        v = 0 === y || y === p ? new Pn(c, 0 === y) : new Tn(c),
                            u.setDetectionResultColumn(y, v);
                        for (var _ = -1, m = _, C = c.getMinY(); C <= c.getMaxY(); C++) {
                            if ((_ = t.getStartColumn(u, y, C, g)) < 0 || _ > c.getMaxX()) {
                                if (-1 === m) {
                                    continue;
                                }
                                _ = m
                            }
                            var A = t.detectCodeword(e, c.getMinX(), c.getMaxX(), g, _, C, a, s);
                            null != A && (v.setCodeword(C, A),
                                m = _,
                                a = Math.min(a, A.getWidth()),
                                s = Math.max(s, A.getWidth()))
                        }
                    }
                }
                return t.createDecoderResult(u)
            }
                ,
                t.merge = function (e, r) {
                    if (null == e && null == r) {
                        return null;
                    }
                    var n = t.getBarcodeMetadata(e, r);
                    if (null == n) {
                        return null;
                    }
                    var o = En.merge(t.adjustBoundingBox(e), t.adjustBoundingBox(r));
                    return new Ln(n, o)
                }
                ,
                t.adjustBoundingBox = function (e) {
                    var r, n;
                    if (null == e) {
                        return null;
                    }
                    var o = e.getRowHeights();
                    if (null == o) {
                        return null;
                    }
                    var i = t.getMax(o)
                        , a = 0;
                    try {
                        for (var s = qn(o), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value;
                            if (a += i - c,
                            c > 0) {
                                break
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (n = s.return) && n.call(s)
                        } finally {
                            if (r) {
                                throw r.error
                            }
                        }
                    }
                    for (var f = e.getCodewords(), h = 0; a > 0 && null == f[h]; h++) {
                        a--;
                    }
                    var l = 0;
                    for (h = o.length - 1; h >= 0 && (l += i - o[h],
                        !(o[h] > 0)); h--) {
                        ;
                    }
                    for (h = f.length - 1; l > 0 && null == f[h]; h--) {
                        l--;
                    }
                    return e.getBoundingBox().addMissingRows(a, l, e.isLeft())
                }
                ,
                t.getMax = function (t) {
                    var e, r, n = -1;
                    try {
                        for (var o = qn(t), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            n = Math.max(n, a)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    return n
                }
                ,
                t.getBarcodeMetadata = function (t, e) {
                    var r, n;
                    return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata()
                        : null == e || null == (n = e.getBarcodeMetadata()) ? r : r.getColumnCount()
                        !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel()
                        && r.getRowCount() !== n.getRowCount() ? null : r
                }
                ,
                t.getRowIndicatorColumn = function (e, r, n, o, i, a) {
                    for (var s = new Pn(r, o), u = 0; u < 2; u++) {
                        for (var c = 0 === u ? 1 : -1, f = Math.trunc(Math.trunc(n.getX())),
                            h = Math.trunc(Math.trunc(n.getY())); h <= r.getMaxY() && h >= r.getMinY(); h += c) {
                            var l = t.detectCodeword(e, 0, e.getWidth(), o, f, h, i, a);
                            null != l && (s.setCodeword(h, l),
                                f = o ? l.getStartX() : l.getEndX())
                        }
                    }
                    return s
                }
                ,
                t.adjustCodewordCount = function (e, r) {
                    var n = r[0][1]
                        , o = n.getValue()
                        , i = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - t.getNumberOfECCodeWords(
                        e.getBarcodeECLevel());
                    if (0 === o.length) {
                        if (i < 1 || i > ln.MAX_CODEWORDS_IN_BARCODE) {
                            throw V.getNotFoundInstance();
                        }
                        n.setValue(i)
                    } else {
                        o[0] !== i && n.setValue(i)
                    }
                }
                ,
                t.createDecoderResult = function (e) {
                    var r = t.createBarcodeMatrix(e);
                    t.adjustCodewordCount(e, r);
                    for (var n = new Array, o = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()),
                        i = [], a = new Array, s = 0; s < e.getBarcodeRowCount(); s++) {
                        for (var u = 0; u < e.getBarcodeColumnCount(); u++) {
                            var c = r[s][u + 1].getValue()
                                , f = s * e.getBarcodeColumnCount() + u;
                            0 === c.length ? n.push(f) : 1 === c.length ? o[f] = c[0] : (a.push(f),
                                i.push(c))
                        }
                    }
                    for (var h = new Array(i.length), l = 0; l < h.length; l++) {
                        h[l] = i[l];
                    }
                    return t.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), o, ln.toIntArray(n),
                        ln.toIntArray(a), h)
                }
                ,
                t.createDecoderResultFromAmbiguousValues = function (e, r, n, o, i) {
                    for (var a = new Int32Array(o.length), s = 100; s-- > 0;) {
                        for (var u = 0; u < a.length; u++) {
                            r[o[u]] = i[u][a[u]];
                        }
                        try {
                            return t.decodeCodewords(r, e, n)
                        } catch (t) {
                            if (!(t instanceof p)) {
                                throw t
                            }
                        }
                        if (0 === a.length) {
                            throw p.getChecksumInstance();
                        }
                        for (u = 0; u < a.length; u++) {
                            if (a[u] < i[u].length - 1) {
                                a[u]++;
                                break
                            }
                            if (a[u] = 0,
                            u === a.length - 1) {
                                throw p.getChecksumInstance()
                            }
                        }
                    }
                    throw p.getChecksumInstance()
                }
                ,
                t.createBarcodeMatrix = function (t) {
                    for (var e, r, n, o, i = Array.from({
                        length: t.getBarcodeRowCount()
                    }, (function () {
                            return new Array(t.getBarcodeColumnCount() + 2)
                        }
                    )), a = 0; a < i.length; a++) {
                        for (var s = 0; s < i[a].length; s++) {
                            i[a][s] = new Nn;
                        }
                    }
                    var u = 0;
                    try {
                        for (var c = qn(t.getDetectionResultColumns()), f = c.next(); !f.done; f = c.next()) {
                            var h = f.value;
                            if (null != h) {
                                try {
                                    for (var l = (n = void 0,
                                        qn(h.getCodewords())), d = l.next(); !d.done; d = l.next()) {
                                        var p = d.value;
                                        if (null != p) {
                                            var g = p.getRowNumber();
                                            if (g >= 0) {
                                                if (g >= i.length) {
                                                    continue;
                                                }
                                                i[g][u].setValue(p.getValue())
                                            }
                                        }
                                    }
                                } catch (t) {
                                    n = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (o = l.return) && o.call(l)
                                    } finally {
                                        if (n) {
                                            throw n.error
                                        }
                                    }
                                }
                            }
                            u++
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            f && !f.done && (r = c.return) && r.call(c)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    return i
                }
                ,
                t.isValidBarcodeColumn = function (t, e) {
                    return e >= 0 && e <= t.getBarcodeColumnCount() + 1
                }
                ,
                t.getStartColumn = function (e, r, n, o) {
                    var i, a, s = o ? 1 : -1, u = null;
                    if (t.isValidBarcodeColumn(e, r - s) && (u = e.getDetectionResultColumn(r - s).getCodeword(n)),
                    null != u) {
                        return o ? u.getEndX() : u.getStartX();
                    }
                    if (null != (u = e.getDetectionResultColumn(r).getCodewordNearby(n))) {
                        return o ? u.getStartX() : u.getEndX();
                    }
                    if (t.isValidBarcodeColumn(e, r - s) && (u = e.getDetectionResultColumn(r - s).getCodewordNearby(
                        n)),
                    null != u) {
                        return o ? u.getEndX() : u.getStartX();
                    }
                    for (var c = 0; t.isValidBarcodeColumn(e, r - s);) {
                        r -= s;
                        try {
                            for (var f = (i = void 0,
                                qn(e.getDetectionResultColumn(r).getCodewords())), h = f.next(); !h.done;
                                h = f.next()) {
                                var l = h.value;
                                if (null != l) {
                                    return (o ? l.getEndX() : l.getStartX()) + s * c * (l.getEndX() - l.getStartX())
                                }
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (a = f.return) && a.call(f)
                            } finally {
                                if (i) {
                                    throw i.error
                                }
                            }
                        }
                        c++
                    }
                    return o ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX()
                }
                ,
                t.detectCodeword = function (e, r, n, o, i, a, s, u) {
                    i = t.adjustCodewordStartColumn(e, r, n, o, i, a);
                    var c, f = t.getModuleBitCount(e, r, n, o, i, a);
                    if (null == f) {
                        return null;
                    }
                    var h = vt.sum(f);
                    if (o) {
                        c = i + h;
                    } else {
                        for (var l = 0; l < f.length / 2; l++) {
                            var d = f[l];
                            f[l] = f[f.length - 1 - l],
                                f[f.length - 1 - l] = d
                        }
                        i = (c = i) - h
                    }
                    if (!t.checkCodewordSkew(h, s, u)) {
                        return null;
                    }
                    var p = kn.getDecodedValue(f)
                        , g = ln.getCodeword(p);
                    return -1 === g ? null : new Fn(i, c, t.getCodewordBucketNumber(p), g)
                }
                ,
                t.getModuleBitCount = function (t, e, r, n, o, i) {
                    for (var a = o, s = new Int32Array(8), u = 0, c = n ? 1 : -1, f = n;
                        (n ? a < r : a >= e) && u < s.length;) {
                        t.get(a, i) === f ? (s[u]++,
                            a += c) : (u++,
                            f = !f);
                    }
                    return u === s.length || a === (n ? r : e) && u === s.length - 1 ? s : null
                }
                ,
                t.getNumberOfECCodeWords = function (t) {
                    return 2 << t
                }
                ,
                t.adjustCodewordStartColumn = function (e, r, n, o, i, a) {
                    for (var s = i, u = o ? -1 : 1, c = 0; c < 2; c++) {
                        for (; (o ? s >= r : s < n) && o === e.get(s, a);) {
                            if (Math.abs(i - s) > t.CODEWORD_SKEW_SIZE) {
                                return i;
                            }
                            s += u
                        }
                        u = -u,
                            o = !o
                    }
                    return s
                }
                ,
                t.checkCodewordSkew = function (e, r, n) {
                    return r - t.CODEWORD_SKEW_SIZE <= e && e <= n + t.CODEWORD_SKEW_SIZE
                }
                ,
                t.decodeCodewords = function (e, r, n) {
                    if (0 === e.length) {
                        throw b.getFormatInstance();
                    }
                    var o = 1 << r + 1
                        , i = t.correctErrors(e, n, o);
                    t.verifyCodewordCount(e, o);
                    var a = Kn.decode(e, "" + r);
                    return a.setErrorsCorrected(i),
                        a.setErasures(n.length),
                        a
                }
                ,
                t.correctErrors = function (e, r, n) {
                    if (null != r && r.length > n / 2 + t.MAX_ERRORS || n < 0 || n > t.MAX_EC_CODEWORDS) {
                        throw p.getChecksumInstance();
                    }
                    return t.errorCorrection.decode(e, n, r)
                }
                ,
                t.verifyCodewordCount = function (t, e) {
                    if (t.length < 4) {
                        throw b.getFormatInstance();
                    }
                    var r = t[0];
                    if (r > t.length) {
                        throw b.getFormatInstance();
                    }
                    if (0 === r) {
                        if (!(e < t.length)) {
                            throw b.getFormatInstance();
                        }
                        t[0] = t.length - e
                    }
                }
                ,
                t.getBitCountForCodeword = function (t) {
                    for (var e = new Int32Array(8), r = 0, n = e.length - 1; !((1 & t) !== r && (r = 1 & t,
                    --n < 0));) {
                        e[n]++,
                            t >>= 1;
                    }
                    return e
                }
                ,
                t.getCodewordBucketNumber = function (t) {
                    return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t)
                        : this.getCodewordBucketNumber_number(t)
                }
                ,
                t.getCodewordBucketNumber_number = function (e) {
                    return t.getCodewordBucketNumber(t.getBitCountForCodeword(e))
                }
                ,
                t.getCodewordBucketNumber_Int32Array = function (t) {
                    return (t[0] - t[2] + t[4] - t[6] + 9) % 9
                }
                ,
                t.toString = function (t) {
                    for (var e = new Sn, r = 0; r < t.length; r++) {
                        e.format("Row %2d: ", r);
                        for (var n = 0; n < t[r].length; n++) {
                            var o = t[r][n];
                            0 === o.getValue().length ? e.format("        ", null) : e.format("%4d(%2d)",
                                o.getValue()[0], o.getConfidence(o.getValue()[0]))
                        }
                        e.format("%n")
                    }
                    return e.toString()
                }
                ,
                t.CODEWORD_SKEW_SIZE = 2,
                t.MAX_ERRORS = 3,
                t.MAX_EC_CODEWORDS = 512,
                t.errorCorrection = new An,
                t
        }()
            , Jn = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , $n = function () {
            function t() {
            }

            return t.prototype.decode = function (e, r) {
                void 0 === r && (r = null);
                var n = t.decode(e, r, !1);
                if (null == n || 0 === n.length || null == n[0]) {
                    throw V.getNotFoundInstance();
                }
                return n[0]
            }
                ,
                t.prototype.decodeMultiple = function (e, r) {
                    void 0 === r && (r = null);
                    try {
                        return t.decode(e, r, !0)
                    } catch (t) {
                        if (t instanceof b || t instanceof p) {
                            throw V.getNotFoundInstance();
                        }
                        throw t
                    }
                }
                ,
                t.decode = function (e, r, n) {
                    var o, i, a = new Array, s = gn.detectMultiple(e, r, n);
                    try {
                        for (var u = Jn(s.getPoints()), c = u.next(); !c.done; c = u.next()) {
                            var f = c.value
                                , h = Qn.decode(s.getBits(), f[4], f[5], f[6], f[7], t.getMinCodewordWidth(f),
                                t.getMaxCodewordWidth(f))
                                , l = new tt(h.getText(), h.getRawBytes(), void 0, f, rt.PDF_417);
                            l.putMetadata(ot.ERROR_CORRECTION_LEVEL, h.getECLevel());
                            var d = h.getOther();
                            null != d && l.putMetadata(ot.PDF417_EXTRA_METADATA, d),
                                a.push(l)
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (i = u.return) && i.call(u)
                        } finally {
                            if (o) {
                                throw o.error
                            }
                        }
                    }
                    return a.map((function (t) {
                            return t
                        }
                    ))
                }
                ,
                t.getMaxWidth = function (t, e) {
                    return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()))
                }
                ,
                t.getMinWidth = function (t, e) {
                    return null == t || null == e ? E.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()))
                }
                ,
                t.getMaxCodewordWidth = function (e) {
                    return Math.floor(Math.max(Math.max(t.getMaxWidth(e[0], e[4]),
                            t.getMaxWidth(e[6], e[2]) * ln.MODULES_IN_CODEWORD / ln.MODULES_IN_STOP_PATTERN),
                        Math.max(t.getMaxWidth(e[1], e[5]),
                            t.getMaxWidth(e[7], e[3]) * ln.MODULES_IN_CODEWORD / ln.MODULES_IN_STOP_PATTERN)))
                }
                ,
                t.getMinCodewordWidth = function (e) {
                    return Math.floor(Math.min(Math.min(t.getMinWidth(e[0], e[4]),
                            t.getMinWidth(e[6], e[2]) * ln.MODULES_IN_CODEWORD / ln.MODULES_IN_STOP_PATTERN),
                        Math.min(t.getMinWidth(e[1], e[5]),
                            t.getMinWidth(e[7], e[3]) * ln.MODULES_IN_CODEWORD / ln.MODULES_IN_STOP_PATTERN)))
                }
                ,
                t.prototype.reset = function () {
                }
                ,
                t
        }()
            , to = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , eo = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return to(e, t),
                e.kind = "ReaderException",
                e
        }(s)
            , ro = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , no = function () {
            function t() {
            }

            return t.prototype.decode = function (t, e) {
                return this.setHints(e),
                    this.decodeInternal(t)
            }
                ,
                t.prototype.decodeWithState = function (t) {
                    return null !== this.readers && void 0 !== this.readers || this.setHints(null),
                        this.decodeInternal(t)
                }
                ,
                t.prototype.setHints = function (t) {
                    this.hints = t;
                    var e = null != t && void 0 !== t.get(O.TRY_HARDER)
                        , r = null == t ? null : t.get(O.POSSIBLE_FORMATS)
                        , n = new Array;
                    if (null != r) {
                        var o = r.some((function (t) {
                                return t === rt.UPC_A || t === rt.UPC_E || t === rt.EAN_13 || t === rt.EAN_8 || t
                                    === rt.CODABAR || t === rt.CODE_39 || t === rt.CODE_93 || t === rt.CODE_128 || t
                                    === rt.ITF || t === rt.RSS_14 || t === rt.RSS_EXPANDED
                            }
                        ));
                        o && !e && n.push(new pr(t)),
                        r.includes(rt.QR_CODE) && n.push(new fn),
                        r.includes(rt.DATA_MATRIX) && n.push(new Nr),
                        r.includes(rt.AZTEC) && n.push(new Mt),
                        r.includes(rt.PDF_417) && n.push(new $n),
                        o && e && n.push(new pr(t))
                    }
                    0 === n.length && (e || n.push(new pr(t)),
                        n.push(new fn),
                        n.push(new Nr),
                        n.push(new Mt),
                        n.push(new $n),
                    e && n.push(new pr(t))),
                        this.readers = n
                }
                ,
                t.prototype.reset = function () {
                    var t, e;
                    if (null !== this.readers) {
                        try {
                            for (var r = ro(this.readers), n = r.next(); !n.done; n = r.next()) {
                                n.value.reset()
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                n && !n.done && (e = r.return) && e.call(r)
                            } finally {
                                if (t) {
                                    throw t.error
                                }
                            }
                        }
                    }
                }
                ,
                t.prototype.decodeInternal = function (t) {
                    var e, r;
                    if (null === this.readers) {
                        throw new eo("No readers where selected, nothing can be read.");
                    }
                    try {
                        for (var n = ro(this.readers), o = n.next(); !o.done; o = n.next()) {
                            var i = o.value;
                            try {
                                return i.decode(t, this.hints)
                            } catch (t) {
                                if (t instanceof eo) {
                                    continue
                                }
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (r = n.return) && r.call(n)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                    throw new V("No MultiFormat Readers were able to detect the code.")
                }
                ,
                t
        }()
            , oo = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e, r) {
                void 0 === e && (e = null),
                void 0 === r && (r = 500);
                var n = new no;
                return n.setHints(e),
                t.call(this, n, r) || this
            }

            oo(e, t),
                e.prototype.decodeBitmap = function (t) {
                    return this.reader.decodeWithState(t)
                }
        }($);
        var io = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e) {
                return void 0 === e && (e = 500),
                t.call(this, new $n, e) || this
            }

            io(e, t)
        }($);
        var ao, so = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e) {
                return void 0 === e && (e = 500),
                t.call(this, new fn, e) || this
            }

            so(e, t)
        }($),
            function (t) {
                t[t.ERROR_CORRECTION = 0] = "ERROR_CORRECTION",
                    t[t.CHARACTER_SET = 1] = "CHARACTER_SET",
                    t[t.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE",
                    t[t.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT",
                    t[t.MIN_SIZE = 4] = "MIN_SIZE",
                    t[t.MAX_SIZE = 5] = "MAX_SIZE",
                    t[t.MARGIN = 6] = "MARGIN",
                    t[t.PDF417_COMPACT = 7] = "PDF417_COMPACT",
                    t[t.PDF417_COMPACTION = 8] = "PDF417_COMPACTION",
                    t[t.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS",
                    t[t.AZTEC_LAYERS = 10] = "AZTEC_LAYERS",
                    t[t.QR_VERSION = 11] = "QR_VERSION",
                    t[t.GS1_FORMAT = 12] = "GS1_FORMAT",
                    t[t.FORCE_C40 = 13] = "FORCE_C40"
            }(ao || (ao = {}));
        var uo = ao
            , co = function () {
            function t(t) {
                this.field = t,
                    this.cachedGenerators = [],
                    this.cachedGenerators.push(new st(t, Int32Array.from([1])))
            }

            return t.prototype.buildGenerator = function (t) {
                var e = this.cachedGenerators;
                if (t >= e.length) {
                    for (var r = e[e.length - 1], n = this.field, o = e.length; o <= t; o++) {
                        var i = r.multiply(new st(n, Int32Array.from([1, n.exp(o - 1 + n.getGeneratorBase())])));
                        e.push(i),
                            r = i
                    }
                }
                return e[t]
            }
                ,
                t.prototype.encode = function (t, e) {
                    if (0 === e) {
                        throw new h("No error correction bytes");
                    }
                    var r = t.length - e;
                    if (r <= 0) {
                        throw new h("No data bytes provided");
                    }
                    var n = this.buildGenerator(e)
                        , o = new Int32Array(r);
                    w.arraycopy(t, 0, o, 0, r);
                    for (var i = new st(this.field, o),
                        a = (i = i.multiplyByMonomial(e, 1)).divide(n)[1].getCoefficients(), s = e - a.length, u = 0;
                        u < s; u++) {
                        t[r + u] = 0;
                    }
                    w.arraycopy(a, 0, t, r + s, a.length)
                }
                ,
                t
        }()
            , fo = function () {
            function t() {
            }

            return t.applyMaskPenaltyRule1 = function (e) {
                return t.applyMaskPenaltyRule1Internal(e, !0) + t.applyMaskPenaltyRule1Internal(e, !1)
            }
                ,
                t.applyMaskPenaltyRule2 = function (e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i - 1; a++) {
                        for (var s = n[a], u = 0; u < o - 1; u++) {
                            var c = s[u];
                            c === s[u + 1] && c === n[a + 1][u] && c === n[a + 1][u + 1] && r++
                        }
                    }
                    return t.N2 * r
                }
                ,
                t.applyMaskPenaltyRule3 = function (e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i; a++) {
                        for (var s = 0; s < o; s++) {
                            var u = n[a];
                            s + 6 < o && 1 === u[s] && 0 === u[s + 1] && 1 === u[s + 2] && 1 === u[s + 3] && 1 === u[s
                            + 4] && 0 === u[s + 5] && 1 === u[s + 6] && (t.isWhiteHorizontal(u, s - 4, s)
                                || t.isWhiteHorizontal(u, s + 7, s + 11)) && r++,
                            a + 6 < i && 1 === n[a][s] && 0 === n[a + 1][s] && 1 === n[a + 2][s] && 1 === n[a + 3][s]
                            && 1 === n[a + 4][s] && 0 === n[a + 5][s] && 1 === n[a + 6][s] && (t.isWhiteVertical(n, s,
                                a - 4, a) || t.isWhiteVertical(n, s, a + 7, a + 11)) && r++
                        }
                    }
                    return r * t.N3
                }
                ,
                t.isWhiteHorizontal = function (t, e, r) {
                    e = Math.max(e, 0),
                        r = Math.min(r, t.length);
                    for (var n = e; n < r; n++) {
                        if (1 === t[n]) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.isWhiteVertical = function (t, e, r, n) {
                    r = Math.max(r, 0),
                        n = Math.min(n, t.length);
                    for (var o = r; o < n; o++) {
                        if (1 === t[o][e]) {
                            return !1;
                        }
                    }
                    return !0
                }
                ,
                t.applyMaskPenaltyRule4 = function (e) {
                    for (var r = 0, n = e.getArray(), o = e.getWidth(), i = e.getHeight(), a = 0; a < i; a++) {
                        for (var s = n[a], u = 0; u < o; u++) {
                            1 === s[u] && r++;
                        }
                    }
                    var c = e.getHeight() * e.getWidth();
                    return Math.floor(10 * Math.abs(2 * r - c) / c) * t.N4
                }
                ,
                t.getDataMaskBit = function (t, e, r) {
                    var n, o;
                    switch (t) {
                        case 0:
                            n = r + e & 1;
                            break;
                        case 1:
                            n = 1 & r;
                            break;
                        case 2:
                            n = e % 3;
                            break;
                        case 3:
                            n = (r + e) % 3;
                            break;
                        case 4:
                            n = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                            break;
                        case 5:
                            n = (1 & (o = r * e)) + o % 3;
                            break;
                        case 6:
                            n = (1 & (o = r * e)) + o % 3 & 1;
                            break;
                        case 7:
                            n = (o = r * e) % 3 + (r + e & 1) & 1;
                            break;
                        default:
                            throw new h("Invalid mask pattern: " + t)
                    }
                    return 0 === n
                }
                ,
                t.applyMaskPenaltyRule1Internal = function (e, r) {
                    for (var n = 0, o = r ? e.getHeight() : e.getWidth(), i = r ? e.getWidth() : e.getHeight(),
                        a = e.getArray(), s = 0; s < o; s++) {
                        for (var u = 0, c = -1, f = 0; f < i; f++) {
                            var h = r ? a[s][f] : a[f][s];
                            h === c ? u++ : (u >= 5 && (n += t.N1 + (u - 5)),
                                u = 1,
                                c = h)
                        }
                        u >= 5 && (n += t.N1 + (u - 5))
                    }
                    return n
                }
                ,
                t.N1 = 3,
                t.N2 = 3,
                t.N3 = 40,
                t.N4 = 10,
                t
        }()
            , ho = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , lo = function () {
            function t(t, e) {
                this.width = t,
                    this.height = e;
                for (var r = new Array(e), n = 0; n !== e; n++) {
                    r[n] = new Uint8Array(t);
                }
                this.bytes = r
            }

            return t.prototype.getHeight = function () {
                return this.height
            }
                ,
                t.prototype.getWidth = function () {
                    return this.width
                }
                ,
                t.prototype.get = function (t, e) {
                    return this.bytes[e][t]
                }
                ,
                t.prototype.getArray = function () {
                    return this.bytes
                }
                ,
                t.prototype.setNumber = function (t, e, r) {
                    this.bytes[e][t] = r
                }
                ,
                t.prototype.setBoolean = function (t, e, r) {
                    this.bytes[e][t] = r ? 1 : 0
                }
                ,
                t.prototype.clear = function (t) {
                    var e, r;
                    try {
                        for (var n = ho(this.bytes), o = n.next(); !o.done; o = n.next()) {
                            var i = o.value;
                            A.fill(i, t)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (r = n.return) && r.call(n)
                        } finally {
                            if (e) {
                                throw e.error
                            }
                        }
                    }
                }
                ,
                t.prototype.equals = function (e) {
                    if (!(e instanceof t)) {
                        return !1;
                    }
                    var r = e;
                    if (this.width !== r.width) {
                        return !1;
                    }
                    if (this.height !== r.height) {
                        return !1;
                    }
                    for (var n = 0, o = this.height; n < o; ++n) {
                        for (var i = this.bytes[n], a = r.bytes[n], s = 0, u = this.width; s < u; ++s) {
                            if (i[s] !== a[s]) {
                                return !1;
                            }
                        }
                    }
                    return !0
                }
                ,
                t.prototype.toString = function () {
                    for (var t = new F, e = 0, r = this.height; e < r; ++e) {
                        for (var n = this.bytes[e], o = 0, i = this.width; o < i; ++o) {
                            switch (n[o]) {
                                case 0:
                                    t.append(" 0");
                                    break;
                                case 1:
                                    t.append(" 1");
                                    break;
                                default:
                                    t.append("  ")
                            }
                        }
                        t.append("\n")
                    }
                    return t.toString()
                }
                ,
                t
        }()
            , po = function () {
            function t() {
                this.maskPattern = -1
            }

            return t.prototype.getMode = function () {
                return this.mode
            }
                ,
                t.prototype.getECLevel = function () {
                    return this.ecLevel
                }
                ,
                t.prototype.getVersion = function () {
                    return this.version
                }
                ,
                t.prototype.getMaskPattern = function () {
                    return this.maskPattern
                }
                ,
                t.prototype.getMatrix = function () {
                    return this.matrix
                }
                ,
                t.prototype.toString = function () {
                    var t = new F;
                    return t.append("<<\n"),
                        t.append(" mode: "),
                        t.append(this.mode ? this.mode.toString() : "null"),
                        t.append("\n ecLevel: "),
                        t.append(this.ecLevel ? this.ecLevel.toString() : "null"),
                        t.append("\n version: "),
                        t.append(this.version ? this.version.toString() : "null"),
                        t.append("\n maskPattern: "),
                        t.append(this.maskPattern.toString()),
                        this.matrix ? (t.append("\n matrix:\n"),
                            t.append(this.matrix.toString())) : t.append("\n matrix: null\n"),
                        t.append(">>\n"),
                        t.toString()
                }
                ,
                t.prototype.setMode = function (t) {
                    this.mode = t
                }
                ,
                t.prototype.setECLevel = function (t) {
                    this.ecLevel = t
                }
                ,
                t.prototype.setVersion = function (t) {
                    this.version = t
                }
                ,
                t.prototype.setMaskPattern = function (t) {
                    this.maskPattern = t
                }
                ,
                t.prototype.setMatrix = function (t) {
                    this.matrix = t
                }
                ,
                t.isValidMaskPattern = function (e) {
                    return e >= 0 && e < t.NUM_MASK_PATTERNS
                }
                ,
                t.NUM_MASK_PATTERNS = 8,
                t
        }()
            , go = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , wo = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return go(e, t),
                e.kind = "WriterException",
                e
        }(s)
            , yo = function () {
            function t() {
            }

            return t.clearMatrix = function (t) {
                t.clear(255)
            }
                ,
                t.buildMatrix = function (e, r, n, o, i) {
                    t.clearMatrix(i),
                        t.embedBasicPatterns(n, i),
                        t.embedTypeInfo(r, o, i),
                        t.maybeEmbedVersionInfo(n, i),
                        t.embedDataBits(e, o, i)
                }
                ,
                t.embedBasicPatterns = function (e, r) {
                    t.embedPositionDetectionPatternsAndSeparators(r),
                        t.embedDarkDotAtLeftBottomCorner(r),
                        t.maybeEmbedPositionAdjustmentPatterns(e, r),
                        t.embedTimingPatterns(r)
                }
                ,
                t.embedTypeInfo = function (e, r, n) {
                    var o = new I;
                    t.makeTypeInfoBits(e, r, o);
                    for (var i = 0, a = o.getSize(); i < a; ++i) {
                        var s = o.get(o.getSize() - 1 - i)
                            , u = t.TYPE_INFO_COORDINATES[i]
                            , c = u[0]
                            , f = u[1];
                        if (n.setBoolean(c, f, s),
                        i < 8) {
                            var h = n.getWidth() - i - 1
                                , l = 8;
                            n.setBoolean(h, l, s)
                        } else {
                            h = 8,
                                l = n.getHeight() - 7 + (i - 8);
                            n.setBoolean(h, l, s)
                        }
                    }
                }
                ,
                t.maybeEmbedVersionInfo = function (e, r) {
                    if (!(e.getVersionNumber() < 7)) {
                        var n = new I;
                        t.makeVersionInfoBits(e, n);
                        for (var o = 17, i = 0; i < 6; ++i) {
                            for (var a = 0; a < 3; ++a) {
                                var s = n.get(o);
                                o--,
                                    r.setBoolean(i, r.getHeight() - 11 + a, s),
                                    r.setBoolean(r.getHeight() - 11 + a, i, s)
                            }
                        }
                    }
                }
                ,
                t.embedDataBits = function (e, r, n) {
                    for (var o = 0, i = -1, a = n.getWidth() - 1, s = n.getHeight() - 1; a > 0;) {
                        for (6 === a && (a -= 1); s >= 0 && s < n.getHeight();) {
                            for (var u = 0; u < 2; ++u) {
                                var c = a - u;
                                if (t.isEmpty(n.get(c, s))) {
                                    var f = void 0;
                                    o < e.getSize() ? (f = e.get(o),
                                        ++o) : f = !1,
                                    255 !== r && fo.getDataMaskBit(r, c, s) && (f = !f),
                                        n.setBoolean(c, s, f)
                                }
                            }
                            s += i
                        }
                        s += i = -i,
                            a -= 2
                    }
                    if (o !== e.getSize()) {
                        throw new wo("Not all bits consumed: " + o + "/" + e.getSize())
                    }
                }
                ,
                t.findMSBSet = function (t) {
                    return 32 - E.numberOfLeadingZeros(t)
                }
                ,
                t.calculateBCHCode = function (e, r) {
                    if (0 === r) {
                        throw new h("0 polynomial");
                    }
                    var n = t.findMSBSet(r);
                    for (e <<= n - 1; t.findMSBSet(e) >= n;) {
                        e ^= r << t.findMSBSet(e) - n;
                    }
                    return e
                }
                ,
                t.makeTypeInfoBits = function (e, r, n) {
                    if (!po.isValidMaskPattern(r)) {
                        throw new wo("Invalid mask pattern");
                    }
                    var o = e.getBits() << 3 | r;
                    n.appendBits(o, 5);
                    var i = t.calculateBCHCode(o, t.TYPE_INFO_POLY);
                    n.appendBits(i, 10);
                    var a = new I;
                    if (a.appendBits(t.TYPE_INFO_MASK_PATTERN, 15),
                        n.xor(a),
                    15 !== n.getSize()) {
                        throw new wo("should not happen but we got: " + n.getSize())
                    }
                }
                ,
                t.makeVersionInfoBits = function (e, r) {
                    r.appendBits(e.getVersionNumber(), 6);
                    var n = t.calculateBCHCode(e.getVersionNumber(), t.VERSION_INFO_POLY);
                    if (r.appendBits(n, 12),
                    18 !== r.getSize()) {
                        throw new wo("should not happen but we got: " + r.getSize())
                    }
                }
                ,
                t.isEmpty = function (t) {
                    return 255 === t
                }
                ,
                t.embedTimingPatterns = function (e) {
                    for (var r = 8; r < e.getWidth() - 8; ++r) {
                        var n = (r + 1) % 2;
                        t.isEmpty(e.get(r, 6)) && e.setNumber(r, 6, n),
                        t.isEmpty(e.get(6, r)) && e.setNumber(6, r, n)
                    }
                }
                ,
                t.embedDarkDotAtLeftBottomCorner = function (t) {
                    if (0 === t.get(8, t.getHeight() - 8)) {
                        throw new wo;
                    }
                    t.setNumber(8, t.getHeight() - 8, 1)
                }
                ,
                t.embedHorizontalSeparationPattern = function (e, r, n) {
                    for (var o = 0; o < 8; ++o) {
                        if (!t.isEmpty(n.get(e + o, r))) {
                            throw new wo;
                        }
                        n.setNumber(e + o, r, 0)
                    }
                }
                ,
                t.embedVerticalSeparationPattern = function (e, r, n) {
                    for (var o = 0; o < 7; ++o) {
                        if (!t.isEmpty(n.get(e, r + o))) {
                            throw new wo;
                        }
                        n.setNumber(e, r + o, 0)
                    }
                }
                ,
                t.embedPositionAdjustmentPattern = function (e, r, n) {
                    for (var o = 0; o < 5; ++o) {
                        for (var i = t.POSITION_ADJUSTMENT_PATTERN[o], a = 0; a < 5; ++a) {
                            n.setNumber(e + a, r + o, i[a])
                        }
                    }
                }
                ,
                t.embedPositionDetectionPattern = function (e, r, n) {
                    for (var o = 0; o < 7; ++o) {
                        for (var i = t.POSITION_DETECTION_PATTERN[o], a = 0; a < 7; ++a) {
                            n.setNumber(e + a, r + o, i[a])
                        }
                    }
                }
                ,
                t.embedPositionDetectionPatternsAndSeparators = function (e) {
                    var r = t.POSITION_DETECTION_PATTERN[0].length;
                    t.embedPositionDetectionPattern(0, 0, e),
                        t.embedPositionDetectionPattern(e.getWidth() - r, 0, e),
                        t.embedPositionDetectionPattern(0, e.getWidth() - r, e);
                    t.embedHorizontalSeparationPattern(0, 7, e),
                        t.embedHorizontalSeparationPattern(e.getWidth() - 8, 7, e),
                        t.embedHorizontalSeparationPattern(0, e.getWidth() - 8, e);
                    t.embedVerticalSeparationPattern(7, 0, e),
                        t.embedVerticalSeparationPattern(e.getHeight() - 7 - 1, 0, e),
                        t.embedVerticalSeparationPattern(7, e.getHeight() - 7, e)
                }
                ,
                t.maybeEmbedPositionAdjustmentPatterns = function (e, r) {
                    if (!(e.getVersionNumber() < 2)) {
                        for (var n = e.getVersionNumber() - 1, o = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n],
                            i = 0, a = o.length; i !== a; i++) {
                            var s = o[i];
                            if (s >= 0) {
                                for (var u = 0; u !== a; u++) {
                                    var c = o[u];
                                    c >= 0 && t.isEmpty(r.get(c, s)) && t.embedPositionAdjustmentPattern(c - 2, s - 2,
                                        r)
                                }
                            }
                        }
                    }
                }
                ,
                t.POSITION_DETECTION_PATTERN = Array.from(
                    [Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
                        Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
                        Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
                        Int32Array.from([1, 1, 1, 1, 1, 1, 1])]),
                t.POSITION_ADJUSTMENT_PATTERN = Array.from(
                    [Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]),
                        Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]),
                        Int32Array.from([1, 1, 1, 1, 1])]),
                t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from(
                    [Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
                        Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
                        Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
                        Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
                        Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
                        Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
                        Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
                        Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
                        Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
                        Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
                        Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
                        Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
                        Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
                        Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
                        Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
                        Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
                        Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
                        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                        Int32Array.from([6, 30, 58, 86, 114, 142, 170])]),
                t.TYPE_INFO_COORDINATES = Array.from(
                    [Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]),
                        Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]),
                        Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]),
                        Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]),
                        Int32Array.from([1, 8]), Int32Array.from([0, 8])]),
                t.VERSION_INFO_POLY = 7973,
                t.TYPE_INFO_POLY = 1335,
                t.TYPE_INFO_MASK_PATTERN = 21522,
                t
        }()
            , vo = function () {
            function t(t, e) {
                this.dataBytes = t,
                    this.errorCorrectionBytes = e
            }

            return t.prototype.getDataBytes = function () {
                return this.dataBytes
            }
                ,
                t.prototype.getErrorCorrectionBytes = function () {
                    return this.errorCorrectionBytes
                }
                ,
                t
        }()
            , _o = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
            , mo = function () {
            function t() {
            }

            return t.calculateMaskPenalty = function (t) {
                return fo.applyMaskPenaltyRule1(t) + fo.applyMaskPenaltyRule2(t) + fo.applyMaskPenaltyRule3(t)
                    + fo.applyMaskPenaltyRule4(t)
            }
                ,
                t.encode = function (e, r, n) {
                    void 0 === n && (n = null);
                    var o = t.DEFAULT_BYTE_MODE_ENCODING
                        , i = null !== n && void 0 !== n.get(uo.CHARACTER_SET);
                    i && (o = n.get(uo.CHARACTER_SET).toString());
                    var a = this.chooseMode(e, o)
                        , s = new I;
                    if (a === Zr.BYTE && (i || t.DEFAULT_BYTE_MODE_ENCODING !== o)) {
                        var u = D.getCharacterSetECIByName(o);
                        void 0 !== u && this.appendECI(u, s)
                    }
                    this.appendModeInfo(a, s);
                    var c, f = new I;
                    if (this.appendBytes(e, a, f, o),
                    null !== n && void 0 !== n.get(uo.QR_VERSION)) {
                        var h = Number.parseInt(n.get(uo.QR_VERSION).toString(), 10);
                        c = Hr.getVersionForNumber(h);
                        var l = this.calculateBitsNeeded(a, s, f, c);
                        if (!this.willFit(l, c, r)) {
                            throw new wo("Data too big for requested version")
                        }
                    } else {
                        c = this.recommendVersion(r, a, s, f);
                    }
                    var d = new I;
                    d.appendBitArray(s);
                    var p = a === Zr.BYTE ? f.getSizeInBytes() : e.length;
                    this.appendLengthInfo(p, c, a, d),
                        d.appendBitArray(f);
                    var g = c.getECBlocksForLevel(r)
                        , w = c.getTotalCodewords() - g.getTotalECCodewords();
                    this.terminateBits(w, d);
                    var y = this.interleaveWithECBytes(d, c.getTotalCodewords(), w, g.getNumBlocks())
                        , v = new po;
                    v.setECLevel(r),
                        v.setMode(a),
                        v.setVersion(c);
                    var _ = c.getDimensionForVersion()
                        , m = new lo(_, _)
                        , C = this.chooseMaskPattern(y, r, c, m);
                    return v.setMaskPattern(C),
                        yo.buildMatrix(y, r, c, C, m),
                        v.setMatrix(m),
                        v
                }
                ,
                t.recommendVersion = function (t, e, r, n) {
                    var o = this.calculateBitsNeeded(e, r, n, Hr.getVersionForNumber(1))
                        , i = this.chooseVersion(o, t)
                        , a = this.calculateBitsNeeded(e, r, n, i);
                    return this.chooseVersion(a, t)
                }
                ,
                t.calculateBitsNeeded = function (t, e, r, n) {
                    return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
                }
                ,
                t.getAlphanumericCode = function (e) {
                    return e < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[e] : -1
                }
                ,
                t.chooseMode = function (e, r) {
                    if (void 0 === r && (r = null),
                    D.SJIS.getName() === r && this.isOnlyDoubleByteKanji(e)) {
                        return Zr.KANJI;
                    }
                    for (var n = !1, o = !1, i = 0, a = e.length; i < a; ++i) {
                        var s = e.charAt(i);
                        if (t.isDigit(s)) {
                            n = !0;
                        } else {
                            if (-1 === this.getAlphanumericCode(s.charCodeAt(0))) {
                                return Zr.BYTE;
                            }
                            o = !0
                        }
                    }
                    return o ? Zr.ALPHANUMERIC : n ? Zr.NUMERIC : Zr.BYTE
                }
                ,
                t.isOnlyDoubleByteKanji = function (t) {
                    var e;
                    try {
                        e = B.encode(t, D.SJIS)
                    } catch (t) {
                        return !1
                    }
                    var r = e.length;
                    if (r % 2 != 0) {
                        return !1;
                    }
                    for (var n = 0; n < r; n += 2) {
                        var o = 255 & e[n];
                        if ((o < 129 || o > 159) && (o < 224 || o > 235)) {
                            return !1
                        }
                    }
                    return !0
                }
                ,
                t.chooseMaskPattern = function (t, e, r, n) {
                    for (var o = Number.MAX_SAFE_INTEGER, i = -1, a = 0; a < po.NUM_MASK_PATTERNS; a++) {
                        yo.buildMatrix(t, e, r, a, n);
                        var s = this.calculateMaskPenalty(n);
                        s < o && (o = s,
                            i = a)
                    }
                    return i
                }
                ,
                t.chooseVersion = function (e, r) {
                    for (var n = 1; n <= 40; n++) {
                        var o = Hr.getVersionForNumber(n);
                        if (t.willFit(e, o, r)) {
                            return o
                        }
                    }
                    throw new wo("Data too big")
                }
                ,
                t.willFit = function (t, e, r) {
                    return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8
                }
                ,
                t.terminateBits = function (t, e) {
                    var r = 8 * t;
                    if (e.getSize() > r) {
                        throw new wo("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                    }
                    for (var n = 0; n < 4 && e.getSize() < r; ++n) {
                        e.appendBit(!1);
                    }
                    var o = 7 & e.getSize();
                    if (o > 0) {
                        for (n = o; n < 8; n++) {
                            e.appendBit(!1);
                        }
                    }
                    var i = t - e.getSizeInBytes();
                    for (n = 0; n < i; ++n) {
                        e.appendBits(0 == (1 & n) ? 236 : 17, 8);
                    }
                    if (e.getSize() !== r) {
                        throw new wo("Bits size does not equal capacity")
                    }
                }
                ,
                t.getNumDataBytesAndNumECBytesForBlockID = function (t, e, r, n, o, i) {
                    if (n >= r) {
                        throw new wo("Block ID too large");
                    }
                    var a = t % r
                        , s = r - a
                        , u = Math.floor(t / r)
                        , c = u + 1
                        , f = Math.floor(e / r)
                        , h = f + 1
                        , l = u - f
                        , d = c - h;
                    if (l !== d) {
                        throw new wo("EC bytes mismatch");
                    }
                    if (r !== s + a) {
                        throw new wo("RS blocks mismatch");
                    }
                    if (t !== (f + l) * s + (h + d) * a) {
                        throw new wo("Total bytes mismatch");
                    }
                    n < s ? (o[0] = f,
                        i[0] = l) : (o[0] = h,
                        i[0] = d)
                }
                ,
                t.interleaveWithECBytes = function (e, r, n, o) {
                    var i, a, s, u;
                    if (e.getSizeInBytes() !== n) {
                        throw new wo("Number of bits and data bytes does not match");
                    }
                    for (var c = 0, f = 0, h = 0, l = new Array, d = 0; d < o; ++d) {
                        var p = new Int32Array(1)
                            , g = new Int32Array(1);
                        t.getNumDataBytesAndNumECBytesForBlockID(r, n, o, d, p, g);
                        var w = p[0]
                            , y = new Uint8Array(w);
                        e.toBytes(8 * c, y, 0, w);
                        var v = t.generateECBytes(y, g[0]);
                        l.push(new vo(y, v)),
                            f = Math.max(f, w),
                            h = Math.max(h, v.length),
                            c += p[0]
                    }
                    if (n !== c) {
                        throw new wo("Data bytes does not match offset");
                    }
                    var _ = new I;
                    for (d = 0; d < f; ++d) {
                        try {
                            for (var m = (i = void 0,
                                _o(l)), C = m.next(); !C.done; C = m.next()) {
                                d < (y = C.value.getDataBytes()).length && _.appendBits(y[d], 8)
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                C && !C.done && (a = m.return) && a.call(m)
                            } finally {
                                if (i) {
                                    throw i.error
                                }
                            }
                        }
                    }
                    for (d = 0; d < h; ++d) {
                        try {
                            for (var A = (s = void 0,
                                _o(l)), E = A.next(); !E.done; E = A.next()) {
                                d < (v = E.value.getErrorCorrectionBytes()).length && _.appendBits(v[d], 8)
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                E && !E.done && (u = A.return) && u.call(A)
                            } finally {
                                if (s) {
                                    throw s.error
                                }
                            }
                        }
                    }
                    if (r !== _.getSizeInBytes()) {
                        throw new wo("Interleaving error: " + r + " and " + _.getSizeInBytes() + " differ.");
                    }
                    return _
                }
                ,
                t.generateECBytes = function (t, e) {
                    for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++) {
                        n[o] = 255 & t[o];
                    }
                    new co(ht.QR_CODE_FIELD_256).encode(n, e);
                    var i = new Uint8Array(e);
                    for (o = 0; o < e; o++) {
                        i[o] = n[r + o];
                    }
                    return i
                }
                ,
                t.appendModeInfo = function (t, e) {
                    e.appendBits(t.getBits(), 4)
                }
                ,
                t.appendLengthInfo = function (t, e, r, n) {
                    var o = r.getCharacterCountBits(e);
                    if (t >= 1 << o) {
                        throw new wo(t + " is bigger than " + ((1 << o) - 1));
                    }
                    n.appendBits(t, o)
                }
                ,
                t.appendBytes = function (e, r, n, o) {
                    switch (r) {
                        case Zr.NUMERIC:
                            t.appendNumericBytes(e, n);
                            break;
                        case Zr.ALPHANUMERIC:
                            t.appendAlphanumericBytes(e, n);
                            break;
                        case Zr.BYTE:
                            t.append8BitBytes(e, n, o);
                            break;
                        case Zr.KANJI:
                            t.appendKanjiBytes(e, n);
                            break;
                        default:
                            throw new wo("Invalid mode: " + r)
                    }
                }
                ,
                t.getDigit = function (t) {
                    return t.charCodeAt(0) - 48
                }
                ,
                t.isDigit = function (e) {
                    var r = t.getDigit(e);
                    return r >= 0 && r <= 9
                }
                ,
                t.appendNumericBytes = function (e, r) {
                    for (var n = e.length, o = 0; o < n;) {
                        var i = t.getDigit(e.charAt(o));
                        if (o + 2 < n) {
                            var a = t.getDigit(e.charAt(o + 1))
                                , s = t.getDigit(e.charAt(o + 2));
                            r.appendBits(100 * i + 10 * a + s, 10),
                                o += 3
                        } else if (o + 1 < n) {
                            a = t.getDigit(e.charAt(o + 1));
                            r.appendBits(10 * i + a, 7),
                                o += 2
                        } else {
                            r.appendBits(i, 4),
                                o++
                        }
                    }
                }
                ,
                t.appendAlphanumericBytes = function (e, r) {
                    for (var n = e.length, o = 0; o < n;) {
                        var i = t.getAlphanumericCode(e.charCodeAt(o));
                        if (-1 === i) {
                            throw new wo;
                        }
                        if (o + 1 < n) {
                            var a = t.getAlphanumericCode(e.charCodeAt(o + 1));
                            if (-1 === a) {
                                throw new wo;
                            }
                            r.appendBits(45 * i + a, 11),
                                o += 2
                        } else {
                            r.appendBits(i, 6),
                                o++
                        }
                    }
                }
                ,
                t.append8BitBytes = function (t, e, r) {
                    var n;
                    try {
                        n = B.encode(t, r)
                    } catch (t) {
                        throw new wo(t)
                    }
                    for (var o = 0, i = n.length; o !== i; o++) {
                        var a = n[o];
                        e.appendBits(a, 8)
                    }
                }
                ,
                t.appendKanjiBytes = function (t, e) {
                    var r;
                    try {
                        r = B.encode(t, D.SJIS)
                    } catch (t) {
                        throw new wo(t)
                    }
                    for (var n = r.length, o = 0; o < n; o += 2) {
                        var i = (255 & r[o]) << 8 & 4294967295 | 255 & r[o + 1]
                            , a = -1;
                        if (i >= 33088 && i <= 40956 ? a = i - 33088 : i >= 57408 && i <= 60351 && (a = i - 49472),
                        -1 === a) {
                            throw new wo("Invalid byte sequence");
                        }
                        var s = 192 * (a >> 8) + (255 & a);
                        e.appendBits(s, 13)
                    }
                }
                ,
                t.appendECI = function (t, e) {
                    e.appendBits(Zr.ECI.getBits(), 4),
                        e.appendBits(t.getValue(), 8)
                }
                ,
                t.ALPHANUMERIC_TABLE = Int32Array.from(
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0,
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]),
                t.DEFAULT_BYTE_MODE_ENCODING = D.UTF8.getName(),
                t
        }()
            , Co = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e, r, n, o, i, a, s, u) {
                var c = t.call(this, a, s) || this;
                if (c.yuvData = e,
                    c.dataWidth = r,
                    c.dataHeight = n,
                    c.left = o,
                    c.top = i,
                o + a > r || i + s > n) {
                    throw new h("Crop rectangle does not fit within image data.");
                }
                return u && c.reverseHorizontal(a, s),
                    c
            }

            Co(e, t),
                e.prototype.getRow = function (t, e) {
                    if (t < 0 || t >= this.getHeight()) {
                        throw new h("Requested row is outside the image: " + t);
                    }
                    var r = this.getWidth();
                    (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                    var n = (t + this.top) * this.dataWidth + this.left;
                    return w.arraycopy(this.yuvData, n, e, 0, r),
                        e
                }
                ,
                e.prototype.getMatrix = function () {
                    var t = this.getWidth()
                        , e = this.getHeight();
                    if (t === this.dataWidth && e === this.dataHeight) {
                        return this.yuvData;
                    }
                    var r = t * e
                        , n = new Uint8ClampedArray(r)
                        , o = this.top * this.dataWidth + this.left;
                    if (t === this.dataWidth) {
                        return w.arraycopy(this.yuvData, o, n, 0, r),
                            n;
                    }
                    for (var i = 0; i < e; i++) {
                        var a = i * t;
                        w.arraycopy(this.yuvData, o, n, a, t),
                            o += this.dataWidth
                    }
                    return n
                }
                ,
                e.prototype.isCropSupported = function () {
                    return !0
                }
                ,
                e.prototype.crop = function (t, r, n, o) {
                    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + r, n, o, !1)
                }
                ,
                e.prototype.renderThumbnail = function () {
                    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR,
                        r = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, n = new Int32Array(t * r), o = this.yuvData,
                        i = this.top * this.dataWidth + this.left, a = 0; a < r; a++) {
                        for (var s = a * t, u = 0; u < t; u++) {
                            var c = 255 & o[i + u * e.THUMBNAIL_SCALE_FACTOR];
                            n[s + u] = 4278190080 | 65793 * c
                        }
                        i += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR
                    }
                    return n
                }
                ,
                e.prototype.getThumbnailWidth = function () {
                    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR
                }
                ,
                e.prototype.getThumbnailHeight = function () {
                    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR
                }
                ,
                e.prototype.reverseHorizontal = function (t, e) {
                    for (var r = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left; n < e; n++,
                        o += this.dataWidth) {
                        for (var i = o + t / 2, a = o, s = o + t - 1; a < i; a++,
                            s--) {
                            var u = r[a];
                            r[a] = r[s],
                                r[s] = u
                        }
                    }
                }
                ,
                e.prototype.invert = function () {
                    return new j(this)
                }
                ,
                e.THUMBNAIL_SCALE_FACTOR = 2
        }(W);
        var Ao = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e, r, n, o, i, a, s) {
                var u = t.call(this, r, n) || this;
                if (u.dataWidth = o,
                    u.dataHeight = i,
                    u.left = a,
                    u.top = s,
                4 === e.BYTES_PER_ELEMENT) {
                    for (var c = r * n, f = new Uint8ClampedArray(c), l = 0; l < c; l++) {
                        var d = e[l]
                            , p = d >> 16 & 255
                            , g = d >> 7 & 510
                            , w = 255 & d;
                        f[l] = (p + g + w) / 4 & 255
                    }
                    u.luminances = f
                } else {
                    u.luminances = e;
                }
                if (void 0 === o && (u.dataWidth = r),
                void 0 === i && (u.dataHeight = n),
                void 0 === a && (u.left = 0),
                void 0 === s && (u.top = 0),
                u.left + r > u.dataWidth || u.top + n > u.dataHeight) {
                    throw new h("Crop rectangle does not fit within image data.");
                }
                return u
            }

            Ao(e, t),
                e.prototype.getRow = function (t, e) {
                    if (t < 0 || t >= this.getHeight()) {
                        throw new h("Requested row is outside the image: " + t);
                    }
                    var r = this.getWidth();
                    (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                    var n = (t + this.top) * this.dataWidth + this.left;
                    return w.arraycopy(this.luminances, n, e, 0, r),
                        e
                }
                ,
                e.prototype.getMatrix = function () {
                    var t = this.getWidth()
                        , e = this.getHeight();
                    if (t === this.dataWidth && e === this.dataHeight) {
                        return this.luminances;
                    }
                    var r = t * e
                        , n = new Uint8ClampedArray(r)
                        , o = this.top * this.dataWidth + this.left;
                    if (t === this.dataWidth) {
                        return w.arraycopy(this.luminances, o, n, 0, r),
                            n;
                    }
                    for (var i = 0; i < e; i++) {
                        var a = i * t;
                        w.arraycopy(this.luminances, o, n, a, t),
                            o += this.dataWidth
                    }
                    return n
                }
                ,
                e.prototype.isCropSupported = function () {
                    return !0
                }
                ,
                e.prototype.crop = function (t, r, n, o) {
                    return new e(this.luminances, n, o, this.dataWidth, this.dataHeight, this.left + t, this.top + r)
                }
                ,
                e.prototype.invert = function () {
                    return new j(this)
                }
        }(W);
        var Eo, Io, So = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }(), Oo = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return So(e, t),
                e.forName = function (t) {
                    return this.getCharacterSetECIByName(t)
                }
                ,
                e
        }(D), To = function () {
            function t() {
            }

            return t.ISO_8859_1 = D.ISO8859_1,
                t
        }();
        (Eo = function (t, e) {
            for (var r = 1, n = 0; n < 255; n++) {
                e[n] = r,
                    t[r] = n,
                (r *= 2) >= 256 && (r ^= 301);
            }
            return {
                LOG: t,
                ALOG: e
            }
        }([], [])).LOG,
            Eo.ALOG,
            function (t) {
                t[t.FORCE_NONE = 0] = "FORCE_NONE",
                    t[t.FORCE_SQUARE = 1] = "FORCE_SQUARE",
                    t[t.FORCE_RECTANGLE = 2] = "FORCE_RECTANGLE"
            }(Io || (Io = {}));
        var bo, Ro = "[)>05", No = "[)>06", Do = function () {
                function t() {
                }

                return t.prototype.getEncodingMode = function () {
                    return 0
                }
                    ,
                    t.prototype.encode = function (t) {
                        if (zo.determineConsecutiveDigitCount(t.getMessage(), t.pos) >= 2) {
                            t.writeCodeword(this.encodeASCIIDigits(t.getMessage().charCodeAt(t.pos),
                                t.getMessage().charCodeAt(t.pos + 1))),
                                t.pos += 2;
                        } else {
                            var e = t.getCurrentChar()
                                , r = zo.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode());
                            if (r !== this.getEncodingMode()) {
                                switch (r) {
                                    case 5:
                                        return t.writeCodeword(231),
                                            void t.signalEncoderChange(5);
                                    case 1:
                                        return t.writeCodeword(230),
                                            void t.signalEncoderChange(1);
                                    case 3:
                                        t.writeCodeword(238),
                                            t.signalEncoderChange(3);
                                        break;
                                    case 2:
                                        t.writeCodeword(239),
                                            t.signalEncoderChange(2);
                                        break;
                                    case 4:
                                        t.writeCodeword(240),
                                            t.signalEncoderChange(4);
                                        break;
                                    default:
                                        throw new Error("Illegal mode: " + r)
                                }
                            } else {
                                zo.isExtendedASCII(e) ? (t.writeCodeword(235),
                                    t.writeCodeword(e - 128 + 1),
                                    t.pos++) : (t.writeCodeword(e + 1),
                                    t.pos++)
                            }
                        }
                    }
                    ,
                    t.prototype.encodeASCIIDigits = function (t, e) {
                        if (zo.isDigit(t) && zo.isDigit(e)) {
                            return 10 * (t - 48) + (e - 48) + 130;
                        }
                        throw new Error("not digits: " + t + e)
                    }
                    ,
                    t
            }(), Mo = function () {
                function t() {
                }

                return t.prototype.getEncodingMode = function () {
                    return 5
                }
                    ,
                    t.prototype.encode = function (t) {
                        var e = new F;
                        for (e.append(0); t.hasMoreCharacters();) {
                            var r = t.getCurrentChar();
                            if (e.append(r),
                                t.pos++,
                            zo.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
                                t.signalEncoderChange(0);
                                break
                            }
                        }
                        var n = e.length() - 1
                            , o = t.getCodewordCount() + n + 1;
                        t.updateSymbolInfo(o);
                        var i = t.getSymbolInfo().getDataCapacity() - o > 0;
                        if (t.hasMoreCharacters() || i) {
                            if (n <= 249) {
                                e.setCharAt(0, L.getCharAt(n));
                            } else {
                                if (!(n <= 1555)) {
                                    throw new Error("Message length not in valid ranges: " + n);
                                }
                                e.setCharAt(0, L.getCharAt(Math.floor(n / 250) + 249)),
                                    e.insert(1, L.getCharAt(n % 250))
                            }
                        }
                        var a = 0;
                        for (r = e.length(); a < r; a++) {
                            t.writeCodeword(this.randomize255State(e.charAt(a).charCodeAt(0), t.getCodewordCount() + 1))
                        }
                    }
                    ,
                    t.prototype.randomize255State = function (t, e) {
                        var r = t + (149 * e % 255 + 1);
                        return r <= 255 ? r : r - 256
                    }
                    ,
                    t
            }(), Po = function () {
                function t() {
                }

                return t.prototype.getEncodingMode = function () {
                    return 1
                }
                    ,
                    t.prototype.encodeMaximal = function (t) {
                        for (var e = new F, r = 0, n = t.pos, o = 0; t.hasMoreCharacters();) {
                            var i = t.getCurrentChar();
                            t.pos++,
                                r = this.encodeChar(i, e),
                            e.length() % 3 == 0 && (n = t.pos,
                                o = e.length())
                        }
                        if (o !== e.length()) {
                            var a = Math.floor(e.length() / 3 * 2)
                                , s = Math.floor(t.getCodewordCount() + a + 1);
                            t.updateSymbolInfo(s);
                            var u = t.getSymbolInfo().getDataCapacity() - s
                                , c = Math.floor(e.length() % 3);
                            (2 === c && 2 !== u || 1 === c && (r > 3 || 1 !== u)) && (t.pos = n)
                        }
                        e.length() > 0 && t.writeCodeword(230),
                            this.handleEOD(t, e)
                    }
                    ,
                    t.prototype.encode = function (t) {
                        for (var e = new F; t.hasMoreCharacters();) {
                            var r = t.getCurrentChar();
                            t.pos++;
                            var n = this.encodeChar(r, e)
                                , o = 2 * Math.floor(e.length() / 3)
                                , i = t.getCodewordCount() + o;
                            t.updateSymbolInfo(i);
                            var a = t.getSymbolInfo().getDataCapacity() - i;
                            if (!t.hasMoreCharacters()) {
                                var s = new F;
                                for (e.length() % 3 == 2 && 2 !== a && (n = this.backtrackOneCharacter(t, e, s, n));
                                    e.length() % 3 == 1 && (n > 3 || 1 !== a);) {
                                    n = this.backtrackOneCharacter(t, e, s, n);
                                }
                                break
                            }
                            if (e.length() % 3 == 0) {
                                if (zo.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode())
                                    !== this.getEncodingMode()) {
                                    t.signalEncoderChange(0);
                                    break
                                }
                            }
                        }
                        this.handleEOD(t, e)
                    }
                    ,
                    t.prototype.backtrackOneCharacter = function (t, e, r, n) {
                        var o = e.length()
                            , i = e.toString().substring(0, o - n);
                        e.setLengthToZero(),
                            e.append(i),
                            t.pos--;
                        var a = t.getCurrentChar();
                        return n = this.encodeChar(a, r),
                            t.resetSymbolInfo(),
                            n
                    }
                    ,
                    t.prototype.writeNextTriplet = function (t, e) {
                        t.writeCodewords(this.encodeToCodewords(e.toString()));
                        var r = e.toString().substring(3);
                        e.setLengthToZero(),
                            e.append(r)
                    }
                    ,
                    t.prototype.handleEOD = function (t, e) {
                        var r = Math.floor(e.length() / 3 * 2)
                            , n = e.length() % 3
                            , o = t.getCodewordCount() + r;
                        t.updateSymbolInfo(o);
                        var i = t.getSymbolInfo().getDataCapacity() - o;
                        if (2 === n) {
                            for (e.append("\0"); e.length() >= 3;) {
                                this.writeNextTriplet(t, e);
                            }
                            t.hasMoreCharacters() && t.writeCodeword(254)
                        } else if (1 === i && 1 === n) {
                            for (; e.length() >= 3;) {
                                this.writeNextTriplet(t, e);
                            }
                            t.hasMoreCharacters() && t.writeCodeword(254),
                                t.pos--
                        } else {
                            if (0 !== n) {
                                throw new Error("Unexpected case. Please report!");
                            }
                            for (; e.length() >= 3;) {
                                this.writeNextTriplet(t, e);
                            }
                            (i > 0 || t.hasMoreCharacters()) && t.writeCodeword(254)
                        }
                        t.signalEncoderChange(0)
                    }
                    ,
                    t.prototype.encodeChar = function (t, e) {
                        if (t === " ".charCodeAt(0)) {
                            return e.append(3),
                                1;
                        }
                        if (t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0)) {
                            return e.append(t - 48 + 4),
                                1;
                        }
                        if (t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0)) {
                            return e.append(t - 65 + 14),
                                1;
                        }
                        if (t < " ".charCodeAt(0)) {
                            return e.append(0),
                                e.append(t),
                                2;
                        }
                        if (t <= "/".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 33),
                                2;
                        }
                        if (t <= "@".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 58 + 15),
                                2;
                        }
                        if (t <= "_".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 91 + 22),
                                2;
                        }
                        if (t <= 127) {
                            return e.append(2),
                                e.append(t - 96),
                                2;
                        }
                        e.append("1");
                        var r = 2;
                        return r += this.encodeChar(t - 128, e)
                    }
                    ,
                    t.prototype.encodeToCodewords = function (t) {
                        var e = 1600 * t.charCodeAt(0) + 40 * t.charCodeAt(1) + t.charCodeAt(2) + 1
                            , r = e / 256
                            , n = e % 256
                            , o = new F;
                        return o.append(r),
                            o.append(n),
                            o.toString()
                    }
                    ,
                    t
            }(), Bo = function () {
                function t() {
                }

                return t.prototype.getEncodingMode = function () {
                    return 4
                }
                    ,
                    t.prototype.encode = function (t) {
                        for (var e = new F; t.hasMoreCharacters();) {
                            var r = t.getCurrentChar();
                            if (this.encodeChar(r, e),
                                t.pos++,
                            e.length() >= 4) {
                                t.writeCodewords(this.encodeToCodewords(e.toString()));
                                var n = e.toString().substring(4);
                                if (e.setLengthToZero(),
                                    e.append(n),
                                zo.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode())
                                !== this.getEncodingMode()) {
                                    t.signalEncoderChange(0);
                                    break
                                }
                            }
                        }
                        e.append(L.getCharAt(31)),
                            this.handleEOD(t, e)
                    }
                    ,
                    t.prototype.handleEOD = function (t, e) {
                        try {
                            var r = e.length();
                            if (0 === r) {
                                return;
                            }
                            if (1 === r) {
                                t.updateSymbolInfo();
                                var n = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()
                                    , o = t.getRemainingCharacters();
                                if (o > n && (t.updateSymbolInfo(t.getCodewordCount() + 1),
                                    n = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()),
                                o <= n && n <= 2) {
                                    return
                                }
                            }
                            if (r > 4) {
                                throw new Error("Count must not exceed 4");
                            }
                            var i = r - 1
                                , a = this.encodeToCodewords(e.toString())
                                , s = !t.hasMoreCharacters() && i <= 2;
                            if (i <= 2) {
                                t.updateSymbolInfo(t.getCodewordCount() + i),
                                (n = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()) >= 3 && (s = !1,
                                    t.updateSymbolInfo(t.getCodewordCount() + a.length));
                            }
                            s ? (t.resetSymbolInfo(),
                                t.pos -= i) : t.writeCodewords(a)
                        } finally {
                            t.signalEncoderChange(0)
                        }
                    }
                    ,
                    t.prototype.encodeChar = function (t, e) {
                        t >= " ".charCodeAt(0) && t <= "?".charCodeAt(0) ? e.append(t) : t >= "@".charCodeAt(0) && t
                        <= "^".charCodeAt(0) ? e.append(L.getCharAt(t - 64)) : zo.illegalCharacter(L.getCharAt(t))
                    }
                    ,
                    t.prototype.encodeToCodewords = function (t) {
                        var e = t.length;
                        if (0 === e) {
                            throw new Error("StringBuilder must not be empty");
                        }
                        var r = (t.charAt(0).charCodeAt(0) << 18) + ((e >= 2 ? t.charAt(1).charCodeAt(0) : 0) << 12) + ((e
                        >= 3 ? t.charAt(2).charCodeAt(0) : 0) << 6) + (e >= 4 ? t.charAt(3).charCodeAt(0) : 0)
                            , n = r >> 16 & 255
                            , o = r >> 8 & 255
                            , i = 255 & r
                            , a = new F;
                        return a.append(n),
                        e >= 2 && a.append(o),
                        e >= 3 && a.append(i),
                            a.toString()
                    }
                    ,
                    t
            }(), Lo = function () {
                var t = function (e, r) {
                    return t = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function (t, e) {
                            t.__proto__ = e
                        }
                        || function (t, e) {
                            for (var r in e) {
                                e.hasOwnProperty(r) && (t[r] = e[r])
                            }
                        }
                        ,
                        t(e, r)
                };
                return function (e, r) {
                    function n() {
                        this.constructor = e
                    }

                    t(e, r),
                        e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                            new n)
                }
            }(), Fo = function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator
                    , r = e && t[e]
                    , n = 0;
                if (r) {
                    return r.call(t);
                }
                if (t && "number" == typeof t.length) {
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0),
                                {
                                    value: t && t[n++],
                                    done: !t
                                }
                        }
                    };
                }
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, ko = function () {
                function t(t, e, r, n, o, i, a, s) {
                    void 0 === a && (a = 0),
                    void 0 === s && (s = 0),
                        this.rectangular = t,
                        this.dataCapacity = e,
                        this.errorCodewords = r,
                        this.matrixWidth = n,
                        this.matrixHeight = o,
                        this.dataRegions = i,
                        this.rsBlockData = a,
                        this.rsBlockError = s
                }

                return t.lookup = function (t, e, r, n, o) {
                    var i, a;
                    void 0 === e && (e = 0),
                    void 0 === r && (r = null),
                    void 0 === n && (n = null),
                    void 0 === o && (o = !0);
                    try {
                        for (var s = Fo(Vo), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value;
                            if ((1 !== e || !c.rectangular) && ((2 !== e || c.rectangular) && (null == r
                                    || !(c.getSymbolWidth() < r.getWidth() || c.getSymbolHeight() < r.getHeight())) && (null
                                    == n || !(c.getSymbolWidth() > n.getWidth() || c.getSymbolHeight() > n.getHeight())) && t
                                <= c.dataCapacity)) {
                                return c
                            }
                        }
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (a = s.return) && a.call(s)
                        } finally {
                            if (i) {
                                throw i.error
                            }
                        }
                    }
                    if (o) {
                        throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + t);
                    }
                    return null
                }
                    ,
                    t.prototype.getHorizontalDataRegions = function () {
                        switch (this.dataRegions) {
                            case 1:
                                return 1;
                            case 2:
                            case 4:
                                return 2;
                            case 16:
                                return 4;
                            case 36:
                                return 6;
                            default:
                                throw new Error("Cannot handle this number of data regions")
                        }
                    }
                    ,
                    t.prototype.getVerticalDataRegions = function () {
                        switch (this.dataRegions) {
                            case 1:
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 16:
                                return 4;
                            case 36:
                                return 6;
                            default:
                                throw new Error("Cannot handle this number of data regions")
                        }
                    }
                    ,
                    t.prototype.getSymbolDataWidth = function () {
                        return this.getHorizontalDataRegions() * this.matrixWidth
                    }
                    ,
                    t.prototype.getSymbolDataHeight = function () {
                        return this.getVerticalDataRegions() * this.matrixHeight
                    }
                    ,
                    t.prototype.getSymbolWidth = function () {
                        return this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions()
                    }
                    ,
                    t.prototype.getSymbolHeight = function () {
                        return this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions()
                    }
                    ,
                    t.prototype.getCodewordCount = function () {
                        return this.dataCapacity + this.errorCodewords
                    }
                    ,
                    t.prototype.getInterleavedBlockCount = function () {
                        return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1
                    }
                    ,
                    t.prototype.getDataCapacity = function () {
                        return this.dataCapacity
                    }
                    ,
                    t.prototype.getErrorCodewords = function () {
                        return this.errorCodewords
                    }
                    ,
                    t.prototype.getDataLengthForInterleavedBlock = function (t) {
                        return this.rsBlockData
                    }
                    ,
                    t.prototype.getErrorLengthForInterleavedBlock = function (t) {
                        return this.rsBlockError
                    }
                    ,
                    t
            }(), xo = function (t) {
                function e() {
                    return t.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this
                }

                return Lo(e, t),
                    e.prototype.getInterleavedBlockCount = function () {
                        return 10
                    }
                    ,
                    e.prototype.getDataLengthForInterleavedBlock = function (t) {
                        return t <= 8 ? 156 : 155
                    }
                    ,
                    e
            }(ko), Vo = [new ko(!1, 3, 5, 8, 8, 1), new ko(!1, 5, 7, 10, 10, 1), new ko(!0, 5, 7, 16, 6, 1),
                new ko(!1, 8, 10, 12, 12, 1), new ko(!0, 10, 11, 14, 6, 2), new ko(!1, 12, 12, 14, 14, 1),
                new ko(!0, 16, 14, 24, 10, 1), new ko(!1, 18, 14, 16, 16, 1), new ko(!1, 22, 18, 18, 18, 1),
                new ko(!0, 22, 18, 16, 10, 2), new ko(!1, 30, 20, 20, 20, 1), new ko(!0, 32, 24, 16, 14, 2),
                new ko(!1, 36, 24, 22, 22, 1), new ko(!1, 44, 28, 24, 24, 1), new ko(!0, 49, 28, 22, 14, 2),
                new ko(!1, 62, 36, 14, 14, 4), new ko(!1, 86, 42, 16, 16, 4), new ko(!1, 114, 48, 18, 18, 4),
                new ko(!1, 144, 56, 20, 20, 4), new ko(!1, 174, 68, 22, 22, 4), new ko(!1, 204, 84, 24, 24, 4, 102, 42),
                new ko(!1, 280, 112, 14, 14, 16, 140, 56), new ko(!1, 368, 144, 16, 16, 16, 92, 36),
                new ko(!1, 456, 192, 18, 18, 16, 114, 48), new ko(!1, 576, 224, 20, 20, 16, 144, 56),
                new ko(!1, 696, 272, 22, 22, 16, 174, 68), new ko(!1, 816, 336, 24, 24, 16, 136, 56),
                new ko(!1, 1050, 408, 18, 18, 36, 175, 68), new ko(!1, 1304, 496, 20, 20, 36, 163, 62), new xo],
            Ho = function () {
                function t(t) {
                    this.msg = t,
                        this.pos = 0,
                        this.skipAtEnd = 0;
                    for (var e = t.split("").map((function (t) {
                            return t.charCodeAt(0)
                        }
                    )), r = new F, n = 0, o = e.length; n < o; n++) {
                        var i = String.fromCharCode(255 & e[n]);
                        if ("?" === i && "?" !== t.charAt(n)) {
                            throw new Error("Message contains characters outside ISO-8859-1 encoding.");
                        }
                        r.append(i)
                    }
                    this.msg = r.toString(),
                        this.shape = 0,
                        this.codewords = new F,
                        this.newEncoding = -1
                }

                return t.prototype.setSymbolShape = function (t) {
                    this.shape = t
                }
                    ,
                    t.prototype.setSizeConstraints = function (t, e) {
                        this.minSize = t,
                            this.maxSize = e
                    }
                    ,
                    t.prototype.getMessage = function () {
                        return this.msg
                    }
                    ,
                    t.prototype.setSkipAtEnd = function (t) {
                        this.skipAtEnd = t
                    }
                    ,
                    t.prototype.getCurrentChar = function () {
                        return this.msg.charCodeAt(this.pos)
                    }
                    ,
                    t.prototype.getCurrent = function () {
                        return this.msg.charCodeAt(this.pos)
                    }
                    ,
                    t.prototype.getCodewords = function () {
                        return this.codewords
                    }
                    ,
                    t.prototype.writeCodewords = function (t) {
                        this.codewords.append(t)
                    }
                    ,
                    t.prototype.writeCodeword = function (t) {
                        this.codewords.append(t)
                    }
                    ,
                    t.prototype.getCodewordCount = function () {
                        return this.codewords.length()
                    }
                    ,
                    t.prototype.getNewEncoding = function () {
                        return this.newEncoding
                    }
                    ,
                    t.prototype.signalEncoderChange = function (t) {
                        this.newEncoding = t
                    }
                    ,
                    t.prototype.resetEncoderSignal = function () {
                        this.newEncoding = -1
                    }
                    ,
                    t.prototype.hasMoreCharacters = function () {
                        return this.pos < this.getTotalMessageCharCount()
                    }
                    ,
                    t.prototype.getTotalMessageCharCount = function () {
                        return this.msg.length - this.skipAtEnd
                    }
                    ,
                    t.prototype.getRemainingCharacters = function () {
                        return this.getTotalMessageCharCount() - this.pos
                    }
                    ,
                    t.prototype.getSymbolInfo = function () {
                        return this.symbolInfo
                    }
                    ,
                    t.prototype.updateSymbolInfo = function (t) {
                        void 0 === t && (t = this.getCodewordCount()),
                        (null == this.symbolInfo || t > this.symbolInfo.getDataCapacity())
                        && (this.symbolInfo = ko.lookup(t, this.shape, this.minSize, this.maxSize, !0))
                    }
                    ,
                    t.prototype.resetSymbolInfo = function () {
                        this.symbolInfo = null
                    }
                    ,
                    t
            }(), Uo = function () {
                var t = function (e, r) {
                    return t = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function (t, e) {
                            t.__proto__ = e
                        }
                        || function (t, e) {
                            for (var r in e) {
                                e.hasOwnProperty(r) && (t[r] = e[r])
                            }
                        }
                        ,
                        t(e, r)
                };
                return function (e, r) {
                    function n() {
                        this.constructor = e
                    }

                    t(e, r),
                        e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                            new n)
                }
            }(), Go = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return Uo(e, t),
                    e.prototype.getEncodingMode = function () {
                        return 3
                    }
                    ,
                    e.prototype.encode = function (t) {
                        for (var e = new F; t.hasMoreCharacters();) {
                            var r = t.getCurrentChar();
                            if (t.pos++,
                                this.encodeChar(r, e),
                            e.length() % 3 == 0) {
                                if (this.writeNextTriplet(t, e),
                                zo.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode())
                                !== this.getEncodingMode()) {
                                    t.signalEncoderChange(0);
                                    break
                                }
                            }
                        }
                        this.handleEOD(t, e)
                    }
                    ,
                    e.prototype.encodeChar = function (t, e) {
                        switch (t) {
                            case 13:
                                e.append(0);
                                break;
                            case "*".charCodeAt(0):
                                e.append(1);
                                break;
                            case ">".charCodeAt(0):
                                e.append(2);
                                break;
                            case " ".charCodeAt(0):
                                e.append(3);
                                break;
                            default:
                                t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0) ? e.append(t - 48 + 4) : t
                                >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0) ? e.append(t - 65 + 14)
                                    : zo.illegalCharacter(L.getCharAt(t))
                        }
                        return 1
                    }
                    ,
                    e.prototype.handleEOD = function (t, e) {
                        t.updateSymbolInfo();
                        var r = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount()
                            , n = e.length();
                        t.pos -= n,
                        (t.getRemainingCharacters() > 1 || r > 1 || t.getRemainingCharacters() !== r) && t.writeCodeword(
                            254),
                        t.getNewEncoding() < 0 && t.signalEncoderChange(0)
                    }
                    ,
                    e
            }(Po), Xo = function () {
                var t = function (e, r) {
                    return t = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function (t, e) {
                            t.__proto__ = e
                        }
                        || function (t, e) {
                            for (var r in e) {
                                e.hasOwnProperty(r) && (t[r] = e[r])
                            }
                        }
                        ,
                        t(e, r)
                };
                return function (e, r) {
                    function n() {
                        this.constructor = e
                    }

                    t(e, r),
                        e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                            new n)
                }
            }(), Wo = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return Xo(e, t),
                    e.prototype.getEncodingMode = function () {
                        return 2
                    }
                    ,
                    e.prototype.encodeChar = function (t, e) {
                        if (t === " ".charCodeAt(0)) {
                            return e.append(3),
                                1;
                        }
                        if (t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0)) {
                            return e.append(t - 48 + 4),
                                1;
                        }
                        if (t >= "a".charCodeAt(0) && t <= "z".charCodeAt(0)) {
                            return e.append(t - 97 + 14),
                                1;
                        }
                        if (t < " ".charCodeAt(0)) {
                            return e.append(0),
                                e.append(t),
                                2;
                        }
                        if (t <= "/".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 33),
                                2;
                        }
                        if (t <= "@".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 58 + 15),
                                2;
                        }
                        if (t >= "[".charCodeAt(0) && t <= "_".charCodeAt(0)) {
                            return e.append(1),
                                e.append(t - 91 + 22),
                                2;
                        }
                        if (t === "`".charCodeAt(0)) {
                            return e.append(2),
                                e.append(0),
                                2;
                        }
                        if (t <= "Z".charCodeAt(0)) {
                            return e.append(2),
                                e.append(t - 65 + 1),
                                2;
                        }
                        if (t <= 127) {
                            return e.append(2),
                                e.append(t - 123 + 27),
                                2;
                        }
                        e.append("1");
                        var r = 2;
                        return r += this.encodeChar(t - 128, e)
                    }
                    ,
                    e
            }(Po), zo = function () {
                function t() {
                }

                return t.randomize253State = function (t) {
                    var e = 129 + (149 * t % 253 + 1);
                    return e <= 254 ? e : e - 254
                }
                    ,
                    t.encodeHighLevel = function (t, e, r, n, o) {
                        void 0 === e && (e = 0),
                        void 0 === r && (r = null),
                        void 0 === n && (n = null),
                        void 0 === o && (o = !1);
                        var i = new Po
                            , a = [new Do, i, new Wo, new Go, new Bo, new Mo]
                            , s = new Ho(t);
                        s.setSymbolShape(e),
                            s.setSizeConstraints(r, n),
                            t.startsWith(Ro) && t.endsWith("") ? (s.writeCodeword(236),
                                s.setSkipAtEnd(2),
                                s.pos += 7) : t.startsWith(No) && t.endsWith("") && (s.writeCodeword(237),
                                s.setSkipAtEnd(2),
                                s.pos += 7);
                        var u = 0;
                        for (o && (i.encodeMaximal(s),
                            u = s.getNewEncoding(),
                            s.resetEncoderSignal()); s.hasMoreCharacters();) {
                            a[u].encode(s),
                            s.getNewEncoding() >= 0 && (u = s.getNewEncoding(),
                                s.resetEncoderSignal());
                        }
                        var c = s.getCodewordCount();
                        s.updateSymbolInfo();
                        var f = s.getSymbolInfo().getDataCapacity();
                        c < f && 0 !== u && 5 !== u && 4 !== u && s.writeCodeword("þ");
                        var h = s.getCodewords();
                        for (h.length() < f && h.append(129); h.length() < f;) {
                            h.append(this.randomize253State(h.length() + 1));
                        }
                        return s.getCodewords().toString()
                    }
                    ,
                    t.lookAheadTest = function (t, e, r) {
                        var n = this.lookAheadTestIntern(t, e, r);
                        if (3 === r && 3 === n) {
                            for (var o = Math.min(e + 3, t.length), i = e; i < o; i++) {
                                if (!this.isNativeX12(t.charCodeAt(i))) {
                                    return 0
                                }
                            }
                        } else if (4 === r && 4 === n) {
                            for (o = Math.min(e + 4, t.length),
                                i = e; i < o; i++) {
                                if (!this.isNativeEDIFACT(t.charCodeAt(i))) {
                                    return 0;
                                }
                            }
                        }
                        return n
                    }
                    ,
                    t.lookAheadTestIntern = function (t, e, r) {
                        if (e >= t.length) {
                            return r;
                        }
                        var n;
                        0 === r ? n = [0, 1, 1, 1, 1, 1.25] : (n = [1, 2, 2, 2, 2, 2.25])[r] = 0;
                        for (var o = 0, i = new Uint8Array(6), a = []; ;) {
                            if (e + o === t.length) {
                                A.fill(i, 0),
                                    A.fill(a, 0);
                                var s = this.findMinimums(n, a, E.MAX_VALUE, i)
                                    , u = this.getMinimumCount(i);
                                if (a[0] === s) {
                                    return 0;
                                }
                                if (1 === u) {
                                    if (i[5] > 0) {
                                        return 5;
                                    }
                                    if (i[4] > 0) {
                                        return 4;
                                    }
                                    if (i[2] > 0) {
                                        return 2;
                                    }
                                    if (i[3] > 0) {
                                        return 3
                                    }
                                }
                                return 1
                            }
                            var c = t.charCodeAt(e + o);
                            if (o++,
                                this.isDigit(c) ? n[0] += .5 : this.isExtendedASCII(c) ? (n[0] = Math.ceil(n[0]),
                                    n[0] += 2) : (n[0] = Math.ceil(n[0]),
                                    n[0]++),
                                this.isNativeC40(c) ? n[1] += 2 / 3 : this.isExtendedASCII(c) ? n[1] += 8 / 3 : n[1] += 4
                                    / 3,
                                this.isNativeText(c) ? n[2] += 2 / 3 : this.isExtendedASCII(c) ? n[2] += 8 / 3 : n[2] += 4
                                    / 3,
                                this.isNativeX12(c) ? n[3] += 2 / 3 : this.isExtendedASCII(c) ? n[3] += 13 / 3 : n[3] += 10
                                    / 3,
                                this.isNativeEDIFACT(c) ? n[4] += 3 / 4 : this.isExtendedASCII(c) ? n[4] += 4.25
                                    : n[4] += 3.25,
                                this.isSpecialB256(c) ? n[5] += 4 : n[5]++,
                            o >= 4) {
                                if (A.fill(i, 0),
                                    A.fill(a, 0),
                                    this.findMinimums(n, a, E.MAX_VALUE, i),
                                a[0] < this.min(a[5], a[1], a[2], a[3], a[4])) {
                                    return 0;
                                }
                                if (a[5] < a[0] || a[5] + 1 < this.min(a[1], a[2], a[3], a[4])) {
                                    return 5;
                                }
                                if (a[4] + 1 < this.min(a[5], a[1], a[2], a[3], a[0])) {
                                    return 4;
                                }
                                if (a[2] + 1 < this.min(a[5], a[1], a[4], a[3], a[0])) {
                                    return 2;
                                }
                                if (a[3] + 1 < this.min(a[5], a[1], a[4], a[2], a[0])) {
                                    return 3;
                                }
                                if (a[1] + 1 < this.min(a[0], a[5], a[4], a[2])) {
                                    if (a[1] < a[3]) {
                                        return 1;
                                    }
                                    if (a[1] === a[3]) {
                                        for (var f = e + o + 1; f < t.length;) {
                                            var h = t.charCodeAt(f);
                                            if (this.isX12TermSep(h)) {
                                                return 3;
                                            }
                                            if (!this.isNativeX12(h)) {
                                                break;
                                            }
                                            f++
                                        }
                                        return 1
                                    }
                                }
                            }
                        }
                    }
                    ,
                    t.min = function (t, e, r, n, o) {
                        var i = Math.min(t, Math.min(e, Math.min(r, n)));
                        return void 0 === o ? i : Math.min(i, o)
                    }
                    ,
                    t.findMinimums = function (t, e, r, n) {
                        for (var o = 0; o < 6; o++) {
                            var i = e[o] = Math.ceil(t[o]);
                            r > i && (r = i,
                                A.fill(n, 0)),
                            r === i && (n[o] = n[o] + 1)
                        }
                        return r
                    }
                    ,
                    t.getMinimumCount = function (t) {
                        for (var e = 0, r = 0; r < 6; r++) {
                            e += t[r];
                        }
                        return e || 0
                    }
                    ,
                    t.isDigit = function (t) {
                        return t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0)
                    }
                    ,
                    t.isExtendedASCII = function (t) {
                        return t >= 128 && t <= 255
                    }
                    ,
                    t.isNativeC40 = function (t) {
                        return t === " ".charCodeAt(0) || t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0) || t
                            >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0)
                    }
                    ,
                    t.isNativeText = function (t) {
                        return t === " ".charCodeAt(0) || t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0) || t
                            >= "a".charCodeAt(0) && t <= "z".charCodeAt(0)
                    }
                    ,
                    t.isNativeX12 = function (t) {
                        return this.isX12TermSep(t) || t === " ".charCodeAt(0) || t >= "0".charCodeAt(0) && t
                            <= "9".charCodeAt(0) || t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0)
                    }
                    ,
                    t.isX12TermSep = function (t) {
                        return 13 === t || t === "*".charCodeAt(0) || t === ">".charCodeAt(0)
                    }
                    ,
                    t.isNativeEDIFACT = function (t) {
                        return t >= " ".charCodeAt(0) && t <= "^".charCodeAt(0)
                    }
                    ,
                    t.isSpecialB256 = function (t) {
                        return !1
                    }
                    ,
                    t.determineConsecutiveDigitCount = function (t, e) {
                        void 0 === e && (e = 0);
                        for (var r = t.length, n = e; n < r && this.isDigit(t.charCodeAt(n));) {
                            n++;
                        }
                        return n - e
                    }
                    ,
                    t.illegalCharacter = function (t) {
                        var e = E.toHexString(t.charCodeAt(0));
                        throw e = "0000".substring(0, 4 - e.length) + e,
                            new Error("Illegal character: " + t + " (0x" + e + ")")
                    }
                    ,
                    t
            }(), jo = function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator
                    , r = e && t[e]
                    , n = 0;
                if (r) {
                    return r.call(t);
                }
                if (t && "number" == typeof t.length) {
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0),
                                {
                                    value: t && t[n++],
                                    done: !t
                                }
                        }
                    };
                }
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, Yo = function () {
                function t(t) {
                    this.charset = t,
                        this.name = t.name
                }

                return t.prototype.canEncode = function (t) {
                    try {
                        return null != B.encode(t, this.charset)
                    } catch (t) {
                        return !1
                    }
                }
                    ,
                    t
            }(), Zo = function () {
                function t(t, e, r) {
                    var n, o, i, a, s, u;
                    this.ENCODERS = ["IBM437", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6",
                        "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13",
                        "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "windows-1250", "windows-1251", "windows-1252",
                        "windows-1256", "Shift_JIS"].map((function (t) {
                            return new Yo(Oo.forName(t))
                        }
                    )),
                        this.encoders = [];
                    var c = [];
                    c.push(new Yo(To.ISO_8859_1));
                    for (var f = null != e && e.name.startsWith("UTF"), h = 0; h < t.length; h++) {
                        var l = !1;
                        try {
                            for (var d = (n = void 0,
                                jo(c)), p = d.next(); !p.done; p = d.next()) {
                                var g = p.value
                                    , w = t.charAt(h);
                                if (w.charCodeAt(0) === r || g.canEncode(w)) {
                                    l = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                p && !p.done && (o = d.return) && o.call(d)
                            } finally {
                                if (n) {
                                    throw n.error
                                }
                            }
                        }
                        if (!l) {
                            try {
                                for (var y = (i = void 0,
                                    jo(this.ENCODERS)), v = y.next(); !v.done; v = y.next()) {
                                    if ((g = v.value).canEncode(t.charAt(h))) {
                                        c.push(g),
                                            l = !0;
                                        break
                                    }
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    v && !v.done && (a = y.return) && a.call(y)
                                } finally {
                                    if (i) {
                                        throw i.error
                                    }
                                }
                            }
                        }
                        l || (f = !0)
                    }
                    if (1 !== c.length || f) {
                        this.encoders = [];
                        var _ = 0;
                        try {
                            for (var m = jo(c), C = m.next(); !C.done; C = m.next()) {
                                g = C.value;
                                this.encoders[_++] = g
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                C && !C.done && (u = m.return) && u.call(m)
                            } finally {
                                if (s) {
                                    throw s.error
                                }
                            }
                        }
                    } else {
                        this.encoders = [c[0]];
                    }
                    var A = -1;
                    if (null != e) {
                        for (h = 0; h < this.encoders.length; h++) {
                            if (null != this.encoders[h] && e.name === this.encoders[h].name) {
                                A = h;
                                break
                            }
                        }
                    }
                    this.priorityEncoderIndex = A
                }

                return t.prototype.length = function () {
                    return this.encoders.length
                }
                    ,
                    t.prototype.getCharsetName = function (t) {
                        if (!(t < this.length())) {
                            throw new Error("index must be less than length");
                        }
                        return this.encoders[t].name
                    }
                    ,
                    t.prototype.getCharset = function (t) {
                        if (!(t < this.length())) {
                            throw new Error("index must be less than length");
                        }
                        return this.encoders[t].charset
                    }
                    ,
                    t.prototype.getECIValue = function (t) {
                        return this.encoders[t].charset.getValueIdentifier()
                    }
                    ,
                    t.prototype.getPriorityEncoderIndex = function () {
                        return this.priorityEncoderIndex
                    }
                    ,
                    t.prototype.canEncode = function (t, e) {
                        if (!(e < this.length())) {
                            throw new Error("index must be less than length");
                        }
                        return !0
                    }
                    ,
                    t.prototype.encode = function (t, e) {
                        if (!(e < this.length())) {
                            throw new Error("index must be less than length");
                        }
                        return B.encode(L.getCharAt(t), this.encoders[e].name)
                    }
                    ,
                    t
            }(), Ko = function () {
                function t(t, e, r) {
                    this.fnc1 = r;
                    var n = new Zo(t, e, r);
                    if (1 === n.length()) {
                        for (var o = 0; o < this.bytes.length; o++) {
                            var i = t.charAt(o).charCodeAt(0);
                            this.bytes[o] = i === r ? 1e3 : i
                        }
                    } else {
                        this.bytes = this.encodeMinimally(t, n, r)
                    }
                }

                return t.prototype.getFNC1Character = function () {
                    return this.fnc1
                }
                    ,
                    t.prototype.length = function () {
                        return this.bytes.length
                    }
                    ,
                    t.prototype.haveNCharacters = function (t, e) {
                        if (t + e - 1 >= this.bytes.length) {
                            return !1;
                        }
                        for (var r = 0; r < e; r++) {
                            if (this.isECI(t + r)) {
                                return !1;
                            }
                        }
                        return !0
                    }
                    ,
                    t.prototype.charAt = function (t) {
                        if (t < 0 || t >= this.length()) {
                            throw new Error("" + t);
                        }
                        if (this.isECI(t)) {
                            throw new Error("value at " + t + " is not a character but an ECI");
                        }
                        return this.isFNC1(t) ? this.fnc1 : this.bytes[t]
                    }
                    ,
                    t.prototype.subSequence = function (t, e) {
                        if (t < 0 || t > e || e > this.length()) {
                            throw new Error("" + t);
                        }
                        for (var r = new F, n = t; n < e; n++) {
                            if (this.isECI(n)) {
                                throw new Error("value at " + n + " is not a character but an ECI");
                            }
                            r.append(this.charAt(n))
                        }
                        return r.toString()
                    }
                    ,
                    t.prototype.isECI = function (t) {
                        if (t < 0 || t >= this.length()) {
                            throw new Error("" + t);
                        }
                        return this.bytes[t] > 255 && this.bytes[t] <= 999
                    }
                    ,
                    t.prototype.isFNC1 = function (t) {
                        if (t < 0 || t >= this.length()) {
                            throw new Error("" + t);
                        }
                        return 1e3 === this.bytes[t]
                    }
                    ,
                    t.prototype.getECIValue = function (t) {
                        if (t < 0 || t >= this.length()) {
                            throw new Error("" + t);
                        }
                        if (!this.isECI(t)) {
                            throw new Error("value at " + t + " is not an ECI but a character");
                        }
                        return this.bytes[t] - 256
                    }
                    ,
                    t.prototype.addEdge = function (t, e, r) {
                        (null == t[e][r.encoderIndex] || t[e][r.encoderIndex].cachedTotalSize > r.cachedTotalSize)
                        && (t[e][r.encoderIndex] = r)
                    }
                    ,
                    t.prototype.addEdges = function (t, e, r, n, o, i) {
                        var a = t.charAt(n).charCodeAt(0)
                            , s = 0
                            , u = e.length();
                        e.getPriorityEncoderIndex() >= 0 && (a === i || e.canEncode(a, e.getPriorityEncoderIndex()))
                        && (u = (s = e.getPriorityEncoderIndex()) + 1);
                        for (var c = s; c < u; c++) {
                            (a === i || e.canEncode(a, c)) && this.addEdge(r, n + 1, new qo(a, e, c, o, i))
                        }
                    }
                    ,
                    t.prototype.encodeMinimally = function (t, e, r) {
                        var n = t.length
                            , o = new (qo[n + 1][e.length()]);
                        this.addEdges(t, e, o, 0, null, r);
                        for (var i = 1; i <= n; i++) {
                            for (var a = 0; a < e.length(); a++) {
                                null != o[i][a] && i < n && this.addEdges(t, e, o, i, o[i][a], r);
                            }
                            for (a = 0; a < e.length(); a++) {
                                o[i - 1][a] = null
                            }
                        }
                        var s = -1
                            , u = E.MAX_VALUE;
                        for (a = 0; a < e.length(); a++) {
                            if (null != o[n][a]) {
                                var c = o[n][a];
                                c.cachedTotalSize < u && (u = c.cachedTotalSize,
                                    s = a)
                            }
                        }
                        if (s < 0) {
                            throw new Error('Failed to encode "' + t + '"');
                        }
                        for (var f = [], h = o[n][s]; null != h;) {
                            if (h.isFNC1()) {
                                f.unshift(1e3);
                            } else {
                                var l = e.encode(h.c, h.encoderIndex);
                                for (i = l.length - 1; i >= 0; i--) {
                                    f.unshift(255 & l[i])
                                }
                            }
                            (null === h.previous ? 0 : h.previous.encoderIndex) !== h.encoderIndex && f.unshift(
                                256 + e.getECIValue(h.encoderIndex)),
                                h = h.previous
                        }
                        var d = [];
                        for (i = 0; i < d.length; i++) {
                            d[i] = f[i];
                        }
                        return d
                    }
                    ,
                    t
            }(), qo = function () {
                function t(t, e, r, n, o) {
                    this.c = t,
                        this.encoderSet = e,
                        this.encoderIndex = r,
                        this.previous = n,
                        this.fnc1 = o,
                        this.c = t === o ? 1e3 : t;
                    var i = this.isFNC1() ? 1 : e.encode(t, r).length;
                    (null === n ? 0 : n.encoderIndex) !== r && (i += 3),
                    null != n && (i += n.cachedTotalSize),
                        this.cachedTotalSize = i
                }

                return t.prototype.isFNC1 = function () {
                    return 1e3 === this.c
                }
                    ,
                    t
            }(), Qo = function () {
                var t = function (e, r) {
                    return t = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function (t, e) {
                            t.__proto__ = e
                        }
                        || function (t, e) {
                            for (var r in e) {
                                e.hasOwnProperty(r) && (t[r] = e[r])
                            }
                        }
                        ,
                        t(e, r)
                };
                return function (e, r) {
                    function n() {
                        this.constructor = e
                    }

                    t(e, r),
                        e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                            new n)
                }
            }();
        !function (t) {
            t[t.ASCII = 0] = "ASCII",
                t[t.C40 = 1] = "C40",
                t[t.TEXT = 2] = "TEXT",
                t[t.X12 = 3] = "X12",
                t[t.EDF = 4] = "EDF",
                t[t.B256 = 5] = "B256"
        }(bo || (bo = {})),
            function (t) {
                function e(e, r, n, o, i) {
                    var a = t.call(this, e, r, n) || this;
                    return a.shape = o,
                        a.macroId = i,
                        a
                }

                Qo(e, t),
                    e.prototype.getMacroId = function () {
                        return this.macroId
                    }
                    ,
                    e.prototype.getShapeHint = function () {
                        return this.shape
                    }
            }(Ko);
        var Jo = function () {
            function t(t) {
                this.previous = t
            }

            return t.prototype.getPrevious = function () {
                return this.previous
            }
                ,
                t
        }()
            , $o = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }()
            , ti = function (t) {
            function e(e, r, n) {
                var o = t.call(this, e) || this;
                return o.value = r,
                    o.bitCount = n,
                    o
            }

            return $o(e, t),
                e.prototype.appendTo = function (t, e) {
                    t.appendBits(this.value, this.bitCount)
                }
                ,
                e.prototype.add = function (t, r) {
                    return new e(this, t, r)
                }
                ,
                e.prototype.addBinaryShift = function (t, r) {
                    return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"),
                        new e(this, t, r)
                }
                ,
                e.prototype.toString = function () {
                    var t = this.value & (1 << this.bitCount) - 1;
                    return t |= 1 << this.bitCount,
                    "<" + E.toBinaryString(t | 1 << this.bitCount).substring(1) + ">"
                }
                ,
                e
        }(Jo)
            , ei = function () {
            var t = function (e, r) {
                return t = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (t, e) {
                        t.__proto__ = e
                    }
                    || function (t, e) {
                        for (var r in e) {
                            e.hasOwnProperty(r) && (t[r] = e[r])
                        }
                    }
                    ,
                    t(e, r)
            };
            return function (e, r) {
                function n() {
                    this.constructor = e
                }

                t(e, r),
                    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                        new n)
            }
        }();
        !function (t) {
            function e(e, r, n) {
                var o = t.call(this, e, 0, 0) || this;
                return o.binaryShiftStart = r,
                    o.binaryShiftByteCount = n,
                    o
            }

            ei(e, t),
                e.prototype.appendTo = function (t, e) {
                    for (var r = 0; r < this.binaryShiftByteCount; r++) {
                        (0 === r || 31 === r && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5),
                            this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r
                                ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(
                                    this.binaryShiftByteCount - 31, 5)),
                            t.appendBits(e[this.binaryShiftStart + r], 8)
                    }
                }
                ,
                e.prototype.addBinaryShift = function (t, r) {
                    return new e(this, t, r)
                }
                ,
                e.prototype.toString = function () {
                    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1)
                        + ">"
                }
        }(ti);
        new ti(null, 0, 0);
        var ri = function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator
                , r = e && t[e]
                , n = 0;
            if (r) {
                return r.call(t);
            }
            if (t && "number" == typeof t.length) {
                return {
                    next: function () {
                        return t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                    }
                };
            }
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
        !function (t) {
            var e, r;
            try {
                for (var n = ri(t), o = n.next(); !o.done; o = n.next()) {
                    var i = o.value;
                    A.fill(i, -1)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (e) {
                        throw e.error
                    }
                }
            }
            t[0][4] = 0,
                t[1][4] = 0,
                t[1][0] = 28,
                t[3][4] = 0,
                t[2][4] = 0,
                t[2][0] = 15
        }(A.createInt32Array(6, 6)),
            function (t) {
                var e = L.getCharCode(" ")
                    , r = L.getCharCode(".")
                    , n = L.getCharCode(",");
                t[0][e] = 1;
                for (var o = L.getCharCode("Z"), i = L.getCharCode("A"), a = i; a <= o; a++) {
                    t[0][a] = a - i + 2;
                }
                t[1][e] = 1;
                var s = L.getCharCode("z")
                    , u = L.getCharCode("a");
                for (a = u; a <= s; a++) {
                    t[1][a] = a - u + 2;
                }
                t[2][e] = 1;
                var c = L.getCharCode("9")
                    , f = L.getCharCode("0");
                for (a = f; a <= c; a++) {
                    t[2][a] = a - f + 2;
                }
                t[2][n] = 12,
                    t[2][r] = 13;
                for (var h = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "",
                    "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""], l = 0; l < h.length; l++) {
                    t[3][L.getCharCode(h[l])] = l;
                }
                var d = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
                    "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
                for (l = 0; l < d.length; l++) {
                    L.getCharCode(d[l]) > 0 && (t[4][L.getCharCode(d[l])] = l)
                }
            }(A.createInt32Array(5, 256));

        class ni extends W {
            constructor(t) {
                super(t.width, t.height),
                    this.canvas = t,
                    this.tempCanvasElement = null,
                    this.buffer = ni.makeBufferFromCanvasImageData(t)
            }

            static makeBufferFromCanvasImageData(t) {
                const e = t.getContext("2d");
                if (!e) {
                    throw new Error("Couldn't get canvas context.");
                }
                const r = e.getImageData(0, 0, t.width, t.height);
                return ni.toGrayscaleBuffer(r.data, t.width, t.height)
            }

            static toGrayscaleBuffer(t, e, r) {
                const n = new Uint8ClampedArray(e * r);
                for (let e = 0, r = 0, o = t.length; e < o; e += 4,
                    r++) {
                    let o;
                    if (0 === t[e + 3]) {
                        o = 255;
                    } else {
                        o = 306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512 >> 10
                    }
                    n[r] = o
                }
                return n
            }

            getRow(t, e) {
                if (t < 0 || t >= this.getHeight()) {
                    throw new h("Requested row is outside the image: " + t);
                }
                const r = this.getWidth()
                    , n = t * r;
                return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)),
                    e.set(this.buffer.slice(n, n + r))),
                    e
            }

            getMatrix() {
                return this.buffer
            }

            isCropSupported() {
                return !0
            }

            crop(t, e, r, n) {
                return super.crop(t, e, r, n),
                    this
            }

            isRotateSupported() {
                return !0
            }

            rotateCounterClockwise() {
                return this.rotate(-90),
                    this
            }

            rotateCounterClockwise45() {
                return this.rotate(-45),
                    this
            }

            invert() {
                return new j(this)
            }

            getTempCanvasElement() {
                if (null === this.tempCanvasElement) {
                    const t = this.canvas.ownerDocument.createElement("canvas");
                    t.width = this.canvas.width,
                        t.height = this.canvas.height,
                        this.tempCanvasElement = t
                }
                return this.tempCanvasElement
            }

            rotate(t) {
                const e = this.getTempCanvasElement();
                if (!e) {
                    throw new Error("Could not create a Canvas element.");
                }
                const r = t * ni.DEGREE_TO_RADIANS
                    , n = this.canvas.width
                    , o = this.canvas.height
                    , i = Math.ceil(Math.abs(Math.cos(r)) * n + Math.abs(Math.sin(r)) * o)
                    , a = Math.ceil(Math.abs(Math.sin(r)) * n + Math.abs(Math.cos(r)) * o);
                e.width = i,
                    e.height = a;
                const s = e.getContext("2d");
                if (!s) {
                    throw new Error("Could not create a Canvas Context element.");
                }
                return s.translate(i / 2, a / 2),
                    s.rotate(r),
                    s.drawImage(this.canvas, n / -2, o / -2),
                    this.buffer = ni.makeBufferFromCanvasImageData(e),
                    this
            }
        }

        function oi() {
            return "undefined" != typeof navigator
        }

        function ii() {
            return !!(oi() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
        }

        ni.DEGREE_TO_RADIANS = Math.PI / 180;
        var ai = function (t, e, r, n) {
            return new (r || (r = Promise))((function (o, i) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value,
                            e instanceof r ? e : new r((function (t) {
                                    t(e)
                                }
                            ))).then(a, s)
                    }

                    u((n = n.apply(t, e || [])).next())
                }
            ))
        };
        const si = {
            delayBetweenScanAttempts: 500,
            delayBetweenScanSuccess: 500,
            tryPlayVideoTimeout: 5e3
        };

        class ui {
            constructor(t, e = new Map, r = {}) {
                this.reader = t,
                    this.hints = e,
                    this.options = Object.assign(Object.assign({}, si), r)
            }

            set possibleFormats(t) {
                this.hints.set(O.POSSIBLE_FORMATS, t)
            }

            static addVideoSource(t, e) {
                try {
                    t.srcObject = e
                } catch (t) {
                    console.error("got interrupted by new loading request")
                }
            }

            static mediaStreamSetTorch(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        yield t.applyConstraints({
                            advanced: [{
                                fillLightMode: e ? "flash" : "off",
                                torch: !!e
                            }]
                        })
                    }
                ))
            }

            static mediaStreamIsTorchCompatible(t) {
                const e = t.getVideoTracks();
                for (const t of e) {
                    if (ui.mediaStreamIsTorchCompatibleTrack(t)) {
                        return !0;
                    }
                }
                return !1
            }

            static mediaStreamIsTorchCompatibleTrack(t) {
                try {
                    return "torch" in t.getCapabilities()
                } catch (t) {
                    return console.error(t),
                        console.warn(
                            "Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."),
                        !1
                }
            }

            static isVideoPlaying(t) {
                return t.currentTime > 0 && !t.paused && t.readyState > 2
            }

            static getMediaElement(t, e) {
                const r = document.getElementById(t);
                if (!r) {
                    throw new c(`element with id '${t}' not found`);
                }
                if (r.nodeName.toLowerCase() !== e.toLowerCase()) {
                    throw new c(`element with id '${t}' must be an ${e} element`);
                }
                return r
            }

            static createVideoElement(t) {
                if (t instanceof HTMLVideoElement) {
                    return t;
                }
                if ("string" == typeof t) {
                    return ui.getMediaElement(t, "video");
                }
                if (!t && "undefined" != typeof document) {
                    const t = document.createElement("video");
                    return t.width = 200,
                        t.height = 200,
                        t
                }
                throw new Error("Couldn't get videoElement from videoSource!")
            }

            static prepareImageElement(t) {
                if (t instanceof HTMLImageElement) {
                    return t;
                }
                if ("string" == typeof t) {
                    return ui.getMediaElement(t, "img");
                }
                if (void 0 === t) {
                    const t = document.createElement("img");
                    return t.width = 200,
                        t.height = 200,
                        t
                }
                throw new Error("Couldn't get imageElement from imageSource!")
            }

            static prepareVideoElement(t) {
                const e = ui.createVideoElement(t);
                return e.setAttribute("autoplay", "true"),
                    e.setAttribute("muted", "true"),
                    e.setAttribute("playsinline", "true"),
                    e
            }

            static isImageLoaded(t) {
                return !!t.complete && 0 !== t.naturalWidth
            }

            static createBinaryBitmapFromCanvas(t) {
                const e = new ni(t)
                    , r = new X(e);
                return new l(r)
            }

            static drawImageOnCanvas(t, e) {
                t.drawImage(e, 0, 0)
            }

            static getMediaElementDimensions(t) {
                if (t instanceof HTMLVideoElement) {
                    return {
                        height: t.videoHeight,
                        width: t.videoWidth
                    };
                }
                if (t instanceof HTMLImageElement) {
                    return {
                        height: t.naturalHeight || t.height,
                        width: t.naturalWidth || t.width
                    };
                }
                throw new Error("Couldn't find the Source's dimensions!")
            }

            static createCaptureCanvas(t) {
                if (!t) {
                    throw new c("Cannot create a capture canvas without a media element.");
                }
                if ("undefined" == typeof document) {
                    throw new Error('The page "Document" is undefined, make sure you\'re running in a browser.');
                }
                const e = document.createElement("canvas")
                    , {width: r, height: n} = ui.getMediaElementDimensions(t);
                return e.style.width = r + "px",
                    e.style.height = n + "px",
                    e.width = r,
                    e.height = n,
                    e
            }

            static tryPlayVideo(t) {
                return ai(this, void 0, void 0, (function* () {
                        if (null == t ? void 0 : t.ended) {
                            return console.error("Trying to play video that has ended."),
                                !1;
                        }
                        if (ui.isVideoPlaying(t)) {
                            return console.warn("Trying to play video that is already playing."),
                                !0;
                        }
                        try {
                            return yield t.play(),
                                !0
                        } catch (t) {
                            return console.warn("It was not possible to play the video.", t),
                                !1
                        }
                    }
                ))
            }

            static createCanvasFromMediaElement(t) {
                const e = ui.createCaptureCanvas(t)
                    , r = e.getContext("2d");
                if (!r) {
                    throw new Error("Couldn't find Canvas 2D Context.");
                }
                return ui.drawImageOnCanvas(r, t),
                    e
            }

            static createBinaryBitmapFromMediaElem(t) {
                const e = ui.createCanvasFromMediaElement(t);
                return ui.createBinaryBitmapFromCanvas(e)
            }

            static destroyImageElement(t) {
                t.src = "",
                    t.removeAttribute("src"),
                    t = void 0
            }

            static listVideoInputDevices() {
                return ai(this, void 0, void 0, (function* () {
                        if (!oi()) {
                            throw new Error("Can't enumerate devices, navigator is not present.");
                        }
                        if (!ii()) {
                            throw new Error("Can't enumerate devices, method not supported.");
                        }
                        const t = yield navigator.mediaDevices.enumerateDevices()
                            , e = [];
                        for (const r of t) {
                            const t = "video" === r.kind ? "videoinput" : r.kind;
                            if ("videoinput" !== t) {
                                continue;
                            }
                            const n = {
                                deviceId: r.deviceId || r.id,
                                label: r.label || `Video device ${e.length + 1}`,
                                kind: t,
                                groupId: r.groupId
                            };
                            e.push(n)
                        }
                        return e
                    }
                ))
            }

            static findDeviceById(t) {
                return ai(this, void 0, void 0, (function* () {
                        const e = yield ui.listVideoInputDevices();
                        if (e) {
                            return e.find((e => e.deviceId === t))
                        }
                    }
                ))
            }

            static cleanVideoSource(t) {
                if (t) {
                    try {
                        t.srcObject = null
                    } catch (e) {
                        t.src = ""
                    }
                    t && t.removeAttribute("src")
                }
            }

            static releaseAllStreams() {
                0 !== ui.streamTracker.length && ui.streamTracker.forEach((t => {
                        t.getTracks().forEach((t => t.stop()))
                    }
                )),
                    ui.streamTracker = []
            }

            static playVideoOnLoadAsync(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        return !!(yield ui.tryPlayVideo(t)) || new Promise(((r, n) => {
                                const o = setTimeout((() => {
                                            ui.isVideoPlaying(t) || (n(!1),
                                                t.removeEventListener("canplay", i))
                                        }
                                    ), e)
                                    , i = () => {
                                        ui.tryPlayVideo(t).then((e => {
                                                clearTimeout(o),
                                                    t.removeEventListener("canplay", i),
                                                    r(e)
                                            }
                                        ))
                                    }
                                ;
                                t.addEventListener("canplay", i)
                            }
                        ))
                    }
                ))
            }

            static attachStreamToVideo(t, e, r = 5e3) {
                return ai(this, void 0, void 0, (function* () {
                        const n = ui.prepareVideoElement(e);
                        return ui.addVideoSource(n, t),
                            yield ui.playVideoOnLoadAsync(n, r),
                            n
                    }
                ))
            }

            static _waitImageLoad(t) {
                return new Promise(((e, r) => {
                        const n = setTimeout((() => {
                                    ui.isImageLoaded(t) || (t.removeEventListener("load", o),
                                        r())
                                }
                            ), 1e4)
                            , o = () => {
                                clearTimeout(n),
                                    t.removeEventListener("load", o),
                                    e()
                            }
                        ;
                        t.addEventListener("load", o)
                    }
                ))
            }

            static checkCallbackFnOrThrow(t) {
                if (!t) {
                    throw new c("`callbackFn` is a required parameter, you cannot capture results without it.")
                }
            }

            static disposeMediaStream(t) {
                t.getVideoTracks().forEach((t => t.stop())),
                    t = void 0
            }

            decode(t) {
                const e = ui.createCanvasFromMediaElement(t);
                return this.decodeFromCanvas(e)
            }

            decodeBitmap(t) {
                return this.reader.decode(t, this.hints)
            }

            decodeFromCanvas(t) {
                const e = ui.createBinaryBitmapFromCanvas(t);
                return this.decodeBitmap(e)
            }

            decodeFromImageElement(t) {
                return ai(this, void 0, void 0, (function* () {
                        if (!t) {
                            throw new c("An image element must be provided.");
                        }
                        const e = ui.prepareImageElement(t);
                        return yield this._decodeOnLoadImage(e)
                    }
                ))
            }

            decodeFromImageUrl(t) {
                return ai(this, void 0, void 0, (function* () {
                        if (!t) {
                            throw new c("An URL must be provided.");
                        }
                        const e = ui.prepareImageElement();
                        e.src = t;
                        try {
                            return yield this.decodeFromImageElement(e)
                        } finally {
                            ui.destroyImageElement(e)
                        }
                    }
                ))
            }

            decodeFromConstraints(t, e, r) {
                return ai(this, void 0, void 0, (function* () {
                        ui.checkCallbackFnOrThrow(r);
                        const n = yield this.getUserMedia(t);
                        try {
                            return yield this.decodeFromStream(n, e, r)
                        } catch (t) {
                            throw ui.disposeMediaStream(n),
                                t
                        }
                    }
                ))
            }

            decodeFromStream(t, e, r) {
                return ai(this, void 0, void 0, (function* () {
                        ui.checkCallbackFnOrThrow(r);
                        const n = this.options.tryPlayVideoTimeout
                            , o = yield ui.attachStreamToVideo(t, e, n)
                            , i = this.scan(o, r, (() => {
                                ui.disposeMediaStream(t),
                                    ui.cleanVideoSource(o)
                            }
                        ))
                            , a = t.getVideoTracks()
                            , s = Object.assign(Object.assign({}, i), {
                            stop() {
                                i.stop()
                            },
                            streamVideoConstraintsApply(t, e) {
                                return ai(this, void 0, void 0, (function* () {
                                        const r = e ? a.filter(e) : a;
                                        for (const e of r) {
                                            yield e.applyConstraints(t)
                                        }
                                    }
                                ))
                            },
                            streamVideoConstraintsGet: t => a.find(t).getConstraints(),
                            streamVideoSettingsGet: t => a.find(t).getSettings(),
                            streamVideoCapabilitiesGet: t => a.find(t).getCapabilities()
                        });
                        if (ui.mediaStreamIsTorchCompatible(t)) {
                            const t = null == a ? void 0 : a.find((t => ui.mediaStreamIsTorchCompatibleTrack(t)))
                                , e = e => ai(this, void 0, void 0, (function* () {
                                    yield ui.mediaStreamSetTorch(t, e)
                                }
                            ));
                            s.switchTorch = e,
                                s.stop = () => ai(this, void 0, void 0, (function* () {
                                        i.stop(),
                                            yield e(!1)
                                    }
                                ))
                        }
                        return s
                    }
                ))
            }

            decodeFromVideoDevice(t, e, r) {
                return ai(this, void 0, void 0, (function* () {
                        let n;
                        ui.checkCallbackFnOrThrow(r),
                            n = t ? {
                                deviceId: {
                                    exact: t
                                }
                            } : {
                                facingMode: "environment"
                            };
                        const o = {
                            video: n
                        };
                        return yield this.decodeFromConstraints(o, e, r)
                    }
                ))
            }

            decodeFromVideoElement(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        if (ui.checkCallbackFnOrThrow(e),
                            !t) {
                            throw new c("A video element must be provided.");
                        }
                        const r = ui.prepareVideoElement(t)
                            , n = this.options.tryPlayVideoTimeout;
                        return yield ui.playVideoOnLoadAsync(r, n),
                            this.scan(r, e)
                    }
                ))
            }

            decodeFromVideoUrl(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        if (ui.checkCallbackFnOrThrow(e),
                            !t) {
                            throw new c("An URL must be provided.");
                        }
                        const r = ui.prepareVideoElement();
                        r.src = t;
                        const n = this.options.tryPlayVideoTimeout;
                        yield ui.playVideoOnLoadAsync(r, n);
                        return this.scan(r, e, (() => {
                                ui.cleanVideoSource(r)
                            }
                        ))
                    }
                ))
            }

            decodeOnceFromConstraints(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        const r = yield this.getUserMedia(t);
                        return yield this.decodeOnceFromStream(r, e)
                    }
                ))
            }

            decodeOnceFromStream(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        const r = Boolean(e)
                            , n = yield ui.attachStreamToVideo(t, e);
                        try {
                            return yield this.scanOneResult(n)
                        } finally {
                            r || ui.cleanVideoSource(n)
                        }
                    }
                ))
            }

            decodeOnceFromVideoDevice(t, e) {
                return ai(this, void 0, void 0, (function* () {
                        let r;
                        r = t ? {
                            deviceId: {
                                exact: t
                            }
                        } : {
                            facingMode: "environment"
                        };
                        const n = {
                            video: r
                        };
                        return yield this.decodeOnceFromConstraints(n, e)
                    }
                ))
            }

            decodeOnceFromVideoElement(t) {
                return ai(this, void 0, void 0, (function* () {
                        if (!t) {
                            throw new c("A video element must be provided.");
                        }
                        const e = ui.prepareVideoElement(t)
                            , r = this.options.tryPlayVideoTimeout;
                        return yield ui.playVideoOnLoadAsync(e, r),
                            yield this.scanOneResult(e)
                    }
                ))
            }

            decodeOnceFromVideoUrl(t) {
                return ai(this, void 0, void 0, (function* () {
                        if (!t) {
                            throw new c("An URL must be provided.");
                        }
                        const e = ui.prepareVideoElement();
                        e.src = t;
                        const r = this.decodeOnceFromVideoElement(e);
                        try {
                            return yield r
                        } finally {
                            ui.cleanVideoSource(e)
                        }
                    }
                ))
            }

            scanOneResult(t, e = !0, r = !0, n = !0) {
                return new Promise(((o, i) => {
                        this.scan(t, ((t, a, s) => {
                                if (t) {
                                    return o(t),
                                        void s.stop();
                                }
                                if (a) {
                                    if (a instanceof V && e) {
                                        return;
                                    }
                                    if (a instanceof p && r) {
                                        return;
                                    }
                                    if (a instanceof b && n) {
                                        return;
                                    }
                                    s.stop(),
                                        i(a)
                                }
                            }
                        ))
                    }
                ))
            }

            scan(t, e, r) {
                ui.checkCallbackFnOrThrow(e);
                let n = ui.createCaptureCanvas(t)
                    , o = n.getContext("2d");
                if (!o) {
                    throw new Error("Couldn't create canvas for visual element scan.");
                }
                const i = () => {
                        o = void 0,
                            n = void 0
                    }
                ;
                let a, s = !1;
                const u = {
                        stop: () => {
                            s = !0,
                                clearTimeout(a),
                                i(),
                            r && r()
                        }
                    }
                    , c = () => {
                        if (!s) {
                            try {
                                ui.drawImageOnCanvas(o, t);
                                const r = this.decodeFromCanvas(n);
                                e(r, void 0, u),
                                    a = setTimeout(c, this.options.delayBetweenScanSuccess)
                            } catch (t) {
                                e(void 0, t, u);
                                if (t instanceof p || t instanceof b || t instanceof V) {
                                    return void (a = setTimeout(c, this.options.delayBetweenScanAttempts));
                                }
                                i(),
                                r && r(t)
                            }
                        }
                    }
                ;
                return c(),
                    u
            }

            _decodeOnLoadImage(t) {
                return ai(this, void 0, void 0, (function* () {
                        return ui.isImageLoaded(t) || (yield ui._waitImageLoad(t)),
                            this.decode(t)
                    }
                ))
            }

            getUserMedia(t) {
                return ai(this, void 0, void 0, (function* () {
                        const e = yield navigator.mediaDevices.getUserMedia(t);
                        return ui.streamTracker.push(e),
                            e
                    }
                ))
            }
        }

        ui.streamTracker = [];
        const ci = "http://www.w3.org/2000/svg";

        class fi {
            constructor(t) {
                if ("string" == typeof t) {
                    const e = document.getElementById(t);
                    if (!e) {
                        throw new Error(`Could not find a Container element with '${t}'.`);
                    }
                    this.containerElement = e
                } else {
                    this.containerElement = t
                }
            }

            write(t, e, r, n) {
                if (0 === t.length) {
                    throw new h("Found empty contents");
                }
                if (e < 0 || r < 0) {
                    throw new h("Requested dimensions are too small: " + e + "x" + r);
                }
                const o = n && void 0 !== n.get(uo.MARGIN) ? Number.parseInt(n.get(uo.MARGIN).toString(), 10)
                    : fi.QUIET_ZONE_SIZE
                    , i = this.encode(n, t);
                return this.renderResult(i, e, r, o)
            }

            createSVGElement(t, e) {
                const r = document.createElementNS(fi.SVG_NS, "svg");
                return r.setAttributeNS(ci, "width", e.toString()),
                    r.setAttributeNS(ci, "height", t.toString()),
                    r
            }

            createSvgPathPlaceholderElement(t, e) {
                const r = document.createElementNS(fi.SVG_NS, "path");
                return r.setAttributeNS(ci, "d", `M0 0h${t}v${e}H0z`),
                    r.setAttributeNS(ci, "fill", "none"),
                    r
            }

            createSvgRectElement(t, e, r, n) {
                const o = document.createElementNS(fi.SVG_NS, "rect");
                return o.setAttributeNS(ci, "x", t.toString()),
                    o.setAttributeNS(ci, "y", e.toString()),
                    o.setAttributeNS(ci, "height", r.toString()),
                    o.setAttributeNS(ci, "width", n.toString()),
                    o.setAttributeNS(ci, "fill", "#000000"),
                    o
            }

            encode(t, e) {
                let r = Pr.L;
                if (t && void 0 !== t.get(uo.ERROR_CORRECTION)) {
                    const e = t.get(uo.ERROR_CORRECTION).toString();
                    r = Pr.fromString(e)
                }
                return mo.encode(e, r, t)
            }

            renderResult(t, e, r, n) {
                const o = t.getMatrix();
                if (null === o) {
                    throw new gt;
                }
                const i = o.getWidth()
                    , a = o.getHeight()
                    , s = i + 2 * n
                    , u = a + 2 * n
                    , c = Math.max(e, s)
                    , f = Math.max(r, u)
                    , h = Math.min(Math.floor(c / s), Math.floor(f / u))
                    , l = Math.floor((c - i * h) / 2)
                    , d = Math.floor((f - a * h) / 2)
                    , p = this.createSVGElement(c, f)
                    , g = this.createSvgPathPlaceholderElement(e, r);
                p.appendChild(g),
                    this.containerElement.appendChild(p);
                for (let t = 0, e = d; t < a; t++,
                    e += h) {
                    for (let r = 0, n = l; r < i; r++,
                        n += h) {
                        if (1 === o.get(r, t)) {
                            const t = this.createSvgRectElement(n, e, h, h);
                            p.appendChild(t)
                        }
                    }
                }
                return p
            }
        }

        fi.QUIET_ZONE_SIZE = 4,
            fi.SVG_NS = "http://www.w3.org/2000/svg";
        const hi = "http://www.w3.org/2000/svg";

        class li {
            write(t, e, r, n) {
                if (0 === t.length) {
                    throw new h("Found empty contents");
                }
                if (e < 0 || r < 0) {
                    throw new h("Requested dimensions are too small: " + e + "x" + r);
                }
                let o = Pr.L
                    , i = li.QUIET_ZONE_SIZE;
                if (n) {
                    if (void 0 !== n.get(uo.ERROR_CORRECTION)) {
                        const t = n.get(uo.ERROR_CORRECTION).toString();
                        o = Pr.fromString(t)
                    }
                    void 0 !== n.get(uo.MARGIN) && (i = Number.parseInt(n.get(uo.MARGIN).toString(), 10))
                }
                const a = mo.encode(t, o, n);
                return this.renderResult(a, e, r, i)
            }

            writeToDom(t, e, r, n, o) {
                if ("string" == typeof t) {
                    const e = document.querySelector(t);
                    if (!e) {
                        throw new Error("Could no find the target HTML element.");
                    }
                    t = e
                }
                const i = this.write(e, r, n, o);
                t instanceof HTMLElement && t.appendChild(i)
            }

            renderResult(t, e, r, n) {
                const o = t.getMatrix();
                if (null === o) {
                    throw new gt;
                }
                const i = o.getWidth()
                    , a = o.getHeight()
                    , s = i + 2 * n
                    , u = a + 2 * n
                    , c = Math.max(e, s)
                    , f = Math.max(r, u)
                    , h = Math.min(Math.floor(c / s), Math.floor(f / u))
                    , l = Math.floor((c - i * h) / 2)
                    , d = Math.floor((f - a * h) / 2)
                    , p = this.createSVGElement(c, f);
                for (let t = 0, e = d; t < a; t++,
                    e += h) {
                    for (let r = 0, n = l; r < i; r++,
                        n += h) {
                        if (1 === o.get(r, t)) {
                            const t = this.createSvgRectElement(n, e, h, h);
                            p.appendChild(t)
                        }
                    }
                }
                return p
            }

            createSVGElement(t, e) {
                const r = document.createElementNS(hi, "svg")
                    , n = t.toString()
                    , o = e.toString();
                return r.setAttribute("height", o),
                    r.setAttribute("width", n),
                    r.setAttribute("viewBox", "0 0 " + n + " " + o),
                    r
            }

            createSvgRectElement(t, e, r, n) {
                const o = document.createElementNS(hi, "rect");
                return o.setAttribute("x", t.toString()),
                    o.setAttribute("y", e.toString()),
                    o.setAttribute("height", r.toString()),
                    o.setAttribute("width", n.toString()),
                    o.setAttribute("fill", "#000000"),
                    o
            }
        }

        li.QUIET_ZONE_SIZE = 4,
            t.BarcodeFormat = rt,
            t.BrowserAztecCodeReader = class extends ui {
                constructor(t, e) {
                    super(new Mt, t, e)
                }
            }
            ,
            t.BrowserCodeReader = ui,
            t.BrowserCodeSvgWriter = fi,
            t.BrowserDatamatrixCodeReader = class extends ui {
                constructor(t, e) {
                    super(new Nr, t, e)
                }
            }
            ,
            t.BrowserMultiFormatOneDReader = class extends ui {
                constructor(t, e) {
                    super(new pr(t), t, e)
                }
            }
            ,
            t.BrowserMultiFormatReader = class extends ui {
                constructor(t, e) {
                    const r = new no;
                    r.setHints(t),
                        super(r, t, e),
                        this.reader = r
                }

                set possibleFormats(t) {
                    this.hints.set(O.POSSIBLE_FORMATS, t),
                        this.reader.setHints(this.hints)
                }

                decodeBitmap(t) {
                    return this.reader.decodeWithState(t)
                }

                setHints(t) {
                    this.hints = t,
                        this.reader.setHints(this.hints)
                }
            }
            ,
            t.BrowserPDF417Reader = class extends ui {
                constructor(t, e) {
                    super(new $n, t, e)
                }
            }
            ,
            t.BrowserQRCodeReader = class extends ui {
                constructor(t, e) {
                    super(new fn, t, e)
                }
            }
            ,
            t.BrowserQRCodeSvgWriter = li,
            t.HTMLCanvasElementLuminanceSource = ni,
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
    }
));
