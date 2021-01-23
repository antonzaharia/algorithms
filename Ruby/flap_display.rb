class FlapDisplay 
    ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "?", "!", "@", "#", "&", "(", ")", "|", "<", ">", ".", ":", "=", "-", "+", "*", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    def flap_display(lines, rotors)
        output = []
        if lines.size > 0
            lines[0].split("").each_with_index do |line, i|
                given_index = ABC.find_index(rotors[0][i])
                output << ABC[given_index + line]
            end
        end
        output
    end
end