"""

   A
  ABA
 ABCBA
ABCDCBA

 """

def print_pattern():
    size = int(input("Enter size: "))
    n_spc = size-1
    n_char = 1
    for _ in range(size):
        spc = n_spc
        char = n_char
        char_code = 65
        while spc > 0:
            print(" ", end="")
            spc-=1
        while char > 0:
            print(chr(char_code), end="")
            char-=1
            if char >= n_char / 2:
                char_code += 1
            else:
                char_code -= 1
        n_char += 2
        n_spc -= 1
        print("")

print_pattern()
            
