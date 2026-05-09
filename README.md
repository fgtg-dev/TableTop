# Grid Marker Project

A React application that visualizes an object placed on a 5x5 grid using coordinate and direction input such as:

```txt
1,1 NORTH
```

The object position and orientation are dynamically rendered on the board.

---

# Features

- Render a fixed 5x5 grid
- Visualize object placement using coordinates
- Rotate object based on cardinal direction
- Input validation with error handling
- Interactive form handling
- Component-driven development with Storybook
- Type-safe implementation using TypeScript
- Responsive UI using Material UI

---

# Tech Stack

## Core

- React
- TypeScript
- Vite

## UI & Styling

- Material UI (MUI)

## Form Handling & Validation

- React Hook Form
- Zod
- @hookform/resolvers

## Component Development

- Storybook

---

# Coordinate System

- The board is a fixed 5x5 grid
- Valid coordinates range from `0` to `4`
- `(0,0)` is located at the South West corner

Example:

```txt
4,4 EAST
```

---

# Accepted Directions

- NORTH
- EAST
- SOUTH
- WEST

The object rotates visually depending on the direction provided.

---

# Validation Rules

The application validates:

- x coordinate must be between `0` and `4`
- y coordinate must be between `0` and `4`
- direction must be:
  - NORTH
  - EAST
  - SOUTH
  - WEST

Invalid inputs are handled gracefully with validation messages.

---

# Getting Started

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Run Storybook

```bash
npm run storybook
```

---

# Example Inputs

| Input         | Description                     |
| ------------- | ------------------------------- |
| `0,0 NORTH`   | Bottom-left facing North        |
| `2,2 EAST`    | Center of the board facing East |
| `4,4 SOUTH`   | Top-right facing South          |
| `1,3 WEST`    | Facing West                     |

---

# Project Structure

```txt
src/
├── components/
├── forms/
├── utilities/
├── constants/
├── stories/
└── App.tsx
```

---

# Storybook

Storybook is used for isolated component development and testing.

Stories include:

- Different object placements
- Direction variations
- Boundary conditions
- Invalid input states

---
