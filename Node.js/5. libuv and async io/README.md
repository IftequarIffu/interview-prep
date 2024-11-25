

### Async and libuv

![alt text](image.png)

![alt text](image-1.png)

- JS is synchronous but Node.js can make it work asynchronous.


![alt text](image-2.png)

### How synchronous code is executed?

![alt text](image-3.png)

### libuv

![alt text](image-4.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

- **libuv**(written in c) has event loop, thread pool, timers, file system etc.

### How asynchronous code is executed?

![alt text](image-10.png)

- v8 engine just offloads the async tasks to libuv and moves to next line.
- As soon as the async functions are executed, the call back function (a or b or c) is pushed into the v8 engine's call stack.