### Promise APIs

![alt text](image-13.png)


### Promise.all()

**Success case**

![alt text](image.png)

![alt text](image-8.png)

- Displayed after 3 secs

**Failure case**

![alt text](image-1.png)

![alt text](image-9.png)

- Displayed after 1 sec


- This is like all or none. If all succeed, it will give you results. If atleast one fail, then Promise.All() fails.

- As soon as there is one fail, it doesn't wait for others and returns the results.


### Promise.allSettled()

**Success Case**

![alt text](image-2.png)

![alt text](image-10.png)

**Failure Case**

![alt text](image-3.png)

- Even if one promise fails, it will wait for the other promises to be fulfilled and give the results.

### Promise.race()

- Returns the result of first **settled promise(we got result)**(Even if it success or failure).
- If the first one is success, it returns the result. And if it fails, it will return the error.

**Success Case**

![alt text](image-4.png)

![alt text](image-11.png)


**Failure Case**


![alt text](image-5.png)

![alt text](image-12.png)


### Promise.any()

- It will wait for the first success (success seeking race).

**Success Case**

![alt text](image-6.png)

![alt text](image-14.png)

**Failure Case**

- What if all fail? It will give us an aggregate error

![alt text](image-7.png)

![alt text](image-15.png)

