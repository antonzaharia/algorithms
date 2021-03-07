class IsValid
    def validISBN10(isbn)
        total = 0
        output = true
  
        return false if isbn.size != 10
  
        isbn.split("").each_with_index do |number, index|
        if number == "X" && index == 9
            number = 10
         end
        if ("A".."Z").include?(number)
         output = false
         else 
          total = total + (number.to_i * (index + 1))
         end
        end
  
        output && (total % 11) == 0 
    end
end