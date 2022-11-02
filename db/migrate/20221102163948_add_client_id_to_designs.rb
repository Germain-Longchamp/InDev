class AddClientIdToDesigns < ActiveRecord::Migration[6.0]
  def change
    add_column :designs, :client_id, :integer
  end
end
