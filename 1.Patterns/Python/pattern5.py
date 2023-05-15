# 12345
# 1234
# 123
# 12
# 1

def print_pattern():
    size = int(input('Enter size: '))
    for i in range(size):
        for j in range(size-i):
            print(j+1, end='')
        print("")
    
print_pattern()