require_relative '../longest_slide_down.rb'

describe "Pyramid" do
    it "test" do
        test = Pyramid.new("test").longest_slide_down
        expect(test).to eq("test")
    end
end