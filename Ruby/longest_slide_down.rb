class Pyramid
    def initialize(pyramid)
        @pyramid = pyramid
    end
    def longest_slide_down
        very_last_row = @pyramid.pop
        @pyramid.reverse.inject(very_last_row) do |last_row, row|
           best_choices = last_row.each_cons(2).map(&:max)
           row.zip(best_choices).map { |x| x.inject(:+) }
        end[0]
    end
end