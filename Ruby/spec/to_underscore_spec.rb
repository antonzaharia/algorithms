require_relative '../to_underscore'

describe ToUnderscore do
    it "test" do
        test = ToUnderscore.new.to_underscore('test')
        expect(test).to eq('test')
    end
end