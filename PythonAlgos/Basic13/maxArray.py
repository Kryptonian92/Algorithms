#Prints largest number in array

numArray = [10,50,6,3];
maxNum = 0;
def arrMax(arr,m):
    for i in range (len(arr)):
        if (arr[i] > m):
            m = arr[i]
    print(m)
arrMax(numArray,maxNum)
