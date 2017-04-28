class HelloWorldController < ApplicationController
  def show
    render json: { hello_world: "Hello World!" }
  end
end
