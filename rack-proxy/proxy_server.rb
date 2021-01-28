require 'rack-proxy'
class ProxyServer < Rack::Proxy
def rewrite_env(env)
  request = Rack::Request.new(env)
  if request.path.match('/app1')
    env["HTTP_HOST"] = "localhost:3001"
    @port = 3001
  elsif request.path.match('/app2')
    env["HTTP_HOST"] = "localhost:3002"
    @port = 3002
  elsif request.path.match('/app3')
    env["HTTP_HOST"] = "localhost:3002"
    @port = 3002
  # elsif request.path.match('/app4')
  #   env["HTTP_HOST"] = "localhost:3004"
  #   @port = 3004
  # The below line is important to load assets.
  # So it detects app name from the first request to the app
  # which is stored in an instance variable and redirects
  # to that app for assets.
  elsif request.path.match('/static') || request.path.match('/assets')
    env['HTTP_HOST'] = "localhost:#{@port}"
  else
    env["HTTP_HOST"] = "localhost:3001"
    @port = 3001
  end
  env
  end
end