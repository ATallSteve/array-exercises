let beatles = ['John', 'Paul', 'George', 'Ringo']
document.getElementById('original').innerHTML = beatles

// Exercise 1
beatles[0] = beatles[1]
beatles[1] = beatles[3]
beatles[2] = ""
beatles[3] = ""
document.getElementById("array-ex1").innerHTML = beatles

// Exercise 2
beatles[2] = "Aryan"
document.getElementById("array-ex2").innerHTML = beatles

// Exercise 3 
beatles[4] = "hello"
document.getElementById("array-ex3").innerHTML = beatles
//It adds a fifth element

// Exercise 4 
beatles[10] = "tenth"
document.getElementById("array-ex4").innerHTML = beatles
//It adds an eleventh element and empty elements in between

// Exercise 5
document.getElementById("array-ex5").innerHTML = "The array has length " + beatles.length

// Exercise 6
beatles.sort()
document.getElementById("array-ex6").innerHTML = beatles