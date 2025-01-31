# React useEffect with setInterval: Outdated State Value

This example demonstrates a common mistake when using the `useEffect` hook with `setInterval` in React.  The closure over the `count` variable in the `setInterval` callback leads to the callback always using the initial value of `count`, rather than the current value.

## Bug

The `bug.js` file shows the incorrect implementation. The `console.log(count)` inside `setInterval` will always print 0, regardless of the updates to the `count` state.

## Solution

The `bugSolution.js` file provides the corrected implementation. A functional update is used within the `setInterval` to ensure the latest value of `count` is captured and logged.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the console consistently logs 0 despite the `count` state updating.