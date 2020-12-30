require_relative '../delete_nth'

describe DeleteNth do
    it "should return each number N times" do
        test = DeleteNth.new.delete_nth([1,1,1,1],2)
        expect(test).to eq([1,1])
    end
    it "should return each number once if given number is 1" do
        test = DeleteNth.new.delete_nth([20,37,20,21],1)
        expect(test).to eq([20,37,21])
    end
    it "should return each number N times in given order" do
        test = DeleteNth.new.delete_nth([1,2,3,1,2,3,1,2,3], 2)
        expect(test).to eq([1,2,3,1,2,3])
    end
end