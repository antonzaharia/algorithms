require_relative('../is_valid.rb')

describe IsValid do
    it "test" do
        test = IsValid.new.validISBN10('test')
        expect(test).to eq('test')
    end
end