require_relative '../last_digit.rb'

describe LastDigit do
    it 'should return last decimal digit of a ** 1' do
        test = LastDigit.new.last_digit(4, 1)
        expect(test).to eq(4)
    end
    it 'should return last decimal digit of a ** b with small numbers' do
        test1 = LastDigit.new.last_digit(4, 2)
        expect(test1).to eq(6)
        test2 = LastDigit.new.last_digit(9, 7)
        expect(test2).to eq(9)
    end
    it 'should return last decimal digit of a ** b with large numbers' do
        test1 = LastDigit.new.last_digit(10, 10 ** 10)
        expect(test1).to eq(0)
        test2 = LastDigit.new.last_digit(2 ** 200, 2 ** 300)
        expect(test2).to eq(6)
    end
end