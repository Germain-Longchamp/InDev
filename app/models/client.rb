class Client < ApplicationRecord
    belongs_to :company
    has_many :designs, dependent: :delete_all
end
