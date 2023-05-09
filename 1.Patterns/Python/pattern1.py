
# *
# **
# ***
# ****
# *****

def print_pattern():
    n = input("Enter a number")
    for i in range(int(n)):
        for _ in range(i):
            print("*", end='')
        print("")

print_pattern()



