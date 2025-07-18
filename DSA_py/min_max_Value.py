#To find minimum value in array


A=[34,5,3,2,53,56,432,24534,1]

minval = A[0]

for i in A:
    if i <=minval:
        minval=i
    

print(minval)

maxval=A[0]

for i in A:
    if i >=maxval:
        maxval=i

print(maxval)