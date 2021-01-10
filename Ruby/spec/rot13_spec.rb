require_relative '../rot13.rb'

describe Rot13 do
    it 'should change A to N' do
        test = Rot13.new.rot13('A')
        expect(test).to eq('N')
    end
    it 'should decrypt a message from rot13 correctly' do
        test = Rot13.new.rot13('EBG13 rknzcyr')
        expect(test).to eq('ROT13 example')
    end
    it 'should convert a message in rot13 correctly' do
        test = Rot13.new.rot13('This is my first ROT13 excercise!')
        expect(test).to eq('Guvf vf zl svefg EBG13 rkprepvfr!')
    end
end