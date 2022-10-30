class Company < ApplicationRecord
    has_many :users, dependent: :delete_all
    has_many :clients, dependent: :delete_all
end
