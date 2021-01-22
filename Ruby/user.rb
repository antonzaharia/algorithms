class User

    RANK_ARR = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
    PROGRESS_ARR = (0..100).to_a

    def initialize
        @rank = RANK_ARR[0]
        @progress = PROGRESS_ARR[0]
    end
    
    def rank
        @rank
    end

    def progress
        @progress
    end

    def inc_progress(action)
        user_rank = RANK_ARR.find_index(@rank)
        action_rank = RANK_ARR.find_index(action)
        d = user_rank - action_rank
        if user_rank > action_rank && d == 1
            progress_build = 1
        elsif user_rank > action_rank && d > 1
            progress_build = 0
        elsif user_rank == action_rank
            progress_build = 3
        else
            progress_build = 10 * d * d
        end
        
        set_progress(progress_build)
    end

    private
    def set_progress(progress_build)
        total = @progress + progress_build
        while total >= 100 do
            rank_up
            total = total -100
        end
        @progress = total
    end
    def rank_up
        if @rank <= 8
            @rank = RANK_ARR[RANK_ARR.find_index(@rank) + 1]
        else
            puts "Top Rank!"
        end
    end
end