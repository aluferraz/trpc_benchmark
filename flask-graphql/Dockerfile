FROM python:3
RUN mkdir -p /app
WORKDIR /app
RUN pip install flask ariadne flask-sqlalchemy flask-cors psycopg2  flask-cors
COPY . .
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
