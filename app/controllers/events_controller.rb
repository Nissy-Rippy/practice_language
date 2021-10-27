class EventsController < ApplicationController
  def update
    event = Event.find(params(:id))
    @events = Event.where(uesr_id: current_user.id)
    event.update(event_params)
  end

  def destroy
    @user = User.find(params[:id])
    event = Event.find(params(:id))
    event.destroy
    redirect_to user_path(@user)
  end

  def create
    @event = Event.new(params)
    @event.save!
    @events = Event.where(user_id: current_user.id)
  end

private

  def event_params
    params.require(:event).permit(:title,:end,:start,:user_id,:body)
  end

end
