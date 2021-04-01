import unittest

def fizzbuzz(i):
    if i % 15 == 0:
        return "FizzBuzz"
    elif i % 3 == 0:
        return "Fizz"
    elif i % 5 == 0:
        return "Buzz"
    else:
        return i


def main():
    for i in range(1, 101):
        print(fizzbuzz(i))


if __name__ == '__main__':
    main()

class TestFizzBuzz(unittest.TestCase):
    def test_fizz(self):
        for i in [3, 6, 9, 18]:
            print('testing', i)
            assert fizzbuzz(i) == 'Fizz'

    def test_buzz(self):
        for i in [5, 10, 50]:
            print('testing', i)
            assert fizzbuzz(i) == 'Buzz'

    def test_fizzbuzz(self):
        for i in [15, 30, 75]:
            print('testing', i)
            assert fizzbuzz(i) == 'FizzBuzz'