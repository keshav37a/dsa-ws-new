# 1
# 22
# 333
# 4444
# 55555

def print_pattern():
    n = int(input("Enter a number: "))
    for i in range(n):
        for _ in range(i+1):
            print(i+1, end="")
        print("")

print_pattern()