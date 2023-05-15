""" 

E
DE
CDE
BCDE
ABCDE

 """

def print_pattern():
    size = int(input("Enter size: "))
    for i in range(size):
        charCode = 65+size-i
        for j in range(i+1):
            print(chr(charCode-1+j), end="")
        print("")
print_pattern()