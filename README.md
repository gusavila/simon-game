# 🎮 Simon Game – Web Version with Gamepad Support

This is a web-based implementation of the classic **Simon Game**, built with **HTML**, **CSS**, and **JavaScript**. The game challenges your memory by playing and displaying an increasing sequence of colors that the player must repeat in the correct order.

## 🕹️ Features

- 🎨 Four-color Simon buttons: green, red, yellow, blue.
- 🔊 Each button plays a unique sound.
- ⌨️ Start the game using any **keyboard key** or the **Start button** on a gamepad.
- 🖱️ Play using **mouse**, **touch**, or **gamepad** (e.g., Xbox controller).
- 🔁 Sequence grows with each level.
- ❌ Plays a "wrong" sound and resets when a mistake is made.
- 💻 Responsive design with custom styling.

## 📁 Project Structure

```
simon-game/
│
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css         # Game styling
│   └── sounds/
│       ├── red.mp3
│       ├── blue.mp3
│       ├── green.mp3
│       ├── yellow.mp3
│       └── wrong.mp3          # Sound for wrong input
├── javascript/
│   └── game.js                # Game logic
└── README.md
```

## 🚀 How to Play

1. Open the game in a browser.
2. Press any **keyboard key**, click **Start**, or press the **Start button** on a gamepad to begin.
3. Watch the color flash and sound.
4. Repeat the sequence by clicking/tapping the correct buttons or pressing the respective gamepad buttons.
5. The sequence grows with each level.
6. If you make a mistake, the game will play an error sound and show "Game Over."

## 🎮 Gamepad Mapping

| Gamepad Button | Color  | Label |
|----------------|--------|-------|
| A (0)          | Green  | `a`   |
| B (1)          | Red    | `b`   |
| X (3)          | Blue   | `y`   |
| Y (2)          | Yellow | `x`   |
| Start (9)      | Starts/Restarts the game |

> ✅ Tested with Xbox controller via browser Gamepad API.

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (with custom classes for styling and animations)
- **JavaScript (ES6)** with jQuery
- **Gamepad API**
- **Google Fonts**: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

## 📸 Preview

![Simon Game Preview](/assets/images/game_image.png)

## 📦 Setup & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simon-game.git
   ```
2. Open `index.html` in your browser.

> 💡 No additional setup or dependencies required.

## ✅ To Do (Optional Enhancements)

- High score tracking with localStorage.
- Difficulty settings (e.g., speed increase).
- Visual effects for game over or success.
- Mobile vibration support.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
