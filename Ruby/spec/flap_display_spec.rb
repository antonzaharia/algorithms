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
        test = FlapDisplay.new.flap_display(["CAT"],[[1, 14, 27]])
        expect(test).to eq(["DOG"])
    end
    it 'should correctly change the letters in longer strings' do
        test = FlapDisplay.new.flap_display(["IN SPACE NOBODY"],[[48, 47, 0, 21, 38, 120, 48, 15, 41, 11, 43, 19, 47]])
        expect(test).to eq(["CAN HEAR YOU SCREAM"])
    end
    it 'should handle multiple elements array as input' do
        test = FlapDisplay.new.flap_display(["IN", "SPACE", "NOBODY"],[[48, 47], [0, 21, 38, 120, 48], [15, 41, 11, 43, 19, 47]])
        expect(test).to eq(["CAN", "HEAR", "YOU", "SCREAM!"])
    end
end