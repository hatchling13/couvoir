---
title: Munchkeen
summary: Solid-first interactive graph exploration toolkit
draft: false
status: experimental
technologies:
  - TypeScript
  - SolidJS
  - Cytoscape.js
links:
  - kind: website
    url: https://munchkeen.hatchling.dev
  - kind: repository
    url: https://github.com/hatchling13/munchkeen
  - kind: package
    url: https://www.npmjs.com/package/munchkeen
---

## Background

I wanted to visualize connections between documents and let people explore from one document to its neighbors.

I built the capability as a standalone tool first so I could publish it, then continue developing it through dogfooding.

Cytoscape.js appealed to me because it is well suited to working with graph data.

I was also comfortable with component-based development and wanted to explore Solid.js for its performance when handling many UI elements. This led me to build a wrapper that brought the two together.

## What it does

Munchkeen renders graph data made up of nodes and edges on the web and makes it explorable. Selecting a node rebuilds the graph around it to reveal its immediate neighbors and their edges, allowing users to follow relationships through the graph.

Users can reposition nodes by dragging them, select nodes and edges, and zoom the graph viewport by scrolling.

## Design and implementation

My main design priority was to keep the central logic framework-agnostic. Graph validation, projection of the visible subgraph, layout, and calculation of renderer updates are implemented as pure logic independent of any particular UI library or rendering backend.

Solid connects this logic to the component API, while the Cytoscape.js adapter applies the computed result to the screen. This keeps the graph logic intact if support for another UI library or renderer becomes necessary later.

To prevent these internal abstractions from leaking into everyday usage, I kept the component props to a minimum.

## Current status

Munchkeen is currently experimental because I have not yet used it in a real product.

The next step is to apply Munchkeen to the product that originally motivated it and validate it through dogfooding. Once it works as intended in that real-world context, I will consider it ready to move beyond the experimental stage.
