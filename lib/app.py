# app.py
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker
from models import User, Student, Teacher, engine

app = Flask(__name__)
api = Api(app)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
       "origins": "*"
    }
})

Session = sessionmaker(bind=engine)
session = Session()

class Register(Resource):
    def post(self):
        data = request.get_json()
        new_user = User(username=data['username'], password=data['password'], role=data['role'])
        session.add(new_user)
        session.commit()
        if new_user.role == 'student':
            new_student = Student(user_id=new_user.id, name=data['name'], grade=data['grade'])
            session.add(new_student)
        elif new_user.role == 'teacher':
            new_teacher = Teacher(user_id=new_user.id, name=data['name'], subject=data['subject'])
            session.add(new_teacher)
        session.commit()
        return jsonify({'message': 'User registered successfully'})

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = session.query(User).filter_by(username=data['username'], password=data['password']).first()
        if user:
            return jsonify({'message': 'Login successful', 'role': user.role})
        return jsonify({'message': 'Invalid credentials'}), 401

api.add_resource(Register, '/register')
api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(debug=True)
