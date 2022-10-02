def binarySearch(arr,start,end,target):
    while(start<=end):
        #finding the middle element
        mid = start+ (end-start)//2
        
        #check if target is present at mid
        if arr[mid] == target:
            return mid
        
        #if target is greater than number at mid,ignore the left half
        if target > arr[mid]:
            start = mid + 1
            
        #if target is smaller than number at mid,ignore the right half
        else:
            end = mid - 1
            
    #if element/target is not present,then we return -1
    return -1

#required inputs
n = int(input("Enter size of array: "))
arr = []
print("Enter the numbers:")
for i in range(n):
    arr.append(int(input()))
target = int(input("Enter the number to be searched: "))
start = 0
end = len(arr) - 1

#function call
position = binarySearch(arr,start,end,target)

if position != -1:
    print(f"{target} is at index {position}")
else:
    print(f"{target} is not found.")