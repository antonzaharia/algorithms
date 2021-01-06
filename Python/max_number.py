def max(list):
    output = 0
    for number in list:
        if number > output:
            output = number
    print(output)

max([1, 3, 3, 7, 5, 6])