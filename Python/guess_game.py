secret_number = 5
guess_number = 0
guess_limit = 3
while guess_limit > guess_number:
    guess = int(input('Guess: '))
    guess_number += 1
    if guess == secret_number:
        print('You won!')
        break
else:
    print('Sorry, You lost!')