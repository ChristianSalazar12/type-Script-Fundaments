# 📝 Instructions for Running the Example

1. **Create the HTML file**

   In the `public` folder, create an `index.html` file with the necessary HTML elements (e.g., `<h1>`, `<input>`, `<button>`, `<form>`, etc.) that your TypeScript code will interact with.

   Also, add the following script tag before the closing `</body>` tag to include the compiled JavaScript file:

   ```html
   <script src="scripts/main.js"></script>
   ```

2. **Write your TypeScript code**

   Edit the `src/main.ts` file to select and manipulate HTML elements as needed.

3. **Enable automatic compilation**

   Open your terminal, navigate to the `src` folder, and run:

   ```bash
   tsc --watch
   ```
   