require_relative '../remove_duplicates.rb'

describe Question001 do
    it "should remove duplicates" do
        test1 = RemoveDuplicates.new.remove_duplicates(["test", "test1", "test"])
        expect(test1).to eq(["test", "test1"])
    end
end