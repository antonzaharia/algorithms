class Scramble
    def initialize(str1, str2)
        @str1 = str1
        @str2 = str2
    end
    def play
        word = @str1.split("")
        arrOfBools = @str2.split("").map do |letter|
            if word.include?(letter)
                word.delete_at(word.index(letter))
                true
            else
                false
            end
        end
        arrOfBools.include?(false) ? false : true
    end
end