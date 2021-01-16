class PokerHand
  
    def initialize(hand)
      @hand = hand
    end

    def define_score(hand)
        score = 0
        cards_in_pairs = []
        hand.split(' ').each do |card|
            hand.split(' ').each do |c|
                if card != c && c.split('')[0] == card.split('')[0]
                    if !cards_in_pairs.include?(card)
                      cards_in_pairs << card
                    end
                end
            end
        end
        if cards_in_pairs.size == 5
          score = 6
        elsif cards_in_pairs.size == 4 && cards_in_pairs.all? { |c| cards_in_pairs[0].split("")[0] == c.split("")[0]}
          score = 7
        elsif cards_in_pairs.size == 4
          score = 2
        elsif cards_in_pairs.size == 3
          score = 3
        elsif cards_in_pairs.size == 2
          score = 1
        end
        straight = numbers(hand).sort.each_cons(2).all? {|a, b| b == a + 1 }
        if straight
          score = 4
        end
        signs = hand.split(" ").map { |c| c.split("")[1] }
        if signs.uniq.size <= 1 && score > 0
          score = 8
        elsif signs.uniq.size <= 1
          score = 5
        end
        score
    end
    def numbers(hand)
        numbers = hand.split(" ").map do |c|
            card = c.split("")[0]
            if card.to_i == 0
              if card == "J"
                11
              elsif card == "T"
                  10
              elsif card == "Q"
                12
              elsif card == "K"
                13
              elsif card == "A"
                14
              end
            else
              card.to_i
            end
        end
    end
        
    def compare_with(other)
      if define_score(@hand) > define_score(other)
        "Win"
      elsif define_score(@hand) < define_score(other)
        "Loss"
      elsif define_score(@hand) == define_score(other)
        if numbers(@hand).sum > numbers(other).sum
            "Win"
        elsif numbers(@hand).sum < numbers(other).sum
            "Loss"
        else
            "Tie"
        end
      end
    end
  
  end