class ClientsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_client, only: %i[ show edit update destroy ]

    # GET /clients or /clients.json
    def index
        #queryDesign = request.query_parameters[:design]

        # Get All Clients from Current_User's Company
        @clients = Client.where(:company_id => current_user.company_id).order('name')    

        #if queryDesign.present?
        #    if queryDesign == 'true'
        #        @clients = Client.left_joins(:designs).where('designs.id IS NOT NULL').distinct.order('name')  
        #    end
        #end

        @client = Client.new
    end

    # GET /clients/1 or /clients/1.json
    def show    
        @client = Client.find(params[:id])
        @clients = Client.where(:company_id => current_user.company_id).order('name')   
        
        @design = Design.new
        @designs = Design.where(:company_id => current_user.company_id, :client_id => @client.id).all
    end

    # GET /clients/new
    def new
        @client = Client.new
    end

    # GET /clients/1/edit
    def edit
    end

    # POST /clients or /clients.json
    def create
        @client = Client.new(client_params)
        @client.company_id = current_user.company_id

        respond_to do |format|
            if @client.save
                format.js
                format.html { redirect_to clients_path, notice: "Client was successfully created." }
                format.json { render :show, status: :created, location: @client }
            else
                format.html { render :new, status: :unprocessable_entity }
                format.json { render json: @client.errors, status: :unprocessable_entity }
            end
        end
    end

    # PATCH/PUT /clients/1 or /clients/1.json
    def update
        respond_to do |format|
            if @client.update(client_params)
                format.html { redirect_to @client, notice: "Client was successfully updated." }
                format.json { render :show, status: :ok, location: @client }
            else
                format.html { render :edit, status: :unprocessable_entity }
                format.json { render json: @client.errors, status: :unprocessable_entity }
            end
        end
    end

    # DELETE /clients/1 or /clients/1.json
    def destroy
        @client.destroy
        respond_to do |format|
            format.js
            format.html { redirect_to clients_url, notice: "Client was successfully destroyed." }
            format.json { head :no_content }
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.require(:client).permit(:name, :company_id)
    end
end
