
# listValues = [];
listValues = [4,4,4,4,4,4,4,4,4,4];

maxMode = 0;
counter = 0;
maxNum = 0;

# def parser(l,m,c,mn):
#     for i in range(10):
#         l.append(i)
#     print(l)
#     for i in range (len(l)):
#         # print ("outer loop loop")
#         for j in range (i,len(l)):
#             # print("inner loop")
#             # print(l[i])
#             # print(l[j])
#             if(l[i]==l[j]):
#                 c+=1;
#             else:
#                 print("not counting")
#     print(counter);
#
# parser(listValues,maxMode,counter,maxNum)

for i in range (len(listValues)):
    for j in range (i,len(listValues)):
        if(listValues[i]==listValues[j]):
            counter+=1;
            print("Working")
        else:
            print("Not working")
print (listValues[i]);
print (counter)
