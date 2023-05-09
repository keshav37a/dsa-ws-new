

# 1
# 12
# 123
# 1234
# 12345

def print_pattern():
    n = int(input('Enter number: '))
    for i in range(n):
        for j in range(0, i+1):
            print(j+1, end="")
        print("")

print_pattern()
