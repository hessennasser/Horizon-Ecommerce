import{p as f,E as b,H as s,I as c}from"./index-4a77c58a.js";function u(t,n){if(t==null)return{};var e={},r=Object.keys(t),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(e[o]=t[o]);return e}function j(t,n){if(t==null)return{};var e=u(t,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(e[r]=t[r])}return e}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?i(Object(e),!0).forEach(function(r){f(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},p.apply(this,arguments)}function y(t){if(Array.isArray(t))return b(t)}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(t){return y(t)||s(t)||c(t)||O()}export{j as _,p as a,g as b,m as c};
