require_relative '../domain_name.rb'

describe DomainName do
    it('should return domain name from simple link') do
        test = DomainName.new.domain_name("https://www.cnet.com")
        expect(test).to eq("cnet")
    end
    it('should return domain name from londer link') do
        test = DomainName.new.domain_name("http://www.zombie-bites.com")
        expect(test).to eq("zombie-bites")
    end
    it('should return domain name from any link path') do
        test = DomainName.new.domain_name("http://www.zombie-bites.com")
        expect(test).to eq("zombie-bites")
    end
end