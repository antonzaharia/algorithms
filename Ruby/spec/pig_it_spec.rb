require_relative '../pig_it.rb'

describe PigIt do
    it "test" do
        test1 = PigIt.new.pig_it("test")
        expect(test1).to eq("test")
    end
end