require_relative '../next_bigger.rb'

describe NextBigger do
    it 'should return -1 if there is not a next bigger number' do
        test = NextBigger.new.next_bigger(9)
        expect(test).to eq(-1)
    end
    it 'should return the next bigger number of 2 digit numbers' do
        test = NextBigger.new.next_bigger(12)
        expect(test).to eq(21)
    end
    it 'should return the next bigger number of 3 digit numbers' do
        test = NextBigger.new.next_bigger(513)
        expect(test).to eq(531)
    end
end