class BoardController < ApplicationController
    before_action :authenticate_user!

    def index 
        @clients = Client.where(:company_id => current_user.company_id)
        @designs = Design.where(:company_id => current_user.company_id)
        @users = User.where(:company_id => current_user.company_id)
    end
end
