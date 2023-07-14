# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Copy the backend code into the container
COPY ./backend /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port on which Django runs (default is 8000)
EXPOSE 8000

# Define the command to run when the container starts
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
