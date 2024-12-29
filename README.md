# Expo Android StatusBar.currentHeight Crash

This repository demonstrates a bug in Expo where using `StatusBar.currentHeight` on Android causes the app to crash.  The issue is likely related to the timing of when `StatusBar.currentHeight` is accessed relative to the StatusBar's initialization.

## Problem

The app works perfectly on iOS but crashes on Android. This is because `StatusBar.currentHeight` might be accessed before the StatusBar is fully initialized on Android.

## Solution

The solution involves using the `useEffect` hook to ensure that `StatusBar.currentHeight` is accessed only after the StatusBar has been rendered.  The provided `AppSolution.js` shows the corrected code which resolves the issue.

## Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Observe that the app crashes on an Android emulator or device when using the original `App.js` file.
4. Switch to using `AppSolution.js`, and the crash is resolved.

This demonstrates a timing issue that can affect Android applications when dealing with the `react-native` `StatusBar` component within Expo.