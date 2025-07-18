#    list
'''
list are mutable   []
list are orderd
list are dynamic
nested list is allow 
insert-insert(index,value)                 replace -A[index]=value                                       sort 
append-A.append(value)                     delete-del(index) / remove-A.remove(value)                     reverse-A.reverse()
'''
A=[1,2,'raj',2.6]
B=[2,2.6,'raj',1]
print(A==B)#false 

A=[1,2,'raj',2.6]
B=[1,2,'raj',2.6]
print(A==B)#True

A.insert(3,'hello')#insert (index, value )
print(A)

A.append(10)#add in last only
print(A)
B=[6,7,3,5,4,6,2,0,1]
print(B)

del B[0]# delete del(index)
print(B)

B.reverse()#reverse print
print(B)

B.remove(5)#remove the element from list (value)
print(B)


#    tuple
'''
    tuple is immutable so we cand append do or add in tuple   ()

    nested tuple is allow
    tuple is faster than list
'''

A=(1,2,3,4)
print(A)


C=((1,2),(3,4))
print(C[0])
print(C[0][0])
print(C)