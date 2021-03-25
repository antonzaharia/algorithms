class Scramble
    def initialize(str1, str2)
        @str1 = str1
        @str2 = str2
    end
    def play
        arr = @str2.split("").map do |letter|
            @str1.split("").include?(letter)
        end
        arr.include?(false) ? false : true
    end
end