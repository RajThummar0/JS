arr = [10, 20, 30, 40, 50, 60]
position = 3  # index to delete

for i in range(position, len(arr) - 1):
    arr[i] = arr[i + 1]

arr.pop()  # remove the last duplicate element

print(arr)
