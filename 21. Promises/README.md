### Promises


**Proper Definition:** A Promise is an object representing the eventual completion or failure of an async operation.

![alt text](image.png)
![alt text](image-1.png)

- Promise is nothing but an empty object
- Initially, the data object is undefined. But, pnce the createOrder API call succeeds, the data object is filled with some data automatically.

![alt text](image-2.png)

- The callback function attached with then, will be called automatically once the promise object is filled with data from the API.

- Using .then() syntax we are **preventing Inversion of Control(control lies with us)**.

### Digging into Promise

![alt text](image-3.png)

- PromiseState -> If it is pending or fulfilled.
- PromiseResult -> The data returned from API.

![alt text](image-4.png)

### Promise Chaining

![alt text](image-5.png)

![alt text](image-6.png)

- Use return statements if you want to pass data from one function to the other in the promise chain.

![alt text](image-7.png)