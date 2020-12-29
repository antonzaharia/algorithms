require_relative '../last_can.rb'

describe LastCan do
    it "should return first person who get a can" do
        test = LastCan.new.last_can(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)
        expect(test).to eq("Sheldon")
    end
    it "should return second person who get a can" do
        test = LastCan.new.last_can(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2)
        expect(test).to eq("Leonard")
    end
    it "should return second person who get a can" do
        test = LastCan.new.last_can(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 20)
        expect(test).to eq("Howard")
    end
end