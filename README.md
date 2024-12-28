# React useState Hook Bug: Multiple State Updates

This repository demonstrates a common, yet subtle, bug in React applications involving the `useState` hook. The bug arises from calling `setCount` multiple times consecutively, which can lead to unpredictable and incorrect state values.  The solution shows how to avoid this issue using functional updates to state.