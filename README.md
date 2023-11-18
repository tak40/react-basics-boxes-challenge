<!-- @format -->

# React Basics: Boxes Challenge

## Project Overview

This project, based on Scrimba's React Basics tutorial, features a web application with six interactive boxes. Clicking on a box changes its color, demonstrating React's state management and how components interact. Check out the [Comprehensive Project Guide](#comprehensive-project-guide-react-basics-boxes-challenge) below for detailed steps, from the setup to more advanced concepts.

**See it in Action:** [React Basics Boxes Challenge on Netlify](https://react-basics-boxes-challenge.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad91a721-f7ef-4d35-b949-9991964f3280/deploy-status)](https://app.netlify.com/sites/react-basics-boxes-challenge/deploys)

![React Basics Boxes Challenge](./public/final.png)

Learn from the original tutorial:

-   **Start your React journey here - the foundational tutorial:** [Scrimba React Basics](https://scrimba.com/playlist/pkGQkh3)
-   **See the tutorial for the Boxes Challenge, which inspired this project:** [Part 1 on Scrimba](https://scrimba.com/learn/frontend/boxes-challenge-part-1-co4ff4b9f8504c9a03077bf2c)

---

# Comprehensive Project Guide: React Basics - Boxes Challenge

This guide takes you through the React Boxes Challenge step by step. Each section helps you understand a part of the project, from the very basics to more complex parts like state management and styling. Click the links to go to a detailed explanation for each step.

## Table of Contents

-   [Project Overview](#project-overview)
-   [Step 1: Initialize State with Boxes Data](#step-1-initialize-state-with-boxes-data)
-   [Step 2: Dynamic Styling with Ternary Operator](#step-2-dynamic-styling-with-ternary-operator)
-   [Step 3: Create Box Component](#step-3-create-box-component)
-   [Step 4: Local State for Box Component](#step-4-local-state-for-box-component)
-   [Step 5: Lifting State Up and Event Handling](#step-5-lifting-state-up-and-event-handling)
-   [Step 6: Update Application State with Traditional Loop](#step-6-update-application-state-with-traditional-loop)
-   [Step 7: Refactor State Update with Declarative Map Method](#step-7-refactor-state-update-with-declarative-map-method)
-   [Styling Improvements](#styling-improvements)
-   [React + Vite](#react--vite)

---

# Step Details

## Step 1: Initialize State with Boxes Data

Begin with establishing the foundation of our React application: the state. This initial step is crucial as it sets the stage for dynamic interaction within the app.

### Initializing React State

Start by initializing the React state with a default array of box objects, and then use this state to render each box in the UI.

```jsx
const [squares, setSquares] = useState(boxes)
```

Here, `useState` is a React Hook that allows us to add state to functional components. The line const `[squares, setSquares] = useState(boxes)` consists of the following parts:

-   `useState`: This is the Hook used to declare state in a functional component.
-   `boxes`: This is the initial value given to our state variable. In this case, `boxes` is an array of objects, each representing a box with certain properties like `id` and `on`.
-   `[squares, setSquares]`: This is array destructuring. `useState` returns a pair of values: the current state (`squares`) and a function that updates it (`setSquares`).

### Working with the State Variable: `squares`

The `squares` state variable, initialized with the boxes array, holds the data for each box. This state is key to dynamically rendering and updating the boxes in the UI as interactions occur.

### State Setter Function: `setSquares`

`setSquares` is the function we call when we want to update our state. It takes the new state value as an argument and schedules an update to the component's state.

### Initial State: `boxes`

The initial state, `boxes`, sets the starting point for our `squares` state variable. This setup, using `useState` with `boxes`, allows our component to maintain its own state independently, a crucial aspect of creating interactive user interfaces in React.

### Code Examples for Step 1

To render the boxes based on our state, we can map over the `squares` array. This can be done using different syntaxes, such as an arrow function or traditional function syntax:

Arrow function:

```jsx
const squareElements = squares.map(square => (
    <div key={square.id} className="box"></div>
))
```

Traditional function syntax:

```jsx
const squareElements = squares.map(function (square) {
    return <div key={square.id} className="box"></div>
})
```

## Step 2: Dynamic Styling with Ternary Operator

Having set up our basic state, we now turn our attention to adding interactivity and visual feedback. This step introduces dynamic styling, which is crucial for creating a responsive and engaging user interface.

### Adding Interactivity with Conditional Styling

In this part, we will modify the styling of each box based on its current state. This dynamic approach uses a ternary operator within the `map` function to determine the style properties.

![Result of Dynamic Styling](./public/step2.png)

This method allows the appearance of each box to change in response to user interactions, making the UI lively and interactive.

### Implementing the Ternary Operator

Here's the implementation showcasing how to conditionally style the boxes using the ternary operator within the `map` function:

```jsx
const squareElements = squares.map(square => {
    const styles = {
        backgroundColor: square.id % 2 === 0 ? 'red' : 'white',
    }

    return <div key={square.id} className="box" style={styles}></div>
})
```

In this code snippet:

-   Each box's `backgroundColor` is dynamically set based on the `on` state.
-   The ternary operator `(? :)` is used to choose between 'red' and 'white', depending on whether `square.on` is `true` or `false`

Through this step, learners not only understand how to manipulate styles based on state but also get a practical example of how conditional rendering enhances React component interactivity.

## Step 3: Create Box Component

After introducing dynamic styling, the next step is to improve the application's structure by embracing one of React's core principles: componentization. This step involves breaking the UI down into reusable components, specifically creating a `Box` component.

### Refactoring with Componentization

We refactor the application to include a `Box` component. This approach allows each box to manage its appearance based on the `on` property, which is passed down from the `App` component as a prop.

![Result of Creating a Box Component](./public/step3.png)

The `Box` component dynamically sets its `backgroundColor` based on the `on` prop, demonstrating the power of props in React for creating dynamic and reusable UI elements.

### Implementing the Box Component

Here's how we incorporate the `Box` component into our application:

```jsx
// App component
const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
))
```

```jsx
// Box component
function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent',
    }
    return <div className="box" style={styles}></div>
}
```

In this step, we:

- Define a new `Box` component that takes `props`.
- Use the `on` prop within the `Box` component to conditionally set the background color.
- Render the `Box` components within the `App` component by mapping over the `squares` state.

This process of creating a dedicated `Box` component not only makes our code more organized and modular but also illustrates an essential aspect of React's design philosophy: building reusable and independent components.

## Step 4: Local State for Box Component

With our `Box` components operational, we begin by managing state locally within each. This allows each `Box` to operate independently, an ideal approach for components that don't share state or need to communicate with each other.

![Local State Visualization](./local-state.png)

Local state is perfect for self-contained components. However, when multiple components interact or share state, managing several local states can lead to challenges. To address this, we consider lifting state up to streamline state management across the application.

Here's how local state is managed in a `Box` component:

```jsx
// Box component with local state and toggle function
function Box(props) {
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? '#222222' : 'transparent',
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return <div className="box" style={styles} onClick={toggle}></div>
}
```

This approach gives each `Box` its own state and behavior, demonstrating React's capability for creating interactive and independent components.

## Step 5: Lifting State Up and Event Handling

As our application scales, we confront challenges that require a more centralized approach to state management. Lifting state to a common ancestor, such as the `App` component, allows us to coordinate behavior across multiple components, making our application's data flow more predictable and easier to manage.

### Unifying State with a Single Source of Truth

![Unified State Visualization](./unified-state.png)

By moving state upwards, we create a single source of truth for our application in the `App` component. This unified state is then passed down to child components through props, ensuring all parts of our application are synchronized.

### Understanding Data Flow in React

React follows a unidirectional data flow pattern:

- **Props Down:** Data flows down from parent to child components via props. While children can use these props, they cannot modify them directly.
- **Events Up:** Events are communicated up from child to parent components. For instance, when a user interacts with a box, the event is sent back to the parent through a callback function.
- **State Updates in Parent:** The parent component, holding the state, is responsible for updating it. This updated state then flows back down to the children, triggering a UI update.

### Arrow Functions and Event Handling

One of the subtle yet powerful features of JavaScript ES6 that React leverages is the arrow function. Arrow functions are not just a shorthand syntax, but they also retain the scope of the `this` keyword from the surrounding context. In React, this becomes incredibly useful in event handling.

When we pass callbacks down to child components, we often need to pass additional data, like an item's ID. Here's where arrow functions shine:


```jsx
// In the child component (Box.js)
<div
    className="box"
    style={styles}
    onClick={() => props.toggle(props.id)}
></div>
```

In this code snippet, `() => props.toggle(props.id)` creates a new function that calls `props.toggle` with the `props.id` parameter. This ensures that when the `onClick` event triggers, it calls our `toggle` function with the specific ID of the box that was clicked, without immediately invoking it upon rendering.

### Centralizing State and Event Handling in App

In the `App` component, we maintain the state and pass the `toggle` function down to each `Box`. This setup allows us to manage state changes centrally and uniformly:

```jsx
// In the parent component (App.js)
const [squares, setSquares] = useState(boxes)

function toggle(id) {
    // Logic to update the state based on the clicked box's id
}

const squareElements = squares.map(square => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
))

return (
    <main>
        <h1>Scrimba React Basics: Boxes Challenge</h1>
        {squareElements}
    </main>
)
```

With arrow functions, we efficiently pass down the ability to update state from the parent `App` component to each `Box`, encapsulating the logic within a concise and clear syntax. This pattern of event handling promotes a clean and maintainable codebase, illustrating the strength of React's design principles.

## Step 6: Update Application State with Traditional Loop

Before diving into more advanced state update patterns, it's valuable to understand the traditional approaches that many developers start with. In this step, we revisit the classic loop method to update state—a foundational concept in JavaScript.

Although it's not the most efficient method in React, understanding this conventional approach provides insight into how we can leverage React's capabilities for more elegant solutions.

Here's the traditional loop method applied to our toggle functionality:

```jsx
function toggle(id) {
    setSquares(prevSquares => {
        const updatedSquaresArray = []
        for (let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if (currentSquare.id === id) {
                updatedSquaresArray.push({
                    ...currentSquare,
                    on: !currentSquare.on, // Toggle the on state
                })
            } else {
                updatedSquaresArray.push(currentSquare)
            }
        }
        return updatedSquaresArray // Don't forget to return the new state array
    })
}
```

While this method works, it's not the most idiomatic way to handle state in React. It's imperative and doesn't take full advantage of JavaScript's array methods that React endorses for a more declarative approach, as we'll see in the next step.

## Step 7: Refactor State Update with Declarative Map Method

Now that we've seen the traditional way to update state, we move toward a more React-idiomatic approach using the `.map()` method. This shift from imperative to declarative code is a natural progression in a developer's journey as they embrace React's paradigms.

Refactoring with `.map()` enhances code clarity and aligns with functional programming principles, which React is heavily inspired by.

Here's the refactored toggle function using `.map()`:

```jsx
function toggle(id) {
    setSquares(prevSquares =>
        prevSquares.map(square =>
            square.id === id ? { ...square, on: !square.on } : square
        )
    )
}
```

This update represents a significant step in thinking like a React developer:

- We've moved from explicitly telling the code how to loop over data and change state, to declaring what the updated state should look like.
- The `.map()` method provides a clear transformation of each item in our state array, returning a new array with the updated state.
- This approach is not only cleaner but also more in line with React's best practices, making our codebase more maintainable and easier to understand.

Through this evolution from Step 6 to Step 7, developers learn the value of embracing React's functional nature for state updates, setting the stage for writing better React code.

## Styling Improvements

The latest update enhances the application with a vibrant new color scheme and an engaging flip animation, significantly improving the visual aesthetics and interactivity.

### Vibrant Color Scheme

We've refreshed the application's palette to make it more lively and inviting. The chosen colors were selected for their visual impact and to improve user engagement.

```css
:root {
    --color-light: #ff2e63; /* A vibrant pink */
    --color-dark: #3949ab;  /* A deep blue */
    /* Other variables */
}
```

These color variables are then applied to the boxes to differentiate between their 'on' and 'off' states, making the UI more colorful and visually interesting.

### Flip Animation

The flip animation is implemented using the `transform` property, which is a CSS property that allows us to rotate, scale, skew, or translate an element. In this case, we use the `rotateY` function to flip the box around the Y-axis.

```css
.box {
    transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.5s ease-in-out;
}

.box.flipped {
    transform: rotateY(180deg);
}
```

This CSS gives each box a smooth flipping motion on toggle, simulating a card flip by rotating around the Y-axis. The `transition` property is used to define the animation's duration and easing function, while the `transform` property is used to rotate the box.

### React Component with Animation

In the `Box` component, we dynamically assign a class based on the box's state and apply the corresponding styles:

```jsx
function Box(props) {
    const styles = {
        backgroundColor: props.on ? 'var(--color-light)' : 'var(--color-dark)',
    };

    const boxClass = `box ${props.on ? 'flipped' : ''}`;

    return (
        <div className={boxClass} style={styles} onClick={() => props.toggle(props.id)}></div>
    );
}

export default Box;
```

Here, we use a ternary operator to add the 'flipped' class when the `props.on` state is `true`. This change triggers the CSS flip animation and alters the background color, providing instant visual feedback to the user.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
