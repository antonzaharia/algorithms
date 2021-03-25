require_relative '../scramble.rb'

describe "Scramble" do
    it "return true if a portion of str1 characters can be rearranged to match str2" do
        test = Scramble.new('rkqodlw', 'world').play
        expect(test).to eq(true)
    end
    it "return true if a portion of str1 characters can be rearranged to match str2 - longer word" do
        test = Scramble.new('scriptjava','javascript').play
        expect(test).to eq(true)
    end
    it "return false if str1 characters cannot be rearranged to match str2" do
        test = Scramble.new('katas', 'steak').play
        expect(test).to eq(false)
    end
    it "return false if str1 characters cannot be rearranged to match str2 - letters copy" do
        test = Scramble.new('csa', 'casa').play
        expect(test).to eq(false)
    end
end