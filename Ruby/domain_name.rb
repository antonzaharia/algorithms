class DomainName 
  def domain_name(url)
      url[0] == 'h' ? output = url.split('//')[1].split(".") : output = url.split('.')
      output[0] === 'www' ? output[1] : output[0]
  end
end