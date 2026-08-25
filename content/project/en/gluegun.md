---
title: Gluegun
summary: Unity as a Library bridge for Expo apps.
draft: false
status: experimental
technologies:
  - TypeScript
  - C#
  - Expo
  - Unity
links:
  - kind: repository
    url: https://github.com/butter-soft/gluegun
  - kind: package
    url: https://www.npmjs.com/package/@bvtter/gluegun
---

## Background

The project began as a proof of concept at my company, where I needed to integrate a Unity-based AR project into a mobile application. Using Unity as a Library required substantial manual preparation.

iOS integration was especially demanding: alongside TypeScript and C#, it also required writing Objective-C code. Communication between Unity and the Expo application was not standardized either. I created Gluegun to simplify the integration and provide a consistent communication channel.

## What it does

Gluegun provides a communication channel for exchanging information between a Unity project and an Expo application. Following a shared message contract allows both sides to exchange JSON messages.

Instead of constructing a separate communication mechanism for each platform, developers can use the Unity and Expo packages to integrate both sides consistently.

## Design and implementation

I followed the approaches I considered most appropriate for each ecosystem. On the Expo side, a config plugin manages the Unity build artifacts required for Android and iOS.

Communication uses JSON, but the Unity package exposes a serializer interface rather than depending on a specific parser. Users can choose the implementation that best fits their project.

I also documented installation, platform-specific integration, and the message contract so developers can follow the actual usage flow.

## Current status

The company proof of concept confirmed that Gluegun works correctly. However, no publicly released application currently uses the library.

Because it has not yet been sufficiently validated in a real product, I still consider it experimental.
