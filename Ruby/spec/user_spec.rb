require_relative '../user.rb'
describe User do
    it 'should initiate any user with rank -8' do
        test = User.new
        expect(test.rank).to eq(-8)
    end
    it 'should correctly update the progress' do
        user.inc_progress(-7)
        expect(test.progress).to eq(10)
    end
    it 'should correctly update the rank' do
        user.inc_progress(-5)
        expect(test.rank).to eq(-7)
    end
end