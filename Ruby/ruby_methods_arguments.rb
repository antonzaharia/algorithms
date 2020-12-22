class RubyMethodsArguments
    def take(arr, number=1)
        length = arr.length
        return [] if number >= length
        arr[-(length - number)..-1]
    end
end