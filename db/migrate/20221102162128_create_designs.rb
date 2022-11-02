class CreateDesigns < ActiveRecord::Migration[6.0]
  def change
    create_table :designs do |t|
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
