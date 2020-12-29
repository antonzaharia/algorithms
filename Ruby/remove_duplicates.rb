class RemoveDuplicates
    def remove_duplicates(nums)
        to_return = []
        nums.each_with_index do |n, i| 
            if n != nums[i - 1]
                to_return << n
            end
        end
        to_return.size
    end
end