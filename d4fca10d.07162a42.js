(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(174)),o={id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},c={id:"api/useAnimatedRef",title:"useAnimatedRef",description:"This hooks provides extended functionality of a standard ref. You can assign it to some component like ` and then access the target component via animatedRef.current. Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: const viewTag = animatedRef(). This comes handy when using native methods like scrollTo and measure`.",source:"@site/docs/api/useAnimatedRef.md",permalink:"/react-native-reanimated/docs/next/api/useAnimatedRef",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/useAnimatedRef.md",version:"next",sidebar_label:"useAnimatedRef",sidebar:"docs",previous:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/next/api/useAnimatedGestureHandler"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/next/api/withTiming"}},s=[{value:"Example",id:"example",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hooks provides extended functionality of a standard ref. You can assign it to some component like ",Object(i.b)("inlineCode",{parentName:"p"},"<View ref={ animatedRef } />")," and then access the target component via ",Object(i.b)("inlineCode",{parentName:"p"},"animatedRef.current"),". Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: ",Object(i.b)("inlineCode",{parentName:"p"},"const viewTag = animatedRef()"),". This comes handy when using native methods like ",Object(i.b)("inlineCode",{parentName:"p"},"scrollTo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"measure"),". "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Comp = () => {\n  const aref = useAnimatedRef()\n\n  useDerivedValue(() => {\n    const viewTag = aref();\n    // ...\n  })\n\n  const componentRef = aref.current\n  // ...\n\n  return <View ref={aref} />;\n}\n")))}u.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||l[m]||i;return n?a.a.createElement(f,c(c({ref:t},d),{},{components:n})):a.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);