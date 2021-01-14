require_relative '../last_digit.rb'

describe LastDigit do
    it 'test' do
        test = LastDigit.new.last_digit(2, 2)
        expect(test).to eq(4)
    end
end