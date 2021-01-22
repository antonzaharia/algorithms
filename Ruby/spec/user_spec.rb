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
    it 'should correctly update the progress if action and user rank are equal' do
        user = User.new
        user.inc_progress(-8)
        expect(user.progress).to eq(3)
    end
    it 'should correctly update the progress if action rank is 1 level lower than user rank' do
        user = User.new
        user.inc_progress(-4) # set user rank to -7 (user progress 60)
        user.inc_progress(-8)
        expect(user.progress).to eq(61)
    end
    it 'should ignore any action that is 2 levels lower than user rank' do
        user = User.new
        user.inc_progress(-1) # set user rank to -4 (user progress 90)
        user.inc_progress(-8)
        expect(user.progress).to eq(90)
    end
    it 'should keep progress at 0 after rank 8' do
        user = User.new
        user.inc_progress(-1)
        user.inc_progress(7)
        user.inc_progress(8)
        user.inc_progress(8)
        expect(user.progress).to eq(0)
    end
end