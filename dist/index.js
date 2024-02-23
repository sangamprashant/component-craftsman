function Qr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var tr = { exports: {} }, P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function cn() {
  if (Wr)
    return P;
  Wr = 1;
  var s = Symbol.for("react.element"), l = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function q(r) {
    return r === null || typeof r != "object" ? null : (r = $ && r[$] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Y = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, W = {};
  function V(r, a, c) {
    this.props = r, this.context = a, this.refs = W, this.updater = c || Y;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(r, a) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, a, "setState");
  }, V.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = V.prototype;
  function ue(r, a, c) {
    this.props = r, this.context = a, this.refs = W, this.updater = c || Y;
  }
  var z = ue.prototype = new ee();
  z.constructor = ue, K(z, V.prototype), z.isPureReactComponent = !0;
  var N = Array.isArray, u = Object.prototype.hasOwnProperty, J = { current: null }, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(r, a, c) {
    var p, f = {}, h = null, m = null;
    if (a != null)
      for (p in a.ref !== void 0 && (m = a.ref), a.key !== void 0 && (h = "" + a.key), a)
        u.call(a, p) && !se.hasOwnProperty(p) && (f[p] = a[p]);
    var y = arguments.length - 2;
    if (y === 1)
      f.children = c;
    else if (1 < y) {
      for (var b = Array(y), T = 0; T < y; T++)
        b[T] = arguments[T + 2];
      f.children = b;
    }
    if (r && r.defaultProps)
      for (p in y = r.defaultProps, y)
        f[p] === void 0 && (f[p] = y[p]);
    return { $$typeof: s, type: r, key: h, ref: m, props: f, _owner: J.current };
  }
  function pe(r, a) {
    return { $$typeof: s, type: r.type, key: a, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function le(r) {
    return typeof r == "object" && r !== null && r.$$typeof === s;
  }
  function ve(r) {
    var a = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(c) {
      return a[c];
    });
  }
  var ye = /\/+/g;
  function de(r, a) {
    return typeof r == "object" && r !== null && r.key != null ? ve("" + r.key) : a.toString(36);
  }
  function ie(r, a, c, p, f) {
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
            case s:
            case l:
              m = !0;
          }
      }
    if (m)
      return m = r, f = f(m), r = p === "" ? "." + de(m, 0) : p, N(f) ? (c = "", r != null && (c = r.replace(ye, "$&/") + "/"), ie(f, a, c, "", function(T) {
        return T;
      })) : f != null && (le(f) && (f = pe(f, c + (!f.key || m && m.key === f.key ? "" : ("" + f.key).replace(ye, "$&/") + "/") + r)), a.push(f)), 1;
    if (m = 0, p = p === "" ? "." : p + ":", N(r))
      for (var y = 0; y < r.length; y++) {
        h = r[y];
        var b = p + de(h, y);
        m += ie(h, a, c, b, f);
      }
    else if (b = q(r), typeof b == "function")
      for (r = b.call(r), y = 0; !(h = r.next()).done; )
        h = h.value, b = p + de(h, y++), m += ie(h, a, c, b, f);
    else if (h === "object")
      throw a = String(r), Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    return m;
  }
  function ne(r, a, c) {
    if (r == null)
      return r;
    var p = [], f = 0;
    return ie(r, p, "", "", function(h) {
      return a.call(c, h, f++);
    }), p;
  }
  function Q(r) {
    if (r._status === -1) {
      var a = r._result;
      a = a(), a.then(function(c) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = c);
      }, function(c) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = c);
      }), r._status === -1 && (r._status = 0, r._result = a);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var g = { current: null }, ce = { transition: null }, me = { ReactCurrentDispatcher: g, ReactCurrentBatchConfig: ce, ReactCurrentOwner: J };
  return P.Children = { map: ne, forEach: function(r, a, c) {
    ne(r, function() {
      a.apply(this, arguments);
    }, c);
  }, count: function(r) {
    var a = 0;
    return ne(r, function() {
      a++;
    }), a;
  }, toArray: function(r) {
    return ne(r, function(a) {
      return a;
    }) || [];
  }, only: function(r) {
    if (!le(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, P.Component = V, P.Fragment = j, P.Profiler = O, P.PureComponent = ue, P.StrictMode = E, P.Suspense = M, P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, P.cloneElement = function(r, a, c) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var p = K({}, r.props), f = r.key, h = r.ref, m = r._owner;
    if (a != null) {
      if (a.ref !== void 0 && (h = a.ref, m = J.current), a.key !== void 0 && (f = "" + a.key), r.type && r.type.defaultProps)
        var y = r.type.defaultProps;
      for (b in a)
        u.call(a, b) && !se.hasOwnProperty(b) && (p[b] = a[b] === void 0 && y !== void 0 ? y[b] : a[b]);
    }
    var b = arguments.length - 2;
    if (b === 1)
      p.children = c;
    else if (1 < b) {
      y = Array(b);
      for (var T = 0; T < b; T++)
        y[T] = arguments[T + 2];
      p.children = y;
    }
    return { $$typeof: s, type: r.type, key: f, ref: h, props: p, _owner: m };
  }, P.createContext = function(r) {
    return r = { $$typeof: k, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: _, _context: r }, r.Consumer = r;
  }, P.createElement = fe, P.createFactory = function(r) {
    var a = fe.bind(null, r);
    return a.type = r, a;
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(r) {
    return { $$typeof: C, render: r };
  }, P.isValidElement = le, P.lazy = function(r) {
    return { $$typeof: w, _payload: { _status: -1, _result: r }, _init: Q };
  }, P.memo = function(r, a) {
    return { $$typeof: x, type: r, compare: a === void 0 ? null : a };
  }, P.startTransition = function(r) {
    var a = ce.transition;
    ce.transition = {};
    try {
      r();
    } finally {
      ce.transition = a;
    }
  }, P.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, P.useCallback = function(r, a) {
    return g.current.useCallback(r, a);
  }, P.useContext = function(r) {
    return g.current.useContext(r);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(r) {
    return g.current.useDeferredValue(r);
  }, P.useEffect = function(r, a) {
    return g.current.useEffect(r, a);
  }, P.useId = function() {
    return g.current.useId();
  }, P.useImperativeHandle = function(r, a, c) {
    return g.current.useImperativeHandle(r, a, c);
  }, P.useInsertionEffect = function(r, a) {
    return g.current.useInsertionEffect(r, a);
  }, P.useLayoutEffect = function(r, a) {
    return g.current.useLayoutEffect(r, a);
  }, P.useMemo = function(r, a) {
    return g.current.useMemo(r, a);
  }, P.useReducer = function(r, a, c) {
    return g.current.useReducer(r, a, c);
  }, P.useRef = function(r) {
    return g.current.useRef(r);
  }, P.useState = function(r) {
    return g.current.useState(r);
  }, P.useSyncExternalStore = function(r, a, c) {
    return g.current.useSyncExternalStore(r, a, c);
  }, P.useTransition = function() {
    return g.current.useTransition();
  }, P.version = "18.2.0", P;
}
var Se = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Se.exports;
var Ur;
function fn() {
  return Ur || (Ur = 1, function(s, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var j = "18.2.0", E = Symbol.for("react.element"), O = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), x = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), V = Symbol.iterator, ee = "@@iterator";
      function ue(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = V && e[V] || e[ee];
        return typeof t == "function" ? t : null;
      }
      var z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, N = {
        transition: null
      }, u = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, J = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {}, fe = null;
      function pe(e) {
        fe = e;
      }
      se.setExtraStackFrame = function(e) {
        fe = e;
      }, se.getCurrentStack = null, se.getStackAddendum = function() {
        var e = "";
        fe && (e += fe);
        var t = se.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var le = !1, ve = !1, ye = !1, de = !1, ie = !1, ne = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: N,
        ReactCurrentOwner: J
      };
      ne.ReactDebugCurrentFrame = se, ne.ReactCurrentActQueue = u;
      function Q(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ce("warn", e, n);
        }
      }
      function g(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ce("error", e, n);
        }
      }
      function ce(e, t, n) {
        {
          var o = ne.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (t += "%s", n = n.concat([i]));
          var R = n.map(function(v) {
            return String(v);
          });
          R.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, R);
        }
      }
      var me = {};
      function r(e, t) {
        {
          var n = e.constructor, o = n && (n.displayName || n.name) || "ReactClass", i = o + "." + t;
          if (me[i])
            return;
          g("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), me[i] = !0;
        }
      }
      var a = {
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
        enqueueReplaceState: function(e, t, n, o) {
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
        enqueueSetState: function(e, t, n, o) {
          r(e, "setState");
        }
      }, c = Object.assign, p = {};
      Object.freeze(p);
      function f(e, t, n) {
        this.props = e, this.context = t, this.refs = p, this.updater = n || a;
      }
      f.prototype.isReactComponent = {}, f.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, f.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, m = function(e, t) {
          Object.defineProperty(f.prototype, e, {
            get: function() {
              Q("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var y in h)
          h.hasOwnProperty(y) && m(y, h[y]);
      }
      function b() {
      }
      b.prototype = f.prototype;
      function T(e, t, n) {
        this.props = e, this.context = t, this.refs = p, this.updater = n || a;
      }
      var A = T.prototype = new b();
      A.constructor = T, c(A, f.prototype), A.isPureReactComponent = !0;
      function te() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var d = Array.isArray;
      function ae(e) {
        return d(e);
      }
      function be(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function we(e) {
        try {
          return or(e), !1;
        } catch {
          return !0;
        }
      }
      function or(e) {
        return "" + e;
      }
      function Oe(e) {
        if (we(e))
          return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(e)), or(e);
      }
      function ot(e, t, n) {
        var o = e.displayName;
        if (o)
          return o;
        var i = t.displayName || t.name || "";
        return i !== "" ? n + "(" + i + ")" : n;
      }
      function ir(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case _:
            return "Fragment";
          case O:
            return "Portal";
          case C:
            return "Profiler";
          case k:
            return "StrictMode";
          case $:
            return "Suspense";
          case q:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              var t = e;
              return ir(t) + ".Consumer";
            case M:
              var n = e;
              return ir(n._context) + ".Provider";
            case w:
              return ot(e, e.render, "ForwardRef");
            case Y:
              var o = e.displayName || null;
              return o !== null ? o : he(e.type) || "Memo";
            case K: {
              var i = e, R = i._payload, v = i._init;
              try {
                return he(v(R));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Re = Object.prototype.hasOwnProperty, ur = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, cr, Le;
      Le = {};
      function fr(e) {
        if (Re.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function lr(e) {
        if (Re.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function it(e, t) {
        var n = function() {
          sr || (sr = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function ut(e, t) {
        var n = function() {
          cr || (cr = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function st(e) {
        if (typeof e.ref == "string" && J.current && e.__self && J.current.stateNode !== e.__self) {
          var t = he(J.current.type);
          Le[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Le[t] = !0);
        }
      }
      var Ye = function(e, t, n, o, i, R, v) {
        var S = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: v,
          // Record the component responsible for creating this element.
          _owner: R
        };
        return S._store = {}, Object.defineProperty(S._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(S, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(S, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
      };
      function ct(e, t, n) {
        var o, i = {}, R = null, v = null, S = null, D = null;
        if (t != null) {
          fr(t) && (v = t.ref, st(t)), lr(t) && (Oe(t.key), R = "" + t.key), S = t.__self === void 0 ? null : t.__self, D = t.__source === void 0 ? null : t.__source;
          for (o in t)
            Re.call(t, o) && !ur.hasOwnProperty(o) && (i[o] = t[o]);
        }
        var U = arguments.length - 2;
        if (U === 1)
          i.children = n;
        else if (U > 1) {
          for (var B = Array(U), H = 0; H < U; H++)
            B[H] = arguments[H + 2];
          Object.freeze && Object.freeze(B), i.children = B;
        }
        if (e && e.defaultProps) {
          var G = e.defaultProps;
          for (o in G)
            i[o] === void 0 && (i[o] = G[o]);
        }
        if (R || v) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && it(i, X), v && ut(i, X);
        }
        return Ye(e, R, v, S, D, J.current, i);
      }
      function ft(e, t) {
        var n = Ye(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function lt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = c({}, e.props), R = e.key, v = e.ref, S = e._self, D = e._source, U = e._owner;
        if (t != null) {
          fr(t) && (v = t.ref, U = J.current), lr(t) && (Oe(t.key), R = "" + t.key);
          var B;
          e.type && e.type.defaultProps && (B = e.type.defaultProps);
          for (o in t)
            Re.call(t, o) && !ur.hasOwnProperty(o) && (t[o] === void 0 && B !== void 0 ? i[o] = B[o] : i[o] = t[o]);
        }
        var H = arguments.length - 2;
        if (H === 1)
          i.children = n;
        else if (H > 1) {
          for (var G = Array(H), X = 0; X < H; X++)
            G[X] = arguments[X + 2];
          i.children = G;
        }
        return Ye(e.type, R, v, S, D, U, i);
      }
      function ge(e) {
        return typeof e == "object" && e !== null && e.$$typeof === E;
      }
      var dr = ".", dt = ":";
      function pt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(i) {
          return n[i];
        });
        return "$" + o;
      }
      var pr = !1, vt = /\/+/g;
      function vr(e) {
        return e.replace(vt, "$&/");
      }
      function Ne(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), pt("" + e.key)) : t.toString(36);
      }
      function Pe(e, t, n, o, i) {
        var R = typeof e;
        (R === "undefined" || R === "boolean") && (e = null);
        var v = !1;
        if (e === null)
          v = !0;
        else
          switch (R) {
            case "string":
            case "number":
              v = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case E:
                case O:
                  v = !0;
              }
          }
        if (v) {
          var S = e, D = i(S), U = o === "" ? dr + Ne(S, 0) : o;
          if (ae(D)) {
            var B = "";
            U != null && (B = vr(U) + "/"), Pe(D, t, B, "", function(sn) {
              return sn;
            });
          } else
            D != null && (ge(D) && (D.key && (!S || S.key !== D.key) && Oe(D.key), D = ft(
              D,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (D.key && (!S || S.key !== D.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                vr("" + D.key) + "/"
              ) : "") + U
            )), t.push(D));
          return 1;
        }
        var H, G, X = 0, re = o === "" ? dr : o + dt;
        if (ae(e))
          for (var Me = 0; Me < e.length; Me++)
            H = e[Me], G = re + Ne(H, Me), X += Pe(H, t, n, G, i);
        else {
          var Ke = ue(e);
          if (typeof Ke == "function") {
            var Lr = e;
            Ke === Lr.entries && (pr || Q("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pr = !0);
            for (var on = Ke.call(Lr), Yr, un = 0; !(Yr = on.next()).done; )
              H = Yr.value, G = re + Ne(H, un++), X += Pe(H, t, n, G, i);
          } else if (R === "object") {
            var Nr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Nr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Nr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return X;
      }
      function ke(e, t, n) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return Pe(e, o, "", "", function(R) {
          return t.call(n, R, i++);
        }), o;
      }
      function yt(e) {
        var t = 0;
        return ke(e, function() {
          t++;
        }), t;
      }
      function mt(e, t, n) {
        ke(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function ht(e) {
        return ke(e, function(t) {
          return t;
        }) || [];
      }
      function bt(e) {
        if (!ge(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function gt(e) {
        var t = {
          $$typeof: x,
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
          $$typeof: M,
          _context: t
        };
        var n = !1, o = !1, i = !1;
        {
          var R = {
            $$typeof: x,
            _context: t
          };
          Object.defineProperties(R, {
            Provider: {
              get: function() {
                return o || (o = !0, g("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
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
                i || (Q("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", v), i = !0);
              }
            }
          }), t.Consumer = R;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var Te = -1, We = 0, yr = 1, Et = 2;
      function _t(e) {
        if (e._status === Te) {
          var t = e._result, n = t();
          if (n.then(function(R) {
            if (e._status === We || e._status === Te) {
              var v = e;
              v._status = yr, v._result = R;
            }
          }, function(R) {
            if (e._status === We || e._status === Te) {
              var v = e;
              v._status = Et, v._result = R;
            }
          }), e._status === Te) {
            var o = e;
            o._status = We, o._result = n;
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
      function Rt(e) {
        var t = {
          // We use these fields to store the result.
          _status: Te,
          _result: e
        }, n = {
          $$typeof: K,
          _payload: t,
          _init: _t
        };
        {
          var o, i;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(R) {
                g("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = R, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(R) {
                g("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = R, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Tt(e) {
        e != null && e.$$typeof === Y ? g("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? g("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && g("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && g("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
            set: function(o) {
              n = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var mr;
      mr = Symbol.for("react.module.reference");
      function hr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === _ || e === C || ie || e === k || e === $ || e === q || de || e === W || le || ve || ye || typeof e == "object" && e !== null && (e.$$typeof === K || e.$$typeof === Y || e.$$typeof === M || e.$$typeof === x || e.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === mr || e.getModuleId !== void 0));
      }
      function Ct(e, t) {
        hr(e) || g("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: Y,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var o;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return n;
      }
      function oe() {
        var e = z.current;
        return e === null && g(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function St(e) {
        var t = oe();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? g("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && g("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function wt(e) {
        var t = oe();
        return t.useState(e);
      }
      function Ot(e, t, n) {
        var o = oe();
        return o.useReducer(e, t, n);
      }
      function Pt(e) {
        var t = oe();
        return t.useRef(e);
      }
      function kt(e, t) {
        var n = oe();
        return n.useEffect(e, t);
      }
      function At(e, t) {
        var n = oe();
        return n.useInsertionEffect(e, t);
      }
      function jt(e, t) {
        var n = oe();
        return n.useLayoutEffect(e, t);
      }
      function xt(e, t) {
        var n = oe();
        return n.useCallback(e, t);
      }
      function $t(e, t) {
        var n = oe();
        return n.useMemo(e, t);
      }
      function It(e, t, n) {
        var o = oe();
        return o.useImperativeHandle(e, t, n);
      }
      function Dt(e, t) {
        {
          var n = oe();
          return n.useDebugValue(e, t);
        }
      }
      function Mt() {
        var e = oe();
        return e.useTransition();
      }
      function Ft(e) {
        var t = oe();
        return t.useDeferredValue(e);
      }
      function Lt() {
        var e = oe();
        return e.useId();
      }
      function Yt(e, t, n) {
        var o = oe();
        return o.useSyncExternalStore(e, t, n);
      }
      var Ce = 0, br, gr, Er, _r, Rr, Tr, Cr;
      function Sr() {
      }
      Sr.__reactDisabledLog = !0;
      function Nt() {
        {
          if (Ce === 0) {
            br = console.log, gr = console.info, Er = console.warn, _r = console.error, Rr = console.group, Tr = console.groupCollapsed, Cr = console.groupEnd;
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
          Ce++;
        }
      }
      function Wt() {
        {
          if (Ce--, Ce === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: c({}, e, {
                value: br
              }),
              info: c({}, e, {
                value: gr
              }),
              warn: c({}, e, {
                value: Er
              }),
              error: c({}, e, {
                value: _r
              }),
              group: c({}, e, {
                value: Rr
              }),
              groupCollapsed: c({}, e, {
                value: Tr
              }),
              groupEnd: c({}, e, {
                value: Cr
              })
            });
          }
          Ce < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ue = ne.ReactCurrentDispatcher, Ve;
      function Ae(e, t, n) {
        {
          if (Ve === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ve = o && o[1] || "";
            }
          return `
` + Ve + e;
        }
      }
      var qe = !1, je;
      {
        var Ut = typeof WeakMap == "function" ? WeakMap : Map;
        je = new Ut();
      }
      function wr(e, t) {
        if (!e || qe)
          return "";
        {
          var n = je.get(e);
          if (n !== void 0)
            return n;
        }
        var o;
        qe = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var R;
        R = Ue.current, Ue.current = null, Nt();
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
              } catch (re) {
                o = re;
              }
              Reflect.construct(e, [], v);
            } else {
              try {
                v.call();
              } catch (re) {
                o = re;
              }
              e.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (re) {
              o = re;
            }
            e();
          }
        } catch (re) {
          if (re && o && typeof re.stack == "string") {
            for (var S = re.stack.split(`
`), D = o.stack.split(`
`), U = S.length - 1, B = D.length - 1; U >= 1 && B >= 0 && S[U] !== D[B]; )
              B--;
            for (; U >= 1 && B >= 0; U--, B--)
              if (S[U] !== D[B]) {
                if (U !== 1 || B !== 1)
                  do
                    if (U--, B--, B < 0 || S[U] !== D[B]) {
                      var H = `
` + S[U].replace(" at new ", " at ");
                      return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && je.set(e, H), H;
                    }
                  while (U >= 1 && B >= 0);
                break;
              }
          }
        } finally {
          qe = !1, Ue.current = R, Wt(), Error.prepareStackTrace = i;
        }
        var G = e ? e.displayName || e.name : "", X = G ? Ae(G) : "";
        return typeof e == "function" && je.set(e, X), X;
      }
      function Vt(e, t, n) {
        return wr(e, !1);
      }
      function qt(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function xe(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return wr(e, qt(e));
        if (typeof e == "string")
          return Ae(e);
        switch (e) {
          case $:
            return Ae("Suspense");
          case q:
            return Ae("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case w:
              return Vt(e.render);
            case Y:
              return xe(e.type, t, n);
            case K: {
              var o = e, i = o._payload, R = o._init;
              try {
                return xe(R(i), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var Or = {}, Pr = ne.ReactDebugCurrentFrame;
      function $e(e) {
        if (e) {
          var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
          Pr.setExtraStackFrame(n);
        } else
          Pr.setExtraStackFrame(null);
      }
      function zt(e, t, n, o, i) {
        {
          var R = Function.call.bind(Re);
          for (var v in e)
            if (R(e, v)) {
              var S = void 0;
              try {
                if (typeof e[v] != "function") {
                  var D = Error((o || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw D.name = "Invariant Violation", D;
                }
                S = e[v](t, v, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (U) {
                S = U;
              }
              S && !(S instanceof Error) && ($e(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, v, typeof S), $e(null)), S instanceof Error && !(S.message in Or) && (Or[S.message] = !0, $e(i), g("Failed %s type: %s", n, S.message), $e(null));
            }
        }
      }
      function Ee(e) {
        if (e) {
          var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
          pe(n);
        } else
          pe(null);
      }
      var ze;
      ze = !1;
      function kr() {
        if (J.current) {
          var e = he(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Bt(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Ht(e) {
        return e != null ? Bt(e.__source) : "";
      }
      var Ar = {};
      function Gt(e) {
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
          var n = Gt(t);
          if (!Ar[n]) {
            Ar[n] = !0;
            var o = "";
            e && e._owner && e._owner !== J.current && (o = " It was passed a child from " + he(e._owner.type) + "."), Ee(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), Ee(null);
          }
        }
      }
      function xr(e, t) {
        if (typeof e == "object") {
          if (ae(e))
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              ge(o) && jr(o, t);
            }
          else if (ge(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = ue(e);
            if (typeof i == "function" && i !== e.entries)
              for (var R = i.call(e), v; !(v = R.next()).done; )
                ge(v.value) && jr(v.value, t);
          }
        }
      }
      function $r(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === Y))
            n = t.propTypes;
          else
            return;
          if (n) {
            var o = he(t);
            zt(n, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !ze) {
            ze = !0;
            var i = he(t);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kt(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var o = t[n];
            if (o !== "children" && o !== "key") {
              Ee(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ee(null);
              break;
            }
          }
          e.ref !== null && (Ee(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
        }
      }
      function Ir(e, t, n) {
        var o = hr(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Ht(t);
          R ? i += R : i += kr();
          var v;
          e === null ? v = "null" : ae(e) ? v = "array" : e !== void 0 && e.$$typeof === E ? (v = "<" + (he(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var S = ct.apply(this, arguments);
        if (S == null)
          return S;
        if (o)
          for (var D = 2; D < arguments.length; D++)
            xr(arguments[D], e);
        return e === _ ? Kt(S) : $r(S), S;
      }
      var Dr = !1;
      function Jt(e) {
        var t = Ir.bind(null, e);
        return t.type = e, Dr || (Dr = !0, Q("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return Q("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Xt(e, t, n) {
        for (var o = lt.apply(this, arguments), i = 2; i < arguments.length; i++)
          xr(arguments[i], o.type);
        return $r(o), o;
      }
      function Qt(e, t) {
        var n = N.transition;
        N.transition = {};
        var o = N.transition;
        N.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (N.transition = n, n === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var Mr = !1, Ie = null;
      function Zt(e) {
        if (Ie === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = s && s[t];
            Ie = n.call(s, "timers").setImmediate;
          } catch {
            Ie = function(i) {
              Mr === !1 && (Mr = !0, typeof MessageChannel > "u" && g("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var R = new MessageChannel();
              R.port1.onmessage = i, R.port2.postMessage(void 0);
            };
          }
        return Ie(e);
      }
      var _e = 0, Fr = !1;
      function en(e) {
        {
          var t = _e;
          _e++, u.current === null && (u.current = []);
          var n = u.isBatchingLegacy, o;
          try {
            if (u.isBatchingLegacy = !0, o = e(), !n && u.didScheduleLegacyUpdate) {
              var i = u.current;
              i !== null && (u.didScheduleLegacyUpdate = !1, Ge(i));
            }
          } catch (G) {
            throw De(t), G;
          } finally {
            u.isBatchingLegacy = n;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var R = o, v = !1, S = {
              then: function(G, X) {
                v = !0, R.then(function(re) {
                  De(t), _e === 0 ? Be(re, G, X) : G(re);
                }, function(re) {
                  De(t), X(re);
                });
              }
            };
            return !Fr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              v || (Fr = !0, g("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), S;
          } else {
            var D = o;
            if (De(t), _e === 0) {
              var U = u.current;
              U !== null && (Ge(U), u.current = null);
              var B = {
                then: function(G, X) {
                  u.current === null ? (u.current = [], Be(D, G, X)) : G(D);
                }
              };
              return B;
            } else {
              var H = {
                then: function(G, X) {
                  G(D);
                }
              };
              return H;
            }
          }
        }
      }
      function De(e) {
        e !== _e - 1 && g("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _e = e;
      }
      function Be(e, t, n) {
        {
          var o = u.current;
          if (o !== null)
            try {
              Ge(o), Zt(function() {
                o.length === 0 ? (u.current = null, t(e)) : Be(e, t, n);
              });
            } catch (i) {
              n(i);
            }
          else
            t(e);
        }
      }
      var He = !1;
      function Ge(e) {
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
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            He = !1;
          }
        }
      }
      var rn = Ir, tn = Xt, nn = Jt, an = {
        map: ke,
        forEach: mt,
        count: yt,
        toArray: ht,
        only: bt
      };
      l.Children = an, l.Component = f, l.Fragment = _, l.Profiler = C, l.PureComponent = T, l.StrictMode = k, l.Suspense = $, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, l.cloneElement = tn, l.createContext = gt, l.createElement = rn, l.createFactory = nn, l.createRef = te, l.forwardRef = Tt, l.isValidElement = ge, l.lazy = Rt, l.memo = Ct, l.startTransition = Qt, l.unstable_act = en, l.useCallback = xt, l.useContext = St, l.useDebugValue = Dt, l.useDeferredValue = Ft, l.useEffect = kt, l.useId = Lt, l.useImperativeHandle = It, l.useInsertionEffect = At, l.useLayoutEffect = jt, l.useMemo = $t, l.useReducer = Ot, l.useRef = Pt, l.useState = wt, l.useSyncExternalStore = Yt, l.useTransition = Mt, l.version = j, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Se, Se.exports)), Se.exports;
}
process.env.NODE_ENV === "production" ? tr.exports = cn() : tr.exports = fn();
var ln = tr.exports;
const I = /* @__PURE__ */ Qr(ln);
var nr = { exports: {} }, Fe = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function dn() {
  if (Vr)
    return F;
  Vr = 1;
  var s = typeof Symbol == "function" && Symbol.for, l = s ? Symbol.for("react.element") : 60103, j = s ? Symbol.for("react.portal") : 60106, E = s ? Symbol.for("react.fragment") : 60107, O = s ? Symbol.for("react.strict_mode") : 60108, _ = s ? Symbol.for("react.profiler") : 60114, k = s ? Symbol.for("react.provider") : 60109, C = s ? Symbol.for("react.context") : 60110, M = s ? Symbol.for("react.async_mode") : 60111, x = s ? Symbol.for("react.concurrent_mode") : 60111, w = s ? Symbol.for("react.forward_ref") : 60112, $ = s ? Symbol.for("react.suspense") : 60113, q = s ? Symbol.for("react.suspense_list") : 60120, Y = s ? Symbol.for("react.memo") : 60115, K = s ? Symbol.for("react.lazy") : 60116, W = s ? Symbol.for("react.block") : 60121, V = s ? Symbol.for("react.fundamental") : 60117, ee = s ? Symbol.for("react.responder") : 60118, ue = s ? Symbol.for("react.scope") : 60119;
  function z(u) {
    if (typeof u == "object" && u !== null) {
      var J = u.$$typeof;
      switch (J) {
        case l:
          switch (u = u.type, u) {
            case M:
            case x:
            case E:
            case _:
            case O:
            case $:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case C:
                case w:
                case K:
                case Y:
                case k:
                  return u;
                default:
                  return J;
              }
          }
        case j:
          return J;
      }
    }
  }
  function N(u) {
    return z(u) === x;
  }
  return F.AsyncMode = M, F.ConcurrentMode = x, F.ContextConsumer = C, F.ContextProvider = k, F.Element = l, F.ForwardRef = w, F.Fragment = E, F.Lazy = K, F.Memo = Y, F.Portal = j, F.Profiler = _, F.StrictMode = O, F.Suspense = $, F.isAsyncMode = function(u) {
    return N(u) || z(u) === M;
  }, F.isConcurrentMode = N, F.isContextConsumer = function(u) {
    return z(u) === C;
  }, F.isContextProvider = function(u) {
    return z(u) === k;
  }, F.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === l;
  }, F.isForwardRef = function(u) {
    return z(u) === w;
  }, F.isFragment = function(u) {
    return z(u) === E;
  }, F.isLazy = function(u) {
    return z(u) === K;
  }, F.isMemo = function(u) {
    return z(u) === Y;
  }, F.isPortal = function(u) {
    return z(u) === j;
  }, F.isProfiler = function(u) {
    return z(u) === _;
  }, F.isStrictMode = function(u) {
    return z(u) === O;
  }, F.isSuspense = function(u) {
    return z(u) === $;
  }, F.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === E || u === x || u === _ || u === O || u === $ || u === q || typeof u == "object" && u !== null && (u.$$typeof === K || u.$$typeof === Y || u.$$typeof === k || u.$$typeof === C || u.$$typeof === w || u.$$typeof === V || u.$$typeof === ee || u.$$typeof === ue || u.$$typeof === W);
  }, F.typeOf = z, F;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function pn() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, l = s ? Symbol.for("react.element") : 60103, j = s ? Symbol.for("react.portal") : 60106, E = s ? Symbol.for("react.fragment") : 60107, O = s ? Symbol.for("react.strict_mode") : 60108, _ = s ? Symbol.for("react.profiler") : 60114, k = s ? Symbol.for("react.provider") : 60109, C = s ? Symbol.for("react.context") : 60110, M = s ? Symbol.for("react.async_mode") : 60111, x = s ? Symbol.for("react.concurrent_mode") : 60111, w = s ? Symbol.for("react.forward_ref") : 60112, $ = s ? Symbol.for("react.suspense") : 60113, q = s ? Symbol.for("react.suspense_list") : 60120, Y = s ? Symbol.for("react.memo") : 60115, K = s ? Symbol.for("react.lazy") : 60116, W = s ? Symbol.for("react.block") : 60121, V = s ? Symbol.for("react.fundamental") : 60117, ee = s ? Symbol.for("react.responder") : 60118, ue = s ? Symbol.for("react.scope") : 60119;
    function z(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === E || d === x || d === _ || d === O || d === $ || d === q || typeof d == "object" && d !== null && (d.$$typeof === K || d.$$typeof === Y || d.$$typeof === k || d.$$typeof === C || d.$$typeof === w || d.$$typeof === V || d.$$typeof === ee || d.$$typeof === ue || d.$$typeof === W);
    }
    function N(d) {
      if (typeof d == "object" && d !== null) {
        var ae = d.$$typeof;
        switch (ae) {
          case l:
            var be = d.type;
            switch (be) {
              case M:
              case x:
              case E:
              case _:
              case O:
              case $:
                return be;
              default:
                var we = be && be.$$typeof;
                switch (we) {
                  case C:
                  case w:
                  case K:
                  case Y:
                  case k:
                    return we;
                  default:
                    return ae;
                }
            }
          case j:
            return ae;
        }
      }
    }
    var u = M, J = x, se = C, fe = k, pe = l, le = w, ve = E, ye = K, de = Y, ie = j, ne = _, Q = O, g = $, ce = !1;
    function me(d) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(d) || N(d) === M;
    }
    function r(d) {
      return N(d) === x;
    }
    function a(d) {
      return N(d) === C;
    }
    function c(d) {
      return N(d) === k;
    }
    function p(d) {
      return typeof d == "object" && d !== null && d.$$typeof === l;
    }
    function f(d) {
      return N(d) === w;
    }
    function h(d) {
      return N(d) === E;
    }
    function m(d) {
      return N(d) === K;
    }
    function y(d) {
      return N(d) === Y;
    }
    function b(d) {
      return N(d) === j;
    }
    function T(d) {
      return N(d) === _;
    }
    function A(d) {
      return N(d) === O;
    }
    function te(d) {
      return N(d) === $;
    }
    L.AsyncMode = u, L.ConcurrentMode = J, L.ContextConsumer = se, L.ContextProvider = fe, L.Element = pe, L.ForwardRef = le, L.Fragment = ve, L.Lazy = ye, L.Memo = de, L.Portal = ie, L.Profiler = ne, L.StrictMode = Q, L.Suspense = g, L.isAsyncMode = me, L.isConcurrentMode = r, L.isContextConsumer = a, L.isContextProvider = c, L.isElement = p, L.isForwardRef = f, L.isFragment = h, L.isLazy = m, L.isMemo = y, L.isPortal = b, L.isProfiler = T, L.isStrictMode = A, L.isSuspense = te, L.isValidElementType = z, L.typeOf = N;
  }()), L;
}
var zr;
function Zr() {
  return zr || (zr = 1, process.env.NODE_ENV === "production" ? Fe.exports = dn() : Fe.exports = pn()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Je, Br;
function vn() {
  if (Br)
    return Je;
  Br = 1;
  var s = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
  function E(_) {
    if (_ == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(_);
  }
  function O() {
    try {
      if (!Object.assign)
        return !1;
      var _ = new String("abc");
      if (_[5] = "de", Object.getOwnPropertyNames(_)[0] === "5")
        return !1;
      for (var k = {}, C = 0; C < 10; C++)
        k["_" + String.fromCharCode(C)] = C;
      var M = Object.getOwnPropertyNames(k).map(function(w) {
        return k[w];
      });
      if (M.join("") !== "0123456789")
        return !1;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        x[w] = w;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Je = O() ? Object.assign : function(_, k) {
    for (var C, M = E(_), x, w = 1; w < arguments.length; w++) {
      C = Object(arguments[w]);
      for (var $ in C)
        l.call(C, $) && (M[$] = C[$]);
      if (s) {
        x = s(C);
        for (var q = 0; q < x.length; q++)
          j.call(C, x[q]) && (M[x[q]] = C[x[q]]);
      }
    }
    return M;
  }, Je;
}
var Xe, Hr;
function ar() {
  if (Hr)
    return Xe;
  Hr = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xe = s, Xe;
}
var Qe, Gr;
function et() {
  return Gr || (Gr = 1, Qe = Function.call.bind(Object.prototype.hasOwnProperty)), Qe;
}
var Ze, Kr;
function yn() {
  if (Kr)
    return Ze;
  Kr = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var l = ar(), j = {}, E = et();
    s = function(_) {
      var k = "Warning: " + _;
      typeof console < "u" && console.error(k);
      try {
        throw new Error(k);
      } catch {
      }
    };
  }
  function O(_, k, C, M, x) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in _)
        if (E(_, w)) {
          var $;
          try {
            if (typeof _[w] != "function") {
              var q = Error(
                (M || "React class") + ": " + C + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw q.name = "Invariant Violation", q;
            }
            $ = _[w](k, w, M, C, null, l);
          } catch (K) {
            $ = K;
          }
          if ($ && !($ instanceof Error) && s(
            (M || "React class") + ": type specification of " + C + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof $ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), $ instanceof Error && !($.message in j)) {
            j[$.message] = !0;
            var Y = x ? x() : "";
            s(
              "Failed " + C + " type: " + $.message + (Y ?? "")
            );
          }
        }
    }
  }
  return O.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (j = {});
  }, Ze = O, Ze;
}
var er, Jr;
function mn() {
  if (Jr)
    return er;
  Jr = 1;
  var s = Zr(), l = vn(), j = ar(), E = et(), O = yn(), _ = function() {
  };
  process.env.NODE_ENV !== "production" && (_ = function(C) {
    var M = "Warning: " + C;
    typeof console < "u" && console.error(M);
    try {
      throw new Error(M);
    } catch {
    }
  });
  function k() {
    return null;
  }
  return er = function(C, M) {
    var x = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function $(r) {
      var a = r && (x && r[x] || r[w]);
      if (typeof a == "function")
        return a;
    }
    var q = "<<anonymous>>", Y = {
      array: ee("array"),
      bigint: ee("bigint"),
      bool: ee("boolean"),
      func: ee("function"),
      number: ee("number"),
      object: ee("object"),
      string: ee("string"),
      symbol: ee("symbol"),
      any: ue(),
      arrayOf: z,
      element: N(),
      elementType: u(),
      instanceOf: J,
      node: le(),
      objectOf: fe,
      oneOf: se,
      oneOfType: pe,
      shape: ye,
      exact: de
    };
    function K(r, a) {
      return r === a ? r !== 0 || 1 / r === 1 / a : r !== r && a !== a;
    }
    function W(r, a) {
      this.message = r, this.data = a && typeof a == "object" ? a : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function V(r) {
      if (process.env.NODE_ENV !== "production")
        var a = {}, c = 0;
      function p(h, m, y, b, T, A, te) {
        if (b = b || q, A = A || y, te !== j) {
          if (M) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = b + ":" + y;
            !a[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            c < 3 && (_(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + b + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), a[ae] = !0, c++);
          }
        }
        return m[y] == null ? h ? m[y] === null ? new W("The " + T + " `" + A + "` is marked as required " + ("in `" + b + "`, but its value is `null`.")) : new W("The " + T + " `" + A + "` is marked as required in " + ("`" + b + "`, but its value is `undefined`.")) : null : r(m, y, b, T, A);
      }
      var f = p.bind(null, !1);
      return f.isRequired = p.bind(null, !0), f;
    }
    function ee(r) {
      function a(c, p, f, h, m, y) {
        var b = c[p], T = Q(b);
        if (T !== r) {
          var A = g(b);
          return new W(
            "Invalid " + h + " `" + m + "` of type " + ("`" + A + "` supplied to `" + f + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return V(a);
    }
    function ue() {
      return V(k);
    }
    function z(r) {
      function a(c, p, f, h, m) {
        if (typeof r != "function")
          return new W("Property `" + m + "` of component `" + f + "` has invalid PropType notation inside arrayOf.");
        var y = c[p];
        if (!Array.isArray(y)) {
          var b = Q(y);
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + f + "`, expected an array."));
        }
        for (var T = 0; T < y.length; T++) {
          var A = r(y, T, f, h, m + "[" + T + "]", j);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return V(a);
    }
    function N() {
      function r(a, c, p, f, h) {
        var m = a[c];
        if (!C(m)) {
          var y = Q(m);
          return new W("Invalid " + f + " `" + h + "` of type " + ("`" + y + "` supplied to `" + p + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(r);
    }
    function u() {
      function r(a, c, p, f, h) {
        var m = a[c];
        if (!s.isValidElementType(m)) {
          var y = Q(m);
          return new W("Invalid " + f + " `" + h + "` of type " + ("`" + y + "` supplied to `" + p + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(r);
    }
    function J(r) {
      function a(c, p, f, h, m) {
        if (!(c[p] instanceof r)) {
          var y = r.name || q, b = me(c[p]);
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + f + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return V(a);
    }
    function se(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? _(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : _("Invalid argument supplied to oneOf, expected an array.")), k;
      function a(c, p, f, h, m) {
        for (var y = c[p], b = 0; b < r.length; b++)
          if (K(y, r[b]))
            return null;
        var T = JSON.stringify(r, function(te, d) {
          var ae = g(d);
          return ae === "symbol" ? String(d) : d;
        });
        return new W("Invalid " + h + " `" + m + "` of value `" + String(y) + "` " + ("supplied to `" + f + "`, expected one of " + T + "."));
      }
      return V(a);
    }
    function fe(r) {
      function a(c, p, f, h, m) {
        if (typeof r != "function")
          return new W("Property `" + m + "` of component `" + f + "` has invalid PropType notation inside objectOf.");
        var y = c[p], b = Q(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type " + ("`" + b + "` supplied to `" + f + "`, expected an object."));
        for (var T in y)
          if (E(y, T)) {
            var A = r(y, T, f, h, m + "." + T, j);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return V(a);
    }
    function pe(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && _("Invalid argument supplied to oneOfType, expected an instance of array."), k;
      for (var a = 0; a < r.length; a++) {
        var c = r[a];
        if (typeof c != "function")
          return _(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(c) + " at index " + a + "."
          ), k;
      }
      function p(f, h, m, y, b) {
        for (var T = [], A = 0; A < r.length; A++) {
          var te = r[A], d = te(f, h, m, y, b, j);
          if (d == null)
            return null;
          d.data && E(d.data, "expectedType") && T.push(d.data.expectedType);
        }
        var ae = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new W("Invalid " + y + " `" + b + "` supplied to " + ("`" + m + "`" + ae + "."));
      }
      return V(p);
    }
    function le() {
      function r(a, c, p, f, h) {
        return ie(a[c]) ? null : new W("Invalid " + f + " `" + h + "` supplied to " + ("`" + p + "`, expected a ReactNode."));
      }
      return V(r);
    }
    function ve(r, a, c, p, f) {
      return new W(
        (r || "React class") + ": " + a + " type `" + c + "." + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + f + "`."
      );
    }
    function ye(r) {
      function a(c, p, f, h, m) {
        var y = c[p], b = Q(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type `" + b + "` " + ("supplied to `" + f + "`, expected `object`."));
        for (var T in r) {
          var A = r[T];
          if (typeof A != "function")
            return ve(f, h, m, T, g(A));
          var te = A(y, T, f, h, m + "." + T, j);
          if (te)
            return te;
        }
        return null;
      }
      return V(a);
    }
    function de(r) {
      function a(c, p, f, h, m) {
        var y = c[p], b = Q(y);
        if (b !== "object")
          return new W("Invalid " + h + " `" + m + "` of type `" + b + "` " + ("supplied to `" + f + "`, expected `object`."));
        var T = l({}, c[p], r);
        for (var A in T) {
          var te = r[A];
          if (E(r, A) && typeof te != "function")
            return ve(f, h, m, A, g(te));
          if (!te)
            return new W(
              "Invalid " + h + " `" + m + "` key `" + A + "` supplied to `" + f + "`.\nBad object: " + JSON.stringify(c[p], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var d = te(y, A, f, h, m + "." + A, j);
          if (d)
            return d;
        }
        return null;
      }
      return V(a);
    }
    function ie(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(ie);
          if (r === null || C(r))
            return !0;
          var a = $(r);
          if (a) {
            var c = a.call(r), p;
            if (a !== r.entries) {
              for (; !(p = c.next()).done; )
                if (!ie(p.value))
                  return !1;
            } else
              for (; !(p = c.next()).done; ) {
                var f = p.value;
                if (f && !ie(f[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(r, a) {
      return r === "symbol" ? !0 : a ? a["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && a instanceof Symbol : !1;
    }
    function Q(r) {
      var a = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : ne(a, r) ? "symbol" : a;
    }
    function g(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var a = Q(r);
      if (a === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return a;
    }
    function ce(r) {
      var a = g(r);
      switch (a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    function me(r) {
      return !r.constructor || !r.constructor.name ? q : r.constructor.name;
    }
    return Y.checkPropTypes = O, Y.resetWarningCache = O.resetWarningCache, Y.PropTypes = Y, Y;
  }, er;
}
var rr, Xr;
function hn() {
  if (Xr)
    return rr;
  Xr = 1;
  var s = ar();
  function l() {
  }
  function j() {
  }
  return j.resetWarningCache = l, rr = function() {
    function E(k, C, M, x, w, $) {
      if ($ !== s) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
      }
    }
    E.isRequired = E;
    function O() {
      return E;
    }
    var _ = {
      array: E,
      bigint: E,
      bool: E,
      func: E,
      number: E,
      object: E,
      string: E,
      symbol: E,
      any: E,
      arrayOf: O,
      element: E,
      elementType: E,
      instanceOf: O,
      node: E,
      objectOf: O,
      oneOf: O,
      oneOfType: O,
      shape: O,
      exact: O,
      checkPropTypes: j,
      resetWarningCache: l
    };
    return _.PropTypes = _, _;
  }, rr;
}
if (process.env.NODE_ENV !== "production") {
  var bn = Zr(), gn = !0;
  nr.exports = mn()(bn.isElement, gn);
} else
  nr.exports = hn()();
var En = nr.exports;
const Z = /* @__PURE__ */ Qr(En), rt = ({ backgroundColor: s, primary: l, size: j, ...E }) => {
  const O = l ? "component-craftsman--primary" : "component-craftsman--secondary";
  return /* @__PURE__ */ I.createElement(
    "button",
    {
      type: "button",
      ...E,
      style: s && { backgroundColor: s },
      className: ["component-craftsman-button", `component-craftsman--${j}`, O].join(" ")
    },
    E.label
  );
};
rt.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: Z.bool,
  /**
   * What background color to use
   */
  backgroundColor: Z.string,
  /**
   * How large should the button be?
   */
  size: Z.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: Z.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: Z.func
};
rt.defaultProps = {
  backgroundColor: null,
  primary: !1,
  size: "medium",
  onClick: void 0
};
const tt = ({ backgroundColor: s, primary: l, size: j, icon: E, label: O, radius: _, ...k }) => {
  const C = l ? "component-craftsman--primary" : "component-craftsman--secondary", M = Math.max(1, Math.min(5, _)), x = {
    ...s && { backgroundColor: s },
    ...M && { borderRadius: `${10 * M}px` }
  };
  return /* @__PURE__ */ I.createElement(
    "button",
    {
      type: "button",
      ...k,
      style: x,
      className: ["component-craftsman-button", `component-craftsman--${j}`, C].join(" ")
    },
    /* @__PURE__ */ I.createElement("span", null, " ", E, " "),
    " ",
    E && O && /* @__PURE__ */ I.createElement("span", { className: `component-craftsman--inner-button-divide ${l ? "primary" : "secondary"}` }, " | "),
    " ",
    /* @__PURE__ */ I.createElement("span", null, " ", O)
  );
};
tt.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: Z.bool,
  /**
   * What background color to use
   */
  backgroundColor: Z.string,
  /**
   * How large should the button be?
   */
  size: Z.oneOf(["small", "medium", "large"]),
  /**
  * Radius of the button 
  * 1-5
  */
  radius: Z.oneOf([1, 2, 3, 4, 5]),
  /**
   * Button contents
   */
  icon: Z.elementType,
  /**
   * Button contents
   */
  label: Z.string,
  /**
   * Optional click handler
   */
  onClick: Z.func
};
tt.defaultProps = {
  label: null,
  radius: 1,
  icon: null,
  backgroundColor: null,
  primary: !1,
  size: "medium",
  onClick: void 0
};
const nt = ({
  type: s,
  value: l,
  placeholder: j,
  isValid: E,
  ...O
}) => {
  const _ = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [k, C] = I.useState(
    l ? _.test(l) : !1
  );
  return I.useEffect(() => {
    C(_.test(l));
  }, [l]), I.useEffect(() => {
    E && E(k);
  }, [l]), /* @__PURE__ */ I.createElement(
    "input",
    {
      type: s,
      placeholder: j,
      value: l,
      style: {
        borderColor: l ? k ? "green" : "red" : ""
      },
      className: "component-craftsman--input white",
      ...O
    }
  );
};
nt.propTypes = {
  /**
   * Input type
   */
  type: Z.string,
  /**
   * Input value
   */
  value: Z.string.isRequired,
  /**
   * Placeholder text
   */
  placeholder: Z.string,
  /**
   * Function to handle input change
   */
  onChange: Z.func,
  /**
   * Function to return the valid status of the input
   */
  isValid: Z.func
};
nt.defaultProps = {
  type: "text",
  placeholder: "Enter email",
  onChange: void 0,
  isValid: void 0
};
const _n = () => /* @__PURE__ */ I.createElement("table", { className: "component-craftsman-table" }, /* @__PURE__ */ I.createElement("thead", null, /* @__PURE__ */ I.createElement("tr", null, /* @__PURE__ */ I.createElement("th", null, "Movie Title"), /* @__PURE__ */ I.createElement("th", null, "Genre"), /* @__PURE__ */ I.createElement("th", null, "Year"), /* @__PURE__ */ I.createElement("th", null, "Gross"))), /* @__PURE__ */ I.createElement("tbody", null, /* @__PURE__ */ I.createElement("tr", null, /* @__PURE__ */ I.createElement("td", null, "Star Wars"), /* @__PURE__ */ I.createElement("td", null, "Adventure, Sci-fi"), /* @__PURE__ */ I.createElement("td", null, "1977"), /* @__PURE__ */ I.createElement("td", null, "$460,935,665")), /* @__PURE__ */ I.createElement("tr", null, /* @__PURE__ */ I.createElement("td", null, "Howard The Duck"), /* @__PURE__ */ I.createElement("td", null, '"Comedy"'), /* @__PURE__ */ I.createElement("td", null, "1986"), /* @__PURE__ */ I.createElement("td", null, "$16,295,774")), /* @__PURE__ */ I.createElement("tr", null, /* @__PURE__ */ I.createElement("td", null, "American Graffiti"), /* @__PURE__ */ I.createElement("td", null, "Comedy, Drama"), /* @__PURE__ */ I.createElement("td", null, "1973"), /* @__PURE__ */ I.createElement("td", null, "$115,000,000"))));
const at = ({ tag: s, position: l }) => {
  const j = () => {
    if (!s)
      return null;
    let E = {};
    switch (l) {
      case "left":
        E = { left: 0 };
        break;
      case "center":
        E = { left: "50%", transform: "translateX(-50%)" };
        break;
      case "right":
        E = { right: 0 };
        break;
    }
    return /* @__PURE__ */ I.createElement("span", { className: `component-craftsman--divider-tag divider-tag-${l}`, style: E }, s);
  };
  return /* @__PURE__ */ I.createElement("div", { className: "component-craftsman--divider-container" }, /* @__PURE__ */ I.createElement("hr", { className: "component-craftsman--divider-line" }), l && j());
};
at.propTypes = {
  /**
   * Tag to be displayed on the line
   */
  tag: Z.string,
  /**
   * Position of the tag relative to the line
   */
  position: Z.oneOf(["left", "center", "right"])
};
at.defaultProps = {
  tag: null,
  position: "left"
};
export {
  rt as BasicButton,
  tt as Button,
  at as Divider,
  nt as EmailCheckInput,
  _n as Table
};
