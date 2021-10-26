class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :introduction
      t.integer :age
      t.string :image_id

      t.timestamps
    end
  end
end
