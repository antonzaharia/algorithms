class PigIt
    def pig_it(text)
        to_return = []
        text.split(" ").each do |word|
            if !word.match(/\A\W*\z/)
                first_letter = word[0]
                word[0] = ''
                to_return << "#{word}#{first_letter}ay"
            else
                to_return << word
            end
        end
        to_return.join(" ")
    end
end