class LastDigit 
    def last_digit(n1, n2)
        square = n1**n2
        square.infinite? ? 0 : square.to_s.split("").last.to_i
    end
end