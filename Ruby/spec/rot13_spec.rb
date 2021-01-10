require_relative '../rot13.rb'

describe Rot13 do
    it 'test' do
        test = Rot13.new.rot13('test')
        expect('test').to eq('test')
    end
end