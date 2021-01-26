class TestingsController < ApplicationController
  def index
    info = {
      paragraph: "nokto",
      title: "Hello I'm the api"
    }
    render json: info, status: 200 
  end
end
