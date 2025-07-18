'''prev2=0
prev1=1
print(prev2)
print(prev1)
for i in range (19):
    frev3=prev1+prev2
    print(frev3)
    prev1=prev2
    prev2=frev3
'''


#with Recursion

print(0)
print(1)
count=2
def Fibo_series(prev1,prev2):
    global count
    if(count <=19):
        fibo=prev1+prev2
        print(fibo)
        prev2 = fibo
        prev1=prev2
        count +=1
        Fibo_series(prev1,prev2)
    else:
        return
    
Fibo_series(1,0)



