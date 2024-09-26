# What is source code?

Source code is the human-readable set of instructions written in a programming language that defines how a software application operates. It consists of the code, comments, and structure that developers create to implement algorithms, manage data, and control hardware.

Before a program can run on a computer, the source code must be translated into machine code through a process called compilation or interpretation, allowing the computer to execute the commands specified by the programmer. Source code is often stored in text files and can be modified, shared, and version-controlled to facilitate collaboration among developers.

# What makes computers so "smart", anyway?

Computers are considered "smart" because of their high processing power, sophisticated algorithms, vast memory, ability to automate tasks, data analysis capabilities, connectivity for collaboration, and precision in executing instructions. These features enable them to perform complex tasks quickly and efficiently.

# What is the purpose of a programming language?

The purpose of a programming language is to enable humans to communicate instructions to computers. It provides a structured way to express algorithms, solve problems, automate tasks, and develop software applications. Programming languages also facilitate abstraction, portability across platforms, and collaboration within developer communities.

# What are 3 examples of programming languages? Why are there so many of these?

### Three Examples of Programming Languages:

##### Python:

Versatile and easy to read; used in web development, data analysis, and AI.

##### JavaScript:

Essential for interactive web development; runs on both client and server sides.

##### Java:

Object-oriented; widely used in enterprise applications and Android development.

### Why Are There So Many?

There are many programming languages to address different use cases, adapt to evolving technology, cater to developer preferences, and reflect historical contexts. This variety allows developers to choose the best tools for their specific needs.

# What is a variable? Why are variables useful?

### What is a Variable?

A variable is a symbolic name for a value in programming that can hold data and be modified during program execution.

### Why Are Variables Useful?

##### Data Storage:

They store and manage changing data.

##### Readability:

Descriptive names enhance code clarity.

##### Reusability:

The same variable can be used in multiple places.

##### Flexibility:

Programs can adapt to different inputs.

##### Ease of Maintenance:

Changing a value in one place updates it everywhere in the code.

Variables are essential for efficient data manipulation and code organization

# What is the difference between a single-equals (=) and a double-equals (==)?

##### Single Equals (=):

An assignment operator used to assign a value to a variable (e.g., let x = 5;).

##### Double Equals (==):

A comparison operator that checks if two values are equal, performing type coercion if necessary (e.g., 5 == '5' returns true).

##### For strict equality,

use triple equals (===), which checks both value and type.

# What is the difference between a double-equals (==) and a triple-equals (===)?

##### Double Equals (==):

Compares values for equality with type coercion (e.g., 5 == '5' returns true).

##### Triple Equals (===):

Compares values for strict equality without type coercion, requiring both value and type to match (e.g., 5 === '5' returns false).

# Why does the developer console exist?

The developer console exists to help developers debug, test, and inspect web applications. It allows them to run JavaScript code, view errors, inspect HTML/CSS, and monitor network activity, enhancing productivity in the development process.

# When we talk about "conditional" statements, what does that mean? What is an example?

"Conditional" statements are programming constructs that execute different actions based on whether a specific condition is true or false. They enable decision-making in code.

### Example:

In JavaScript, an if statement is a conditional statement:

###### let score = 85;

###### if (score >= 70) {

###### console.log("Pass"); // Executes if the condition is true

###### } else {

###### console.log("Fail"); // Executes if the condition is false

###### }

In this example, "Pass" is logged if the score is 70 or above; otherwise, "Fail" is logged.

# Why would we want FOR and WHILE loops in our source code?

FOR and WHILE loops are used in source code to automate repetitive tasks efficiently:

### FOR Loop:

Ideal when the number of iterations is known in advance. It simplifies counting and iterating over arrays or collections.

### WHILE Loop:

Useful when the number of iterations is unknown and depends on a condition being true. It continues until a specified condition changes.

Both loops enhance code readability and reduce redundancy by allowing developers to execute blocks of code multiple times without repeating them manually.

# When would you use WHILE loop, instead of a FOR loop?

You would use a WHILE loop instead of a FOR loop when the number of iterations is not known in advance and depends on a specific condition. For example, if you want to keep executing a block of code until a user input meets a certain criterion or until a dynamic condition changes, a WHILE loop is more appropriate.

# What is function? Why would we use it?

### What is a Function?

A function is a reusable block of code that performs a specific task, taking inputs (parameters) and returning a value.

### Why Would We Use It?

Functions promote reusability, organization, abstraction, modularity, and ease of testing, making code more efficient and maintainable.

# How many values can you receive back from a function? How many values can you send in?

### How Many Values Can You Receive Back from a Function?

A function can return one value directly. However, it can effectively return multiple values by using data structures like arrays or objects.

### How Many Values Can You Send In?

You can send in any number of values as parameters to a function. The number of parameters is determined by how the function is defined, and many programming languages allow for variable-length arguments (like ...args in JavaScript) to accept multiple inputs. There is no strict limit on the number of arguments a function can accept, but practical considerations like readability and maintainability should guide your choices.

# What is an array? How many values does it hold?

### What is an Array?

An array is a data structure that holds a collection of values (elements), which can be of the same or different types. Arrays are indexed, meaning each element can be accessed using its position (index) in the array, typically starting from zero.

### How Many Values Does It Hold?

An array can hold any number of values. The capacity of an array depends on the programming language and the system's memory. In many languages, arrays can be dynamically resized, allowing them to grow or shrink as needed, although some languages have fixed-size arrays.

# What is a T-diagram and why should i know how to use one?

### What is a T-Diagram?

A T-diagram is a visual tool used in programming and problem-solving to organize and break down information. It typically consists of two columns: one for inputs (data, parameters, or conditions) and another for outputs (results or actions). The layout resembles a "T," hence the name.

### Why Should I Know How to Use One?

###### 1. Clarity:

T-diagrams help clarify the relationship between inputs and outputs, making it easier to understand the logic of a function or process.

###### 2. Problem Solving:

They assist in breaking down complex problems into simpler components, facilitating a structured approach to finding solutions.

###### 3. Planning:

T-diagrams are useful for planning code before implementation, helping to visualize how data flows through a program.

###### 4. Communication:

They provide a clear way to communicate ideas and logic to others, making it easier to collaborate on projects.

###### Overall,

T-diagrams enhance your ability to think critically and systematically about programming problems.

# What are the two ways to comment JS code? When would you use one versus the other?

### Two Ways to Comment JavaScript Code:

###### 1. Single-Line Comments:

Syntax: // This is a single-line comment
Usage: Best for brief comments or notes that only require one line. Use it for quick explanations or reminders next to code.

###### 2. Multi-Line Comments:

Syntax: /_ This is a multi-line comment _/
Usage: Suitable for longer explanations or when commenting out blocks of code. Use it when you need to describe complex logic or provide detailed documentation.

##### When to Use Each:

Use single-line comments for short, concise notes.
Use multi-line comments for more detailed descriptions or when you want to disable multiple lines of code temporarily.
