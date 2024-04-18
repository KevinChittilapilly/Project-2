from django.db import models

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100)
    instructor_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField()
    url = models.URLField()
    image = models.ImageField(upload_to='course_images')

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    interactive_mode = models.BooleanField(default=False)