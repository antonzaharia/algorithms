require_relative '../next_bigger.rb'

describe NextBigger do
    it 'test' do
        test = NextBigger.new.next_bigger('test')
        expect(test).to eq('test')
    end
end