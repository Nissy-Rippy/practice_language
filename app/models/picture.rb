class Picture < ApplicationRecord
  #いろいろなvalidatesのコードの練習
validates :email, format: { with: /\A[a-zA-Z]+\z/}
validates :number, inclusion: { in: (1..50)}
validates :name, length: { maximum: 20 }
validates :name, length: { minimum: 5 }, allow_nil: true
validates :name, uniqueness: true
validates :name, length: { minimum: 5 }, allow_blank: true
validates :email, presence: true, on: :create
validates :email, format:{ with: /\A[a-zA-Z]+\z/,
    message: "英文字のみが使用できます" }
end
