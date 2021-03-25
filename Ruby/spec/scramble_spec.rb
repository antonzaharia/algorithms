require_relative '../scramble.rb'

describe "Scramble" do
    it "test" do
        test = Scramble.new("test", "test2").play
        expect(test).to eq('test')
    end
end