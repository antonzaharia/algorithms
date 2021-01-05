require_relative '../pig_it.rb'

describe PigIt do
    it "should correct modify a word in a latin pig word" do
        test1 = PigIt.new.pig_it("String")
        expect(test1).to eq("tringSay")
    end
    it "should correct modify the sentence in a latin pig text" do
        test2 = PigIt.new.pig_it("Pig latin is cool")
        expect(test2).to eq("igPay atinlay siay oolcay")
    end
    it "should leave punctuation marks untouched" do
        test3 = PigIt.new.pig_it("Hello world !")
        expect(test3).to eq("elloHay orldway !")
    end
end