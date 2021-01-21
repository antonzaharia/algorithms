require_relative '../user.rb'
describe User do
    it 'should initiate any user with rank -8' do
        user = User.new
        expect(user.rank).to eq(-8)
    end
    it 'should initiate any user with progress 0' do
        user = User.new
        expect(user.progress).to eq(0)
    end
    it 'should correctly update the progress' do
        user = User.new
        user.inc_progress(-7)
        expect(user.progress).to eq(10)
    end
    it 'should correctly update the rank' do
        user = User.new
        user.inc_progress(-7)
        user.inc_progress(-5)
        expect(user.rank).to eq(-7)
    end
end