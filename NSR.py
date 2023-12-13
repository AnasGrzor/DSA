# def FindNearestSmallestElementRight(arr): Brute Force Approach O(n^2)
#     n = len(arr)
#     for i in range(n):
#         for j in range(i + 1, n):
#             if arr[i] > arr[j]:
#                 arr[i], arr[j] = arr[j], arr[i]
#     return arr


def FindNearestSmallestElementRight(arr): # O(n) using stack
    n = len(arr)
    stack = []
    res = []
    for i in range(n - 1, -1, -1):
        if len(stack) == 0:
            res.append(-1)
        elif len(stack) > 0 and stack[0] < arr[i]:
            res.append(stack[0])
        else:
            while len(stack) > 0 and stack[0] >= arr[i]:
                stack.pop(0)
            if len(stack) == 0:
                res.append(-1)
            else:
                res.append(stack[0])
        stack.append(arr[i])
    return res[::-1]