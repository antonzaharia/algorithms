require_relative '../domain_name.rb'

describe DomainName do
    it('test') do
        test = DomainName.new.domain_name('test')
        expect(test).to eq('test')
    end
end