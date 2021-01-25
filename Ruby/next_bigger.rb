class NextBigger
  def next_bigger(n)
    if length(n) > 1
        reverse_last(n)
    else
        -1
    end
  end

  def length(int)
    Math.log10(int).to_i + 1
  end

  def reverse_last(int)
    arr = int.to_s.split('')
    count = 1
    last = arr[arr.size - count]
    before_last = arr[arr.size - (count + 1)]
    arr[arr.size - count] = before_last
    arr[arr.size - (count + 1)] = last
    if arr.join("").to_i > int
        arr.join("").to_i
    else
        -1
    end
  end
end