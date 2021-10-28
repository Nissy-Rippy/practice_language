class EventsController < ApplicationController
  def update
    event = Event.find(params(:id))
    @events = Event.where(uesr_id: current_user.id)
    event.update(event_params)
  end

  def destroy
      begin
        @user = User.find(params[:id])
        event = Event.find(params(:id))
        event.destroy
      rescue => error
        flash[:notice] = "削除に失敗しました！！"
      ensure
        redirect_to user_path(@user)
      end
  end

  def create
    @event = Event.new
    begin
      @event.save!
    rescue Zerodivision
      puts "0で除算しました"
    rescue NoMethodError
      puts "ネーミングが間違えています。"
    ensure
      @events = Event.where(user_id: current_user.id)
    end
  end

private

  def event_params
    params.require(:event).permit(:title,:end,:start,:user_id,:body)
  end

end
