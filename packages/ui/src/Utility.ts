import { flow as flow_, pipe as pipe_ } from "@morphism/fp";

/* eslint-disable no-var,functional/no-expression-statement,functional/immutable-data,functional/prefer-readonly-type */

declare global {
  var React: typeof React;

  var flow: typeof flow_;
  var pipe: typeof pipe_;

  var spy: <A>(a: A) => A;
  var spyJSON: <A>(a: A) => A;

  export type Mutable<A> = A extends
    | ((...args: unknown[]) => unknown)
    | boolean
    | number
    | string
    | null
    | undefined
    ? A
    : A extends [infer First, ...infer Rest]
    ? [Mutable<First>, ...Mutable<Rest>]
    : A extends ReadonlyMap<infer Key, infer Value>
    ? Map<Mutable<Key>, Mutable<Value>>
    : A extends ReadonlySet<infer A>
    ? Set<Mutable<A>>
    : { -readonly [Key in keyof A]: Mutable<A[Key]> };
}

import React from "react";

globalThis.React = React;

globalThis.flow = flow_;
globalThis.pipe = pipe_;

globalThis.spy = function (a) {
  console.log(a);
  return a;
};

globalThis.spyJSON = function (a) {
  console.log(JSON.stringify(a, null, 2));
  return a;
};

/* eslint-enable */
