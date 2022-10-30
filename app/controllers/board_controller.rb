class BoardController < ApplicationController
    before_action :authenticate_user!

    def index 
        @clients_company = Client.where(:company_id => current_user.company_id).all
    end
end
