require_relative '../remove_duplicates.rb'

describe RemoveDuplicates do
    it "should remove string duplicates" do
        test1 = RemoveDuplicates.new.remove_duplicates(["test", "test1", "test"])
        expect(test1).to eq(2)
    end
    it "should remove integer duplicates" do
        test2 = RemoveDuplicates.new.remove_duplicates([1,1,2,2,3,3])
        expect(test2).to eq(3)
    end
    it "should remove integer duplicates 2" do
        test2 = RemoveDuplicates.new.remove_duplicates([1,1,2])
        expect(test2).to eq(2)
    end
end