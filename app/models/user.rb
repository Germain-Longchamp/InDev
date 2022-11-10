class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  belongs_to :company
  has_many :designs

  def fullname
    if self.firstname.present? and self.lastname.present?
      return self.firstname + ' ' + self.lastname
    else
      return self.email
    end
  end
end
