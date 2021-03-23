class ToUnderscore
    def to_underscore(string)
        array = []
        string.split("").each do |letter|
            if letter != letter.downcase
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