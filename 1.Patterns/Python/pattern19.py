""" 

*     *
**   **
*** ***
*******
*** ***
**   **
*     *

"""

def print_pattern():
    size = int(input("Enter size: "))
    n_str = 1
    n_spc = 2*(size-1)
    for i in range(2*size-1):
        str = n_str
        spc = n_spc
        while str > 0:
            print("*", end="")
            str-=1

        str = n_str

        while spc > 0:
            print(" ", end="")
            spc -= 1
        
        while str > 0:
            print("*", end="")
            str-=1
        
        print("")
        
        if i < size-1:
            n_spc -= 2
            n_str += 1
        else :
            n_spc += 2
            n_str -= 1

print_pattern()