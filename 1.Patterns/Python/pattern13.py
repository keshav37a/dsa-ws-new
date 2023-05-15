""" 

A
AB
ABC
ABCD
ABCDE

 """

def print_pattern():
    size = int(input('Enter size: '))
    for i in range(size):
        code = 65
        for _ in range(i+1):
            print(chr(code), end="")
            code += 1
        print("")

print_pattern()
