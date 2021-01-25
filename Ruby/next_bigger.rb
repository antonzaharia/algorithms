class NextBigger
  def next_bigger(n)
    if length(n) > 1
        count = 1
        if reverse_last(n, count) == -1 || reverse_last(n, count) == -2
            count = count + 1
        end
        reverse_last(n, count)
    else
        -1
    end
  end

  def length(int)
    Math.log10(int).to_i + 1
  end

  def reverse_last(int, count)
    arr = int.to_s.split('')
    last = arr[arr.size - count]
    before_last = arr[arr.size - (count + 1)]
    arr[arr.size - count] = before_last
    arr[arr.size - (count + 1)] = last
    if arr.join("").to_i > int
        arr.join("").to_i
    elsif length(int) - 1 == count
        -2
    else
        -1
    end
  end
end