# GeoScript Atlas

GeoScript Atlas is an interactive, educational map application designed specifically for **Geoguessr** players and geography enthusiasts. It helps users master the visual distinctiveness of languages, scripts, and alphabet variations around the world.

## 🌍 Features

### 1. Interactive World Map
*   **Zoomable & Panable**: Smooth navigation powered by Leaflet and CartoDB Voyager tiles.
*   **Smart Markers**: Countries are labeled with their unique script characters (e.g., `Å Ä Ö` for Sweden, `ก ร ะ` for Thailand) directly on the map.
*   **Hover Effects**: Markers expand on hover for better readability.

### 2. Explore Mode
Click on any marker to open a detailed **Info Panel** containing crucial meta-data for Geoguessr:
*   **Distinctive Scripts**: Large, clear display of unique characters.
*   **Phone Prefixes**: Essential for narrowing down countries (e.g., `+359` for Bulgaria).
*   **Road Signs**: Common words seen on street signs (e.g., *Ulica*, *Jalan*, *Soi*).
*   **Identification Guide**: Concise tips on differentiating similar languages (e.g., distinguishing Russian from Ukrainian).

### 3. Quiz Modes
Test your knowledge with two distinct game modes:

*   **🔤 Script Quiz**:
    *   The app displays a set of characters (e.g., `Ő Ű`).
    *   You must click the correct country on the "blind" map.
    *   Tests your ability to recognize alphabet diacritics and unique letters.

*   **📍 Word Quiz**:
    *   The app displays a common road word (e.g., `Mawatha`).
    *   You must identify the country where this word appears on signs.
    *   Crucial for identifying locations when scripts are legible but the language is unknown.

## 🛠️ Technology Stack

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS
*   **Mapping**: React Leaflet, Leaflet.js
*   **Fonts**: Google Fonts (Noto Sans variants for global script support)
*   **Icons**: Lucide React

## 🚀 How to Use

1.  **Explore**: Default mode. Pan around the world and click markers to learn.
2.  **Script Quiz**: Click "Script Quiz" in the top left. Look at the characters in the bottom overlay and find the matching country.
3.  **Word Quiz**: Click "Word Quiz". Look at the word (e.g., "Jalan") and find the country.

## 📝 License

This project is open source and available under the MIT License.
