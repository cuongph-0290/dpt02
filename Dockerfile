FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /dpt02
WORKDIR /dpt02
ADD requirements.txt /dpt02/
RUN pip install -r requirements.txt
ADD . /dpt02/
