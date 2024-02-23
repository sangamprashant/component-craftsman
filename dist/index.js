function Qr(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var tr = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function un() {
  if (Nr)
    return O;
  Nr = 1;
  var f = Symbol.for("react.element"), p = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), I = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.iterator;
  function V(r) {
    return r === null || typeof r != "object" ? null : (r = k && r[k] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, W = {};
  function U(r, o, s) {
    this.props = r, this.context = o, this.refs = W, this.updater = s || L;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(r, o) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, o, "setState");
  }, U.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = U.prototype;
  function ae(r, o, s) {
    this.props = r, this.context = o, this.refs = W, this.updater = s || L;
  }
  var q = ae.prototype = new Q();
  q.constructor = ae, K(q, U.prototype), q.isPureReactComponent = !0;
  var Y = Array.isArray, u = Object.prototype.hasOwnProperty, G = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function se(r, o, s) {
    var d, c = {}, h = null, m = null;
    if (o != null)
      for (d in o.ref !== void 0 && (m = o.ref), o.key !== void 0 && (h = "" + o.key), o)
        u.call(o, d) && !ie.hasOwnProperty(d) && (c[d] = o[d]);
    var y = arguments.length - 2;
    if (y === 1)
      c.children = s;
    else if (1 < y) {
      for (var b = Array(y), T = 0; T < y; T++)
        b[T] = arguments[T + 2];
      c.children = b;
    }
    if (r && r.defaultProps)
      for (d in y = r.defaultProps, y)
        c[d] === void 0 && (c[d] = y[d]);
    return { $$typeof: f, type: r, key: h, ref: m, props: c, _owner: G.current };
  }
  function de(r, o) {
    return { $$typeof: f, type: r.type, key: o, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function fe(r) {
    return typeof r == "object" && r !== null && r.$$typeof === f;
  }
  function pe(r) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(s) {
      return o[s];
    });
  }
  var ve = /\/+/g;
  function le(r, o) {
    return typeof r == "object" && r !== null && r.key != null ? pe("" + r.key) : o.toString(36);
  }
  function oe(r, o, s, d, c) {
    var h = typeof r;
    (h === "undefined" || h === "boolean") && (r = null);
    var m = !1;
    if (r === null)
      m = !0;
    else
      switch (h) {
        case "string":
        case "number":
          m = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case f:
            case p:
              m = !0;
          }
      }
    if (m)
      return m = r, c = c(m), r = d === "" ? "." + le(m, 0) : d, Y(c) ? (s = "", r != null && (s = r.replace(ve, "$&/") + "/"), oe(c, o, s, "", function(T) {
        return T;
      })) : c != null && (fe(c) && (c = de(c, s + (!c.key || m && m.key === c.key ? "" : ("" + c.key).replace(ve, "$&/") + "/") + r)), o.push(c)), 1;
    if (m = 0, d = d === "" ? "." : d + ":", Y(r))
      for (var y = 0; y < r.length; y++) {
        h = r[y];
        var b = d + le(h, y);
        m += oe(h, o, s, b, c);
      }
    else if (b = V(r), typeof b == "function")
      for (r = b.call(r), y = 0; !(h = r.next()).done; )
        h = h.value, b = d + le(h, y++), m += oe(h, o, s, b, c);
    else if (h === "object")
      throw o = String(r), Error("Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
    return m;
  }
  function re(r, o, s) {
    if (r == null)
      return r;
    var d = [], c = 0;
    return oe(r, d, "", "", function(h) {
      return o.call(s, h, c++);
    }), d;
  }
  function X(r) {
    if (r._status === -1) {
      var o = r._result;
      o = o(), o.then(function(s) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = s);
      }, function(s) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = s);
      }), r._status === -1 && (r._status = 0, r._result = o);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var g = { current: null }, ue = { transition: null }, ye = { ReactCurrentDispatcher: g, ReactCurrentBatchConfig: ue, ReactCurrentOwner: G };
  return O.Children = { map: re, forEach: function(r, o, s) {
    re(r, function() {
      o.apply(this, arguments);
    }, s);
  }, count: function(r) {
    var o = 0;
    return re(r, function() {
      o++;
    }), o;
  }, toArray: function(r) {
    return re(r, function(o) {
      return o;
    }) || [];
  }, only: function(r) {
    if (!fe(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, O.Component = U, O.Fragment = $, O.Profiler = A, O.PureComponent = ae, O.StrictMode = R, O.Suspense = F, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ye, O.cloneElement = function(r, o, s) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var d = K({}, r.props), c = r.key, h = r.ref, m = r._owner;
    if (o != null) {
      if (o.ref !== void 0 && (h = o.ref, m = G.current), o.key !== void 0 && (c = "" + o.key), r.type && r.type.defaultProps)
        var y = r.type.defaultProps;
      for (b in o)
        u.call(o, b) && !ie.hasOwnProperty(b) && (d[b] = o[b] === void 0 && y !== void 0 ? y[b] : o[b]);
    }
    var b = arguments.length - 2;
    if (b === 1)
      d.children = s;
    else if (1 < b) {
      y = Array(b);
      for (var T = 0; T < b; T++)
        y[T] = arguments[T + 2];
      d.children = y;
    }
    return { $$typeof: f, type: r.type, key: c, ref: h, props: d, _owner: m };
  }, O.createContext = function(r) {
    return r = { $$typeof: j, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: E, _context: r }, r.Consumer = r;
  }, O.createElement = se, O.createFactory = function(r) {
    var o = se.bind(null, r);
    return o.type = r, o;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(r) {
    return { $$typeof: S, render: r };
  }, O.isValidElement = fe, O.lazy = function(r) {
    return { $$typeof: w, _payload: { _status: -1, _result: r }, _init: X };
  }, O.memo = function(r, o) {
    return { $$typeof: I, type: r, compare: o === void 0 ? null : o };
  }, O.startTransition = function(r) {
    var o = ue.transition;
    ue.transition = {};
    try {
      r();
    } finally {
      ue.transition = o;
    }
  }, O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, O.useCallback = function(r, o) {
    return g.current.useCallback(r, o);
  }, O.useContext = function(r) {
    return g.current.useContext(r);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(r) {
    return g.current.useDeferredValue(r);
  }, O.useEffect = function(r, o) {
    return g.current.useEffect(r, o);
  }, O.useId = function() {
    return g.current.useId();
  }, O.useImperativeHandle = function(r, o, s) {
    return g.current.useImperativeHandle(r, o, s);
  }, O.useInsertionEffect = function(r, o) {
    return g.current.useInsertionEffect(r, o);
  }, O.useLayoutEffect = function(r, o) {
    return g.current.useLayoutEffect(r, o);
  }, O.useMemo = function(r, o) {
    return g.current.useMemo(r, o);
  }, O.useReducer = function(r, o, s) {
    return g.current.useReducer(r, o, s);
  }, O.useRef = function(r) {
    return g.current.useRef(r);
  }, O.useState = function(r) {
    return g.current.useState(r);
  }, O.useSyncExternalStore = function(r, o, s) {
    return g.current.useSyncExternalStore(r, o, s);
  }, O.useTransition = function() {
    return g.current.useTransition();
  }, O.version = "18.2.0", O;
}
var Ce = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ce.exports;
var Ur;
function sn() {
  return Ur || (Ur = 1, function(f, p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var $ = "18.2.0", R = Symbol.for("react.element"), A = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), I = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), U = Symbol.iterator, Q = "@@iterator";
      function ae(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = U && e[U] || e[Q];
        return typeof t == "function" ? t : null;
      }
      var q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Y = {
        transition: null
      }, u = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {}, se = null;
      function de(e) {
        se = e;
      }
      ie.setExtraStackFrame = function(e) {
        se = e;
      }, ie.getCurrentStack = null, ie.getStackAddendum = function() {
        var e = "";
        se && (e += se);
        var t = ie.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var fe = !1, pe = !1, ve = !1, le = !1, oe = !1, re = {
        ReactCurrentDispatcher: q,
        ReactCurrentBatchConfig: Y,
        ReactCurrentOwner: G
      };
      re.ReactDebugCurrentFrame = ie, re.ReactCurrentActQueue = u;
      function X(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          ue("warn", e, n);
        }
      }
      function g(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          ue("error", e, n);
        }
      }
      function ue(e, t, n) {
        {
          var a = re.ReactDebugCurrentFrame, i = a.getStackAddendum();
          i !== "" && (t += "%s", n = n.concat([i]));
          var _ = n.map(function(v) {
            return String(v);
          });
          _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
        }
      }
      var ye = {};
      function r(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", i = a + "." + t;
          if (ye[i])
            return;
          g("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), ye[i] = !0;
        }
      }
      var o = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          r(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, a) {
          r(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, a) {
          r(e, "setState");
        }
      }, s = Object.assign, d = {};
      Object.freeze(d);
      function c(e, t, n) {
        this.props = e, this.context = t, this.refs = d, this.updater = n || o;
      }
      c.prototype.isReactComponent = {}, c.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, c.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, m = function(e, t) {
          Object.defineProperty(c.prototype, e, {
            get: function() {
              X("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var y in h)
          h.hasOwnProperty(y) && m(y, h[y]);
      }
      function b() {
      }
      b.prototype = c.prototype;
      function T(e, t, n) {
        this.props = e, this.context = t, this.refs = d, this.updater = n || o;
      }
      var P = T.prototype = new b();
      P.constructor = T, s(P, c.prototype), P.isPureReactComponent = !0;
      function ee() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var l = Array.isArray;
      function te(e) {
        return l(e);
      }
      function he(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function we(e) {
        try {
          return ar(e), !1;
        } catch {
          return !0;
        }
      }
      function ar(e) {
        return "" + e;
      }
      function Oe(e) {
        if (we(e))
          return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", he(e)), ar(e);
      }
      function nt(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var i = t.displayName || t.name || "";
        return i !== "" ? n + "(" + i + ")" : n;
      }
      function ir(e) {
        return e.displayName || "Context";
      }
      function me(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case E:
            return "Fragment";
          case A:
            return "Portal";
          case S:
            return "Profiler";
          case j:
            return "StrictMode";
          case k:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              var t = e;
              return ir(t) + ".Consumer";
            case F:
              var n = e;
              return ir(n._context) + ".Provider";
            case w:
              return nt(e, e.render, "ForwardRef");
            case L:
              var a = e.displayName || null;
              return a !== null ? a : me(e.type) || "Memo";
            case K: {
              var i = e, _ = i._payload, v = i._init;
              try {
                return me(v(_));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ee = Object.prototype.hasOwnProperty, ur = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, cr, Le;
      Le = {};
      function fr(e) {
        if (Ee.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function lr(e) {
        if (Ee.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function ot(e, t) {
        var n = function() {
          sr || (sr = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function at(e, t) {
        var n = function() {
          cr || (cr = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function it(e) {
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var t = me(G.current.type);
          Le[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Le[t] = !0);
        }
      }
      var Ye = function(e, t, n, a, i, _, v) {
        var C = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: v,
          // Record the component responsible for creating this element.
          _owner: _
        };
        return C._store = {}, Object.defineProperty(C._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(C, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(C, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
      };
      function ut(e, t, n) {
        var a, i = {}, _ = null, v = null, C = null, x = null;
        if (t != null) {
          fr(t) && (v = t.ref, it(t)), lr(t) && (Oe(t.key), _ = "" + t.key), C = t.__self === void 0 ? null : t.__self, x = t.__source === void 0 ? null : t.__source;
          for (a in t)
            Ee.call(t, a) && !ur.hasOwnProperty(a) && (i[a] = t[a]);
        }
        var N = arguments.length - 2;
        if (N === 1)
          i.children = n;
        else if (N > 1) {
          for (var z = Array(N), B = 0; B < N; B++)
            z[B] = arguments[B + 2];
          Object.freeze && Object.freeze(z), i.children = z;
        }
        if (e && e.defaultProps) {
          var H = e.defaultProps;
          for (a in H)
            i[a] === void 0 && (i[a] = H[a]);
        }
        if (_ || v) {
          var J = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && ot(i, J), v && at(i, J);
        }
        return Ye(e, _, v, C, x, G.current, i);
      }
      function st(e, t) {
        var n = Ye(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function ct(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, i = s({}, e.props), _ = e.key, v = e.ref, C = e._self, x = e._source, N = e._owner;
        if (t != null) {
          fr(t) && (v = t.ref, N = G.current), lr(t) && (Oe(t.key), _ = "" + t.key);
          var z;
          e.type && e.type.defaultProps && (z = e.type.defaultProps);
          for (a in t)
            Ee.call(t, a) && !ur.hasOwnProperty(a) && (t[a] === void 0 && z !== void 0 ? i[a] = z[a] : i[a] = t[a]);
        }
        var B = arguments.length - 2;
        if (B === 1)
          i.children = n;
        else if (B > 1) {
          for (var H = Array(B), J = 0; J < B; J++)
            H[J] = arguments[J + 2];
          i.children = H;
        }
        return Ye(e.type, _, v, C, x, N, i);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === R;
      }
      var dr = ".", ft = ":";
      function lt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(i) {
          return n[i];
        });
        return "$" + a;
      }
      var pr = !1, dt = /\/+/g;
      function vr(e) {
        return e.replace(dt, "$&/");
      }
      function We(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), lt("" + e.key)) : t.toString(36);
      }
      function Pe(e, t, n, a, i) {
        var _ = typeof e;
        (_ === "undefined" || _ === "boolean") && (e = null);
        var v = !1;
        if (e === null)
          v = !0;
        else
          switch (_) {
            case "string":
            case "number":
              v = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case R:
                case A:
                  v = !0;
              }
          }
        if (v) {
          var C = e, x = i(C), N = a === "" ? dr + We(C, 0) : a;
          if (te(x)) {
            var z = "";
            N != null && (z = vr(N) + "/"), Pe(x, t, z, "", function(an) {
              return an;
            });
          } else
            x != null && (be(x) && (x.key && (!C || C.key !== x.key) && Oe(x.key), x = st(
              x,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (x.key && (!C || C.key !== x.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                vr("" + x.key) + "/"
              ) : "") + N
            )), t.push(x));
          return 1;
        }
        var B, H, J = 0, Z = a === "" ? dr : a + ft;
        if (te(e))
          for (var Me = 0; Me < e.length; Me++)
            B = e[Me], H = Z + We(B, Me), J += Pe(B, t, n, H, i);
        else {
          var Ge = ae(e);
          if (typeof Ge == "function") {
            var Lr = e;
            Ge === Lr.entries && (pr || X("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pr = !0);
            for (var nn = Ge.call(Lr), Yr, on = 0; !(Yr = nn.next()).done; )
              B = Yr.value, H = Z + We(B, on++), J += Pe(B, t, n, H, i);
          } else if (_ === "object") {
            var Wr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Wr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Wr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return J;
      }
      function ke(e, t, n) {
        if (e == null)
          return e;
        var a = [], i = 0;
        return Pe(e, a, "", "", function(_) {
          return t.call(n, _, i++);
        }), a;
      }
      function pt(e) {
        var t = 0;
        return ke(e, function() {
          t++;
        }), t;
      }
      function vt(e, t, n) {
        ke(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function yt(e) {
        return ke(e, function(t) {
          return t;
        }) || [];
      }
      function mt(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ht(e) {
        var t = {
          $$typeof: I,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: F,
          _context: t
        };
        var n = !1, a = !1, i = !1;
        {
          var _ = {
            $$typeof: I,
            _context: t
          };
          Object.defineProperties(_, {
            Provider: {
              get: function() {
                return a || (a = !0, g("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(v) {
                t.Provider = v;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(v) {
                t._currentValue = v;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(v) {
                t._currentValue2 = v;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(v) {
                t._threadCount = v;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, g("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(v) {
                i || (X("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", v), i = !0);
              }
            }
          }), t.Consumer = _;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var Re = -1, Ne = 0, yr = 1, bt = 2;
      function gt(e) {
        if (e._status === Re) {
          var t = e._result, n = t();
          if (n.then(function(_) {
            if (e._status === Ne || e._status === Re) {
              var v = e;
              v._status = yr, v._result = _;
            }
          }, function(_) {
            if (e._status === Ne || e._status === Re) {
              var v = e;
              v._status = bt, v._result = _;
            }
          }), e._status === Re) {
            var a = e;
            a._status = Ne, a._result = n;
          }
        }
        if (e._status === yr) {
          var i = e._result;
          return i === void 0 && g(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || g(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function _t(e) {
        var t = {
          // We use these fields to store the result.
          _status: Re,
          _result: e
        }, n = {
          $$typeof: K,
          _payload: t,
          _init: gt
        };
        {
          var a, i;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(_) {
                g("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = _, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(_) {
                g("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = _, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Et(e) {
        e != null && e.$$typeof === L ? g("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? g("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && g("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && g("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: w,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      var mr;
      mr = Symbol.for("react.module.reference");
      function hr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === E || e === S || oe || e === j || e === k || e === V || le || e === W || fe || pe || ve || typeof e == "object" && e !== null && (e.$$typeof === K || e.$$typeof === L || e.$$typeof === F || e.$$typeof === I || e.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === mr || e.getModuleId !== void 0));
      }
      function Rt(e, t) {
        hr(e) || g("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: L,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(i) {
              a = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return n;
      }
      function ne() {
        var e = q.current;
        return e === null && g(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function Tt(e) {
        var t = ne();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? g("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && g("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function Ct(e) {
        var t = ne();
        return t.useState(e);
      }
      function St(e, t, n) {
        var a = ne();
        return a.useReducer(e, t, n);
      }
      function wt(e) {
        var t = ne();
        return t.useRef(e);
      }
      function Ot(e, t) {
        var n = ne();
        return n.useEffect(e, t);
      }
      function Pt(e, t) {
        var n = ne();
        return n.useInsertionEffect(e, t);
      }
      function kt(e, t) {
        var n = ne();
        return n.useLayoutEffect(e, t);
      }
      function At(e, t) {
        var n = ne();
        return n.useCallback(e, t);
      }
      function jt(e, t) {
        var n = ne();
        return n.useMemo(e, t);
      }
      function xt(e, t, n) {
        var a = ne();
        return a.useImperativeHandle(e, t, n);
      }
      function It(e, t) {
        {
          var n = ne();
          return n.useDebugValue(e, t);
        }
      }
      function $t() {
        var e = ne();
        return e.useTransition();
      }
      function Dt(e) {
        var t = ne();
        return t.useDeferredValue(e);
      }
      function Mt() {
        var e = ne();
        return e.useId();
      }
      function Ft(e, t, n) {
        var a = ne();
        return a.useSyncExternalStore(e, t, n);
      }
      var Te = 0, br, gr, _r, Er, Rr, Tr, Cr;
      function Sr() {
      }
      Sr.__reactDisabledLog = !0;
      function Lt() {
        {
          if (Te === 0) {
            br = console.log, gr = console.info, _r = console.warn, Er = console.error, Rr = console.group, Tr = console.groupCollapsed, Cr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Sr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Te++;
        }
      }
      function Yt() {
        {
          if (Te--, Te === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: s({}, e, {
                value: br
              }),
              info: s({}, e, {
                value: gr
              }),
              warn: s({}, e, {
                value: _r
              }),
              error: s({}, e, {
                value: Er
              }),
              group: s({}, e, {
                value: Rr
              }),
              groupCollapsed: s({}, e, {
                value: Tr
              }),
              groupEnd: s({}, e, {
                value: Cr
              })
            });
          }
          Te < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ue = re.ReactCurrentDispatcher, Ve;
      function Ae(e, t, n) {
        {
          if (Ve === void 0)
            try {
              throw Error();
            } catch (i) {
              var a = i.stack.trim().match(/\n( *(at )?)/);
              Ve = a && a[1] || "";
            }
          return `
` + Ve + e;
        }
      }
      var qe = !1, je;
      {
        var Wt = typeof WeakMap == "function" ? WeakMap : Map;
        je = new Wt();
      }
      function wr(e, t) {
        if (!e || qe)
          return "";
        {
          var n = je.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        qe = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _;
        _ = Ue.current, Ue.current = null, Lt();
        try {
          if (t) {
            var v = function() {
              throw Error();
            };
            if (Object.defineProperty(v.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(v, []);
              } catch (Z) {
                a = Z;
              }
              Reflect.construct(e, [], v);
            } else {
              try {
                v.call();
              } catch (Z) {
                a = Z;
              }
              e.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Z) {
              a = Z;
            }
            e();
          }
        } catch (Z) {
          if (Z && a && typeof Z.stack == "string") {
            for (var C = Z.stack.split(`
`), x = a.stack.split(`
`), N = C.length - 1, z = x.length - 1; N >= 1 && z >= 0 && C[N] !== x[z]; )
              z--;
            for (; N >= 1 && z >= 0; N--, z--)
              if (C[N] !== x[z]) {
                if (N !== 1 || z !== 1)
                  do
                    if (N--, z--, z < 0 || C[N] !== x[z]) {
                      var B = `
` + C[N].replace(" at new ", " at ");
                      return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && je.set(e, B), B;
                    }
                  while (N >= 1 && z >= 0);
                break;
              }
          }
        } finally {
          qe = !1, Ue.current = _, Yt(), Error.prepareStackTrace = i;
        }
        var H = e ? e.displayName || e.name : "", J = H ? Ae(H) : "";
        return typeof e == "function" && je.set(e, J), J;
      }
      function Nt(e, t, n) {
        return wr(e, !1);
      }
      function Ut(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function xe(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return wr(e, Ut(e));
        if (typeof e == "string")
          return Ae(e);
        switch (e) {
          case k:
            return Ae("Suspense");
          case V:
            return Ae("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case w:
              return Nt(e.render);
            case L:
              return xe(e.type, t, n);
            case K: {
              var a = e, i = a._payload, _ = a._init;
              try {
                return xe(_(i), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var Or = {}, Pr = re.ReactDebugCurrentFrame;
      function Ie(e) {
        if (e) {
          var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
          Pr.setExtraStackFrame(n);
        } else
          Pr.setExtraStackFrame(null);
      }
      function Vt(e, t, n, a, i) {
        {
          var _ = Function.call.bind(Ee);
          for (var v in e)
            if (_(e, v)) {
              var C = void 0;
              try {
                if (typeof e[v] != "function") {
                  var x = Error((a || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw x.name = "Invariant Violation", x;
                }
                C = e[v](t, v, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (N) {
                C = N;
              }
              C && !(C instanceof Error) && (Ie(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, v, typeof C), Ie(null)), C instanceof Error && !(C.message in Or) && (Or[C.message] = !0, Ie(i), g("Failed %s type: %s", n, C.message), Ie(null));
            }
        }
      }
      function ge(e) {
        if (e) {
          var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
          de(n);
        } else
          de(null);
      }
      var ze;
      ze = !1;
      function kr() {
        if (G.current) {
          var e = me(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function qt(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function zt(e) {
        return e != null ? qt(e.__source) : "";
      }
      var Ar = {};
      function Bt(e) {
        var t = kr();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function jr(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Bt(t);
          if (!Ar[n]) {
            Ar[n] = !0;
            var a = "";
            e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + me(e._owner.type) + "."), ge(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ge(null);
          }
        }
      }
      function xr(e, t) {
        if (typeof e == "object") {
          if (te(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              be(a) && jr(a, t);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = ae(e);
            if (typeof i == "function" && i !== e.entries)
              for (var _ = i.call(e), v; !(v = _.next()).done; )
                be(v.value) && jr(v.value, t);
          }
        }
      }
      function Ir(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === L))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = me(t);
            Vt(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !ze) {
            ze = !0;
            var i = me(t);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ht(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              ge(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ge(null);
              break;
            }
          }
          e.ref !== null && (ge(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
        }
      }
      function $r(e, t, n) {
        var a = hr(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = zt(t);
          _ ? i += _ : i += kr();
          var v;
          e === null ? v = "null" : te(e) ? v = "array" : e !== void 0 && e.$$typeof === R ? (v = "<" + (me(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var C = ut.apply(this, arguments);
        if (C == null)
          return C;
        if (a)
          for (var x = 2; x < arguments.length; x++)
            xr(arguments[x], e);
        return e === E ? Ht(C) : Ir(C), C;
      }
      var Dr = !1;
      function Kt(e) {
        var t = $r.bind(null, e);
        return t.type = e, Dr || (Dr = !0, X("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return X("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Gt(e, t, n) {
        for (var a = ct.apply(this, arguments), i = 2; i < arguments.length; i++)
          xr(arguments[i], a.type);
        return Ir(a), a;
      }
      function Jt(e, t) {
        var n = Y.transition;
        Y.transition = {};
        var a = Y.transition;
        Y.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (Y.transition = n, n === null && a._updatedFibers) {
            var i = a._updatedFibers.size;
            i > 10 && X("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Mr = !1, $e = null;
      function Xt(e) {
        if ($e === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = f && f[t];
            $e = n.call(f, "timers").setImmediate;
          } catch {
            $e = function(i) {
              Mr === !1 && (Mr = !0, typeof MessageChannel > "u" && g("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _ = new MessageChannel();
              _.port1.onmessage = i, _.port2.postMessage(void 0);
            };
          }
        return $e(e);
      }
      var _e = 0, Fr = !1;
      function Qt(e) {
        {
          var t = _e;
          _e++, u.current === null && (u.current = []);
          var n = u.isBatchingLegacy, a;
          try {
            if (u.isBatchingLegacy = !0, a = e(), !n && u.didScheduleLegacyUpdate) {
              var i = u.current;
              i !== null && (u.didScheduleLegacyUpdate = !1, Ke(i));
            }
          } catch (H) {
            throw De(t), H;
          } finally {
            u.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var _ = a, v = !1, C = {
              then: function(H, J) {
                v = !0, _.then(function(Z) {
                  De(t), _e === 0 ? Be(Z, H, J) : H(Z);
                }, function(Z) {
                  De(t), J(Z);
                });
              }
            };
            return !Fr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              v || (Fr = !0, g("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), C;
          } else {
            var x = a;
            if (De(t), _e === 0) {
              var N = u.current;
              N !== null && (Ke(N), u.current = null);
              var z = {
                then: function(H, J) {
                  u.current === null ? (u.current = [], Be(x, H, J)) : H(x);
                }
              };
              return z;
            } else {
              var B = {
                then: function(H, J) {
                  H(x);
                }
              };
              return B;
            }
          }
        }
      }
      function De(e) {
        e !== _e - 1 && g("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _e = e;
      }
      function Be(e, t, n) {
        {
          var a = u.current;
          if (a !== null)
            try {
              Ke(a), Xt(function() {
                a.length === 0 ? (u.current = null, t(e)) : Be(e, t, n);
              });
            } catch (i) {
              n(i);
            }
          else
            t(e);
        }
      }
      var He = !1;
      function Ke(e) {
        if (!He) {
          He = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(t + 1), a;
          } finally {
            He = !1;
          }
        }
      }
      var Zt = $r, en = Gt, rn = Kt, tn = {
        map: ke,
        forEach: vt,
        count: pt,
        toArray: yt,
        only: mt
      };
      p.Children = tn, p.Component = c, p.Fragment = E, p.Profiler = S, p.PureComponent = T, p.StrictMode = j, p.Suspense = k, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, p.cloneElement = en, p.createContext = ht, p.createElement = Zt, p.createFactory = rn, p.createRef = ee, p.forwardRef = Et, p.isValidElement = be, p.lazy = _t, p.memo = Rt, p.startTransition = Jt, p.unstable_act = Qt, p.useCallback = At, p.useContext = Tt, p.useDebugValue = It, p.useDeferredValue = Dt, p.useEffect = Ot, p.useId = Mt, p.useImperativeHandle = xt, p.useInsertionEffect = Pt, p.useLayoutEffect = kt, p.useMemo = jt, p.useReducer = St, p.useRef = wt, p.useState = Ct, p.useSyncExternalStore = Ft, p.useTransition = $t, p.version = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ce, Ce.exports)), Ce.exports;
}
process.env.NODE_ENV === "production" ? tr.exports = un() : tr.exports = sn();
var cn = tr.exports;
const Se = /* @__PURE__ */ Qr(cn);
var nr = { exports: {} }, Fe = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function fn() {
  if (Vr)
    return D;
  Vr = 1;
  var f = typeof Symbol == "function" && Symbol.for, p = f ? Symbol.for("react.element") : 60103, $ = f ? Symbol.for("react.portal") : 60106, R = f ? Symbol.for("react.fragment") : 60107, A = f ? Symbol.for("react.strict_mode") : 60108, E = f ? Symbol.for("react.profiler") : 60114, j = f ? Symbol.for("react.provider") : 60109, S = f ? Symbol.for("react.context") : 60110, F = f ? Symbol.for("react.async_mode") : 60111, I = f ? Symbol.for("react.concurrent_mode") : 60111, w = f ? Symbol.for("react.forward_ref") : 60112, k = f ? Symbol.for("react.suspense") : 60113, V = f ? Symbol.for("react.suspense_list") : 60120, L = f ? Symbol.for("react.memo") : 60115, K = f ? Symbol.for("react.lazy") : 60116, W = f ? Symbol.for("react.block") : 60121, U = f ? Symbol.for("react.fundamental") : 60117, Q = f ? Symbol.for("react.responder") : 60118, ae = f ? Symbol.for("react.scope") : 60119;
  function q(u) {
    if (typeof u == "object" && u !== null) {
      var G = u.$$typeof;
      switch (G) {
        case p:
          switch (u = u.type, u) {
            case F:
            case I:
            case R:
            case E:
            case A:
            case k:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case S:
                case w:
                case K:
                case L:
                case j:
                  return u;
                default:
                  return G;
              }
          }
        case $:
          return G;
      }
    }
  }
  function Y(u) {
    return q(u) === I;
  }
  return D.AsyncMode = F, D.ConcurrentMode = I, D.ContextConsumer = S, D.ContextProvider = j, D.Element = p, D.ForwardRef = w, D.Fragment = R, D.Lazy = K, D.Memo = L, D.Portal = $, D.Profiler = E, D.StrictMode = A, D.Suspense = k, D.isAsyncMode = function(u) {
    return Y(u) || q(u) === F;
  }, D.isConcurrentMode = Y, D.isContextConsumer = function(u) {
    return q(u) === S;
  }, D.isContextProvider = function(u) {
    return q(u) === j;
  }, D.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === p;
  }, D.isForwardRef = function(u) {
    return q(u) === w;
  }, D.isFragment = function(u) {
    return q(u) === R;
  }, D.isLazy = function(u) {
    return q(u) === K;
  }, D.isMemo = function(u) {
    return q(u) === L;
  }, D.isPortal = function(u) {
    return q(u) === $;
  }, D.isProfiler = function(u) {
    return q(u) === E;
  }, D.isStrictMode = function(u) {
    return q(u) === A;
  }, D.isSuspense = function(u) {
    return q(u) === k;
  }, D.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === R || u === I || u === E || u === A || u === k || u === V || typeof u == "object" && u !== null && (u.$$typeof === K || u.$$typeof === L || u.$$typeof === j || u.$$typeof === S || u.$$typeof === w || u.$$typeof === U || u.$$typeof === Q || u.$$typeof === ae || u.$$typeof === W);
  }, D.typeOf = q, D;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function ln() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var f = typeof Symbol == "function" && Symbol.for, p = f ? Symbol.for("react.element") : 60103, $ = f ? Symbol.for("react.portal") : 60106, R = f ? Symbol.for("react.fragment") : 60107, A = f ? Symbol.for("react.strict_mode") : 60108, E = f ? Symbol.for("react.profiler") : 60114, j = f ? Symbol.for("react.provider") : 60109, S = f ? Symbol.for("react.context") : 60110, F = f ? Symbol.for("react.async_mode") : 60111, I = f ? Symbol.for("react.concurrent_mode") : 60111, w = f ? Symbol.for("react.forward_ref") : 60112, k = f ? Symbol.for("react.suspense") : 60113, V = f ? Symbol.for("react.suspense_list") : 60120, L = f ? Symbol.for("react.memo") : 60115, K = f ? Symbol.for("react.lazy") : 60116, W = f ? Symbol.for("react.block") : 60121, U = f ? Symbol.for("react.fundamental") : 60117, Q = f ? Symbol.for("react.responder") : 60118, ae = f ? Symbol.for("react.scope") : 60119;
    function q(l) {
      return typeof l == "string" || typeof l == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      l === R || l === I || l === E || l === A || l === k || l === V || typeof l == "object" && l !== null && (l.$$typeof === K || l.$$typeof === L || l.$$typeof === j || l.$$typeof === S || l.$$typeof === w || l.$$typeof === U || l.$$typeof === Q || l.$$typeof === ae || l.$$typeof === W);
    }
    function Y(l) {
      if (typeof l == "object" && l !== null) {
        var te = l.$$typeof;
        switch (te) {
          case p:
            var he = l.type;
            switch (he) {
              case F:
              case I:
              case R:
              case E:
              case A:
              case k:
                return he;
              default:
                var we = he && he.$$typeof;
                switch (we) {
                  case S:
                  case w:
                  case K:
                  case L:
                  case j:
                    return we;
                  default:
                    return te;
                }
            }
          case $:
            return te;
        }
      }
    }
    var u = F, G = I, ie = S, se = j, de = p, fe = w, pe = R, ve = K, le = L, oe = $, re = E, X = A, g = k, ue = !1;
    function ye(l) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(l) || Y(l) === F;
    }
    function r(l) {
      return Y(l) === I;
    }
    function o(l) {
      return Y(l) === S;
    }
    function s(l) {
      return Y(l) === j;
    }
    function d(l) {
      return typeof l == "object" && l !== null && l.$$typeof === p;
    }
    function c(l) {
      return Y(l) === w;
    }
    function h(l) {
      return Y(l) === R;
    }
    function m(l) {
      return Y(l) === K;
    }
    function y(l) {
      return Y(l) === L;
    }
    function b(l) {
      return Y(l) === $;
    }
    function T(l) {
      return Y(l) === E;
    }
    function P(l) {
      return Y(l) === A;
    }
    function ee(l) {
      return Y(l) === k;
    }
    M.AsyncMode = u, M.ConcurrentMode = G, M.ContextConsumer = ie, M.ContextProvider = se, M.Element = de, M.ForwardRef = fe, M.Fragment = pe, M.Lazy = ve, M.Memo = le, M.Portal = oe, M.Profiler = re, M.StrictMode = X, M.Suspense = g, M.isAsyncMode = ye, M.isConcurrentMode = r, M.isContextConsumer = o, M.isContextProvider = s, M.isElement = d, M.isForwardRef = c, M.isFragment = h, M.isLazy = m, M.isMemo = y, M.isPortal = b, M.isProfiler = T, M.isStrictMode = P, M.isSuspense = ee, M.isValidElementType = q, M.typeOf = Y;
  }()), M;
}
var zr;
function Zr() {
  return zr || (zr = 1, process.env.NODE_ENV === "production" ? Fe.exports = fn() : Fe.exports = ln()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Je, Br;
function dn() {
  if (Br)
    return Je;
  Br = 1;
  var f = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
  function R(E) {
    if (E == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(E);
  }
  function A() {
    try {
      if (!Object.assign)
        return !1;
      var E = new String("abc");
      if (E[5] = "de", Object.getOwnPropertyNames(E)[0] === "5")
        return !1;
      for (var j = {}, S = 0; S < 10; S++)
        j["_" + String.fromCharCode(S)] = S;
      var F = Object.getOwnPropertyNames(j).map(function(w) {
        return j[w];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var I = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        I[w] = w;
      }), Object.keys(Object.assign({}, I)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Je = A() ? Object.assign : function(E, j) {
    for (var S, F = R(E), I, w = 1; w < arguments.length; w++) {
      S = Object(arguments[w]);
      for (var k in S)
        p.call(S, k) && (F[k] = S[k]);
      if (f) {
        I = f(S);
        for (var V = 0; V < I.length; V++)
          $.call(S, I[V]) && (F[I[V]] = S[I[V]]);
      }
    }
    return F;
  }, Je;
}
var Xe, Hr;
function or() {
  if (Hr)
    return Xe;
  Hr = 1;
  var f = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xe = f, Xe;
}
var Qe, Kr;
function et() {
  return Kr || (Kr = 1, Qe = Function.call.bind(Object.prototype.hasOwnProperty)), Qe;
}
var Ze, Gr;
function pn() {
  if (Gr)
    return Ze;
  Gr = 1;
  var f = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var p = or(), $ = {}, R = et();
    f = function(E) {
      var j = "Warning: " + E;
      typeof console < "u" && console.error(j);
      try {
        throw new Error(j);
      } catch {
      }
    };
  }
  function A(E, j, S, F, I) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in E)
        if (R(E, w)) {
          var k;
          try {
            if (typeof E[w] != "function") {
              var V = Error(
                (F || "React class") + ": " + S + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw V.name = "Invariant Violation", V;
            }
            k = E[w](j, w, F, S, null, p);
          } catch (K) {
            k = K;
          }
          if (k && !(k instanceof Error) && f(
            (F || "React class") + ": type specification of " + S + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in $)) {
            $[k.message] = !0;
            var L = I ? I() : "";
            f(
              "Failed " + S + " type: " + k.message + (L ?? "")
            );
          }
        }
    }
  }
  return A.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && ($ = {});
  }, Ze = A, Ze;
}
var er, Jr;
function vn() {
  if (Jr)
    return er;
  Jr = 1;
  var f = Zr(), p = dn(), $ = or(), R = et(), A = pn(), E = function() {
  };
  process.env.NODE_ENV !== "production" && (E = function(S) {
    var F = "Warning: " + S;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  });
  function j() {
    return null;
  }
  return er = function(S, F) {
    var I = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function k(r) {
      var o = r && (I && r[I] || r[w]);
      if (typeof o == "function")
        return o;
    }
    var V = "<<anonymous>>", L = {
      array: Q("array"),
      bigint: Q("bigint"),
      bool: Q("boolean"),
      func: Q("function"),
      number: Q("number"),
      object: Q("object"),
      string: Q("string"),
      symbol: Q("symbol"),
      any: ae(),
      arrayOf: q,
      element: Y(),
      elementType: u(),
      instanceOf: G,
      node: fe(),
      objectOf: se,
      oneOf: ie,
      oneOfType: de,
      shape: ve,
      exact: le
    };
    function K(r, o) {
      return r === o ? r !== 0 || 1 / r === 1 / o : r !== r && o !== o;
    }
    function W(r, o) {
      this.message = r, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function U(r) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, s = 0;
      function d(h, m, y, b, T, P, ee) {
        if (b = b || V, P = P || y, ee !== $) {
          if (F) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw l.name = "Invariant Violation", l;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = b + ":" + y;
            !o[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            s < 3 && (E(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + b + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[te] = !0, s++);
          }
        }
        return m[y] == null ? h ? m[y] === null ? new W("The " + T + " `" + P + "` is marked as required " + ("in `" + b + "`, but its value is `null`.")) : new W("The " + T + " `" + P + "` is marked as required in " + ("`" + b + "`, but its value is `undefined`.")) : null : r(m, y, b, T, P);
      }
      var c = d.bind(null, !1);
      return c.isRequired = d.bind(null, !0), c;
    }
    function Q(r) {
      function o(s, d, c, h, m, y) {
        var b = s[d], T = X(b);
        if (T !== r) {
          var P = g(b);
          return new W(
            "Invalid " + h + " `" + m + "` of type " + ("`" + P + "` supplied to `" + c + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return U(o);
    }
    function ae() {
      return U(j);
    }
    function q(r) {
      function o(s, d, c, h, m) {
        if (typeof r != "function")
          return new W("Property `" + m + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var y = s[d];
        if (!Array.isArray(y)) {
          var b = X(y);
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected an array."));
        }
        for (var T = 0; T < y.length; T++) {
          var P = r(y, T, c, h, m + "[" + T + "]", $);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return U(o);
    }
    function Y() {
      function r(o, s, d, c, h) {
        var m = o[s];
        if (!S(m)) {
          var y = X(m);
          return new W("Invalid " + c + " `" + h + "` of type " + ("`" + y + "` supplied to `" + d + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(r);
    }
    function u() {
      function r(o, s, d, c, h) {
        var m = o[s];
        if (!f.isValidElementType(m)) {
          var y = X(m);
          return new W("Invalid " + c + " `" + h + "` of type " + ("`" + y + "` supplied to `" + d + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(r);
    }
    function G(r) {
      function o(s, d, c, h, m) {
        if (!(s[d] instanceof r)) {
          var y = r.name || V, b = ye(s[d]);
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return U(o);
    }
    function ie(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? E(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : E("Invalid argument supplied to oneOf, expected an array.")), j;
      function o(s, d, c, h, m) {
        for (var y = s[d], b = 0; b < r.length; b++)
          if (K(y, r[b]))
            return null;
        var T = JSON.stringify(r, function(ee, l) {
          var te = g(l);
          return te === "symbol" ? String(l) : l;
        });
        return new W("Invalid " + h + " `" + m + "` of value `" + String(y) + "` " + ("supplied to `" + c + "`, expected one of " + T + "."));
      }
      return U(o);
    }
    function se(r) {
      function o(s, d, c, h, m) {
        if (typeof r != "function")
          return new W("Property `" + m + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var y = s[d], b = X(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected an object."));
        for (var T in y)
          if (R(y, T)) {
            var P = r(y, T, c, h, m + "." + T, $);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return U(o);
    }
    function de(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && E("Invalid argument supplied to oneOfType, expected an instance of array."), j;
      for (var o = 0; o < r.length; o++) {
        var s = r[o];
        if (typeof s != "function")
          return E(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(s) + " at index " + o + "."
          ), j;
      }
      function d(c, h, m, y, b) {
        for (var T = [], P = 0; P < r.length; P++) {
          var ee = r[P], l = ee(c, h, m, y, b, $);
          if (l == null)
            return null;
          l.data && R(l.data, "expectedType") && T.push(l.data.expectedType);
        }
        var te = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new W("Invalid " + y + " `" + b + "` supplied to " + ("`" + m + "`" + te + "."));
      }
      return U(d);
    }
    function fe() {
      function r(o, s, d, c, h) {
        return oe(o[s]) ? null : new W("Invalid " + c + " `" + h + "` supplied to " + ("`" + d + "`, expected a ReactNode."));
      }
      return U(r);
    }
    function pe(r, o, s, d, c) {
      return new W(
        (r || "React class") + ": " + o + " type `" + s + "." + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function ve(r) {
      function o(s, d, c, h, m) {
        var y = s[d], b = X(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type `" + b + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var T in r) {
          var P = r[T];
          if (typeof P != "function")
            return pe(c, h, m, T, g(P));
          var ee = P(y, T, c, h, m + "." + T, $);
          if (ee)
            return ee;
        }
        return null;
      }
      return U(o);
    }
    function le(r) {
      function o(s, d, c, h, m) {
        var y = s[d], b = X(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type `" + b + "` " + ("supplied to `" + c + "`, expected `object`."));
        var T = p({}, s[d], r);
        for (var P in T) {
          var ee = r[P];
          if (R(r, P) && typeof ee != "function")
            return pe(c, h, m, P, g(ee));
          if (!ee)
            return new W(
              "Invalid " + h + " `" + m + "` key `" + P + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(s[d], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var l = ee(y, P, c, h, m + "." + P, $);
          if (l)
            return l;
        }
        return null;
      }
      return U(o);
    }
    function oe(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(oe);
          if (r === null || S(r))
            return !0;
          var o = k(r);
          if (o) {
            var s = o.call(r), d;
            if (o !== r.entries) {
              for (; !(d = s.next()).done; )
                if (!oe(d.value))
                  return !1;
            } else
              for (; !(d = s.next()).done; ) {
                var c = d.value;
                if (c && !oe(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(r, o) {
      return r === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function X(r) {
      var o = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : re(o, r) ? "symbol" : o;
    }
    function g(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var o = X(r);
      if (o === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function ue(r) {
      var o = g(r);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function ye(r) {
      return !r.constructor || !r.constructor.name ? V : r.constructor.name;
    }
    return L.checkPropTypes = A, L.resetWarningCache = A.resetWarningCache, L.PropTypes = L, L;
  }, er;
}
var rr, Xr;
function yn() {
  if (Xr)
    return rr;
  Xr = 1;
  var f = or();
  function p() {
  }
  function $() {
  }
  return $.resetWarningCache = p, rr = function() {
    function R(j, S, F, I, w, k) {
      if (k !== f) {
        var V = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw V.name = "Invariant Violation", V;
      }
    }
    R.isRequired = R;
    function A() {
      return R;
    }
    var E = {
      array: R,
      bigint: R,
      bool: R,
      func: R,
      number: R,
      object: R,
      string: R,
      symbol: R,
      any: R,
      arrayOf: A,
      element: R,
      elementType: R,
      instanceOf: A,
      node: R,
      objectOf: A,
      oneOf: A,
      oneOfType: A,
      shape: A,
      exact: A,
      checkPropTypes: $,
      resetWarningCache: p
    };
    return E.PropTypes = E, E;
  }, rr;
}
if (process.env.NODE_ENV !== "production") {
  var mn = Zr(), hn = !0;
  nr.exports = vn()(mn.isElement, hn);
} else
  nr.exports = yn()();
var bn = nr.exports;
const ce = /* @__PURE__ */ Qr(bn), rt = ({ backgroundColor: f, primary: p, size: $, ...R }) => {
  const A = p ? "component-craftsman--primary" : "component-craftsman--secondary";
  return /* @__PURE__ */ Se.createElement(
    "button",
    {
      type: "button",
      ...R,
      style: f && { backgroundColor: f },
      className: ["component-craftsman-button", `component-craftsman--${$}`, A].join(" ")
    },
    R.label
  );
};
rt.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: ce.bool,
  /**
   * What background color to use
   */
  backgroundColor: ce.string,
  /**
   * How large should the button be?
   */
  size: ce.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: ce.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: ce.func
};
rt.defaultProps = {
  backgroundColor: null,
  primary: !1,
  size: "medium",
  onClick: void 0
};
const tt = ({
  type: f,
  value: p,
  placeholder: $,
  isValid: R,
  ...A
}) => {
  const E = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [j, S] = Se.useState(
    p ? E.test(p) : !1
  );
  return Se.useEffect(() => {
    S(E.test(p));
  }, [p]), Se.useEffect(() => {
    R && R(j);
  }, [p]), /* @__PURE__ */ Se.createElement(
    "input",
    {
      type: f,
      placeholder: $,
      value: p,
      style: {
        borderColor: p ? j ? "green" : "red" : ""
      },
      className: "component-craftsman--input white",
      ...A
    }
  );
};
tt.propTypes = {
  /**
   * Input type
   */
  type: ce.string,
  /**
   * Input value
   */
  value: ce.string.isRequired,
  /**
   * Placeholder text
   */
  placeholder: ce.string,
  /**
   * Function to handle input change
   */
  onChange: ce.func,
  /**
   * Function to return the valid status of the input
   */
  isValid: ce.func
};
tt.defaultProps = {
  type: "text",
  placeholder: "Enter email",
  onChange: void 0,
  isValid: void 0
};
export {
  rt as BasicButton,
  tt as EmailCheckInput
};
