# Files
### Opening Files
`file_variable = open(filename, mode)`
`filename` - string of the name of the file
`Mode` - `'r'(Read), 'w' (Write), 'a' (Append)`

Example:
``` Python
grades_file = open('Grades.txt', 'w')

SALES_FILE = 'Sales.txt'
sales_data = open(SALES_FILE, 'r')

REVENUE_FILE = 'Revenue.txt'
revenue_data = open(REVENUE_FILE, 'a')
```

### Closing Files
`file_variable.close()`

Examples:
```python
grades_file.close()
sales_data.close()
```

### Reading Data
There are 2 important functions
```python
#Read the entire contents of a file
variable = file_variable.read()

#Read a single line of a file
variable = file_variable.readline()
```

Example:

Assume you have a file named StudentNames.txt with the following data:
```
Mickey Mouse
Sleeping Beauty
Donald Duck
```
Example 1: Using `readline()` 
```Python
student_data = open('StudentNames.txt', 'r')
for student in range(3): 
    name = student_data.readline()
    print("Student name:", name)
student_data.close()
```
Good Example: Using `for each` iteration
```python
student_data= open('StudentNames.txt', 'r')
for student in student_data:
    name = student.rstrip('\n') #remove the newline character
    print("Student name:", name)
student_data.close()
```

### Writing Data
Write a string to a file
`file_variable.write(string)`

Example:
```python
class_data = open('ClassList.txt', 'w')
for classes in range(3):
    class_name = input("Please enter a class (e.g.MIS 304): ")
    class_data.write(class_name + "\n")
class_data.close()
```

### Using While Loops (idk if this is that useful)
```python
# To process records with fields on different lines, we use 
# while loops:

file_variable = open(file_name,'r')
first_line = file_variable.readline()

while first_line != '': # Checks for EOF
    field_1 = file_variable.readline()
    field_2 = file_variable.readline()
    ...
    first_line= file_variable.readline()
file_variable.close()
```

Assume you have a file named CityProfit.txt with the following data:
```txt
Atlanta
15943.49
47136.38
48139.29
New York
39473.24
48134.20
53942.87
```
Example:
```python
city_data = open('CityProfit.txt', 'r')
city_name= city_data.readline().rstrip('\n')
whilecity_name != '':
    q1_profit = float(city_data.readline())
    q2_profit = float(city_data.readline())
    q3_profit = float(city_data.readline())
    tot_profit= q1_profit + q2_profit + q3_profit
    print(city_name, "profit is $", tot_profit)
    city_name= city_data.readline().rstrip('\n')
city_data.close()
```