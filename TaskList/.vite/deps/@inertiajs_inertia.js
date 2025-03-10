import {
  require_cjs,
  require_lib
} from "./chunk-FJGUQBOV.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";
    var enhanceError = require_enhanceError();
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    var createError = require_createError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs support document.cookie
      /* @__PURE__ */ function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }()
    ) : (
      // Non standard browser env (web workers, react-native) lack needed support.
      /* @__PURE__ */ function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }()
    );
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
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
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }()
    ) : (
      // Non standard browser envs (web workers, react-native) lack needed support.
      /* @__PURE__ */ function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }()
    );
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(
            timeoutErrorMessage,
            config,
            config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
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
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/package.json
var require_package = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/package.json"(exports, module) {
    module.exports = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    var pkg = require_package();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }
    validators.transitional = function transitional(validator, version, message) {
      var isDeprecated = version && isOlderVersion(version);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed in " + version));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module.exports = {
      isOlderVersion,
      assertOptions,
      validators
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    module.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };
    axios.Cancel = require_Cancel();
    axios.CancelToken = require_CancelToken();
    axios.isCancel = require_isCancel();
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = require_spread();
    axios.isAxiosError = require_isAxiosError();
    module.exports = axios;
    module.exports.default = axios;
  }
});

// node_modules/@inertiajs/inertia/node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/@inertiajs/inertia/node_modules/axios/index.js"(exports, module) {
    module.exports = require_axios();
  }
});

