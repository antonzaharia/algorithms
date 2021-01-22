require_relative '../flap_display'

describe FlapDisplay do
    it 'test' do
        test = FlapDisplay.new.flap_display('test', 'test')
        expect(test).to eq('test')
    end
end