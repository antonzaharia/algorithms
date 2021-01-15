require_relative '../poker_hand.rb'

describe PokerHand do
    it 'Highest straight flush wins' do
        test = PokerHand.new('2H 3H 4H 5H 6H')
        expect(test.compare_with('KS AS TS QS JS')).to eq('Loss')
    end
    it 'Straight flush wins of 4 of a kind' do
        test = PokerHand.new('2H 3H 4H 5H 6H')
        expect(test.compare_with('AS AD AC AH JD')).to eq('Win')
    end
    it 'Highest 4 of a kind wins' do
        test = PokerHand.new('AS AH 2H AD AC')
        expect(test.compare_with('JS JD JC JH 3D')).to eq('Win')
    end
    it '4 Of a kind wins of full house' do
        test = PokerHand.new('2S AH 2H AS AC')
        expect(test.compare_with('JS JD JC JH AD')).to eq('Loss')
    end
    it 'Full house wins of flush' do
        test = PokerHand.new('2S AH 2H AS AC')
        expect(test.compare_with('2H 3H 5H 6H 7H')).to eq('Win')
    end
    it 'Highest flush wins' do
        test = PokerHand.new('AS 3S 4S 8S 2S')
        expect(test.compare_with('2H 3H 5H 6H 7H')).to eq('Win')
    end
    it 'Flush wins of straight' do
        test = PokerHand.new('2H 3H 5H 6H 7H')
        expect(test.compare_with('2S 3H 4H 5S 6C')).to eq('Win')
    end
    it 'Equal straight is tie' do
        test = PokerHand.new('2S 3H 4H 5S 6C')
        expect(test.compare_with('3D 4C 5H 6H 2S')).to eq('Tie')
    end
    it 'Straight wins of three of a kind' do
        test = PokerHand.new('2S 3H 4H 5S 6C')
        expect(test.compare_with('AH AC 5H 6H AS')).to eq('Win')
    end
    it '3 Of a kind wins of two pair' do
        test = PokerHand.new('2S 2H 4H 5S 4C')
        expect(test.compare_with('AH AC 5H 6H AS')).to eq('Loss')
    end
    it '2 Pair wins of pair' do
        test = PokerHand.new('2S 2H 4H 5S 4C')
        expect(test.compare_with('AH AC 5H 6H 7S')).to eq('Win')
    end
    it 'Highest pair wins' do
        test = PokerHand.new('6S AD 7H 4S AS')
        expect(test.compare_with('AH AC 5H 6H 7S')).to eq('Loss')
    end
    it 'Pair wins of nothing' do
        test = PokerHand.new('2S AH 4H 5S KC')
        expect(test.compare_with('AH AC 5H 6H 7S')).to eq('Loss')
    end
    it 'Highest card loses' do
        test = PokerHand.new('2S 3H 6H 7S 9C')
        expect(test.compare_with('7H 3C TH 6H 9S')).to eq('Loss')
    end
    it 'Highest card wins' do
        test = PokerHand.new('4S 5H 6H TS AC')
        expect(test.compare_with('3S 5H 6H TS AC')).to eq('Win')
    end
    it 'Equal cards is tie' do
        test = PokerHand.new('2S AH 4H 5S 6C')
        expect(test.compare_with('AD 4C 5H 6H 2C')).to eq('Tie')
    end
end