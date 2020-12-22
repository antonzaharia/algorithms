require_relative '../ruby_methods_arguments'

describe RubyMethodsArguments do
    it "basic test with integers" do
        basic = RubyMethodsArguments.new.take([4, 6, 5, 2, 22], 2)
        expect(basic).to eq([5, 2, 22])
    end
    it "basic test with strings" do
        basic = RubyMethodsArguments.new.take(["one", "two", "three"], 2)
        expect(basic).to eq(["three"])
    end
end