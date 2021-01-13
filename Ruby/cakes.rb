class Cakes
    def cakes(recipe, available)
        output = []
        recipe.each do |ingredient, quantity|
            available[ingredient] ? output << available[ingredient] / quantity : output = [0]
        end
        available.size > 0 ? output.min : 0
    end
end