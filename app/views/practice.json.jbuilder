json.text "テキスト"
=>{"text": "テキスト"}

json.set! :text, "テキスト"
=>{"text": "テキスト"}

json.text1 "テキスト1"
json.text2 "テキスト2"

=> {"text1": "テキスト１","text2": "テキスト2"}

json.set! :tweet do
json.text1 "テキスト１"
end
=>{tweet: {"text1": "テキスト１"}}

json.set! :text1 do
json.text2 "テキスト２"
end

json.set! :text3 do
joson.text4 "テキスト４"
end
=>{tweet1: {"text2": "テキスト２"},tweet3: {"text4": "テキスト４}}



json.text @text.tweet
=>{"text1","テキスト１"}

json.text @tweet.text
json.title @tweet.title
=>{"text": "テキスト１", "title","タイトル１"}

==>
json.text @tweet, :text, :title
=>{ "text": "テキスト１","title"： "タイトル１"}

json.tweet do |tweet|
tweet.text @tweet.text
tweet.title @tweet.title
{tweet: {"text": "テキスト１","title","タイトル１"}}


json.extract! @tweet, :text, :title

{"text": "テキスト", "title": "タイトル"}

json.tweet do
json.extract! @tweet, :text, :title
end
=> {tweet: {"text": "テキスト１","title": "タイトル１"}}

text_hash = { text: "テキスト" }

json.tweet do
json.title "タイトル"
json.merge! text_hash
end

json.merge! @tweet.attributes

{"tweet": {"id": 1, "text": "テキスト1", "title": "タイトル1", "user_id": 1} }

配列で回してくれる。
json.array! @tweets, :text,:title
=> [{"text": "テキスト１", "title": "タイトル１"}, {"text": "テキスト２", "title": "タイトル２"}]

＝
json.array! @tweets do |text|
  json.text @tweet.text
  json.title @tweet.title
end

json.tweet do
 json.array! @tweets, :text, :title
end