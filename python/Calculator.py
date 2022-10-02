def add(a,b):
    print("Sum is : ",(a+b))

def sub(a,b):
    if a>b:
        print("Difference is : ",(a-b))
    else:
        print("Difference is : ",(b-a))

def mul(a,b):
    print("Product is : ",(a*b))

def div(a,b):
    print("Quotient is : ",(a/b))

while True:
    print('''Enter 1 to add
             Enter 2 to subtract
             Enter 3 to multiply
             Enter 4 to divide
             Enter N or n to exit 
             Enter any other key to continue''')
    ch=input("Enter choice: ")
    if ch == "1":
        a=int(input("Enter 1st number: "))
        b=int(input("Enter 1st number: "))
        add(a,b)

    elif ch == "2":
        a=int(input("Enter 1st number: "))
        b=int(input("Enter 1st number: "))
        sub(a,b)

    elif ch == "3":
        a=int(input("Enter 1st number: "))
        b=int(input("Enter 1st number: "))
        mul(a,b)
        
    elif ch == "4":
        a=int(input("Enter 1st number: "))
        b=int(input("Enter 1st number: "))
        div(a,b)

    elif ch in "Nn":
        break
    

    

