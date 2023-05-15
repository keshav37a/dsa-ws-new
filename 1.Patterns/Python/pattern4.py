# *****
# ****
# ***
# **
# *

def print_pattern():
    size = int(input('Enter number'))
    for i in range(size):
        for _ in range(size-i):
            print("*", end='')
        print("")

print_pattern()