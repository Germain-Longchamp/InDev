class UsersController < ApplicationController
  before_action :set_user, only: %i[ edit update destroy ]

  def index
    @users = User.all
  end

  # GET /users/new
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def profile
    @user = current_user
  end

  def edit
    @user = User.find(params[:id])

    @users_role = ['Account', 'Développeur', 'Designer', 'Marketing']
  end

  # POST /users or /users.json
  def create
    @user = User.new(user_params)
    @user.company_id = current_user.company_id
    
    respond_to do |format|
      if @user.save
        format.js
        format.json { render json: @user.id }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to settings_path, notice: 'Utilisateur Mis à jour.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy

    respond_to do |format|
      format.js
      format.json { head :no_content }
    end
  end

 private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :company_id, :role)
  end
end
