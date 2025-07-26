class Addtwonumbers:
    output = "Sum of two numbers"
    def __init__(self, a,b):
        self.firstnumber = a
        self.secondnumber = b
    
    def sumtwonumbers(self):
        return int(self.firstnumber) + int(self.secondnumber)

num1 = (input("Enter the First number\n"))
num2 = (input("Enter the Second number\n"))    
obj1 = Addtwonumbers(num1,num2)
result = obj1.sumtwonumbers()
print(obj1.output)
print("Sum = ", result)
