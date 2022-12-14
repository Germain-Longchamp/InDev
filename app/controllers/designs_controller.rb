class DesignsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_design, only: %i[ show edit update destroy ]

  # GET /designs or /designs.json
  def index
    @designs = Design.where(:company_id => current_user.company_id).order('designs.created_at DESC')
    @clients = Client.where(:company_id => current_user.company_id).order('name')
    #.order('name')

    @design = Design.new
  end

  # GET /designs/1 or /designs/1.json
  def show
  end

  # GET /designs/new
  def new
    @design = Design.new
  end

  # GET /designs/1/edit
  def edit
  end

  # POST /designs or /designs.json
  def create
    @design = Design.new(design_params)
    @design.company_id = current_user.company_id
    @design.client_id = params[:design][:client_id]
    @design.user_id = params[:design][:user_id]
    
    respond_to do |format|
      if @design.save
        format.js
        format.html { redirect_to client_path(@design.client_id), notice: "Design was successfully created." }
        format.json { render :show, status: :created, location: @design }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @design.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /designs/1 or /designs/1.json
  def update
    respond_to do |format|
      if @design.update(design_params)
        format.html { redirect_to design_url(@design), notice: "Design was successfully updated." }
        format.json { render :show, status: :ok, location: @design }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @design.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /designs/1 or /designs/1.json
  def destroy
    @design.destroy

    respond_to do |format|
      format.js
      format.html { redirect_to client_path(@design.client_id), notice: "Design was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_design
      @design = Design.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def design_params
      params.require(:design).permit(:name, :url, :company_id, :client_id, :user_id)
    end
end
