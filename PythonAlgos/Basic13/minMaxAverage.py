#Finds the min, max and average
import math
from decimal import *

numArray = [1,5,7,10,3];
total = 0;
maxNum = 0;
minNum = 0;
def arrValues(arr,t,m,l):
    for i in range (len(arr)):
        t+=arr[i];
        if(arr[i]>m):
            m=arr[i]
        else:
            pass
        if(arr[i]<arr[i]+1):
            l=arr[i]
        else:
            pass
    print ("Max: ",m,"Minimum: ",l,"Average: " , (t/len(arr)))
    # print ("The average is " + "%.2f" % (3/2))
arrValues(numArray,total,maxNum,minNum)
