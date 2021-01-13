require_relative('../cakes.rb')

describe Cakes do
    it 'should return 0 if no ingredients are available' do
        test = Cakes.new.cakes({"eggs"=>4, "flour"=>400},{})
        expect(test).to eq(0)
    end
    it 'should return how many cakes can be made from the ingredients avalilable' do
        test = Cakes.new.cakes({"eggs"=>1}, {"eggs"=>5})
        expect(test).to eq(5)
    end
    it 'should return 0 if there is a missing ingredient' do
        test = Cakes.new.cakes({"apples"=>3, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>500, "flour"=>2000, "milk"=>2000})
        expect(test).to eq(0)
    end
    it 'should return how many cakes can be made from the ingredients avalilable' do
        test = Cakes.new.cakes({"cream"=>1, "flour"=>3, "sugar"=>1, "milk"=>1, "oil"=>1, "eggs"=>1},{"sugar"=>1, "eggs"=>1, "flour"=>3, "cream"=>1, "oil"=>1, "milk"=>1})
        expect(test).to eq(1)
    end
end