class Rot13
    def rot13(message)
        alphabet = [*'a'..'z']
        chars = message.split("")
      
        shifted = chars.map do |char|
          if alphabet.include?(char.downcase) && char.capitalize!
            alphabet.at(alphabet.index(char.downcase) - 13)
          elsif alphabet.include?(char.downcase)
            alphabet.at(alphabet.index(char.downcase) - 13).upcase
          else
            char
          end
        end
        shifted.join
    end
end
