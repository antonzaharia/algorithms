class PokerHand
  
    def initialize(hand)
      @hand = hand
    end

    def define_score(hand)
        score = 0
        cards_in_pairs = []
        pair_one = false
        pair_two = false
        three = false
        four = false
        full = false
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
          full = true
        elsif cards_in_pairs.size == 4 && cards_in_pairs.all? { |c| cards_in_pairs[0].split("")[0] == c.split("")[0]}
          four = true
        elsif cards_in_pairs.size == 4
          pair_two = true
        elsif cards_in_pairs.size == 3
          three = true
        elsif cards_in_pairs.size == 2
          pair_one = true
        end
    end
        
    def compare_with(other)
      other
    end
  
  end