""" 
A
BB
CCC
DDDD
EEEEE

 """

def print_pattern():
    size = int(input('Enter size: '))
    for i in range(size):
        for j in range(i+1):
            print(chr(65+i), end="")
        print("")

print_pattern()