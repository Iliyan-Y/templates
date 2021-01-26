Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope "/api" do
    get '/', to: 'testings#index', as: 'testings_index'
  end
  
end
