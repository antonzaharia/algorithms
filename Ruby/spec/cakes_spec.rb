require_relative('../cakes.rb')

describe Cakes do
    it 'test' do
        test = Cakes.new.cakes('test')
        expect(test).to eq('test')
    end
end