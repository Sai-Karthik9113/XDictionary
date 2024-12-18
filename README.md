# Dictionary App

A simple React-based **Dictionary App** that allows users to search for the meanings of predefined words from a built-in library. This app provides an interactive and user-friendly interface for looking up word definitions instantly.

## Features

- **Search Functionality**: Enter a word in the search bar to find its definition.
- **Predefined Word Library**: Includes popular terms like *React*, *Component*, and *State*.
- **Error Handling**: Displays an appropriate message for words not found in the dictionary.
- **Dynamic UI**: Reflects search results instantly based on user input.

## Usage

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/XDictionary.git
   ```
2. Navigate to the project directory:
   ```
   cd x-dictionary
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```
5. Open `http://localhost:3000` in your browser to access the app.

### Example Flow:

- Enter a search term (e.g., `React`) and click **Search**.
- View the definition, _"A JavaScript library for building user interfaces."_
- For unrecognized words, the app shows, _"Word not found in the dictionary."_

## Screenshots

### Initial View

![XDictionary][on page load]

### Word Found

![XDictionary][word found]

### Word Not Found

![XDictionary][word not found]

## Limitations

1. **Static Word Library**: The dictionary is limited to the predefined word set in `WordsLibrary.js` and does not support dynamic word additions.
2. **Case Sensitivity Handling**: While input is normalized to lowercase, definitions are restricted to exact matches only.
3. **Scalability**: The app is not connected to any external API for an expansive dictionary lookup.
4. **Basic User Interface**: The current styling is minimal and can be enhanced for better user experience.

## License

This project is licensed under the MIT License.



[on page load]: src/assets/screenshots/image.png
[word found]: src/assets/screenshots/20241216-0353-11.3571863_1_1.gif
[word not found]: src/assets/screenshots/20241216-0402-10.5951257_1_1.gif