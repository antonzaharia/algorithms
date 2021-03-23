require_relative '../to_underscore'

describe ToUnderscore do
    it "should return a lowercase word" do
        test = ToUnderscore.new.to_underscore('Test')
        expect(test).to eq('test')
    end
    it "should convert camel cased string into snake case notation" do
        test = ToUnderscore.new.to_underscore('TestController')
        expect(test).to eq('test_controller')
    end
    it "should convert camel cased string into snake case notation and ignore numbers" do
        test = ToUnderscore.new.to_underscore('App7Test')
        expect(test).to eq('app7_test')
    end
end