class BoardController < ApplicationController
    before_action :authenticate_user!

    def index 
        @clients = Client.where(:company_id => current_user.company_id)
        @designs = Design.where(:company_id => current_user.company_id).order('designs.created_at DESC')
        @users = User.where(:company_id => current_user.company_id)
    end
end
