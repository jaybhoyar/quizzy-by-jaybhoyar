class AddNotNullConstraintToUserRole < ActiveRecord::Migration[6.1]
  def change
    change_column_null  :users, :role, false, 0
  end
end
