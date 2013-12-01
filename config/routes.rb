GmapsAutocomplete::Application.routes.draw do
  resources :addresses

  root to: 'addresses#new'
end
