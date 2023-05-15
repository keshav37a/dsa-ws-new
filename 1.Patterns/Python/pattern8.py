#    *
#   ***
#  *****
#   ***
#    * 

def print_pattern():
    size = int(input('Enter size: '))
    n_spc = size / 2
    n_str = 1
    for i in range(size):
        spc = n_spc
        str = n_str
        while spc > 0:
            print(" ", end="")
            spc-=1
        while str > 0:
            print("*", end="")
            str-=1
        if i < size / 2 - 1:
            n_spc -= 1
            n_str += 2
        else :
            n_spc += 1
            n_str -= 2
        print("")
print_pattern()


