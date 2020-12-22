class KeywordArguments
    def convert_temp(input, input_scale: 'celsius', output_scale: 'celsius')
        case input_scale
        when 'fahrenheit'
            return output_scale == 'kelvin' ? 
            ((input - 32) / 1.8) + 273.15 : (input - 32) / 1.8
        when 'celsius'
            return output_scale == 'kelvin' ? 
            input + 273.15 : (input * 1.8) + 32
        when 'kelvin'
            return output_scale == 'celsius' ? 
            input - 273.15 : (input - 273.15) * 1.8
        end
    end
end
