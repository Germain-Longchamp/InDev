class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :zip
      t.string :country

      t.timestamps
    end
  end
end
