import {
  require_cjs,
  require_lib
} from "./chunk-FJGUQBOV.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  axios_default
} from "./chunk-ZGTSSUN3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/@inertiajs/core/dist/index.esm.js
var import_deepmerge = __toESM(require_cjs());
var $ = __toESM(require_lib());
function F(r, e) {
  let t;
  return function(...i) {
    clearTimeout(t), t = setTimeout(() => r.apply(this, i), e);
  };
}
function P(r, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${r}`, e));
}
var _ = (r) => P("before", { cancelable: true, detail: { visit: r } });
var pe = (r) => P("error", { detail: { errors: r } });
var de = (r) => P("exception", { cancelable: true, detail: { exception: r } });
var he = (r) => P("finish", { detail: { visit: r } });
var me = (r) => P("invalid", { cancelable: true, detail: { response: r } });
var R = (r) => P("navigate", { detail: { page: r } });
var fe = (r) => P("progress", { detail: { progress: r } });
var ge = (r) => P("start", { detail: { visit: r } });
var ve = (r) => P("success", { detail: { page: r } });
var be = (r, e) => P("prefetched", { detail: { fetchedAt: Date.now(), response: r.data, visit: e } });
var ye = (r) => P("prefetching", { detail: { visit: r } });
var u = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    let i = this.get(e);
    i === null ? this.set(e, t) : this.set(e, { ...i, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    let i = this.get(e);
    i !== null && (delete i[t], this.set(e, i));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return false;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
u.locationVisitKey = "inertiaLocationVisit";
var Pe = async (r) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let e = Se(), t = await Ee(), i = await je(t);
  if (!i) throw new Error("Unable to encrypt history");
  return await $e(e, i, r);
};
var T = { key: "historyKey", iv: "historyIv" };
var we = async (r) => {
  let e = Se(), t = await Ee();
  if (!t) throw new Error("Unable to decrypt history");
  return await Be(e, t, r);
};
var $e = async (r, e, t) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(t);
  let i = new TextEncoder(), n = JSON.stringify(t), a = new Uint8Array(n.length * 3), c = i.encodeInto(n, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: r }, e, a.subarray(0, c.written));
};
var Be = async (r, e, t) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(t);
  let i = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: r }, e, t);
  return JSON.parse(new TextDecoder().decode(i));
};
var Se = () => {
  let r = u.get(T.iv);
  if (r) return new Uint8Array(r);
  let e = window.crypto.getRandomValues(new Uint8Array(12));
  return u.set(T.iv, Array.from(e)), e;
};
var Ge = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
var Ke = async (r) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let e = await window.crypto.subtle.exportKey("raw", r);
  u.set(T.key, Array.from(new Uint8Array(e)));
};
var je = async (r) => {
  if (r) return r;
  let e = await Ge();
  return e ? (await Ke(e), e) : null;
};
var Ee = async () => {
  let r = u.get(T.key);
  return r ? await window.crypto.subtle.importKey("raw", new Uint8Array(r), { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]) : null;
};
var g = class {
  static save() {
    o.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.save(), window.location.hash && setTimeout(() => {
      var _a;
      return (_a = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : _a.scrollIntoView();
    });
  }
  static restore(e) {
    this.restoreDocument(), this.regions().forEach((t, i) => {
      let n = e[i];
      n && (typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left));
    });
  }
  static restoreDocument() {
    let e = o.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    o.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function M(r) {
  return r instanceof File || r instanceof Blob || r instanceof FileList && r.length > 0 || r instanceof FormData && Array.from(r.values()).some((e) => M(e)) || typeof r == "object" && r !== null && Object.values(r).some((e) => M(e));
}
var Y = (r) => r instanceof FormData;
function Z(r, e = new FormData(), t = null) {
  r = r || {};
  for (let i in r) Object.prototype.hasOwnProperty.call(r, i) && xe(e, Re(t, i), r[i]);
  return e;
}
function Re(r, e) {
  return r ? r + "[" + e + "]" : e;
}
function xe(r, e, t) {
  if (Array.isArray(t)) return Array.from(t.keys()).forEach((i) => xe(r, Re(e, i.toString()), t[i]));
  if (t instanceof Date) return r.append(e, t.toISOString());
  if (t instanceof File) return r.append(e, t, t.name);
  if (t instanceof Blob) return r.append(e, t);
  if (typeof t == "boolean") return r.append(e, t ? "1" : "0");
  if (typeof t == "string") return r.append(e, t);
  if (typeof t == "number") return r.append(e, `${t}`);
  if (t == null) return r.append(e, "");
  Z(t, r, e);
}
function y(r) {
  return new URL(r.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var Ce = (r, e, t, i, n) => {
  let a = typeof r == "string" ? y(r) : r;
  if ((M(e) || i) && !Y(e) && (e = Z(e)), Y(e)) return [a, e];
  let [c, d] = Te(t, a, e, n);
  return [y(c), d];
};
function Te(r, e, t, i = "brackets") {
  let n = /^https?:\/\//.test(e.toString()), a = n || e.toString().startsWith("/"), c = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), d = e.toString().includes("?") || r === "get" && Object.keys(t).length, m = e.toString().includes("#"), h = new URL(e.toString(), "http://localhost");
  return r === "get" && Object.keys(t).length && (h.search = $.stringify((0, import_deepmerge.default)($.parse(h.search, { ignoreQueryPrefix: true }), t), { encodeValuesOnly: true, arrayFormat: i }), t = {}), [[n ? `${h.protocol}//${h.host}` : "", a ? h.pathname : "", c ? h.pathname.substring(1) : "", d ? h.search : "", m ? h.hash : ""].join(""), t];
}
function I(r) {
  return r = new URL(r.href), r.hash = "", r;
}
var ee = (r, e) => {
  r.hash && !e.hash && I(r).href === e.href && (e.hash = r.hash);
};
var O = (r, e) => I(r).href === I(e).href;
var te = class {
  constructor() {
    this.componentId = {};
    this.listeners = [];
    this.isFirstPageLoad = true;
    this.cleared = false;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: i }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = i, this;
  }
  set(e, { replace: t = false, preserveScroll: i = false, preserveState: n = false } = {}) {
    this.componentId = {};
    let a = this.componentId;
    return e.clearHistory && o.clear(), this.resolve(e.component).then((c) => {
      if (a !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let d = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || O(y(e.url), d), new Promise((m) => {
        t ? o.replaceState(e, () => m(null)) : o.pushState(e, () => m(null));
      }).then(() => {
        let m = !this.isTheSame(e);
        return this.page = e, this.cleared = false, m && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = false, this.swap({ component: c, page: e, preserveState: n }).then(() => {
          i || g.reset(), w.fireInternalEvent("loadDeferredProps"), t || R(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = false } = {}) {
    return this.resolve(e.component).then((i) => (this.page = e, this.cleared = false, o.setCurrent(e), this.swap({ component: i, page: e, preserveState: t })));
  }
  clear() {
    this.cleared = true;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({ component: e, page: t, preserveState: i }) {
    return this.swapComponent({ component: e, page: t, preserveState: i });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((i) => i.event !== e && i.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
};
var s = new te();
var q = class {
  constructor() {
    this.items = [];
    this.processingPromise = null;
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    let e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
};
var D = typeof window > "u";
var U = new q();
var qe = !D && /CriOS/.test(window.navigator.userAgent);
var re = class {
  constructor() {
    this.rememberedState = "rememberedState";
    this.scrollRegions = "scrollRegions";
    this.preserveUrl = false;
    this.current = {};
    this.initialState = null;
  }
  remember(e, t) {
    var _a;
    this.replaceState({ ...s.get(), rememberedState: { ...((_a = s.get()) == null ? void 0 : _a.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var _a, _b;
    if (!D) return (_b = (_a = this.initialState) == null ? void 0 : _a[this.rememberedState]) == null ? void 0 : _b[e];
  }
  pushState(e, t = null) {
    if (!D) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, U.add(() => this.getPageData(e).then((i) => {
        let n = () => {
          this.doPushState({ page: i }, e.url), t && t();
        };
        qe ? setTimeout(n) : n();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? Pe(e).then(t) : t(e));
  }
  processQueue() {
    return U.process();
  }
  decrypt(e = null) {
    var _a;
    if (D) return Promise.resolve(e ?? s.get());
    let t = e ?? ((_a = window.history.state) == null ? void 0 : _a.page);
    return this.decryptPageData(t).then((i) => {
      if (!i) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = i ?? void 0 : this.current = i ?? {}, i;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? we(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    U.add(() => Promise.resolve().then(() => {
      var _a;
      ((_a = window.history.state) == null ? void 0 : _a.page) && this.doReplaceState({ page: window.history.state.page, scrollRegions: e }, this.current.url);
    }));
  }
  saveDocumentScrollPosition(e) {
    U.add(() => Promise.resolve().then(() => {
      this.doReplaceState({ page: window.history.state.page, documentScrollPosition: e }, this.current.url);
    }));
  }
  getScrollRegions() {
    return window.history.state.scrollRegions || [];
  }
  getDocumentScrollPosition() {
    return window.history.state.documentScrollPosition || { top: 0, left: 0 };
  }
  replaceState(e, t = null) {
    if (s.merge(e), !D) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, U.add(() => this.getPageData(e).then((i) => {
        let n = () => {
          this.doReplaceState({ page: i }, e.url), t && t();
        };
        qe ? setTimeout(n) : n();
      }));
    }
  }
  doReplaceState(e, t) {
    var _a, _b;
    window.history.replaceState({ ...e, scrollRegions: e.scrollRegions ?? ((_a = window.history.state) == null ? void 0 : _a.scrollRegions), documentScrollPosition: e.documentScrollPosition ?? ((_b = window.history.state) == null ? void 0 : _b.documentScrollPosition) }, "", t);
  }
  doPushState(e, t) {
    window.history.pushState(e, "", t);
  }
  getState(e, t) {
    var _a;
    return ((_a = this.current) == null ? void 0 : _a[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    u.remove(T.key), u.remove(T.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var o = new re();
var ie = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", F(g.onWindowScroll.bind(g), 100), true)), typeof document < "u" && document.addEventListener("scroll", F(g.onScroll.bind(g), 100), true);
  }
  onGlobalEvent(e, t) {
    let i = (n) => {
      let a = t(n);
      n.cancelable && !n.defaultPrevented && a === false && n.preventDefault();
    };
    return this.registerListener(`inertia:${e}`, i);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((i) => i.listener !== t);
    };
  }
  onMissingHistoryItem() {
    s.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e) {
    this.internalListeners.filter((t) => t.event === e).forEach((t) => t.listener());
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  handlePopstateEvent(e) {
    let t = e.state || null;
    if (t === null) {
      let i = y(s.get().url);
      i.hash = window.location.hash, o.replaceState({ ...s.get(), url: i.href }), g.reset();
      return;
    }
    if (!o.isValidState(t)) return this.onMissingHistoryItem();
    o.decrypt(t.page).then((i) => {
      s.setQuietly(i, { preserveState: false }).then(() => {
        g.restore(o.getScrollRegions()), R(s.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
};
var w = new ie();
var ne = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
};
var se = new ne();
var B = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    se.isReload() && o.deleteState(o.rememberedState);
  }
  static handleBackForward() {
    if (!se.isBackForward() || !o.hasAnyState()) return false;
    let e = o.getScrollRegions();
    return o.decrypt().then((t) => {
      s.set(t, { preserveScroll: true, preserveState: true }).then(() => {
        g.restore(e), R(s.get());
      });
    }).catch(() => {
      w.onMissingHistoryItem();
    }), true;
  }
  static handleLocation() {
    if (!u.exists(u.locationVisitKey)) return false;
    let e = u.get(u.locationVisitKey) || {};
    return u.remove(u.locationVisitKey), typeof window < "u" && s.setUrlHash(window.location.hash), o.decrypt().then(() => {
      let t = o.getState(o.rememberedState, {}), i = o.getScrollRegions();
      s.remember(t), s.set(s.get(), { preserveScroll: e.preserveScroll, preserveState: true }).then(() => {
        e.preserveScroll && g.restore(i), R(s.get());
      });
    }).catch(() => {
      w.onMissingHistoryItem();
    }), true;
  }
  static handleDefault() {
    typeof window < "u" && s.setUrlHash(window.location.hash), s.set(s.get(), { preserveScroll: true, preserveState: true }).then(() => {
      g.restore(o.getScrollRegions()), R(s.get());
    });
  }
};
var G = class {
  constructor(e, t, i) {
    this.id = null;
    this.throttle = false;
    this.keepAlive = false;
    this.cbCount = 0;
    this.keepAlive = i.keepAlive ?? false, this.cb = t, this.interval = e, (i.autoStart ?? true) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? false : e, this.throttle && (this.cbCount = 0);
  }
};
var oe = class {
  constructor() {
    this.polls = [];
    this.setupVisibilityListener();
  }
  add(e, t, i) {
    let n = new G(e, t, i);
    return this.polls.push(n), { stop: () => n.stop(), start: () => n.start() };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e) => e.isInBackground(document.hidden));
    }, false);
  }
};
var Ae = new oe();
var ae = (r, e, t) => {
  if (r === e) return true;
  for (let i in r) if (!t.includes(i) && r[i] !== e[i] && !Xe(r[i], e[i])) return false;
  return true;
};
var Xe = (r, e) => {
  switch (typeof r) {
    case "object":
      return ae(r, e, []);
    case "function":
      return r.toString() === e.toString();
    default:
      return r === e;
  }
};
var Je = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 };
var le = (r) => {
  if (typeof r == "number") return r;
  for (let [e, t] of Object.entries(Je)) if (r.endsWith(e)) return parseFloat(r) * t;
  return parseInt(r);
};
var ce = class {
  constructor() {
    this.cached = [];
    this.inFlightRequests = [];
    this.removalTimers = [];
    this.currentUseId = null;
  }
  add(e, t, { cacheFor: i }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let a = this.findCached(e);
    if (!e.fresh && a && a.staleTimestamp > Date.now()) return Promise.resolve();
    let [c, d] = this.extractStaleValues(i), m = new Promise((h, l) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), l();
      }, onError: (v2) => {
        this.remove(e), e.onError(v2), l();
      }, onPrefetching(v2) {
        e.onPrefetching(v2);
      }, onPrefetched(v2, z) {
        e.onPrefetched(v2, z);
      }, onPrefetchResponse(v2) {
        h(v2);
      } });
    }).then((h) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + c, response: m, singleUse: i === 0, timestamp: Date.now(), inFlight: false }), this.scheduleForRemoval(e, d), this.inFlightRequests = this.inFlightRequests.filter((l) => !this.paramsAreEqual(l.params, e)), h.handlePrefetch(), h));
    return this.inFlightRequests.push({ params: { ...e }, response: m, staleTimestamp: null, inFlight: true }), m;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  extractStaleValues(e) {
    let [t, i] = this.cacheForToStaleAndExpires(e);
    return [le(t), le(i)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e)) return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    let t = this.removalTimers.find((i) => this.paramsAreEqual(i.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((i) => i !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      let i = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({ params: e, timer: i });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    let i = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = i, e.response.then((n) => {
      if (this.currentUseId === i) return n.mergeParams({ ...t, onPrefetched: () => {
      } }), this.removeSingleUseItems(t), n.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : true);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  paramsAreEqual(e, t) {
    return ae(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
};
var x = new ce();
var L = class {
  constructor(e) {
    this.callbacks = [];
    if (!e.prefetch) this.params = e;
    else {
      let t = { onBefore: this.wrapCallback(e, "onBefore"), onStart: this.wrapCallback(e, "onStart"), onProgress: this.wrapCallback(e, "onProgress"), onFinish: this.wrapCallback(e, "onFinish"), onCancel: this.wrapCallback(e, "onCancel"), onSuccess: this.wrapCallback(e, "onSuccess"), onError: this.wrapCallback(e, "onError"), onCancelToken: this.wrapCallback(e, "onCancelToken"), onPrefetched: this.wrapCallback(e, "onPrefetched"), onPrefetching: this.wrapCallback(e, "onPrefetching") };
      this.params = { ...e, ...t, onPrefetchResponse: e.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(e) {
    return new L(e);
  }
  data() {
    return this.params.method === "get" ? {} : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(e) {
    this.params.onCancelToken({ cancel: e });
  }
  markAsFinished() {
    this.params.completed = true, this.params.cancelled = false, this.params.interrupted = false;
  }
  markAsCancelled({ cancelled: e = true, interrupted: t = false }) {
    this.params.onCancel(), this.params.completed = false, this.params.cancelled = e, this.params.interrupted = t;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(e) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(e);
  }
  all() {
    return this.params;
  }
  headers() {
    let e = { ...this.params.headers };
    this.isPartial() && (e["X-Inertia-Partial-Component"] = s.get().component);
    let t = this.params.only.concat(this.params.reset);
    return t.length > 0 && (e["X-Inertia-Partial-Data"] = t.join(",")), this.params.except.length > 0 && (e["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (e["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (e["X-Inertia-Error-Bag"] = this.params.errorBag), e;
  }
  setPreserveOptions(e) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, e), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, e);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: e, args: t }) => {
      this.params[e](...t);
    });
  }
  merge(e) {
    this.params = { ...this.params, ...e };
  }
  wrapCallback(e, t) {
    return (...i) => {
      this.recordCallback(t, i), e[t](...i);
    };
  }
  recordCallback(e, t) {
    this.callbacks.push({ name: e, args: t });
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
};
var Ve = { modal: null, listener: null, show(r) {
  typeof r == "object" && (r = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(r)}`);
  let e = document.createElement("html");
  e.innerHTML = r, e.querySelectorAll("a").forEach((i) => i.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let t = document.createElement("iframe");
  if (t.style.backgroundColor = "white", t.style.borderRadius = "5px", t.style.width = "100%", t.style.height = "100%", this.modal.appendChild(t), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !t.contentWindow) throw new Error("iframe not yet ready.");
  t.contentWindow.document.open(), t.contentWindow.document.write(e.outerHTML), t.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(r) {
  r.keyCode === 27 && this.hide();
} };
var Qe = new q();
var A = class {
  constructor(e, t, i) {
    this.requestParams = e;
    this.response = t;
    this.originatingPage = i;
  }
  static create(e, t, i) {
    return new A(e, t, i);
  }
  async handlePrefetch() {
    O(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Qe.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = false, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), be(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await o.processQueue(), o.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let e = s.get().props.errors || {};
    if (Object.keys(e).length > 0) {
      let t = this.getScopedErrors(e);
      return pe(t), this.requestParams.all().onError(t);
    }
    ve(s.get()), await this.requestParams.all().onSuccess(s.get()), o.preserveUrl = false;
  }
  mergeParams(e) {
    this.requestParams.merge(e);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let t = y(this.getHeader("x-inertia-location"));
      return ee(this.requestParams.all().url, t), this.locationVisit(t);
    }
    let e = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (me(e)) return Ve.show(e.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(e) {
    return this.response.status === e;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  hasHeader(e) {
    return this.getHeader(e) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(e) {
    try {
      if (u.set(u.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === true }), typeof window > "u") return;
      O(window.location, e) ? window.location.reload() : window.location.href = e.href;
    } catch {
      return false;
    }
  }
  async setPage() {
    let e = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(e) ? (this.mergeProps(e), await this.setRememberedState(e), this.requestParams.setPreserveOptions(e), e.url = o.preserveUrl ? s.get().url : this.pageUrl(e), s.set(e, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(e) {
    if (typeof e != "string") return e;
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  shouldSetPage(e) {
    if (!this.requestParams.all().async || this.originatingPage.component !== e.component) return true;
    if (this.originatingPage.component !== s.get().component) return false;
    let t = y(this.originatingPage.url), i = y(s.get().url);
    return t.origin === i.origin && t.pathname === i.pathname;
  }
  pageUrl(e) {
    let t = y(e.url);
    return ee(this.requestParams.all().url, t), t.pathname + t.search + t.hash;
  }
  mergeProps(e) {
    this.requestParams.isPartial() && e.component === s.get().component && ((e.mergeProps || []).forEach((i) => {
      let n = e.props[i];
      Array.isArray(n) ? e.props[i] = [...s.get().props[i] || [], ...n] : typeof n == "object" && (e.props[i] = { ...s.get().props[i] || [], ...n });
    }), e.props = { ...s.get().props, ...e.props });
  }
  async setRememberedState(e) {
    let t = await o.getState(o.rememberedState, {});
    this.requestParams.all().preserveState && t && e.component === s.get().component && (e.rememberedState = t);
  }
  getScopedErrors(e) {
    return this.requestParams.all().errorBag ? e[this.requestParams.all().errorBag || ""] || {} : e;
  }
};
var V = class {
  constructor(e, t) {
    this.page = t;
    this.requestHasFinished = false;
    this.requestParams = L.create(e), this.cancelToken = new AbortController();
  }
  static create(e, t) {
    return new V(e, t);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: true })), ge(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), ye(this.requestParams.all()));
    let e = this.requestParams.all().prefetch;
    return axios_default({ method: this.requestParams.all().method, url: I(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((t) => (this.response = A.create(this.requestParams, t, this.page), this.response.handle())).catch((t) => (t == null ? void 0 : t.response) ? (this.response = A.create(this.requestParams, t.response, this.page), this.response.handle()) : Promise.reject(t)).catch((t) => {
      if (!axios_default.isCancel(t) && de(t)) return Promise.reject(t);
    }).finally(() => {
      this.finish(), e && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = true, he(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: e = false, interrupted: t = false }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: e, interrupted: t }), this.fireFinishEvents());
  }
  onProgress(e) {
    this.requestParams.data() instanceof FormData && (e.percentage = e.progress ? Math.round(e.progress * 100) : 0, fe(e), this.requestParams.all().onProgress(e));
  }
  getHeaders() {
    let e = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true };
    return s.get().version && (e["X-Inertia-Version"] = s.get().version), e;
  }
};
var H = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    this.requests = [];
    this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().then(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: true }, false);
  }
  cancelInFlight() {
    this.cancel({ cancelled: true }, true);
  }
  cancel({ cancelled: e = false, interrupted: t = false } = {}, i) {
    var _a;
    if (!this.shouldCancel(i)) return;
    (_a = this.requests.shift()) == null ? void 0 : _a.cancel({ interrupted: t, cancelled: e });
  }
  shouldCancel(e) {
    return e ? true : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
};
var K = class {
  constructor() {
    this.syncRequestStream = new H({ maxConcurrent: 1, interruptible: true });
    this.asyncRequestStream = new H({ maxConcurrent: 1 / 0, interruptible: false });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: i }) {
    s.init({ initialPage: e, resolveComponent: t, swapComponent: i }), B.handle(), w.init(), w.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: true, preserveScroll: true, replace: true });
    }), w.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e, t = {}, i = {}) {
    return this.visit(e, { ...i, method: "get", data: t });
  }
  post(e, t = {}, i = {}) {
    return this.visit(e, { preserveState: true, ...i, method: "post", data: t });
  }
  put(e, t = {}, i = {}) {
    return this.visit(e, { preserveState: true, ...i, method: "put", data: t });
  }
  patch(e, t = {}, i = {}) {
    return this.visit(e, { preserveState: true, ...i, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: true, ...t, method: "delete" });
  }
  reload(e = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e, preserveScroll: true, preserveState: true, async: true, headers: { ...e.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e, t = "default") {
    o.remember(e, t);
  }
  restore(e = "default") {
    return o.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : w.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, i = {}) {
    return Ae.add(e, () => this.reload(t), { autoStart: i.autoStart ?? true, keepAlive: i.keepAlive ?? false });
  }
  visit(e, t = {}) {
    let i = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), n = this.getVisitEvents(t);
    if (n.onBefore(i) === false || !_(i)) return;
    let a = i.async ? this.asyncRequestStream : this.syncRequestStream;
    a.interruptInFlight(), !s.isCleared() && !i.preserveUrl && g.save();
    let c = { ...i, ...n }, d = x.get(c);
    d ? (j(d.inFlight), x.use(d, c)) : (j(true), a.send(V.create(c, s.get())));
  }
  getCached(e, t = {}) {
    return x.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    x.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    x.removeAll();
  }
  getPrefetching(e, t = {}) {
    return x.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: i = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(e, { ...t, async: true, showProgress: false, prefetch: true }), a = n.url.origin + n.url.pathname + n.url.search, c = window.location.origin + window.location.pathname + window.location.search;
    if (a === c) return;
    let d = this.getVisitEvents(t);
    if (d.onBefore(n) === false || !_(n)) return;
    W(), this.asyncRequestStream.interruptInFlight();
    let m = { ...n, ...d };
    (() => new Promise((l) => {
      let v2 = () => {
        s.get() ? l() : setTimeout(v2, 50);
      };
      v2();
    }))().then(() => {
      x.add(m, (l) => {
        this.asyncRequestStream.send(V.create(l, s.get()));
      }, { cacheFor: i });
    });
  }
  clearHistory() {
    o.clear();
  }
  decryptHistory() {
    return o.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: true });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = false } = {}) {
    let i = s.get(), n = typeof e.props == "function" ? e.props(i.props) : e.props ?? i.props;
    s.set({ ...i, ...e, props: n }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: true, showProgress: false, prefetch: true }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, i = {}) {
    let n = { method: "get", data: {}, replace: false, preserveScroll: false, preserveState: false, only: [], except: [], headers: {}, errorBag: "", forceFormData: false, queryStringArrayFormat: "brackets", async: false, showProgress: true, fresh: false, reset: [], preserveUrl: false, prefetch: false, ...t }, [a, c] = Ce(e, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: false, completed: false, interrupted: false, ...n, ...i, url: a, data: c };
  }
  getVisitEvents(e) {
    return { onCancelToken: e.onCancelToken || (() => {
    }), onBefore: e.onBefore || (() => {
    }), onStart: e.onStart || (() => {
    }), onProgress: e.onProgress || (() => {
    }), onFinish: e.onFinish || (() => {
    }), onCancel: e.onCancel || (() => {
    }), onSuccess: e.onSuccess || (() => {
    }), onError: e.onError || (() => {
    }), onPrefetched: e.onPrefetched || (() => {
    }), onPrefetching: e.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var _a;
    let e = (_a = s.get()) == null ? void 0 : _a.deferredProps;
    e && Object.entries(e).forEach(([t, i]) => {
      this.reload({ only: i });
    });
  }
};
var ze = { buildDOMElement(r) {
  let e = document.createElement("template");
  e.innerHTML = r;
  let t = e.content.firstChild;
  if (!r.startsWith("<script ")) return t;
  let i = document.createElement("script");
  return i.innerHTML = t.innerHTML, t.getAttributeNames().forEach((n) => {
    i.setAttribute(n, t.getAttribute(n) || "");
  }), i;
}, isInertiaManagedElement(r) {
  return r.nodeType === Node.ELEMENT_NODE && r.getAttribute("inertia") !== null;
}, findMatchingElementIndex(r, e) {
  let t = r.getAttribute("inertia");
  return t !== null ? e.findIndex((i) => i.getAttribute("inertia") === t) : -1;
}, update: F(function(r) {
  let e = r.map((i) => this.buildDOMElement(i));
  Array.from(document.head.childNodes).filter((i) => this.isInertiaManagedElement(i)).forEach((i) => {
    var _a, _b;
    let n = this.findMatchingElementIndex(i, e);
    if (n === -1) {
      (_a = i == null ? void 0 : i.parentNode) == null ? void 0 : _a.removeChild(i);
      return;
    }
    let a = e.splice(n, 1)[0];
    a && !i.isEqualNode(a) && ((_b = i == null ? void 0 : i.parentNode) == null ? void 0 : _b.replaceChild(a, i));
  }), e.forEach((i) => document.head.appendChild(i));
}, 1) };
function Ie(r, e, t) {
  let i = {}, n = 0;
  function a() {
    let l = n += 1;
    return i[l] = [], l.toString();
  }
  function c(l) {
    l === null || Object.keys(i).indexOf(l) === -1 || (delete i[l], h());
  }
  function d(l, v2 = []) {
    l !== null && Object.keys(i).indexOf(l) > -1 && (i[l] = v2), h();
  }
  function m() {
    let l = e(""), v2 = { ...l ? { title: `<title inertia="">${l}</title>` } : {} }, z = Object.values(i).reduce((S, E) => S.concat(E), []).reduce((S, E) => {
      if (E.indexOf("<") === -1) return S;
      if (E.indexOf("<title ") === 0) {
        let N = E.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return S.title = N ? `${N[1]}${e(N[2])}${N[3]}` : E, S;
      }
      let ue2 = E.match(/ inertia="[^"]+"/);
      return ue2 ? S[ue2[0]] = E : S[Object.keys(S).length] = E, S;
    }, v2);
    return Object.values(z);
  }
  function h() {
    r ? t(m()) : ze.update(m());
  }
  return h(), { forceUpdate: h, createProvider: function() {
    let l = a();
    return { update: (v2) => d(l, v2), disconnect: () => c(l) };
  } };
}
var p = "nprogress";
var f = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: true, trickleSpeed: 200, showSpinner: true, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: true, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") };
var C = null;
var _e = (r) => {
  Object.assign(f, r), f.includeCSS && it(f.color);
};
var J = (r) => {
  let e = Le();
  r = He(r, f.minimum, 1), C = r === 1 ? null : r;
  let t = Ze(!e), i = t.querySelector(f.barSelector), n = f.speed, a = f.easing;
  t.offsetWidth, rt((c) => {
    let d = (() => f.positionUsing === "translate3d" ? { transition: `all ${n}ms ${a}`, transform: `translate3d(${X(r)}%,0,0)` } : f.positionUsing === "translate" ? { transition: `all ${n}ms ${a}`, transform: `translate(${X(r)}%,0)` } : { marginLeft: `${X(r)}%` })();
    for (let m in d) i.style[m] = d[m];
    if (r !== 1) return setTimeout(c, n);
    t.style.transition = "none", t.style.opacity = "1", t.offsetWidth, setTimeout(() => {
      t.style.transition = `all ${n}ms linear`, t.style.opacity = "0", setTimeout(() => {
        De(), c();
      }, n);
    }, n);
  });
};
var Le = () => typeof C == "number";
var ke = () => {
  C || J(0);
  let r = function() {
    setTimeout(function() {
      C && (Oe(), r());
    }, f.trickleSpeed);
  };
  f.trickle && r();
};
var Ye = (r) => {
  !r && !C || (Oe(0.3 + 0.5 * Math.random()), J(1));
};
var Oe = (r) => {
  let e = C;
  if (e === null) return ke();
  if (!(e > 1)) return r = typeof r == "number" ? r : (() => {
    let t = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let i in t) if (e >= t[i][0] && e < t[i][1]) return parseFloat(i);
    return 0;
  })(), J(He(e + r, 0, 0.994));
};
var Ze = (r) => {
  var _a;
  if (et()) return document.getElementById(p);
  document.documentElement.classList.add(`${p}-busy`);
  let e = document.createElement("div");
  e.id = p, e.innerHTML = f.template;
  let t = e.querySelector(f.barSelector), i = r ? "-100" : X(C || 0), n = Ue();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${i}%,0,0)`, f.showSpinner || ((_a = e.querySelector(f.spinnerSelector)) == null ? void 0 : _a.remove()), n !== document.body && n.classList.add(`${p}-custom-parent`), n.appendChild(e), e;
};
var Ue = () => tt(f.parent) ? f.parent : document.querySelector(f.parent);
var De = () => {
  var _a;
  document.documentElement.classList.remove(`${p}-busy`), Ue().classList.remove(`${p}-custom-parent`), (_a = document.getElementById(p)) == null ? void 0 : _a.remove();
};
var et = () => document.getElementById(p) !== null;
var tt = (r) => typeof HTMLElement == "object" ? r instanceof HTMLElement : r && typeof r == "object" && r.nodeType === 1 && typeof r.nodeName == "string";
function He(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
var X = (r) => (-1 + r) * 100;
var rt = /* @__PURE__ */ (() => {
  let r = [], e = () => {
    let t = r.shift();
    t && t(e);
  };
  return (t) => {
    r.push(t), r.length === 1 && e();
  };
})();
var it = (r) => {
  let e = document.createElement("style");
  e.textContent = `
    #${p} {
      pointer-events: none;
    }

    #${p} .bar {
      background: ${r};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${p} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${r}, 0 0 5px ${r};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${p} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${p} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${r};
      border-left-color: ${r};
      border-radius: 50%;

      animation: ${p}-spinner 400ms linear infinite;
    }

    .${p}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${p}-custom-parent #${p} .spinner,
    .${p}-custom-parent #${p} .bar {
      position: absolute;
    }

    @keyframes ${p}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(e);
};
var k = (() => {
  if (typeof document > "u") return null;
  let r = document.createElement("style");
  return r.innerHTML = `#${p} { display: none; }`, r;
})();
var nt = () => {
  if (k && document.head.contains(k)) return document.head.removeChild(k);
};
var st = () => {
  k && !document.head.contains(k) && document.head.appendChild(k);
};
var b = { configure: _e, isStarted: Le, done: Ye, set: J, remove: De, start: ke, status: C, show: nt, hide: st };
var Q = 0;
var j = (r = false) => {
  Q = Math.max(0, Q - 1), (r || Q === 0) && b.show();
};
var W = () => {
  Q++, b.hide();
};
function ot(r) {
  document.addEventListener("inertia:start", (e) => at(e, r)), document.addEventListener("inertia:progress", lt);
}
function at(r, e) {
  r.detail.visit.showProgress || W();
  let t = setTimeout(() => b.start(), e);
  document.addEventListener("inertia:finish", (i) => ct(i, t), { once: true });
}
function lt(r) {
  var _a;
  b.isStarted() && ((_a = r.detail.progress) == null ? void 0 : _a.percentage) && b.set(Math.max(b.status, r.detail.progress.percentage / 100 * 0.9));
}
function ct(r, e) {
  clearTimeout(e), b.isStarted() && (r.detail.visit.completed ? b.done() : r.detail.visit.interrupted ? b.set(0) : r.detail.visit.cancelled && (b.done(), b.remove()));
}
function Ne({ delay: r = 250, color: e = "#29d", includeCSS: t = true, showSpinner: i = false } = {}) {
  ot(r), b.configure({ showSpinner: i, includeCSS: t, color: e });
}
function Me(r) {
  let e = r.currentTarget.tagName.toLowerCase() === "a";
  return !(r.target && (r == null ? void 0 : r.target).isContentEditable || r.defaultPrevented || e && r.altKey || e && r.ctrlKey || e && r.metaKey || e && r.shiftKey || e && "button" in r && r.button !== 0);
}
var Wr = new K();

// node_modules/@inertiajs/react/dist/index.esm.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var oe2 = (0, import_react3.createContext)(void 0);
oe2.displayName = "InertiaHeadContext";
var M2 = oe2;
var ne2 = (0, import_react4.createContext)(void 0);
ne2.displayName = "InertiaPageContext";
var L2 = ne2;
function W2({ children: u2, initialPage: o2, initialComponent: n, resolveComponent: s2, titleCallback: a, onHeadUpdate: m }) {
  let [p2, g2] = (0, import_react2.useState)({ component: n || null, page: o2, key: null }), P2 = (0, import_react2.useMemo)(() => Ie(typeof window > "u", a || ((l) => l), m || (() => {
  })), []);
  if ((0, import_react2.useEffect)(() => {
    Wr.init({ initialPage: o2, resolveComponent: s2, swapComponent: async ({ component: l, page: e, preserveState: f2 }) => {
      g2((t) => ({ component: l, page: e, key: f2 ? t.key : Date.now() }));
    } }), Wr.on("navigate", () => P2.forceUpdate());
  }, []), !p2.component) return (0, import_react2.createElement)(M2.Provider, { value: P2 }, (0, import_react2.createElement)(L2.Provider, { value: p2.page }, null));
  let y2 = u2 || (({ Component: l, props: e, key: f2 }) => {
    let t = (0, import_react2.createElement)(l, { key: f2, ...e });
    return typeof l.layout == "function" ? l.layout(t) : Array.isArray(l.layout) ? l.layout.concat(t).reverse().reduce((h, T2) => (0, import_react2.createElement)(T2, { children: h, ...e })) : t;
  });
  return (0, import_react2.createElement)(M2.Provider, { value: P2 }, (0, import_react2.createElement)(L2.Provider, { value: p2.page }, y2({ Component: p2.component, key: p2.key, props: p2.page.props })));
}
W2.displayName = "Inertia";
async function ae2({ id: u2 = "app", resolve: o2, setup: n, title: s2, progress: a = {}, page: m, render: p2 }) {
  let g2 = typeof window > "u", P2 = g2 ? null : document.getElementById(u2), y2 = m || JSON.parse(P2.dataset.page), l = (t) => Promise.resolve(o2(t)).then((h) => h.default || h), e = [], f2 = await Promise.all([l(y2.component), Wr.decryptHistory().catch(() => {
  })]).then(([t]) => n({ el: P2, App: W2, props: { initialPage: y2, initialComponent: t, resolveComponent: l, titleCallback: s2, onHeadUpdate: g2 ? (h) => e = h : null } }));
  if (!g2 && a && Ne(a), g2) {
    let t = await p2((0, import_react.createElement)("div", { id: u2, "data-page": JSON.stringify(y2) }, f2));
    return { head: e, body: t };
  }
}
function K2() {
  let u2 = (0, import_react6.useContext)(L2);
  if (!u2) throw new Error("usePage must be used within the Inertia component");
  return u2;
}
var ie2 = ({ children: u2, data: o2, fallback: n }) => {
  if (!o2) throw new Error("`<Deferred>` requires a `data` prop");
  let [s2, a] = (0, import_react5.useState)(false), m = K2().props, p2 = Array.isArray(o2) ? o2 : [o2];
  return (0, import_react5.useEffect)(() => {
    a(p2.every((g2) => m[g2] !== void 0));
  }, [m, p2]), s2 ? u2 : n;
};
ie2.displayName = "InertiaDeferred";
var Ae2 = ie2;
var Me2 = function({ children: u2, title: o2 }) {
  let n = (0, import_react7.useContext)(M2), s2 = (0, import_react7.useMemo)(() => n.createProvider(), [n]);
  (0, import_react7.useEffect)(() => () => {
    s2.disconnect();
  }, [s2]);
  function a(e) {
    return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
  }
  function m(e) {
    let f2 = Object.keys(e.props).reduce((t, h) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(h)) return t;
      let T2 = e.props[h];
      return T2 === "" ? t + ` ${h}` : t + ` ${h}="${T2}"`;
    }, "");
    return `<${e.type}${f2}>`;
  }
  function p2(e) {
    return typeof e.props.children == "string" ? e.props.children : e.props.children.reduce((f2, t) => f2 + g2(t), "");
  }
  function g2(e) {
    let f2 = m(e);
    return e.props.children && (f2 += p2(e)), e.props.dangerouslySetInnerHTML && (f2 += e.props.dangerouslySetInnerHTML.__html), a(e) || (f2 += `</${e.type}>`), f2;
  }
  function P2(e) {
    return import_react7.default.cloneElement(e, { inertia: e.props["head-key"] !== void 0 ? e.props["head-key"] : "" });
  }
  function y2(e) {
    return g2(P2(e));
  }
  function l(e) {
    let f2 = import_react7.default.Children.toArray(e).filter((t) => t).map((t) => y2(t));
    return o2 && !f2.find((t) => t.startsWith("<title")) && f2.push(`<title inertia>${o2}</title>`), f2;
  }
  return s2.update(l(u2)), null;
};
var Le2 = Me2;
var k2 = () => {
};
var le2 = (0, import_react8.forwardRef)(({ children: u2, as: o2 = "a", data: n = {}, href: s2, method: a = "get", preserveScroll: m = false, preserveState: p2 = null, replace: g2 = false, only: P2 = [], except: y2 = [], headers: l = {}, queryStringArrayFormat: e = "brackets", async: f2 = false, onClick: t = k2, onCancelToken: h = k2, onBefore: T2 = k2, onStart: x2 = k2, onProgress: I2 = k2, onFinish: q2 = k2, onCancel: N = k2, onSuccess: J2 = k2, onError: O2 = k2, prefetch: F2 = false, cacheFor: b2 = 0, ...Q2 }, Y2) => {
  let [z, V2] = (0, import_react8.useState)(0), D2 = (0, import_react8.useRef)(null);
  o2 = o2.toLowerCase(), a = a.toLowerCase();
  let [E, G2] = Te(a, s2 || "", n, e);
  s2 = E, n = G2;
  let U2 = { data: n, method: a, preserveScroll: m, preserveState: p2 ?? a !== "get", replace: g2, only: P2, except: y2, headers: l, async: f2 }, $2 = { ...U2, onCancelToken: h, onBefore: T2, onStart(c) {
    V2((d) => d + 1), x2(c);
  }, onProgress: I2, onFinish(c) {
    V2((d) => d - 1), q2(c);
  }, onCancel: N, onSuccess: J2, onError: O2 }, w2 = () => {
    Wr.prefetch(s2, U2, { cacheFor: X2 });
  }, C2 = (0, import_react8.useMemo)(() => F2 === true ? ["hover"] : F2 === false ? [] : Array.isArray(F2) ? F2 : [F2], Array.isArray(F2) ? F2 : [F2]), X2 = (0, import_react8.useMemo)(() => b2 !== 0 ? b2 : C2.length === 1 && C2[0] === "click" ? 0 : 3e4, [b2, C2]);
  (0, import_react8.useEffect)(() => () => {
    clearTimeout(D2.current);
  }, []), (0, import_react8.useEffect)(() => {
    C2.includes("mount") && setTimeout(() => w2());
  }, C2);
  let j2 = { onClick: (c) => {
    t(c), Me(c) && (c.preventDefault(), Wr.visit(s2, $2));
  } }, i = { onMouseEnter: () => {
    D2.current = window.setTimeout(() => {
      w2();
    }, 75);
  }, onMouseLeave: () => {
    clearTimeout(D2.current);
  }, onClick: j2.onClick }, S = { onMouseDown: (c) => {
    Me(c) && (c.preventDefault(), w2());
  }, onMouseUp: (c) => {
    c.preventDefault(), Wr.visit(s2, $2);
  }, onClick: (c) => {
    t(c), Me(c) && c.preventDefault();
  } };
  return a !== "get" && (o2 = "button"), (0, import_react8.createElement)(o2, { ...Q2, ...{ a: { href: s2 }, button: { type: "button" } }[o2] || {}, ref: Y2, ...(() => C2.includes("hover") ? i : C2.includes("click") ? S : j2)(), "data-loading": z > 0 ? "" : void 0 }, u2);
});
le2.displayName = "InertiaLink";
var $e2 = le2;
function H2(u2, o2) {
  let [n, s2] = (0, import_react10.useState)(() => {
    let a = Wr.restore(o2);
    return a !== void 0 ? a : u2;
  });
  return (0, import_react10.useEffect)(() => {
    Wr.remember(n, o2);
  }, [n, o2]), [n, s2];
}
function me2(u2, o2) {
  let n = (0, import_react9.useRef)(null), s2 = typeof u2 == "string" ? u2 : null, [a, m] = (0, import_react9.useState)((typeof u2 == "string" ? o2 : u2) || {}), p2 = (0, import_react9.useRef)(null), g2 = (0, import_react9.useRef)(null), [P2, y2] = s2 ? H2(a, `${s2}:data`) : (0, import_react9.useState)(a), [l, e] = s2 ? H2({}, `${s2}:errors`) : (0, import_react9.useState)({}), [f2, t] = (0, import_react9.useState)(false), [h, T2] = (0, import_react9.useState)(false), [x2, I2] = (0, import_react9.useState)(null), [q2, N] = (0, import_react9.useState)(false), [J2, O2] = (0, import_react9.useState)(false), F2 = (0, import_react9.useRef)((i) => i);
  (0, import_react9.useEffect)(() => (n.current = true, () => {
    n.current = false;
  }), []);
  let b2 = (0, import_react9.useCallback)((i, S, r = {}) => {
    let c = { ...r, onCancelToken: (d) => {
      if (p2.current = d, r.onCancelToken) return r.onCancelToken(d);
    }, onBefore: (d) => {
      if (N(false), O2(false), clearTimeout(g2.current), r.onBefore) return r.onBefore(d);
    }, onStart: (d) => {
      if (T2(true), r.onStart) return r.onStart(d);
    }, onProgress: (d) => {
      if (I2(d), r.onProgress) return r.onProgress(d);
    }, onSuccess: (d) => {
      if (n.current && (T2(false), I2(null), e({}), t(false), N(true), O2(true), g2.current = setTimeout(() => {
        n.current && O2(false);
      }, 2e3)), r.onSuccess) return r.onSuccess(d);
    }, onError: (d) => {
      if (n.current && (T2(false), I2(null), e(d), t(true)), r.onError) return r.onError(d);
    }, onCancel: () => {
      if (n.current && (T2(false), I2(null)), r.onCancel) return r.onCancel();
    }, onFinish: (d) => {
      if (n.current && (T2(false), I2(null)), p2.current = null, r.onFinish) return r.onFinish(d);
    } };
    i === "delete" ? Wr.delete(S, { ...c, data: F2.current(P2) }) : Wr[i](S, F2.current(P2), c);
  }, [P2, e, F2]), Q2 = (0, import_react9.useCallback)((i, S) => {
    y2(typeof i == "string" ? (r) => ({ ...r, [i]: S }) : typeof i == "function" ? (r) => i(r) : i);
  }, [y2]), Y2 = (0, import_react9.useCallback)((i, S) => {
    m(typeof i > "u" ? () => P2 : (r) => ({ ...r, ...typeof i == "string" ? { [i]: S } : i }));
  }, [P2, m]), z = (0, import_react9.useCallback)((...i) => {
    i.length === 0 ? y2(a) : y2((S) => Object.keys(a).filter((r) => i.includes(r)).reduce((r, c) => (r[c] = a[c], r), { ...S }));
  }, [y2, a]), V2 = (0, import_react9.useCallback)((i, S) => {
    e((r) => {
      let c = { ...r, ...typeof i == "string" ? { [i]: S } : i };
      return t(Object.keys(c).length > 0), c;
    });
  }, [e, t]), D2 = (0, import_react9.useCallback)((...i) => {
    e((S) => {
      let r = Object.keys(S).reduce((c, d) => ({ ...c, ...i.length > 0 && !i.includes(d) ? { [d]: S[d] } : {} }), {});
      return t(Object.keys(r).length > 0), r;
    });
  }, [e, t]), E = (i) => (S, r) => {
    b2(i, S, r);
  }, G2 = (0, import_react9.useCallback)(E("get"), [b2]), U2 = (0, import_react9.useCallback)(E("post"), [b2]), $2 = (0, import_react9.useCallback)(E("put"), [b2]), w2 = (0, import_react9.useCallback)(E("patch"), [b2]), C2 = (0, import_react9.useCallback)(E("delete"), [b2]), X2 = (0, import_react9.useCallback)(() => {
    p2.current && p2.current.cancel();
  }, []), j2 = (0, import_react9.useCallback)((i) => {
    F2.current = i;
  }, []);
  return { data: P2, setData: Q2, isDirty: !(0, import_lodash.default)(P2, a), errors: l, hasErrors: f2, processing: h, progress: x2, wasSuccessful: q2, recentlySuccessful: J2, transform: j2, setDefaults: Y2, reset: z, setError: V2, clearErrors: D2, submit: b2, get: G2, post: U2, put: $2, patch: w2, delete: C2, cancel: X2 };
}
function ge2(u2, o2 = {}, n = { keepAlive: false, autoStart: true }) {
  let s2 = (0, import_react11.useRef)(Wr.poll(u2, o2, { ...n, autoStart: false }));
  return (0, import_react11.useEffect)(() => ((n.autoStart ?? true) && s2.current.start(), () => s2.current.stop()), []), { stop: s2.current.stop, start: s2.current.start };
}
function Pe2(u2 = {}) {
  let o2 = typeof window > "u" ? null : Wr.getCached(window.location.pathname, u2), n = typeof window > "u" ? null : Wr.getPrefetching(window.location.pathname, u2), [s2, a] = (0, import_react12.useState)((o2 == null ? void 0 : o2.staleTimestamp) || null), [m, p2] = (0, import_react12.useState)(n !== null), [g2, P2] = (0, import_react12.useState)(o2 !== null);
  return (0, import_react12.useEffect)(() => {
    let y2 = Wr.on("prefetching", (e) => {
      e.detail.visit.url.pathname === window.location.pathname && p2(true);
    }), l = Wr.on("prefetched", (e) => {
      e.detail.visit.url.pathname === window.location.pathname && (p2(false), P2(true), a(e.detail.fetchedAt));
    });
    return () => {
      l(), y2();
    };
  }, []), { lastUpdatedAt: s2, isPrefetching: m, isPrefetched: g2, flush: () => Wr.flush(window.location.pathname, u2) };
}
var ye2 = ({ children: u2, data: o2, params: n, buffer: s2, as: a, always: m, fallback: p2 }) => {
  m = m ?? false, a = a ?? "div", p2 = p2 ?? null;
  let [g2, P2] = (0, import_react13.useState)(false), y2 = (0, import_react13.useRef)(false), l = (0, import_react13.useRef)(false), e = (0, import_react13.useRef)(null), f2 = (0, import_react13.useCallback)(() => {
    if (o2) return { only: Array.isArray(o2) ? o2 : [o2] };
    if (!n) throw new Error("You must provide either a `data` or `params` prop.");
    return n;
  }, [n, o2]);
  return (0, import_react13.useEffect)(() => {
    if (!e.current) return;
    let t = new IntersectionObserver((h) => {
      if (!h[0].isIntersecting || (!m && y2.current && t.disconnect(), l.current)) return;
      y2.current = true, l.current = true;
      let T2 = f2();
      Wr.reload({ ...T2, onStart: (x2) => {
        var _a;
        l.current = true, (_a = T2.onStart) == null ? void 0 : _a.call(T2, x2);
      }, onFinish: (x2) => {
        var _a;
        P2(true), l.current = false, (_a = T2.onFinish) == null ? void 0 : _a.call(T2, x2), m || t.disconnect();
      } });
    }, { rootMargin: `${s2 || 0}px` });
    return t.observe(e.current), () => {
      t.disconnect();
    };
  }, [e, f2, s2]), m || !g2 ? (0, import_react13.createElement)(a, { props: null, ref: e }, g2 ? u2 : p2) : g2 ? u2 : null;
};
ye2.displayName = "InertiaWhenVisible";
var tt2 = ye2;
var Sr = Wr;
export {
  Ae2 as Deferred,
  Le2 as Head,
  $e2 as Link,
  tt2 as WhenVisible,
  ae2 as createInertiaApp,
  Sr as router,
  me2 as useForm,
  K2 as usePage,
  ge2 as usePoll,
  Pe2 as usePrefetch,
  H2 as useRemember
};
/*! Bundled license information:

@inertiajs/core/dist/index.esm.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)
*/
//# sourceMappingURL=@inertiajs_react.js.map
