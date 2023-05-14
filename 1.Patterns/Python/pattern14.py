""" 

ABCDE
ABCD
ABC
AB
A

 """

def print_pattern():
    size = int(input('Enter size: '))
    for i in range(size):
        code = 65
        for _ in range(size-1-i, -1, -1):
            print(chr(code), end="")
            code += 1
        print("") 
    
print_pattern()