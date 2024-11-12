### Callback Functions


- Functions that are passed in another function as arguments are called Callback Functions.

![alt text](image.png)

- Blocking the main thread means, having a function which is blocking the call stack operations.

- Asynchronous operations are not possible without callback functions.

![alt text](image-1.png)

Functions in event listeners are callback functions.

### Closures with Callback Functions

![alt text](image-2.png)

- Event listeners are heavy. Because, event listeners have too keep track of so many variables of lexical scope.
- So, if there are so many event handlers on a page, the page becomes slow.