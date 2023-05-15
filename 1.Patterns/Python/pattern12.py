""" 
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

 """

def print_pattern():
    n = int(input("Enter size: "))
    num = 1
    for i in range(n+1):
        for _ in range(i):
            print(num, end=" ")
            num += 1
        print("")
    
print_pattern()