command = ""
is_car_on = False
while True:
    command = input("> ").lower()
    if command == 'start':
        if is_car_on:
            print('Car is already started.')
        else:
            print('Car starting...')
            print('Done. Ready to go!')
            is_car_on = True
    elif command == 'stop':
        if not is_car_on:
            print('Car is already stopped.')
        else:
            is_car_on = False
            print("Car stopped.")
    elif command == 'help':
        print('''
start - start the car
stop - stop the car
quit - exit
        ''')
    elif command == 'quit':
        print('Bye bye!')
        break
    else:
        print("Sorry, I don't know that yet.")