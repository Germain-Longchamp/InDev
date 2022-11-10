class SettingsController < ApplicationController
    before_action :authenticate_user!

    def index 
        @users = User.where(:company_id => current_user.company_id)
        @user = User.new
    end
end
