# def NearestSmallestElement(arr): Brute Force
#     n = len(arr)
#     for i in range(n):
#         for j in range(i + 1, n):
#             if arr[i] > arr[j]:
#                 arr[i], arr[j] = arr[j], arr[i]
#     return arr

## Optimatized

def NearestSmallestElement(arr):
    vector = []
    stack = []

    for i in range(len(arr)):
        if len(stack) == 0:
            vector.append(-1)
        elif len(stack) > 0 and stack[0] < arr[i]:
            vector.append(stack[0])
        else:
            while (len(stack) > 0 and stack[0] >= arr[i]):
                stack.pop(0)
            if len(stack) == 0:
                vector.append(-1)
            else:
                vector.append(stack[0])

        stack.append(arr[i])

    return vector

print(NearestSmallestElement([4, 5, 2, 10, 8]))