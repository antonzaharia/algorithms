class Cakes
    def cakes(recipe, available)
        output = []
        recipe.each do |ingredient, quantity|
            available[ingredient] ? output << available[ingredient] / quantity : ""
        end
        available.size > 0 ? output.min : 0
    end
end