function Xr(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var rr = { exports: {} }, O = {};
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
function on() {
  if (Wr)
    return O;
  Wr = 1;
  var l = Symbol.for("react.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), I = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.iterator;
  function V(r) {
    return r === null || typeof r != "object" ? null : (r = k && r[k] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, W = {};
  function N(r, o, s) {
    this.props = r, this.context = o, this.refs = W, this.updater = s || L;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(r, o) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, o, "setState");
  }, N.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = N.prototype;
  function ae(r, o, s) {
    this.props = r, this.context = o, this.refs = W, this.updater = s || L;
  }
  var q = ae.prototype = new Q();
  q.constructor = ae, K(q, N.prototype), q.isPureReactComponent = !0;
  var Y = Array.isArray, u = Object.prototype.hasOwnProperty, G = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function se(r, o, s) {
    var d, c = {}, m = null, y = null;
    if (o != null)
      for (d in o.ref !== void 0 && (y = o.ref), o.key !== void 0 && (m = "" + o.key), o)
        u.call(o, d) && !ie.hasOwnProperty(d) && (c[d] = o[d]);
    var v = arguments.length - 2;
    if (v === 1)
      c.children = s;
    else if (1 < v) {
      for (var h = Array(v), E = 0; E < v; E++)
        h[E] = arguments[E + 2];
      c.children = h;
    }
    if (r && r.defaultProps)
      for (d in v = r.defaultProps, v)
        c[d] === void 0 && (c[d] = v[d]);
    return { $$typeof: l, type: r, key: m, ref: y, props: c, _owner: G.current };
  }
  function le(r, o) {
    return { $$typeof: l, type: r.type, key: o, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function ce(r) {
    return typeof r == "object" && r !== null && r.$$typeof === l;
  }
  function de(r) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(s) {
      return o[s];
    });
  }
  var pe = /\/+/g;
  function fe(r, o) {
    return typeof r == "object" && r !== null && r.key != null ? de("" + r.key) : o.toString(36);
  }
  function oe(r, o, s, d, c) {
    var m = typeof r;
    (m === "undefined" || m === "boolean") && (r = null);
    var y = !1;
    if (r === null)
      y = !0;
    else
      switch (m) {
        case "string":
        case "number":
          y = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case l:
            case b:
              y = !0;
          }
      }
    if (y)
      return y = r, c = c(y), r = d === "" ? "." + fe(y, 0) : d, Y(c) ? (s = "", r != null && (s = r.replace(pe, "$&/") + "/"), oe(c, o, s, "", function(E) {
        return E;
      })) : c != null && (ce(c) && (c = le(c, s + (!c.key || y && y.key === c.key ? "" : ("" + c.key).replace(pe, "$&/") + "/") + r)), o.push(c)), 1;
    if (y = 0, d = d === "" ? "." : d + ":", Y(r))
      for (var v = 0; v < r.length; v++) {
        m = r[v];
        var h = d + fe(m, v);
        y += oe(m, o, s, h, c);
      }
    else if (h = V(r), typeof h == "function")
      for (r = h.call(r), v = 0; !(m = r.next()).done; )
        m = m.value, h = d + fe(m, v++), y += oe(m, o, s, h, c);
    else if (m === "object")
      throw o = String(r), Error("Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
    return y;
  }
  function re(r, o, s) {
    if (r == null)
      return r;
    var d = [], c = 0;
    return oe(r, d, "", "", function(m) {
      return o.call(s, m, c++);
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
  var g = { current: null }, ue = { transition: null }, ve = { ReactCurrentDispatcher: g, ReactCurrentBatchConfig: ue, ReactCurrentOwner: G };
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
    if (!ce(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, O.Component = N, O.Fragment = M, O.Profiler = x, O.PureComponent = ae, O.StrictMode = S, O.Suspense = F, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, O.cloneElement = function(r, o, s) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var d = K({}, r.props), c = r.key, m = r.ref, y = r._owner;
    if (o != null) {
      if (o.ref !== void 0 && (m = o.ref, y = G.current), o.key !== void 0 && (c = "" + o.key), r.type && r.type.defaultProps)
        var v = r.type.defaultProps;
      for (h in o)
        u.call(o, h) && !ie.hasOwnProperty(h) && (d[h] = o[h] === void 0 && v !== void 0 ? v[h] : o[h]);
    }
    var h = arguments.length - 2;
    if (h === 1)
      d.children = s;
    else if (1 < h) {
      v = Array(h);
      for (var E = 0; E < h; E++)
        v[E] = arguments[E + 2];
      d.children = v;
    }
    return { $$typeof: l, type: r.type, key: c, ref: m, props: d, _owner: y };
  }, O.createContext = function(r) {
    return r = { $$typeof: I, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: R, _context: r }, r.Consumer = r;
  }, O.createElement = se, O.createFactory = function(r) {
    var o = se.bind(null, r);
    return o.type = r, o;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(r) {
    return { $$typeof: C, render: r };
  }, O.isValidElement = ce, O.lazy = function(r) {
    return { $$typeof: w, _payload: { _status: -1, _result: r }, _init: X };
  }, O.memo = function(r, o) {
    return { $$typeof: j, type: r, compare: o === void 0 ? null : o };
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
function an() {
  return Ur || (Ur = 1, function(l, b) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.2.0", S = Symbol.for("react.element"), x = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), j = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), N = Symbol.iterator, Q = "@@iterator";
      function ae(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = N && e[N] || e[Q];
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
      function le(e) {
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
      var ce = !1, de = !1, pe = !1, fe = !1, oe = !1, re = {
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
          var _ = n.map(function(p) {
            return String(p);
          });
          _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
        }
      }
      var ve = {};
      function r(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", i = a + "." + t;
          if (ve[i])
            return;
          g("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), ve[i] = !0;
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
        var m = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, y = function(e, t) {
          Object.defineProperty(c.prototype, e, {
            get: function() {
              X("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var v in m)
          m.hasOwnProperty(v) && y(v, m[v]);
      }
      function h() {
      }
      h.prototype = c.prototype;
      function E(e, t, n) {
        this.props = e, this.context = t, this.refs = d, this.updater = n || o;
      }
      var P = E.prototype = new h();
      P.constructor = E, s(P, c.prototype), P.isPureReactComponent = !0;
      function ee() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var f = Array.isArray;
      function te(e) {
        return f(e);
      }
      function me(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Ce(e) {
        try {
          return or(e), !1;
        } catch {
          return !0;
        }
      }
      function or(e) {
        return "" + e;
      }
      function we(e) {
        if (Ce(e))
          return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", me(e)), or(e);
      }
      function rt(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var i = t.displayName || t.name || "";
        return i !== "" ? n + "(" + i + ")" : n;
      }
      function ar(e) {
        return e.displayName || "Context";
      }
      function ye(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case R:
            return "Fragment";
          case x:
            return "Portal";
          case C:
            return "Profiler";
          case I:
            return "StrictMode";
          case k:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case j:
              var t = e;
              return ar(t) + ".Consumer";
            case F:
              var n = e;
              return ar(n._context) + ".Provider";
            case w:
              return rt(e, e.render, "ForwardRef");
            case L:
              var a = e.displayName || null;
              return a !== null ? a : ye(e.type) || "Memo";
            case K: {
              var i = e, _ = i._payload, p = i._init;
              try {
                return ye(p(_));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _e = Object.prototype.hasOwnProperty, ir = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ur, sr, Fe;
      Fe = {};
      function cr(e) {
        if (_e.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function fr(e) {
        if (_e.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function tt(e, t) {
        var n = function() {
          ur || (ur = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function nt(e, t) {
        var n = function() {
          sr || (sr = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function ot(e) {
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var t = ye(G.current.type);
          Fe[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Fe[t] = !0);
        }
      }
      var Le = function(e, t, n, a, i, _, p) {
        var T = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: p,
          // Record the component responsible for creating this element.
          _owner: _
        };
        return T._store = {}, Object.defineProperty(T._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(T, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(T, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
      };
      function at(e, t, n) {
        var a, i = {}, _ = null, p = null, T = null, A = null;
        if (t != null) {
          cr(t) && (p = t.ref, ot(t)), fr(t) && (we(t.key), _ = "" + t.key), T = t.__self === void 0 ? null : t.__self, A = t.__source === void 0 ? null : t.__source;
          for (a in t)
            _e.call(t, a) && !ir.hasOwnProperty(a) && (i[a] = t[a]);
        }
        var U = arguments.length - 2;
        if (U === 1)
          i.children = n;
        else if (U > 1) {
          for (var z = Array(U), B = 0; B < U; B++)
            z[B] = arguments[B + 2];
          Object.freeze && Object.freeze(z), i.children = z;
        }
        if (e && e.defaultProps) {
          var H = e.defaultProps;
          for (a in H)
            i[a] === void 0 && (i[a] = H[a]);
        }
        if (_ || p) {
          var J = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && tt(i, J), p && nt(i, J);
        }
        return Le(e, _, p, T, A, G.current, i);
      }
      function it(e, t) {
        var n = Le(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function ut(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, i = s({}, e.props), _ = e.key, p = e.ref, T = e._self, A = e._source, U = e._owner;
        if (t != null) {
          cr(t) && (p = t.ref, U = G.current), fr(t) && (we(t.key), _ = "" + t.key);
          var z;
          e.type && e.type.defaultProps && (z = e.type.defaultProps);
          for (a in t)
            _e.call(t, a) && !ir.hasOwnProperty(a) && (t[a] === void 0 && z !== void 0 ? i[a] = z[a] : i[a] = t[a]);
        }
        var B = arguments.length - 2;
        if (B === 1)
          i.children = n;
        else if (B > 1) {
          for (var H = Array(B), J = 0; J < B; J++)
            H[J] = arguments[J + 2];
          i.children = H;
        }
        return Le(e.type, _, p, T, A, U, i);
      }
      function he(e) {
        return typeof e == "object" && e !== null && e.$$typeof === S;
      }
      var lr = ".", st = ":";
      function ct(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(i) {
          return n[i];
        });
        return "$" + a;
      }
      var dr = !1, ft = /\/+/g;
      function pr(e) {
        return e.replace(ft, "$&/");
      }
      function Ye(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (we(e.key), ct("" + e.key)) : t.toString(36);
      }
      function Oe(e, t, n, a, i) {
        var _ = typeof e;
        (_ === "undefined" || _ === "boolean") && (e = null);
        var p = !1;
        if (e === null)
          p = !0;
        else
          switch (_) {
            case "string":
            case "number":
              p = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case S:
                case x:
                  p = !0;
              }
          }
        if (p) {
          var T = e, A = i(T), U = a === "" ? lr + Ye(T, 0) : a;
          if (te(A)) {
            var z = "";
            U != null && (z = pr(U) + "/"), Oe(A, t, z, "", function(nn) {
              return nn;
            });
          } else
            A != null && (he(A) && (A.key && (!T || T.key !== A.key) && we(A.key), A = it(
              A,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (A.key && (!T || T.key !== A.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                pr("" + A.key) + "/"
              ) : "") + U
            )), t.push(A));
          return 1;
        }
        var B, H, J = 0, Z = a === "" ? lr : a + st;
        if (te(e))
          for (var De = 0; De < e.length; De++)
            B = e[De], H = Z + Ye(B, De), J += Oe(B, t, n, H, i);
        else {
          var Ke = ae(e);
          if (typeof Ke == "function") {
            var Fr = e;
            Ke === Fr.entries && (dr || X("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dr = !0);
            for (var rn = Ke.call(Fr), Lr, tn = 0; !(Lr = rn.next()).done; )
              B = Lr.value, H = Z + Ye(B, tn++), J += Oe(B, t, n, H, i);
          } else if (_ === "object") {
            var Yr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Yr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Yr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return J;
      }
      function Pe(e, t, n) {
        if (e == null)
          return e;
        var a = [], i = 0;
        return Oe(e, a, "", "", function(_) {
          return t.call(n, _, i++);
        }), a;
      }
      function lt(e) {
        var t = 0;
        return Pe(e, function() {
          t++;
        }), t;
      }
      function dt(e, t, n) {
        Pe(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function pt(e) {
        return Pe(e, function(t) {
          return t;
        }) || [];
      }
      function vt(e) {
        if (!he(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function yt(e) {
        var t = {
          $$typeof: j,
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
            $$typeof: j,
            _context: t
          };
          Object.defineProperties(_, {
            Provider: {
              get: function() {
                return a || (a = !0, g("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(p) {
                t.Provider = p;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(p) {
                t._currentValue = p;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(p) {
                t._currentValue2 = p;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(p) {
                t._threadCount = p;
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
              set: function(p) {
                i || (X("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", p), i = !0);
              }
            }
          }), t.Consumer = _;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var Ee = -1, We = 0, vr = 1, mt = 2;
      function ht(e) {
        if (e._status === Ee) {
          var t = e._result, n = t();
          if (n.then(function(_) {
            if (e._status === We || e._status === Ee) {
              var p = e;
              p._status = vr, p._result = _;
            }
          }, function(_) {
            if (e._status === We || e._status === Ee) {
              var p = e;
              p._status = mt, p._result = _;
            }
          }), e._status === Ee) {
            var a = e;
            a._status = We, a._result = n;
          }
        }
        if (e._status === vr) {
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
      function bt(e) {
        var t = {
          // We use these fields to store the result.
          _status: Ee,
          _result: e
        }, n = {
          $$typeof: K,
          _payload: t,
          _init: ht
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
      function gt(e) {
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
      var yr;
      yr = Symbol.for("react.module.reference");
      function mr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === R || e === C || oe || e === I || e === k || e === V || fe || e === W || ce || de || pe || typeof e == "object" && e !== null && (e.$$typeof === K || e.$$typeof === L || e.$$typeof === F || e.$$typeof === j || e.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === yr || e.getModuleId !== void 0));
      }
      function _t(e, t) {
        mr(e) || g("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
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
      function Et(e) {
        var t = ne();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? g("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && g("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function Rt(e) {
        var t = ne();
        return t.useState(e);
      }
      function Tt(e, t, n) {
        var a = ne();
        return a.useReducer(e, t, n);
      }
      function St(e) {
        var t = ne();
        return t.useRef(e);
      }
      function Ct(e, t) {
        var n = ne();
        return n.useEffect(e, t);
      }
      function wt(e, t) {
        var n = ne();
        return n.useInsertionEffect(e, t);
      }
      function Ot(e, t) {
        var n = ne();
        return n.useLayoutEffect(e, t);
      }
      function Pt(e, t) {
        var n = ne();
        return n.useCallback(e, t);
      }
      function kt(e, t) {
        var n = ne();
        return n.useMemo(e, t);
      }
      function At(e, t, n) {
        var a = ne();
        return a.useImperativeHandle(e, t, n);
      }
      function jt(e, t) {
        {
          var n = ne();
          return n.useDebugValue(e, t);
        }
      }
      function xt() {
        var e = ne();
        return e.useTransition();
      }
      function It(e) {
        var t = ne();
        return t.useDeferredValue(e);
      }
      function $t() {
        var e = ne();
        return e.useId();
      }
      function Dt(e, t, n) {
        var a = ne();
        return a.useSyncExternalStore(e, t, n);
      }
      var Re = 0, hr, br, gr, _r, Er, Rr, Tr;
      function Sr() {
      }
      Sr.__reactDisabledLog = !0;
      function Mt() {
        {
          if (Re === 0) {
            hr = console.log, br = console.info, gr = console.warn, _r = console.error, Er = console.group, Rr = console.groupCollapsed, Tr = console.groupEnd;
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
          Re++;
        }
      }
      function Ft() {
        {
          if (Re--, Re === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: s({}, e, {
                value: hr
              }),
              info: s({}, e, {
                value: br
              }),
              warn: s({}, e, {
                value: gr
              }),
              error: s({}, e, {
                value: _r
              }),
              group: s({}, e, {
                value: Er
              }),
              groupCollapsed: s({}, e, {
                value: Rr
              }),
              groupEnd: s({}, e, {
                value: Tr
              })
            });
          }
          Re < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ue = re.ReactCurrentDispatcher, Ne;
      function ke(e, t, n) {
        {
          if (Ne === void 0)
            try {
              throw Error();
            } catch (i) {
              var a = i.stack.trim().match(/\n( *(at )?)/);
              Ne = a && a[1] || "";
            }
          return `
` + Ne + e;
        }
      }
      var Ve = !1, Ae;
      {
        var Lt = typeof WeakMap == "function" ? WeakMap : Map;
        Ae = new Lt();
      }
      function Cr(e, t) {
        if (!e || Ve)
          return "";
        {
          var n = Ae.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Ve = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _;
        _ = Ue.current, Ue.current = null, Mt();
        try {
          if (t) {
            var p = function() {
              throw Error();
            };
            if (Object.defineProperty(p.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(p, []);
              } catch (Z) {
                a = Z;
              }
              Reflect.construct(e, [], p);
            } else {
              try {
                p.call();
              } catch (Z) {
                a = Z;
              }
              e.call(p.prototype);
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
            for (var T = Z.stack.split(`
`), A = a.stack.split(`
`), U = T.length - 1, z = A.length - 1; U >= 1 && z >= 0 && T[U] !== A[z]; )
              z--;
            for (; U >= 1 && z >= 0; U--, z--)
              if (T[U] !== A[z]) {
                if (U !== 1 || z !== 1)
                  do
                    if (U--, z--, z < 0 || T[U] !== A[z]) {
                      var B = `
` + T[U].replace(" at new ", " at ");
                      return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && Ae.set(e, B), B;
                    }
                  while (U >= 1 && z >= 0);
                break;
              }
          }
        } finally {
          Ve = !1, Ue.current = _, Ft(), Error.prepareStackTrace = i;
        }
        var H = e ? e.displayName || e.name : "", J = H ? ke(H) : "";
        return typeof e == "function" && Ae.set(e, J), J;
      }
      function Yt(e, t, n) {
        return Cr(e, !1);
      }
      function Wt(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function je(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Cr(e, Wt(e));
        if (typeof e == "string")
          return ke(e);
        switch (e) {
          case k:
            return ke("Suspense");
          case V:
            return ke("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case w:
              return Yt(e.render);
            case L:
              return je(e.type, t, n);
            case K: {
              var a = e, i = a._payload, _ = a._init;
              try {
                return je(_(i), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var wr = {}, Or = re.ReactDebugCurrentFrame;
      function xe(e) {
        if (e) {
          var t = e._owner, n = je(e.type, e._source, t ? t.type : null);
          Or.setExtraStackFrame(n);
        } else
          Or.setExtraStackFrame(null);
      }
      function Ut(e, t, n, a, i) {
        {
          var _ = Function.call.bind(_e);
          for (var p in e)
            if (_(e, p)) {
              var T = void 0;
              try {
                if (typeof e[p] != "function") {
                  var A = Error((a || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw A.name = "Invariant Violation", A;
                }
                T = e[p](t, p, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (U) {
                T = U;
              }
              T && !(T instanceof Error) && (xe(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, p, typeof T), xe(null)), T instanceof Error && !(T.message in wr) && (wr[T.message] = !0, xe(i), g("Failed %s type: %s", n, T.message), xe(null));
            }
        }
      }
      function be(e) {
        if (e) {
          var t = e._owner, n = je(e.type, e._source, t ? t.type : null);
          le(n);
        } else
          le(null);
      }
      var qe;
      qe = !1;
      function Pr() {
        if (G.current) {
          var e = ye(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Nt(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Vt(e) {
        return e != null ? Nt(e.__source) : "";
      }
      var kr = {};
      function qt(e) {
        var t = Pr();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function Ar(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = qt(t);
          if (!kr[n]) {
            kr[n] = !0;
            var a = "";
            e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + ye(e._owner.type) + "."), be(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), be(null);
          }
        }
      }
      function jr(e, t) {
        if (typeof e == "object") {
          if (te(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              he(a) && Ar(a, t);
            }
          else if (he(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = ae(e);
            if (typeof i == "function" && i !== e.entries)
              for (var _ = i.call(e), p; !(p = _.next()).done; )
                he(p.value) && Ar(p.value, t);
          }
        }
      }
      function xr(e) {
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
            var a = ye(t);
            Ut(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !qe) {
            qe = !0;
            var i = ye(t);
            g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zt(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              be(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), be(null);
              break;
            }
          }
          e.ref !== null && (be(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
        }
      }
      function Ir(e, t, n) {
        var a = mr(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = Vt(t);
          _ ? i += _ : i += Pr();
          var p;
          e === null ? p = "null" : te(e) ? p = "array" : e !== void 0 && e.$$typeof === S ? (p = "<" + (ye(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, g("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var T = at.apply(this, arguments);
        if (T == null)
          return T;
        if (a)
          for (var A = 2; A < arguments.length; A++)
            jr(arguments[A], e);
        return e === R ? zt(T) : xr(T), T;
      }
      var $r = !1;
      function Bt(e) {
        var t = Ir.bind(null, e);
        return t.type = e, $r || ($r = !0, X("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return X("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Ht(e, t, n) {
        for (var a = ut.apply(this, arguments), i = 2; i < arguments.length; i++)
          jr(arguments[i], a.type);
        return xr(a), a;
      }
      function Kt(e, t) {
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
      var Dr = !1, Ie = null;
      function Gt(e) {
        if (Ie === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = l && l[t];
            Ie = n.call(l, "timers").setImmediate;
          } catch {
            Ie = function(i) {
              Dr === !1 && (Dr = !0, typeof MessageChannel > "u" && g("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _ = new MessageChannel();
              _.port1.onmessage = i, _.port2.postMessage(void 0);
            };
          }
        return Ie(e);
      }
      var ge = 0, Mr = !1;
      function Jt(e) {
        {
          var t = ge;
          ge++, u.current === null && (u.current = []);
          var n = u.isBatchingLegacy, a;
          try {
            if (u.isBatchingLegacy = !0, a = e(), !n && u.didScheduleLegacyUpdate) {
              var i = u.current;
              i !== null && (u.didScheduleLegacyUpdate = !1, He(i));
            }
          } catch (H) {
            throw $e(t), H;
          } finally {
            u.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var _ = a, p = !1, T = {
              then: function(H, J) {
                p = !0, _.then(function(Z) {
                  $e(t), ge === 0 ? ze(Z, H, J) : H(Z);
                }, function(Z) {
                  $e(t), J(Z);
                });
              }
            };
            return !Mr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              p || (Mr = !0, g("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), T;
          } else {
            var A = a;
            if ($e(t), ge === 0) {
              var U = u.current;
              U !== null && (He(U), u.current = null);
              var z = {
                then: function(H, J) {
                  u.current === null ? (u.current = [], ze(A, H, J)) : H(A);
                }
              };
              return z;
            } else {
              var B = {
                then: function(H, J) {
                  H(A);
                }
              };
              return B;
            }
          }
        }
      }
      function $e(e) {
        e !== ge - 1 && g("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ge = e;
      }
      function ze(e, t, n) {
        {
          var a = u.current;
          if (a !== null)
            try {
              He(a), Gt(function() {
                a.length === 0 ? (u.current = null, t(e)) : ze(e, t, n);
              });
            } catch (i) {
              n(i);
            }
          else
            t(e);
        }
      }
      var Be = !1;
      function He(e) {
        if (!Be) {
          Be = !0;
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
            Be = !1;
          }
        }
      }
      var Xt = Ir, Qt = Ht, Zt = Bt, en = {
        map: Pe,
        forEach: dt,
        count: lt,
        toArray: pt,
        only: vt
      };
      b.Children = en, b.Component = c, b.Fragment = R, b.Profiler = C, b.PureComponent = E, b.StrictMode = I, b.Suspense = k, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, b.cloneElement = Qt, b.createContext = yt, b.createElement = Xt, b.createFactory = Zt, b.createRef = ee, b.forwardRef = gt, b.isValidElement = he, b.lazy = bt, b.memo = _t, b.startTransition = Kt, b.unstable_act = Jt, b.useCallback = Pt, b.useContext = Et, b.useDebugValue = jt, b.useDeferredValue = It, b.useEffect = Ct, b.useId = $t, b.useImperativeHandle = At, b.useInsertionEffect = wt, b.useLayoutEffect = Ot, b.useMemo = kt, b.useReducer = Tt, b.useRef = St, b.useState = Rt, b.useSyncExternalStore = Dt, b.useTransition = xt, b.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Se, Se.exports)), Se.exports;
}
process.env.NODE_ENV === "production" ? rr.exports = on() : rr.exports = an();
var un = rr.exports;
const sn = /* @__PURE__ */ Xr(un);
var tr = { exports: {} }, Me = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function cn() {
  if (Nr)
    return $;
  Nr = 1;
  var l = typeof Symbol == "function" && Symbol.for, b = l ? Symbol.for("react.element") : 60103, M = l ? Symbol.for("react.portal") : 60106, S = l ? Symbol.for("react.fragment") : 60107, x = l ? Symbol.for("react.strict_mode") : 60108, R = l ? Symbol.for("react.profiler") : 60114, I = l ? Symbol.for("react.provider") : 60109, C = l ? Symbol.for("react.context") : 60110, F = l ? Symbol.for("react.async_mode") : 60111, j = l ? Symbol.for("react.concurrent_mode") : 60111, w = l ? Symbol.for("react.forward_ref") : 60112, k = l ? Symbol.for("react.suspense") : 60113, V = l ? Symbol.for("react.suspense_list") : 60120, L = l ? Symbol.for("react.memo") : 60115, K = l ? Symbol.for("react.lazy") : 60116, W = l ? Symbol.for("react.block") : 60121, N = l ? Symbol.for("react.fundamental") : 60117, Q = l ? Symbol.for("react.responder") : 60118, ae = l ? Symbol.for("react.scope") : 60119;
  function q(u) {
    if (typeof u == "object" && u !== null) {
      var G = u.$$typeof;
      switch (G) {
        case b:
          switch (u = u.type, u) {
            case F:
            case j:
            case S:
            case R:
            case x:
            case k:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case C:
                case w:
                case K:
                case L:
                case I:
                  return u;
                default:
                  return G;
              }
          }
        case M:
          return G;
      }
    }
  }
  function Y(u) {
    return q(u) === j;
  }
  return $.AsyncMode = F, $.ConcurrentMode = j, $.ContextConsumer = C, $.ContextProvider = I, $.Element = b, $.ForwardRef = w, $.Fragment = S, $.Lazy = K, $.Memo = L, $.Portal = M, $.Profiler = R, $.StrictMode = x, $.Suspense = k, $.isAsyncMode = function(u) {
    return Y(u) || q(u) === F;
  }, $.isConcurrentMode = Y, $.isContextConsumer = function(u) {
    return q(u) === C;
  }, $.isContextProvider = function(u) {
    return q(u) === I;
  }, $.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === b;
  }, $.isForwardRef = function(u) {
    return q(u) === w;
  }, $.isFragment = function(u) {
    return q(u) === S;
  }, $.isLazy = function(u) {
    return q(u) === K;
  }, $.isMemo = function(u) {
    return q(u) === L;
  }, $.isPortal = function(u) {
    return q(u) === M;
  }, $.isProfiler = function(u) {
    return q(u) === R;
  }, $.isStrictMode = function(u) {
    return q(u) === x;
  }, $.isSuspense = function(u) {
    return q(u) === k;
  }, $.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === S || u === j || u === R || u === x || u === k || u === V || typeof u == "object" && u !== null && (u.$$typeof === K || u.$$typeof === L || u.$$typeof === I || u.$$typeof === C || u.$$typeof === w || u.$$typeof === N || u.$$typeof === Q || u.$$typeof === ae || u.$$typeof === W);
  }, $.typeOf = q, $;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function fn() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, b = l ? Symbol.for("react.element") : 60103, M = l ? Symbol.for("react.portal") : 60106, S = l ? Symbol.for("react.fragment") : 60107, x = l ? Symbol.for("react.strict_mode") : 60108, R = l ? Symbol.for("react.profiler") : 60114, I = l ? Symbol.for("react.provider") : 60109, C = l ? Symbol.for("react.context") : 60110, F = l ? Symbol.for("react.async_mode") : 60111, j = l ? Symbol.for("react.concurrent_mode") : 60111, w = l ? Symbol.for("react.forward_ref") : 60112, k = l ? Symbol.for("react.suspense") : 60113, V = l ? Symbol.for("react.suspense_list") : 60120, L = l ? Symbol.for("react.memo") : 60115, K = l ? Symbol.for("react.lazy") : 60116, W = l ? Symbol.for("react.block") : 60121, N = l ? Symbol.for("react.fundamental") : 60117, Q = l ? Symbol.for("react.responder") : 60118, ae = l ? Symbol.for("react.scope") : 60119;
    function q(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === S || f === j || f === R || f === x || f === k || f === V || typeof f == "object" && f !== null && (f.$$typeof === K || f.$$typeof === L || f.$$typeof === I || f.$$typeof === C || f.$$typeof === w || f.$$typeof === N || f.$$typeof === Q || f.$$typeof === ae || f.$$typeof === W);
    }
    function Y(f) {
      if (typeof f == "object" && f !== null) {
        var te = f.$$typeof;
        switch (te) {
          case b:
            var me = f.type;
            switch (me) {
              case F:
              case j:
              case S:
              case R:
              case x:
              case k:
                return me;
              default:
                var Ce = me && me.$$typeof;
                switch (Ce) {
                  case C:
                  case w:
                  case K:
                  case L:
                  case I:
                    return Ce;
                  default:
                    return te;
                }
            }
          case M:
            return te;
        }
      }
    }
    var u = F, G = j, ie = C, se = I, le = b, ce = w, de = S, pe = K, fe = L, oe = M, re = R, X = x, g = k, ue = !1;
    function ve(f) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(f) || Y(f) === F;
    }
    function r(f) {
      return Y(f) === j;
    }
    function o(f) {
      return Y(f) === C;
    }
    function s(f) {
      return Y(f) === I;
    }
    function d(f) {
      return typeof f == "object" && f !== null && f.$$typeof === b;
    }
    function c(f) {
      return Y(f) === w;
    }
    function m(f) {
      return Y(f) === S;
    }
    function y(f) {
      return Y(f) === K;
    }
    function v(f) {
      return Y(f) === L;
    }
    function h(f) {
      return Y(f) === M;
    }
    function E(f) {
      return Y(f) === R;
    }
    function P(f) {
      return Y(f) === x;
    }
    function ee(f) {
      return Y(f) === k;
    }
    D.AsyncMode = u, D.ConcurrentMode = G, D.ContextConsumer = ie, D.ContextProvider = se, D.Element = le, D.ForwardRef = ce, D.Fragment = de, D.Lazy = pe, D.Memo = fe, D.Portal = oe, D.Profiler = re, D.StrictMode = X, D.Suspense = g, D.isAsyncMode = ve, D.isConcurrentMode = r, D.isContextConsumer = o, D.isContextProvider = s, D.isElement = d, D.isForwardRef = c, D.isFragment = m, D.isLazy = y, D.isMemo = v, D.isPortal = h, D.isProfiler = E, D.isStrictMode = P, D.isSuspense = ee, D.isValidElementType = q, D.typeOf = Y;
  }()), D;
}
var qr;
function Qr() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Me.exports = cn() : Me.exports = fn()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, zr;
function ln() {
  if (zr)
    return Ge;
  zr = 1;
  var l = Object.getOwnPropertySymbols, b = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
  function S(R) {
    if (R == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(R);
  }
  function x() {
    try {
      if (!Object.assign)
        return !1;
      var R = new String("abc");
      if (R[5] = "de", Object.getOwnPropertyNames(R)[0] === "5")
        return !1;
      for (var I = {}, C = 0; C < 10; C++)
        I["_" + String.fromCharCode(C)] = C;
      var F = Object.getOwnPropertyNames(I).map(function(w) {
        return I[w];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        j[w] = w;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = x() ? Object.assign : function(R, I) {
    for (var C, F = S(R), j, w = 1; w < arguments.length; w++) {
      C = Object(arguments[w]);
      for (var k in C)
        b.call(C, k) && (F[k] = C[k]);
      if (l) {
        j = l(C);
        for (var V = 0; V < j.length; V++)
          M.call(C, j[V]) && (F[j[V]] = C[j[V]]);
      }
    }
    return F;
  }, Ge;
}
var Je, Br;
function nr() {
  if (Br)
    return Je;
  Br = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = l, Je;
}
var Xe, Hr;
function Zr() {
  return Hr || (Hr = 1, Xe = Function.call.bind(Object.prototype.hasOwnProperty)), Xe;
}
var Qe, Kr;
function dn() {
  if (Kr)
    return Qe;
  Kr = 1;
  var l = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var b = nr(), M = {}, S = Zr();
    l = function(R) {
      var I = "Warning: " + R;
      typeof console < "u" && console.error(I);
      try {
        throw new Error(I);
      } catch {
      }
    };
  }
  function x(R, I, C, F, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in R)
        if (S(R, w)) {
          var k;
          try {
            if (typeof R[w] != "function") {
              var V = Error(
                (F || "React class") + ": " + C + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw V.name = "Invariant Violation", V;
            }
            k = R[w](I, w, F, C, null, b);
          } catch (K) {
            k = K;
          }
          if (k && !(k instanceof Error) && l(
            (F || "React class") + ": type specification of " + C + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in M)) {
            M[k.message] = !0;
            var L = j ? j() : "";
            l(
              "Failed " + C + " type: " + k.message + (L ?? "")
            );
          }
        }
    }
  }
  return x.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (M = {});
  }, Qe = x, Qe;
}
var Ze, Gr;
function pn() {
  if (Gr)
    return Ze;
  Gr = 1;
  var l = Qr(), b = ln(), M = nr(), S = Zr(), x = dn(), R = function() {
  };
  process.env.NODE_ENV !== "production" && (R = function(C) {
    var F = "Warning: " + C;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  });
  function I() {
    return null;
  }
  return Ze = function(C, F) {
    var j = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function k(r) {
      var o = r && (j && r[j] || r[w]);
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
      node: ce(),
      objectOf: se,
      oneOf: ie,
      oneOfType: le,
      shape: pe,
      exact: fe
    };
    function K(r, o) {
      return r === o ? r !== 0 || 1 / r === 1 / o : r !== r && o !== o;
    }
    function W(r, o) {
      this.message = r, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function N(r) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, s = 0;
      function d(m, y, v, h, E, P, ee) {
        if (h = h || V, P = P || v, ee !== M) {
          if (F) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = h + ":" + v;
            !o[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            s < 3 && (R(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + h + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[te] = !0, s++);
          }
        }
        return y[v] == null ? m ? y[v] === null ? new W("The " + E + " `" + P + "` is marked as required " + ("in `" + h + "`, but its value is `null`.")) : new W("The " + E + " `" + P + "` is marked as required in " + ("`" + h + "`, but its value is `undefined`.")) : null : r(y, v, h, E, P);
      }
      var c = d.bind(null, !1);
      return c.isRequired = d.bind(null, !0), c;
    }
    function Q(r) {
      function o(s, d, c, m, y, v) {
        var h = s[d], E = X(h);
        if (E !== r) {
          var P = g(h);
          return new W(
            "Invalid " + m + " `" + y + "` of type " + ("`" + P + "` supplied to `" + c + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return N(o);
    }
    function ae() {
      return N(I);
    }
    function q(r) {
      function o(s, d, c, m, y) {
        if (typeof r != "function")
          return new W("Property `" + y + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var v = s[d];
        if (!Array.isArray(v)) {
          var h = X(v);
          return new W("Invalid " + m + " `" + y + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected an array."));
        }
        for (var E = 0; E < v.length; E++) {
          var P = r(v, E, c, m, y + "[" + E + "]", M);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return N(o);
    }
    function Y() {
      function r(o, s, d, c, m) {
        var y = o[s];
        if (!C(y)) {
          var v = X(y);
          return new W("Invalid " + c + " `" + m + "` of type " + ("`" + v + "` supplied to `" + d + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(r);
    }
    function u() {
      function r(o, s, d, c, m) {
        var y = o[s];
        if (!l.isValidElementType(y)) {
          var v = X(y);
          return new W("Invalid " + c + " `" + m + "` of type " + ("`" + v + "` supplied to `" + d + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(r);
    }
    function G(r) {
      function o(s, d, c, m, y) {
        if (!(s[d] instanceof r)) {
          var v = r.name || V, h = ve(s[d]);
          return new W("Invalid " + m + " `" + y + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return N(o);
    }
    function ie(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? R(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : R("Invalid argument supplied to oneOf, expected an array.")), I;
      function o(s, d, c, m, y) {
        for (var v = s[d], h = 0; h < r.length; h++)
          if (K(v, r[h]))
            return null;
        var E = JSON.stringify(r, function(ee, f) {
          var te = g(f);
          return te === "symbol" ? String(f) : f;
        });
        return new W("Invalid " + m + " `" + y + "` of value `" + String(v) + "` " + ("supplied to `" + c + "`, expected one of " + E + "."));
      }
      return N(o);
    }
    function se(r) {
      function o(s, d, c, m, y) {
        if (typeof r != "function")
          return new W("Property `" + y + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var v = s[d], h = X(v);
        if (h !== "object")
          return new W("Invalid " + m + " `" + y + "` of type " + ("`" + h + "` supplied to `" + c + "`, expected an object."));
        for (var E in v)
          if (S(v, E)) {
            var P = r(v, E, c, m, y + "." + E, M);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return N(o);
    }
    function le(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && R("Invalid argument supplied to oneOfType, expected an instance of array."), I;
      for (var o = 0; o < r.length; o++) {
        var s = r[o];
        if (typeof s != "function")
          return R(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(s) + " at index " + o + "."
          ), I;
      }
      function d(c, m, y, v, h) {
        for (var E = [], P = 0; P < r.length; P++) {
          var ee = r[P], f = ee(c, m, y, v, h, M);
          if (f == null)
            return null;
          f.data && S(f.data, "expectedType") && E.push(f.data.expectedType);
        }
        var te = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new W("Invalid " + v + " `" + h + "` supplied to " + ("`" + y + "`" + te + "."));
      }
      return N(d);
    }
    function ce() {
      function r(o, s, d, c, m) {
        return oe(o[s]) ? null : new W("Invalid " + c + " `" + m + "` supplied to " + ("`" + d + "`, expected a ReactNode."));
      }
      return N(r);
    }
    function de(r, o, s, d, c) {
      return new W(
        (r || "React class") + ": " + o + " type `" + s + "." + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function pe(r) {
      function o(s, d, c, m, y) {
        var v = s[d], h = X(v);
        if (h !== "object")
          return new W("Invalid " + m + " `" + y + "` of type `" + h + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var E in r) {
          var P = r[E];
          if (typeof P != "function")
            return de(c, m, y, E, g(P));
          var ee = P(v, E, c, m, y + "." + E, M);
          if (ee)
            return ee;
        }
        return null;
      }
      return N(o);
    }
    function fe(r) {
      function o(s, d, c, m, y) {
        var v = s[d], h = X(v);
        if (h !== "object")
          return new W("Invalid " + m + " `" + y + "` of type `" + h + "` " + ("supplied to `" + c + "`, expected `object`."));
        var E = b({}, s[d], r);
        for (var P in E) {
          var ee = r[P];
          if (S(r, P) && typeof ee != "function")
            return de(c, m, y, P, g(ee));
          if (!ee)
            return new W(
              "Invalid " + m + " `" + y + "` key `" + P + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(s[d], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var f = ee(v, P, c, m, y + "." + P, M);
          if (f)
            return f;
        }
        return null;
      }
      return N(o);
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
          if (r === null || C(r))
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
    function ve(r) {
      return !r.constructor || !r.constructor.name ? V : r.constructor.name;
    }
    return L.checkPropTypes = x, L.resetWarningCache = x.resetWarningCache, L.PropTypes = L, L;
  }, Ze;
}
var er, Jr;
function vn() {
  if (Jr)
    return er;
  Jr = 1;
  var l = nr();
  function b() {
  }
  function M() {
  }
  return M.resetWarningCache = b, er = function() {
    function S(I, C, F, j, w, k) {
      if (k !== l) {
        var V = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw V.name = "Invariant Violation", V;
      }
    }
    S.isRequired = S;
    function x() {
      return S;
    }
    var R = {
      array: S,
      bigint: S,
      bool: S,
      func: S,
      number: S,
      object: S,
      string: S,
      symbol: S,
      any: S,
      arrayOf: x,
      element: S,
      elementType: S,
      instanceOf: x,
      node: S,
      objectOf: x,
      oneOf: x,
      oneOfType: x,
      shape: x,
      exact: x,
      checkPropTypes: M,
      resetWarningCache: b
    };
    return R.PropTypes = R, R;
  }, er;
}
if (process.env.NODE_ENV !== "production") {
  var yn = Qr(), mn = !0;
  tr.exports = pn()(yn.isElement, mn);
} else
  tr.exports = vn()();
var hn = tr.exports;
const Te = /* @__PURE__ */ Xr(hn), et = ({ backgroundColor: l, primary: b, size: M, ...S }) => {
  const x = b ? "component-craftsman--primary" : "component-craftsman--secondary";
  return /* @__PURE__ */ sn.createElement(
    "button",
    {
      type: "button",
      ...S,
      style: l && { backgroundColor: l },
      className: ["component-craftsman-button", `component-craftsman--${M}`, x].join(" ")
    },
    S.label
  );
};
et.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: Te.bool,
  /**
   * What background color to use
   */
  backgroundColor: Te.string,
  /**
   * How large should the button be?
   */
  size: Te.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: Te.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: Te.func
};
et.defaultProps = {
  backgroundColor: null,
  primary: !1,
  size: "medium",
  onClick: void 0
};
export {
  et as BasicButton
};
