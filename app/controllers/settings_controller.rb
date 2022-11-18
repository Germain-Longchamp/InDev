class SettingsController < ApplicationController
    before_action :authenticate_user!

    def index 
        @users_role = ['Account', 'Développeur', 'Designer', 'Marketing']

        @developer_users = User.where(:company_id => current_user.company_id).where('id != ?', current_user.id).where('role = ?', 'Développeur').order('users.email DESC')
        @marketing_users = User.where(:company_id => current_user.company_id).where('id != ?', current_user.id).where('role = ?', 'Marketing').order('users.email DESC')
        @designer_users = User.where(:company_id => current_user.company_id).where('id != ?', current_user.id).where('role = ?', 'Designer').order('users.email DESC')
        @account_users = User.where(:company_id => current_user.company_id).where('id != ?', current_user.id).where('role = ?', 'Account').order('users.email DESC')

        @user = User.new
    end
end
