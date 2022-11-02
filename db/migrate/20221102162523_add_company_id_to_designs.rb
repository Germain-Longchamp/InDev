class AddCompanyIdToDesigns < ActiveRecord::Migration[6.0]
  def change
    add_column :designs, :company_id, :integer
  end
end
