class FlapDisplay 
    ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    def flap_display(lines, rotors)
        output = []
        if lines.size > 0
            lines.each_with_index do |line, index|
                output << display(line, rotors[index])
            end
        end
        output
    end
    
    def set_index(given_index, rotor)
        output = given_index + rotor
        while output > 26 do
          output = rotor - 26
        end
        output
    end
    
    def display(line_arr, rotor_arr)
        word = []
        rotor_arr.each_with_index do |rotor, i|
            line = line_arr.split("")[i]
            given_index = ABC.find_index(line)
            if rotor > 0
                word << ABC[set_index(given_index, rotor)]
            else
                word << line 
            end
        end
        word.join("")
    end
end