// node_modules/@inertiajs/inertia/dist/index.js
var require_dist = __commonJS({
  "node_modules/@inertiajs/inertia/dist/index.js"(exports) {
    function e(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2.default : e2;
    }
    var t = e(require_axios2());
    var n = require_lib();
    var i = e(require_cjs());
    function r() {
      return (r = Object.assign ? Object.assign.bind() : function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var i2 in n2) Object.prototype.hasOwnProperty.call(n2, i2) && (e2[i2] = n2[i2]);
        }
        return e2;
      }).apply(this, arguments);
    }
    var o;
    var s = { modal: null, listener: null, show: function(e2) {
      var t2 = this;
      "object" == typeof e2 && (e2 = "All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>" + JSON.stringify(e2));
      var n2 = document.createElement("html");
      n2.innerHTML = e2, n2.querySelectorAll("a").forEach(function(e3) {
        return e3.setAttribute("target", "_top");
      }), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", function() {
        return t2.hide();
      });
      var i2 = document.createElement("iframe");
      if (i2.style.backgroundColor = "white", i2.style.borderRadius = "5px", i2.style.width = "100%", i2.style.height = "100%", this.modal.appendChild(i2), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !i2.contentWindow) throw new Error("iframe not yet ready.");
      i2.contentWindow.document.open(), i2.contentWindow.document.write(n2.outerHTML), i2.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
    }, hide: function() {
      this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
    }, hideOnEscape: function(e2) {
      27 === e2.keyCode && this.hide();
    } };
    function a(e2, t2) {
      var n2;
      return function() {
        var i2 = arguments, r2 = this;
        clearTimeout(n2), n2 = setTimeout(function() {
          return e2.apply(r2, [].slice.call(i2));
        }, t2);
      };
    }
    function c(e2, t2, n2) {
      for (var i2 in void 0 === t2 && (t2 = new FormData()), void 0 === n2 && (n2 = null), e2 = e2 || {}) Object.prototype.hasOwnProperty.call(e2, i2) && d(t2, l(n2, i2), e2[i2]);
      return t2;
    }
    function l(e2, t2) {
      return e2 ? e2 + "[" + t2 + "]" : t2;
    }
    function d(e2, t2, n2) {
      return Array.isArray(n2) ? Array.from(n2.keys()).forEach(function(i2) {
        return d(e2, l(t2, i2.toString()), n2[i2]);
      }) : n2 instanceof Date ? e2.append(t2, n2.toISOString()) : n2 instanceof File ? e2.append(t2, n2, n2.name) : n2 instanceof Blob ? e2.append(t2, n2) : "boolean" == typeof n2 ? e2.append(t2, n2 ? "1" : "0") : "string" == typeof n2 ? e2.append(t2, n2) : "number" == typeof n2 ? e2.append(t2, "" + n2) : null == n2 ? e2.append(t2, "") : void c(n2, e2, t2);
    }
    function u(e2) {
      return new URL(e2.toString(), window.location.toString());
    }
    function h(e2, t2, r2, o2) {
      void 0 === o2 && (o2 = "brackets");
      var s2 = /^https?:\/\//.test(t2.toString()), a2 = s2 || t2.toString().startsWith("/"), c2 = !a2 && !t2.toString().startsWith("#") && !t2.toString().startsWith("?"), l2 = t2.toString().includes("?") || e2 === exports.Method.GET && Object.keys(r2).length, d2 = t2.toString().includes("#"), u2 = new URL(t2.toString(), "http://localhost");
      return e2 === exports.Method.GET && Object.keys(r2).length && (u2.search = n.stringify(i(n.parse(u2.search, { ignoreQueryPrefix: true }), r2), { encodeValuesOnly: true, arrayFormat: o2 }), r2 = {}), [[s2 ? u2.protocol + "//" + u2.host : "", a2 ? u2.pathname : "", c2 ? u2.pathname.substring(1) : "", l2 ? u2.search : "", d2 ? u2.hash : ""].join(""), r2];
    }
    function p(e2) {
      return (e2 = new URL(e2.href)).hash = "", e2;
    }
    function f(e2, t2) {
      return document.dispatchEvent(new CustomEvent("inertia:" + e2, t2));
    }
    (o = exports.Method || (exports.Method = {})).GET = "get", o.POST = "post", o.PUT = "put", o.PATCH = "patch", o.DELETE = "delete";
    var v = function(e2) {
      return f("finish", { detail: { visit: e2 } });
    };
    var m = function(e2) {
      return f("navigate", { detail: { page: e2 } });
    };
    var g = "undefined" == typeof window;
    var w = function() {
      function e2() {
        this.visitId = null;
      }
      var n2 = e2.prototype;
      return n2.init = function(e3) {
        var t2 = e3.resolveComponent, n3 = e3.swapComponent;
        this.page = e3.initialPage, this.resolveComponent = t2, this.swapComponent = n3, this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
      }, n2.handleInitialPageVisit = function(e3) {
        this.page.url += window.location.hash, this.setPage(e3, { preserveState: true }).then(function() {
          return m(e3);
        });
      }, n2.setupEventListeners = function() {
        window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", a(this.handleScrollEvent.bind(this), 100), true);
      }, n2.scrollRegions = function() {
        return document.querySelectorAll("[scroll-region]");
      }, n2.handleScrollEvent = function(e3) {
        "function" == typeof e3.target.hasAttribute && e3.target.hasAttribute("scroll-region") && this.saveScrollPositions();
      }, n2.saveScrollPositions = function() {
        this.replaceState(r({}, this.page, { scrollRegions: Array.from(this.scrollRegions()).map(function(e3) {
          return { top: e3.scrollTop, left: e3.scrollLeft };
        }) }));
      }, n2.resetScrollPositions = function() {
        var e3;
        window.scrollTo(0, 0), this.scrollRegions().forEach(function(e4) {
          "function" == typeof e4.scrollTo ? e4.scrollTo(0, 0) : (e4.scrollTop = 0, e4.scrollLeft = 0);
        }), this.saveScrollPositions(), window.location.hash && (null == (e3 = document.getElementById(window.location.hash.slice(1))) || e3.scrollIntoView());
      }, n2.restoreScrollPositions = function() {
        var e3 = this;
        this.page.scrollRegions && this.scrollRegions().forEach(function(t2, n3) {
          var i2 = e3.page.scrollRegions[n3];
          i2 && ("function" == typeof t2.scrollTo ? t2.scrollTo(i2.left, i2.top) : (t2.scrollTop = i2.top, t2.scrollLeft = i2.left));
        });
      }, n2.isBackForwardVisit = function() {
        return window.history.state && window.performance && window.performance.getEntriesByType("navigation").length > 0 && "back_forward" === window.performance.getEntriesByType("navigation")[0].type;
      }, n2.handleBackForwardVisit = function(e3) {
        var t2 = this;
        window.history.state.version = e3.version, this.setPage(window.history.state, { preserveScroll: true, preserveState: true }).then(function() {
          t2.restoreScrollPositions(), m(e3);
        });
      }, n2.locationVisit = function(e3, t2) {
        try {
          window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify({ preserveScroll: t2 })), window.location.href = e3.href, p(window.location).href === p(e3).href && window.location.reload();
        } catch (e4) {
          return false;
        }
      }, n2.isLocationVisit = function() {
        try {
          return null !== window.sessionStorage.getItem("inertiaLocationVisit");
        } catch (e3) {
          return false;
        }
      }, n2.handleLocationVisit = function(e3) {
        var t2, n3, i2, r2, o2 = this, s2 = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
        window.sessionStorage.removeItem("inertiaLocationVisit"), e3.url += window.location.hash, e3.rememberedState = null != (t2 = null == (n3 = window.history.state) ? void 0 : n3.rememberedState) ? t2 : {}, e3.scrollRegions = null != (i2 = null == (r2 = window.history.state) ? void 0 : r2.scrollRegions) ? i2 : [], this.setPage(e3, { preserveScroll: s2.preserveScroll, preserveState: true }).then(function() {
          s2.preserveScroll && o2.restoreScrollPositions(), m(e3);
        });
      }, n2.isLocationVisitResponse = function(e3) {
        return e3 && 409 === e3.status && e3.headers["x-inertia-location"];
      }, n2.isInertiaResponse = function(e3) {
        return null == e3 ? void 0 : e3.headers["x-inertia"];
      }, n2.createVisitId = function() {
        return this.visitId = {}, this.visitId;
      }, n2.cancelVisit = function(e3, t2) {
        var n3 = t2.cancelled, i2 = void 0 !== n3 && n3, r2 = t2.interrupted, o2 = void 0 !== r2 && r2;
        !e3 || e3.completed || e3.cancelled || e3.interrupted || (e3.cancelToken.cancel(), e3.onCancel(), e3.completed = false, e3.cancelled = i2, e3.interrupted = o2, v(e3), e3.onFinish(e3));
      }, n2.finishVisit = function(e3) {
        e3.cancelled || e3.interrupted || (e3.completed = true, e3.cancelled = false, e3.interrupted = false, v(e3), e3.onFinish(e3));
      }, n2.resolvePreserveOption = function(e3, t2) {
        return "function" == typeof e3 ? e3(t2) : "errors" === e3 ? Object.keys(t2.props.errors || {}).length > 0 : e3;
      }, n2.visit = function(e3, n3) {
        var i2 = this, o2 = void 0 === n3 ? {} : n3, a2 = o2.method, l2 = void 0 === a2 ? exports.Method.GET : a2, d2 = o2.data, v2 = void 0 === d2 ? {} : d2, m2 = o2.replace, g2 = void 0 !== m2 && m2, w2 = o2.preserveScroll, y2 = void 0 !== w2 && w2, S2 = o2.preserveState, b = void 0 !== S2 && S2, E = o2.only, P = void 0 === E ? [] : E, T = o2.headers, I = void 0 === T ? {} : T, x = o2.errorBag, V = void 0 === x ? "" : x, L = o2.forceFormData, O = void 0 !== L && L, k = o2.onCancelToken, C = void 0 === k ? function() {
        } : k, M = o2.onBefore, A = void 0 === M ? function() {
        } : M, j = o2.onStart, F = void 0 === j ? function() {
        } : j, R = o2.onProgress, D = void 0 === R ? function() {
        } : R, B = o2.onFinish, q = void 0 === B ? function() {
        } : B, N = o2.onCancel, H = void 0 === N ? function() {
        } : N, W = o2.onSuccess, G = void 0 === W ? function() {
        } : W, U = o2.onError, X = void 0 === U ? function() {
        } : U, J = o2.queryStringArrayFormat, K = void 0 === J ? "brackets" : J, _ = "string" == typeof e3 ? u(e3) : e3;
        if (!function e4(t2) {
          return t2 instanceof File || t2 instanceof Blob || t2 instanceof FileList && t2.length > 0 || t2 instanceof FormData && Array.from(t2.values()).some(function(t3) {
            return e4(t3);
          }) || "object" == typeof t2 && null !== t2 && Object.values(t2).some(function(t3) {
            return e4(t3);
          });
        }(v2) && !O || v2 instanceof FormData || (v2 = c(v2)), !(v2 instanceof FormData)) {
          var z = h(l2, _, v2, K), Q = z[1];
          _ = u(z[0]), v2 = Q;
        }
        var Y = { url: _, method: l2, data: v2, replace: g2, preserveScroll: y2, preserveState: b, only: P, headers: I, errorBag: V, forceFormData: O, queryStringArrayFormat: K, cancelled: false, completed: false, interrupted: false };
        if (false !== A(Y) && function(e4) {
          return f("before", { cancelable: true, detail: { visit: e4 } });
        }(Y)) {
          this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: true }), this.saveScrollPositions();
          var Z = this.createVisitId();
          this.activeVisit = r({}, Y, { onCancelToken: C, onBefore: A, onStart: F, onProgress: D, onFinish: q, onCancel: H, onSuccess: G, onError: X, queryStringArrayFormat: K, cancelToken: t.CancelToken.source() }), C({ cancel: function() {
            i2.activeVisit && i2.cancelVisit(i2.activeVisit, { cancelled: true });
          } }), function(e4) {
            f("start", { detail: { visit: e4 } });
          }(Y), F(Y), t({ method: l2, url: p(_).href, data: l2 === exports.Method.GET ? {} : v2, params: l2 === exports.Method.GET ? v2 : {}, cancelToken: this.activeVisit.cancelToken.token, headers: r({}, I, { Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true }, P.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": P.join(",") } : {}, V && V.length ? { "X-Inertia-Error-Bag": V } : {}, this.page.version ? { "X-Inertia-Version": this.page.version } : {}), onUploadProgress: function(e4) {
            v2 instanceof FormData && (e4.percentage = Math.round(e4.loaded / e4.total * 100), function(e5) {
              f("progress", { detail: { progress: e5 } });
            }(e4), D(e4));
          } }).then(function(e4) {
            var t2;
            if (!i2.isInertiaResponse(e4)) return Promise.reject({ response: e4 });
            var n4 = e4.data;
            P.length && n4.component === i2.page.component && (n4.props = r({}, i2.page.props, n4.props)), y2 = i2.resolvePreserveOption(y2, n4), (b = i2.resolvePreserveOption(b, n4)) && null != (t2 = window.history.state) && t2.rememberedState && n4.component === i2.page.component && (n4.rememberedState = window.history.state.rememberedState);
            var o3 = _, s2 = u(n4.url);
            return o3.hash && !s2.hash && p(o3).href === s2.href && (s2.hash = o3.hash, n4.url = s2.href), i2.setPage(n4, { visitId: Z, replace: g2, preserveScroll: y2, preserveState: b });
          }).then(function() {
            var e4 = i2.page.props.errors || {};
            if (Object.keys(e4).length > 0) {
              var t2 = V ? e4[V] ? e4[V] : {} : e4;
              return function(e5) {
                f("error", { detail: { errors: e5 } });
              }(t2), X(t2);
            }
            return f("success", { detail: { page: i2.page } }), G(i2.page);
          }).catch(function(e4) {
            if (i2.isInertiaResponse(e4.response)) return i2.setPage(e4.response.data, { visitId: Z });
            if (i2.isLocationVisitResponse(e4.response)) {
              var t2 = u(e4.response.headers["x-inertia-location"]), n4 = _;
              n4.hash && !t2.hash && p(n4).href === t2.href && (t2.hash = n4.hash), i2.locationVisit(t2, true === y2);
            } else {
              if (!e4.response) return Promise.reject(e4);
              f("invalid", { cancelable: true, detail: { response: e4.response } }) && s.show(e4.response.data);
            }
          }).then(function() {
            i2.activeVisit && i2.finishVisit(i2.activeVisit);
          }).catch(function(e4) {
            if (!t.isCancel(e4)) {
              var n4 = f("exception", { cancelable: true, detail: { exception: e4 } });
              if (i2.activeVisit && i2.finishVisit(i2.activeVisit), n4) return Promise.reject(e4);
            }
          });
        }
      }, n2.setPage = function(e3, t2) {
        var n3 = this, i2 = void 0 === t2 ? {} : t2, r2 = i2.visitId, o2 = void 0 === r2 ? this.createVisitId() : r2, s2 = i2.replace, a2 = void 0 !== s2 && s2, c2 = i2.preserveScroll, l2 = void 0 !== c2 && c2, d2 = i2.preserveState, h2 = void 0 !== d2 && d2;
        return Promise.resolve(this.resolveComponent(e3.component)).then(function(t3) {
          o2 === n3.visitId && (e3.scrollRegions = e3.scrollRegions || [], e3.rememberedState = e3.rememberedState || {}, (a2 = a2 || u(e3.url).href === window.location.href) ? n3.replaceState(e3) : n3.pushState(e3), n3.swapComponent({ component: t3, page: e3, preserveState: h2 }).then(function() {
            l2 || n3.resetScrollPositions(), a2 || m(e3);
          }));
        });
      }, n2.pushState = function(e3) {
        this.page = e3, window.history.pushState(e3, "", e3.url);
      }, n2.replaceState = function(e3) {
        this.page = e3, window.history.replaceState(e3, "", e3.url);
      }, n2.handlePopstateEvent = function(e3) {
        var t2 = this;
        if (null !== e3.state) {
          var n3 = e3.state, i2 = this.createVisitId();
          Promise.resolve(this.resolveComponent(n3.component)).then(function(e4) {
            i2 === t2.visitId && (t2.page = n3, t2.swapComponent({ component: e4, page: n3, preserveState: false }).then(function() {
              t2.restoreScrollPositions(), m(n3);
            }));
          });
        } else {
          var o2 = u(this.page.url);
          o2.hash = window.location.hash, this.replaceState(r({}, this.page, { url: o2.href })), this.resetScrollPositions();
        }
      }, n2.get = function(e3, t2, n3) {
        return void 0 === t2 && (t2 = {}), void 0 === n3 && (n3 = {}), this.visit(e3, r({}, n3, { method: exports.Method.GET, data: t2 }));
      }, n2.reload = function(e3) {
        return void 0 === e3 && (e3 = {}), this.visit(window.location.href, r({}, e3, { preserveScroll: true, preserveState: true }));
      }, n2.replace = function(e3, t2) {
        var n3;
        return void 0 === t2 && (t2 = {}), console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia." + (null != (n3 = t2.method) ? n3 : "get") + "() instead."), this.visit(e3, r({ preserveState: true }, t2, { replace: true }));
      }, n2.post = function(e3, t2, n3) {
        return void 0 === t2 && (t2 = {}), void 0 === n3 && (n3 = {}), this.visit(e3, r({ preserveState: true }, n3, { method: exports.Method.POST, data: t2 }));
      }, n2.put = function(e3, t2, n3) {
        return void 0 === t2 && (t2 = {}), void 0 === n3 && (n3 = {}), this.visit(e3, r({ preserveState: true }, n3, { method: exports.Method.PUT, data: t2 }));
      }, n2.patch = function(e3, t2, n3) {
        return void 0 === t2 && (t2 = {}), void 0 === n3 && (n3 = {}), this.visit(e3, r({ preserveState: true }, n3, { method: exports.Method.PATCH, data: t2 }));
      }, n2.delete = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this.visit(e3, r({ preserveState: true }, t2, { method: exports.Method.DELETE }));
      }, n2.remember = function(e3, t2) {
        var n3, i2;
        void 0 === t2 && (t2 = "default"), g || this.replaceState(r({}, this.page, { rememberedState: r({}, null == (n3 = this.page) ? void 0 : n3.rememberedState, (i2 = {}, i2[t2] = e3, i2)) }));
      }, n2.restore = function(e3) {
        var t2, n3;
        if (void 0 === e3 && (e3 = "default"), !g) return null == (t2 = window.history.state) || null == (n3 = t2.rememberedState) ? void 0 : n3[e3];
      }, n2.on = function(e3, t2) {
        var n3 = function(e4) {
          var n4 = t2(e4);
          e4.cancelable && !e4.defaultPrevented && false === n4 && e4.preventDefault();
        };
        return document.addEventListener("inertia:" + e3, n3), function() {
          return document.removeEventListener("inertia:" + e3, n3);
        };
      }, e2;
    }();
    var y = { buildDOMElement: function(e2) {
      var t2 = document.createElement("template");
      t2.innerHTML = e2;
      var n2 = t2.content.firstChild;
      if (!e2.startsWith("<script ")) return n2;
      var i2 = document.createElement("script");
      return i2.innerHTML = n2.innerHTML, n2.getAttributeNames().forEach(function(e3) {
        i2.setAttribute(e3, n2.getAttribute(e3) || "");
      }), i2;
    }, isInertiaManagedElement: function(e2) {
      return e2.nodeType === Node.ELEMENT_NODE && null !== e2.getAttribute("inertia");
    }, findMatchingElementIndex: function(e2, t2) {
      var n2 = e2.getAttribute("inertia");
      return null !== n2 ? t2.findIndex(function(e3) {
        return e3.getAttribute("inertia") === n2;
      }) : -1;
    }, update: a(function(e2) {
      var t2 = this, n2 = e2.map(function(e3) {
        return t2.buildDOMElement(e3);
      });
      Array.from(document.head.childNodes).filter(function(e3) {
        return t2.isInertiaManagedElement(e3);
      }).forEach(function(e3) {
        var i2 = t2.findMatchingElementIndex(e3, n2);
        if (-1 !== i2) {
          var r2, o2 = n2.splice(i2, 1)[0];
          o2 && !e3.isEqualNode(o2) && (null == e3 || null == (r2 = e3.parentNode) || r2.replaceChild(o2, e3));
        } else {
          var s2;
          null == e3 || null == (s2 = e3.parentNode) || s2.removeChild(e3);
        }
      }), n2.forEach(function(e3) {
        return document.head.appendChild(e3);
      });
    }, 1) };
    var S = new w();
    exports.Inertia = S, exports.createHeadManager = function(e2, t2, n2) {
      var i2 = {}, r2 = 0;
      function o2() {
        var e3 = Object.values(i2).reduce(function(e4, t3) {
          return e4.concat(t3);
        }, []).reduce(function(e4, n3) {
          if (-1 === n3.indexOf("<")) return e4;
          if (0 === n3.indexOf("<title ")) {
            var i3 = n3.match(/(<title [^>]+>)(.*?)(<\/title>)/);
            return e4.title = i3 ? "" + i3[1] + t2(i3[2]) + i3[3] : n3, e4;
          }
          var r3 = n3.match(/ inertia="[^"]+"/);
          return r3 ? e4[r3[0]] = n3 : e4[Object.keys(e4).length] = n3, e4;
        }, {});
        return Object.values(e3);
      }
      function s2() {
        e2 ? n2(o2()) : y.update(o2());
      }
      return { createProvider: function() {
        var e3 = function() {
          var e4 = r2 += 1;
          return i2[e4] = [], e4.toString();
        }();
        return { update: function(t3) {
          return function(e4, t4) {
            void 0 === t4 && (t4 = []), null !== e4 && Object.keys(i2).indexOf(e4) > -1 && (i2[e4] = t4), s2();
          }(e3, t3);
        }, disconnect: function() {
          return function(e4) {
            null !== e4 && -1 !== Object.keys(i2).indexOf(e4) && (delete i2[e4], s2());
          }(e3);
        } };
      } };
    }, exports.hrefToUrl = u, exports.mergeDataIntoQueryString = h, exports.shouldIntercept = function(e2) {
      var t2 = "a" === e2.currentTarget.tagName.toLowerCase();
      return !(e2.target && null != e2 && e2.target.isContentEditable || e2.defaultPrevented || t2 && e2.which > 1 || t2 && e2.altKey || t2 && e2.ctrlKey || t2 && e2.metaKey || t2 && e2.shiftKey);
    }, exports.urlWithoutHash = p;
  }
});
export default require_dist();
//# sourceMappingURL=@inertiajs_inertia.js.map
