for x in range(0, 19 + 1, 1):
    print("Enter " + str(x + 1) + "number of 20")
    number = int(input())
    if x == 0:
        smallestNumber = number
    else:
        if number < smallestNumber:
            smallestNumber = number
print("Smallest number is: " + str(smallestNumber))
