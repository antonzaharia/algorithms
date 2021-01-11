require_relative '../pagination_helper.rb'

describe PaginationHelper do
    it 'test' do
        test = PaginationHelper.new('test', 'test').test('test')
        expect(test).to eq('test')
    end
end