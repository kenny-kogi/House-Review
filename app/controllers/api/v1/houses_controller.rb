module Api
    module V1
        class HousesController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                houses = House.all

                render json: HouseSerializer.new(houses, options).serialized_json
            end

            def show
                # byebug
                house = House.find_by(slug: params[:id])
                # byebug
                render json: HouseSerializer.new(house, options).serialized_json
            end

            def create
                house = House.new(house_params)
                
                if house.save
                    render json: HouseSerializer.new(house).serialized_json
                else
                    render json: { error: house.errors.message }, status: 422

                end
            end

            def update
                house = House.find_by(slug: params[:id])
                
                if house.update(house_params)
                    render json: AirlineSerializer.new(house, options).serialized_json
                else
                    render json: { error: house.errors.message }, status: 422
                end
            end

            def destroy
                house = House.find_by(slug: params[:id])
                
                if house.destroy
                    head :no_content
                else
                    render json: { error: house.errors.message }, status: 422
                end
            end

            private
            def house_params
                params.require(:house).permit(:name, :image_url)
            end

            def options
                @options ||= {include: %i[reviews]}
            end
        end
    end 
end