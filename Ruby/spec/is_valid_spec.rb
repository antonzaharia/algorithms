require_relative('../is_valid.rb')

describe IsValid do
    it "should return true if is a valid ISBN" do
        test = IsValid.new.validISBN10('1112223339')
        expect(test).to eq(true)
    end
    it "should return false if is not a valid ISBN" do
        test = IsValid.new.validISBN10('1234512345')
        expect(test).to eq(false)
    end
    it "should return false if there are not 10 chars" do
        test = IsValid.new.validISBN10('111222333')
        expect(test).to eq(false)
    end
    
end