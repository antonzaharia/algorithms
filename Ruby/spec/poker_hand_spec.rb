require_relative '../poker_hand.rb'

describe PokerHand do
    it 'test' do
        test = PokerHand.new.compare_with('test')
        expect(test).to eq('test')
    end
end