""" 

1      1
12    21
123  321
12344321

 """

def print_pattern():
    size = int(input('Enter size: '))
    for i in range(size):
        n_spc = 2*(size-i-1)
        n_num = i + 1
        for j in range(1, n_num+1):
            print(j, end="")
        while n_spc > 0:
            print(" ", end="")
            n_spc -= 1
        while n_num > 0:
            print(n_num, end="")
            n_num -= 1
        print(" ")

print_pattern()
