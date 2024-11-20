### Questions asked

- Explain Closures with examples(code it).
  
![alt text](image.png)
In the above image, the seconf parantheses calls the inner function as we are returning it.

![alt text](image-1.png)
It can also be written like this


![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-5.png)
Here, variable b is also a part of lexical environment.

![alt text](image-6.png)

![alt text](image-7.png)
In this image, if line number 8 was not there, it would print 100.

![alt text](image-8.png)

![alt text](image-9.png)

### Advantages of Closures
- Function Currying
- Used in higher order functions like memoize, once
- Data Hiding(privacy) and Encapsulation

### Example of Data Hiding and Encapsulation

![alt text](image-10.png)
Everyone can access counter variable here.

![alt text](image-11.png)
Anyone from outside cannot access the counter variable.


![alt text](image-12.png)

![alt text](image-13.png)

### Constructor Function

![alt text](image-14.png)

### Disadvantages of Closures

- Overconsumption of Memory because variables are not garbage collected.

### What is a Garbage collector?

- JS is a high level programming language. In languages like C, C++ which are low level, it is upto the developers how they allocate and deallocate memory. But, in JS, there is a garbage collector to handle this.
- Garbage collector freezes up the memory when it finds there are unused variables. It basically doesn't allocate memory for those unused variables.

### How are Closures and Garbage collectors related?

![alt text](image-15.png)

![alt text](image-16.png)
In this image, z will not be in memory(garbage collected) since it is unused. But, x is being used, so it is not garbage collected.