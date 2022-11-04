class Design < ApplicationRecord
    belongs_to :company
    belongs_to :client
    belongs_to :user
end
