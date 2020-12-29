class LastCan
    def last_can(array, given_number)
        last_drink = ""
        current_number = 1
        while current_number <= given_number do
            array.each do |name|
                if given_number == current_number
                    last_drink = name
                end
                current_number = current_number + 1
            end
        end
        last_drink
    end
end