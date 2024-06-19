# models.py
from sqlalchemy import Column, Integer, String, ForeignKey, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # e.g., 'student', 'teacher', 'admin'

class Student(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String, nullable=False)
    grade = Column(String, nullable=False)
    user = relationship("User")

class Teacher(Base):
    __tablename__ = 'teachers'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    user = relationship("User")

# Create SQLite database
engine = create_engine('sqlite:///school.db', pool_pre_ping=True)
Base.metadata.create_all(engine)
