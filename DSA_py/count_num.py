'''# print the n=4536 in array reverse
n="4536"
digit=[]

while n>0:
    a=n%10
    digit.append(a)
    n=n//10

print(digit)
# sum this number
total=0
for a in (digit):
    total+= a
print(total)
'''

#find the 3 from array
arr=(1,2,3,4,5)
t=5

for i in range (len(arr)) :
    if(arr[i]==5       ):
        print(i)
        break

    