# *******
#  *****
#   ***
#    *

def print_pattern():
    size = int(input('Enter size: '))
    n_str = 2*size-1
    for i in range(size):
        str = n_str
        n_spc = i
        while n_spc > 0:
            print(" ", end="")
            n_spc -= 1
        while str > 0:
            print("*", end="")
            str -=1
        print("")
        n_str -= 2

print_pattern()               
