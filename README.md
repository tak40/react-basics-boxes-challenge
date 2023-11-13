# React Basics: Boxes Challenge

This project is based on Scrimba's React Basics tutorial. It's a simple web application featuring six boxes where clicking a box flips its color, showcasing the fundamental concepts of React state management and component interaction.

- **Build a meme generator (this section includes the boxes challenge):** [Scrimba React Basics](https://scrimba.com/playlist/pkGQkh3)
- **Boxes challenge:** [Boxes Challenge Part 1](https://scrimba.com/learn/frontend/boxes-challenge-part-1-co4ff4b9f8504c9a03077bf2c)


## Project Overview

The Boxes Challenge is designed to help new developers get hands-on experience with the core concepts of React, including components, state, props, and event handling. The application consists of six interactive boxes, where a click event triggers a change in the visual state of each box, toggling its color between two states.

For a detailed guide through the project steps, refer to the [Comprehensive Project Guide](#comprehensive-project-guide-react-basics-boxes-challenge) section below.

---

# Comprehensive Project Guide: React Basics - Boxes Challenge

This guide provides a step-by-step overview of the React Boxes Challenge. Each step outlines a key part of the project, from initial setup to advanced state management and styling. Click on the links to navigate to the detailed issues for each step.

## Table of Contents

1. [Initialize state with boxes array data](https://github.com/tak40/react-basics-boxes-challenge/issues/1)
2. [Apply dynamic styling based on `on` state](https://github.com/tak40/react-basics-boxes-challenge/issues/2)
3. [Componentize box and pass `on` prop](https://github.com/tak40/react-basics-boxes-challenge/issues/3)
4. [Implement local state for individual box toggle](https://github.com/tak40/react-basics-boxes-challenge/issues/4)
5. [Lift state up to manage unified application state](https://github.com/tak40/react-basics-boxes-challenge/issues/5)
6. [Update state using a traditional loop method](https://github.com/tak40/react-basics-boxes-challenge/issues/6)
7. [Refactor state update to use declarative `.map()` method](https://github.com/tak40/react-basics-boxes-challenge/issues/7)
8. [Enhance box styling for better UI](https://github.com/tak40/react-basics-boxes-challenge/issues/8)

---

## Step Details

### Step 1: Initialize State with Boxes Data

Initialize React state with the default array of boxes, and map over this state to display each box.

### Step 2: Dynamic Styling with Ternary Operator

Use a ternary operator to dynamically change the styling of the boxes based on their `on` state.

### Step 3: Create Box Component

Extract box rendering into a separate `Box` component and pass down the necessary props.

### Step 4: Local State for Box Component

Manage each box's on/off state locally within the `Box` component with a state hook.

### Step 5: Lift State Up to App Component

Move the state management to the parent `App` component to control the state of all boxes collectively.

### Step 6: Update Application State with Traditional Loop

Implement a traditional for-loop within the state setter function to update the state of a clicked box.

### Step 7: Refactor State Update with Declarative Map Method

Refine the state update function by replacing the traditional loop with the `.map()` method for more declarative syntax and readability.

### Styling Improvements

After ensuring functionality, focus on enhancing the UI with improved styling and animations.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
