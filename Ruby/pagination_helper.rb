class PaginationHelper

    def initialize(collection, items_per_page)
        @collection = collection
        @items_per_page = items_per_page
    end
    
    def item_count
        @collection.size
    end
      
    def page_count
        if @collection.size % @items_per_page > 0
            return @collection.size / @items_per_page + 1
        else
            return @collection.size / @items_per_page
        end
    end
      
    def page_item_count(page_index)
      if page_index < 0
        return -1
      else
        main = []
        page = 0
        number_per_page = 0
        @collection.each do |item|
            new_item = Hash.new
            new_item["index"] = @collection.index(item)
            if number_per_page < @items_per_page
                number_per_page += 1
                new_item["page"] = page
            else
                number_per_page = 0
                page += 1
                new_item["page"] = page
            end
            main << new_item
        end
        pageHash = main.select { |p| p['page'] == page_index}
        pageHash.size == 0 ? -1 : pageHash.size
      end
    end
      
    def page_index(item_index) 
        
    end
  end