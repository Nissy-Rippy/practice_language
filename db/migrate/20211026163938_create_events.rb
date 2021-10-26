class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.text :body
      t.boolean :disp_flag
      t.datetime :start
      t.date :end
      t.string :allDay

      t.timestamps
    end
  end
end
