class DeleteNth
    def delete_nth(order, max_e)
        return_array = []
        order.each do |number|
            if return_array.count(number) < max_e
                return_array << number
            end
        end
        return_array
    end
end