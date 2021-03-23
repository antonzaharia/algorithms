class ToUnderscore
    def to_underscore(string)
        array = []
        last_index = 0
        string.split("").each_with_index do |letter, i|
            if letter == letter.upcase
                if array.size == 0
                    array << letter.downcase
                else
                    array << "_#{letter.downcase}" 
                end
            else
                array << letter
            end
        end
        array.join("")
    end
end