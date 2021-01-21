require_relative '../user.rb'
describe User do
    it 'test' do
        test = User.new.test('test')
        expect(test).to eq('test')
    end
end