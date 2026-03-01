DEMO : https://youtu.be/zGhcgNdeU5I

```markdown
# 📦 Tenzies Game (React Edition)

A simple, interactive Tenzies game built with **React** and **Tailwind CSS**. Challenge yourself to
 match all ten dice as fast as you can!

---

## 🔧 Key Features

* **10 Virtual Dice**: Generates a fresh set of dice for every game.
* **Freeze Logic**: Click on any die to lock its value before the next roll.
* **Smart Roll**: Re-roll only the dice that aren't locked.
* **Win Condition**: Detects automatically when all dice match and are locked.
* **Responsive UI**: Clean, minimalist design that works on mobile and desktop using Tailwind CSS.

---

## 🛠️ Tech Stack

* **React**: Functional components and Hooks (`useState`, `useEffect`).
* **Tailwind CSS**: Modern utility-first styling.
* **Build Tool**: Create React App (CRA) default configuration.
* **Confetti**: (Optional suggestion) To celebrate your win!

---

## 📁 Project Structure

```text
tenzies-game/
├── public/
├── src/
│   ├── components/
│   │   └── Die.jsx      # Individual die component
│   ├── App.jsx          # Main game logic & state
│   ├── index.js         # Entry point
│   └── App.css          # Tailwind imports
├── package.json
└── README.md
```

---

## 🚀 How to Run

Follow these steps to get the project running locally:

1. **Clone the repository**
```bash
git clone https://github.com/Franly2/Franly-s-Tenzies

```


2. **Navigate to the project folder**
```bash
cd tenzies-react

```


3. **Install dependencies**
```bash
npm install

```


4. **Start the development server**
```bash
npm start

```


*The app will open automatically at `http://localhost:3000`.*

---

## 🎮 How to Play

1. Click **"Roll"** to start.
2. Click on a die to **freeze** it at its current value.
3. Keep rolling until all 10 dice are the same number.
4. Win the game and reset to play again!

---

Developed by Franly Budi Pramana

