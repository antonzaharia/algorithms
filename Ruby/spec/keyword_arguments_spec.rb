require_relative '../keyword_arguments'

describe KeywordArguments do
    it "should convert to kelvin correctly" do
        celsius = KeywordArguments.new.convert_temp(0, input_scale: 'celsius', output_scale: 'kelvin')
        expect(celsius).to eq(273.15)
    end
    it "should convert to fahrenheit correctly" do
        celsius = KeywordArguments.new.convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit')
        expect(celsius).to eq(32.0)
    end
end