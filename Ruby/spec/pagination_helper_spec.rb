require_relative '../pagination_helper.rb'

describe PaginationHelper do
    helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
    it 'should count the pages' do
        expect(helper.page_count).to eq(2)
    end
    it 'should count the items' do 
        expect(helper.item_count).to eq(6)
    end
    it 'should count the items for every page' do
        expect(helper.page_item_count(0)).to eq(4)
        expect(helper.page_item_count(1)).to eq(2)
        expect(helper.page_item_count(2)).to eq(-1)
    end
    it 'take an item index and return the page that is belongs on' do
        expect(helper.page_index(5)).to eq(1)
        expect(helper.page_index(2)).to eq(0)
        expect(helper.page_index(20)).to eq(-1)
        expect(helper.page_index(-10)).to eq(-1)
    end
end