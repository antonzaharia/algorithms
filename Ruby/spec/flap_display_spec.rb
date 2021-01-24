require_relative '../flap_display'

describe FlapDisplay do
    it 'should should return an empty string if nothing is passed' do
        test = FlapDisplay.new.flap_display([""],[[]])
        expect(test).to eq([""])
    end
    it 'should not change anything if rotors passed are 0' do
        test = FlapDisplay.new.flap_display(["NOTHING MOVED"],[[0,0,0,0,0,0,0,0,0,0,0,0,0]])
        expect(test).to eq(["NOTHING MOVED"])
    end
    it 'should correctly change the letters' do
        test = FlapDisplay.new.flap_display(["CAT"],[[1, 14, 32]])
        expect(test).to eq(["DOG"])
    end
end