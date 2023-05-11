""" 

1
01
101
0101
10101

 """

def print_pattern():
    size = int(input("Enter size: "))
    is_zero_toggled = False
    for i in range(size):
        for _ in range(i):
            if(is_zero_toggled):
                print("0", end="")
            else: 
                print("1", end="")
            is_zero_toggled = not is_zero_toggled
        print("")

print_pattern()