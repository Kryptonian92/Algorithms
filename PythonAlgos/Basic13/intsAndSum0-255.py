#Prints the integers and sum from 0-255

total = 0;
def numSum(total):
    for i in range(256):
        total += i
        print (i , "Your total is", total)
numSum(total)
