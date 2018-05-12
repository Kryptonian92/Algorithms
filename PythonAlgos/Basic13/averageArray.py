# Finds the average of the array
import math
newArr = [2,4,2];
newAvg = 0;

def avgArray(arr,avg):
    for i in range (len(arr)):
        avg += arr[i];
    print(avg)
    print math.floor((avg/len(arr)))
avgArray(newArr,newAvg)
