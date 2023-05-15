#     *
#    *** 
#   *****
#  *******
# *********

def print_pattern():
    size = int(input("Enter number: "))
    for i in range(1, size+1):
        n_spc = size-i
        n_str = 2*i-1
        while n_spc > 0:
            print(" ", end=" ")
            n_spc -= 1
        while n_str > 0:
            print("*", end = " ")
            n_str -= 1
        print("")
print_pattern()