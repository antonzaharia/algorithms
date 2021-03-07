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
    it "X represents 10 if is the last character" do
        test = IsValid.new.validISBN10('048665088X')
        expect(test).to eq(true)
    end
    it "X represents 10 only if is the last character" do
        test = IsValid.new.validISBN10('X123456788')
        expect(test).to eq(false)
    end
    it "Any other charater returns an invalid ISBN" do
        test = IsValid.new.validISBN10('ABCDEFGHIJ')
        expect(test).to eq(false)
    end
end